#!/usr/bin/env python3
"""
check-ontology.py — Layer 7 Compilation validator
Checks all wiki pages against ontology/relationships.md rules.
Exit code 0 = PASS. Exit code 1 = violations found.
"""
import os, re, glob, sys, json
from collections import defaultdict

WIKI_ROOT = os.environ.get("WIKI_ROOT",
          os.path.abspath(os.path.join(os.path.dirname(__file__), "../../..")))
WIKI      = os.path.join(WIKI_ROOT, "wiki")
EXCLUDE   = {"templates", "graph", "compiled", "updates"}

ALLOWED_EDGES = {
    ("Axiom",    "Entity"):    "defines",
    ("Axiom",    "Process"):   "constrains",
    ("Entity",   "Process"):   "participates_in",
    ("Process",  "Pattern"):   "instance_of",
    ("Pattern",  "Method"):    "implemented_by",
    ("Decision", "Method"):    "selects",
    ("Method",   "Concept"):   "abstracted_into",
    ("Decision", "Rule"):      "justified_by",
    ("Rule",     "Concept"):   "abstracted_into",
    ("Concept",  "Pattern"):   "generalized_into",
    ("Concept",  "Overview"):  "summarized_into",
    ("Overview", "Synthesis"): "integrated_into",
    ("Decision", "Decision"):  "depends_on",
    ("Entity",   "Entity"):    "relates_to",
    ("Process",  "Process"):   "follows",
    ("Pattern",  "Pattern"):   "specializes",
}

VALID_TYPES   = {"Axiom","Entity","Process","Pattern","Method","Decision","Rule",
                 "Concept","Overview","Synthesis","Index","Update"}
REQUIRED_FM   = {"type", "domain"}
SKIP_TYPES    = {"Index", "Update"}

# Types that Live in /wiki/synthesis/ exclusively
SYNTHESIS_DIR = "synthesis"

def norm_type(t):
    MAP = {"Wiki Article":"Overview","reference":"Overview","Reference":"Overview",
           "Technical-Reference":"Overview","Knowledge":"Overview"}
    return MAP.get(t, t)

def parse():
    pages = {}
    for f in sorted(glob.glob(WIKI + "/**/*.md", recursive=True)):
        parts = f.replace(WIKI + "/", "").split("/")
        if not parts or parts[0] in EXCLUDE: continue
        slug = os.path.splitext(os.path.basename(f))[0]
        if slug == "index": continue
        content = open(f, encoding="utf-8", errors="replace").read()
        fm, body = {}, content
        m = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
        if m:
            for line in m.group(1).splitlines():
                kv = re.match(r'^(\w[\w-]*):\s*(.+)$', line)
                if kv: fm[kv.group(1)] = kv.group(2).strip()
            body = content[m.end():]
        domain = parts[0] if len(parts) > 1 else "root"
        ptype  = norm_type(fm.get("type", "MISSING"))
        # Extract outbound links only — skip ← [[slug]] inbound annotations
        outbound_links = [
            os.path.splitext(os.path.basename(l))[0]
            for l in re.findall(r'(?<!←\s)\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]', body)
            if not re.search(r'←\s*\[\[' + re.escape(l) + r'\]\]', body)
        ]
        # Simpler: extract all links, then remove those preceded by ←
        all_links  = re.findall(r'\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]', body)
        inbound_re = re.compile(r'←\s*\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]')
        inbound_targets = {os.path.splitext(os.path.basename(l))[0]
                           for l in inbound_re.findall(body)}
        links = [os.path.splitext(os.path.basename(l))[0]
                 for l in all_links
                 if os.path.splitext(os.path.basename(l))[0] not in inbound_targets]
        pages[slug] = {"domain": domain, "type": ptype, "fm": fm, "links": links, "file": f}
    return pages

def audit(pages):
    errors = defaultdict(list)
    slug_files = defaultdict(list)
    for p in pages.values():
        slug_files[os.path.splitext(os.path.basename(p["file"]))[0]].append(p["file"])

    for slug, p in pages.items():
        t, dom = p["type"], p["domain"]
        if t in SKIP_TYPES: continue

        # R1: Missing or invalid type
        if t == "MISSING":
            errors["R1_MISSING_TYPE"].append(f"{slug} (/{dom}/)")
        elif t not in VALID_TYPES:
            errors["R1_INVALID_TYPE"].append(f"{slug}: '{t}'")

        # R2: Required frontmatter fields
        for field in REQUIRED_FM:
            if field not in p["fm"]:
                errors["R2_MISSING_FM"].append(f"{slug}: missing '{field}'")

        # R3: Synthesis pages must live in /wiki/synthesis/
        if t == "Synthesis" and dom != SYNTHESIS_DIR:
            errors["R3_SYNTHESIS_WRONG_LOC"].append(
                f"{slug} in /{dom}/ — must be /{SYNTHESIS_DIR}/")

        # R4: Non-Synthesis pages must NOT live in /wiki/synthesis/
        if dom == SYNTHESIS_DIR and t not in ("Synthesis","Index","Update","MISSING"):
            errors["R4_WRONG_TYPE_IN_SYNTHESIS"].append(f"{slug}: type={t}")

        # R5: Forbidden — Synthesis with explicit outbound semantic edge declarations
        # Only checks "**label** → [[slug]]" patterns; prose wikilinks are informational
        if t == "Synthesis":
            content = open(p["file"], encoding="utf-8").read()
            explicit_out = re.findall(r'\*\*\w[\w_ -]*\*\*\s*→\s*\[\[([^\]]+)\]\]', content)
            explicit_out = [os.path.splitext(os.path.basename(l))[0] for l in explicit_out]
            real_out = [l for l in explicit_out if l in pages and pages[l]["type"] not in SKIP_TYPES]
            if real_out:
                errors["R5_SYNTHESIS_OUTBOUND"].append(
                    f"{slug} → {real_out[:3]}{'...' if len(real_out)>3 else ''}")

        # R6: Forbidden edge TO Axiom (except Meta-domain governs)
        for tgt in p["links"]:
            if tgt not in pages: continue
            if pages[tgt]["type"] == "Axiom" and not (dom == "Meta" and t == "Axiom"):
                errors["R6_EDGE_TO_AXIOM"].append(f"{slug}({t}) → {tgt}(Axiom)")

        # R7: Invalid edge type combination in wikilinks
        for tgt in p["links"]:
            if tgt not in pages or tgt == slug: continue
            src_t = t; tgt_t = pages[tgt]["type"]
            if src_t == "Synthesis": continue   # caught by R5
            if tgt_t == "Axiom": continue       # caught by R6
            if dom == "Meta" and src_t == "Axiom": continue  # governs
            if (src_t, tgt_t) not in ALLOWED_EDGES and tgt_t not in SKIP_TYPES:
                errors["R7_INVALID_EDGE_COMBO"].append(
                    f"{slug}({src_t}) → {tgt}({tgt_t})")

        # R8: Axiom with zero outbound wiki links
        if t == "Axiom" and not any(l in pages for l in p["links"]):
            errors["R8_AXIOM_NO_OUTBOUND"].append(slug)

        # R9: Orphan node — no outbound links to known pages
        if t not in ("Index","Update","Synthesis"):
            if not any(l in pages for l in p["links"]):
                errors["R9_ORPHAN"].append(f"{slug} ({t})")

    # R10: Duplicate slugs across directories
    for slug, files in slug_files.items():
        if len(files) > 1:
            short = [f.replace(WIKI+"/","") for f in files]
            errors["R10_DUPLICATE_SLUG"].append(f"{slug}: {short}")

    # R11: Synthesis page with no inbound Overview links
    for slug, p in pages.items():
        if p["domain"] == SYNTHESIS_DIR and p["type"] == "Synthesis":
            inbound = [s for s, pp in pages.items() if slug in pp["links"]]
            if not inbound:
                errors["R11_SYNTHESIS_NO_INBOUND"].append(slug)

    return errors

def main():
    pages  = parse()
    errors = audit(pages)
    total  = sum(len(v) for v in errors.values())

    SEVERITY = {
        "R1_MISSING_TYPE":         "BLOCKING",
        "R1_INVALID_TYPE":         "BLOCKING",
        "R2_MISSING_FM":           "BLOCKING",
        "R3_SYNTHESIS_WRONG_LOC":  "BLOCKING",
        "R4_WRONG_TYPE_IN_SYNTHESIS": "BLOCKING",
        "R5_SYNTHESIS_OUTBOUND":   "BLOCKING",
        "R6_EDGE_TO_AXIOM":        "WARN",
        "R7_INVALID_EDGE_COMBO":   "WARN",
        "R8_AXIOM_NO_OUTBOUND":    "WARN",
        "R9_ORPHAN":               "INFO",
        "R10_DUPLICATE_SLUG":      "BLOCKING",
        "R11_SYNTHESIS_NO_INBOUND":"WARN",
    }

    blocking = sum(len(v) for k, v in errors.items() if SEVERITY.get(k) == "BLOCKING")
    warn     = sum(len(v) for k, v in errors.items() if SEVERITY.get(k) == "WARN")
    info     = sum(len(v) for k, v in errors.items() if SEVERITY.get(k) == "INFO")

    print(f"Ontology Compliance Report — {len(pages)} pages scanned")
    print(f"  BLOCKING: {blocking}  WARN: {warn}  INFO: {info}  TOTAL: {total}\n")

    for rule, items in sorted(errors.items()):
        sev = SEVERITY.get(rule, "WARN")
        print(f"[{sev}] {rule} — {len(items)} violations")
        for item in items[:6]:
            print(f"  • {item}")
        if len(items) > 6:
            print(f"  ... and {len(items)-6} more")
        print()

    if blocking > 0:
        print(f"RESULT: FAIL — {blocking} blocking violations")
        sys.exit(1)
    else:
        print("RESULT: PASS (warnings present — see above)")
        sys.exit(0)

if __name__ == "__main__":
    main()
