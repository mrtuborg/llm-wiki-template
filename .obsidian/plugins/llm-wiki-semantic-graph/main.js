var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LLMWikiSemanticGraph
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x3) {
  return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j = 0; j < m2; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m2; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m2 = groups.length; ++j < m2; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a2, b) {
    return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
  }
  for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m2 = groups.length; j < m2; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m2 = groups.length; j < m2; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m2 = on.length, o; j < m2; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m2 = on.length; j < m2; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m2 = on.length, o; j < m2; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m2 = groups.length; j < m2; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-quadtree/src/add.js
function add_default(d) {
  const x3 = +this._x.call(null, d), y3 = +this._y.call(null, d);
  return add(this.cover(x3, y3), x3, y3, d);
}
function add(tree, x3, y3, d) {
  if (isNaN(x3) || isNaN(y3)) return tree;
  var parent, node = tree._root, leaf = { data: d }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x3 === xp && y3 === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
  var d, i, n = data.length, x3, y3, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (i = 0; i < n; ++i) {
    if (isNaN(x3 = +this._x.call(null, d = data[i])) || isNaN(y3 = +this._y.call(null, d))) continue;
    xz[i] = x3;
    yz[i] = y3;
    if (x3 < x0) x0 = x3;
    if (x3 > x1) x1 = x3;
    if (y3 < y0) y0 = y3;
    if (y3 > y1) y1 = y3;
  }
  if (x0 > x1 || y0 > y1) return this;
  this.cover(x0, y0).cover(x1, y1);
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }
  return this;
}

// node_modules/d3-quadtree/src/cover.js
function cover_default(x3, y3) {
  if (isNaN(x3 = +x3) || isNaN(y3 = +y3)) return this;
  var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x3)) + 1;
    y1 = (y0 = Math.floor(y3)) + 1;
  } else {
    var z = x1 - x0 || 1, node = this._root, parent, i;
    while (x0 > x3 || x3 >= x1 || y0 > y3 || y3 >= y1) {
      i = (y3 < y0) << 1 | x3 < x0;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0:
          x1 = x0 + z, y1 = y0 + z;
          break;
        case 1:
          x0 = x1 - z, y1 = y0 + z;
          break;
        case 2:
          x1 = x0 + z, y0 = y1 - z;
          break;
        case 3:
          x0 = x1 - z, y0 = y1 - z;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

// node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}

// node_modules/d3-quadtree/src/extent.js
function extent_default(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}

// node_modules/d3-quadtree/src/quad.js
function quad_default(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

// node_modules/d3-quadtree/src/find.js
function find_default(x3, y3, radius) {
  var data, x0 = this._x0, y0 = this._y0, x1, y1, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q, i;
  if (node) quads.push(new quad_default(node, x0, y0, x32, y32));
  if (radius == null) radius = Infinity;
  else {
    x0 = x3 - radius, y0 = y3 - radius;
    x32 = x3 + radius, y32 = y3 + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    if (!(node = q.node) || (x1 = q.x0) > x32 || (y1 = q.y0) > y32 || (x22 = q.x1) < x0 || (y22 = q.y1) < y0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2;
      quads.push(
        new quad_default(node[3], xm, ym, x22, y22),
        new quad_default(node[2], x1, ym, xm, y22),
        new quad_default(node[1], xm, y1, x22, ym),
        new quad_default(node[0], x1, y1, xm, ym)
      );
      if (i = (y3 >= ym) << 1 | x3 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } else {
      var dx = x3 - +this._x.call(null, node.data), dy = y3 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x3 - d, y0 = y3 - d;
        x32 = x3 + d, y32 = y3 + d;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3-quadtree/src/remove.js
function remove_default2(d) {
  if (isNaN(x3 = +this._x.call(null, d)) || isNaN(y3 = +this._y.call(null, d))) return this;
  var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x3, y3, xm, ym, right, bottom, i, j;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i] = next : delete parent[i];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

// node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}

// node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size;
    while (node = node.next);
  });
  return size;
}

// node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new quad_default(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new quad_default(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new quad_default(child, x0, y0, xm, ym));
    }
  }
  return this;
}

// node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new quad_default(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new quad_default(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new quad_default(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

// node_modules/d3-quadtree/src/x.js
function defaultX(d) {
  return d[0];
}
function x_default(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

// node_modules/d3-quadtree/src/y.js
function defaultY(d) {
  return d[1];
}
function y_default(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

// node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x3, y3) {
  var tree = new Quadtree(x3 == null ? defaultX : x3, y3 == null ? defaultY : y3, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x3, y3, x0, y0, x1, y1) {
  this._x = x3;
  this._y = y3;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy = { data: leaf.data }, next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{ source: node, target: copy._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });
        else node.target[i] = leaf_copy(child);
      }
    }
  }
  return copy;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default;
treeProto.find = find_default;
treeProto.remove = remove_default2;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default2;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;

// node_modules/d3-force/src/constant.js
function constant_default2(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-force/src/jiggle.js
function jiggle_default(random) {
  return (random() - 0.5) * 1e-6;
}

// node_modules/d3-force/src/collide.js
function x(d) {
  return d.x + d.vx;
}
function y(d) {
  return d.y + d.vy;
}
function collide_default(radius) {
  var nodes, radii, random, strength = 1, iterations = 1;
  if (typeof radius !== "function") radius = constant_default2(radius == null ? 1 : +radius);
  function force() {
    var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x3 = xi - data.x - data.vx, y3 = yi - data.y - data.vy, l = x3 * x3 + y3 * y3;
          if (l < r * r) {
            if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
            if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x3 *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y3 *= l) * r;
            data.vx -= x3 * (r = 1 - r);
            data.vy -= y3 * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }
  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : radius;
  };
  return force;
}

// node_modules/d3-force/src/link.js
function index(d) {
  return d.index;
}
function find2(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
function link_default(links) {
  var id2 = index, strength = defaultStrength, strengths, distance = constant_default2(30), distances, nodes, count, bias, random, iterations = 1;
  if (links == null) links = [];
  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }
  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x3, y3, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x3 = target.x + target.vx - source.x - source.vx || jiggle_default(random);
        y3 = target.y + target.vy - source.y - source.vy || jiggle_default(random);
        l = Math.sqrt(x3 * x3 + y3 * y3);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x3 *= l, y3 *= l;
        target.vx -= x3 * (b = bias[i]);
        target.vy -= y3 * b;
        source.vx += x3 * (b = 1 - b);
        source.vy += y3 * b;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, m2 = links.length, nodeById = new Map(nodes.map((d, i2) => [id2(d, i2, nodes), d])), link;
    for (i = 0, count = new Array(n); i < m2; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find2(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find2(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }
    for (i = 0, bias = new Array(m2); i < m2; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }
    strengths = new Array(m2), initializeStrength();
    distances = new Array(m2), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };
  force.id = function(_) {
    return arguments.length ? (id2 = _, force) : id2;
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initializeStrength(), force) : strength;
  };
  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant_default2(+_), initializeDistance(), force) : distance;
  };
  return force;
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames2(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c2; i < n; ++i) {
    if ((c2 = type[i]).name === name) {
      return c2.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var dispatch_default2 = dispatch;

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-force/src/lcg.js
var a = 1664525;
var c = 1013904223;
var m = 4294967296;
function lcg_default() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}

// node_modules/d3-force/src/simulation.js
function x2(d) {
  return d.x;
}
function y2(d) {
  return d.y;
}
var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));
function simulation_default(nodes) {
  var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch_default2("tick", "end"), random = lcg_default();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations) {
    var i, n = nodes.length, node;
    if (iterations === void 0) iterations = 1;
    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },
    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },
    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },
    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },
    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },
    force: function(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function(x3, y3, radius) {
      var i = 0, n = nodes.length, dx, dy, d2, node, closest;
      if (radius == null) radius = Infinity;
      else radius *= radius;
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x3 - node.x;
        dy = y3 - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }
      return closest;
    },
    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

// node_modules/d3-force/src/manyBody.js
function manyBody_default() {
  var nodes, node, random, alpha, strength = constant_default2(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, x2, y2).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node2;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node2 = nodes[i], strengths[node2.index] = +strength(node2, i, nodes);
  }
  function accumulate(quad) {
    var strength2 = 0, q, c2, weight = 0, x3, y3, i;
    if (quad.length) {
      for (x3 = y3 = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c2 = Math.abs(q.value))) {
          strength2 += q.value, weight += c2, x3 += c2 * q.x, y3 += c2 * q.y;
        }
      }
      quad.x = x3 / weight;
      quad.y = y3 / weight;
    } else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do
        strength2 += strengths[q.data.index];
      while (q = q.next);
    }
    quad.value = strength2;
  }
  function apply(quad, x1, _, x22) {
    if (!quad.value) return true;
    var x3 = quad.x - node.x, y3 = quad.y - node.y, w = x22 - x1, l = x3 * x3 + y3 * y3;
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
        if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x3 * quad.value * alpha / l;
        node.vy += y3 * quad.value * alpha / l;
      }
      return true;
    } else if (quad.length || l >= distanceMax2) return;
    if (quad.data !== node || quad.next) {
      if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
      if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }
    do
      if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x3 * w;
        node.vy += y3 * w;
      }
    while (quad = quad.next);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : strength;
  };
  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };
  return force;
}

// node_modules/d3-force/src/x.js
function x_default2(x3) {
  var strength = constant_default2(0.1), nodes, strengths, xz;
  if (typeof x3 !== "function") x3 = constant_default2(x3 == null ? 0 : +x3);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x3(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : strength;
  };
  force.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : x3;
  };
  return force;
}

// node_modules/d3-force/src/y.js
function y_default2(y3) {
  var strength = constant_default2(0.1), nodes, strengths, yz;
  if (typeof y3 !== "function") y3 = constant_default2(y3 == null ? 0 : +y3);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y3(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : strength;
  };
  force.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : y3;
  };
  return force;
}

// node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default3 = (x3) => () => x3;

// node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x3,
  y: y3,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x3, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default2("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d)) return;
    var touches = event.changedTouches, c2 = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c2, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default3(!!_), drag) : filter2;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default3(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default3(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default3(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m2, l;
  format = (format + "").trim().toLowerCase();
  return (m2 = reHex.exec(format)) ? (l = m2[1].length, m2 = parseInt(m2[1], 16), l === 6 ? rgbn(m2) : l === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a2) {
  if (a2 <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default4 = (x3) => () => x3;

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y3) {
  return a2 = Math.pow(a2, y3), b = Math.pow(b, y3) - a2, y3 = 1 / y3, function(t) {
    return Math.pow(a2 + t * b, y3);
  };
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y3) : constant_default4(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default4(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y3) {
  var color2 = gamma(y3);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a2, b, c2, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b)) a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c2 + b * d) c2 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d * d)) c2 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c2) a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m2.isIdentity ? identity : decompose_default(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s, q) {
    if (a2 !== b) {
      if (a2 - b > 180) b += 360;
      else if (b - a2 > 180) a2 += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s, q) {
    if (a2 !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s = [], q = [];
    a2 = parse(a2), b = parse(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s, q);
    rotate(a2.rotate, b.rotate, s, q);
    skewX(a2.skewX, b.skewX, s, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x3) {
  return ((x3 = Math.exp(x3)) + 1 / x3) / 2;
}
function sinh(x3) {
  return ((x3 = Math.exp(x3)) - 1 / x3) / 2;
}
function tanh(x3) {
  return ((x3 = Math.exp(2 * x3)) - 1) / (x3 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default2("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index: index2,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a2, b) {
  var c2;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c2 = color(b)) ? (b = c2, rgb_default) : string_default)(a2, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m2; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default3() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m2 = groups.length, j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default3,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m2 = groups.length, j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default5 = (x3) => () => x3;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x3, y3) {
  this.k = k;
  this.x = x3;
  this.y = y3;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x3, y3) {
    return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x3) {
    return x3 * this.k + this.x;
  },
  applyY: function(y3) {
    return y3 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x3) {
    return (x3 - this.x) / this.k;
  },
  invertY: function(y3) {
    return (y3 - this.y) / this.k;
  },
  rescaleX: function(x3) {
    return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
  },
  rescaleY: function(y3) {
    return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter2 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default2("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x3, y3, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x3 === "function" ? x3.apply(this, arguments) : x3,
        typeof y3 === "function" ? y3.apply(this, arguments) : y3
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x3, y3, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x3 === "function" ? -x3.apply(this, arguments) : -x3,
        typeof y3 === "function" ? -y3.apply(this, arguments) : -y3
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x3 = p0[0] - p1[0] * transform2.k, y3 = p0[1] - p1[1] * transform2.k;
    return x3 === transform2.x && y3 === transform2.y ? transform2 : new Transform(transform2.k, x3, y3);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a2 = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a2.invert(p).concat(w / a2.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default5(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default5(!!_), zoom) : filter2;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default5(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default5([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// src/main.ts
var VIEW_TYPE = "llm-wiki-semantic-graph";
var NODE_COLORS = {
  axiom: "#4E79A7",
  // steel blue      — invariants
  rule: "#4E79A7",
  // steel blue      — invariants
  entity: "#59A14F",
  // sage green      — objects
  concept: "#76B7B2",
  // slate teal      — ideas
  index: "#BAB0AC",
  // warm gray       — meta
  process: "#F28E2B",
  // warm amber      — actions
  decision: "#E15759",
  // muted red       — choices
  pattern: "#B07AA1",
  // dusty purple    — structures
  overview: "#9C755F",
  // earth brown     — overviews
  synthesis: "#9C755F"
  // earth brown     — synthesis
};
var NODE_SHAPES = {
  axiom: "diamond",
  rule: "diamond",
  // invariants
  process: "square",
  decision: "square",
  // actions
  pattern: "hexagon",
  overview: "hexagon",
  synthesis: "hexagon",
  // structures
  entity: "circle",
  concept: "circle",
  index: "circle"
  // objects
};
var LAYER_ORDER = ["Axiom", "Entity", "Process", "Pattern", "Method", "Concept", "Rule", "Overview", "Decision", "Synthesis"];
var EXCLUDED_PATHS = [
  "wiki/templates/",
  "wiki/graph/",
  "wiki/compiled/",
  "wiki/updates/",
  "wiki/Meta/",
  "pipeline/",
  "schema/",
  "ontology/",
  "domains/",
  "tools/",
  "docs/"
];
var EDGE_RE = /\*\*(\w+)\*\*\s*→\s*\[\[([^\]|]+)/g;
var DEFAULT_SETTINGS = {
  showNodeLabels: true,
  showEdgeLabels: true,
  showArrows: true,
  sidebarOpen: false,
  hiddenTypes: [],
  linkDist: 60,
  chargeStr: 120,
  gravityStr: 0.03,
  searchQuery: "",
  selectedDomain: null
};
var SemanticGraphView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.nodes = [];
    this.edges = [];
    this.analytics = null;
    this.sim = null;
    // visibility state
    this.showNodeLabels = true;
    this.showEdgeLabels = true;
    this.showArrows = true;
    this.sidebarOpen = false;
    this.hiddenTypes = /* @__PURE__ */ new Set();
    this.showOrphans = false;
    // orphan nodes hidden by default
    this.selectedId = null;
    this.searchQuery = "";
    this.selectedDomain = null;
    this._labelsUserSet = false;
    // true once user explicitly toggles label button
    // physics state
    this.linkDist = 60;
    this.chargeStr = 120;
    this.gravityStr = 0.03;
    // zoom state — persisted across refreshes
    this.savedTransform = null;
    // pending rAF handle — cancelled before each rebuild
    this.pendingRaf = null;
    // guard against concurrent async refreshes
    this.isRefreshing = false;
    // live D3 selections
    this.selNodeEl = null;
    this.selEdgeLine = null;
    this.selEdgeLabel = null;
    this.selNodeLabel = null;
    this.focusNodeFn = null;
    this.svgEl = null;
    // layer row references for toggle updates (no full sidebar rebuild needed)
    this.layerRowMap = /* @__PURE__ */ new Map();
    // adjacency for dim-on-select
    this.neighborSet = /* @__PURE__ */ new Set();
    // auto-refresh
    this.refreshTimer = null;
    this.plugin = plugin;
  }
  async loadSettings() {
    var _a;
    const data = await this.plugin.loadData();
    if (!data) return;
    const s = { ...DEFAULT_SETTINGS, ...data };
    this.showNodeLabels = s.showNodeLabels;
    this.showEdgeLabels = s.showEdgeLabels;
    this.showArrows = s.showArrows;
    this.sidebarOpen = s.sidebarOpen;
    this.hiddenTypes = new Set(s.hiddenTypes);
    this.linkDist = s.linkDist;
    this.chargeStr = s.chargeStr;
    this.gravityStr = s.gravityStr;
    this.searchQuery = s.searchQuery;
    this.selectedDomain = (_a = s.selectedDomain) != null ? _a : null;
  }
  saveSettings() {
    const s = {
      showNodeLabels: this.showNodeLabels,
      showEdgeLabels: this.showEdgeLabels,
      showArrows: this.showArrows,
      sidebarOpen: this.sidebarOpen,
      hiddenTypes: [...this.hiddenTypes],
      linkDist: this.linkDist,
      chargeStr: this.chargeStr,
      gravityStr: this.gravityStr,
      searchQuery: this.searchQuery,
      selectedDomain: this.selectedDomain
    };
    this.plugin.saveData(s);
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Semantic Graph";
  }
  getIcon() {
    return "git-fork";
  }
  async onOpen() {
    await this.loadSettings();
    await this.buildGraph();
    this.render();
    const isWikiFile = (f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex));
    this.registerEvent(this.app.vault.on("modify", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
    this.registerEvent(this.app.vault.on("create", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
    this.registerEvent(this.app.vault.on("delete", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
    this.registerEvent(this.app.vault.on("rename", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
  }
  async onClose() {
    var _a;
    (_a = this.sim) == null ? void 0 : _a.stop();
    if (this.refreshTimer !== null) {
      window.clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    this.isRefreshing = false;
  }
  captureZoom() {
    if (this.svgEl && this.zoomBehavior) {
      const t = this.zoomBehavior.transform(select_default2(this.svgEl));
      this.savedTransform = { k: t.k, x: t.x, y: t.y };
    }
  }
  scheduleRefresh() {
    if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
    this.refreshTimer = window.setTimeout(async () => {
      this.refreshTimer = null;
      if (this.isRefreshing) return;
      this.isRefreshing = true;
      try {
        this.captureZoom();
        await this.buildGraph();
        this.render();
      } finally {
        this.isRefreshing = false;
      }
    }, 1500);
  }
  async manualRefresh() {
    if (this.refreshTimer !== null) {
      window.clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    if (this.isRefreshing) return;
    this.isRefreshing = true;
    try {
      this.captureZoom();
      await this.buildGraph();
      this.render();
    } finally {
      this.isRefreshing = false;
    }
  }
  // ── 1. Parse vault ────────────────────────────────────────────────
  async buildGraph() {
    var _a, _b, _c, _d, _e;
    const nodeMap = /* @__PURE__ */ new Map();
    const rawEdges = [];
    const files = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex)));
    for (const file of files) {
      const fm = (_b = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {};
      nodeMap.set(file.basename, {
        id: file.basename,
        title: (_c = fm["title"]) != null ? _c : file.basename,
        type: ((_d = fm["type"]) != null ? _d : "unknown").toLowerCase(),
        domain: (_e = fm["domain"]) != null ? _e : ""
      });
      const content = await this.app.vault.cachedRead(file);
      let m2;
      EDGE_RE.lastIndex = 0;
      while ((m2 = EDGE_RE.exec(content)) !== null)
        rawEdges.push({ src: file.basename, tgt: m2[2].trim(), label: m2[1] });
    }
    this.nodes = Array.from(nodeMap.values());
    this.edges = rawEdges.filter((e) => nodeMap.has(e.src) && nodeMap.has(e.tgt)).map((e) => ({ source: e.src, target: e.tgt, label: e.label }));
    this.analytics = this.computeAnalytics();
  }
  // ── 2. Analytics ──────────────────────────────────────────────────
  computeAnalytics() {
    var _a, _b, _c, _d, _e;
    const degreeOf = /* @__PURE__ */ new Map();
    for (const e of this.edges) {
      const s = e.source, t = e.target;
      degreeOf.set(s, ((_a = degreeOf.get(s)) != null ? _a : 0) + 1);
      degreeOf.set(t, ((_b = degreeOf.get(t)) != null ? _b : 0) + 1);
    }
    const n = this.nodes.length, m2 = this.edges.length;
    const density = n > 1 ? +(m2 / (n * (n - 1))).toFixed(4) : 0;
    const avgDeg = n > 0 ? +([...degreeOf.values()].reduce((a2, b) => a2 + b, 0) / n).toFixed(2) : 0;
    const orphanIds = this.nodes.filter((nd) => !degreeOf.has(nd.id)).map((nd) => nd.id);
    const typeCounts = /* @__PURE__ */ new Map();
    for (const nd of this.nodes) typeCounts.set(nd.type, ((_c = typeCounts.get(nd.type)) != null ? _c : 0) + 1);
    const layers = LAYER_ORDER.map((name) => {
      var _a2, _b2;
      return {
        name,
        color: (_a2 = NODE_COLORS[name.toLowerCase()]) != null ? _a2 : "#888",
        count: (_b2 = typeCounts.get(name.toLowerCase())) != null ? _b2 : 0
      };
    });
    const edgeCnt = /* @__PURE__ */ new Map();
    for (const e of this.edges) edgeCnt.set(e.label, ((_d = edgeCnt.get(e.label)) != null ? _d : 0) + 1);
    const edgeTypes = [...edgeCnt.entries()].sort((a2, b) => b[1] - a2[1]).map(([label, count]) => ({ label, count }));
    const hubs = this.nodes.filter((nd) => degreeOf.has(nd.id)).sort((a2, b) => {
      var _a2, _b2;
      return ((_a2 = degreeOf.get(b.id)) != null ? _a2 : 0) - ((_b2 = degreeOf.get(a2.id)) != null ? _b2 : 0);
    }).slice(0, 10).map((nd) => ({ id: nd.id, deg: degreeOf.get(nd.id), type: nd.type }));
    const domainCnt = /* @__PURE__ */ new Map();
    for (const nd of this.nodes) if (nd.domain) domainCnt.set(nd.domain, ((_e = domainCnt.get(nd.domain)) != null ? _e : 0) + 1);
    const domains = [...domainCnt.entries()].sort((a2, b) => b[1] - a2[1]).map(([name, count]) => ({ name, count }));
    return { n, m: m2, density, avgDeg, orphans: orphanIds.length, orphanIds, layers, edgeTypes, hubs, domains, degreeOf };
  }
  // ── 3. Dim helpers ────────────────────────────────────────────────
  buildAdjacency(simEdges) {
    const adj = /* @__PURE__ */ new Map();
    for (const e of simEdges) {
      if (!adj.has(e.source.id)) adj.set(e.source.id, /* @__PURE__ */ new Set());
      if (!adj.has(e.target.id)) adj.set(e.target.id, /* @__PURE__ */ new Set());
      adj.get(e.source.id).add(e.target.id);
      adj.get(e.target.id).add(e.source.id);
    }
    return adj;
  }
  applyVisibility(adj) {
    var _a, _b, _c, _d, _e;
    if (!this.selNodeEl) return;
    const sel = this.selectedId;
    const neighbors = sel ? (_a = adj.get(sel)) != null ? _a : /* @__PURE__ */ new Set() : null;
    const dom = this.selectedDomain;
    this.selNodeEl.style("opacity", (d) => {
      var _a2, _b2;
      if (this.hiddenTypes.has(d.type)) return "0";
      if (!this.showOrphans && ((_b2 = (_a2 = adj.get(d.id)) == null ? void 0 : _a2.size) != null ? _b2 : 0) === 0) return "0";
      if (dom && d.domain !== dom) return "0.07";
      if (!sel) return "1";
      return d.id === sel || neighbors.has(d.id) ? "1" : "0.07";
    }).style("display", (d) => {
      var _a2, _b2;
      if (this.hiddenTypes.has(d.type)) return "none";
      if (!this.showOrphans && ((_b2 = (_a2 = adj.get(d.id)) == null ? void 0 : _a2.size) != null ? _b2 : 0) === 0) return "none";
      return null;
    });
    const edgeOpacity = (e) => {
      const s = e.source, t = e.target;
      if (this.hiddenTypes.has(s.type) || this.hiddenTypes.has(t.type)) return "0";
      if (dom && s.domain !== dom && t.domain !== dom) return "0.04";
      if (!sel) return "0.55";
      return s.id === sel || t.id === sel ? "0.9" : "0.04";
    };
    (_b = this.selEdgeLine) == null ? void 0 : _b.style("opacity", edgeOpacity);
    (_c = this.selEdgeLabel) == null ? void 0 : _c.style("opacity", edgeOpacity).style("display", this.showEdgeLabels ? null : "none");
    (_d = this.selNodeLabel) == null ? void 0 : _d.style("display", this.showNodeLabels ? null : "none");
    (_e = this.selEdgeLine) == null ? void 0 : _e.attr("marker-end", this.showArrows ? "url(#llm-arrow)" : null);
  }
  // ── 4. Render ─────────────────────────────────────────────────────
  render() {
    var _a;
    (_a = this.sim) == null ? void 0 : _a.stop();
    if (this.pendingRaf !== null) {
      cancelAnimationFrame(this.pendingRaf);
      this.pendingRaf = null;
    }
    const container = this.containerEl.children[1];
    container.empty();
    container.addClass("llm-graph-container");
    const A = this.analytics;
    const N = this.nodes.length;
    if (N > 0) {
      this.chargeStr = Math.min(800, Math.max(120, Math.round(N * 2)));
      this.linkDist = Math.min(200, Math.max(50, Math.round(Math.sqrt(N) * 8)));
    }
    const toolbar = container.createDiv({ cls: "llm-graph-toolbar" });
    const searchBar = container.createDiv({ cls: "llm-graph-searchbar" });
    const searchInput = searchBar.createEl("input", {
      cls: "llm-graph-search",
      attr: { type: "text", placeholder: "Search nodes\u2026 (title, type, domain)" }
    });
    const searchClear = searchBar.createEl("button", { cls: "llm-graph-search-clear", text: "\xD7" });
    searchClear.style.display = "none";
    if (this.searchQuery) {
      searchInput.value = this.searchQuery;
      searchClear.style.display = "flex";
    }
    const applySearch = () => {
      var _a2, _b, _c, _d;
      const q = this.searchQuery.toLowerCase().trim();
      searchClear.style.display = q ? "flex" : "none";
      if (!this.selNodeEl) return;
      if (!q) {
        this.selNodeEl.style("opacity", null).style("pointer-events", null);
        (_a2 = this.selEdgeLine) == null ? void 0 : _a2.style("opacity", null);
        (_b = this.selEdgeLabel) == null ? void 0 : _b.style("opacity", null);
        return;
      }
      const matchIds = new Set(
        this.nodes.filter(
          (n) => n.title.toLowerCase().includes(q) || n.type.toLowerCase().includes(q) || n.domain.toLowerCase().includes(q)
        ).map((n) => n.id)
      );
      this.selNodeEl.style("opacity", (d) => matchIds.has(d.id) ? "1" : "0.07").style("pointer-events", (d) => matchIds.has(d.id) ? null : "none");
      (_c = this.selEdgeLine) == null ? void 0 : _c.style("opacity", (d) => matchIds.has(d.source.id) || matchIds.has(d.target.id) ? "0.6" : "0.05");
      (_d = this.selEdgeLabel) == null ? void 0 : _d.style("opacity", (d) => matchIds.has(d.source.id) || matchIds.has(d.target.id) ? "1" : "0");
    };
    searchInput.addEventListener("input", () => {
      this.searchQuery = searchInput.value;
      applySearch();
      this.saveSettings();
    });
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      this.searchQuery = "";
      applySearch();
      searchInput.focus();
      this.saveSettings();
    });
    const mkBtn = (icon, label, active = false) => {
      const b = toolbar.createEl("button", { cls: "llm-graph-btn" });
      (0, import_obsidian.setIcon)(b, icon);
      b.createSpan({ text: label });
      b.setAttribute("aria-label", label);
      if (active) b.addClass("llm-graph-btn--active");
      return b;
    };
    const resetBtn = mkBtn("rotate-ccw", "Reset zoom");
    const refreshBtn = mkBtn("refresh-cw", "Refresh");
    const nlBtn = mkBtn("type", "Nodes", this.showNodeLabels);
    const elBtn = mkBtn("minus", "Edges", this.showEdgeLabels);
    const arBtn = mkBtn("arrow-right", "Arrows", this.showArrows);
    const sbBtn = mkBtn("bar-chart-2", "Analytics");
    toolbar.createSpan({
      cls: "llm-graph-stats",
      text: `${A.n} nodes \xB7 ${A.m} edges \xB7 density ${A.density}`
    });
    let adj = /* @__PURE__ */ new Map();
    const layout = container.createDiv({ cls: "llm-graph-layout" });
    const svgEl = layout.createSvg("svg", { cls: "llm-graph-svg" });
    this.svgEl = svgEl;
    const sidebar = layout.createDiv({ cls: "llm-graph-sidebar" });
    this.buildSidebar(sidebar, A, adj);
    const svg = select_default2(svgEl);
    const g = svg.append("g");
    const LABEL_FADE_MIN = 0.4;
    const LABEL_FADE_MAX = 0.9;
    this.zoomBehavior = zoom_default2().scaleExtent([0.05, 10]).on("zoom", (ev) => {
      g.attr("transform", ev.transform);
      const k = ev.transform.k;
      const labelOpacity = Math.max(0, Math.min(
        1,
        (k - LABEL_FADE_MIN) / (LABEL_FADE_MAX - LABEL_FADE_MIN)
      ));
      if (this.showNodeLabels)
        g.selectAll(".llm-graph-node-label").style("opacity", String(labelOpacity));
      if (this.showEdgeLabels)
        g.selectAll(".llm-graph-edge-label").style("opacity", String(labelOpacity));
    });
    svg.call(this.zoomBehavior);
    if (this.savedTransform) {
      const { k, x: x3, y: y3 } = this.savedTransform;
      svg.call(this.zoomBehavior.transform, identity2.translate(x3, y3).scale(k));
    }
    svg.on("click", (event) => {
      if (event.target === svgEl) {
        this.selectedId = null;
        this.applyVisibility(adj);
      }
    });
    resetBtn.addEventListener("click", () => {
      this.savedTransform = null;
      svg.transition().duration(400).call(this.zoomBehavior.transform, identity2);
    });
    refreshBtn.addEventListener("click", () => this.manualRefresh());
    svg.append("defs").append("marker").attr("id", "llm-arrow").attr("viewBox", "0 -3 6 6").attr("refX", 10).attr("refY", 0).attr("markerWidth", 6).attr("markerHeight", 6).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M0,-3L6,0L0,3").attr("fill", "var(--text-faint)");
    const nodeMap = new Map(this.nodes.map((n) => [n.id, n]));
    const simEdges = this.edges.map((e) => ({
      ...e,
      source: nodeMap.get(e.source),
      target: nodeMap.get(e.target)
    })).filter((e) => e.source && e.target);
    this.pendingRaf = requestAnimationFrame(() => {
      this.pendingRaf = null;
      const W = svgEl.clientWidth || 900;
      const H = svgEl.clientHeight || 700;
      const linkForce = link_default(simEdges).id((d) => d.id).distance(this.linkDist).strength((d) => {
        var _a2, _b;
        return 1 / Math.sqrt(
          Math.max(1, (_a2 = A.degreeOf.get(d.source.id)) != null ? _a2 : 1) * Math.max(1, (_b = A.degreeOf.get(d.target.id)) != null ? _b : 1)
        );
      });
      const chargeForce = manyBody_default().strength(-this.chargeStr);
      const gX = x_default2(W / 2).strength(this.gravityStr);
      const gY = y_default2(H / 2).strength(this.gravityStr);
      const collideR = Math.max(15, Math.sqrt(N) * 2);
      this.sim = simulation_default(this.nodes).force("link", linkForce).force("charge", chargeForce).force("gx", gX).force("gy", gY).force("collide", collide_default(collideR));
      adj = this.buildAdjacency(simEdges);
      const edgeLine = g.append("g").selectAll("line").data(simEdges).join("line").attr("class", "llm-graph-edge").attr("stroke-width", 1.2).attr("marker-end", "url(#llm-arrow)");
      this.selEdgeLine = edgeLine;
      const edgeLabel = g.append("g").selectAll("text").data(simEdges).join("text").attr("class", "llm-graph-edge-label").attr("pointer-events", "none").text((d) => d.label);
      this.selEdgeLabel = edgeLabel;
      const nodeEl = g.append("g").selectAll("g").data(this.nodes).join("g").attr("class", "llm-graph-node").call(drag_default().on("start", (ev, d) => {
        var _a2;
        if (!ev.active) (_a2 = this.sim) == null ? void 0 : _a2.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }).on("drag", (ev, d) => {
        d.fx = ev.x;
        d.fy = ev.y;
      }).on("end", (ev, d) => {
        var _a2;
        if (!ev.active) (_a2 = this.sim) == null ? void 0 : _a2.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })).on("click", (event, d) => {
        event.stopPropagation();
        if (this.selectedId === d.id) {
          this.app.workspace.openLinkText(d.id, "", false);
        } else {
          this.selectedId = d.id;
          this.applyVisibility(adj);
        }
      });
      this.selNodeEl = nodeEl;
      nodeEl.each(function(d) {
        var _a2, _b, _c;
        const g2 = select_default2(this);
        const color2 = (_a2 = NODE_COLORS[d.type]) != null ? _a2 : "#BAB0AC";
        const shape = (_b = NODE_SHAPES[d.type]) != null ? _b : "circle";
        const cls = "llm-graph-node-shape";
        const deg = (_c = A.degreeOf.get(d.id)) != null ? _c : 0;
        const s = 1 + Math.log1p(deg) * 0.35;
        const sw = g2.append("g").attr("class", "llm-node-shape-wrapper").attr("transform", `scale(${s})`);
        if (shape === "diamond") {
          sw.append("rect").attr("class", cls).attr("width", 11).attr("height", 11).attr("x", -5.5).attr("y", -5.5).attr("transform", "rotate(45)").attr("rx", 1.5).attr("fill", color2);
        } else if (shape === "square") {
          sw.append("rect").attr("class", cls).attr("width", 13).attr("height", 13).attr("x", -6.5).attr("y", -6.5).attr("rx", 2).attr("fill", color2);
        } else if (shape === "hexagon") {
          sw.append("polygon").attr("class", cls).attr("points", "0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4").attr("fill", color2);
        } else {
          sw.append("circle").attr("class", cls).attr("r", 7).attr("fill", color2);
        }
      });
      const nodeLabel = nodeEl.append("text").attr("class", "llm-graph-node-label").attr("dy", "0.35em").attr("x", 13).attr("pointer-events", "none").text((d) => d.title.length > 26 ? d.title.slice(0, 24) + "\u2026" : d.title).attr("display", this.showNodeLabels ? null : "none");
      this.selNodeLabel = nodeLabel;
      const tooltip = container.createDiv({ cls: "llm-graph-tooltip" });
      nodeEl.on("mouseenter", (_ev, d) => {
        var _a2, _b, _c;
        const deg = (_a2 = A.degreeOf.get(d.id)) != null ? _a2 : 0;
        const neighbors = (_b = adj.get(d.id)) != null ? _b : /* @__PURE__ */ new Set();
        tooltip.innerHTML = `<strong>${d.title}</strong><br><span class="llm-tp-type" style="color:${(_c = NODE_COLORS[d.type]) != null ? _c : "#888"}">${d.type}</span>` + (d.domain ? `<br><em>${d.domain}</em>` : "") + `<br><small>degree: ${deg} \xB7 neighbors: ${neighbors.size}</small><br><small class="llm-tp-hint">click to select \xB7 click again to open</small>`;
        tooltip.style.display = "block";
      }).on("mousemove", (ev) => {
        const r = container.getBoundingClientRect();
        tooltip.style.left = ev.clientX - r.left + 14 + "px";
        tooltip.style.top = ev.clientY - r.top + 14 + "px";
      }).on("mouseleave", () => {
        tooltip.style.display = "none";
      });
      this.focusNodeFn = (id2) => {
        const nd = nodeMap.get(id2);
        if (!nd || nd.x == null || nd.y == null) return;
        this.selectedId = id2;
        this.applyVisibility(adj);
        const cW = svgEl.clientWidth, cH = svgEl.clientHeight;
        svg.transition().duration(600).call(
          this.zoomBehavior.transform,
          identity2.translate(cW / 2, cH / 2).scale(1.8).translate(-nd.x, -nd.y)
        );
        tooltip.style.display = "none";
      };
      sidebar.querySelectorAll("[data-node-id]").forEach((el) => {
        el.addEventListener("click", () => {
          var _a2;
          return (_a2 = this.focusNodeFn) == null ? void 0 : _a2.call(this, el.dataset.nodeId);
        });
      });
      this.sim.on("tick", () => {
        edgeLine.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y).attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
        edgeLabel.attr("x", (d) => (d.source.x + d.target.x) / 2).attr("y", (d) => (d.source.y + d.target.y) / 2);
        nodeEl.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });
      sidebar.querySelectorAll("[data-physics]").forEach((input) => {
        input.addEventListener("input", () => {
          const val = +input.value;
          const key = input.dataset.physics;
          const lbl = input.nextElementSibling;
          if (lbl) lbl.textContent = key === "gravityStr" ? val.toFixed(2) : String(val);
          if (key === "linkDist") {
            this.linkDist = val;
            this.sim.force("link").distance(val);
          } else if (key === "chargeStr") {
            this.chargeStr = val;
            this.sim.force("charge").strength(-val);
          } else if (key === "gravityStr") {
            this.gravityStr = val;
            this.sim.force("gx").strength(val);
            this.sim.force("gy").strength(val);
          }
          this.sim.alpha(0.4).restart();
          this.saveSettings();
        });
      });
      this.applyVisibility(adj);
    });
    nlBtn.addEventListener("click", () => {
      var _a2;
      this._labelsUserSet = true;
      this.showNodeLabels = !this.showNodeLabels;
      nlBtn.toggleClass("llm-graph-btn--active", this.showNodeLabels);
      (_a2 = this.selNodeLabel) == null ? void 0 : _a2.attr("display", this.showNodeLabels ? null : "none");
      this.saveSettings();
    });
    elBtn.addEventListener("click", () => {
      var _a2;
      this.showEdgeLabels = !this.showEdgeLabels;
      elBtn.toggleClass("llm-graph-btn--active", this.showEdgeLabels);
      (_a2 = this.selEdgeLabel) == null ? void 0 : _a2.attr("display", this.showEdgeLabels ? null : "none");
      this.saveSettings();
    });
    arBtn.addEventListener("click", () => {
      var _a2;
      this.showArrows = !this.showArrows;
      arBtn.toggleClass("llm-graph-btn--active", this.showArrows);
      (_a2 = this.selEdgeLine) == null ? void 0 : _a2.attr("marker-end", this.showArrows ? "url(#llm-arrow)" : null);
      this.saveSettings();
    });
    sbBtn.addEventListener("click", () => {
      this.sidebarOpen = !this.sidebarOpen;
      sbBtn.toggleClass("llm-graph-btn--active", this.sidebarOpen);
      sidebar.toggleClass("llm-graph-sidebar--open", this.sidebarOpen);
      this.saveSettings();
    });
  }
  // ── 5. Sidebar ────────────────────────────────────────────────────
  buildSidebar(sidebar, A, adj) {
    const section = (title) => {
      const s = sidebar.createDiv({ cls: "llm-sb-section" });
      s.createDiv({ cls: "llm-sb-title", text: title });
      return s;
    };
    const ps = section("Physics");
    const mkSlider = (label, key, min, max, val, step) => {
      const row = ps.createDiv({ cls: "llm-sb-slider-row" });
      row.createSpan({ cls: "llm-sb-slider-lbl", text: label });
      const input = row.createEl("input", { type: "range" });
      input.addClass("llm-sb-slider");
      input.min = String(min);
      input.max = String(max);
      input.value = String(val);
      input.step = String(step);
      input.dataset.physics = key;
      const display = step < 1 ? val.toFixed(2) : String(val);
      row.createSpan({ cls: "llm-sb-slider-val", text: display });
    };
    mkSlider("Link dist", "linkDist", 20, 200, this.linkDist, 5);
    mkSlider("Repulsion", "chargeStr", 30, 400, this.chargeStr, 10);
    mkSlider("Gravity", "gravityStr", 0, 0.3, this.gravityStr, 0.01);
    const hs = section("Graph Health");
    const cards = [
      { lbl: "Nodes", val: A.n, warn: false },
      { lbl: "Edges", val: A.m, warn: false },
      { lbl: "Density", val: A.density, warn: A.density < 0.01 },
      { lbl: "Avg deg", val: A.avgDeg, warn: A.avgDeg < 1 },
      { lbl: "Orphans", val: A.orphans, warn: A.orphans > 0 }
    ];
    const cardGrid = hs.createDiv({ cls: "llm-sb-cards" });
    for (const c2 of cards) {
      const card = cardGrid.createDiv({ cls: "llm-sb-card" + (c2.warn ? " llm-sb-card--warn" : "") });
      card.createDiv({ cls: "llm-sb-card-val", text: String(c2.val) });
      card.createDiv({ cls: "llm-sb-card-lbl", text: c2.lbl });
    }
    if (A.orphans > 0) {
      const orphanRow = hs.createDiv({ cls: "llm-sb-orphan-row" });
      const orphanBtn = orphanRow.createEl("button", {
        cls: "llm-graph-btn llm-graph-btn--xs" + (this.showOrphans ? " llm-graph-btn--active" : ""),
        text: this.showOrphans ? `Hide ${A.orphans} orphans` : `Show ${A.orphans} orphans`
      });
      orphanBtn.addEventListener("click", () => {
        this.showOrphans = !this.showOrphans;
        orphanBtn.textContent = this.showOrphans ? `Hide ${A.orphans} orphans` : `Show ${A.orphans} orphans`;
        orphanBtn.toggleClass("llm-graph-btn--active", this.showOrphans);
        this.applyVisibility(adj);
      });
    }
    const ls = section("Epistemic Layers");
    const shapeSVG = (shape, color2) => {
      const f = `fill="${color2}"`;
      switch (shape) {
        case "diamond":
          return `<svg width="12" height="12" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1" transform="rotate(45 5 5)"/></svg>`;
        case "square":
          return `<svg width="12" height="12" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1.5"/></svg>`;
        case "hexagon":
          return `<svg width="12" height="12" viewBox="0 0 10 10"><polygon ${f} points="5,1 8.7,3 8.7,7 5,9 1.3,7 1.3,3"/></svg>`;
        default:
          return `<svg width="12" height="12" viewBox="0 0 10 10"><circle ${f} cx="5" cy="5" r="4"/></svg>`;
      }
    };
    const layerCtrl = ls.createDiv({ cls: "llm-sb-layer-ctrl" });
    const allTypesBtn = layerCtrl.createEl("button", { cls: "llm-graph-btn llm-graph-btn--xs", text: "All" });
    const noneTypesBtn = layerCtrl.createEl("button", { cls: "llm-graph-btn llm-graph-btn--xs", text: "None" });
    this.layerRowMap.clear();
    const maxL = Math.max(...A.layers.map((l) => l.count), 1);
    A.layers.forEach((l, i) => {
      var _a;
      const typeName = l.name.toLowerCase();
      const color2 = l.color;
      const shape = (_a = NODE_SHAPES[typeName]) != null ? _a : "circle";
      const row = ls.createDiv({ cls: "llm-sb-layer-row" });
      if (l.count > 0) row.addClass("llm-sb-layer-clickable");
      if (this.hiddenTypes.has(typeName)) row.addClass("llm-sb-layer-row--off");
      this.layerRowMap.set(typeName, row);
      row.createSpan({ cls: "llm-sb-layer-num", text: String(i + 1) });
      row.innerHTML += shapeSVG(shape, color2);
      row.createSpan({ cls: "llm-sb-layer-name", text: l.name }).style.color = color2;
      const track = row.createDiv({ cls: "llm-sb-track" });
      if (l.count > 0) {
        const fill = track.createDiv({ cls: "llm-sb-fill" });
        fill.style.cssText = `width:${Math.max(l.count / maxL * 100, 4)}%;background:${color2}`;
      } else {
        track.createSpan({ cls: "llm-sb-gap", text: "gap" });
      }
      row.createSpan({ cls: "llm-sb-layer-cnt", text: l.count ? String(l.count) : "\u2014" }).style.color = l.count ? color2 : "var(--text-faint)";
      if (l.count > 0) {
        row.addEventListener("click", () => {
          if (this.hiddenTypes.has(typeName)) this.hiddenTypes.delete(typeName);
          else this.hiddenTypes.add(typeName);
          this.layerRowMap.forEach((r, t) => r.toggleClass("llm-sb-layer-row--off", this.hiddenTypes.has(t)));
          this.applyVisibility(adj);
          this.saveSettings();
        });
      }
    });
    allTypesBtn.addEventListener("click", () => {
      this.hiddenTypes.clear();
      this.layerRowMap.forEach((r) => r.removeClass("llm-sb-layer-row--off"));
      this.applyVisibility(adj);
      this.saveSettings();
    });
    noneTypesBtn.addEventListener("click", () => {
      A.layers.forEach((l) => {
        if (l.count > 0) this.hiddenTypes.add(l.name.toLowerCase());
      });
      this.layerRowMap.forEach((r, t) => r.toggleClass("llm-sb-layer-row--off", this.hiddenTypes.has(t)));
      this.applyVisibility(adj);
      this.saveSettings();
    });
    const es = section("Edge Types");
    const maxE = Math.max(...A.edgeTypes.map((e) => e.count), 1);
    for (const e of A.edgeTypes) {
      const row = es.createDiv({ cls: "llm-sb-bar-row" });
      row.createSpan({ cls: "llm-sb-bar-name", text: e.label });
      const track = row.createDiv({ cls: "llm-sb-track" });
      const fill = track.createDiv({ cls: "llm-sb-fill llm-sb-fill--blue" });
      fill.style.width = `${e.count / maxE * 100}%`;
      row.createSpan({ cls: "llm-sb-bar-cnt", text: String(e.count) });
    }
    const hubSec = section("Top Hubs \xB7 by degree");
    const maxH = Math.max(...A.hubs.map((h) => h.deg), 1);
    A.hubs.forEach((h, i) => {
      var _a, _b;
      const row = hubSec.createDiv({ cls: "llm-sb-hub-row" });
      row.dataset.nodeId = h.id;
      row.createSpan({ cls: "llm-sb-hub-rank", text: String(i + 1) });
      const dot = row.createSpan({ cls: "llm-sb-hub-dot" });
      dot.style.background = (_a = NODE_COLORS[h.type]) != null ? _a : "#888";
      row.createSpan({ cls: "llm-sb-hub-name", text: h.id.length > 20 ? h.id.slice(0, 18) + "\u2026" : h.id }).setAttribute("title", h.id);
      const bar = row.createDiv({ cls: "llm-sb-hub-bar" });
      bar.createDiv({ cls: "llm-sb-fill", style: `width:${h.deg / maxH * 100}%;background:${(_b = NODE_COLORS[h.type]) != null ? _b : "#888"}` });
      row.createSpan({ cls: "llm-sb-hub-deg", text: String(h.deg) });
    });
    const ds = section("Domain Coverage");
    const maxD = Math.max(...A.domains.map((d) => d.count), 1);
    const domainRows = /* @__PURE__ */ new Map();
    for (const d of A.domains) {
      const row = ds.createDiv({ cls: "llm-sb-bar-row llm-sb-domain-row" });
      domainRows.set(d.name, row);
      if (this.selectedDomain === d.name) row.addClass("llm-sb-domain-row--active");
      row.createSpan({ cls: "llm-sb-bar-name", text: d.name });
      const track = row.createDiv({ cls: "llm-sb-track" });
      track.createDiv({ cls: "llm-sb-fill llm-sb-fill--teal", style: `width:${d.count / maxD * 100}%` });
      row.createSpan({ cls: "llm-sb-bar-cnt", text: String(d.count) });
      row.addEventListener("click", () => {
        if (this.selectedDomain === d.name) {
          this.selectedDomain = null;
          domainRows.forEach((r) => r.removeClass("llm-sb-domain-row--active"));
        } else {
          this.selectedDomain = d.name;
          domainRows.forEach((r, n) => r.toggleClass("llm-sb-domain-row--active", n === d.name));
        }
        this.applyVisibility(adj);
        this.saveSettings();
      });
    }
  }
};
var LLMWikiSemanticGraph = class extends import_obsidian.Plugin {
  async onload() {
    this.registerView(VIEW_TYPE, (leaf) => new SemanticGraphView(leaf, this));
    this.addRibbonIcon("git-fork", "LLM Wiki Semantic Graph", () => this.activateView());
    this.addCommand({ id: "open-semantic-graph", name: "Open Semantic Graph", callback: () => this.activateView() });
  }
  async activateView() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = workspace.getRightLeaf(false);
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    workspace.revealLeaf(leaf);
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkcmVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2pvaW4uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9hZGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9jb3Zlci5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9leHRlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvZmluZC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Jvb3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9zaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvdmlzaXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy92aXNpdEFmdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMveC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3kuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkdHJlZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvamlnZ2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvY29sbGlkZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xpbmsuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsICJub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xjZy5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3NpbXVsYXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9tYW55Qm9keS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3guanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy95LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2RyYWcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ldmVudC5qcyIsICJub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvZHJhZy5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsICJub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL3BhcnNlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zY2hlZHVsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3R3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ludGVycG9sYXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vYXR0clR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2RlbGF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZVZhcnlpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL29uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0QWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZVR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdGV4dFR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZDMtem9vbS9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy16b29tL3NyYy90cmFuc2Zvcm0uanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL25vZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3pvb20uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBsdWdpbiwgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIHNldEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtcblx0Zm9yY2VTaW11bGF0aW9uLCBmb3JjZUxpbmssIGZvcmNlTWFueUJvZHksXG5cdGZvcmNlQ29sbGlkZSwgZm9yY2VYLCBmb3JjZVksXG5cdFNpbXVsYXRpb25Ob2RlRGF0dW0sIFNpbXVsYXRpb25MaW5rRGF0dW0sXG5cdEZvcmNlTGluayxcbn0gZnJvbSAnZDMtZm9yY2UnO1xuaW1wb3J0IHsgem9vbSwgem9vbUlkZW50aXR5LCBab29tQmVoYXZpb3IgfSBmcm9tICdkMy16b29tJztcbmltcG9ydCB7IGRyYWcgfSBmcm9tICdkMy1kcmFnJztcblxuY29uc3QgVklFV19UWVBFID0gJ2xsbS13aWtpLXNlbWFudGljLWdyYXBoJztcblxuLy8gVGFibGVhdTEwIFx1MjAxNCBwcm9mZXNzaW9uYWwgZGF0YSB2aXogcGFsZXR0ZSwgZGVzaWduZWQgYnkgY29sb3Igc2NpZW50aXN0c1xuY29uc3QgTk9ERV9DT0xPUlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdGF4aW9tOiAgICAgJyM0RTc5QTcnLCAgLy8gc3RlZWwgYmx1ZSAgICAgIFx1MjAxNCBpbnZhcmlhbnRzXG5cdHJ1bGU6ICAgICAgJyM0RTc5QTcnLCAgLy8gc3RlZWwgYmx1ZSAgICAgIFx1MjAxNCBpbnZhcmlhbnRzXG5cdGVudGl0eTogICAgJyM1OUExNEYnLCAgLy8gc2FnZSBncmVlbiAgICAgIFx1MjAxNCBvYmplY3RzXG5cdGNvbmNlcHQ6ICAgJyM3NkI3QjInLCAgLy8gc2xhdGUgdGVhbCAgICAgIFx1MjAxNCBpZGVhc1xuXHRpbmRleDogICAgICcjQkFCMEFDJywgIC8vIHdhcm0gZ3JheSAgICAgICBcdTIwMTQgbWV0YVxuXHRwcm9jZXNzOiAgICcjRjI4RTJCJywgIC8vIHdhcm0gYW1iZXIgICAgICBcdTIwMTQgYWN0aW9uc1xuXHRkZWNpc2lvbjogICcjRTE1NzU5JywgIC8vIG11dGVkIHJlZCAgICAgICBcdTIwMTQgY2hvaWNlc1xuXHRwYXR0ZXJuOiAgICcjQjA3QUExJywgIC8vIGR1c3R5IHB1cnBsZSAgICBcdTIwMTQgc3RydWN0dXJlc1xuXHRvdmVydmlldzogICcjOUM3NTVGJywgIC8vIGVhcnRoIGJyb3duICAgICBcdTIwMTQgb3ZlcnZpZXdzXG5cdHN5bnRoZXNpczogJyM5Qzc1NUYnLCAgLy8gZWFydGggYnJvd24gICAgIFx1MjAxNCBzeW50aGVzaXNcbn07XG5cbi8vIFNoYXBlIGVuY29kZXMgZXBpc3RlbWljIGNhdGVnb3J5XG5jb25zdCBOT0RFX1NIQVBFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0YXhpb206ICdkaWFtb25kJywgcnVsZTogJ2RpYW1vbmQnLCAgICAgICAgICAgICAgIC8vIGludmFyaWFudHNcblx0cHJvY2VzczogJ3NxdWFyZScsIGRlY2lzaW9uOiAnc3F1YXJlJywgICAgICAgICAgICAvLyBhY3Rpb25zXG5cdHBhdHRlcm46ICdoZXhhZ29uJywgb3ZlcnZpZXc6ICdoZXhhZ29uJywgc3ludGhlc2lzOiAnaGV4YWdvbicsICAvLyBzdHJ1Y3R1cmVzXG5cdGVudGl0eTogJ2NpcmNsZScsIGNvbmNlcHQ6ICdjaXJjbGUnLCBpbmRleDogJ2NpcmNsZScsICAgICAgICAgICAvLyBvYmplY3RzXG59O1xuY29uc3QgTEFZRVJfT1JERVIgPSBbJ0F4aW9tJywnRW50aXR5JywnUHJvY2VzcycsJ1BhdHRlcm4nLCdNZXRob2QnLCdDb25jZXB0JywnUnVsZScsJ092ZXJ2aWV3JywnRGVjaXNpb24nLCdTeW50aGVzaXMnXTtcbmNvbnN0IEVYQ0xVREVEX1BBVEhTID0gW1xuXHQnd2lraS90ZW1wbGF0ZXMvJywnd2lraS9ncmFwaC8nLCd3aWtpL2NvbXBpbGVkLycsXG5cdCd3aWtpL3VwZGF0ZXMvJywnd2lraS9NZXRhLycsJ3BpcGVsaW5lLycsJ3NjaGVtYS8nLCdvbnRvbG9neS8nLCdkb21haW5zLycsJ3Rvb2xzLycsJ2RvY3MvJyxcbl07XG5jb25zdCBFREdFX1JFID0gL1xcKlxcKihcXHcrKVxcKlxcKlxccypcdTIxOTJcXHMqXFxbXFxbKFteXFxdfF0rKS9nO1xuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgVHlwZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5pbnRlcmZhY2UgV2lraU5vZGUgZXh0ZW5kcyBTaW11bGF0aW9uTm9kZURhdHVtIHtcblx0aWQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBkb21haW46IHN0cmluZztcbn1cbmludGVyZmFjZSBXaWtpRWRnZSBleHRlbmRzIFNpbXVsYXRpb25MaW5rRGF0dW08V2lraU5vZGU+IHsgbGFiZWw6IHN0cmluZzsgfVxuaW50ZXJmYWNlIEFuYWx5dGljcyB7XG5cdG46IG51bWJlcjsgbTogbnVtYmVyOyBkZW5zaXR5OiBudW1iZXI7IGF2Z0RlZzogbnVtYmVyO1xuXHRvcnBoYW5zOiBudW1iZXI7IG9ycGhhbklkczogc3RyaW5nW107XG5cdGxheWVyczogeyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IGNvbG9yOiBzdHJpbmcgfVtdO1xuXHRlZGdlVHlwZXM6IHsgbGFiZWw6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W107XG5cdGh1YnM6IHsgaWQ6IHN0cmluZzsgZGVnOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9W107XG5cdGRvbWFpbnM6IHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH1bXTtcblx0ZGVncmVlT2Y6IE1hcDxzdHJpbmcsIG51bWJlcj47XG59XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBWaWV3IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuaW50ZXJmYWNlIEdyYXBoU2V0dGluZ3Mge1xuXHRzaG93Tm9kZUxhYmVsczogYm9vbGVhbjtcblx0c2hvd0VkZ2VMYWJlbHM6IGJvb2xlYW47XG5cdHNob3dBcnJvd3M6ICAgICBib29sZWFuO1xuXHRzaWRlYmFyT3BlbjogICAgYm9vbGVhbjtcblx0aGlkZGVuVHlwZXM6ICAgIHN0cmluZ1tdO1xuXHRsaW5rRGlzdDogICAgICAgbnVtYmVyO1xuXHRjaGFyZ2VTdHI6ICAgICAgbnVtYmVyO1xuXHRncmF2aXR5U3RyOiAgICAgbnVtYmVyO1xuXHRzZWFyY2hRdWVyeTogICAgc3RyaW5nO1xuXHRzZWxlY3RlZERvbWFpbjogc3RyaW5nIHwgbnVsbDtcbn1cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEdyYXBoU2V0dGluZ3MgPSB7XG5cdHNob3dOb2RlTGFiZWxzOiB0cnVlLFxuXHRzaG93RWRnZUxhYmVsczogdHJ1ZSxcblx0c2hvd0Fycm93czogICAgIHRydWUsXG5cdHNpZGViYXJPcGVuOiAgICBmYWxzZSxcblx0aGlkZGVuVHlwZXM6ICAgIFtdLFxuXHRsaW5rRGlzdDogICAgICAgNjAsXG5cdGNoYXJnZVN0cjogICAgICAxMjAsXG5cdGdyYXZpdHlTdHI6ICAgICAwLjAzLFxuXHRzZWFyY2hRdWVyeTogICAgJycsXG5cdHNlbGVjdGVkRG9tYWluOiBudWxsLFxufTtcblxuY2xhc3MgU2VtYW50aWNHcmFwaFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG5cdHByaXZhdGUgcGx1Z2luOiBMTE1XaWtpU2VtYW50aWNHcmFwaDtcblx0cHJpdmF0ZSBub2RlczogV2lraU5vZGVbXSA9IFtdO1xuXHRwcml2YXRlIGVkZ2VzOiBXaWtpRWRnZVtdID0gW107XG5cdHByaXZhdGUgYW5hbHl0aWNzOiBBbmFseXRpY3MgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzaW06IFJldHVyblR5cGU8dHlwZW9mIGZvcmNlU2ltdWxhdGlvbj4gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSB6b29tQmVoYXZpb3IhOiBab29tQmVoYXZpb3I8U1ZHU1ZHRWxlbWVudCwgdW5rbm93bj47XG5cblx0Ly8gdmlzaWJpbGl0eSBzdGF0ZVxuXHRwcml2YXRlIHNob3dOb2RlTGFiZWxzID0gdHJ1ZTtcblx0cHJpdmF0ZSBzaG93RWRnZUxhYmVscyA9IHRydWU7XG5cdHByaXZhdGUgc2hvd0Fycm93cyAgICAgPSB0cnVlO1xuXHRwcml2YXRlIHNpZGViYXJPcGVuICAgID0gZmFsc2U7XG5cdHByaXZhdGUgaGlkZGVuVHlwZXMgICAgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cHJpdmF0ZSBzaG93T3JwaGFucyAgICA9IGZhbHNlOyAvLyBvcnBoYW4gbm9kZXMgaGlkZGVuIGJ5IGRlZmF1bHRcblx0cHJpdmF0ZSBzZWxlY3RlZElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzZWFyY2hRdWVyeSAgICA9ICcnO1xuXHRwcml2YXRlIHNlbGVjdGVkRG9tYWluOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfbGFiZWxzVXNlclNldCA9IGZhbHNlOyAvLyB0cnVlIG9uY2UgdXNlciBleHBsaWNpdGx5IHRvZ2dsZXMgbGFiZWwgYnV0dG9uXG5cblx0Ly8gcGh5c2ljcyBzdGF0ZVxuXHRwcml2YXRlIGxpbmtEaXN0ICAgPSA2MDtcblx0cHJpdmF0ZSBjaGFyZ2VTdHIgID0gMTIwO1xuXHRwcml2YXRlIGdyYXZpdHlTdHIgPSAwLjAzO1xuXG5cdC8vIHpvb20gc3RhdGUgXHUyMDE0IHBlcnNpc3RlZCBhY3Jvc3MgcmVmcmVzaGVzXG5cdHByaXZhdGUgc2F2ZWRUcmFuc2Zvcm06IHsgazogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cblx0Ly8gcGVuZGluZyByQUYgaGFuZGxlIFx1MjAxNCBjYW5jZWxsZWQgYmVmb3JlIGVhY2ggcmVidWlsZFxuXHRwcml2YXRlIHBlbmRpbmdSYWY6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHQvLyBndWFyZCBhZ2FpbnN0IGNvbmN1cnJlbnQgYXN5bmMgcmVmcmVzaGVzXG5cdHByaXZhdGUgaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cblx0Ly8gbGl2ZSBEMyBzZWxlY3Rpb25zXG5cdHByaXZhdGUgc2VsTm9kZUVsOiAgICBhbnkgPSBudWxsO1xuXHRwcml2YXRlIHNlbEVkZ2VMaW5lOiAgYW55ID0gbnVsbDtcblx0cHJpdmF0ZSBzZWxFZGdlTGFiZWw6IGFueSA9IG51bGw7XG5cdHByaXZhdGUgc2VsTm9kZUxhYmVsOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIGZvY3VzTm9kZUZuOiAoKGlkOiBzdHJpbmcpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3ZnRWw6IFNWR1NWR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0Ly8gbGF5ZXIgcm93IHJlZmVyZW5jZXMgZm9yIHRvZ2dsZSB1cGRhdGVzIChubyBmdWxsIHNpZGViYXIgcmVidWlsZCBuZWVkZWQpXG5cdHByaXZhdGUgbGF5ZXJSb3dNYXAgPSBuZXcgTWFwPHN0cmluZywgSFRNTEVsZW1lbnQ+KCk7XG5cblx0Ly8gYWRqYWNlbmN5IGZvciBkaW0tb24tc2VsZWN0XG5cdHByaXZhdGUgbmVpZ2hib3JTZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG5cdC8vIGF1dG8tcmVmcmVzaFxuXHRwcml2YXRlIHJlZnJlc2hUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobGVhZjogYW55LCBwbHVnaW46IExMTVdpa2lTZW1hbnRpY0dyYXBoKSB7XG5cdFx0c3VwZXIobGVhZik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5wbHVnaW4ubG9hZERhdGEoKSBhcyBQYXJ0aWFsPEdyYXBoU2V0dGluZ3M+IHwgbnVsbDtcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcblx0XHRjb25zdCBzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTLCAuLi5kYXRhIH07XG5cdFx0dGhpcy5zaG93Tm9kZUxhYmVscyA9IHMuc2hvd05vZGVMYWJlbHM7XG5cdFx0dGhpcy5zaG93RWRnZUxhYmVscyA9IHMuc2hvd0VkZ2VMYWJlbHM7XG5cdFx0dGhpcy5zaG93QXJyb3dzICAgICA9IHMuc2hvd0Fycm93cztcblx0XHR0aGlzLnNpZGViYXJPcGVuICAgID0gcy5zaWRlYmFyT3Blbjtcblx0XHR0aGlzLmhpZGRlblR5cGVzICAgID0gbmV3IFNldChzLmhpZGRlblR5cGVzKTtcblx0XHR0aGlzLmxpbmtEaXN0ICAgICAgID0gcy5saW5rRGlzdDtcblx0XHR0aGlzLmNoYXJnZVN0ciAgICAgID0gcy5jaGFyZ2VTdHI7XG5cdFx0dGhpcy5ncmF2aXR5U3RyICAgICA9IHMuZ3Jhdml0eVN0cjtcblx0XHR0aGlzLnNlYXJjaFF1ZXJ5ICAgID0gcy5zZWFyY2hRdWVyeTtcblx0XHR0aGlzLnNlbGVjdGVkRG9tYWluID0gcy5zZWxlY3RlZERvbWFpbiA/PyBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlU2V0dGluZ3MoKSB7XG5cdFx0Y29uc3QgczogR3JhcGhTZXR0aW5ncyA9IHtcblx0XHRcdHNob3dOb2RlTGFiZWxzOiB0aGlzLnNob3dOb2RlTGFiZWxzLFxuXHRcdFx0c2hvd0VkZ2VMYWJlbHM6IHRoaXMuc2hvd0VkZ2VMYWJlbHMsXG5cdFx0XHRzaG93QXJyb3dzOiAgICAgdGhpcy5zaG93QXJyb3dzLFxuXHRcdFx0c2lkZWJhck9wZW46ICAgIHRoaXMuc2lkZWJhck9wZW4sXG5cdFx0XHRoaWRkZW5UeXBlczogICAgWy4uLnRoaXMuaGlkZGVuVHlwZXNdLFxuXHRcdFx0bGlua0Rpc3Q6ICAgICAgIHRoaXMubGlua0Rpc3QsXG5cdFx0XHRjaGFyZ2VTdHI6ICAgICAgdGhpcy5jaGFyZ2VTdHIsXG5cdFx0XHRncmF2aXR5U3RyOiAgICAgdGhpcy5ncmF2aXR5U3RyLFxuXHRcdFx0c2VhcmNoUXVlcnk6ICAgIHRoaXMuc2VhcmNoUXVlcnksXG5cdFx0XHRzZWxlY3RlZERvbWFpbjogdGhpcy5zZWxlY3RlZERvbWFpbixcblx0XHR9O1xuXHRcdHRoaXMucGx1Z2luLnNhdmVEYXRhKHMpO1xuXHR9XG5cblx0Z2V0Vmlld1R5cGUoKSAgICB7IHJldHVybiBWSUVXX1RZUEU7IH1cblx0Z2V0RGlzcGxheVRleHQoKSB7IHJldHVybiAnU2VtYW50aWMgR3JhcGgnOyB9XG5cdGdldEljb24oKSAgICAgICAgeyByZXR1cm4gJ2dpdC1mb3JrJzsgfVxuXG5cdGFzeW5jIG9uT3BlbigpIHtcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXHRcdGF3YWl0IHRoaXMuYnVpbGRHcmFwaCgpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0Ly8gQXV0by1yZWZyZXNoIG9ubHkgZm9yIHdpa2kvIGZpbGVzIFx1MjAxNCBpZ25vcmUgam91cm5hbCwgYWN0aXZpdGllcywgZXRjLlxuXHRcdGNvbnN0IGlzV2lraUZpbGUgPSAoZjogeyBwYXRoOiBzdHJpbmcgfSkgPT5cblx0XHRcdGYucGF0aC5zdGFydHNXaXRoKCd3aWtpLycpICYmICFFWENMVURFRF9QQVRIUy5zb21lKGV4ID0+IGYucGF0aC5pbmNsdWRlcyhleCkpO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignbW9kaWZ5JywgZiA9PiB7IGlmIChpc1dpa2lGaWxlKGYpKSB0aGlzLnNjaGVkdWxlUmVmcmVzaCgpOyB9KSk7XG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdjcmVhdGUnLCBmID0+IHsgaWYgKGlzV2lraUZpbGUoZikpIHRoaXMuc2NoZWR1bGVSZWZyZXNoKCk7IH0pKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIGYgPT4geyBpZiAoaXNXaWtpRmlsZShmKSkgdGhpcy5zY2hlZHVsZVJlZnJlc2goKTsgfSkpO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbigncmVuYW1lJywgKGYpID0+IHsgaWYgKGlzV2lraUZpbGUoZikpIHRoaXMuc2NoZWR1bGVSZWZyZXNoKCk7IH0pKTtcblx0fVxuXG5cdGFzeW5jIG9uQ2xvc2UoKSB7XG5cdFx0dGhpcy5zaW0/LnN0b3AoKTtcblx0XHRpZiAodGhpcy5yZWZyZXNoVGltZXIgIT09IG51bGwpIHsgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlZnJlc2hUaW1lcik7IHRoaXMucmVmcmVzaFRpbWVyID0gbnVsbDsgfVxuXHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIGNhcHR1cmVab29tKCkge1xuXHRcdGlmICh0aGlzLnN2Z0VsICYmIHRoaXMuem9vbUJlaGF2aW9yKSB7XG5cdFx0XHRjb25zdCB0ID0gdGhpcy56b29tQmVoYXZpb3IudHJhbnNmb3JtKHNlbGVjdCh0aGlzLnN2Z0VsKSBhcyBhbnkpO1xuXHRcdFx0dGhpcy5zYXZlZFRyYW5zZm9ybSA9IHsgazogdC5rLCB4OiB0LngsIHk6IHQueSB9O1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2NoZWR1bGVSZWZyZXNoKCkge1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlZnJlc2hUaW1lcik7XG5cdFx0dGhpcy5yZWZyZXNoVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlZnJlc2hUaW1lciA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5pc1JlZnJlc2hpbmcpIHJldHVybjsgLy8gc2tpcCBpZiBwcmV2aW91cyByZWZyZXNoIHN0aWxsIHJ1bm5pbmdcblx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY2FwdHVyZVpvb20oKTtcblx0XHRcdFx0YXdhaXQgdGhpcy5idWlsZEdyYXBoKCk7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sIDE1MDApO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBtYW51YWxSZWZyZXNoKCkge1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgeyB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVmcmVzaFRpbWVyKTsgdGhpcy5yZWZyZXNoVGltZXIgPSBudWxsOyB9XG5cdFx0aWYgKHRoaXMuaXNSZWZyZXNoaW5nKSByZXR1cm47XG5cdFx0dGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmNhcHR1cmVab29tKCk7XG5cdFx0XHRhd2FpdCB0aGlzLmJ1aWxkR3JhcGgoKTtcblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDEuIFBhcnNlIHZhdWx0IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRhc3luYyBidWlsZEdyYXBoKCkge1xuXHRcdGNvbnN0IG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgV2lraU5vZGU+KCk7XG5cdFx0Y29uc3QgcmF3RWRnZXM6IHsgc3JjOiBzdHJpbmc7IHRndDogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtdO1xuXHRcdGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcihmID0+XG5cdFx0XHRmLnBhdGguc3RhcnRzV2l0aCgnd2lraS8nKSAmJiAhRVhDTFVERURfUEFUSFMuc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKSk7XG5cblx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcblx0XHRcdGNvbnN0IGZtID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk/LmZyb250bWF0dGVyID8/IHt9O1xuXHRcdFx0bm9kZU1hcC5zZXQoZmlsZS5iYXNlbmFtZSwge1xuXHRcdFx0XHRpZDogZmlsZS5iYXNlbmFtZSxcblx0XHRcdFx0dGl0bGU6ICAoZm1bJ3RpdGxlJ10gID8/IGZpbGUuYmFzZW5hbWUpIGFzIHN0cmluZyxcblx0XHRcdFx0dHlwZTogICAoKGZtWyd0eXBlJ10gPz8gJ3Vua25vd24nKSBhcyBzdHJpbmcpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdGRvbWFpbjogKGZtWydkb21haW4nXSA/PyAnJykgYXMgc3RyaW5nLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuY2FjaGVkUmVhZChmaWxlKTtcblx0XHRcdGxldCBtOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsO1xuXHRcdFx0RURHRV9SRS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKChtID0gRURHRV9SRS5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbClcblx0XHRcdFx0cmF3RWRnZXMucHVzaCh7IHNyYzogZmlsZS5iYXNlbmFtZSwgdGd0OiBtWzJdLnRyaW0oKSwgbGFiZWw6IG1bMV0gfSk7XG5cdFx0fVxuXHRcdHRoaXMubm9kZXMgPSBBcnJheS5mcm9tKG5vZGVNYXAudmFsdWVzKCkpO1xuXHRcdHRoaXMuZWRnZXMgPSByYXdFZGdlc1xuXHRcdFx0LmZpbHRlcihlID0+IG5vZGVNYXAuaGFzKGUuc3JjKSAmJiBub2RlTWFwLmhhcyhlLnRndCkpXG5cdFx0XHQubWFwKGUgPT4gKHsgc291cmNlOiBlLnNyYywgdGFyZ2V0OiBlLnRndCwgbGFiZWw6IGUubGFiZWwgfSkpO1xuXHRcdHRoaXMuYW5hbHl0aWNzID0gdGhpcy5jb21wdXRlQW5hbHl0aWNzKCk7XG5cdH1cblxuXHQvLyBcdTI1MDBcdTI1MDAgMi4gQW5hbHl0aWNzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRwcml2YXRlIGNvbXB1dGVBbmFseXRpY3MoKTogQW5hbHl0aWNzIHtcblx0XHRjb25zdCBkZWdyZWVPZiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCBlIG9mIHRoaXMuZWRnZXMpIHtcblx0XHRcdGNvbnN0IHMgPSBlLnNvdXJjZSBhcyBzdHJpbmcsIHQgPSBlLnRhcmdldCBhcyBzdHJpbmc7XG5cdFx0XHRkZWdyZWVPZi5zZXQocywgKGRlZ3JlZU9mLmdldChzKT8/MCkrMSk7XG5cdFx0XHRkZWdyZWVPZi5zZXQodCwgKGRlZ3JlZU9mLmdldCh0KT8/MCkrMSk7XG5cdFx0fVxuXHRcdGNvbnN0IG4gPSB0aGlzLm5vZGVzLmxlbmd0aCwgbSA9IHRoaXMuZWRnZXMubGVuZ3RoO1xuXHRcdGNvbnN0IGRlbnNpdHkgID0gbj4xID8gKyhtLyhuKihuLTEpKSkudG9GaXhlZCg0KSA6IDA7XG5cdFx0Y29uc3QgYXZnRGVnICAgPSBuPjAgPyArKFsuLi5kZWdyZWVPZi52YWx1ZXMoKV0ucmVkdWNlKChhLGIpPT5hK2IsMCkvbikudG9GaXhlZCgyKSA6IDA7XG5cdFx0Y29uc3Qgb3JwaGFuSWRzID0gdGhpcy5ub2Rlcy5maWx0ZXIobmQ9PiFkZWdyZWVPZi5oYXMobmQuaWQpKS5tYXAobmQ9Pm5kLmlkKTtcblxuXHRcdGNvbnN0IHR5cGVDb3VudHMgPSBuZXcgTWFwPHN0cmluZyxudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCBuZCBvZiB0aGlzLm5vZGVzKSB0eXBlQ291bnRzLnNldChuZC50eXBlLCh0eXBlQ291bnRzLmdldChuZC50eXBlKT8/MCkrMSk7XG5cdFx0Y29uc3QgbGF5ZXJzID0gTEFZRVJfT1JERVIubWFwKG5hbWU9Pih7XG5cdFx0XHRuYW1lLCBjb2xvcjogTk9ERV9DT0xPUlNbbmFtZS50b0xvd2VyQ2FzZSgpXT8/JyM4ODgnLFxuXHRcdFx0Y291bnQ6IHR5cGVDb3VudHMuZ2V0KG5hbWUudG9Mb3dlckNhc2UoKSk/PzAsXG5cdFx0fSkpO1xuXG5cdFx0Y29uc3QgZWRnZUNudCA9IG5ldyBNYXA8c3RyaW5nLG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IGUgb2YgdGhpcy5lZGdlcykgZWRnZUNudC5zZXQoZS5sYWJlbCwoZWRnZUNudC5nZXQoZS5sYWJlbCk/PzApKzEpO1xuXHRcdGNvbnN0IGVkZ2VUeXBlcyA9IFsuLi5lZGdlQ250LmVudHJpZXMoKV0uc29ydCgoYSxiKT0+YlsxXS1hWzFdKS5tYXAoKFtsYWJlbCxjb3VudF0pPT4oe2xhYmVsLGNvdW50fSkpO1xuXG5cdFx0Y29uc3QgaHVicyA9IHRoaXMubm9kZXMuZmlsdGVyKG5kPT5kZWdyZWVPZi5oYXMobmQuaWQpKVxuXHRcdFx0LnNvcnQoKGEsYik9PihkZWdyZWVPZi5nZXQoYi5pZCk/PzApLShkZWdyZWVPZi5nZXQoYS5pZCk/PzApKS5zbGljZSgwLDEwKVxuXHRcdFx0Lm1hcChuZD0+KHtpZDpuZC5pZCxkZWc6ZGVncmVlT2YuZ2V0KG5kLmlkKSEsdHlwZTpuZC50eXBlfSkpO1xuXG5cdFx0Y29uc3QgZG9tYWluQ250ID0gbmV3IE1hcDxzdHJpbmcsbnVtYmVyPigpO1xuXHRcdGZvciAoY29uc3QgbmQgb2YgdGhpcy5ub2RlcykgaWYobmQuZG9tYWluKSBkb21haW5DbnQuc2V0KG5kLmRvbWFpbiwoZG9tYWluQ250LmdldChuZC5kb21haW4pPz8wKSsxKTtcblx0XHRjb25zdCBkb21haW5zID0gWy4uLmRvbWFpbkNudC5lbnRyaWVzKCldLnNvcnQoKGEsYik9PmJbMV0tYVsxXSkubWFwKChbbmFtZSxjb3VudF0pPT4oe25hbWUsY291bnR9KSk7XG5cblx0XHRyZXR1cm4ge24sbSxkZW5zaXR5LGF2Z0RlZyxvcnBoYW5zOm9ycGhhbklkcy5sZW5ndGgsb3JwaGFuSWRzLGxheWVycyxlZGdlVHlwZXMsaHVicyxkb21haW5zLGRlZ3JlZU9mfTtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAzLiBEaW0gaGVscGVycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cHJpdmF0ZSBidWlsZEFkamFjZW5jeShzaW1FZGdlczoge3NvdXJjZTpXaWtpTm9kZTt0YXJnZXQ6V2lraU5vZGV9W10pIHtcblx0XHRjb25zdCBhZGogPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XG5cdFx0Zm9yIChjb25zdCBlIG9mIHNpbUVkZ2VzKSB7XG5cdFx0XHRpZiAoIWFkai5oYXMoZS5zb3VyY2UuaWQpKSBhZGouc2V0KGUuc291cmNlLmlkLCBuZXcgU2V0KCkpO1xuXHRcdFx0aWYgKCFhZGouaGFzKGUudGFyZ2V0LmlkKSkgYWRqLnNldChlLnRhcmdldC5pZCwgbmV3IFNldCgpKTtcblx0XHRcdGFkai5nZXQoZS5zb3VyY2UuaWQpIS5hZGQoZS50YXJnZXQuaWQpO1xuXHRcdFx0YWRqLmdldChlLnRhcmdldC5pZCkhLmFkZChlLnNvdXJjZS5pZCk7XG5cdFx0fVxuXHRcdHJldHVybiBhZGo7XG5cdH1cblxuXHRwcml2YXRlIGFwcGx5VmlzaWJpbGl0eShhZGo6IE1hcDxzdHJpbmcsU2V0PHN0cmluZz4+KSB7XG5cdFx0aWYgKCF0aGlzLnNlbE5vZGVFbCkgcmV0dXJuO1xuXHRcdGNvbnN0IHNlbCAgPSB0aGlzLnNlbGVjdGVkSWQ7XG5cdFx0Y29uc3QgbmVpZ2hib3JzID0gc2VsID8gKGFkai5nZXQoc2VsKSA/PyBuZXcgU2V0KCkpIDogbnVsbDtcblx0XHRjb25zdCBkb20gPSB0aGlzLnNlbGVjdGVkRG9tYWluO1xuXG5cdFx0Ly8gbm9kZSBvcGFjaXR5IC8gZGlzcGxheVxuXHRcdHRoaXMuc2VsTm9kZUVsLnN0eWxlKCdvcGFjaXR5JywgKGQ6IFdpa2lOb2RlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXMoZC50eXBlKSkgcmV0dXJuICcwJztcblx0XHRcdGlmICghdGhpcy5zaG93T3JwaGFucyAmJiAoYWRqLmdldChkLmlkKT8uc2l6ZSA/PyAwKSA9PT0gMCkgcmV0dXJuICcwJztcblx0XHRcdGlmIChkb20gJiYgZC5kb21haW4gIT09IGRvbSkgcmV0dXJuICcwLjA3Jztcblx0XHRcdGlmICghc2VsKSByZXR1cm4gJzEnO1xuXHRcdFx0cmV0dXJuIGQuaWQgPT09IHNlbCB8fCBuZWlnaGJvcnMhLmhhcyhkLmlkKSA/ICcxJyA6ICcwLjA3Jztcblx0XHR9KS5zdHlsZSgnZGlzcGxheScsIChkOiBXaWtpTm9kZSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKGQudHlwZSkpIHJldHVybiAnbm9uZSc7XG5cdFx0XHRpZiAoIXRoaXMuc2hvd09ycGhhbnMgJiYgKGFkai5nZXQoZC5pZCk/LnNpemUgPz8gMCkgPT09IDApIHJldHVybiAnbm9uZSc7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9KTtcblxuXHRcdC8vIGVkZ2Ugb3BhY2l0eVxuXHRcdGNvbnN0IGVkZ2VPcGFjaXR5ID0gKGU6IGFueSkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IChlLnNvdXJjZSBhcyBXaWtpTm9kZSksIHQgPSAoZS50YXJnZXQgYXMgV2lraU5vZGUpO1xuXHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKHMudHlwZSkgfHwgdGhpcy5oaWRkZW5UeXBlcy5oYXModC50eXBlKSkgcmV0dXJuICcwJztcblx0XHRcdGlmIChkb20gJiYgcy5kb21haW4gIT09IGRvbSAmJiB0LmRvbWFpbiAhPT0gZG9tKSByZXR1cm4gJzAuMDQnO1xuXHRcdFx0aWYgKCFzZWwpIHJldHVybiAnMC41NSc7XG5cdFx0XHRyZXR1cm4gKHMuaWQ9PT1zZWwgfHwgdC5pZD09PXNlbCkgPyAnMC45JyA6ICcwLjA0Jztcblx0XHR9O1xuXG5cdFx0dGhpcy5zZWxFZGdlTGluZT8uc3R5bGUoJ29wYWNpdHknLCBlZGdlT3BhY2l0eSk7XG5cdFx0dGhpcy5zZWxFZGdlTGFiZWw/LnN0eWxlKCdvcGFjaXR5JywgZWRnZU9wYWNpdHkpXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCB0aGlzLnNob3dFZGdlTGFiZWxzID8gbnVsbCA6ICdub25lJyk7XG5cdFx0dGhpcy5zZWxOb2RlTGFiZWw/LnN0eWxlKCdkaXNwbGF5JywgdGhpcy5zaG93Tm9kZUxhYmVscyA/IG51bGwgOiAnbm9uZScpO1xuXHRcdHRoaXMuc2VsRWRnZUxpbmU/LmF0dHIoJ21hcmtlci1lbmQnLCB0aGlzLnNob3dBcnJvd3MgPyAndXJsKCNsbG0tYXJyb3cpJyA6IG51bGwpO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDQuIFJlbmRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cmVuZGVyKCkge1xuXHRcdC8vIFN0b3Agb2xkIHNpbXVsYXRpb24gYW5kIGNhbmNlbCBhbnkgcGVuZGluZyByQUYgYmVmb3JlIHJlYnVpbGRpbmcgRE9NXG5cdFx0dGhpcy5zaW0/LnN0b3AoKTtcblx0XHRpZiAodGhpcy5wZW5kaW5nUmFmICE9PSBudWxsKSB7IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucGVuZGluZ1JhZik7IHRoaXMucGVuZGluZ1JhZiA9IG51bGw7IH1cblxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0Y29udGFpbmVyLmVtcHR5KCk7XG5cdFx0Y29udGFpbmVyLmFkZENsYXNzKCdsbG0tZ3JhcGgtY29udGFpbmVyJyk7XG5cdFx0Y29uc3QgQSA9IHRoaXMuYW5hbHl0aWNzITtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBBdXRvLXNjYWxlIHBoeXNpY3MgdG8gZ3JhcGggc2l6ZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBOID0gdGhpcy5ub2Rlcy5sZW5ndGg7XG5cdFx0aWYgKE4gPiAwKSB7XG5cdFx0XHQvLyBjaGFyZ2U6IG1vcmUgbm9kZXMgXHUyMTkyIHN0cm9uZ2VyIHJlcHVsc2lvbiBuZWVkZWRcblx0XHRcdHRoaXMuY2hhcmdlU3RyID0gTWF0aC5taW4oODAwLCBNYXRoLm1heCgxMjAsIE1hdGgucm91bmQoTiAqIDIpKSk7XG5cdFx0XHQvLyBsaW5rIGRpc3RhbmNlOiBzcHJlYWQgc2NhbGVzIHdpdGggc3FydChOKVxuXHRcdFx0dGhpcy5saW5rRGlzdCAgPSBNYXRoLm1pbigyMDAsIE1hdGgubWF4KDUwLCBNYXRoLnJvdW5kKE1hdGguc3FydChOKSAqIDgpKSk7XG5cdFx0XHQvLyBMYWJlbHMgYWx3YXlzIE9OIFx1MjAxNCB6b29tIGhhbmRsZXIgZmFkZXMgdGhlbSBvdXQgYXV0b21hdGljYWxseSBhdCBzbWFsbCBzY2FsZVxuXHRcdFx0Ly8gKG5vIHBlci1OIGhpZGluZyBuZWVkZWQ7IHVzZXIgY2FuIHN0aWxsIHRvZ2dsZSB3aXRoIGJ1dHRvbilcblx0XHR9XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgVG9vbGJhciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCB0b29sYmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ2xsbS1ncmFwaC10b29sYmFyJyB9KTtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBTZWFyY2ggYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IHNlYXJjaEJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoYmFyJyB9KTtcblx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaEJhci5jcmVhdGVFbCgnaW5wdXQnLCB7XG5cdFx0XHRjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoJyxcblx0XHRcdGF0dHI6IHsgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ1NlYXJjaCBub2Rlc1x1MjAyNiAodGl0bGUsIHR5cGUsIGRvbWFpbiknIH1cblx0XHR9KTtcblx0XHQvLyBDbGVhciBidXR0b25cblx0XHRjb25zdCBzZWFyY2hDbGVhciA9IHNlYXJjaEJhci5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoLWNsZWFyJywgdGV4dDogJ1x1MDBENycgfSk7XG5cdFx0c2VhcmNoQ2xlYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdC8vIFJlc3RvcmUgc2F2ZWQgc2VhcmNoIHF1ZXJ5XG5cdFx0aWYgKHRoaXMuc2VhcmNoUXVlcnkpIHtcblx0XHRcdHNlYXJjaElucHV0LnZhbHVlID0gdGhpcy5zZWFyY2hRdWVyeTtcblx0XHRcdHNlYXJjaENsZWFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbHlTZWFyY2ggPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBxID0gdGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblx0XHRcdHNlYXJjaENsZWFyLnN0eWxlLmRpc3BsYXkgPSBxID8gJ2ZsZXgnIDogJ25vbmUnO1xuXHRcdFx0aWYgKCF0aGlzLnNlbE5vZGVFbCkgcmV0dXJuO1xuXHRcdFx0aWYgKCFxKSB7XG5cdFx0XHRcdHRoaXMuc2VsTm9kZUVsLnN0eWxlKCdvcGFjaXR5JywgbnVsbCkuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgbnVsbCk7XG5cdFx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LnN0eWxlKCdvcGFjaXR5JywgbnVsbCk7XG5cdFx0XHRcdHRoaXMuc2VsRWRnZUxhYmVsPy5zdHlsZSgnb3BhY2l0eScsIG51bGwpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtYXRjaElkcyA9IG5ldyBTZXQoXG5cdFx0XHRcdHRoaXMubm9kZXNcblx0XHRcdFx0XHQuZmlsdGVyKG4gPT5cblx0XHRcdFx0XHRcdG4udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxuXHRcdFx0XHRcdFx0bi50eXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkgIHx8XG5cdFx0XHRcdFx0XHRuLmRvbWFpbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5tYXAobiA9PiBuLmlkKVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuc2VsTm9kZUVsXG5cdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsICAgICAgICAoZDogV2lraU5vZGUpID0+IG1hdGNoSWRzLmhhcyhkLmlkKSA/ICcxJyA6ICcwLjA3Jylcblx0XHRcdFx0LnN0eWxlKCdwb2ludGVyLWV2ZW50cycsIChkOiBXaWtpTm9kZSkgPT4gbWF0Y2hJZHMuaGFzKGQuaWQpID8gbnVsbCAgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZT8uc3R5bGUoJ29wYWNpdHknLCAoZDogYW55KSA9PlxuXHRcdFx0XHRtYXRjaElkcy5oYXMoKGQuc291cmNlIGFzIFdpa2lOb2RlKS5pZCkgfHwgbWF0Y2hJZHMuaGFzKChkLnRhcmdldCBhcyBXaWtpTm9kZSkuaWQpID8gJzAuNicgOiAnMC4wNScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWw/LnN0eWxlKCdvcGFjaXR5JywgKGQ6IGFueSkgPT5cblx0XHRcdFx0bWF0Y2hJZHMuaGFzKChkLnNvdXJjZSBhcyBXaWtpTm9kZSkuaWQpIHx8IG1hdGNoSWRzLmhhcygoZC50YXJnZXQgYXMgV2lraU5vZGUpLmlkKSA/ICcxJyA6ICcwJyk7XG5cdFx0fTtcblxuXHRcdHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyB0aGlzLnNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7IGFwcGx5U2VhcmNoKCk7IHRoaXMuc2F2ZVNldHRpbmdzKCk7IH0pO1xuXHRcdHNlYXJjaENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnOyB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7IGFwcGx5U2VhcmNoKCk7IHNlYXJjaElucHV0LmZvY3VzKCk7IHRoaXMuc2F2ZVNldHRpbmdzKCk7IH0pO1xuXG5cdFx0Y29uc3QgbWtCdG4gPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBhY3RpdmUgPSBmYWxzZSkgPT4ge1xuXHRcdFx0Y29uc3QgYiA9IHRvb2xiYXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLWJ0bicgfSk7XG5cdFx0XHRzZXRJY29uKGIsIGljb24pO1xuXHRcdFx0Yi5jcmVhdGVTcGFuKHsgdGV4dDogbGFiZWwgfSk7XG5cdFx0XHRiLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcblx0XHRcdGlmIChhY3RpdmUpIGIuYWRkQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScpO1xuXHRcdFx0cmV0dXJuIGI7XG5cdFx0fTtcblx0XHRjb25zdCByZXNldEJ0biAgICA9IG1rQnRuKCdyb3RhdGUtY2N3JywgICdSZXNldCB6b29tJyk7XG5cdFx0Y29uc3QgcmVmcmVzaEJ0biAgPSBta0J0bigncmVmcmVzaC1jdycsICAnUmVmcmVzaCcpO1xuXHRcdGNvbnN0IG5sQnRuICAgICAgID0gbWtCdG4oJ3R5cGUnLCAgICAgICAgICdOb2RlcycsICAgICB0aGlzLnNob3dOb2RlTGFiZWxzKTtcblx0XHRjb25zdCBlbEJ0biAgICA9IG1rQnRuKCdtaW51cycsICAgICAgICAnRWRnZXMnLCAgICAgdGhpcy5zaG93RWRnZUxhYmVscyk7XG5cdFx0Y29uc3QgYXJCdG4gICAgPSBta0J0bignYXJyb3ctcmlnaHQnLCAgJ0Fycm93cycsICAgIHRoaXMuc2hvd0Fycm93cyk7XG5cdFx0Y29uc3Qgc2JCdG4gICAgPSBta0J0bignYmFyLWNoYXJ0LTInLCAgJ0FuYWx5dGljcycpO1xuXHRcdHRvb2xiYXIuY3JlYXRlU3Bhbih7IGNsczonbGxtLWdyYXBoLXN0YXRzJyxcblx0XHRcdHRleHQ6YCR7QS5ufSBub2RlcyBcdTAwQjcgJHtBLm19IGVkZ2VzIFx1MDBCNyBkZW5zaXR5ICR7QS5kZW5zaXR5fWAgfSk7XG5cblxuXHRcdC8vIHBsYWNlaG9sZGVyIGFkamFjZW5jeSAoZmlsbGVkIGFmdGVyIHJBRilcblx0XHRsZXQgYWRqID0gbmV3IE1hcDxzdHJpbmcsU2V0PHN0cmluZz4+KCk7XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgTGF5b3V0OiBTVkcgKyBzaWRlYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IGxheW91dCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tZ3JhcGgtbGF5b3V0JyB9KTtcblx0XHRjb25zdCBzdmdFbCAgPSBsYXlvdXQuY3JlYXRlU3ZnKCdzdmcnLCB7IGNsczogJ2xsbS1ncmFwaC1zdmcnIH0pO1xuXHRcdHRoaXMuc3ZnRWwgICA9IHN2Z0VsO1xuXHRcdGNvbnN0IHNpZGViYXIgPSBsYXlvdXQuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLWdyYXBoLXNpZGViYXInIH0pO1xuXHRcdHRoaXMuYnVpbGRTaWRlYmFyKHNpZGViYXIsIEEsIGFkaik7XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgRDMgc2V0dXAgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3Qgc3ZnID0gc2VsZWN0PFNWR1NWR0VsZW1lbnQsIHVua25vd24+KHN2Z0VsKTtcblx0XHRjb25zdCBnICAgPSBzdmcuYXBwZW5kKCdnJyk7XG5cblx0XHQvLyBMYWJlbCBvcGFjaXR5IGZhZGUgdGhyZXNob2xkcyAoc2NyZWVuLXNwYWNlIHpvb20gaylcblx0XHQvLyBMYWJlbHMgZmFkZSBvdXQgYXMgdXNlciB6b29tcyBvdXQgXHUyMDE0IE9ic2lkaWFuLXN0eWxlXG5cdFx0Y29uc3QgTEFCRUxfRkFERV9NSU4gPSAwLjQ7ICAvLyBmdWxseSBpbnZpc2libGUgYXQgb3IgYmVsb3cgdGhpcyB6b29tXG5cdFx0Y29uc3QgTEFCRUxfRkFERV9NQVggPSAwLjk7ICAvLyBmdWxseSB2aXNpYmxlIGF0IG9yIGFib3ZlIHRoaXMgem9vbVxuXG5cdFx0dGhpcy56b29tQmVoYXZpb3IgPSB6b29tPFNWR1NWR0VsZW1lbnQsIHVua25vd24+KClcblx0XHRcdC5zY2FsZUV4dGVudChbMC4wNSwxMF0pXG5cdFx0XHQub24oJ3pvb20nLCBldiA9PiB7XG5cdFx0XHRcdGcuYXR0cigndHJhbnNmb3JtJywgZXYudHJhbnNmb3JtKTtcblx0XHRcdFx0Y29uc3QgayA9IGV2LnRyYW5zZm9ybS5rO1xuXHRcdFx0XHQvLyBMYWJlbHMgc2NhbGUgbmF0dXJhbGx5IHdpdGggem9vbSAobm8gY291bnRlci1zY2FsZSlcblx0XHRcdFx0Ly8gT3BhY2l0eSBmYWRlcyBncmFkdWFsbHk6IGludmlzaWJsZSB3aGVuIHpvb21lZCBmYXIgb3V0XG5cdFx0XHRcdGNvbnN0IGxhYmVsT3BhY2l0eSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsXG5cdFx0XHRcdFx0KGsgLSBMQUJFTF9GQURFX01JTikgLyAoTEFCRUxfRkFERV9NQVggLSBMQUJFTF9GQURFX01JTilcblx0XHRcdFx0KSk7XG5cdFx0XHRcdGlmICh0aGlzLnNob3dOb2RlTGFiZWxzKVxuXHRcdFx0XHRcdGcuc2VsZWN0QWxsPFNWR1RleHRFbGVtZW50LCB1bmtub3duPignLmxsbS1ncmFwaC1ub2RlLWxhYmVsJylcblx0XHRcdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIFN0cmluZyhsYWJlbE9wYWNpdHkpKTtcblx0XHRcdFx0aWYgKHRoaXMuc2hvd0VkZ2VMYWJlbHMpXG5cdFx0XHRcdFx0Zy5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsIHVua25vd24+KCcubGxtLWdyYXBoLWVkZ2UtbGFiZWwnKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgU3RyaW5nKGxhYmVsT3BhY2l0eSkpO1xuXHRcdFx0fSk7XG5cdFx0c3ZnLmNhbGwodGhpcy56b29tQmVoYXZpb3IpO1xuXG5cdFx0Ly8gUmVzdG9yZSBzYXZlZCB6b29tIHRyYW5zZm9ybSAoYWZ0ZXIgcmVmcmVzaCBvciBsb2FkKVxuXHRcdGlmICh0aGlzLnNhdmVkVHJhbnNmb3JtKSB7XG5cdFx0XHRjb25zdCB7IGssIHgsIHkgfSA9IHRoaXMuc2F2ZWRUcmFuc2Zvcm07XG5cdFx0XHRzdmcuY2FsbCh0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sIHpvb21JZGVudGl0eS50cmFuc2xhdGUoeCwgeSkuc2NhbGUoaykpO1xuXHRcdH1cblxuXHRcdC8vIGNsaWNrIG9uIGJhY2tncm91bmQgXHUyMTkyIGRlc2VsZWN0XG5cdFx0c3ZnLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gc3ZnRWwpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZElkID0gbnVsbDtcblx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlZFRyYW5zZm9ybSA9IG51bGw7XG5cdFx0XHRzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDQwMCkuY2FsbCh0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sIHpvb21JZGVudGl0eSk7XG5cdFx0fSk7XG5cdFx0cmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubWFudWFsUmVmcmVzaCgpKTtcblxuXHRcdC8vIEFycm93IG1hcmtlciBcdTIwMTQgc2NhbGVzIG5hdHVyYWxseSB3aXRoIHpvb20gKG5vIGNvdW50ZXItc2NhbGluZyBuZWVkZWQpXG5cdFx0c3ZnLmFwcGVuZCgnZGVmcycpLmFwcGVuZCgnbWFya2VyJykuYXR0cignaWQnLCdsbG0tYXJyb3cnKVxuXHRcdFx0LmF0dHIoJ3ZpZXdCb3gnLCcwIC0zIDYgNicpLmF0dHIoJ3JlZlgnLDEwKS5hdHRyKCdyZWZZJywwKVxuXHRcdFx0LmF0dHIoJ21hcmtlcldpZHRoJywgNikuYXR0cignbWFya2VySGVpZ2h0JywgNilcblx0XHRcdC5hdHRyKCdtYXJrZXJVbml0cycsJ3N0cm9rZVdpZHRoJylcblx0XHRcdC5hdHRyKCdvcmllbnQnLCdhdXRvJylcblx0XHRcdC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdkJywnTTAsLTNMNiwwTDAsMycpLmF0dHIoJ2ZpbGwnLCd2YXIoLS10ZXh0LWZhaW50KScpO1xuXG5cdFx0Ly8gUmVzb2x2ZSBub2RlIHJlZnNcblx0XHRjb25zdCBub2RlTWFwICAgPSBuZXcgTWFwKHRoaXMubm9kZXMubWFwKG49PltuLmlkLG5dKSk7XG5cdFx0Y29uc3Qgc2ltRWRnZXMgID0gdGhpcy5lZGdlcy5tYXAoZT0+KHtcblx0XHRcdC4uLmUsXG5cdFx0XHRzb3VyY2U6IG5vZGVNYXAuZ2V0KGUuc291cmNlIGFzIHN0cmluZykhLFxuXHRcdFx0dGFyZ2V0OiBub2RlTWFwLmdldChlLnRhcmdldCBhcyBzdHJpbmcpISxcblx0XHR9KSkuZmlsdGVyKGU9PmUuc291cmNlJiZlLnRhcmdldCk7XG5cblx0XHR0aGlzLnBlbmRpbmdSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0dGhpcy5wZW5kaW5nUmFmID0gbnVsbDtcblx0XHRcdGNvbnN0IFcgPSBzdmdFbC5jbGllbnRXaWR0aCAgfHwgOTAwO1xuXHRcdFx0Y29uc3QgSCA9IHN2Z0VsLmNsaWVudEhlaWdodCB8fCA3MDA7XG5cblx0XHRcdC8vIEZvcmNlcyAoc3RvcmVkIHNvIHNsaWRlcnMgY2FuIHVwZGF0ZSB0aGVtKVxuXHRcdFx0Ly8gTGluayBzdHJlbmd0aDogMS9zcXJ0KGRlZ19zcmMgKiBkZWdfdGd0KSBcdTIwMTQgaHViIG5vZGVzIHB1bGwgd2Vha2VyIChsaWtlIE9ic2lkaWFuKVxuXHRcdFx0Y29uc3QgbGlua0ZvcmNlICAgPSBmb3JjZUxpbms8V2lraU5vZGUsV2lraUVkZ2U+KHNpbUVkZ2VzKVxuXHRcdFx0XHQuaWQoZD0+ZC5pZCkuZGlzdGFuY2UodGhpcy5saW5rRGlzdClcblx0XHRcdFx0LnN0cmVuZ3RoKChkOiBhbnkpID0+IDEgLyBNYXRoLnNxcnQoXG5cdFx0XHRcdFx0TWF0aC5tYXgoMSwgQS5kZWdyZWVPZi5nZXQoKGQuc291cmNlIGFzIFdpa2lOb2RlKS5pZCkgPz8gMSkgKlxuXHRcdFx0XHRcdE1hdGgubWF4KDEsIEEuZGVncmVlT2YuZ2V0KChkLnRhcmdldCBhcyBXaWtpTm9kZSkuaWQpID8/IDEpXG5cdFx0XHRcdCkpO1xuXHRcdFx0Y29uc3QgY2hhcmdlRm9yY2UgPSBmb3JjZU1hbnlCb2R5PFdpa2lOb2RlPigpLnN0cmVuZ3RoKC10aGlzLmNoYXJnZVN0cik7XG5cdFx0XHRjb25zdCBnWCA9IGZvcmNlWDxXaWtpTm9kZT4oVy8yKS5zdHJlbmd0aCh0aGlzLmdyYXZpdHlTdHIpO1xuXHRcdFx0Y29uc3QgZ1kgPSBmb3JjZVk8V2lraU5vZGU+KEgvMikuc3RyZW5ndGgodGhpcy5ncmF2aXR5U3RyKTtcblx0XHRcdC8vIENvbGxpc2lvbiByYWRpdXMgc2NhbGVzIHdpdGggTiB0byBwcmV2ZW50IG92ZXJsYXBcblx0XHRcdGNvbnN0IGNvbGxpZGVSID0gTWF0aC5tYXgoMTUsIE1hdGguc3FydChOKSAqIDIpO1xuXG5cdFx0XHR0aGlzLnNpbSA9IGZvcmNlU2ltdWxhdGlvbjxXaWtpTm9kZT4odGhpcy5ub2Rlcylcblx0XHRcdFx0LmZvcmNlKCdsaW5rJywgICAgbGlua0ZvcmNlKVxuXHRcdFx0XHQuZm9yY2UoJ2NoYXJnZScsICBjaGFyZ2VGb3JjZSlcblx0XHRcdFx0LmZvcmNlKCdneCcsICAgICAgZ1gpXG5cdFx0XHRcdC5mb3JjZSgnZ3knLCAgICAgIGdZKVxuXHRcdFx0XHQuZm9yY2UoJ2NvbGxpZGUnLCBmb3JjZUNvbGxpZGUoY29sbGlkZVIpKTtcblxuXHRcdFx0Ly8gQnVpbGQgYWRqYWNlbmN5IGFmdGVyIHNpbUVkZ2VzIHJlc29sdmVkXG5cdFx0XHRhZGogPSB0aGlzLmJ1aWxkQWRqYWNlbmN5KHNpbUVkZ2VzKTtcblxuXHRcdFx0Ly8gRWRnZXNcblx0XHRcdGNvbnN0IGVkZ2VMaW5lID0gZy5hcHBlbmQoJ2cnKVxuXHRcdFx0XHQuc2VsZWN0QWxsPFNWR0xpbmVFbGVtZW50LHR5cGVvZiBzaW1FZGdlc1swXT4oJ2xpbmUnKVxuXHRcdFx0XHQuZGF0YShzaW1FZGdlcykuam9pbignbGluZScpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsJ2xsbS1ncmFwaC1lZGdlJylcblx0XHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsIDEuMilcblx0XHRcdFx0LmF0dHIoJ21hcmtlci1lbmQnLCd1cmwoI2xsbS1hcnJvdyknKTtcblx0XHRcdHRoaXMuc2VsRWRnZUxpbmUgPSBlZGdlTGluZTtcblxuXHRcdFx0Y29uc3QgZWRnZUxhYmVsID0gZy5hcHBlbmQoJ2cnKVxuXHRcdFx0XHQuc2VsZWN0QWxsPFNWR1RleHRFbGVtZW50LHR5cGVvZiBzaW1FZGdlc1swXT4oJ3RleHQnKVxuXHRcdFx0XHQuZGF0YShzaW1FZGdlcykuam9pbigndGV4dCcpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsJ2xsbS1ncmFwaC1lZGdlLWxhYmVsJylcblx0XHRcdFx0LmF0dHIoJ3BvaW50ZXItZXZlbnRzJywnbm9uZScpXG5cdFx0XHRcdC50ZXh0KGQ9PmQubGFiZWwpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWwgPSBlZGdlTGFiZWw7XG5cblx0XHRcdC8vIE5vZGVzXG5cdFx0XHRjb25zdCBub2RlRWwgPSBnLmFwcGVuZCgnZycpXG5cdFx0XHRcdC5zZWxlY3RBbGw8U1ZHR0VsZW1lbnQsV2lraU5vZGU+KCdnJylcblx0XHRcdFx0LmRhdGEodGhpcy5ub2Rlcykuam9pbignZycpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsJ2xsbS1ncmFwaC1ub2RlJylcblx0XHRcdFx0LmNhbGwoZHJhZzxTVkdHRWxlbWVudCxXaWtpTm9kZT4oKVxuXHRcdFx0XHRcdC5vbignc3RhcnQnLChldixkKT0+eyBpZighZXYuYWN0aXZlKSB0aGlzLnNpbT8uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7IGQuZng9ZC54OyBkLmZ5PWQueTsgfSlcblx0XHRcdFx0XHQub24oJ2RyYWcnLCAoZXYsZCk9PnsgZC5meD1ldi54OyBkLmZ5PWV2Lnk7IH0pXG5cdFx0XHRcdFx0Lm9uKCdlbmQnLCAgKGV2LGQpPT57IGlmKCFldi5hY3RpdmUpIHRoaXMuc2ltPy5hbHBoYVRhcmdldCgwKTsgZC5meD1udWxsOyBkLmZ5PW51bGw7IH0pKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50LCBkKSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJZCA9PT0gZC5pZCkge1xuXHRcdFx0XHRcdFx0Ly8gc2Vjb25kIGNsaWNrIFx1MjE5MiBvcGVuIGZpbGVcblx0XHRcdFx0XHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoZC5pZCwnJyxmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIGZpcnN0IGNsaWNrIFx1MjE5MiBzZWxlY3QgKyBkaW1cblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJZCA9IGQuaWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNlbE5vZGVFbCA9IG5vZGVFbDtcblxuXHRcdFx0bm9kZUVsLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRjb25zdCBnID0gc2VsZWN0PFNWR0dFbGVtZW50LCBXaWtpTm9kZT4odGhpcyBhcyBTVkdHRWxlbWVudCk7XG5cdFx0XHRcdGNvbnN0IGNvbG9yICA9IE5PREVfQ09MT1JTW2QudHlwZV0gPz8gJyNCQUIwQUMnO1xuXHRcdFx0XHRjb25zdCBzaGFwZSAgPSBOT0RFX1NIQVBFU1tkLnR5cGVdICA/PyAnY2lyY2xlJztcblx0XHRcdFx0Y29uc3QgY2xzICAgID0gJ2xsbS1ncmFwaC1ub2RlLXNoYXBlJztcblx0XHRcdFx0Y29uc3QgZGVnICAgID0gQS5kZWdyZWVPZi5nZXQoZC5pZCkgPz8gMDtcblx0XHRcdFx0Ly8gU2NhbGUgbm9kZSBzaXplIGJ5IGRlZ3JlZSAobG9nIHNjYWxlLCBsaWtlIE9ic2lkaWFuKVxuXHRcdFx0XHRjb25zdCBzID0gMSArIE1hdGgubG9nMXAoZGVnKSAqIDAuMzU7IC8vIHNcdTIyNDgxIGZvciBkZWc9MCwgc1x1MjI0ODIuNCBmb3IgZGVnPTIwXG5cdFx0XHRcdGNvbnN0IHN3ID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsbG0tbm9kZS1zaGFwZS13cmFwcGVyJylcblx0XHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgYHNjYWxlKCR7c30pYCk7XG5cdFx0XHRcdGlmIChzaGFwZSA9PT0gJ2RpYW1vbmQnKSB7XG5cdFx0XHRcdFx0c3cuYXBwZW5kKCdyZWN0JykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cignd2lkdGgnLCAxMSkuYXR0cignaGVpZ2h0JywgMTEpXG5cdFx0XHRcdFx0XHQuYXR0cigneCcsIC01LjUpLmF0dHIoJ3knLCAtNS41KVxuXHRcdFx0XHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoNDUpJykuYXR0cigncngnLCAxLjUpXG5cdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIGNvbG9yKTtcblx0XHRcdFx0fSBlbHNlIGlmIChzaGFwZSA9PT0gJ3NxdWFyZScpIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ3JlY3QnKS5hdHRyKCdjbGFzcycsIGNscylcblx0XHRcdFx0XHRcdC5hdHRyKCd3aWR0aCcsIDEzKS5hdHRyKCdoZWlnaHQnLCAxMylcblx0XHRcdFx0XHRcdC5hdHRyKCd4JywgLTYuNSkuYXR0cigneScsIC02LjUpLmF0dHIoJ3J4JywgMilcblx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNoYXBlID09PSAnaGV4YWdvbicpIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ3BvbHlnb24nKS5hdHRyKCdjbGFzcycsIGNscylcblx0XHRcdFx0XHRcdC5hdHRyKCdwb2ludHMnLCAnMCwtOCA2LjksLTQgNi45LDQgMCw4IC02LjksNCAtNi45LC00Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN3LmFwcGVuZCgnY2lyY2xlJykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cigncicsIDcpLmF0dHIoJ2ZpbGwnLCBjb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBub2RlTGFiZWwgPSBub2RlRWwuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLW5vZGUtbGFiZWwnKVxuXHRcdFx0XHQuYXR0cignZHknLCcwLjM1ZW0nKS5hdHRyKCd4JywxMykuYXR0cigncG9pbnRlci1ldmVudHMnLCdub25lJylcblx0XHRcdFx0LnRleHQoZD0+ZC50aXRsZS5sZW5ndGg+MjY/ZC50aXRsZS5zbGljZSgwLDI0KSsnXHUyMDI2JzpkLnRpdGxlKVxuXHRcdFx0XHQuYXR0cignZGlzcGxheScsIHRoaXMuc2hvd05vZGVMYWJlbHMgPyBudWxsIDogJ25vbmUnKTsgLy8gYXBwbHkgaW1tZWRpYXRlbHlcblx0XHRcdHRoaXMuc2VsTm9kZUxhYmVsID0gbm9kZUxhYmVsO1xuXG5cdFx0XHQvLyBUb29sdGlwXG5cdFx0XHRjb25zdCB0b29sdGlwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczonbGxtLWdyYXBoLXRvb2x0aXAnIH0pO1xuXHRcdFx0bm9kZUVsXG5cdFx0XHRcdC5vbignbW91c2VlbnRlcicsKF9ldixkKT0+e1xuXHRcdFx0XHRcdGNvbnN0IGRlZyA9IEEuZGVncmVlT2YuZ2V0KGQuaWQpPz8wO1xuXHRcdFx0XHRcdGNvbnN0IG5laWdoYm9ycyA9IGFkai5nZXQoZC5pZCk/P25ldyBTZXQoKTtcblx0XHRcdFx0XHR0b29sdGlwLmlubmVySFRNTCA9XG5cdFx0XHRcdFx0XHRgPHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+PGJyPmArXG5cdFx0XHRcdFx0XHRgPHNwYW4gY2xhc3M9XCJsbG0tdHAtdHlwZVwiIHN0eWxlPVwiY29sb3I6JHtOT0RFX0NPTE9SU1tkLnR5cGVdPz8nIzg4OCd9XCI+JHtkLnR5cGV9PC9zcGFuPmArXG5cdFx0XHRcdFx0XHQoZC5kb21haW4/YDxicj48ZW0+JHtkLmRvbWFpbn08L2VtPmA6JycpK1xuXHRcdFx0XHRcdFx0YDxicj48c21hbGw+ZGVncmVlOiAke2RlZ30gXHUwMEI3IG5laWdoYm9yczogJHtuZWlnaGJvcnMuc2l6ZX08L3NtYWxsPmArXG5cdFx0XHRcdFx0XHRgPGJyPjxzbWFsbCBjbGFzcz1cImxsbS10cC1oaW50XCI+Y2xpY2sgdG8gc2VsZWN0IFx1MDBCNyBjbGljayBhZ2FpbiB0byBvcGVuPC9zbWFsbD5gO1xuXHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ21vdXNlbW92ZScsKGV2OlBvaW50ZXJFdmVudCk9Pntcblx0XHRcdFx0XHRjb25zdCByPWNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLmxlZnQ9KGV2LmNsaWVudFgtci5sZWZ0KzE0KSsncHgnO1xuXHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUudG9wID0oZXYuY2xpZW50WS1yLnRvcCArMTQpKydweCc7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignbW91c2VsZWF2ZScsKCk9PnsgdG9vbHRpcC5zdHlsZS5kaXNwbGF5PSdub25lJzsgfSk7XG5cblx0XHRcdC8vIEZvY3VzIG5vZGUgKGNhbGxlZCBmcm9tIHNpZGViYXIgaHViIGNsaWNrcylcblx0XHRcdHRoaXMuZm9jdXNOb2RlRm4gPSAoaWQ6c3RyaW5nKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5kID0gbm9kZU1hcC5nZXQoaWQpO1xuXHRcdFx0XHRpZiAoIW5kfHxuZC54PT1udWxsfHxuZC55PT1udWxsKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJZCA9IGlkO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0XHRjb25zdCBjVz1zdmdFbC5jbGllbnRXaWR0aCwgY0g9c3ZnRWwuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDYwMCkuY2FsbChcblx0XHRcdFx0XHR0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sXG5cdFx0XHRcdFx0em9vbUlkZW50aXR5LnRyYW5zbGF0ZShjVy8yLGNILzIpLnNjYWxlKDEuOCkudHJhbnNsYXRlKC1uZC54ISwtbmQueSEpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBXaXJlIHNpZGViYXIgaHViIGNsaWNrc1xuXHRcdFx0c2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ub2RlLWlkXScpLmZvckVhY2goZWw9Pntcblx0XHRcdFx0KGVsIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PlxuXHRcdFx0XHRcdHRoaXMuZm9jdXNOb2RlRm4/LigoZWwgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQubm9kZUlkISkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFRpY2tcblx0XHRcdHRoaXMuc2ltLm9uKCd0aWNrJywoKT0+e1xuXHRcdFx0XHRlZGdlTGluZVxuXHRcdFx0XHRcdC5hdHRyKCd4MScsZD0+KGQuc291cmNlIGFzIFdpa2lOb2RlKS54ISlcblx0XHRcdFx0XHQuYXR0cigneTEnLGQ9PihkLnNvdXJjZSBhcyBXaWtpTm9kZSkueSEpXG5cdFx0XHRcdFx0LmF0dHIoJ3gyJyxkPT4oZC50YXJnZXQgYXMgV2lraU5vZGUpLnghKVxuXHRcdFx0XHRcdC5hdHRyKCd5MicsZD0+KGQudGFyZ2V0IGFzIFdpa2lOb2RlKS55ISk7XG5cdFx0XHRcdGVkZ2VMYWJlbFxuXHRcdFx0XHRcdC5hdHRyKCd4JyxkPT4oKGQuc291cmNlIGFzIFdpa2lOb2RlKS54ISsoZC50YXJnZXQgYXMgV2lraU5vZGUpLnghKS8yKVxuXHRcdFx0XHRcdC5hdHRyKCd5JyxkPT4oKGQuc291cmNlIGFzIFdpa2lOb2RlKS55ISsoZC50YXJnZXQgYXMgV2lraU5vZGUpLnkhKS8yKTtcblx0XHRcdFx0bm9kZUVsLmF0dHIoJ3RyYW5zZm9ybScsZD0+YHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFdpcmUgcGh5c2ljcyBzbGlkZXJzIChtdXN0IGhhcHBlbiBhZnRlciBzaW0gaXMgY3JlYXRlZClcblx0XHRcdHNpZGViYXIucXVlcnlTZWxlY3RvckFsbDxIVE1MSW5wdXRFbGVtZW50PignW2RhdGEtcGh5c2ljc10nKS5mb3JFYWNoKGlucHV0PT57XG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoKT0+e1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9ICtpbnB1dC52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBpbnB1dC5kYXRhc2V0LnBoeXNpY3MhO1xuXHRcdFx0XHRcdGNvbnN0IGxibCA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcblx0XHRcdFx0XHRpZiAobGJsKSBsYmwudGV4dENvbnRlbnQgPSBrZXk9PT0nZ3Jhdml0eVN0cicgPyB2YWwudG9GaXhlZCgyKSA6IFN0cmluZyh2YWwpO1xuXHRcdFx0XHRcdGlmIChrZXk9PT0nbGlua0Rpc3QnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpbmtEaXN0ID0gdmFsO1xuXHRcdFx0XHRcdFx0KHRoaXMuc2ltIS5mb3JjZSgnbGluaycpIGFzIEZvcmNlTGluazxXaWtpTm9kZSxXaWtpRWRnZT4pLmRpc3RhbmNlKHZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nY2hhcmdlU3RyJykge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFyZ2VTdHIgPSB2YWw7XG5cdFx0XHRcdFx0XHQodGhpcy5zaW0hLmZvcmNlKCdjaGFyZ2UnKSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBmb3JjZU1hbnlCb2R5Pikuc3RyZW5ndGgoLXZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nZ3Jhdml0eVN0cicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ3Jhdml0eVN0ciA9IHZhbDtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2d4JykgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VYPikuc3RyZW5ndGgodmFsKTtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2d5JykgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VZPikuc3RyZW5ndGgodmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zaW0hLmFscGhhKDAuNCkucmVzdGFydCgpO1xuXHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGluaXRpYWwgdmlzaWJpbGl0eSAoaGlkZXMgb3JwaGFucywgaGlkZGVuIHR5cGVzLCBldGMuKVxuXHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHR9KTsgLy8gckFGXG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgVG9vbGJhciB0b2dnbGUgd2lyaW5nIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdG5sQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5fbGFiZWxzVXNlclNldCA9IHRydWU7IC8vIHVzZXIgZXhwbGljaXRseSBjaG9zZSBcdTIwMTQgc3RvcCBhdXRvLW1hbmFnaW5nXG5cdFx0XHR0aGlzLnNob3dOb2RlTGFiZWxzPSF0aGlzLnNob3dOb2RlTGFiZWxzO1xuXHRcdFx0bmxCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaG93Tm9kZUxhYmVscyk7XG5cdFx0XHR0aGlzLnNlbE5vZGVMYWJlbD8uYXR0cignZGlzcGxheScsdGhpcy5zaG93Tm9kZUxhYmVscz9udWxsOidub25lJyk7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5zaG93RWRnZUxhYmVscz0hdGhpcy5zaG93RWRnZUxhYmVscztcblx0XHRcdGVsQnRuLnRvZ2dsZUNsYXNzKCdsbG0tZ3JhcGgtYnRuLS1hY3RpdmUnLHRoaXMuc2hvd0VkZ2VMYWJlbHMpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWw/LmF0dHIoJ2Rpc3BsYXknLHRoaXMuc2hvd0VkZ2VMYWJlbHM/bnVsbDonbm9uZScpO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblx0XHRhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHRoaXMuc2hvd0Fycm93cz0hdGhpcy5zaG93QXJyb3dzO1xuXHRcdFx0YXJCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaG93QXJyb3dzKTtcblx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LmF0dHIoJ21hcmtlci1lbmQnLHRoaXMuc2hvd0Fycm93cz8ndXJsKCNsbG0tYXJyb3cpJzpudWxsKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0c2JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHR0aGlzLnNpZGViYXJPcGVuPSF0aGlzLnNpZGViYXJPcGVuO1xuXHRcdFx0c2JCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaWRlYmFyT3Blbik7XG5cdFx0XHRzaWRlYmFyLnRvZ2dsZUNsYXNzKCdsbG0tZ3JhcGgtc2lkZWJhci0tb3BlbicsdGhpcy5zaWRlYmFyT3Blbik7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDUuIFNpZGViYXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYnVpbGRTaWRlYmFyKHNpZGViYXI6IEhUTUxFbGVtZW50LCBBOiBBbmFseXRpY3MsIGFkajogTWFwPHN0cmluZyxTZXQ8c3RyaW5nPj4pIHtcblx0XHRjb25zdCBzZWN0aW9uID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHMgPSBzaWRlYmFyLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLXNlY3Rpb24nIH0pO1xuXHRcdFx0cy5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi10aXRsZScsIHRleHQ6IHRpdGxlIH0pO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblxuXHRcdC8vIFBoeXNpY3Mgc2xpZGVyc1xuXHRcdGNvbnN0IHBzID0gc2VjdGlvbignUGh5c2ljcycpO1xuXHRcdGNvbnN0IG1rU2xpZGVyID0gKGxhYmVsOiBzdHJpbmcsIGtleTogc3RyaW5nLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbDogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IHJvdyA9IHBzLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLXNsaWRlci1yb3cnIH0pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6J2xsbS1zYi1zbGlkZXItbGJsJywgdGV4dDogbGFiZWwgfSk7XG5cdFx0XHRjb25zdCBpbnB1dCA9IHJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7IHR5cGU6J3JhbmdlJyB9KTtcblx0XHRcdGlucHV0LmFkZENsYXNzKCdsbG0tc2Itc2xpZGVyJyk7XG5cdFx0XHRpbnB1dC5taW49U3RyaW5nKG1pbik7IGlucHV0Lm1heD1TdHJpbmcobWF4KTtcblx0XHRcdGlucHV0LnZhbHVlPVN0cmluZyh2YWwpOyBpbnB1dC5zdGVwPVN0cmluZyhzdGVwKTtcblx0XHRcdGlucHV0LmRhdGFzZXQucGh5c2ljcyA9IGtleTtcblx0XHRcdGNvbnN0IGRpc3BsYXkgPSBzdGVwIDwgMSA/IHZhbC50b0ZpeGVkKDIpIDogU3RyaW5nKHZhbCk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczonbGxtLXNiLXNsaWRlci12YWwnLCB0ZXh0OiBkaXNwbGF5IH0pO1xuXHRcdH07XG5cdFx0bWtTbGlkZXIoJ0xpbmsgZGlzdCcsICAgJ2xpbmtEaXN0JywgICAyMCwgIDIwMCwgdGhpcy5saW5rRGlzdCwgICA1KTtcblx0XHRta1NsaWRlcignUmVwdWxzaW9uJywgICAnY2hhcmdlU3RyJywgIDMwLCAgNDAwLCB0aGlzLmNoYXJnZVN0ciwgIDEwKTtcblx0XHRta1NsaWRlcignR3Jhdml0eScsICAgICAnZ3Jhdml0eVN0cicsIDAsICAgMC4zLCB0aGlzLmdyYXZpdHlTdHIsIDAuMDEpO1xuXG5cdFx0Ly8gR3JhcGggSGVhbHRoXG5cdFx0Y29uc3QgaHMgPSBzZWN0aW9uKCdHcmFwaCBIZWFsdGgnKTtcblx0XHRjb25zdCBjYXJkcyA9IFtcblx0XHRcdHtsYmw6J05vZGVzJywgICB2YWw6QS5uLCAgICAgICAgd2FybjpmYWxzZX0sXG5cdFx0XHR7bGJsOidFZGdlcycsICAgdmFsOkEubSwgICAgICAgIHdhcm46ZmFsc2V9LFxuXHRcdFx0e2xibDonRGVuc2l0eScsIHZhbDpBLmRlbnNpdHksICB3YXJuOkEuZGVuc2l0eTwwLjAxfSxcblx0XHRcdHtsYmw6J0F2ZyBkZWcnLCB2YWw6QS5hdmdEZWcsICAgd2FybjpBLmF2Z0RlZzwxfSxcblx0XHRcdHtsYmw6J09ycGhhbnMnLCB2YWw6QS5vcnBoYW5zLCAgd2FybjpBLm9ycGhhbnM+MH0sXG5cdFx0XTtcblx0XHRjb25zdCBjYXJkR3JpZCA9IGhzLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLWNhcmRzJyB9KTtcblx0XHRmb3IgKGNvbnN0IGMgb2YgY2FyZHMpIHtcblx0XHRcdGNvbnN0IGNhcmQgPSBjYXJkR3JpZC5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi1jYXJkJysoYy53YXJuPycgbGxtLXNiLWNhcmQtLXdhcm4nOicnKSB9KTtcblx0XHRcdGNhcmQuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1jYXJkLXZhbCcsdGV4dDpTdHJpbmcoYy52YWwpfSk7XG5cdFx0XHRjYXJkLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItY2FyZC1sYmwnLHRleHQ6Yy5sYmx9KTtcblx0XHR9XG5cdFx0Ly8gT3JwaGFucyB0b2dnbGVcblx0XHRpZiAoQS5vcnBoYW5zID4gMCkge1xuXHRcdFx0Y29uc3Qgb3JwaGFuUm93ID0gaHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW9ycGhhbi1yb3cnIH0pO1xuXHRcdFx0Y29uc3Qgb3JwaGFuQnRuID0gb3JwaGFuUm93LmNyZWF0ZUVsKCdidXR0b24nLCB7XG5cdFx0XHRcdGNsczogJ2xsbS1ncmFwaC1idG4gbGxtLWdyYXBoLWJ0bi0teHMnICsgKHRoaXMuc2hvd09ycGhhbnMgPyAnIGxsbS1ncmFwaC1idG4tLWFjdGl2ZScgOiAnJyksXG5cdFx0XHRcdHRleHQ6IHRoaXMuc2hvd09ycGhhbnMgPyBgSGlkZSAke0Eub3JwaGFuc30gb3JwaGFuc2AgOiBgU2hvdyAke0Eub3JwaGFuc30gb3JwaGFuc2AsXG5cdFx0XHR9KTtcblx0XHRcdG9ycGhhbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5zaG93T3JwaGFucyA9ICF0aGlzLnNob3dPcnBoYW5zO1xuXHRcdFx0XHRvcnBoYW5CdG4udGV4dENvbnRlbnQgPSB0aGlzLnNob3dPcnBoYW5zID8gYEhpZGUgJHtBLm9ycGhhbnN9IG9ycGhhbnNgIDogYFNob3cgJHtBLm9ycGhhbnN9IG9ycGhhbnNgO1xuXHRcdFx0XHRvcnBoYW5CdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsIHRoaXMuc2hvd09ycGhhbnMpO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gRXBpc3RlbWljIGxheWVycyBcdTIwMTQgY2xpY2thYmxlIHRvIHRvZ2dsZSB0eXBlIHZpc2liaWxpdHlcblx0XHRjb25zdCBscyA9IHNlY3Rpb24oJ0VwaXN0ZW1pYyBMYXllcnMnKTtcblxuXHRcdC8vIFNoYXBlIFNWRyBoZWxwZXJcblx0XHRjb25zdCBzaGFwZVNWRyA9IChzaGFwZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdGNvbnN0IGYgPSBgZmlsbD1cIiR7Y29sb3J9XCJgO1xuXHRcdFx0c3dpdGNoIChzaGFwZSkge1xuXHRcdFx0XHRjYXNlICdkaWFtb25kJzpcblx0XHRcdFx0XHRyZXR1cm4gYDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPjxyZWN0ICR7Zn0geD1cIjEuNVwiIHk9XCIxLjVcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKDQ1IDUgNSlcIi8+PC9zdmc+YDtcblx0XHRcdFx0Y2FzZSAnc3F1YXJlJzpcblx0XHRcdFx0XHRyZXR1cm4gYDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPjxyZWN0ICR7Zn0geD1cIjEuNVwiIHk9XCIxLjVcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIgcng9XCIxLjVcIi8+PC9zdmc+YDtcblx0XHRcdFx0Y2FzZSAnaGV4YWdvbic6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48cG9seWdvbiAke2Z9IHBvaW50cz1cIjUsMSA4LjcsMyA4LjcsNyA1LDkgMS4zLDcgMS4zLDNcIi8+PC9zdmc+YDtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gYDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPjxjaXJjbGUgJHtmfSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiNFwiLz48L3N2Zz5gO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBBbGwgLyBOb25lIGNvbnRyb2xzXG5cdFx0Y29uc3QgbGF5ZXJDdHJsID0gbHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWxheWVyLWN0cmwnIH0pO1xuXHRcdGNvbnN0IGFsbFR5cGVzQnRuICA9IGxheWVyQ3RybC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtYnRuIGxsbS1ncmFwaC1idG4tLXhzJywgdGV4dDogJ0FsbCcgfSk7XG5cdFx0Y29uc3Qgbm9uZVR5cGVzQnRuID0gbGF5ZXJDdHJsLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2xsbS1ncmFwaC1idG4gbGxtLWdyYXBoLWJ0bi0teHMnLCB0ZXh0OiAnTm9uZScgfSk7XG5cblx0XHQvLyBTdG9yZSByb3cgcmVmcyBvbiBpbnN0YW5jZSBzbyB0b2dnbGUgaGFuZGxlcnMgY2FuIHVwZGF0ZSBjbGFzc2VzIHdpdGhvdXQgZnVsbCByZWJ1aWxkXG5cdFx0dGhpcy5sYXllclJvd01hcC5jbGVhcigpO1xuXG5cdFx0Y29uc3QgbWF4TCA9IE1hdGgubWF4KC4uLkEubGF5ZXJzLm1hcChsPT5sLmNvdW50KSwxKTtcblx0XHRBLmxheWVycy5mb3JFYWNoKChsLCBpKSA9PiB7XG5cdFx0XHRjb25zdCB0eXBlTmFtZSA9IGwubmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgY29sb3IgICAgPSBsLmNvbG9yO1xuXHRcdFx0Y29uc3Qgc2hhcGUgICAgPSBOT0RFX1NIQVBFU1t0eXBlTmFtZV0gPz8gJ2NpcmNsZSc7XG5cblx0XHRcdGNvbnN0IHJvdyA9IGxzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1sYXllci1yb3cnIH0pO1xuXHRcdFx0aWYgKGwuY291bnQgPiAwKSByb3cuYWRkQ2xhc3MoJ2xsbS1zYi1sYXllci1jbGlja2FibGUnKTtcblx0XHRcdGlmICh0aGlzLmhpZGRlblR5cGVzLmhhcyh0eXBlTmFtZSkpIHJvdy5hZGRDbGFzcygnbGxtLXNiLWxheWVyLXJvdy0tb2ZmJyk7XG5cdFx0XHR0aGlzLmxheWVyUm93TWFwLnNldCh0eXBlTmFtZSwgcm93KTtcblxuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItbGF5ZXItbnVtJywgdGV4dDogU3RyaW5nKGkgKyAxKSB9KTtcblx0XHRcdHJvdy5pbm5lckhUTUwgKz0gc2hhcGVTVkcoc2hhcGUsIGNvbG9yKTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWxheWVyLW5hbWUnLCB0ZXh0OiBsLm5hbWUgfSkuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHRcdGNvbnN0IHRyYWNrID0gcm93LmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi10cmFjaycgfSk7XG5cdFx0XHRpZiAobC5jb3VudCA+IDApIHtcblx0XHRcdFx0Y29uc3QgZmlsbCA9IHRyYWNrLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1maWxsJyB9KTtcblx0XHRcdFx0ZmlsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5tYXgobC5jb3VudC9tYXhMKjEwMCw0KX0lO2JhY2tncm91bmQ6JHtjb2xvcn1gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJhY2suY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1nYXAnLCB0ZXh0OiAnZ2FwJyB9KTtcblx0XHRcdH1cblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWxheWVyLWNudCcsIHRleHQ6IGwuY291bnQgPyBTdHJpbmcobC5jb3VudCkgOiAnXHUyMDE0JyB9KVxuXHRcdFx0XHQuc3R5bGUuY29sb3IgPSBsLmNvdW50ID8gY29sb3IgOiAndmFyKC0tdGV4dC1mYWludCknO1xuXG5cdFx0XHRpZiAobC5jb3VudCA+IDApIHtcblx0XHRcdFx0cm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmhpZGRlblR5cGVzLmhhcyh0eXBlTmFtZSkpIHRoaXMuaGlkZGVuVHlwZXMuZGVsZXRlKHR5cGVOYW1lKTtcblx0XHRcdFx0XHRlbHNlIHRoaXMuaGlkZGVuVHlwZXMuYWRkKHR5cGVOYW1lKTtcblx0XHRcdFx0XHQvLyBPbmx5IHRvZ2dsZSBjbGFzcyBcdTIwMTQgbm8gZnVsbCBzaWRlYmFyIHJlYnVpbGQgKGtlZXBzIHNsaWRlcnMgKyBodWIgY2xpY2tzIGFsaXZlKVxuXHRcdFx0XHRcdHRoaXMubGF5ZXJSb3dNYXAuZm9yRWFjaCgociwgdCkgPT5cblx0XHRcdFx0XHRcdHIudG9nZ2xlQ2xhc3MoJ2xsbS1zYi1sYXllci1yb3ctLW9mZicsIHRoaXMuaGlkZGVuVHlwZXMuaGFzKHQpKSk7XG5cdFx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGFsbFR5cGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRkZW5UeXBlcy5jbGVhcigpO1xuXHRcdFx0dGhpcy5sYXllclJvd01hcC5mb3JFYWNoKHIgPT4gci5yZW1vdmVDbGFzcygnbGxtLXNiLWxheWVyLXJvdy0tb2ZmJykpO1xuXHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0bm9uZVR5cGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0QS5sYXllcnMuZm9yRWFjaChsID0+IHsgaWYgKGwuY291bnQgPiAwKSB0aGlzLmhpZGRlblR5cGVzLmFkZChsLm5hbWUudG9Mb3dlckNhc2UoKSk7IH0pO1xuXHRcdFx0dGhpcy5sYXllclJvd01hcC5mb3JFYWNoKChyLCB0KSA9PlxuXHRcdFx0XHRyLnRvZ2dsZUNsYXNzKCdsbG0tc2ItbGF5ZXItcm93LS1vZmYnLCB0aGlzLmhpZGRlblR5cGVzLmhhcyh0KSkpO1xuXHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cblx0XHQvLyBFZGdlIHR5cGVzXG5cdFx0Y29uc3QgZXMgPSBzZWN0aW9uKCdFZGdlIFR5cGVzJyk7XG5cdFx0Y29uc3QgbWF4RSA9IE1hdGgubWF4KC4uLkEuZWRnZVR5cGVzLm1hcChlPT5lLmNvdW50KSwxKTtcblx0XHRmb3IgKGNvbnN0IGUgb2YgQS5lZGdlVHlwZXMpIHtcblx0XHRcdGNvbnN0IHJvdz1lcy5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWJhci1yb3cnfSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItYmFyLW5hbWUnLHRleHQ6ZS5sYWJlbH0pO1xuXHRcdFx0Y29uc3QgdHJhY2s9cm93LmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItdHJhY2snfSk7XG5cdFx0XHRjb25zdCBmaWxsPXRyYWNrLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItZmlsbCBsbG0tc2ItZmlsbC0tYmx1ZSd9KTtcblx0XHRcdGZpbGwuc3R5bGUud2lkdGg9YCR7ZS5jb3VudC9tYXhFKjEwMH0lYDtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1iYXItY250Jyx0ZXh0OlN0cmluZyhlLmNvdW50KX0pO1xuXHRcdH1cblxuXHRcdC8vIFRvcCBodWJzXG5cdFx0Y29uc3QgaHViU2VjID0gc2VjdGlvbignVG9wIEh1YnMgXHUwMEI3IGJ5IGRlZ3JlZScpO1xuXHRcdGNvbnN0IG1heEggPSBNYXRoLm1heCguLi5BLmh1YnMubWFwKGg9PmguZGVnKSwxKTtcblx0XHRBLmh1YnMuZm9yRWFjaCgoaCxpKT0+e1xuXHRcdFx0Y29uc3Qgcm93PWh1YlNlYy5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWh1Yi1yb3cnfSk7XG5cdFx0XHRyb3cuZGF0YXNldC5ub2RlSWQ9aC5pZDtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1odWItcmFuaycsdGV4dDpTdHJpbmcoaSsxKX0pO1xuXHRcdFx0Y29uc3QgZG90PXJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1odWItZG90J30pO1xuXHRcdFx0ZG90LnN0eWxlLmJhY2tncm91bmQ9Tk9ERV9DT0xPUlNbaC50eXBlXT8/JyM4ODgnO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWh1Yi1uYW1lJyx0ZXh0OmguaWQubGVuZ3RoPjIwP2guaWQuc2xpY2UoMCwxOCkrJ1x1MjAyNic6aC5pZH0pXG5cdFx0XHRcdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJyxoLmlkKTtcblx0XHRcdGNvbnN0IGJhcj1yb3cuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1odWItYmFyJ30pO1xuXHRcdFx0YmFyLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItZmlsbCcsc3R5bGU6YHdpZHRoOiR7aC5kZWcvbWF4SCoxMDB9JTtiYWNrZ3JvdW5kOiR7Tk9ERV9DT0xPUlNbaC50eXBlXT8/JyM4ODgnfWB9KTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1odWItZGVnJyx0ZXh0OlN0cmluZyhoLmRlZyl9KTtcblx0XHR9KTtcblxuXHRcdC8vIERvbWFpbiBjb3ZlcmFnZSBcdTIwMTQgY2xpY2sgdG8gZmlsdGVyIGdyYXBoXG5cdFx0Y29uc3QgZHMgPSBzZWN0aW9uKCdEb21haW4gQ292ZXJhZ2UnKTtcblx0XHRjb25zdCBtYXhEID0gTWF0aC5tYXgoLi4uQS5kb21haW5zLm1hcChkPT5kLmNvdW50KSwxKTtcblx0XHRjb25zdCBkb21haW5Sb3dzID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PigpO1xuXHRcdGZvciAoY29uc3QgZCBvZiBBLmRvbWFpbnMpIHtcblx0XHRcdGNvbnN0IHJvdyA9IGRzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1iYXItcm93IGxsbS1zYi1kb21haW4tcm93JyB9KTtcblx0XHRcdGRvbWFpblJvd3Muc2V0KGQubmFtZSwgcm93KTtcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkRG9tYWluID09PSBkLm5hbWUpIHJvdy5hZGRDbGFzcygnbGxtLXNiLWRvbWFpbi1yb3ctLWFjdGl2ZScpO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItYmFyLW5hbWUnLCB0ZXh0OiBkLm5hbWUgfSk7XG5cdFx0XHRjb25zdCB0cmFjayA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItdHJhY2snIH0pO1xuXHRcdFx0dHJhY2suY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWZpbGwgbGxtLXNiLWZpbGwtLXRlYWwnLCBzdHlsZTogYHdpZHRoOiR7ZC5jb3VudC9tYXhEKjEwMH0lYCB9KTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWJhci1jbnQnLCB0ZXh0OiBTdHJpbmcoZC5jb3VudCkgfSk7XG5cdFx0XHRyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkRG9tYWluID09PSBkLm5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkRG9tYWluID0gbnVsbDtcblx0XHRcdFx0XHRkb21haW5Sb3dzLmZvckVhY2gociA9PiByLnJlbW92ZUNsYXNzKCdsbG0tc2ItZG9tYWluLXJvdy0tYWN0aXZlJykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREb21haW4gPSBkLm5hbWU7XG5cdFx0XHRcdFx0ZG9tYWluUm93cy5mb3JFYWNoKChyLCBuKSA9PiByLnRvZ2dsZUNsYXNzKCdsbG0tc2ItZG9tYWluLXJvdy0tYWN0aXZlJywgbiA9PT0gZC5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgUGx1Z2luIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTExNV2lraVNlbWFudGljR3JhcGggZXh0ZW5kcyBQbHVnaW4ge1xuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0dGhpcy5yZWdpc3RlclZpZXcoVklFV19UWVBFLCBsZWFmID0+IG5ldyBTZW1hbnRpY0dyYXBoVmlldyhsZWFmLCB0aGlzKSk7XG5cdFx0dGhpcy5hZGRSaWJib25JY29uKCdnaXQtZm9yaycsJ0xMTSBXaWtpIFNlbWFudGljIEdyYXBoJywoKT0+dGhpcy5hY3RpdmF0ZVZpZXcoKSk7XG5cdFx0dGhpcy5hZGRDb21tYW5kKHtpZDonb3Blbi1zZW1hbnRpYy1ncmFwaCcsbmFtZTonT3BlbiBTZW1hbnRpYyBHcmFwaCcsY2FsbGJhY2s6KCk9PnRoaXMuYWN0aXZhdGVWaWV3KCl9KTtcblx0fVxuXHRhc3luYyBhY3RpdmF0ZVZpZXcoKSB7XG5cdFx0Y29uc3Qge3dvcmtzcGFjZX09dGhpcy5hcHA7XG5cdFx0bGV0IGxlYWY9d29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEUpWzBdO1xuXHRcdGlmICghbGVhZikgeyBsZWFmPXdvcmtzcGFjZS5nZXRSaWdodExlYWYoZmFsc2UpITsgYXdhaXQgbGVhZi5zZXRWaWV3U3RhdGUoe3R5cGU6VklFV19UWVBFLGFjdGl2ZTp0cnVlfSk7IH1cblx0XHR3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcblx0fVxuXHRvbnVubG9hZCgpIHt9XG59XG4iLCAiZXhwb3J0IHZhciB4aHRtbCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4aHRtbDogeGh0bWwsXG4gIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiXG59O1xuIiwgImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbn1cbiIsICJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuL25hbWVzcGFjZS5qc1wiO1xuaW1wb3J0IHt4aHRtbH0gZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdG9ySW5oZXJpdChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIHVyaSA9IHRoaXMubmFtZXNwYWNlVVJJO1xuICAgIHJldHVybiB1cmkgPT09IHhodG1sICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHhodG1sXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh1cmksIG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdG9yRml4ZWQoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gKGZ1bGxuYW1lLmxvY2FsXG4gICAgICA/IGNyZWF0b3JGaXhlZFxuICAgICAgOiBjcmVhdG9ySW5oZXJpdCkoZnVsbG5hbWUpO1xufVxuIiwgImZ1bmN0aW9uIG5vbmUoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IG5vbmUgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCAiLy8gR2l2ZW4gc29tZXRoaW5nIGFycmF5IGxpa2UgKG9yIG51bGwpLCByZXR1cm5zIHNvbWV0aGluZyB0aGF0IGlzIHN0cmljdGx5IGFuXG4vLyBhcnJheS4gVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IGFycmF5LWxpa2Ugb2JqZWN0cyBwYXNzZWQgdG8gZDMuc2VsZWN0QWxsXG4vLyBvciBzZWxlY3Rpb24uc2VsZWN0QWxsIGFyZSBjb252ZXJ0ZWQgaW50byBwcm9wZXIgYXJyYXlzIHdoZW4gY3JlYXRpbmcgYVxuLy8gc2VsZWN0aW9uOyB3ZSBkb25cdTIwMTl0IGV2ZXIgd2FudCB0byBjcmVhdGUgYSBzZWxlY3Rpb24gYmFja2VkIGJ5IGEgbGl2ZVxuLy8gSFRNTENvbGxlY3Rpb24gb3IgTm9kZUxpc3QuIEhvd2V2ZXIsIG5vdGUgdGhhdCBzZWxlY3Rpb24uc2VsZWN0QWxsIHdpbGwgdXNlIGFcbi8vIHN0YXRpYyBOb2RlTGlzdCBhcyBhIGdyb3VwLCBzaW5jZSBpdCBzYWZlbHkgZGVyaXZlZCBmcm9tIHF1ZXJ5U2VsZWN0b3JBbGwuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJheSh4KSB7XG4gIHJldHVybiB4ID09IG51bGwgPyBbXSA6IEFycmF5LmlzQXJyYXkoeCkgPyB4IDogQXJyYXkuZnJvbSh4KTtcbn1cbiIsICJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsLmpzXCI7XG5cbmZ1bmN0aW9uIGFycmF5QWxsKHNlbGVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFycmF5KHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ID09PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IGFycmF5QWxsKHNlbGVjdCk7XG4gIGVsc2Ugc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZE1hdGNoZXIoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfTtcbn1cblxuIiwgImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmluZCA9IEFycmF5LnByb3RvdHlwZS5maW5kO1xuXG5mdW5jdGlvbiBjaGlsZEZpbmQobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaW5kLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjaGlsZEZpcnN0KCkge1xuICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KG1hdGNoID09IG51bGwgPyBjaGlsZEZpcnN0XG4gICAgICA6IGNoaWxkRmluZCh0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwgImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmZpbHRlcjtcblxuZnVuY3Rpb24gY2hpbGRyZW4oKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbkZpbHRlcihtYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKG1hdGNoID09IG51bGwgPyBjaGlsZHJlblxuICAgICAgOiBjaGlsZHJlbkZpbHRlcih0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odXBkYXRlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodXBkYXRlLmxlbmd0aCk7XG59XG4iLCAiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQge0VudGVyTm9kZX0gZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYmluZEluZGV4KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbm9kZSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBmaXQgaW50byB1cGRhdGUuXG4gIC8vIFB1dCBhbnkgbnVsbCBub2RlcyBpbnRvIGVudGVyLlxuICAvLyBQdXQgYW55IHJlbWFpbmluZyBkYXRhIGludG8gZW50ZXIuXG4gIGZvciAoOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZG9uXHUyMDE5dCBmaXQgaW50byBleGl0LlxuICBmb3IgKDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEtleShwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhLCBrZXkpIHtcbiAgdmFyIGksXG4gICAgICBub2RlLFxuICAgICAgbm9kZUJ5S2V5VmFsdWUgPSBuZXcgTWFwLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSArIFwiXCI7XG4gICAgICBpZiAobm9kZUJ5S2V5VmFsdWUuaGFzKGtleVZhbHVlKSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSkgKyBcIlwiO1xuICAgIGlmIChub2RlID0gbm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlKSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWUuZGVsZXRlKGtleVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWVzW2ldKSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXR1bShub2RlKSB7XG4gIHJldHVybiBub2RlLl9fZGF0YV9fO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIEFycmF5LmZyb20odGhpcywgZGF0dW0pO1xuXG4gIHZhciBiaW5kID0ga2V5ID8gYmluZEtleSA6IGJpbmRJbmRleCxcbiAgICAgIHBhcmVudHMgPSB0aGlzLl9wYXJlbnRzLFxuICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBjb25zdGFudCh2YWx1ZSk7XG5cbiAgZm9yICh2YXIgbSA9IGdyb3Vwcy5sZW5ndGgsIHVwZGF0ZSA9IG5ldyBBcnJheShtKSwgZW50ZXIgPSBuZXcgQXJyYXkobSksIGV4aXQgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbal0sXG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2pdLFxuICAgICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgZGF0YSA9IGFycmF5bGlrZSh2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cykpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuLy8gR2l2ZW4gc29tZSBkYXRhLCB0aGlzIHJldHVybnMgYW4gYXJyYXktbGlrZSB2aWV3IG9mIGl0OiBhbiBvYmplY3QgdGhhdFxuLy8gZXhwb3NlcyBhIGxlbmd0aCBwcm9wZXJ0eSBhbmQgYWxsb3dzIG51bWVyaWMgaW5kZXhpbmcuIE5vdGUgdGhhdCB1bmxpa2Vcbi8vIHNlbGVjdEFsbCwgdGhpcyBpc25cdTIwMTl0IHdvcnJpZWQgYWJvdXQgXHUyMDFDbGl2ZVx1MjAxRCBjb2xsZWN0aW9ucyBiZWNhdXNlIHRoZSByZXN1bHRpbmdcbi8vIGFycmF5IHdpbGwgb25seSBiZSB1c2VkIGJyaWVmbHkgd2hpbGUgZGF0YSBpcyBiZWluZyBib3VuZC4gKEl0IGlzIHBvc3NpYmxlIHRvXG4vLyBjYXVzZSB0aGUgZGF0YSB0byBjaGFuZ2Ugd2hpbGUgaXRlcmF0aW5nIGJ5IHVzaW5nIGEga2V5IGZ1bmN0aW9uLCBidXQgcGxlYXNlXG4vLyBkb25cdTIwMTl0OyB3ZVx1MjAxOWQgcmF0aGVyIGF2b2lkIGEgZ3JhdHVpdG91cyBjb3B5LilcbmZ1bmN0aW9uIGFycmF5bGlrZShkYXRhKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImxlbmd0aFwiIGluIGRhdGFcbiAgICA/IGRhdGEgLy8gQXJyYXksIFR5cGVkQXJyYXksIE5vZGVMaXN0LCBhcnJheS1saWtlXG4gICAgOiBBcnJheS5mcm9tKGRhdGEpOyAvLyBNYXAsIFNldCwgaXRlcmFibGUsIHN0cmluZywgb3IgYW55dGhpbmcgZWxzZVxufVxuIiwgImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvbmVudGVyLCBvbnVwZGF0ZSwgb25leGl0KSB7XG4gIHZhciBlbnRlciA9IHRoaXMuZW50ZXIoKSwgdXBkYXRlID0gdGhpcywgZXhpdCA9IHRoaXMuZXhpdCgpO1xuICBpZiAodHlwZW9mIG9uZW50ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGVudGVyID0gb25lbnRlcihlbnRlcik7XG4gICAgaWYgKGVudGVyKSBlbnRlciA9IGVudGVyLnNlbGVjdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIGVudGVyID0gZW50ZXIuYXBwZW5kKG9uZW50ZXIgKyBcIlwiKTtcbiAgfVxuICBpZiAob251cGRhdGUgIT0gbnVsbCkge1xuICAgIHVwZGF0ZSA9IG9udXBkYXRlKHVwZGF0ZSk7XG4gICAgaWYgKHVwZGF0ZSkgdXBkYXRlID0gdXBkYXRlLnNlbGVjdGlvbigpO1xuICB9XG4gIGlmIChvbmV4aXQgPT0gbnVsbCkgZXhpdC5yZW1vdmUoKTsgZWxzZSBvbmV4aXQoZXhpdCk7XG4gIHJldHVybiBlbnRlciAmJiB1cGRhdGUgPyBlbnRlci5tZXJnZSh1cGRhdGUpLm9yZGVyKCkgOiB1cGRhdGU7XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgdmFyIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQ7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHNlbGVjdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IC0xLCBtID0gZ3JvdXBzLmxlbmd0aDsgKytqIDwgbTspIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IGdyb3VwLmxlbmd0aCAtIDEsIG5leHQgPSBncm91cFtpXSwgbm9kZTsgLS1pID49IDA7KSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGlmIChuZXh0ICYmIG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obmV4dCkgXiA0KSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoIWNvbXBhcmUpIGNvbXBhcmUgPSBhc2NlbmRpbmc7XG5cbiAgZnVuY3Rpb24gY29tcGFyZU5vZGUoYSwgYikge1xuICAgIHJldHVybiBhICYmIGIgPyBjb21wYXJlKGEuX19kYXRhX18sIGIuX19kYXRhX18pIDogIWEgLSAhYjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHNvcnRncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHNvcnRncm91cCA9IHNvcnRncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNvcnRncm91cFtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRncm91cC5zb3J0KGNvbXBhcmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHNvcnRncm91cHMsIHRoaXMuX3BhcmVudHMpLm9yZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuICBhcmd1bWVudHNbMF0gPSB0aGlzO1xuICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBub2RlID0gZ3JvdXBbaV07XG4gICAgICBpZiAobm9kZSkgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzaXplID0gMDtcbiAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMpICsrc2l6ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSBjYWxsYmFjay5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsICJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuLi9uYW1lc3BhY2UuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBub2RlID0gdGhpcy5ub2RlKCk7XG4gICAgcmV0dXJuIGZ1bGxuYW1lLmxvY2FsXG4gICAgICAgID8gbm9kZS5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpXG4gICAgICAgIDogbm9kZS5nZXRBdHRyaWJ1dGUoZnVsbG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbilcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKSkoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gKG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIC8vIG5vZGUgaXMgYSBOb2RlXG4gICAgICB8fCAobm9kZS5kb2N1bWVudCAmJiBub2RlKSAvLyBub2RlIGlzIGEgV2luZG93XG4gICAgICB8fCBub2RlLmRlZmF1bHRWaWV3OyAvLyBub2RlIGlzIGEgRG9jdW1lbnRcbn1cbiIsICJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgZWxzZSB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHYsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICAgID8gc3R5bGVSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdHlsZUZ1bmN0aW9uXG4gICAgICAgICAgICA6IHN0eWxlQ29uc3RhbnQpKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSlcbiAgICAgIDogc3R5bGVWYWx1ZSh0aGlzLm5vZGUoKSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVZhbHVlKG5vZGUsIG5hbWUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKVxuICAgICAgfHwgZGVmYXVsdFZpZXcobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xufVxuIiwgImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwgImZ1bmN0aW9uIGNsYXNzQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudHJpbSgpLnNwbGl0KC9efFxccysvKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NMaXN0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0IHx8IG5ldyBDbGFzc0xpc3Qobm9kZSk7XG59XG5cbmZ1bmN0aW9uIENsYXNzTGlzdChub2RlKSB7XG4gIHRoaXMuX25vZGUgPSBub2RlO1xuICB0aGlzLl9uYW1lcyA9IGNsYXNzQXJyYXkobm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKTtcbn1cblxuQ2xhc3NMaXN0LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgdGhpcy5fbmFtZXMucHVzaChuYW1lKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgY29udGFpbnM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKSA+PSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjbGFzc2VkQWRkKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LmFkZChuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRSZW1vdmUobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QucmVtb3ZlKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFRydWUobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRBZGQodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRmFsc2UobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRSZW1vdmUodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRnVuY3Rpb24obmFtZXMsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAodmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKSA/IGNsYXNzZWRBZGQgOiBjbGFzc2VkUmVtb3ZlKSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBuYW1lcyA9IGNsYXNzQXJyYXkobmFtZSArIFwiXCIpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBsaXN0ID0gY2xhc3NMaXN0KHRoaXMubm9kZSgpKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWxpc3QuY29udGFpbnMobmFtZXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBjbGFzc2VkRnVuY3Rpb24gOiB2YWx1ZVxuICAgICAgPyBjbGFzc2VkVHJ1ZVxuICAgICAgOiBjbGFzc2VkRmFsc2UpKG5hbWVzLCB2YWx1ZSkpO1xufVxuIiwgImZ1bmN0aW9uIHRleHRSZW1vdmUoKSB7XG4gIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gdGV4dFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gdGV4dEZ1bmN0aW9uXG4gICAgICAgICAgOiB0ZXh0Q29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkudGV4dENvbnRlbnQ7XG59XG4iLCAiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCAiZnVuY3Rpb24gcmFpc2UoKSB7XG4gIGlmICh0aGlzLm5leHRTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJhaXNlKTtcbn1cbiIsICJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuIiwgImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3IuanNcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3IuanNcIjtcblxuZnVuY3Rpb24gY29uc3RhbnROdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSksXG4gICAgICBzZWxlY3QgPSBiZWZvcmUgPT0gbnVsbCA/IGNvbnN0YW50TnVsbCA6IHR5cGVvZiBiZWZvcmUgPT09IFwiZnVuY3Rpb25cIiA/IGJlZm9yZSA6IHNlbGVjdG9yKGJlZm9yZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsICJmdW5jdGlvbiByZW1vdmUoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmVtb3ZlKTtcbn1cbiIsICJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZShmYWxzZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWVwKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChkZWVwID8gc2VsZWN0aW9uX2Nsb25lRGVlcCA6IHNlbGVjdGlvbl9jbG9uZVNoYWxsb3cpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSlcbiAgICAgIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG4iLCAiZnVuY3Rpb24gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHRoaXMuX19kYXRhX18pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblJlbW92ZSh0eXBlbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uO1xuICAgIGlmICghb24pIHJldHVybjtcbiAgICBmb3IgKHZhciBqID0gMCwgaSA9IC0xLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAobyA9IG9uW2pdLCAoIXR5cGVuYW1lLnR5cGUgfHwgby50eXBlID09PSB0eXBlbmFtZS50eXBlKSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uWysraV0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKytpKSBvbi5sZW5ndGggPSBpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX19vbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25BZGQodHlwZW5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb24sIG8sIGxpc3RlbmVyID0gY29udGV4dExpc3RlbmVyKHZhbHVlKTtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAoKG8gPSBvbltqXSkudHlwZSA9PT0gdHlwZW5hbWUudHlwZSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciA9IGxpc3RlbmVyLCBvLm9wdGlvbnMgPSBvcHRpb25zKTtcbiAgICAgICAgby52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlbmFtZS50eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgbyA9IHt0eXBlOiB0eXBlbmFtZS50eXBlLCBuYW1lOiB0eXBlbmFtZS5uYW1lLCB2YWx1ZTogdmFsdWUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgb3B0aW9uczogb3B0aW9uc307XG4gICAgaWYgKCFvbikgdGhpcy5fX29uID0gW29dO1xuICAgIGVsc2Ugb24ucHVzaChvKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZW5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB0eXBlbmFtZXMgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIpLCBpLCBuID0gdHlwZW5hbWVzLmxlbmd0aCwgdDtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgb24gPSB0aGlzLm5vZGUoKS5fX29uO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGZvciAoaSA9IDAsIG8gPSBvbltqXTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoKHQgPSB0eXBlbmFtZXNbaV0pLnR5cGUgPT09IG8udHlwZSAmJiB0Lm5hbWUgPT09IG8ubmFtZSkge1xuICAgICAgICAgIHJldHVybiBvLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uID0gdmFsdWUgPyBvbkFkZCA6IG9uUmVtb3ZlO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB0aGlzLmVhY2gob24odHlwZW5hbWVzW2ldLCB2YWx1ZSwgb3B0aW9ucykpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsICJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgeWllbGQgbm9kZTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgc2VsZWN0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3QuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RDaGlsZCBmcm9tIFwiLi9zZWxlY3RDaGlsZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RDaGlsZHJlbiBmcm9tIFwiLi9zZWxlY3RDaGlsZHJlbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbnRlciBmcm9tIFwiLi9lbnRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9leGl0IGZyb20gXCIuL2V4aXQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fam9pbiBmcm9tIFwiLi9qb2luLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX29yZGVyIGZyb20gXCIuL29yZGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NvcnQgZnJvbSBcIi4vc29ydC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jYWxsIGZyb20gXCIuL2NhbGwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbm9kZXMgZnJvbSBcIi4vbm9kZXMuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbm9kZSBmcm9tIFwiLi9ub2RlLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NpemUgZnJvbSBcIi4vc2l6ZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbXB0eSBmcm9tIFwiLi9lbXB0eS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9lYWNoIGZyb20gXCIuL2VhY2guanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXR0ciBmcm9tIFwiLi9hdHRyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3Byb3BlcnR5IGZyb20gXCIuL3Byb3BlcnR5LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NsYXNzZWQgZnJvbSBcIi4vY2xhc3NlZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl90ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faHRtbCBmcm9tIFwiLi9odG1sLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JhaXNlIGZyb20gXCIuL3JhaXNlLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2xvd2VyIGZyb20gXCIuL2xvd2VyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2FwcGVuZCBmcm9tIFwiLi9hcHBlbmQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faW5zZXJ0IGZyb20gXCIuL2luc2VydC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2Nsb25lIGZyb20gXCIuL2Nsb25lLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdHVtIGZyb20gXCIuL2RhdHVtLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX29uIGZyb20gXCIuL29uLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2Rpc3BhdGNoIGZyb20gXCIuL2Rpc3BhdGNoLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2l0ZXJhdG9yIGZyb20gXCIuL2l0ZXJhdG9yLmpzXCI7XG5cbmV4cG9ydCB2YXIgcm9vdCA9IFtudWxsXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdGlvbihncm91cHMsIHBhcmVudHMpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbihbW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF1dLCByb290KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uX3NlbGVjdGlvbigpIHtcbiAgcmV0dXJuIHRoaXM7XG59XG5cblNlbGVjdGlvbi5wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogU2VsZWN0aW9uLFxuICBzZWxlY3Q6IHNlbGVjdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogc2VsZWN0aW9uX3NlbGVjdEFsbCxcbiAgc2VsZWN0Q2hpbGQ6IHNlbGVjdGlvbl9zZWxlY3RDaGlsZCxcbiAgc2VsZWN0Q2hpbGRyZW46IHNlbGVjdGlvbl9zZWxlY3RDaGlsZHJlbixcbiAgZmlsdGVyOiBzZWxlY3Rpb25fZmlsdGVyLFxuICBkYXRhOiBzZWxlY3Rpb25fZGF0YSxcbiAgZW50ZXI6IHNlbGVjdGlvbl9lbnRlcixcbiAgZXhpdDogc2VsZWN0aW9uX2V4aXQsXG4gIGpvaW46IHNlbGVjdGlvbl9qb2luLFxuICBtZXJnZTogc2VsZWN0aW9uX21lcmdlLFxuICBzZWxlY3Rpb246IHNlbGVjdGlvbl9zZWxlY3Rpb24sXG4gIG9yZGVyOiBzZWxlY3Rpb25fb3JkZXIsXG4gIHNvcnQ6IHNlbGVjdGlvbl9zb3J0LFxuICBjYWxsOiBzZWxlY3Rpb25fY2FsbCxcbiAgbm9kZXM6IHNlbGVjdGlvbl9ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX25vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9zaXplLFxuICBlbXB0eTogc2VsZWN0aW9uX2VtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fZWFjaCxcbiAgYXR0cjogc2VsZWN0aW9uX2F0dHIsXG4gIHN0eWxlOiBzZWxlY3Rpb25fc3R5bGUsXG4gIHByb3BlcnR5OiBzZWxlY3Rpb25fcHJvcGVydHksXG4gIGNsYXNzZWQ6IHNlbGVjdGlvbl9jbGFzc2VkLFxuICB0ZXh0OiBzZWxlY3Rpb25fdGV4dCxcbiAgaHRtbDogc2VsZWN0aW9uX2h0bWwsXG4gIHJhaXNlOiBzZWxlY3Rpb25fcmFpc2UsXG4gIGxvd2VyOiBzZWxlY3Rpb25fbG93ZXIsXG4gIGFwcGVuZDogc2VsZWN0aW9uX2FwcGVuZCxcbiAgaW5zZXJ0OiBzZWxlY3Rpb25faW5zZXJ0LFxuICByZW1vdmU6IHNlbGVjdGlvbl9yZW1vdmUsXG4gIGNsb25lOiBzZWxlY3Rpb25fY2xvbmUsXG4gIGRhdHVtOiBzZWxlY3Rpb25fZGF0dW0sXG4gIG9uOiBzZWxlY3Rpb25fb24sXG4gIGRpc3BhdGNoOiBzZWxlY3Rpb25fZGlzcGF0Y2gsXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiBzZWxlY3Rpb25faXRlcmF0b3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGlvbjtcbiIsICJpbXBvcnQge1NlbGVjdGlvbiwgcm9vdH0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFNlbGVjdGlvbihbW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKVxuICAgICAgOiBuZXcgU2VsZWN0aW9uKFtbc2VsZWN0b3JdXSwgcm9vdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpIHtcbiAgbGV0IHNvdXJjZUV2ZW50O1xuICB3aGlsZSAoc291cmNlRXZlbnQgPSBldmVudC5zb3VyY2VFdmVudCkgZXZlbnQgPSBzb3VyY2VFdmVudDtcbiAgcmV0dXJuIGV2ZW50O1xufVxuIiwgImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCwgbm9kZSkge1xuICBldmVudCA9IHNvdXJjZUV2ZW50KGV2ZW50KTtcbiAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGlmIChub2RlKSB7XG4gICAgdmFyIHN2ZyA9IG5vZGUub3duZXJTVkdFbGVtZW50IHx8IG5vZGU7XG4gICAgaWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuICAgICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WCwgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICBwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShub2RlLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG4gICAgICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuICAgIH1cbiAgICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiBbZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIG5vZGUuY2xpZW50TGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW2V2ZW50LnBhZ2VYLCBldmVudC5wYWdlWV07XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICBjb25zdCB4ID0gK3RoaXMuX3guY2FsbChudWxsLCBkKSxcbiAgICAgIHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpO1xuICByZXR1cm4gYWRkKHRoaXMuY292ZXIoeCwgeSksIHgsIHksIGQpO1xufVxuXG5mdW5jdGlvbiBhZGQodHJlZSwgeCwgeSwgZCkge1xuICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybiB0cmVlOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgcGFyZW50LFxuICAgICAgbm9kZSA9IHRyZWUuX3Jvb3QsXG4gICAgICBsZWFmID0ge2RhdGE6IGR9LFxuICAgICAgeDAgPSB0cmVlLl94MCxcbiAgICAgIHkwID0gdHJlZS5feTAsXG4gICAgICB4MSA9IHRyZWUuX3gxLFxuICAgICAgeTEgPSB0cmVlLl95MSxcbiAgICAgIHhtLFxuICAgICAgeW0sXG4gICAgICB4cCxcbiAgICAgIHlwLFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b20sXG4gICAgICBpLFxuICAgICAgajtcblxuICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgaW5pdGlhbGl6ZSB0aGUgcm9vdCBhcyBhIGxlYWYuXG4gIGlmICghbm9kZSkgcmV0dXJuIHRyZWUuX3Jvb3QgPSBsZWFmLCB0cmVlO1xuXG4gIC8vIEZpbmQgdGhlIGV4aXN0aW5nIGxlYWYgZm9yIHRoZSBuZXcgcG9pbnQsIG9yIGFkZCBpdC5cbiAgd2hpbGUgKG5vZGUubGVuZ3RoKSB7XG4gICAgaWYgKHJpZ2h0ID0geCA+PSAoeG0gPSAoeDAgKyB4MSkgLyAyKSkgeDAgPSB4bTsgZWxzZSB4MSA9IHhtO1xuICAgIGlmIChib3R0b20gPSB5ID49ICh5bSA9ICh5MCArIHkxKSAvIDIpKSB5MCA9IHltOyBlbHNlIHkxID0geW07XG4gICAgaWYgKHBhcmVudCA9IG5vZGUsICEobm9kZSA9IG5vZGVbaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHRdKSkgcmV0dXJuIHBhcmVudFtpXSA9IGxlYWYsIHRyZWU7XG4gIH1cblxuICAvLyBJcyB0aGUgbmV3IHBvaW50IGlzIGV4YWN0bHkgY29pbmNpZGVudCB3aXRoIHRoZSBleGlzdGluZyBwb2ludD9cbiAgeHAgPSArdHJlZS5feC5jYWxsKG51bGwsIG5vZGUuZGF0YSk7XG4gIHlwID0gK3RyZWUuX3kuY2FsbChudWxsLCBub2RlLmRhdGEpO1xuICBpZiAoeCA9PT0geHAgJiYgeSA9PT0geXApIHJldHVybiBsZWFmLm5leHQgPSBub2RlLCBwYXJlbnQgPyBwYXJlbnRbaV0gPSBsZWFmIDogdHJlZS5fcm9vdCA9IGxlYWYsIHRyZWU7XG5cbiAgLy8gT3RoZXJ3aXNlLCBzcGxpdCB0aGUgbGVhZiBub2RlIHVudGlsIHRoZSBvbGQgYW5kIG5ldyBwb2ludCBhcmUgc2VwYXJhdGVkLlxuICBkbyB7XG4gICAgcGFyZW50ID0gcGFyZW50ID8gcGFyZW50W2ldID0gbmV3IEFycmF5KDQpIDogdHJlZS5fcm9vdCA9IG5ldyBBcnJheSg0KTtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgfSB3aGlsZSAoKGkgPSBib3R0b20gPDwgMSB8IHJpZ2h0KSA9PT0gKGogPSAoeXAgPj0geW0pIDw8IDEgfCAoeHAgPj0geG0pKSk7XG4gIHJldHVybiBwYXJlbnRbal0gPSBub2RlLCBwYXJlbnRbaV0gPSBsZWFmLCB0cmVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWxsKGRhdGEpIHtcbiAgdmFyIGQsIGksIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeHogPSBuZXcgQXJyYXkobiksXG4gICAgICB5eiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHgwID0gSW5maW5pdHksXG4gICAgICB5MCA9IEluZmluaXR5LFxuICAgICAgeDEgPSAtSW5maW5pdHksXG4gICAgICB5MSA9IC1JbmZpbml0eTtcblxuICAvLyBDb21wdXRlIHRoZSBwb2ludHMgYW5kIHRoZWlyIGV4dGVudC5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGlmIChpc05hTih4ID0gK3RoaXMuX3guY2FsbChudWxsLCBkID0gZGF0YVtpXSkpIHx8IGlzTmFOKHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpKSkgY29udGludWU7XG4gICAgeHpbaV0gPSB4O1xuICAgIHl6W2ldID0geTtcbiAgICBpZiAoeCA8IHgwKSB4MCA9IHg7XG4gICAgaWYgKHggPiB4MSkgeDEgPSB4O1xuICAgIGlmICh5IDwgeTApIHkwID0geTtcbiAgICBpZiAoeSA+IHkxKSB5MSA9IHk7XG4gIH1cblxuICAvLyBJZiB0aGVyZSB3ZXJlIG5vICh2YWxpZCkgcG9pbnRzLCBhYm9ydC5cbiAgaWYgKHgwID4geDEgfHwgeTAgPiB5MSkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gRXhwYW5kIHRoZSB0cmVlIHRvIGNvdmVyIHRoZSBuZXcgcG9pbnRzLlxuICB0aGlzLmNvdmVyKHgwLCB5MCkuY292ZXIoeDEsIHkxKTtcblxuICAvLyBBZGQgdGhlIG5ldyBwb2ludHMuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBhZGQodGhpcywgeHpbaV0sIHl6W2ldLCBkYXRhW2ldKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHkpIHtcbiAgaWYgKGlzTmFOKHggPSAreCkgfHwgaXNOYU4oeSA9ICt5KSkgcmV0dXJuIHRoaXM7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxID0gdGhpcy5feDEsXG4gICAgICB5MSA9IHRoaXMuX3kxO1xuXG4gIC8vIElmIHRoZSBxdWFkdHJlZSBoYXMgbm8gZXh0ZW50LCBpbml0aWFsaXplIHRoZW0uXG4gIC8vIEludGVnZXIgZXh0ZW50IGFyZSBuZWNlc3Nhcnkgc28gdGhhdCBpZiB3ZSBsYXRlciBkb3VibGUgdGhlIGV4dGVudCxcbiAgLy8gdGhlIGV4aXN0aW5nIHF1YWRyYW50IGJvdW5kYXJpZXMgZG9uXHUyMDE5dCBjaGFuZ2UgZHVlIHRvIGZsb2F0aW5nIHBvaW50IGVycm9yIVxuICBpZiAoaXNOYU4oeDApKSB7XG4gICAgeDEgPSAoeDAgPSBNYXRoLmZsb29yKHgpKSArIDE7XG4gICAgeTEgPSAoeTAgPSBNYXRoLmZsb29yKHkpKSArIDE7XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIGRvdWJsZSByZXBlYXRlZGx5IHRvIGNvdmVyLlxuICBlbHNlIHtcbiAgICB2YXIgeiA9IHgxIC0geDAgfHwgMSxcbiAgICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgaTtcblxuICAgIHdoaWxlICh4MCA+IHggfHwgeCA+PSB4MSB8fCB5MCA+IHkgfHwgeSA+PSB5MSkge1xuICAgICAgaSA9ICh5IDwgeTApIDw8IDEgfCAoeCA8IHgwKTtcbiAgICAgIHBhcmVudCA9IG5ldyBBcnJheSg0KSwgcGFyZW50W2ldID0gbm9kZSwgbm9kZSA9IHBhcmVudCwgeiAqPSAyO1xuICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgIGNhc2UgMDogeDEgPSB4MCArIHosIHkxID0geTAgKyB6OyBicmVhaztcbiAgICAgICAgY2FzZSAxOiB4MCA9IHgxIC0geiwgeTEgPSB5MCArIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IHgxID0geDAgKyB6LCB5MCA9IHkxIC0gejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogeDAgPSB4MSAtIHosIHkwID0geTEgLSB6OyBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm9vdCAmJiB0aGlzLl9yb290Lmxlbmd0aCkgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH1cblxuICB0aGlzLl94MCA9IHgwO1xuICB0aGlzLl95MCA9IHkwO1xuICB0aGlzLl94MSA9IHgxO1xuICB0aGlzLl95MSA9IHkxO1xuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdGhpcy52aXNpdChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgZG8gZGF0YS5wdXNoKG5vZGUuZGF0YSk7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmNvdmVyKCtfWzBdWzBdLCArX1swXVsxXSkuY292ZXIoK19bMV1bMF0sICtfWzFdWzFdKVxuICAgICAgOiBpc05hTih0aGlzLl94MCkgPyB1bmRlZmluZWQgOiBbW3RoaXMuX3gwLCB0aGlzLl95MF0sIFt0aGlzLl94MSwgdGhpcy5feTFdXTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB4MCwgeTAsIHgxLCB5MSkge1xuICB0aGlzLm5vZGUgPSBub2RlO1xuICB0aGlzLngwID0geDA7XG4gIHRoaXMueTAgPSB5MDtcbiAgdGhpcy54MSA9IHgxO1xuICB0aGlzLnkxID0geTE7XG59XG4iLCAiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5LCByYWRpdXMpIHtcbiAgdmFyIGRhdGEsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxLFxuICAgICAgeTEsXG4gICAgICB4MixcbiAgICAgIHkyLFxuICAgICAgeDMgPSB0aGlzLl94MSxcbiAgICAgIHkzID0gdGhpcy5feTEsXG4gICAgICBxdWFkcyA9IFtdLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBxLFxuICAgICAgaTtcblxuICBpZiAobm9kZSkgcXVhZHMucHVzaChuZXcgUXVhZChub2RlLCB4MCwgeTAsIHgzLCB5MykpO1xuICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICBlbHNlIHtcbiAgICB4MCA9IHggLSByYWRpdXMsIHkwID0geSAtIHJhZGl1cztcbiAgICB4MyA9IHggKyByYWRpdXMsIHkzID0geSArIHJhZGl1cztcbiAgICByYWRpdXMgKj0gcmFkaXVzO1xuICB9XG5cbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuXG4gICAgLy8gU3RvcCBzZWFyY2hpbmcgaWYgdGhpcyBxdWFkcmFudCBjYW5cdTIwMTl0IGNvbnRhaW4gYSBjbG9zZXIgbm9kZS5cbiAgICBpZiAoIShub2RlID0gcS5ub2RlKVxuICAgICAgICB8fCAoeDEgPSBxLngwKSA+IHgzXG4gICAgICAgIHx8ICh5MSA9IHEueTApID4geTNcbiAgICAgICAgfHwgKHgyID0gcS54MSkgPCB4MFxuICAgICAgICB8fCAoeTIgPSBxLnkxKSA8IHkwKSBjb250aW51ZTtcblxuICAgIC8vIEJpc2VjdCB0aGUgY3VycmVudCBxdWFkcmFudC5cbiAgICBpZiAobm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgeW0gPSAoeTEgKyB5MikgLyAyO1xuXG4gICAgICBxdWFkcy5wdXNoKFxuICAgICAgICBuZXcgUXVhZChub2RlWzNdLCB4bSwgeW0sIHgyLCB5MiksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMl0sIHgxLCB5bSwgeG0sIHkyKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVsxXSwgeG0sIHkxLCB4MiwgeW0pLFxuICAgICAgICBuZXcgUXVhZChub2RlWzBdLCB4MSwgeTEsIHhtLCB5bSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFZpc2l0IHRoZSBjbG9zZXN0IHF1YWRyYW50IGZpcnN0LlxuICAgICAgaWYgKGkgPSAoeSA+PSB5bSkgPDwgMSB8ICh4ID49IHhtKSkge1xuICAgICAgICBxID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHF1YWRzW3F1YWRzLmxlbmd0aCAtIDFdID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICBxdWFkc1txdWFkcy5sZW5ndGggLSAxIC0gaV0gPSBxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZpc2l0IHRoaXMgcG9pbnQuIChWaXNpdGluZyBjb2luY2lkZW50IHBvaW50cyBpc25cdTIwMTl0IG5lY2Vzc2FyeSEpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgZHggPSB4IC0gK3RoaXMuX3guY2FsbChudWxsLCBub2RlLmRhdGEpLFxuICAgICAgICAgIGR5ID0geSAtICt0aGlzLl95LmNhbGwobnVsbCwgbm9kZS5kYXRhKSxcbiAgICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgaWYgKGQyIDwgcmFkaXVzKSB7XG4gICAgICAgIHZhciBkID0gTWF0aC5zcXJ0KHJhZGl1cyA9IGQyKTtcbiAgICAgICAgeDAgPSB4IC0gZCwgeTAgPSB5IC0gZDtcbiAgICAgICAgeDMgPSB4ICsgZCwgeTMgPSB5ICsgZDtcbiAgICAgICAgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIGlmIChpc05hTih4ID0gK3RoaXMuX3guY2FsbChudWxsLCBkKSkgfHwgaXNOYU4oeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCkpKSByZXR1cm4gdGhpczsgLy8gaWdub3JlIGludmFsaWQgcG9pbnRzXG5cbiAgdmFyIHBhcmVudCxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgcmV0YWluZXIsXG4gICAgICBwcmV2aW91cyxcbiAgICAgIG5leHQsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxID0gdGhpcy5feDEsXG4gICAgICB5MSA9IHRoaXMuX3kxLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB4bSxcbiAgICAgIHltLFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b20sXG4gICAgICBpLFxuICAgICAgajtcblxuICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgaW5pdGlhbGl6ZSB0aGUgcm9vdCBhcyBhIGxlYWYuXG4gIGlmICghbm9kZSkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gRmluZCB0aGUgbGVhZiBub2RlIGZvciB0aGUgcG9pbnQuXG4gIC8vIFdoaWxlIGRlc2NlbmRpbmcsIGFsc28gcmV0YWluIHRoZSBkZWVwZXN0IHBhcmVudCB3aXRoIGEgbm9uLXJlbW92ZWQgc2libGluZy5cbiAgaWYgKG5vZGUubGVuZ3RoKSB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICAgIGlmICghKHBhcmVudCA9IG5vZGUsIG5vZGUgPSBub2RlW2kgPSBib3R0b20gPDwgMSB8IHJpZ2h0XSkpIHJldHVybiB0aGlzO1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGJyZWFrO1xuICAgIGlmIChwYXJlbnRbKGkgKyAxKSAmIDNdIHx8IHBhcmVudFsoaSArIDIpICYgM10gfHwgcGFyZW50WyhpICsgMykgJiAzXSkgcmV0YWluZXIgPSBwYXJlbnQsIGogPSBpO1xuICB9XG5cbiAgLy8gRmluZCB0aGUgcG9pbnQgdG8gcmVtb3ZlLlxuICB3aGlsZSAobm9kZS5kYXRhICE9PSBkKSBpZiAoIShwcmV2aW91cyA9IG5vZGUsIG5vZGUgPSBub2RlLm5leHQpKSByZXR1cm4gdGhpcztcbiAgaWYgKG5leHQgPSBub2RlLm5leHQpIGRlbGV0ZSBub2RlLm5leHQ7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvaW5jaWRlbnQgcG9pbnRzLCByZW1vdmUganVzdCB0aGUgcG9pbnQuXG4gIGlmIChwcmV2aW91cykgcmV0dXJuIChuZXh0ID8gcHJldmlvdXMubmV4dCA9IG5leHQgOiBkZWxldGUgcHJldmlvdXMubmV4dCksIHRoaXM7XG5cbiAgLy8gSWYgdGhpcyBpcyB0aGUgcm9vdCBwb2ludCwgcmVtb3ZlIGl0LlxuICBpZiAoIXBhcmVudCkgcmV0dXJuIHRoaXMuX3Jvb3QgPSBuZXh0LCB0aGlzO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlYWYuXG4gIG5leHQgPyBwYXJlbnRbaV0gPSBuZXh0IDogZGVsZXRlIHBhcmVudFtpXTtcblxuICAvLyBJZiB0aGUgcGFyZW50IG5vdyBjb250YWlucyBleGFjdGx5IG9uZSBsZWFmLCBjb2xsYXBzZSBzdXBlcmZsdW91cyBwYXJlbnRzLlxuICBpZiAoKG5vZGUgPSBwYXJlbnRbMF0gfHwgcGFyZW50WzFdIHx8IHBhcmVudFsyXSB8fCBwYXJlbnRbM10pXG4gICAgICAmJiBub2RlID09PSAocGFyZW50WzNdIHx8IHBhcmVudFsyXSB8fCBwYXJlbnRbMV0gfHwgcGFyZW50WzBdKVxuICAgICAgJiYgIW5vZGUubGVuZ3RoKSB7XG4gICAgaWYgKHJldGFpbmVyKSByZXRhaW5lcltqXSA9IG5vZGU7XG4gICAgZWxzZSB0aGlzLl9yb290ID0gbm9kZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsKGRhdGEpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBkYXRhLmxlbmd0aDsgaSA8IG47ICsraSkgdGhpcy5yZW1vdmUoZGF0YVtpXSk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fcm9vdDtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSAwO1xuICB0aGlzLnZpc2l0KGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBkbyArK3NpemU7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iLCAiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgcSwgbm9kZSA9IHRoaXMuX3Jvb3QsIGNoaWxkLCB4MCwgeTAsIHgxLCB5MTtcbiAgaWYgKG5vZGUpIHF1YWRzLnB1c2gobmV3IFF1YWQobm9kZSwgdGhpcy5feDAsIHRoaXMuX3kwLCB0aGlzLl94MSwgdGhpcy5feTEpKTtcbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuICAgIGlmICghY2FsbGJhY2sobm9kZSA9IHEubm9kZSwgeDAgPSBxLngwLCB5MCA9IHEueTAsIHgxID0gcS54MSwgeTEgPSBxLnkxKSAmJiBub2RlLmxlbmd0aCkge1xuICAgICAgdmFyIHhtID0gKHgwICsgeDEpIC8gMiwgeW0gPSAoeTAgKyB5MSkgLyAyO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVszXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHltLCB4MSwgeTEpKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzFdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeTAsIHgxLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVswXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeDAsIHkwLCB4bSwgeW0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgbmV4dCA9IFtdLCBxO1xuICBpZiAodGhpcy5fcm9vdCkgcXVhZHMucHVzaChuZXcgUXVhZCh0aGlzLl9yb290LCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSkpO1xuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG4gICAgdmFyIG5vZGUgPSBxLm5vZGU7XG4gICAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSwgeG0gPSAoeDAgKyB4MSkgLyAyLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzBdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeTAsIHhtLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzNdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeW0sIHgxLCB5MSkpO1xuICAgIH1cbiAgICBuZXh0LnB1c2gocSk7XG4gIH1cbiAgd2hpbGUgKHEgPSBuZXh0LnBvcCgpKSB7XG4gICAgY2FsbGJhY2socS5ub2RlLCBxLngwLCBxLnkwLCBxLngxLCBxLnkxKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdFgoZCkge1xuICByZXR1cm4gZFswXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGlzLl94ID0gXywgdGhpcykgOiB0aGlzLl94O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WShkKSB7XG4gIHJldHVybiBkWzFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoaXMuX3kgPSBfLCB0aGlzKSA6IHRoaXMuX3k7XG59XG4iLCAiaW1wb3J0IHRyZWVfYWRkLCB7YWRkQWxsIGFzIHRyZWVfYWRkQWxsfSBmcm9tIFwiLi9hZGQuanNcIjtcbmltcG9ydCB0cmVlX2NvdmVyIGZyb20gXCIuL2NvdmVyLmpzXCI7XG5pbXBvcnQgdHJlZV9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCB0cmVlX2V4dGVudCBmcm9tIFwiLi9leHRlbnQuanNcIjtcbmltcG9ydCB0cmVlX2ZpbmQgZnJvbSBcIi4vZmluZC5qc1wiO1xuaW1wb3J0IHRyZWVfcmVtb3ZlLCB7cmVtb3ZlQWxsIGFzIHRyZWVfcmVtb3ZlQWxsfSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCB0cmVlX3Jvb3QgZnJvbSBcIi4vcm9vdC5qc1wiO1xuaW1wb3J0IHRyZWVfc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgdHJlZV92aXNpdCBmcm9tIFwiLi92aXNpdC5qc1wiO1xuaW1wb3J0IHRyZWVfdmlzaXRBZnRlciBmcm9tIFwiLi92aXNpdEFmdGVyLmpzXCI7XG5pbXBvcnQgdHJlZV94LCB7ZGVmYXVsdFh9IGZyb20gXCIuL3guanNcIjtcbmltcG9ydCB0cmVlX3ksIHtkZWZhdWx0WX0gZnJvbSBcIi4veS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFkdHJlZShub2RlcywgeCwgeSkge1xuICB2YXIgdHJlZSA9IG5ldyBRdWFkdHJlZSh4ID09IG51bGwgPyBkZWZhdWx0WCA6IHgsIHkgPT0gbnVsbCA/IGRlZmF1bHRZIDogeSwgTmFOLCBOYU4sIE5hTiwgTmFOKTtcbiAgcmV0dXJuIG5vZGVzID09IG51bGwgPyB0cmVlIDogdHJlZS5hZGRBbGwobm9kZXMpO1xufVxuXG5mdW5jdGlvbiBRdWFkdHJlZSh4LCB5LCB4MCwgeTAsIHgxLCB5MSkge1xuICB0aGlzLl94ID0geDtcbiAgdGhpcy5feSA9IHk7XG4gIHRoaXMuX3gwID0geDA7XG4gIHRoaXMuX3kwID0geTA7XG4gIHRoaXMuX3gxID0geDE7XG4gIHRoaXMuX3kxID0geTE7XG4gIHRoaXMuX3Jvb3QgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGxlYWZfY29weShsZWFmKSB7XG4gIHZhciBjb3B5ID0ge2RhdGE6IGxlYWYuZGF0YX0sIG5leHQgPSBjb3B5O1xuICB3aGlsZSAobGVhZiA9IGxlYWYubmV4dCkgbmV4dCA9IG5leHQubmV4dCA9IHtkYXRhOiBsZWFmLmRhdGF9O1xuICByZXR1cm4gY29weTtcbn1cblxudmFyIHRyZWVQcm90byA9IHF1YWR0cmVlLnByb3RvdHlwZSA9IFF1YWR0cmVlLnByb3RvdHlwZTtcblxudHJlZVByb3RvLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNvcHkgPSBuZXcgUXVhZHRyZWUodGhpcy5feCwgdGhpcy5feSwgdGhpcy5feDAsIHRoaXMuX3kwLCB0aGlzLl94MSwgdGhpcy5feTEpLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBub2RlcyxcbiAgICAgIGNoaWxkO1xuXG4gIGlmICghbm9kZSkgcmV0dXJuIGNvcHk7XG5cbiAgaWYgKCFub2RlLmxlbmd0aCkgcmV0dXJuIGNvcHkuX3Jvb3QgPSBsZWFmX2NvcHkobm9kZSksIGNvcHk7XG5cbiAgbm9kZXMgPSBbe3NvdXJjZTogbm9kZSwgdGFyZ2V0OiBjb3B5Ll9yb290ID0gbmV3IEFycmF5KDQpfV07XG4gIHdoaWxlIChub2RlID0gbm9kZXMucG9wKCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgaWYgKGNoaWxkID0gbm9kZS5zb3VyY2VbaV0pIHtcbiAgICAgICAgaWYgKGNoaWxkLmxlbmd0aCkgbm9kZXMucHVzaCh7c291cmNlOiBjaGlsZCwgdGFyZ2V0OiBub2RlLnRhcmdldFtpXSA9IG5ldyBBcnJheSg0KX0pO1xuICAgICAgICBlbHNlIG5vZGUudGFyZ2V0W2ldID0gbGVhZl9jb3B5KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weTtcbn07XG5cbnRyZWVQcm90by5hZGQgPSB0cmVlX2FkZDtcbnRyZWVQcm90by5hZGRBbGwgPSB0cmVlX2FkZEFsbDtcbnRyZWVQcm90by5jb3ZlciA9IHRyZWVfY292ZXI7XG50cmVlUHJvdG8uZGF0YSA9IHRyZWVfZGF0YTtcbnRyZWVQcm90by5leHRlbnQgPSB0cmVlX2V4dGVudDtcbnRyZWVQcm90by5maW5kID0gdHJlZV9maW5kO1xudHJlZVByb3RvLnJlbW92ZSA9IHRyZWVfcmVtb3ZlO1xudHJlZVByb3RvLnJlbW92ZUFsbCA9IHRyZWVfcmVtb3ZlQWxsO1xudHJlZVByb3RvLnJvb3QgPSB0cmVlX3Jvb3Q7XG50cmVlUHJvdG8uc2l6ZSA9IHRyZWVfc2l6ZTtcbnRyZWVQcm90by52aXNpdCA9IHRyZWVfdmlzaXQ7XG50cmVlUHJvdG8udmlzaXRBZnRlciA9IHRyZWVfdmlzaXRBZnRlcjtcbnRyZWVQcm90by54ID0gdHJlZV94O1xudHJlZVByb3RvLnkgPSB0cmVlX3k7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmFuZG9tKSB7XG4gIHJldHVybiAocmFuZG9tKCkgLSAwLjUpICogMWUtNjtcbn1cbiIsICJpbXBvcnQge3F1YWR0cmVlfSBmcm9tIFwiZDMtcXVhZHRyZWVcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcblxuZnVuY3Rpb24geChkKSB7XG4gIHJldHVybiBkLnggKyBkLnZ4O1xufVxuXG5mdW5jdGlvbiB5KGQpIHtcbiAgcmV0dXJuIGQueSArIGQudnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhZGl1cykge1xuICB2YXIgbm9kZXMsXG4gICAgICByYWRpaSxcbiAgICAgIHJhbmRvbSxcbiAgICAgIHN0cmVuZ3RoID0gMSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmICh0eXBlb2YgcmFkaXVzICE9PSBcImZ1bmN0aW9uXCIpIHJhZGl1cyA9IGNvbnN0YW50KHJhZGl1cyA9PSBudWxsID8gMSA6ICtyYWRpdXMpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKCkge1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICB0cmVlLFxuICAgICAgICBub2RlLFxuICAgICAgICB4aSxcbiAgICAgICAgeWksXG4gICAgICAgIHJpLFxuICAgICAgICByaTI7XG5cbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGl0ZXJhdGlvbnM7ICsraykge1xuICAgICAgdHJlZSA9IHF1YWR0cmVlKG5vZGVzLCB4LCB5KS52aXNpdEFmdGVyKHByZXBhcmUpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHJpID0gcmFkaWlbbm9kZS5pbmRleF0sIHJpMiA9IHJpICogcmk7XG4gICAgICAgIHhpID0gbm9kZS54ICsgbm9kZS52eDtcbiAgICAgICAgeWkgPSBub2RlLnkgKyBub2RlLnZ5O1xuICAgICAgICB0cmVlLnZpc2l0KGFwcGx5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseShxdWFkLCB4MCwgeTAsIHgxLCB5MSkge1xuICAgICAgdmFyIGRhdGEgPSBxdWFkLmRhdGEsIHJqID0gcXVhZC5yLCByID0gcmkgKyByajtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmluZGV4ID4gbm9kZS5pbmRleCkge1xuICAgICAgICAgIHZhciB4ID0geGkgLSBkYXRhLnggLSBkYXRhLnZ4LFxuICAgICAgICAgICAgICB5ID0geWkgLSBkYXRhLnkgLSBkYXRhLnZ5LFxuICAgICAgICAgICAgICBsID0geCAqIHggKyB5ICogeTtcbiAgICAgICAgICBpZiAobCA8IHIgKiByKSB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgICAgICAgIGwgPSAociAtIChsID0gTWF0aC5zcXJ0KGwpKSkgLyBsICogc3RyZW5ndGg7XG4gICAgICAgICAgICBub2RlLnZ4ICs9ICh4ICo9IGwpICogKHIgPSAocmogKj0gcmopIC8gKHJpMiArIHJqKSk7XG4gICAgICAgICAgICBub2RlLnZ5ICs9ICh5ICo9IGwpICogcjtcbiAgICAgICAgICAgIGRhdGEudnggLT0geCAqIChyID0gMSAtIHIpO1xuICAgICAgICAgICAgZGF0YS52eSAtPSB5ICogcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHgwID4geGkgKyByIHx8IHgxIDwgeGkgLSByIHx8IHkwID4geWkgKyByIHx8IHkxIDwgeWkgLSByO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmUocXVhZCkge1xuICAgIGlmIChxdWFkLmRhdGEpIHJldHVybiBxdWFkLnIgPSByYWRpaVtxdWFkLmRhdGEuaW5kZXhdO1xuICAgIGZvciAodmFyIGkgPSBxdWFkLnIgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBpZiAocXVhZFtpXSAmJiBxdWFkW2ldLnIgPiBxdWFkLnIpIHtcbiAgICAgICAgcXVhZC5yID0gcXVhZFtpXS5yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuICAgIHJhZGlpID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgcmFkaWlbbm9kZS5pbmRleF0gPSArcmFkaXVzKG5vZGUsIGksIG5vZGVzKTtcbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9ICtfLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5yYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogcmFkaXVzO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGluZGV4KGQpIHtcbiAgcmV0dXJuIGQuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmQobm9kZUJ5SWQsIG5vZGVJZCkge1xuICB2YXIgbm9kZSA9IG5vZGVCeUlkLmdldChub2RlSWQpO1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcihcIm5vZGUgbm90IGZvdW5kOiBcIiArIG5vZGVJZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsaW5rcykge1xuICB2YXIgaWQgPSBpbmRleCxcbiAgICAgIHN0cmVuZ3RoID0gZGVmYXVsdFN0cmVuZ3RoLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgZGlzdGFuY2UgPSBjb25zdGFudCgzMCksXG4gICAgICBkaXN0YW5jZXMsXG4gICAgICBub2RlcyxcbiAgICAgIGNvdW50LFxuICAgICAgYmlhcyxcbiAgICAgIHJhbmRvbSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmIChsaW5rcyA9PSBudWxsKSBsaW5rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRlZmF1bHRTdHJlbmd0aChsaW5rKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLm1pbihjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0sIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGsgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGluaywgc291cmNlLCB0YXJnZXQsIHgsIHksIGwsIGI7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbGluayA9IGxpbmtzW2ldLCBzb3VyY2UgPSBsaW5rLnNvdXJjZSwgdGFyZ2V0ID0gbGluay50YXJnZXQ7XG4gICAgICAgIHggPSB0YXJnZXQueCArIHRhcmdldC52eCAtIHNvdXJjZS54IC0gc291cmNlLnZ4IHx8IGppZ2dsZShyYW5kb20pO1xuICAgICAgICB5ID0gdGFyZ2V0LnkgKyB0YXJnZXQudnkgLSBzb3VyY2UueSAtIHNvdXJjZS52eSB8fCBqaWdnbGUocmFuZG9tKTtcbiAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgbCA9IChsIC0gZGlzdGFuY2VzW2ldKSAvIGwgKiBhbHBoYSAqIHN0cmVuZ3Roc1tpXTtcbiAgICAgICAgeCAqPSBsLCB5ICo9IGw7XG4gICAgICAgIHRhcmdldC52eCAtPSB4ICogKGIgPSBiaWFzW2ldKTtcbiAgICAgICAgdGFyZ2V0LnZ5IC09IHkgKiBiO1xuICAgICAgICBzb3VyY2UudnggKz0geCAqIChiID0gMSAtIGIpO1xuICAgICAgICBzb3VyY2UudnkgKz0geSAqIGI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbSA9IGxpbmtzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKSxcbiAgICAgICAgbGluaztcblxuICAgIGZvciAoaSA9IDAsIGNvdW50ID0gbmV3IEFycmF5KG4pOyBpIDwgbTsgKytpKSB7XG4gICAgICBsaW5rID0gbGlua3NbaV0sIGxpbmsuaW5kZXggPSBpO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rLnNvdXJjZSAhPT0gXCJvYmplY3RcIikgbGluay5zb3VyY2UgPSBmaW5kKG5vZGVCeUlkLCBsaW5rLnNvdXJjZSk7XG4gICAgICBpZiAodHlwZW9mIGxpbmsudGFyZ2V0ICE9PSBcIm9iamVjdFwiKSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIGxpbmsudGFyZ2V0KTtcbiAgICAgIGNvdW50W2xpbmsuc291cmNlLmluZGV4XSA9IChjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gfHwgMCkgKyAxO1xuICAgICAgY291bnRbbGluay50YXJnZXQuaW5kZXhdID0gKGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgYmlhcyA9IG5ldyBBcnJheShtKTsgaSA8IG07ICsraSkge1xuICAgICAgbGluayA9IGxpbmtzW2ldLCBiaWFzW2ldID0gY291bnRbbGluay5zb3VyY2UuaW5kZXhdIC8gKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSArIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gICAgfVxuXG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG0pLCBpbml0aWFsaXplU3RyZW5ndGgoKTtcbiAgICBkaXN0YW5jZXMgPSBuZXcgQXJyYXkobSksIGluaXRpYWxpemVEaXN0YW5jZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0cmVuZ3RoKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSArc3RyZW5ndGgobGlua3NbaV0sIGksIGxpbmtzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplRGlzdGFuY2UoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGRpc3RhbmNlc1tpXSA9ICtkaXN0YW5jZShsaW5rc1tpXSwgaSwgbGlua3MpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IF8sIGluaXRpYWxpemUoKSwgZm9yY2UpIDogbGlua3M7XG4gIH07XG5cbiAgZm9yY2UuaWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaWQgPSBfLCBmb3JjZSkgOiBpZDtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplU3RyZW5ndGgoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2UgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZURpc3RhbmNlKCksIGZvcmNlKSA6IGRpc3RhbmNlO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsICJ2YXIgZnJhbWUgPSAwLCAvLyBpcyBhbiBhbmltYXRpb24gZnJhbWUgcGVuZGluZz9cbiAgICB0aW1lb3V0ID0gMCwgLy8gaXMgYSB0aW1lb3V0IHBlbmRpbmc/XG4gICAgaW50ZXJ2YWwgPSAwLCAvLyBhcmUgYW55IHRpbWVycyBhY3RpdmU/XG4gICAgcG9rZURlbGF5ID0gMTAwMCwgLy8gaG93IGZyZXF1ZW50bHkgd2UgY2hlY2sgZm9yIGNsb2NrIHNrZXdcbiAgICB0YXNrSGVhZCxcbiAgICB0YXNrVGFpbCxcbiAgICBjbG9ja0xhc3QgPSAwLFxuICAgIGNsb2NrTm93ID0gMCxcbiAgICBjbG9ja1NrZXcgPSAwLFxuICAgIGNsb2NrID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlIDogRGF0ZSxcbiAgICBzZXRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpIDogZnVuY3Rpb24oZikgeyBzZXRUaW1lb3V0KGYsIDE3KTsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIGNsb2NrTm93IHx8IChzZXRGcmFtZShjbGVhck5vdyksIGNsb2NrTm93ID0gY2xvY2subm93KCkgKyBjbG9ja1NrZXcpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5vdygpIHtcbiAgY2xvY2tOb3cgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIHRoaXMuX2NhbGwgPVxuICB0aGlzLl90aW1lID1cbiAgdGhpcy5fbmV4dCA9IG51bGw7XG59XG5cblRpbWVyLnByb3RvdHlwZSA9IHRpbWVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRpbWVyLFxuICByZXN0YXJ0OiBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB0aW1lID0gKHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWUpICsgKGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5KTtcbiAgICBpZiAoIXRoaXMuX25leHQgJiYgdGFza1RhaWwgIT09IHRoaXMpIHtcbiAgICAgIGlmICh0YXNrVGFpbCkgdGFza1RhaWwuX25leHQgPSB0aGlzO1xuICAgICAgZWxzZSB0YXNrSGVhZCA9IHRoaXM7XG4gICAgICB0YXNrVGFpbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuX2NhbGwgPSBjYWxsYmFjaztcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICBzbGVlcCgpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2FsbCkge1xuICAgICAgdGhpcy5fY2FsbCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lID0gSW5maW5pdHk7XG4gICAgICBzbGVlcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXJGbHVzaCgpIHtcbiAgbm93KCk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lLCBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICsrZnJhbWU7IC8vIFByZXRlbmQgd2VcdTIwMTl2ZSBzZXQgYW4gYWxhcm0sIGlmIHdlIGhhdmVuXHUyMDE5dCBhbHJlYWR5LlxuICB2YXIgdCA9IHRhc2tIZWFkLCBlO1xuICB3aGlsZSAodCkge1xuICAgIGlmICgoZSA9IGNsb2NrTm93IC0gdC5fdGltZSkgPj0gMCkgdC5fY2FsbC5jYWxsKHVuZGVmaW5lZCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwgImltcG9ydCB7VGltZXJ9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgZGVsYXkgPSBkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheTtcbiAgdC5yZXN0YXJ0KGVsYXBzZWQgPT4ge1xuICAgIHQuc3RvcCgpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQgKyBkZWxheSk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCAiLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3IjUGFyYW1ldGVyc19pbl9jb21tb25fdXNlXG5jb25zdCBhID0gMTY2NDUyNTtcbmNvbnN0IGMgPSAxMDEzOTA0MjIzO1xuY29uc3QgbSA9IDQyOTQ5NjcyOTY7IC8vIDJeMzJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzID0gMTtcbiAgcmV0dXJuICgpID0+IChzID0gKGEgKiBzICsgYykgJSBtKSAvIG07XG59XG4iLCAiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyfSBmcm9tIFwiZDMtdGltZXJcIjtcbmltcG9ydCBsY2cgZnJvbSBcIi4vbGNnLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4KGQpIHtcbiAgcmV0dXJuIGQueDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkoZCkge1xuICByZXR1cm4gZC55O1xufVxuXG52YXIgaW5pdGlhbFJhZGl1cyA9IDEwLFxuICAgIGluaXRpYWxBbmdsZSA9IE1hdGguUEkgKiAoMyAtIE1hdGguc3FydCg1KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGVzKSB7XG4gIHZhciBzaW11bGF0aW9uLFxuICAgICAgYWxwaGEgPSAxLFxuICAgICAgYWxwaGFNaW4gPSAwLjAwMSxcbiAgICAgIGFscGhhRGVjYXkgPSAxIC0gTWF0aC5wb3coYWxwaGFNaW4sIDEgLyAzMDApLFxuICAgICAgYWxwaGFUYXJnZXQgPSAwLFxuICAgICAgdmVsb2NpdHlEZWNheSA9IDAuNixcbiAgICAgIGZvcmNlcyA9IG5ldyBNYXAoKSxcbiAgICAgIHN0ZXBwZXIgPSB0aW1lcihzdGVwKSxcbiAgICAgIGV2ZW50ID0gZGlzcGF0Y2goXCJ0aWNrXCIsIFwiZW5kXCIpLFxuICAgICAgcmFuZG9tID0gbGNnKCk7XG5cbiAgaWYgKG5vZGVzID09IG51bGwpIG5vZGVzID0gW107XG5cbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICB0aWNrKCk7XG4gICAgZXZlbnQuY2FsbChcInRpY2tcIiwgc2ltdWxhdGlvbik7XG4gICAgaWYgKGFscGhhIDwgYWxwaGFNaW4pIHtcbiAgICAgIHN0ZXBwZXIuc3RvcCgpO1xuICAgICAgZXZlbnQuY2FsbChcImVuZFwiLCBzaW11bGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKGl0ZXJhdGlvbnMpIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcblxuICAgIGlmIChpdGVyYXRpb25zID09PSB1bmRlZmluZWQpIGl0ZXJhdGlvbnMgPSAxO1xuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBpdGVyYXRpb25zOyArK2spIHtcbiAgICAgIGFscGhhICs9IChhbHBoYVRhcmdldCAtIGFscGhhKSAqIGFscGhhRGVjYXk7XG5cbiAgICAgIGZvcmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGZvcmNlKSB7XG4gICAgICAgIGZvcmNlKGFscGhhKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUuZnggPT0gbnVsbCkgbm9kZS54ICs9IG5vZGUudnggKj0gdmVsb2NpdHlEZWNheTtcbiAgICAgICAgZWxzZSBub2RlLnggPSBub2RlLmZ4LCBub2RlLnZ4ID0gMDtcbiAgICAgICAgaWYgKG5vZGUuZnkgPT0gbnVsbCkgbm9kZS55ICs9IG5vZGUudnkgKj0gdmVsb2NpdHlEZWNheTtcbiAgICAgICAgZWxzZSBub2RlLnkgPSBub2RlLmZ5LCBub2RlLnZ5ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2ltdWxhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVOb2RlcygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLmluZGV4ID0gaTtcbiAgICAgIGlmIChub2RlLmZ4ICE9IG51bGwpIG5vZGUueCA9IG5vZGUuZng7XG4gICAgICBpZiAobm9kZS5meSAhPSBudWxsKSBub2RlLnkgPSBub2RlLmZ5O1xuICAgICAgaWYgKGlzTmFOKG5vZGUueCkgfHwgaXNOYU4obm9kZS55KSkge1xuICAgICAgICB2YXIgcmFkaXVzID0gaW5pdGlhbFJhZGl1cyAqIE1hdGguc3FydCgwLjUgKyBpKSwgYW5nbGUgPSBpICogaW5pdGlhbEFuZ2xlO1xuICAgICAgICBub2RlLnggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIG5vZGUueSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihub2RlLnZ4KSB8fCBpc05hTihub2RlLnZ5KSkge1xuICAgICAgICBub2RlLnZ4ID0gbm9kZS52eSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUZvcmNlKGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlLmluaXRpYWxpemUpIGZvcmNlLmluaXRpYWxpemUobm9kZXMsIHJhbmRvbSk7XG4gICAgcmV0dXJuIGZvcmNlO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU5vZGVzKCk7XG5cbiAgcmV0dXJuIHNpbXVsYXRpb24gPSB7XG4gICAgdGljazogdGljayxcblxuICAgIHJlc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0ZXBwZXIucmVzdGFydChzdGVwKSwgc2ltdWxhdGlvbjtcbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RlcHBlci5zdG9wKCksIHNpbXVsYXRpb247XG4gICAgfSxcblxuICAgIG5vZGVzOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlcyA9IF8sIGluaXRpYWxpemVOb2RlcygpLCBmb3JjZXMuZm9yRWFjaChpbml0aWFsaXplRm9yY2UpLCBzaW11bGF0aW9uKSA6IG5vZGVzO1xuICAgIH0sXG5cbiAgICBhbHBoYTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxwaGEgPSArXywgc2ltdWxhdGlvbikgOiBhbHBoYTtcbiAgICB9LFxuXG4gICAgYWxwaGFNaW46IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhTWluID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGFNaW47XG4gICAgfSxcblxuICAgIGFscGhhRGVjYXk6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhRGVjYXkgPSArXywgc2ltdWxhdGlvbikgOiArYWxwaGFEZWNheTtcbiAgICB9LFxuXG4gICAgYWxwaGFUYXJnZXQ6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhVGFyZ2V0ID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGFUYXJnZXQ7XG4gICAgfSxcblxuICAgIHZlbG9jaXR5RGVjYXk6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZlbG9jaXR5RGVjYXkgPSAxIC0gXywgc2ltdWxhdGlvbikgOiAxIC0gdmVsb2NpdHlEZWNheTtcbiAgICB9LFxuXG4gICAgcmFuZG9tU291cmNlOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5kb20gPSBfLCBmb3JjZXMuZm9yRWFjaChpbml0aWFsaXplRm9yY2UpLCBzaW11bGF0aW9uKSA6IHJhbmRvbTtcbiAgICB9LFxuXG4gICAgZm9yY2U6IGZ1bmN0aW9uKG5hbWUsIF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/ICgoXyA9PSBudWxsID8gZm9yY2VzLmRlbGV0ZShuYW1lKSA6IGZvcmNlcy5zZXQobmFtZSwgaW5pdGlhbGl6ZUZvcmNlKF8pKSksIHNpbXVsYXRpb24pIDogZm9yY2VzLmdldChuYW1lKTtcbiAgICB9LFxuXG4gICAgZmluZDogZnVuY3Rpb24oeCwgeSwgcmFkaXVzKSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBkeCxcbiAgICAgICAgICBkeSxcbiAgICAgICAgICBkMixcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGNsb3Nlc3Q7XG5cbiAgICAgIGlmIChyYWRpdXMgPT0gbnVsbCkgcmFkaXVzID0gSW5maW5pdHk7XG4gICAgICBlbHNlIHJhZGl1cyAqPSByYWRpdXM7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBkeCA9IHggLSBub2RlLng7XG4gICAgICAgIGR5ID0geSAtIG5vZGUueTtcbiAgICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgICAgaWYgKGQyIDwgcmFkaXVzKSBjbG9zZXN0ID0gbm9kZSwgcmFkaXVzID0gZDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24obmFtZSwgXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gKGV2ZW50Lm9uKG5hbWUsIF8pLCBzaW11bGF0aW9uKSA6IGV2ZW50Lm9uKG5hbWUpO1xuICAgIH1cbiAgfTtcbn1cbiIsICJpbXBvcnQge3F1YWR0cmVlfSBmcm9tIFwiZDMtcXVhZHRyZWVcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcbmltcG9ydCB7eCwgeX0gZnJvbSBcIi4vc2ltdWxhdGlvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGVzLFxuICAgICAgbm9kZSxcbiAgICAgIHJhbmRvbSxcbiAgICAgIGFscGhhLFxuICAgICAgc3RyZW5ndGggPSBjb25zdGFudCgtMzApLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgZGlzdGFuY2VNaW4yID0gMSxcbiAgICAgIGRpc3RhbmNlTWF4MiA9IEluZmluaXR5LFxuICAgICAgdGhldGEyID0gMC44MTtcblxuICBmdW5jdGlvbiBmb3JjZShfKSB7XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIHRyZWUgPSBxdWFkdHJlZShub2RlcywgeCwgeSkudmlzaXRBZnRlcihhY2N1bXVsYXRlKTtcbiAgICBmb3IgKGFscGhhID0gXywgaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgdHJlZS52aXNpdChhcHBseSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgbm9kZSA9IG5vZGVzW2ldLCBzdHJlbmd0aHNbbm9kZS5pbmRleF0gPSArc3RyZW5ndGgobm9kZSwgaSwgbm9kZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjdW11bGF0ZShxdWFkKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gMCwgcSwgYywgd2VpZ2h0ID0gMCwgeCwgeSwgaTtcblxuICAgIC8vIEZvciBpbnRlcm5hbCBub2RlcywgYWNjdW11bGF0ZSBmb3JjZXMgZnJvbSBjaGlsZCBxdWFkcmFudHMuXG4gICAgaWYgKHF1YWQubGVuZ3RoKSB7XG4gICAgICBmb3IgKHggPSB5ID0gaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgaWYgKChxID0gcXVhZFtpXSkgJiYgKGMgPSBNYXRoLmFicyhxLnZhbHVlKSkpIHtcbiAgICAgICAgICBzdHJlbmd0aCArPSBxLnZhbHVlLCB3ZWlnaHQgKz0gYywgeCArPSBjICogcS54LCB5ICs9IGMgKiBxLnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHF1YWQueCA9IHggLyB3ZWlnaHQ7XG4gICAgICBxdWFkLnkgPSB5IC8gd2VpZ2h0O1xuICAgIH1cblxuICAgIC8vIEZvciBsZWFmIG5vZGVzLCBhY2N1bXVsYXRlIGZvcmNlcyBmcm9tIGNvaW5jaWRlbnQgcXVhZHJhbnRzLlxuICAgIGVsc2Uge1xuICAgICAgcSA9IHF1YWQ7XG4gICAgICBxLnggPSBxLmRhdGEueDtcbiAgICAgIHEueSA9IHEuZGF0YS55O1xuICAgICAgZG8gc3RyZW5ndGggKz0gc3RyZW5ndGhzW3EuZGF0YS5pbmRleF07XG4gICAgICB3aGlsZSAocSA9IHEubmV4dCk7XG4gICAgfVxuXG4gICAgcXVhZC52YWx1ZSA9IHN0cmVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHkocXVhZCwgeDEsIF8sIHgyKSB7XG4gICAgaWYgKCFxdWFkLnZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHZhciB4ID0gcXVhZC54IC0gbm9kZS54LFxuICAgICAgICB5ID0gcXVhZC55IC0gbm9kZS55LFxuICAgICAgICB3ID0geDIgLSB4MSxcbiAgICAgICAgbCA9IHggKiB4ICsgeSAqIHk7XG5cbiAgICAvLyBBcHBseSB0aGUgQmFybmVzLUh1dCBhcHByb3hpbWF0aW9uIGlmIHBvc3NpYmxlLlxuICAgIC8vIExpbWl0IGZvcmNlcyBmb3IgdmVyeSBjbG9zZSBub2RlczsgcmFuZG9taXplIGRpcmVjdGlvbiBpZiBjb2luY2lkZW50LlxuICAgIGlmICh3ICogdyAvIHRoZXRhMiA8IGwpIHtcbiAgICAgIGlmIChsIDwgZGlzdGFuY2VNYXgyKSB7XG4gICAgICAgIGlmICh4ID09PSAwKSB4ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geCAqIHg7XG4gICAgICAgIGlmICh5ID09PSAwKSB5ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geSAqIHk7XG4gICAgICAgIGlmIChsIDwgZGlzdGFuY2VNaW4yKSBsID0gTWF0aC5zcXJ0KGRpc3RhbmNlTWluMiAqIGwpO1xuICAgICAgICBub2RlLnZ4ICs9IHggKiBxdWFkLnZhbHVlICogYWxwaGEgLyBsO1xuICAgICAgICBub2RlLnZ5ICs9IHkgKiBxdWFkLnZhbHVlICogYWxwaGEgLyBsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBwcm9jZXNzIHBvaW50cyBkaXJlY3RseS5cbiAgICBlbHNlIGlmIChxdWFkLmxlbmd0aCB8fCBsID49IGRpc3RhbmNlTWF4MikgcmV0dXJuO1xuXG4gICAgLy8gTGltaXQgZm9yY2VzIGZvciB2ZXJ5IGNsb3NlIG5vZGVzOyByYW5kb21pemUgZGlyZWN0aW9uIGlmIGNvaW5jaWRlbnQuXG4gICAgaWYgKHF1YWQuZGF0YSAhPT0gbm9kZSB8fCBxdWFkLm5leHQpIHtcbiAgICAgIGlmICh4ID09PSAwKSB4ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geCAqIHg7XG4gICAgICBpZiAoeSA9PT0gMCkgeSA9IGppZ2dsZShyYW5kb20pLCBsICs9IHkgKiB5O1xuICAgICAgaWYgKGwgPCBkaXN0YW5jZU1pbjIpIGwgPSBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yICogbCk7XG4gICAgfVxuXG4gICAgZG8gaWYgKHF1YWQuZGF0YSAhPT0gbm9kZSkge1xuICAgICAgdyA9IHN0cmVuZ3Roc1txdWFkLmRhdGEuaW5kZXhdICogYWxwaGEgLyBsO1xuICAgICAgbm9kZS52eCArPSB4ICogdztcbiAgICAgIG5vZGUudnkgKz0geSAqIHc7XG4gICAgfSB3aGlsZSAocXVhZCA9IHF1YWQubmV4dCk7XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oX25vZGVzLCBfcmFuZG9tKSB7XG4gICAgbm9kZXMgPSBfbm9kZXM7XG4gICAgcmFuZG9tID0gX3JhbmRvbTtcbiAgICBpbml0aWFsaXplKCk7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZU1pbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZU1pbjIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KGRpc3RhbmNlTWluMik7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2VNYXggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2VNYXgyID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydChkaXN0YW5jZU1heDIpO1xuICB9O1xuXG4gIGZvcmNlLnRoZXRhID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoZXRhMiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQodGhldGEyKTtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgdmFyIHN0cmVuZ3RoID0gY29uc3RhbnQoMC4xKSxcbiAgICAgIG5vZGVzLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgeHo7XG5cbiAgaWYgKHR5cGVvZiB4ICE9PSBcImZ1bmN0aW9uXCIpIHggPSBjb25zdGFudCh4ID09IG51bGwgPyAwIDogK3gpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS52eCArPSAoeHpbaV0gLSBub2RlLngpICogc3RyZW5ndGhzW2ldICogYWxwaGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGg7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIHh6ID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9IGlzTmFOKHh6W2ldID0gK3gobm9kZXNbaV0sIGksIG5vZGVzKSkgPyAwIDogK3N0cmVuZ3RoKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogeDtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIHN0cmVuZ3RoID0gY29uc3RhbnQoMC4xKSxcbiAgICAgIG5vZGVzLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgeXo7XG5cbiAgaWYgKHR5cGVvZiB5ICE9PSBcImZ1bmN0aW9uXCIpIHkgPSBjb25zdGFudCh5ID09IG51bGwgPyAwIDogK3kpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS52eSArPSAoeXpbaV0gLSBub2RlLnkpICogc3RyZW5ndGhzW2ldICogYWxwaGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGg7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIHl6ID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9IGlzTmFOKHl6W2ldID0gK3kobm9kZXNbaV0sIGksIG5vZGVzKSkgPyAwIDogK3N0cmVuZ3RoKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogeTtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiLy8gVGhlc2UgYXJlIHR5cGljYWxseSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggbm9ldmVudCB0byBlbnN1cmUgdGhhdCB3ZSBjYW5cbi8vIHByZXZlbnREZWZhdWx0IG9uIHRoZSBldmVudC5cbmV4cG9ydCBjb25zdCBub25wYXNzaXZlID0ge3Bhc3NpdmU6IGZhbHNlfTtcbmV4cG9ydCBjb25zdCBub25wYXNzaXZlY2FwdHVyZSA9IHtjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZX07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3Byb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IG5vZXZlbnQsIHtub25wYXNzaXZlY2FwdHVyZX0gZnJvbSBcIi4vbm9ldmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2aWV3KSB7XG4gIHZhciByb290ID0gdmlldy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBzZWxlY3Rpb24gPSBzZWxlY3Qodmlldykub24oXCJkcmFnc3RhcnQuZHJhZ1wiLCBub2V2ZW50LCBub25wYXNzaXZlY2FwdHVyZSk7XG4gIGlmIChcIm9uc2VsZWN0c3RhcnRcIiBpbiByb290KSB7XG4gICAgc2VsZWN0aW9uLm9uKFwic2VsZWN0c3RhcnQuZHJhZ1wiLCBub2V2ZW50LCBub25wYXNzaXZlY2FwdHVyZSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fX25vc2VsZWN0ID0gcm9vdC5zdHlsZS5Nb3pVc2VyU2VsZWN0O1xuICAgIHJvb3Quc3R5bGUuTW96VXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXNkcmFnKHZpZXcsIG5vY2xpY2spIHtcbiAgdmFyIHJvb3QgPSB2aWV3LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdCh2aWV3KS5vbihcImRyYWdzdGFydC5kcmFnXCIsIG51bGwpO1xuICBpZiAobm9jbGljaykge1xuICAgIHNlbGVjdGlvbi5vbihcImNsaWNrLmRyYWdcIiwgbm9ldmVudCwgbm9ucGFzc2l2ZWNhcHR1cmUpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHNlbGVjdGlvbi5vbihcImNsaWNrLmRyYWdcIiwgbnVsbCk7IH0sIDApO1xuICB9XG4gIGlmIChcIm9uc2VsZWN0c3RhcnRcIiBpbiByb290KSB7XG4gICAgc2VsZWN0aW9uLm9uKFwic2VsZWN0c3RhcnQuZHJhZ1wiLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICByb290LnN0eWxlLk1velVzZXJTZWxlY3QgPSByb290Ll9fbm9zZWxlY3Q7XG4gICAgZGVsZXRlIHJvb3QuX19ub3NlbGVjdDtcbiAgfVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmFnRXZlbnQodHlwZSwge1xuICBzb3VyY2VFdmVudCxcbiAgc3ViamVjdCxcbiAgdGFyZ2V0LFxuICBpZGVudGlmaWVyLFxuICBhY3RpdmUsXG4gIHgsIHksIGR4LCBkeSxcbiAgZGlzcGF0Y2hcbn0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHR5cGU6IHt2YWx1ZTogdHlwZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBzb3VyY2VFdmVudDoge3ZhbHVlOiBzb3VyY2VFdmVudCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBzdWJqZWN0OiB7dmFsdWU6IHN1YmplY3QsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgdGFyZ2V0OiB7dmFsdWU6IHRhcmdldCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBpZGVudGlmaWVyOiB7dmFsdWU6IGlkZW50aWZpZXIsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgYWN0aXZlOiB7dmFsdWU6IGFjdGl2ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB4OiB7dmFsdWU6IHgsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgeToge3ZhbHVlOiB5LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGR4OiB7dmFsdWU6IGR4LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGR5OiB7dmFsdWU6IGR5LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIF86IHt2YWx1ZTogZGlzcGF0Y2h9XG4gIH0pO1xufVxuXG5EcmFnRXZlbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuXy5vbi5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSA9PT0gdGhpcy5fID8gdGhpcyA6IHZhbHVlO1xufTtcbiIsICJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7c2VsZWN0LCBwb2ludGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgbm9kcmFnLCB7eWVzZHJhZ30gZnJvbSBcIi4vbm9kcmFnLmpzXCI7XG5pbXBvcnQgbm9ldmVudCwge25vbnBhc3NpdmUsIG5vbnBhc3NpdmVjYXB0dXJlLCBub3Byb3BhZ2F0aW9ufSBmcm9tIFwiLi9ub2V2ZW50LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBEcmFnRXZlbnQgZnJvbSBcIi4vZXZlbnQuanNcIjtcblxuLy8gSWdub3JlIHJpZ2h0LWNsaWNrLCBzaW5jZSB0aGF0IHNob3VsZCBvcGVuIHRoZSBjb250ZXh0IG1lbnUuXG5mdW5jdGlvbiBkZWZhdWx0RmlsdGVyKGV2ZW50KSB7XG4gIHJldHVybiAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQuYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29udGFpbmVyKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3ViamVjdChldmVudCwgZCkge1xuICByZXR1cm4gZCA9PSBudWxsID8ge3g6IGV2ZW50LngsIHk6IGV2ZW50Lnl9IDogZDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFRvdWNoYWJsZSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCAoXCJvbnRvdWNoc3RhcnRcIiBpbiB0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyLFxuICAgICAgY29udGFpbmVyID0gZGVmYXVsdENvbnRhaW5lcixcbiAgICAgIHN1YmplY3QgPSBkZWZhdWx0U3ViamVjdCxcbiAgICAgIHRvdWNoYWJsZSA9IGRlZmF1bHRUb3VjaGFibGUsXG4gICAgICBnZXN0dXJlcyA9IHt9LFxuICAgICAgbGlzdGVuZXJzID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImRyYWdcIiwgXCJlbmRcIiksXG4gICAgICBhY3RpdmUgPSAwLFxuICAgICAgbW91c2Vkb3dueCxcbiAgICAgIG1vdXNlZG93bnksXG4gICAgICBtb3VzZW1vdmluZyxcbiAgICAgIHRvdWNoZW5kaW5nLFxuICAgICAgY2xpY2tEaXN0YW5jZTIgPSAwO1xuXG4gIGZ1bmN0aW9uIGRyYWcoc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5vbihcIm1vdXNlZG93bi5kcmFnXCIsIG1vdXNlZG93bmVkKVxuICAgICAgLmZpbHRlcih0b3VjaGFibGUpXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuZHJhZ1wiLCB0b3VjaHN0YXJ0ZWQpXG4gICAgICAgIC5vbihcInRvdWNobW92ZS5kcmFnXCIsIHRvdWNobW92ZWQsIG5vbnBhc3NpdmUpXG4gICAgICAgIC5vbihcInRvdWNoZW5kLmRyYWcgdG91Y2hjYW5jZWwuZHJhZ1wiLCB0b3VjaGVuZGVkKVxuICAgICAgICAuc3R5bGUoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcIi13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLCBcInJnYmEoMCwwLDAsMClcIik7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZWRvd25lZChldmVudCwgZCkge1xuICAgIGlmICh0b3VjaGVuZGluZyB8fCAhZmlsdGVyLmNhbGwodGhpcywgZXZlbnQsIGQpKSByZXR1cm47XG4gICAgdmFyIGdlc3R1cmUgPSBiZWZvcmVzdGFydCh0aGlzLCBjb250YWluZXIuY2FsbCh0aGlzLCBldmVudCwgZCksIGV2ZW50LCBkLCBcIm1vdXNlXCIpO1xuICAgIGlmICghZ2VzdHVyZSkgcmV0dXJuO1xuICAgIHNlbGVjdChldmVudC52aWV3KVxuICAgICAgLm9uKFwibW91c2Vtb3ZlLmRyYWdcIiwgbW91c2Vtb3ZlZCwgbm9ucGFzc2l2ZWNhcHR1cmUpXG4gICAgICAub24oXCJtb3VzZXVwLmRyYWdcIiwgbW91c2V1cHBlZCwgbm9ucGFzc2l2ZWNhcHR1cmUpO1xuICAgIG5vZHJhZyhldmVudC52aWV3KTtcbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBtb3VzZW1vdmluZyA9IGZhbHNlO1xuICAgIG1vdXNlZG93bnggPSBldmVudC5jbGllbnRYO1xuICAgIG1vdXNlZG93bnkgPSBldmVudC5jbGllbnRZO1xuICAgIGdlc3R1cmUoXCJzdGFydFwiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW1vdmVkKGV2ZW50KSB7XG4gICAgbm9ldmVudChldmVudCk7XG4gICAgaWYgKCFtb3VzZW1vdmluZykge1xuICAgICAgdmFyIGR4ID0gZXZlbnQuY2xpZW50WCAtIG1vdXNlZG93bngsIGR5ID0gZXZlbnQuY2xpZW50WSAtIG1vdXNlZG93bnk7XG4gICAgICBtb3VzZW1vdmluZyA9IGR4ICogZHggKyBkeSAqIGR5ID4gY2xpY2tEaXN0YW5jZTI7XG4gICAgfVxuICAgIGdlc3R1cmVzLm1vdXNlKFwiZHJhZ1wiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZXVwcGVkKGV2ZW50KSB7XG4gICAgc2VsZWN0KGV2ZW50LnZpZXcpLm9uKFwibW91c2Vtb3ZlLmRyYWcgbW91c2V1cC5kcmFnXCIsIG51bGwpO1xuICAgIHllc2RyYWcoZXZlbnQudmlldywgbW91c2Vtb3ZpbmcpO1xuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGdlc3R1cmVzLm1vdXNlKFwiZW5kXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoc3RhcnRlZChldmVudCwgZCkge1xuICAgIGlmICghZmlsdGVyLmNhbGwodGhpcywgZXZlbnQsIGQpKSByZXR1cm47XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgYyA9IGNvbnRhaW5lci5jYWxsKHRoaXMsIGV2ZW50LCBkKSxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBiZWZvcmVzdGFydCh0aGlzLCBjLCBldmVudCwgZCwgdG91Y2hlc1tpXS5pZGVudGlmaWVyLCB0b3VjaGVzW2ldKSkge1xuICAgICAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcInN0YXJ0XCIsIGV2ZW50LCB0b3VjaGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaG1vdmVkKGV2ZW50KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaGVzW2ldLmlkZW50aWZpZXJdKSB7XG4gICAgICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgICAgICBnZXN0dXJlKFwiZHJhZ1wiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hlbmRlZChldmVudCkge1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgZ2VzdHVyZTtcblxuICAgIGlmICh0b3VjaGVuZGluZykgY2xlYXJUaW1lb3V0KHRvdWNoZW5kaW5nKTtcbiAgICB0b3VjaGVuZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoZW5kaW5nID0gbnVsbDsgfSwgNTAwKTsgLy8gR2hvc3QgY2xpY2tzIGFyZSBkZWxheWVkIVxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2hlc1tpXS5pZGVudGlmaWVyXSkge1xuICAgICAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcImVuZFwiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3Jlc3RhcnQodGhhdCwgY29udGFpbmVyLCBldmVudCwgZCwgaWRlbnRpZmllciwgdG91Y2gpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBsaXN0ZW5lcnMuY29weSgpLFxuICAgICAgICBwID0gcG9pbnRlcih0b3VjaCB8fCBldmVudCwgY29udGFpbmVyKSwgZHgsIGR5LFxuICAgICAgICBzO1xuXG4gICAgaWYgKChzID0gc3ViamVjdC5jYWxsKHRoYXQsIG5ldyBEcmFnRXZlbnQoXCJiZWZvcmVzdGFydFwiLCB7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgICAgdGFyZ2V0OiBkcmFnLFxuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBhY3RpdmUsXG4gICAgICAgIHg6IHBbMF0sXG4gICAgICAgIHk6IHBbMV0sXG4gICAgICAgIGR4OiAwLFxuICAgICAgICBkeTogMCxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICAgIH0pLCBkKSkgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgZHggPSBzLnggLSBwWzBdIHx8IDA7XG4gICAgZHkgPSBzLnkgLSBwWzFdIHx8IDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gZ2VzdHVyZSh0eXBlLCBldmVudCwgdG91Y2gpIHtcbiAgICAgIHZhciBwMCA9IHAsIG47XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6IGdlc3R1cmVzW2lkZW50aWZpZXJdID0gZ2VzdHVyZSwgbiA9IGFjdGl2ZSsrOyBicmVhaztcbiAgICAgICAgY2FzZSBcImVuZFwiOiBkZWxldGUgZ2VzdHVyZXNbaWRlbnRpZmllcl0sIC0tYWN0aXZlOyAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgIGNhc2UgXCJkcmFnXCI6IHAgPSBwb2ludGVyKHRvdWNoIHx8IGV2ZW50LCBjb250YWluZXIpLCBuID0gYWN0aXZlOyBicmVhaztcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoLmNhbGwoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRoYXQsXG4gICAgICAgIG5ldyBEcmFnRXZlbnQodHlwZSwge1xuICAgICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgICAgICBzdWJqZWN0OiBzLFxuICAgICAgICAgIHRhcmdldDogZHJhZyxcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIGFjdGl2ZTogbixcbiAgICAgICAgICB4OiBwWzBdICsgZHgsXG4gICAgICAgICAgeTogcFsxXSArIGR5LFxuICAgICAgICAgIGR4OiBwWzBdIC0gcDBbMF0sXG4gICAgICAgICAgZHk6IHBbMV0gLSBwMFsxXSxcbiAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICB9KSxcbiAgICAgICAgZFxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgZHJhZy5maWx0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZmlsdGVyID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBkcmFnKSA6IGZpbHRlcjtcbiAgfTtcblxuICBkcmFnLmNvbnRhaW5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb250YWluZXIgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBkcmFnKSA6IGNvbnRhaW5lcjtcbiAgfTtcblxuICBkcmFnLnN1YmplY3QgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3ViamVjdCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIGRyYWcpIDogc3ViamVjdDtcbiAgfTtcblxuICBkcmFnLnRvdWNoYWJsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0b3VjaGFibGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGRyYWcpIDogdG91Y2hhYmxlO1xuICB9O1xuXG4gIGRyYWcub24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSBsaXN0ZW5lcnMub24uYXBwbHkobGlzdGVuZXJzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbGlzdGVuZXJzID8gZHJhZyA6IHZhbHVlO1xuICB9O1xuXG4gIGRyYWcuY2xpY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGlja0Rpc3RhbmNlMiA9IChfID0gK18pICogXywgZHJhZykgOiBNYXRoLnNxcnQoY2xpY2tEaXN0YW5jZTIpO1xuICB9O1xuXG4gIHJldHVybiBkcmFnO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnN0cnVjdG9yLCBmYWN0b3J5LCBwcm90b3R5cGUpIHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gZmFjdG9yeS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHBhcmVudCwgZGVmaW5pdGlvbikge1xuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQucHJvdG90eXBlKTtcbiAgZm9yICh2YXIga2V5IGluIGRlZmluaXRpb24pIHByb3RvdHlwZVtrZXldID0gZGVmaW5pdGlvbltrZXldO1xuICByZXR1cm4gcHJvdG90eXBlO1xufVxuIiwgImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFxuICAgIHJlSGV4ID0gL14jKFswLTlhLWZdezMsOH0pJC8sXG4gICAgcmVSZ2JJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX1cXFxcKSRgKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZUhzbFBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsYVxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCk7XG5cbnZhciBuYW1lZCA9IHtcbiAgYWxpY2VibHVlOiAweGYwZjhmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcbiAgYXF1YTogMHgwMGZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxuICBhenVyZTogMHhmMGZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkYyxcbiAgYmlzcXVlOiAweGZmZTRjNCxcbiAgYmxhY2s6IDB4MDAwMDAwLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gIGJsdWU6IDB4MDAwMGZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMixcbiAgYnJvd246IDB4YTUyYTJhLFxuICBidXJseXdvb2Q6IDB4ZGViODg3LFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxuICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgY2hvY29sYXRlOiAweGQyNjkxZSxcbiAgY29yYWw6IDB4ZmY3ZjUwLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gIGNvcm5zaWxrOiAweGZmZjhkYyxcbiAgY3JpbXNvbjogMHhkYzE0M2MsXG4gIGN5YW46IDB4MDBmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGIsXG4gIGRhcmtjeWFuOiAweDAwOGI4YixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gIGRhcmtncmF5OiAweGE5YTlhOSxcbiAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICBkYXJra2hha2k6IDB4YmRiNzZiLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDAsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxuICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgZGFya3NhbG1vbjogMHhlOTk2N2EsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcbiAgZGVlcHBpbms6IDB4ZmYxNDkzLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5LFxuICBkaW1ncmV5OiAweDY5Njk2OSxcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjIsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICBmdWNoc2lhOiAweGZmMDBmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkYyxcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxuICBncmF5OiAweDgwODA4MCxcbiAgZ3JlZW46IDB4MDA4MDAwLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmYsXG4gIGdyZXk6IDB4ODA4MDgwLFxuICBob25leWRldzogMHhmMGZmZjAsXG4gIGhvdHBpbms6IDB4ZmY2OWI0LFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICBpbmRpZ286IDB4NGIwMDgyLFxuICBpdm9yeTogMHhmZmZmZjAsXG4gIGtoYWtpOiAweGYwZTY4YyxcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcbiAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcbiAgbGlnaHRibHVlOiAweGFkZDhlNixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcbiAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgbGlnaHRncmVlbjogMHg5MGVlOTAsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcbiAgbGltZTogMHgwMGZmMDAsXG4gIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gIGxpbmVuOiAweGZhZjBlNixcbiAgbWFnZW50YTogMHhmZjAwZmYsXG4gIG1hcm9vbjogMHg4MDAwMDAsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmEsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gIG1vY2Nhc2luOiAweGZmZTRiNSxcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxuICBuYXZ5OiAweDAwMDA4MCxcbiAgb2xkbGFjZTogMHhmZGY1ZTYsXG4gIG9saXZlOiAweDgwODAwMCxcbiAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgb3JhbmdlOiAweGZmYTUwMCxcbiAgb3JhbmdlcmVkOiAweGZmNDUwMCxcbiAgb3JjaGlkOiAweGRhNzBkNixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXG4gIHBhbGVncmVlbjogMHg5OGZiOTgsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXG4gIHBlYWNocHVmZjogMHhmZmRhYjksXG4gIHBlcnU6IDB4Y2Q4NTNmLFxuICBwaW5rOiAweGZmYzBjYixcbiAgcGx1bTogMHhkZGEwZGQsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxuICBwdXJwbGU6IDB4ODAwMDgwLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgcmVkOiAweGZmMDAwMCxcbiAgcm9zeWJyb3duOiAweGJjOGY4ZixcbiAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxuICBzYWxtb246IDB4ZmE4MDcyLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgc2VhZ3JlZW46IDB4MmU4YjU3LFxuICBzZWFzaGVsbDogMHhmZmY1ZWUsXG4gIHNpZW5uYTogMHhhMDUyMmQsXG4gIHNpbHZlcjogMHhjMGMwYzAsXG4gIHNreWJsdWU6IDB4ODdjZWViLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxuICBzbm93OiAweGZmZmFmYSxcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxuICB0YW46IDB4ZDJiNDhjLFxuICB0ZWFsOiAweDAwODA4MCxcbiAgdGhpc3RsZTogMHhkOGJmZDgsXG4gIHRvbWF0bzogMHhmZjYzNDcsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDAsXG4gIHZpb2xldDogMHhlZTgyZWUsXG4gIHdoZWF0OiAweGY1ZGViMyxcbiAgd2hpdGU6IDB4ZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcbiAgeWVsbG93OiAweGZmZmYwMCxcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXG59O1xuXG5kZWZpbmUoQ29sb3IsIGNvbG9yLCB7XG4gIGNvcHkoY2hhbm5lbHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3RvciwgdGhpcywgY2hhbm5lbHMpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5kaXNwbGF5YWJsZSgpO1xuICB9LFxuICBoZXg6IGNvbG9yX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiBjb2xvcl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IGNvbG9yX2Zvcm1hdEhleDgsXG4gIGZvcm1hdEhzbDogY29sb3JfZm9ybWF0SHNsLFxuICBmb3JtYXRSZ2I6IGNvbG9yX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IGNvbG9yX2Zvcm1hdFJnYlxufSk7XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleDgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SHNsKCkge1xuICByZXR1cm4gaHNsQ29udmVydCh0aGlzKS5mb3JtYXRIc2woKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0UmdiKCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gIHZhciBtLCBsO1xuICBmb3JtYXQgPSAoZm9ybWF0ICsgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAobSA9IHJlSGV4LmV4ZWMoZm9ybWF0KSkgPyAobCA9IG1bMV0ubGVuZ3RoLCBtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBsID09PSA2ID8gcmdibihtKSAvLyAjZmYwMDAwXG4gICAgICA6IGwgPT09IDMgPyBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZiksIDEpIC8vICNmMDBcbiAgICAgIDogbCA9PT0gOCA/IHJnYmEobSA+PiAyNCAmIDB4ZmYsIG0gPj4gMTYgJiAweGZmLCBtID4+IDggJiAweGZmLCAobSAmIDB4ZmYpIC8gMHhmZikgLy8gI2ZmMDAwMDAwXG4gICAgICA6IGwgPT09IDQgPyByZ2JhKChtID4+IDEyICYgMHhmKSB8IChtID4+IDggJiAweGYwKSwgKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKCgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZikpIC8gMHhmZikgLy8gI2YwMDBcbiAgICAgIDogbnVsbCkgLy8gaW52YWxpZCBoZXhcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgUmdiKGNsYW1waSh0aGlzLnIpLCBjbGFtcGkodGhpcy5nKSwgY2xhbXBpKHRoaXMuYiksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgtMC41IDw9IHRoaXMuciAmJiB0aGlzLnIgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5nICYmIHRoaXMuZyA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmIgJiYgdGhpcy5iIDwgMjU1LjUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGhleDogcmdiX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiByZ2JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiByZ2JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0UmdiOiByZ2JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogcmdiX2Zvcm1hdFJnYlxufSkpO1xuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9JHtoZXgoKGlzTmFOKHRoaXMub3BhY2l0eSkgPyAxIDogdGhpcy5vcGFjaXR5KSAqIDI1NSl9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdFJnYigpIHtcbiAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICByZXR1cm4gYCR7YSA9PT0gMSA/IFwicmdiKFwiIDogXCJyZ2JhKFwifSR7Y2xhbXBpKHRoaXMucil9LCAke2NsYW1waSh0aGlzLmcpfSwgJHtjbGFtcGkodGhpcy5iKX0ke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xufVxuXG5mdW5jdGlvbiBjbGFtcGEob3BhY2l0eSkge1xuICByZXR1cm4gaXNOYU4ob3BhY2l0eSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb3BhY2l0eSkpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGkodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh2YWx1ZSkgfHwgMCkpO1xufVxuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBjbGFtcGkodmFsdWUpO1xuICByZXR1cm4gKHZhbHVlIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgdmFsdWUudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IEhzbChjbGFtcGgodGhpcy5oKSwgY2xhbXB0KHRoaXMucyksIGNsYW1wdCh0aGlzLmwpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBmb3JtYXRIc2woKSB7XG4gICAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICAgIHJldHVybiBgJHthID09PSAxID8gXCJoc2woXCIgOiBcImhzbGEoXCJ9JHtjbGFtcGgodGhpcy5oKX0sICR7Y2xhbXB0KHRoaXMucykgKiAxMDB9JSwgJHtjbGFtcHQodGhpcy5sKSAqIDEwMH0lJHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBjbGFtcGgodmFsdWUpIHtcbiAgdmFsdWUgPSAodmFsdWUgfHwgMCkgJSAzNjA7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyB2YWx1ZSArIDM2MCA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGFtcHQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbn1cblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBiYXNpcyh0MSwgdjAsIHYxLCB2MiwgdjMpIHtcbiAgdmFyIHQyID0gdDEgKiB0MSwgdDMgPSB0MiAqIHQxO1xuICByZXR1cm4gKCgxIC0gMyAqIHQxICsgMyAqIHQyIC0gdDMpICogdjBcbiAgICAgICsgKDQgLSA2ICogdDIgKyAzICogdDMpICogdjFcbiAgICAgICsgKDEgKyAzICogdDEgKyAzICogdDIgLSAzICogdDMpICogdjJcbiAgICAgICsgdDMgKiB2MykgLyA2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQgPD0gMCA/ICh0ID0gMCkgOiB0ID49IDEgPyAodCA9IDEsIG4gLSAxKSA6IE1hdGguZmxvb3IodCAqIG4pLFxuICAgICAgICB2MSA9IHZhbHVlc1tpXSxcbiAgICAgICAgdjIgPSB2YWx1ZXNbaSArIDFdLFxuICAgICAgICB2MCA9IGkgPiAwID8gdmFsdWVzW2kgLSAxXSA6IDIgKiB2MSAtIHYyLFxuICAgICAgICB2MyA9IGkgPCBuIC0gMSA/IHZhbHVlc1tpICsgMl0gOiAyICogdjIgLSB2MTtcbiAgICByZXR1cm4gYmFzaXMoKHQgLSBpIC8gbikgKiBuLCB2MCwgdjEsIHYyLCB2Myk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHtiYXNpc30gZnJvbSBcIi4vYmFzaXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IE1hdGguZmxvb3IoKCh0ICU9IDEpIDwgMCA/ICsrdCA6IHQpICogbiksXG4gICAgICAgIHYwID0gdmFsdWVzWyhpICsgbiAtIDEpICUgbl0sXG4gICAgICAgIHYxID0gdmFsdWVzW2kgJSBuXSxcbiAgICAgICAgdjIgPSB2YWx1ZXNbKGkgKyAxKSAlIG5dLFxuICAgICAgICB2MyA9IHZhbHVlc1soaSArIDIpICUgbl07XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsICJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gbGluZWFyKGEsIGQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYSArIHQgKiBkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBleHBvbmVudGlhbChhLCBiLCB5KSB7XG4gIHJldHVybiBhID0gTWF0aC5wb3coYSwgeSksIGIgPSBNYXRoLnBvdyhiLCB5KSAtIGEsIHkgPSAxIC8geSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhhICsgdCAqIGIsIHkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVlKGEsIGIpIHtcbiAgdmFyIGQgPSBiIC0gYTtcbiAgcmV0dXJuIGQgPyBsaW5lYXIoYSwgZCA+IDE4MCB8fCBkIDwgLTE4MCA/IGQgLSAzNjAgKiBNYXRoLnJvdW5kKGQgLyAzNjApIDogZCkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbW1hKHkpIHtcbiAgcmV0dXJuICh5ID0gK3kpID09PSAxID8gbm9nYW1tYSA6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYiAtIGEgPyBleHBvbmVudGlhbChhLCBiLCB5KSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2dhbW1hKGEsIGIpIHtcbiAgdmFyIGQgPSBiIC0gYTtcbiAgcmV0dXJuIGQgPyBsaW5lYXIoYSwgZCkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbn1cbiIsICJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXMuanNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICB9O1xufVxuIiwgImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciByZUEgPSAvWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csXG4gICAgcmVCID0gbmV3IFJlZ0V4cChyZUEuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIHplcm8oYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uZShiKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGIodCkgKyBcIlwiO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBiaSA9IHJlQS5sYXN0SW5kZXggPSByZUIubGFzdEluZGV4ID0gMCwgLy8gc2NhbiBpbmRleCBmb3IgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYW0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYVxuICAgICAgYm0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYlxuICAgICAgYnMsIC8vIHN0cmluZyBwcmVjZWRpbmcgY3VycmVudCBudW1iZXIgaW4gYiwgaWYgYW55XG4gICAgICBpID0gLTEsIC8vIGluZGV4IGluIHNcbiAgICAgIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG5cbiAgLy8gQ29lcmNlIGlucHV0cyB0byBzdHJpbmdzLlxuICBhID0gYSArIFwiXCIsIGIgPSBiICsgXCJcIjtcblxuICAvLyBJbnRlcnBvbGF0ZSBwYWlycyBvZiBudW1iZXJzIGluIGEgJiBiLlxuICB3aGlsZSAoKGFtID0gcmVBLmV4ZWMoYSkpXG4gICAgICAmJiAoYm0gPSByZUIuZXhlYyhiKSkpIHtcbiAgICBpZiAoKGJzID0gYm0uaW5kZXgpID4gYmkpIHsgLy8gYSBzdHJpbmcgcHJlY2VkZXMgdGhlIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGJzID0gYi5zbGljZShiaSwgYnMpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJzO1xuICAgIH1cbiAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHsgLy8gbnVtYmVycyBpbiBhICYgYiBtYXRjaFxuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJtO1xuICAgIH0gZWxzZSB7IC8vIGludGVycG9sYXRlIG5vbi1tYXRjaGluZyBudW1iZXJzXG4gICAgICBzWysraV0gPSBudWxsO1xuICAgICAgcS5wdXNoKHtpOiBpLCB4OiBudW1iZXIoYW0sIGJtKX0pO1xuICAgIH1cbiAgICBiaSA9IHJlQi5sYXN0SW5kZXg7XG4gIH1cblxuICAvLyBBZGQgcmVtYWlucyBvZiBiLlxuICBpZiAoYmkgPCBiLmxlbmd0aCkge1xuICAgIGJzID0gYi5zbGljZShiaSk7XG4gICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgZWxzZSBzWysraV0gPSBicztcbiAgfVxuXG4gIC8vIFNwZWNpYWwgb3B0aW1pemF0aW9uIGZvciBvbmx5IGEgc2luZ2xlIG1hdGNoLlxuICAvLyBPdGhlcndpc2UsIGludGVycG9sYXRlIGVhY2ggb2YgdGhlIG51bWJlcnMgYW5kIHJlam9pbiB0aGUgc3RyaW5nLlxuICByZXR1cm4gcy5sZW5ndGggPCAyID8gKHFbMF1cbiAgICAgID8gb25lKHFbMF0ueClcbiAgICAgIDogemVybyhiKSlcbiAgICAgIDogKGIgPSBxLmxlbmd0aCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICAgICAgfSk7XG59XG4iLCAidmFyIGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0ge1xuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICByb3RhdGU6IDAsXG4gIHNrZXdYOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNrZXdYO1xuICBpZiAoc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSBhIC89IHNjYWxlWCwgYiAvPSBzY2FsZVg7XG4gIGlmIChza2V3WCA9IGEgKiBjICsgYiAqIGQpIGMgLT0gYSAqIHNrZXdYLCBkIC09IGIgKiBza2V3WDtcbiAgaWYgKHNjYWxlWSA9IE1hdGguc3FydChjICogYyArIGQgKiBkKSkgYyAvPSBzY2FsZVksIGQgLz0gc2NhbGVZLCBza2V3WCAvPSBzY2FsZVk7XG4gIGlmIChhICogZCA8IGIgKiBjKSBhID0gLWEsIGIgPSAtYiwgc2tld1ggPSAtc2tld1gsIHNjYWxlWCA9IC1zY2FsZVg7XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZSxcbiAgICB0cmFuc2xhdGVZOiBmLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihiLCBhKSAqIGRlZ3JlZXMsXG4gICAgc2tld1g6IE1hdGguYXRhbihza2V3WCkgKiBkZWdyZWVzLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG4iLCAiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2UuanNcIjtcblxudmFyIHN2Z05vZGU7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgY29uc3QgbSA9IG5ldyAodHlwZW9mIERPTU1hdHJpeCA9PT0gXCJmdW5jdGlvblwiID8gRE9NTWF0cml4IDogV2ViS2l0Q1NTTWF0cml4KSh2YWx1ZSArIFwiXCIpO1xuICByZXR1cm4gbS5pc0lkZW50aXR5ID8gaWRlbnRpdHkgOiBkZWNvbXBvc2UobS5hLCBtLmIsIG0uYywgbS5kLCBtLmUsIG0uZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN2Zyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIXN2Z05vZGUpIHN2Z05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gIHN2Z05vZGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHZhbHVlKTtcbiAgaWYgKCEodmFsdWUgPSBzdmdOb2RlLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHZhbHVlID0gdmFsdWUubWF0cml4O1xuICByZXR1cm4gZGVjb21wb3NlKHZhbHVlLmEsIHZhbHVlLmIsIHZhbHVlLmMsIHZhbHVlLmQsIHZhbHVlLmUsIHZhbHVlLmYpO1xufVxuIiwgImltcG9ydCBudW1iZXIgZnJvbSBcIi4uL251bWJlci5qc1wiO1xuaW1wb3J0IHtwYXJzZUNzcywgcGFyc2VTdmd9IGZyb20gXCIuL3BhcnNlLmpzXCI7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlLCBweENvbW1hLCBweFBhcmVuLCBkZWdQYXJlbikge1xuXG4gIGZ1bmN0aW9uIHBvcChzKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID8gcy5wb3AoKSArIFwiIFwiIDogXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChcInRyYW5zbGF0ZShcIiwgbnVsbCwgcHhDb21tYSwgbnVsbCwgcHhQYXJlbik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiIHx8IHliKSB7XG4gICAgICBzLnB1c2goXCJ0cmFuc2xhdGUoXCIgKyB4YiArIHB4Q29tbWEgKyB5YiArIHB4UGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZShhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIGlmIChhIC0gYiA+IDE4MCkgYiArPSAzNjA7IGVsc2UgaWYgKGIgLSBhID4gMTgwKSBhICs9IDM2MDsgLy8gc2hvcnRlc3QgcGF0aFxuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBza2V3WChhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIsIG51bGwsIFwiLFwiLCBudWxsLCBcIilcIik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiICE9PSAxIHx8IHliICE9PSAxKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiArIHhiICsgXCIsXCIgKyB5YiArIFwiKVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG4gICAgYSA9IHBhcnNlKGEpLCBiID0gcGFyc2UoYik7XG4gICAgdHJhbnNsYXRlKGEudHJhbnNsYXRlWCwgYS50cmFuc2xhdGVZLCBiLnRyYW5zbGF0ZVgsIGIudHJhbnNsYXRlWSwgcywgcSk7XG4gICAgcm90YXRlKGEucm90YXRlLCBiLnJvdGF0ZSwgcywgcSk7XG4gICAgc2tld1goYS5za2V3WCwgYi5za2V3WCwgcywgcSk7XG4gICAgc2NhbGUoYS5zY2FsZVgsIGEuc2NhbGVZLCBiLnNjYWxlWCwgYi5zY2FsZVksIHMsIHEpO1xuICAgIGEgPSBiID0gbnVsbDsgLy8gZ2NcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHEubGVuZ3RoLCBvO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlQ3NzLCBcInB4LCBcIiwgXCJweClcIiwgXCJkZWcpXCIpO1xuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlU3ZnLCBcIiwgXCIsIFwiKVwiLCBcIilcIik7XG4iLCAidmFyIGVwc2lsb24yID0gMWUtMTI7XG5cbmZ1bmN0aW9uIGNvc2goeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoeCkpICsgMSAvIHgpIC8gMjtcbn1cblxuZnVuY3Rpb24gc2luaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgLSAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiB0YW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKDIgKiB4KSkgLSAxKSAvICh4ICsgMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiB6b29tUmhvKHJobywgcmhvMiwgcmhvNCkge1xuXG4gIC8vIHAwID0gW3V4MCwgdXkwLCB3MF1cbiAgLy8gcDEgPSBbdXgxLCB1eTEsIHcxXVxuICBmdW5jdGlvbiB6b29tKHAwLCBwMSkge1xuICAgIHZhciB1eDAgPSBwMFswXSwgdXkwID0gcDBbMV0sIHcwID0gcDBbMl0sXG4gICAgICAgIHV4MSA9IHAxWzBdLCB1eTEgPSBwMVsxXSwgdzEgPSBwMVsyXSxcbiAgICAgICAgZHggPSB1eDEgLSB1eDAsXG4gICAgICAgIGR5ID0gdXkxIC0gdXkwLFxuICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgICBpLFxuICAgICAgICBTO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciB1MCBcdTIyNDUgdTEuXG4gICAgaWYgKGQyIDwgZXBzaWxvbjIpIHtcbiAgICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIHJobztcbiAgICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdXgwICsgdCAqIGR4LFxuICAgICAgICAgIHV5MCArIHQgKiBkeSxcbiAgICAgICAgICB3MCAqIE1hdGguZXhwKHJobyAqIHQgKiBTKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYWwgY2FzZS5cbiAgICBlbHNlIHtcbiAgICAgIHZhciBkMSA9IE1hdGguc3FydChkMiksXG4gICAgICAgICAgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG80ICogZDIpIC8gKDIgKiB3MCAqIHJobzIgKiBkMSksXG4gICAgICAgICAgYjEgPSAodzEgKiB3MSAtIHcwICogdzAgLSByaG80ICogZDIpIC8gKDIgKiB3MSAqIHJobzIgKiBkMSksXG4gICAgICAgICAgcjAgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjAgKiBiMCArIDEpIC0gYjApLFxuICAgICAgICAgIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICAgIFMgPSAocjEgLSByMCkgLyByaG87XG4gICAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcyA9IHQgKiBTLFxuICAgICAgICAgICAgY29zaHIwID0gY29zaChyMCksXG4gICAgICAgICAgICB1ID0gdzAgLyAocmhvMiAqIGQxKSAqIChjb3NocjAgKiB0YW5oKHJobyAqIHMgKyByMCkgLSBzaW5oKHIwKSk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdXgwICsgdSAqIGR4LFxuICAgICAgICAgIHV5MCArIHUgKiBkeSxcbiAgICAgICAgICB3MCAqIGNvc2hyMCAvIGNvc2gocmhvICogcyArIHIwKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGkuZHVyYXRpb24gPSBTICogMTAwMCAqIHJobyAvIE1hdGguU1FSVDI7XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHpvb20ucmhvID0gZnVuY3Rpb24oXykge1xuICAgIHZhciBfMSA9IE1hdGgubWF4KDFlLTMsICtfKSwgXzIgPSBfMSAqIF8xLCBfNCA9IF8yICogXzI7XG4gICAgcmV0dXJuIHpvb21SaG8oXzEsIF8yLCBfNCk7XG4gIH07XG5cbiAgcmV0dXJuIHpvb207XG59KShNYXRoLlNRUlQyLCAyLCA0KTtcbiIsICJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7dGltZXIsIHRpbWVvdXR9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZW1wdHlPbiA9IGRpc3BhdGNoKFwic3RhcnRcIiwgXCJlbmRcIiwgXCJjYW5jZWxcIiwgXCJpbnRlcnJ1cHRcIik7XG52YXIgZW1wdHlUd2VlbiA9IFtdO1xuXG5leHBvcnQgdmFyIENSRUFURUQgPSAwO1xuZXhwb3J0IHZhciBTQ0hFRFVMRUQgPSAxO1xuZXhwb3J0IHZhciBTVEFSVElORyA9IDI7XG5leHBvcnQgdmFyIFNUQVJURUQgPSAzO1xuZXhwb3J0IHZhciBSVU5OSU5HID0gNDtcbmV4cG9ydCB2YXIgRU5ESU5HID0gNTtcbmV4cG9ydCB2YXIgRU5ERUQgPSA2O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lLCBpZCwgaW5kZXgsIGdyb3VwLCB0aW1pbmcpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlcykgbm9kZS5fX3RyYW5zaXRpb24gPSB7fTtcbiAgZWxzZSBpZiAoaWQgaW4gc2NoZWR1bGVzKSByZXR1cm47XG4gIGNyZWF0ZShub2RlLCBpZCwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaW5kZXg6IGluZGV4LCAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgZ3JvdXA6IGdyb3VwLCAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgb246IGVtcHR5T24sXG4gICAgdHdlZW46IGVtcHR5VHdlZW4sXG4gICAgdGltZTogdGltaW5nLnRpbWUsXG4gICAgZGVsYXk6IHRpbWluZy5kZWxheSxcbiAgICBkdXJhdGlvbjogdGltaW5nLmR1cmF0aW9uLFxuICAgIGVhc2U6IHRpbWluZy5lYXNlLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHN0YXRlOiBDUkVBVEVEXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBnZXQobm9kZSwgaWQpO1xuICBpZiAoc2NoZWR1bGUuc3RhdGUgPiBDUkVBVEVEKSB0aHJvdyBuZXcgRXJyb3IoXCJ0b28gbGF0ZTsgYWxyZWFkeSBzY2hlZHVsZWRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBnZXQobm9kZSwgaWQpO1xuICBpZiAoc2NoZWR1bGUuc3RhdGUgPiBTVEFSVEVEKSB0aHJvdyBuZXcgRXJyb3IoXCJ0b28gbGF0ZTsgYWxyZWFkeSBydW5uaW5nXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGUgfHwgIShzY2hlZHVsZSA9IHNjaGVkdWxlW2lkXSkpIHRocm93IG5ldyBFcnJvcihcInRyYW5zaXRpb24gbm90IGZvdW5kXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShub2RlLCBpZCwgc2VsZikge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICB0d2VlbjtcblxuICAvLyBJbml0aWFsaXplIHRoZSBzZWxmIHRpbWVyIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY3JlYXRlZC5cbiAgLy8gTm90ZSB0aGUgYWN0dWFsIGRlbGF5IGlzIG5vdCBrbm93biB1bnRpbCB0aGUgZmlyc3QgY2FsbGJhY2shXG4gIHNjaGVkdWxlc1tpZF0gPSBzZWxmO1xuICBzZWxmLnRpbWVyID0gdGltZXIoc2NoZWR1bGUsIDAsIHNlbGYudGltZSk7XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUoZWxhcHNlZCkge1xuICAgIHNlbGYuc3RhdGUgPSBTQ0hFRFVMRUQ7XG4gICAgc2VsZi50aW1lci5yZXN0YXJ0KHN0YXJ0LCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuXG4gICAgLy8gSWYgdGhlIGVsYXBzZWQgZGVsYXkgaXMgbGVzcyB0aGFuIG91ciBmaXJzdCBzbGVlcCwgc3RhcnQgaW1tZWRpYXRlbHkuXG4gICAgaWYgKHNlbGYuZGVsYXkgPD0gZWxhcHNlZCkgc3RhcnQoZWxhcHNlZCAtIHNlbGYuZGVsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoZWxhcHNlZCkge1xuICAgIHZhciBpLCBqLCBuLCBvO1xuXG4gICAgLy8gSWYgdGhlIHN0YXRlIGlzIG5vdCBTQ0hFRFVMRUQsIHRoZW4gd2UgcHJldmlvdXNseSBlcnJvcmVkIG9uIHN0YXJ0LlxuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTQ0hFRFVMRUQpIHJldHVybiBzdG9wKCk7XG5cbiAgICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgICBvID0gc2NoZWR1bGVzW2ldO1xuICAgICAgaWYgKG8ubmFtZSAhPT0gc2VsZi5uYW1lKSBjb250aW51ZTtcblxuICAgICAgLy8gV2hpbGUgdGhpcyBlbGVtZW50IGFscmVhZHkgaGFzIGEgc3RhcnRpbmcgdHJhbnNpdGlvbiBkdXJpbmcgdGhpcyBmcmFtZSxcbiAgICAgIC8vIGRlZmVyIHN0YXJ0aW5nIGFuIGludGVycnVwdGluZyB0cmFuc2l0aW9uIHVudGlsIHRoYXQgdHJhbnNpdGlvbiBoYXMgYVxuICAgICAgLy8gY2hhbmNlIHRvIHRpY2sgKGFuZCBwb3NzaWJseSBlbmQpOyBzZWUgZDMvZDMtdHJhbnNpdGlvbiM1NCFcbiAgICAgIGlmIChvLnN0YXRlID09PSBTVEFSVEVEKSByZXR1cm4gdGltZW91dChzdGFydCk7XG5cbiAgICAgIC8vIEludGVycnVwdCB0aGUgYWN0aXZlIHRyYW5zaXRpb24sIGlmIGFueS5cbiAgICAgIGlmIChvLnN0YXRlID09PSBSVU5OSU5HKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImludGVycnVwdFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FuY2VsIGFueSBwcmUtZW1wdGVkIHRyYW5zaXRpb25zLlxuICAgICAgZWxzZSBpZiAoK2kgPCBpZCkge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVmZXIgdGhlIGZpcnN0IHRpY2sgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGZyYW1lOyBzZWUgZDMvZDMjMTU3Ni5cbiAgICAvLyBOb3RlIHRoZSB0cmFuc2l0aW9uIG1heSBiZSBjYW5jZWxlZCBhZnRlciBzdGFydCBhbmQgYmVmb3JlIHRoZSBmaXJzdCB0aWNrIVxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIHNjaGVkdWxlZCBiZWZvcmUgdGhlIHN0YXJ0IGV2ZW50OyBzZWUgZDMvZDMtdHJhbnNpdGlvbiMxNiFcbiAgICAvLyBBc3N1bWluZyB0aGlzIGlzIHN1Y2Nlc3NmdWwsIHN1YnNlcXVlbnQgY2FsbGJhY2tzIGdvIHN0cmFpZ2h0IHRvIHRpY2suXG4gICAgdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLnN0YXRlID09PSBTVEFSVEVEKSB7XG4gICAgICAgIHNlbGYuc3RhdGUgPSBSVU5OSU5HO1xuICAgICAgICBzZWxmLnRpbWVyLnJlc3RhcnQodGljaywgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcbiAgICAgICAgdGljayhlbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERpc3BhdGNoIHRoZSBzdGFydCBldmVudC5cbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSB0aGUgdHdlZW4gYXJlIGluaXRpYWxpemVkLlxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVElORztcbiAgICBzZWxmLm9uLmNhbGwoXCJzdGFydFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU1RBUlRJTkcpIHJldHVybjsgLy8gaW50ZXJydXB0ZWRcbiAgICBzZWxmLnN0YXRlID0gU1RBUlRFRDtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHR3ZWVuLCBkZWxldGluZyBudWxsIHR3ZWVuLlxuICAgIHR3ZWVuID0gbmV3IEFycmF5KG4gPSBzZWxmLnR3ZWVuLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgaiA9IC0xOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobyA9IHNlbGYudHdlZW5baV0udmFsdWUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKSkge1xuICAgICAgICB0d2VlblsrK2pdID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgdHdlZW4ubGVuZ3RoID0gaiArIDE7XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICB2YXIgdCA9IGVsYXBzZWQgPCBzZWxmLmR1cmF0aW9uID8gc2VsZi5lYXNlLmNhbGwobnVsbCwgZWxhcHNlZCAvIHNlbGYuZHVyYXRpb24pIDogKHNlbGYudGltZXIucmVzdGFydChzdG9wKSwgc2VsZi5zdGF0ZSA9IEVORElORywgMSksXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbiA9IHR3ZWVuLmxlbmd0aDtcblxuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICB0d2VlbltpXS5jYWxsKG5vZGUsIHQpO1xuICAgIH1cblxuICAgIC8vIERpc3BhdGNoIHRoZSBlbmQgZXZlbnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgPT09IEVORElORykge1xuICAgICAgc2VsZi5vbi5jYWxsKFwiZW5kXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgc2VsZi5zdGF0ZSA9IEVOREVEO1xuICAgIHNlbGYudGltZXIuc3RvcCgpO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaWRdO1xuICAgIGZvciAodmFyIGkgaW4gc2NoZWR1bGVzKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG4gIH1cbn1cbiIsICJpbXBvcnQge1NUQVJUSU5HLCBFTkRJTkcsIEVOREVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbXB0eSA9IHRydWUsXG4gICAgICBpO1xuXG4gIGlmICghc2NoZWR1bGVzKSByZXR1cm47XG5cbiAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcblxuICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkubmFtZSAhPT0gbmFtZSkgeyBlbXB0eSA9IGZhbHNlOyBjb250aW51ZTsgfVxuICAgIGFjdGl2ZSA9IHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcgJiYgc2NoZWR1bGUuc3RhdGUgPCBFTkRJTkc7XG4gICAgc2NoZWR1bGUuc3RhdGUgPSBFTkRFRDtcbiAgICBzY2hlZHVsZS50aW1lci5zdG9wKCk7XG4gICAgc2NoZWR1bGUub24uY2FsbChhY3RpdmUgPyBcImludGVycnVwdFwiIDogXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2NoZWR1bGUuaW5kZXgsIHNjaGVkdWxlLmdyb3VwKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICB9XG5cbiAgaWYgKGVtcHR5KSBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG59XG4iLCAiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIHR3ZWVuUmVtb3ZlKGlkLCBuYW1lKSB7XG4gIHZhciB0d2VlbjAsIHR3ZWVuMTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZVx1MjAxOXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSB0d2VlbjAgPSB0d2VlbjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjEgPSB0d2VlbjEuc2xpY2UoKTtcbiAgICAgICAgICB0d2VlbjEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHR3ZWVuRnVuY3Rpb24oaWQsIG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0d2VlbjAsIHR3ZWVuMTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gKHR3ZWVuMCA9IHR3ZWVuKS5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgdCA9IHtuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWV9LCBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xW2ldID0gdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGkgPT09IG4pIHR3ZWVuMS5wdXNoKHQpO1xuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICBuYW1lICs9IFwiXCI7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0KHRoaXMubm9kZSgpLCBpZCkudHdlZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2Vlbi5sZW5ndGgsIHQ7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgodCA9IHR3ZWVuW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0LnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGwgPyB0d2VlblJlbW92ZSA6IHR3ZWVuRnVuY3Rpb24pKGlkLCBuYW1lLCB2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHdlZW5WYWx1ZSh0cmFuc2l0aW9uLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWQgPSB0cmFuc2l0aW9uLl9pZDtcblxuICB0cmFuc2l0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKTtcbiAgICAoc2NoZWR1bGUudmFsdWUgfHwgKHNjaGVkdWxlLnZhbHVlID0ge30pKVtuYW1lXSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIGdldChub2RlLCBpZCkudmFsdWVbbmFtZV07XG4gIH07XG59XG4iLCAiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyLCBpbnRlcnBvbGF0ZVJnYiwgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBjO1xuICByZXR1cm4gKHR5cGVvZiBiID09PSBcIm51bWJlclwiID8gaW50ZXJwb2xhdGVOdW1iZXJcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gaW50ZXJwb2xhdGVSZ2JcbiAgICAgIDogKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIGludGVycG9sYXRlUmdiKVxuICAgICAgOiBpbnRlcnBvbGF0ZVN0cmluZykoYSwgYik7XG59XG4iLCAiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpLCBzdHJpbmcxO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSksIGkgPSBmdWxsbmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB0aGlzLmF0dHJUd2VlbihuYW1lLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbikoZnVsbG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJhdHRyLlwiICsgbmFtZSwgdmFsdWUpKVxuICAgICAgOiB2YWx1ZSA9PSBudWxsID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkoZnVsbG5hbWUpXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KShmdWxsbmFtZSwgaSwgdmFsdWUpKTtcbn1cbiIsICJpbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGUobmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIGkuY2FsbCh0aGlzLCB0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIGkuY2FsbCh0aGlzLCB0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlKG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJhdHRyLlwiICsgbmFtZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgKGZ1bGxuYW1lLmxvY2FsID8gYXR0clR3ZWVuTlMgOiBhdHRyVHdlZW4pKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7Z2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxheUZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXlDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkZWxheUZ1bmN0aW9uXG4gICAgICAgICAgOiBkZWxheUNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kZWxheTtcbn1cbiIsICJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkdXJhdGlvbkZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkdXJhdGlvbkNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZHVyYXRpb25GdW5jdGlvblxuICAgICAgICAgIDogZHVyYXRpb25Db25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZHVyYXRpb247XG59XG4iLCAiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmVhc2U7XG59XG4iLCAiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VWYXJ5aW5nKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0eXBlb2YgdiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLmVhY2goZWFzZVZhcnlpbmcodGhpcy5faWQsIHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHttYXRjaGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCAiaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gIGlmICh0cmFuc2l0aW9uLl9pZCAhPT0gdGhpcy5faWQpIHRocm93IG5ldyBFcnJvcjtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gdHJhbnNpdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCAiaW1wb3J0IHtnZXQsIHNldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gc3RhcnQobmFtZSkge1xuICByZXR1cm4gKG5hbWUgKyBcIlwiKS50cmltKCkuc3BsaXQoL158XFxzKy8pLmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuICF0IHx8IHQgPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBvbjAsIG9uMSwgc2l0ID0gc3RhcnQobmFtZSkgPyBpbml0IDogc2V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2l0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCkgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihuYW1lLCBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyXG4gICAgICA/IGdldCh0aGlzLm5vZGUoKSwgaWQpLm9uLm9uKG5hbWUpXG4gICAgICA6IHRoaXMuZWFjaChvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikpO1xufVxuIiwgImZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgraSAhPT0gaWQpIHJldHVybjtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgcmVtb3ZlRnVuY3Rpb24odGhpcy5faWQpKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdG9yfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgICBzY2hlZHVsZShzdWJncm91cFtpXSwgbmFtZSwgaWQsIGksIHN1Ymdyb3VwLCBnZXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxudmFyIFNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9ncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGUuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVOdWxsKG5hbWUsIGludGVycG9sYXRlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgc3RyaW5nMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHN0cmluZzEwID0gc3RyaW5nMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgdmFsdWUxID0gdmFsdWUodGhpcyksXG4gICAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgc3RyaW5nMSA9IHZhbHVlMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZU1heWJlUmVtb3ZlKGlkLCBuYW1lKSB7XG4gIHZhciBvbjAsIG9uMSwgbGlzdGVuZXIwLCBrZXkgPSBcInN0eWxlLlwiICsgbmFtZSwgZXZlbnQgPSBcImVuZC5cIiArIGtleSwgcmVtb3ZlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbixcbiAgICAgICAgbGlzdGVuZXIgPSBzY2hlZHVsZS52YWx1ZVtrZXldID09IG51bGwgPyByZW1vdmUgfHwgKHJlbW92ZSA9IHN0eWxlUmVtb3ZlKG5hbWUpKSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCB8fCBsaXN0ZW5lcjAgIT09IGxpc3RlbmVyKSAob24xID0gKG9uMCA9IG9uKS5jb3B5KCkpLm9uKGV2ZW50LCBsaXN0ZW5lcjAgPSBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBpID0gKG5hbWUgKz0gXCJcIikgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlTnVsbChuYW1lLCBpKSlcbiAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIHN0eWxlUmVtb3ZlKG5hbWUpKVxuICAgIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUZ1bmN0aW9uKG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJzdHlsZS5cIiArIG5hbWUsIHZhbHVlKSkpXG4gICAgICAuZWFjaChzdHlsZU1heWJlUmVtb3ZlKHRoaXMuX2lkLCBuYW1lKSlcbiAgICA6IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlQ29uc3RhbnQobmFtZSwgaSwgdmFsdWUpLCBwcmlvcml0eSlcbiAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIG51bGwpO1xufVxuIiwgImZ1bmN0aW9uIHN0eWxlSW50ZXJwb2xhdGUobmFtZSwgaSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkuY2FsbCh0aGlzLCB0KSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgdCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQgPSAoaTAgPSBpKSAmJiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsICJpbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWUxID09IG51bGwgPyBcIlwiIDogdmFsdWUxO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy50d2VlbihcInRleHRcIiwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gdGV4dEZ1bmN0aW9uKHR3ZWVuVmFsdWUodGhpcywgXCJ0ZXh0XCIsIHZhbHVlKSlcbiAgICAgIDogdGV4dENvbnN0YW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiKSk7XG59XG4iLCAiZnVuY3Rpb24gdGV4dEludGVycG9sYXRlKGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gaS5jYWxsKHRoaXMsIHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0VHdlZW4odmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiB0ZXh0SW50ZXJwb2xhdGUoaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBrZXkgPSBcInRleHRcIjtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHRleHRUd2Vlbih2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwgImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG9uMCwgb24xLCB0aGF0ID0gdGhpcywgaWQgPSB0aGF0Ll9pZCwgc2l6ZSA9IHRoYXQuc2l6ZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGNhbmNlbCA9IHt2YWx1ZTogcmVqZWN0fSxcbiAgICAgICAgZW5kID0ge3ZhbHVlOiBmdW5jdGlvbigpIHsgaWYgKC0tc2l6ZSA9PT0gMCkgcmVzb2x2ZSgpOyB9fTtcblxuICAgIHRoYXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdlXHUyMDE5cmUgZG9uZSFcbiAgICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICAgIGlmIChvbiAhPT0gb24wKSB7XG4gICAgICAgIG9uMSA9IChvbjAgPSBvbikuY29weSgpO1xuICAgICAgICBvbjEuXy5jYW5jZWwucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5pbnRlcnJ1cHQucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5lbmQucHVzaChlbmQpO1xuICAgICAgfVxuXG4gICAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgICB9KTtcblxuICAgIC8vIFRoZSBzZWxlY3Rpb24gd2FzIGVtcHR5LCByZXNvbHZlIGVuZCBpbW1lZGlhdGVseVxuICAgIGlmIChzaXplID09PSAwKSByZXNvbHZlKCk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHJUd2VlbiBmcm9tIFwiLi9hdHRyVHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2RlbGF5IGZyb20gXCIuL2RlbGF5LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZSBmcm9tIFwiLi9lYXNlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlVmFyeWluZyBmcm9tIFwiLi9lYXNlVmFyeWluZy5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX29uIGZyb20gXCIuL29uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3Rpb24gZnJvbSBcIi4vc2VsZWN0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGVUd2VlbiBmcm9tIFwiLi9zdHlsZVR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RleHRUd2VlbiBmcm9tIFwiLi90ZXh0VHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHdlZW4gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2VuZCBmcm9tIFwiLi9lbmQuanNcIjtcblxudmFyIGlkID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zaXRpb24oZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCkge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xuICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgdGhpcy5faWQgPSBpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbihuYW1lKSB7XG4gIHJldHVybiBzZWxlY3Rpb24oKS50cmFuc2l0aW9uKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SWQoKSB7XG4gIHJldHVybiArK2lkO1xufVxuXG52YXIgc2VsZWN0aW9uX3Byb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGU7XG5cblRyYW5zaXRpb24ucHJvdG90eXBlID0gdHJhbnNpdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2l0aW9uLFxuICBzZWxlY3Q6IHRyYW5zaXRpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHRyYW5zaXRpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3Byb3RvdHlwZS5zZWxlY3RDaGlsZCxcbiAgc2VsZWN0Q2hpbGRyZW46IHNlbGVjdGlvbl9wcm90b3R5cGUuc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogdHJhbnNpdGlvbl9maWx0ZXIsXG4gIG1lcmdlOiB0cmFuc2l0aW9uX21lcmdlLFxuICBzZWxlY3Rpb246IHRyYW5zaXRpb25fc2VsZWN0aW9uLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uX3RyYW5zaXRpb24sXG4gIGNhbGw6IHNlbGVjdGlvbl9wcm90b3R5cGUuY2FsbCxcbiAgbm9kZXM6IHNlbGVjdGlvbl9wcm90b3R5cGUubm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9wcm90b3R5cGUubm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5zaXplLFxuICBlbXB0eTogc2VsZWN0aW9uX3Byb3RvdHlwZS5lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX3Byb3RvdHlwZS5lYWNoLFxuICBvbjogdHJhbnNpdGlvbl9vbixcbiAgYXR0cjogdHJhbnNpdGlvbl9hdHRyLFxuICBhdHRyVHdlZW46IHRyYW5zaXRpb25fYXR0clR3ZWVuLFxuICBzdHlsZTogdHJhbnNpdGlvbl9zdHlsZSxcbiAgc3R5bGVUd2VlbjogdHJhbnNpdGlvbl9zdHlsZVR3ZWVuLFxuICB0ZXh0OiB0cmFuc2l0aW9uX3RleHQsXG4gIHRleHRUd2VlbjogdHJhbnNpdGlvbl90ZXh0VHdlZW4sXG4gIHJlbW92ZTogdHJhbnNpdGlvbl9yZW1vdmUsXG4gIHR3ZWVuOiB0cmFuc2l0aW9uX3R3ZWVuLFxuICBkZWxheTogdHJhbnNpdGlvbl9kZWxheSxcbiAgZHVyYXRpb246IHRyYW5zaXRpb25fZHVyYXRpb24sXG4gIGVhc2U6IHRyYW5zaXRpb25fZWFzZSxcbiAgZWFzZVZhcnlpbmc6IHRyYW5zaXRpb25fZWFzZVZhcnlpbmcsXG4gIGVuZDogdHJhbnNpdGlvbl9lbmQsXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiBzZWxlY3Rpb25fcHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl1cbn07XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG4iLCAiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYW5zaXRpb24gJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBzZWxlY3Rpb25faW50ZXJydXB0IGZyb20gXCIuL2ludGVycnVwdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcblxuc2VsZWN0aW9uLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBzZWxlY3Rpb25faW50ZXJydXB0O1xuc2VsZWN0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uID0gc2VsZWN0aW9uX3RyYW5zaXRpb247XG4iLCAiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFpvb21FdmVudCh0eXBlLCB7XG4gIHNvdXJjZUV2ZW50LFxuICB0YXJnZXQsXG4gIHRyYW5zZm9ybSxcbiAgZGlzcGF0Y2hcbn0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHR5cGU6IHt2YWx1ZTogdHlwZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBzb3VyY2VFdmVudDoge3ZhbHVlOiBzb3VyY2VFdmVudCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB0YXJnZXQ6IHt2YWx1ZTogdGFyZ2V0LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHRyYW5zZm9ybToge3ZhbHVlOiB0cmFuc2Zvcm0sIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgXzoge3ZhbHVlOiBkaXNwYXRjaH1cbiAgfSk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFRyYW5zZm9ybShrLCB4LCB5KSB7XG4gIHRoaXMuayA9IGs7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2Zvcm0sXG4gIHNjYWxlOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIGsgPT09IDEgPyB0aGlzIDogbmV3IFRyYW5zZm9ybSh0aGlzLmsgKiBrLCB0aGlzLngsIHRoaXMueSk7XG4gIH0sXG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24oeCwgeSkge1xuICAgIHJldHVybiB4ID09PSAwICYgeSA9PT0gMCA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuaywgdGhpcy54ICsgdGhpcy5rICogeCwgdGhpcy55ICsgdGhpcy5rICogeSk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBbcG9pbnRbMF0gKiB0aGlzLmsgKyB0aGlzLngsIHBvaW50WzFdICogdGhpcy5rICsgdGhpcy55XTtcbiAgfSxcbiAgYXBwbHlYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHggKiB0aGlzLmsgKyB0aGlzLng7XG4gIH0sXG4gIGFwcGx5WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiB5ICogdGhpcy5rICsgdGhpcy55O1xuICB9LFxuICBpbnZlcnQ6IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIFsobG9jYXRpb25bMF0gLSB0aGlzLngpIC8gdGhpcy5rLCAobG9jYXRpb25bMV0gLSB0aGlzLnkpIC8gdGhpcy5rXTtcbiAgfSxcbiAgaW52ZXJ0WDogZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiAoeCAtIHRoaXMueCkgLyB0aGlzLms7XG4gIH0sXG4gIGludmVydFk6IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gKHkgLSB0aGlzLnkpIC8gdGhpcy5rO1xuICB9LFxuICByZXNjYWxlWDogZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4LmNvcHkoKS5kb21haW4oeC5yYW5nZSgpLm1hcCh0aGlzLmludmVydFgsIHRoaXMpLm1hcCh4LmludmVydCwgeCkpO1xuICB9LFxuICByZXNjYWxlWTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiB5LmNvcHkoKS5kb21haW4oeS5yYW5nZSgpLm1hcCh0aGlzLmludmVydFksIHRoaXMpLm1hcCh5LmludmVydCwgeSkpO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgdGhpcy54ICsgXCIsXCIgKyB0aGlzLnkgKyBcIikgc2NhbGUoXCIgKyB0aGlzLmsgKyBcIilcIjtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IG5ldyBUcmFuc2Zvcm0oMSwgMCwgMCk7XG5cbnRyYW5zZm9ybS5wcm90b3R5cGUgPSBUcmFuc2Zvcm0ucHJvdG90eXBlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm0obm9kZSkge1xuICB3aGlsZSAoIW5vZGUuX196b29tKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuIGlkZW50aXR5O1xuICByZXR1cm4gbm9kZS5fX3pvb207XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5vcHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuIiwgImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHtkcmFnRGlzYWJsZSwgZHJhZ0VuYWJsZX0gZnJvbSBcImQzLWRyYWdcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVab29tfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c2VsZWN0LCBwb2ludGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge2ludGVycnVwdH0gZnJvbSBcImQzLXRyYW5zaXRpb25cIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IFpvb21FdmVudCBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHtUcmFuc2Zvcm0sIGlkZW50aXR5fSBmcm9tIFwiLi90cmFuc2Zvcm0uanNcIjtcbmltcG9ydCBub2V2ZW50LCB7bm9wcm9wYWdhdGlvbn0gZnJvbSBcIi4vbm9ldmVudC5qc1wiO1xuXG4vLyBJZ25vcmUgcmlnaHQtY2xpY2ssIHNpbmNlIHRoYXQgc2hvdWxkIG9wZW4gdGhlIGNvbnRleHQgbWVudS5cbi8vIGV4Y2VwdCBmb3IgcGluY2gtdG8tem9vbSwgd2hpY2ggaXMgc2VudCBhcyBhIHdoZWVsK2N0cmxLZXkgZXZlbnRcbmZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXIoZXZlbnQpIHtcbiAgcmV0dXJuICghZXZlbnQuY3RybEtleSB8fCBldmVudC50eXBlID09PSAnd2hlZWwnKSAmJiAhZXZlbnQuYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0RXh0ZW50KCkge1xuICB2YXIgZSA9IHRoaXM7XG4gIGlmIChlIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgIGUgPSBlLm93bmVyU1ZHRWxlbWVudCB8fCBlO1xuICAgIGlmIChlLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikpIHtcbiAgICAgIGUgPSBlLnZpZXdCb3guYmFzZVZhbDtcbiAgICAgIHJldHVybiBbW2UueCwgZS55XSwgW2UueCArIGUud2lkdGgsIGUueSArIGUuaGVpZ2h0XV07XG4gICAgfVxuICAgIHJldHVybiBbWzAsIDBdLCBbZS53aWR0aC5iYXNlVmFsLnZhbHVlLCBlLmhlaWdodC5iYXNlVmFsLnZhbHVlXV07XG4gIH1cbiAgcmV0dXJuIFtbMCwgMF0sIFtlLmNsaWVudFdpZHRoLCBlLmNsaWVudEhlaWdodF1dO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VHJhbnNmb3JtKCkge1xuICByZXR1cm4gdGhpcy5fX3pvb20gfHwgaWRlbnRpdHk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRXaGVlbERlbHRhKGV2ZW50KSB7XG4gIHJldHVybiAtZXZlbnQuZGVsdGFZICogKGV2ZW50LmRlbHRhTW9kZSA9PT0gMSA/IDAuMDUgOiBldmVudC5kZWx0YU1vZGUgPyAxIDogMC4wMDIpICogKGV2ZW50LmN0cmxLZXkgPyAxMCA6IDEpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VG91Y2hhYmxlKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IChcIm9udG91Y2hzdGFydFwiIGluIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29uc3RyYWluKHRyYW5zZm9ybSwgZXh0ZW50LCB0cmFuc2xhdGVFeHRlbnQpIHtcbiAgdmFyIGR4MCA9IHRyYW5zZm9ybS5pbnZlcnRYKGV4dGVudFswXVswXSkgLSB0cmFuc2xhdGVFeHRlbnRbMF1bMF0sXG4gICAgICBkeDEgPSB0cmFuc2Zvcm0uaW52ZXJ0WChleHRlbnRbMV1bMF0pIC0gdHJhbnNsYXRlRXh0ZW50WzFdWzBdLFxuICAgICAgZHkwID0gdHJhbnNmb3JtLmludmVydFkoZXh0ZW50WzBdWzFdKSAtIHRyYW5zbGF0ZUV4dGVudFswXVsxXSxcbiAgICAgIGR5MSA9IHRyYW5zZm9ybS5pbnZlcnRZKGV4dGVudFsxXVsxXSkgLSB0cmFuc2xhdGVFeHRlbnRbMV1bMV07XG4gIHJldHVybiB0cmFuc2Zvcm0udHJhbnNsYXRlKFxuICAgIGR4MSA+IGR4MCA/IChkeDAgKyBkeDEpIC8gMiA6IE1hdGgubWluKDAsIGR4MCkgfHwgTWF0aC5tYXgoMCwgZHgxKSxcbiAgICBkeTEgPiBkeTAgPyAoZHkwICsgZHkxKSAvIDIgOiBNYXRoLm1pbigwLCBkeTApIHx8IE1hdGgubWF4KDAsIGR5MSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyLFxuICAgICAgZXh0ZW50ID0gZGVmYXVsdEV4dGVudCxcbiAgICAgIGNvbnN0cmFpbiA9IGRlZmF1bHRDb25zdHJhaW4sXG4gICAgICB3aGVlbERlbHRhID0gZGVmYXVsdFdoZWVsRGVsdGEsXG4gICAgICB0b3VjaGFibGUgPSBkZWZhdWx0VG91Y2hhYmxlLFxuICAgICAgc2NhbGVFeHRlbnQgPSBbMCwgSW5maW5pdHldLFxuICAgICAgdHJhbnNsYXRlRXh0ZW50ID0gW1stSW5maW5pdHksIC1JbmZpbml0eV0sIFtJbmZpbml0eSwgSW5maW5pdHldXSxcbiAgICAgIGR1cmF0aW9uID0gMjUwLFxuICAgICAgaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZVpvb20sXG4gICAgICBsaXN0ZW5lcnMgPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiem9vbVwiLCBcImVuZFwiKSxcbiAgICAgIHRvdWNoc3RhcnRpbmcsXG4gICAgICB0b3VjaGZpcnN0LFxuICAgICAgdG91Y2hlbmRpbmcsXG4gICAgICB0b3VjaERlbGF5ID0gNTAwLFxuICAgICAgd2hlZWxEZWxheSA9IDE1MCxcbiAgICAgIGNsaWNrRGlzdGFuY2UyID0gMCxcbiAgICAgIHRhcERpc3RhbmNlID0gMTA7XG5cbiAgZnVuY3Rpb24gem9vbShzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb25cbiAgICAgICAgLnByb3BlcnR5KFwiX196b29tXCIsIGRlZmF1bHRUcmFuc2Zvcm0pXG4gICAgICAgIC5vbihcIndoZWVsLnpvb21cIiwgd2hlZWxlZCwge3Bhc3NpdmU6IGZhbHNlfSlcbiAgICAgICAgLm9uKFwibW91c2Vkb3duLnpvb21cIiwgbW91c2Vkb3duZWQpXG4gICAgICAgIC5vbihcImRibGNsaWNrLnpvb21cIiwgZGJsY2xpY2tlZClcbiAgICAgIC5maWx0ZXIodG91Y2hhYmxlKVxuICAgICAgICAub24oXCJ0b3VjaHN0YXJ0Lnpvb21cIiwgdG91Y2hzdGFydGVkKVxuICAgICAgICAub24oXCJ0b3VjaG1vdmUuem9vbVwiLCB0b3VjaG1vdmVkKVxuICAgICAgICAub24oXCJ0b3VjaGVuZC56b29tIHRvdWNoY2FuY2VsLnpvb21cIiwgdG91Y2hlbmRlZClcbiAgICAgICAgLnN0eWxlKFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgfVxuXG4gIHpvb20udHJhbnNmb3JtID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgdHJhbnNmb3JtLCBwb2ludCwgZXZlbnQpIHtcbiAgICB2YXIgc2VsZWN0aW9uID0gY29sbGVjdGlvbi5zZWxlY3Rpb24gPyBjb2xsZWN0aW9uLnNlbGVjdGlvbigpIDogY29sbGVjdGlvbjtcbiAgICBzZWxlY3Rpb24ucHJvcGVydHkoXCJfX3pvb21cIiwgZGVmYXVsdFRyYW5zZm9ybSk7XG4gICAgaWYgKGNvbGxlY3Rpb24gIT09IHNlbGVjdGlvbikge1xuICAgICAgc2NoZWR1bGUoY29sbGVjdGlvbiwgdHJhbnNmb3JtLCBwb2ludCwgZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3Rpb24uaW50ZXJydXB0KCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgZ2VzdHVyZSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgLmV2ZW50KGV2ZW50KVxuICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgLnpvb20obnVsbCwgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiID8gdHJhbnNmb3JtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0cmFuc2Zvcm0pXG4gICAgICAgICAgLmVuZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHpvb20uc2NhbGVCeSA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgaywgcCwgZXZlbnQpIHtcbiAgICB6b29tLnNjYWxlVG8oc2VsZWN0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrMCA9IHRoaXMuX196b29tLmssXG4gICAgICAgICAgazEgPSB0eXBlb2YgayA9PT0gXCJmdW5jdGlvblwiID8gay5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogaztcbiAgICAgIHJldHVybiBrMCAqIGsxO1xuICAgIH0sIHAsIGV2ZW50KTtcbiAgfTtcblxuICB6b29tLnNjYWxlVG8gPSBmdW5jdGlvbihzZWxlY3Rpb24sIGssIHAsIGV2ZW50KSB7XG4gICAgem9vbS50cmFuc2Zvcm0oc2VsZWN0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gZXh0ZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgdDAgPSB0aGlzLl9fem9vbSxcbiAgICAgICAgICBwMCA9IHAgPT0gbnVsbCA/IGNlbnRyb2lkKGUpIDogdHlwZW9mIHAgPT09IFwiZnVuY3Rpb25cIiA/IHAuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHAsXG4gICAgICAgICAgcDEgPSB0MC5pbnZlcnQocDApLFxuICAgICAgICAgIGsxID0gdHlwZW9mIGsgPT09IFwiZnVuY3Rpb25cIiA/IGsuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGs7XG4gICAgICByZXR1cm4gY29uc3RyYWluKHRyYW5zbGF0ZShzY2FsZSh0MCwgazEpLCBwMCwgcDEpLCBlLCB0cmFuc2xhdGVFeHRlbnQpO1xuICAgIH0sIHAsIGV2ZW50KTtcbiAgfTtcblxuICB6b29tLnRyYW5zbGF0ZUJ5ID0gZnVuY3Rpb24oc2VsZWN0aW9uLCB4LCB5LCBldmVudCkge1xuICAgIHpvb20udHJhbnNmb3JtKHNlbGVjdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY29uc3RyYWluKHRoaXMuX196b29tLnRyYW5zbGF0ZShcbiAgICAgICAgdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHguYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHgsXG4gICAgICAgIHR5cGVvZiB5ID09PSBcImZ1bmN0aW9uXCIgPyB5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB5XG4gICAgICApLCBleHRlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdHJhbnNsYXRlRXh0ZW50KTtcbiAgICB9LCBudWxsLCBldmVudCk7XG4gIH07XG5cbiAgem9vbS50cmFuc2xhdGVUbyA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgeCwgeSwgcCwgZXZlbnQpIHtcbiAgICB6b29tLnRyYW5zZm9ybShzZWxlY3Rpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGUgPSBleHRlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgICB0ID0gdGhpcy5fX3pvb20sXG4gICAgICAgICAgcDAgPSBwID09IG51bGwgPyBjZW50cm9pZChlKSA6IHR5cGVvZiBwID09PSBcImZ1bmN0aW9uXCIgPyBwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBwO1xuICAgICAgcmV0dXJuIGNvbnN0cmFpbihpZGVudGl0eS50cmFuc2xhdGUocDBbMF0sIHAwWzFdKS5zY2FsZSh0LmspLnRyYW5zbGF0ZShcbiAgICAgICAgdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IC14LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAteCxcbiAgICAgICAgdHlwZW9mIHkgPT09IFwiZnVuY3Rpb25cIiA/IC15LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAteVxuICAgICAgKSwgZSwgdHJhbnNsYXRlRXh0ZW50KTtcbiAgICB9LCBwLCBldmVudCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2NhbGUodHJhbnNmb3JtLCBrKSB7XG4gICAgayA9IE1hdGgubWF4KHNjYWxlRXh0ZW50WzBdLCBNYXRoLm1pbihzY2FsZUV4dGVudFsxXSwgaykpO1xuICAgIHJldHVybiBrID09PSB0cmFuc2Zvcm0uayA/IHRyYW5zZm9ybSA6IG5ldyBUcmFuc2Zvcm0oaywgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0cmFuc2Zvcm0sIHAwLCBwMSkge1xuICAgIHZhciB4ID0gcDBbMF0gLSBwMVswXSAqIHRyYW5zZm9ybS5rLCB5ID0gcDBbMV0gLSBwMVsxXSAqIHRyYW5zZm9ybS5rO1xuICAgIHJldHVybiB4ID09PSB0cmFuc2Zvcm0ueCAmJiB5ID09PSB0cmFuc2Zvcm0ueSA/IHRyYW5zZm9ybSA6IG5ldyBUcmFuc2Zvcm0odHJhbnNmb3JtLmssIHgsIHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudHJvaWQoZXh0ZW50KSB7XG4gICAgcmV0dXJuIFsoK2V4dGVudFswXVswXSArICtleHRlbnRbMV1bMF0pIC8gMiwgKCtleHRlbnRbMF1bMV0gKyArZXh0ZW50WzFdWzFdKSAvIDJdO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUodHJhbnNpdGlvbiwgdHJhbnNmb3JtLCBwb2ludCwgZXZlbnQpIHtcbiAgICB0cmFuc2l0aW9uXG4gICAgICAgIC5vbihcInN0YXJ0Lnpvb21cIiwgZnVuY3Rpb24oKSB7IGdlc3R1cmUodGhpcywgYXJndW1lbnRzKS5ldmVudChldmVudCkuc3RhcnQoKTsgfSlcbiAgICAgICAgLm9uKFwiaW50ZXJydXB0Lnpvb20gZW5kLnpvb21cIiwgZnVuY3Rpb24oKSB7IGdlc3R1cmUodGhpcywgYXJndW1lbnRzKS5ldmVudChldmVudCkuZW5kKCk7IH0pXG4gICAgICAgIC50d2VlbihcInpvb21cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICBnID0gZ2VzdHVyZSh0aGF0LCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgICAgICAgIGUgPSBleHRlbnQuYXBwbHkodGhhdCwgYXJncyksXG4gICAgICAgICAgICAgIHAgPSBwb2ludCA9PSBudWxsID8gY2VudHJvaWQoZSkgOiB0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiA/IHBvaW50LmFwcGx5KHRoYXQsIGFyZ3MpIDogcG9pbnQsXG4gICAgICAgICAgICAgIHcgPSBNYXRoLm1heChlWzFdWzBdIC0gZVswXVswXSwgZVsxXVsxXSAtIGVbMF1bMV0pLFxuICAgICAgICAgICAgICBhID0gdGhhdC5fX3pvb20sXG4gICAgICAgICAgICAgIGIgPSB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIgPyB0cmFuc2Zvcm0uYXBwbHkodGhhdCwgYXJncykgOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgIGkgPSBpbnRlcnBvbGF0ZShhLmludmVydChwKS5jb25jYXQodyAvIGEuayksIGIuaW52ZXJ0KHApLmNvbmNhdCh3IC8gYi5rKSk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIGlmICh0ID09PSAxKSB0ID0gYjsgLy8gQXZvaWQgcm91bmRpbmcgZXJyb3Igb24gZW5kLlxuICAgICAgICAgICAgZWxzZSB7IHZhciBsID0gaSh0KSwgayA9IHcgLyBsWzJdOyB0ID0gbmV3IFRyYW5zZm9ybShrLCBwWzBdIC0gbFswXSAqIGssIHBbMV0gLSBsWzFdICogayk7IH1cbiAgICAgICAgICAgIGcuem9vbShudWxsLCB0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlc3R1cmUodGhhdCwgYXJncywgY2xlYW4pIHtcbiAgICByZXR1cm4gKCFjbGVhbiAmJiB0aGF0Ll9fem9vbWluZykgfHwgbmV3IEdlc3R1cmUodGhhdCwgYXJncyk7XG4gIH1cblxuICBmdW5jdGlvbiBHZXN0dXJlKHRoYXQsIGFyZ3MpIHtcbiAgICB0aGlzLnRoYXQgPSB0aGF0O1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy5hY3RpdmUgPSAwO1xuICAgIHRoaXMuc291cmNlRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50LmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgIHRoaXMudGFwcyA9IDA7XG4gIH1cblxuICBHZXN0dXJlLnByb3RvdHlwZSA9IHtcbiAgICBldmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkgdGhpcy5zb3VyY2VFdmVudCA9IGV2ZW50O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoKyt0aGlzLmFjdGl2ZSA9PT0gMSkge1xuICAgICAgICB0aGlzLnRoYXQuX196b29taW5nID0gdGhpcztcbiAgICAgICAgdGhpcy5lbWl0KFwic3RhcnRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHpvb206IGZ1bmN0aW9uKGtleSwgdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodGhpcy5tb3VzZSAmJiBrZXkgIT09IFwibW91c2VcIikgdGhpcy5tb3VzZVsxXSA9IHRyYW5zZm9ybS5pbnZlcnQodGhpcy5tb3VzZVswXSk7XG4gICAgICBpZiAodGhpcy50b3VjaDAgJiYga2V5ICE9PSBcInRvdWNoXCIpIHRoaXMudG91Y2gwWzFdID0gdHJhbnNmb3JtLmludmVydCh0aGlzLnRvdWNoMFswXSk7XG4gICAgICBpZiAodGhpcy50b3VjaDEgJiYga2V5ICE9PSBcInRvdWNoXCIpIHRoaXMudG91Y2gxWzFdID0gdHJhbnNmb3JtLmludmVydCh0aGlzLnRvdWNoMVswXSk7XG4gICAgICB0aGlzLnRoYXQuX196b29tID0gdHJhbnNmb3JtO1xuICAgICAgdGhpcy5lbWl0KFwiem9vbVwiKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRoaXMuYWN0aXZlID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRoYXQuX196b29taW5nO1xuICAgICAgICB0aGlzLmVtaXQoXCJlbmRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVtaXQ6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIHZhciBkID0gc2VsZWN0KHRoaXMudGhhdCkuZGF0dW0oKTtcbiAgICAgIGxpc3RlbmVycy5jYWxsKFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aGlzLnRoYXQsXG4gICAgICAgIG5ldyBab29tRXZlbnQodHlwZSwge1xuICAgICAgICAgIHNvdXJjZUV2ZW50OiB0aGlzLnNvdXJjZUV2ZW50LFxuICAgICAgICAgIHRhcmdldDogem9vbSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy50aGF0Ll9fem9vbSxcbiAgICAgICAgICBkaXNwYXRjaDogbGlzdGVuZXJzXG4gICAgICAgIH0pLFxuICAgICAgICBkXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiB3aGVlbGVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgIHQgPSB0aGlzLl9fem9vbSxcbiAgICAgICAgayA9IE1hdGgubWF4KHNjYWxlRXh0ZW50WzBdLCBNYXRoLm1pbihzY2FsZUV4dGVudFsxXSwgdC5rICogTWF0aC5wb3coMiwgd2hlZWxEZWx0YS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSkpLFxuICAgICAgICBwID0gcG9pbnRlcihldmVudCk7XG5cbiAgICAvLyBJZiB0aGUgbW91c2UgaXMgaW4gdGhlIHNhbWUgbG9jYXRpb24gYXMgYmVmb3JlLCByZXVzZSBpdC5cbiAgICAvLyBJZiB0aGVyZSB3ZXJlIHJlY2VudCB3aGVlbCBldmVudHMsIHJlc2V0IHRoZSB3aGVlbCBpZGxlIHRpbWVvdXQuXG4gICAgaWYgKGcud2hlZWwpIHtcbiAgICAgIGlmIChnLm1vdXNlWzBdWzBdICE9PSBwWzBdIHx8IGcubW91c2VbMF1bMV0gIT09IHBbMV0pIHtcbiAgICAgICAgZy5tb3VzZVsxXSA9IHQuaW52ZXJ0KGcubW91c2VbMF0gPSBwKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dChnLndoZWVsKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIHdoZWVsIGV2ZW50IHdvblx1MjAxOXQgdHJpZ2dlciBhIHRyYW5zZm9ybSBjaGFuZ2UsIGlnbm9yZSBpdC5cbiAgICBlbHNlIGlmICh0LmsgPT09IGspIHJldHVybjtcblxuICAgIC8vIE90aGVyd2lzZSwgY2FwdHVyZSB0aGUgbW91c2UgcG9pbnQgYW5kIGxvY2F0aW9uIGF0IHRoZSBzdGFydC5cbiAgICBlbHNlIHtcbiAgICAgIGcubW91c2UgPSBbcCwgdC5pbnZlcnQocCldO1xuICAgICAgaW50ZXJydXB0KHRoaXMpO1xuICAgICAgZy5zdGFydCgpO1xuICAgIH1cblxuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGcud2hlZWwgPSBzZXRUaW1lb3V0KHdoZWVsaWRsZWQsIHdoZWVsRGVsYXkpO1xuICAgIGcuem9vbShcIm1vdXNlXCIsIGNvbnN0cmFpbih0cmFuc2xhdGUoc2NhbGUodCwgayksIGcubW91c2VbMF0sIGcubW91c2VbMV0pLCBnLmV4dGVudCwgdHJhbnNsYXRlRXh0ZW50KSk7XG5cbiAgICBmdW5jdGlvbiB3aGVlbGlkbGVkKCkge1xuICAgICAgZy53aGVlbCA9IG51bGw7XG4gICAgICBnLmVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlZG93bmVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKHRvdWNoZW5kaW5nIHx8ICFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgZyA9IGdlc3R1cmUodGhpcywgYXJncywgdHJ1ZSkuZXZlbnQoZXZlbnQpLFxuICAgICAgICB2ID0gc2VsZWN0KGV2ZW50LnZpZXcpLm9uKFwibW91c2Vtb3ZlLnpvb21cIiwgbW91c2Vtb3ZlZCwgdHJ1ZSkub24oXCJtb3VzZXVwLnpvb21cIiwgbW91c2V1cHBlZCwgdHJ1ZSksXG4gICAgICAgIHAgPSBwb2ludGVyKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgeDAgPSBldmVudC5jbGllbnRYLFxuICAgICAgICB5MCA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICBkcmFnRGlzYWJsZShldmVudC52aWV3KTtcbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBnLm1vdXNlID0gW3AsIHRoaXMuX196b29tLmludmVydChwKV07XG4gICAgaW50ZXJydXB0KHRoaXMpO1xuICAgIGcuc3RhcnQoKTtcblxuICAgIGZ1bmN0aW9uIG1vdXNlbW92ZWQoZXZlbnQpIHtcbiAgICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKCFnLm1vdmVkKSB7XG4gICAgICAgIHZhciBkeCA9IGV2ZW50LmNsaWVudFggLSB4MCwgZHkgPSBldmVudC5jbGllbnRZIC0geTA7XG4gICAgICAgIGcubW92ZWQgPSBkeCAqIGR4ICsgZHkgKiBkeSA+IGNsaWNrRGlzdGFuY2UyO1xuICAgICAgfVxuICAgICAgZy5ldmVudChldmVudClcbiAgICAgICAuem9vbShcIm1vdXNlXCIsIGNvbnN0cmFpbih0cmFuc2xhdGUoZy50aGF0Ll9fem9vbSwgZy5tb3VzZVswXSA9IHBvaW50ZXIoZXZlbnQsIGN1cnJlbnRUYXJnZXQpLCBnLm1vdXNlWzFdKSwgZy5leHRlbnQsIHRyYW5zbGF0ZUV4dGVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNldXBwZWQoZXZlbnQpIHtcbiAgICAgIHYub24oXCJtb3VzZW1vdmUuem9vbSBtb3VzZXVwLnpvb21cIiwgbnVsbCk7XG4gICAgICBkcmFnRW5hYmxlKGV2ZW50LnZpZXcsIGcubW92ZWQpO1xuICAgICAgbm9ldmVudChldmVudCk7XG4gICAgICBnLmV2ZW50KGV2ZW50KS5lbmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkYmxjbGlja2VkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciB0MCA9IHRoaXMuX196b29tLFxuICAgICAgICBwMCA9IHBvaW50ZXIoZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50LCB0aGlzKSxcbiAgICAgICAgcDEgPSB0MC5pbnZlcnQocDApLFxuICAgICAgICBrMSA9IHQwLmsgKiAoZXZlbnQuc2hpZnRLZXkgPyAwLjUgOiAyKSxcbiAgICAgICAgdDEgPSBjb25zdHJhaW4odHJhbnNsYXRlKHNjYWxlKHQwLCBrMSksIHAwLCBwMSksIGV4dGVudC5hcHBseSh0aGlzLCBhcmdzKSwgdHJhbnNsYXRlRXh0ZW50KTtcblxuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyYXRpb24pLmNhbGwoc2NoZWR1bGUsIHQxLCBwMCwgZXZlbnQpO1xuICAgIGVsc2Ugc2VsZWN0KHRoaXMpLmNhbGwoem9vbS50cmFuc2Zvcm0sIHQxLCBwMCwgZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hzdGFydGVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLFxuICAgICAgICBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzLCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IG4pLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRlZCwgaSwgdCwgcDtcblxuICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHQgPSB0b3VjaGVzW2ldLCBwID0gcG9pbnRlcih0LCB0aGlzKTtcbiAgICAgIHAgPSBbcCwgdGhpcy5fX3pvb20uaW52ZXJ0KHApLCB0LmlkZW50aWZpZXJdO1xuICAgICAgaWYgKCFnLnRvdWNoMCkgZy50b3VjaDAgPSBwLCBzdGFydGVkID0gdHJ1ZSwgZy50YXBzID0gMSArICEhdG91Y2hzdGFydGluZztcbiAgICAgIGVsc2UgaWYgKCFnLnRvdWNoMSAmJiBnLnRvdWNoMFsyXSAhPT0gcFsyXSkgZy50b3VjaDEgPSBwLCBnLnRhcHMgPSAwO1xuICAgIH1cblxuICAgIGlmICh0b3VjaHN0YXJ0aW5nKSB0b3VjaHN0YXJ0aW5nID0gY2xlYXJUaW1lb3V0KHRvdWNoc3RhcnRpbmcpO1xuXG4gICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgIGlmIChnLnRhcHMgPCAyKSB0b3VjaGZpcnN0ID0gcFswXSwgdG91Y2hzdGFydGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoc3RhcnRpbmcgPSBudWxsOyB9LCB0b3VjaERlbGF5KTtcbiAgICAgIGludGVycnVwdCh0aGlzKTtcbiAgICAgIGcuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaG1vdmVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLl9fem9vbWluZykgcmV0dXJuO1xuICAgIHZhciBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCB0LCBwLCBsO1xuXG4gICAgbm9ldmVudChldmVudCk7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdCA9IHRvdWNoZXNbaV0sIHAgPSBwb2ludGVyKHQsIHRoaXMpO1xuICAgICAgaWYgKGcudG91Y2gwICYmIGcudG91Y2gwWzJdID09PSB0LmlkZW50aWZpZXIpIGcudG91Y2gwWzBdID0gcDtcbiAgICAgIGVsc2UgaWYgKGcudG91Y2gxICYmIGcudG91Y2gxWzJdID09PSB0LmlkZW50aWZpZXIpIGcudG91Y2gxWzBdID0gcDtcbiAgICB9XG4gICAgdCA9IGcudGhhdC5fX3pvb207XG4gICAgaWYgKGcudG91Y2gxKSB7XG4gICAgICB2YXIgcDAgPSBnLnRvdWNoMFswXSwgbDAgPSBnLnRvdWNoMFsxXSxcbiAgICAgICAgICBwMSA9IGcudG91Y2gxWzBdLCBsMSA9IGcudG91Y2gxWzFdLFxuICAgICAgICAgIGRwID0gKGRwID0gcDFbMF0gLSBwMFswXSkgKiBkcCArIChkcCA9IHAxWzFdIC0gcDBbMV0pICogZHAsXG4gICAgICAgICAgZGwgPSAoZGwgPSBsMVswXSAtIGwwWzBdKSAqIGRsICsgKGRsID0gbDFbMV0gLSBsMFsxXSkgKiBkbDtcbiAgICAgIHQgPSBzY2FsZSh0LCBNYXRoLnNxcnQoZHAgLyBkbCkpO1xuICAgICAgcCA9IFsocDBbMF0gKyBwMVswXSkgLyAyLCAocDBbMV0gKyBwMVsxXSkgLyAyXTtcbiAgICAgIGwgPSBbKGwwWzBdICsgbDFbMF0pIC8gMiwgKGwwWzFdICsgbDFbMV0pIC8gMl07XG4gICAgfVxuICAgIGVsc2UgaWYgKGcudG91Y2gwKSBwID0gZy50b3VjaDBbMF0sIGwgPSBnLnRvdWNoMFsxXTtcbiAgICBlbHNlIHJldHVybjtcblxuICAgIGcuem9vbShcInRvdWNoXCIsIGNvbnN0cmFpbih0cmFuc2xhdGUodCwgcCwgbCksIGcuZXh0ZW50LCB0cmFuc2xhdGVFeHRlbnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoZW5kZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX196b29taW5nKSByZXR1cm47XG4gICAgdmFyIGcgPSBnZXN0dXJlKHRoaXMsIGFyZ3MpLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsIGksIHQ7XG5cbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBpZiAodG91Y2hlbmRpbmcpIGNsZWFyVGltZW91dCh0b3VjaGVuZGluZyk7XG4gICAgdG91Y2hlbmRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0b3VjaGVuZGluZyA9IG51bGw7IH0sIHRvdWNoRGVsYXkpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHQgPSB0b3VjaGVzW2ldO1xuICAgICAgaWYgKGcudG91Y2gwICYmIGcudG91Y2gwWzJdID09PSB0LmlkZW50aWZpZXIpIGRlbGV0ZSBnLnRvdWNoMDtcbiAgICAgIGVsc2UgaWYgKGcudG91Y2gxICYmIGcudG91Y2gxWzJdID09PSB0LmlkZW50aWZpZXIpIGRlbGV0ZSBnLnRvdWNoMTtcbiAgICB9XG4gICAgaWYgKGcudG91Y2gxICYmICFnLnRvdWNoMCkgZy50b3VjaDAgPSBnLnRvdWNoMSwgZGVsZXRlIGcudG91Y2gxO1xuICAgIGlmIChnLnRvdWNoMCkgZy50b3VjaDBbMV0gPSB0aGlzLl9fem9vbS5pbnZlcnQoZy50b3VjaDBbMF0pO1xuICAgIGVsc2Uge1xuICAgICAgZy5lbmQoKTtcbiAgICAgIC8vIElmIHRoaXMgd2FzIGEgZGJsdGFwLCByZXJvdXRlIHRvIHRoZSAob3B0aW9uYWwpIGRibGNsaWNrLnpvb20gaGFuZGxlci5cbiAgICAgIGlmIChnLnRhcHMgPT09IDIpIHtcbiAgICAgICAgdCA9IHBvaW50ZXIodCwgdGhpcyk7XG4gICAgICAgIGlmIChNYXRoLmh5cG90KHRvdWNoZmlyc3RbMF0gLSB0WzBdLCB0b3VjaGZpcnN0WzFdIC0gdFsxXSkgPCB0YXBEaXN0YW5jZSkge1xuICAgICAgICAgIHZhciBwID0gc2VsZWN0KHRoaXMpLm9uKFwiZGJsY2xpY2suem9vbVwiKTtcbiAgICAgICAgICBpZiAocCkgcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgem9vbS53aGVlbERlbHRhID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHdoZWVsRGVsdGEgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgem9vbSkgOiB3aGVlbERlbHRhO1xuICB9O1xuXG4gIHpvb20uZmlsdGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGZpbHRlciA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgem9vbSkgOiBmaWx0ZXI7XG4gIH07XG5cbiAgem9vbS50b3VjaGFibGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodG91Y2hhYmxlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCB6b29tKSA6IHRvdWNoYWJsZTtcbiAgfTtcblxuICB6b29tLmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChleHRlbnQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KFtbK19bMF1bMF0sICtfWzBdWzFdXSwgWytfWzFdWzBdLCArX1sxXVsxXV1dKSwgem9vbSkgOiBleHRlbnQ7XG4gIH07XG5cbiAgem9vbS5zY2FsZUV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzY2FsZUV4dGVudFswXSA9ICtfWzBdLCBzY2FsZUV4dGVudFsxXSA9ICtfWzFdLCB6b29tKSA6IFtzY2FsZUV4dGVudFswXSwgc2NhbGVFeHRlbnRbMV1dO1xuICB9O1xuXG4gIHpvb20udHJhbnNsYXRlRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRyYW5zbGF0ZUV4dGVudFswXVswXSA9ICtfWzBdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMV1bMF0gPSArX1sxXVswXSwgdHJhbnNsYXRlRXh0ZW50WzBdWzFdID0gK19bMF1bMV0sIHRyYW5zbGF0ZUV4dGVudFsxXVsxXSA9ICtfWzFdWzFdLCB6b29tKSA6IFtbdHJhbnNsYXRlRXh0ZW50WzBdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMF1bMV1dLCBbdHJhbnNsYXRlRXh0ZW50WzFdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMV1bMV1dXTtcbiAgfTtcblxuICB6b29tLmNvbnN0cmFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb25zdHJhaW4gPSBfLCB6b29tKSA6IGNvbnN0cmFpbjtcbiAgfTtcblxuICB6b29tLmR1cmF0aW9uID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGR1cmF0aW9uID0gK18sIHpvb20pIDogZHVyYXRpb247XG4gIH07XG5cbiAgem9vbS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0ZSA9IF8sIHpvb20pIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgem9vbS5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IGxpc3RlbmVycy5vbi5hcHBseShsaXN0ZW5lcnMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHZhbHVlID09PSBsaXN0ZW5lcnMgPyB6b29tIDogdmFsdWU7XG4gIH07XG5cbiAgem9vbS5jbGlja0Rpc3RhbmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsaWNrRGlzdGFuY2UyID0gKF8gPSArXykgKiBfLCB6b29tKSA6IE1hdGguc3FydChjbGlja0Rpc3RhbmNlMik7XG4gIH07XG5cbiAgem9vbS50YXBEaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0YXBEaXN0YW5jZSA9ICtfLCB6b29tKSA6IHRhcERpc3RhbmNlO1xuICB9O1xuXG4gIHJldHVybiB6b29tO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBeUQ7OztBQ0FsRCxJQUFJLFFBQVE7QUFFbkIsSUFBTyxxQkFBUTtBQUFBLEVBQ2IsS0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNBLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFDVDs7O0FDTmUsU0FBUixrQkFBaUIsTUFBTTtBQUM1QixNQUFJLFNBQVMsUUFBUSxJQUFJLElBQUksT0FBTyxRQUFRLEdBQUc7QUFDL0MsTUFBSSxLQUFLLE1BQU0sU0FBUyxLQUFLLE1BQU0sR0FBRyxDQUFDLE9BQU8sUUFBUyxRQUFPLEtBQUssTUFBTSxJQUFJLENBQUM7QUFDOUUsU0FBTyxtQkFBVyxlQUFlLE1BQU0sSUFBSSxFQUFDLE9BQU8sbUJBQVcs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QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxF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WUFBTSxLQUFLLGFBQWEsRUFBQyxNQUFLLFdBQVUsUUFBTyxLQUFJLENBQUM7QUFBQSxJQUFHO0FBQ3pHLGNBQVUsV0FBVyxJQUFJO0FBQUEsRUFDMUI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUFDO0FBQ2I7IiwKICAibmFtZXMiOiBbImRvY3VtZW50IiwgIm0iLCAieCIsICJtIiwgIm0iLCAiZGF0dW0iLCAieCIsICJtIiwgInNlbGVjdGlvbiIsICJtIiwgIm0iLCAiYSIsICJtIiwgIm0iLCAibSIsICJjcmVhdGUiLCAiY3JlYXRlIiwgIm0iLCAid2luZG93IiwgIm0iLCAic2VsZWN0X2RlZmF1bHQiLCAieCIsICJ5IiwgIngiLCAieSIsICJkYXRhX2RlZmF1bHQiLCAieCIsICJ5IiwgIngyIiwgInkyIiwgIngzIiwgInkzIiwgInJlbW92ZV9kZWZhdWx0IiwgIngiLCAieSIsICJzaXplX2RlZmF1bHQiLCAieCIsICJ5IiwgImRhdGFfZGVmYXVsdCIsICJyZW1vdmVfZGVmYXVsdCIsICJzaXplX2RlZmF1bHQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ5IiwgImZpbmQiLCAiaWQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgInkiLCAibSIsICJpIiwgInBhcnNlVHlwZW5hbWVzIiwgImMiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJub3ciLCAieCIsICJ5IiwgImRpc3BhdGNoX2RlZmF1bHQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgInkiLCAibm9kZSIsICJzdHJlbmd0aCIsICJjIiwgIngyIiwgInhfZGVmYXVsdCIsICJ4IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieV9kZWZhdWx0IiwgInkiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJyb290IiwgInNlbGVjdGlvbiIsICJzZWxlY3RfZGVmYXVsdCIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAieCIsICJ5IiwgImRpc3BhdGNoIiwgImZpbHRlciIsICJkaXNwYXRjaF9kZWZhdWx0IiwgInNlbGVjdGlvbiIsICJzZWxlY3RfZGVmYXVsdCIsICJjIiwgImNvbnRhaW5lciIsICJkaXNwYXRjaCIsICJldmVudCIsICJ0b3VjaCIsICJjb25zdGFudF9kZWZhdWx0IiwgIm0iLCAiYSIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAiYSIsICJ5IiwgInkiLCAiYSIsICJjb25zdGFudF9kZWZhdWx0IiwgInkiLCAiY29sb3IiLCAicmdiIiwgInN0YXJ0IiwgImEiLCAiYSIsICJpIiwgImEiLCAiYyIsICJtIiwgImEiLCAieCIsICJkaXNwYXRjaF9kZWZhdWx0IiwgImlkIiwgImluZGV4IiwgImdldCIsICJzZXQiLCAic3RhcnQiLCAiZW1wdHkiLCAiaW50ZXJydXB0X2RlZmF1bHQiLCAiaWQiLCAic2V0IiwgImdldCIsICJ0cmFuc2l0aW9uIiwgImEiLCAiYyIsICJhdHRyUmVtb3ZlIiwgImF0dHJSZW1vdmVOUyIsICJhdHRyQ29uc3RhbnQiLCAiYXR0ckNvbnN0YW50TlMiLCAiYXR0ckZ1bmN0aW9uIiwgImF0dHJGdW5jdGlvbk5TIiwgImF0dHJfZGVmYXVsdCIsICJpZCIsICJnZXQiLCAiaWQiLCAic2V0IiwgImdldCIsICJpZCIsICJzZXQiLCAiZ2V0IiwgImlkIiwgInNldCIsICJmaWx0ZXJfZGVmYXVsdCIsICJtIiwgIm1lcmdlX2RlZmF1bHQiLCAidHJhbnNpdGlvbiIsICJtIiwgImlkIiwgInNldCIsICJvbl9kZWZhdWx0IiwgImdldCIsICJpZCIsICJyZW1vdmVfZGVmYXVsdCIsICJzZWxlY3RfZGVmYXVsdCIsICJpZCIsICJtIiwgImdldCIsICJzZWxlY3RBbGxfZGVmYXVsdCIsICJpZCIsICJtIiwgImNoaWxkcmVuIiwgImluaGVyaXQiLCAiZ2V0IiwgIlNlbGVjdGlvbiIsICJzZWxlY3Rpb25fZGVmYXVsdCIsICJzdHlsZVJlbW92ZSIsICJzdHlsZUNvbnN0YW50IiwgInN0eWxlRnVuY3Rpb24iLCAiaWQiLCAicmVtb3ZlIiwgInNldCIsICJzdHlsZV9kZWZhdWx0IiwgInRleHRDb25zdGFudCIsICJ0ZXh0RnVuY3Rpb24iLCAidGV4dF9kZWZhdWx0IiwgIm0iLCAiaW5oZXJpdCIsICJnZXQiLCAiaWQiLCAic2V0IiwgImlkIiwgInNlbGVjdF9kZWZhdWx0IiwgInNlbGVjdEFsbF9kZWZhdWx0IiwgImZpbHRlcl9kZWZhdWx0IiwgIm1lcmdlX2RlZmF1bHQiLCAic2VsZWN0aW9uX2RlZmF1bHQiLCAib25fZGVmYXVsdCIsICJhdHRyX2RlZmF1bHQiLCAic3R5bGVfZGVmYXVsdCIsICJ0ZXh0X2RlZmF1bHQiLCAicmVtb3ZlX2RlZmF1bHQiLCAiaWQiLCAidHJhbnNpdGlvbl9kZWZhdWx0IiwgIm0iLCAiaW50ZXJydXB0X2RlZmF1bHQiLCAidHJhbnNpdGlvbl9kZWZhdWx0IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ0cmFuc2Zvcm0iLCAiZGlzcGF0Y2giLCAieCIsICJ5IiwgImlkZW50aXR5IiwgIm5vcHJvcGFnYXRpb24iLCAibm9ldmVudF9kZWZhdWx0IiwgImRlZmF1bHRGaWx0ZXIiLCAiaWRlbnRpdHkiLCAiZGVmYXVsdFRvdWNoYWJsZSIsICJ0cmFuc2Zvcm0iLCAiem9vbV9kZWZhdWx0IiwgImZpbHRlciIsICJkaXNwYXRjaF9kZWZhdWx0IiwgInNlbGVjdGlvbiIsICJ4IiwgInkiLCAiZXh0ZW50IiwgInRyYW5zaXRpb24iLCAiYSIsICJzZWxlY3RfZGVmYXVsdCIsICJub2V2ZW50X2RlZmF1bHQiLCAibm9wcm9wYWdhdGlvbiIsICJldmVudCIsICJjb25zdGFudF9kZWZhdWx0IiwgInNlbGVjdF9kZWZhdWx0IiwgIm0iLCAiYSIsICJfYSIsICJfYiIsICJ6b29tX2RlZmF1bHQiLCAieCIsICJ5IiwgImlkZW50aXR5IiwgInhfZGVmYXVsdCIsICJ5X2RlZmF1bHQiLCAiZyIsICJjb2xvciIsICJpZCIsICJjIl0KfQo=
