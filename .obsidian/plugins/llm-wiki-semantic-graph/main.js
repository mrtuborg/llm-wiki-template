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
var STOPWORDS = /* @__PURE__ */ new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "in",
  "is",
  "it",
  "of",
  "to",
  "for",
  "on",
  "with",
  "as",
  "at",
  "by",
  "from",
  "be",
  "was",
  "were",
  "been",
  "that",
  "this",
  "are",
  "have",
  "has",
  "had",
  "not",
  "but",
  "can",
  "all",
  "if",
  "they",
  "their",
  "more",
  "will",
  "would",
  "could",
  "should",
  "also",
  "just",
  "about",
  "when",
  "then",
  "than",
  "into",
  "over",
  "use",
  "used",
  "using",
  "new",
  "one",
  "two",
  "may",
  "how",
  "what",
  "its",
  "which"
]);
function tokenize(text) {
  return text.toLowerCase().replace(/```[\s\S]*?```/g, " ").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((t) => t.length > 2 && !STOPWORDS.has(t));
}
function cosineSim(a2, b) {
  let dot = 0, na = 0, nb = 0;
  const len = Math.min(a2.length, b.length);
  for (let i = 0; i < len; i++) {
    dot += a2[i] * b[i];
    na += a2[i] * a2[i];
    nb += b[i] * b[i];
  }
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom > 0 ? dot / denom : 0;
}
var BM25Index = class {
  constructor() {
    this.tf = /* @__PURE__ */ new Map();
    // docId → term → freq
    this.df = /* @__PURE__ */ new Map();
    // term → #docs
    this.dl = /* @__PURE__ */ new Map();
    // docId → length
    this.avgdl = 1;
    this.N = 0;
    this.k1 = 1.5;
    this.b = 0.75;
  }
  add(docId, text) {
    var _a, _b;
    const terms = tokenize(text);
    const freq = /* @__PURE__ */ new Map();
    for (const t of terms) freq.set(t, ((_a = freq.get(t)) != null ? _a : 0) + 1);
    this.tf.set(docId, freq);
    this.dl.set(docId, terms.length);
    for (const t of freq.keys()) this.df.set(t, ((_b = this.df.get(t)) != null ? _b : 0) + 1);
    this.N++;
  }
  finalize() {
    const total = [...this.dl.values()].reduce((a2, b) => a2 + b, 0);
    this.avgdl = this.N > 0 ? total / this.N : 1;
  }
  score(docId, queryTerms) {
    var _a, _b, _c;
    const freq = this.tf.get(docId);
    if (!freq) return 0;
    const dl = (_a = this.dl.get(docId)) != null ? _a : 1;
    let s = 0;
    for (const t of queryTerms) {
      const tf = (_b = freq.get(t)) != null ? _b : 0;
      if (tf === 0) continue;
      const df = (_c = this.df.get(t)) != null ? _c : 0;
      const idf = Math.log((this.N - df + 0.5) / (df + 0.5) + 1);
      s += idf * (tf * (this.k1 + 1)) / (tf + this.k1 * (1 - this.b + this.b * dl / this.avgdl));
    }
    return s;
  }
  /** Top-K doc IDs sorted by BM25 score descending */
  topK(queryTerms, k = 30, minScore = 0.5) {
    const scores = [];
    for (const docId of this.tf.keys()) {
      const sc = this.score(docId, queryTerms);
      if (sc >= minScore) scores.push([docId, sc]);
    }
    scores.sort((a2, b) => b[1] - a2[1]);
    return scores.slice(0, k).map(([id2]) => id2);
  }
};
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
var DOMAIN_PALETTE = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
  "#aec7e8",
  "#ffbb78",
  "#98df8a",
  "#ff9896",
  "#c5b0d5",
  "#c49c94",
  "#f7b6d2",
  "#dbdb8d",
  "#9edae5",
  "#393b79"
];
function domainColor(domain) {
  let h = 0;
  for (let i = 0; i < domain.length; i++) h = Math.imul(31, h) + domain.charCodeAt(i) >>> 0;
  return DOMAIN_PALETTE[h % DOMAIN_PALETTE.length];
}
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
var GRAPH_FILE_RE = /^wiki\/graph\/\d{8}T\d{6}Z-graph\.md$/;
var GRAPH_EDGE_RE = /^\|\s*([^|]+?)\s*\|\s*[A-Za-z]+→[A-Za-z]+\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/;
var DEFAULT_SETTINGS = {
  showNodeLabels: true,
  showEdgeLabels: true,
  showArrows: true,
  sidebarOpen: false,
  semSidebarOpen: false,
  hiddenTypes: [],
  linkDist: 60,
  chargeStr: 120,
  gravityStr: 0.03,
  labelFadeAt: 0.9,
  labelSize: 10,
  nodeScale: 1,
  edgeWidth: 1.2,
  searchQuery: "",
  selectedDomains: [],
  embeddingEndpoint: "http://localhost:11434",
  embeddingModel: "nomic-embed-text"
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
    this.semSidebarOpen = false;
    this.hiddenTypes = /* @__PURE__ */ new Set();
    this.showOrphans = false;
    // orphan nodes hidden by default
    this.selectedId = null;
    this.searchQuery = "";
    this.selectedDomains = /* @__PURE__ */ new Set();
    this._labelsUserSet = false;
    // true once user explicitly toggles label button
    // semantic search state
    this.embeddingEndpoint = "http://localhost:11434";
    this.embeddingModel = "nomic-embed-text";
    this.bm25Index = null;
    this.embeddings = null;
    this.semanticIds = /* @__PURE__ */ new Set();
    // last semantic result
    this.semSearchTimer = null;
    // physics state
    this.linkDist = 60;
    this.chargeStr = 120;
    this.gravityStr = 0.03;
    this.labelFadeAt = 0.9;
    this.labelSize = 10;
    this.nodeScale = 1;
    this.edgeWidth = 1.2;
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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const data = await this.plugin.loadData();
    if (!data) return;
    const s = { ...DEFAULT_SETTINGS, ...data };
    this.showNodeLabels = s.showNodeLabels;
    this.showEdgeLabels = s.showEdgeLabels;
    this.showArrows = s.showArrows;
    this.sidebarOpen = s.sidebarOpen;
    this.semSidebarOpen = (_a = s.semSidebarOpen) != null ? _a : false;
    this.hiddenTypes = new Set(s.hiddenTypes);
    this.linkDist = s.linkDist;
    this.chargeStr = s.chargeStr;
    this.gravityStr = s.gravityStr;
    this.labelFadeAt = (_b = s.labelFadeAt) != null ? _b : 0.9;
    this.labelSize = (_c = s.labelSize) != null ? _c : 10;
    this.nodeScale = (_d = s.nodeScale) != null ? _d : 1;
    this.edgeWidth = (_e = s.edgeWidth) != null ? _e : 1.2;
    this.searchQuery = s.searchQuery;
    this.selectedDomains = new Set((_f = s.selectedDomains) != null ? _f : []);
    this.embeddingEndpoint = (_g = s.embeddingEndpoint) != null ? _g : "http://localhost:11434";
    this.embeddingModel = (_h = s.embeddingModel) != null ? _h : "nomic-embed-text";
  }
  saveSettings() {
    const s = {
      showNodeLabels: this.showNodeLabels,
      showEdgeLabels: this.showEdgeLabels,
      showArrows: this.showArrows,
      sidebarOpen: this.sidebarOpen,
      semSidebarOpen: this.semSidebarOpen,
      hiddenTypes: [...this.hiddenTypes],
      linkDist: this.linkDist,
      chargeStr: this.chargeStr,
      gravityStr: this.gravityStr,
      labelFadeAt: this.labelFadeAt,
      labelSize: this.labelSize,
      nodeScale: this.nodeScale,
      edgeWidth: this.edgeWidth,
      searchQuery: this.searchQuery,
      selectedDomains: [...this.selectedDomains],
      embeddingEndpoint: this.embeddingEndpoint,
      embeddingModel: this.embeddingModel
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
    this.buildSearchIndex();
    this.loadEmbeddings();
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
      const t = transform(this.svgEl);
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
  // ── 1. Read compiled graph file ───────────────────────────────────
  async buildGraph() {
    var _a, _b, _c, _d, _e;
    const graphFiles = this.app.vault.getMarkdownFiles().filter((f) => GRAPH_FILE_RE.test(f.path)).sort((a2, b) => b.basename.localeCompare(a2.basename));
    if (graphFiles.length === 0) {
      this.nodes = [];
      this.edges = [];
      this.analytics = this.computeAnalytics();
      return;
    }
    const graphFile = graphFiles[0];
    console.log(`[llm-wiki-graph] reading compiled graph: ${graphFile.path}`);
    const content = await this.app.vault.cachedRead(graphFile);
    const lines = content.split("\n");
    const nodeMap = /* @__PURE__ */ new Map();
    const wikiFiles = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex)));
    for (const file of wikiFiles) {
      const fm = (_b = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {};
      nodeMap.set(file.basename, {
        id: file.basename,
        title: (_c = fm["title"]) != null ? _c : file.basename,
        type: ((_d = fm["type"]) != null ? _d : "unknown").toLowerCase(),
        domain: (_e = fm["domain"]) != null ? _e : ""
      });
    }
    const rawEdges = [];
    let inEdgeTable = false;
    for (const line of lines) {
      if (line.startsWith("## Edge List")) {
        inEdgeTable = true;
        continue;
      }
      if (inEdgeTable && line.startsWith("## ")) {
        inEdgeTable = false;
        continue;
      }
      if (!inEdgeTable) continue;
      const m2 = GRAPH_EDGE_RE.exec(line);
      if (!m2) continue;
      const [, src, tgt, label] = m2;
      if (src === "Source") continue;
      rawEdges.push({ src: src.trim(), tgt: tgt.trim(), label: label.trim() });
    }
    this.nodes = Array.from(nodeMap.values());
    this.edges = rawEdges.filter((e) => nodeMap.has(e.src) && nodeMap.has(e.tgt)).map((e) => ({ source: e.src, target: e.tgt, label: e.label }));
    this.analytics = this.computeAnalytics();
  }
  // ── 1b. BM25 search index ─────────────────────────────────────────
  async buildSearchIndex() {
    const idx = new BM25Index();
    const wikiFiles = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex)));
    await Promise.all(wikiFiles.map(async (file) => {
      const raw = await this.app.vault.cachedRead(file);
      const body = raw.replace(/^---[\s\S]*?---\n?/, "");
      idx.add(file.basename, file.basename + " " + body);
    }));
    idx.finalize();
    this.bm25Index = idx;
  }
  // ── 1c. Load pre-computed embeddings ─────────────────────────────
  async loadEmbeddings() {
    const embFile = this.app.vault.getAbstractFileByPath("wiki/search/embeddings.json");
    if (!(embFile instanceof import_obsidian.TFile)) return;
    try {
      const raw = await this.app.vault.read(embFile);
      const data = JSON.parse(raw);
      this.embeddings = new Map(Object.entries(data));
      console.log(`[llm-wiki-graph] loaded ${this.embeddings.size} embeddings`);
    } catch (e) {
      console.warn("[llm-wiki-graph] could not load embeddings:", e);
    }
  }
  // ── 1d. Semantic search via Ollama ───────────────────────────────
  async runSemanticSearch(query) {
    if (!this.embeddings || !query.trim()) return /* @__PURE__ */ new Set();
    let queryVec;
    try {
      const resp = await fetch(`${this.embeddingEndpoint}/api/embeddings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: this.embeddingModel, prompt: query })
      });
      if (!resp.ok) return /* @__PURE__ */ new Set();
      queryVec = (await resp.json()).embedding;
    } catch (e) {
      return /* @__PURE__ */ new Set();
    }
    const scores = [];
    for (const [id2, vec] of this.embeddings) {
      scores.push([id2, cosineSim(queryVec, vec)]);
    }
    scores.sort((a2, b) => b[1] - a2[1]);
    return new Set(scores.slice(0, 25).filter(([, s]) => s >= 0.5).map(([id2]) => id2));
  }
  computeAnalytics() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const degreeOf = /* @__PURE__ */ new Map();
    for (const e of this.edges) {
      const s = e.source, t = e.target;
      degreeOf.set(s, ((_a = degreeOf.get(s)) != null ? _a : 0) + 1);
      degreeOf.set(t, ((_b = degreeOf.get(t)) != null ? _b : 0) + 1);
    }
    const nodeById = new Map(this.nodes.map((nd) => [nd.id, nd]));
    const intraDomainOut = /* @__PURE__ */ new Map();
    for (const e of this.edges) {
      const s = e.source, t = e.target;
      const srcDomain = (_c = nodeById.get(s)) == null ? void 0 : _c.domain;
      const tgtDomain = (_d = nodeById.get(t)) == null ? void 0 : _d.domain;
      if (srcDomain && srcDomain === tgtDomain) {
        intraDomainOut.set(s, ((_e = intraDomainOut.get(s)) != null ? _e : 0) + 1);
      }
    }
    const n = this.nodes.length, m2 = this.edges.length;
    const density = n > 1 ? +(m2 / (n * (n - 1))).toFixed(4) : 0;
    const avgDeg = n > 0 ? +([...degreeOf.values()].reduce((a2, b) => a2 + b, 0) / n).toFixed(2) : 0;
    const orphanIds = this.nodes.filter((nd) => !degreeOf.has(nd.id)).map((nd) => nd.id);
    const typeCounts = /* @__PURE__ */ new Map();
    for (const nd of this.nodes) typeCounts.set(nd.type, ((_f = typeCounts.get(nd.type)) != null ? _f : 0) + 1);
    const layers = LAYER_ORDER.map((name) => {
      var _a2, _b2;
      return {
        name,
        color: (_a2 = NODE_COLORS[name.toLowerCase()]) != null ? _a2 : "#888",
        count: (_b2 = typeCounts.get(name.toLowerCase())) != null ? _b2 : 0
      };
    });
    const edgeCnt = /* @__PURE__ */ new Map();
    for (const e of this.edges) edgeCnt.set(e.label, ((_g = edgeCnt.get(e.label)) != null ? _g : 0) + 1);
    const edgeTypes = [...edgeCnt.entries()].sort((a2, b) => b[1] - a2[1]).map(([label, count]) => ({ label, count }));
    const hubs = this.nodes.filter((nd) => degreeOf.has(nd.id)).sort((a2, b) => {
      var _a2, _b2;
      return ((_a2 = degreeOf.get(b.id)) != null ? _a2 : 0) - ((_b2 = degreeOf.get(a2.id)) != null ? _b2 : 0);
    }).slice(0, 10).map((nd) => ({ id: nd.id, deg: degreeOf.get(nd.id), type: nd.type }));
    const domainCnt = /* @__PURE__ */ new Map();
    for (const nd of this.nodes) if (nd.domain) domainCnt.set(nd.domain, ((_h = domainCnt.get(nd.domain)) != null ? _h : 0) + 1);
    const domains = [...domainCnt.entries()].sort((a2, b) => b[1] - a2[1]).map(([name, count]) => ({ name, count }));
    return { n, m: m2, density, avgDeg, orphans: orphanIds.length, orphanIds, layers, edgeTypes, hubs, domains, degreeOf, intraDomainOut };
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
    const domainActive = this.selectedDomains.size > 0;
    this.selNodeEl.style("opacity", (d) => {
      var _a2, _b2;
      if (this.hiddenTypes.has(d.type)) return "0";
      if (!domainActive && !this.showOrphans && ((_b2 = (_a2 = adj.get(d.id)) == null ? void 0 : _a2.size) != null ? _b2 : 0) === 0) return "0";
      if (!sel) return "1";
      return d.id === sel || neighbors.has(d.id) ? "1" : "0.07";
    }).style("display", (d) => {
      var _a2, _b2;
      if (this.hiddenTypes.has(d.type)) return "none";
      if (!domainActive && !this.showOrphans && ((_b2 = (_a2 = adj.get(d.id)) == null ? void 0 : _a2.size) != null ? _b2 : 0) === 0) return "none";
      return null;
    });
    const edgeOpacity = (e) => {
      const s = e.source, t = e.target;
      if (this.hiddenTypes.has(s.type) || this.hiddenTypes.has(t.type)) return "0";
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
    const domFilt = this.selectedDomains;
    const renderNodes = domFilt.size > 0 ? this.nodes.filter((n) => domFilt.has(n.domain)) : this.nodes;
    const renderNodeIds = new Set(renderNodes.map((n) => n.id));
    const renderEdges = domFilt.size > 0 ? this.edges.filter((e) => renderNodeIds.has(e.source) && renderNodeIds.has(e.target)) : this.edges;
    const N = renderNodes.length;
    if (N > 0) {
      this.chargeStr = Math.min(800, Math.max(120, Math.round(N * 2)));
      this.linkDist = Math.min(200, Math.max(50, Math.round(Math.sqrt(N) * 8)));
    }
    const toolbar = container.createDiv({ cls: "llm-graph-toolbar" });
    const searchBar = container.createDiv({ cls: "llm-graph-searchbar" });
    const searchInput = searchBar.createEl("input", {
      cls: "llm-graph-search",
      attr: { type: "text", placeholder: "Search nodes\u2026 (content + semantic)" }
    });
    const semIndicator = searchBar.createSpan({ cls: "llm-graph-sem-indicator" });
    semIndicator.style.display = "none";
    const searchClear = searchBar.createEl("button", { cls: "llm-graph-search-clear", text: "\xD7" });
    searchClear.style.display = "none";
    if (this.searchQuery) {
      searchInput.value = this.searchQuery;
      searchClear.style.display = "flex";
    }
    const renderVisibility = (bm25Ids, semIds) => {
      var _a2, _b;
      if (!this.selNodeEl) return;
      this.selNodeEl.style("opacity", (d) => {
        if (bm25Ids.has(d.id)) return "1";
        if (semIds.has(d.id)) return "0.5";
        return "0.06";
      }).style("pointer-events", (d) => bm25Ids.has(d.id) || semIds.has(d.id) ? null : "none");
      (_a2 = this.selEdgeLine) == null ? void 0 : _a2.style("opacity", (d) => {
        const s = d.source.id, t = d.target.id;
        if (bm25Ids.has(s) || bm25Ids.has(t)) return "0.6";
        if (semIds.has(s) || semIds.has(t)) return "0.25";
        return "0.03";
      });
      (_b = this.selEdgeLabel) == null ? void 0 : _b.style("opacity", (d) => {
        const s = d.source.id, t = d.target.id;
        if (bm25Ids.has(s) || bm25Ids.has(t)) return "1";
        if (semIds.has(s) || semIds.has(t)) return "0.5";
        return "0";
      });
    };
    const applySearch = () => {
      var _a2, _b;
      const q = this.searchQuery.toLowerCase().trim();
      searchClear.style.display = q ? "flex" : "none";
      if (!this.selNodeEl) return;
      if (!q) {
        this.semanticIds.clear();
        semIndicator.style.display = "none";
        this.selNodeEl.style("opacity", null).style("pointer-events", null);
        (_a2 = this.selEdgeLine) == null ? void 0 : _a2.style("opacity", null);
        (_b = this.selEdgeLabel) == null ? void 0 : _b.style("opacity", null);
        return;
      }
      const queryTerms = tokenize(q);
      const bm25Ids = /* @__PURE__ */ new Set();
      for (const n of this.nodes) {
        let score = 0;
        if (n.title.toLowerCase().includes(q)) score += 10;
        if (n.type.toLowerCase().includes(q)) score += 5;
        if (n.domain.toLowerCase().includes(q)) score += 5;
        if (this.bm25Index && queryTerms.length > 0)
          score += this.bm25Index.score(n.id, queryTerms);
        if (score > 0) bm25Ids.add(n.id);
      }
      renderVisibility(bm25Ids, this.semanticIds);
      if (this.semSearchTimer) clearTimeout(this.semSearchTimer);
      if (this.embeddings) {
        semIndicator.textContent = "\u27F3 semantic\u2026";
        semIndicator.style.display = "inline";
        this.semSearchTimer = setTimeout(async () => {
          const semIds = await this.runSemanticSearch(q);
          this.semanticIds = semIds;
          const combined = /* @__PURE__ */ new Set([...bm25Ids, ...semIds]);
          semIndicator.textContent = combined.size > 0 ? `BM25: ${bm25Ids.size}  ~: ${semIds.size}` : "";
          semIndicator.style.display = combined.size > 0 ? "inline" : "none";
          renderVisibility(bm25Ids, semIds);
        }, 400);
      } else {
        semIndicator.style.display = "none";
      }
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
    const semBtn = mkBtn("cpu", "Semantic", this.semSidebarOpen);
    const sbBtn = mkBtn("bar-chart-2", "Analytics", this.sidebarOpen);
    toolbar.createSpan({
      cls: "llm-graph-stats",
      text: `${A.n} nodes \xB7 ${A.m} edges \xB7 density ${A.density}`
    });
    let adj = /* @__PURE__ */ new Map();
    const layout = container.createDiv({ cls: "llm-graph-layout" });
    const semSidebar = layout.createDiv({ cls: "llm-graph-sem-sidebar" });
    if (this.semSidebarOpen) semSidebar.addClass("llm-graph-sem-sidebar--open");
    const svgEl = layout.createSvg("svg", { cls: "llm-graph-svg" });
    this.svgEl = svgEl;
    const sidebar = layout.createDiv({ cls: "llm-graph-sidebar" });
    if (this.sidebarOpen) sidebar.addClass("llm-graph-sidebar--open");
    this.buildSidebar(sidebar, A, adj);
    this.buildSemanticSidebar(semSidebar);
    const svg = select_default2(svgEl);
    const g = svg.append("g");
    this.zoomBehavior = zoom_default2().scaleExtent([0.05, 10]).on("zoom", (ev) => {
      g.attr("transform", ev.transform);
      const k = ev.transform.k;
      const nodeFontPx = this.labelSize / k;
      const edgeFontPx = this.labelSize * 0.85 / k;
      const fadeMax = this.labelFadeAt;
      const fadeMin = this.labelFadeAt * 0.45;
      const labelOpacity = Math.max(0, Math.min(
        1,
        (k - fadeMin) / (fadeMax - fadeMin)
      ));
      if (this.showNodeLabels)
        g.selectAll(".llm-graph-node-label").style("font-size", `${nodeFontPx}px`).style("opacity", String(labelOpacity));
      if (this.showEdgeLabels)
        g.selectAll(".llm-graph-edge-label").style("font-size", `${edgeFontPx}px`).style("opacity", String(labelOpacity));
    });
    svg.call(this.zoomBehavior);
    if (this.savedTransform && this.selectedDomains.size === 0) {
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
    const nodeMap = new Map(renderNodes.map((n) => [n.id, n]));
    const simEdges = renderEdges.map((e) => ({
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
      this.sim = simulation_default(renderNodes).force("link", linkForce).force("charge", chargeForce).force("gx", gX).force("gy", gY).force("collide", collide_default(collideR));
      const builtAdj = this.buildAdjacency(simEdges);
      adj.clear();
      for (const [k, v] of builtAdj) adj.set(k, v);
      const edgeLine = g.append("g").selectAll("line").data(simEdges).join("line").attr("class", "llm-graph-edge").attr("stroke-width", this.edgeWidth).style("stroke", (d) => {
        const domain = d.source.domain || d.target.domain;
        return domain ? domainColor(domain) : "#888";
      }).style("stroke-opacity", (d) => {
        const src = d.source.domain;
        const tgt = d.target.domain;
        return src && tgt && src === tgt ? "0.7" : "0.3";
      }).attr("marker-end", "url(#llm-arrow)");
      this.selEdgeLine = edgeLine;
      const edgeLabel = g.append("g").selectAll("text").data(simEdges).join("text").attr("class", "llm-graph-edge-label").attr("pointer-events", "none").text((d) => d.label);
      this.selEdgeLabel = edgeLabel;
      const nodeEl = g.append("g").selectAll("g").data(renderNodes).join("g").attr("class", "llm-graph-node").call(drag_default().on("start", (ev, d) => {
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
        var _a2, _b, _c, _d;
        const g2 = select_default2(this);
        const color2 = (_a2 = NODE_COLORS[d.type]) != null ? _a2 : "#BAB0AC";
        const shape = (_b = NODE_SHAPES[d.type]) != null ? _b : "circle";
        const cls = "llm-graph-node-shape";
        const intraDom = (_c = A.intraDomainOut.get(d.id)) != null ? _c : 0;
        const deg = (_d = A.degreeOf.get(d.id)) != null ? _d : 0;
        const sizeVal = intraDom > 0 ? intraDom : deg;
        const baseS = 1 + Math.log1p(sizeVal) * (intraDom > 0 ? 0.5 : 0.25);
        const sw = g2.append("g").attr("class", "llm-node-shape-wrapper").attr("data-base-scale", baseS).attr("transform", `scale(${baseS * this.nodeScale})`);
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
      const shouldAutoFit = this.selectedDomains.size > 0 || !this.savedTransform;
      if (shouldAutoFit) {
        this.sim.on("end", () => {
          const nodes = renderNodes.filter((d) => d.x != null && d.y != null);
          if (nodes.length === 0) return;
          const xs = nodes.map((d) => d.x), ys = nodes.map((d) => d.y);
          const x0 = Math.min(...xs), x1 = Math.max(...xs);
          const y0 = Math.min(...ys), y1 = Math.max(...ys);
          const W2 = svgEl.clientWidth || 900, H2 = svgEl.clientHeight || 700;
          const pad = 60;
          const scaleX = (W2 - pad * 2) / Math.max(x1 - x0, 1);
          const scaleY = (H2 - pad * 2) / Math.max(y1 - y0, 1);
          const k = Math.min(scaleX, scaleY, 3);
          const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
          svg.transition().duration(500).call(
            this.zoomBehavior.transform,
            identity2.translate(W2 / 2, H2 / 2).scale(k).translate(-cx, -cy)
          );
        });
      }
      sidebar.querySelectorAll("[data-physics]").forEach((input) => {
        input.addEventListener("input", () => {
          var _a2;
          const val = +input.value;
          const key = input.dataset.physics;
          const lbl = input.nextElementSibling;
          const isFloat = key === "gravityStr" || key === "labelFadeAt" || key === "nodeScale" || key === "edgeWidth";
          if (lbl) lbl.textContent = isFloat ? val.toFixed(2) : String(val);
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
          } else if (key === "labelFadeAt" || key === "labelSize") {
            if (key === "labelFadeAt") this.labelFadeAt = val;
            if (key === "labelSize") this.labelSize = val;
            const k = transform(svgEl).k;
            const fadeMax = this.labelFadeAt, fadeMin = this.labelFadeAt * 0.45;
            const op = String(Math.max(0, Math.min(1, (k - fadeMin) / (fadeMax - fadeMin))));
            if (this.showNodeLabels)
              g.selectAll(".llm-graph-node-label").style("font-size", `${this.labelSize / k}px`).style("opacity", op);
            if (this.showEdgeLabels)
              g.selectAll(".llm-graph-edge-label").style("font-size", `${this.labelSize * 0.85 / k}px`).style("opacity", op);
            this.saveSettings();
            return;
          } else if (key === "nodeScale") {
            this.nodeScale = val;
            g.selectAll(".llm-node-shape-wrapper").attr("transform", function() {
              var _a3;
              const baseS = +((_a3 = this.getAttribute("data-base-scale")) != null ? _a3 : 1);
              return `scale(${baseS * val})`;
            });
            this.saveSettings();
            return;
          } else if (key === "edgeWidth") {
            this.edgeWidth = val;
            (_a2 = this.selEdgeLine) == null ? void 0 : _a2.attr("stroke-width", val);
            this.saveSettings();
            return;
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
    semBtn.addEventListener("click", () => {
      this.semSidebarOpen = !this.semSidebarOpen;
      semBtn.toggleClass("llm-graph-btn--active", this.semSidebarOpen);
      semSidebar.toggleClass("llm-graph-sem-sidebar--open", this.semSidebarOpen);
      this.saveSettings();
    });
  }
  // ── 5a. Generate embeddings for all wiki nodes ───────────────────
  async generateEmbeddings(progressEl) {
    const wikiFiles = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !["wiki/updates/", "wiki/compiled/", "wiki/graph/", "wiki/synthesis/", "wiki/decisions/"].some((ex) => f.path.includes(ex)));
    const result = {};
    const total = wikiFiles.length;
    let done = 0, failed = 0;
    for (const file of wikiFiles) {
      progressEl.textContent = `${done}/${total} embedded${failed ? ` (${failed} failed)` : ""}\u2026`;
      try {
        const raw = await this.app.vault.cachedRead(file);
        const body = raw.replace(/^---[\s\S]*?---\n?/, "").slice(0, 1e3);
        const text = file.basename + ". " + body;
        const resp = await fetch(`${this.embeddingEndpoint}/api/embeddings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: this.embeddingModel, prompt: text })
        });
        if (!resp.ok) {
          failed++;
          continue;
        }
        const vec = (await resp.json()).embedding;
        if (vec == null ? void 0 : vec.length) result[file.basename] = vec;
      } catch (e) {
        failed++;
      }
      done++;
    }
    progressEl.textContent = `Done: ${done} embedded, ${failed} failed. Saving\u2026`;
    const outPath = "wiki/search/embeddings.json";
    const json = JSON.stringify(result);
    const existing = this.app.vault.getAbstractFileByPath(outPath);
    if (existing instanceof import_obsidian.TFile) {
      await this.app.vault.modify(existing, json);
    } else {
      try {
        await this.app.vault.createFolder("wiki/search");
      } catch (e) {
      }
      await this.app.vault.create(outPath, json);
    }
    progressEl.textContent = `\u2713 ${Object.keys(result).length} embeddings saved.`;
  }
  // ── 5b. Semantic Sidebar ──────────────────────────────────────────
  buildSemanticSidebar(el) {
    var _a, _b;
    el.empty();
    const emb = this.embeddings;
    const nodes = this.nodes;
    const section = (title) => {
      const s = el.createDiv({ cls: "llm-sb-section" });
      s.createDiv({ cls: "llm-sb-title", text: title });
      return s;
    };
    if (!emb || emb.size === 0) {
      const ns = section("Semantic Metrics");
      ns.createDiv({ cls: "llm-sb-muted", text: "No embeddings found. Generate them below (requires Ollama running)." });
      const genRow = ns.createDiv({ cls: "llm-sem-gen-row" });
      const endpointInput = genRow.createEl("input", {
        cls: "llm-sem-gen-input",
        attr: { type: "text", value: this.embeddingEndpoint, placeholder: "http://localhost:11434" }
      });
      const modelInput = genRow.createEl("input", {
        cls: "llm-sem-gen-input",
        attr: { type: "text", value: this.embeddingModel, placeholder: "nomic-embed-text" }
      });
      const progress = ns.createDiv({ cls: "llm-sem-gen-progress" });
      const genBtn = ns.createEl("button", { cls: "llm-graph-btn llm-sem-gen-btn", text: "Generate Embeddings" });
      genBtn.addEventListener("click", async () => {
        this.embeddingEndpoint = endpointInput.value.trim() || "http://localhost:11434";
        this.embeddingModel = modelInput.value.trim() || "nomic-embed-text";
        this.saveSettings();
        genBtn.disabled = true;
        genBtn.textContent = "Generating\u2026";
        await this.generateEmbeddings(progress);
        await this.loadEmbeddings();
        this.buildSemanticSidebar(el);
      });
      return;
    }
    const cosSim = (a2, b) => {
      let dot = 0, na = 0, nb = 0;
      for (let i = 0; i < a2.length; i++) {
        dot += a2[i] * b[i];
        na += a2[i] * a2[i];
        nb += b[i] * b[i];
      }
      return na === 0 || nb === 0 ? 0 : dot / (Math.sqrt(na) * Math.sqrt(nb));
    };
    const domainNodes = /* @__PURE__ */ new Map();
    for (const nd of nodes) {
      if (!nd.domain || !emb.has(nd.id)) continue;
      if (!domainNodes.has(nd.domain)) domainNodes.set(nd.domain, []);
      domainNodes.get(nd.domain).push(nd);
    }
    const domainStats = /* @__PURE__ */ new Map();
    const dim = (_b = (_a = emb.values().next().value) == null ? void 0 : _a.length) != null ? _b : 0;
    for (const [dom, dnodes] of domainNodes) {
      if (dnodes.length < 2 || dim === 0) continue;
      const centroid = new Array(dim).fill(0);
      for (const nd of dnodes) {
        const v = emb.get(nd.id);
        for (let i = 0; i < dim; i++) centroid[i] += v[i] / dnodes.length;
      }
      const sims = dnodes.map((nd) => ({ id: nd.id, sim: cosSim(emb.get(nd.id), centroid) }));
      const cohesion = sims.reduce((s, x3) => s + x3.sim, 0) / sims.length;
      const outliers = [...sims].sort((a2, b) => a2.sim - b.sim).slice(0, 5);
      domainStats.set(dom, { cohesion, centroid, outliers });
    }
    const cs = section("Domain Cohesion");
    cs.createDiv({ cls: "llm-sb-muted", text: "avg cos-sim to domain centroid (1.0 = perfectly focused)" });
    const sorted = [...domainStats.entries()].sort((a2, b) => b[1].cohesion - a2[1].cohesion);
    const maxCoh = Math.max(...sorted.map(([, v]) => v.cohesion), 0.01);
    for (const [dom, { cohesion }] of sorted) {
      const row = cs.createDiv({ cls: "llm-sb-bar-row" });
      row.createSpan({ cls: "llm-sb-bar-name", text: dom });
      const track = row.createDiv({ cls: "llm-sb-track" });
      const pct = Math.max(cohesion / maxCoh * 100, 2);
      const hue = Math.round(cohesion * 120);
      track.createDiv({ cls: "llm-sb-fill", attr: { style: `width:${pct}%;background:hsl(${hue},60%,45%)` } });
      row.createSpan({ cls: "llm-sb-bar-cnt", text: cohesion.toFixed(2) });
    }
    const os = section("Semantic Outliers");
    os.createDiv({ cls: "llm-sb-muted", text: "nodes farthest from their domain centroid" });
    for (const [dom, { outliers }] of sorted.slice(0, 8)) {
      const domRow = os.createDiv({ cls: "llm-sb-outlier-domain" });
      domRow.createSpan({ cls: "llm-sb-bar-name", text: dom });
      for (const o of outliers.slice(0, 3)) {
        const r = os.createDiv({ cls: "llm-sb-outlier-row" });
        r.createSpan({ cls: "llm-sb-outlier-sim", text: o.sim.toFixed(2) });
        const link = r.createEl("a", { cls: "llm-sb-outlier-name", text: o.id.length > 28 ? o.id.slice(0, 26) + "\u2026" : o.id });
        link.setAttribute("title", o.id);
        link.addEventListener("click", () => this.app.workspace.openLinkText(o.id, "", false));
      }
    }
    const ms = section("Missing Links");
    ms.createDiv({ cls: "llm-sb-muted", text: "similar nodes without an edge (cos-sim > 0.80)" });
    const edgeSet = new Set(this.edges.map((e) => `${e.source}|${e.target}`));
    const embIds = nodes.filter((n) => emb.has(n.id)).map((n) => n.id);
    const missing = [];
    const MISS_THRESH = 0.8;
    if (embIds.length <= 300) {
      for (let i = 0; i < embIds.length && missing.length < 200; i++) {
        for (let j = i + 1; j < embIds.length; j++) {
          if (edgeSet.has(`${embIds[i]}|${embIds[j]}`) || edgeSet.has(`${embIds[j]}|${embIds[i]}`)) continue;
          const s = cosSim(emb.get(embIds[i]), emb.get(embIds[j]));
          if (s >= MISS_THRESH) missing.push({ a: embIds[i], b: embIds[j], sim: s });
        }
      }
      missing.sort((a2, b) => b.sim - a2.sim);
    } else {
      ms.createDiv({ cls: "llm-sb-muted", text: `${embIds.length} nodes \u2014 too many for full scan (max 300)` });
    }
    for (const { a: a2, b, sim } of missing.slice(0, 15)) {
      const r = ms.createDiv({ cls: "llm-sb-miss-row" });
      r.createSpan({ cls: "llm-sb-outlier-sim", text: sim.toFixed(2) });
      const la = r.createEl("a", { cls: "llm-sb-miss-name", text: a2.length > 18 ? a2.slice(0, 16) + "\u2026" : a2 });
      la.addEventListener("click", () => this.app.workspace.openLinkText(a2, "", false));
      r.createSpan({ text: " \u2194 " });
      const lb = r.createEl("a", { cls: "llm-sb-miss-name", text: b.length > 18 ? b.slice(0, 16) + "\u2026" : b });
      lb.addEventListener("click", () => this.app.workspace.openLinkText(b, "", false));
    }
    if (missing.length === 0 && embIds.length <= 300) {
      ms.createDiv({ cls: "llm-sb-muted", text: "None found above threshold." });
    }
    const ds = section("Near Duplicates");
    ds.createDiv({ cls: "llm-sb-muted", text: "cos-sim > 0.93 \u2014 potential redundancy" });
    const dupes = missing.filter((x3) => x3.sim >= 0.93);
    if (dupes.length === 0) {
      ds.createDiv({ cls: "llm-sb-muted", text: "None found." });
    }
    for (const { a: a2, b, sim } of dupes.slice(0, 10)) {
      const r = ds.createDiv({ cls: "llm-sb-miss-row" });
      r.createSpan({ cls: "llm-sb-outlier-sim", text: sim.toFixed(2) });
      const la = r.createEl("a", { cls: "llm-sb-miss-name", text: a2.length > 18 ? a2.slice(0, 16) + "\u2026" : a2 });
      la.addEventListener("click", () => this.app.workspace.openLinkText(a2, "", false));
      r.createSpan({ text: " \u2194 " });
      const lb = r.createEl("a", { cls: "llm-sb-miss-name", text: b.length > 18 ? b.slice(0, 16) + "\u2026" : b });
      lb.addEventListener("click", () => this.app.workspace.openLinkText(b, "", false));
    }
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
    mkSlider("Repulsion", "chargeStr", 30, 800, this.chargeStr, 10);
    mkSlider("Gravity", "gravityStr", 0, 0.3, this.gravityStr, 0.01);
    mkSlider("Node size", "nodeScale", 0.3, 4, this.nodeScale, 0.1);
    mkSlider("Edge width", "edgeWidth", 0.5, 8, this.edgeWidth, 0.5);
    mkSlider("Font size", "labelSize", 6, 24, this.labelSize, 1);
    mkSlider("Labels fade", "labelFadeAt", 0.05, 3, this.labelFadeAt, 0.05);
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
    if (this.selectedDomains.size > 0) {
      const badge = ds.createDiv({ cls: "llm-sb-domain-badge" });
      badge.setText(`${this.selectedDomains.size} selected \u2014 `);
      const clearAll = badge.createEl("a", { text: "clear all" });
      clearAll.addEventListener("click", (e) => {
        e.stopPropagation();
        this.selectedDomains.clear();
        this.saveSettings();
        this.render();
      });
    }
    const maxD = Math.max(...A.domains.map((d) => d.count), 1);
    for (const d of A.domains) {
      const isActive = this.selectedDomains.has(d.name);
      const row = ds.createDiv({ cls: "llm-sb-bar-row llm-sb-domain-row" + (isActive ? " llm-sb-domain-row--active" : "") });
      row.createSpan({ cls: "llm-sb-bar-name", text: d.name });
      const track = row.createDiv({ cls: "llm-sb-track" });
      const dfill = track.createDiv({ cls: "llm-sb-fill" });
      dfill.style.cssText = `width:${Math.max(d.count / maxD * 100, 4)}%;background:${domainColor(d.name)}`;
      row.createSpan({ cls: "llm-sb-bar-cnt", text: String(d.count) });
      row.addEventListener("click", () => {
        if (this.selectedDomains.has(d.name)) {
          this.selectedDomains.delete(d.name);
        } else {
          this.selectedDomains.add(d.name);
        }
        this.saveSettings();
        this.render();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkcmVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2pvaW4uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9hZGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9jb3Zlci5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9leHRlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvZmluZC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Jvb3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9zaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvdmlzaXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy92aXNpdEFmdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMveC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3kuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkdHJlZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvamlnZ2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvY29sbGlkZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xpbmsuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsICJub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xjZy5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3NpbXVsYXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9tYW55Qm9keS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3guanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy95LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2RyYWcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ldmVudC5qcyIsICJub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvZHJhZy5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsICJub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL3BhcnNlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zY2hlZHVsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3R3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ludGVycG9sYXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vYXR0clR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2RlbGF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZVZhcnlpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL29uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0QWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZVR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdGV4dFR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZDMtem9vbS9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy16b29tL3NyYy90cmFuc2Zvcm0uanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL25vZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3pvb20uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBsdWdpbiwgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBzZXRJY29uIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7XG5cdGZvcmNlU2ltdWxhdGlvbiwgZm9yY2VMaW5rLCBmb3JjZU1hbnlCb2R5LFxuXHRmb3JjZUNvbGxpZGUsIGZvcmNlWCwgZm9yY2VZLFxuXHRTaW11bGF0aW9uTm9kZURhdHVtLCBTaW11bGF0aW9uTGlua0RhdHVtLFxuXHRGb3JjZUxpbmssXG59IGZyb20gJ2QzLWZvcmNlJztcbmltcG9ydCB7IHpvb20sIHpvb21JZGVudGl0eSwgem9vbVRyYW5zZm9ybSwgWm9vbUJlaGF2aW9yIH0gZnJvbSAnZDMtem9vbSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnZDMtZHJhZyc7XG5cbmNvbnN0IFZJRVdfVFlQRSA9ICdsbG0td2lraS1zZW1hbnRpYy1ncmFwaCc7XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBCTTI1IHNlYXJjaCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmNvbnN0IFNUT1BXT1JEUyA9IG5ldyBTZXQoW1xuXHQndGhlJywnYScsJ2FuJywnYW5kJywnb3InLCdpbicsJ2lzJywnaXQnLCdvZicsJ3RvJywnZm9yJywnb24nLCd3aXRoJywnYXMnLFxuXHQnYXQnLCdieScsJ2Zyb20nLCdiZScsJ3dhcycsJ3dlcmUnLCdiZWVuJywndGhhdCcsJ3RoaXMnLCdhcmUnLCdoYXZlJywnaGFzJyxcblx0J2hhZCcsJ25vdCcsJ2J1dCcsJ2NhbicsJ2FsbCcsJ2lmJywndGhleScsJ3RoZWlyJywnbW9yZScsJ3dpbGwnLCd3b3VsZCcsXG5cdCdjb3VsZCcsJ3Nob3VsZCcsJ2Fsc28nLCdqdXN0JywnYWJvdXQnLCd3aGVuJywndGhlbicsJ3RoYW4nLCdpbnRvJywnb3ZlcicsXG5cdCd1c2UnLCd1c2VkJywndXNpbmcnLCduZXcnLCdvbmUnLCd0d28nLCdtYXknLCdob3cnLCd3aGF0JywnaXRzJywnd2hpY2gnLFxuXSk7XG5cbmZ1bmN0aW9uIHRva2VuaXplKHRleHQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcblx0cmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9gYGBbXFxzXFxTXSo/YGBgL2csICcgJykgICAvLyBkcm9wIGNvZGUgYmxvY2tzXG5cdFx0LnJlcGxhY2UoL1xcW1xcWyhbXlxcXV0rKVxcXVxcXS9nLCAnJDEnKSAvLyB1bndyYXAgd2lraWxpbmtzXG5cdFx0LnJlcGxhY2UoL1teYS16MC05XFxzXS9nLCAnICcpXG5cdFx0LnNwbGl0KC9cXHMrLylcblx0XHQuZmlsdGVyKHQgPT4gdC5sZW5ndGggPiAyICYmICFTVE9QV09SRFMuaGFzKHQpKTtcbn1cblxuZnVuY3Rpb24gY29zaW5lU2ltKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSk6IG51bWJlciB7XG5cdGxldCBkb3QgPSAwLCBuYSA9IDAsIG5iID0gMDtcblx0Y29uc3QgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBkb3QgKz0gYVtpXSpiW2ldOyBuYSArPSBhW2ldKmFbaV07IG5iICs9IGJbaV0qYltpXTsgfVxuXHRjb25zdCBkZW5vbSA9IE1hdGguc3FydChuYSkgKiBNYXRoLnNxcnQobmIpO1xuXHRyZXR1cm4gZGVub20gPiAwID8gZG90IC8gZGVub20gOiAwO1xufVxuXG5jbGFzcyBCTTI1SW5kZXgge1xuXHRwcml2YXRlIHRmICAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgbnVtYmVyPj4oKTsgLy8gZG9jSWQgXHUyMTkyIHRlcm0gXHUyMTkyIGZyZXFcblx0cHJpdmF0ZSBkZiAgID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTsgICAgICAgICAgICAgICAvLyB0ZXJtIFx1MjE5MiAjZG9jc1xuXHRwcml2YXRlIGRsICAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpOyAgICAgICAgICAgICAgIC8vIGRvY0lkIFx1MjE5MiBsZW5ndGhcblx0cHJpdmF0ZSBhdmdkbCA9IDE7XG5cdHByaXZhdGUgTiAgICA9IDA7XG5cdHByaXZhdGUgazEgICA9IDEuNTtcblx0cHJpdmF0ZSBiICAgID0gMC43NTtcblxuXHRhZGQoZG9jSWQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgdGVybXMgPSB0b2tlbml6ZSh0ZXh0KTtcblx0XHRjb25zdCBmcmVxICA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCB0IG9mIHRlcm1zKSBmcmVxLnNldCh0LCAoZnJlcS5nZXQodCkgPz8gMCkgKyAxKTtcblx0XHR0aGlzLnRmLnNldChkb2NJZCwgZnJlcSk7XG5cdFx0dGhpcy5kbC5zZXQoZG9jSWQsIHRlcm1zLmxlbmd0aCk7XG5cdFx0Zm9yIChjb25zdCB0IG9mIGZyZXEua2V5cygpKSB0aGlzLmRmLnNldCh0LCAodGhpcy5kZi5nZXQodCkgPz8gMCkgKyAxKTtcblx0XHR0aGlzLk4rKztcblx0fVxuXG5cdGZpbmFsaXplKCkge1xuXHRcdGNvbnN0IHRvdGFsID0gWy4uLnRoaXMuZGwudmFsdWVzKCldLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuXHRcdHRoaXMuYXZnZGwgPSB0aGlzLk4gPiAwID8gdG90YWwgLyB0aGlzLk4gOiAxO1xuXHR9XG5cblx0c2NvcmUoZG9jSWQ6IHN0cmluZywgcXVlcnlUZXJtczogc3RyaW5nW10pOiBudW1iZXIge1xuXHRcdGNvbnN0IGZyZXEgPSB0aGlzLnRmLmdldChkb2NJZCk7XG5cdFx0aWYgKCFmcmVxKSByZXR1cm4gMDtcblx0XHRjb25zdCBkbCA9IHRoaXMuZGwuZ2V0KGRvY0lkKSA/PyAxO1xuXHRcdGxldCBzID0gMDtcblx0XHRmb3IgKGNvbnN0IHQgb2YgcXVlcnlUZXJtcykge1xuXHRcdFx0Y29uc3QgdGYgPSBmcmVxLmdldCh0KSA/PyAwO1xuXHRcdFx0aWYgKHRmID09PSAwKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IGRmICA9IHRoaXMuZGYuZ2V0KHQpID8/IDA7XG5cdFx0XHRjb25zdCBpZGYgPSBNYXRoLmxvZygodGhpcy5OIC0gZGYgKyAwLjUpIC8gKGRmICsgMC41KSArIDEpO1xuXHRcdFx0cyArPSBpZGYgKiAodGYgKiAodGhpcy5rMSArIDEpKSAvICh0ZiArIHRoaXMuazEgKiAoMSAtIHRoaXMuYiArIHRoaXMuYiAqIGRsIC8gdGhpcy5hdmdkbCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdC8qKiBUb3AtSyBkb2MgSURzIHNvcnRlZCBieSBCTTI1IHNjb3JlIGRlc2NlbmRpbmcgKi9cblx0dG9wSyhxdWVyeVRlcm1zOiBzdHJpbmdbXSwgayA9IDMwLCBtaW5TY29yZSA9IDAuNSk6IHN0cmluZ1tdIHtcblx0XHRjb25zdCBzY29yZXM6IFtzdHJpbmcsIG51bWJlcl1bXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZG9jSWQgb2YgdGhpcy50Zi5rZXlzKCkpIHtcblx0XHRcdGNvbnN0IHNjID0gdGhpcy5zY29yZShkb2NJZCwgcXVlcnlUZXJtcyk7XG5cdFx0XHRpZiAoc2MgPj0gbWluU2NvcmUpIHNjb3Jlcy5wdXNoKFtkb2NJZCwgc2NdKTtcblx0XHR9XG5cdFx0c2NvcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcblx0XHRyZXR1cm4gc2NvcmVzLnNsaWNlKDAsIGspLm1hcCgoW2lkXSkgPT4gaWQpO1xuXHR9XG59XG5cblxuY29uc3QgTk9ERV9DT0xPUlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdGF4aW9tOiAgICAgJyM0RTc5QTcnLCAgLy8gc3RlZWwgYmx1ZSAgICAgIFx1MjAxNCBpbnZhcmlhbnRzXG5cdHJ1bGU6ICAgICAgJyM0RTc5QTcnLCAgLy8gc3RlZWwgYmx1ZSAgICAgIFx1MjAxNCBpbnZhcmlhbnRzXG5cdGVudGl0eTogICAgJyM1OUExNEYnLCAgLy8gc2FnZSBncmVlbiAgICAgIFx1MjAxNCBvYmplY3RzXG5cdGNvbmNlcHQ6ICAgJyM3NkI3QjInLCAgLy8gc2xhdGUgdGVhbCAgICAgIFx1MjAxNCBpZGVhc1xuXHRpbmRleDogICAgICcjQkFCMEFDJywgIC8vIHdhcm0gZ3JheSAgICAgICBcdTIwMTQgbWV0YVxuXHRwcm9jZXNzOiAgICcjRjI4RTJCJywgIC8vIHdhcm0gYW1iZXIgICAgICBcdTIwMTQgYWN0aW9uc1xuXHRkZWNpc2lvbjogICcjRTE1NzU5JywgIC8vIG11dGVkIHJlZCAgICAgICBcdTIwMTQgY2hvaWNlc1xuXHRwYXR0ZXJuOiAgICcjQjA3QUExJywgIC8vIGR1c3R5IHB1cnBsZSAgICBcdTIwMTQgc3RydWN0dXJlc1xuXHRvdmVydmlldzogICcjOUM3NTVGJywgIC8vIGVhcnRoIGJyb3duICAgICBcdTIwMTQgb3ZlcnZpZXdzXG5cdHN5bnRoZXNpczogJyM5Qzc1NUYnLCAgLy8gZWFydGggYnJvd24gICAgIFx1MjAxNCBzeW50aGVzaXNcbn07XG5cbi8vIERvbWFpbiBjb2xvcnMgXHUyMDE0IGdlbmVyYXRlZCBmcm9tIGhhc2ggb2YgZG9tYWluIG5hbWVcbmNvbnN0IERPTUFJTl9QQUxFVFRFID0gW1xuXHQnIzFmNzdiNCcsJyNmZjdmMGUnLCcjMmNhMDJjJywnI2Q2MjcyOCcsJyM5NDY3YmQnLFxuXHQnIzhjNTY0YicsJyNlMzc3YzInLCcjN2Y3ZjdmJywnI2JjYmQyMicsJyMxN2JlY2YnLFxuXHQnI2FlYzdlOCcsJyNmZmJiNzgnLCcjOThkZjhhJywnI2ZmOTg5NicsJyNjNWIwZDUnLFxuXHQnI2M0OWM5NCcsJyNmN2I2ZDInLCcjZGJkYjhkJywnIzllZGFlNScsJyMzOTNiNzknLFxuXTtcbmZ1bmN0aW9uIGRvbWFpbkNvbG9yKGRvbWFpbjogc3RyaW5nKTogc3RyaW5nIHtcblx0bGV0IGggPSAwO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRvbWFpbi5sZW5ndGg7IGkrKykgaCA9IChNYXRoLmltdWwoMzEsIGgpICsgZG9tYWluLmNoYXJDb2RlQXQoaSkpID4+PiAwO1xuXHRyZXR1cm4gRE9NQUlOX1BBTEVUVEVbaCAlIERPTUFJTl9QQUxFVFRFLmxlbmd0aF07XG59XG5cbi8vIFNoYXBlIGVuY29kZXMgZXBpc3RlbWljIGNhdGVnb3J5XG5jb25zdCBOT0RFX1NIQVBFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0YXhpb206ICdkaWFtb25kJywgcnVsZTogJ2RpYW1vbmQnLCAgICAgICAgICAgICAgIC8vIGludmFyaWFudHNcblx0cHJvY2VzczogJ3NxdWFyZScsIGRlY2lzaW9uOiAnc3F1YXJlJywgICAgICAgICAgICAvLyBhY3Rpb25zXG5cdHBhdHRlcm46ICdoZXhhZ29uJywgb3ZlcnZpZXc6ICdoZXhhZ29uJywgc3ludGhlc2lzOiAnaGV4YWdvbicsICAvLyBzdHJ1Y3R1cmVzXG5cdGVudGl0eTogJ2NpcmNsZScsIGNvbmNlcHQ6ICdjaXJjbGUnLCBpbmRleDogJ2NpcmNsZScsICAgICAgICAgICAvLyBvYmplY3RzXG59O1xuY29uc3QgTEFZRVJfT1JERVIgPSBbJ0F4aW9tJywnRW50aXR5JywnUHJvY2VzcycsJ1BhdHRlcm4nLCdNZXRob2QnLCdDb25jZXB0JywnUnVsZScsJ092ZXJ2aWV3JywnRGVjaXNpb24nLCdTeW50aGVzaXMnXTtcbmNvbnN0IEVYQ0xVREVEX1BBVEhTID0gW1xuXHQnd2lraS90ZW1wbGF0ZXMvJywnd2lraS9ncmFwaC8nLCd3aWtpL2NvbXBpbGVkLycsXG5cdCd3aWtpL3VwZGF0ZXMvJywnd2lraS9NZXRhLycsJ3BpcGVsaW5lLycsJ3NjaGVtYS8nLCdvbnRvbG9neS8nLCdkb21haW5zLycsJ3Rvb2xzLycsJ2RvY3MvJyxcbl07XG5cbi8vIEdyYXBoIGZpbGUgcGF0dGVybiBcdTIwMTQgY29tcGlsZWQgZ3JhcGggbGl2ZXMgaW4gd2lraS9ncmFwaC88dGltZXN0YW1wPi1ncmFwaC5tZFxuY29uc3QgR1JBUEhfRklMRV9SRSA9IC9ed2lraVxcL2dyYXBoXFwvXFxkezh9VFxcZHs2fVotZ3JhcGhcXC5tZCQvO1xuLy8gRWRnZSB0YWJsZSByb3cgaW4gY29tcGlsZWQgZ3JhcGg6IFwifCBzb3VyY2UgfCBTcmNUeXBlXHUyMTkyVGd0VHlwZSB8IHRhcmdldCB8IGxhYmVsIHxcIlxuY29uc3QgR1JBUEhfRURHRV9SRSA9IC9eXFx8XFxzKihbXnxdKz8pXFxzKlxcfFxccypbQS1aYS16XStcdTIxOTJbQS1aYS16XStcXHMqXFx8XFxzKihbXnxdKz8pXFxzKlxcfFxccyooW158XSs/KVxccypcXHwvO1xuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgVHlwZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5pbnRlcmZhY2UgV2lraU5vZGUgZXh0ZW5kcyBTaW11bGF0aW9uTm9kZURhdHVtIHtcblx0aWQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBkb21haW46IHN0cmluZztcbn1cbmludGVyZmFjZSBXaWtpRWRnZSBleHRlbmRzIFNpbXVsYXRpb25MaW5rRGF0dW08V2lraU5vZGU+IHsgbGFiZWw6IHN0cmluZzsgfVxuaW50ZXJmYWNlIEFuYWx5dGljcyB7XG5cdG46IG51bWJlcjsgbTogbnVtYmVyOyBkZW5zaXR5OiBudW1iZXI7IGF2Z0RlZzogbnVtYmVyO1xuXHRvcnBoYW5zOiBudW1iZXI7IG9ycGhhbklkczogc3RyaW5nW107XG5cdGxheWVyczogeyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IGNvbG9yOiBzdHJpbmcgfVtdO1xuXHRlZGdlVHlwZXM6IHsgbGFiZWw6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W107XG5cdGh1YnM6IHsgaWQ6IHN0cmluZzsgZGVnOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9W107XG5cdGRvbWFpbnM6IHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH1bXTtcblx0ZGVncmVlT2Y6IE1hcDxzdHJpbmcsIG51bWJlcj47XG5cdGludHJhRG9tYWluT3V0OiBNYXA8c3RyaW5nLCBudW1iZXI+OyAgLy8gb3V0LWRlZ3JlZSB3aXRoaW4gc2FtZSBkb21haW5cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFZpZXcgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5pbnRlcmZhY2UgR3JhcGhTZXR0aW5ncyB7XG5cdHNob3dOb2RlTGFiZWxzOiBib29sZWFuO1xuXHRzaG93RWRnZUxhYmVsczogYm9vbGVhbjtcblx0c2hvd0Fycm93czogICAgIGJvb2xlYW47XG5cdHNpZGViYXJPcGVuOiAgICBib29sZWFuO1xuXHRzZW1TaWRlYmFyT3BlbjogYm9vbGVhbjtcblx0aGlkZGVuVHlwZXM6ICAgIHN0cmluZ1tdO1xuXHRsaW5rRGlzdDogICAgICAgbnVtYmVyO1xuXHRjaGFyZ2VTdHI6ICAgICAgbnVtYmVyO1xuXHRncmF2aXR5U3RyOiAgICAgbnVtYmVyO1xuXHRsYWJlbEZhZGVBdDogICAgbnVtYmVyO1xuXHRsYWJlbFNpemU6ICAgICAgbnVtYmVyO1xuXHRub2RlU2NhbGU6ICAgICAgbnVtYmVyOyAgLy8gbXVsdGlwbGllciBvdmVyIGRlZ3JlZS1iYXNlZCBzaXplXG5cdGVkZ2VXaWR0aDogICAgICBudW1iZXI7ICAvLyBiYXNlIHN0cm9rZS13aWR0aCBmb3IgZWRnZXNcblx0c2VhcmNoUXVlcnk6ICAgIHN0cmluZztcblx0c2VsZWN0ZWREb21haW5zOiBzdHJpbmdbXTtcblx0ZW1iZWRkaW5nRW5kcG9pbnQ6IHN0cmluZztcblx0ZW1iZWRkaW5nTW9kZWw6ICAgIHN0cmluZztcbn1cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEdyYXBoU2V0dGluZ3MgPSB7XG5cdHNob3dOb2RlTGFiZWxzOiB0cnVlLFxuXHRzaG93RWRnZUxhYmVsczogdHJ1ZSxcblx0c2hvd0Fycm93czogICAgIHRydWUsXG5cdHNpZGViYXJPcGVuOiAgICBmYWxzZSxcblx0c2VtU2lkZWJhck9wZW46IGZhbHNlLFxuXHRoaWRkZW5UeXBlczogICAgW10sXG5cdGxpbmtEaXN0OiAgICAgICA2MCxcblx0Y2hhcmdlU3RyOiAgICAgIDEyMCxcblx0Z3Jhdml0eVN0cjogICAgIDAuMDMsXG5cdGxhYmVsRmFkZUF0OiAgICAwLjksXG5cdGxhYmVsU2l6ZTogICAgICAxMCxcblx0bm9kZVNjYWxlOiAgICAgIDEuMCxcblx0ZWRnZVdpZHRoOiAgICAgIDEuMixcblx0c2VhcmNoUXVlcnk6ICAgICcnLFxuXHRzZWxlY3RlZERvbWFpbnM6IFtdLFxuXHRlbWJlZGRpbmdFbmRwb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTE0MzQnLFxuXHRlbWJlZGRpbmdNb2RlbDogICAgJ25vbWljLWVtYmVkLXRleHQnLFxufTtcblxuY2xhc3MgU2VtYW50aWNHcmFwaFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG5cdHByaXZhdGUgcGx1Z2luOiBMTE1XaWtpU2VtYW50aWNHcmFwaDtcblx0cHJpdmF0ZSBub2RlczogV2lraU5vZGVbXSA9IFtdO1xuXHRwcml2YXRlIGVkZ2VzOiBXaWtpRWRnZVtdID0gW107XG5cdHByaXZhdGUgYW5hbHl0aWNzOiBBbmFseXRpY3MgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzaW06IFJldHVyblR5cGU8dHlwZW9mIGZvcmNlU2ltdWxhdGlvbj4gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSB6b29tQmVoYXZpb3IhOiBab29tQmVoYXZpb3I8U1ZHU1ZHRWxlbWVudCwgdW5rbm93bj47XG5cblx0Ly8gdmlzaWJpbGl0eSBzdGF0ZVxuXHRwcml2YXRlIHNob3dOb2RlTGFiZWxzID0gdHJ1ZTtcblx0cHJpdmF0ZSBzaG93RWRnZUxhYmVscyA9IHRydWU7XG5cdHByaXZhdGUgc2hvd0Fycm93cyAgICAgPSB0cnVlO1xuXHRwcml2YXRlIHNpZGViYXJPcGVuICAgID0gZmFsc2U7XG5cdHByaXZhdGUgc2VtU2lkZWJhck9wZW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBoaWRkZW5UeXBlcyAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRwcml2YXRlIHNob3dPcnBoYW5zICAgID0gZmFsc2U7IC8vIG9ycGhhbiBub2RlcyBoaWRkZW4gYnkgZGVmYXVsdFxuXHRwcml2YXRlIHNlbGVjdGVkSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHNlYXJjaFF1ZXJ5ICAgID0gJyc7XG5cdHByaXZhdGUgc2VsZWN0ZWREb21haW5zID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdHByaXZhdGUgX2xhYmVsc1VzZXJTZXQgPSBmYWxzZTsgLy8gdHJ1ZSBvbmNlIHVzZXIgZXhwbGljaXRseSB0b2dnbGVzIGxhYmVsIGJ1dHRvblxuXG5cdC8vIHNlbWFudGljIHNlYXJjaCBzdGF0ZVxuXHRwcml2YXRlIGVtYmVkZGluZ0VuZHBvaW50ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTE0MzQnO1xuXHRwcml2YXRlIGVtYmVkZGluZ01vZGVsICAgID0gJ25vbWljLWVtYmVkLXRleHQnO1xuXHRwcml2YXRlIGJtMjVJbmRleDogIEJNMjVJbmRleCB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIGVtYmVkZGluZ3M6IE1hcDxzdHJpbmcsIG51bWJlcltdPiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHNlbWFudGljSWRzICAgICA9IG5ldyBTZXQ8c3RyaW5nPigpOyAvLyBsYXN0IHNlbWFudGljIHJlc3VsdFxuXHRwcml2YXRlIHNlbVNlYXJjaFRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuXG5cdC8vIHBoeXNpY3Mgc3RhdGVcblx0cHJpdmF0ZSBsaW5rRGlzdCAgICA9IDYwO1xuXHRwcml2YXRlIGNoYXJnZVN0ciAgID0gMTIwO1xuXHRwcml2YXRlIGdyYXZpdHlTdHIgID0gMC4wMztcblx0cHJpdmF0ZSBsYWJlbEZhZGVBdCA9IDAuOTtcblx0cHJpdmF0ZSBsYWJlbFNpemUgICA9IDEwO1xuXHRwcml2YXRlIG5vZGVTY2FsZSAgID0gMS4wO1xuXHRwcml2YXRlIGVkZ2VXaWR0aCAgID0gMS4yO1xuXG5cdC8vIHpvb20gc3RhdGUgXHUyMDE0IHBlcnNpc3RlZCBhY3Jvc3MgcmVmcmVzaGVzXG5cdHByaXZhdGUgc2F2ZWRUcmFuc2Zvcm06IHsgazogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cblx0Ly8gcGVuZGluZyByQUYgaGFuZGxlIFx1MjAxNCBjYW5jZWxsZWQgYmVmb3JlIGVhY2ggcmVidWlsZFxuXHRwcml2YXRlIHBlbmRpbmdSYWY6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHQvLyBndWFyZCBhZ2FpbnN0IGNvbmN1cnJlbnQgYXN5bmMgcmVmcmVzaGVzXG5cdHByaXZhdGUgaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cblx0Ly8gbGl2ZSBEMyBzZWxlY3Rpb25zXG5cdHByaXZhdGUgc2VsTm9kZUVsOiAgICBhbnkgPSBudWxsO1xuXHRwcml2YXRlIHNlbEVkZ2VMaW5lOiAgYW55ID0gbnVsbDtcblx0cHJpdmF0ZSBzZWxFZGdlTGFiZWw6IGFueSA9IG51bGw7XG5cdHByaXZhdGUgc2VsTm9kZUxhYmVsOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIGZvY3VzTm9kZUZuOiAoKGlkOiBzdHJpbmcpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3ZnRWw6IFNWR1NWR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0Ly8gbGF5ZXIgcm93IHJlZmVyZW5jZXMgZm9yIHRvZ2dsZSB1cGRhdGVzIChubyBmdWxsIHNpZGViYXIgcmVidWlsZCBuZWVkZWQpXG5cdHByaXZhdGUgbGF5ZXJSb3dNYXAgPSBuZXcgTWFwPHN0cmluZywgSFRNTEVsZW1lbnQ+KCk7XG5cblx0Ly8gYWRqYWNlbmN5IGZvciBkaW0tb24tc2VsZWN0XG5cdHByaXZhdGUgbmVpZ2hib3JTZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG5cdC8vIGF1dG8tcmVmcmVzaFxuXHRwcml2YXRlIHJlZnJlc2hUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobGVhZjogYW55LCBwbHVnaW46IExMTVdpa2lTZW1hbnRpY0dyYXBoKSB7XG5cdFx0c3VwZXIobGVhZik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5wbHVnaW4ubG9hZERhdGEoKSBhcyBQYXJ0aWFsPEdyYXBoU2V0dGluZ3M+IHwgbnVsbDtcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcblx0XHRjb25zdCBzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTLCAuLi5kYXRhIH07XG5cdFx0dGhpcy5zaG93Tm9kZUxhYmVscyA9IHMuc2hvd05vZGVMYWJlbHM7XG5cdFx0dGhpcy5zaG93RWRnZUxhYmVscyA9IHMuc2hvd0VkZ2VMYWJlbHM7XG5cdFx0dGhpcy5zaG93QXJyb3dzICAgICA9IHMuc2hvd0Fycm93cztcblx0XHR0aGlzLnNpZGViYXJPcGVuICAgID0gcy5zaWRlYmFyT3Blbjtcblx0XHR0aGlzLnNlbVNpZGViYXJPcGVuID0gcy5zZW1TaWRlYmFyT3BlbiA/PyBmYWxzZTtcblx0XHR0aGlzLmhpZGRlblR5cGVzICAgID0gbmV3IFNldChzLmhpZGRlblR5cGVzKTtcblx0XHR0aGlzLmxpbmtEaXN0ICAgICAgID0gcy5saW5rRGlzdDtcblx0XHR0aGlzLmNoYXJnZVN0ciAgICAgID0gcy5jaGFyZ2VTdHI7XG5cdFx0dGhpcy5ncmF2aXR5U3RyICAgICA9IHMuZ3Jhdml0eVN0cjtcblx0XHR0aGlzLmxhYmVsRmFkZUF0ICAgID0gcy5sYWJlbEZhZGVBdCA/PyAwLjk7XG5cdFx0dGhpcy5sYWJlbFNpemUgICAgICA9IHMubGFiZWxTaXplICAgPz8gMTA7XG5cdFx0dGhpcy5ub2RlU2NhbGUgICAgICA9IHMubm9kZVNjYWxlICAgPz8gMS4wO1xuXHRcdHRoaXMuZWRnZVdpZHRoICAgICAgPSBzLmVkZ2VXaWR0aCAgID8/IDEuMjtcblx0XHR0aGlzLnNlYXJjaFF1ZXJ5ICAgID0gcy5zZWFyY2hRdWVyeTtcblx0XHR0aGlzLnNlbGVjdGVkRG9tYWlucyAgPSBuZXcgU2V0KHMuc2VsZWN0ZWREb21haW5zID8/IFtdKTtcblx0XHR0aGlzLmVtYmVkZGluZ0VuZHBvaW50ID0gcy5lbWJlZGRpbmdFbmRwb2ludCA/PyAnaHR0cDovL2xvY2FsaG9zdDoxMTQzNCc7XG5cdFx0dGhpcy5lbWJlZGRpbmdNb2RlbCAgICA9IHMuZW1iZWRkaW5nTW9kZWwgICAgPz8gJ25vbWljLWVtYmVkLXRleHQnO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlU2V0dGluZ3MoKSB7XG5cdFx0Y29uc3QgczogR3JhcGhTZXR0aW5ncyA9IHtcblx0XHRcdHNob3dOb2RlTGFiZWxzOiB0aGlzLnNob3dOb2RlTGFiZWxzLFxuXHRcdFx0c2hvd0VkZ2VMYWJlbHM6IHRoaXMuc2hvd0VkZ2VMYWJlbHMsXG5cdFx0XHRzaG93QXJyb3dzOiAgICAgdGhpcy5zaG93QXJyb3dzLFxuXHRcdFx0c2lkZWJhck9wZW46ICAgIHRoaXMuc2lkZWJhck9wZW4sXG5cdFx0XHRzZW1TaWRlYmFyT3BlbjogdGhpcy5zZW1TaWRlYmFyT3Blbixcblx0XHRcdGhpZGRlblR5cGVzOiAgICBbLi4udGhpcy5oaWRkZW5UeXBlc10sXG5cdFx0XHRsaW5rRGlzdDogICAgICAgdGhpcy5saW5rRGlzdCxcblx0XHRcdGNoYXJnZVN0cjogICAgICB0aGlzLmNoYXJnZVN0cixcblx0XHRcdGdyYXZpdHlTdHI6ICAgICB0aGlzLmdyYXZpdHlTdHIsXG5cdFx0XHRsYWJlbEZhZGVBdDogICAgdGhpcy5sYWJlbEZhZGVBdCxcblx0XHRcdGxhYmVsU2l6ZTogICAgICB0aGlzLmxhYmVsU2l6ZSxcblx0XHRcdG5vZGVTY2FsZTogICAgICB0aGlzLm5vZGVTY2FsZSxcblx0XHRcdGVkZ2VXaWR0aDogICAgICB0aGlzLmVkZ2VXaWR0aCxcblx0XHRcdHNlYXJjaFF1ZXJ5OiAgICB0aGlzLnNlYXJjaFF1ZXJ5LFxuXHRcdFx0c2VsZWN0ZWREb21haW5zOiBbLi4udGhpcy5zZWxlY3RlZERvbWFpbnNdLFxuXHRcdFx0ZW1iZWRkaW5nRW5kcG9pbnQ6IHRoaXMuZW1iZWRkaW5nRW5kcG9pbnQsXG5cdFx0XHRlbWJlZGRpbmdNb2RlbDogICAgdGhpcy5lbWJlZGRpbmdNb2RlbCxcblx0XHR9O1xuXHRcdHRoaXMucGx1Z2luLnNhdmVEYXRhKHMpO1xuXHR9XG5cblx0Z2V0Vmlld1R5cGUoKSAgICB7IHJldHVybiBWSUVXX1RZUEU7IH1cblx0Z2V0RGlzcGxheVRleHQoKSB7IHJldHVybiAnU2VtYW50aWMgR3JhcGgnOyB9XG5cdGdldEljb24oKSAgICAgICAgeyByZXR1cm4gJ2dpdC1mb3JrJzsgfVxuXG5cdGFzeW5jIG9uT3BlbigpIHtcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXHRcdGF3YWl0IHRoaXMuYnVpbGRHcmFwaCgpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0Ly8gQnVpbGQgc2VhcmNoIGluZGljZXMgaW4gYmFja2dyb3VuZCBcdTIwMTQgZG9uJ3QgYmxvY2sgcmVuZGVyXG5cdFx0dGhpcy5idWlsZFNlYXJjaEluZGV4KCk7XG5cdFx0dGhpcy5sb2FkRW1iZWRkaW5ncygpO1xuXHRcdC8vIEF1dG8tcmVmcmVzaCBvbmx5IGZvciB3aWtpLyBmaWxlcyBcdTIwMTQgaWdub3JlIGpvdXJuYWwsIGFjdGl2aXRpZXMsIGV0Yy5cblx0XHRjb25zdCBpc1dpa2lGaWxlID0gKGY6IHsgcGF0aDogc3RyaW5nIH0pID0+XG5cdFx0XHRmLnBhdGguc3RhcnRzV2l0aCgnd2lraS8nKSAmJiAhRVhDTFVERURfUEFUSFMuc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ21vZGlmeScsIGYgPT4geyBpZiAoaXNXaWtpRmlsZShmKSkgdGhpcy5zY2hlZHVsZVJlZnJlc2goKTsgfSkpO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignY3JlYXRlJywgZiA9PiB7IGlmIChpc1dpa2lGaWxlKGYpKSB0aGlzLnNjaGVkdWxlUmVmcmVzaCgpOyB9KSk7XG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdkZWxldGUnLCBmID0+IHsgaWYgKGlzV2lraUZpbGUoZikpIHRoaXMuc2NoZWR1bGVSZWZyZXNoKCk7IH0pKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ3JlbmFtZScsIChmKSA9PiB7IGlmIChpc1dpa2lGaWxlKGYpKSB0aGlzLnNjaGVkdWxlUmVmcmVzaCgpOyB9KSk7XG5cdH1cblxuXHRhc3luYyBvbkNsb3NlKCkge1xuXHRcdHRoaXMuc2ltPy5zdG9wKCk7XG5cdFx0aWYgKHRoaXMucmVmcmVzaFRpbWVyICE9PSBudWxsKSB7IHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWZyZXNoVGltZXIpOyB0aGlzLnJlZnJlc2hUaW1lciA9IG51bGw7IH1cblx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBjYXB0dXJlWm9vbSgpIHtcblx0XHRpZiAodGhpcy5zdmdFbCAmJiB0aGlzLnpvb21CZWhhdmlvcikge1xuXHRcdFx0Y29uc3QgdCA9IHpvb21UcmFuc2Zvcm0odGhpcy5zdmdFbCk7ICAvLyBnZXR0ZXIgXHUyMDE0IE5PVCB6b29tLnRyYW5zZm9ybShzZWwpIHdoaWNoIGlzIGEgc2V0dGVyIVxuXHRcdFx0dGhpcy5zYXZlZFRyYW5zZm9ybSA9IHsgazogdC5rLCB4OiB0LngsIHk6IHQueSB9O1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2NoZWR1bGVSZWZyZXNoKCkge1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlZnJlc2hUaW1lcik7XG5cdFx0dGhpcy5yZWZyZXNoVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlZnJlc2hUaW1lciA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5pc1JlZnJlc2hpbmcpIHJldHVybjsgLy8gc2tpcCBpZiBwcmV2aW91cyByZWZyZXNoIHN0aWxsIHJ1bm5pbmdcblx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY2FwdHVyZVpvb20oKTtcblx0XHRcdFx0YXdhaXQgdGhpcy5idWlsZEdyYXBoKCk7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sIDE1MDApO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBtYW51YWxSZWZyZXNoKCkge1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgeyB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVmcmVzaFRpbWVyKTsgdGhpcy5yZWZyZXNoVGltZXIgPSBudWxsOyB9XG5cdFx0aWYgKHRoaXMuaXNSZWZyZXNoaW5nKSByZXR1cm47XG5cdFx0dGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmNhcHR1cmVab29tKCk7XG5cdFx0XHRhd2FpdCB0aGlzLmJ1aWxkR3JhcGgoKTtcblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDEuIFJlYWQgY29tcGlsZWQgZ3JhcGggZmlsZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0YXN5bmMgYnVpbGRHcmFwaCgpIHtcblx0XHQvLyBGaW5kIHRoZSBsYXRlc3QgY29tcGlsZWQgZ3JhcGggZmlsZTogd2lraS9ncmFwaC88dGltZXN0YW1wPi1ncmFwaC5tZFxuXHRcdGNvbnN0IGdyYXBoRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKClcblx0XHRcdC5maWx0ZXIoZiA9PiBHUkFQSF9GSUxFX1JFLnRlc3QoZi5wYXRoKSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBiLmJhc2VuYW1lLmxvY2FsZUNvbXBhcmUoYS5iYXNlbmFtZSkpOyAvLyBuZXdlc3QgZmlyc3RcblxuXHRcdGlmIChncmFwaEZpbGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Ly8gRmFsbGJhY2s6IG5vIGNvbXBpbGVkIGdyYXBoIGZvdW5kXG5cdFx0XHR0aGlzLm5vZGVzID0gW107XG5cdFx0XHR0aGlzLmVkZ2VzID0gW107XG5cdFx0XHR0aGlzLmFuYWx5dGljcyA9IHRoaXMuY29tcHV0ZUFuYWx5dGljcygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdyYXBoRmlsZSA9IGdyYXBoRmlsZXNbMF07XG5cdFx0Y29uc29sZS5sb2coYFtsbG0td2lraS1ncmFwaF0gcmVhZGluZyBjb21waWxlZCBncmFwaDogJHtncmFwaEZpbGUucGF0aH1gKTtcblx0XHRjb25zdCBjb250ZW50ICAgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGdyYXBoRmlsZSk7XG5cdFx0Y29uc3QgbGluZXMgICAgID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG5cblx0XHQvLyBQaGFzZSAxOiBjb2xsZWN0IG5vZGUgbWV0YWRhdGEgZnJvbSB3aWtpIHBhZ2VzICh0eXBlLCBkb21haW4sIHRpdGxlKVxuXHRcdC8vIFdlIHN0aWxsIG5lZWQgZnJvbnRtYXR0ZXIgXHUyMDE0IGJ1dCBvbmx5IGZvciBkaXNwbGF5LCBub3QgZm9yIGVkZ2UgZXh0cmFjdGlvbi5cblx0XHRjb25zdCBub2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIFdpa2lOb2RlPigpO1xuXHRcdGNvbnN0IHdpa2lGaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoZiA9PlxuXHRcdFx0Zi5wYXRoLnN0YXJ0c1dpdGgoJ3dpa2kvJykgJiYgIUVYQ0xVREVEX1BBVEhTLnNvbWUoZXggPT4gZi5wYXRoLmluY2x1ZGVzKGV4KSkpO1xuXG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHdpa2lGaWxlcykge1xuXHRcdFx0Y29uc3QgZm0gPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIgPz8ge307XG5cdFx0XHRub2RlTWFwLnNldChmaWxlLmJhc2VuYW1lLCB7XG5cdFx0XHRcdGlkOiAgICAgZmlsZS5iYXNlbmFtZSxcblx0XHRcdFx0dGl0bGU6ICAoZm1bJ3RpdGxlJ10gID8/IGZpbGUuYmFzZW5hbWUpIGFzIHN0cmluZyxcblx0XHRcdFx0dHlwZTogICAoKGZtWyd0eXBlJ10gID8/ICd1bmtub3duJykgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRkb21haW46IChmbVsnZG9tYWluJ10gPz8gJycpIGFzIHN0cmluZyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFBoYXNlIDI6IHBhcnNlIGVkZ2UgdGFibGUgZnJvbSBjb21waWxlZCBncmFwaFxuXHRcdC8vIFRhYmxlIHJvd3MgYWZ0ZXIgXCIjIyBFZGdlIExpc3RcIiBoZWFkZXJcblx0XHRjb25zdCByYXdFZGdlczogeyBzcmM6IHN0cmluZzsgdGd0OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdID0gW107XG5cdFx0bGV0IGluRWRnZVRhYmxlID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG5cdFx0XHRpZiAobGluZS5zdGFydHNXaXRoKCcjIyBFZGdlIExpc3QnKSkgeyBpbkVkZ2VUYWJsZSA9IHRydWU7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZiAoaW5FZGdlVGFibGUgJiYgbGluZS5zdGFydHNXaXRoKCcjIyAnKSkgeyBpbkVkZ2VUYWJsZSA9IGZhbHNlOyBjb250aW51ZTsgfVxuXHRcdFx0aWYgKCFpbkVkZ2VUYWJsZSkgY29udGludWU7XG5cdFx0XHRjb25zdCBtID0gR1JBUEhfRURHRV9SRS5leGVjKGxpbmUpO1xuXHRcdFx0aWYgKCFtKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IFssIHNyYywgdGd0LCBsYWJlbF0gPSBtO1xuXHRcdFx0aWYgKHNyYyA9PT0gJ1NvdXJjZScpIGNvbnRpbnVlOyAvLyBoZWFkZXIgcm93XG5cdFx0XHRyYXdFZGdlcy5wdXNoKHsgc3JjOiBzcmMudHJpbSgpLCB0Z3Q6IHRndC50cmltKCksIGxhYmVsOiBsYWJlbC50cmltKCkgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gT25seSBpbmNsdWRlIG5vZGVzIHRoYXQgYXBwZWFyIGluIHRoZSBncmFwaCAoaGF2ZSBhdCBsZWFzdCBvbmUgZWRnZSlcblx0XHQvLyBwbHVzIGtlZXAgaXNvbGF0ZWQgdHlwZWQgbm9kZXMgZm9yIG9ycGhhbiBkaXNwbGF5XG5cdFx0dGhpcy5ub2RlcyA9IEFycmF5LmZyb20obm9kZU1hcC52YWx1ZXMoKSk7XG5cdFx0dGhpcy5lZGdlcyA9IHJhd0VkZ2VzXG5cdFx0XHQuZmlsdGVyKGUgPT4gbm9kZU1hcC5oYXMoZS5zcmMpICYmIG5vZGVNYXAuaGFzKGUudGd0KSlcblx0XHRcdC5tYXAoZSA9PiAoeyBzb3VyY2U6IGUuc3JjLCB0YXJnZXQ6IGUudGd0LCBsYWJlbDogZS5sYWJlbCB9KSk7XG5cdFx0dGhpcy5hbmFseXRpY3MgPSB0aGlzLmNvbXB1dGVBbmFseXRpY3MoKTtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAxYi4gQk0yNSBzZWFyY2ggaW5kZXggXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYXN5bmMgYnVpbGRTZWFyY2hJbmRleCgpIHtcblx0XHRjb25zdCBpZHggPSBuZXcgQk0yNUluZGV4KCk7XG5cdFx0Y29uc3Qgd2lraUZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcihmID0+XG5cdFx0XHRmLnBhdGguc3RhcnRzV2l0aCgnd2lraS8nKSAmJiAhRVhDTFVERURfUEFUSFMuc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKSk7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwod2lraUZpbGVzLm1hcChhc3luYyAoZmlsZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmF3ICA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQoZmlsZSk7XG5cdFx0XHRjb25zdCBib2R5ID0gcmF3LnJlcGxhY2UoL14tLS1bXFxzXFxTXSo/LS0tXFxuPy8sICcnKTsgLy8gc3RyaXAgZnJvbnRtYXR0ZXJcblx0XHRcdGlkeC5hZGQoZmlsZS5iYXNlbmFtZSwgZmlsZS5iYXNlbmFtZSArICcgJyArIGJvZHkpO1xuXHRcdH0pKTtcblx0XHRpZHguZmluYWxpemUoKTtcblx0XHR0aGlzLmJtMjVJbmRleCA9IGlkeDtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAxYy4gTG9hZCBwcmUtY29tcHV0ZWQgZW1iZWRkaW5ncyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cHJpdmF0ZSBhc3luYyBsb2FkRW1iZWRkaW5ncygpIHtcblx0XHRjb25zdCBlbWJGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKCd3aWtpL3NlYXJjaC9lbWJlZGRpbmdzLmpzb24nKTtcblx0XHRpZiAoIShlbWJGaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJhdyAgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGVtYkZpbGUpO1xuXHRcdFx0Y29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgbnVtYmVyW10+ID0gSlNPTi5wYXJzZShyYXcpO1xuXHRcdFx0dGhpcy5lbWJlZGRpbmdzID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhkYXRhKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhgW2xsbS13aWtpLWdyYXBoXSBsb2FkZWQgJHt0aGlzLmVtYmVkZGluZ3Muc2l6ZX0gZW1iZWRkaW5nc2ApO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybignW2xsbS13aWtpLWdyYXBoXSBjb3VsZCBub3QgbG9hZCBlbWJlZGRpbmdzOicsIGUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAxZC4gU2VtYW50aWMgc2VhcmNoIHZpYSBPbGxhbWEgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYXN5bmMgcnVuU2VtYW50aWNTZWFyY2gocXVlcnk6IHN0cmluZyk6IFByb21pc2U8U2V0PHN0cmluZz4+IHtcblx0XHRpZiAoIXRoaXMuZW1iZWRkaW5ncyB8fCAhcXVlcnkudHJpbSgpKSByZXR1cm4gbmV3IFNldCgpO1xuXHRcdGxldCBxdWVyeVZlYzogbnVtYmVyW107XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmVtYmVkZGluZ0VuZHBvaW50fS9hcGkvZW1iZWRkaW5nc2AsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1vZGVsOiB0aGlzLmVtYmVkZGluZ01vZGVsLCBwcm9tcHQ6IHF1ZXJ5IH0pLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoIXJlc3Aub2spIHJldHVybiBuZXcgU2V0KCk7XG5cdFx0XHRxdWVyeVZlYyA9IChhd2FpdCByZXNwLmpzb24oKSkuZW1iZWRkaW5nIGFzIG51bWJlcltdO1xuXHRcdH0gY2F0Y2ggeyByZXR1cm4gbmV3IFNldCgpOyB9XG5cblx0XHRjb25zdCBzY29yZXM6IFtzdHJpbmcsIG51bWJlcl1bXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgW2lkLCB2ZWNdIG9mIHRoaXMuZW1iZWRkaW5ncykge1xuXHRcdFx0c2NvcmVzLnB1c2goW2lkLCBjb3NpbmVTaW0ocXVlcnlWZWMsIHZlYyldKTtcblx0XHR9XG5cdFx0c2NvcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcblx0XHQvLyBLZWVwIG5vZGVzIGFib3ZlIDAuNSBzaW1pbGFyaXR5LCBtYXggMjVcblx0XHRyZXR1cm4gbmV3IFNldChzY29yZXMuc2xpY2UoMCwgMjUpLmZpbHRlcigoWywgc10pID0+IHMgPj0gMC41KS5tYXAoKFtpZF0pID0+IGlkKSk7XG5cdH1cblxuXG5cdHByaXZhdGUgY29tcHV0ZUFuYWx5dGljcygpOiBBbmFseXRpY3Mge1xuXHRcdGNvbnN0IGRlZ3JlZU9mID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IGUgb2YgdGhpcy5lZGdlcykge1xuXHRcdFx0Y29uc3QgcyA9IGUuc291cmNlIGFzIHN0cmluZywgdCA9IGUudGFyZ2V0IGFzIHN0cmluZztcblx0XHRcdGRlZ3JlZU9mLnNldChzLCAoZGVncmVlT2YuZ2V0KHMpPz8wKSsxKTtcblx0XHRcdGRlZ3JlZU9mLnNldCh0LCAoZGVncmVlT2YuZ2V0KHQpPz8wKSsxKTtcblx0XHR9XG5cblx0XHQvLyBPdXQtZGVncmVlIHdpdGhpbiBzYW1lIGRvbWFpbiAocHJveHkgZm9yIFwibG9jYWwgY2hpbGRyZW4gY291bnRcIilcblx0XHRjb25zdCBub2RlQnlJZCA9IG5ldyBNYXA8c3RyaW5nLCBXaWtpTm9kZT4odGhpcy5ub2Rlcy5tYXAobmQgPT4gW25kLmlkLCBuZF0pKTtcblx0XHRjb25zdCBpbnRyYURvbWFpbk91dCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCBlIG9mIHRoaXMuZWRnZXMpIHtcblx0XHRcdGNvbnN0IHMgPSBlLnNvdXJjZSBhcyBzdHJpbmcsIHQgPSBlLnRhcmdldCBhcyBzdHJpbmc7XG5cdFx0XHRjb25zdCBzcmNEb21haW4gPSBub2RlQnlJZC5nZXQocyk/LmRvbWFpbjtcblx0XHRcdGNvbnN0IHRndERvbWFpbiA9IG5vZGVCeUlkLmdldCh0KT8uZG9tYWluO1xuXHRcdFx0aWYgKHNyY0RvbWFpbiAmJiBzcmNEb21haW4gPT09IHRndERvbWFpbikge1xuXHRcdFx0XHRpbnRyYURvbWFpbk91dC5zZXQocywgKGludHJhRG9tYWluT3V0LmdldChzKT8/MCkgKyAxKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgbiA9IHRoaXMubm9kZXMubGVuZ3RoLCBtID0gdGhpcy5lZGdlcy5sZW5ndGg7XG5cdFx0Y29uc3QgZGVuc2l0eSAgPSBuPjEgPyArKG0vKG4qKG4tMSkpKS50b0ZpeGVkKDQpIDogMDtcblx0XHRjb25zdCBhdmdEZWcgICA9IG4+MCA/ICsoWy4uLmRlZ3JlZU9mLnZhbHVlcygpXS5yZWR1Y2UoKGEsYik9PmErYiwwKS9uKS50b0ZpeGVkKDIpIDogMDtcblx0XHRjb25zdCBvcnBoYW5JZHMgPSB0aGlzLm5vZGVzLmZpbHRlcihuZD0+IWRlZ3JlZU9mLmhhcyhuZC5pZCkpLm1hcChuZD0+bmQuaWQpO1xuXG5cdFx0Y29uc3QgdHlwZUNvdW50cyA9IG5ldyBNYXA8c3RyaW5nLG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IG5kIG9mIHRoaXMubm9kZXMpIHR5cGVDb3VudHMuc2V0KG5kLnR5cGUsKHR5cGVDb3VudHMuZ2V0KG5kLnR5cGUpPz8wKSsxKTtcblx0XHRjb25zdCBsYXllcnMgPSBMQVlFUl9PUkRFUi5tYXAobmFtZT0+KHtcblx0XHRcdG5hbWUsIGNvbG9yOiBOT0RFX0NPTE9SU1tuYW1lLnRvTG93ZXJDYXNlKCldPz8nIzg4OCcsXG5cdFx0XHRjb3VudDogdHlwZUNvdW50cy5nZXQobmFtZS50b0xvd2VyQ2FzZSgpKT8/MCxcblx0XHR9KSk7XG5cblx0XHRjb25zdCBlZGdlQ250ID0gbmV3IE1hcDxzdHJpbmcsbnVtYmVyPigpO1xuXHRcdGZvciAoY29uc3QgZSBvZiB0aGlzLmVkZ2VzKSBlZGdlQ250LnNldChlLmxhYmVsLChlZGdlQ250LmdldChlLmxhYmVsKT8/MCkrMSk7XG5cdFx0Y29uc3QgZWRnZVR5cGVzID0gWy4uLmVkZ2VDbnQuZW50cmllcygpXS5zb3J0KChhLGIpPT5iWzFdLWFbMV0pLm1hcCgoW2xhYmVsLGNvdW50XSk9Pih7bGFiZWwsY291bnR9KSk7XG5cblx0XHRjb25zdCBodWJzID0gdGhpcy5ub2Rlcy5maWx0ZXIobmQ9PmRlZ3JlZU9mLmhhcyhuZC5pZCkpXG5cdFx0XHQuc29ydCgoYSxiKT0+KGRlZ3JlZU9mLmdldChiLmlkKT8/MCktKGRlZ3JlZU9mLmdldChhLmlkKT8/MCkpLnNsaWNlKDAsMTApXG5cdFx0XHQubWFwKG5kPT4oe2lkOm5kLmlkLGRlZzpkZWdyZWVPZi5nZXQobmQuaWQpISx0eXBlOm5kLnR5cGV9KSk7XG5cblx0XHRjb25zdCBkb21haW5DbnQgPSBuZXcgTWFwPHN0cmluZyxudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCBuZCBvZiB0aGlzLm5vZGVzKSBpZihuZC5kb21haW4pIGRvbWFpbkNudC5zZXQobmQuZG9tYWluLChkb21haW5DbnQuZ2V0KG5kLmRvbWFpbik/PzApKzEpO1xuXHRcdGNvbnN0IGRvbWFpbnMgPSBbLi4uZG9tYWluQ250LmVudHJpZXMoKV0uc29ydCgoYSxiKT0+YlsxXS1hWzFdKS5tYXAoKFtuYW1lLGNvdW50XSk9Pih7bmFtZSxjb3VudH0pKTtcblxuXHRcdHJldHVybiB7bixtLGRlbnNpdHksYXZnRGVnLG9ycGhhbnM6b3JwaGFuSWRzLmxlbmd0aCxvcnBoYW5JZHMsbGF5ZXJzLGVkZ2VUeXBlcyxodWJzLGRvbWFpbnMsZGVncmVlT2YsaW50cmFEb21haW5PdXR9O1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDMuIERpbSBoZWxwZXJzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRwcml2YXRlIGJ1aWxkQWRqYWNlbmN5KHNpbUVkZ2VzOiB7c291cmNlOldpa2lOb2RlO3RhcmdldDpXaWtpTm9kZX1bXSkge1xuXHRcdGNvbnN0IGFkaiA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblx0XHRmb3IgKGNvbnN0IGUgb2Ygc2ltRWRnZXMpIHtcblx0XHRcdGlmICghYWRqLmhhcyhlLnNvdXJjZS5pZCkpIGFkai5zZXQoZS5zb3VyY2UuaWQsIG5ldyBTZXQoKSk7XG5cdFx0XHRpZiAoIWFkai5oYXMoZS50YXJnZXQuaWQpKSBhZGouc2V0KGUudGFyZ2V0LmlkLCBuZXcgU2V0KCkpO1xuXHRcdFx0YWRqLmdldChlLnNvdXJjZS5pZCkhLmFkZChlLnRhcmdldC5pZCk7XG5cdFx0XHRhZGouZ2V0KGUudGFyZ2V0LmlkKSEuYWRkKGUuc291cmNlLmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFkajtcblx0fVxuXG5cdHByaXZhdGUgYXBwbHlWaXNpYmlsaXR5KGFkajogTWFwPHN0cmluZyxTZXQ8c3RyaW5nPj4pIHtcblx0XHRpZiAoIXRoaXMuc2VsTm9kZUVsKSByZXR1cm47XG5cdFx0Y29uc3Qgc2VsICA9IHRoaXMuc2VsZWN0ZWRJZDtcblx0XHRjb25zdCBuZWlnaGJvcnMgPSBzZWwgPyAoYWRqLmdldChzZWwpID8/IG5ldyBTZXQoKSkgOiBudWxsO1xuXHRcdC8vIFdoZW4gZG9tYWluIGZpbHRlciBpcyBhY3RpdmUsIGFsd2F5cyBzaG93IGFsbCBkb21haW4gbm9kZXMgKGlnbm9yZSBvcnBoYW4gc2V0dGluZylcblx0XHRjb25zdCBkb21haW5BY3RpdmUgPSB0aGlzLnNlbGVjdGVkRG9tYWlucy5zaXplID4gMDtcblxuXHRcdC8vIG5vZGUgb3BhY2l0eSAvIGRpc3BsYXlcblx0XHR0aGlzLnNlbE5vZGVFbC5zdHlsZSgnb3BhY2l0eScsIChkOiBXaWtpTm9kZSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKGQudHlwZSkpIHJldHVybiAnMCc7XG5cdFx0XHRpZiAoIWRvbWFpbkFjdGl2ZSAmJiAhdGhpcy5zaG93T3JwaGFucyAmJiAoYWRqLmdldChkLmlkKT8uc2l6ZSA/PyAwKSA9PT0gMCkgcmV0dXJuICcwJztcblx0XHRcdGlmICghc2VsKSByZXR1cm4gJzEnO1xuXHRcdFx0cmV0dXJuIGQuaWQgPT09IHNlbCB8fCBuZWlnaGJvcnMhLmhhcyhkLmlkKSA/ICcxJyA6ICcwLjA3Jztcblx0XHR9KS5zdHlsZSgnZGlzcGxheScsIChkOiBXaWtpTm9kZSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKGQudHlwZSkpIHJldHVybiAnbm9uZSc7XG5cdFx0XHRpZiAoIWRvbWFpbkFjdGl2ZSAmJiAhdGhpcy5zaG93T3JwaGFucyAmJiAoYWRqLmdldChkLmlkKT8uc2l6ZSA/PyAwKSA9PT0gMCkgcmV0dXJuICdub25lJztcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0pO1xuXG5cdFx0Ly8gZWRnZSBvcGFjaXR5XG5cdFx0Y29uc3QgZWRnZU9wYWNpdHkgPSAoZTogYW55KSA9PiB7XG5cdFx0XHRjb25zdCBzID0gKGUuc291cmNlIGFzIFdpa2lOb2RlKSwgdCA9IChlLnRhcmdldCBhcyBXaWtpTm9kZSk7XG5cdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXMocy50eXBlKSB8fCB0aGlzLmhpZGRlblR5cGVzLmhhcyh0LnR5cGUpKSByZXR1cm4gJzAnO1xuXHRcdFx0aWYgKCFzZWwpIHJldHVybiAnMC41NSc7XG5cdFx0XHRyZXR1cm4gKHMuaWQ9PT1zZWwgfHwgdC5pZD09PXNlbCkgPyAnMC45JyA6ICcwLjA0Jztcblx0XHR9O1xuXG5cdFx0dGhpcy5zZWxFZGdlTGluZT8uc3R5bGUoJ29wYWNpdHknLCBlZGdlT3BhY2l0eSk7XG5cdFx0dGhpcy5zZWxFZGdlTGFiZWw/LnN0eWxlKCdvcGFjaXR5JywgZWRnZU9wYWNpdHkpXG5cdFx0XHQuc3R5bGUoJ2Rpc3BsYXknLCB0aGlzLnNob3dFZGdlTGFiZWxzID8gbnVsbCA6ICdub25lJyk7XG5cdFx0dGhpcy5zZWxOb2RlTGFiZWw/LnN0eWxlKCdkaXNwbGF5JywgdGhpcy5zaG93Tm9kZUxhYmVscyA/IG51bGwgOiAnbm9uZScpO1xuXHRcdHRoaXMuc2VsRWRnZUxpbmU/LmF0dHIoJ21hcmtlci1lbmQnLCB0aGlzLnNob3dBcnJvd3MgPyAndXJsKCNsbG0tYXJyb3cpJyA6IG51bGwpO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDQuIFJlbmRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cmVuZGVyKCkge1xuXHRcdC8vIFN0b3Agb2xkIHNpbXVsYXRpb24gYW5kIGNhbmNlbCBhbnkgcGVuZGluZyByQUYgYmVmb3JlIHJlYnVpbGRpbmcgRE9NXG5cdFx0dGhpcy5zaW0/LnN0b3AoKTtcblx0XHRpZiAodGhpcy5wZW5kaW5nUmFmICE9PSBudWxsKSB7IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucGVuZGluZ1JhZik7IHRoaXMucGVuZGluZ1JhZiA9IG51bGw7IH1cblxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0Y29udGFpbmVyLmVtcHR5KCk7XG5cdFx0Y29udGFpbmVyLmFkZENsYXNzKCdsbG0tZ3JhcGgtY29udGFpbmVyJyk7XG5cdFx0Y29uc3QgQSA9IHRoaXMuYW5hbHl0aWNzITtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBEb21haW4gc3ViZ3JhcGggZmlsdGVyIChjb21wdXRlZCBlYXJseSBmb3IgTikgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3QgZG9tRmlsdCA9IHRoaXMuc2VsZWN0ZWREb21haW5zO1xuXHRcdGNvbnN0IHJlbmRlck5vZGVzID0gZG9tRmlsdC5zaXplID4gMFxuXHRcdFx0PyB0aGlzLm5vZGVzLmZpbHRlcihuID0+IGRvbUZpbHQuaGFzKG4uZG9tYWluKSlcblx0XHRcdDogdGhpcy5ub2Rlcztcblx0XHRjb25zdCByZW5kZXJOb2RlSWRzID0gbmV3IFNldChyZW5kZXJOb2Rlcy5tYXAobiA9PiBuLmlkKSk7XG5cdFx0Y29uc3QgcmVuZGVyRWRnZXMgPSBkb21GaWx0LnNpemUgPiAwXG5cdFx0XHQ/IHRoaXMuZWRnZXMuZmlsdGVyKGUgPT5cblx0XHRcdFx0cmVuZGVyTm9kZUlkcy5oYXMoZS5zb3VyY2UgYXMgc3RyaW5nKSAmJiByZW5kZXJOb2RlSWRzLmhhcyhlLnRhcmdldCBhcyBzdHJpbmcpKVxuXHRcdFx0OiB0aGlzLmVkZ2VzO1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIEF1dG8tc2NhbGUgcGh5c2ljcyB0byBncmFwaCBzaXplIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IE4gPSByZW5kZXJOb2Rlcy5sZW5ndGg7XG5cdFx0aWYgKE4gPiAwKSB7XG5cdFx0XHQvLyBjaGFyZ2U6IG1vcmUgbm9kZXMgXHUyMTkyIHN0cm9uZ2VyIHJlcHVsc2lvbiBuZWVkZWRcblx0XHRcdHRoaXMuY2hhcmdlU3RyID0gTWF0aC5taW4oODAwLCBNYXRoLm1heCgxMjAsIE1hdGgucm91bmQoTiAqIDIpKSk7XG5cdFx0XHQvLyBsaW5rIGRpc3RhbmNlOiBzcHJlYWQgc2NhbGVzIHdpdGggc3FydChOKVxuXHRcdFx0dGhpcy5saW5rRGlzdCAgPSBNYXRoLm1pbigyMDAsIE1hdGgubWF4KDUwLCBNYXRoLnJvdW5kKE1hdGguc3FydChOKSAqIDgpKSk7XG5cdFx0XHQvLyBMYWJlbHMgYWx3YXlzIE9OIFx1MjAxNCB6b29tIGhhbmRsZXIgZmFkZXMgdGhlbSBvdXQgYXV0b21hdGljYWxseSBhdCBzbWFsbCBzY2FsZVxuXHRcdFx0Ly8gKG5vIHBlci1OIGhpZGluZyBuZWVkZWQ7IHVzZXIgY2FuIHN0aWxsIHRvZ2dsZSB3aXRoIGJ1dHRvbilcblx0XHR9XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgVG9vbGJhciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCB0b29sYmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ2xsbS1ncmFwaC10b29sYmFyJyB9KTtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBTZWFyY2ggYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IHNlYXJjaEJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoYmFyJyB9KTtcblx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaEJhci5jcmVhdGVFbCgnaW5wdXQnLCB7XG5cdFx0XHRjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoJyxcblx0XHRcdGF0dHI6IHsgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ1NlYXJjaCBub2Rlc1x1MjAyNiAoY29udGVudCArIHNlbWFudGljKScgfVxuXHRcdH0pO1xuXHRcdC8vIFNlbWFudGljIHNlYXJjaCBzdGF0dXMgaW5kaWNhdG9yXG5cdFx0Y29uc3Qgc2VtSW5kaWNhdG9yID0gc2VhcmNoQmFyLmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tZ3JhcGgtc2VtLWluZGljYXRvcicgfSk7XG5cdFx0c2VtSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0Ly8gQ2xlYXIgYnV0dG9uXG5cdFx0Y29uc3Qgc2VhcmNoQ2xlYXIgPSBzZWFyY2hCYXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLXNlYXJjaC1jbGVhcicsIHRleHQ6ICdcdTAwRDcnIH0pO1xuXHRcdHNlYXJjaENsZWFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHQvLyBSZXN0b3JlIHNhdmVkIHNlYXJjaCBxdWVyeVxuXHRcdGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG5cdFx0XHRzZWFyY2hJbnB1dC52YWx1ZSA9IHRoaXMuc2VhcmNoUXVlcnk7XG5cdFx0XHRzZWFyY2hDbGVhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlbmRlclZpc2liaWxpdHkgPSAoYm0yNUlkczogU2V0PHN0cmluZz4sIHNlbUlkczogU2V0PHN0cmluZz4pID0+IHtcblx0XHRcdGlmICghdGhpcy5zZWxOb2RlRWwpIHJldHVybjtcblx0XHRcdHRoaXMuc2VsTm9kZUVsXG5cdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIChkOiBXaWtpTm9kZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChibTI1SWRzLmhhcyhkLmlkKSkgcmV0dXJuICcxJztcblx0XHRcdFx0XHRpZiAoc2VtSWRzLmhhcyhkLmlkKSkgIHJldHVybiAnMC41Jztcblx0XHRcdFx0XHRyZXR1cm4gJzAuMDYnO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgKGQ6IFdpa2lOb2RlKSA9PlxuXHRcdFx0XHRcdGJtMjVJZHMuaGFzKGQuaWQpIHx8IHNlbUlkcy5oYXMoZC5pZCkgPyBudWxsIDogJ25vbmUnKTtcblx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LnN0eWxlKCdvcGFjaXR5JywgKGQ6IGFueSkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gKGQuc291cmNlIGFzIFdpa2lOb2RlKS5pZCwgdCA9IChkLnRhcmdldCBhcyBXaWtpTm9kZSkuaWQ7XG5cdFx0XHRcdGlmIChibTI1SWRzLmhhcyhzKSB8fCBibTI1SWRzLmhhcyh0KSkgcmV0dXJuICcwLjYnO1xuXHRcdFx0XHRpZiAoc2VtSWRzLmhhcyhzKSAgfHwgc2VtSWRzLmhhcyh0KSkgIHJldHVybiAnMC4yNSc7XG5cdFx0XHRcdHJldHVybiAnMC4wMyc7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2VsRWRnZUxhYmVsPy5zdHlsZSgnb3BhY2l0eScsIChkOiBhbnkpID0+IHtcblx0XHRcdFx0Y29uc3QgcyA9IChkLnNvdXJjZSBhcyBXaWtpTm9kZSkuaWQsIHQgPSAoZC50YXJnZXQgYXMgV2lraU5vZGUpLmlkO1xuXHRcdFx0XHRpZiAoYm0yNUlkcy5oYXMocykgfHwgYm0yNUlkcy5oYXModCkpIHJldHVybiAnMSc7XG5cdFx0XHRcdGlmIChzZW1JZHMuaGFzKHMpICB8fCBzZW1JZHMuaGFzKHQpKSAgcmV0dXJuICcwLjUnO1xuXHRcdFx0XHRyZXR1cm4gJzAnO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFwcGx5U2VhcmNoID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgcSA9IHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cdFx0XHRzZWFyY2hDbGVhci5zdHlsZS5kaXNwbGF5ID0gcSA/ICdmbGV4JyA6ICdub25lJztcblx0XHRcdGlmICghdGhpcy5zZWxOb2RlRWwpIHJldHVybjtcblx0XHRcdGlmICghcSkge1xuXHRcdFx0XHR0aGlzLnNlbWFudGljSWRzLmNsZWFyKCk7XG5cdFx0XHRcdHNlbUluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNlbE5vZGVFbC5zdHlsZSgnb3BhY2l0eScsIG51bGwpLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsIG51bGwpO1xuXHRcdFx0XHR0aGlzLnNlbEVkZ2VMaW5lPy5zdHlsZSgnb3BhY2l0eScsIG51bGwpO1xuXHRcdFx0XHR0aGlzLnNlbEVkZ2VMYWJlbD8uc3R5bGUoJ29wYWNpdHknLCBudWxsKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBcdTI1MDBcdTI1MDAgSW1tZWRpYXRlOiBCTTI1ICsgZXhhY3QgbWV0YWRhdGEgbWF0Y2ggXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0XHRjb25zdCBxdWVyeVRlcm1zID0gdG9rZW5pemUocSk7XG5cdFx0XHRjb25zdCBibTI1SWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdFx0XHRmb3IgKGNvbnN0IG4gb2YgdGhpcy5ub2Rlcykge1xuXHRcdFx0XHRsZXQgc2NvcmUgPSAwO1xuXHRcdFx0XHRpZiAobi50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpKSAgc2NvcmUgKz0gMTA7XG5cdFx0XHRcdGlmIChuLnR5cGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSkgICBzY29yZSArPSA1O1xuXHRcdFx0XHRpZiAobi5kb21haW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSkgc2NvcmUgKz0gNTtcblx0XHRcdFx0aWYgKHRoaXMuYm0yNUluZGV4ICYmIHF1ZXJ5VGVybXMubGVuZ3RoID4gMClcblx0XHRcdFx0XHRzY29yZSArPSB0aGlzLmJtMjVJbmRleC5zY29yZShuLmlkLCBxdWVyeVRlcm1zKTtcblx0XHRcdFx0aWYgKHNjb3JlID4gMCkgYm0yNUlkcy5hZGQobi5pZCk7XG5cdFx0XHR9XG5cdFx0XHRyZW5kZXJWaXNpYmlsaXR5KGJtMjVJZHMsIHRoaXMuc2VtYW50aWNJZHMpO1xuXG5cdFx0XHQvLyBcdTI1MDBcdTI1MDAgRGVib3VuY2VkOiBzZW1hbnRpYyBlbWJlZGRpbmcgc2VhcmNoICg0MDAgbXMpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdFx0aWYgKHRoaXMuc2VtU2VhcmNoVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLnNlbVNlYXJjaFRpbWVyKTtcblx0XHRcdGlmICh0aGlzLmVtYmVkZGluZ3MpIHtcblx0XHRcdFx0c2VtSW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ1x1MjdGMyBzZW1hbnRpY1x1MjAyNic7XG5cdFx0XHRcdHNlbUluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdHRoaXMuc2VtU2VhcmNoVGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBzZW1JZHMgPSBhd2FpdCB0aGlzLnJ1blNlbWFudGljU2VhcmNoKHEpO1xuXHRcdFx0XHRcdHRoaXMuc2VtYW50aWNJZHMgPSBzZW1JZHM7XG5cdFx0XHRcdFx0Y29uc3QgY29tYmluZWQgPSBuZXcgU2V0KFsuLi5ibTI1SWRzLCAuLi5zZW1JZHNdKTtcblx0XHRcdFx0XHRzZW1JbmRpY2F0b3IudGV4dENvbnRlbnQgPSBjb21iaW5lZC5zaXplID4gMFxuXHRcdFx0XHRcdFx0PyBgQk0yNTogJHtibTI1SWRzLnNpemV9ICB+OiAke3NlbUlkcy5zaXplfWBcblx0XHRcdFx0XHRcdDogJyc7XG5cdFx0XHRcdFx0c2VtSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBjb21iaW5lZC5zaXplID4gMCA/ICdpbmxpbmUnIDogJ25vbmUnO1xuXHRcdFx0XHRcdHJlbmRlclZpc2liaWxpdHkoYm0yNUlkcywgc2VtSWRzKTtcblx0XHRcdFx0fSwgNDAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbUluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgdGhpcy5zZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlOyBhcHBseVNlYXJjaCgpOyB0aGlzLnNhdmVTZXR0aW5ncygpOyB9KTtcblx0XHRzZWFyY2hDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VhcmNoSW5wdXQudmFsdWUgPSAnJzsgdGhpcy5zZWFyY2hRdWVyeSA9ICcnOyBhcHBseVNlYXJjaCgpOyBzZWFyY2hJbnB1dC5mb2N1cygpOyB0aGlzLnNhdmVTZXR0aW5ncygpOyB9KTtcblxuXHRcdGNvbnN0IG1rQnRuID0gKGljb246IHN0cmluZywgbGFiZWw6IHN0cmluZywgYWN0aXZlID0gZmFsc2UpID0+IHtcblx0XHRcdGNvbnN0IGIgPSB0b29sYmFyLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2xsbS1ncmFwaC1idG4nIH0pO1xuXHRcdFx0c2V0SWNvbihiLCBpY29uKTtcblx0XHRcdGIuY3JlYXRlU3Bhbih7IHRleHQ6IGxhYmVsIH0pO1xuXHRcdFx0Yi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG5cdFx0XHRpZiAoYWN0aXZlKSBiLmFkZENsYXNzKCdsbG0tZ3JhcGgtYnRuLS1hY3RpdmUnKTtcblx0XHRcdHJldHVybiBiO1xuXHRcdH07XG5cdFx0Y29uc3QgcmVzZXRCdG4gICAgPSBta0J0bigncm90YXRlLWNjdycsICAnUmVzZXQgem9vbScpO1xuXHRcdGNvbnN0IHJlZnJlc2hCdG4gID0gbWtCdG4oJ3JlZnJlc2gtY3cnLCAgJ1JlZnJlc2gnKTtcblx0XHRjb25zdCBubEJ0biAgICAgICA9IG1rQnRuKCd0eXBlJywgICAgICAgICAnTm9kZXMnLCAgICAgdGhpcy5zaG93Tm9kZUxhYmVscyk7XG5cdFx0Y29uc3QgZWxCdG4gICAgPSBta0J0bignbWludXMnLCAgICAgICAgJ0VkZ2VzJywgICAgIHRoaXMuc2hvd0VkZ2VMYWJlbHMpO1xuXHRcdGNvbnN0IGFyQnRuICAgID0gbWtCdG4oJ2Fycm93LXJpZ2h0JywgICdBcnJvd3MnLCAgICB0aGlzLnNob3dBcnJvd3MpO1xuXHRcdGNvbnN0IHNlbUJ0biAgID0gbWtCdG4oJ2NwdScsICAgICAgICAgICdTZW1hbnRpYycsICB0aGlzLnNlbVNpZGViYXJPcGVuKTtcblx0XHRjb25zdCBzYkJ0biAgICA9IG1rQnRuKCdiYXItY2hhcnQtMicsICAnQW5hbHl0aWNzJywgdGhpcy5zaWRlYmFyT3Blbik7XG5cdFx0dG9vbGJhci5jcmVhdGVTcGFuKHsgY2xzOidsbG0tZ3JhcGgtc3RhdHMnLFxuXHRcdFx0dGV4dDpgJHtBLm59IG5vZGVzIFx1MDBCNyAke0EubX0gZWRnZXMgXHUwMEI3IGRlbnNpdHkgJHtBLmRlbnNpdHl9YCB9KTtcblxuXG5cdFx0Ly8gcGxhY2Vob2xkZXIgYWRqYWNlbmN5IChmaWxsZWQgYWZ0ZXIgckFGKVxuXHRcdGxldCBhZGogPSBuZXcgTWFwPHN0cmluZyxTZXQ8c3RyaW5nPj4oKTtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBMYXlvdXQ6IHNlbWFudGljIHNpZGViYXIgKGxlZnQpICsgU1ZHICsgYW5hbHl0aWNzIHNpZGViYXIgKHJpZ2h0KSBcdTI1MDBcblx0XHRjb25zdCBsYXlvdXQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLWdyYXBoLWxheW91dCcgfSk7XG5cdFx0Y29uc3Qgc2VtU2lkZWJhciA9IGxheW91dC5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tZ3JhcGgtc2VtLXNpZGViYXInIH0pO1xuXHRcdGlmICh0aGlzLnNlbVNpZGViYXJPcGVuKSBzZW1TaWRlYmFyLmFkZENsYXNzKCdsbG0tZ3JhcGgtc2VtLXNpZGViYXItLW9wZW4nKTtcblx0XHRjb25zdCBzdmdFbCAgPSBsYXlvdXQuY3JlYXRlU3ZnKCdzdmcnLCB7IGNsczogJ2xsbS1ncmFwaC1zdmcnIH0pO1xuXHRcdHRoaXMuc3ZnRWwgICA9IHN2Z0VsO1xuXHRcdGNvbnN0IHNpZGViYXIgPSBsYXlvdXQuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLWdyYXBoLXNpZGViYXInIH0pO1xuXHRcdGlmICh0aGlzLnNpZGViYXJPcGVuKSBzaWRlYmFyLmFkZENsYXNzKCdsbG0tZ3JhcGgtc2lkZWJhci0tb3BlbicpO1xuXHRcdHRoaXMuYnVpbGRTaWRlYmFyKHNpZGViYXIsIEEsIGFkaik7XG5cdFx0dGhpcy5idWlsZFNlbWFudGljU2lkZWJhcihzZW1TaWRlYmFyKTtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBEMyBzZXR1cCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBzdmcgPSBzZWxlY3Q8U1ZHU1ZHRWxlbWVudCwgdW5rbm93bj4oc3ZnRWwpO1xuXHRcdGNvbnN0IGcgICA9IHN2Zy5hcHBlbmQoJ2cnKTtcblxuXHRcdHRoaXMuem9vbUJlaGF2aW9yID0gem9vbTxTVkdTVkdFbGVtZW50LCB1bmtub3duPigpXG5cdFx0XHQuc2NhbGVFeHRlbnQoWzAuMDUsMTBdKVxuXHRcdFx0Lm9uKCd6b29tJywgZXYgPT4ge1xuXHRcdFx0XHRnLmF0dHIoJ3RyYW5zZm9ybScsIGV2LnRyYW5zZm9ybSk7XG5cdFx0XHRcdGNvbnN0IGsgPSBldi50cmFuc2Zvcm0uaztcblx0XHRcdFx0Ly8gQ291bnRlci1zY2FsZSBsYWJlbHM6IGFsd2F5cyBzYW1lIHNjcmVlbiBzaXplIHJlZ2FyZGxlc3Mgb2Ygem9vbVxuXHRcdFx0XHQvLyBsYWJlbFNpemUgaXMgdGhlIHRhcmdldCBzY3JlZW4tc3BhY2UgcGl4ZWwgc2l6ZVxuXHRcdFx0XHRjb25zdCBub2RlRm9udFB4ID0gdGhpcy5sYWJlbFNpemUgLyBrO1xuXHRcdFx0XHRjb25zdCBlZGdlRm9udFB4ID0gKHRoaXMubGFiZWxTaXplICogMC44NSkgLyBrO1xuXHRcdFx0XHQvLyBGYWRlOiBmdWxseSB2aXNpYmxlIGF0IGsgPj0gbGFiZWxGYWRlQXQsIGludmlzaWJsZSBhdCBrIDw9IGxhYmVsRmFkZUF0KjAuNDVcblx0XHRcdFx0Y29uc3QgZmFkZU1heCA9IHRoaXMubGFiZWxGYWRlQXQ7XG5cdFx0XHRcdGNvbnN0IGZhZGVNaW4gPSB0aGlzLmxhYmVsRmFkZUF0ICogMC40NTtcblx0XHRcdFx0Y29uc3QgbGFiZWxPcGFjaXR5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSxcblx0XHRcdFx0XHQoayAtIGZhZGVNaW4pIC8gKGZhZGVNYXggLSBmYWRlTWluKVxuXHRcdFx0XHQpKTtcblx0XHRcdFx0aWYgKHRoaXMuc2hvd05vZGVMYWJlbHMpXG5cdFx0XHRcdFx0Zy5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsIHVua25vd24+KCcubGxtLWdyYXBoLW5vZGUtbGFiZWwnKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBgJHtub2RlRm9udFB4fXB4YClcblx0XHRcdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIFN0cmluZyhsYWJlbE9wYWNpdHkpKTtcblx0XHRcdFx0aWYgKHRoaXMuc2hvd0VkZ2VMYWJlbHMpXG5cdFx0XHRcdFx0Zy5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsIHVua25vd24+KCcubGxtLWdyYXBoLWVkZ2UtbGFiZWwnKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBgJHtlZGdlRm9udFB4fXB4YClcblx0XHRcdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIFN0cmluZyhsYWJlbE9wYWNpdHkpKTtcblx0XHRcdH0pO1xuXHRcdHN2Zy5jYWxsKHRoaXMuem9vbUJlaGF2aW9yKTtcblxuXHRcdC8vIFJlc3RvcmUgc2F2ZWQgem9vbSBcdTIwMTQgc2tpcCB3aGVuIGRvbWFpbiBmaWx0ZXIgYWN0aXZlIChhdXRvLWZpdCB3aWxsIGhhbmRsZSBpdClcblx0XHRpZiAodGhpcy5zYXZlZFRyYW5zZm9ybSAmJiB0aGlzLnNlbGVjdGVkRG9tYWlucy5zaXplID09PSAwKSB7XG5cdFx0XHRjb25zdCB7IGssIHgsIHkgfSA9IHRoaXMuc2F2ZWRUcmFuc2Zvcm07XG5cdFx0XHRzdmcuY2FsbCh0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sIHpvb21JZGVudGl0eS50cmFuc2xhdGUoeCwgeSkuc2NhbGUoaykpO1xuXHRcdH1cblxuXHRcdC8vIGNsaWNrIG9uIGJhY2tncm91bmQgXHUyMTkyIGRlc2VsZWN0XG5cdFx0c3ZnLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gc3ZnRWwpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZElkID0gbnVsbDtcblx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlZFRyYW5zZm9ybSA9IG51bGw7XG5cdFx0XHRzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDQwMCkuY2FsbCh0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sIHpvb21JZGVudGl0eSk7XG5cdFx0fSk7XG5cdFx0cmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubWFudWFsUmVmcmVzaCgpKTtcblxuXHRcdC8vIEFycm93IG1hcmtlciBcdTIwMTQgc2NhbGVzIG5hdHVyYWxseSB3aXRoIHpvb20gKG5vIGNvdW50ZXItc2NhbGluZyBuZWVkZWQpXG5cdFx0c3ZnLmFwcGVuZCgnZGVmcycpLmFwcGVuZCgnbWFya2VyJykuYXR0cignaWQnLCdsbG0tYXJyb3cnKVxuXHRcdFx0LmF0dHIoJ3ZpZXdCb3gnLCcwIC0zIDYgNicpLmF0dHIoJ3JlZlgnLDEwKS5hdHRyKCdyZWZZJywwKVxuXHRcdFx0LmF0dHIoJ21hcmtlcldpZHRoJywgNikuYXR0cignbWFya2VySGVpZ2h0JywgNilcblx0XHRcdC5hdHRyKCdtYXJrZXJVbml0cycsJ3N0cm9rZVdpZHRoJylcblx0XHRcdC5hdHRyKCdvcmllbnQnLCdhdXRvJylcblx0XHRcdC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdkJywnTTAsLTNMNiwwTDAsMycpLmF0dHIoJ2ZpbGwnLCd2YXIoLS10ZXh0LWZhaW50KScpO1xuXG5cdFx0Ly8gUmVzb2x2ZSBub2RlIHJlZnNcblx0XHRjb25zdCBub2RlTWFwICAgPSBuZXcgTWFwKHJlbmRlck5vZGVzLm1hcChuPT5bbi5pZCxuXSkpO1xuXHRcdGNvbnN0IHNpbUVkZ2VzICA9IHJlbmRlckVkZ2VzLm1hcChlPT4oe1xuXHRcdFx0Li4uZSxcblx0XHRcdHNvdXJjZTogbm9kZU1hcC5nZXQoZS5zb3VyY2UgYXMgc3RyaW5nKSEsXG5cdFx0XHR0YXJnZXQ6IG5vZGVNYXAuZ2V0KGUudGFyZ2V0IGFzIHN0cmluZykhLFxuXHRcdH0pKS5maWx0ZXIoZT0+ZS5zb3VyY2UmJmUudGFyZ2V0KTtcblxuXHRcdHRoaXMucGVuZGluZ1JhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHR0aGlzLnBlbmRpbmdSYWYgPSBudWxsO1xuXHRcdFx0Y29uc3QgVyA9IHN2Z0VsLmNsaWVudFdpZHRoICB8fCA5MDA7XG5cdFx0XHRjb25zdCBIID0gc3ZnRWwuY2xpZW50SGVpZ2h0IHx8IDcwMDtcblxuXHRcdFx0Ly8gRm9yY2VzIChzdG9yZWQgc28gc2xpZGVycyBjYW4gdXBkYXRlIHRoZW0pXG5cdFx0XHQvLyBMaW5rIHN0cmVuZ3RoOiAxL3NxcnQoZGVnX3NyYyAqIGRlZ190Z3QpIFx1MjAxNCBodWIgbm9kZXMgcHVsbCB3ZWFrZXIgKGxpa2UgT2JzaWRpYW4pXG5cdFx0XHRjb25zdCBsaW5rRm9yY2UgICA9IGZvcmNlTGluazxXaWtpTm9kZSxXaWtpRWRnZT4oc2ltRWRnZXMpXG5cdFx0XHRcdC5pZChkPT5kLmlkKS5kaXN0YW5jZSh0aGlzLmxpbmtEaXN0KVxuXHRcdFx0XHQuc3RyZW5ndGgoKGQ6IGFueSkgPT4gMSAvIE1hdGguc3FydChcblx0XHRcdFx0XHRNYXRoLm1heCgxLCBBLmRlZ3JlZU9mLmdldCgoZC5zb3VyY2UgYXMgV2lraU5vZGUpLmlkKSA/PyAxKSAqXG5cdFx0XHRcdFx0TWF0aC5tYXgoMSwgQS5kZWdyZWVPZi5nZXQoKGQudGFyZ2V0IGFzIFdpa2lOb2RlKS5pZCkgPz8gMSlcblx0XHRcdFx0KSk7XG5cdFx0XHRjb25zdCBjaGFyZ2VGb3JjZSA9IGZvcmNlTWFueUJvZHk8V2lraU5vZGU+KCkuc3RyZW5ndGgoLXRoaXMuY2hhcmdlU3RyKTtcblx0XHRcdGNvbnN0IGdYID0gZm9yY2VYPFdpa2lOb2RlPihXLzIpLnN0cmVuZ3RoKHRoaXMuZ3Jhdml0eVN0cik7XG5cdFx0XHRjb25zdCBnWSA9IGZvcmNlWTxXaWtpTm9kZT4oSC8yKS5zdHJlbmd0aCh0aGlzLmdyYXZpdHlTdHIpO1xuXHRcdFx0Ly8gQ29sbGlzaW9uIHJhZGl1cyBzY2FsZXMgd2l0aCBOIHRvIHByZXZlbnQgb3ZlcmxhcFxuXHRcdFx0Y29uc3QgY29sbGlkZVIgPSBNYXRoLm1heCgxNSwgTWF0aC5zcXJ0KE4pICogMik7XG5cblx0XHRcdHRoaXMuc2ltID0gZm9yY2VTaW11bGF0aW9uPFdpa2lOb2RlPihyZW5kZXJOb2Rlcylcblx0XHRcdFx0LmZvcmNlKCdsaW5rJywgICAgbGlua0ZvcmNlKVxuXHRcdFx0XHQuZm9yY2UoJ2NoYXJnZScsICBjaGFyZ2VGb3JjZSlcblx0XHRcdFx0LmZvcmNlKCdneCcsICAgICAgZ1gpXG5cdFx0XHRcdC5mb3JjZSgnZ3knLCAgICAgIGdZKVxuXHRcdFx0XHQuZm9yY2UoJ2NvbGxpZGUnLCBmb3JjZUNvbGxpZGUoY29sbGlkZVIpKTtcblxuXHRcdFx0Ly8gQnVpbGQgYWRqYWNlbmN5IGFmdGVyIHNpbUVkZ2VzIHJlc29sdmVkIFx1MjAxNCBtdXRhdGUgaW4gcGxhY2Ugc28gc2lkZWJhciBjbG9zdXJlcyBzZWUgdGhlIHVwZGF0ZWQgbWFwXG5cdFx0XHRjb25zdCBidWlsdEFkaiA9IHRoaXMuYnVpbGRBZGphY2VuY3koc2ltRWRnZXMpO1xuXHRcdFx0YWRqLmNsZWFyKCk7XG5cdFx0XHRmb3IgKGNvbnN0IFtrLCB2XSBvZiBidWlsdEFkaikgYWRqLnNldChrLCB2KTtcblxuXHRcdFx0Ly8gRWRnZXMgXHUyMDE0IGNvbG9yZWQgYnkgZG9tYWluIGlmIGJvdGggbm9kZXMgc2hhcmUgYSBkb21haW5cblx0XHRcdGNvbnN0IGVkZ2VMaW5lID0gZy5hcHBlbmQoJ2cnKVxuXHRcdFx0XHQuc2VsZWN0QWxsPFNWR0xpbmVFbGVtZW50LHR5cGVvZiBzaW1FZGdlc1swXT4oJ2xpbmUnKVxuXHRcdFx0XHQuZGF0YShzaW1FZGdlcykuam9pbignbGluZScpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsJ2xsbS1ncmFwaC1lZGdlJylcblx0XHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsIHRoaXMuZWRnZVdpZHRoKVxuXHRcdFx0XHQuc3R5bGUoJ3N0cm9rZScsIChkOiBhbnkpID0+IHtcblx0XHRcdFx0XHQvLyBpbmxpbmUgc3R5bGUgd2lucyBvdmVyIENTUyBjbGFzcyBcdTIwMTQgbWFuZGF0b3J5IGZvciBkb21haW4gY29sb3Jpbmdcblx0XHRcdFx0XHRjb25zdCBkb21haW4gPSAoZC5zb3VyY2UgYXMgV2lraU5vZGUpLmRvbWFpbiB8fCAoZC50YXJnZXQgYXMgV2lraU5vZGUpLmRvbWFpbjtcblx0XHRcdFx0XHRyZXR1cm4gZG9tYWluID8gZG9tYWluQ29sb3IoZG9tYWluKSA6ICcjODg4Jztcblx0XHRcdFx0fSlcblx0XHRcdFx0LnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIChkOiBhbnkpID0+IHtcblx0XHRcdFx0XHRjb25zdCBzcmMgPSAoZC5zb3VyY2UgYXMgV2lraU5vZGUpLmRvbWFpbjtcblx0XHRcdFx0XHRjb25zdCB0Z3QgPSAoZC50YXJnZXQgYXMgV2lraU5vZGUpLmRvbWFpbjtcblx0XHRcdFx0XHRyZXR1cm4gKHNyYyAmJiB0Z3QgJiYgc3JjID09PSB0Z3QpID8gJzAuNycgOiAnMC4zJztcblx0XHRcdFx0fSlcblx0XHRcdFx0LmF0dHIoJ21hcmtlci1lbmQnLCd1cmwoI2xsbS1hcnJvdyknKTtcblx0XHRcdHRoaXMuc2VsRWRnZUxpbmUgPSBlZGdlTGluZTtcblxuXHRcdFx0Y29uc3QgZWRnZUxhYmVsID0gZy5hcHBlbmQoJ2cnKVxuXHRcdFx0XHQuc2VsZWN0QWxsPFNWR1RleHRFbGVtZW50LHR5cGVvZiBzaW1FZGdlc1swXT4oJ3RleHQnKVxuXHRcdFx0XHQuZGF0YShzaW1FZGdlcykuam9pbigndGV4dCcpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsJ2xsbS1ncmFwaC1lZGdlLWxhYmVsJylcblx0XHRcdFx0LmF0dHIoJ3BvaW50ZXItZXZlbnRzJywnbm9uZScpXG5cdFx0XHRcdC50ZXh0KGQ9PmQubGFiZWwpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWwgPSBlZGdlTGFiZWw7XG5cblx0XHRcdC8vIE5vZGVzXG5cdFx0XHRjb25zdCBub2RlRWwgPSBnLmFwcGVuZCgnZycpXG5cdFx0XHRcdC5zZWxlY3RBbGw8U1ZHR0VsZW1lbnQsV2lraU5vZGU+KCdnJylcblx0XHRcdC5kYXRhKHJlbmRlck5vZGVzKS5qb2luKCdnJylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLW5vZGUnKVxuXHRcdFx0XHQuY2FsbChkcmFnPFNWR0dFbGVtZW50LFdpa2lOb2RlPigpXG5cdFx0XHRcdFx0Lm9uKCdzdGFydCcsKGV2LGQpPT57IGlmKCFldi5hY3RpdmUpIHRoaXMuc2ltPy5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTsgZC5meD1kLng7IGQuZnk9ZC55OyB9KVxuXHRcdFx0XHRcdC5vbignZHJhZycsIChldixkKT0+eyBkLmZ4PWV2Lng7IGQuZnk9ZXYueTsgfSlcblx0XHRcdFx0XHQub24oJ2VuZCcsICAoZXYsZCk9PnsgaWYoIWV2LmFjdGl2ZSkgdGhpcy5zaW0/LmFscGhhVGFyZ2V0KDApOyBkLmZ4PW51bGw7IGQuZnk9bnVsbDsgfSkpXG5cdFx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQsIGQpID0+IHtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZElkID09PSBkLmlkKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWNvbmQgY2xpY2sgXHUyMTkyIG9wZW4gZmlsZVxuXHRcdFx0XHRcdFx0dGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChkLmlkLCcnLGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gZmlyc3QgY2xpY2sgXHUyMTkyIHNlbGVjdCArIGRpbVxuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZElkID0gZC5pZDtcblx0XHRcdFx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdHRoaXMuc2VsTm9kZUVsID0gbm9kZUVsO1xuXG5cdFx0XHRub2RlRWwuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGNvbnN0IGcgPSBzZWxlY3Q8U1ZHR0VsZW1lbnQsIFdpa2lOb2RlPih0aGlzIGFzIFNWR0dFbGVtZW50KTtcblx0XHRcdFx0Y29uc3QgY29sb3IgID0gTk9ERV9DT0xPUlNbZC50eXBlXSA/PyAnI0JBQjBBQyc7XG5cdFx0XHRcdGNvbnN0IHNoYXBlICA9IE5PREVfU0hBUEVTW2QudHlwZV0gID8/ICdjaXJjbGUnO1xuXHRcdFx0XHRjb25zdCBjbHMgICAgPSAnbGxtLWdyYXBoLW5vZGUtc2hhcGUnO1xuXHRcdFx0XHQvLyBTaXplOiBwcmVmZXIgaW50cmEtZG9tYWluIGNoaWxkcmVuIGNvdW50OyBmYWxsYmFjayB0byB0b3RhbCBkZWdyZWVcblx0XHRcdFx0Y29uc3QgaW50cmFEb20gPSBBLmludHJhRG9tYWluT3V0LmdldChkLmlkKSA/PyAwO1xuXHRcdFx0XHRjb25zdCBkZWcgICAgICA9IEEuZGVncmVlT2YuZ2V0KGQuaWQpID8/IDA7XG5cdFx0XHRcdGNvbnN0IHNpemVWYWwgID0gaW50cmFEb20gPiAwID8gaW50cmFEb20gOiBkZWc7XG5cdFx0XHRcdC8vIGJhc2Ugc2NhbGUgZnJvbSBkZWdyZWUgKGxvZyk7IG5vZGVTY2FsZSBtdWx0aXBsaWVyIGFwcGxpZWQgb24gdG9wXG5cdFx0XHRcdGNvbnN0IGJhc2VTID0gMSArIE1hdGgubG9nMXAoc2l6ZVZhbCkgKiAoaW50cmFEb20gPiAwID8gMC41IDogMC4yNSk7XG5cdFx0XHRcdGNvbnN0IHN3ID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsbG0tbm9kZS1zaGFwZS13cmFwcGVyJylcblx0XHRcdFx0XHQuYXR0cignZGF0YS1iYXNlLXNjYWxlJywgYmFzZVMpICAgICAgICAgIC8vIHN0b3JlZCBmb3Igc2xpZGVyIHVwZGF0ZXNcblx0XHRcdFx0XHQuYXR0cigndHJhbnNmb3JtJywgYHNjYWxlKCR7YmFzZVMgKiB0aGlzLm5vZGVTY2FsZX0pYCk7XG5cdFx0XHRcdGlmIChzaGFwZSA9PT0gJ2RpYW1vbmQnKSB7XG5cdFx0XHRcdFx0c3cuYXBwZW5kKCdyZWN0JykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cignd2lkdGgnLCAxMSkuYXR0cignaGVpZ2h0JywgMTEpXG5cdFx0XHRcdFx0XHQuYXR0cigneCcsIC01LjUpLmF0dHIoJ3knLCAtNS41KVxuXHRcdFx0XHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoNDUpJykuYXR0cigncngnLCAxLjUpXG5cdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIGNvbG9yKTtcblx0XHRcdFx0fSBlbHNlIGlmIChzaGFwZSA9PT0gJ3NxdWFyZScpIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ3JlY3QnKS5hdHRyKCdjbGFzcycsIGNscylcblx0XHRcdFx0XHRcdC5hdHRyKCd3aWR0aCcsIDEzKS5hdHRyKCdoZWlnaHQnLCAxMylcblx0XHRcdFx0XHRcdC5hdHRyKCd4JywgLTYuNSkuYXR0cigneScsIC02LjUpLmF0dHIoJ3J4JywgMilcblx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNoYXBlID09PSAnaGV4YWdvbicpIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ3BvbHlnb24nKS5hdHRyKCdjbGFzcycsIGNscylcblx0XHRcdFx0XHRcdC5hdHRyKCdwb2ludHMnLCAnMCwtOCA2LjksLTQgNi45LDQgMCw4IC02LjksNCAtNi45LC00Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN3LmFwcGVuZCgnY2lyY2xlJykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cigncicsIDcpLmF0dHIoJ2ZpbGwnLCBjb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBub2RlTGFiZWwgPSBub2RlRWwuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLW5vZGUtbGFiZWwnKVxuXHRcdFx0XHQuYXR0cignZHknLCcwLjM1ZW0nKS5hdHRyKCd4JywxMykuYXR0cigncG9pbnRlci1ldmVudHMnLCdub25lJylcblx0XHRcdFx0LnRleHQoZD0+ZC50aXRsZS5sZW5ndGg+MjY/ZC50aXRsZS5zbGljZSgwLDI0KSsnXHUyMDI2JzpkLnRpdGxlKVxuXHRcdFx0XHQuYXR0cignZGlzcGxheScsIHRoaXMuc2hvd05vZGVMYWJlbHMgPyBudWxsIDogJ25vbmUnKTsgLy8gYXBwbHkgaW1tZWRpYXRlbHlcblx0XHRcdHRoaXMuc2VsTm9kZUxhYmVsID0gbm9kZUxhYmVsO1xuXG5cdFx0XHQvLyBUb29sdGlwXG5cdFx0XHRjb25zdCB0b29sdGlwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczonbGxtLWdyYXBoLXRvb2x0aXAnIH0pO1xuXHRcdFx0bm9kZUVsXG5cdFx0XHRcdC5vbignbW91c2VlbnRlcicsKF9ldixkKT0+e1xuXHRcdFx0XHRcdGNvbnN0IGRlZyA9IEEuZGVncmVlT2YuZ2V0KGQuaWQpPz8wO1xuXHRcdFx0XHRcdGNvbnN0IG5laWdoYm9ycyA9IGFkai5nZXQoZC5pZCk/P25ldyBTZXQoKTtcblx0XHRcdFx0XHR0b29sdGlwLmlubmVySFRNTCA9XG5cdFx0XHRcdFx0XHRgPHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+PGJyPmArXG5cdFx0XHRcdFx0XHRgPHNwYW4gY2xhc3M9XCJsbG0tdHAtdHlwZVwiIHN0eWxlPVwiY29sb3I6JHtOT0RFX0NPTE9SU1tkLnR5cGVdPz8nIzg4OCd9XCI+JHtkLnR5cGV9PC9zcGFuPmArXG5cdFx0XHRcdFx0XHQoZC5kb21haW4/YDxicj48ZW0+JHtkLmRvbWFpbn08L2VtPmA6JycpK1xuXHRcdFx0XHRcdFx0YDxicj48c21hbGw+ZGVncmVlOiAke2RlZ30gXHUwMEI3IG5laWdoYm9yczogJHtuZWlnaGJvcnMuc2l6ZX08L3NtYWxsPmArXG5cdFx0XHRcdFx0XHRgPGJyPjxzbWFsbCBjbGFzcz1cImxsbS10cC1oaW50XCI+Y2xpY2sgdG8gc2VsZWN0IFx1MDBCNyBjbGljayBhZ2FpbiB0byBvcGVuPC9zbWFsbD5gO1xuXHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ21vdXNlbW92ZScsKGV2OlBvaW50ZXJFdmVudCk9Pntcblx0XHRcdFx0XHRjb25zdCByPWNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLmxlZnQ9KGV2LmNsaWVudFgtci5sZWZ0KzE0KSsncHgnO1xuXHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUudG9wID0oZXYuY2xpZW50WS1yLnRvcCArMTQpKydweCc7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignbW91c2VsZWF2ZScsKCk9PnsgdG9vbHRpcC5zdHlsZS5kaXNwbGF5PSdub25lJzsgfSk7XG5cblx0XHRcdC8vIEZvY3VzIG5vZGUgKGNhbGxlZCBmcm9tIHNpZGViYXIgaHViIGNsaWNrcylcblx0XHRcdHRoaXMuZm9jdXNOb2RlRm4gPSAoaWQ6c3RyaW5nKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5kID0gbm9kZU1hcC5nZXQoaWQpO1xuXHRcdFx0XHRpZiAoIW5kfHxuZC54PT1udWxsfHxuZC55PT1udWxsKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJZCA9IGlkO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0XHRjb25zdCBjVz1zdmdFbC5jbGllbnRXaWR0aCwgY0g9c3ZnRWwuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDYwMCkuY2FsbChcblx0XHRcdFx0XHR0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sXG5cdFx0XHRcdFx0em9vbUlkZW50aXR5LnRyYW5zbGF0ZShjVy8yLGNILzIpLnNjYWxlKDEuOCkudHJhbnNsYXRlKC1uZC54ISwtbmQueSEpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBXaXJlIHNpZGViYXIgaHViIGNsaWNrc1xuXHRcdFx0c2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ub2RlLWlkXScpLmZvckVhY2goZWw9Pntcblx0XHRcdFx0KGVsIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PlxuXHRcdFx0XHRcdHRoaXMuZm9jdXNOb2RlRm4/LigoZWwgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQubm9kZUlkISkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFRpY2tcblx0XHRcdHRoaXMuc2ltLm9uKCd0aWNrJywoKT0+e1xuXHRcdFx0XHRlZGdlTGluZVxuXHRcdFx0XHRcdC5hdHRyKCd4MScsZD0+KGQuc291cmNlIGFzIFdpa2lOb2RlKS54ISlcblx0XHRcdFx0XHQuYXR0cigneTEnLGQ9PihkLnNvdXJjZSBhcyBXaWtpTm9kZSkueSEpXG5cdFx0XHRcdFx0LmF0dHIoJ3gyJyxkPT4oZC50YXJnZXQgYXMgV2lraU5vZGUpLnghKVxuXHRcdFx0XHRcdC5hdHRyKCd5MicsZD0+KGQudGFyZ2V0IGFzIFdpa2lOb2RlKS55ISk7XG5cdFx0XHRcdGVkZ2VMYWJlbFxuXHRcdFx0XHRcdC5hdHRyKCd4JyxkPT4oKGQuc291cmNlIGFzIFdpa2lOb2RlKS54ISsoZC50YXJnZXQgYXMgV2lraU5vZGUpLnghKS8yKVxuXHRcdFx0XHRcdC5hdHRyKCd5JyxkPT4oKGQuc291cmNlIGFzIFdpa2lOb2RlKS55ISsoZC50YXJnZXQgYXMgV2lraU5vZGUpLnkhKS8yKTtcblx0XHRcdFx0bm9kZUVsLmF0dHIoJ3RyYW5zZm9ybScsZD0+YHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEF1dG8tZml0IHdoZW4gZG9tYWluIGZpbHRlciBhY3RpdmUgb3Igbm8gc2F2ZWQgdHJhbnNmb3JtXG5cdFx0XHRjb25zdCBzaG91bGRBdXRvRml0ID0gdGhpcy5zZWxlY3RlZERvbWFpbnMuc2l6ZSA+IDAgfHwgIXRoaXMuc2F2ZWRUcmFuc2Zvcm07XG5cdFx0XHRpZiAoc2hvdWxkQXV0b0ZpdCkge1xuXHRcdFx0XHR0aGlzLnNpbS5vbignZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG5vZGVzID0gcmVuZGVyTm9kZXMuZmlsdGVyKGQgPT4gZC54ICE9IG51bGwgJiYgZC55ICE9IG51bGwpO1xuXHRcdFx0XHRcdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcblx0XHRcdFx0XHRjb25zdCB4cyA9IG5vZGVzLm1hcChkID0+IGQueCEpLCB5cyA9IG5vZGVzLm1hcChkID0+IGQueSEpO1xuXHRcdFx0XHRcdGNvbnN0IHgwID0gTWF0aC5taW4oLi4ueHMpLCB4MSA9IE1hdGgubWF4KC4uLnhzKTtcblx0XHRcdFx0XHRjb25zdCB5MCA9IE1hdGgubWluKC4uLnlzKSwgeTEgPSBNYXRoLm1heCguLi55cyk7XG5cdFx0XHRcdFx0Y29uc3QgVyA9IHN2Z0VsLmNsaWVudFdpZHRoIHx8IDkwMCwgSCA9IHN2Z0VsLmNsaWVudEhlaWdodCB8fCA3MDA7XG5cdFx0XHRcdFx0Y29uc3QgcGFkID0gNjA7XG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGVYID0gKFcgLSBwYWQqMikgLyBNYXRoLm1heCh4MSAtIHgwLCAxKTtcblx0XHRcdFx0XHRjb25zdCBzY2FsZVkgPSAoSCAtIHBhZCoyKSAvIE1hdGgubWF4KHkxIC0geTAsIDEpO1xuXHRcdFx0XHRcdGNvbnN0IGsgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSwgMyk7IC8vIGNhcCBhdCAzXHUwMEQ3IHpvb21cblx0XHRcdFx0XHRjb25zdCBjeCA9ICh4MCArIHgxKSAvIDIsIGN5ID0gKHkwICsgeTEpIC8gMjtcblx0XHRcdFx0XHRzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMClcblx0XHRcdFx0XHRcdC5jYWxsKHRoaXMuem9vbUJlaGF2aW9yLnRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0em9vbUlkZW50aXR5LnRyYW5zbGF0ZShXLzIsIEgvMikuc2NhbGUoaykudHJhbnNsYXRlKC1jeCwgLWN5KSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXaXJlIHBoeXNpY3Mgc2xpZGVycyAobXVzdCBoYXBwZW4gYWZ0ZXIgc2ltIGlzIGNyZWF0ZWQpXG5cdFx0XHRzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTElucHV0RWxlbWVudD4oJ1tkYXRhLXBoeXNpY3NdJykuZm9yRWFjaChpbnB1dD0+e1xuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKCk9Pntcblx0XHRcdFx0XHRjb25zdCB2YWwgPSAraW5wdXQudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gaW5wdXQuZGF0YXNldC5waHlzaWNzITtcblx0XHRcdFx0XHRjb25zdCBsYmwgPSBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRcdFx0Y29uc3QgaXNGbG9hdCA9IGtleSA9PT0gJ2dyYXZpdHlTdHInIHx8IGtleSA9PT0gJ2xhYmVsRmFkZUF0JyB8fCBrZXkgPT09ICdub2RlU2NhbGUnIHx8IGtleSA9PT0gJ2VkZ2VXaWR0aCc7XG5cdFx0XHRcdFx0aWYgKGxibCkgbGJsLnRleHRDb250ZW50ID0gaXNGbG9hdCA/IHZhbC50b0ZpeGVkKDIpIDogU3RyaW5nKHZhbCk7XG5cdFx0XHRcdFx0aWYgKGtleT09PSdsaW5rRGlzdCcpIHtcblx0XHRcdFx0XHRcdHRoaXMubGlua0Rpc3QgPSB2YWw7XG5cdFx0XHRcdFx0XHQodGhpcy5zaW0hLmZvcmNlKCdsaW5rJykgYXMgRm9yY2VMaW5rPFdpa2lOb2RlLFdpa2lFZGdlPikuZGlzdGFuY2UodmFsKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleT09PSdjaGFyZ2VTdHInKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJnZVN0ciA9IHZhbDtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2NoYXJnZScpIGFzIFJldHVyblR5cGU8dHlwZW9mIGZvcmNlTWFueUJvZHk+KS5zdHJlbmd0aCgtdmFsKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleT09PSdncmF2aXR5U3RyJykge1xuXHRcdFx0XHRcdFx0dGhpcy5ncmF2aXR5U3RyID0gdmFsO1xuXHRcdFx0XHRcdFx0KHRoaXMuc2ltIS5mb3JjZSgnZ3gnKSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBmb3JjZVg+KS5zdHJlbmd0aCh2YWwpO1xuXHRcdFx0XHRcdFx0KHRoaXMuc2ltIS5mb3JjZSgnZ3knKSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBmb3JjZVk+KS5zdHJlbmd0aCh2YWwpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoa2V5PT09J2xhYmVsRmFkZUF0JyB8fCBrZXk9PT0nbGFiZWxTaXplJykge1xuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gJ2xhYmVsRmFkZUF0JykgdGhpcy5sYWJlbEZhZGVBdCA9IHZhbDtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09ICdsYWJlbFNpemUnKSAgIHRoaXMubGFiZWxTaXplICAgPSB2YWw7XG5cdFx0XHRcdFx0XHQvLyB6b29tVHJhbnNmb3JtKGVsZW1lbnQpIFx1MjAxNCBjb3JyZWN0IEQzIGdldHRlciwgZG9lcyBOT1QgdG91Y2ggem9vbSBiZWhhdmlvclxuXHRcdFx0XHRcdFx0Y29uc3QgayA9IHpvb21UcmFuc2Zvcm0oc3ZnRWwpLms7XG5cdFx0XHRcdFx0XHRjb25zdCBmYWRlTWF4ID0gdGhpcy5sYWJlbEZhZGVBdCwgZmFkZU1pbiA9IHRoaXMubGFiZWxGYWRlQXQgKiAwLjQ1O1xuXHRcdFx0XHRcdFx0Y29uc3Qgb3AgPSBTdHJpbmcoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGsgLSBmYWRlTWluKSAvIChmYWRlTWF4IC0gZmFkZU1pbikpKSk7XG5cdFx0XHRcdFx0XHQvLyBjb3VudGVyLXNjYWxlZDogZm9udC1zaXplIGluIFNWRyBzcGFjZSA9IHRhcmdldF9zY3JlZW5fcHggLyBrXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zaG93Tm9kZUxhYmVscylcblx0XHRcdFx0XHRcdFx0Zy5zZWxlY3RBbGwoJy5sbG0tZ3JhcGgtbm9kZS1sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBgJHt0aGlzLmxhYmVsU2l6ZSAvIGt9cHhgKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIG9wKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnNob3dFZGdlTGFiZWxzKVxuXHRcdFx0XHRcdFx0XHRnLnNlbGVjdEFsbCgnLmxsbS1ncmFwaC1lZGdlLWxhYmVsJylcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsIGAkeyh0aGlzLmxhYmVsU2l6ZSAqIDAuODUpIC8ga31weGApXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5Jywgb3ApO1xuXHRcdFx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleT09PSdub2RlU2NhbGUnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5vZGVTY2FsZSA9IHZhbDtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBlYWNoIG5vZGUgd3JhcHBlcjogc2NhbGUoYmFzZVMgKiBub2RlU2NhbGUpIFx1MjAxNCBrZWVwcyBkZWdyZWUtZHluYW1pYyBzaXppbmdcblx0XHRcdFx0XHRcdGcuc2VsZWN0QWxsPFNWR0dFbGVtZW50LCBXaWtpTm9kZT4oJy5sbG0tbm9kZS1zaGFwZS13cmFwcGVyJykuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGJhc2VTID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1iYXNlLXNjYWxlJykgPz8gMSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBgc2NhbGUoJHtiYXNlUyAqIHZhbH0pYDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleT09PSdlZGdlV2lkdGgnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVkZ2VXaWR0aCA9IHZhbDtcblx0XHRcdFx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LmF0dHIoJ3N0cm9rZS13aWR0aCcsIHZhbCk7XG5cdFx0XHRcdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnNpbSEuYWxwaGEoMC40KS5yZXN0YXJ0KCk7XG5cdFx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgaW5pdGlhbCB2aXNpYmlsaXR5IChoaWRlcyBvcnBoYW5zLCBoaWRkZW4gdHlwZXMsIGV0Yy4pXG5cdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdH0pOyAvLyByQUZcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBUb29sYmFyIHRvZ2dsZSB3aXJpbmcgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0bmxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHR0aGlzLl9sYWJlbHNVc2VyU2V0ID0gdHJ1ZTsgLy8gdXNlciBleHBsaWNpdGx5IGNob3NlIFx1MjAxNCBzdG9wIGF1dG8tbWFuYWdpbmdcblx0XHRcdHRoaXMuc2hvd05vZGVMYWJlbHM9IXRoaXMuc2hvd05vZGVMYWJlbHM7XG5cdFx0XHRubEJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNob3dOb2RlTGFiZWxzKTtcblx0XHRcdHRoaXMuc2VsTm9kZUxhYmVsPy5hdHRyKCdkaXNwbGF5Jyx0aGlzLnNob3dOb2RlTGFiZWxzP251bGw6J25vbmUnKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0ZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHR0aGlzLnNob3dFZGdlTGFiZWxzPSF0aGlzLnNob3dFZGdlTGFiZWxzO1xuXHRcdFx0ZWxCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaG93RWRnZUxhYmVscyk7XG5cdFx0XHR0aGlzLnNlbEVkZ2VMYWJlbD8uYXR0cignZGlzcGxheScsdGhpcy5zaG93RWRnZUxhYmVscz9udWxsOidub25lJyk7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdGFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5zaG93QXJyb3dzPSF0aGlzLnNob3dBcnJvd3M7XG5cdFx0XHRhckJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNob3dBcnJvd3MpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZT8uYXR0cignbWFya2VyLWVuZCcsdGhpcy5zaG93QXJyb3dzPyd1cmwoI2xsbS1hcnJvdyknOm51bGwpO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblx0XHRzYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHRoaXMuc2lkZWJhck9wZW49IXRoaXMuc2lkZWJhck9wZW47XG5cdFx0XHRzYkJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNpZGViYXJPcGVuKTtcblx0XHRcdHNpZGViYXIudG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1zaWRlYmFyLS1vcGVuJyx0aGlzLnNpZGViYXJPcGVuKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0c2VtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5zZW1TaWRlYmFyT3Blbj0hdGhpcy5zZW1TaWRlYmFyT3Blbjtcblx0XHRcdHNlbUJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNlbVNpZGViYXJPcGVuKTtcblx0XHRcdHNlbVNpZGViYXIudG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1zZW0tc2lkZWJhci0tb3BlbicsdGhpcy5zZW1TaWRlYmFyT3Blbik7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDVhLiBHZW5lcmF0ZSBlbWJlZGRpbmdzIGZvciBhbGwgd2lraSBub2RlcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cHJpdmF0ZSBhc3luYyBnZW5lcmF0ZUVtYmVkZGluZ3MocHJvZ3Jlc3NFbDogSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCB3aWtpRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKGYgPT5cblx0XHRcdGYucGF0aC5zdGFydHNXaXRoKCd3aWtpLycpICYmICFbJ3dpa2kvdXBkYXRlcy8nLCd3aWtpL2NvbXBpbGVkLycsJ3dpa2kvZ3JhcGgvJywnd2lraS9zeW50aGVzaXMvJywnd2lraS9kZWNpc2lvbnMvJ10uc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKSk7XG5cblx0XHRjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcltdPiA9IHt9O1xuXHRcdGNvbnN0IHRvdGFsID0gd2lraUZpbGVzLmxlbmd0aDtcblx0XHRsZXQgZG9uZSA9IDAsIGZhaWxlZCA9IDA7XG5cblx0XHRmb3IgKGNvbnN0IGZpbGUgb2Ygd2lraUZpbGVzKSB7XG5cdFx0XHRwcm9ncmVzc0VsLnRleHRDb250ZW50ID0gYCR7ZG9uZX0vJHt0b3RhbH0gZW1iZWRkZWQke2ZhaWxlZCA/IGAgKCR7ZmFpbGVkfSBmYWlsZWQpYCA6ICcnfVx1MjAyNmA7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByYXcgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpO1xuXHRcdFx0XHQvLyBVc2UgZmlyc3QgMTAwMCBjaGFycyBvZiBjb250ZW50IChza2lwIGZyb250bWF0dGVyKVxuXHRcdFx0XHRjb25zdCBib2R5ID0gcmF3LnJlcGxhY2UoL14tLS1bXFxzXFxTXSo/LS0tXFxuPy8sICcnKS5zbGljZSgwLCAxMDAwKTtcblx0XHRcdFx0Y29uc3QgdGV4dCA9IGZpbGUuYmFzZW5hbWUgKyAnLiAnICsgYm9keTtcblx0XHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke3RoaXMuZW1iZWRkaW5nRW5kcG9pbnR9L2FwaS9lbWJlZGRpbmdzYCwge1xuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbW9kZWw6IHRoaXMuZW1iZWRkaW5nTW9kZWwsIHByb21wdDogdGV4dCB9KSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghcmVzcC5vaykgeyBmYWlsZWQrKzsgY29udGludWU7IH1cblx0XHRcdFx0Y29uc3QgdmVjID0gKGF3YWl0IHJlc3AuanNvbigpKS5lbWJlZGRpbmcgYXMgbnVtYmVyW107XG5cdFx0XHRcdGlmICh2ZWM/Lmxlbmd0aCkgcmVzdWx0W2ZpbGUuYmFzZW5hbWVdID0gdmVjO1xuXHRcdFx0fSBjYXRjaCB7IGZhaWxlZCsrOyB9XG5cdFx0XHRkb25lKys7XG5cdFx0fVxuXG5cdFx0cHJvZ3Jlc3NFbC50ZXh0Q29udGVudCA9IGBEb25lOiAke2RvbmV9IGVtYmVkZGVkLCAke2ZhaWxlZH0gZmFpbGVkLiBTYXZpbmdcdTIwMjZgO1xuXG5cdFx0Ly8gU2F2ZSB0byB3aWtpL3NlYXJjaC9lbWJlZGRpbmdzLmpzb25cblx0XHRjb25zdCBvdXRQYXRoID0gJ3dpa2kvc2VhcmNoL2VtYmVkZGluZ3MuanNvbic7XG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob3V0UGF0aCk7XG5cdFx0aWYgKGV4aXN0aW5nIGluc3RhbmNlb2YgVEZpbGUpIHtcblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShleGlzdGluZywganNvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVuc3VyZSBmb2xkZXIgZXhpc3RzXG5cdFx0XHR0cnkgeyBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoJ3dpa2kvc2VhcmNoJyk7IH0gY2F0Y2gge31cblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShvdXRQYXRoLCBqc29uKTtcblx0XHR9XG5cdFx0cHJvZ3Jlc3NFbC50ZXh0Q29udGVudCA9IGBcdTI3MTMgJHtPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aH0gZW1iZWRkaW5ncyBzYXZlZC5gO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDViLiBTZW1hbnRpYyBTaWRlYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRwcml2YXRlIGJ1aWxkU2VtYW50aWNTaWRlYmFyKGVsOiBIVE1MRWxlbWVudCkge1xuXHRcdGVsLmVtcHR5KCk7XG5cdFx0Y29uc3QgZW1iID0gdGhpcy5lbWJlZGRpbmdzO1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy5ub2RlcztcblxuXHRcdGNvbnN0IHNlY3Rpb24gPSAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IGVsLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1zZWN0aW9uJyB9KTtcblx0XHRcdHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLXRpdGxlJywgdGV4dDogdGl0bGUgfSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHR9O1xuXG5cdFx0aWYgKCFlbWIgfHwgZW1iLnNpemUgPT09IDApIHtcblx0XHRcdGNvbnN0IG5zID0gc2VjdGlvbignU2VtYW50aWMgTWV0cmljcycpO1xuXHRcdFx0bnMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ05vIGVtYmVkZGluZ3MgZm91bmQuIEdlbmVyYXRlIHRoZW0gYmVsb3cgKHJlcXVpcmVzIE9sbGFtYSBydW5uaW5nKS4nIH0pO1xuXG5cdFx0XHQvLyBHZW5lcmF0ZSBidXR0b25cblx0XHRcdGNvbnN0IGdlblJvdyA9IG5zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zZW0tZ2VuLXJvdycgfSk7XG5cdFx0XHRjb25zdCBlbmRwb2ludElucHV0ID0gZ2VuUm93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcblx0XHRcdFx0Y2xzOiAnbGxtLXNlbS1nZW4taW5wdXQnLFxuXHRcdFx0XHRhdHRyOiB7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRoaXMuZW1iZWRkaW5nRW5kcG9pbnQsIHBsYWNlaG9sZGVyOiAnaHR0cDovL2xvY2FsaG9zdDoxMTQzNCcgfVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBtb2RlbElucHV0ID0gZ2VuUm93LmNyZWF0ZUVsKCdpbnB1dCcsIHtcblx0XHRcdFx0Y2xzOiAnbGxtLXNlbS1nZW4taW5wdXQnLFxuXHRcdFx0XHRhdHRyOiB7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRoaXMuZW1iZWRkaW5nTW9kZWwsIHBsYWNlaG9sZGVyOiAnbm9taWMtZW1iZWQtdGV4dCcgfVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBwcm9ncmVzcyA9IG5zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zZW0tZ2VuLXByb2dyZXNzJyB9KTtcblx0XHRcdGNvbnN0IGdlbkJ0biA9IG5zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2xsbS1ncmFwaC1idG4gbGxtLXNlbS1nZW4tYnRuJywgdGV4dDogJ0dlbmVyYXRlIEVtYmVkZGluZ3MnIH0pO1xuXG5cdFx0XHRnZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1iZWRkaW5nRW5kcG9pbnQgPSBlbmRwb2ludElucHV0LnZhbHVlLnRyaW0oKSB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMTQzNCc7XG5cdFx0XHRcdHRoaXMuZW1iZWRkaW5nTW9kZWwgICAgPSBtb2RlbElucHV0LnZhbHVlLnRyaW0oKSAgICB8fCAnbm9taWMtZW1iZWQtdGV4dCc7XG5cdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdGdlbkJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdGdlbkJ0bi50ZXh0Q29udGVudCA9ICdHZW5lcmF0aW5nXHUyMDI2Jztcblx0XHRcdFx0YXdhaXQgdGhpcy5nZW5lcmF0ZUVtYmVkZGluZ3MocHJvZ3Jlc3MpO1xuXHRcdFx0XHQvLyBSZWxvYWQgYW5kIHJlYnVpbGQgc2lkZWJhclxuXHRcdFx0XHRhd2FpdCB0aGlzLmxvYWRFbWJlZGRpbmdzKCk7XG5cdFx0XHRcdHRoaXMuYnVpbGRTZW1hbnRpY1NpZGViYXIoZWwpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIENvc2luZSBzaW1pbGFyaXR5IGhlbHBlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBjb3NTaW0gPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdKSA9PiB7XG5cdFx0XHRsZXQgZG90ID0gMCwgbmEgPSAwLCBuYiA9IDA7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHsgZG90ICs9IGFbaV0qYltpXTsgbmEgKz0gYVtpXSphW2ldOyBuYiArPSBiW2ldKmJbaV07IH1cblx0XHRcdHJldHVybiBuYSA9PT0gMCB8fCBuYiA9PT0gMCA/IDAgOiBkb3QgLyAoTWF0aC5zcXJ0KG5hKSAqIE1hdGguc3FydChuYikpO1xuXHRcdH07XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgQ29tcHV0ZSBwZXItZG9tYWluIGNlbnRyb2lkcyBhbmQgY29oZXNpb24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3QgZG9tYWluTm9kZXMgPSBuZXcgTWFwPHN0cmluZywgV2lraU5vZGVbXT4oKTtcblx0XHRmb3IgKGNvbnN0IG5kIG9mIG5vZGVzKSB7XG5cdFx0XHRpZiAoIW5kLmRvbWFpbiB8fCAhZW1iLmhhcyhuZC5pZCkpIGNvbnRpbnVlO1xuXHRcdFx0aWYgKCFkb21haW5Ob2Rlcy5oYXMobmQuZG9tYWluKSkgZG9tYWluTm9kZXMuc2V0KG5kLmRvbWFpbiwgW10pO1xuXHRcdFx0ZG9tYWluTm9kZXMuZ2V0KG5kLmRvbWFpbikhLnB1c2gobmQpO1xuXHRcdH1cblxuXHRcdHR5cGUgRG9tYWluU3RhdHMgPSB7IGNvaGVzaW9uOiBudW1iZXI7IGNlbnRyb2lkOiBudW1iZXJbXTsgb3V0bGllcnM6IHtpZDogc3RyaW5nOyBzaW06IG51bWJlcn1bXSB9O1xuXHRcdGNvbnN0IGRvbWFpblN0YXRzID0gbmV3IE1hcDxzdHJpbmcsIERvbWFpblN0YXRzPigpO1xuXHRcdGNvbnN0IGRpbSA9IGVtYi52YWx1ZXMoKS5uZXh0KCkudmFsdWU/Lmxlbmd0aCA/PyAwO1xuXG5cdFx0Zm9yIChjb25zdCBbZG9tLCBkbm9kZXNdIG9mIGRvbWFpbk5vZGVzKSB7XG5cdFx0XHRpZiAoZG5vZGVzLmxlbmd0aCA8IDIgfHwgZGltID09PSAwKSBjb250aW51ZTtcblx0XHRcdC8vIGNlbnRyb2lkXG5cdFx0XHRjb25zdCBjZW50cm9pZCA9IG5ldyBBcnJheTxudW1iZXI+KGRpbSkuZmlsbCgwKTtcblx0XHRcdGZvciAoY29uc3QgbmQgb2YgZG5vZGVzKSB7XG5cdFx0XHRcdGNvbnN0IHYgPSBlbWIuZ2V0KG5kLmlkKSE7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGltOyBpKyspIGNlbnRyb2lkW2ldICs9IHZbaV0gLyBkbm9kZXMubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29oZXNpb24gPSBtZWFuIGNvcy1zaW0gdG8gY2VudHJvaWRcblx0XHRcdGNvbnN0IHNpbXMgPSBkbm9kZXMubWFwKG5kID0+ICh7IGlkOiBuZC5pZCwgc2ltOiBjb3NTaW0oZW1iLmdldChuZC5pZCkhLCBjZW50cm9pZCkgfSkpO1xuXHRcdFx0Y29uc3QgY29oZXNpb24gPSBzaW1zLnJlZHVjZSgocywgeCkgPT4gcyArIHguc2ltLCAwKSAvIHNpbXMubGVuZ3RoO1xuXHRcdFx0Ly8gb3V0bGllcnMgPSBsb3dlc3Qgc2ltIHRvIGNlbnRyb2lkXG5cdFx0XHRjb25zdCBvdXRsaWVycyA9IFsuLi5zaW1zXS5zb3J0KChhLCBiKSA9PiBhLnNpbSAtIGIuc2ltKS5zbGljZSgwLCA1KTtcblx0XHRcdGRvbWFpblN0YXRzLnNldChkb20sIHsgY29oZXNpb24sIGNlbnRyb2lkLCBvdXRsaWVycyB9KTtcblx0XHR9XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgRG9tYWluIENvaGVzaW9uIHNlY3Rpb24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3QgY3MgPSBzZWN0aW9uKCdEb21haW4gQ29oZXNpb24nKTtcblx0XHRjcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbXV0ZWQnLCB0ZXh0OiAnYXZnIGNvcy1zaW0gdG8gZG9tYWluIGNlbnRyb2lkICgxLjAgPSBwZXJmZWN0bHkgZm9jdXNlZCknIH0pO1xuXHRcdGNvbnN0IHNvcnRlZCA9IFsuLi5kb21haW5TdGF0cy5lbnRyaWVzKCldLnNvcnQoKGEsYikgPT4gYlsxXS5jb2hlc2lvbiAtIGFbMV0uY29oZXNpb24pO1xuXHRcdGNvbnN0IG1heENvaCA9IE1hdGgubWF4KC4uLnNvcnRlZC5tYXAoKFssdl0pID0+IHYuY29oZXNpb24pLCAwLjAxKTtcblx0XHRmb3IgKGNvbnN0IFtkb20sIHsgY29oZXNpb24gfV0gb2Ygc29ydGVkKSB7XG5cdFx0XHRjb25zdCByb3cgPSBjcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItYmFyLXJvdycgfSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1iYXItbmFtZScsIHRleHQ6IGRvbSB9KTtcblx0XHRcdGNvbnN0IHRyYWNrID0gcm93LmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi10cmFjaycgfSk7XG5cdFx0XHRjb25zdCBwY3QgPSBNYXRoLm1heChjb2hlc2lvbiAvIG1heENvaCAqIDEwMCwgMik7XG5cdFx0XHRjb25zdCBodWUgPSBNYXRoLnJvdW5kKGNvaGVzaW9uICogMTIwKTsgLy8gcmVkXHUyMTkyZ3JlZW5cblx0XHRcdHRyYWNrLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1maWxsJywgYXR0cjogeyBzdHlsZTogYHdpZHRoOiR7cGN0fSU7YmFja2dyb3VuZDpoc2woJHtodWV9LDYwJSw0NSUpYCB9fSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1iYXItY250JywgdGV4dDogY29oZXNpb24udG9GaXhlZCgyKSB9KTtcblx0XHR9XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgU2VtYW50aWMgT3V0bGllcnMgc2VjdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBvcyA9IHNlY3Rpb24oJ1NlbWFudGljIE91dGxpZXJzJyk7XG5cdFx0b3MuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ25vZGVzIGZhcnRoZXN0IGZyb20gdGhlaXIgZG9tYWluIGNlbnRyb2lkJyB9KTtcblx0XHRmb3IgKGNvbnN0IFtkb20sIHsgb3V0bGllcnMgfV0gb2Ygc29ydGVkLnNsaWNlKDAsIDgpKSB7XG5cdFx0XHRjb25zdCBkb21Sb3cgPSBvcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2Itb3V0bGllci1kb21haW4nIH0pO1xuXHRcdFx0ZG9tUm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItYmFyLW5hbWUnLCB0ZXh0OiBkb20gfSk7XG5cdFx0XHRmb3IgKGNvbnN0IG8gb2Ygb3V0bGllcnMuc2xpY2UoMCwgMykpIHtcblx0XHRcdFx0Y29uc3QgciA9IG9zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1vdXRsaWVyLXJvdycgfSk7XG5cdFx0XHRcdHIuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1vdXRsaWVyLXNpbScsIHRleHQ6IG8uc2ltLnRvRml4ZWQoMikgfSk7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSByLmNyZWF0ZUVsKCdhJywgeyBjbHM6ICdsbG0tc2Itb3V0bGllci1uYW1lJywgdGV4dDogby5pZC5sZW5ndGggPiAyOCA/IG8uaWQuc2xpY2UoMCwyNikrJ1x1MjAyNicgOiBvLmlkIH0pO1xuXHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBvLmlkKTtcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoby5pZCwgJycsIGZhbHNlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIE1pc3NpbmcgTGlua3Mgc2VjdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBtcyA9IHNlY3Rpb24oJ01pc3NpbmcgTGlua3MnKTtcblx0XHRtcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbXV0ZWQnLCB0ZXh0OiAnc2ltaWxhciBub2RlcyB3aXRob3V0IGFuIGVkZ2UgKGNvcy1zaW0gPiAwLjgwKScgfSk7XG5cdFx0Y29uc3QgZWRnZVNldCA9IG5ldyBTZXQodGhpcy5lZGdlcy5tYXAoZSA9PiBgJHtlLnNvdXJjZX18JHtlLnRhcmdldH1gKSk7XG5cdFx0Y29uc3QgZW1iSWRzICA9IG5vZGVzLmZpbHRlcihuID0+IGVtYi5oYXMobi5pZCkpLm1hcChuID0+IG4uaWQpO1xuXHRcdGNvbnN0IG1pc3Npbmc6IHsgYTogc3RyaW5nOyBiOiBzdHJpbmc7IHNpbTogbnVtYmVyIH1bXSA9IFtdO1xuXHRcdGNvbnN0IE1JU1NfVEhSRVNIID0gMC44MDtcblx0XHQvLyBPKG5cdTAwQjIpIGJ1dCBib3VuZGVkIFx1MjAxNCBvbmx5IGNvbXB1dGUgaWYgPCAzMDAgZW1iZWRkZWQgbm9kZXNcblx0XHRpZiAoZW1iSWRzLmxlbmd0aCA8PSAzMDApIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZW1iSWRzLmxlbmd0aCAmJiBtaXNzaW5nLmxlbmd0aCA8IDIwMDsgaSsrKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSBpKzE7IGogPCBlbWJJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoZWRnZVNldC5oYXMoYCR7ZW1iSWRzW2ldfXwke2VtYklkc1tqXX1gKSB8fCBlZGdlU2V0LmhhcyhgJHtlbWJJZHNbal19fCR7ZW1iSWRzW2ldfWApKSBjb250aW51ZTtcblx0XHRcdFx0XHRjb25zdCBzID0gY29zU2ltKGVtYi5nZXQoZW1iSWRzW2ldKSEsIGVtYi5nZXQoZW1iSWRzW2pdKSEpO1xuXHRcdFx0XHRcdGlmIChzID49IE1JU1NfVEhSRVNIKSBtaXNzaW5nLnB1c2goeyBhOiBlbWJJZHNbaV0sIGI6IGVtYklkc1tqXSwgc2ltOiBzIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtaXNzaW5nLnNvcnQoKGEsYikgPT4gYi5zaW0gLSBhLnNpbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1tdXRlZCcsIHRleHQ6IGAke2VtYklkcy5sZW5ndGh9IG5vZGVzIFx1MjAxNCB0b28gbWFueSBmb3IgZnVsbCBzY2FuIChtYXggMzAwKWAgfSk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgeyBhLCBiLCBzaW0gfSBvZiBtaXNzaW5nLnNsaWNlKDAsIDE1KSkge1xuXHRcdFx0Y29uc3QgciA9IG1zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1taXNzLXJvdycgfSk7XG5cdFx0XHRyLmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2Itb3V0bGllci1zaW0nLCB0ZXh0OiBzaW0udG9GaXhlZCgyKSB9KTtcblx0XHRcdGNvbnN0IGxhID0gci5jcmVhdGVFbCgnYScsIHsgY2xzOiAnbGxtLXNiLW1pc3MtbmFtZScsIHRleHQ6IGEubGVuZ3RoPjE4P2Euc2xpY2UoMCwxNikrJ1x1MjAyNic6YSB9KTtcblx0XHRcdGxhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChhLCAnJywgZmFsc2UpKTtcblx0XHRcdHIuY3JlYXRlU3Bhbih7IHRleHQ6ICcgXHUyMTk0ICcgfSk7XG5cdFx0XHRjb25zdCBsYiA9IHIuY3JlYXRlRWwoJ2EnLCB7IGNsczogJ2xsbS1zYi1taXNzLW5hbWUnLCB0ZXh0OiBiLmxlbmd0aD4xOD9iLnNsaWNlKDAsMTYpKydcdTIwMjYnOmIgfSk7XG5cdFx0XHRsYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoYiwgJycsIGZhbHNlKSk7XG5cdFx0fVxuXHRcdGlmIChtaXNzaW5nLmxlbmd0aCA9PT0gMCAmJiBlbWJJZHMubGVuZ3RoIDw9IDMwMCkge1xuXHRcdFx0bXMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ05vbmUgZm91bmQgYWJvdmUgdGhyZXNob2xkLicgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIE5lYXIgRHVwbGljYXRlcyBzZWN0aW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IGRzID0gc2VjdGlvbignTmVhciBEdXBsaWNhdGVzJyk7XG5cdFx0ZHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ2Nvcy1zaW0gPiAwLjkzIFx1MjAxNCBwb3RlbnRpYWwgcmVkdW5kYW5jeScgfSk7XG5cdFx0Y29uc3QgZHVwZXMgPSBtaXNzaW5nLmZpbHRlcih4ID0+IHguc2ltID49IDAuOTMpO1xuXHRcdGlmIChkdXBlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdGRzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1tdXRlZCcsIHRleHQ6ICdOb25lIGZvdW5kLicgfSk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgeyBhLCBiLCBzaW0gfSBvZiBkdXBlcy5zbGljZSgwLCAxMCkpIHtcblx0XHRcdGNvbnN0IHIgPSBkcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbWlzcy1yb3cnIH0pO1xuXHRcdFx0ci5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLW91dGxpZXItc2ltJywgdGV4dDogc2ltLnRvRml4ZWQoMikgfSk7XG5cdFx0XHRjb25zdCBsYSA9IHIuY3JlYXRlRWwoJ2EnLCB7IGNsczogJ2xsbS1zYi1taXNzLW5hbWUnLCB0ZXh0OiBhLmxlbmd0aD4xOD9hLnNsaWNlKDAsMTYpKydcdTIwMjYnOmEgfSk7XG5cdFx0XHRsYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoYSwgJycsIGZhbHNlKSk7XG5cdFx0XHRyLmNyZWF0ZVNwYW4oeyB0ZXh0OiAnIFx1MjE5NCAnIH0pO1xuXHRcdFx0Y29uc3QgbGIgPSByLmNyZWF0ZUVsKCdhJywgeyBjbHM6ICdsbG0tc2ItbWlzcy1uYW1lJywgdGV4dDogYi5sZW5ndGg+MTg/Yi5zbGljZSgwLDE2KSsnXHUyMDI2JzpiIH0pO1xuXHRcdFx0bGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGIsICcnLCBmYWxzZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCA1LiBTaWRlYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRwcml2YXRlIGJ1aWxkU2lkZWJhcihzaWRlYmFyOiBIVE1MRWxlbWVudCwgQTogQW5hbHl0aWNzLCBhZGo6IE1hcDxzdHJpbmcsU2V0PHN0cmluZz4+KSB7XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gc2lkZWJhci5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi1zZWN0aW9uJyB9KTtcblx0XHRcdHMuY3JlYXRlRGl2KHsgY2xzOidsbG0tc2ItdGl0bGUnLCB0ZXh0OiB0aXRsZSB9KTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH07XG5cblx0XHQvLyBQaHlzaWNzIHNsaWRlcnNcblx0XHRjb25zdCBwcyA9IHNlY3Rpb24oJ1BoeXNpY3MnKTtcblx0XHRjb25zdCBta1NsaWRlciA9IChsYWJlbDogc3RyaW5nLCBrZXk6IHN0cmluZywgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCB2YWw6IG51bWJlciwgc3RlcDogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb25zdCByb3cgPSBwcy5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi1zbGlkZXItcm93JyB9KTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOidsbG0tc2Itc2xpZGVyLWxibCcsIHRleHQ6IGxhYmVsIH0pO1xuXHRcdFx0Y29uc3QgaW5wdXQgPSByb3cuY3JlYXRlRWwoJ2lucHV0JywgeyB0eXBlOidyYW5nZScgfSk7XG5cdFx0XHRpbnB1dC5hZGRDbGFzcygnbGxtLXNiLXNsaWRlcicpO1xuXHRcdFx0aW5wdXQubWluPVN0cmluZyhtaW4pOyBpbnB1dC5tYXg9U3RyaW5nKG1heCk7XG5cdFx0XHRpbnB1dC52YWx1ZT1TdHJpbmcodmFsKTsgaW5wdXQuc3RlcD1TdHJpbmcoc3RlcCk7XG5cdFx0XHRpbnB1dC5kYXRhc2V0LnBoeXNpY3MgPSBrZXk7XG5cdFx0XHRjb25zdCBkaXNwbGF5ID0gc3RlcCA8IDEgPyB2YWwudG9GaXhlZCgyKSA6IFN0cmluZyh2YWwpO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6J2xsbS1zYi1zbGlkZXItdmFsJywgdGV4dDogZGlzcGxheSB9KTtcblx0XHR9O1xuXHRcdG1rU2xpZGVyKCdMaW5rIGRpc3QnLCAgICdsaW5rRGlzdCcsICAgIDIwLCAgIDIwMCwgIHRoaXMubGlua0Rpc3QsICAgIDUpO1xuXHRcdG1rU2xpZGVyKCdSZXB1bHNpb24nLCAgICdjaGFyZ2VTdHInLCAgIDMwLCAgIDgwMCwgIHRoaXMuY2hhcmdlU3RyLCAgIDEwKTtcblx0XHRta1NsaWRlcignR3Jhdml0eScsICAgICAnZ3Jhdml0eVN0cicsICAwLCAgICAwLjMsICB0aGlzLmdyYXZpdHlTdHIsICAwLjAxKTtcblx0XHRta1NsaWRlcignTm9kZSBzaXplJywgICAnbm9kZVNjYWxlJywgICAwLjMsICA0LjAsICB0aGlzLm5vZGVTY2FsZSwgICAwLjEpO1xuXHRcdG1rU2xpZGVyKCdFZGdlIHdpZHRoJywgICdlZGdlV2lkdGgnLCAgIDAuNSwgIDguMCwgIHRoaXMuZWRnZVdpZHRoLCAgIDAuNSk7XG5cdFx0bWtTbGlkZXIoJ0ZvbnQgc2l6ZScsICAgJ2xhYmVsU2l6ZScsICAgNiwgICAgMjQsICAgdGhpcy5sYWJlbFNpemUsICAgMSk7XG5cdFx0bWtTbGlkZXIoJ0xhYmVscyBmYWRlJywgJ2xhYmVsRmFkZUF0JywgMC4wNSwgMy4wLCAgdGhpcy5sYWJlbEZhZGVBdCwgMC4wNSk7XG5cblx0XHQvLyBHcmFwaCBIZWFsdGhcblx0XHRjb25zdCBocyA9IHNlY3Rpb24oJ0dyYXBoIEhlYWx0aCcpO1xuXHRcdGNvbnN0IGNhcmRzID0gW1xuXHRcdFx0e2xibDonTm9kZXMnLCAgIHZhbDpBLm4sICAgICAgICB3YXJuOmZhbHNlfSxcblx0XHRcdHtsYmw6J0VkZ2VzJywgICB2YWw6QS5tLCAgICAgICAgd2FybjpmYWxzZX0sXG5cdFx0XHR7bGJsOidEZW5zaXR5JywgdmFsOkEuZGVuc2l0eSwgIHdhcm46QS5kZW5zaXR5PDAuMDF9LFxuXHRcdFx0e2xibDonQXZnIGRlZycsIHZhbDpBLmF2Z0RlZywgICB3YXJuOkEuYXZnRGVnPDF9LFxuXHRcdFx0e2xibDonT3JwaGFucycsIHZhbDpBLm9ycGhhbnMsICB3YXJuOkEub3JwaGFucz4wfSxcblx0XHRdO1xuXHRcdGNvbnN0IGNhcmRHcmlkID0gaHMuY3JlYXRlRGl2KHsgY2xzOidsbG0tc2ItY2FyZHMnIH0pO1xuXHRcdGZvciAoY29uc3QgYyBvZiBjYXJkcykge1xuXHRcdFx0Y29uc3QgY2FyZCA9IGNhcmRHcmlkLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLWNhcmQnKyhjLndhcm4/JyBsbG0tc2ItY2FyZC0td2Fybic6JycpIH0pO1xuXHRcdFx0Y2FyZC5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWNhcmQtdmFsJyx0ZXh0OlN0cmluZyhjLnZhbCl9KTtcblx0XHRcdGNhcmQuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1jYXJkLWxibCcsdGV4dDpjLmxibH0pO1xuXHRcdH1cblx0XHQvLyBPcnBoYW5zIHRvZ2dsZVxuXHRcdGlmIChBLm9ycGhhbnMgPiAwKSB7XG5cdFx0XHRjb25zdCBvcnBoYW5Sb3cgPSBocy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2Itb3JwaGFuLXJvdycgfSk7XG5cdFx0XHRjb25zdCBvcnBoYW5CdG4gPSBvcnBoYW5Sb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHtcblx0XHRcdFx0Y2xzOiAnbGxtLWdyYXBoLWJ0biBsbG0tZ3JhcGgtYnRuLS14cycgKyAodGhpcy5zaG93T3JwaGFucyA/ICcgbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyA6ICcnKSxcblx0XHRcdFx0dGV4dDogdGhpcy5zaG93T3JwaGFucyA/IGBIaWRlICR7QS5vcnBoYW5zfSBvcnBoYW5zYCA6IGBTaG93ICR7QS5vcnBoYW5zfSBvcnBoYW5zYCxcblx0XHRcdH0pO1xuXHRcdFx0b3JwaGFuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNob3dPcnBoYW5zID0gIXRoaXMuc2hvd09ycGhhbnM7XG5cdFx0XHRcdG9ycGhhbkJ0bi50ZXh0Q29udGVudCA9IHRoaXMuc2hvd09ycGhhbnMgPyBgSGlkZSAke0Eub3JwaGFuc30gb3JwaGFuc2AgOiBgU2hvdyAke0Eub3JwaGFuc30gb3JwaGFuc2A7XG5cdFx0XHRcdG9ycGhhbkJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJywgdGhpcy5zaG93T3JwaGFucyk7XG5cdFx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBFcGlzdGVtaWMgbGF5ZXJzIFx1MjAxNCBjbGlja2FibGUgdG8gdG9nZ2xlIHR5cGUgdmlzaWJpbGl0eVxuXHRcdGNvbnN0IGxzID0gc2VjdGlvbignRXBpc3RlbWljIExheWVycycpO1xuXG5cdFx0Ly8gU2hhcGUgU1ZHIGhlbHBlclxuXHRcdGNvbnN0IHNoYXBlU1ZHID0gKHNoYXBlOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0Y29uc3QgZiA9IGBmaWxsPVwiJHtjb2xvcn1cImA7XG5cdFx0XHRzd2l0Y2ggKHNoYXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2RpYW1vbmQnOlxuXHRcdFx0XHRcdHJldHVybiBgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCI+PHJlY3QgJHtmfSB4PVwiMS41XCIgeT1cIjEuNVwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgNSA1KVwiLz48L3N2Zz5gO1xuXHRcdFx0XHRjYXNlICdzcXVhcmUnOlxuXHRcdFx0XHRcdHJldHVybiBgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCI+PHJlY3QgJHtmfSB4PVwiMS41XCIgeT1cIjEuNVwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIiByeD1cIjEuNVwiLz48L3N2Zz5gO1xuXHRcdFx0XHRjYXNlICdoZXhhZ29uJzpcblx0XHRcdFx0XHRyZXR1cm4gYDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPjxwb2x5Z29uICR7Zn0gcG9pbnRzPVwiNSwxIDguNywzIDguNyw3IDUsOSAxLjMsNyAxLjMsM1wiLz48L3N2Zz5gO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCI+PGNpcmNsZSAke2Z9IGN4PVwiNVwiIGN5PVwiNVwiIHI9XCI0XCIvPjwvc3ZnPmA7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIEFsbCAvIE5vbmUgY29udHJvbHNcblx0XHRjb25zdCBsYXllckN0cmwgPSBscy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbGF5ZXItY3RybCcgfSk7XG5cdFx0Y29uc3QgYWxsVHlwZXNCdG4gID0gbGF5ZXJDdHJsLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2xsbS1ncmFwaC1idG4gbGxtLWdyYXBoLWJ0bi0teHMnLCB0ZXh0OiAnQWxsJyB9KTtcblx0XHRjb25zdCBub25lVHlwZXNCdG4gPSBsYXllckN0cmwuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLWJ0biBsbG0tZ3JhcGgtYnRuLS14cycsIHRleHQ6ICdOb25lJyB9KTtcblxuXHRcdC8vIFN0b3JlIHJvdyByZWZzIG9uIGluc3RhbmNlIHNvIHRvZ2dsZSBoYW5kbGVycyBjYW4gdXBkYXRlIGNsYXNzZXMgd2l0aG91dCBmdWxsIHJlYnVpbGRcblx0XHR0aGlzLmxheWVyUm93TWFwLmNsZWFyKCk7XG5cblx0XHRjb25zdCBtYXhMID0gTWF0aC5tYXgoLi4uQS5sYXllcnMubWFwKGw9PmwuY291bnQpLDEpO1xuXHRcdEEubGF5ZXJzLmZvckVhY2goKGwsIGkpID0+IHtcblx0XHRcdGNvbnN0IHR5cGVOYW1lID0gbC5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjb2xvciAgICA9IGwuY29sb3I7XG5cdFx0XHRjb25zdCBzaGFwZSAgICA9IE5PREVfU0hBUEVTW3R5cGVOYW1lXSA/PyAnY2lyY2xlJztcblxuXHRcdFx0Y29uc3Qgcm93ID0gbHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWxheWVyLXJvdycgfSk7XG5cdFx0XHRpZiAobC5jb3VudCA+IDApIHJvdy5hZGRDbGFzcygnbGxtLXNiLWxheWVyLWNsaWNrYWJsZScpO1xuXHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKHR5cGVOYW1lKSkgcm93LmFkZENsYXNzKCdsbG0tc2ItbGF5ZXItcm93LS1vZmYnKTtcblx0XHRcdHRoaXMubGF5ZXJSb3dNYXAuc2V0KHR5cGVOYW1lLCByb3cpO1xuXG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1sYXllci1udW0nLCB0ZXh0OiBTdHJpbmcoaSArIDEpIH0pO1xuXHRcdFx0cm93LmlubmVySFRNTCArPSBzaGFwZVNWRyhzaGFwZSwgY29sb3IpO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItbGF5ZXItbmFtZScsIHRleHQ6IGwubmFtZSB9KS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXHRcdFx0Y29uc3QgdHJhY2sgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLXRyYWNrJyB9KTtcblx0XHRcdGlmIChsLmNvdW50ID4gMCkge1xuXHRcdFx0XHRjb25zdCBmaWxsID0gdHJhY2suY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWZpbGwnIH0pO1xuXHRcdFx0XHRmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1heChsLmNvdW50L21heEwqMTAwLDQpfSU7YmFja2dyb3VuZDoke2NvbG9yfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cmFjay5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWdhcCcsIHRleHQ6ICdnYXAnIH0pO1xuXHRcdFx0fVxuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItbGF5ZXItY250JywgdGV4dDogbC5jb3VudCA/IFN0cmluZyhsLmNvdW50KSA6ICdcdTIwMTQnIH0pXG5cdFx0XHRcdC5zdHlsZS5jb2xvciA9IGwuY291bnQgPyBjb2xvciA6ICd2YXIoLS10ZXh0LWZhaW50KSc7XG5cblx0XHRcdGlmIChsLmNvdW50ID4gMCkge1xuXHRcdFx0XHRyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKHR5cGVOYW1lKSkgdGhpcy5oaWRkZW5UeXBlcy5kZWxldGUodHlwZU5hbWUpO1xuXHRcdFx0XHRcdGVsc2UgdGhpcy5oaWRkZW5UeXBlcy5hZGQodHlwZU5hbWUpO1xuXHRcdFx0XHRcdC8vIE9ubHkgdG9nZ2xlIGNsYXNzIFx1MjAxNCBubyBmdWxsIHNpZGViYXIgcmVidWlsZCAoa2VlcHMgc2xpZGVycyArIGh1YiBjbGlja3MgYWxpdmUpXG5cdFx0XHRcdFx0dGhpcy5sYXllclJvd01hcC5mb3JFYWNoKChyLCB0KSA9PlxuXHRcdFx0XHRcdFx0ci50b2dnbGVDbGFzcygnbGxtLXNiLWxheWVyLXJvdy0tb2ZmJywgdGhpcy5oaWRkZW5UeXBlcy5oYXModCkpKTtcblx0XHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YWxsVHlwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGRlblR5cGVzLmNsZWFyKCk7XG5cdFx0XHR0aGlzLmxheWVyUm93TWFwLmZvckVhY2gociA9PiByLnJlbW92ZUNsYXNzKCdsbG0tc2ItbGF5ZXItcm93LS1vZmYnKSk7XG5cdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblx0XHRub25lVHlwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRBLmxheWVycy5mb3JFYWNoKGwgPT4geyBpZiAobC5jb3VudCA+IDApIHRoaXMuaGlkZGVuVHlwZXMuYWRkKGwubmFtZS50b0xvd2VyQ2FzZSgpKTsgfSk7XG5cdFx0XHR0aGlzLmxheWVyUm93TWFwLmZvckVhY2goKHIsIHQpID0+XG5cdFx0XHRcdHIudG9nZ2xlQ2xhc3MoJ2xsbS1zYi1sYXllci1yb3ctLW9mZicsIHRoaXMuaGlkZGVuVHlwZXMuaGFzKHQpKSk7XG5cdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblxuXHRcdC8vIEVkZ2UgdHlwZXNcblx0XHRjb25zdCBlcyA9IHNlY3Rpb24oJ0VkZ2UgVHlwZXMnKTtcblx0XHRjb25zdCBtYXhFID0gTWF0aC5tYXgoLi4uQS5lZGdlVHlwZXMubWFwKGU9PmUuY291bnQpLDEpO1xuXHRcdGZvciAoY29uc3QgZSBvZiBBLmVkZ2VUeXBlcykge1xuXHRcdFx0Y29uc3Qgcm93PWVzLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItYmFyLXJvdyd9KTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1iYXItbmFtZScsdGV4dDplLmxhYmVsfSk7XG5cdFx0XHRjb25zdCB0cmFjaz1yb3cuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi10cmFjayd9KTtcblx0XHRcdGNvbnN0IGZpbGw9dHJhY2suY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1maWxsIGxsbS1zYi1maWxsLS1ibHVlJ30pO1xuXHRcdFx0ZmlsbC5zdHlsZS53aWR0aD1gJHtlLmNvdW50L21heEUqMTAwfSVgO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWJhci1jbnQnLHRleHQ6U3RyaW5nKGUuY291bnQpfSk7XG5cdFx0fVxuXG5cdFx0Ly8gVG9wIGh1YnNcblx0XHRjb25zdCBodWJTZWMgPSBzZWN0aW9uKCdUb3AgSHVicyBcdTAwQjcgYnkgZGVncmVlJyk7XG5cdFx0Y29uc3QgbWF4SCA9IE1hdGgubWF4KC4uLkEuaHVicy5tYXAoaD0+aC5kZWcpLDEpO1xuXHRcdEEuaHVicy5mb3JFYWNoKChoLGkpPT57XG5cdFx0XHRjb25zdCByb3c9aHViU2VjLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItaHViLXJvdyd9KTtcblx0XHRcdHJvdy5kYXRhc2V0Lm5vZGVJZD1oLmlkO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWh1Yi1yYW5rJyx0ZXh0OlN0cmluZyhpKzEpfSk7XG5cdFx0XHRjb25zdCBkb3Q9cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWh1Yi1kb3QnfSk7XG5cdFx0XHRkb3Quc3R5bGUuYmFja2dyb3VuZD1OT0RFX0NPTE9SU1toLnR5cGVdPz8nIzg4OCc7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLW5hbWUnLHRleHQ6aC5pZC5sZW5ndGg+MjA/aC5pZC5zbGljZSgwLDE4KSsnXHUyMDI2JzpoLmlkfSlcblx0XHRcdFx0LnNldEF0dHJpYnV0ZSgndGl0bGUnLGguaWQpO1xuXHRcdFx0Y29uc3QgYmFyPXJvdy5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWh1Yi1iYXInfSk7XG5cdFx0XHRiYXIuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1maWxsJyxzdHlsZTpgd2lkdGg6JHtoLmRlZy9tYXhIKjEwMH0lO2JhY2tncm91bmQ6JHtOT0RFX0NPTE9SU1toLnR5cGVdPz8nIzg4OCd9YH0pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWh1Yi1kZWcnLHRleHQ6U3RyaW5nKGguZGVnKX0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRG9tYWluIGNvdmVyYWdlIFx1MjAxNCBjbGljayB0byB0b2dnbGUgZG9tYWluIGluIHN1YmdyYXBoIGZpbHRlclxuXHRcdGNvbnN0IGRzID0gc2VjdGlvbignRG9tYWluIENvdmVyYWdlJyk7XG5cdFx0Ly8gU2hvdyBhY3RpdmUgZmlsdGVyIGNvdW50IGlmIGFueVxuXHRcdGlmICh0aGlzLnNlbGVjdGVkRG9tYWlucy5zaXplID4gMCkge1xuXHRcdFx0Y29uc3QgYmFkZ2UgPSBkcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItZG9tYWluLWJhZGdlJyB9KTtcblx0XHRcdGJhZGdlLnNldFRleHQoYCR7dGhpcy5zZWxlY3RlZERvbWFpbnMuc2l6ZX0gc2VsZWN0ZWQgXHUyMDE0IGApO1xuXHRcdFx0Y29uc3QgY2xlYXJBbGwgPSBiYWRnZS5jcmVhdGVFbCgnYScsIHsgdGV4dDogJ2NsZWFyIGFsbCcgfSk7XG5cdFx0XHRjbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWREb21haW5zLmNsZWFyKCk7XG5cdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgbWF4RCA9IE1hdGgubWF4KC4uLkEuZG9tYWlucy5tYXAoZD0+ZC5jb3VudCksMSk7XG5cdFx0Zm9yIChjb25zdCBkIG9mIEEuZG9tYWlucykge1xuXHRcdFx0Y29uc3QgaXNBY3RpdmUgPSB0aGlzLnNlbGVjdGVkRG9tYWlucy5oYXMoZC5uYW1lKTtcblx0XHRcdGNvbnN0IHJvdyA9IGRzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1iYXItcm93IGxsbS1zYi1kb21haW4tcm93JyArIChpc0FjdGl2ZSA/ICcgbGxtLXNiLWRvbWFpbi1yb3ctLWFjdGl2ZScgOiAnJykgfSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1iYXItbmFtZScsIHRleHQ6IGQubmFtZSB9KTtcblx0XHRcdGNvbnN0IHRyYWNrID0gcm93LmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi10cmFjaycgfSk7XG5cdFx0XHRjb25zdCBkZmlsbCA9IHRyYWNrLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1maWxsJyB9KTtcblx0XHRcdGRmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1heChkLmNvdW50L21heEQqMTAwLDQpfSU7YmFja2dyb3VuZDoke2RvbWFpbkNvbG9yKGQubmFtZSl9YDtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWJhci1jbnQnLCB0ZXh0OiBTdHJpbmcoZC5jb3VudCkgfSk7XG5cdFx0XHRyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkRG9tYWlucy5oYXMoZC5uYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREb21haW5zLmRlbGV0ZShkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREb21haW5zLmFkZChkLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFBsdWdpbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExMTVdpa2lTZW1hbnRpY0dyYXBoIGV4dGVuZHMgUGx1Z2luIHtcblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRSwgbGVhZiA9PiBuZXcgU2VtYW50aWNHcmFwaFZpZXcobGVhZiwgdGhpcykpO1xuXHRcdHRoaXMuYWRkUmliYm9uSWNvbignZ2l0LWZvcmsnLCdMTE0gV2lraSBTZW1hbnRpYyBHcmFwaCcsKCk9PnRoaXMuYWN0aXZhdGVWaWV3KCkpO1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7aWQ6J29wZW4tc2VtYW50aWMtZ3JhcGgnLG5hbWU6J09wZW4gU2VtYW50aWMgR3JhcGgnLGNhbGxiYWNrOigpPT50aGlzLmFjdGl2YXRlVmlldygpfSk7XG5cdH1cblx0YXN5bmMgYWN0aXZhdGVWaWV3KCkge1xuXHRcdGNvbnN0IHt3b3Jrc3BhY2V9PXRoaXMuYXBwO1xuXHRcdGxldCBsZWFmPXdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFKVswXTtcblx0XHRpZiAoIWxlYWYpIHsgbGVhZj13b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSE7IGF3YWl0IGxlYWYuc2V0Vmlld1N0YXRlKHt0eXBlOlZJRVdfVFlQRSxhY3RpdmU6dHJ1ZX0pOyB9XG5cdFx0d29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG5cdH1cblx0b251bmxvYWQoKSB7fVxufVxuIiwgImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsICJpbXBvcnQgbmFtZXNwYWNlcyBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIHByZWZpeCA9IG5hbWUgKz0gXCJcIiwgaSA9IHByZWZpeC5pbmRleE9mKFwiOlwiKTtcbiAgaWYgKGkgPj0gMCAmJiAocHJlZml4ID0gbmFtZS5zbGljZSgwLCBpKSkgIT09IFwieG1sbnNcIikgbmFtZSA9IG5hbWUuc2xpY2UoaSArIDEpO1xuICByZXR1cm4gbmFtZXNwYWNlcy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpID8ge3NwYWNlOiBuYW1lc3BhY2VzW3ByZWZpeF0sIGxvY2FsOiBuYW1lfSA6IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG59XG4iLCAiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi9uYW1lc3BhY2UuanNcIjtcbmltcG9ydCB7eGh0bWx9IGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRvckluaGVyaXQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50LFxuICAgICAgICB1cmkgPSB0aGlzLm5hbWVzcGFjZVVSSTtcbiAgICByZXR1cm4gdXJpID09PSB4aHRtbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB4aHRtbFxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModXJpLCBuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRvckZpeGVkKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIChmdWxsbmFtZS5sb2NhbFxuICAgICAgPyBjcmVhdG9yRml4ZWRcbiAgICAgIDogY3JlYXRvckluaGVyaXQpKGZ1bGxuYW1lKTtcbn1cbiIsICJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgIi8vIEdpdmVuIHNvbWV0aGluZyBhcnJheSBsaWtlIChvciBudWxsKSwgcmV0dXJucyBzb21ldGhpbmcgdGhhdCBpcyBzdHJpY3RseSBhblxuLy8gYXJyYXkuIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhcnJheS1saWtlIG9iamVjdHMgcGFzc2VkIHRvIGQzLnNlbGVjdEFsbFxuLy8gb3Igc2VsZWN0aW9uLnNlbGVjdEFsbCBhcmUgY29udmVydGVkIGludG8gcHJvcGVyIGFycmF5cyB3aGVuIGNyZWF0aW5nIGFcbi8vIHNlbGVjdGlvbjsgd2UgZG9uXHUyMDE5dCBldmVyIHdhbnQgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIGJhY2tlZCBieSBhIGxpdmVcbi8vIEhUTUxDb2xsZWN0aW9uIG9yIE5vZGVMaXN0LiBIb3dldmVyLCBub3RlIHRoYXQgc2VsZWN0aW9uLnNlbGVjdEFsbCB3aWxsIHVzZSBhXG4vLyBzdGF0aWMgTm9kZUxpc3QgYXMgYSBncm91cCwgc2luY2UgaXQgc2FmZWx5IGRlcml2ZWQgZnJvbSBxdWVyeVNlbGVjdG9yQWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXkoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHgpID8geCA6IEFycmF5LmZyb20oeCk7XG59XG4iLCAiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IGFycmF5IGZyb20gXCIuLi9hcnJheS5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yQWxsIGZyb20gXCIuLi9zZWxlY3RvckFsbC5qc1wiO1xuXG5mdW5jdGlvbiBhcnJheUFsbChzZWxlY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcnJheShzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCA9PT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBhcnJheUFsbChzZWxlY3QpO1xuICBlbHNlIHNlbGVjdCA9IHNlbGVjdG9yQWxsKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gW10sIHBhcmVudHMgPSBbXSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKTtcbiAgICAgICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgcGFyZW50cyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRNYXRjaGVyKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbiIsICJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbmQgPSBBcnJheS5wcm90b3R5cGUuZmluZDtcblxuZnVuY3Rpb24gY2hpbGRGaW5kKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmluZC5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2hpbGRGaXJzdCgpIHtcbiAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChtYXRjaCA9PSBudWxsID8gY2hpbGRGaXJzdFxuICAgICAgOiBjaGlsZEZpbmQodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsICJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW5GaWx0ZXIobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLmNoaWxkcmVuLCBtYXRjaCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdEFsbChtYXRjaCA9PSBudWxsID8gY2hpbGRyZW5cbiAgICAgIDogY2hpbGRyZW5GaWx0ZXIodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwgImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2VudGVyIHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRlck5vZGUocGFyZW50LCBkYXR1bSkge1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudDtcbiAgdGhpcy5uYW1lc3BhY2VVUkkgPSBwYXJlbnQubmFtZXNwYWNlVVJJO1xuICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fZGF0YV9fID0gZGF0dW07XG59XG5cbkVudGVyTm9kZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBFbnRlck5vZGUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbihjaGlsZCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5fbmV4dCk7IH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24oY2hpbGQsIG5leHQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIG5leHQpOyB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpOyB9XG59O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtFbnRlck5vZGV9IGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGJpbmRJbmRleChwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIG5vZGUsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZml0IGludG8gdXBkYXRlLlxuICAvLyBQdXQgYW55IG51bGwgbm9kZXMgaW50byBlbnRlci5cbiAgLy8gUHV0IGFueSByZW1haW5pbmcgZGF0YSBpbnRvIGVudGVyLlxuICBmb3IgKDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGRvblx1MjAxOXQgZml0IGludG8gZXhpdC5cbiAgZm9yICg7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRLZXkocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSwga2V5KSB7XG4gIHZhciBpLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVCeUtleVZhbHVlID0gbmV3IE1hcCxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAga2V5VmFsdWVzID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKSxcbiAgICAgIGtleVZhbHVlO1xuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBub2RlLlxuICAvLyBJZiBtdWx0aXBsZSBub2RlcyBoYXZlIHRoZSBzYW1lIGtleSwgdGhlIGR1cGxpY2F0ZXMgYXJlIGFkZGVkIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAga2V5VmFsdWVzW2ldID0ga2V5VmFsdWUgPSBrZXkuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkgKyBcIlwiO1xuICAgICAgaWYgKG5vZGVCeUtleVZhbHVlLmhhcyhrZXlWYWx1ZSkpIHtcbiAgICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlQnlLZXlWYWx1ZS5zZXQoa2V5VmFsdWUsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBkYXR1bS5cbiAgLy8gSWYgdGhlcmUgYSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleSwgam9pbiBhbmQgYWRkIGl0IHRvIHVwZGF0ZS5cbiAgLy8gSWYgdGhlcmUgaXMgbm90IChvciB0aGUga2V5IGlzIGEgZHVwbGljYXRlKSwgYWRkIGl0IHRvIGVudGVyLlxuICBmb3IgKGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAga2V5VmFsdWUgPSBrZXkuY2FsbChwYXJlbnQsIGRhdGFbaV0sIGksIGRhdGEpICsgXCJcIjtcbiAgICBpZiAobm9kZSA9IG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZSkpIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlLmRlbGV0ZShrZXlWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlc1tpXSkgPT09IG5vZGUpKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0dW0obm9kZSkge1xuICByZXR1cm4gbm9kZS5fX2RhdGFfXztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBBcnJheS5mcm9tKHRoaXMsIGRhdHVtKTtcblxuICB2YXIgYmluZCA9IGtleSA/IGJpbmRLZXkgOiBiaW5kSW5kZXgsXG4gICAgICBwYXJlbnRzID0gdGhpcy5fcGFyZW50cyxcbiAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gY29uc3RhbnQodmFsdWUpO1xuXG4gIGZvciAodmFyIG0gPSBncm91cHMubGVuZ3RoLCB1cGRhdGUgPSBuZXcgQXJyYXkobSksIGVudGVyID0gbmV3IEFycmF5KG0pLCBleGl0ID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW2pdLFxuICAgICAgICBncm91cCA9IGdyb3Vwc1tqXSxcbiAgICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICAgIGRhdGEgPSBhcnJheWxpa2UodmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpKSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBlbnRlckdyb3VwID0gZW50ZXJbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIHVwZGF0ZUdyb3VwID0gdXBkYXRlW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICBleGl0R3JvdXAgPSBleGl0W2pdID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKTtcblxuICAgIGJpbmQocGFyZW50LCBncm91cCwgZW50ZXJHcm91cCwgdXBkYXRlR3JvdXAsIGV4aXRHcm91cCwgZGF0YSwga2V5KTtcblxuICAgIC8vIE5vdyBjb25uZWN0IHRoZSBlbnRlciBub2RlcyB0byB0aGVpciBmb2xsb3dpbmcgdXBkYXRlIG5vZGUsIHN1Y2ggdGhhdFxuICAgIC8vIGFwcGVuZENoaWxkIGNhbiBpbnNlcnQgdGhlIG1hdGVyaWFsaXplZCBlbnRlciBub2RlIGJlZm9yZSB0aGlzIG5vZGUsXG4gICAgLy8gcmF0aGVyIHRoYW4gYXQgdGhlIGVuZCBvZiB0aGUgcGFyZW50IG5vZGUuXG4gICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDAsIHByZXZpb3VzLCBuZXh0OyBpMCA8IGRhdGFMZW5ndGg7ICsraTApIHtcbiAgICAgIGlmIChwcmV2aW91cyA9IGVudGVyR3JvdXBbaTBdKSB7XG4gICAgICAgIGlmIChpMCA+PSBpMSkgaTEgPSBpMCArIDE7XG4gICAgICAgIHdoaWxlICghKG5leHQgPSB1cGRhdGVHcm91cFtpMV0pICYmICsraTEgPCBkYXRhTGVuZ3RoKTtcbiAgICAgICAgcHJldmlvdXMuX25leHQgPSBuZXh0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlID0gbmV3IFNlbGVjdGlvbih1cGRhdGUsIHBhcmVudHMpO1xuICB1cGRhdGUuX2VudGVyID0gZW50ZXI7XG4gIHVwZGF0ZS5fZXhpdCA9IGV4aXQ7XG4gIHJldHVybiB1cGRhdGU7XG59XG5cbi8vIEdpdmVuIHNvbWUgZGF0YSwgdGhpcyByZXR1cm5zIGFuIGFycmF5LWxpa2UgdmlldyBvZiBpdDogYW4gb2JqZWN0IHRoYXRcbi8vIGV4cG9zZXMgYSBsZW5ndGggcHJvcGVydHkgYW5kIGFsbG93cyBudW1lcmljIGluZGV4aW5nLiBOb3RlIHRoYXQgdW5saWtlXG4vLyBzZWxlY3RBbGwsIHRoaXMgaXNuXHUyMDE5dCB3b3JyaWVkIGFib3V0IFx1MjAxQ2xpdmVcdTIwMUQgY29sbGVjdGlvbnMgYmVjYXVzZSB0aGUgcmVzdWx0aW5nXG4vLyBhcnJheSB3aWxsIG9ubHkgYmUgdXNlZCBicmllZmx5IHdoaWxlIGRhdGEgaXMgYmVpbmcgYm91bmQuIChJdCBpcyBwb3NzaWJsZSB0b1xuLy8gY2F1c2UgdGhlIGRhdGEgdG8gY2hhbmdlIHdoaWxlIGl0ZXJhdGluZyBieSB1c2luZyBhIGtleSBmdW5jdGlvbiwgYnV0IHBsZWFzZVxuLy8gZG9uXHUyMDE5dDsgd2VcdTIwMTlkIHJhdGhlciBhdm9pZCBhIGdyYXR1aXRvdXMgY29weS4pXG5mdW5jdGlvbiBhcnJheWxpa2UoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiBkYXRhXG4gICAgPyBkYXRhIC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbShkYXRhKTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cbiIsICJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob25lbnRlciwgb251cGRhdGUsIG9uZXhpdCkge1xuICB2YXIgZW50ZXIgPSB0aGlzLmVudGVyKCksIHVwZGF0ZSA9IHRoaXMsIGV4aXQgPSB0aGlzLmV4aXQoKTtcbiAgaWYgKHR5cGVvZiBvbmVudGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBlbnRlciA9IG9uZW50ZXIoZW50ZXIpO1xuICAgIGlmIChlbnRlcikgZW50ZXIgPSBlbnRlci5zZWxlY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRlciA9IGVudGVyLmFwcGVuZChvbmVudGVyICsgXCJcIik7XG4gIH1cbiAgaWYgKG9udXBkYXRlICE9IG51bGwpIHtcbiAgICB1cGRhdGUgPSBvbnVwZGF0ZSh1cGRhdGUpO1xuICAgIGlmICh1cGRhdGUpIHVwZGF0ZSA9IHVwZGF0ZS5zZWxlY3Rpb24oKTtcbiAgfVxuICBpZiAob25leGl0ID09IG51bGwpIGV4aXQucmVtb3ZlKCk7IGVsc2Ugb25leGl0KGV4aXQpO1xuICByZXR1cm4gZW50ZXIgJiYgdXBkYXRlID8gZW50ZXIubWVyZ2UodXBkYXRlKS5vcmRlcigpIDogdXBkYXRlO1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHZhciBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0O1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAtMSwgbSA9IGdyb3Vwcy5sZW5ndGg7ICsraiA8IG07KSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSBncm91cC5sZW5ndGggLSAxLCBuZXh0ID0gZ3JvdXBbaV0sIG5vZGU7IC0taSA+PSAwOykge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBpZiAobmV4dCAmJiBub2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5leHQpIF4gNCkgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQgc2l6ZSA9IDA7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSArK3NpemU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuIHNpemU7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5ub2RlKCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSAvLyBub2RlIGlzIGEgTm9kZVxuICAgICAgfHwgKG5vZGUuZG9jdW1lbnQgJiYgbm9kZSkgLy8gbm9kZSBpcyBhIFdpbmRvd1xuICAgICAgfHwgbm9kZS5kZWZhdWx0VmlldzsgLy8gbm9kZSBpcyBhIERvY3VtZW50XG59XG4iLCAiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsICJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsICJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cbiIsICJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwgImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuIiwgImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG4iLCAiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsICJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yLmpzXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yLmpzXCI7XG5cbmZ1bmN0aW9uIGNvbnN0YW50TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGJlZm9yZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpLFxuICAgICAgc2VsZWN0ID0gYmVmb3JlID09IG51bGwgPyBjb25zdGFudE51bGwgOiB0eXBlb2YgYmVmb3JlID09PSBcImZ1bmN0aW9uXCIgPyBiZWZvcmUgOiBzZWxlY3RvcihiZWZvcmUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCAiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCAiZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lU2hhbGxvdygpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUoZmFsc2UpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVlcCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZGVlcCA/IHNlbGVjdGlvbl9jbG9uZURlZXAgOiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIiwgdmFsdWUpXG4gICAgICA6IHRoaXMubm9kZSgpLl9fZGF0YV9fO1xufVxuIiwgImZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB0aGlzLl9fZGF0YV9fKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25SZW1vdmUodHlwZW5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbjtcbiAgICBpZiAoIW9uKSByZXR1cm47XG4gICAgZm9yICh2YXIgaiA9IDAsIGkgPSAtMSwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgaWYgKG8gPSBvbltqXSwgKCF0eXBlbmFtZS50eXBlIHx8IG8udHlwZSA9PT0gdHlwZW5hbWUudHlwZSkgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblsrK2ldID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCsraSkgb24ubGVuZ3RoID0gaTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9fb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uQWRkKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uLCBvLCBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcih2YWx1ZSk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5vcHRpb25zID0gb3B0aW9ucyk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIG9wdGlvbnM6IG9wdGlvbnN9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGRlZmF1bHRWaWV3KG5vZGUpLFxuICAgICAgZXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG5cbiAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZXZlbnQgPSBuZXcgZXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGlmIChwYXJhbXMpIGV2ZW50LmluaXRFdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUpLCBldmVudC5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICAgIGVsc2UgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaENvbnN0YW50KHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBkaXNwYXRjaEZ1bmN0aW9uXG4gICAgICA6IGRpc3BhdGNoQ29uc3RhbnQpKHR5cGUsIHBhcmFtcykpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHlpZWxkIG5vZGU7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQgZnJvbSBcIi4vc2VsZWN0Q2hpbGQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4gZnJvbSBcIi4vc2VsZWN0Q2hpbGRyZW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2pvaW4gZnJvbSBcIi4vam9pbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvci5qc1wiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9zZWxlY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBqb2luOiBzZWxlY3Rpb25fam9pbixcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc2VsZWN0aW9uLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX2l0ZXJhdG9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGxldCBzb3VyY2VFdmVudDtcbiAgd2hpbGUgKHNvdXJjZUV2ZW50ID0gZXZlbnQuc291cmNlRXZlbnQpIGV2ZW50ID0gc291cmNlRXZlbnQ7XG4gIHJldHVybiBldmVudDtcbn1cbiIsICJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQsIG5vZGUpIHtcbiAgZXZlbnQgPSBzb3VyY2VFdmVudChldmVudCk7XG4gIGlmIChub2RlID09PSB1bmRlZmluZWQpIG5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBpZiAobm9kZSkge1xuICAgIHZhciBzdmcgPSBub2RlLm93bmVyU1ZHRWxlbWVudCB8fCBub2RlO1xuICAgIGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcbiAgICAgIHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuICAgICAgcG9pbnQueCA9IGV2ZW50LmNsaWVudFgsIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xuICAgICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obm9kZS5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgICAgcmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcbiAgICB9XG4gICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4gW2V2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgLSBub2RlLmNsaWVudExlZnQsIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCAtIG5vZGUuY2xpZW50VG9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtldmVudC5wYWdlWCwgZXZlbnQucGFnZVldO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGQpIHtcbiAgY29uc3QgeCA9ICt0aGlzLl94LmNhbGwobnVsbCwgZCksXG4gICAgICB5ID0gK3RoaXMuX3kuY2FsbChudWxsLCBkKTtcbiAgcmV0dXJuIGFkZCh0aGlzLmNvdmVyKHgsIHkpLCB4LCB5LCBkKTtcbn1cblxuZnVuY3Rpb24gYWRkKHRyZWUsIHgsIHksIGQpIHtcbiAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSByZXR1cm4gdHJlZTsgLy8gaWdub3JlIGludmFsaWQgcG9pbnRzXG5cbiAgdmFyIHBhcmVudCxcbiAgICAgIG5vZGUgPSB0cmVlLl9yb290LFxuICAgICAgbGVhZiA9IHtkYXRhOiBkfSxcbiAgICAgIHgwID0gdHJlZS5feDAsXG4gICAgICB5MCA9IHRyZWUuX3kwLFxuICAgICAgeDEgPSB0cmVlLl94MSxcbiAgICAgIHkxID0gdHJlZS5feTEsXG4gICAgICB4bSxcbiAgICAgIHltLFxuICAgICAgeHAsXG4gICAgICB5cCxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIGluaXRpYWxpemUgdGhlIHJvb3QgYXMgYSBsZWFmLlxuICBpZiAoIW5vZGUpIHJldHVybiB0cmVlLl9yb290ID0gbGVhZiwgdHJlZTtcblxuICAvLyBGaW5kIHRoZSBleGlzdGluZyBsZWFmIGZvciB0aGUgbmV3IHBvaW50LCBvciBhZGQgaXQuXG4gIHdoaWxlIChub2RlLmxlbmd0aCkge1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICAgIGlmIChwYXJlbnQgPSBub2RlLCAhKG5vZGUgPSBub2RlW2kgPSBib3R0b20gPDwgMSB8IHJpZ2h0XSkpIHJldHVybiBwYXJlbnRbaV0gPSBsZWFmLCB0cmVlO1xuICB9XG5cbiAgLy8gSXMgdGhlIG5ldyBwb2ludCBpcyBleGFjdGx5IGNvaW5jaWRlbnQgd2l0aCB0aGUgZXhpc3RpbmcgcG9pbnQ/XG4gIHhwID0gK3RyZWUuX3guY2FsbChudWxsLCBub2RlLmRhdGEpO1xuICB5cCA9ICt0cmVlLl95LmNhbGwobnVsbCwgbm9kZS5kYXRhKTtcbiAgaWYgKHggPT09IHhwICYmIHkgPT09IHlwKSByZXR1cm4gbGVhZi5uZXh0ID0gbm9kZSwgcGFyZW50ID8gcGFyZW50W2ldID0gbGVhZiA6IHRyZWUuX3Jvb3QgPSBsZWFmLCB0cmVlO1xuXG4gIC8vIE90aGVyd2lzZSwgc3BsaXQgdGhlIGxlYWYgbm9kZSB1bnRpbCB0aGUgb2xkIGFuZCBuZXcgcG9pbnQgYXJlIHNlcGFyYXRlZC5cbiAgZG8ge1xuICAgIHBhcmVudCA9IHBhcmVudCA/IHBhcmVudFtpXSA9IG5ldyBBcnJheSg0KSA6IHRyZWUuX3Jvb3QgPSBuZXcgQXJyYXkoNCk7XG4gICAgaWYgKHJpZ2h0ID0geCA+PSAoeG0gPSAoeDAgKyB4MSkgLyAyKSkgeDAgPSB4bTsgZWxzZSB4MSA9IHhtO1xuICAgIGlmIChib3R0b20gPSB5ID49ICh5bSA9ICh5MCArIHkxKSAvIDIpKSB5MCA9IHltOyBlbHNlIHkxID0geW07XG4gIH0gd2hpbGUgKChpID0gYm90dG9tIDw8IDEgfCByaWdodCkgPT09IChqID0gKHlwID49IHltKSA8PCAxIHwgKHhwID49IHhtKSkpO1xuICByZXR1cm4gcGFyZW50W2pdID0gbm9kZSwgcGFyZW50W2ldID0gbGVhZiwgdHJlZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFsbChkYXRhKSB7XG4gIHZhciBkLCBpLCBuID0gZGF0YS5sZW5ndGgsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHh6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgeXogPSBuZXcgQXJyYXkobiksXG4gICAgICB4MCA9IEluZmluaXR5LFxuICAgICAgeTAgPSBJbmZpbml0eSxcbiAgICAgIHgxID0gLUluZmluaXR5LFxuICAgICAgeTEgPSAtSW5maW5pdHk7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgcG9pbnRzIGFuZCB0aGVpciBleHRlbnQuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoaXNOYU4oeCA9ICt0aGlzLl94LmNhbGwobnVsbCwgZCA9IGRhdGFbaV0pKSB8fCBpc05hTih5ID0gK3RoaXMuX3kuY2FsbChudWxsLCBkKSkpIGNvbnRpbnVlO1xuICAgIHh6W2ldID0geDtcbiAgICB5eltpXSA9IHk7XG4gICAgaWYgKHggPCB4MCkgeDAgPSB4O1xuICAgIGlmICh4ID4geDEpIHgxID0geDtcbiAgICBpZiAoeSA8IHkwKSB5MCA9IHk7XG4gICAgaWYgKHkgPiB5MSkgeTEgPSB5O1xuICB9XG5cbiAgLy8gSWYgdGhlcmUgd2VyZSBubyAodmFsaWQpIHBvaW50cywgYWJvcnQuXG4gIGlmICh4MCA+IHgxIHx8IHkwID4geTEpIHJldHVybiB0aGlzO1xuXG4gIC8vIEV4cGFuZCB0aGUgdHJlZSB0byBjb3ZlciB0aGUgbmV3IHBvaW50cy5cbiAgdGhpcy5jb3Zlcih4MCwgeTApLmNvdmVyKHgxLCB5MSk7XG5cbiAgLy8gQWRkIHRoZSBuZXcgcG9pbnRzLlxuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgYWRkKHRoaXMsIHh6W2ldLCB5eltpXSwgZGF0YVtpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIGlmIChpc05hTih4ID0gK3gpIHx8IGlzTmFOKHkgPSAreSkpIHJldHVybiB0aGlzOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MTtcblxuICAvLyBJZiB0aGUgcXVhZHRyZWUgaGFzIG5vIGV4dGVudCwgaW5pdGlhbGl6ZSB0aGVtLlxuICAvLyBJbnRlZ2VyIGV4dGVudCBhcmUgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgd2UgbGF0ZXIgZG91YmxlIHRoZSBleHRlbnQsXG4gIC8vIHRoZSBleGlzdGluZyBxdWFkcmFudCBib3VuZGFyaWVzIGRvblx1MjAxOXQgY2hhbmdlIGR1ZSB0byBmbG9hdGluZyBwb2ludCBlcnJvciFcbiAgaWYgKGlzTmFOKHgwKSkge1xuICAgIHgxID0gKHgwID0gTWF0aC5mbG9vcih4KSkgKyAxO1xuICAgIHkxID0gKHkwID0gTWF0aC5mbG9vcih5KSkgKyAxO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBkb3VibGUgcmVwZWF0ZWRseSB0byBjb3Zlci5cbiAgZWxzZSB7XG4gICAgdmFyIHogPSB4MSAtIHgwIHx8IDEsXG4gICAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGk7XG5cbiAgICB3aGlsZSAoeDAgPiB4IHx8IHggPj0geDEgfHwgeTAgPiB5IHx8IHkgPj0geTEpIHtcbiAgICAgIGkgPSAoeSA8IHkwKSA8PCAxIHwgKHggPCB4MCk7XG4gICAgICBwYXJlbnQgPSBuZXcgQXJyYXkoNCksIHBhcmVudFtpXSA9IG5vZGUsIG5vZGUgPSBwYXJlbnQsIHogKj0gMjtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6IHgxID0geDAgKyB6LCB5MSA9IHkwICsgejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogeDAgPSB4MSAtIHosIHkxID0geTAgKyB6OyBicmVhaztcbiAgICAgICAgY2FzZSAyOiB4MSA9IHgwICsgeiwgeTAgPSB5MSAtIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IHgwID0geDEgLSB6LCB5MCA9IHkxIC0gejsgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jvb3QgJiYgdGhpcy5fcm9vdC5sZW5ndGgpIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9XG5cbiAgdGhpcy5feDAgPSB4MDtcbiAgdGhpcy5feTAgPSB5MDtcbiAgdGhpcy5feDEgPSB4MTtcbiAgdGhpcy5feTEgPSB5MTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBkYXRhID0gW107XG4gIHRoaXMudmlzaXQoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGRvIGRhdGEucHVzaChub2RlLmRhdGEpOyB3aGlsZSAobm9kZSA9IG5vZGUubmV4dClcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKF8pIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5jb3ZlcigrX1swXVswXSwgK19bMF1bMV0pLmNvdmVyKCtfWzFdWzBdLCArX1sxXVsxXSlcbiAgICAgIDogaXNOYU4odGhpcy5feDApID8gdW5kZWZpbmVkIDogW1t0aGlzLl94MCwgdGhpcy5feTBdLCBbdGhpcy5feDEsIHRoaXMuX3kxXV07XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdGhpcy5ub2RlID0gbm9kZTtcbiAgdGhpcy54MCA9IHgwO1xuICB0aGlzLnkwID0geTA7XG4gIHRoaXMueDEgPSB4MTtcbiAgdGhpcy55MSA9IHkxO1xufVxuIiwgImltcG9ydCBRdWFkIGZyb20gXCIuL3F1YWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgeSwgcmFkaXVzKSB7XG4gIHZhciBkYXRhLFxuICAgICAgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSxcbiAgICAgIHkxLFxuICAgICAgeDIsXG4gICAgICB5MixcbiAgICAgIHgzID0gdGhpcy5feDEsXG4gICAgICB5MyA9IHRoaXMuX3kxLFxuICAgICAgcXVhZHMgPSBbXSxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgcSxcbiAgICAgIGk7XG5cbiAgaWYgKG5vZGUpIHF1YWRzLnB1c2gobmV3IFF1YWQobm9kZSwgeDAsIHkwLCB4MywgeTMpKTtcbiAgaWYgKHJhZGl1cyA9PSBudWxsKSByYWRpdXMgPSBJbmZpbml0eTtcbiAgZWxzZSB7XG4gICAgeDAgPSB4IC0gcmFkaXVzLCB5MCA9IHkgLSByYWRpdXM7XG4gICAgeDMgPSB4ICsgcmFkaXVzLCB5MyA9IHkgKyByYWRpdXM7XG4gICAgcmFkaXVzICo9IHJhZGl1cztcbiAgfVxuXG4gIHdoaWxlIChxID0gcXVhZHMucG9wKCkpIHtcblxuICAgIC8vIFN0b3Agc2VhcmNoaW5nIGlmIHRoaXMgcXVhZHJhbnQgY2FuXHUyMDE5dCBjb250YWluIGEgY2xvc2VyIG5vZGUuXG4gICAgaWYgKCEobm9kZSA9IHEubm9kZSlcbiAgICAgICAgfHwgKHgxID0gcS54MCkgPiB4M1xuICAgICAgICB8fCAoeTEgPSBxLnkwKSA+IHkzXG4gICAgICAgIHx8ICh4MiA9IHEueDEpIDwgeDBcbiAgICAgICAgfHwgKHkyID0gcS55MSkgPCB5MCkgY29udGludWU7XG5cbiAgICAvLyBCaXNlY3QgdGhlIGN1cnJlbnQgcXVhZHJhbnQuXG4gICAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgeG0gPSAoeDEgKyB4MikgLyAyLFxuICAgICAgICAgIHltID0gKHkxICsgeTIpIC8gMjtcblxuICAgICAgcXVhZHMucHVzaChcbiAgICAgICAgbmV3IFF1YWQobm9kZVszXSwgeG0sIHltLCB4MiwgeTIpLFxuICAgICAgICBuZXcgUXVhZChub2RlWzJdLCB4MSwgeW0sIHhtLCB5MiksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMV0sIHhtLCB5MSwgeDIsIHltKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVswXSwgeDEsIHkxLCB4bSwgeW0pXG4gICAgICApO1xuXG4gICAgICAvLyBWaXNpdCB0aGUgY2xvc2VzdCBxdWFkcmFudCBmaXJzdC5cbiAgICAgIGlmIChpID0gKHkgPj0geW0pIDw8IDEgfCAoeCA+PSB4bSkpIHtcbiAgICAgICAgcSA9IHF1YWRzW3F1YWRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBxdWFkc1txdWFkcy5sZW5ndGggLSAxXSA9IHF1YWRzW3F1YWRzLmxlbmd0aCAtIDEgLSBpXTtcbiAgICAgICAgcXVhZHNbcXVhZHMubGVuZ3RoIC0gMSAtIGldID0gcTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWaXNpdCB0aGlzIHBvaW50LiAoVmlzaXRpbmcgY29pbmNpZGVudCBwb2ludHMgaXNuXHUyMDE5dCBuZWNlc3NhcnkhKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGR4ID0geCAtICt0aGlzLl94LmNhbGwobnVsbCwgbm9kZS5kYXRhKSxcbiAgICAgICAgICBkeSA9IHkgLSArdGhpcy5feS5jYWxsKG51bGwsIG5vZGUuZGF0YSksXG4gICAgICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgIGlmIChkMiA8IHJhZGl1cykge1xuICAgICAgICB2YXIgZCA9IE1hdGguc3FydChyYWRpdXMgPSBkMik7XG4gICAgICAgIHgwID0geCAtIGQsIHkwID0geSAtIGQ7XG4gICAgICAgIHgzID0geCArIGQsIHkzID0geSArIGQ7XG4gICAgICAgIGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICBpZiAoaXNOYU4oeCA9ICt0aGlzLl94LmNhbGwobnVsbCwgZCkpIHx8IGlzTmFOKHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpKSkgcmV0dXJuIHRoaXM7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgIHJldGFpbmVyLFxuICAgICAgcHJldmlvdXMsXG4gICAgICBuZXh0LFxuICAgICAgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MSxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIGluaXRpYWxpemUgdGhlIHJvb3QgYXMgYSBsZWFmLlxuICBpZiAoIW5vZGUpIHJldHVybiB0aGlzO1xuXG4gIC8vIEZpbmQgdGhlIGxlYWYgbm9kZSBmb3IgdGhlIHBvaW50LlxuICAvLyBXaGlsZSBkZXNjZW5kaW5nLCBhbHNvIHJldGFpbiB0aGUgZGVlcGVzdCBwYXJlbnQgd2l0aCBhIG5vbi1yZW1vdmVkIHNpYmxpbmcuXG4gIGlmIChub2RlLmxlbmd0aCkgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAoIShwYXJlbnQgPSBub2RlLCBub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gdGhpcztcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBicmVhaztcbiAgICBpZiAocGFyZW50WyhpICsgMSkgJiAzXSB8fCBwYXJlbnRbKGkgKyAyKSAmIDNdIHx8IHBhcmVudFsoaSArIDMpICYgM10pIHJldGFpbmVyID0gcGFyZW50LCBqID0gaTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHBvaW50IHRvIHJlbW92ZS5cbiAgd2hpbGUgKG5vZGUuZGF0YSAhPT0gZCkgaWYgKCEocHJldmlvdXMgPSBub2RlLCBub2RlID0gbm9kZS5uZXh0KSkgcmV0dXJuIHRoaXM7XG4gIGlmIChuZXh0ID0gbm9kZS5uZXh0KSBkZWxldGUgbm9kZS5uZXh0O1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb2luY2lkZW50IHBvaW50cywgcmVtb3ZlIGp1c3QgdGhlIHBvaW50LlxuICBpZiAocHJldmlvdXMpIHJldHVybiAobmV4dCA/IHByZXZpb3VzLm5leHQgPSBuZXh0IDogZGVsZXRlIHByZXZpb3VzLm5leHQpLCB0aGlzO1xuXG4gIC8vIElmIHRoaXMgaXMgdGhlIHJvb3QgcG9pbnQsIHJlbW92ZSBpdC5cbiAgaWYgKCFwYXJlbnQpIHJldHVybiB0aGlzLl9yb290ID0gbmV4dCwgdGhpcztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWFmLlxuICBuZXh0ID8gcGFyZW50W2ldID0gbmV4dCA6IGRlbGV0ZSBwYXJlbnRbaV07XG5cbiAgLy8gSWYgdGhlIHBhcmVudCBub3cgY29udGFpbnMgZXhhY3RseSBvbmUgbGVhZiwgY29sbGFwc2Ugc3VwZXJmbHVvdXMgcGFyZW50cy5cbiAgaWYgKChub2RlID0gcGFyZW50WzBdIHx8IHBhcmVudFsxXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzNdKVxuICAgICAgJiYgbm9kZSA9PT0gKHBhcmVudFszXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzFdIHx8IHBhcmVudFswXSlcbiAgICAgICYmICFub2RlLmxlbmd0aCkge1xuICAgIGlmIChyZXRhaW5lcikgcmV0YWluZXJbal0gPSBub2RlO1xuICAgIGVsc2UgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbChkYXRhKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gZGF0YS5sZW5ndGg7IGkgPCBuOyArK2kpIHRoaXMucmVtb3ZlKGRhdGFbaV0pO1xuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdGhpcy52aXNpdChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgZG8gKytzaXplOyB3aGlsZSAobm9kZSA9IG5vZGUubmV4dClcbiAgfSk7XG4gIHJldHVybiBzaXplO1xufVxuIiwgImltcG9ydCBRdWFkIGZyb20gXCIuL3F1YWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIHF1YWRzID0gW10sIHEsIG5vZGUgPSB0aGlzLl9yb290LCBjaGlsZCwgeDAsIHkwLCB4MSwgeTE7XG4gIGlmIChub2RlKSBxdWFkcy5wdXNoKG5ldyBRdWFkKG5vZGUsIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSk7XG4gIHdoaWxlIChxID0gcXVhZHMucG9wKCkpIHtcbiAgICBpZiAoIWNhbGxiYWNrKG5vZGUgPSBxLm5vZGUsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSkgJiYgbm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MCArIHgxKSAvIDIsIHltID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbM10pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5bSwgeDEsIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzJdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeW0sIHhtLCB5MSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMF0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5MCwgeG0sIHltKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImltcG9ydCBRdWFkIGZyb20gXCIuL3F1YWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIHF1YWRzID0gW10sIG5leHQgPSBbXSwgcTtcbiAgaWYgKHRoaXMuX3Jvb3QpIHF1YWRzLnB1c2gobmV3IFF1YWQodGhpcy5fcm9vdCwgdGhpcy5feDAsIHRoaXMuX3kwLCB0aGlzLl94MSwgdGhpcy5feTEpKTtcbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuICAgIHZhciBub2RlID0gcS5ub2RlO1xuICAgIGlmIChub2RlLmxlbmd0aCkge1xuICAgICAgdmFyIGNoaWxkLCB4MCA9IHEueDAsIHkwID0gcS55MCwgeDEgPSBxLngxLCB5MSA9IHEueTEsIHhtID0gKHgwICsgeDEpIC8gMiwgeW0gPSAoeTAgKyB5MSkgLyAyO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVswXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeDAsIHkwLCB4bSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMV0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5MCwgeDEsIHltKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzJdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeW0sIHhtLCB5MSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVszXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHltLCB4MSwgeTEpKTtcbiAgICB9XG4gICAgbmV4dC5wdXNoKHEpO1xuICB9XG4gIHdoaWxlIChxID0gbmV4dC5wb3AoKSkge1xuICAgIGNhbGxiYWNrKHEubm9kZSwgcS54MCwgcS55MCwgcS54MSwgcS55MSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRYKGQpIHtcbiAgcmV0dXJuIGRbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKF8pIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhpcy5feCA9IF8sIHRoaXMpIDogdGhpcy5feDtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdFkoZCkge1xuICByZXR1cm4gZFsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGlzLl95ID0gXywgdGhpcykgOiB0aGlzLl95O1xufVxuIiwgImltcG9ydCB0cmVlX2FkZCwge2FkZEFsbCBhcyB0cmVlX2FkZEFsbH0gZnJvbSBcIi4vYWRkLmpzXCI7XG5pbXBvcnQgdHJlZV9jb3ZlciBmcm9tIFwiLi9jb3Zlci5qc1wiO1xuaW1wb3J0IHRyZWVfZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgdHJlZV9leHRlbnQgZnJvbSBcIi4vZXh0ZW50LmpzXCI7XG5pbXBvcnQgdHJlZV9maW5kIGZyb20gXCIuL2ZpbmQuanNcIjtcbmltcG9ydCB0cmVlX3JlbW92ZSwge3JlbW92ZUFsbCBhcyB0cmVlX3JlbW92ZUFsbH0gZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgdHJlZV9yb290IGZyb20gXCIuL3Jvb3QuanNcIjtcbmltcG9ydCB0cmVlX3NpemUgZnJvbSBcIi4vc2l6ZS5qc1wiO1xuaW1wb3J0IHRyZWVfdmlzaXQgZnJvbSBcIi4vdmlzaXQuanNcIjtcbmltcG9ydCB0cmVlX3Zpc2l0QWZ0ZXIgZnJvbSBcIi4vdmlzaXRBZnRlci5qc1wiO1xuaW1wb3J0IHRyZWVfeCwge2RlZmF1bHRYfSBmcm9tIFwiLi94LmpzXCI7XG5pbXBvcnQgdHJlZV95LCB7ZGVmYXVsdFl9IGZyb20gXCIuL3kuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhZHRyZWUobm9kZXMsIHgsIHkpIHtcbiAgdmFyIHRyZWUgPSBuZXcgUXVhZHRyZWUoeCA9PSBudWxsID8gZGVmYXVsdFggOiB4LCB5ID09IG51bGwgPyBkZWZhdWx0WSA6IHksIE5hTiwgTmFOLCBOYU4sIE5hTik7XG4gIHJldHVybiBub2RlcyA9PSBudWxsID8gdHJlZSA6IHRyZWUuYWRkQWxsKG5vZGVzKTtcbn1cblxuZnVuY3Rpb24gUXVhZHRyZWUoeCwgeSwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdGhpcy5feCA9IHg7XG4gIHRoaXMuX3kgPSB5O1xuICB0aGlzLl94MCA9IHgwO1xuICB0aGlzLl95MCA9IHkwO1xuICB0aGlzLl94MSA9IHgxO1xuICB0aGlzLl95MSA9IHkxO1xuICB0aGlzLl9yb290ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBsZWFmX2NvcHkobGVhZikge1xuICB2YXIgY29weSA9IHtkYXRhOiBsZWFmLmRhdGF9LCBuZXh0ID0gY29weTtcbiAgd2hpbGUgKGxlYWYgPSBsZWFmLm5leHQpIG5leHQgPSBuZXh0Lm5leHQgPSB7ZGF0YTogbGVhZi5kYXRhfTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbnZhciB0cmVlUHJvdG8gPSBxdWFkdHJlZS5wcm90b3R5cGUgPSBRdWFkdHJlZS5wcm90b3R5cGU7XG5cbnRyZWVQcm90by5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb3B5ID0gbmV3IFF1YWR0cmVlKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgbm9kZXMsXG4gICAgICBjaGlsZDtcblxuICBpZiAoIW5vZGUpIHJldHVybiBjb3B5O1xuXG4gIGlmICghbm9kZS5sZW5ndGgpIHJldHVybiBjb3B5Ll9yb290ID0gbGVhZl9jb3B5KG5vZGUpLCBjb3B5O1xuXG4gIG5vZGVzID0gW3tzb3VyY2U6IG5vZGUsIHRhcmdldDogY29weS5fcm9vdCA9IG5ldyBBcnJheSg0KX1dO1xuICB3aGlsZSAobm9kZSA9IG5vZGVzLnBvcCgpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGUuc291cmNlW2ldKSB7XG4gICAgICAgIGlmIChjaGlsZC5sZW5ndGgpIG5vZGVzLnB1c2goe3NvdXJjZTogY2hpbGQsIHRhcmdldDogbm9kZS50YXJnZXRbaV0gPSBuZXcgQXJyYXkoNCl9KTtcbiAgICAgICAgZWxzZSBub2RlLnRhcmdldFtpXSA9IGxlYWZfY29weShjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59O1xuXG50cmVlUHJvdG8uYWRkID0gdHJlZV9hZGQ7XG50cmVlUHJvdG8uYWRkQWxsID0gdHJlZV9hZGRBbGw7XG50cmVlUHJvdG8uY292ZXIgPSB0cmVlX2NvdmVyO1xudHJlZVByb3RvLmRhdGEgPSB0cmVlX2RhdGE7XG50cmVlUHJvdG8uZXh0ZW50ID0gdHJlZV9leHRlbnQ7XG50cmVlUHJvdG8uZmluZCA9IHRyZWVfZmluZDtcbnRyZWVQcm90by5yZW1vdmUgPSB0cmVlX3JlbW92ZTtcbnRyZWVQcm90by5yZW1vdmVBbGwgPSB0cmVlX3JlbW92ZUFsbDtcbnRyZWVQcm90by5yb290ID0gdHJlZV9yb290O1xudHJlZVByb3RvLnNpemUgPSB0cmVlX3NpemU7XG50cmVlUHJvdG8udmlzaXQgPSB0cmVlX3Zpc2l0O1xudHJlZVByb3RvLnZpc2l0QWZ0ZXIgPSB0cmVlX3Zpc2l0QWZ0ZXI7XG50cmVlUHJvdG8ueCA9IHRyZWVfeDtcbnRyZWVQcm90by55ID0gdHJlZV95O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhbmRvbSkge1xuICByZXR1cm4gKHJhbmRvbSgpIC0gMC41KSAqIDFlLTY7XG59XG4iLCAiaW1wb3J0IHtxdWFkdHJlZX0gZnJvbSBcImQzLXF1YWR0cmVlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIHgoZCkge1xuICByZXR1cm4gZC54ICsgZC52eDtcbn1cblxuZnVuY3Rpb24geShkKSB7XG4gIHJldHVybiBkLnkgKyBkLnZ5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyYWRpdXMpIHtcbiAgdmFyIG5vZGVzLFxuICAgICAgcmFkaWksXG4gICAgICByYW5kb20sXG4gICAgICBzdHJlbmd0aCA9IDEsXG4gICAgICBpdGVyYXRpb25zID0gMTtcblxuICBpZiAodHlwZW9mIHJhZGl1cyAhPT0gXCJmdW5jdGlvblwiKSByYWRpdXMgPSBjb25zdGFudChyYWRpdXMgPT0gbnVsbCA/IDEgOiArcmFkaXVzKTtcblxuICBmdW5jdGlvbiBmb3JjZSgpIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgdHJlZSxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgeGksXG4gICAgICAgIHlpLFxuICAgICAgICByaSxcbiAgICAgICAgcmkyO1xuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBpdGVyYXRpb25zOyArK2spIHtcbiAgICAgIHRyZWUgPSBxdWFkdHJlZShub2RlcywgeCwgeSkudmlzaXRBZnRlcihwcmVwYXJlKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICByaSA9IHJhZGlpW25vZGUuaW5kZXhdLCByaTIgPSByaSAqIHJpO1xuICAgICAgICB4aSA9IG5vZGUueCArIG5vZGUudng7XG4gICAgICAgIHlpID0gbm9kZS55ICsgbm9kZS52eTtcbiAgICAgICAgdHJlZS52aXNpdChhcHBseSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHkocXVhZCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgICAgIHZhciBkYXRhID0gcXVhZC5kYXRhLCByaiA9IHF1YWQuciwgciA9IHJpICsgcmo7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5pbmRleCA+IG5vZGUuaW5kZXgpIHtcbiAgICAgICAgICB2YXIgeCA9IHhpIC0gZGF0YS54IC0gZGF0YS52eCxcbiAgICAgICAgICAgICAgeSA9IHlpIC0gZGF0YS55IC0gZGF0YS52eSxcbiAgICAgICAgICAgICAgbCA9IHggKiB4ICsgeSAqIHk7XG4gICAgICAgICAgaWYgKGwgPCByICogcikge1xuICAgICAgICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgICAgICAgIGlmICh5ID09PSAwKSB5ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geSAqIHk7XG4gICAgICAgICAgICBsID0gKHIgLSAobCA9IE1hdGguc3FydChsKSkpIC8gbCAqIHN0cmVuZ3RoO1xuICAgICAgICAgICAgbm9kZS52eCArPSAoeCAqPSBsKSAqIChyID0gKHJqICo9IHJqKSAvIChyaTIgKyByaikpO1xuICAgICAgICAgICAgbm9kZS52eSArPSAoeSAqPSBsKSAqIHI7XG4gICAgICAgICAgICBkYXRhLnZ4IC09IHggKiAociA9IDEgLSByKTtcbiAgICAgICAgICAgIGRhdGEudnkgLT0geSAqIHI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4MCA+IHhpICsgciB8fCB4MSA8IHhpIC0gciB8fCB5MCA+IHlpICsgciB8fCB5MSA8IHlpIC0gcjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlKHF1YWQpIHtcbiAgICBpZiAocXVhZC5kYXRhKSByZXR1cm4gcXVhZC5yID0gcmFkaWlbcXVhZC5kYXRhLmluZGV4XTtcbiAgICBmb3IgKHZhciBpID0gcXVhZC5yID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgaWYgKHF1YWRbaV0gJiYgcXVhZFtpXS5yID4gcXVhZC5yKSB7XG4gICAgICAgIHF1YWQuciA9IHF1YWRbaV0ucjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcbiAgICByYWRpaSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBub2RlID0gbm9kZXNbaV0sIHJhZGlpW25vZGUuaW5kZXhdID0gK3JhZGl1cyhub2RlLCBpLCBub2Rlcyk7XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oX25vZGVzLCBfcmFuZG9tKSB7XG4gICAgbm9kZXMgPSBfbm9kZXM7XG4gICAgcmFuZG9tID0gX3JhbmRvbTtcbiAgICBpbml0aWFsaXplKCk7XG4gIH07XG5cbiAgZm9yY2UuaXRlcmF0aW9ucyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpdGVyYXRpb25zID0gK18sIGZvcmNlKSA6IGl0ZXJhdGlvbnM7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSArXywgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UucmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHJhZGl1cztcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgamlnZ2xlIGZyb20gXCIuL2ppZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBpbmRleChkKSB7XG4gIHJldHVybiBkLmluZGV4O1xufVxuXG5mdW5jdGlvbiBmaW5kKG5vZGVCeUlkLCBub2RlSWQpIHtcbiAgdmFyIG5vZGUgPSBub2RlQnlJZC5nZXQobm9kZUlkKTtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIG5vdCBmb3VuZDogXCIgKyBub2RlSWQpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obGlua3MpIHtcbiAgdmFyIGlkID0gaW5kZXgsXG4gICAgICBzdHJlbmd0aCA9IGRlZmF1bHRTdHJlbmd0aCxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIGRpc3RhbmNlID0gY29uc3RhbnQoMzApLFxuICAgICAgZGlzdGFuY2VzLFxuICAgICAgbm9kZXMsXG4gICAgICBjb3VudCxcbiAgICAgIGJpYXMsXG4gICAgICByYW5kb20sXG4gICAgICBpdGVyYXRpb25zID0gMTtcblxuICBpZiAobGlua3MgPT0gbnVsbCkgbGlua3MgPSBbXTtcblxuICBmdW5jdGlvbiBkZWZhdWx0U3RyZW5ndGgobGluaykge1xuICAgIHJldHVybiAxIC8gTWF0aC5taW4oY291bnRbbGluay5zb3VyY2UuaW5kZXhdLCBjb3VudFtsaW5rLnRhcmdldC5pbmRleF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yY2UoYWxwaGEpIHtcbiAgICBmb3IgKHZhciBrID0gMCwgbiA9IGxpbmtzLmxlbmd0aDsgayA8IGl0ZXJhdGlvbnM7ICsraykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxpbmssIHNvdXJjZSwgdGFyZ2V0LCB4LCB5LCBsLCBiOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGxpbmsgPSBsaW5rc1tpXSwgc291cmNlID0gbGluay5zb3VyY2UsIHRhcmdldCA9IGxpbmsudGFyZ2V0O1xuICAgICAgICB4ID0gdGFyZ2V0LnggKyB0YXJnZXQudnggLSBzb3VyY2UueCAtIHNvdXJjZS52eCB8fCBqaWdnbGUocmFuZG9tKTtcbiAgICAgICAgeSA9IHRhcmdldC55ICsgdGFyZ2V0LnZ5IC0gc291cmNlLnkgLSBzb3VyY2UudnkgfHwgamlnZ2xlKHJhbmRvbSk7XG4gICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgIGwgPSAobCAtIGRpc3RhbmNlc1tpXSkgLyBsICogYWxwaGEgKiBzdHJlbmd0aHNbaV07XG4gICAgICAgIHggKj0gbCwgeSAqPSBsO1xuICAgICAgICB0YXJnZXQudnggLT0geCAqIChiID0gYmlhc1tpXSk7XG4gICAgICAgIHRhcmdldC52eSAtPSB5ICogYjtcbiAgICAgICAgc291cmNlLnZ4ICs9IHggKiAoYiA9IDEgLSBiKTtcbiAgICAgICAgc291cmNlLnZ5ICs9IHkgKiBiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIG0gPSBsaW5rcy5sZW5ndGgsXG4gICAgICAgIG5vZGVCeUlkID0gbmV3IE1hcChub2Rlcy5tYXAoKGQsIGkpID0+IFtpZChkLCBpLCBub2RlcyksIGRdKSksXG4gICAgICAgIGxpbms7XG5cbiAgICBmb3IgKGkgPSAwLCBjb3VudCA9IG5ldyBBcnJheShuKTsgaSA8IG07ICsraSkge1xuICAgICAgbGluayA9IGxpbmtzW2ldLCBsaW5rLmluZGV4ID0gaTtcbiAgICAgIGlmICh0eXBlb2YgbGluay5zb3VyY2UgIT09IFwib2JqZWN0XCIpIGxpbmsuc291cmNlID0gZmluZChub2RlQnlJZCwgbGluay5zb3VyY2UpO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rLnRhcmdldCAhPT0gXCJvYmplY3RcIikgbGluay50YXJnZXQgPSBmaW5kKG5vZGVCeUlkLCBsaW5rLnRhcmdldCk7XG4gICAgICBjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gPSAoY291bnRbbGluay5zb3VyY2UuaW5kZXhdIHx8IDApICsgMTtcbiAgICAgIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSA9IChjb3VudFtsaW5rLnRhcmdldC5pbmRleF0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDAsIGJpYXMgPSBuZXcgQXJyYXkobSk7IGkgPCBtOyArK2kpIHtcbiAgICAgIGxpbmsgPSBsaW5rc1tpXSwgYmlhc1tpXSA9IGNvdW50W2xpbmsuc291cmNlLmluZGV4XSAvIChjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gKyBjb3VudFtsaW5rLnRhcmdldC5pbmRleF0pO1xuICAgIH1cblxuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShtKSwgaW5pdGlhbGl6ZVN0cmVuZ3RoKCk7XG4gICAgZGlzdGFuY2VzID0gbmV3IEFycmF5KG0pLCBpbml0aWFsaXplRGlzdGFuY2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVTdHJlbmd0aCgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IGxpbmtzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgc3RyZW5ndGhzW2ldID0gK3N0cmVuZ3RoKGxpbmtzW2ldLCBpLCBsaW5rcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZURpc3RhbmNlKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBkaXN0YW5jZXNbaV0gPSArZGlzdGFuY2UobGlua3NbaV0sIGksIGxpbmtzKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oX25vZGVzLCBfcmFuZG9tKSB7XG4gICAgbm9kZXMgPSBfbm9kZXM7XG4gICAgcmFuZG9tID0gX3JhbmRvbTtcbiAgICBpbml0aWFsaXplKCk7XG4gIH07XG5cbiAgZm9yY2UubGlua3MgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobGlua3MgPSBfLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IGxpbmtzO1xuICB9O1xuXG4gIGZvcmNlLmlkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlkID0gXywgZm9yY2UpIDogaWQ7XG4gIH07XG5cbiAgZm9yY2UuaXRlcmF0aW9ucyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpdGVyYXRpb25zID0gK18sIGZvcmNlKSA6IGl0ZXJhdGlvbnM7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZVN0cmVuZ3RoKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLmRpc3RhbmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRpc3RhbmNlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemVEaXN0YW5jZSgpLCBmb3JjZSkgOiBkaXN0YW5jZTtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAidmFyIG5vb3AgPSB7dmFsdWU6ICgpID0+IHt9fTtcblxuZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gYXJndW1lbnRzLmxlbmd0aCwgXyA9IHt9LCB0OyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCEodCA9IGFyZ3VtZW50c1tpXSArIFwiXCIpIHx8ICh0IGluIF8pIHx8IC9bXFxzLl0vLnRlc3QodCkpIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgdHlwZTogXCIgKyB0KTtcbiAgICBfW3RdID0gW107XG4gIH1cbiAgcmV0dXJuIG5ldyBEaXNwYXRjaChfKTtcbn1cblxuZnVuY3Rpb24gRGlzcGF0Y2goXykge1xuICB0aGlzLl8gPSBfO1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMsIHR5cGVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICBpZiAodCAmJiAhdHlwZXMuaGFzT3duUHJvcGVydHkodCkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0KTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuRGlzcGF0Y2gucHJvdG90eXBlID0gZGlzcGF0Y2gucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRGlzcGF0Y2gsXG4gIG9uOiBmdW5jdGlvbih0eXBlbmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgXyA9IHRoaXMuXyxcbiAgICAgICAgVCA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiwgXyksXG4gICAgICAgIHQsXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbiA9IFQubGVuZ3RoO1xuXG4gICAgLy8gSWYgbm8gY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmV0dXJuIHRoZSBjYWxsYmFjayBvZiB0aGUgZ2l2ZW4gdHlwZSBhbmQgbmFtZS5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKHQgPSAodHlwZW5hbWUgPSBUW2ldKS50eXBlKSAmJiAodCA9IGdldChfW3RdLCB0eXBlbmFtZS5uYW1lKSkpIHJldHVybiB0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGEgdHlwZSB3YXMgc3BlY2lmaWVkLCBzZXQgdGhlIGNhbGxiYWNrIGZvciB0aGUgZ2l2ZW4gdHlwZSBhbmQgbmFtZS5cbiAgICAvLyBPdGhlcndpc2UsIGlmIGEgbnVsbCBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZW1vdmUgY2FsbGJhY2tzIG9mIHRoZSBnaXZlbiBuYW1lLlxuICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNhbGxiYWNrOiBcIiArIGNhbGxiYWNrKTtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKHQgPSAodHlwZW5hbWUgPSBUW2ldKS50eXBlKSBfW3RdID0gc2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIGVsc2UgaWYgKGNhbGxiYWNrID09IG51bGwpIGZvciAodCBpbiBfKSBfW3RdID0gc2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUsIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjb3B5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29weSA9IHt9LCBfID0gdGhpcy5fO1xuICAgIGZvciAodmFyIHQgaW4gXykgY29weVt0XSA9IF9bdF0uc2xpY2UoKTtcbiAgICByZXR1cm4gbmV3IERpc3BhdGNoKGNvcHkpO1xuICB9LFxuICBjYWxsOiBmdW5jdGlvbih0eXBlLCB0aGF0KSB7XG4gICAgaWYgKChuID0gYXJndW1lbnRzLmxlbmd0aCAtIDIpID4gMCkgZm9yICh2YXIgYXJncyA9IG5ldyBBcnJheShuKSwgaSA9IDAsIG4sIHQ7IGkgPCBuOyArK2kpIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIGlmICghdGhpcy5fLmhhc093blByb3BlcnR5KHR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgZm9yICh0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9LFxuICBhcHBseTogZnVuY3Rpb24odHlwZSwgdGhhdCwgYXJncykge1xuICAgIGlmICghdGhpcy5fLmhhc093blByb3BlcnR5KHR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0KHR5cGUsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0eXBlLmxlbmd0aCwgYzsgaSA8IG47ICsraSkge1xuICAgIGlmICgoYyA9IHR5cGVbaV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQodHlwZSwgbmFtZSwgY2FsbGJhY2spIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0eXBlLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIGlmICh0eXBlW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHR5cGVbaV0gPSBub29wLCB0eXBlID0gdHlwZS5zbGljZSgwLCBpKS5jb25jYXQodHlwZS5zbGljZShpICsgMSkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChjYWxsYmFjayAhPSBudWxsKSB0eXBlLnB1c2goe25hbWU6IG5hbWUsIHZhbHVlOiBjYWxsYmFja30pO1xuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGF0Y2g7XG4iLCAidmFyIGZyYW1lID0gMCwgLy8gaXMgYW4gYW5pbWF0aW9uIGZyYW1lIHBlbmRpbmc/XG4gICAgdGltZW91dCA9IDAsIC8vIGlzIGEgdGltZW91dCBwZW5kaW5nP1xuICAgIGludGVydmFsID0gMCwgLy8gYXJlIGFueSB0aW1lcnMgYWN0aXZlP1xuICAgIHBva2VEZWxheSA9IDEwMDAsIC8vIGhvdyBmcmVxdWVudGx5IHdlIGNoZWNrIGZvciBjbG9jayBza2V3XG4gICAgdGFza0hlYWQsXG4gICAgdGFza1RhaWwsXG4gICAgY2xvY2tMYXN0ID0gMCxcbiAgICBjbG9ja05vdyA9IDAsXG4gICAgY2xvY2tTa2V3ID0gMCxcbiAgICBjbG9jayA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsXG4gICAgc2V0RnJhbWUgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKGYpIHsgc2V0VGltZW91dChmLCAxNyk7IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBjbG9ja05vdyB8fCAoc2V0RnJhbWUoY2xlYXJOb3cpLCBjbG9ja05vdyA9IGNsb2NrLm5vdygpICsgY2xvY2tTa2V3KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOb3coKSB7XG4gIGNsb2NrTm93ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICB0aGlzLl9jYWxsID1cbiAgdGhpcy5fdGltZSA9XG4gIHRoaXMuX25leHQgPSBudWxsO1xufVxuXG5UaW1lci5wcm90b3R5cGUgPSB0aW1lci5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUaW1lcixcbiAgcmVzdGFydDogZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgdGltZSA9ICh0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lKSArIChkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheSk7XG4gICAgaWYgKCF0aGlzLl9uZXh0ICYmIHRhc2tUYWlsICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGFza1RhaWwpIHRhc2tUYWlsLl9uZXh0ID0gdGhpcztcbiAgICAgIGVsc2UgdGFza0hlYWQgPSB0aGlzO1xuICAgICAgdGFza1RhaWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgc2xlZXAoKTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NhbGwpIHtcbiAgICAgIHRoaXMuX2NhbGwgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZSA9IEluZmluaXR5O1xuICAgICAgc2xlZXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyRmx1c2goKSB7XG4gIG5vdygpOyAvLyBHZXQgdGhlIGN1cnJlbnQgdGltZSwgaWYgbm90IGFscmVhZHkgc2V0LlxuICArK2ZyYW1lOyAvLyBQcmV0ZW5kIHdlXHUyMDE5dmUgc2V0IGFuIGFsYXJtLCBpZiB3ZSBoYXZlblx1MjAxOXQgYWxyZWFkeS5cbiAgdmFyIHQgPSB0YXNrSGVhZCwgZTtcbiAgd2hpbGUgKHQpIHtcbiAgICBpZiAoKGUgPSBjbG9ja05vdyAtIHQuX3RpbWUpID49IDApIHQuX2NhbGwuY2FsbCh1bmRlZmluZWQsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChlbGFwc2VkID0+IHtcbiAgICB0LnN0b3AoKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkICsgZGVsYXkpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwgIi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpbmVhcl9jb25ncnVlbnRpYWxfZ2VuZXJhdG9yI1BhcmFtZXRlcnNfaW5fY29tbW9uX3VzZVxuY29uc3QgYSA9IDE2NjQ1MjU7XG5jb25zdCBjID0gMTAxMzkwNDIyMztcbmNvbnN0IG0gPSA0Mjk0OTY3Mjk2OyAvLyAyXjMyXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQgcyA9IDE7XG4gIHJldHVybiAoKSA9PiAocyA9IChhICogcyArIGMpICUgbSkgLyBtO1xufVxuIiwgImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lcn0gZnJvbSBcImQzLXRpbWVyXCI7XG5pbXBvcnQgbGNnIGZyb20gXCIuL2xjZy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24geChkKSB7XG4gIHJldHVybiBkLng7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5KGQpIHtcbiAgcmV0dXJuIGQueTtcbn1cblxudmFyIGluaXRpYWxSYWRpdXMgPSAxMCxcbiAgICBpbml0aWFsQW5nbGUgPSBNYXRoLlBJICogKDMgLSBNYXRoLnNxcnQoNSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2Rlcykge1xuICB2YXIgc2ltdWxhdGlvbixcbiAgICAgIGFscGhhID0gMSxcbiAgICAgIGFscGhhTWluID0gMC4wMDEsXG4gICAgICBhbHBoYURlY2F5ID0gMSAtIE1hdGgucG93KGFscGhhTWluLCAxIC8gMzAwKSxcbiAgICAgIGFscGhhVGFyZ2V0ID0gMCxcbiAgICAgIHZlbG9jaXR5RGVjYXkgPSAwLjYsXG4gICAgICBmb3JjZXMgPSBuZXcgTWFwKCksXG4gICAgICBzdGVwcGVyID0gdGltZXIoc3RlcCksXG4gICAgICBldmVudCA9IGRpc3BhdGNoKFwidGlja1wiLCBcImVuZFwiKSxcbiAgICAgIHJhbmRvbSA9IGxjZygpO1xuXG4gIGlmIChub2RlcyA9PSBudWxsKSBub2RlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgdGljaygpO1xuICAgIGV2ZW50LmNhbGwoXCJ0aWNrXCIsIHNpbXVsYXRpb24pO1xuICAgIGlmIChhbHBoYSA8IGFscGhhTWluKSB7XG4gICAgICBzdGVwcGVyLnN0b3AoKTtcbiAgICAgIGV2ZW50LmNhbGwoXCJlbmRcIiwgc2ltdWxhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGljayhpdGVyYXRpb25zKSB7XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7XG5cbiAgICBpZiAoaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkKSBpdGVyYXRpb25zID0gMTtcblxuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBhbHBoYSArPSAoYWxwaGFUYXJnZXQgLSBhbHBoYSkgKiBhbHBoYURlY2F5O1xuXG4gICAgICBmb3JjZXMuZm9yRWFjaChmdW5jdGlvbihmb3JjZSkge1xuICAgICAgICBmb3JjZShhbHBoYSk7XG4gICAgICB9KTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLmZ4ID09IG51bGwpIG5vZGUueCArPSBub2RlLnZ4ICo9IHZlbG9jaXR5RGVjYXk7XG4gICAgICAgIGVsc2Ugbm9kZS54ID0gbm9kZS5meCwgbm9kZS52eCA9IDA7XG4gICAgICAgIGlmIChub2RlLmZ5ID09IG51bGwpIG5vZGUueSArPSBub2RlLnZ5ICo9IHZlbG9jaXR5RGVjYXk7XG4gICAgICAgIGVsc2Ugbm9kZS55ID0gbm9kZS5meSwgbm9kZS52eSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXVsYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplTm9kZXMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS5pbmRleCA9IGk7XG4gICAgICBpZiAobm9kZS5meCAhPSBudWxsKSBub2RlLnggPSBub2RlLmZ4O1xuICAgICAgaWYgKG5vZGUuZnkgIT0gbnVsbCkgbm9kZS55ID0gbm9kZS5meTtcbiAgICAgIGlmIChpc05hTihub2RlLngpIHx8IGlzTmFOKG5vZGUueSkpIHtcbiAgICAgICAgdmFyIHJhZGl1cyA9IGluaXRpYWxSYWRpdXMgKiBNYXRoLnNxcnQoMC41ICsgaSksIGFuZ2xlID0gaSAqIGluaXRpYWxBbmdsZTtcbiAgICAgICAgbm9kZS54ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBub2RlLnkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4obm9kZS52eCkgfHwgaXNOYU4obm9kZS52eSkpIHtcbiAgICAgICAgbm9kZS52eCA9IG5vZGUudnkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVGb3JjZShmb3JjZSkge1xuICAgIGlmIChmb3JjZS5pbml0aWFsaXplKSBmb3JjZS5pbml0aWFsaXplKG5vZGVzLCByYW5kb20pO1xuICAgIHJldHVybiBmb3JjZTtcbiAgfVxuXG4gIGluaXRpYWxpemVOb2RlcygpO1xuXG4gIHJldHVybiBzaW11bGF0aW9uID0ge1xuICAgIHRpY2s6IHRpY2ssXG5cbiAgICByZXN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGVwcGVyLnJlc3RhcnQoc3RlcCksIHNpbXVsYXRpb247XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0ZXBwZXIuc3RvcCgpLCBzaW11bGF0aW9uO1xuICAgIH0sXG5cbiAgICBub2RlczogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobm9kZXMgPSBfLCBpbml0aWFsaXplTm9kZXMoKSwgZm9yY2VzLmZvckVhY2goaW5pdGlhbGl6ZUZvcmNlKSwgc2ltdWxhdGlvbikgOiBub2RlcztcbiAgICB9LFxuXG4gICAgYWxwaGE6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGE7XG4gICAgfSxcblxuICAgIGFscGhhTWluOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYU1pbiA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhTWluO1xuICAgIH0sXG5cbiAgICBhbHBoYURlY2F5OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYURlY2F5ID0gK18sIHNpbXVsYXRpb24pIDogK2FscGhhRGVjYXk7XG4gICAgfSxcblxuICAgIGFscGhhVGFyZ2V0OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYVRhcmdldCA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhVGFyZ2V0O1xuICAgIH0sXG5cbiAgICB2ZWxvY2l0eURlY2F5OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2ZWxvY2l0eURlY2F5ID0gMSAtIF8sIHNpbXVsYXRpb24pIDogMSAtIHZlbG9jaXR5RGVjYXk7XG4gICAgfSxcblxuICAgIHJhbmRvbVNvdXJjZTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZG9tID0gXywgZm9yY2VzLmZvckVhY2goaW5pdGlhbGl6ZUZvcmNlKSwgc2ltdWxhdGlvbikgOiByYW5kb207XG4gICAgfSxcblxuICAgIGZvcmNlOiBmdW5jdGlvbihuYW1lLCBfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyAoKF8gPT0gbnVsbCA/IGZvcmNlcy5kZWxldGUobmFtZSkgOiBmb3JjZXMuc2V0KG5hbWUsIGluaXRpYWxpemVGb3JjZShfKSkpLCBzaW11bGF0aW9uKSA6IGZvcmNlcy5nZXQobmFtZSk7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uKHgsIHksIHJhZGl1cykge1xuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZHgsXG4gICAgICAgICAgZHksXG4gICAgICAgICAgZDIsXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBjbG9zZXN0O1xuXG4gICAgICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICAgICAgZWxzZSByYWRpdXMgKj0gcmFkaXVzO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgZHggPSB4IC0gbm9kZS54O1xuICAgICAgICBkeSA9IHkgLSBub2RlLnk7XG4gICAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICAgIGlmIChkMiA8IHJhZGl1cykgY2xvc2VzdCA9IG5vZGUsIHJhZGl1cyA9IGQyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICB9LFxuXG4gICAgb246IGZ1bmN0aW9uKG5hbWUsIF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/IChldmVudC5vbihuYW1lLCBfKSwgc2ltdWxhdGlvbikgOiBldmVudC5vbihuYW1lKTtcbiAgICB9XG4gIH07XG59XG4iLCAiaW1wb3J0IHtxdWFkdHJlZX0gZnJvbSBcImQzLXF1YWR0cmVlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5pbXBvcnQge3gsIHl9IGZyb20gXCIuL3NpbXVsYXRpb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBub2RlcyxcbiAgICAgIG5vZGUsXG4gICAgICByYW5kb20sXG4gICAgICBhbHBoYSxcbiAgICAgIHN0cmVuZ3RoID0gY29uc3RhbnQoLTMwKSxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIGRpc3RhbmNlTWluMiA9IDEsXG4gICAgICBkaXN0YW5jZU1heDIgPSBJbmZpbml0eSxcbiAgICAgIHRoZXRhMiA9IDAuODE7XG5cbiAgZnVuY3Rpb24gZm9yY2UoXykge1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCB0cmVlID0gcXVhZHRyZWUobm9kZXMsIHgsIHkpLnZpc2l0QWZ0ZXIoYWNjdW11bGF0ZSk7XG4gICAgZm9yIChhbHBoYSA9IF8sIGkgPSAwOyBpIDwgbjsgKytpKSBub2RlID0gbm9kZXNbaV0sIHRyZWUudmlzaXQoYXBwbHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgc3RyZW5ndGhzW25vZGUuaW5kZXhdID0gK3N0cmVuZ3RoKG5vZGUsIGksIG5vZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY3VtdWxhdGUocXVhZCkge1xuICAgIHZhciBzdHJlbmd0aCA9IDAsIHEsIGMsIHdlaWdodCA9IDAsIHgsIHksIGk7XG5cbiAgICAvLyBGb3IgaW50ZXJuYWwgbm9kZXMsIGFjY3VtdWxhdGUgZm9yY2VzIGZyb20gY2hpbGQgcXVhZHJhbnRzLlxuICAgIGlmIChxdWFkLmxlbmd0aCkge1xuICAgICAgZm9yICh4ID0geSA9IGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICAgIGlmICgocSA9IHF1YWRbaV0pICYmIChjID0gTWF0aC5hYnMocS52YWx1ZSkpKSB7XG4gICAgICAgICAgc3RyZW5ndGggKz0gcS52YWx1ZSwgd2VpZ2h0ICs9IGMsIHggKz0gYyAqIHEueCwgeSArPSBjICogcS55O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxdWFkLnggPSB4IC8gd2VpZ2h0O1xuICAgICAgcXVhZC55ID0geSAvIHdlaWdodDtcbiAgICB9XG5cbiAgICAvLyBGb3IgbGVhZiBub2RlcywgYWNjdW11bGF0ZSBmb3JjZXMgZnJvbSBjb2luY2lkZW50IHF1YWRyYW50cy5cbiAgICBlbHNlIHtcbiAgICAgIHEgPSBxdWFkO1xuICAgICAgcS54ID0gcS5kYXRhLng7XG4gICAgICBxLnkgPSBxLmRhdGEueTtcbiAgICAgIGRvIHN0cmVuZ3RoICs9IHN0cmVuZ3Roc1txLmRhdGEuaW5kZXhdO1xuICAgICAgd2hpbGUgKHEgPSBxLm5leHQpO1xuICAgIH1cblxuICAgIHF1YWQudmFsdWUgPSBzdHJlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5KHF1YWQsIHgxLCBfLCB4Mikge1xuICAgIGlmICghcXVhZC52YWx1ZSkgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIgeCA9IHF1YWQueCAtIG5vZGUueCxcbiAgICAgICAgeSA9IHF1YWQueSAtIG5vZGUueSxcbiAgICAgICAgdyA9IHgyIC0geDEsXG4gICAgICAgIGwgPSB4ICogeCArIHkgKiB5O1xuXG4gICAgLy8gQXBwbHkgdGhlIEJhcm5lcy1IdXQgYXBwcm94aW1hdGlvbiBpZiBwb3NzaWJsZS5cbiAgICAvLyBMaW1pdCBmb3JjZXMgZm9yIHZlcnkgY2xvc2Ugbm9kZXM7IHJhbmRvbWl6ZSBkaXJlY3Rpb24gaWYgY29pbmNpZGVudC5cbiAgICBpZiAodyAqIHcgLyB0aGV0YTIgPCBsKSB7XG4gICAgICBpZiAobCA8IGRpc3RhbmNlTWF4Mikge1xuICAgICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgICBpZiAoeSA9PT0gMCkgeSA9IGppZ2dsZShyYW5kb20pLCBsICs9IHkgKiB5O1xuICAgICAgICBpZiAobCA8IGRpc3RhbmNlTWluMikgbCA9IE1hdGguc3FydChkaXN0YW5jZU1pbjIgKiBsKTtcbiAgICAgICAgbm9kZS52eCArPSB4ICogcXVhZC52YWx1ZSAqIGFscGhhIC8gbDtcbiAgICAgICAgbm9kZS52eSArPSB5ICogcXVhZC52YWx1ZSAqIGFscGhhIC8gbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcHJvY2VzcyBwb2ludHMgZGlyZWN0bHkuXG4gICAgZWxzZSBpZiAocXVhZC5sZW5ndGggfHwgbCA+PSBkaXN0YW5jZU1heDIpIHJldHVybjtcblxuICAgIC8vIExpbWl0IGZvcmNlcyBmb3IgdmVyeSBjbG9zZSBub2RlczsgcmFuZG9taXplIGRpcmVjdGlvbiBpZiBjb2luY2lkZW50LlxuICAgIGlmIChxdWFkLmRhdGEgIT09IG5vZGUgfHwgcXVhZC5uZXh0KSB7XG4gICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgIGlmIChsIDwgZGlzdGFuY2VNaW4yKSBsID0gTWF0aC5zcXJ0KGRpc3RhbmNlTWluMiAqIGwpO1xuICAgIH1cblxuICAgIGRvIGlmIChxdWFkLmRhdGEgIT09IG5vZGUpIHtcbiAgICAgIHcgPSBzdHJlbmd0aHNbcXVhZC5kYXRhLmluZGV4XSAqIGFscGhhIC8gbDtcbiAgICAgIG5vZGUudnggKz0geCAqIHc7XG4gICAgICBub2RlLnZ5ICs9IHkgKiB3O1xuICAgIH0gd2hpbGUgKHF1YWQgPSBxdWFkLm5leHQpO1xuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF9ub2RlcywgX3JhbmRvbSkge1xuICAgIG5vZGVzID0gX25vZGVzO1xuICAgIHJhbmRvbSA9IF9yYW5kb207XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2VNaW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2VNaW4yID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydChkaXN0YW5jZU1pbjIpO1xuICB9O1xuXG4gIGZvcmNlLmRpc3RhbmNlTWF4ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRpc3RhbmNlTWF4MiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQoZGlzdGFuY2VNYXgyKTtcbiAgfTtcblxuICBmb3JjZS50aGV0YSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGV0YTIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KHRoZXRhMik7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwgImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHZhciBzdHJlbmd0aCA9IGNvbnN0YW50KDAuMSksXG4gICAgICBub2RlcyxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIHh6O1xuXG4gIGlmICh0eXBlb2YgeCAhPT0gXCJmdW5jdGlvblwiKSB4ID0gY29uc3RhbnQoeCA9PSBudWxsID8gMCA6ICt4KTtcblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBub2RlID0gbm9kZXNbaV0sIG5vZGUudnggKz0gKHh6W2ldIC0gbm9kZS54KSAqIHN0cmVuZ3Roc1tpXSAqIGFscGhhO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoO1xuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShuKTtcbiAgICB4eiA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSBpc05hTih4eltpXSA9ICt4KG5vZGVzW2ldLCBpLCBub2RlcykpID8gMCA6ICtzdHJlbmd0aChub2Rlc1tpXSwgaSwgbm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgbm9kZXMgPSBfO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHg7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwgImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih5KSB7XG4gIHZhciBzdHJlbmd0aCA9IGNvbnN0YW50KDAuMSksXG4gICAgICBub2RlcyxcbiAgICAgIHN0cmVuZ3RocyxcbiAgICAgIHl6O1xuXG4gIGlmICh0eXBlb2YgeSAhPT0gXCJmdW5jdGlvblwiKSB5ID0gY29uc3RhbnQoeSA9PSBudWxsID8gMCA6ICt5KTtcblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBub2RlID0gbm9kZXNbaV0sIG5vZGUudnkgKz0gKHl6W2ldIC0gbm9kZS55KSAqIHN0cmVuZ3Roc1tpXSAqIGFscGhhO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoO1xuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShuKTtcbiAgICB5eiA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSBpc05hTih5eltpXSA9ICt5KG5vZGVzW2ldLCBpLCBub2RlcykpID8gMCA6ICtzdHJlbmd0aChub2Rlc1tpXSwgaSwgbm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgbm9kZXMgPSBfO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHk7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwgIi8vIFRoZXNlIGFyZSB0eXBpY2FsbHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIG5vZXZlbnQgdG8gZW5zdXJlIHRoYXQgd2UgY2FuXG4vLyBwcmV2ZW50RGVmYXVsdCBvbiB0aGUgZXZlbnQuXG5leHBvcnQgY29uc3Qgbm9ucGFzc2l2ZSA9IHtwYXNzaXZlOiBmYWxzZX07XG5leHBvcnQgY29uc3Qgbm9ucGFzc2l2ZWNhcHR1cmUgPSB7Y2FwdHVyZTogdHJ1ZSwgcGFzc2l2ZTogZmFsc2V9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm9wcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3R9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBub2V2ZW50LCB7bm9ucGFzc2l2ZWNhcHR1cmV9IGZyb20gXCIuL25vZXZlbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmlldykge1xuICB2YXIgcm9vdCA9IHZpZXcuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgc2VsZWN0aW9uID0gc2VsZWN0KHZpZXcpLm9uKFwiZHJhZ3N0YXJ0LmRyYWdcIiwgbm9ldmVudCwgbm9ucGFzc2l2ZWNhcHR1cmUpO1xuICBpZiAoXCJvbnNlbGVjdHN0YXJ0XCIgaW4gcm9vdCkge1xuICAgIHNlbGVjdGlvbi5vbihcInNlbGVjdHN0YXJ0LmRyYWdcIiwgbm9ldmVudCwgbm9ucGFzc2l2ZWNhcHR1cmUpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuX19ub3NlbGVjdCA9IHJvb3Quc3R5bGUuTW96VXNlclNlbGVjdDtcbiAgICByb290LnN0eWxlLk1velVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24geWVzZHJhZyh2aWV3LCBub2NsaWNrKSB7XG4gIHZhciByb290ID0gdmlldy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBzZWxlY3Rpb24gPSBzZWxlY3Qodmlldykub24oXCJkcmFnc3RhcnQuZHJhZ1wiLCBudWxsKTtcbiAgaWYgKG5vY2xpY2spIHtcbiAgICBzZWxlY3Rpb24ub24oXCJjbGljay5kcmFnXCIsIG5vZXZlbnQsIG5vbnBhc3NpdmVjYXB0dXJlKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBzZWxlY3Rpb24ub24oXCJjbGljay5kcmFnXCIsIG51bGwpOyB9LCAwKTtcbiAgfVxuICBpZiAoXCJvbnNlbGVjdHN0YXJ0XCIgaW4gcm9vdCkge1xuICAgIHNlbGVjdGlvbi5vbihcInNlbGVjdHN0YXJ0LmRyYWdcIiwgbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gcm9vdC5fX25vc2VsZWN0O1xuICAgIGRlbGV0ZSByb290Ll9fbm9zZWxlY3Q7XG4gIH1cbn1cbiIsICJleHBvcnQgZGVmYXVsdCB4ID0+ICgpID0+IHg7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhZ0V2ZW50KHR5cGUsIHtcbiAgc291cmNlRXZlbnQsXG4gIHN1YmplY3QsXG4gIHRhcmdldCxcbiAgaWRlbnRpZmllcixcbiAgYWN0aXZlLFxuICB4LCB5LCBkeCwgZHksXG4gIGRpc3BhdGNoXG59KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICB0eXBlOiB7dmFsdWU6IHR5cGUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgc291cmNlRXZlbnQ6IHt2YWx1ZTogc291cmNlRXZlbnQsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgc3ViamVjdDoge3ZhbHVlOiBzdWJqZWN0LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHRhcmdldDoge3ZhbHVlOiB0YXJnZXQsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgaWRlbnRpZmllcjoge3ZhbHVlOiBpZGVudGlmaWVyLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGFjdGl2ZToge3ZhbHVlOiBhY3RpdmUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgeDoge3ZhbHVlOiB4LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHk6IHt2YWx1ZTogeSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBkeDoge3ZhbHVlOiBkeCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBkeToge3ZhbHVlOiBkeSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBfOiB7dmFsdWU6IGRpc3BhdGNofVxuICB9KTtcbn1cblxuRHJhZ0V2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsdWUgPSB0aGlzLl8ub24uYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgPT09IHRoaXMuXyA/IHRoaXMgOiB2YWx1ZTtcbn07XG4iLCAiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3NlbGVjdCwgcG9pbnRlcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IG5vZHJhZywge3llc2RyYWd9IGZyb20gXCIuL25vZHJhZy5qc1wiO1xuaW1wb3J0IG5vZXZlbnQsIHtub25wYXNzaXZlLCBub25wYXNzaXZlY2FwdHVyZSwgbm9wcm9wYWdhdGlvbn0gZnJvbSBcIi4vbm9ldmVudC5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgRHJhZ0V2ZW50IGZyb20gXCIuL2V2ZW50LmpzXCI7XG5cbi8vIElnbm9yZSByaWdodC1jbGljaywgc2luY2UgdGhhdCBzaG91bGQgb3BlbiB0aGUgY29udGV4dCBtZW51LlxuZnVuY3Rpb24gZGVmYXVsdEZpbHRlcihldmVudCkge1xuICByZXR1cm4gIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50LmJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFN1YmplY3QoZXZlbnQsIGQpIHtcbiAgcmV0dXJuIGQgPT0gbnVsbCA/IHt4OiBldmVudC54LCB5OiBldmVudC55fSA6IGQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRUb3VjaGFibGUoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgKFwib250b3VjaHN0YXJ0XCIgaW4gdGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgZmlsdGVyID0gZGVmYXVsdEZpbHRlcixcbiAgICAgIGNvbnRhaW5lciA9IGRlZmF1bHRDb250YWluZXIsXG4gICAgICBzdWJqZWN0ID0gZGVmYXVsdFN1YmplY3QsXG4gICAgICB0b3VjaGFibGUgPSBkZWZhdWx0VG91Y2hhYmxlLFxuICAgICAgZ2VzdHVyZXMgPSB7fSxcbiAgICAgIGxpc3RlbmVycyA9IGRpc3BhdGNoKFwic3RhcnRcIiwgXCJkcmFnXCIsIFwiZW5kXCIpLFxuICAgICAgYWN0aXZlID0gMCxcbiAgICAgIG1vdXNlZG93bngsXG4gICAgICBtb3VzZWRvd255LFxuICAgICAgbW91c2Vtb3ZpbmcsXG4gICAgICB0b3VjaGVuZGluZyxcbiAgICAgIGNsaWNrRGlzdGFuY2UyID0gMDtcblxuICBmdW5jdGlvbiBkcmFnKHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvblxuICAgICAgICAub24oXCJtb3VzZWRvd24uZHJhZ1wiLCBtb3VzZWRvd25lZClcbiAgICAgIC5maWx0ZXIodG91Y2hhYmxlKVxuICAgICAgICAub24oXCJ0b3VjaHN0YXJ0LmRyYWdcIiwgdG91Y2hzdGFydGVkKVxuICAgICAgICAub24oXCJ0b3VjaG1vdmUuZHJhZ1wiLCB0b3VjaG1vdmVkLCBub25wYXNzaXZlKVxuICAgICAgICAub24oXCJ0b3VjaGVuZC5kcmFnIHRvdWNoY2FuY2VsLmRyYWdcIiwgdG91Y2hlbmRlZClcbiAgICAgICAgLnN0eWxlKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKVxuICAgICAgICAuc3R5bGUoXCItd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3JcIiwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2Vkb3duZWQoZXZlbnQsIGQpIHtcbiAgICBpZiAodG91Y2hlbmRpbmcgfHwgIWZpbHRlci5jYWxsKHRoaXMsIGV2ZW50LCBkKSkgcmV0dXJuO1xuICAgIHZhciBnZXN0dXJlID0gYmVmb3Jlc3RhcnQodGhpcywgY29udGFpbmVyLmNhbGwodGhpcywgZXZlbnQsIGQpLCBldmVudCwgZCwgXCJtb3VzZVwiKTtcbiAgICBpZiAoIWdlc3R1cmUpIHJldHVybjtcbiAgICBzZWxlY3QoZXZlbnQudmlldylcbiAgICAgIC5vbihcIm1vdXNlbW92ZS5kcmFnXCIsIG1vdXNlbW92ZWQsIG5vbnBhc3NpdmVjYXB0dXJlKVxuICAgICAgLm9uKFwibW91c2V1cC5kcmFnXCIsIG1vdXNldXBwZWQsIG5vbnBhc3NpdmVjYXB0dXJlKTtcbiAgICBub2RyYWcoZXZlbnQudmlldyk7XG4gICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgbW91c2Vtb3ZpbmcgPSBmYWxzZTtcbiAgICBtb3VzZWRvd254ID0gZXZlbnQuY2xpZW50WDtcbiAgICBtb3VzZWRvd255ID0gZXZlbnQuY2xpZW50WTtcbiAgICBnZXN0dXJlKFwic3RhcnRcIiwgZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2Vtb3ZlZChldmVudCkge1xuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGlmICghbW91c2Vtb3ZpbmcpIHtcbiAgICAgIHZhciBkeCA9IGV2ZW50LmNsaWVudFggLSBtb3VzZWRvd254LCBkeSA9IGV2ZW50LmNsaWVudFkgLSBtb3VzZWRvd255O1xuICAgICAgbW91c2Vtb3ZpbmcgPSBkeCAqIGR4ICsgZHkgKiBkeSA+IGNsaWNrRGlzdGFuY2UyO1xuICAgIH1cbiAgICBnZXN0dXJlcy5tb3VzZShcImRyYWdcIiwgZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2V1cHBlZChldmVudCkge1xuICAgIHNlbGVjdChldmVudC52aWV3KS5vbihcIm1vdXNlbW92ZS5kcmFnIG1vdXNldXAuZHJhZ1wiLCBudWxsKTtcbiAgICB5ZXNkcmFnKGV2ZW50LnZpZXcsIG1vdXNlbW92aW5nKTtcbiAgICBub2V2ZW50KGV2ZW50KTtcbiAgICBnZXN0dXJlcy5tb3VzZShcImVuZFwiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaHN0YXJ0ZWQoZXZlbnQsIGQpIHtcbiAgICBpZiAoIWZpbHRlci5jYWxsKHRoaXMsIGV2ZW50LCBkKSkgcmV0dXJuO1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIGMgPSBjb250YWluZXIuY2FsbCh0aGlzLCBldmVudCwgZCksXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgZ2VzdHVyZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChnZXN0dXJlID0gYmVmb3Jlc3RhcnQodGhpcywgYywgZXZlbnQsIGQsIHRvdWNoZXNbaV0uaWRlbnRpZmllciwgdG91Y2hlc1tpXSkpIHtcbiAgICAgICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgICAgIGdlc3R1cmUoXCJzdGFydFwiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2htb3ZlZChldmVudCkge1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgZ2VzdHVyZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2hlc1tpXS5pZGVudGlmaWVyXSkge1xuICAgICAgICBub2V2ZW50KGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcImRyYWdcIiwgZXZlbnQsIHRvdWNoZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoZW5kZWQoZXZlbnQpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsIGksIGdlc3R1cmU7XG5cbiAgICBpZiAodG91Y2hlbmRpbmcpIGNsZWFyVGltZW91dCh0b3VjaGVuZGluZyk7XG4gICAgdG91Y2hlbmRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0b3VjaGVuZGluZyA9IG51bGw7IH0sIDUwMCk7IC8vIEdob3N0IGNsaWNrcyBhcmUgZGVsYXllZCFcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoZ2VzdHVyZSA9IGdlc3R1cmVzW3RvdWNoZXNbaV0uaWRlbnRpZmllcl0pIHtcbiAgICAgICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgICAgIGdlc3R1cmUoXCJlbmRcIiwgZXZlbnQsIHRvdWNoZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZXN0YXJ0KHRoYXQsIGNvbnRhaW5lciwgZXZlbnQsIGQsIGlkZW50aWZpZXIsIHRvdWNoKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gbGlzdGVuZXJzLmNvcHkoKSxcbiAgICAgICAgcCA9IHBvaW50ZXIodG91Y2ggfHwgZXZlbnQsIGNvbnRhaW5lciksIGR4LCBkeSxcbiAgICAgICAgcztcblxuICAgIGlmICgocyA9IHN1YmplY3QuY2FsbCh0aGF0LCBuZXcgRHJhZ0V2ZW50KFwiYmVmb3Jlc3RhcnRcIiwge1xuICAgICAgICBzb3VyY2VFdmVudDogZXZlbnQsXG4gICAgICAgIHRhcmdldDogZHJhZyxcbiAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICB4OiBwWzBdLFxuICAgICAgICB5OiBwWzFdLFxuICAgICAgICBkeDogMCxcbiAgICAgICAgZHk6IDAsXG4gICAgICAgIGRpc3BhdGNoXG4gICAgICB9KSwgZCkpID09IG51bGwpIHJldHVybjtcblxuICAgIGR4ID0gcy54IC0gcFswXSB8fCAwO1xuICAgIGR5ID0gcy55IC0gcFsxXSB8fCAwO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGdlc3R1cmUodHlwZSwgZXZlbnQsIHRvdWNoKSB7XG4gICAgICB2YXIgcDAgPSBwLCBuO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydFwiOiBnZXN0dXJlc1tpZGVudGlmaWVyXSA9IGdlc3R1cmUsIG4gPSBhY3RpdmUrKzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlbmRcIjogZGVsZXRlIGdlc3R1cmVzW2lkZW50aWZpZXJdLCAtLWFjdGl2ZTsgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICBjYXNlIFwiZHJhZ1wiOiBwID0gcG9pbnRlcih0b3VjaCB8fCBldmVudCwgY29udGFpbmVyKSwgbiA9IGFjdGl2ZTsgYnJlYWs7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaC5jYWxsKFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aGF0LFxuICAgICAgICBuZXcgRHJhZ0V2ZW50KHR5cGUsIHtcbiAgICAgICAgICBzb3VyY2VFdmVudDogZXZlbnQsXG4gICAgICAgICAgc3ViamVjdDogcyxcbiAgICAgICAgICB0YXJnZXQ6IGRyYWcsXG4gICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICBhY3RpdmU6IG4sXG4gICAgICAgICAgeDogcFswXSArIGR4LFxuICAgICAgICAgIHk6IHBbMV0gKyBkeSxcbiAgICAgICAgICBkeDogcFswXSAtIHAwWzBdLFxuICAgICAgICAgIGR5OiBwWzFdIC0gcDBbMV0sXG4gICAgICAgICAgZGlzcGF0Y2hcbiAgICAgICAgfSksXG4gICAgICAgIGRcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIGRyYWcuZmlsdGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGZpbHRlciA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgZHJhZykgOiBmaWx0ZXI7XG4gIH07XG5cbiAgZHJhZy5jb250YWluZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29udGFpbmVyID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgZHJhZykgOiBjb250YWluZXI7XG4gIH07XG5cbiAgZHJhZy5zdWJqZWN0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN1YmplY3QgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBkcmFnKSA6IHN1YmplY3Q7XG4gIH07XG5cbiAgZHJhZy50b3VjaGFibGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodG91Y2hhYmxlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBkcmFnKSA6IHRvdWNoYWJsZTtcbiAgfTtcblxuICBkcmFnLm9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gbGlzdGVuZXJzLm9uLmFwcGx5KGxpc3RlbmVycywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdmFsdWUgPT09IGxpc3RlbmVycyA/IGRyYWcgOiB2YWx1ZTtcbiAgfTtcblxuICBkcmFnLmNsaWNrRGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xpY2tEaXN0YW5jZTIgPSAoXyA9ICtfKSAqIF8sIGRyYWcpIDogTWF0aC5zcXJ0KGNsaWNrRGlzdGFuY2UyKTtcbiAgfTtcblxuICByZXR1cm4gZHJhZztcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb25zdHJ1Y3RvciwgZmFjdG9yeSwgcHJvdG90eXBlKSB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGZhY3RvcnkucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChwYXJlbnQsIGRlZmluaXRpb24pIHtcbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSk7XG4gIGZvciAodmFyIGtleSBpbiBkZWZpbml0aW9uKSBwcm90b3R5cGVba2V5XSA9IGRlZmluaXRpb25ba2V5XTtcbiAgcmV0dXJuIHByb3RvdHlwZTtcbn1cbiIsICJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKCkge31cblxuZXhwb3J0IHZhciBkYXJrZXIgPSAwLjc7XG5leHBvcnQgdmFyIGJyaWdodGVyID0gMSAvIGRhcmtlcjtcblxudmFyIHJlSSA9IFwiXFxcXHMqKFsrLV0/XFxcXGQrKVxcXFxzKlwiLFxuICAgIHJlTiA9IFwiXFxcXHMqKFsrLV0/KD86XFxcXGQqXFxcXC4pP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVxcXFxzKlwiLFxuICAgIHJlUCA9IFwiXFxcXHMqKFsrLV0/KD86XFxcXGQqXFxcXC4pP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleCA9IC9eIyhbMC05YS1mXXszLDh9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoYF5yZ2JcXFxcKCR7cmVJfSwke3JlSX0sJHtyZUl9XFxcXCkkYCksXG4gICAgcmVSZ2JQZXJjZW50ID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZVB9LCR7cmVQfSwke3JlUH1cXFxcKSRgKSxcbiAgICByZVJnYmFJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYmFcXFxcKCR7cmVJfSwke3JlSX0sJHtyZUl9LCR7cmVOfVxcXFwpJGApLFxuICAgIHJlUmdiYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZVB9LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChgXmhzbFxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH1cXFxcKSRgKSxcbiAgICByZUhzbGFQZXJjZW50ID0gbmV3IFJlZ0V4cChgXmhzbGFcXFxcKCR7cmVOfSwke3JlUH0sJHtyZVB9LCR7cmVOfVxcXFwpJGApO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBjb3B5KGNoYW5uZWxzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IHRoaXMuY29uc3RydWN0b3IsIHRoaXMsIGNoYW5uZWxzKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBjb2xvcl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogY29sb3JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiBjb2xvcl9mb3JtYXRIZXg4LFxuICBmb3JtYXRIc2w6IGNvbG9yX2Zvcm1hdEhzbCxcbiAgZm9ybWF0UmdiOiBjb2xvcl9mb3JtYXRSZ2IsXG4gIHRvU3RyaW5nOiBjb2xvcl9mb3JtYXRSZ2Jcbn0pO1xuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXg4KCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRIZXg4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhzbCgpIHtcbiAgcmV0dXJuIGhzbENvbnZlcnQodGhpcykuZm9ybWF0SHNsKCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdFJnYigpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0UmdiKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbSwgbDtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleC5leGVjKGZvcm1hdCkpID8gKGwgPSBtWzFdLmxlbmd0aCwgbSA9IHBhcnNlSW50KG1bMV0sIDE2KSwgbCA9PT0gNiA/IHJnYm4obSkgLy8gI2ZmMDAwMFxuICAgICAgOiBsID09PSAzID8gbmV3IFJnYigobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSAvLyAjZjAwXG4gICAgICA6IGwgPT09IDggPyByZ2JhKG0gPj4gMjQgJiAweGZmLCBtID4+IDE2ICYgMHhmZiwgbSA+PiA4ICYgMHhmZiwgKG0gJiAweGZmKSAvIDB4ZmYpIC8vICNmZjAwMDAwMFxuICAgICAgOiBsID09PSA0ID8gcmdiYSgobSA+PiAxMiAmIDB4ZikgfCAobSA+PiA4ICYgMHhmMCksIChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpKSAvIDB4ZmYpIC8vICNmMDAwXG4gICAgICA6IG51bGwpIC8vIGludmFsaWQgaGV4XG4gICAgICA6IChtID0gcmVSZ2JJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0sIG1bMl0sIG1bM10sIDEpIC8vIHJnYigyNTUsIDAsIDApXG4gICAgICA6IChtID0gcmVSZ2JQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIDEpIC8vIHJnYigxMDAlLCAwJSwgMCUpXG4gICAgICA6IChtID0gcmVSZ2JhSW50ZWdlci5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKSAvLyByZ2JhKDI1NSwgMCwgMCwgMSlcbiAgICAgIDogKG0gPSByZVJnYmFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIG1bNF0pIC8vIHJnYigxMDAlLCAwJSwgMCUsIDEpXG4gICAgICA6IChtID0gcmVIc2xQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIDEpIC8vIGhzbCgxMjAsIDUwJSwgNTAlKVxuICAgICAgOiAobSA9IHJlSHNsYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgbVs0XSkgLy8gaHNsYSgxMjAsIDUwJSwgNTAlLCAxKVxuICAgICAgOiBuYW1lZC5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpID8gcmdibihuYW1lZFtmb3JtYXRdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgOiBmb3JtYXQgPT09IFwidHJhbnNwYXJlbnRcIiA/IG5ldyBSZ2IoTmFOLCBOYU4sIE5hTiwgMClcbiAgICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcmdibihuKSB7XG4gIHJldHVybiBuZXcgUmdiKG4gPj4gMTYgJiAweGZmLCBuID4+IDggJiAweGZmLCBuICYgMHhmZiwgMSk7XG59XG5cbmZ1bmN0aW9uIHJnYmEociwgZywgYiwgYSkge1xuICBpZiAoYSA8PSAwKSByID0gZyA9IGIgPSBOYU47XG4gIHJldHVybiBuZXcgUmdiKHIsIGcsIGIsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiQ29udmVydChvKSB7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IFJnYjtcbiAgbyA9IG8ucmdiKCk7XG4gIHJldHVybiBuZXcgUmdiKG8uciwgby5nLCBvLmIsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHJnYkNvbnZlcnQocikgOiBuZXcgUmdiKHIsIGcsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMuciA9ICtyO1xuICB0aGlzLmcgPSArZztcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoUmdiLCByZ2IsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IFJnYihjbGFtcGkodGhpcy5yKSwgY2xhbXBpKHRoaXMuZyksIGNsYW1waSh0aGlzLmIpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoLTAuNSA8PSB0aGlzLnIgJiYgdGhpcy5yIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuZyAmJiB0aGlzLmcgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5iICYmIHRoaXMuYiA8IDI1NS41KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBoZXg6IHJnYl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogcmdiX2Zvcm1hdEhleCxcbiAgZm9ybWF0SGV4ODogcmdiX2Zvcm1hdEhleDgsXG4gIGZvcm1hdFJnYjogcmdiX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IHJnYl9mb3JtYXRSZ2Jcbn0pKTtcblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiBgIyR7aGV4KHRoaXMucil9JHtoZXgodGhpcy5nKX0ke2hleCh0aGlzLmIpfSR7aGV4KChpc05hTih0aGlzLm9wYWNpdHkpID8gMSA6IHRoaXMub3BhY2l0eSkgKiAyNTUpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRSZ2IoKSB7XG4gIGNvbnN0IGEgPSBjbGFtcGEodGhpcy5vcGFjaXR5KTtcbiAgcmV0dXJuIGAke2EgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIn0ke2NsYW1waSh0aGlzLnIpfSwgJHtjbGFtcGkodGhpcy5nKX0sICR7Y2xhbXBpKHRoaXMuYil9JHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbn1cblxuZnVuY3Rpb24gY2xhbXBhKG9wYWNpdHkpIHtcbiAgcmV0dXJuIGlzTmFOKG9wYWNpdHkpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG9wYWNpdHkpKTtcbn1cblxuZnVuY3Rpb24gY2xhbXBpKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbn1cblxuZnVuY3Rpb24gaGV4KHZhbHVlKSB7XG4gIHZhbHVlID0gY2xhbXBpKHZhbHVlKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgY2xhbXAoKSB7XG4gICAgcmV0dXJuIG5ldyBIc2woY2xhbXBoKHRoaXMuaCksIGNsYW1wdCh0aGlzLnMpLCBjbGFtcHQodGhpcy5sKSwgY2xhbXBhKHRoaXMub3BhY2l0eSkpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5zICYmIHRoaXMucyA8PSAxIHx8IGlzTmFOKHRoaXMucykpXG4gICAgICAgICYmICgwIDw9IHRoaXMubCAmJiB0aGlzLmwgPD0gMSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgZm9ybWF0SHNsKCkge1xuICAgIGNvbnN0IGEgPSBjbGFtcGEodGhpcy5vcGFjaXR5KTtcbiAgICByZXR1cm4gYCR7YSA9PT0gMSA/IFwiaHNsKFwiIDogXCJoc2xhKFwifSR7Y2xhbXBoKHRoaXMuaCl9LCAke2NsYW1wdCh0aGlzLnMpICogMTAwfSUsICR7Y2xhbXB0KHRoaXMubCkgKiAxMDB9JSR7YSA9PT0gMSA/IFwiKVwiIDogYCwgJHthfSlgfWA7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gY2xhbXBoKHZhbHVlKSB7XG4gIHZhbHVlID0gKHZhbHVlIHx8IDApICUgMzYwO1xuICByZXR1cm4gdmFsdWUgPCAwID8gdmFsdWUgKyAzNjAgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xhbXB0KHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG59XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gYmFzaXModDEsIHYwLCB2MSwgdjIsIHYzKSB7XG4gIHZhciB0MiA9IHQxICogdDEsIHQzID0gdDIgKiB0MTtcbiAgcmV0dXJuICgoMSAtIDMgKiB0MSArIDMgKiB0MiAtIHQzKSAqIHYwXG4gICAgICArICg0IC0gNiAqIHQyICsgMyAqIHQzKSAqIHYxXG4gICAgICArICgxICsgMyAqIHQxICsgMyAqIHQyIC0gMyAqIHQzKSAqIHYyXG4gICAgICArIHQzICogdjMpIC8gNjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0IDw9IDAgPyAodCA9IDApIDogdCA+PSAxID8gKHQgPSAxLCBuIC0gMSkgOiBNYXRoLmZsb29yKHQgKiBuKSxcbiAgICAgICAgdjEgPSB2YWx1ZXNbaV0sXG4gICAgICAgIHYyID0gdmFsdWVzW2kgKyAxXSxcbiAgICAgICAgdjAgPSBpID4gMCA/IHZhbHVlc1tpIC0gMV0gOiAyICogdjEgLSB2MixcbiAgICAgICAgdjMgPSBpIDwgbiAtIDEgPyB2YWx1ZXNbaSArIDJdIDogMiAqIHYyIC0gdjE7XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuIiwgImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB4ID0+ICgpID0+IHg7XG4iLCAiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG4iLCAiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWQuanNcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiID0gK2IsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYSAqICgxIC0gdCkgKyBiICogdDtcbiAgfTtcbn1cbiIsICJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG52YXIgcmVBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLFxuICAgIHJlQiA9IG5ldyBSZWdFeHAocmVBLnNvdXJjZSwgXCJnXCIpO1xuXG5mdW5jdGlvbiB6ZXJvKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbmUoYikge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYmkgPSByZUEubGFzdEluZGV4ID0gcmVCLmxhc3RJbmRleCA9IDAsIC8vIHNjYW4gaW5kZXggZm9yIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGFtLCAvLyBjdXJyZW50IG1hdGNoIGluIGFcbiAgICAgIGJtLCAvLyBjdXJyZW50IG1hdGNoIGluIGJcbiAgICAgIGJzLCAvLyBzdHJpbmcgcHJlY2VkaW5nIGN1cnJlbnQgbnVtYmVyIGluIGIsIGlmIGFueVxuICAgICAgaSA9IC0xLCAvLyBpbmRleCBpbiBzXG4gICAgICBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuXG4gIC8vIENvZXJjZSBpbnB1dHMgdG8gc3RyaW5ncy5cbiAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG5cbiAgLy8gSW50ZXJwb2xhdGUgcGFpcnMgb2YgbnVtYmVycyBpbiBhICYgYi5cbiAgd2hpbGUgKChhbSA9IHJlQS5leGVjKGEpKVxuICAgICAgJiYgKGJtID0gcmVCLmV4ZWMoYikpKSB7XG4gICAgaWYgKChicyA9IGJtLmluZGV4KSA+IGJpKSB7IC8vIGEgc3RyaW5nIHByZWNlZGVzIHRoZSBuZXh0IG51bWJlciBpbiBiXG4gICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBicztcbiAgICB9XG4gICAgaWYgKChhbSA9IGFtWzBdKSA9PT0gKGJtID0gYm1bMF0pKSB7IC8vIG51bWJlcnMgaW4gYSAmIGIgbWF0Y2hcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJtOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBibTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcnBvbGF0ZSBub24tbWF0Y2hpbmcgbnVtYmVyc1xuICAgICAgc1srK2ldID0gbnVsbDtcbiAgICAgIHEucHVzaCh7aTogaSwgeDogbnVtYmVyKGFtLCBibSl9KTtcbiAgICB9XG4gICAgYmkgPSByZUIubGFzdEluZGV4O1xuICB9XG5cbiAgLy8gQWRkIHJlbWFpbnMgb2YgYi5cbiAgaWYgKGJpIDwgYi5sZW5ndGgpIHtcbiAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gIH1cblxuICAvLyBTcGVjaWFsIG9wdGltaXphdGlvbiBmb3Igb25seSBhIHNpbmdsZSBtYXRjaC5cbiAgLy8gT3RoZXJ3aXNlLCBpbnRlcnBvbGF0ZSBlYWNoIG9mIHRoZSBudW1iZXJzIGFuZCByZWpvaW4gdGhlIHN0cmluZy5cbiAgcmV0dXJuIHMubGVuZ3RoIDwgMiA/IChxWzBdXG4gICAgICA/IG9uZShxWzBdLngpXG4gICAgICA6IHplcm8oYikpXG4gICAgICA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbzsgaSA8IGI7ICsraSkgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgICAgIH0pO1xufVxuIiwgInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwgImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlLmpzXCI7XG5cbnZhciBzdmdOb2RlO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ3NzKHZhbHVlKSB7XG4gIGNvbnN0IG0gPSBuZXcgKHR5cGVvZiBET01NYXRyaXggPT09IFwiZnVuY3Rpb25cIiA/IERPTU1hdHJpeCA6IFdlYktpdENTU01hdHJpeCkodmFsdWUgKyBcIlwiKTtcbiAgcmV0dXJuIG0uaXNJZGVudGl0eSA/IGlkZW50aXR5IDogZGVjb21wb3NlKG0uYSwgbS5iLCBtLmMsIG0uZCwgbS5lLCBtLmYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cbiIsICJpbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXIuanNcIjtcbmltcG9ydCB7cGFyc2VDc3MsIHBhcnNlU3ZnfSBmcm9tIFwiLi9wYXJzZS5qc1wiO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZSwgcHhDb21tYSwgcHhQYXJlbiwgZGVnUGFyZW4pIHtcblxuICBmdW5jdGlvbiBwb3Aocykge1xuICAgIHJldHVybiBzLmxlbmd0aCA/IHMucG9wKCkgKyBcIiBcIiA6IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2goXCJ0cmFuc2xhdGUoXCIsIG51bGwsIHB4Q29tbWEsIG51bGwsIHB4UGFyZW4pO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiB8fCB5Yikge1xuICAgICAgcy5wdXNoKFwidHJhbnNsYXRlKFwiICsgeGIgKyBweENvbW1hICsgeWIgKyBweFBhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGUoYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBpZiAoYSAtIGIgPiAxODApIGIgKz0gMzYwOyBlbHNlIGlmIChiIC0gYSA+IDE4MCkgYSArPSAzNjA7IC8vIHNob3J0ZXN0IHBhdGhcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2tld1goYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiAhPT0gMSB8fCB5YiAhPT0gMSkge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIgKyB4YiArIFwiLFwiICsgeWIgKyBcIilcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuICAgIGEgPSBwYXJzZShhKSwgYiA9IHBhcnNlKGIpO1xuICAgIHRyYW5zbGF0ZShhLnRyYW5zbGF0ZVgsIGEudHJhbnNsYXRlWSwgYi50cmFuc2xhdGVYLCBiLnRyYW5zbGF0ZVksIHMsIHEpO1xuICAgIHJvdGF0ZShhLnJvdGF0ZSwgYi5yb3RhdGUsIHMsIHEpO1xuICAgIHNrZXdYKGEuc2tld1gsIGIuc2tld1gsIHMsIHEpO1xuICAgIHNjYWxlKGEuc2NhbGVYLCBhLnNjYWxlWSwgYi5zY2FsZVgsIGIuc2NhbGVZLCBzLCBxKTtcbiAgICBhID0gYiA9IG51bGw7IC8vIGdjXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBxLmxlbmd0aCwgbztcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZUNzcywgXCJweCwgXCIsIFwicHgpXCIsIFwiZGVnKVwiKTtcbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZVN2ZywgXCIsIFwiLCBcIilcIiwgXCIpXCIpO1xuIiwgInZhciBlcHNpbG9uMiA9IDFlLTEyO1xuXG5mdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSArIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHNpbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoeCkpIC0gMSAvIHgpIC8gMjtcbn1cblxuZnVuY3Rpb24gdGFuaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCgyICogeCkpIC0gMSkgLyAoeCArIDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gem9vbVJobyhyaG8sIHJobzIsIHJobzQpIHtcblxuICAvLyBwMCA9IFt1eDAsIHV5MCwgdzBdXG4gIC8vIHAxID0gW3V4MSwgdXkxLCB3MV1cbiAgZnVuY3Rpb24gem9vbShwMCwgcDEpIHtcbiAgICB2YXIgdXgwID0gcDBbMF0sIHV5MCA9IHAwWzFdLCB3MCA9IHAwWzJdLFxuICAgICAgICB1eDEgPSBwMVswXSwgdXkxID0gcDFbMV0sIHcxID0gcDFbMl0sXG4gICAgICAgIGR4ID0gdXgxIC0gdXgwLFxuICAgICAgICBkeSA9IHV5MSAtIHV5MCxcbiAgICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgICAgaSxcbiAgICAgICAgUztcblxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgdTAgXHUyMjQ1IHUxLlxuICAgIGlmIChkMiA8IGVwc2lsb24yKSB7XG4gICAgICBTID0gTWF0aC5sb2codzEgLyB3MCkgLyByaG87XG4gICAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHV4MCArIHQgKiBkeCxcbiAgICAgICAgICB1eTAgKyB0ICogZHksXG4gICAgICAgICAgdzAgKiBNYXRoLmV4cChyaG8gKiB0ICogUylcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmFsIGNhc2UuXG4gICAgZWxzZSB7XG4gICAgICB2YXIgZDEgPSBNYXRoLnNxcnQoZDIpLFxuICAgICAgICAgIGIwID0gKHcxICogdzEgLSB3MCAqIHcwICsgcmhvNCAqIGQyKSAvICgyICogdzAgKiByaG8yICogZDEpLFxuICAgICAgICAgIGIxID0gKHcxICogdzEgLSB3MCAqIHcwIC0gcmhvNCAqIGQyKSAvICgyICogdzEgKiByaG8yICogZDEpLFxuICAgICAgICAgIHIwID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIwICogYjAgKyAxKSAtIGIwKSxcbiAgICAgICAgICByMSA9IE1hdGgubG9nKE1hdGguc3FydChiMSAqIGIxICsgMSkgLSBiMSk7XG4gICAgICBTID0gKHIxIC0gcjApIC8gcmhvO1xuICAgICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHMgPSB0ICogUyxcbiAgICAgICAgICAgIGNvc2hyMCA9IGNvc2gocjApLFxuICAgICAgICAgICAgdSA9IHcwIC8gKHJobzIgKiBkMSkgKiAoY29zaHIwICogdGFuaChyaG8gKiBzICsgcjApIC0gc2luaChyMCkpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHV4MCArIHUgKiBkeCxcbiAgICAgICAgICB1eTAgKyB1ICogZHksXG4gICAgICAgICAgdzAgKiBjb3NocjAgLyBjb3NoKHJobyAqIHMgKyByMClcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpLmR1cmF0aW9uID0gUyAqIDEwMDAgKiByaG8gLyBNYXRoLlNRUlQyO1xuXG4gICAgcmV0dXJuIGk7XG4gIH1cblxuICB6b29tLnJobyA9IGZ1bmN0aW9uKF8pIHtcbiAgICB2YXIgXzEgPSBNYXRoLm1heCgxZS0zLCArXyksIF8yID0gXzEgKiBfMSwgXzQgPSBfMiAqIF8yO1xuICAgIHJldHVybiB6b29tUmhvKF8xLCBfMiwgXzQpO1xuICB9O1xuXG4gIHJldHVybiB6b29tO1xufSkoTWF0aC5TUVJUMiwgMiwgNCk7XG4iLCAiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyLCB0aW1lb3V0fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGVtcHR5T24gPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2FuY2VsXCIsIFwiaW50ZXJydXB0XCIpO1xudmFyIGVtcHR5VHdlZW4gPSBbXTtcblxuZXhwb3J0IHZhciBDUkVBVEVEID0gMDtcbmV4cG9ydCB2YXIgU0NIRURVTEVEID0gMTtcbmV4cG9ydCB2YXIgU1RBUlRJTkcgPSAyO1xuZXhwb3J0IHZhciBTVEFSVEVEID0gMztcbmV4cG9ydCB2YXIgUlVOTklORyA9IDQ7XG5leHBvcnQgdmFyIEVORElORyA9IDU7XG5leHBvcnQgdmFyIEVOREVEID0gNjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSwgaWQsIGluZGV4LCBncm91cCwgdGltaW5nKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZXMpIG5vZGUuX190cmFuc2l0aW9uID0ge307XG4gIGVsc2UgaWYgKGlkIGluIHNjaGVkdWxlcykgcmV0dXJuO1xuICBjcmVhdGUobm9kZSwgaWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluZGV4OiBpbmRleCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIGdyb3VwOiBncm91cCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIG9uOiBlbXB0eU9uLFxuICAgIHR3ZWVuOiBlbXB0eVR3ZWVuLFxuICAgIHRpbWU6IHRpbWluZy50aW1lLFxuICAgIGRlbGF5OiB0aW1pbmcuZGVsYXksXG4gICAgZHVyYXRpb246IHRpbWluZy5kdXJhdGlvbixcbiAgICBlYXNlOiB0aW1pbmcuZWFzZSxcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzdGF0ZTogQ1JFQVRFRFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gQ1JFQVRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gU1RBUlRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlIHx8ICEoc2NoZWR1bGUgPSBzY2hlZHVsZVtpZF0pKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobm9kZSwgaWQsIHNlbGYpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgdHdlZW47XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc2VsZiB0aW1lciB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNyZWF0ZWQuXG4gIC8vIE5vdGUgdGhlIGFjdHVhbCBkZWxheSBpcyBub3Qga25vd24gdW50aWwgdGhlIGZpcnN0IGNhbGxiYWNrIVxuICBzY2hlZHVsZXNbaWRdID0gc2VsZjtcbiAgc2VsZi50aW1lciA9IHRpbWVyKHNjaGVkdWxlLCAwLCBzZWxmLnRpbWUpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGVsYXBzZWQpIHtcbiAgICBzZWxmLnN0YXRlID0gU0NIRURVTEVEO1xuICAgIHNlbGYudGltZXIucmVzdGFydChzdGFydCwgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcblxuICAgIC8vIElmIHRoZSBlbGFwc2VkIGRlbGF5IGlzIGxlc3MgdGhhbiBvdXIgZmlyc3Qgc2xlZXAsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChzZWxmLmRlbGF5IDw9IGVsYXBzZWQpIHN0YXJ0KGVsYXBzZWQgLSBzZWxmLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGVsYXBzZWQpIHtcbiAgICB2YXIgaSwgaiwgbiwgbztcblxuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBub3QgU0NIRURVTEVELCB0aGVuIHdlIHByZXZpb3VzbHkgZXJyb3JlZCBvbiBzdGFydC5cbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU0NIRURVTEVEKSByZXR1cm4gc3RvcCgpO1xuXG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgbyA9IHNjaGVkdWxlc1tpXTtcbiAgICAgIGlmIChvLm5hbWUgIT09IHNlbGYubmFtZSkgY29udGludWU7XG5cbiAgICAgIC8vIFdoaWxlIHRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhIHN0YXJ0aW5nIHRyYW5zaXRpb24gZHVyaW5nIHRoaXMgZnJhbWUsXG4gICAgICAvLyBkZWZlciBzdGFydGluZyBhbiBpbnRlcnJ1cHRpbmcgdHJhbnNpdGlvbiB1bnRpbCB0aGF0IHRyYW5zaXRpb24gaGFzIGFcbiAgICAgIC8vIGNoYW5jZSB0byB0aWNrIChhbmQgcG9zc2libHkgZW5kKTsgc2VlIGQzL2QzLXRyYW5zaXRpb24jNTQhXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gU1RBUlRFRCkgcmV0dXJuIHRpbWVvdXQoc3RhcnQpO1xuXG4gICAgICAvLyBJbnRlcnJ1cHQgdGhlIGFjdGl2ZSB0cmFuc2l0aW9uLCBpZiBhbnkuXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gUlVOTklORykge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBhbnkgcHJlLWVtcHRlZCB0cmFuc2l0aW9ucy5cbiAgICAgIGVsc2UgaWYgKCtpIDwgaWQpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCB0aWNrIHRvIGVuZCBvZiB0aGUgY3VycmVudCBmcmFtZTsgc2VlIGQzL2QzIzE1NzYuXG4gICAgLy8gTm90ZSB0aGUgdHJhbnNpdGlvbiBtYXkgYmUgY2FuY2VsZWQgYWZ0ZXIgc3RhcnQgYW5kIGJlZm9yZSB0aGUgZmlyc3QgdGljayFcbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBzY2hlZHVsZWQgYmVmb3JlIHRoZSBzdGFydCBldmVudDsgc2VlIGQzL2QzLXRyYW5zaXRpb24jMTYhXG4gICAgLy8gQXNzdW1pbmcgdGhpcyBpcyBzdWNjZXNzZnVsLCBzdWJzZXF1ZW50IGNhbGxiYWNrcyBnbyBzdHJhaWdodCB0byB0aWNrLlxuICAgIHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gU1RBUlRFRCkge1xuICAgICAgICBzZWxmLnN0YXRlID0gUlVOTklORztcbiAgICAgICAgc2VsZi50aW1lci5yZXN0YXJ0KHRpY2ssIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG4gICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgc3RhcnQgZXZlbnQuXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgdGhlIHR3ZWVuIGFyZSBpbml0aWFsaXplZC5cbiAgICBzZWxmLnN0YXRlID0gU1RBUlRJTkc7XG4gICAgc2VsZi5vbi5jYWxsKFwic3RhcnRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNUQVJUSU5HKSByZXR1cm47IC8vIGludGVycnVwdGVkXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJURUQ7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0d2VlbiwgZGVsZXRpbmcgbnVsbCB0d2Vlbi5cbiAgICB0d2VlbiA9IG5ldyBBcnJheShuID0gc2VsZi50d2Vlbi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGogPSAtMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG8gPSBzZWxmLnR3ZWVuW2ldLnZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCkpIHtcbiAgICAgICAgdHdlZW5bKytqXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIHR3ZWVuLmxlbmd0aCA9IGogKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgdmFyIHQgPSBlbGFwc2VkIDwgc2VsZi5kdXJhdGlvbiA/IHNlbGYuZWFzZS5jYWxsKG51bGwsIGVsYXBzZWQgLyBzZWxmLmR1cmF0aW9uKSA6IChzZWxmLnRpbWVyLnJlc3RhcnQoc3RvcCksIHNlbGYuc3RhdGUgPSBFTkRJTkcsIDEpLFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSB0d2Vlbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgdHdlZW5baV0uY2FsbChub2RlLCB0KTtcbiAgICB9XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZW5kIGV2ZW50LlxuICAgIGlmIChzZWxmLnN0YXRlID09PSBFTkRJTkcpIHtcbiAgICAgIHNlbGYub24uY2FsbChcImVuZFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHNlbGYuc3RhdGUgPSBFTkRFRDtcbiAgICBzZWxmLnRpbWVyLnN0b3AoKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2lkXTtcbiAgICBmb3IgKHZhciBpIGluIHNjaGVkdWxlcykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xuICB9XG59XG4iLCAiaW1wb3J0IHtTVEFSVElORywgRU5ESU5HLCBFTkRFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHNjaGVkdWxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZW1wdHkgPSB0cnVlLFxuICAgICAgaTtcblxuICBpZiAoIXNjaGVkdWxlcykgcmV0dXJuO1xuXG4gIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG5cbiAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgIGlmICgoc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV0pLm5hbWUgIT09IG5hbWUpIHsgZW1wdHkgPSBmYWxzZTsgY29udGludWU7IH1cbiAgICBhY3RpdmUgPSBzY2hlZHVsZS5zdGF0ZSA+IFNUQVJUSU5HICYmIHNjaGVkdWxlLnN0YXRlIDwgRU5ESU5HO1xuICAgIHNjaGVkdWxlLnN0YXRlID0gRU5ERUQ7XG4gICAgc2NoZWR1bGUudGltZXIuc3RvcCgpO1xuICAgIHNjaGVkdWxlLm9uLmNhbGwoYWN0aXZlID8gXCJpbnRlcnJ1cHRcIiA6IFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNjaGVkdWxlLmluZGV4LCBzY2hlZHVsZS5ncm91cCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgfVxuXG4gIGlmIChlbXB0eSkgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xufVxuIiwgImltcG9ydCBpbnRlcnJ1cHQgZnJvbSBcIi4uL2ludGVycnVwdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgaW50ZXJydXB0KHRoaXMsIG5hbWUpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiB0d2VlblJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gdHdlZW4wID0gdHdlZW47XG4gICAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xID0gdHdlZW4xLnNsaWNlKCk7XG4gICAgICAgICAgdHdlZW4xLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0d2VlbkZ1bmN0aW9uKGlkLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdlXHUyMDE5cmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9ICh0d2VlbjAgPSB0d2Vlbikuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIHQgPSB7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSwgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMVtpXSA9IHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpID09PSBuKSB0d2VlbjEucHVzaCh0KTtcbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgbmFtZSArPSBcIlwiO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciB0d2VlbiA9IGdldCh0aGlzLm5vZGUoKSwgaWQpLnR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4ubGVuZ3RoLCB0OyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKHQgPSB0d2VlbltpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsID8gdHdlZW5SZW1vdmUgOiB0d2VlbkZ1bmN0aW9uKShpZCwgbmFtZSwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3ZWVuVmFsdWUodHJhbnNpdGlvbiwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdHJhbnNpdGlvbi5faWQ7XG5cbiAgdHJhbnNpdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCk7XG4gICAgKHNjaGVkdWxlLnZhbHVlIHx8IChzY2hlZHVsZS52YWx1ZSA9IHt9KSlbbmFtZV0gPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBnZXQobm9kZSwgaWQpLnZhbHVlW25hbWVdO1xuICB9O1xufVxuIiwgImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSZ2IsIGludGVycG9sYXRlU3RyaW5nfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYztcbiAgcmV0dXJuICh0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiA/IGludGVycG9sYXRlTnVtYmVyXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IGludGVycG9sYXRlUmdiXG4gICAgICA6IChjID0gY29sb3IoYikpID8gKGIgPSBjLCBpbnRlcnBvbGF0ZVJnYilcbiAgICAgIDogaW50ZXJwb2xhdGVTdHJpbmcpKGEsIGIpO1xufVxuIiwgImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpLCBzdHJpbmcxO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpLCBpID0gZnVsbG5hbWUgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdGhpcy5hdHRyVHdlZW4obmFtZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pKGZ1bGxuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwiYXR0ci5cIiArIG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdmFsdWUgPT0gbnVsbCA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpKGZ1bGxuYW1lKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkoZnVsbG5hbWUsIGksIHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW5OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2VlbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9IFwiYXR0ci5cIiArIG5hbWU7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIChmdWxsbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsICJpbXBvcnQge2dldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZGVsYXlGdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGF5Q29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZGVsYXlGdW5jdGlvblxuICAgICAgICAgIDogZGVsYXlDb25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZGVsYXk7XG59XG4iLCAiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZHVyYXRpb25GdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHVyYXRpb25Db25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGR1cmF0aW9uRnVuY3Rpb25cbiAgICAgICAgICA6IGR1cmF0aW9uQ29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmR1cmF0aW9uO1xufVxuIiwgImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmVhc2UgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKGVhc2VDb25zdGFudChpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5lYXNlO1xufVxuIiwgImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlVmFyeWluZyhpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIHYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy5lYWNoKGVhc2VWYXJ5aW5nKHRoaXMuX2lkLCB2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7bWF0Y2hlcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwgImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICBpZiAodHJhbnNpdGlvbi5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3I7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHRyYW5zaXRpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwgImltcG9ydCB7Z2V0LCBzZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0KG5hbWUpIHtcbiAgcmV0dXJuIChuYW1lICsgXCJcIikudHJpbSgpLnNwbGl0KC9efFxccysvKS5ldmVyeShmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiAhdCB8fCB0ID09PSBcInN0YXJ0XCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgb24wLCBvbjEsIHNpdCA9IHN0YXJ0KG5hbWUpID8gaW5pdCA6IHNldDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNpdCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdlXHUyMDE5cmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjApIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24obmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMlxuICAgICAgPyBnZXQodGhpcy5ub2RlKCksIGlkKS5vbi5vbihuYW1lKVxuICAgICAgOiB0aGlzLmVhY2gob25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpKTtcbn1cbiIsICJmdW5jdGlvbiByZW1vdmVGdW5jdGlvbihpZCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuX190cmFuc2l0aW9uKSBpZiAoK2kgIT09IGlkKSByZXR1cm47XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub24oXCJlbmQucmVtb3ZlXCIsIHJlbW92ZUZ1bmN0aW9uKHRoaXMuX2lkKSk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3Rvcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgICAgc2NoZWR1bGUoc3ViZ3JvdXBbaV0sIG5hbWUsIGlkLCBpLCBzdWJncm91cCwgZ2V0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwgImltcG9ydCB7c2VsZWN0b3JBbGx9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBmb3IgKHZhciBjaGlsZHJlbiA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSwgY2hpbGQsIGluaGVyaXQgPSBnZXQobm9kZSwgaWQpLCBrID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgayA8IGw7ICsraykge1xuICAgICAgICAgIGlmIChjaGlsZCA9IGNoaWxkcmVuW2tdKSB7XG4gICAgICAgICAgICBzY2hlZHVsZShjaGlsZCwgbmFtZSwgaWQsIGssIGNoaWxkcmVuLCBpbmhlcml0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwgImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbnZhciBTZWxlY3Rpb24gPSBzZWxlY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsICJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtQ3NzIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c3R5bGV9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlTnVsbChuYW1lLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHN0cmluZzEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCBzdHJpbmcxMCA9IHN0cmluZzEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHZhbHVlMSA9IHZhbHVlKHRoaXMpLFxuICAgICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHN0cmluZzEgPSB2YWx1ZTEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVNYXliZVJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgb24wLCBvbjEsIGxpc3RlbmVyMCwga2V5ID0gXCJzdHlsZS5cIiArIG5hbWUsIGV2ZW50ID0gXCJlbmQuXCIgKyBrZXksIHJlbW92ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub24sXG4gICAgICAgIGxpc3RlbmVyID0gc2NoZWR1bGUudmFsdWVba2V5XSA9PSBudWxsID8gcmVtb3ZlIHx8IChyZW1vdmUgPSBzdHlsZVJlbW92ZShuYW1lKSkgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdlXHUyMDE5cmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjAgfHwgbGlzdGVuZXIwICE9PSBsaXN0ZW5lcikgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihldmVudCwgbGlzdGVuZXIwID0gbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgaSA9IChuYW1lICs9IFwiXCIpID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZU51bGwobmFtZSwgaSkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBzdHlsZVJlbW92ZShuYW1lKSlcbiAgICA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVGdW5jdGlvbihuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwic3R5bGUuXCIgKyBuYW1lLCB2YWx1ZSkpKVxuICAgICAgLmVhY2goc3R5bGVNYXliZVJlbW92ZSh0aGlzLl9pZCwgbmFtZSkpXG4gICAgOiB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUNvbnN0YW50KG5hbWUsIGksIHZhbHVlKSwgcHJpb3JpdHkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBudWxsKTtcbn1cbiIsICJmdW5jdGlvbiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBpLmNhbGwodGhpcywgdCksIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIHQsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0ID0gKGkwID0gaSkgJiYgc3R5bGVJbnRlcnBvbGF0ZShuYW1lLCBpLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBrZXkgPSBcInN0eWxlLlwiICsgKG5hbWUgKz0gXCJcIik7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSk7XG59XG4iLCAiaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUxID0gdmFsdWUodGhpcyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlMSA9PSBudWxsID8gXCJcIiA6IHZhbHVlMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMudHdlZW4oXCJ0ZXh0XCIsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IHRleHRGdW5jdGlvbih0d2VlblZhbHVlKHRoaXMsIFwidGV4dFwiLCB2YWx1ZSkpXG4gICAgICA6IHRleHRDb25zdGFudCh2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIikpO1xufVxuIiwgImZ1bmN0aW9uIHRleHRJbnRlcnBvbGF0ZShpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IGkuY2FsbCh0aGlzLCB0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dFR3ZWVuKHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgdGV4dEludGVycG9sYXRlKGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJ0ZXh0XCI7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCB0ZXh0VHdlZW4odmFsdWUpKTtcbn1cbiIsICJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQwID0gdGhpcy5faWQsXG4gICAgICBpZDEgPSBuZXdJZCgpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHZhciBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkMCk7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkMSwgaSwgZ3JvdXAsIHtcbiAgICAgICAgICB0aW1lOiBpbmhlcml0LnRpbWUgKyBpbmhlcml0LmRlbGF5ICsgaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlOiBpbmhlcml0LmVhc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQxKTtcbn1cbiIsICJpbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBvbjAsIG9uMSwgdGhhdCA9IHRoaXMsIGlkID0gdGhhdC5faWQsIHNpemUgPSB0aGF0LnNpemUoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBjYW5jZWwgPSB7dmFsdWU6IHJlamVjdH0sXG4gICAgICAgIGVuZCA9IHt2YWx1ZTogZnVuY3Rpb24oKSB7IGlmICgtLXNpemUgPT09IDApIHJlc29sdmUoKTsgfX07XG5cbiAgICB0aGF0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZVx1MjAxOXJlIGRvbmUhXG4gICAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgICBpZiAob24gIT09IG9uMCkge1xuICAgICAgICBvbjEgPSAob24wID0gb24pLmNvcHkoKTtcbiAgICAgICAgb24xLl8uY2FuY2VsLnB1c2goY2FuY2VsKTtcbiAgICAgICAgb24xLl8uaW50ZXJydXB0LnB1c2goY2FuY2VsKTtcbiAgICAgICAgb24xLl8uZW5kLnB1c2goZW5kKTtcbiAgICAgIH1cblxuICAgICAgc2NoZWR1bGUub24gPSBvbjE7XG4gICAgfSk7XG5cbiAgICAvLyBUaGUgc2VsZWN0aW9uIHdhcyBlbXB0eSwgcmVzb2x2ZSBlbmQgaW1tZWRpYXRlbHlcbiAgICBpZiAoc2l6ZSA9PT0gMCkgcmVzb2x2ZSgpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0ciBmcm9tIFwiLi9hdHRyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyVHdlZW4gZnJvbSBcIi4vYXR0clR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kZWxheSBmcm9tIFwiLi9kZWxheS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2UgZnJvbSBcIi4vZWFzZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZVZhcnlpbmcgZnJvbSBcIi4vZWFzZVZhcnlpbmcuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlVHdlZW4gZnJvbSBcIi4vc3R5bGVUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0VHdlZW4gZnJvbSBcIi4vdGV4dFR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3R3ZWVuIGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lbmQgZnJvbSBcIi4vZW5kLmpzXCI7XG5cbnZhciBpZCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2l0aW9uKGdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2lkID0gaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0aW9uKCkudHJhbnNpdGlvbihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xuICByZXR1cm4gKytpZDtcbn1cblxudmFyIHNlbGVjdGlvbl9wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZSA9IHRyYW5zaXRpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNpdGlvbixcbiAgc2VsZWN0OiB0cmFuc2l0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiB0cmFuc2l0aW9uX3NlbGVjdEFsbCxcbiAgc2VsZWN0Q2hpbGQ6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHRyYW5zaXRpb25fZmlsdGVyLFxuICBtZXJnZTogdHJhbnNpdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiB0cmFuc2l0aW9uX3NlbGVjdGlvbixcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbl90cmFuc2l0aW9uLFxuICBjYWxsOiBzZWxlY3Rpb25fcHJvdG90eXBlLmNhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9wcm90b3R5cGUuZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9wcm90b3R5cGUuZWFjaCxcbiAgb246IHRyYW5zaXRpb25fb24sXG4gIGF0dHI6IHRyYW5zaXRpb25fYXR0cixcbiAgYXR0clR3ZWVuOiB0cmFuc2l0aW9uX2F0dHJUd2VlbixcbiAgc3R5bGU6IHRyYW5zaXRpb25fc3R5bGUsXG4gIHN0eWxlVHdlZW46IHRyYW5zaXRpb25fc3R5bGVUd2VlbixcbiAgdGV4dDogdHJhbnNpdGlvbl90ZXh0LFxuICB0ZXh0VHdlZW46IHRyYW5zaXRpb25fdGV4dFR3ZWVuLFxuICByZW1vdmU6IHRyYW5zaXRpb25fcmVtb3ZlLFxuICB0d2VlbjogdHJhbnNpdGlvbl90d2VlbixcbiAgZGVsYXk6IHRyYW5zaXRpb25fZGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uX2R1cmF0aW9uLFxuICBlYXNlOiB0cmFuc2l0aW9uX2Vhc2UsXG4gIGVhc2VWYXJ5aW5nOiB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nLFxuICBlbmQ6IHRyYW5zaXRpb25fZW5kLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX3Byb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdXG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCAqIHQgOiAodCAtPSAyKSAqIHQgKiB0ICsgMikgLyAyO1xufVxuIiwgImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuLi90cmFuc2l0aW9uL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUgZnJvbSBcIi4uL3RyYW5zaXRpb24vc2NoZWR1bGUuanNcIjtcbmltcG9ydCB7ZWFzZUN1YmljSW5PdXR9IGZyb20gXCJkMy1lYXNlXCI7XG5pbXBvcnQge25vd30gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBkZWZhdWx0VGltaW5nID0ge1xuICB0aW1lOiBudWxsLCAvLyBTZXQgb24gdXNlLlxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IDI1MCxcbiAgZWFzZTogZWFzZUN1YmljSW5PdXRcbn07XG5cbmZ1bmN0aW9uIGluaGVyaXQobm9kZSwgaWQpIHtcbiAgdmFyIHRpbWluZztcbiAgd2hpbGUgKCEodGltaW5nID0gbm9kZS5fX3RyYW5zaXRpb24pIHx8ICEodGltaW5nID0gdGltaW5nW2lkXSkpIHtcbiAgICBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0cmFuc2l0aW9uICR7aWR9IG5vdCBmb3VuZGApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGltaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBpZCxcbiAgICAgIHRpbWluZztcblxuICBpZiAobmFtZSBpbnN0YW5jZW9mIFRyYW5zaXRpb24pIHtcbiAgICBpZCA9IG5hbWUuX2lkLCBuYW1lID0gbmFtZS5fbmFtZTtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IG5ld0lkKCksICh0aW1pbmcgPSBkZWZhdWx0VGltaW5nKS50aW1lID0gbm93KCksIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzY2hlZHVsZShub2RlLCBuYW1lLCBpZCwgaSwgZ3JvdXAsIHRpbWluZyB8fCBpbmhlcml0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwgImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ludGVycnVwdCBmcm9tIFwiLi9pbnRlcnJ1cHQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5cbnNlbGVjdGlvbi5wcm90b3R5cGUuaW50ZXJydXB0ID0gc2VsZWN0aW9uX2ludGVycnVwdDtcbnNlbGVjdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IHNlbGVjdGlvbl90cmFuc2l0aW9uO1xuIiwgImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBab29tRXZlbnQodHlwZSwge1xuICBzb3VyY2VFdmVudCxcbiAgdGFyZ2V0LFxuICB0cmFuc2Zvcm0sXG4gIGRpc3BhdGNoXG59KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICB0eXBlOiB7dmFsdWU6IHR5cGUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgc291cmNlRXZlbnQ6IHt2YWx1ZTogc291cmNlRXZlbnQsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgdGFyZ2V0OiB7dmFsdWU6IHRhcmdldCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB0cmFuc2Zvcm06IHt2YWx1ZTogdHJhbnNmb3JtLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIF86IHt2YWx1ZTogZGlzcGF0Y2h9XG4gIH0pO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm0oaywgeCwgeSkge1xuICB0aGlzLmsgPSBrO1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNmb3JtLFxuICBzY2FsZTogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBrID09PSAxID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rICogaywgdGhpcy54LCB0aGlzLnkpO1xuICB9LFxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4geCA9PT0gMCAmIHkgPT09IDAgPyB0aGlzIDogbmV3IFRyYW5zZm9ybSh0aGlzLmssIHRoaXMueCArIHRoaXMuayAqIHgsIHRoaXMueSArIHRoaXMuayAqIHkpO1xuICB9LFxuICBhcHBseTogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gW3BvaW50WzBdICogdGhpcy5rICsgdGhpcy54LCBwb2ludFsxXSAqIHRoaXMuayArIHRoaXMueV07XG4gIH0sXG4gIGFwcGx5WDogZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4ICogdGhpcy5rICsgdGhpcy54O1xuICB9LFxuICBhcHBseVk6IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4geSAqIHRoaXMuayArIHRoaXMueTtcbiAgfSxcbiAgaW52ZXJ0OiBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgIHJldHVybiBbKGxvY2F0aW9uWzBdIC0gdGhpcy54KSAvIHRoaXMuaywgKGxvY2F0aW9uWzFdIC0gdGhpcy55KSAvIHRoaXMua107XG4gIH0sXG4gIGludmVydFg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gKHggLSB0aGlzLngpIC8gdGhpcy5rO1xuICB9LFxuICBpbnZlcnRZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuICh5IC0gdGhpcy55KSAvIHRoaXMuaztcbiAgfSxcbiAgcmVzY2FsZVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geC5jb3B5KCkuZG9tYWluKHgucmFuZ2UoKS5tYXAodGhpcy5pbnZlcnRYLCB0aGlzKS5tYXAoeC5pbnZlcnQsIHgpKTtcbiAgfSxcbiAgcmVzY2FsZVk6IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4geS5jb3B5KCkuZG9tYWluKHkucmFuZ2UoKS5tYXAodGhpcy5pbnZlcnRZLCB0aGlzKS5tYXAoeS5pbnZlcnQsIHkpKTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHRoaXMueCArIFwiLFwiICsgdGhpcy55ICsgXCIpIHNjYWxlKFwiICsgdGhpcy5rICsgXCIpXCI7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgaWRlbnRpdHkgPSBuZXcgVHJhbnNmb3JtKDEsIDAsIDApO1xuXG50cmFuc2Zvcm0ucHJvdG90eXBlID0gVHJhbnNmb3JtLnByb3RvdHlwZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtKG5vZGUpIHtcbiAgd2hpbGUgKCFub2RlLl9fem9vbSkgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHJldHVybiBpZGVudGl0eTtcbiAgcmV0dXJuIG5vZGUuX196b29tO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBub3Byb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cbiIsICJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7ZHJhZ0Rpc2FibGUsIGRyYWdFbmFibGV9IGZyb20gXCJkMy1kcmFnXCI7XG5pbXBvcnQge2ludGVycG9sYXRlWm9vbX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge3NlbGVjdCwgcG9pbnRlcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtpbnRlcnJ1cHR9IGZyb20gXCJkMy10cmFuc2l0aW9uXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBab29tRXZlbnQgZnJvbSBcIi4vZXZlbnQuanNcIjtcbmltcG9ydCB7VHJhbnNmb3JtLCBpZGVudGl0eX0gZnJvbSBcIi4vdHJhbnNmb3JtLmpzXCI7XG5pbXBvcnQgbm9ldmVudCwge25vcHJvcGFnYXRpb259IGZyb20gXCIuL25vZXZlbnQuanNcIjtcblxuLy8gSWdub3JlIHJpZ2h0LWNsaWNrLCBzaW5jZSB0aGF0IHNob3VsZCBvcGVuIHRoZSBjb250ZXh0IG1lbnUuXG4vLyBleGNlcHQgZm9yIHBpbmNoLXRvLXpvb20sIHdoaWNoIGlzIHNlbnQgYXMgYSB3aGVlbCtjdHJsS2V5IGV2ZW50XG5mdW5jdGlvbiBkZWZhdWx0RmlsdGVyKGV2ZW50KSB7XG4gIHJldHVybiAoIWV2ZW50LmN0cmxLZXkgfHwgZXZlbnQudHlwZSA9PT0gJ3doZWVsJykgJiYgIWV2ZW50LmJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEV4dGVudCgpIHtcbiAgdmFyIGUgPSB0aGlzO1xuICBpZiAoZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICBlID0gZS5vd25lclNWR0VsZW1lbnQgfHwgZTtcbiAgICBpZiAoZS5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpKSB7XG4gICAgICBlID0gZS52aWV3Qm94LmJhc2VWYWw7XG4gICAgICByZXR1cm4gW1tlLngsIGUueV0sIFtlLnggKyBlLndpZHRoLCBlLnkgKyBlLmhlaWdodF1dO1xuICAgIH1cbiAgICByZXR1cm4gW1swLCAwXSwgW2Uud2lkdGguYmFzZVZhbC52YWx1ZSwgZS5oZWlnaHQuYmFzZVZhbC52YWx1ZV1dO1xuICB9XG4gIHJldHVybiBbWzAsIDBdLCBbZS5jbGllbnRXaWR0aCwgZS5jbGllbnRIZWlnaHRdXTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFRyYW5zZm9ybSgpIHtcbiAgcmV0dXJuIHRoaXMuX196b29tIHx8IGlkZW50aXR5O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0V2hlZWxEZWx0YShldmVudCkge1xuICByZXR1cm4gLWV2ZW50LmRlbHRhWSAqIChldmVudC5kZWx0YU1vZGUgPT09IDEgPyAwLjA1IDogZXZlbnQuZGVsdGFNb2RlID8gMSA6IDAuMDAyKSAqIChldmVudC5jdHJsS2V5ID8gMTAgOiAxKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFRvdWNoYWJsZSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCAoXCJvbnRvdWNoc3RhcnRcIiBpbiB0aGlzKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENvbnN0cmFpbih0cmFuc2Zvcm0sIGV4dGVudCwgdHJhbnNsYXRlRXh0ZW50KSB7XG4gIHZhciBkeDAgPSB0cmFuc2Zvcm0uaW52ZXJ0WChleHRlbnRbMF1bMF0pIC0gdHJhbnNsYXRlRXh0ZW50WzBdWzBdLFxuICAgICAgZHgxID0gdHJhbnNmb3JtLmludmVydFgoZXh0ZW50WzFdWzBdKSAtIHRyYW5zbGF0ZUV4dGVudFsxXVswXSxcbiAgICAgIGR5MCA9IHRyYW5zZm9ybS5pbnZlcnRZKGV4dGVudFswXVsxXSkgLSB0cmFuc2xhdGVFeHRlbnRbMF1bMV0sXG4gICAgICBkeTEgPSB0cmFuc2Zvcm0uaW52ZXJ0WShleHRlbnRbMV1bMV0pIC0gdHJhbnNsYXRlRXh0ZW50WzFdWzFdO1xuICByZXR1cm4gdHJhbnNmb3JtLnRyYW5zbGF0ZShcbiAgICBkeDEgPiBkeDAgPyAoZHgwICsgZHgxKSAvIDIgOiBNYXRoLm1pbigwLCBkeDApIHx8IE1hdGgubWF4KDAsIGR4MSksXG4gICAgZHkxID4gZHkwID8gKGR5MCArIGR5MSkgLyAyIDogTWF0aC5taW4oMCwgZHkwKSB8fCBNYXRoLm1heCgwLCBkeTEpXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgZmlsdGVyID0gZGVmYXVsdEZpbHRlcixcbiAgICAgIGV4dGVudCA9IGRlZmF1bHRFeHRlbnQsXG4gICAgICBjb25zdHJhaW4gPSBkZWZhdWx0Q29uc3RyYWluLFxuICAgICAgd2hlZWxEZWx0YSA9IGRlZmF1bHRXaGVlbERlbHRhLFxuICAgICAgdG91Y2hhYmxlID0gZGVmYXVsdFRvdWNoYWJsZSxcbiAgICAgIHNjYWxlRXh0ZW50ID0gWzAsIEluZmluaXR5XSxcbiAgICAgIHRyYW5zbGF0ZUV4dGVudCA9IFtbLUluZmluaXR5LCAtSW5maW5pdHldLCBbSW5maW5pdHksIEluZmluaXR5XV0sXG4gICAgICBkdXJhdGlvbiA9IDI1MCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVab29tLFxuICAgICAgbGlzdGVuZXJzID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcInpvb21cIiwgXCJlbmRcIiksXG4gICAgICB0b3VjaHN0YXJ0aW5nLFxuICAgICAgdG91Y2hmaXJzdCxcbiAgICAgIHRvdWNoZW5kaW5nLFxuICAgICAgdG91Y2hEZWxheSA9IDUwMCxcbiAgICAgIHdoZWVsRGVsYXkgPSAxNTAsXG4gICAgICBjbGlja0Rpc3RhbmNlMiA9IDAsXG4gICAgICB0YXBEaXN0YW5jZSA9IDEwO1xuXG4gIGZ1bmN0aW9uIHpvb20oc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5wcm9wZXJ0eShcIl9fem9vbVwiLCBkZWZhdWx0VHJhbnNmb3JtKVxuICAgICAgICAub24oXCJ3aGVlbC56b29tXCIsIHdoZWVsZWQsIHtwYXNzaXZlOiBmYWxzZX0pXG4gICAgICAgIC5vbihcIm1vdXNlZG93bi56b29tXCIsIG1vdXNlZG93bmVkKVxuICAgICAgICAub24oXCJkYmxjbGljay56b29tXCIsIGRibGNsaWNrZWQpXG4gICAgICAuZmlsdGVyKHRvdWNoYWJsZSlcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydC56b29tXCIsIHRvdWNoc3RhcnRlZClcbiAgICAgICAgLm9uKFwidG91Y2htb3ZlLnpvb21cIiwgdG91Y2htb3ZlZClcbiAgICAgICAgLm9uKFwidG91Y2hlbmQuem9vbSB0b3VjaGNhbmNlbC56b29tXCIsIHRvdWNoZW5kZWQpXG4gICAgICAgIC5zdHlsZShcIi13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLCBcInJnYmEoMCwwLDAsMClcIik7XG4gIH1cblxuICB6b29tLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHRyYW5zZm9ybSwgcG9pbnQsIGV2ZW50KSB7XG4gICAgdmFyIHNlbGVjdGlvbiA9IGNvbGxlY3Rpb24uc2VsZWN0aW9uID8gY29sbGVjdGlvbi5zZWxlY3Rpb24oKSA6IGNvbGxlY3Rpb247XG4gICAgc2VsZWN0aW9uLnByb3BlcnR5KFwiX196b29tXCIsIGRlZmF1bHRUcmFuc2Zvcm0pO1xuICAgIGlmIChjb2xsZWN0aW9uICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHNjaGVkdWxlKGNvbGxlY3Rpb24sIHRyYW5zZm9ybSwgcG9pbnQsIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0aW9uLmludGVycnVwdCgpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGdlc3R1cmUodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIC5ldmVudChldmVudClcbiAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICAgIC56b29tKG51bGwsIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIiA/IHRyYW5zZm9ybS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogdHJhbnNmb3JtKVxuICAgICAgICAgIC5lbmQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB6b29tLnNjYWxlQnkgPSBmdW5jdGlvbihzZWxlY3Rpb24sIGssIHAsIGV2ZW50KSB7XG4gICAgem9vbS5zY2FsZVRvKHNlbGVjdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgazAgPSB0aGlzLl9fem9vbS5rLFxuICAgICAgICAgIGsxID0gdHlwZW9mIGsgPT09IFwiZnVuY3Rpb25cIiA/IGsuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGs7XG4gICAgICByZXR1cm4gazAgKiBrMTtcbiAgICB9LCBwLCBldmVudCk7XG4gIH07XG5cbiAgem9vbS5zY2FsZVRvID0gZnVuY3Rpb24oc2VsZWN0aW9uLCBrLCBwLCBldmVudCkge1xuICAgIHpvb20udHJhbnNmb3JtKHNlbGVjdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IGV4dGVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICAgIHQwID0gdGhpcy5fX3pvb20sXG4gICAgICAgICAgcDAgPSBwID09IG51bGwgPyBjZW50cm9pZChlKSA6IHR5cGVvZiBwID09PSBcImZ1bmN0aW9uXCIgPyBwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBwLFxuICAgICAgICAgIHAxID0gdDAuaW52ZXJ0KHAwKSxcbiAgICAgICAgICBrMSA9IHR5cGVvZiBrID09PSBcImZ1bmN0aW9uXCIgPyBrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrO1xuICAgICAgcmV0dXJuIGNvbnN0cmFpbih0cmFuc2xhdGUoc2NhbGUodDAsIGsxKSwgcDAsIHAxKSwgZSwgdHJhbnNsYXRlRXh0ZW50KTtcbiAgICB9LCBwLCBldmVudCk7XG4gIH07XG5cbiAgem9vbS50cmFuc2xhdGVCeSA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgeCwgeSwgZXZlbnQpIHtcbiAgICB6b29tLnRyYW5zZm9ybShzZWxlY3Rpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cmFpbih0aGlzLl9fem9vbS50cmFuc2xhdGUoXG4gICAgICAgIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyB4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB4LFxuICAgICAgICB0eXBlb2YgeSA9PT0gXCJmdW5jdGlvblwiID8geS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogeVxuICAgICAgKSwgZXh0ZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRyYW5zbGF0ZUV4dGVudCk7XG4gICAgfSwgbnVsbCwgZXZlbnQpO1xuICB9O1xuXG4gIHpvb20udHJhbnNsYXRlVG8gPSBmdW5jdGlvbihzZWxlY3Rpb24sIHgsIHksIHAsIGV2ZW50KSB7XG4gICAgem9vbS50cmFuc2Zvcm0oc2VsZWN0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gZXh0ZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgdCA9IHRoaXMuX196b29tLFxuICAgICAgICAgIHAwID0gcCA9PSBudWxsID8gY2VudHJvaWQoZSkgOiB0eXBlb2YgcCA9PT0gXCJmdW5jdGlvblwiID8gcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogcDtcbiAgICAgIHJldHVybiBjb25zdHJhaW4oaWRlbnRpdHkudHJhbnNsYXRlKHAwWzBdLCBwMFsxXSkuc2NhbGUodC5rKS50cmFuc2xhdGUoXG4gICAgICAgIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIgPyAteC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogLXgsXG4gICAgICAgIHR5cGVvZiB5ID09PSBcImZ1bmN0aW9uXCIgPyAteS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogLXlcbiAgICAgICksIGUsIHRyYW5zbGF0ZUV4dGVudCk7XG4gICAgfSwgcCwgZXZlbnQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHRyYW5zZm9ybSwgaykge1xuICAgIGsgPSBNYXRoLm1heChzY2FsZUV4dGVudFswXSwgTWF0aC5taW4oc2NhbGVFeHRlbnRbMV0sIGspKTtcbiAgICByZXR1cm4gayA9PT0gdHJhbnNmb3JtLmsgPyB0cmFuc2Zvcm0gOiBuZXcgVHJhbnNmb3JtKGssIHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUodHJhbnNmb3JtLCBwMCwgcDEpIHtcbiAgICB2YXIgeCA9IHAwWzBdIC0gcDFbMF0gKiB0cmFuc2Zvcm0uaywgeSA9IHAwWzFdIC0gcDFbMV0gKiB0cmFuc2Zvcm0uaztcbiAgICByZXR1cm4geCA9PT0gdHJhbnNmb3JtLnggJiYgeSA9PT0gdHJhbnNmb3JtLnkgPyB0cmFuc2Zvcm0gOiBuZXcgVHJhbnNmb3JtKHRyYW5zZm9ybS5rLCB4LCB5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbnRyb2lkKGV4dGVudCkge1xuICAgIHJldHVybiBbKCtleHRlbnRbMF1bMF0gKyArZXh0ZW50WzFdWzBdKSAvIDIsICgrZXh0ZW50WzBdWzFdICsgK2V4dGVudFsxXVsxXSkgLyAyXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKHRyYW5zaXRpb24sIHRyYW5zZm9ybSwgcG9pbnQsIGV2ZW50KSB7XG4gICAgdHJhbnNpdGlvblxuICAgICAgICAub24oXCJzdGFydC56b29tXCIsIGZ1bmN0aW9uKCkgeyBnZXN0dXJlKHRoaXMsIGFyZ3VtZW50cykuZXZlbnQoZXZlbnQpLnN0YXJ0KCk7IH0pXG4gICAgICAgIC5vbihcImludGVycnVwdC56b29tIGVuZC56b29tXCIsIGZ1bmN0aW9uKCkgeyBnZXN0dXJlKHRoaXMsIGFyZ3VtZW50cykuZXZlbnQoZXZlbnQpLmVuZCgpOyB9KVxuICAgICAgICAudHdlZW4oXCJ6b29tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgZyA9IGdlc3R1cmUodGhhdCwgYXJncykuZXZlbnQoZXZlbnQpLFxuICAgICAgICAgICAgICBlID0gZXh0ZW50LmFwcGx5KHRoYXQsIGFyZ3MpLFxuICAgICAgICAgICAgICBwID0gcG9pbnQgPT0gbnVsbCA/IGNlbnRyb2lkKGUpIDogdHlwZW9mIHBvaW50ID09PSBcImZ1bmN0aW9uXCIgPyBwb2ludC5hcHBseSh0aGF0LCBhcmdzKSA6IHBvaW50LFxuICAgICAgICAgICAgICB3ID0gTWF0aC5tYXgoZVsxXVswXSAtIGVbMF1bMF0sIGVbMV1bMV0gLSBlWzBdWzFdKSxcbiAgICAgICAgICAgICAgYSA9IHRoYXQuX196b29tLFxuICAgICAgICAgICAgICBiID0gdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiID8gdHJhbnNmb3JtLmFwcGx5KHRoYXQsIGFyZ3MpIDogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICBpID0gaW50ZXJwb2xhdGUoYS5pbnZlcnQocCkuY29uY2F0KHcgLyBhLmspLCBiLmludmVydChwKS5jb25jYXQodyAvIGIuaykpO1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBpZiAodCA9PT0gMSkgdCA9IGI7IC8vIEF2b2lkIHJvdW5kaW5nIGVycm9yIG9uIGVuZC5cbiAgICAgICAgICAgIGVsc2UgeyB2YXIgbCA9IGkodCksIGsgPSB3IC8gbFsyXTsgdCA9IG5ldyBUcmFuc2Zvcm0oaywgcFswXSAtIGxbMF0gKiBrLCBwWzFdIC0gbFsxXSAqIGspOyB9XG4gICAgICAgICAgICBnLnpvb20obnVsbCwgdCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXN0dXJlKHRoYXQsIGFyZ3MsIGNsZWFuKSB7XG4gICAgcmV0dXJuICghY2xlYW4gJiYgdGhhdC5fX3pvb21pbmcpIHx8IG5ldyBHZXN0dXJlKHRoYXQsIGFyZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gR2VzdHVyZSh0aGF0LCBhcmdzKSB7XG4gICAgdGhpcy50aGF0ID0gdGhhdDtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB0aGlzLnNvdXJjZUV2ZW50ID0gbnVsbDtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudC5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB0aGlzLnRhcHMgPSAwO1xuICB9XG5cbiAgR2VzdHVyZS5wcm90b3R5cGUgPSB7XG4gICAgZXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHRoaXMuc291cmNlRXZlbnQgPSBldmVudDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCsrdGhpcy5hY3RpdmUgPT09IDEpIHtcbiAgICAgICAgdGhpcy50aGF0Ll9fem9vbWluZyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZW1pdChcInN0YXJ0XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB6b29tOiBmdW5jdGlvbihrZXksIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRoaXMubW91c2UgJiYga2V5ICE9PSBcIm1vdXNlXCIpIHRoaXMubW91c2VbMV0gPSB0cmFuc2Zvcm0uaW52ZXJ0KHRoaXMubW91c2VbMF0pO1xuICAgICAgaWYgKHRoaXMudG91Y2gwICYmIGtleSAhPT0gXCJ0b3VjaFwiKSB0aGlzLnRvdWNoMFsxXSA9IHRyYW5zZm9ybS5pbnZlcnQodGhpcy50b3VjaDBbMF0pO1xuICAgICAgaWYgKHRoaXMudG91Y2gxICYmIGtleSAhPT0gXCJ0b3VjaFwiKSB0aGlzLnRvdWNoMVsxXSA9IHRyYW5zZm9ybS5pbnZlcnQodGhpcy50b3VjaDFbMF0pO1xuICAgICAgdGhpcy50aGF0Ll9fem9vbSA9IHRyYW5zZm9ybTtcbiAgICAgIHRoaXMuZW1pdChcInpvb21cIik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aGlzLmFjdGl2ZSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy50aGF0Ll9fem9vbWluZztcbiAgICAgICAgdGhpcy5lbWl0KFwiZW5kXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBlbWl0OiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICB2YXIgZCA9IHNlbGVjdCh0aGlzLnRoYXQpLmRhdHVtKCk7XG4gICAgICBsaXN0ZW5lcnMuY2FsbChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGhpcy50aGF0LFxuICAgICAgICBuZXcgWm9vbUV2ZW50KHR5cGUsIHtcbiAgICAgICAgICBzb3VyY2VFdmVudDogdGhpcy5zb3VyY2VFdmVudCxcbiAgICAgICAgICB0YXJnZXQ6IHpvb20sXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRoaXMudGhhdC5fX3pvb20sXG4gICAgICAgICAgZGlzcGF0Y2g6IGxpc3RlbmVyc1xuICAgICAgICB9KSxcbiAgICAgICAgZFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gd2hlZWxlZChldmVudCwgLi4uYXJncykge1xuICAgIGlmICghZmlsdGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHJldHVybjtcbiAgICB2YXIgZyA9IGdlc3R1cmUodGhpcywgYXJncykuZXZlbnQoZXZlbnQpLFxuICAgICAgICB0ID0gdGhpcy5fX3pvb20sXG4gICAgICAgIGsgPSBNYXRoLm1heChzY2FsZUV4dGVudFswXSwgTWF0aC5taW4oc2NhbGVFeHRlbnRbMV0sIHQuayAqIE1hdGgucG93KDIsIHdoZWVsRGVsdGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSkpKSxcbiAgICAgICAgcCA9IHBvaW50ZXIoZXZlbnQpO1xuXG4gICAgLy8gSWYgdGhlIG1vdXNlIGlzIGluIHRoZSBzYW1lIGxvY2F0aW9uIGFzIGJlZm9yZSwgcmV1c2UgaXQuXG4gICAgLy8gSWYgdGhlcmUgd2VyZSByZWNlbnQgd2hlZWwgZXZlbnRzLCByZXNldCB0aGUgd2hlZWwgaWRsZSB0aW1lb3V0LlxuICAgIGlmIChnLndoZWVsKSB7XG4gICAgICBpZiAoZy5tb3VzZVswXVswXSAhPT0gcFswXSB8fCBnLm1vdXNlWzBdWzFdICE9PSBwWzFdKSB7XG4gICAgICAgIGcubW91c2VbMV0gPSB0LmludmVydChnLm1vdXNlWzBdID0gcCk7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQoZy53aGVlbCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyB3aGVlbCBldmVudCB3b25cdTIwMTl0IHRyaWdnZXIgYSB0cmFuc2Zvcm0gY2hhbmdlLCBpZ25vcmUgaXQuXG4gICAgZWxzZSBpZiAodC5rID09PSBrKSByZXR1cm47XG5cbiAgICAvLyBPdGhlcndpc2UsIGNhcHR1cmUgdGhlIG1vdXNlIHBvaW50IGFuZCBsb2NhdGlvbiBhdCB0aGUgc3RhcnQuXG4gICAgZWxzZSB7XG4gICAgICBnLm1vdXNlID0gW3AsIHQuaW52ZXJ0KHApXTtcbiAgICAgIGludGVycnVwdCh0aGlzKTtcbiAgICAgIGcuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBub2V2ZW50KGV2ZW50KTtcbiAgICBnLndoZWVsID0gc2V0VGltZW91dCh3aGVlbGlkbGVkLCB3aGVlbERlbGF5KTtcbiAgICBnLnpvb20oXCJtb3VzZVwiLCBjb25zdHJhaW4odHJhbnNsYXRlKHNjYWxlKHQsIGspLCBnLm1vdXNlWzBdLCBnLm1vdXNlWzFdKSwgZy5leHRlbnQsIHRyYW5zbGF0ZUV4dGVudCkpO1xuXG4gICAgZnVuY3Rpb24gd2hlZWxpZGxlZCgpIHtcbiAgICAgIGcud2hlZWwgPSBudWxsO1xuICAgICAgZy5lbmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZWRvd25lZChldmVudCwgLi4uYXJncykge1xuICAgIGlmICh0b3VjaGVuZGluZyB8fCAhZmlsdGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHJldHVybjtcbiAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIGcgPSBnZXN0dXJlKHRoaXMsIGFyZ3MsIHRydWUpLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgdiA9IHNlbGVjdChldmVudC52aWV3KS5vbihcIm1vdXNlbW92ZS56b29tXCIsIG1vdXNlbW92ZWQsIHRydWUpLm9uKFwibW91c2V1cC56b29tXCIsIG1vdXNldXBwZWQsIHRydWUpLFxuICAgICAgICBwID0gcG9pbnRlcihldmVudCwgY3VycmVudFRhcmdldCksXG4gICAgICAgIHgwID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgeTAgPSBldmVudC5jbGllbnRZO1xuXG4gICAgZHJhZ0Rpc2FibGUoZXZlbnQudmlldyk7XG4gICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgZy5tb3VzZSA9IFtwLCB0aGlzLl9fem9vbS5pbnZlcnQocCldO1xuICAgIGludGVycnVwdCh0aGlzKTtcbiAgICBnLnN0YXJ0KCk7XG5cbiAgICBmdW5jdGlvbiBtb3VzZW1vdmVkKGV2ZW50KSB7XG4gICAgICBub2V2ZW50KGV2ZW50KTtcbiAgICAgIGlmICghZy5tb3ZlZCkge1xuICAgICAgICB2YXIgZHggPSBldmVudC5jbGllbnRYIC0geDAsIGR5ID0gZXZlbnQuY2xpZW50WSAtIHkwO1xuICAgICAgICBnLm1vdmVkID0gZHggKiBkeCArIGR5ICogZHkgPiBjbGlja0Rpc3RhbmNlMjtcbiAgICAgIH1cbiAgICAgIGcuZXZlbnQoZXZlbnQpXG4gICAgICAgLnpvb20oXCJtb3VzZVwiLCBjb25zdHJhaW4odHJhbnNsYXRlKGcudGhhdC5fX3pvb20sIGcubW91c2VbMF0gPSBwb2ludGVyKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSwgZy5tb3VzZVsxXSksIGcuZXh0ZW50LCB0cmFuc2xhdGVFeHRlbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3VzZXVwcGVkKGV2ZW50KSB7XG4gICAgICB2Lm9uKFwibW91c2Vtb3ZlLnpvb20gbW91c2V1cC56b29tXCIsIG51bGwpO1xuICAgICAgZHJhZ0VuYWJsZShldmVudC52aWV3LCBnLm1vdmVkKTtcbiAgICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgICAgZy5ldmVudChldmVudCkuZW5kKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGJsY2xpY2tlZChldmVudCwgLi4uYXJncykge1xuICAgIGlmICghZmlsdGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHJldHVybjtcbiAgICB2YXIgdDAgPSB0aGlzLl9fem9vbSxcbiAgICAgICAgcDAgPSBwb2ludGVyKGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudCwgdGhpcyksXG4gICAgICAgIHAxID0gdDAuaW52ZXJ0KHAwKSxcbiAgICAgICAgazEgPSB0MC5rICogKGV2ZW50LnNoaWZ0S2V5ID8gMC41IDogMiksXG4gICAgICAgIHQxID0gY29uc3RyYWluKHRyYW5zbGF0ZShzY2FsZSh0MCwgazEpLCBwMCwgcDEpLCBleHRlbnQuYXBwbHkodGhpcywgYXJncyksIHRyYW5zbGF0ZUV4dGVudCk7XG5cbiAgICBub2V2ZW50KGV2ZW50KTtcbiAgICBpZiAoZHVyYXRpb24gPiAwKSBzZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cmF0aW9uKS5jYWxsKHNjaGVkdWxlLCB0MSwgcDAsIGV2ZW50KTtcbiAgICBlbHNlIHNlbGVjdCh0aGlzKS5jYWxsKHpvb20udHJhbnNmb3JtLCB0MSwgcDAsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoc3RhcnRlZChldmVudCwgLi4uYXJncykge1xuICAgIGlmICghZmlsdGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHJldHVybjtcbiAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCxcbiAgICAgICAgZyA9IGdlc3R1cmUodGhpcywgYXJncywgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID09PSBuKS5ldmVudChldmVudCksXG4gICAgICAgIHN0YXJ0ZWQsIGksIHQsIHA7XG5cbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB0ID0gdG91Y2hlc1tpXSwgcCA9IHBvaW50ZXIodCwgdGhpcyk7XG4gICAgICBwID0gW3AsIHRoaXMuX196b29tLmludmVydChwKSwgdC5pZGVudGlmaWVyXTtcbiAgICAgIGlmICghZy50b3VjaDApIGcudG91Y2gwID0gcCwgc3RhcnRlZCA9IHRydWUsIGcudGFwcyA9IDEgKyAhIXRvdWNoc3RhcnRpbmc7XG4gICAgICBlbHNlIGlmICghZy50b3VjaDEgJiYgZy50b3VjaDBbMl0gIT09IHBbMl0pIGcudG91Y2gxID0gcCwgZy50YXBzID0gMDtcbiAgICB9XG5cbiAgICBpZiAodG91Y2hzdGFydGluZykgdG91Y2hzdGFydGluZyA9IGNsZWFyVGltZW91dCh0b3VjaHN0YXJ0aW5nKTtcblxuICAgIGlmIChzdGFydGVkKSB7XG4gICAgICBpZiAoZy50YXBzIDwgMikgdG91Y2hmaXJzdCA9IHBbMF0sIHRvdWNoc3RhcnRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0b3VjaHN0YXJ0aW5nID0gbnVsbDsgfSwgdG91Y2hEZWxheSk7XG4gICAgICBpbnRlcnJ1cHQodGhpcyk7XG4gICAgICBnLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2htb3ZlZChldmVudCwgLi4uYXJncykge1xuICAgIGlmICghdGhpcy5fX3pvb21pbmcpIHJldHVybjtcbiAgICB2YXIgZyA9IGdlc3R1cmUodGhpcywgYXJncykuZXZlbnQoZXZlbnQpLFxuICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgdCwgcCwgbDtcblxuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHQgPSB0b3VjaGVzW2ldLCBwID0gcG9pbnRlcih0LCB0aGlzKTtcbiAgICAgIGlmIChnLnRvdWNoMCAmJiBnLnRvdWNoMFsyXSA9PT0gdC5pZGVudGlmaWVyKSBnLnRvdWNoMFswXSA9IHA7XG4gICAgICBlbHNlIGlmIChnLnRvdWNoMSAmJiBnLnRvdWNoMVsyXSA9PT0gdC5pZGVudGlmaWVyKSBnLnRvdWNoMVswXSA9IHA7XG4gICAgfVxuICAgIHQgPSBnLnRoYXQuX196b29tO1xuICAgIGlmIChnLnRvdWNoMSkge1xuICAgICAgdmFyIHAwID0gZy50b3VjaDBbMF0sIGwwID0gZy50b3VjaDBbMV0sXG4gICAgICAgICAgcDEgPSBnLnRvdWNoMVswXSwgbDEgPSBnLnRvdWNoMVsxXSxcbiAgICAgICAgICBkcCA9IChkcCA9IHAxWzBdIC0gcDBbMF0pICogZHAgKyAoZHAgPSBwMVsxXSAtIHAwWzFdKSAqIGRwLFxuICAgICAgICAgIGRsID0gKGRsID0gbDFbMF0gLSBsMFswXSkgKiBkbCArIChkbCA9IGwxWzFdIC0gbDBbMV0pICogZGw7XG4gICAgICB0ID0gc2NhbGUodCwgTWF0aC5zcXJ0KGRwIC8gZGwpKTtcbiAgICAgIHAgPSBbKHAwWzBdICsgcDFbMF0pIC8gMiwgKHAwWzFdICsgcDFbMV0pIC8gMl07XG4gICAgICBsID0gWyhsMFswXSArIGwxWzBdKSAvIDIsIChsMFsxXSArIGwxWzFdKSAvIDJdO1xuICAgIH1cbiAgICBlbHNlIGlmIChnLnRvdWNoMCkgcCA9IGcudG91Y2gwWzBdLCBsID0gZy50b3VjaDBbMV07XG4gICAgZWxzZSByZXR1cm47XG5cbiAgICBnLnpvb20oXCJ0b3VjaFwiLCBjb25zdHJhaW4odHJhbnNsYXRlKHQsIHAsIGwpLCBnLmV4dGVudCwgdHJhbnNsYXRlRXh0ZW50KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaGVuZGVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLl9fem9vbWluZykgcmV0dXJuO1xuICAgIHZhciBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCB0O1xuXG4gICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgaWYgKHRvdWNoZW5kaW5nKSBjbGVhclRpbWVvdXQodG91Y2hlbmRpbmcpO1xuICAgIHRvdWNoZW5kaW5nID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgdG91Y2hlbmRpbmcgPSBudWxsOyB9LCB0b3VjaERlbGF5KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB0ID0gdG91Y2hlc1tpXTtcbiAgICAgIGlmIChnLnRvdWNoMCAmJiBnLnRvdWNoMFsyXSA9PT0gdC5pZGVudGlmaWVyKSBkZWxldGUgZy50b3VjaDA7XG4gICAgICBlbHNlIGlmIChnLnRvdWNoMSAmJiBnLnRvdWNoMVsyXSA9PT0gdC5pZGVudGlmaWVyKSBkZWxldGUgZy50b3VjaDE7XG4gICAgfVxuICAgIGlmIChnLnRvdWNoMSAmJiAhZy50b3VjaDApIGcudG91Y2gwID0gZy50b3VjaDEsIGRlbGV0ZSBnLnRvdWNoMTtcbiAgICBpZiAoZy50b3VjaDApIGcudG91Y2gwWzFdID0gdGhpcy5fX3pvb20uaW52ZXJ0KGcudG91Y2gwWzBdKTtcbiAgICBlbHNlIHtcbiAgICAgIGcuZW5kKCk7XG4gICAgICAvLyBJZiB0aGlzIHdhcyBhIGRibHRhcCwgcmVyb3V0ZSB0byB0aGUgKG9wdGlvbmFsKSBkYmxjbGljay56b29tIGhhbmRsZXIuXG4gICAgICBpZiAoZy50YXBzID09PSAyKSB7XG4gICAgICAgIHQgPSBwb2ludGVyKHQsIHRoaXMpO1xuICAgICAgICBpZiAoTWF0aC5oeXBvdCh0b3VjaGZpcnN0WzBdIC0gdFswXSwgdG91Y2hmaXJzdFsxXSAtIHRbMV0pIDwgdGFwRGlzdGFuY2UpIHtcbiAgICAgICAgICB2YXIgcCA9IHNlbGVjdCh0aGlzKS5vbihcImRibGNsaWNrLnpvb21cIik7XG4gICAgICAgICAgaWYgKHApIHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHpvb20ud2hlZWxEZWx0YSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh3aGVlbERlbHRhID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHpvb20pIDogd2hlZWxEZWx0YTtcbiAgfTtcblxuICB6b29tLmZpbHRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChmaWx0ZXIgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIHpvb20pIDogZmlsdGVyO1xuICB9O1xuXG4gIHpvb20udG91Y2hhYmxlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRvdWNoYWJsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgem9vbSkgOiB0b3VjaGFibGU7XG4gIH07XG5cbiAgem9vbS5leHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZXh0ZW50ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChbWytfWzBdWzBdLCArX1swXVsxXV0sIFsrX1sxXVswXSwgK19bMV1bMV1dXSksIHpvb20pIDogZXh0ZW50O1xuICB9O1xuXG4gIHpvb20uc2NhbGVFeHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2NhbGVFeHRlbnRbMF0gPSArX1swXSwgc2NhbGVFeHRlbnRbMV0gPSArX1sxXSwgem9vbSkgOiBbc2NhbGVFeHRlbnRbMF0sIHNjYWxlRXh0ZW50WzFdXTtcbiAgfTtcblxuICB6b29tLnRyYW5zbGF0ZUV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0cmFuc2xhdGVFeHRlbnRbMF1bMF0gPSArX1swXVswXSwgdHJhbnNsYXRlRXh0ZW50WzFdWzBdID0gK19bMV1bMF0sIHRyYW5zbGF0ZUV4dGVudFswXVsxXSA9ICtfWzBdWzFdLCB0cmFuc2xhdGVFeHRlbnRbMV1bMV0gPSArX1sxXVsxXSwgem9vbSkgOiBbW3RyYW5zbGF0ZUV4dGVudFswXVswXSwgdHJhbnNsYXRlRXh0ZW50WzBdWzFdXSwgW3RyYW5zbGF0ZUV4dGVudFsxXVswXSwgdHJhbnNsYXRlRXh0ZW50WzFdWzFdXV07XG4gIH07XG5cbiAgem9vbS5jb25zdHJhaW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29uc3RyYWluID0gXywgem9vbSkgOiBjb25zdHJhaW47XG4gIH07XG5cbiAgem9vbS5kdXJhdGlvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkdXJhdGlvbiA9ICtfLCB6b29tKSA6IGR1cmF0aW9uO1xuICB9O1xuXG4gIHpvb20uaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdGUgPSBfLCB6b29tKSA6IGludGVycG9sYXRlO1xuICB9O1xuXG4gIHpvb20ub24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSBsaXN0ZW5lcnMub24uYXBwbHkobGlzdGVuZXJzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbGlzdGVuZXJzID8gem9vbSA6IHZhbHVlO1xuICB9O1xuXG4gIHpvb20uY2xpY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGlja0Rpc3RhbmNlMiA9IChfID0gK18pICogXywgem9vbSkgOiBNYXRoLnNxcnQoY2xpY2tEaXN0YW5jZTIpO1xuICB9O1xuXG4gIHpvb20udGFwRGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGFwRGlzdGFuY2UgPSArXywgem9vbSkgOiB0YXBEaXN0YW5jZTtcbiAgfTtcblxuICByZXR1cm4gem9vbTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWdFOzs7QUNBekQsSUFBSSxRQUFRO0FBRW5CLElBQU8scUJBQVE7QUFBQSxFQUNiLEtBQUs7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUCxLQUFLO0FBQUEsRUFDTCxPQUFPO0FBQ1Q7OztBQ05lLFNBQVIsa0JBQWlCLE1BQU07QUFDNUIsTUFBSSxTQUFTLFFBQVEsSUFBSSxJQUFJLE9BQU8sUUFBUSxHQUFHO0FBQy9DLE1BQUksS0FBSyxNQUFNLFNBQVMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxPQUFPLFFB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QUFFeEUsSUFBSSxRQUFRO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEs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SSxPQUFLLFVBQVUsZ0JBQWdCLFNBQVMsRUFBRSxDQUFDO0FBQy9DLFFBQUksQ0FBQyxNQUFNO0FBQUUsYUFBSyxVQUFVLGFBQWEsS0FBSztBQUFJLFlBQU0sS0FBSyxhQUFhLEVBQUMsTUFBSyxXQUFVLFFBQU8sS0FBSSxDQUFDO0FBQUEsSUFBRztBQUN6RyxjQUFVLFdBQVcsSUFBSTtBQUFBLEVBQzFCO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFBQztBQUNiOyIsCiAgIm5hbWVzIjogWyJkb2N1bWVudCIsICJtIiwgIngiLCAibSIsICJtIiwgImRhdHVtIiwgIngiLCAibSIsICJzZWxlY3Rpb24iLCAibSIsICJtIiwgImEiLCAibSIsICJtIiwgIm0iLCAiY3JlYXRlIiwgImNyZWF0ZSIsICJtIiwgIndpbmRvdyIsICJtIiwgInNlbGVjdF9kZWZhdWx0IiwgIngiLCAieSIsICJ4IiwgInkiLCAiZGF0YV9kZWZhdWx0IiwgIngiLCAieSIsICJ4MiIsICJ5MiIsICJ4MyIsICJ5MyIsICJyZW1vdmVfZGVmYXVsdCIsICJ4IiwgInkiLCAic2l6ZV9kZWZhdWx0IiwgIngiLCAieSIsICJkYXRhX2RlZmF1bHQiLCAicmVtb3ZlX2RlZmF1bHQiLCAic2l6ZV9kZWZhdWx0IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAieSIsICJmaW5kIiwgImlkIiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ5IiwgIm0iLCAiaSIsICJwYXJzZVR5cGVuYW1lcyIsICJjIiwgImRpc3BhdGNoX2RlZmF1bHQiLCAibm93IiwgIngiLCAieSIsICJkaXNwYXRjaF9kZWZhdWx0IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ5IiwgIm5vZGUiLCAic3RyZW5ndGgiLCAiYyIsICJ4MiIsICJ4X2RlZmF1bHQiLCAieCIsICJjb25zdGFudF9kZWZhdWx0IiwgInlfZGVmYXVsdCIsICJ5IiwgImNvbnN0YW50X2RlZmF1bHQiLCAicm9vdCIsICJzZWxlY3Rpb24iLCAic2VsZWN0X2RlZmF1bHQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgIngiLCAieSIsICJkaXNwYXRjaCIsICJmaWx0ZXIiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJzZWxlY3Rpb24iLCAic2VsZWN0X2RlZmF1bHQiLCAiYyIsICJjb250YWluZXIiLCAiZGlzcGF0Y2giLCAiZXZlbnQiLCAidG91Y2giLCAiY29uc3RhbnRfZGVmYXVsdCIsICJtIiwgImEiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgImEiLCAieSIsICJ5IiwgImEiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ5IiwgImNvbG9yIiwgInJnYiIsICJzdGFydCIsICJhIiwgImEiLCAiaSIsICJhIiwgImMiLCAibSIsICJhIiwgIngiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJpZCIsICJpbmRleCIsICJnZXQiLCAic2V0IiwgInN0YXJ0IiwgImVtcHR5IiwgImludGVycnVwdF9kZWZhdWx0IiwgImlkIiwgInNldCIsICJnZXQiLCAidHJhbnNpdGlvbiIsICJhIiwgImMiLCAiYXR0clJlbW92ZSIsICJhdHRyUmVtb3ZlTlMiLCAiYXR0ckNvbnN0YW50IiwgImF0dHJDb25zdGFudE5TIiwgImF0dHJGdW5jdGlvbiIsICJhdHRyRnVuY3Rpb25OUyIsICJhdHRyX2RlZmF1bHQiLCAiaWQiLCAiZ2V0IiwgImlkIiwgInNldCIsICJnZXQiLCAiaWQiLCAic2V0IiwgImdldCIsICJpZCIsICJzZXQiLCAiZmlsdGVyX2RlZmF1bHQiLCAibSIsICJtZXJnZV9kZWZhdWx0IiwgInRyYW5zaXRpb24iLCAibSIsICJpZCIsICJzZXQiLCAib25fZGVmYXVsdCIsICJnZXQiLCAiaWQiLCAicmVtb3ZlX2RlZmF1bHQiLCAic2VsZWN0X2RlZmF1bHQiLCAiaWQiLCAibSIsICJnZXQiLCAic2VsZWN0QWxsX2RlZmF1bHQiLCAiaWQiLCAibSIsICJjaGlsZHJlbiIsICJpbmhlcml0IiwgImdldCIsICJTZWxlY3Rpb24iLCAic2VsZWN0aW9uX2RlZmF1bHQiLCAic3R5bGVSZW1vdmUiLCAic3R5bGVDb25zdGFudCIsICJzdHlsZUZ1bmN0aW9uIiwgImlkIiwgInJlbW92ZSIsICJzZXQiLCAic3R5bGVfZGVmYXVsdCIsICJ0ZXh0Q29uc3RhbnQiLCAidGV4dEZ1bmN0aW9uIiwgInRleHRfZGVmYXVsdCIsICJtIiwgImluaGVyaXQiLCAiZ2V0IiwgImlkIiwgInNldCIsICJpZCIsICJzZWxlY3RfZGVmYXVsdCIsICJzZWxlY3RBbGxfZGVmYXVsdCIsICJmaWx0ZXJfZGVmYXVsdCIsICJtZXJnZV9kZWZhdWx0IiwgInNlbGVjdGlvbl9kZWZhdWx0IiwgIm9uX2RlZmF1bHQiLCAiYXR0cl9kZWZhdWx0IiwgInN0eWxlX2RlZmF1bHQiLCAidGV4dF9kZWZhdWx0IiwgInJlbW92ZV9kZWZhdWx0IiwgImlkIiwgInRyYW5zaXRpb25fZGVmYXVsdCIsICJtIiwgImludGVycnVwdF9kZWZhdWx0IiwgInRyYW5zaXRpb25fZGVmYXVsdCIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAidHJhbnNmb3JtIiwgImRpc3BhdGNoIiwgIngiLCAieSIsICJpZGVudGl0eSIsICJub3Byb3BhZ2F0aW9uIiwgIm5vZXZlbnRfZGVmYXVsdCIsICJkZWZhdWx0RmlsdGVyIiwgImlkZW50aXR5IiwgImRlZmF1bHRUb3VjaGFibGUiLCAidHJhbnNmb3JtIiwgInpvb21fZGVmYXVsdCIsICJmaWx0ZXIiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJzZWxlY3Rpb24iLCAieCIsICJ5IiwgImV4dGVudCIsICJ0cmFuc2l0aW9uIiwgImEiLCAic2VsZWN0X2RlZmF1bHQiLCAibm9ldmVudF9kZWZhdWx0IiwgIm5vcHJvcGFnYXRpb24iLCAiZXZlbnQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJhIiwgImlkIiwgIm0iLCAiX2EiLCAiX2IiLCAic2VsZWN0X2RlZmF1bHQiLCAiem9vbV9kZWZhdWx0IiwgIngiLCAieSIsICJpZGVudGl0eSIsICJ4X2RlZmF1bHQiLCAieV9kZWZhdWx0IiwgImciLCAiY29sb3IiLCAiVyIsICJIIiwgImMiXQp9Cg==
