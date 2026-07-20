#!/usr/bin/env bash
# vault-config.sh — reads vault.config.yaml, exports config vars (bash 3.2 compatible)
# Source this after WIKI_ROOT is set.

_VAULT_CONFIG="${WIKI_ROOT}/vault.config.yaml"

if [ ! -f "$_VAULT_CONFIG" ]; then
    echo "⚠️  vault.config.yaml not found at $_VAULT_CONFIG" >&2
    echo "   Run: cp engine/vault.config.template.yaml vault.config.yaml" >&2
    return 1
fi

_vc_py() {
    python3 - "$_VAULT_CONFIG" << 'PYEOF'
import sys, yaml, json
cfg = yaml.safe_load(open(sys.argv[1]))
w = cfg.get('wiki', {})
p = cfg.get('pipeline', {})
e = cfg.get('embedding', {})
v = cfg.get('vault', {})

print(f"VAULT_NAME={json.dumps(v.get('name',''))}")
print(f"WIKI_DIR={json.dumps(p.get('wiki_dir', w.get('dir','wiki')))}")
print(f"TRACKING_DIR={json.dumps(p.get('tracking_dir','pipeline/tracking'))}")
print(f"INDEX_DIR={json.dumps(p.get('index_dir','pipeline/index'))}")
print(f"RECONSTRUCTED_DIR={json.dumps(p.get('reconstructed_dir','pipeline/reconstructed'))}")
print(f"STAGE_OUTPUT_DIR={json.dumps(p.get('stage_output_dir','pipeline/stage-output'))}")
print(f"PROMPTS_DIR={json.dumps(p.get('prompts_dir','pipeline/prompts'))}")
print(f"EMBED_MODEL={json.dumps(e.get('model','mxbai-embed-large'))}")
print(f"EMBED_HOST={json.dumps(e.get('host','http://localhost:11434'))}")
print(f"FALLBACK_SUBDOMAIN={json.dumps(w.get('fallback_subdomain','Unrecognized'))}")
# Export domains as space-separated string (bash 3.2: no array export)
domains = w.get('domains', [])
print(f"VALID_DOMAINS={json.dumps(' '.join(domains))}")
a = cfg.get('agent', {})
print(f"AGENT_MODEL={json.dumps(a.get('model','auto'))}")
sm = a.get('stage_models', {}) or {}
for stage, model in sm.items():
    key = stage.replace('-','_').upper()
    print(f"AGENT_MODEL_{key}={json.dumps(model)}")
PYEOF
}

eval "$(_vc_py)"

# Resolve relative paths to absolute
WIKI_DIR="$WIKI_ROOT/$WIKI_DIR"
TRACKING_DIR="$WIKI_ROOT/$TRACKING_DIR"
INDEX_DIR="$WIKI_ROOT/$INDEX_DIR"
RECONSTRUCTED_DIR="$WIKI_ROOT/$RECONSTRUCTED_DIR"
STAGE_OUTPUT_DIR="$WIKI_ROOT/$STAGE_OUTPUT_DIR"
PROMPTS_DIR="$WIKI_ROOT/$PROMPTS_DIR"

export VAULT_NAME WIKI_DIR TRACKING_DIR INDEX_DIR RECONSTRUCTED_DIR \
       STAGE_OUTPUT_DIR PROMPTS_DIR EMBED_MODEL EMBED_HOST \
       FALLBACK_SUBDOMAIN VALID_DOMAINS AGENT_MODEL
# Note: AGENT_MODEL_<STAGE> vars are exported individually by eval above
