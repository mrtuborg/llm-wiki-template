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

// node_modules/d3-force/src/center.js
function center_default(x3, y3) {
  var nodes, strength = 1;
  if (x3 == null) x3 = 0;
  if (y3 == null) y3 = 0;
  function force() {
    var i, n = nodes.length, node, sx = 0, sy = 0;
    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }
    for (sx = (sx / n - x3) * strength, sy = (sy / n - y3) * strength, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }
  force.initialize = function(_) {
    nodes = _;
  };
  force.x = function(_) {
    return arguments.length ? (x3 = +_, force) : x3;
  };
  force.y = function(_) {
    return arguments.length ? (y3 = +_, force) : y3;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  return force;
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
    this.selectedId = null;
    this.searchQuery = "";
    this.selectedDomain = null;
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
      if (this.hiddenTypes.has(d.type)) return "0";
      if (dom && d.domain !== dom) return "0.07";
      if (!sel) return "1";
      return d.id === sel || neighbors.has(d.id) ? "1" : "0.07";
    }).style(
      "display",
      (d) => this.hiddenTypes.has(d.type) ? "none" : null
    );
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
    const nlBtn = mkBtn("type", "Nodes", true);
    const elBtn = mkBtn("minus", "Edges", true);
    const arBtn = mkBtn("arrow-right", "Arrows", true);
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
    const BASE_LABEL_PX = 11;
    const BASE_ELABEL_PX = 9;
    this.zoomBehavior = zoom_default2().scaleExtent([0.05, 10]).on("zoom", (ev) => {
      g.attr("transform", ev.transform);
      const k = ev.transform.k;
      g.selectAll(".llm-graph-node-label").style("font-size", `${BASE_LABEL_PX / k}px`);
      g.selectAll(".llm-graph-edge-label").style("font-size", `${BASE_ELABEL_PX / k}px`);
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
      const linkForce = link_default(simEdges).id((d) => d.id).distance(this.linkDist).strength(0.4);
      const chargeForce = manyBody_default().strength(-this.chargeStr);
      const gX = x_default2(W / 2).strength(this.gravityStr);
      const gY = y_default2(H / 2).strength(this.gravityStr);
      this.sim = simulation_default(this.nodes).force("link", linkForce).force("charge", chargeForce).force("gx", gX).force("gy", gY).force("center", center_default(W / 2, H / 2)).force("collide", collide_default(18));
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
        var _a2, _b;
        const g2 = select_default2(this);
        const color2 = (_a2 = NODE_COLORS[d.type]) != null ? _a2 : "#BAB0AC";
        const shape = (_b = NODE_SHAPES[d.type]) != null ? _b : "circle";
        const cls = "llm-graph-node-shape";
        const sw = g2.append("g").attr("class", "llm-node-shape-wrapper");
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
      const nodeLabel = nodeEl.append("text").attr("class", "llm-graph-node-label").attr("dy", "0.35em").attr("x", 13).attr("pointer-events", "none").text((d) => d.title.length > 26 ? d.title.slice(0, 24) + "\u2026" : d.title);
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
    });
    nlBtn.addEventListener("click", () => {
      var _a2;
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
    sidebar.empty();
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
    const ls = section("Epistemic Layers");
    const shapeSVG = (shape, color2, dim = false) => {
      const op = dim ? ' opacity="0.35"' : "";
      const f = `fill="${color2}"${op}`;
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
    const layerRowMap = /* @__PURE__ */ new Map();
    const maxL = Math.max(...A.layers.map((l) => l.count), 1);
    A.layers.forEach((l, i) => {
      var _a;
      const typeName = l.name.toLowerCase();
      const color2 = l.color;
      const shape = (_a = NODE_SHAPES[typeName]) != null ? _a : "circle";
      const isHidden = this.hiddenTypes.has(typeName);
      const row = ls.createDiv({ cls: "llm-sb-layer-row llm-sb-layer-clickable" });
      if (isHidden) row.addClass("llm-sb-layer-row--off");
      layerRowMap.set(typeName, row);
      row.createSpan({ cls: "llm-sb-layer-num", text: String(i + 1) });
      row.innerHTML += shapeSVG(shape, color2, isHidden);
      const nm = row.createSpan({ cls: "llm-sb-layer-name", text: l.name });
      nm.style.color = isHidden ? "var(--text-faint)" : color2;
      const track = row.createDiv({ cls: "llm-sb-track" });
      if (l.count > 0) {
        const fill = track.createDiv({ cls: "llm-sb-fill" });
        fill.style.cssText = `width:${Math.max(l.count / maxL * 100, 4)}%;background:${isHidden ? "var(--text-faint)" : color2}`;
      } else {
        track.createSpan({ cls: "llm-sb-gap", text: "gap" });
      }
      const cnt = row.createSpan({ cls: "llm-sb-layer-cnt", text: l.count ? String(l.count) : "\u2014" });
      cnt.style.color = l.count && !isHidden ? color2 : "var(--text-faint)";
      if (l.count > 0) {
        row.addEventListener("click", () => {
          if (this.hiddenTypes.has(typeName)) this.hiddenTypes.delete(typeName);
          else this.hiddenTypes.add(typeName);
          this.buildSidebar(sidebar, A, adj);
          this.applyVisibility(adj);
          this.saveSettings();
        });
      }
    });
    allTypesBtn.addEventListener("click", () => {
      this.hiddenTypes.clear();
      this.buildSidebar(sidebar, A, adj);
      this.applyVisibility(adj);
      this.saveSettings();
    });
    noneTypesBtn.addEventListener("click", () => {
      A.layers.forEach((l) => {
        if (l.count > 0) this.hiddenTypes.add(l.name.toLowerCase());
      });
      this.buildSidebar(sidebar, A, adj);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkcmVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2pvaW4uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9jZW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9hZGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9jb3Zlci5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9leHRlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvZmluZC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Jvb3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9zaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvdmlzaXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy92aXNpdEFmdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMveC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3kuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkdHJlZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvamlnZ2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvY29sbGlkZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xpbmsuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsICJub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xjZy5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3NpbXVsYXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9tYW55Qm9keS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3guanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy95LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2RyYWcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ldmVudC5qcyIsICJub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvZHJhZy5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsICJub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL3BhcnNlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zY2hlZHVsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3R3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ludGVycG9sYXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vYXR0clR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2RlbGF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZVZhcnlpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL29uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0QWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZVR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdGV4dFR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZDMtem9vbS9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy16b29tL3NyYy90cmFuc2Zvcm0uanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL25vZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3pvb20uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBsdWdpbiwgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIHNldEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtcblx0Zm9yY2VTaW11bGF0aW9uLCBmb3JjZUxpbmssIGZvcmNlTWFueUJvZHksXG5cdGZvcmNlQ2VudGVyLCBmb3JjZUNvbGxpZGUsIGZvcmNlWCwgZm9yY2VZLFxuXHRTaW11bGF0aW9uTm9kZURhdHVtLCBTaW11bGF0aW9uTGlua0RhdHVtLFxuXHRGb3JjZUxpbmssXG59IGZyb20gJ2QzLWZvcmNlJztcbmltcG9ydCB7IHpvb20sIHpvb21JZGVudGl0eSwgWm9vbUJlaGF2aW9yIH0gZnJvbSAnZDMtem9vbSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnZDMtZHJhZyc7XG5cbmNvbnN0IFZJRVdfVFlQRSA9ICdsbG0td2lraS1zZW1hbnRpYy1ncmFwaCc7XG5cbi8vIFRhYmxlYXUxMCBcdTIwMTQgcHJvZmVzc2lvbmFsIGRhdGEgdml6IHBhbGV0dGUsIGRlc2lnbmVkIGJ5IGNvbG9yIHNjaWVudGlzdHNcbmNvbnN0IE5PREVfQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRheGlvbTogICAgICcjNEU3OUE3JywgIC8vIHN0ZWVsIGJsdWUgICAgICBcdTIwMTQgaW52YXJpYW50c1xuXHRydWxlOiAgICAgICcjNEU3OUE3JywgIC8vIHN0ZWVsIGJsdWUgICAgICBcdTIwMTQgaW52YXJpYW50c1xuXHRlbnRpdHk6ICAgICcjNTlBMTRGJywgIC8vIHNhZ2UgZ3JlZW4gICAgICBcdTIwMTQgb2JqZWN0c1xuXHRjb25jZXB0OiAgICcjNzZCN0IyJywgIC8vIHNsYXRlIHRlYWwgICAgICBcdTIwMTQgaWRlYXNcblx0aW5kZXg6ICAgICAnI0JBQjBBQycsICAvLyB3YXJtIGdyYXkgICAgICAgXHUyMDE0IG1ldGFcblx0cHJvY2VzczogICAnI0YyOEUyQicsICAvLyB3YXJtIGFtYmVyICAgICAgXHUyMDE0IGFjdGlvbnNcblx0ZGVjaXNpb246ICAnI0UxNTc1OScsICAvLyBtdXRlZCByZWQgICAgICAgXHUyMDE0IGNob2ljZXNcblx0cGF0dGVybjogICAnI0IwN0FBMScsICAvLyBkdXN0eSBwdXJwbGUgICAgXHUyMDE0IHN0cnVjdHVyZXNcblx0b3ZlcnZpZXc6ICAnIzlDNzU1RicsICAvLyBlYXJ0aCBicm93biAgICAgXHUyMDE0IG92ZXJ2aWV3c1xuXHRzeW50aGVzaXM6ICcjOUM3NTVGJywgIC8vIGVhcnRoIGJyb3duICAgICBcdTIwMTQgc3ludGhlc2lzXG59O1xuXG4vLyBTaGFwZSBlbmNvZGVzIGVwaXN0ZW1pYyBjYXRlZ29yeVxuY29uc3QgTk9ERV9TSEFQRVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdGF4aW9tOiAnZGlhbW9uZCcsIHJ1bGU6ICdkaWFtb25kJywgICAgICAgICAgICAgICAvLyBpbnZhcmlhbnRzXG5cdHByb2Nlc3M6ICdzcXVhcmUnLCBkZWNpc2lvbjogJ3NxdWFyZScsICAgICAgICAgICAgLy8gYWN0aW9uc1xuXHRwYXR0ZXJuOiAnaGV4YWdvbicsIG92ZXJ2aWV3OiAnaGV4YWdvbicsIHN5bnRoZXNpczogJ2hleGFnb24nLCAgLy8gc3RydWN0dXJlc1xuXHRlbnRpdHk6ICdjaXJjbGUnLCBjb25jZXB0OiAnY2lyY2xlJywgaW5kZXg6ICdjaXJjbGUnLCAgICAgICAgICAgLy8gb2JqZWN0c1xufTtcbmNvbnN0IExBWUVSX09SREVSID0gWydBeGlvbScsJ0VudGl0eScsJ1Byb2Nlc3MnLCdQYXR0ZXJuJywnTWV0aG9kJywnQ29uY2VwdCcsJ1J1bGUnLCdPdmVydmlldycsJ0RlY2lzaW9uJywnU3ludGhlc2lzJ107XG5jb25zdCBFWENMVURFRF9QQVRIUyA9IFtcblx0J3dpa2kvdGVtcGxhdGVzLycsJ3dpa2kvZ3JhcGgvJywnd2lraS9jb21waWxlZC8nLFxuXHQnd2lraS91cGRhdGVzLycsJ3dpa2kvTWV0YS8nLCdwaXBlbGluZS8nLCdzY2hlbWEvJywnb250b2xvZ3kvJywnZG9tYWlucy8nLCd0b29scy8nLCdkb2NzLycsXG5dO1xuY29uc3QgRURHRV9SRSA9IC9cXCpcXCooXFx3KylcXCpcXCpcXHMqXHUyMTkyXFxzKlxcW1xcWyhbXlxcXXxdKykvZztcblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFR5cGVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuaW50ZXJmYWNlIFdpa2lOb2RlIGV4dGVuZHMgU2ltdWxhdGlvbk5vZGVEYXR1bSB7XG5cdGlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgZG9tYWluOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgV2lraUVkZ2UgZXh0ZW5kcyBTaW11bGF0aW9uTGlua0RhdHVtPFdpa2lOb2RlPiB7IGxhYmVsOiBzdHJpbmc7IH1cbmludGVyZmFjZSBBbmFseXRpY3Mge1xuXHRuOiBudW1iZXI7IG06IG51bWJlcjsgZGVuc2l0eTogbnVtYmVyOyBhdmdEZWc6IG51bWJlcjtcblx0b3JwaGFuczogbnVtYmVyOyBvcnBoYW5JZHM6IHN0cmluZ1tdO1xuXHRsYXllcnM6IHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyOyBjb2xvcjogc3RyaW5nIH1bXTtcblx0ZWRnZVR5cGVzOiB7IGxhYmVsOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdO1xuXHRodWJzOiB7IGlkOiBzdHJpbmc7IGRlZzogbnVtYmVyOyB0eXBlOiBzdHJpbmcgfVtdO1xuXHRkb21haW5zOiB7IG5hbWU6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W107XG5cdGRlZ3JlZU9mOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgVmlldyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmludGVyZmFjZSBHcmFwaFNldHRpbmdzIHtcblx0c2hvd05vZGVMYWJlbHM6IGJvb2xlYW47XG5cdHNob3dFZGdlTGFiZWxzOiBib29sZWFuO1xuXHRzaG93QXJyb3dzOiAgICAgYm9vbGVhbjtcblx0c2lkZWJhck9wZW46ICAgIGJvb2xlYW47XG5cdGhpZGRlblR5cGVzOiAgICBzdHJpbmdbXTtcblx0bGlua0Rpc3Q6ICAgICAgIG51bWJlcjtcblx0Y2hhcmdlU3RyOiAgICAgIG51bWJlcjtcblx0Z3Jhdml0eVN0cjogICAgIG51bWJlcjtcblx0c2VhcmNoUXVlcnk6ICAgIHN0cmluZztcblx0c2VsZWN0ZWREb21haW46IHN0cmluZyB8IG51bGw7XG59XG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBHcmFwaFNldHRpbmdzID0ge1xuXHRzaG93Tm9kZUxhYmVsczogdHJ1ZSxcblx0c2hvd0VkZ2VMYWJlbHM6IHRydWUsXG5cdHNob3dBcnJvd3M6ICAgICB0cnVlLFxuXHRzaWRlYmFyT3BlbjogICAgZmFsc2UsXG5cdGhpZGRlblR5cGVzOiAgICBbXSxcblx0bGlua0Rpc3Q6ICAgICAgIDYwLFxuXHRjaGFyZ2VTdHI6ICAgICAgMTIwLFxuXHRncmF2aXR5U3RyOiAgICAgMC4wMyxcblx0c2VhcmNoUXVlcnk6ICAgICcnLFxuXHRzZWxlY3RlZERvbWFpbjogbnVsbCxcbn07XG5cbmNsYXNzIFNlbWFudGljR3JhcGhWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuXHRwcml2YXRlIHBsdWdpbjogTExNV2lraVNlbWFudGljR3JhcGg7XG5cdHByaXZhdGUgbm9kZXM6IFdpa2lOb2RlW10gPSBbXTtcblx0cHJpdmF0ZSBlZGdlczogV2lraUVkZ2VbXSA9IFtdO1xuXHRwcml2YXRlIGFuYWx5dGljczogQW5hbHl0aWNzIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc2ltOiBSZXR1cm5UeXBlPHR5cGVvZiBmb3JjZVNpbXVsYXRpb24+IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgem9vbUJlaGF2aW9yITogWm9vbUJlaGF2aW9yPFNWR1NWR0VsZW1lbnQsIHVua25vd24+O1xuXG5cdC8vIHZpc2liaWxpdHkgc3RhdGVcblx0cHJpdmF0ZSBzaG93Tm9kZUxhYmVscyA9IHRydWU7XG5cdHByaXZhdGUgc2hvd0VkZ2VMYWJlbHMgPSB0cnVlO1xuXHRwcml2YXRlIHNob3dBcnJvd3MgICAgID0gdHJ1ZTtcblx0cHJpdmF0ZSBzaWRlYmFyT3BlbiAgICA9IGZhbHNlO1xuXHRwcml2YXRlIGhpZGRlblR5cGVzICAgID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdHByaXZhdGUgc2VsZWN0ZWRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc2VhcmNoUXVlcnkgICAgPSAnJztcblx0cHJpdmF0ZSBzZWxlY3RlZERvbWFpbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Ly8gcGh5c2ljcyBzdGF0ZVxuXHRwcml2YXRlIGxpbmtEaXN0ICAgPSA2MDtcblx0cHJpdmF0ZSBjaGFyZ2VTdHIgID0gMTIwO1xuXHRwcml2YXRlIGdyYXZpdHlTdHIgPSAwLjAzO1xuXG5cdC8vIHpvb20gc3RhdGUgXHUyMDE0IHBlcnNpc3RlZCBhY3Jvc3MgcmVmcmVzaGVzXG5cdHByaXZhdGUgc2F2ZWRUcmFuc2Zvcm06IHsgazogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG5cblx0Ly8gcGVuZGluZyByQUYgaGFuZGxlIFx1MjAxNCBjYW5jZWxsZWQgYmVmb3JlIGVhY2ggcmVidWlsZFxuXHRwcml2YXRlIHBlbmRpbmdSYWY6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHQvLyBndWFyZCBhZ2FpbnN0IGNvbmN1cnJlbnQgYXN5bmMgcmVmcmVzaGVzXG5cdHByaXZhdGUgaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cblx0Ly8gbGl2ZSBEMyBzZWxlY3Rpb25zXG5cdHByaXZhdGUgc2VsTm9kZUVsOiAgICBhbnkgPSBudWxsO1xuXHRwcml2YXRlIHNlbEVkZ2VMaW5lOiAgYW55ID0gbnVsbDtcblx0cHJpdmF0ZSBzZWxFZGdlTGFiZWw6IGFueSA9IG51bGw7XG5cdHByaXZhdGUgc2VsTm9kZUxhYmVsOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIGZvY3VzTm9kZUZuOiAoKGlkOiBzdHJpbmcpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3ZnRWw6IFNWR1NWR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuXHQvLyBhZGphY2VuY3kgZm9yIGRpbS1vbi1zZWxlY3Rcblx0cHJpdmF0ZSBuZWlnaGJvclNldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cblx0Ly8gYXV0by1yZWZyZXNoXG5cdHByaXZhdGUgcmVmcmVzaFRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihsZWFmOiBhbnksIHBsdWdpbjogTExNV2lraVNlbWFudGljR3JhcGgpIHtcblx0XHRzdXBlcihsZWFmKTtcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5sb2FkRGF0YSgpIGFzIFBhcnRpYWw8R3JhcGhTZXR0aW5ncz4gfCBudWxsO1xuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xuXHRcdGNvbnN0IHMgPSB7IC4uLkRFRkFVTFRfU0VUVElOR1MsIC4uLmRhdGEgfTtcblx0XHR0aGlzLnNob3dOb2RlTGFiZWxzID0gcy5zaG93Tm9kZUxhYmVscztcblx0XHR0aGlzLnNob3dFZGdlTGFiZWxzID0gcy5zaG93RWRnZUxhYmVscztcblx0XHR0aGlzLnNob3dBcnJvd3MgICAgID0gcy5zaG93QXJyb3dzO1xuXHRcdHRoaXMuc2lkZWJhck9wZW4gICAgPSBzLnNpZGViYXJPcGVuO1xuXHRcdHRoaXMuaGlkZGVuVHlwZXMgICAgPSBuZXcgU2V0KHMuaGlkZGVuVHlwZXMpO1xuXHRcdHRoaXMubGlua0Rpc3QgICAgICAgPSBzLmxpbmtEaXN0O1xuXHRcdHRoaXMuY2hhcmdlU3RyICAgICAgPSBzLmNoYXJnZVN0cjtcblx0XHR0aGlzLmdyYXZpdHlTdHIgICAgID0gcy5ncmF2aXR5U3RyO1xuXHRcdHRoaXMuc2VhcmNoUXVlcnkgICAgPSBzLnNlYXJjaFF1ZXJ5O1xuXHRcdHRoaXMuc2VsZWN0ZWREb21haW4gPSBzLnNlbGVjdGVkRG9tYWluID8/IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIHNhdmVTZXR0aW5ncygpIHtcblx0XHRjb25zdCBzOiBHcmFwaFNldHRpbmdzID0ge1xuXHRcdFx0c2hvd05vZGVMYWJlbHM6IHRoaXMuc2hvd05vZGVMYWJlbHMsXG5cdFx0XHRzaG93RWRnZUxhYmVsczogdGhpcy5zaG93RWRnZUxhYmVscyxcblx0XHRcdHNob3dBcnJvd3M6ICAgICB0aGlzLnNob3dBcnJvd3MsXG5cdFx0XHRzaWRlYmFyT3BlbjogICAgdGhpcy5zaWRlYmFyT3Blbixcblx0XHRcdGhpZGRlblR5cGVzOiAgICBbLi4udGhpcy5oaWRkZW5UeXBlc10sXG5cdFx0XHRsaW5rRGlzdDogICAgICAgdGhpcy5saW5rRGlzdCxcblx0XHRcdGNoYXJnZVN0cjogICAgICB0aGlzLmNoYXJnZVN0cixcblx0XHRcdGdyYXZpdHlTdHI6ICAgICB0aGlzLmdyYXZpdHlTdHIsXG5cdFx0XHRzZWFyY2hRdWVyeTogICAgdGhpcy5zZWFyY2hRdWVyeSxcblx0XHRcdHNlbGVjdGVkRG9tYWluOiB0aGlzLnNlbGVjdGVkRG9tYWluLFxuXHRcdH07XG5cdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEocyk7XG5cdH1cblxuXHRnZXRWaWV3VHlwZSgpICAgIHsgcmV0dXJuIFZJRVdfVFlQRTsgfVxuXHRnZXREaXNwbGF5VGV4dCgpIHsgcmV0dXJuICdTZW1hbnRpYyBHcmFwaCc7IH1cblx0Z2V0SWNvbigpICAgICAgICB7IHJldHVybiAnZ2l0LWZvcmsnOyB9XG5cblx0YXN5bmMgb25PcGVuKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cdFx0YXdhaXQgdGhpcy5idWlsZEdyYXBoKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0XHQvLyBBdXRvLXJlZnJlc2ggb25seSBmb3Igd2lraS8gZmlsZXMgXHUyMDE0IGlnbm9yZSBqb3VybmFsLCBhY3Rpdml0aWVzLCBldGMuXG5cdFx0Y29uc3QgaXNXaWtpRmlsZSA9IChmOiB7IHBhdGg6IHN0cmluZyB9KSA9PlxuXHRcdFx0Zi5wYXRoLnN0YXJ0c1dpdGgoJ3dpa2kvJykgJiYgIUVYQ0xVREVEX1BBVEhTLnNvbWUoZXggPT4gZi5wYXRoLmluY2x1ZGVzKGV4KSk7XG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdtb2RpZnknLCBmID0+IHsgaWYgKGlzV2lraUZpbGUoZikpIHRoaXMuc2NoZWR1bGVSZWZyZXNoKCk7IH0pKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ2NyZWF0ZScsIGYgPT4geyBpZiAoaXNXaWtpRmlsZShmKSkgdGhpcy5zY2hlZHVsZVJlZnJlc2goKTsgfSkpO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignZGVsZXRlJywgZiA9PiB7IGlmIChpc1dpa2lGaWxlKGYpKSB0aGlzLnNjaGVkdWxlUmVmcmVzaCgpOyB9KSk7XG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdyZW5hbWUnLCAoZikgPT4geyBpZiAoaXNXaWtpRmlsZShmKSkgdGhpcy5zY2hlZHVsZVJlZnJlc2goKTsgfSkpO1xuXHR9XG5cblx0YXN5bmMgb25DbG9zZSgpIHtcblx0XHR0aGlzLnNpbT8uc3RvcCgpO1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgeyB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVmcmVzaFRpbWVyKTsgdGhpcy5yZWZyZXNoVGltZXIgPSBudWxsOyB9XG5cdFx0dGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgY2FwdHVyZVpvb20oKSB7XG5cdFx0aWYgKHRoaXMuc3ZnRWwgJiYgdGhpcy56b29tQmVoYXZpb3IpIHtcblx0XHRcdGNvbnN0IHQgPSB0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0oc2VsZWN0KHRoaXMuc3ZnRWwpIGFzIGFueSk7XG5cdFx0XHR0aGlzLnNhdmVkVHJhbnNmb3JtID0geyBrOiB0LmssIHg6IHQueCwgeTogdC55IH07XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzY2hlZHVsZVJlZnJlc2goKSB7XG5cdFx0aWYgKHRoaXMucmVmcmVzaFRpbWVyICE9PSBudWxsKSB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVmcmVzaFRpbWVyKTtcblx0XHR0aGlzLnJlZnJlc2hUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdHRoaXMucmVmcmVzaFRpbWVyID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLmlzUmVmcmVzaGluZykgcmV0dXJuOyAvLyBza2lwIGlmIHByZXZpb3VzIHJlZnJlc2ggc3RpbGwgcnVubmluZ1xuXHRcdFx0dGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jYXB0dXJlWm9vbSgpO1xuXHRcdFx0XHRhd2FpdCB0aGlzLmJ1aWxkR3JhcGgoKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSwgMTUwMCk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIG1hbnVhbFJlZnJlc2goKSB7XG5cdFx0aWYgKHRoaXMucmVmcmVzaFRpbWVyICE9PSBudWxsKSB7IHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWZyZXNoVGltZXIpOyB0aGlzLnJlZnJlc2hUaW1lciA9IG51bGw7IH1cblx0XHRpZiAodGhpcy5pc1JlZnJlc2hpbmcpIHJldHVybjtcblx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuY2FwdHVyZVpvb20oKTtcblx0XHRcdGF3YWl0IHRoaXMuYnVpbGRHcmFwaCgpO1xuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBcdTI1MDBcdTI1MDAgMS4gUGFyc2UgdmF1bHQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdGFzeW5jIGJ1aWxkR3JhcGgoKSB7XG5cdFx0Y29uc3Qgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBXaWtpTm9kZT4oKTtcblx0XHRjb25zdCByYXdFZGdlczogeyBzcmM6IHN0cmluZzsgdGd0OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdID0gW107XG5cdFx0Y29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKGYgPT5cblx0XHRcdGYucGF0aC5zdGFydHNXaXRoKCd3aWtpLycpICYmICFFWENMVURFRF9QQVRIUy5zb21lKGV4ID0+IGYucGF0aC5pbmNsdWRlcyhleCkpKTtcblxuXHRcdGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuXHRcdFx0Y29uc3QgZm0gPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIgPz8ge307XG5cdFx0XHRub2RlTWFwLnNldChmaWxlLmJhc2VuYW1lLCB7XG5cdFx0XHRcdGlkOiBmaWxlLmJhc2VuYW1lLFxuXHRcdFx0XHR0aXRsZTogIChmbVsndGl0bGUnXSAgPz8gZmlsZS5iYXNlbmFtZSkgYXMgc3RyaW5nLFxuXHRcdFx0XHR0eXBlOiAgICgoZm1bJ3R5cGUnXSA/PyAndW5rbm93bicpIGFzIHN0cmluZykudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0ZG9tYWluOiAoZm1bJ2RvbWFpbiddID8/ICcnKSBhcyBzdHJpbmcsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpO1xuXHRcdFx0bGV0IG06IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG5cdFx0XHRFREdFX1JFLmxhc3RJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoKG0gPSBFREdFX1JFLmV4ZWMoY29udGVudCkpICE9PSBudWxsKVxuXHRcdFx0XHRyYXdFZGdlcy5wdXNoKHsgc3JjOiBmaWxlLmJhc2VuYW1lLCB0Z3Q6IG1bMl0udHJpbSgpLCBsYWJlbDogbVsxXSB9KTtcblx0XHR9XG5cdFx0dGhpcy5ub2RlcyA9IEFycmF5LmZyb20obm9kZU1hcC52YWx1ZXMoKSk7XG5cdFx0dGhpcy5lZGdlcyA9IHJhd0VkZ2VzXG5cdFx0XHQuZmlsdGVyKGUgPT4gbm9kZU1hcC5oYXMoZS5zcmMpICYmIG5vZGVNYXAuaGFzKGUudGd0KSlcblx0XHRcdC5tYXAoZSA9PiAoeyBzb3VyY2U6IGUuc3JjLCB0YXJnZXQ6IGUudGd0LCBsYWJlbDogZS5sYWJlbCB9KSk7XG5cdFx0dGhpcy5hbmFseXRpY3MgPSB0aGlzLmNvbXB1dGVBbmFseXRpY3MoKTtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAyLiBBbmFseXRpY3MgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgY29tcHV0ZUFuYWx5dGljcygpOiBBbmFseXRpY3Mge1xuXHRcdGNvbnN0IGRlZ3JlZU9mID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IGUgb2YgdGhpcy5lZGdlcykge1xuXHRcdFx0Y29uc3QgcyA9IGUuc291cmNlIGFzIHN0cmluZywgdCA9IGUudGFyZ2V0IGFzIHN0cmluZztcblx0XHRcdGRlZ3JlZU9mLnNldChzLCAoZGVncmVlT2YuZ2V0KHMpPz8wKSsxKTtcblx0XHRcdGRlZ3JlZU9mLnNldCh0LCAoZGVncmVlT2YuZ2V0KHQpPz8wKSsxKTtcblx0XHR9XG5cdFx0Y29uc3QgbiA9IHRoaXMubm9kZXMubGVuZ3RoLCBtID0gdGhpcy5lZGdlcy5sZW5ndGg7XG5cdFx0Y29uc3QgZGVuc2l0eSAgPSBuPjEgPyArKG0vKG4qKG4tMSkpKS50b0ZpeGVkKDQpIDogMDtcblx0XHRjb25zdCBhdmdEZWcgICA9IG4+MCA/ICsoWy4uLmRlZ3JlZU9mLnZhbHVlcygpXS5yZWR1Y2UoKGEsYik9PmErYiwwKS9uKS50b0ZpeGVkKDIpIDogMDtcblx0XHRjb25zdCBvcnBoYW5JZHMgPSB0aGlzLm5vZGVzLmZpbHRlcihuZD0+IWRlZ3JlZU9mLmhhcyhuZC5pZCkpLm1hcChuZD0+bmQuaWQpO1xuXG5cdFx0Y29uc3QgdHlwZUNvdW50cyA9IG5ldyBNYXA8c3RyaW5nLG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IG5kIG9mIHRoaXMubm9kZXMpIHR5cGVDb3VudHMuc2V0KG5kLnR5cGUsKHR5cGVDb3VudHMuZ2V0KG5kLnR5cGUpPz8wKSsxKTtcblx0XHRjb25zdCBsYXllcnMgPSBMQVlFUl9PUkRFUi5tYXAobmFtZT0+KHtcblx0XHRcdG5hbWUsIGNvbG9yOiBOT0RFX0NPTE9SU1tuYW1lLnRvTG93ZXJDYXNlKCldPz8nIzg4OCcsXG5cdFx0XHRjb3VudDogdHlwZUNvdW50cy5nZXQobmFtZS50b0xvd2VyQ2FzZSgpKT8/MCxcblx0XHR9KSk7XG5cblx0XHRjb25zdCBlZGdlQ250ID0gbmV3IE1hcDxzdHJpbmcsbnVtYmVyPigpO1xuXHRcdGZvciAoY29uc3QgZSBvZiB0aGlzLmVkZ2VzKSBlZGdlQ250LnNldChlLmxhYmVsLChlZGdlQ250LmdldChlLmxhYmVsKT8/MCkrMSk7XG5cdFx0Y29uc3QgZWRnZVR5cGVzID0gWy4uLmVkZ2VDbnQuZW50cmllcygpXS5zb3J0KChhLGIpPT5iWzFdLWFbMV0pLm1hcCgoW2xhYmVsLGNvdW50XSk9Pih7bGFiZWwsY291bnR9KSk7XG5cblx0XHRjb25zdCBodWJzID0gdGhpcy5ub2Rlcy5maWx0ZXIobmQ9PmRlZ3JlZU9mLmhhcyhuZC5pZCkpXG5cdFx0XHQuc29ydCgoYSxiKT0+KGRlZ3JlZU9mLmdldChiLmlkKT8/MCktKGRlZ3JlZU9mLmdldChhLmlkKT8/MCkpLnNsaWNlKDAsMTApXG5cdFx0XHQubWFwKG5kPT4oe2lkOm5kLmlkLGRlZzpkZWdyZWVPZi5nZXQobmQuaWQpISx0eXBlOm5kLnR5cGV9KSk7XG5cblx0XHRjb25zdCBkb21haW5DbnQgPSBuZXcgTWFwPHN0cmluZyxudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCBuZCBvZiB0aGlzLm5vZGVzKSBpZihuZC5kb21haW4pIGRvbWFpbkNudC5zZXQobmQuZG9tYWluLChkb21haW5DbnQuZ2V0KG5kLmRvbWFpbik/PzApKzEpO1xuXHRcdGNvbnN0IGRvbWFpbnMgPSBbLi4uZG9tYWluQ250LmVudHJpZXMoKV0uc29ydCgoYSxiKT0+YlsxXS1hWzFdKS5tYXAoKFtuYW1lLGNvdW50XSk9Pih7bmFtZSxjb3VudH0pKTtcblxuXHRcdHJldHVybiB7bixtLGRlbnNpdHksYXZnRGVnLG9ycGhhbnM6b3JwaGFuSWRzLmxlbmd0aCxvcnBoYW5JZHMsbGF5ZXJzLGVkZ2VUeXBlcyxodWJzLGRvbWFpbnMsZGVncmVlT2Z9O1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDMuIERpbSBoZWxwZXJzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRwcml2YXRlIGJ1aWxkQWRqYWNlbmN5KHNpbUVkZ2VzOiB7c291cmNlOldpa2lOb2RlO3RhcmdldDpXaWtpTm9kZX1bXSkge1xuXHRcdGNvbnN0IGFkaiA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblx0XHRmb3IgKGNvbnN0IGUgb2Ygc2ltRWRnZXMpIHtcblx0XHRcdGlmICghYWRqLmhhcyhlLnNvdXJjZS5pZCkpIGFkai5zZXQoZS5zb3VyY2UuaWQsIG5ldyBTZXQoKSk7XG5cdFx0XHRpZiAoIWFkai5oYXMoZS50YXJnZXQuaWQpKSBhZGouc2V0KGUudGFyZ2V0LmlkLCBuZXcgU2V0KCkpO1xuXHRcdFx0YWRqLmdldChlLnNvdXJjZS5pZCkhLmFkZChlLnRhcmdldC5pZCk7XG5cdFx0XHRhZGouZ2V0KGUudGFyZ2V0LmlkKSEuYWRkKGUuc291cmNlLmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFkajtcblx0fVxuXG5cdHByaXZhdGUgYXBwbHlWaXNpYmlsaXR5KGFkajogTWFwPHN0cmluZyxTZXQ8c3RyaW5nPj4pIHtcblx0XHRpZiAoIXRoaXMuc2VsTm9kZUVsKSByZXR1cm47XG5cdFx0Y29uc3Qgc2VsICA9IHRoaXMuc2VsZWN0ZWRJZDtcblx0XHRjb25zdCBuZWlnaGJvcnMgPSBzZWwgPyAoYWRqLmdldChzZWwpID8/IG5ldyBTZXQoKSkgOiBudWxsO1xuXHRcdGNvbnN0IGRvbSA9IHRoaXMuc2VsZWN0ZWREb21haW47XG5cblx0XHQvLyBub2RlIG9wYWNpdHlcblx0XHR0aGlzLnNlbE5vZGVFbC5zdHlsZSgnb3BhY2l0eScsIChkOiBXaWtpTm9kZSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaGlkZGVuVHlwZXMuaGFzKGQudHlwZSkpIHJldHVybiAnMCc7XG5cdFx0XHRpZiAoZG9tICYmIGQuZG9tYWluICE9PSBkb20pIHJldHVybiAnMC4wNyc7XG5cdFx0XHRpZiAoIXNlbCkgcmV0dXJuICcxJztcblx0XHRcdHJldHVybiBkLmlkID09PSBzZWwgfHwgbmVpZ2hib3JzIS5oYXMoZC5pZCkgPyAnMScgOiAnMC4wNyc7XG5cdFx0fSkuc3R5bGUoJ2Rpc3BsYXknLCAoZDogV2lraU5vZGUpID0+XG5cdFx0XHR0aGlzLmhpZGRlblR5cGVzLmhhcyhkLnR5cGUpID8gJ25vbmUnIDogbnVsbFxuXHRcdCk7XG5cblx0XHQvLyBlZGdlIG9wYWNpdHlcblx0XHRjb25zdCBlZGdlT3BhY2l0eSA9IChlOiBhbnkpID0+IHtcblx0XHRcdGNvbnN0IHMgPSAoZS5zb3VyY2UgYXMgV2lraU5vZGUpLCB0ID0gKGUudGFyZ2V0IGFzIFdpa2lOb2RlKTtcblx0XHRcdGlmICh0aGlzLmhpZGRlblR5cGVzLmhhcyhzLnR5cGUpIHx8IHRoaXMuaGlkZGVuVHlwZXMuaGFzKHQudHlwZSkpIHJldHVybiAnMCc7XG5cdFx0XHRpZiAoZG9tICYmIHMuZG9tYWluICE9PSBkb20gJiYgdC5kb21haW4gIT09IGRvbSkgcmV0dXJuICcwLjA0Jztcblx0XHRcdGlmICghc2VsKSByZXR1cm4gJzAuNTUnO1xuXHRcdFx0cmV0dXJuIChzLmlkPT09c2VsIHx8IHQuaWQ9PT1zZWwpID8gJzAuOScgOiAnMC4wNCc7XG5cdFx0fTtcblxuXHRcdHRoaXMuc2VsRWRnZUxpbmU/LnN0eWxlKCdvcGFjaXR5JywgZWRnZU9wYWNpdHkpO1xuXHRcdHRoaXMuc2VsRWRnZUxhYmVsPy5zdHlsZSgnb3BhY2l0eScsIGVkZ2VPcGFjaXR5KVxuXHRcdFx0LnN0eWxlKCdkaXNwbGF5JywgdGhpcy5zaG93RWRnZUxhYmVscyA/IG51bGwgOiAnbm9uZScpO1xuXHRcdHRoaXMuc2VsTm9kZUxhYmVsPy5zdHlsZSgnZGlzcGxheScsIHRoaXMuc2hvd05vZGVMYWJlbHMgPyBudWxsIDogJ25vbmUnKTtcblx0XHR0aGlzLnNlbEVkZ2VMaW5lPy5hdHRyKCdtYXJrZXItZW5kJywgdGhpcy5zaG93QXJyb3dzID8gJ3VybCgjbGxtLWFycm93KScgOiBudWxsKTtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCA0LiBSZW5kZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHJlbmRlcigpIHtcblx0XHQvLyBTdG9wIG9sZCBzaW11bGF0aW9uIGFuZCBjYW5jZWwgYW55IHBlbmRpbmcgckFGIGJlZm9yZSByZWJ1aWxkaW5nIERPTVxuXHRcdHRoaXMuc2ltPy5zdG9wKCk7XG5cdFx0aWYgKHRoaXMucGVuZGluZ1JhZiAhPT0gbnVsbCkgeyBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnBlbmRpbmdSYWYpOyB0aGlzLnBlbmRpbmdSYWYgPSBudWxsOyB9XG5cblx0XHRjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xuXHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdGNvbnRhaW5lci5hZGRDbGFzcygnbGxtLWdyYXBoLWNvbnRhaW5lcicpO1xuXHRcdGNvbnN0IEEgPSB0aGlzLmFuYWx5dGljcyE7XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgVG9vbGJhciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCB0b29sYmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ2xsbS1ncmFwaC10b29sYmFyJyB9KTtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBTZWFyY2ggYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IHNlYXJjaEJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoYmFyJyB9KTtcblx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaEJhci5jcmVhdGVFbCgnaW5wdXQnLCB7XG5cdFx0XHRjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoJyxcblx0XHRcdGF0dHI6IHsgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ1NlYXJjaCBub2Rlc1x1MjAyNiAodGl0bGUsIHR5cGUsIGRvbWFpbiknIH1cblx0XHR9KTtcblx0XHQvLyBDbGVhciBidXR0b25cblx0XHRjb25zdCBzZWFyY2hDbGVhciA9IHNlYXJjaEJhci5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoLWNsZWFyJywgdGV4dDogJ1x1MDBENycgfSk7XG5cdFx0c2VhcmNoQ2xlYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdC8vIFJlc3RvcmUgc2F2ZWQgc2VhcmNoIHF1ZXJ5XG5cdFx0aWYgKHRoaXMuc2VhcmNoUXVlcnkpIHtcblx0XHRcdHNlYXJjaElucHV0LnZhbHVlID0gdGhpcy5zZWFyY2hRdWVyeTtcblx0XHRcdHNlYXJjaENsZWFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbHlTZWFyY2ggPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBxID0gdGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblx0XHRcdHNlYXJjaENsZWFyLnN0eWxlLmRpc3BsYXkgPSBxID8gJ2ZsZXgnIDogJ25vbmUnO1xuXHRcdFx0aWYgKCF0aGlzLnNlbE5vZGVFbCkgcmV0dXJuO1xuXHRcdFx0aWYgKCFxKSB7XG5cdFx0XHRcdHRoaXMuc2VsTm9kZUVsLnN0eWxlKCdvcGFjaXR5JywgbnVsbCkuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgbnVsbCk7XG5cdFx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LnN0eWxlKCdvcGFjaXR5JywgbnVsbCk7XG5cdFx0XHRcdHRoaXMuc2VsRWRnZUxhYmVsPy5zdHlsZSgnb3BhY2l0eScsIG51bGwpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtYXRjaElkcyA9IG5ldyBTZXQoXG5cdFx0XHRcdHRoaXMubm9kZXNcblx0XHRcdFx0XHQuZmlsdGVyKG4gPT5cblx0XHRcdFx0XHRcdG4udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxuXHRcdFx0XHRcdFx0bi50eXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkgIHx8XG5cdFx0XHRcdFx0XHRuLmRvbWFpbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5tYXAobiA9PiBuLmlkKVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuc2VsTm9kZUVsXG5cdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsICAgICAgICAoZDogV2lraU5vZGUpID0+IG1hdGNoSWRzLmhhcyhkLmlkKSA/ICcxJyA6ICcwLjA3Jylcblx0XHRcdFx0LnN0eWxlKCdwb2ludGVyLWV2ZW50cycsIChkOiBXaWtpTm9kZSkgPT4gbWF0Y2hJZHMuaGFzKGQuaWQpID8gbnVsbCAgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZT8uc3R5bGUoJ29wYWNpdHknLCAoZDogYW55KSA9PlxuXHRcdFx0XHRtYXRjaElkcy5oYXMoKGQuc291cmNlIGFzIFdpa2lOb2RlKS5pZCkgfHwgbWF0Y2hJZHMuaGFzKChkLnRhcmdldCBhcyBXaWtpTm9kZSkuaWQpID8gJzAuNicgOiAnMC4wNScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWw/LnN0eWxlKCdvcGFjaXR5JywgKGQ6IGFueSkgPT5cblx0XHRcdFx0bWF0Y2hJZHMuaGFzKChkLnNvdXJjZSBhcyBXaWtpTm9kZSkuaWQpIHx8IG1hdGNoSWRzLmhhcygoZC50YXJnZXQgYXMgV2lraU5vZGUpLmlkKSA/ICcxJyA6ICcwJyk7XG5cdFx0fTtcblxuXHRcdHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyB0aGlzLnNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7IGFwcGx5U2VhcmNoKCk7IHRoaXMuc2F2ZVNldHRpbmdzKCk7IH0pO1xuXHRcdHNlYXJjaENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnOyB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7IGFwcGx5U2VhcmNoKCk7IHNlYXJjaElucHV0LmZvY3VzKCk7IHRoaXMuc2F2ZVNldHRpbmdzKCk7IH0pO1xuXG5cdFx0Y29uc3QgbWtCdG4gPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBhY3RpdmUgPSBmYWxzZSkgPT4ge1xuXHRcdFx0Y29uc3QgYiA9IHRvb2xiYXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLWJ0bicgfSk7XG5cdFx0XHRzZXRJY29uKGIsIGljb24pO1xuXHRcdFx0Yi5jcmVhdGVTcGFuKHsgdGV4dDogbGFiZWwgfSk7XG5cdFx0XHRiLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcblx0XHRcdGlmIChhY3RpdmUpIGIuYWRkQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScpO1xuXHRcdFx0cmV0dXJuIGI7XG5cdFx0fTtcblx0XHRjb25zdCByZXNldEJ0biAgICA9IG1rQnRuKCdyb3RhdGUtY2N3JywgICdSZXNldCB6b29tJyk7XG5cdFx0Y29uc3QgcmVmcmVzaEJ0biAgPSBta0J0bigncmVmcmVzaC1jdycsICAnUmVmcmVzaCcpO1xuXHRcdGNvbnN0IG5sQnRuICAgICAgID0gbWtCdG4oJ3R5cGUnLCAgICAgICAgICdOb2RlcycsICAgICB0cnVlKTtcblx0XHRjb25zdCBlbEJ0biAgICA9IG1rQnRuKCdtaW51cycsICAgICAgICAnRWRnZXMnLCAgICAgdHJ1ZSk7XG5cdFx0Y29uc3QgYXJCdG4gICAgPSBta0J0bignYXJyb3ctcmlnaHQnLCAgJ0Fycm93cycsICAgIHRydWUpO1xuXHRcdGNvbnN0IHNiQnRuICAgID0gbWtCdG4oJ2Jhci1jaGFydC0yJywgICdBbmFseXRpY3MnKTtcblx0XHR0b29sYmFyLmNyZWF0ZVNwYW4oeyBjbHM6J2xsbS1ncmFwaC1zdGF0cycsXG5cdFx0XHR0ZXh0OmAke0Eubn0gbm9kZXMgXHUwMEI3ICR7QS5tfSBlZGdlcyBcdTAwQjcgZGVuc2l0eSAke0EuZGVuc2l0eX1gIH0pO1xuXG5cblx0XHQvLyBwbGFjZWhvbGRlciBhZGphY2VuY3kgKGZpbGxlZCBhZnRlciByQUYpXG5cdFx0bGV0IGFkaiA9IG5ldyBNYXA8c3RyaW5nLFNldDxzdHJpbmc+PigpO1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIExheW91dDogU1ZHICsgc2lkZWJhciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBsYXlvdXQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLWdyYXBoLWxheW91dCcgfSk7XG5cdFx0Y29uc3Qgc3ZnRWwgID0gbGF5b3V0LmNyZWF0ZVN2Zygnc3ZnJywgeyBjbHM6ICdsbG0tZ3JhcGgtc3ZnJyB9KTtcblx0XHR0aGlzLnN2Z0VsICAgPSBzdmdFbDtcblx0XHRjb25zdCBzaWRlYmFyID0gbGF5b3V0LmNyZWF0ZURpdih7IGNsczogJ2xsbS1ncmFwaC1zaWRlYmFyJyB9KTtcblx0XHR0aGlzLmJ1aWxkU2lkZWJhcihzaWRlYmFyLCBBLCBhZGopO1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIEQzIHNldHVwIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IHN2ZyA9IHNlbGVjdDxTVkdTVkdFbGVtZW50LCB1bmtub3duPihzdmdFbCk7XG5cdFx0Y29uc3QgZyAgID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5cdFx0Y29uc3QgQkFTRV9MQUJFTF9QWCAgPSAxMTsgICAvLyBub2RlIGxhYmVsIHNpemUgYXQgem9vbT0xIChjb3VudGVyLXNjYWxlZClcblx0XHRjb25zdCBCQVNFX0VMQUJFTF9QWCA9IDk7ICAgIC8vIGVkZ2UgbGFiZWwgc2l6ZSBhdCB6b29tPTEgKGNvdW50ZXItc2NhbGVkKVxuXG5cdFx0dGhpcy56b29tQmVoYXZpb3IgPSB6b29tPFNWR1NWR0VsZW1lbnQsIHVua25vd24+KClcblx0XHRcdC5zY2FsZUV4dGVudChbMC4wNSwxMF0pXG5cdFx0XHQub24oJ3pvb20nLCBldiA9PiB7XG5cdFx0XHRcdGcuYXR0cigndHJhbnNmb3JtJywgZXYudHJhbnNmb3JtKTtcblx0XHRcdFx0Y29uc3QgayA9IGV2LnRyYW5zZm9ybS5rO1xuXHRcdFx0XHQvLyBDb3VudGVyLXNjYWxlIGxhYmVscyBvbmx5IFx1MjAxNCBrZWVwcyB0ZXh0IHJlYWRhYmxlIGF0IGFueSB6b29tXG5cdFx0XHRcdC8vIFNoYXBlcywgZWRnZXMsIGFycm93cyBzY2FsZSBuYXR1cmFsbHkgd2l0aCB6b29tIChjb3JyZWN0IG92ZXJ2aWV3IGJlaGF2aW91cilcblx0XHRcdFx0Zy5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsIHVua25vd24+KCcubGxtLWdyYXBoLW5vZGUtbGFiZWwnKVxuXHRcdFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYCR7QkFTRV9MQUJFTF9QWCAvIGt9cHhgKTtcblx0XHRcdFx0Zy5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsIHVua25vd24+KCcubGxtLWdyYXBoLWVkZ2UtbGFiZWwnKVxuXHRcdFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYCR7QkFTRV9FTEFCRUxfUFggLyBrfXB4YCk7XG5cdFx0XHR9KTtcblx0XHRzdmcuY2FsbCh0aGlzLnpvb21CZWhhdmlvcik7XG5cblx0XHQvLyBSZXN0b3JlIHNhdmVkIHpvb20gdHJhbnNmb3JtIChhZnRlciByZWZyZXNoIG9yIGxvYWQpXG5cdFx0aWYgKHRoaXMuc2F2ZWRUcmFuc2Zvcm0pIHtcblx0XHRcdGNvbnN0IHsgaywgeCwgeSB9ID0gdGhpcy5zYXZlZFRyYW5zZm9ybTtcblx0XHRcdHN2Zy5jYWxsKHRoaXMuem9vbUJlaGF2aW9yLnRyYW5zZm9ybSwgem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh4LCB5KS5zY2FsZShrKSk7XG5cdFx0fVxuXG5cdFx0Ly8gY2xpY2sgb24gYmFja2dyb3VuZCBcdTIxOTIgZGVzZWxlY3Rcblx0XHRzdmcub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0ID09PSBzdmdFbCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSWQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVkVHJhbnNmb3JtID0gbnVsbDtcblx0XHRcdHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNDAwKS5jYWxsKHRoaXMuem9vbUJlaGF2aW9yLnRyYW5zZm9ybSwgem9vbUlkZW50aXR5KTtcblx0XHR9KTtcblx0XHRyZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tYW51YWxSZWZyZXNoKCkpO1xuXG5cdFx0Ly8gQXJyb3cgbWFya2VyIFx1MjAxNCBzY2FsZXMgbmF0dXJhbGx5IHdpdGggem9vbSAobm8gY291bnRlci1zY2FsaW5nIG5lZWRlZClcblx0XHRzdmcuYXBwZW5kKCdkZWZzJykuYXBwZW5kKCdtYXJrZXInKS5hdHRyKCdpZCcsJ2xsbS1hcnJvdycpXG5cdFx0XHQuYXR0cigndmlld0JveCcsJzAgLTMgNiA2JykuYXR0cigncmVmWCcsMTApLmF0dHIoJ3JlZlknLDApXG5cdFx0XHQuYXR0cignbWFya2VyV2lkdGgnLCA2KS5hdHRyKCdtYXJrZXJIZWlnaHQnLCA2KVxuXHRcdFx0LmF0dHIoJ21hcmtlclVuaXRzJywnc3Ryb2tlV2lkdGgnKVxuXHRcdFx0LmF0dHIoJ29yaWVudCcsJ2F1dG8nKVxuXHRcdFx0LmFwcGVuZCgncGF0aCcpLmF0dHIoJ2QnLCdNMCwtM0w2LDBMMCwzJykuYXR0cignZmlsbCcsJ3ZhcigtLXRleHQtZmFpbnQpJyk7XG5cblx0XHQvLyBSZXNvbHZlIG5vZGUgcmVmc1xuXHRcdGNvbnN0IG5vZGVNYXAgICA9IG5ldyBNYXAodGhpcy5ub2Rlcy5tYXAobj0+W24uaWQsbl0pKTtcblx0XHRjb25zdCBzaW1FZGdlcyAgPSB0aGlzLmVkZ2VzLm1hcChlPT4oe1xuXHRcdFx0Li4uZSxcblx0XHRcdHNvdXJjZTogbm9kZU1hcC5nZXQoZS5zb3VyY2UgYXMgc3RyaW5nKSEsXG5cdFx0XHR0YXJnZXQ6IG5vZGVNYXAuZ2V0KGUudGFyZ2V0IGFzIHN0cmluZykhLFxuXHRcdH0pKS5maWx0ZXIoZT0+ZS5zb3VyY2UmJmUudGFyZ2V0KTtcblxuXHRcdHRoaXMucGVuZGluZ1JhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHR0aGlzLnBlbmRpbmdSYWYgPSBudWxsO1xuXHRcdFx0Y29uc3QgVyA9IHN2Z0VsLmNsaWVudFdpZHRoICB8fCA5MDA7XG5cdFx0XHRjb25zdCBIID0gc3ZnRWwuY2xpZW50SGVpZ2h0IHx8IDcwMDtcblxuXHRcdFx0Ly8gRm9yY2VzIChzdG9yZWQgc28gc2xpZGVycyBjYW4gdXBkYXRlIHRoZW0pXG5cdFx0XHRjb25zdCBsaW5rRm9yY2UgICA9IGZvcmNlTGluazxXaWtpTm9kZSxXaWtpRWRnZT4oc2ltRWRnZXMpXG5cdFx0XHRcdC5pZChkPT5kLmlkKS5kaXN0YW5jZSh0aGlzLmxpbmtEaXN0KS5zdHJlbmd0aCgwLjQpO1xuXHRcdFx0Y29uc3QgY2hhcmdlRm9yY2UgPSBmb3JjZU1hbnlCb2R5PFdpa2lOb2RlPigpLnN0cmVuZ3RoKC10aGlzLmNoYXJnZVN0cik7XG5cdFx0XHRjb25zdCBnWCA9IGZvcmNlWDxXaWtpTm9kZT4oVy8yKS5zdHJlbmd0aCh0aGlzLmdyYXZpdHlTdHIpO1xuXHRcdFx0Y29uc3QgZ1kgPSBmb3JjZVk8V2lraU5vZGU+KEgvMikuc3RyZW5ndGgodGhpcy5ncmF2aXR5U3RyKTtcblxuXHRcdFx0dGhpcy5zaW0gPSBmb3JjZVNpbXVsYXRpb248V2lraU5vZGU+KHRoaXMubm9kZXMpXG5cdFx0XHRcdC5mb3JjZSgnbGluaycsICAgIGxpbmtGb3JjZSlcblx0XHRcdFx0LmZvcmNlKCdjaGFyZ2UnLCAgY2hhcmdlRm9yY2UpXG5cdFx0XHRcdC5mb3JjZSgnZ3gnLCAgICAgIGdYKVxuXHRcdFx0XHQuZm9yY2UoJ2d5JywgICAgICBnWSlcblx0XHRcdFx0LmZvcmNlKCdjZW50ZXInLCAgZm9yY2VDZW50ZXIoVy8yLEgvMikpXG5cdFx0XHRcdC5mb3JjZSgnY29sbGlkZScsIGZvcmNlQ29sbGlkZSgxOCkpO1xuXG5cdFx0XHQvLyBCdWlsZCBhZGphY2VuY3kgYWZ0ZXIgc2ltRWRnZXMgcmVzb2x2ZWRcblx0XHRcdGFkaiA9IHRoaXMuYnVpbGRBZGphY2VuY3koc2ltRWRnZXMpO1xuXG5cdFx0XHQvLyBFZGdlc1xuXHRcdFx0Y29uc3QgZWRnZUxpbmUgPSBnLmFwcGVuZCgnZycpXG5cdFx0XHRcdC5zZWxlY3RBbGw8U1ZHTGluZUVsZW1lbnQsdHlwZW9mIHNpbUVkZ2VzWzBdPignbGluZScpXG5cdFx0XHRcdC5kYXRhKHNpbUVkZ2VzKS5qb2luKCdsaW5lJylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLWVkZ2UnKVxuXHRcdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgMS4yKVxuXHRcdFx0XHQuYXR0cignbWFya2VyLWVuZCcsJ3VybCgjbGxtLWFycm93KScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZSA9IGVkZ2VMaW5lO1xuXG5cdFx0XHRjb25zdCBlZGdlTGFiZWwgPSBnLmFwcGVuZCgnZycpXG5cdFx0XHRcdC5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsdHlwZW9mIHNpbUVkZ2VzWzBdPigndGV4dCcpXG5cdFx0XHRcdC5kYXRhKHNpbUVkZ2VzKS5qb2luKCd0ZXh0Jylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLWVkZ2UtbGFiZWwnKVxuXHRcdFx0XHQuYXR0cigncG9pbnRlci1ldmVudHMnLCdub25lJylcblx0XHRcdFx0LnRleHQoZD0+ZC5sYWJlbCk7XG5cdFx0XHR0aGlzLnNlbEVkZ2VMYWJlbCA9IGVkZ2VMYWJlbDtcblxuXHRcdFx0Ly8gTm9kZXNcblx0XHRcdGNvbnN0IG5vZGVFbCA9IGcuYXBwZW5kKCdnJylcblx0XHRcdFx0LnNlbGVjdEFsbDxTVkdHRWxlbWVudCxXaWtpTm9kZT4oJ2cnKVxuXHRcdFx0XHQuZGF0YSh0aGlzLm5vZGVzKS5qb2luKCdnJylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLW5vZGUnKVxuXHRcdFx0XHQuY2FsbChkcmFnPFNWR0dFbGVtZW50LFdpa2lOb2RlPigpXG5cdFx0XHRcdFx0Lm9uKCdzdGFydCcsKGV2LGQpPT57IGlmKCFldi5hY3RpdmUpIHRoaXMuc2ltPy5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTsgZC5meD1kLng7IGQuZnk9ZC55OyB9KVxuXHRcdFx0XHRcdC5vbignZHJhZycsIChldixkKT0+eyBkLmZ4PWV2Lng7IGQuZnk9ZXYueTsgfSlcblx0XHRcdFx0XHQub24oJ2VuZCcsICAoZXYsZCk9PnsgaWYoIWV2LmFjdGl2ZSkgdGhpcy5zaW0/LmFscGhhVGFyZ2V0KDApOyBkLmZ4PW51bGw7IGQuZnk9bnVsbDsgfSkpXG5cdFx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQsIGQpID0+IHtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZElkID09PSBkLmlkKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWNvbmQgY2xpY2sgXHUyMTkyIG9wZW4gZmlsZVxuXHRcdFx0XHRcdFx0dGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChkLmlkLCcnLGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gZmlyc3QgY2xpY2sgXHUyMTkyIHNlbGVjdCArIGRpbVxuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZElkID0gZC5pZDtcblx0XHRcdFx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdHRoaXMuc2VsTm9kZUVsID0gbm9kZUVsO1xuXG5cdFx0XHRub2RlRWwuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGNvbnN0IGcgPSBzZWxlY3Q8U1ZHR0VsZW1lbnQsIFdpa2lOb2RlPih0aGlzIGFzIFNWR0dFbGVtZW50KTtcblx0XHRcdFx0Y29uc3QgY29sb3IgID0gTk9ERV9DT0xPUlNbZC50eXBlXSA/PyAnI0JBQjBBQyc7XG5cdFx0XHRcdGNvbnN0IHNoYXBlICA9IE5PREVfU0hBUEVTW2QudHlwZV0gID8/ICdjaXJjbGUnO1xuXHRcdFx0XHRjb25zdCBjbHMgICAgPSAnbGxtLWdyYXBoLW5vZGUtc2hhcGUnO1xuXHRcdFx0XHQvLyBXcmFwcGVyIHNjYWxlZCBieSB6b29tIGhhbmRsZXIgdG8ga2VlcCBub2RlIHNpemUgY29uc3RhbnQgb24gc2NyZWVuXG5cdFx0XHRcdGNvbnN0IHN3ID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsbG0tbm9kZS1zaGFwZS13cmFwcGVyJyk7XG5cdFx0XHRcdGlmIChzaGFwZSA9PT0gJ2RpYW1vbmQnKSB7XG5cdFx0XHRcdFx0c3cuYXBwZW5kKCdyZWN0JykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cignd2lkdGgnLCAxMSkuYXR0cignaGVpZ2h0JywgMTEpXG5cdFx0XHRcdFx0XHQuYXR0cigneCcsIC01LjUpLmF0dHIoJ3knLCAtNS41KVxuXHRcdFx0XHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoNDUpJykuYXR0cigncngnLCAxLjUpXG5cdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIGNvbG9yKTtcblx0XHRcdFx0fSBlbHNlIGlmIChzaGFwZSA9PT0gJ3NxdWFyZScpIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ3JlY3QnKS5hdHRyKCdjbGFzcycsIGNscylcblx0XHRcdFx0XHRcdC5hdHRyKCd3aWR0aCcsIDEzKS5hdHRyKCdoZWlnaHQnLCAxMylcblx0XHRcdFx0XHRcdC5hdHRyKCd4JywgLTYuNSkuYXR0cigneScsIC02LjUpLmF0dHIoJ3J4JywgMilcblx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNoYXBlID09PSAnaGV4YWdvbicpIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ3BvbHlnb24nKS5hdHRyKCdjbGFzcycsIGNscylcblx0XHRcdFx0XHRcdC5hdHRyKCdwb2ludHMnLCAnMCwtOCA2LjksLTQgNi45LDQgMCw4IC02LjksNCAtNi45LC00Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN3LmFwcGVuZCgnY2lyY2xlJykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cigncicsIDcpLmF0dHIoJ2ZpbGwnLCBjb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBub2RlTGFiZWwgPSBub2RlRWwuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLW5vZGUtbGFiZWwnKVxuXHRcdFx0XHQuYXR0cignZHknLCcwLjM1ZW0nKS5hdHRyKCd4JywxMykuYXR0cigncG9pbnRlci1ldmVudHMnLCdub25lJylcblx0XHRcdFx0LnRleHQoZD0+ZC50aXRsZS5sZW5ndGg+MjY/ZC50aXRsZS5zbGljZSgwLDI0KSsnXHUyMDI2JzpkLnRpdGxlKTtcblx0XHRcdHRoaXMuc2VsTm9kZUxhYmVsID0gbm9kZUxhYmVsO1xuXG5cdFx0XHQvLyBUb29sdGlwXG5cdFx0XHRjb25zdCB0b29sdGlwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczonbGxtLWdyYXBoLXRvb2x0aXAnIH0pO1xuXHRcdFx0bm9kZUVsXG5cdFx0XHRcdC5vbignbW91c2VlbnRlcicsKF9ldixkKT0+e1xuXHRcdFx0XHRcdGNvbnN0IGRlZyA9IEEuZGVncmVlT2YuZ2V0KGQuaWQpPz8wO1xuXHRcdFx0XHRcdGNvbnN0IG5laWdoYm9ycyA9IGFkai5nZXQoZC5pZCk/P25ldyBTZXQoKTtcblx0XHRcdFx0XHR0b29sdGlwLmlubmVySFRNTCA9XG5cdFx0XHRcdFx0XHRgPHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+PGJyPmArXG5cdFx0XHRcdFx0XHRgPHNwYW4gY2xhc3M9XCJsbG0tdHAtdHlwZVwiIHN0eWxlPVwiY29sb3I6JHtOT0RFX0NPTE9SU1tkLnR5cGVdPz8nIzg4OCd9XCI+JHtkLnR5cGV9PC9zcGFuPmArXG5cdFx0XHRcdFx0XHQoZC5kb21haW4/YDxicj48ZW0+JHtkLmRvbWFpbn08L2VtPmA6JycpK1xuXHRcdFx0XHRcdFx0YDxicj48c21hbGw+ZGVncmVlOiAke2RlZ30gXHUwMEI3IG5laWdoYm9yczogJHtuZWlnaGJvcnMuc2l6ZX08L3NtYWxsPmArXG5cdFx0XHRcdFx0XHRgPGJyPjxzbWFsbCBjbGFzcz1cImxsbS10cC1oaW50XCI+Y2xpY2sgdG8gc2VsZWN0IFx1MDBCNyBjbGljayBhZ2FpbiB0byBvcGVuPC9zbWFsbD5gO1xuXHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ21vdXNlbW92ZScsKGV2OlBvaW50ZXJFdmVudCk9Pntcblx0XHRcdFx0XHRjb25zdCByPWNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLmxlZnQ9KGV2LmNsaWVudFgtci5sZWZ0KzE0KSsncHgnO1xuXHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUudG9wID0oZXYuY2xpZW50WS1yLnRvcCArMTQpKydweCc7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignbW91c2VsZWF2ZScsKCk9PnsgdG9vbHRpcC5zdHlsZS5kaXNwbGF5PSdub25lJzsgfSk7XG5cblx0XHRcdC8vIEZvY3VzIG5vZGUgKGNhbGxlZCBmcm9tIHNpZGViYXIgaHViIGNsaWNrcylcblx0XHRcdHRoaXMuZm9jdXNOb2RlRm4gPSAoaWQ6c3RyaW5nKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5kID0gbm9kZU1hcC5nZXQoaWQpO1xuXHRcdFx0XHRpZiAoIW5kfHxuZC54PT1udWxsfHxuZC55PT1udWxsKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJZCA9IGlkO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0XHRjb25zdCBjVz1zdmdFbC5jbGllbnRXaWR0aCwgY0g9c3ZnRWwuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDYwMCkuY2FsbChcblx0XHRcdFx0XHR0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sXG5cdFx0XHRcdFx0em9vbUlkZW50aXR5LnRyYW5zbGF0ZShjVy8yLGNILzIpLnNjYWxlKDEuOCkudHJhbnNsYXRlKC1uZC54ISwtbmQueSEpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBXaXJlIHNpZGViYXIgaHViIGNsaWNrc1xuXHRcdFx0c2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ub2RlLWlkXScpLmZvckVhY2goZWw9Pntcblx0XHRcdFx0KGVsIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PlxuXHRcdFx0XHRcdHRoaXMuZm9jdXNOb2RlRm4/LigoZWwgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQubm9kZUlkISkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFRpY2tcblx0XHRcdHRoaXMuc2ltLm9uKCd0aWNrJywoKT0+e1xuXHRcdFx0XHRlZGdlTGluZVxuXHRcdFx0XHRcdC5hdHRyKCd4MScsZD0+KGQuc291cmNlIGFzIFdpa2lOb2RlKS54ISlcblx0XHRcdFx0XHQuYXR0cigneTEnLGQ9PihkLnNvdXJjZSBhcyBXaWtpTm9kZSkueSEpXG5cdFx0XHRcdFx0LmF0dHIoJ3gyJyxkPT4oZC50YXJnZXQgYXMgV2lraU5vZGUpLnghKVxuXHRcdFx0XHRcdC5hdHRyKCd5MicsZD0+KGQudGFyZ2V0IGFzIFdpa2lOb2RlKS55ISk7XG5cdFx0XHRcdGVkZ2VMYWJlbFxuXHRcdFx0XHRcdC5hdHRyKCd4JyxkPT4oKGQuc291cmNlIGFzIFdpa2lOb2RlKS54ISsoZC50YXJnZXQgYXMgV2lraU5vZGUpLnghKS8yKVxuXHRcdFx0XHRcdC5hdHRyKCd5JyxkPT4oKGQuc291cmNlIGFzIFdpa2lOb2RlKS55ISsoZC50YXJnZXQgYXMgV2lraU5vZGUpLnkhKS8yKTtcblx0XHRcdFx0bm9kZUVsLmF0dHIoJ3RyYW5zZm9ybScsZD0+YHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFdpcmUgcGh5c2ljcyBzbGlkZXJzIChtdXN0IGhhcHBlbiBhZnRlciBzaW0gaXMgY3JlYXRlZClcblx0XHRcdHNpZGViYXIucXVlcnlTZWxlY3RvckFsbDxIVE1MSW5wdXRFbGVtZW50PignW2RhdGEtcGh5c2ljc10nKS5mb3JFYWNoKGlucHV0PT57XG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoKT0+e1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9ICtpbnB1dC52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBpbnB1dC5kYXRhc2V0LnBoeXNpY3MhO1xuXHRcdFx0XHRcdGNvbnN0IGxibCA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcblx0XHRcdFx0XHRpZiAobGJsKSBsYmwudGV4dENvbnRlbnQgPSBrZXk9PT0nZ3Jhdml0eVN0cicgPyB2YWwudG9GaXhlZCgyKSA6IFN0cmluZyh2YWwpO1xuXHRcdFx0XHRcdGlmIChrZXk9PT0nbGlua0Rpc3QnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpbmtEaXN0ID0gdmFsO1xuXHRcdFx0XHRcdFx0KHRoaXMuc2ltIS5mb3JjZSgnbGluaycpIGFzIEZvcmNlTGluazxXaWtpTm9kZSxXaWtpRWRnZT4pLmRpc3RhbmNlKHZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nY2hhcmdlU3RyJykge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFyZ2VTdHIgPSB2YWw7XG5cdFx0XHRcdFx0XHQodGhpcy5zaW0hLmZvcmNlKCdjaGFyZ2UnKSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBmb3JjZU1hbnlCb2R5Pikuc3RyZW5ndGgoLXZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nZ3Jhdml0eVN0cicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ3Jhdml0eVN0ciA9IHZhbDtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2d4JykgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VYPikuc3RyZW5ndGgodmFsKTtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2d5JykgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VZPikuc3RyZW5ndGgodmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zaW0hLmFscGhhKDAuNCkucmVzdGFydCgpO1xuXHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7IC8vIHJBRlxuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIFRvb2xiYXIgdG9nZ2xlIHdpcmluZyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRubEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHRoaXMuc2hvd05vZGVMYWJlbHM9IXRoaXMuc2hvd05vZGVMYWJlbHM7XG5cdFx0XHRubEJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNob3dOb2RlTGFiZWxzKTtcblx0XHRcdHRoaXMuc2VsTm9kZUxhYmVsPy5hdHRyKCdkaXNwbGF5Jyx0aGlzLnNob3dOb2RlTGFiZWxzP251bGw6J25vbmUnKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0ZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHR0aGlzLnNob3dFZGdlTGFiZWxzPSF0aGlzLnNob3dFZGdlTGFiZWxzO1xuXHRcdFx0ZWxCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaG93RWRnZUxhYmVscyk7XG5cdFx0XHR0aGlzLnNlbEVkZ2VMYWJlbD8uYXR0cignZGlzcGxheScsdGhpcy5zaG93RWRnZUxhYmVscz9udWxsOidub25lJyk7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdGFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5zaG93QXJyb3dzPSF0aGlzLnNob3dBcnJvd3M7XG5cdFx0XHRhckJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNob3dBcnJvd3MpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZT8uYXR0cignbWFya2VyLWVuZCcsdGhpcy5zaG93QXJyb3dzPyd1cmwoI2xsbS1hcnJvdyknOm51bGwpO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblx0XHRzYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHRoaXMuc2lkZWJhck9wZW49IXRoaXMuc2lkZWJhck9wZW47XG5cdFx0XHRzYkJ0bi50b2dnbGVDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyx0aGlzLnNpZGViYXJPcGVuKTtcblx0XHRcdHNpZGViYXIudG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1zaWRlYmFyLS1vcGVuJyx0aGlzLnNpZGViYXJPcGVuKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBcdTI1MDBcdTI1MDAgNS4gU2lkZWJhciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cHJpdmF0ZSBidWlsZFNpZGViYXIoc2lkZWJhcjogSFRNTEVsZW1lbnQsIEE6IEFuYWx5dGljcywgYWRqOiBNYXA8c3RyaW5nLFNldDxzdHJpbmc+Pikge1xuXHRcdHNpZGViYXIuZW1wdHkoKTsgLy8gY2xlYXIgYmVmb3JlIHJlYnVpbGQgKGZvciB0b2dnbGUgcmUtcmVuZGVycylcblx0XHRjb25zdCBzZWN0aW9uID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHMgPSBzaWRlYmFyLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLXNlY3Rpb24nIH0pO1xuXHRcdFx0cy5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi10aXRsZScsIHRleHQ6IHRpdGxlIH0pO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblxuXHRcdC8vIFBoeXNpY3Mgc2xpZGVyc1xuXHRcdGNvbnN0IHBzID0gc2VjdGlvbignUGh5c2ljcycpO1xuXHRcdGNvbnN0IG1rU2xpZGVyID0gKGxhYmVsOiBzdHJpbmcsIGtleTogc3RyaW5nLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbDogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IHJvdyA9IHBzLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLXNsaWRlci1yb3cnIH0pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6J2xsbS1zYi1zbGlkZXItbGJsJywgdGV4dDogbGFiZWwgfSk7XG5cdFx0XHRjb25zdCBpbnB1dCA9IHJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7IHR5cGU6J3JhbmdlJyB9KTtcblx0XHRcdGlucHV0LmFkZENsYXNzKCdsbG0tc2Itc2xpZGVyJyk7XG5cdFx0XHRpbnB1dC5taW49U3RyaW5nKG1pbik7IGlucHV0Lm1heD1TdHJpbmcobWF4KTtcblx0XHRcdGlucHV0LnZhbHVlPVN0cmluZyh2YWwpOyBpbnB1dC5zdGVwPVN0cmluZyhzdGVwKTtcblx0XHRcdGlucHV0LmRhdGFzZXQucGh5c2ljcyA9IGtleTtcblx0XHRcdGNvbnN0IGRpc3BsYXkgPSBzdGVwIDwgMSA/IHZhbC50b0ZpeGVkKDIpIDogU3RyaW5nKHZhbCk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczonbGxtLXNiLXNsaWRlci12YWwnLCB0ZXh0OiBkaXNwbGF5IH0pO1xuXHRcdH07XG5cdFx0bWtTbGlkZXIoJ0xpbmsgZGlzdCcsICAgJ2xpbmtEaXN0JywgICAyMCwgIDIwMCwgdGhpcy5saW5rRGlzdCwgICA1KTtcblx0XHRta1NsaWRlcignUmVwdWxzaW9uJywgICAnY2hhcmdlU3RyJywgIDMwLCAgNDAwLCB0aGlzLmNoYXJnZVN0ciwgIDEwKTtcblx0XHRta1NsaWRlcignR3Jhdml0eScsICAgICAnZ3Jhdml0eVN0cicsIDAsICAgMC4zLCB0aGlzLmdyYXZpdHlTdHIsIDAuMDEpO1xuXG5cdFx0Ly8gR3JhcGggSGVhbHRoXG5cdFx0Y29uc3QgaHMgPSBzZWN0aW9uKCdHcmFwaCBIZWFsdGgnKTtcblx0XHRjb25zdCBjYXJkcyA9IFtcblx0XHRcdHtsYmw6J05vZGVzJywgICB2YWw6QS5uLCAgICAgICAgd2FybjpmYWxzZX0sXG5cdFx0XHR7bGJsOidFZGdlcycsICAgdmFsOkEubSwgICAgICAgIHdhcm46ZmFsc2V9LFxuXHRcdFx0e2xibDonRGVuc2l0eScsIHZhbDpBLmRlbnNpdHksICB3YXJuOkEuZGVuc2l0eTwwLjAxfSxcblx0XHRcdHtsYmw6J0F2ZyBkZWcnLCB2YWw6QS5hdmdEZWcsICAgd2FybjpBLmF2Z0RlZzwxfSxcblx0XHRcdHtsYmw6J09ycGhhbnMnLCB2YWw6QS5vcnBoYW5zLCAgd2FybjpBLm9ycGhhbnM+MH0sXG5cdFx0XTtcblx0XHRjb25zdCBjYXJkR3JpZCA9IGhzLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLWNhcmRzJyB9KTtcblx0XHRmb3IgKGNvbnN0IGMgb2YgY2FyZHMpIHtcblx0XHRcdGNvbnN0IGNhcmQgPSBjYXJkR3JpZC5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi1jYXJkJysoYy53YXJuPycgbGxtLXNiLWNhcmQtLXdhcm4nOicnKSB9KTtcblx0XHRcdGNhcmQuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1jYXJkLXZhbCcsdGV4dDpTdHJpbmcoYy52YWwpfSk7XG5cdFx0XHRjYXJkLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItY2FyZC1sYmwnLHRleHQ6Yy5sYmx9KTtcblx0XHR9XG5cblx0XHQvLyBFcGlzdGVtaWMgbGF5ZXJzIFx1MjAxNCBjbGlja2FibGUgdG8gdG9nZ2xlIHR5cGUgdmlzaWJpbGl0eVxuXHRcdGNvbnN0IGxzID0gc2VjdGlvbignRXBpc3RlbWljIExheWVycycpO1xuXG5cdFx0Ly8gU2hhcGUgU1ZHIGhlbHBlciAocmV1c2VkIGZyb20gb2xkIHBpbGxzKVxuXHRcdGNvbnN0IHNoYXBlU1ZHID0gKHNoYXBlOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGRpbSA9IGZhbHNlKTogc3RyaW5nID0+IHtcblx0XHRcdGNvbnN0IG9wID0gZGltID8gJyBvcGFjaXR5PVwiMC4zNVwiJyA6ICcnO1xuXHRcdFx0Y29uc3QgZiA9IGBmaWxsPVwiJHtjb2xvcn1cIiR7b3B9YDtcblx0XHRcdHN3aXRjaCAoc2hhcGUpIHtcblx0XHRcdFx0Y2FzZSAnZGlhbW9uZCc6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48cmVjdCAke2Z9IHg9XCIxLjVcIiB5PVwiMS41XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSA1IDUpXCIvPjwvc3ZnPmA7XG5cdFx0XHRcdGNhc2UgJ3NxdWFyZSc6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48cmVjdCAke2Z9IHg9XCIxLjVcIiB5PVwiMS41XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiIHJ4PVwiMS41XCIvPjwvc3ZnPmA7XG5cdFx0XHRcdGNhc2UgJ2hleGFnb24nOlxuXHRcdFx0XHRcdHJldHVybiBgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCI+PHBvbHlnb24gJHtmfSBwb2ludHM9XCI1LDEgOC43LDMgOC43LDcgNSw5IDEuMyw3IDEuMywzXCIvPjwvc3ZnPmA7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48Y2lyY2xlICR7Zn0gY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjRcIi8+PC9zdmc+YDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gQWxsIC8gTm9uZSBjb250cm9sc1xuXHRcdGNvbnN0IGxheWVyQ3RybCA9IGxzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1sYXllci1jdHJsJyB9KTtcblx0XHRjb25zdCBhbGxUeXBlc0J0biAgPSBsYXllckN0cmwuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLWJ0biBsbG0tZ3JhcGgtYnRuLS14cycsIHRleHQ6ICdBbGwnIH0pO1xuXHRcdGNvbnN0IG5vbmVUeXBlc0J0biA9IGxheWVyQ3RybC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtYnRuIGxsbS1ncmFwaC1idG4tLXhzJywgdGV4dDogJ05vbmUnIH0pO1xuXHRcdGNvbnN0IGxheWVyUm93TWFwID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PigpO1xuXG5cdFx0Y29uc3QgbWF4TCA9IE1hdGgubWF4KC4uLkEubGF5ZXJzLm1hcChsPT5sLmNvdW50KSwxKTtcblx0XHRBLmxheWVycy5mb3JFYWNoKChsLCBpKSA9PiB7XG5cdFx0XHRjb25zdCB0eXBlTmFtZSA9IGwubmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgY29sb3IgICAgPSBsLmNvbG9yO1xuXHRcdFx0Y29uc3Qgc2hhcGUgICAgPSBOT0RFX1NIQVBFU1t0eXBlTmFtZV0gPz8gJ2NpcmNsZSc7XG5cdFx0XHRjb25zdCBpc0hpZGRlbiA9IHRoaXMuaGlkZGVuVHlwZXMuaGFzKHR5cGVOYW1lKTtcblxuXHRcdFx0Y29uc3Qgcm93ID0gbHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWxheWVyLXJvdyBsbG0tc2ItbGF5ZXItY2xpY2thYmxlJyB9KTtcblx0XHRcdGlmIChpc0hpZGRlbikgcm93LmFkZENsYXNzKCdsbG0tc2ItbGF5ZXItcm93LS1vZmYnKTtcblx0XHRcdGxheWVyUm93TWFwLnNldCh0eXBlTmFtZSwgcm93KTtcblxuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItbGF5ZXItbnVtJywgdGV4dDogU3RyaW5nKGkgKyAxKSB9KTtcblx0XHRcdHJvdy5pbm5lckhUTUwgKz0gc2hhcGVTVkcoc2hhcGUsIGNvbG9yLCBpc0hpZGRlbik7XG5cdFx0XHRjb25zdCBubSA9IHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWxheWVyLW5hbWUnLCB0ZXh0OiBsLm5hbWUgfSk7XG5cdFx0XHRubS5zdHlsZS5jb2xvciA9IGlzSGlkZGVuID8gJ3ZhcigtLXRleHQtZmFpbnQpJyA6IGNvbG9yO1xuXHRcdFx0Y29uc3QgdHJhY2sgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLXRyYWNrJyB9KTtcblx0XHRcdGlmIChsLmNvdW50ID4gMCkge1xuXHRcdFx0XHRjb25zdCBmaWxsID0gdHJhY2suY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWZpbGwnIH0pO1xuXHRcdFx0XHRmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1heChsLmNvdW50L21heEwqMTAwLDQpfSU7YmFja2dyb3VuZDoke2lzSGlkZGVuID8gJ3ZhcigtLXRleHQtZmFpbnQpJyA6IGNvbG9yfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cmFjay5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWdhcCcsIHRleHQ6ICdnYXAnIH0pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY250ID0gcm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItbGF5ZXItY250JywgdGV4dDogbC5jb3VudCA/IFN0cmluZyhsLmNvdW50KSA6ICdcdTIwMTQnIH0pO1xuXHRcdFx0Y250LnN0eWxlLmNvbG9yID0gKGwuY291bnQgJiYgIWlzSGlkZGVuKSA/IGNvbG9yIDogJ3ZhcigtLXRleHQtZmFpbnQpJztcblxuXHRcdFx0aWYgKGwuY291bnQgPiAwKSB7XG5cdFx0XHRcdHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXModHlwZU5hbWUpKSB0aGlzLmhpZGRlblR5cGVzLmRlbGV0ZSh0eXBlTmFtZSk7XG5cdFx0XHRcdFx0ZWxzZSB0aGlzLmhpZGRlblR5cGVzLmFkZCh0eXBlTmFtZSk7XG5cdFx0XHRcdFx0Ly8gUmUtcmVuZGVyIHNpZGViYXIgdG8gcmVmbGVjdCBzdGF0ZSAoc2ltcGxlciB0aGFuIHBhdGNoaW5nIFNWRyBpbm5lckhUTUwpXG5cdFx0XHRcdFx0dGhpcy5idWlsZFNpZGViYXIoc2lkZWJhciwgQSwgYWRqKTtcblx0XHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YWxsVHlwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGRlblR5cGVzLmNsZWFyKCk7XG5cdFx0XHR0aGlzLmJ1aWxkU2lkZWJhcihzaWRlYmFyLCBBLCBhZGopO1xuXHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0bm9uZVR5cGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0QS5sYXllcnMuZm9yRWFjaChsID0+IHsgaWYgKGwuY291bnQgPiAwKSB0aGlzLmhpZGRlblR5cGVzLmFkZChsLm5hbWUudG9Mb3dlckNhc2UoKSk7IH0pO1xuXHRcdFx0dGhpcy5idWlsZFNpZGViYXIoc2lkZWJhciwgQSwgYWRqKTtcblx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRWRnZSB0eXBlc1xuXHRcdGNvbnN0IGVzID0gc2VjdGlvbignRWRnZSBUeXBlcycpO1xuXHRcdGNvbnN0IG1heEUgPSBNYXRoLm1heCguLi5BLmVkZ2VUeXBlcy5tYXAoZT0+ZS5jb3VudCksMSk7XG5cdFx0Zm9yIChjb25zdCBlIG9mIEEuZWRnZVR5cGVzKSB7XG5cdFx0XHRjb25zdCByb3c9ZXMuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1iYXItcm93J30pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWJhci1uYW1lJyx0ZXh0OmUubGFiZWx9KTtcblx0XHRcdGNvbnN0IHRyYWNrPXJvdy5jcmVhdGVEaXYoe2NsczonbGxtLXNiLXRyYWNrJ30pO1xuXHRcdFx0Y29uc3QgZmlsbD10cmFjay5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWZpbGwgbGxtLXNiLWZpbGwtLWJsdWUnfSk7XG5cdFx0XHRmaWxsLnN0eWxlLndpZHRoPWAke2UuY291bnQvbWF4RSoxMDB9JWA7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItYmFyLWNudCcsdGV4dDpTdHJpbmcoZS5jb3VudCl9KTtcblx0XHR9XG5cblx0XHQvLyBUb3AgaHVic1xuXHRcdGNvbnN0IGh1YlNlYyA9IHNlY3Rpb24oJ1RvcCBIdWJzIFx1MDBCNyBieSBkZWdyZWUnKTtcblx0XHRjb25zdCBtYXhIID0gTWF0aC5tYXgoLi4uQS5odWJzLm1hcChoPT5oLmRlZyksMSk7XG5cdFx0QS5odWJzLmZvckVhY2goKGgsaSk9Pntcblx0XHRcdGNvbnN0IHJvdz1odWJTZWMuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1odWItcm93J30pO1xuXHRcdFx0cm93LmRhdGFzZXQubm9kZUlkPWguaWQ7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLXJhbmsnLHRleHQ6U3RyaW5nKGkrMSl9KTtcblx0XHRcdGNvbnN0IGRvdD1yb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLWRvdCd9KTtcblx0XHRcdGRvdC5zdHlsZS5iYWNrZ3JvdW5kPU5PREVfQ09MT1JTW2gudHlwZV0/PycjODg4Jztcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1odWItbmFtZScsdGV4dDpoLmlkLmxlbmd0aD4yMD9oLmlkLnNsaWNlKDAsMTgpKydcdTIwMjYnOmguaWR9KVxuXHRcdFx0XHQuc2V0QXR0cmlidXRlKCd0aXRsZScsaC5pZCk7XG5cdFx0XHRjb25zdCBiYXI9cm93LmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItaHViLWJhcid9KTtcblx0XHRcdGJhci5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWZpbGwnLHN0eWxlOmB3aWR0aDoke2guZGVnL21heEgqMTAwfSU7YmFja2dyb3VuZDoke05PREVfQ09MT1JTW2gudHlwZV0/PycjODg4J31gfSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLWRlZycsdGV4dDpTdHJpbmcoaC5kZWcpfSk7XG5cdFx0fSk7XG5cblx0XHQvLyBEb21haW4gY292ZXJhZ2UgXHUyMDE0IGNsaWNrIHRvIGZpbHRlciBncmFwaFxuXHRcdGNvbnN0IGRzID0gc2VjdGlvbignRG9tYWluIENvdmVyYWdlJyk7XG5cdFx0Y29uc3QgbWF4RCA9IE1hdGgubWF4KC4uLkEuZG9tYWlucy5tYXAoZD0+ZC5jb3VudCksMSk7XG5cdFx0Y29uc3QgZG9tYWluUm93cyA9IG5ldyBNYXA8c3RyaW5nLCBIVE1MRWxlbWVudD4oKTtcblx0XHRmb3IgKGNvbnN0IGQgb2YgQS5kb21haW5zKSB7XG5cdFx0XHRjb25zdCByb3cgPSBkcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItYmFyLXJvdyBsbG0tc2ItZG9tYWluLXJvdycgfSk7XG5cdFx0XHRkb21haW5Sb3dzLnNldChkLm5hbWUsIHJvdyk7XG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZERvbWFpbiA9PT0gZC5uYW1lKSByb3cuYWRkQ2xhc3MoJ2xsbS1zYi1kb21haW4tcm93LS1hY3RpdmUnKTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWJhci1uYW1lJywgdGV4dDogZC5uYW1lIH0pO1xuXHRcdFx0Y29uc3QgdHJhY2sgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLXRyYWNrJyB9KTtcblx0XHRcdHRyYWNrLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1maWxsIGxsbS1zYi1maWxsLS10ZWFsJywgc3R5bGU6IGB3aWR0aDoke2QuY291bnQvbWF4RCoxMDB9JWAgfSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1iYXItY250JywgdGV4dDogU3RyaW5nKGQuY291bnQpIH0pO1xuXHRcdFx0cm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZERvbWFpbiA9PT0gZC5uYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZERvbWFpbiA9IG51bGw7XG5cdFx0XHRcdFx0ZG9tYWluUm93cy5mb3JFYWNoKHIgPT4gci5yZW1vdmVDbGFzcygnbGxtLXNiLWRvbWFpbi1yb3ctLWFjdGl2ZScpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkRG9tYWluID0gZC5uYW1lO1xuXHRcdFx0XHRcdGRvbWFpblJvd3MuZm9yRWFjaCgociwgbikgPT4gci50b2dnbGVDbGFzcygnbGxtLXNiLWRvbWFpbi1yb3ctLWFjdGl2ZScsIG4gPT09IGQubmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFBsdWdpbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExMTVdpa2lTZW1hbnRpY0dyYXBoIGV4dGVuZHMgUGx1Z2luIHtcblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRSwgbGVhZiA9PiBuZXcgU2VtYW50aWNHcmFwaFZpZXcobGVhZiwgdGhpcykpO1xuXHRcdHRoaXMuYWRkUmliYm9uSWNvbignZ2l0LWZvcmsnLCdMTE0gV2lraSBTZW1hbnRpYyBHcmFwaCcsKCk9PnRoaXMuYWN0aXZhdGVWaWV3KCkpO1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7aWQ6J29wZW4tc2VtYW50aWMtZ3JhcGgnLG5hbWU6J09wZW4gU2VtYW50aWMgR3JhcGgnLGNhbGxiYWNrOigpPT50aGlzLmFjdGl2YXRlVmlldygpfSk7XG5cdH1cblx0YXN5bmMgYWN0aXZhdGVWaWV3KCkge1xuXHRcdGNvbnN0IHt3b3Jrc3BhY2V9PXRoaXMuYXBwO1xuXHRcdGxldCBsZWFmPXdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFKVswXTtcblx0XHRpZiAoIWxlYWYpIHsgbGVhZj13b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSE7IGF3YWl0IGxlYWYuc2V0Vmlld1N0YXRlKHt0eXBlOlZJRVdfVFlQRSxhY3RpdmU6dHJ1ZX0pOyB9XG5cdFx0d29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG5cdH1cblx0b251bmxvYWQoKSB7fVxufVxuIiwgImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsICJpbXBvcnQgbmFtZXNwYWNlcyBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIHByZWZpeCA9IG5hbWUgKz0gXCJcIiwgaSA9IHByZWZpeC5pbmRleE9mKFwiOlwiKTtcbiAgaWYgKGkgPj0gMCAmJiAocHJlZml4ID0gbmFtZS5zbGljZSgwLCBpKSkgIT09IFwieG1sbnNcIikgbmFtZSA9IG5hbWUuc2xpY2UoaSArIDEpO1xuICByZXR1cm4gbmFtZXNwYWNlcy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpID8ge3NwYWNlOiBuYW1lc3BhY2VzW3ByZWZpeF0sIGxvY2FsOiBuYW1lfSA6IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG59XG4iLCAiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi9uYW1lc3BhY2UuanNcIjtcbmltcG9ydCB7eGh0bWx9IGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRvckluaGVyaXQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50LFxuICAgICAgICB1cmkgPSB0aGlzLm5hbWVzcGFjZVVSSTtcbiAgICByZXR1cm4gdXJpID09PSB4aHRtbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB4aHRtbFxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModXJpLCBuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRvckZpeGVkKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIChmdWxsbmFtZS5sb2NhbFxuICAgICAgPyBjcmVhdG9yRml4ZWRcbiAgICAgIDogY3JlYXRvckluaGVyaXQpKGZ1bGxuYW1lKTtcbn1cbiIsICJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgIi8vIEdpdmVuIHNvbWV0aGluZyBhcnJheSBsaWtlIChvciBudWxsKSwgcmV0dXJucyBzb21ldGhpbmcgdGhhdCBpcyBzdHJpY3RseSBhblxuLy8gYXJyYXkuIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhcnJheS1saWtlIG9iamVjdHMgcGFzc2VkIHRvIGQzLnNlbGVjdEFsbFxuLy8gb3Igc2VsZWN0aW9uLnNlbGVjdEFsbCBhcmUgY29udmVydGVkIGludG8gcHJvcGVyIGFycmF5cyB3aGVuIGNyZWF0aW5nIGFcbi8vIHNlbGVjdGlvbjsgd2UgZG9uXHUyMDE5dCBldmVyIHdhbnQgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIGJhY2tlZCBieSBhIGxpdmVcbi8vIEhUTUxDb2xsZWN0aW9uIG9yIE5vZGVMaXN0LiBIb3dldmVyLCBub3RlIHRoYXQgc2VsZWN0aW9uLnNlbGVjdEFsbCB3aWxsIHVzZSBhXG4vLyBzdGF0aWMgTm9kZUxpc3QgYXMgYSBncm91cCwgc2luY2UgaXQgc2FmZWx5IGRlcml2ZWQgZnJvbSBxdWVyeVNlbGVjdG9yQWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXkoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHgpID8geCA6IEFycmF5LmZyb20oeCk7XG59XG4iLCAiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IGFycmF5IGZyb20gXCIuLi9hcnJheS5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yQWxsIGZyb20gXCIuLi9zZWxlY3RvckFsbC5qc1wiO1xuXG5mdW5jdGlvbiBhcnJheUFsbChzZWxlY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcnJheShzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCA9PT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBhcnJheUFsbChzZWxlY3QpO1xuICBlbHNlIHNlbGVjdCA9IHNlbGVjdG9yQWxsKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gW10sIHBhcmVudHMgPSBbXSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKTtcbiAgICAgICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgcGFyZW50cyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRNYXRjaGVyKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbiIsICJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbmQgPSBBcnJheS5wcm90b3R5cGUuZmluZDtcblxuZnVuY3Rpb24gY2hpbGRGaW5kKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmluZC5jYWxsKHRoaXMuY2hpbGRyZW4sIG1hdGNoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2hpbGRGaXJzdCgpIHtcbiAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChtYXRjaCA9PSBudWxsID8gY2hpbGRGaXJzdFxuICAgICAgOiBjaGlsZEZpbmQodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsICJpbXBvcnQge2NoaWxkTWF0Y2hlcn0gZnJvbSBcIi4uL21hdGNoZXIuanNcIjtcblxudmFyIGZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW5GaWx0ZXIobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLmNoaWxkcmVuLCBtYXRjaCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdEFsbChtYXRjaCA9PSBudWxsID8gY2hpbGRyZW5cbiAgICAgIDogY2hpbGRyZW5GaWx0ZXIodHlwZW9mIG1hdGNoID09PSBcImZ1bmN0aW9uXCIgPyBtYXRjaCA6IGNoaWxkTWF0Y2hlcihtYXRjaCkpKTtcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwgImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2VudGVyIHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRlck5vZGUocGFyZW50LCBkYXR1bSkge1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudDtcbiAgdGhpcy5uYW1lc3BhY2VVUkkgPSBwYXJlbnQubmFtZXNwYWNlVVJJO1xuICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fZGF0YV9fID0gZGF0dW07XG59XG5cbkVudGVyTm9kZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBFbnRlck5vZGUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbihjaGlsZCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5fbmV4dCk7IH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24oY2hpbGQsIG5leHQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIG5leHQpOyB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpOyB9XG59O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtFbnRlck5vZGV9IGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGJpbmRJbmRleChwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIG5vZGUsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZml0IGludG8gdXBkYXRlLlxuICAvLyBQdXQgYW55IG51bGwgbm9kZXMgaW50byBlbnRlci5cbiAgLy8gUHV0IGFueSByZW1haW5pbmcgZGF0YSBpbnRvIGVudGVyLlxuICBmb3IgKDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGRvblx1MjAxOXQgZml0IGludG8gZXhpdC5cbiAgZm9yICg7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRLZXkocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSwga2V5KSB7XG4gIHZhciBpLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVCeUtleVZhbHVlID0gbmV3IE1hcCxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAga2V5VmFsdWVzID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKSxcbiAgICAgIGtleVZhbHVlO1xuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBub2RlLlxuICAvLyBJZiBtdWx0aXBsZSBub2RlcyBoYXZlIHRoZSBzYW1lIGtleSwgdGhlIGR1cGxpY2F0ZXMgYXJlIGFkZGVkIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAga2V5VmFsdWVzW2ldID0ga2V5VmFsdWUgPSBrZXkuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkgKyBcIlwiO1xuICAgICAgaWYgKG5vZGVCeUtleVZhbHVlLmhhcyhrZXlWYWx1ZSkpIHtcbiAgICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlQnlLZXlWYWx1ZS5zZXQoa2V5VmFsdWUsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBkYXR1bS5cbiAgLy8gSWYgdGhlcmUgYSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleSwgam9pbiBhbmQgYWRkIGl0IHRvIHVwZGF0ZS5cbiAgLy8gSWYgdGhlcmUgaXMgbm90IChvciB0aGUga2V5IGlzIGEgZHVwbGljYXRlKSwgYWRkIGl0IHRvIGVudGVyLlxuICBmb3IgKGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAga2V5VmFsdWUgPSBrZXkuY2FsbChwYXJlbnQsIGRhdGFbaV0sIGksIGRhdGEpICsgXCJcIjtcbiAgICBpZiAobm9kZSA9IG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZSkpIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlLmRlbGV0ZShrZXlWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlc1tpXSkgPT09IG5vZGUpKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0dW0obm9kZSkge1xuICByZXR1cm4gbm9kZS5fX2RhdGFfXztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBBcnJheS5mcm9tKHRoaXMsIGRhdHVtKTtcblxuICB2YXIgYmluZCA9IGtleSA/IGJpbmRLZXkgOiBiaW5kSW5kZXgsXG4gICAgICBwYXJlbnRzID0gdGhpcy5fcGFyZW50cyxcbiAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gY29uc3RhbnQodmFsdWUpO1xuXG4gIGZvciAodmFyIG0gPSBncm91cHMubGVuZ3RoLCB1cGRhdGUgPSBuZXcgQXJyYXkobSksIGVudGVyID0gbmV3IEFycmF5KG0pLCBleGl0ID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW2pdLFxuICAgICAgICBncm91cCA9IGdyb3Vwc1tqXSxcbiAgICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICAgIGRhdGEgPSBhcnJheWxpa2UodmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpKSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBlbnRlckdyb3VwID0gZW50ZXJbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIHVwZGF0ZUdyb3VwID0gdXBkYXRlW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICBleGl0R3JvdXAgPSBleGl0W2pdID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKTtcblxuICAgIGJpbmQocGFyZW50LCBncm91cCwgZW50ZXJHcm91cCwgdXBkYXRlR3JvdXAsIGV4aXRHcm91cCwgZGF0YSwga2V5KTtcblxuICAgIC8vIE5vdyBjb25uZWN0IHRoZSBlbnRlciBub2RlcyB0byB0aGVpciBmb2xsb3dpbmcgdXBkYXRlIG5vZGUsIHN1Y2ggdGhhdFxuICAgIC8vIGFwcGVuZENoaWxkIGNhbiBpbnNlcnQgdGhlIG1hdGVyaWFsaXplZCBlbnRlciBub2RlIGJlZm9yZSB0aGlzIG5vZGUsXG4gICAgLy8gcmF0aGVyIHRoYW4gYXQgdGhlIGVuZCBvZiB0aGUgcGFyZW50IG5vZGUuXG4gICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDAsIHByZXZpb3VzLCBuZXh0OyBpMCA8IGRhdGFMZW5ndGg7ICsraTApIHtcbiAgICAgIGlmIChwcmV2aW91cyA9IGVudGVyR3JvdXBbaTBdKSB7XG4gICAgICAgIGlmIChpMCA+PSBpMSkgaTEgPSBpMCArIDE7XG4gICAgICAgIHdoaWxlICghKG5leHQgPSB1cGRhdGVHcm91cFtpMV0pICYmICsraTEgPCBkYXRhTGVuZ3RoKTtcbiAgICAgICAgcHJldmlvdXMuX25leHQgPSBuZXh0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlID0gbmV3IFNlbGVjdGlvbih1cGRhdGUsIHBhcmVudHMpO1xuICB1cGRhdGUuX2VudGVyID0gZW50ZXI7XG4gIHVwZGF0ZS5fZXhpdCA9IGV4aXQ7XG4gIHJldHVybiB1cGRhdGU7XG59XG5cbi8vIEdpdmVuIHNvbWUgZGF0YSwgdGhpcyByZXR1cm5zIGFuIGFycmF5LWxpa2UgdmlldyBvZiBpdDogYW4gb2JqZWN0IHRoYXRcbi8vIGV4cG9zZXMgYSBsZW5ndGggcHJvcGVydHkgYW5kIGFsbG93cyBudW1lcmljIGluZGV4aW5nLiBOb3RlIHRoYXQgdW5saWtlXG4vLyBzZWxlY3RBbGwsIHRoaXMgaXNuXHUyMDE5dCB3b3JyaWVkIGFib3V0IFx1MjAxQ2xpdmVcdTIwMUQgY29sbGVjdGlvbnMgYmVjYXVzZSB0aGUgcmVzdWx0aW5nXG4vLyBhcnJheSB3aWxsIG9ubHkgYmUgdXNlZCBicmllZmx5IHdoaWxlIGRhdGEgaXMgYmVpbmcgYm91bmQuIChJdCBpcyBwb3NzaWJsZSB0b1xuLy8gY2F1c2UgdGhlIGRhdGEgdG8gY2hhbmdlIHdoaWxlIGl0ZXJhdGluZyBieSB1c2luZyBhIGtleSBmdW5jdGlvbiwgYnV0IHBsZWFzZVxuLy8gZG9uXHUyMDE5dDsgd2VcdTIwMTlkIHJhdGhlciBhdm9pZCBhIGdyYXR1aXRvdXMgY29weS4pXG5mdW5jdGlvbiBhcnJheWxpa2UoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiBkYXRhXG4gICAgPyBkYXRhIC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbShkYXRhKTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cbiIsICJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob25lbnRlciwgb251cGRhdGUsIG9uZXhpdCkge1xuICB2YXIgZW50ZXIgPSB0aGlzLmVudGVyKCksIHVwZGF0ZSA9IHRoaXMsIGV4aXQgPSB0aGlzLmV4aXQoKTtcbiAgaWYgKHR5cGVvZiBvbmVudGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBlbnRlciA9IG9uZW50ZXIoZW50ZXIpO1xuICAgIGlmIChlbnRlcikgZW50ZXIgPSBlbnRlci5zZWxlY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRlciA9IGVudGVyLmFwcGVuZChvbmVudGVyICsgXCJcIik7XG4gIH1cbiAgaWYgKG9udXBkYXRlICE9IG51bGwpIHtcbiAgICB1cGRhdGUgPSBvbnVwZGF0ZSh1cGRhdGUpO1xuICAgIGlmICh1cGRhdGUpIHVwZGF0ZSA9IHVwZGF0ZS5zZWxlY3Rpb24oKTtcbiAgfVxuICBpZiAob25leGl0ID09IG51bGwpIGV4aXQucmVtb3ZlKCk7IGVsc2Ugb25leGl0KGV4aXQpO1xuICByZXR1cm4gZW50ZXIgJiYgdXBkYXRlID8gZW50ZXIubWVyZ2UodXBkYXRlKS5vcmRlcigpIDogdXBkYXRlO1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHZhciBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0O1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAtMSwgbSA9IGdyb3Vwcy5sZW5ndGg7ICsraiA8IG07KSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSBncm91cC5sZW5ndGggLSAxLCBuZXh0ID0gZ3JvdXBbaV0sIG5vZGU7IC0taSA+PSAwOykge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBpZiAobmV4dCAmJiBub2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5leHQpIF4gNCkgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQgc2l6ZSA9IDA7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSArK3NpemU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuIHNpemU7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5ub2RlKCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSAvLyBub2RlIGlzIGEgTm9kZVxuICAgICAgfHwgKG5vZGUuZG9jdW1lbnQgJiYgbm9kZSkgLy8gbm9kZSBpcyBhIFdpbmRvd1xuICAgICAgfHwgbm9kZS5kZWZhdWx0VmlldzsgLy8gbm9kZSBpcyBhIERvY3VtZW50XG59XG4iLCAiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsICJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsICJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cbiIsICJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwgImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuIiwgImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG4iLCAiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsICJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yLmpzXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yLmpzXCI7XG5cbmZ1bmN0aW9uIGNvbnN0YW50TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGJlZm9yZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpLFxuICAgICAgc2VsZWN0ID0gYmVmb3JlID09IG51bGwgPyBjb25zdGFudE51bGwgOiB0eXBlb2YgYmVmb3JlID09PSBcImZ1bmN0aW9uXCIgPyBiZWZvcmUgOiBzZWxlY3RvcihiZWZvcmUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCAiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCAiZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lU2hhbGxvdygpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUoZmFsc2UpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVlcCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZGVlcCA/IHNlbGVjdGlvbl9jbG9uZURlZXAgOiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIiwgdmFsdWUpXG4gICAgICA6IHRoaXMubm9kZSgpLl9fZGF0YV9fO1xufVxuIiwgImZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB0aGlzLl9fZGF0YV9fKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25SZW1vdmUodHlwZW5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbjtcbiAgICBpZiAoIW9uKSByZXR1cm47XG4gICAgZm9yICh2YXIgaiA9IDAsIGkgPSAtMSwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgaWYgKG8gPSBvbltqXSwgKCF0eXBlbmFtZS50eXBlIHx8IG8udHlwZSA9PT0gdHlwZW5hbWUudHlwZSkgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblsrK2ldID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCsraSkgb24ubGVuZ3RoID0gaTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9fb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uQWRkKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uLCBvLCBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcih2YWx1ZSk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5vcHRpb25zID0gb3B0aW9ucyk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIG9wdGlvbnM6IG9wdGlvbnN9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGRlZmF1bHRWaWV3KG5vZGUpLFxuICAgICAgZXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG5cbiAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZXZlbnQgPSBuZXcgZXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGlmIChwYXJhbXMpIGV2ZW50LmluaXRFdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUpLCBldmVudC5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICAgIGVsc2UgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaENvbnN0YW50KHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBkaXNwYXRjaEZ1bmN0aW9uXG4gICAgICA6IGRpc3BhdGNoQ29uc3RhbnQpKHR5cGUsIHBhcmFtcykpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHlpZWxkIG5vZGU7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQgZnJvbSBcIi4vc2VsZWN0Q2hpbGQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4gZnJvbSBcIi4vc2VsZWN0Q2hpbGRyZW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2pvaW4gZnJvbSBcIi4vam9pbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvci5qc1wiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9zZWxlY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBqb2luOiBzZWxlY3Rpb25fam9pbixcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc2VsZWN0aW9uLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX2l0ZXJhdG9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGxldCBzb3VyY2VFdmVudDtcbiAgd2hpbGUgKHNvdXJjZUV2ZW50ID0gZXZlbnQuc291cmNlRXZlbnQpIGV2ZW50ID0gc291cmNlRXZlbnQ7XG4gIHJldHVybiBldmVudDtcbn1cbiIsICJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQsIG5vZGUpIHtcbiAgZXZlbnQgPSBzb3VyY2VFdmVudChldmVudCk7XG4gIGlmIChub2RlID09PSB1bmRlZmluZWQpIG5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBpZiAobm9kZSkge1xuICAgIHZhciBzdmcgPSBub2RlLm93bmVyU1ZHRWxlbWVudCB8fCBub2RlO1xuICAgIGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcbiAgICAgIHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuICAgICAgcG9pbnQueCA9IGV2ZW50LmNsaWVudFgsIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xuICAgICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obm9kZS5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgICAgcmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcbiAgICB9XG4gICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4gW2V2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgLSBub2RlLmNsaWVudExlZnQsIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCAtIG5vZGUuY2xpZW50VG9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtldmVudC5wYWdlWCwgZXZlbnQucGFnZVldO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIG5vZGVzLCBzdHJlbmd0aCA9IDE7XG5cbiAgaWYgKHggPT0gbnVsbCkgeCA9IDA7XG4gIGlmICh5ID09IG51bGwpIHkgPSAwO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKCkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBub2RlLFxuICAgICAgICBzeCA9IDAsXG4gICAgICAgIHN5ID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgc3ggKz0gbm9kZS54LCBzeSArPSBub2RlLnk7XG4gICAgfVxuXG4gICAgZm9yIChzeCA9IChzeCAvIG4gLSB4KSAqIHN0cmVuZ3RoLCBzeSA9IChzeSAvIG4gLSB5KSAqIHN0cmVuZ3RoLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLnggLT0gc3gsIG5vZGUueSAtPSBzeTtcbiAgICB9XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oXykge1xuICAgIG5vZGVzID0gXztcbiAgfTtcblxuICBmb3JjZS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSArXywgZm9yY2UpIDogeDtcbiAgfTtcblxuICBmb3JjZS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSArXywgZm9yY2UpIDogeTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9ICtfLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICBjb25zdCB4ID0gK3RoaXMuX3guY2FsbChudWxsLCBkKSxcbiAgICAgIHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpO1xuICByZXR1cm4gYWRkKHRoaXMuY292ZXIoeCwgeSksIHgsIHksIGQpO1xufVxuXG5mdW5jdGlvbiBhZGQodHJlZSwgeCwgeSwgZCkge1xuICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybiB0cmVlOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgcGFyZW50LFxuICAgICAgbm9kZSA9IHRyZWUuX3Jvb3QsXG4gICAgICBsZWFmID0ge2RhdGE6IGR9LFxuICAgICAgeDAgPSB0cmVlLl94MCxcbiAgICAgIHkwID0gdHJlZS5feTAsXG4gICAgICB4MSA9IHRyZWUuX3gxLFxuICAgICAgeTEgPSB0cmVlLl95MSxcbiAgICAgIHhtLFxuICAgICAgeW0sXG4gICAgICB4cCxcbiAgICAgIHlwLFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b20sXG4gICAgICBpLFxuICAgICAgajtcblxuICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgaW5pdGlhbGl6ZSB0aGUgcm9vdCBhcyBhIGxlYWYuXG4gIGlmICghbm9kZSkgcmV0dXJuIHRyZWUuX3Jvb3QgPSBsZWFmLCB0cmVlO1xuXG4gIC8vIEZpbmQgdGhlIGV4aXN0aW5nIGxlYWYgZm9yIHRoZSBuZXcgcG9pbnQsIG9yIGFkZCBpdC5cbiAgd2hpbGUgKG5vZGUubGVuZ3RoKSB7XG4gICAgaWYgKHJpZ2h0ID0geCA+PSAoeG0gPSAoeDAgKyB4MSkgLyAyKSkgeDAgPSB4bTsgZWxzZSB4MSA9IHhtO1xuICAgIGlmIChib3R0b20gPSB5ID49ICh5bSA9ICh5MCArIHkxKSAvIDIpKSB5MCA9IHltOyBlbHNlIHkxID0geW07XG4gICAgaWYgKHBhcmVudCA9IG5vZGUsICEobm9kZSA9IG5vZGVbaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHRdKSkgcmV0dXJuIHBhcmVudFtpXSA9IGxlYWYsIHRyZWU7XG4gIH1cblxuICAvLyBJcyB0aGUgbmV3IHBvaW50IGlzIGV4YWN0bHkgY29pbmNpZGVudCB3aXRoIHRoZSBleGlzdGluZyBwb2ludD9cbiAgeHAgPSArdHJlZS5feC5jYWxsKG51bGwsIG5vZGUuZGF0YSk7XG4gIHlwID0gK3RyZWUuX3kuY2FsbChudWxsLCBub2RlLmRhdGEpO1xuICBpZiAoeCA9PT0geHAgJiYgeSA9PT0geXApIHJldHVybiBsZWFmLm5leHQgPSBub2RlLCBwYXJlbnQgPyBwYXJlbnRbaV0gPSBsZWFmIDogdHJlZS5fcm9vdCA9IGxlYWYsIHRyZWU7XG5cbiAgLy8gT3RoZXJ3aXNlLCBzcGxpdCB0aGUgbGVhZiBub2RlIHVudGlsIHRoZSBvbGQgYW5kIG5ldyBwb2ludCBhcmUgc2VwYXJhdGVkLlxuICBkbyB7XG4gICAgcGFyZW50ID0gcGFyZW50ID8gcGFyZW50W2ldID0gbmV3IEFycmF5KDQpIDogdHJlZS5fcm9vdCA9IG5ldyBBcnJheSg0KTtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgfSB3aGlsZSAoKGkgPSBib3R0b20gPDwgMSB8IHJpZ2h0KSA9PT0gKGogPSAoeXAgPj0geW0pIDw8IDEgfCAoeHAgPj0geG0pKSk7XG4gIHJldHVybiBwYXJlbnRbal0gPSBub2RlLCBwYXJlbnRbaV0gPSBsZWFmLCB0cmVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWxsKGRhdGEpIHtcbiAgdmFyIGQsIGksIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeHogPSBuZXcgQXJyYXkobiksXG4gICAgICB5eiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHgwID0gSW5maW5pdHksXG4gICAgICB5MCA9IEluZmluaXR5LFxuICAgICAgeDEgPSAtSW5maW5pdHksXG4gICAgICB5MSA9IC1JbmZpbml0eTtcblxuICAvLyBDb21wdXRlIHRoZSBwb2ludHMgYW5kIHRoZWlyIGV4dGVudC5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGlmIChpc05hTih4ID0gK3RoaXMuX3guY2FsbChudWxsLCBkID0gZGF0YVtpXSkpIHx8IGlzTmFOKHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpKSkgY29udGludWU7XG4gICAgeHpbaV0gPSB4O1xuICAgIHl6W2ldID0geTtcbiAgICBpZiAoeCA8IHgwKSB4MCA9IHg7XG4gICAgaWYgKHggPiB4MSkgeDEgPSB4O1xuICAgIGlmICh5IDwgeTApIHkwID0geTtcbiAgICBpZiAoeSA+IHkxKSB5MSA9IHk7XG4gIH1cblxuICAvLyBJZiB0aGVyZSB3ZXJlIG5vICh2YWxpZCkgcG9pbnRzLCBhYm9ydC5cbiAgaWYgKHgwID4geDEgfHwgeTAgPiB5MSkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gRXhwYW5kIHRoZSB0cmVlIHRvIGNvdmVyIHRoZSBuZXcgcG9pbnRzLlxuICB0aGlzLmNvdmVyKHgwLCB5MCkuY292ZXIoeDEsIHkxKTtcblxuICAvLyBBZGQgdGhlIG5ldyBwb2ludHMuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBhZGQodGhpcywgeHpbaV0sIHl6W2ldLCBkYXRhW2ldKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHkpIHtcbiAgaWYgKGlzTmFOKHggPSAreCkgfHwgaXNOYU4oeSA9ICt5KSkgcmV0dXJuIHRoaXM7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxID0gdGhpcy5feDEsXG4gICAgICB5MSA9IHRoaXMuX3kxO1xuXG4gIC8vIElmIHRoZSBxdWFkdHJlZSBoYXMgbm8gZXh0ZW50LCBpbml0aWFsaXplIHRoZW0uXG4gIC8vIEludGVnZXIgZXh0ZW50IGFyZSBuZWNlc3Nhcnkgc28gdGhhdCBpZiB3ZSBsYXRlciBkb3VibGUgdGhlIGV4dGVudCxcbiAgLy8gdGhlIGV4aXN0aW5nIHF1YWRyYW50IGJvdW5kYXJpZXMgZG9uXHUyMDE5dCBjaGFuZ2UgZHVlIHRvIGZsb2F0aW5nIHBvaW50IGVycm9yIVxuICBpZiAoaXNOYU4oeDApKSB7XG4gICAgeDEgPSAoeDAgPSBNYXRoLmZsb29yKHgpKSArIDE7XG4gICAgeTEgPSAoeTAgPSBNYXRoLmZsb29yKHkpKSArIDE7XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIGRvdWJsZSByZXBlYXRlZGx5IHRvIGNvdmVyLlxuICBlbHNlIHtcbiAgICB2YXIgeiA9IHgxIC0geDAgfHwgMSxcbiAgICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgaTtcblxuICAgIHdoaWxlICh4MCA+IHggfHwgeCA+PSB4MSB8fCB5MCA+IHkgfHwgeSA+PSB5MSkge1xuICAgICAgaSA9ICh5IDwgeTApIDw8IDEgfCAoeCA8IHgwKTtcbiAgICAgIHBhcmVudCA9IG5ldyBBcnJheSg0KSwgcGFyZW50W2ldID0gbm9kZSwgbm9kZSA9IHBhcmVudCwgeiAqPSAyO1xuICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgIGNhc2UgMDogeDEgPSB4MCArIHosIHkxID0geTAgKyB6OyBicmVhaztcbiAgICAgICAgY2FzZSAxOiB4MCA9IHgxIC0geiwgeTEgPSB5MCArIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IHgxID0geDAgKyB6LCB5MCA9IHkxIC0gejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogeDAgPSB4MSAtIHosIHkwID0geTEgLSB6OyBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm9vdCAmJiB0aGlzLl9yb290Lmxlbmd0aCkgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH1cblxuICB0aGlzLl94MCA9IHgwO1xuICB0aGlzLl95MCA9IHkwO1xuICB0aGlzLl94MSA9IHgxO1xuICB0aGlzLl95MSA9IHkxO1xuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdGhpcy52aXNpdChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgZG8gZGF0YS5wdXNoKG5vZGUuZGF0YSk7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmNvdmVyKCtfWzBdWzBdLCArX1swXVsxXSkuY292ZXIoK19bMV1bMF0sICtfWzFdWzFdKVxuICAgICAgOiBpc05hTih0aGlzLl94MCkgPyB1bmRlZmluZWQgOiBbW3RoaXMuX3gwLCB0aGlzLl95MF0sIFt0aGlzLl94MSwgdGhpcy5feTFdXTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB4MCwgeTAsIHgxLCB5MSkge1xuICB0aGlzLm5vZGUgPSBub2RlO1xuICB0aGlzLngwID0geDA7XG4gIHRoaXMueTAgPSB5MDtcbiAgdGhpcy54MSA9IHgxO1xuICB0aGlzLnkxID0geTE7XG59XG4iLCAiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5LCByYWRpdXMpIHtcbiAgdmFyIGRhdGEsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxLFxuICAgICAgeTEsXG4gICAgICB4MixcbiAgICAgIHkyLFxuICAgICAgeDMgPSB0aGlzLl94MSxcbiAgICAgIHkzID0gdGhpcy5feTEsXG4gICAgICBxdWFkcyA9IFtdLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBxLFxuICAgICAgaTtcblxuICBpZiAobm9kZSkgcXVhZHMucHVzaChuZXcgUXVhZChub2RlLCB4MCwgeTAsIHgzLCB5MykpO1xuICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICBlbHNlIHtcbiAgICB4MCA9IHggLSByYWRpdXMsIHkwID0geSAtIHJhZGl1cztcbiAgICB4MyA9IHggKyByYWRpdXMsIHkzID0geSArIHJhZGl1cztcbiAgICByYWRpdXMgKj0gcmFkaXVzO1xuICB9XG5cbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuXG4gICAgLy8gU3RvcCBzZWFyY2hpbmcgaWYgdGhpcyBxdWFkcmFudCBjYW5cdTIwMTl0IGNvbnRhaW4gYSBjbG9zZXIgbm9kZS5cbiAgICBpZiAoIShub2RlID0gcS5ub2RlKVxuICAgICAgICB8fCAoeDEgPSBxLngwKSA+IHgzXG4gICAgICAgIHx8ICh5MSA9IHEueTApID4geTNcbiAgICAgICAgfHwgKHgyID0gcS54MSkgPCB4MFxuICAgICAgICB8fCAoeTIgPSBxLnkxKSA8IHkwKSBjb250aW51ZTtcblxuICAgIC8vIEJpc2VjdCB0aGUgY3VycmVudCBxdWFkcmFudC5cbiAgICBpZiAobm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgeW0gPSAoeTEgKyB5MikgLyAyO1xuXG4gICAgICBxdWFkcy5wdXNoKFxuICAgICAgICBuZXcgUXVhZChub2RlWzNdLCB4bSwgeW0sIHgyLCB5MiksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMl0sIHgxLCB5bSwgeG0sIHkyKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVsxXSwgeG0sIHkxLCB4MiwgeW0pLFxuICAgICAgICBuZXcgUXVhZChub2RlWzBdLCB4MSwgeTEsIHhtLCB5bSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFZpc2l0IHRoZSBjbG9zZXN0IHF1YWRyYW50IGZpcnN0LlxuICAgICAgaWYgKGkgPSAoeSA+PSB5bSkgPDwgMSB8ICh4ID49IHhtKSkge1xuICAgICAgICBxID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHF1YWRzW3F1YWRzLmxlbmd0aCAtIDFdID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICBxdWFkc1txdWFkcy5sZW5ndGggLSAxIC0gaV0gPSBxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZpc2l0IHRoaXMgcG9pbnQuIChWaXNpdGluZyBjb2luY2lkZW50IHBvaW50cyBpc25cdTIwMTl0IG5lY2Vzc2FyeSEpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgZHggPSB4IC0gK3RoaXMuX3guY2FsbChudWxsLCBub2RlLmRhdGEpLFxuICAgICAgICAgIGR5ID0geSAtICt0aGlzLl95LmNhbGwobnVsbCwgbm9kZS5kYXRhKSxcbiAgICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgaWYgKGQyIDwgcmFkaXVzKSB7XG4gICAgICAgIHZhciBkID0gTWF0aC5zcXJ0KHJhZGl1cyA9IGQyKTtcbiAgICAgICAgeDAgPSB4IC0gZCwgeTAgPSB5IC0gZDtcbiAgICAgICAgeDMgPSB4ICsgZCwgeTMgPSB5ICsgZDtcbiAgICAgICAgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIGlmIChpc05hTih4ID0gK3RoaXMuX3guY2FsbChudWxsLCBkKSkgfHwgaXNOYU4oeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCkpKSByZXR1cm4gdGhpczsgLy8gaWdub3JlIGludmFsaWQgcG9pbnRzXG5cbiAgdmFyIHBhcmVudCxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgcmV0YWluZXIsXG4gICAgICBwcmV2aW91cyxcbiAgICAgIG5leHQsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxID0gdGhpcy5feDEsXG4gICAgICB5MSA9IHRoaXMuX3kxLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB4bSxcbiAgICAgIHltLFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b20sXG4gICAgICBpLFxuICAgICAgajtcblxuICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgaW5pdGlhbGl6ZSB0aGUgcm9vdCBhcyBhIGxlYWYuXG4gIGlmICghbm9kZSkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gRmluZCB0aGUgbGVhZiBub2RlIGZvciB0aGUgcG9pbnQuXG4gIC8vIFdoaWxlIGRlc2NlbmRpbmcsIGFsc28gcmV0YWluIHRoZSBkZWVwZXN0IHBhcmVudCB3aXRoIGEgbm9uLXJlbW92ZWQgc2libGluZy5cbiAgaWYgKG5vZGUubGVuZ3RoKSB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICAgIGlmICghKHBhcmVudCA9IG5vZGUsIG5vZGUgPSBub2RlW2kgPSBib3R0b20gPDwgMSB8IHJpZ2h0XSkpIHJldHVybiB0aGlzO1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGJyZWFrO1xuICAgIGlmIChwYXJlbnRbKGkgKyAxKSAmIDNdIHx8IHBhcmVudFsoaSArIDIpICYgM10gfHwgcGFyZW50WyhpICsgMykgJiAzXSkgcmV0YWluZXIgPSBwYXJlbnQsIGogPSBpO1xuICB9XG5cbiAgLy8gRmluZCB0aGUgcG9pbnQgdG8gcmVtb3ZlLlxuICB3aGlsZSAobm9kZS5kYXRhICE9PSBkKSBpZiAoIShwcmV2aW91cyA9IG5vZGUsIG5vZGUgPSBub2RlLm5leHQpKSByZXR1cm4gdGhpcztcbiAgaWYgKG5leHQgPSBub2RlLm5leHQpIGRlbGV0ZSBub2RlLm5leHQ7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvaW5jaWRlbnQgcG9pbnRzLCByZW1vdmUganVzdCB0aGUgcG9pbnQuXG4gIGlmIChwcmV2aW91cykgcmV0dXJuIChuZXh0ID8gcHJldmlvdXMubmV4dCA9IG5leHQgOiBkZWxldGUgcHJldmlvdXMubmV4dCksIHRoaXM7XG5cbiAgLy8gSWYgdGhpcyBpcyB0aGUgcm9vdCBwb2ludCwgcmVtb3ZlIGl0LlxuICBpZiAoIXBhcmVudCkgcmV0dXJuIHRoaXMuX3Jvb3QgPSBuZXh0LCB0aGlzO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlYWYuXG4gIG5leHQgPyBwYXJlbnRbaV0gPSBuZXh0IDogZGVsZXRlIHBhcmVudFtpXTtcblxuICAvLyBJZiB0aGUgcGFyZW50IG5vdyBjb250YWlucyBleGFjdGx5IG9uZSBsZWFmLCBjb2xsYXBzZSBzdXBlcmZsdW91cyBwYXJlbnRzLlxuICBpZiAoKG5vZGUgPSBwYXJlbnRbMF0gfHwgcGFyZW50WzFdIHx8IHBhcmVudFsyXSB8fCBwYXJlbnRbM10pXG4gICAgICAmJiBub2RlID09PSAocGFyZW50WzNdIHx8IHBhcmVudFsyXSB8fCBwYXJlbnRbMV0gfHwgcGFyZW50WzBdKVxuICAgICAgJiYgIW5vZGUubGVuZ3RoKSB7XG4gICAgaWYgKHJldGFpbmVyKSByZXRhaW5lcltqXSA9IG5vZGU7XG4gICAgZWxzZSB0aGlzLl9yb290ID0gbm9kZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsKGRhdGEpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBkYXRhLmxlbmd0aDsgaSA8IG47ICsraSkgdGhpcy5yZW1vdmUoZGF0YVtpXSk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fcm9vdDtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSAwO1xuICB0aGlzLnZpc2l0KGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBkbyArK3NpemU7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iLCAiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgcSwgbm9kZSA9IHRoaXMuX3Jvb3QsIGNoaWxkLCB4MCwgeTAsIHgxLCB5MTtcbiAgaWYgKG5vZGUpIHF1YWRzLnB1c2gobmV3IFF1YWQobm9kZSwgdGhpcy5feDAsIHRoaXMuX3kwLCB0aGlzLl94MSwgdGhpcy5feTEpKTtcbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuICAgIGlmICghY2FsbGJhY2sobm9kZSA9IHEubm9kZSwgeDAgPSBxLngwLCB5MCA9IHEueTAsIHgxID0gcS54MSwgeTEgPSBxLnkxKSAmJiBub2RlLmxlbmd0aCkge1xuICAgICAgdmFyIHhtID0gKHgwICsgeDEpIC8gMiwgeW0gPSAoeTAgKyB5MSkgLyAyO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVszXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHltLCB4MSwgeTEpKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzFdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeTAsIHgxLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVswXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeDAsIHkwLCB4bSwgeW0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgbmV4dCA9IFtdLCBxO1xuICBpZiAodGhpcy5fcm9vdCkgcXVhZHMucHVzaChuZXcgUXVhZCh0aGlzLl9yb290LCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSkpO1xuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG4gICAgdmFyIG5vZGUgPSBxLm5vZGU7XG4gICAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSwgeG0gPSAoeDAgKyB4MSkgLyAyLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzBdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeTAsIHhtLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzNdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeW0sIHgxLCB5MSkpO1xuICAgIH1cbiAgICBuZXh0LnB1c2gocSk7XG4gIH1cbiAgd2hpbGUgKHEgPSBuZXh0LnBvcCgpKSB7XG4gICAgY2FsbGJhY2socS5ub2RlLCBxLngwLCBxLnkwLCBxLngxLCBxLnkxKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdFgoZCkge1xuICByZXR1cm4gZFswXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGlzLl94ID0gXywgdGhpcykgOiB0aGlzLl94O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WShkKSB7XG4gIHJldHVybiBkWzFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoaXMuX3kgPSBfLCB0aGlzKSA6IHRoaXMuX3k7XG59XG4iLCAiaW1wb3J0IHRyZWVfYWRkLCB7YWRkQWxsIGFzIHRyZWVfYWRkQWxsfSBmcm9tIFwiLi9hZGQuanNcIjtcbmltcG9ydCB0cmVlX2NvdmVyIGZyb20gXCIuL2NvdmVyLmpzXCI7XG5pbXBvcnQgdHJlZV9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCB0cmVlX2V4dGVudCBmcm9tIFwiLi9leHRlbnQuanNcIjtcbmltcG9ydCB0cmVlX2ZpbmQgZnJvbSBcIi4vZmluZC5qc1wiO1xuaW1wb3J0IHRyZWVfcmVtb3ZlLCB7cmVtb3ZlQWxsIGFzIHRyZWVfcmVtb3ZlQWxsfSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCB0cmVlX3Jvb3QgZnJvbSBcIi4vcm9vdC5qc1wiO1xuaW1wb3J0IHRyZWVfc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgdHJlZV92aXNpdCBmcm9tIFwiLi92aXNpdC5qc1wiO1xuaW1wb3J0IHRyZWVfdmlzaXRBZnRlciBmcm9tIFwiLi92aXNpdEFmdGVyLmpzXCI7XG5pbXBvcnQgdHJlZV94LCB7ZGVmYXVsdFh9IGZyb20gXCIuL3guanNcIjtcbmltcG9ydCB0cmVlX3ksIHtkZWZhdWx0WX0gZnJvbSBcIi4veS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFkdHJlZShub2RlcywgeCwgeSkge1xuICB2YXIgdHJlZSA9IG5ldyBRdWFkdHJlZSh4ID09IG51bGwgPyBkZWZhdWx0WCA6IHgsIHkgPT0gbnVsbCA/IGRlZmF1bHRZIDogeSwgTmFOLCBOYU4sIE5hTiwgTmFOKTtcbiAgcmV0dXJuIG5vZGVzID09IG51bGwgPyB0cmVlIDogdHJlZS5hZGRBbGwobm9kZXMpO1xufVxuXG5mdW5jdGlvbiBRdWFkdHJlZSh4LCB5LCB4MCwgeTAsIHgxLCB5MSkge1xuICB0aGlzLl94ID0geDtcbiAgdGhpcy5feSA9IHk7XG4gIHRoaXMuX3gwID0geDA7XG4gIHRoaXMuX3kwID0geTA7XG4gIHRoaXMuX3gxID0geDE7XG4gIHRoaXMuX3kxID0geTE7XG4gIHRoaXMuX3Jvb3QgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGxlYWZfY29weShsZWFmKSB7XG4gIHZhciBjb3B5ID0ge2RhdGE6IGxlYWYuZGF0YX0sIG5leHQgPSBjb3B5O1xuICB3aGlsZSAobGVhZiA9IGxlYWYubmV4dCkgbmV4dCA9IG5leHQubmV4dCA9IHtkYXRhOiBsZWFmLmRhdGF9O1xuICByZXR1cm4gY29weTtcbn1cblxudmFyIHRyZWVQcm90byA9IHF1YWR0cmVlLnByb3RvdHlwZSA9IFF1YWR0cmVlLnByb3RvdHlwZTtcblxudHJlZVByb3RvLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNvcHkgPSBuZXcgUXVhZHRyZWUodGhpcy5feCwgdGhpcy5feSwgdGhpcy5feDAsIHRoaXMuX3kwLCB0aGlzLl94MSwgdGhpcy5feTEpLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBub2RlcyxcbiAgICAgIGNoaWxkO1xuXG4gIGlmICghbm9kZSkgcmV0dXJuIGNvcHk7XG5cbiAgaWYgKCFub2RlLmxlbmd0aCkgcmV0dXJuIGNvcHkuX3Jvb3QgPSBsZWFmX2NvcHkobm9kZSksIGNvcHk7XG5cbiAgbm9kZXMgPSBbe3NvdXJjZTogbm9kZSwgdGFyZ2V0OiBjb3B5Ll9yb290ID0gbmV3IEFycmF5KDQpfV07XG4gIHdoaWxlIChub2RlID0gbm9kZXMucG9wKCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgaWYgKGNoaWxkID0gbm9kZS5zb3VyY2VbaV0pIHtcbiAgICAgICAgaWYgKGNoaWxkLmxlbmd0aCkgbm9kZXMucHVzaCh7c291cmNlOiBjaGlsZCwgdGFyZ2V0OiBub2RlLnRhcmdldFtpXSA9IG5ldyBBcnJheSg0KX0pO1xuICAgICAgICBlbHNlIG5vZGUudGFyZ2V0W2ldID0gbGVhZl9jb3B5KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weTtcbn07XG5cbnRyZWVQcm90by5hZGQgPSB0cmVlX2FkZDtcbnRyZWVQcm90by5hZGRBbGwgPSB0cmVlX2FkZEFsbDtcbnRyZWVQcm90by5jb3ZlciA9IHRyZWVfY292ZXI7XG50cmVlUHJvdG8uZGF0YSA9IHRyZWVfZGF0YTtcbnRyZWVQcm90by5leHRlbnQgPSB0cmVlX2V4dGVudDtcbnRyZWVQcm90by5maW5kID0gdHJlZV9maW5kO1xudHJlZVByb3RvLnJlbW92ZSA9IHRyZWVfcmVtb3ZlO1xudHJlZVByb3RvLnJlbW92ZUFsbCA9IHRyZWVfcmVtb3ZlQWxsO1xudHJlZVByb3RvLnJvb3QgPSB0cmVlX3Jvb3Q7XG50cmVlUHJvdG8uc2l6ZSA9IHRyZWVfc2l6ZTtcbnRyZWVQcm90by52aXNpdCA9IHRyZWVfdmlzaXQ7XG50cmVlUHJvdG8udmlzaXRBZnRlciA9IHRyZWVfdmlzaXRBZnRlcjtcbnRyZWVQcm90by54ID0gdHJlZV94O1xudHJlZVByb3RvLnkgPSB0cmVlX3k7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmFuZG9tKSB7XG4gIHJldHVybiAocmFuZG9tKCkgLSAwLjUpICogMWUtNjtcbn1cbiIsICJpbXBvcnQge3F1YWR0cmVlfSBmcm9tIFwiZDMtcXVhZHRyZWVcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcblxuZnVuY3Rpb24geChkKSB7XG4gIHJldHVybiBkLnggKyBkLnZ4O1xufVxuXG5mdW5jdGlvbiB5KGQpIHtcbiAgcmV0dXJuIGQueSArIGQudnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhZGl1cykge1xuICB2YXIgbm9kZXMsXG4gICAgICByYWRpaSxcbiAgICAgIHJhbmRvbSxcbiAgICAgIHN0cmVuZ3RoID0gMSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmICh0eXBlb2YgcmFkaXVzICE9PSBcImZ1bmN0aW9uXCIpIHJhZGl1cyA9IGNvbnN0YW50KHJhZGl1cyA9PSBudWxsID8gMSA6ICtyYWRpdXMpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKCkge1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICB0cmVlLFxuICAgICAgICBub2RlLFxuICAgICAgICB4aSxcbiAgICAgICAgeWksXG4gICAgICAgIHJpLFxuICAgICAgICByaTI7XG5cbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGl0ZXJhdGlvbnM7ICsraykge1xuICAgICAgdHJlZSA9IHF1YWR0cmVlKG5vZGVzLCB4LCB5KS52aXNpdEFmdGVyKHByZXBhcmUpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHJpID0gcmFkaWlbbm9kZS5pbmRleF0sIHJpMiA9IHJpICogcmk7XG4gICAgICAgIHhpID0gbm9kZS54ICsgbm9kZS52eDtcbiAgICAgICAgeWkgPSBub2RlLnkgKyBub2RlLnZ5O1xuICAgICAgICB0cmVlLnZpc2l0KGFwcGx5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseShxdWFkLCB4MCwgeTAsIHgxLCB5MSkge1xuICAgICAgdmFyIGRhdGEgPSBxdWFkLmRhdGEsIHJqID0gcXVhZC5yLCByID0gcmkgKyByajtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmluZGV4ID4gbm9kZS5pbmRleCkge1xuICAgICAgICAgIHZhciB4ID0geGkgLSBkYXRhLnggLSBkYXRhLnZ4LFxuICAgICAgICAgICAgICB5ID0geWkgLSBkYXRhLnkgLSBkYXRhLnZ5LFxuICAgICAgICAgICAgICBsID0geCAqIHggKyB5ICogeTtcbiAgICAgICAgICBpZiAobCA8IHIgKiByKSB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkgeCA9IGppZ2dsZShyYW5kb20pLCBsICs9IHggKiB4O1xuICAgICAgICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgICAgICAgIGwgPSAociAtIChsID0gTWF0aC5zcXJ0KGwpKSkgLyBsICogc3RyZW5ndGg7XG4gICAgICAgICAgICBub2RlLnZ4ICs9ICh4ICo9IGwpICogKHIgPSAocmogKj0gcmopIC8gKHJpMiArIHJqKSk7XG4gICAgICAgICAgICBub2RlLnZ5ICs9ICh5ICo9IGwpICogcjtcbiAgICAgICAgICAgIGRhdGEudnggLT0geCAqIChyID0gMSAtIHIpO1xuICAgICAgICAgICAgZGF0YS52eSAtPSB5ICogcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHgwID4geGkgKyByIHx8IHgxIDwgeGkgLSByIHx8IHkwID4geWkgKyByIHx8IHkxIDwgeWkgLSByO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmUocXVhZCkge1xuICAgIGlmIChxdWFkLmRhdGEpIHJldHVybiBxdWFkLnIgPSByYWRpaVtxdWFkLmRhdGEuaW5kZXhdO1xuICAgIGZvciAodmFyIGkgPSBxdWFkLnIgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBpZiAocXVhZFtpXSAmJiBxdWFkW2ldLnIgPiBxdWFkLnIpIHtcbiAgICAgICAgcXVhZC5yID0gcXVhZFtpXS5yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuICAgIHJhZGlpID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgcmFkaWlbbm9kZS5pbmRleF0gPSArcmFkaXVzKG5vZGUsIGksIG5vZGVzKTtcbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9ICtfLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5yYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogcmFkaXVzO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGluZGV4KGQpIHtcbiAgcmV0dXJuIGQuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmQobm9kZUJ5SWQsIG5vZGVJZCkge1xuICB2YXIgbm9kZSA9IG5vZGVCeUlkLmdldChub2RlSWQpO1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcihcIm5vZGUgbm90IGZvdW5kOiBcIiArIG5vZGVJZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsaW5rcykge1xuICB2YXIgaWQgPSBpbmRleCxcbiAgICAgIHN0cmVuZ3RoID0gZGVmYXVsdFN0cmVuZ3RoLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgZGlzdGFuY2UgPSBjb25zdGFudCgzMCksXG4gICAgICBkaXN0YW5jZXMsXG4gICAgICBub2RlcyxcbiAgICAgIGNvdW50LFxuICAgICAgYmlhcyxcbiAgICAgIHJhbmRvbSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmIChsaW5rcyA9PSBudWxsKSBsaW5rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRlZmF1bHRTdHJlbmd0aChsaW5rKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLm1pbihjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0sIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGsgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGluaywgc291cmNlLCB0YXJnZXQsIHgsIHksIGwsIGI7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbGluayA9IGxpbmtzW2ldLCBzb3VyY2UgPSBsaW5rLnNvdXJjZSwgdGFyZ2V0ID0gbGluay50YXJnZXQ7XG4gICAgICAgIHggPSB0YXJnZXQueCArIHRhcmdldC52eCAtIHNvdXJjZS54IC0gc291cmNlLnZ4IHx8IGppZ2dsZShyYW5kb20pO1xuICAgICAgICB5ID0gdGFyZ2V0LnkgKyB0YXJnZXQudnkgLSBzb3VyY2UueSAtIHNvdXJjZS52eSB8fCBqaWdnbGUocmFuZG9tKTtcbiAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgbCA9IChsIC0gZGlzdGFuY2VzW2ldKSAvIGwgKiBhbHBoYSAqIHN0cmVuZ3Roc1tpXTtcbiAgICAgICAgeCAqPSBsLCB5ICo9IGw7XG4gICAgICAgIHRhcmdldC52eCAtPSB4ICogKGIgPSBiaWFzW2ldKTtcbiAgICAgICAgdGFyZ2V0LnZ5IC09IHkgKiBiO1xuICAgICAgICBzb3VyY2UudnggKz0geCAqIChiID0gMSAtIGIpO1xuICAgICAgICBzb3VyY2UudnkgKz0geSAqIGI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbSA9IGxpbmtzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKSxcbiAgICAgICAgbGluaztcblxuICAgIGZvciAoaSA9IDAsIGNvdW50ID0gbmV3IEFycmF5KG4pOyBpIDwgbTsgKytpKSB7XG4gICAgICBsaW5rID0gbGlua3NbaV0sIGxpbmsuaW5kZXggPSBpO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rLnNvdXJjZSAhPT0gXCJvYmplY3RcIikgbGluay5zb3VyY2UgPSBmaW5kKG5vZGVCeUlkLCBsaW5rLnNvdXJjZSk7XG4gICAgICBpZiAodHlwZW9mIGxpbmsudGFyZ2V0ICE9PSBcIm9iamVjdFwiKSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIGxpbmsudGFyZ2V0KTtcbiAgICAgIGNvdW50W2xpbmsuc291cmNlLmluZGV4XSA9IChjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gfHwgMCkgKyAxO1xuICAgICAgY291bnRbbGluay50YXJnZXQuaW5kZXhdID0gKGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgYmlhcyA9IG5ldyBBcnJheShtKTsgaSA8IG07ICsraSkge1xuICAgICAgbGluayA9IGxpbmtzW2ldLCBiaWFzW2ldID0gY291bnRbbGluay5zb3VyY2UuaW5kZXhdIC8gKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSArIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gICAgfVxuXG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG0pLCBpbml0aWFsaXplU3RyZW5ndGgoKTtcbiAgICBkaXN0YW5jZXMgPSBuZXcgQXJyYXkobSksIGluaXRpYWxpemVEaXN0YW5jZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0cmVuZ3RoKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSArc3RyZW5ndGgobGlua3NbaV0sIGksIGxpbmtzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplRGlzdGFuY2UoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGRpc3RhbmNlc1tpXSA9ICtkaXN0YW5jZShsaW5rc1tpXSwgaSwgbGlua3MpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IF8sIGluaXRpYWxpemUoKSwgZm9yY2UpIDogbGlua3M7XG4gIH07XG5cbiAgZm9yY2UuaWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaWQgPSBfLCBmb3JjZSkgOiBpZDtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplU3RyZW5ndGgoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2UgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZURpc3RhbmNlKCksIGZvcmNlKSA6IGRpc3RhbmNlO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsICJ2YXIgZnJhbWUgPSAwLCAvLyBpcyBhbiBhbmltYXRpb24gZnJhbWUgcGVuZGluZz9cbiAgICB0aW1lb3V0ID0gMCwgLy8gaXMgYSB0aW1lb3V0IHBlbmRpbmc/XG4gICAgaW50ZXJ2YWwgPSAwLCAvLyBhcmUgYW55IHRpbWVycyBhY3RpdmU/XG4gICAgcG9rZURlbGF5ID0gMTAwMCwgLy8gaG93IGZyZXF1ZW50bHkgd2UgY2hlY2sgZm9yIGNsb2NrIHNrZXdcbiAgICB0YXNrSGVhZCxcbiAgICB0YXNrVGFpbCxcbiAgICBjbG9ja0xhc3QgPSAwLFxuICAgIGNsb2NrTm93ID0gMCxcbiAgICBjbG9ja1NrZXcgPSAwLFxuICAgIGNsb2NrID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlIDogRGF0ZSxcbiAgICBzZXRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpIDogZnVuY3Rpb24oZikgeyBzZXRUaW1lb3V0KGYsIDE3KTsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIGNsb2NrTm93IHx8IChzZXRGcmFtZShjbGVhck5vdyksIGNsb2NrTm93ID0gY2xvY2subm93KCkgKyBjbG9ja1NrZXcpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5vdygpIHtcbiAgY2xvY2tOb3cgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIHRoaXMuX2NhbGwgPVxuICB0aGlzLl90aW1lID1cbiAgdGhpcy5fbmV4dCA9IG51bGw7XG59XG5cblRpbWVyLnByb3RvdHlwZSA9IHRpbWVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRpbWVyLFxuICByZXN0YXJ0OiBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB0aW1lID0gKHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWUpICsgKGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5KTtcbiAgICBpZiAoIXRoaXMuX25leHQgJiYgdGFza1RhaWwgIT09IHRoaXMpIHtcbiAgICAgIGlmICh0YXNrVGFpbCkgdGFza1RhaWwuX25leHQgPSB0aGlzO1xuICAgICAgZWxzZSB0YXNrSGVhZCA9IHRoaXM7XG4gICAgICB0YXNrVGFpbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuX2NhbGwgPSBjYWxsYmFjaztcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICBzbGVlcCgpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2FsbCkge1xuICAgICAgdGhpcy5fY2FsbCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lID0gSW5maW5pdHk7XG4gICAgICBzbGVlcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXJGbHVzaCgpIHtcbiAgbm93KCk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lLCBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICsrZnJhbWU7IC8vIFByZXRlbmQgd2VcdTIwMTl2ZSBzZXQgYW4gYWxhcm0sIGlmIHdlIGhhdmVuXHUyMDE5dCBhbHJlYWR5LlxuICB2YXIgdCA9IHRhc2tIZWFkLCBlO1xuICB3aGlsZSAodCkge1xuICAgIGlmICgoZSA9IGNsb2NrTm93IC0gdC5fdGltZSkgPj0gMCkgdC5fY2FsbC5jYWxsKHVuZGVmaW5lZCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwgImltcG9ydCB7VGltZXJ9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgZGVsYXkgPSBkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheTtcbiAgdC5yZXN0YXJ0KGVsYXBzZWQgPT4ge1xuICAgIHQuc3RvcCgpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQgKyBkZWxheSk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCAiLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3IjUGFyYW1ldGVyc19pbl9jb21tb25fdXNlXG5jb25zdCBhID0gMTY2NDUyNTtcbmNvbnN0IGMgPSAxMDEzOTA0MjIzO1xuY29uc3QgbSA9IDQyOTQ5NjcyOTY7IC8vIDJeMzJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzID0gMTtcbiAgcmV0dXJuICgpID0+IChzID0gKGEgKiBzICsgYykgJSBtKSAvIG07XG59XG4iLCAiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyfSBmcm9tIFwiZDMtdGltZXJcIjtcbmltcG9ydCBsY2cgZnJvbSBcIi4vbGNnLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4KGQpIHtcbiAgcmV0dXJuIGQueDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkoZCkge1xuICByZXR1cm4gZC55O1xufVxuXG52YXIgaW5pdGlhbFJhZGl1cyA9IDEwLFxuICAgIGluaXRpYWxBbmdsZSA9IE1hdGguUEkgKiAoMyAtIE1hdGguc3FydCg1KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGVzKSB7XG4gIHZhciBzaW11bGF0aW9uLFxuICAgICAgYWxwaGEgPSAxLFxuICAgICAgYWxwaGFNaW4gPSAwLjAwMSxcbiAgICAgIGFscGhhRGVjYXkgPSAxIC0gTWF0aC5wb3coYWxwaGFNaW4sIDEgLyAzMDApLFxuICAgICAgYWxwaGFUYXJnZXQgPSAwLFxuICAgICAgdmVsb2NpdHlEZWNheSA9IDAuNixcbiAgICAgIGZvcmNlcyA9IG5ldyBNYXAoKSxcbiAgICAgIHN0ZXBwZXIgPSB0aW1lcihzdGVwKSxcbiAgICAgIGV2ZW50ID0gZGlzcGF0Y2goXCJ0aWNrXCIsIFwiZW5kXCIpLFxuICAgICAgcmFuZG9tID0gbGNnKCk7XG5cbiAgaWYgKG5vZGVzID09IG51bGwpIG5vZGVzID0gW107XG5cbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICB0aWNrKCk7XG4gICAgZXZlbnQuY2FsbChcInRpY2tcIiwgc2ltdWxhdGlvbik7XG4gICAgaWYgKGFscGhhIDwgYWxwaGFNaW4pIHtcbiAgICAgIHN0ZXBwZXIuc3RvcCgpO1xuICAgICAgZXZlbnQuY2FsbChcImVuZFwiLCBzaW11bGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKGl0ZXJhdGlvbnMpIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcblxuICAgIGlmIChpdGVyYXRpb25zID09PSB1bmRlZmluZWQpIGl0ZXJhdGlvbnMgPSAxO1xuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBpdGVyYXRpb25zOyArK2spIHtcbiAgICAgIGFscGhhICs9IChhbHBoYVRhcmdldCAtIGFscGhhKSAqIGFscGhhRGVjYXk7XG5cbiAgICAgIGZvcmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGZvcmNlKSB7XG4gICAgICAgIGZvcmNlKGFscGhhKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUuZnggPT0gbnVsbCkgbm9kZS54ICs9IG5vZGUudnggKj0gdmVsb2NpdHlEZWNheTtcbiAgICAgICAgZWxzZSBub2RlLnggPSBub2RlLmZ4LCBub2RlLnZ4ID0gMDtcbiAgICAgICAgaWYgKG5vZGUuZnkgPT0gbnVsbCkgbm9kZS55ICs9IG5vZGUudnkgKj0gdmVsb2NpdHlEZWNheTtcbiAgICAgICAgZWxzZSBub2RlLnkgPSBub2RlLmZ5LCBub2RlLnZ5ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2ltdWxhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVOb2RlcygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLmluZGV4ID0gaTtcbiAgICAgIGlmIChub2RlLmZ4ICE9IG51bGwpIG5vZGUueCA9IG5vZGUuZng7XG4gICAgICBpZiAobm9kZS5meSAhPSBudWxsKSBub2RlLnkgPSBub2RlLmZ5O1xuICAgICAgaWYgKGlzTmFOKG5vZGUueCkgfHwgaXNOYU4obm9kZS55KSkge1xuICAgICAgICB2YXIgcmFkaXVzID0gaW5pdGlhbFJhZGl1cyAqIE1hdGguc3FydCgwLjUgKyBpKSwgYW5nbGUgPSBpICogaW5pdGlhbEFuZ2xlO1xuICAgICAgICBub2RlLnggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIG5vZGUueSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihub2RlLnZ4KSB8fCBpc05hTihub2RlLnZ5KSkge1xuICAgICAgICBub2RlLnZ4ID0gbm9kZS52eSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUZvcmNlKGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlLmluaXRpYWxpemUpIGZvcmNlLmluaXRpYWxpemUobm9kZXMsIHJhbmRvbSk7XG4gICAgcmV0dXJuIGZvcmNlO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU5vZGVzKCk7XG5cbiAgcmV0dXJuIHNpbXVsYXRpb24gPSB7XG4gICAgdGljazogdGljayxcblxuICAgIHJlc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0ZXBwZXIucmVzdGFydChzdGVwKSwgc2ltdWxhdGlvbjtcbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RlcHBlci5zdG9wKCksIHNpbXVsYXRpb247XG4gICAgfSxcblxuICAgIG5vZGVzOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlcyA9IF8sIGluaXRpYWxpemVOb2RlcygpLCBmb3JjZXMuZm9yRWFjaChpbml0aWFsaXplRm9yY2UpLCBzaW11bGF0aW9uKSA6IG5vZGVzO1xuICAgIH0sXG5cbiAgICBhbHBoYTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxwaGEgPSArXywgc2ltdWxhdGlvbikgOiBhbHBoYTtcbiAgICB9LFxuXG4gICAgYWxwaGFNaW46IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhTWluID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGFNaW47XG4gICAgfSxcblxuICAgIGFscGhhRGVjYXk6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhRGVjYXkgPSArXywgc2ltdWxhdGlvbikgOiArYWxwaGFEZWNheTtcbiAgICB9LFxuXG4gICAgYWxwaGFUYXJnZXQ6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhVGFyZ2V0ID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGFUYXJnZXQ7XG4gICAgfSxcblxuICAgIHZlbG9jaXR5RGVjYXk6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZlbG9jaXR5RGVjYXkgPSAxIC0gXywgc2ltdWxhdGlvbikgOiAxIC0gdmVsb2NpdHlEZWNheTtcbiAgICB9LFxuXG4gICAgcmFuZG9tU291cmNlOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5kb20gPSBfLCBmb3JjZXMuZm9yRWFjaChpbml0aWFsaXplRm9yY2UpLCBzaW11bGF0aW9uKSA6IHJhbmRvbTtcbiAgICB9LFxuXG4gICAgZm9yY2U6IGZ1bmN0aW9uKG5hbWUsIF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/ICgoXyA9PSBudWxsID8gZm9yY2VzLmRlbGV0ZShuYW1lKSA6IGZvcmNlcy5zZXQobmFtZSwgaW5pdGlhbGl6ZUZvcmNlKF8pKSksIHNpbXVsYXRpb24pIDogZm9yY2VzLmdldChuYW1lKTtcbiAgICB9LFxuXG4gICAgZmluZDogZnVuY3Rpb24oeCwgeSwgcmFkaXVzKSB7XG4gICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBkeCxcbiAgICAgICAgICBkeSxcbiAgICAgICAgICBkMixcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGNsb3Nlc3Q7XG5cbiAgICAgIGlmIChyYWRpdXMgPT0gbnVsbCkgcmFkaXVzID0gSW5maW5pdHk7XG4gICAgICBlbHNlIHJhZGl1cyAqPSByYWRpdXM7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBkeCA9IHggLSBub2RlLng7XG4gICAgICAgIGR5ID0geSAtIG5vZGUueTtcbiAgICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgICAgaWYgKGQyIDwgcmFkaXVzKSBjbG9zZXN0ID0gbm9kZSwgcmFkaXVzID0gZDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24obmFtZSwgXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gKGV2ZW50Lm9uKG5hbWUsIF8pLCBzaW11bGF0aW9uKSA6IGV2ZW50Lm9uKG5hbWUpO1xuICAgIH1cbiAgfTtcbn1cbiIsICJpbXBvcnQge3F1YWR0cmVlfSBmcm9tIFwiZDMtcXVhZHRyZWVcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcbmltcG9ydCB7eCwgeX0gZnJvbSBcIi4vc2ltdWxhdGlvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGVzLFxuICAgICAgbm9kZSxcbiAgICAgIHJhbmRvbSxcbiAgICAgIGFscGhhLFxuICAgICAgc3RyZW5ndGggPSBjb25zdGFudCgtMzApLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgZGlzdGFuY2VNaW4yID0gMSxcbiAgICAgIGRpc3RhbmNlTWF4MiA9IEluZmluaXR5LFxuICAgICAgdGhldGEyID0gMC44MTtcblxuICBmdW5jdGlvbiBmb3JjZShfKSB7XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIHRyZWUgPSBxdWFkdHJlZShub2RlcywgeCwgeSkudmlzaXRBZnRlcihhY2N1bXVsYXRlKTtcbiAgICBmb3IgKGFscGhhID0gXywgaSA9IDA7IGkgPCBuOyArK2kpIG5vZGUgPSBub2Rlc1tpXSwgdHJlZS52aXNpdChhcHBseSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgbm9kZSA9IG5vZGVzW2ldLCBzdHJlbmd0aHNbbm9kZS5pbmRleF0gPSArc3RyZW5ndGgobm9kZSwgaSwgbm9kZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjdW11bGF0ZShxdWFkKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gMCwgcSwgYywgd2VpZ2h0ID0gMCwgeCwgeSwgaTtcblxuICAgIC8vIEZvciBpbnRlcm5hbCBub2RlcywgYWNjdW11bGF0ZSBmb3JjZXMgZnJvbSBjaGlsZCBxdWFkcmFudHMuXG4gICAgaWYgKHF1YWQubGVuZ3RoKSB7XG4gICAgICBmb3IgKHggPSB5ID0gaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgaWYgKChxID0gcXVhZFtpXSkgJiYgKGMgPSBNYXRoLmFicyhxLnZhbHVlKSkpIHtcbiAgICAgICAgICBzdHJlbmd0aCArPSBxLnZhbHVlLCB3ZWlnaHQgKz0gYywgeCArPSBjICogcS54LCB5ICs9IGMgKiBxLnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHF1YWQueCA9IHggLyB3ZWlnaHQ7XG4gICAgICBxdWFkLnkgPSB5IC8gd2VpZ2h0O1xuICAgIH1cblxuICAgIC8vIEZvciBsZWFmIG5vZGVzLCBhY2N1bXVsYXRlIGZvcmNlcyBmcm9tIGNvaW5jaWRlbnQgcXVhZHJhbnRzLlxuICAgIGVsc2Uge1xuICAgICAgcSA9IHF1YWQ7XG4gICAgICBxLnggPSBxLmRhdGEueDtcbiAgICAgIHEueSA9IHEuZGF0YS55O1xuICAgICAgZG8gc3RyZW5ndGggKz0gc3RyZW5ndGhzW3EuZGF0YS5pbmRleF07XG4gICAgICB3aGlsZSAocSA9IHEubmV4dCk7XG4gICAgfVxuXG4gICAgcXVhZC52YWx1ZSA9IHN0cmVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHkocXVhZCwgeDEsIF8sIHgyKSB7XG4gICAgaWYgKCFxdWFkLnZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHZhciB4ID0gcXVhZC54IC0gbm9kZS54LFxuICAgICAgICB5ID0gcXVhZC55IC0gbm9kZS55LFxuICAgICAgICB3ID0geDIgLSB4MSxcbiAgICAgICAgbCA9IHggKiB4ICsgeSAqIHk7XG5cbiAgICAvLyBBcHBseSB0aGUgQmFybmVzLUh1dCBhcHByb3hpbWF0aW9uIGlmIHBvc3NpYmxlLlxuICAgIC8vIExpbWl0IGZvcmNlcyBmb3IgdmVyeSBjbG9zZSBub2RlczsgcmFuZG9taXplIGRpcmVjdGlvbiBpZiBjb2luY2lkZW50LlxuICAgIGlmICh3ICogdyAvIHRoZXRhMiA8IGwpIHtcbiAgICAgIGlmIChsIDwgZGlzdGFuY2VNYXgyKSB7XG4gICAgICAgIGlmICh4ID09PSAwKSB4ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geCAqIHg7XG4gICAgICAgIGlmICh5ID09PSAwKSB5ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geSAqIHk7XG4gICAgICAgIGlmIChsIDwgZGlzdGFuY2VNaW4yKSBsID0gTWF0aC5zcXJ0KGRpc3RhbmNlTWluMiAqIGwpO1xuICAgICAgICBub2RlLnZ4ICs9IHggKiBxdWFkLnZhbHVlICogYWxwaGEgLyBsO1xuICAgICAgICBub2RlLnZ5ICs9IHkgKiBxdWFkLnZhbHVlICogYWxwaGEgLyBsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBwcm9jZXNzIHBvaW50cyBkaXJlY3RseS5cbiAgICBlbHNlIGlmIChxdWFkLmxlbmd0aCB8fCBsID49IGRpc3RhbmNlTWF4MikgcmV0dXJuO1xuXG4gICAgLy8gTGltaXQgZm9yY2VzIGZvciB2ZXJ5IGNsb3NlIG5vZGVzOyByYW5kb21pemUgZGlyZWN0aW9uIGlmIGNvaW5jaWRlbnQuXG4gICAgaWYgKHF1YWQuZGF0YSAhPT0gbm9kZSB8fCBxdWFkLm5leHQpIHtcbiAgICAgIGlmICh4ID09PSAwKSB4ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geCAqIHg7XG4gICAgICBpZiAoeSA9PT0gMCkgeSA9IGppZ2dsZShyYW5kb20pLCBsICs9IHkgKiB5O1xuICAgICAgaWYgKGwgPCBkaXN0YW5jZU1pbjIpIGwgPSBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yICogbCk7XG4gICAgfVxuXG4gICAgZG8gaWYgKHF1YWQuZGF0YSAhPT0gbm9kZSkge1xuICAgICAgdyA9IHN0cmVuZ3Roc1txdWFkLmRhdGEuaW5kZXhdICogYWxwaGEgLyBsO1xuICAgICAgbm9kZS52eCArPSB4ICogdztcbiAgICAgIG5vZGUudnkgKz0geSAqIHc7XG4gICAgfSB3aGlsZSAocXVhZCA9IHF1YWQubmV4dCk7XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oX25vZGVzLCBfcmFuZG9tKSB7XG4gICAgbm9kZXMgPSBfbm9kZXM7XG4gICAgcmFuZG9tID0gX3JhbmRvbTtcbiAgICBpbml0aWFsaXplKCk7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZU1pbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZU1pbjIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KGRpc3RhbmNlTWluMik7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2VNYXggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2VNYXgyID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydChkaXN0YW5jZU1heDIpO1xuICB9O1xuXG4gIGZvcmNlLnRoZXRhID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoZXRhMiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQodGhldGEyKTtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgdmFyIHN0cmVuZ3RoID0gY29uc3RhbnQoMC4xKSxcbiAgICAgIG5vZGVzLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgeHo7XG5cbiAgaWYgKHR5cGVvZiB4ICE9PSBcImZ1bmN0aW9uXCIpIHggPSBjb25zdGFudCh4ID09IG51bGwgPyAwIDogK3gpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS52eCArPSAoeHpbaV0gLSBub2RlLngpICogc3RyZW5ndGhzW2ldICogYWxwaGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGg7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIHh6ID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9IGlzTmFOKHh6W2ldID0gK3gobm9kZXNbaV0sIGksIG5vZGVzKSkgPyAwIDogK3N0cmVuZ3RoKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogeDtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHkpIHtcbiAgdmFyIHN0cmVuZ3RoID0gY29uc3RhbnQoMC4xKSxcbiAgICAgIG5vZGVzLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgeXo7XG5cbiAgaWYgKHR5cGVvZiB5ICE9PSBcImZ1bmN0aW9uXCIpIHkgPSBjb25zdGFudCh5ID09IG51bGwgPyAwIDogK3kpO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS52eSArPSAoeXpbaV0gLSBub2RlLnkpICogc3RyZW5ndGhzW2ldICogYWxwaGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGg7XG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG4pO1xuICAgIHl6ID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9IGlzTmFOKHl6W2ldID0gK3kobm9kZXNbaV0sIGksIG5vZGVzKSkgPyAwIDogK3N0cmVuZ3RoKG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemUoKSwgZm9yY2UpIDogeTtcbiAgfTtcblxuICByZXR1cm4gZm9yY2U7XG59XG4iLCAiLy8gVGhlc2UgYXJlIHR5cGljYWxseSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggbm9ldmVudCB0byBlbnN1cmUgdGhhdCB3ZSBjYW5cbi8vIHByZXZlbnREZWZhdWx0IG9uIHRoZSBldmVudC5cbmV4cG9ydCBjb25zdCBub25wYXNzaXZlID0ge3Bhc3NpdmU6IGZhbHNlfTtcbmV4cG9ydCBjb25zdCBub25wYXNzaXZlY2FwdHVyZSA9IHtjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZX07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3Byb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IG5vZXZlbnQsIHtub25wYXNzaXZlY2FwdHVyZX0gZnJvbSBcIi4vbm9ldmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2aWV3KSB7XG4gIHZhciByb290ID0gdmlldy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBzZWxlY3Rpb24gPSBzZWxlY3Qodmlldykub24oXCJkcmFnc3RhcnQuZHJhZ1wiLCBub2V2ZW50LCBub25wYXNzaXZlY2FwdHVyZSk7XG4gIGlmIChcIm9uc2VsZWN0c3RhcnRcIiBpbiByb290KSB7XG4gICAgc2VsZWN0aW9uLm9uKFwic2VsZWN0c3RhcnQuZHJhZ1wiLCBub2V2ZW50LCBub25wYXNzaXZlY2FwdHVyZSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fX25vc2VsZWN0ID0gcm9vdC5zdHlsZS5Nb3pVc2VyU2VsZWN0O1xuICAgIHJvb3Quc3R5bGUuTW96VXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXNkcmFnKHZpZXcsIG5vY2xpY2spIHtcbiAgdmFyIHJvb3QgPSB2aWV3LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdCh2aWV3KS5vbihcImRyYWdzdGFydC5kcmFnXCIsIG51bGwpO1xuICBpZiAobm9jbGljaykge1xuICAgIHNlbGVjdGlvbi5vbihcImNsaWNrLmRyYWdcIiwgbm9ldmVudCwgbm9ucGFzc2l2ZWNhcHR1cmUpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHNlbGVjdGlvbi5vbihcImNsaWNrLmRyYWdcIiwgbnVsbCk7IH0sIDApO1xuICB9XG4gIGlmIChcIm9uc2VsZWN0c3RhcnRcIiBpbiByb290KSB7XG4gICAgc2VsZWN0aW9uLm9uKFwic2VsZWN0c3RhcnQuZHJhZ1wiLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICByb290LnN0eWxlLk1velVzZXJTZWxlY3QgPSByb290Ll9fbm9zZWxlY3Q7XG4gICAgZGVsZXRlIHJvb3QuX19ub3NlbGVjdDtcbiAgfVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmFnRXZlbnQodHlwZSwge1xuICBzb3VyY2VFdmVudCxcbiAgc3ViamVjdCxcbiAgdGFyZ2V0LFxuICBpZGVudGlmaWVyLFxuICBhY3RpdmUsXG4gIHgsIHksIGR4LCBkeSxcbiAgZGlzcGF0Y2hcbn0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHR5cGU6IHt2YWx1ZTogdHlwZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBzb3VyY2VFdmVudDoge3ZhbHVlOiBzb3VyY2VFdmVudCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBzdWJqZWN0OiB7dmFsdWU6IHN1YmplY3QsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgdGFyZ2V0OiB7dmFsdWU6IHRhcmdldCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBpZGVudGlmaWVyOiB7dmFsdWU6IGlkZW50aWZpZXIsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgYWN0aXZlOiB7dmFsdWU6IGFjdGl2ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB4OiB7dmFsdWU6IHgsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgeToge3ZhbHVlOiB5LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGR4OiB7dmFsdWU6IGR4LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGR5OiB7dmFsdWU6IGR5LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIF86IHt2YWx1ZTogZGlzcGF0Y2h9XG4gIH0pO1xufVxuXG5EcmFnRXZlbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuXy5vbi5hcHBseSh0aGlzLl8sIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSA9PT0gdGhpcy5fID8gdGhpcyA6IHZhbHVlO1xufTtcbiIsICJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7c2VsZWN0LCBwb2ludGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgbm9kcmFnLCB7eWVzZHJhZ30gZnJvbSBcIi4vbm9kcmFnLmpzXCI7XG5pbXBvcnQgbm9ldmVudCwge25vbnBhc3NpdmUsIG5vbnBhc3NpdmVjYXB0dXJlLCBub3Byb3BhZ2F0aW9ufSBmcm9tIFwiLi9ub2V2ZW50LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBEcmFnRXZlbnQgZnJvbSBcIi4vZXZlbnQuanNcIjtcblxuLy8gSWdub3JlIHJpZ2h0LWNsaWNrLCBzaW5jZSB0aGF0IHNob3VsZCBvcGVuIHRoZSBjb250ZXh0IG1lbnUuXG5mdW5jdGlvbiBkZWZhdWx0RmlsdGVyKGV2ZW50KSB7XG4gIHJldHVybiAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQuYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29udGFpbmVyKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3ViamVjdChldmVudCwgZCkge1xuICByZXR1cm4gZCA9PSBudWxsID8ge3g6IGV2ZW50LngsIHk6IGV2ZW50Lnl9IDogZDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFRvdWNoYWJsZSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCAoXCJvbnRvdWNoc3RhcnRcIiBpbiB0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyLFxuICAgICAgY29udGFpbmVyID0gZGVmYXVsdENvbnRhaW5lcixcbiAgICAgIHN1YmplY3QgPSBkZWZhdWx0U3ViamVjdCxcbiAgICAgIHRvdWNoYWJsZSA9IGRlZmF1bHRUb3VjaGFibGUsXG4gICAgICBnZXN0dXJlcyA9IHt9LFxuICAgICAgbGlzdGVuZXJzID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImRyYWdcIiwgXCJlbmRcIiksXG4gICAgICBhY3RpdmUgPSAwLFxuICAgICAgbW91c2Vkb3dueCxcbiAgICAgIG1vdXNlZG93bnksXG4gICAgICBtb3VzZW1vdmluZyxcbiAgICAgIHRvdWNoZW5kaW5nLFxuICAgICAgY2xpY2tEaXN0YW5jZTIgPSAwO1xuXG4gIGZ1bmN0aW9uIGRyYWcoc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5vbihcIm1vdXNlZG93bi5kcmFnXCIsIG1vdXNlZG93bmVkKVxuICAgICAgLmZpbHRlcih0b3VjaGFibGUpXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuZHJhZ1wiLCB0b3VjaHN0YXJ0ZWQpXG4gICAgICAgIC5vbihcInRvdWNobW92ZS5kcmFnXCIsIHRvdWNobW92ZWQsIG5vbnBhc3NpdmUpXG4gICAgICAgIC5vbihcInRvdWNoZW5kLmRyYWcgdG91Y2hjYW5jZWwuZHJhZ1wiLCB0b3VjaGVuZGVkKVxuICAgICAgICAuc3R5bGUoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcIi13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLCBcInJnYmEoMCwwLDAsMClcIik7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZWRvd25lZChldmVudCwgZCkge1xuICAgIGlmICh0b3VjaGVuZGluZyB8fCAhZmlsdGVyLmNhbGwodGhpcywgZXZlbnQsIGQpKSByZXR1cm47XG4gICAgdmFyIGdlc3R1cmUgPSBiZWZvcmVzdGFydCh0aGlzLCBjb250YWluZXIuY2FsbCh0aGlzLCBldmVudCwgZCksIGV2ZW50LCBkLCBcIm1vdXNlXCIpO1xuICAgIGlmICghZ2VzdHVyZSkgcmV0dXJuO1xuICAgIHNlbGVjdChldmVudC52aWV3KVxuICAgICAgLm9uKFwibW91c2Vtb3ZlLmRyYWdcIiwgbW91c2Vtb3ZlZCwgbm9ucGFzc2l2ZWNhcHR1cmUpXG4gICAgICAub24oXCJtb3VzZXVwLmRyYWdcIiwgbW91c2V1cHBlZCwgbm9ucGFzc2l2ZWNhcHR1cmUpO1xuICAgIG5vZHJhZyhldmVudC52aWV3KTtcbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBtb3VzZW1vdmluZyA9IGZhbHNlO1xuICAgIG1vdXNlZG93bnggPSBldmVudC5jbGllbnRYO1xuICAgIG1vdXNlZG93bnkgPSBldmVudC5jbGllbnRZO1xuICAgIGdlc3R1cmUoXCJzdGFydFwiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW1vdmVkKGV2ZW50KSB7XG4gICAgbm9ldmVudChldmVudCk7XG4gICAgaWYgKCFtb3VzZW1vdmluZykge1xuICAgICAgdmFyIGR4ID0gZXZlbnQuY2xpZW50WCAtIG1vdXNlZG93bngsIGR5ID0gZXZlbnQuY2xpZW50WSAtIG1vdXNlZG93bnk7XG4gICAgICBtb3VzZW1vdmluZyA9IGR4ICogZHggKyBkeSAqIGR5ID4gY2xpY2tEaXN0YW5jZTI7XG4gICAgfVxuICAgIGdlc3R1cmVzLm1vdXNlKFwiZHJhZ1wiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZXVwcGVkKGV2ZW50KSB7XG4gICAgc2VsZWN0KGV2ZW50LnZpZXcpLm9uKFwibW91c2Vtb3ZlLmRyYWcgbW91c2V1cC5kcmFnXCIsIG51bGwpO1xuICAgIHllc2RyYWcoZXZlbnQudmlldywgbW91c2Vtb3ZpbmcpO1xuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGdlc3R1cmVzLm1vdXNlKFwiZW5kXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoc3RhcnRlZChldmVudCwgZCkge1xuICAgIGlmICghZmlsdGVyLmNhbGwodGhpcywgZXZlbnQsIGQpKSByZXR1cm47XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgYyA9IGNvbnRhaW5lci5jYWxsKHRoaXMsIGV2ZW50LCBkKSxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBiZWZvcmVzdGFydCh0aGlzLCBjLCBldmVudCwgZCwgdG91Y2hlc1tpXS5pZGVudGlmaWVyLCB0b3VjaGVzW2ldKSkge1xuICAgICAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcInN0YXJ0XCIsIGV2ZW50LCB0b3VjaGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaG1vdmVkKGV2ZW50KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaGVzW2ldLmlkZW50aWZpZXJdKSB7XG4gICAgICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgICAgICBnZXN0dXJlKFwiZHJhZ1wiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hlbmRlZChldmVudCkge1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgZ2VzdHVyZTtcblxuICAgIGlmICh0b3VjaGVuZGluZykgY2xlYXJUaW1lb3V0KHRvdWNoZW5kaW5nKTtcbiAgICB0b3VjaGVuZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoZW5kaW5nID0gbnVsbDsgfSwgNTAwKTsgLy8gR2hvc3QgY2xpY2tzIGFyZSBkZWxheWVkIVxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2hlc1tpXS5pZGVudGlmaWVyXSkge1xuICAgICAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcImVuZFwiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3Jlc3RhcnQodGhhdCwgY29udGFpbmVyLCBldmVudCwgZCwgaWRlbnRpZmllciwgdG91Y2gpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBsaXN0ZW5lcnMuY29weSgpLFxuICAgICAgICBwID0gcG9pbnRlcih0b3VjaCB8fCBldmVudCwgY29udGFpbmVyKSwgZHgsIGR5LFxuICAgICAgICBzO1xuXG4gICAgaWYgKChzID0gc3ViamVjdC5jYWxsKHRoYXQsIG5ldyBEcmFnRXZlbnQoXCJiZWZvcmVzdGFydFwiLCB7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgICAgdGFyZ2V0OiBkcmFnLFxuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBhY3RpdmUsXG4gICAgICAgIHg6IHBbMF0sXG4gICAgICAgIHk6IHBbMV0sXG4gICAgICAgIGR4OiAwLFxuICAgICAgICBkeTogMCxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICAgIH0pLCBkKSkgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgZHggPSBzLnggLSBwWzBdIHx8IDA7XG4gICAgZHkgPSBzLnkgLSBwWzFdIHx8IDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gZ2VzdHVyZSh0eXBlLCBldmVudCwgdG91Y2gpIHtcbiAgICAgIHZhciBwMCA9IHAsIG47XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6IGdlc3R1cmVzW2lkZW50aWZpZXJdID0gZ2VzdHVyZSwgbiA9IGFjdGl2ZSsrOyBicmVhaztcbiAgICAgICAgY2FzZSBcImVuZFwiOiBkZWxldGUgZ2VzdHVyZXNbaWRlbnRpZmllcl0sIC0tYWN0aXZlOyAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgIGNhc2UgXCJkcmFnXCI6IHAgPSBwb2ludGVyKHRvdWNoIHx8IGV2ZW50LCBjb250YWluZXIpLCBuID0gYWN0aXZlOyBicmVhaztcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoLmNhbGwoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRoYXQsXG4gICAgICAgIG5ldyBEcmFnRXZlbnQodHlwZSwge1xuICAgICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgICAgICBzdWJqZWN0OiBzLFxuICAgICAgICAgIHRhcmdldDogZHJhZyxcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIGFjdGl2ZTogbixcbiAgICAgICAgICB4OiBwWzBdICsgZHgsXG4gICAgICAgICAgeTogcFsxXSArIGR5LFxuICAgICAgICAgIGR4OiBwWzBdIC0gcDBbMF0sXG4gICAgICAgICAgZHk6IHBbMV0gLSBwMFsxXSxcbiAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICB9KSxcbiAgICAgICAgZFxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgZHJhZy5maWx0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZmlsdGVyID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBkcmFnKSA6IGZpbHRlcjtcbiAgfTtcblxuICBkcmFnLmNvbnRhaW5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb250YWluZXIgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBkcmFnKSA6IGNvbnRhaW5lcjtcbiAgfTtcblxuICBkcmFnLnN1YmplY3QgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3ViamVjdCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIGRyYWcpIDogc3ViamVjdDtcbiAgfTtcblxuICBkcmFnLnRvdWNoYWJsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0b3VjaGFibGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGRyYWcpIDogdG91Y2hhYmxlO1xuICB9O1xuXG4gIGRyYWcub24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSBsaXN0ZW5lcnMub24uYXBwbHkobGlzdGVuZXJzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbGlzdGVuZXJzID8gZHJhZyA6IHZhbHVlO1xuICB9O1xuXG4gIGRyYWcuY2xpY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGlja0Rpc3RhbmNlMiA9IChfID0gK18pICogXywgZHJhZykgOiBNYXRoLnNxcnQoY2xpY2tEaXN0YW5jZTIpO1xuICB9O1xuXG4gIHJldHVybiBkcmFnO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnN0cnVjdG9yLCBmYWN0b3J5LCBwcm90b3R5cGUpIHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gZmFjdG9yeS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHBhcmVudCwgZGVmaW5pdGlvbikge1xuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQucHJvdG90eXBlKTtcbiAgZm9yICh2YXIga2V5IGluIGRlZmluaXRpb24pIHByb3RvdHlwZVtrZXldID0gZGVmaW5pdGlvbltrZXldO1xuICByZXR1cm4gcHJvdG90eXBlO1xufVxuIiwgImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFxuICAgIHJlSGV4ID0gL14jKFswLTlhLWZdezMsOH0pJC8sXG4gICAgcmVSZ2JJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX1cXFxcKSRgKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZUhzbFBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsYVxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCk7XG5cbnZhciBuYW1lZCA9IHtcbiAgYWxpY2VibHVlOiAweGYwZjhmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcbiAgYXF1YTogMHgwMGZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxuICBhenVyZTogMHhmMGZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkYyxcbiAgYmlzcXVlOiAweGZmZTRjNCxcbiAgYmxhY2s6IDB4MDAwMDAwLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gIGJsdWU6IDB4MDAwMGZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMixcbiAgYnJvd246IDB4YTUyYTJhLFxuICBidXJseXdvb2Q6IDB4ZGViODg3LFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxuICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgY2hvY29sYXRlOiAweGQyNjkxZSxcbiAgY29yYWw6IDB4ZmY3ZjUwLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gIGNvcm5zaWxrOiAweGZmZjhkYyxcbiAgY3JpbXNvbjogMHhkYzE0M2MsXG4gIGN5YW46IDB4MDBmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGIsXG4gIGRhcmtjeWFuOiAweDAwOGI4YixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gIGRhcmtncmF5OiAweGE5YTlhOSxcbiAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICBkYXJra2hha2k6IDB4YmRiNzZiLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDAsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxuICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgZGFya3NhbG1vbjogMHhlOTk2N2EsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcbiAgZGVlcHBpbms6IDB4ZmYxNDkzLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5LFxuICBkaW1ncmV5OiAweDY5Njk2OSxcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjIsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICBmdWNoc2lhOiAweGZmMDBmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkYyxcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxuICBncmF5OiAweDgwODA4MCxcbiAgZ3JlZW46IDB4MDA4MDAwLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmYsXG4gIGdyZXk6IDB4ODA4MDgwLFxuICBob25leWRldzogMHhmMGZmZjAsXG4gIGhvdHBpbms6IDB4ZmY2OWI0LFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICBpbmRpZ286IDB4NGIwMDgyLFxuICBpdm9yeTogMHhmZmZmZjAsXG4gIGtoYWtpOiAweGYwZTY4YyxcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcbiAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcbiAgbGlnaHRibHVlOiAweGFkZDhlNixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcbiAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgbGlnaHRncmVlbjogMHg5MGVlOTAsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcbiAgbGltZTogMHgwMGZmMDAsXG4gIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gIGxpbmVuOiAweGZhZjBlNixcbiAgbWFnZW50YTogMHhmZjAwZmYsXG4gIG1hcm9vbjogMHg4MDAwMDAsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmEsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gIG1vY2Nhc2luOiAweGZmZTRiNSxcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxuICBuYXZ5OiAweDAwMDA4MCxcbiAgb2xkbGFjZTogMHhmZGY1ZTYsXG4gIG9saXZlOiAweDgwODAwMCxcbiAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgb3JhbmdlOiAweGZmYTUwMCxcbiAgb3JhbmdlcmVkOiAweGZmNDUwMCxcbiAgb3JjaGlkOiAweGRhNzBkNixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXG4gIHBhbGVncmVlbjogMHg5OGZiOTgsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXG4gIHBlYWNocHVmZjogMHhmZmRhYjksXG4gIHBlcnU6IDB4Y2Q4NTNmLFxuICBwaW5rOiAweGZmYzBjYixcbiAgcGx1bTogMHhkZGEwZGQsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxuICBwdXJwbGU6IDB4ODAwMDgwLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgcmVkOiAweGZmMDAwMCxcbiAgcm9zeWJyb3duOiAweGJjOGY4ZixcbiAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxuICBzYWxtb246IDB4ZmE4MDcyLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgc2VhZ3JlZW46IDB4MmU4YjU3LFxuICBzZWFzaGVsbDogMHhmZmY1ZWUsXG4gIHNpZW5uYTogMHhhMDUyMmQsXG4gIHNpbHZlcjogMHhjMGMwYzAsXG4gIHNreWJsdWU6IDB4ODdjZWViLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxuICBzbm93OiAweGZmZmFmYSxcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxuICB0YW46IDB4ZDJiNDhjLFxuICB0ZWFsOiAweDAwODA4MCxcbiAgdGhpc3RsZTogMHhkOGJmZDgsXG4gIHRvbWF0bzogMHhmZjYzNDcsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDAsXG4gIHZpb2xldDogMHhlZTgyZWUsXG4gIHdoZWF0OiAweGY1ZGViMyxcbiAgd2hpdGU6IDB4ZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcbiAgeWVsbG93OiAweGZmZmYwMCxcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXG59O1xuXG5kZWZpbmUoQ29sb3IsIGNvbG9yLCB7XG4gIGNvcHkoY2hhbm5lbHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3RvciwgdGhpcywgY2hhbm5lbHMpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5kaXNwbGF5YWJsZSgpO1xuICB9LFxuICBoZXg6IGNvbG9yX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiBjb2xvcl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IGNvbG9yX2Zvcm1hdEhleDgsXG4gIGZvcm1hdEhzbDogY29sb3JfZm9ybWF0SHNsLFxuICBmb3JtYXRSZ2I6IGNvbG9yX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IGNvbG9yX2Zvcm1hdFJnYlxufSk7XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleDgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SHNsKCkge1xuICByZXR1cm4gaHNsQ29udmVydCh0aGlzKS5mb3JtYXRIc2woKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0UmdiKCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gIHZhciBtLCBsO1xuICBmb3JtYXQgPSAoZm9ybWF0ICsgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAobSA9IHJlSGV4LmV4ZWMoZm9ybWF0KSkgPyAobCA9IG1bMV0ubGVuZ3RoLCBtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBsID09PSA2ID8gcmdibihtKSAvLyAjZmYwMDAwXG4gICAgICA6IGwgPT09IDMgPyBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZiksIDEpIC8vICNmMDBcbiAgICAgIDogbCA9PT0gOCA/IHJnYmEobSA+PiAyNCAmIDB4ZmYsIG0gPj4gMTYgJiAweGZmLCBtID4+IDggJiAweGZmLCAobSAmIDB4ZmYpIC8gMHhmZikgLy8gI2ZmMDAwMDAwXG4gICAgICA6IGwgPT09IDQgPyByZ2JhKChtID4+IDEyICYgMHhmKSB8IChtID4+IDggJiAweGYwKSwgKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKCgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZikpIC8gMHhmZikgLy8gI2YwMDBcbiAgICAgIDogbnVsbCkgLy8gaW52YWxpZCBoZXhcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgUmdiKGNsYW1waSh0aGlzLnIpLCBjbGFtcGkodGhpcy5nKSwgY2xhbXBpKHRoaXMuYiksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgtMC41IDw9IHRoaXMuciAmJiB0aGlzLnIgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5nICYmIHRoaXMuZyA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmIgJiYgdGhpcy5iIDwgMjU1LjUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGhleDogcmdiX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiByZ2JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiByZ2JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0UmdiOiByZ2JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogcmdiX2Zvcm1hdFJnYlxufSkpO1xuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9JHtoZXgoKGlzTmFOKHRoaXMub3BhY2l0eSkgPyAxIDogdGhpcy5vcGFjaXR5KSAqIDI1NSl9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdFJnYigpIHtcbiAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICByZXR1cm4gYCR7YSA9PT0gMSA/IFwicmdiKFwiIDogXCJyZ2JhKFwifSR7Y2xhbXBpKHRoaXMucil9LCAke2NsYW1waSh0aGlzLmcpfSwgJHtjbGFtcGkodGhpcy5iKX0ke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xufVxuXG5mdW5jdGlvbiBjbGFtcGEob3BhY2l0eSkge1xuICByZXR1cm4gaXNOYU4ob3BhY2l0eSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb3BhY2l0eSkpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGkodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh2YWx1ZSkgfHwgMCkpO1xufVxuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBjbGFtcGkodmFsdWUpO1xuICByZXR1cm4gKHZhbHVlIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgdmFsdWUudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IEhzbChjbGFtcGgodGhpcy5oKSwgY2xhbXB0KHRoaXMucyksIGNsYW1wdCh0aGlzLmwpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBmb3JtYXRIc2woKSB7XG4gICAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICAgIHJldHVybiBgJHthID09PSAxID8gXCJoc2woXCIgOiBcImhzbGEoXCJ9JHtjbGFtcGgodGhpcy5oKX0sICR7Y2xhbXB0KHRoaXMucykgKiAxMDB9JSwgJHtjbGFtcHQodGhpcy5sKSAqIDEwMH0lJHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBjbGFtcGgodmFsdWUpIHtcbiAgdmFsdWUgPSAodmFsdWUgfHwgMCkgJSAzNjA7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyB2YWx1ZSArIDM2MCA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGFtcHQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbn1cblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBiYXNpcyh0MSwgdjAsIHYxLCB2MiwgdjMpIHtcbiAgdmFyIHQyID0gdDEgKiB0MSwgdDMgPSB0MiAqIHQxO1xuICByZXR1cm4gKCgxIC0gMyAqIHQxICsgMyAqIHQyIC0gdDMpICogdjBcbiAgICAgICsgKDQgLSA2ICogdDIgKyAzICogdDMpICogdjFcbiAgICAgICsgKDEgKyAzICogdDEgKyAzICogdDIgLSAzICogdDMpICogdjJcbiAgICAgICsgdDMgKiB2MykgLyA2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQgPD0gMCA/ICh0ID0gMCkgOiB0ID49IDEgPyAodCA9IDEsIG4gLSAxKSA6IE1hdGguZmxvb3IodCAqIG4pLFxuICAgICAgICB2MSA9IHZhbHVlc1tpXSxcbiAgICAgICAgdjIgPSB2YWx1ZXNbaSArIDFdLFxuICAgICAgICB2MCA9IGkgPiAwID8gdmFsdWVzW2kgLSAxXSA6IDIgKiB2MSAtIHYyLFxuICAgICAgICB2MyA9IGkgPCBuIC0gMSA/IHZhbHVlc1tpICsgMl0gOiAyICogdjIgLSB2MTtcbiAgICByZXR1cm4gYmFzaXMoKHQgLSBpIC8gbikgKiBuLCB2MCwgdjEsIHYyLCB2Myk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHtiYXNpc30gZnJvbSBcIi4vYmFzaXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IE1hdGguZmxvb3IoKCh0ICU9IDEpIDwgMCA/ICsrdCA6IHQpICogbiksXG4gICAgICAgIHYwID0gdmFsdWVzWyhpICsgbiAtIDEpICUgbl0sXG4gICAgICAgIHYxID0gdmFsdWVzW2kgJSBuXSxcbiAgICAgICAgdjIgPSB2YWx1ZXNbKGkgKyAxKSAlIG5dLFxuICAgICAgICB2MyA9IHZhbHVlc1soaSArIDIpICUgbl07XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHggPT4gKCkgPT4geDtcbiIsICJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gbGluZWFyKGEsIGQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYSArIHQgKiBkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBleHBvbmVudGlhbChhLCBiLCB5KSB7XG4gIHJldHVybiBhID0gTWF0aC5wb3coYSwgeSksIGIgPSBNYXRoLnBvdyhiLCB5KSAtIGEsIHkgPSAxIC8geSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhhICsgdCAqIGIsIHkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVlKGEsIGIpIHtcbiAgdmFyIGQgPSBiIC0gYTtcbiAgcmV0dXJuIGQgPyBsaW5lYXIoYSwgZCA+IDE4MCB8fCBkIDwgLTE4MCA/IGQgLSAzNjAgKiBNYXRoLnJvdW5kKGQgLyAzNjApIDogZCkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbW1hKHkpIHtcbiAgcmV0dXJuICh5ID0gK3kpID09PSAxID8gbm9nYW1tYSA6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYiAtIGEgPyBleHBvbmVudGlhbChhLCBiLCB5KSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2dhbW1hKGEsIGIpIHtcbiAgdmFyIGQgPSBiIC0gYTtcbiAgcmV0dXJuIGQgPyBsaW5lYXIoYSwgZCkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbn1cbiIsICJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXMuanNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICB9O1xufVxuIiwgImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciByZUEgPSAvWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csXG4gICAgcmVCID0gbmV3IFJlZ0V4cChyZUEuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIHplcm8oYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uZShiKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGIodCkgKyBcIlwiO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBiaSA9IHJlQS5sYXN0SW5kZXggPSByZUIubGFzdEluZGV4ID0gMCwgLy8gc2NhbiBpbmRleCBmb3IgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYW0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYVxuICAgICAgYm0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYlxuICAgICAgYnMsIC8vIHN0cmluZyBwcmVjZWRpbmcgY3VycmVudCBudW1iZXIgaW4gYiwgaWYgYW55XG4gICAgICBpID0gLTEsIC8vIGluZGV4IGluIHNcbiAgICAgIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG5cbiAgLy8gQ29lcmNlIGlucHV0cyB0byBzdHJpbmdzLlxuICBhID0gYSArIFwiXCIsIGIgPSBiICsgXCJcIjtcblxuICAvLyBJbnRlcnBvbGF0ZSBwYWlycyBvZiBudW1iZXJzIGluIGEgJiBiLlxuICB3aGlsZSAoKGFtID0gcmVBLmV4ZWMoYSkpXG4gICAgICAmJiAoYm0gPSByZUIuZXhlYyhiKSkpIHtcbiAgICBpZiAoKGJzID0gYm0uaW5kZXgpID4gYmkpIHsgLy8gYSBzdHJpbmcgcHJlY2VkZXMgdGhlIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGJzID0gYi5zbGljZShiaSwgYnMpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJzO1xuICAgIH1cbiAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHsgLy8gbnVtYmVycyBpbiBhICYgYiBtYXRjaFxuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJtO1xuICAgIH0gZWxzZSB7IC8vIGludGVycG9sYXRlIG5vbi1tYXRjaGluZyBudW1iZXJzXG4gICAgICBzWysraV0gPSBudWxsO1xuICAgICAgcS5wdXNoKHtpOiBpLCB4OiBudW1iZXIoYW0sIGJtKX0pO1xuICAgIH1cbiAgICBiaSA9IHJlQi5sYXN0SW5kZXg7XG4gIH1cblxuICAvLyBBZGQgcmVtYWlucyBvZiBiLlxuICBpZiAoYmkgPCBiLmxlbmd0aCkge1xuICAgIGJzID0gYi5zbGljZShiaSk7XG4gICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgZWxzZSBzWysraV0gPSBicztcbiAgfVxuXG4gIC8vIFNwZWNpYWwgb3B0aW1pemF0aW9uIGZvciBvbmx5IGEgc2luZ2xlIG1hdGNoLlxuICAvLyBPdGhlcndpc2UsIGludGVycG9sYXRlIGVhY2ggb2YgdGhlIG51bWJlcnMgYW5kIHJlam9pbiB0aGUgc3RyaW5nLlxuICByZXR1cm4gcy5sZW5ndGggPCAyID8gKHFbMF1cbiAgICAgID8gb25lKHFbMF0ueClcbiAgICAgIDogemVybyhiKSlcbiAgICAgIDogKGIgPSBxLmxlbmd0aCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICAgICAgfSk7XG59XG4iLCAidmFyIGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0ge1xuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICByb3RhdGU6IDAsXG4gIHNrZXdYOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNrZXdYO1xuICBpZiAoc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSBhIC89IHNjYWxlWCwgYiAvPSBzY2FsZVg7XG4gIGlmIChza2V3WCA9IGEgKiBjICsgYiAqIGQpIGMgLT0gYSAqIHNrZXdYLCBkIC09IGIgKiBza2V3WDtcbiAgaWYgKHNjYWxlWSA9IE1hdGguc3FydChjICogYyArIGQgKiBkKSkgYyAvPSBzY2FsZVksIGQgLz0gc2NhbGVZLCBza2V3WCAvPSBzY2FsZVk7XG4gIGlmIChhICogZCA8IGIgKiBjKSBhID0gLWEsIGIgPSAtYiwgc2tld1ggPSAtc2tld1gsIHNjYWxlWCA9IC1zY2FsZVg7XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZSxcbiAgICB0cmFuc2xhdGVZOiBmLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihiLCBhKSAqIGRlZ3JlZXMsXG4gICAgc2tld1g6IE1hdGguYXRhbihza2V3WCkgKiBkZWdyZWVzLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG4iLCAiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2UuanNcIjtcblxudmFyIHN2Z05vZGU7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgY29uc3QgbSA9IG5ldyAodHlwZW9mIERPTU1hdHJpeCA9PT0gXCJmdW5jdGlvblwiID8gRE9NTWF0cml4IDogV2ViS2l0Q1NTTWF0cml4KSh2YWx1ZSArIFwiXCIpO1xuICByZXR1cm4gbS5pc0lkZW50aXR5ID8gaWRlbnRpdHkgOiBkZWNvbXBvc2UobS5hLCBtLmIsIG0uYywgbS5kLCBtLmUsIG0uZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN2Zyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIXN2Z05vZGUpIHN2Z05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gIHN2Z05vZGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHZhbHVlKTtcbiAgaWYgKCEodmFsdWUgPSBzdmdOb2RlLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHZhbHVlID0gdmFsdWUubWF0cml4O1xuICByZXR1cm4gZGVjb21wb3NlKHZhbHVlLmEsIHZhbHVlLmIsIHZhbHVlLmMsIHZhbHVlLmQsIHZhbHVlLmUsIHZhbHVlLmYpO1xufVxuIiwgImltcG9ydCBudW1iZXIgZnJvbSBcIi4uL251bWJlci5qc1wiO1xuaW1wb3J0IHtwYXJzZUNzcywgcGFyc2VTdmd9IGZyb20gXCIuL3BhcnNlLmpzXCI7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlLCBweENvbW1hLCBweFBhcmVuLCBkZWdQYXJlbikge1xuXG4gIGZ1bmN0aW9uIHBvcChzKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID8gcy5wb3AoKSArIFwiIFwiIDogXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChcInRyYW5zbGF0ZShcIiwgbnVsbCwgcHhDb21tYSwgbnVsbCwgcHhQYXJlbik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiIHx8IHliKSB7XG4gICAgICBzLnB1c2goXCJ0cmFuc2xhdGUoXCIgKyB4YiArIHB4Q29tbWEgKyB5YiArIHB4UGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZShhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIGlmIChhIC0gYiA+IDE4MCkgYiArPSAzNjA7IGVsc2UgaWYgKGIgLSBhID4gMTgwKSBhICs9IDM2MDsgLy8gc2hvcnRlc3QgcGF0aFxuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBza2V3WChhLCBiLCBzLCBxKSB7XG4gICAgaWYgKGEgIT09IGIpIHtcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIsIG51bGwsIGRlZ1BhcmVuKSAtIDIsIHg6IG51bWJlcihhLCBiKX0pO1xuICAgIH0gZWxzZSBpZiAoYikge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2tld1goXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIsIG51bGwsIFwiLFwiLCBudWxsLCBcIilcIik7XG4gICAgICBxLnB1c2goe2k6IGkgLSA0LCB4OiBudW1iZXIoeGEsIHhiKX0sIHtpOiBpIC0gMiwgeDogbnVtYmVyKHlhLCB5Yil9KTtcbiAgICB9IGVsc2UgaWYgKHhiICE9PSAxIHx8IHliICE9PSAxKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiArIHhiICsgXCIsXCIgKyB5YiArIFwiKVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG4gICAgYSA9IHBhcnNlKGEpLCBiID0gcGFyc2UoYik7XG4gICAgdHJhbnNsYXRlKGEudHJhbnNsYXRlWCwgYS50cmFuc2xhdGVZLCBiLnRyYW5zbGF0ZVgsIGIudHJhbnNsYXRlWSwgcywgcSk7XG4gICAgcm90YXRlKGEucm90YXRlLCBiLnJvdGF0ZSwgcywgcSk7XG4gICAgc2tld1goYS5za2V3WCwgYi5za2V3WCwgcywgcSk7XG4gICAgc2NhbGUoYS5zY2FsZVgsIGEuc2NhbGVZLCBiLnNjYWxlWCwgYi5zY2FsZVksIHMsIHEpO1xuICAgIGEgPSBiID0gbnVsbDsgLy8gZ2NcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGkgPSAtMSwgbiA9IHEubGVuZ3RoLCBvO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlQ3NzLCBcInB4LCBcIiwgXCJweClcIiwgXCJkZWcpXCIpO1xuZXhwb3J0IHZhciBpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyA9IGludGVycG9sYXRlVHJhbnNmb3JtKHBhcnNlU3ZnLCBcIiwgXCIsIFwiKVwiLCBcIilcIik7XG4iLCAidmFyIGVwc2lsb24yID0gMWUtMTI7XG5cbmZ1bmN0aW9uIGNvc2goeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoeCkpICsgMSAvIHgpIC8gMjtcbn1cblxuZnVuY3Rpb24gc2luaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgLSAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiB0YW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKDIgKiB4KSkgLSAxKSAvICh4ICsgMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiB6b29tUmhvKHJobywgcmhvMiwgcmhvNCkge1xuXG4gIC8vIHAwID0gW3V4MCwgdXkwLCB3MF1cbiAgLy8gcDEgPSBbdXgxLCB1eTEsIHcxXVxuICBmdW5jdGlvbiB6b29tKHAwLCBwMSkge1xuICAgIHZhciB1eDAgPSBwMFswXSwgdXkwID0gcDBbMV0sIHcwID0gcDBbMl0sXG4gICAgICAgIHV4MSA9IHAxWzBdLCB1eTEgPSBwMVsxXSwgdzEgPSBwMVsyXSxcbiAgICAgICAgZHggPSB1eDEgLSB1eDAsXG4gICAgICAgIGR5ID0gdXkxIC0gdXkwLFxuICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgICBpLFxuICAgICAgICBTO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciB1MCBcdTIyNDUgdTEuXG4gICAgaWYgKGQyIDwgZXBzaWxvbjIpIHtcbiAgICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIHJobztcbiAgICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdXgwICsgdCAqIGR4LFxuICAgICAgICAgIHV5MCArIHQgKiBkeSxcbiAgICAgICAgICB3MCAqIE1hdGguZXhwKHJobyAqIHQgKiBTKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYWwgY2FzZS5cbiAgICBlbHNlIHtcbiAgICAgIHZhciBkMSA9IE1hdGguc3FydChkMiksXG4gICAgICAgICAgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG80ICogZDIpIC8gKDIgKiB3MCAqIHJobzIgKiBkMSksXG4gICAgICAgICAgYjEgPSAodzEgKiB3MSAtIHcwICogdzAgLSByaG80ICogZDIpIC8gKDIgKiB3MSAqIHJobzIgKiBkMSksXG4gICAgICAgICAgcjAgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjAgKiBiMCArIDEpIC0gYjApLFxuICAgICAgICAgIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICAgIFMgPSAocjEgLSByMCkgLyByaG87XG4gICAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcyA9IHQgKiBTLFxuICAgICAgICAgICAgY29zaHIwID0gY29zaChyMCksXG4gICAgICAgICAgICB1ID0gdzAgLyAocmhvMiAqIGQxKSAqIChjb3NocjAgKiB0YW5oKHJobyAqIHMgKyByMCkgLSBzaW5oKHIwKSk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdXgwICsgdSAqIGR4LFxuICAgICAgICAgIHV5MCArIHUgKiBkeSxcbiAgICAgICAgICB3MCAqIGNvc2hyMCAvIGNvc2gocmhvICogcyArIHIwKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGkuZHVyYXRpb24gPSBTICogMTAwMCAqIHJobyAvIE1hdGguU1FSVDI7XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHpvb20ucmhvID0gZnVuY3Rpb24oXykge1xuICAgIHZhciBfMSA9IE1hdGgubWF4KDFlLTMsICtfKSwgXzIgPSBfMSAqIF8xLCBfNCA9IF8yICogXzI7XG4gICAgcmV0dXJuIHpvb21SaG8oXzEsIF8yLCBfNCk7XG4gIH07XG5cbiAgcmV0dXJuIHpvb207XG59KShNYXRoLlNRUlQyLCAyLCA0KTtcbiIsICJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7dGltZXIsIHRpbWVvdXR9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZW1wdHlPbiA9IGRpc3BhdGNoKFwic3RhcnRcIiwgXCJlbmRcIiwgXCJjYW5jZWxcIiwgXCJpbnRlcnJ1cHRcIik7XG52YXIgZW1wdHlUd2VlbiA9IFtdO1xuXG5leHBvcnQgdmFyIENSRUFURUQgPSAwO1xuZXhwb3J0IHZhciBTQ0hFRFVMRUQgPSAxO1xuZXhwb3J0IHZhciBTVEFSVElORyA9IDI7XG5leHBvcnQgdmFyIFNUQVJURUQgPSAzO1xuZXhwb3J0IHZhciBSVU5OSU5HID0gNDtcbmV4cG9ydCB2YXIgRU5ESU5HID0gNTtcbmV4cG9ydCB2YXIgRU5ERUQgPSA2O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lLCBpZCwgaW5kZXgsIGdyb3VwLCB0aW1pbmcpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlcykgbm9kZS5fX3RyYW5zaXRpb24gPSB7fTtcbiAgZWxzZSBpZiAoaWQgaW4gc2NoZWR1bGVzKSByZXR1cm47XG4gIGNyZWF0ZShub2RlLCBpZCwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaW5kZXg6IGluZGV4LCAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgZ3JvdXA6IGdyb3VwLCAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgb246IGVtcHR5T24sXG4gICAgdHdlZW46IGVtcHR5VHdlZW4sXG4gICAgdGltZTogdGltaW5nLnRpbWUsXG4gICAgZGVsYXk6IHRpbWluZy5kZWxheSxcbiAgICBkdXJhdGlvbjogdGltaW5nLmR1cmF0aW9uLFxuICAgIGVhc2U6IHRpbWluZy5lYXNlLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHN0YXRlOiBDUkVBVEVEXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBnZXQobm9kZSwgaWQpO1xuICBpZiAoc2NoZWR1bGUuc3RhdGUgPiBDUkVBVEVEKSB0aHJvdyBuZXcgRXJyb3IoXCJ0b28gbGF0ZTsgYWxyZWFkeSBzY2hlZHVsZWRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBnZXQobm9kZSwgaWQpO1xuICBpZiAoc2NoZWR1bGUuc3RhdGUgPiBTVEFSVEVEKSB0aHJvdyBuZXcgRXJyb3IoXCJ0b28gbGF0ZTsgYWxyZWFkeSBydW5uaW5nXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGUgfHwgIShzY2hlZHVsZSA9IHNjaGVkdWxlW2lkXSkpIHRocm93IG5ldyBFcnJvcihcInRyYW5zaXRpb24gbm90IGZvdW5kXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShub2RlLCBpZCwgc2VsZikge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICB0d2VlbjtcblxuICAvLyBJbml0aWFsaXplIHRoZSBzZWxmIHRpbWVyIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY3JlYXRlZC5cbiAgLy8gTm90ZSB0aGUgYWN0dWFsIGRlbGF5IGlzIG5vdCBrbm93biB1bnRpbCB0aGUgZmlyc3QgY2FsbGJhY2shXG4gIHNjaGVkdWxlc1tpZF0gPSBzZWxmO1xuICBzZWxmLnRpbWVyID0gdGltZXIoc2NoZWR1bGUsIDAsIHNlbGYudGltZSk7XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUoZWxhcHNlZCkge1xuICAgIHNlbGYuc3RhdGUgPSBTQ0hFRFVMRUQ7XG4gICAgc2VsZi50aW1lci5yZXN0YXJ0KHN0YXJ0LCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuXG4gICAgLy8gSWYgdGhlIGVsYXBzZWQgZGVsYXkgaXMgbGVzcyB0aGFuIG91ciBmaXJzdCBzbGVlcCwgc3RhcnQgaW1tZWRpYXRlbHkuXG4gICAgaWYgKHNlbGYuZGVsYXkgPD0gZWxhcHNlZCkgc3RhcnQoZWxhcHNlZCAtIHNlbGYuZGVsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoZWxhcHNlZCkge1xuICAgIHZhciBpLCBqLCBuLCBvO1xuXG4gICAgLy8gSWYgdGhlIHN0YXRlIGlzIG5vdCBTQ0hFRFVMRUQsIHRoZW4gd2UgcHJldmlvdXNseSBlcnJvcmVkIG9uIHN0YXJ0LlxuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTQ0hFRFVMRUQpIHJldHVybiBzdG9wKCk7XG5cbiAgICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgICBvID0gc2NoZWR1bGVzW2ldO1xuICAgICAgaWYgKG8ubmFtZSAhPT0gc2VsZi5uYW1lKSBjb250aW51ZTtcblxuICAgICAgLy8gV2hpbGUgdGhpcyBlbGVtZW50IGFscmVhZHkgaGFzIGEgc3RhcnRpbmcgdHJhbnNpdGlvbiBkdXJpbmcgdGhpcyBmcmFtZSxcbiAgICAgIC8vIGRlZmVyIHN0YXJ0aW5nIGFuIGludGVycnVwdGluZyB0cmFuc2l0aW9uIHVudGlsIHRoYXQgdHJhbnNpdGlvbiBoYXMgYVxuICAgICAgLy8gY2hhbmNlIHRvIHRpY2sgKGFuZCBwb3NzaWJseSBlbmQpOyBzZWUgZDMvZDMtdHJhbnNpdGlvbiM1NCFcbiAgICAgIGlmIChvLnN0YXRlID09PSBTVEFSVEVEKSByZXR1cm4gdGltZW91dChzdGFydCk7XG5cbiAgICAgIC8vIEludGVycnVwdCB0aGUgYWN0aXZlIHRyYW5zaXRpb24sIGlmIGFueS5cbiAgICAgIGlmIChvLnN0YXRlID09PSBSVU5OSU5HKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImludGVycnVwdFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FuY2VsIGFueSBwcmUtZW1wdGVkIHRyYW5zaXRpb25zLlxuICAgICAgZWxzZSBpZiAoK2kgPCBpZCkge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVmZXIgdGhlIGZpcnN0IHRpY2sgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGZyYW1lOyBzZWUgZDMvZDMjMTU3Ni5cbiAgICAvLyBOb3RlIHRoZSB0cmFuc2l0aW9uIG1heSBiZSBjYW5jZWxlZCBhZnRlciBzdGFydCBhbmQgYmVmb3JlIHRoZSBmaXJzdCB0aWNrIVxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIHNjaGVkdWxlZCBiZWZvcmUgdGhlIHN0YXJ0IGV2ZW50OyBzZWUgZDMvZDMtdHJhbnNpdGlvbiMxNiFcbiAgICAvLyBBc3N1bWluZyB0aGlzIGlzIHN1Y2Nlc3NmdWwsIHN1YnNlcXVlbnQgY2FsbGJhY2tzIGdvIHN0cmFpZ2h0IHRvIHRpY2suXG4gICAgdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLnN0YXRlID09PSBTVEFSVEVEKSB7XG4gICAgICAgIHNlbGYuc3RhdGUgPSBSVU5OSU5HO1xuICAgICAgICBzZWxmLnRpbWVyLnJlc3RhcnQodGljaywgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcbiAgICAgICAgdGljayhlbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERpc3BhdGNoIHRoZSBzdGFydCBldmVudC5cbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSB0aGUgdHdlZW4gYXJlIGluaXRpYWxpemVkLlxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVElORztcbiAgICBzZWxmLm9uLmNhbGwoXCJzdGFydFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU1RBUlRJTkcpIHJldHVybjsgLy8gaW50ZXJydXB0ZWRcbiAgICBzZWxmLnN0YXRlID0gU1RBUlRFRDtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHR3ZWVuLCBkZWxldGluZyBudWxsIHR3ZWVuLlxuICAgIHR3ZWVuID0gbmV3IEFycmF5KG4gPSBzZWxmLnR3ZWVuLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgaiA9IC0xOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobyA9IHNlbGYudHdlZW5baV0udmFsdWUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKSkge1xuICAgICAgICB0d2VlblsrK2pdID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgdHdlZW4ubGVuZ3RoID0gaiArIDE7XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICB2YXIgdCA9IGVsYXBzZWQgPCBzZWxmLmR1cmF0aW9uID8gc2VsZi5lYXNlLmNhbGwobnVsbCwgZWxhcHNlZCAvIHNlbGYuZHVyYXRpb24pIDogKHNlbGYudGltZXIucmVzdGFydChzdG9wKSwgc2VsZi5zdGF0ZSA9IEVORElORywgMSksXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbiA9IHR3ZWVuLmxlbmd0aDtcblxuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICB0d2VlbltpXS5jYWxsKG5vZGUsIHQpO1xuICAgIH1cblxuICAgIC8vIERpc3BhdGNoIHRoZSBlbmQgZXZlbnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgPT09IEVORElORykge1xuICAgICAgc2VsZi5vbi5jYWxsKFwiZW5kXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgc2VsZi5zdGF0ZSA9IEVOREVEO1xuICAgIHNlbGYudGltZXIuc3RvcCgpO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaWRdO1xuICAgIGZvciAodmFyIGkgaW4gc2NoZWR1bGVzKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG4gIH1cbn1cbiIsICJpbXBvcnQge1NUQVJUSU5HLCBFTkRJTkcsIEVOREVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbXB0eSA9IHRydWUsXG4gICAgICBpO1xuXG4gIGlmICghc2NoZWR1bGVzKSByZXR1cm47XG5cbiAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcblxuICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkubmFtZSAhPT0gbmFtZSkgeyBlbXB0eSA9IGZhbHNlOyBjb250aW51ZTsgfVxuICAgIGFjdGl2ZSA9IHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcgJiYgc2NoZWR1bGUuc3RhdGUgPCBFTkRJTkc7XG4gICAgc2NoZWR1bGUuc3RhdGUgPSBFTkRFRDtcbiAgICBzY2hlZHVsZS50aW1lci5zdG9wKCk7XG4gICAgc2NoZWR1bGUub24uY2FsbChhY3RpdmUgPyBcImludGVycnVwdFwiIDogXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2NoZWR1bGUuaW5kZXgsIHNjaGVkdWxlLmdyb3VwKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICB9XG5cbiAgaWYgKGVtcHR5KSBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG59XG4iLCAiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIHR3ZWVuUmVtb3ZlKGlkLCBuYW1lKSB7XG4gIHZhciB0d2VlbjAsIHR3ZWVuMTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZVx1MjAxOXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSB0d2VlbjAgPSB0d2VlbjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjEgPSB0d2VlbjEuc2xpY2UoKTtcbiAgICAgICAgICB0d2VlbjEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHR3ZWVuRnVuY3Rpb24oaWQsIG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0d2VlbjAsIHR3ZWVuMTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gKHR3ZWVuMCA9IHR3ZWVuKS5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgdCA9IHtuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWV9LCBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xW2ldID0gdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGkgPT09IG4pIHR3ZWVuMS5wdXNoKHQpO1xuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICBuYW1lICs9IFwiXCI7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0KHRoaXMubm9kZSgpLCBpZCkudHdlZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2Vlbi5sZW5ndGgsIHQ7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgodCA9IHR3ZWVuW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0LnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGwgPyB0d2VlblJlbW92ZSA6IHR3ZWVuRnVuY3Rpb24pKGlkLCBuYW1lLCB2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHdlZW5WYWx1ZSh0cmFuc2l0aW9uLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWQgPSB0cmFuc2l0aW9uLl9pZDtcblxuICB0cmFuc2l0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKTtcbiAgICAoc2NoZWR1bGUudmFsdWUgfHwgKHNjaGVkdWxlLnZhbHVlID0ge30pKVtuYW1lXSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIGdldChub2RlLCBpZCkudmFsdWVbbmFtZV07XG4gIH07XG59XG4iLCAiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyLCBpbnRlcnBvbGF0ZVJnYiwgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBjO1xuICByZXR1cm4gKHR5cGVvZiBiID09PSBcIm51bWJlclwiID8gaW50ZXJwb2xhdGVOdW1iZXJcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gaW50ZXJwb2xhdGVSZ2JcbiAgICAgIDogKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIGludGVycG9sYXRlUmdiKVxuICAgICAgOiBpbnRlcnBvbGF0ZVN0cmluZykoYSwgYik7XG59XG4iLCAiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpLCBzdHJpbmcxO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSksIGkgPSBmdWxsbmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB0aGlzLmF0dHJUd2VlbihuYW1lLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbikoZnVsbG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJhdHRyLlwiICsgbmFtZSwgdmFsdWUpKVxuICAgICAgOiB2YWx1ZSA9PSBudWxsID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkoZnVsbG5hbWUpXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KShmdWxsbmFtZSwgaSwgdmFsdWUpKTtcbn1cbiIsICJpbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGUobmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIGkuY2FsbCh0aGlzLCB0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIGkuY2FsbCh0aGlzLCB0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlKG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJhdHRyLlwiICsgbmFtZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgKGZ1bGxuYW1lLmxvY2FsID8gYXR0clR3ZWVuTlMgOiBhdHRyVHdlZW4pKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7Z2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxheUZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXlDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkZWxheUZ1bmN0aW9uXG4gICAgICAgICAgOiBkZWxheUNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kZWxheTtcbn1cbiIsICJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkdXJhdGlvbkZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkdXJhdGlvbkNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZHVyYXRpb25GdW5jdGlvblxuICAgICAgICAgIDogZHVyYXRpb25Db25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZHVyYXRpb247XG59XG4iLCAiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmVhc2U7XG59XG4iLCAiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VWYXJ5aW5nKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0eXBlb2YgdiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLmVhY2goZWFzZVZhcnlpbmcodGhpcy5faWQsIHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHttYXRjaGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCAiaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gIGlmICh0cmFuc2l0aW9uLl9pZCAhPT0gdGhpcy5faWQpIHRocm93IG5ldyBFcnJvcjtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gdHJhbnNpdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCAiaW1wb3J0IHtnZXQsIHNldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gc3RhcnQobmFtZSkge1xuICByZXR1cm4gKG5hbWUgKyBcIlwiKS50cmltKCkuc3BsaXQoL158XFxzKy8pLmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuICF0IHx8IHQgPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBvbjAsIG9uMSwgc2l0ID0gc3RhcnQobmFtZSkgPyBpbml0IDogc2V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2l0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCkgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihuYW1lLCBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyXG4gICAgICA/IGdldCh0aGlzLm5vZGUoKSwgaWQpLm9uLm9uKG5hbWUpXG4gICAgICA6IHRoaXMuZWFjaChvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikpO1xufVxuIiwgImZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgraSAhPT0gaWQpIHJldHVybjtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgcmVtb3ZlRnVuY3Rpb24odGhpcy5faWQpKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdG9yfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgICBzY2hlZHVsZShzdWJncm91cFtpXSwgbmFtZSwgaWQsIGksIHN1Ymdyb3VwLCBnZXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxudmFyIFNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9ncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGUuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVOdWxsKG5hbWUsIGludGVycG9sYXRlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgc3RyaW5nMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHN0cmluZzEwID0gc3RyaW5nMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgdmFsdWUxID0gdmFsdWUodGhpcyksXG4gICAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgc3RyaW5nMSA9IHZhbHVlMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHN0cmluZzAgPT09IHN0cmluZzEgPyBudWxsXG4gICAgICAgIDogc3RyaW5nMCA9PT0gc3RyaW5nMDAgJiYgc3RyaW5nMSA9PT0gc3RyaW5nMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiAoc3RyaW5nMTAgPSBzdHJpbmcxLCBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZShzdHJpbmcwMCA9IHN0cmluZzAsIHZhbHVlMSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZU1heWJlUmVtb3ZlKGlkLCBuYW1lKSB7XG4gIHZhciBvbjAsIG9uMSwgbGlzdGVuZXIwLCBrZXkgPSBcInN0eWxlLlwiICsgbmFtZSwgZXZlbnQgPSBcImVuZC5cIiArIGtleSwgcmVtb3ZlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbixcbiAgICAgICAgbGlzdGVuZXIgPSBzY2hlZHVsZS52YWx1ZVtrZXldID09IG51bGwgPyByZW1vdmUgfHwgKHJlbW92ZSA9IHN0eWxlUmVtb3ZlKG5hbWUpKSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCB8fCBsaXN0ZW5lcjAgIT09IGxpc3RlbmVyKSAob24xID0gKG9uMCA9IG9uKS5jb3B5KCkpLm9uKGV2ZW50LCBsaXN0ZW5lcjAgPSBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBpID0gKG5hbWUgKz0gXCJcIikgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlTnVsbChuYW1lLCBpKSlcbiAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIHN0eWxlUmVtb3ZlKG5hbWUpKVxuICAgIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUZ1bmN0aW9uKG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJzdHlsZS5cIiArIG5hbWUsIHZhbHVlKSkpXG4gICAgICAuZWFjaChzdHlsZU1heWJlUmVtb3ZlKHRoaXMuX2lkLCBuYW1lKSlcbiAgICA6IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlQ29uc3RhbnQobmFtZSwgaSwgdmFsdWUpLCBwcmlvcml0eSlcbiAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIG51bGwpO1xufVxuIiwgImZ1bmN0aW9uIHN0eWxlSW50ZXJwb2xhdGUobmFtZSwgaSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkuY2FsbCh0aGlzLCB0KSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgdCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQgPSAoaTAgPSBpKSAmJiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsICJpbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWUxID09IG51bGwgPyBcIlwiIDogdmFsdWUxO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy50d2VlbihcInRleHRcIiwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gdGV4dEZ1bmN0aW9uKHR3ZWVuVmFsdWUodGhpcywgXCJ0ZXh0XCIsIHZhbHVlKSlcbiAgICAgIDogdGV4dENvbnN0YW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiKSk7XG59XG4iLCAiZnVuY3Rpb24gdGV4dEludGVycG9sYXRlKGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gaS5jYWxsKHRoaXMsIHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0VHdlZW4odmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiB0ZXh0SW50ZXJwb2xhdGUoaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBrZXkgPSBcInRleHRcIjtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHRleHRUd2Vlbih2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwgImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG9uMCwgb24xLCB0aGF0ID0gdGhpcywgaWQgPSB0aGF0Ll9pZCwgc2l6ZSA9IHRoYXQuc2l6ZSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGNhbmNlbCA9IHt2YWx1ZTogcmVqZWN0fSxcbiAgICAgICAgZW5kID0ge3ZhbHVlOiBmdW5jdGlvbigpIHsgaWYgKC0tc2l6ZSA9PT0gMCkgcmVzb2x2ZSgpOyB9fTtcblxuICAgIHRoYXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdlXHUyMDE5cmUgZG9uZSFcbiAgICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICAgIGlmIChvbiAhPT0gb24wKSB7XG4gICAgICAgIG9uMSA9IChvbjAgPSBvbikuY29weSgpO1xuICAgICAgICBvbjEuXy5jYW5jZWwucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5pbnRlcnJ1cHQucHVzaChjYW5jZWwpO1xuICAgICAgICBvbjEuXy5lbmQucHVzaChlbmQpO1xuICAgICAgfVxuXG4gICAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgICB9KTtcblxuICAgIC8vIFRoZSBzZWxlY3Rpb24gd2FzIGVtcHR5LCByZXNvbHZlIGVuZCBpbW1lZGlhdGVseVxuICAgIGlmIChzaXplID09PSAwKSByZXNvbHZlKCk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHJUd2VlbiBmcm9tIFwiLi9hdHRyVHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2RlbGF5IGZyb20gXCIuL2RlbGF5LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZSBmcm9tIFwiLi9lYXNlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlVmFyeWluZyBmcm9tIFwiLi9lYXNlVmFyeWluZy5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX29uIGZyb20gXCIuL29uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3Rpb24gZnJvbSBcIi4vc2VsZWN0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGVUd2VlbiBmcm9tIFwiLi9zdHlsZVR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RleHRUd2VlbiBmcm9tIFwiLi90ZXh0VHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHdlZW4gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2VuZCBmcm9tIFwiLi9lbmQuanNcIjtcblxudmFyIGlkID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zaXRpb24oZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCkge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xuICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgdGhpcy5faWQgPSBpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbihuYW1lKSB7XG4gIHJldHVybiBzZWxlY3Rpb24oKS50cmFuc2l0aW9uKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SWQoKSB7XG4gIHJldHVybiArK2lkO1xufVxuXG52YXIgc2VsZWN0aW9uX3Byb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGU7XG5cblRyYW5zaXRpb24ucHJvdG90eXBlID0gdHJhbnNpdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2l0aW9uLFxuICBzZWxlY3Q6IHRyYW5zaXRpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHRyYW5zaXRpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3Byb3RvdHlwZS5zZWxlY3RDaGlsZCxcbiAgc2VsZWN0Q2hpbGRyZW46IHNlbGVjdGlvbl9wcm90b3R5cGUuc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogdHJhbnNpdGlvbl9maWx0ZXIsXG4gIG1lcmdlOiB0cmFuc2l0aW9uX21lcmdlLFxuICBzZWxlY3Rpb246IHRyYW5zaXRpb25fc2VsZWN0aW9uLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uX3RyYW5zaXRpb24sXG4gIGNhbGw6IHNlbGVjdGlvbl9wcm90b3R5cGUuY2FsbCxcbiAgbm9kZXM6IHNlbGVjdGlvbl9wcm90b3R5cGUubm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9wcm90b3R5cGUubm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5zaXplLFxuICBlbXB0eTogc2VsZWN0aW9uX3Byb3RvdHlwZS5lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX3Byb3RvdHlwZS5lYWNoLFxuICBvbjogdHJhbnNpdGlvbl9vbixcbiAgYXR0cjogdHJhbnNpdGlvbl9hdHRyLFxuICBhdHRyVHdlZW46IHRyYW5zaXRpb25fYXR0clR3ZWVuLFxuICBzdHlsZTogdHJhbnNpdGlvbl9zdHlsZSxcbiAgc3R5bGVUd2VlbjogdHJhbnNpdGlvbl9zdHlsZVR3ZWVuLFxuICB0ZXh0OiB0cmFuc2l0aW9uX3RleHQsXG4gIHRleHRUd2VlbjogdHJhbnNpdGlvbl90ZXh0VHdlZW4sXG4gIHJlbW92ZTogdHJhbnNpdGlvbl9yZW1vdmUsXG4gIHR3ZWVuOiB0cmFuc2l0aW9uX3R3ZWVuLFxuICBkZWxheTogdHJhbnNpdGlvbl9kZWxheSxcbiAgZHVyYXRpb246IHRyYW5zaXRpb25fZHVyYXRpb24sXG4gIGVhc2U6IHRyYW5zaXRpb25fZWFzZSxcbiAgZWFzZVZhcnlpbmc6IHRyYW5zaXRpb25fZWFzZVZhcnlpbmcsXG4gIGVuZDogdHJhbnNpdGlvbl9lbmQsXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiBzZWxlY3Rpb25fcHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl1cbn07XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG4iLCAiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYW5zaXRpb24gJHtpZH0gbm90IGZvdW5kYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBzZWxlY3Rpb25faW50ZXJydXB0IGZyb20gXCIuL2ludGVycnVwdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcblxuc2VsZWN0aW9uLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBzZWxlY3Rpb25faW50ZXJydXB0O1xuc2VsZWN0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uID0gc2VsZWN0aW9uX3RyYW5zaXRpb247XG4iLCAiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFpvb21FdmVudCh0eXBlLCB7XG4gIHNvdXJjZUV2ZW50LFxuICB0YXJnZXQsXG4gIHRyYW5zZm9ybSxcbiAgZGlzcGF0Y2hcbn0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHR5cGU6IHt2YWx1ZTogdHlwZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBzb3VyY2VFdmVudDoge3ZhbHVlOiBzb3VyY2VFdmVudCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB0YXJnZXQ6IHt2YWx1ZTogdGFyZ2V0LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHRyYW5zZm9ybToge3ZhbHVlOiB0cmFuc2Zvcm0sIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgXzoge3ZhbHVlOiBkaXNwYXRjaH1cbiAgfSk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFRyYW5zZm9ybShrLCB4LCB5KSB7XG4gIHRoaXMuayA9IGs7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2Zvcm0sXG4gIHNjYWxlOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIGsgPT09IDEgPyB0aGlzIDogbmV3IFRyYW5zZm9ybSh0aGlzLmsgKiBrLCB0aGlzLngsIHRoaXMueSk7XG4gIH0sXG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24oeCwgeSkge1xuICAgIHJldHVybiB4ID09PSAwICYgeSA9PT0gMCA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuaywgdGhpcy54ICsgdGhpcy5rICogeCwgdGhpcy55ICsgdGhpcy5rICogeSk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBbcG9pbnRbMF0gKiB0aGlzLmsgKyB0aGlzLngsIHBvaW50WzFdICogdGhpcy5rICsgdGhpcy55XTtcbiAgfSxcbiAgYXBwbHlYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHggKiB0aGlzLmsgKyB0aGlzLng7XG4gIH0sXG4gIGFwcGx5WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiB5ICogdGhpcy5rICsgdGhpcy55O1xuICB9LFxuICBpbnZlcnQ6IGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIFsobG9jYXRpb25bMF0gLSB0aGlzLngpIC8gdGhpcy5rLCAobG9jYXRpb25bMV0gLSB0aGlzLnkpIC8gdGhpcy5rXTtcbiAgfSxcbiAgaW52ZXJ0WDogZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiAoeCAtIHRoaXMueCkgLyB0aGlzLms7XG4gIH0sXG4gIGludmVydFk6IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gKHkgLSB0aGlzLnkpIC8gdGhpcy5rO1xuICB9LFxuICByZXNjYWxlWDogZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4LmNvcHkoKS5kb21haW4oeC5yYW5nZSgpLm1hcCh0aGlzLmludmVydFgsIHRoaXMpLm1hcCh4LmludmVydCwgeCkpO1xuICB9LFxuICByZXNjYWxlWTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiB5LmNvcHkoKS5kb21haW4oeS5yYW5nZSgpLm1hcCh0aGlzLmludmVydFksIHRoaXMpLm1hcCh5LmludmVydCwgeSkpO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgdGhpcy54ICsgXCIsXCIgKyB0aGlzLnkgKyBcIikgc2NhbGUoXCIgKyB0aGlzLmsgKyBcIilcIjtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IG5ldyBUcmFuc2Zvcm0oMSwgMCwgMCk7XG5cbnRyYW5zZm9ybS5wcm90b3R5cGUgPSBUcmFuc2Zvcm0ucHJvdG90eXBlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm0obm9kZSkge1xuICB3aGlsZSAoIW5vZGUuX196b29tKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuIGlkZW50aXR5O1xuICByZXR1cm4gbm9kZS5fX3pvb207XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5vcHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuIiwgImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHtkcmFnRGlzYWJsZSwgZHJhZ0VuYWJsZX0gZnJvbSBcImQzLWRyYWdcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVab29tfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c2VsZWN0LCBwb2ludGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge2ludGVycnVwdH0gZnJvbSBcImQzLXRyYW5zaXRpb25cIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IFpvb21FdmVudCBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHtUcmFuc2Zvcm0sIGlkZW50aXR5fSBmcm9tIFwiLi90cmFuc2Zvcm0uanNcIjtcbmltcG9ydCBub2V2ZW50LCB7bm9wcm9wYWdhdGlvbn0gZnJvbSBcIi4vbm9ldmVudC5qc1wiO1xuXG4vLyBJZ25vcmUgcmlnaHQtY2xpY2ssIHNpbmNlIHRoYXQgc2hvdWxkIG9wZW4gdGhlIGNvbnRleHQgbWVudS5cbi8vIGV4Y2VwdCBmb3IgcGluY2gtdG8tem9vbSwgd2hpY2ggaXMgc2VudCBhcyBhIHdoZWVsK2N0cmxLZXkgZXZlbnRcbmZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXIoZXZlbnQpIHtcbiAgcmV0dXJuICghZXZlbnQuY3RybEtleSB8fCBldmVudC50eXBlID09PSAnd2hlZWwnKSAmJiAhZXZlbnQuYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0RXh0ZW50KCkge1xuICB2YXIgZSA9IHRoaXM7XG4gIGlmIChlIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgIGUgPSBlLm93bmVyU1ZHRWxlbWVudCB8fCBlO1xuICAgIGlmIChlLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikpIHtcbiAgICAgIGUgPSBlLnZpZXdCb3guYmFzZVZhbDtcbiAgICAgIHJldHVybiBbW2UueCwgZS55XSwgW2UueCArIGUud2lkdGgsIGUueSArIGUuaGVpZ2h0XV07XG4gICAgfVxuICAgIHJldHVybiBbWzAsIDBdLCBbZS53aWR0aC5iYXNlVmFsLnZhbHVlLCBlLmhlaWdodC5iYXNlVmFsLnZhbHVlXV07XG4gIH1cbiAgcmV0dXJuIFtbMCwgMF0sIFtlLmNsaWVudFdpZHRoLCBlLmNsaWVudEhlaWdodF1dO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VHJhbnNmb3JtKCkge1xuICByZXR1cm4gdGhpcy5fX3pvb20gfHwgaWRlbnRpdHk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRXaGVlbERlbHRhKGV2ZW50KSB7XG4gIHJldHVybiAtZXZlbnQuZGVsdGFZICogKGV2ZW50LmRlbHRhTW9kZSA9PT0gMSA/IDAuMDUgOiBldmVudC5kZWx0YU1vZGUgPyAxIDogMC4wMDIpICogKGV2ZW50LmN0cmxLZXkgPyAxMCA6IDEpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VG91Y2hhYmxlKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IChcIm9udG91Y2hzdGFydFwiIGluIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29uc3RyYWluKHRyYW5zZm9ybSwgZXh0ZW50LCB0cmFuc2xhdGVFeHRlbnQpIHtcbiAgdmFyIGR4MCA9IHRyYW5zZm9ybS5pbnZlcnRYKGV4dGVudFswXVswXSkgLSB0cmFuc2xhdGVFeHRlbnRbMF1bMF0sXG4gICAgICBkeDEgPSB0cmFuc2Zvcm0uaW52ZXJ0WChleHRlbnRbMV1bMF0pIC0gdHJhbnNsYXRlRXh0ZW50WzFdWzBdLFxuICAgICAgZHkwID0gdHJhbnNmb3JtLmludmVydFkoZXh0ZW50WzBdWzFdKSAtIHRyYW5zbGF0ZUV4dGVudFswXVsxXSxcbiAgICAgIGR5MSA9IHRyYW5zZm9ybS5pbnZlcnRZKGV4dGVudFsxXVsxXSkgLSB0cmFuc2xhdGVFeHRlbnRbMV1bMV07XG4gIHJldHVybiB0cmFuc2Zvcm0udHJhbnNsYXRlKFxuICAgIGR4MSA+IGR4MCA/IChkeDAgKyBkeDEpIC8gMiA6IE1hdGgubWluKDAsIGR4MCkgfHwgTWF0aC5tYXgoMCwgZHgxKSxcbiAgICBkeTEgPiBkeTAgPyAoZHkwICsgZHkxKSAvIDIgOiBNYXRoLm1pbigwLCBkeTApIHx8IE1hdGgubWF4KDAsIGR5MSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyLFxuICAgICAgZXh0ZW50ID0gZGVmYXVsdEV4dGVudCxcbiAgICAgIGNvbnN0cmFpbiA9IGRlZmF1bHRDb25zdHJhaW4sXG4gICAgICB3aGVlbERlbHRhID0gZGVmYXVsdFdoZWVsRGVsdGEsXG4gICAgICB0b3VjaGFibGUgPSBkZWZhdWx0VG91Y2hhYmxlLFxuICAgICAgc2NhbGVFeHRlbnQgPSBbMCwgSW5maW5pdHldLFxuICAgICAgdHJhbnNsYXRlRXh0ZW50ID0gW1stSW5maW5pdHksIC1JbmZpbml0eV0sIFtJbmZpbml0eSwgSW5maW5pdHldXSxcbiAgICAgIGR1cmF0aW9uID0gMjUwLFxuICAgICAgaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZVpvb20sXG4gICAgICBsaXN0ZW5lcnMgPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiem9vbVwiLCBcImVuZFwiKSxcbiAgICAgIHRvdWNoc3RhcnRpbmcsXG4gICAgICB0b3VjaGZpcnN0LFxuICAgICAgdG91Y2hlbmRpbmcsXG4gICAgICB0b3VjaERlbGF5ID0gNTAwLFxuICAgICAgd2hlZWxEZWxheSA9IDE1MCxcbiAgICAgIGNsaWNrRGlzdGFuY2UyID0gMCxcbiAgICAgIHRhcERpc3RhbmNlID0gMTA7XG5cbiAgZnVuY3Rpb24gem9vbShzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb25cbiAgICAgICAgLnByb3BlcnR5KFwiX196b29tXCIsIGRlZmF1bHRUcmFuc2Zvcm0pXG4gICAgICAgIC5vbihcIndoZWVsLnpvb21cIiwgd2hlZWxlZCwge3Bhc3NpdmU6IGZhbHNlfSlcbiAgICAgICAgLm9uKFwibW91c2Vkb3duLnpvb21cIiwgbW91c2Vkb3duZWQpXG4gICAgICAgIC5vbihcImRibGNsaWNrLnpvb21cIiwgZGJsY2xpY2tlZClcbiAgICAgIC5maWx0ZXIodG91Y2hhYmxlKVxuICAgICAgICAub24oXCJ0b3VjaHN0YXJ0Lnpvb21cIiwgdG91Y2hzdGFydGVkKVxuICAgICAgICAub24oXCJ0b3VjaG1vdmUuem9vbVwiLCB0b3VjaG1vdmVkKVxuICAgICAgICAub24oXCJ0b3VjaGVuZC56b29tIHRvdWNoY2FuY2VsLnpvb21cIiwgdG91Y2hlbmRlZClcbiAgICAgICAgLnN0eWxlKFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgfVxuXG4gIHpvb20udHJhbnNmb3JtID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgdHJhbnNmb3JtLCBwb2ludCwgZXZlbnQpIHtcbiAgICB2YXIgc2VsZWN0aW9uID0gY29sbGVjdGlvbi5zZWxlY3Rpb24gPyBjb2xsZWN0aW9uLnNlbGVjdGlvbigpIDogY29sbGVjdGlvbjtcbiAgICBzZWxlY3Rpb24ucHJvcGVydHkoXCJfX3pvb21cIiwgZGVmYXVsdFRyYW5zZm9ybSk7XG4gICAgaWYgKGNvbGxlY3Rpb24gIT09IHNlbGVjdGlvbikge1xuICAgICAgc2NoZWR1bGUoY29sbGVjdGlvbiwgdHJhbnNmb3JtLCBwb2ludCwgZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3Rpb24uaW50ZXJydXB0KCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgZ2VzdHVyZSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgLmV2ZW50KGV2ZW50KVxuICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgLnpvb20obnVsbCwgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiID8gdHJhbnNmb3JtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0cmFuc2Zvcm0pXG4gICAgICAgICAgLmVuZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHpvb20uc2NhbGVCeSA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgaywgcCwgZXZlbnQpIHtcbiAgICB6b29tLnNjYWxlVG8oc2VsZWN0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrMCA9IHRoaXMuX196b29tLmssXG4gICAgICAgICAgazEgPSB0eXBlb2YgayA9PT0gXCJmdW5jdGlvblwiID8gay5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogaztcbiAgICAgIHJldHVybiBrMCAqIGsxO1xuICAgIH0sIHAsIGV2ZW50KTtcbiAgfTtcblxuICB6b29tLnNjYWxlVG8gPSBmdW5jdGlvbihzZWxlY3Rpb24sIGssIHAsIGV2ZW50KSB7XG4gICAgem9vbS50cmFuc2Zvcm0oc2VsZWN0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gZXh0ZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgdDAgPSB0aGlzLl9fem9vbSxcbiAgICAgICAgICBwMCA9IHAgPT0gbnVsbCA/IGNlbnRyb2lkKGUpIDogdHlwZW9mIHAgPT09IFwiZnVuY3Rpb25cIiA/IHAuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHAsXG4gICAgICAgICAgcDEgPSB0MC5pbnZlcnQocDApLFxuICAgICAgICAgIGsxID0gdHlwZW9mIGsgPT09IFwiZnVuY3Rpb25cIiA/IGsuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGs7XG4gICAgICByZXR1cm4gY29uc3RyYWluKHRyYW5zbGF0ZShzY2FsZSh0MCwgazEpLCBwMCwgcDEpLCBlLCB0cmFuc2xhdGVFeHRlbnQpO1xuICAgIH0sIHAsIGV2ZW50KTtcbiAgfTtcblxuICB6b29tLnRyYW5zbGF0ZUJ5ID0gZnVuY3Rpb24oc2VsZWN0aW9uLCB4LCB5LCBldmVudCkge1xuICAgIHpvb20udHJhbnNmb3JtKHNlbGVjdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY29uc3RyYWluKHRoaXMuX196b29tLnRyYW5zbGF0ZShcbiAgICAgICAgdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IHguYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHgsXG4gICAgICAgIHR5cGVvZiB5ID09PSBcImZ1bmN0aW9uXCIgPyB5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB5XG4gICAgICApLCBleHRlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdHJhbnNsYXRlRXh0ZW50KTtcbiAgICB9LCBudWxsLCBldmVudCk7XG4gIH07XG5cbiAgem9vbS50cmFuc2xhdGVUbyA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgeCwgeSwgcCwgZXZlbnQpIHtcbiAgICB6b29tLnRyYW5zZm9ybShzZWxlY3Rpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGUgPSBleHRlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgICB0ID0gdGhpcy5fX3pvb20sXG4gICAgICAgICAgcDAgPSBwID09IG51bGwgPyBjZW50cm9pZChlKSA6IHR5cGVvZiBwID09PSBcImZ1bmN0aW9uXCIgPyBwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBwO1xuICAgICAgcmV0dXJuIGNvbnN0cmFpbihpZGVudGl0eS50cmFuc2xhdGUocDBbMF0sIHAwWzFdKS5zY2FsZSh0LmspLnRyYW5zbGF0ZShcbiAgICAgICAgdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIiA/IC14LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAteCxcbiAgICAgICAgdHlwZW9mIHkgPT09IFwiZnVuY3Rpb25cIiA/IC15LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAteVxuICAgICAgKSwgZSwgdHJhbnNsYXRlRXh0ZW50KTtcbiAgICB9LCBwLCBldmVudCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2NhbGUodHJhbnNmb3JtLCBrKSB7XG4gICAgayA9IE1hdGgubWF4KHNjYWxlRXh0ZW50WzBdLCBNYXRoLm1pbihzY2FsZUV4dGVudFsxXSwgaykpO1xuICAgIHJldHVybiBrID09PSB0cmFuc2Zvcm0uayA/IHRyYW5zZm9ybSA6IG5ldyBUcmFuc2Zvcm0oaywgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0cmFuc2Zvcm0sIHAwLCBwMSkge1xuICAgIHZhciB4ID0gcDBbMF0gLSBwMVswXSAqIHRyYW5zZm9ybS5rLCB5ID0gcDBbMV0gLSBwMVsxXSAqIHRyYW5zZm9ybS5rO1xuICAgIHJldHVybiB4ID09PSB0cmFuc2Zvcm0ueCAmJiB5ID09PSB0cmFuc2Zvcm0ueSA/IHRyYW5zZm9ybSA6IG5ldyBUcmFuc2Zvcm0odHJhbnNmb3JtLmssIHgsIHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudHJvaWQoZXh0ZW50KSB7XG4gICAgcmV0dXJuIFsoK2V4dGVudFswXVswXSArICtleHRlbnRbMV1bMF0pIC8gMiwgKCtleHRlbnRbMF1bMV0gKyArZXh0ZW50WzFdWzFdKSAvIDJdO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUodHJhbnNpdGlvbiwgdHJhbnNmb3JtLCBwb2ludCwgZXZlbnQpIHtcbiAgICB0cmFuc2l0aW9uXG4gICAgICAgIC5vbihcInN0YXJ0Lnpvb21cIiwgZnVuY3Rpb24oKSB7IGdlc3R1cmUodGhpcywgYXJndW1lbnRzKS5ldmVudChldmVudCkuc3RhcnQoKTsgfSlcbiAgICAgICAgLm9uKFwiaW50ZXJydXB0Lnpvb20gZW5kLnpvb21cIiwgZnVuY3Rpb24oKSB7IGdlc3R1cmUodGhpcywgYXJndW1lbnRzKS5ldmVudChldmVudCkuZW5kKCk7IH0pXG4gICAgICAgIC50d2VlbihcInpvb21cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICBnID0gZ2VzdHVyZSh0aGF0LCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgICAgICAgIGUgPSBleHRlbnQuYXBwbHkodGhhdCwgYXJncyksXG4gICAgICAgICAgICAgIHAgPSBwb2ludCA9PSBudWxsID8gY2VudHJvaWQoZSkgOiB0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiA/IHBvaW50LmFwcGx5KHRoYXQsIGFyZ3MpIDogcG9pbnQsXG4gICAgICAgICAgICAgIHcgPSBNYXRoLm1heChlWzFdWzBdIC0gZVswXVswXSwgZVsxXVsxXSAtIGVbMF1bMV0pLFxuICAgICAgICAgICAgICBhID0gdGhhdC5fX3pvb20sXG4gICAgICAgICAgICAgIGIgPSB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIgPyB0cmFuc2Zvcm0uYXBwbHkodGhhdCwgYXJncykgOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgIGkgPSBpbnRlcnBvbGF0ZShhLmludmVydChwKS5jb25jYXQodyAvIGEuayksIGIuaW52ZXJ0KHApLmNvbmNhdCh3IC8gYi5rKSk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIGlmICh0ID09PSAxKSB0ID0gYjsgLy8gQXZvaWQgcm91bmRpbmcgZXJyb3Igb24gZW5kLlxuICAgICAgICAgICAgZWxzZSB7IHZhciBsID0gaSh0KSwgayA9IHcgLyBsWzJdOyB0ID0gbmV3IFRyYW5zZm9ybShrLCBwWzBdIC0gbFswXSAqIGssIHBbMV0gLSBsWzFdICogayk7IH1cbiAgICAgICAgICAgIGcuem9vbShudWxsLCB0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlc3R1cmUodGhhdCwgYXJncywgY2xlYW4pIHtcbiAgICByZXR1cm4gKCFjbGVhbiAmJiB0aGF0Ll9fem9vbWluZykgfHwgbmV3IEdlc3R1cmUodGhhdCwgYXJncyk7XG4gIH1cblxuICBmdW5jdGlvbiBHZXN0dXJlKHRoYXQsIGFyZ3MpIHtcbiAgICB0aGlzLnRoYXQgPSB0aGF0O1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy5hY3RpdmUgPSAwO1xuICAgIHRoaXMuc291cmNlRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50LmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgIHRoaXMudGFwcyA9IDA7XG4gIH1cblxuICBHZXN0dXJlLnByb3RvdHlwZSA9IHtcbiAgICBldmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkgdGhpcy5zb3VyY2VFdmVudCA9IGV2ZW50O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoKyt0aGlzLmFjdGl2ZSA9PT0gMSkge1xuICAgICAgICB0aGlzLnRoYXQuX196b29taW5nID0gdGhpcztcbiAgICAgICAgdGhpcy5lbWl0KFwic3RhcnRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHpvb206IGZ1bmN0aW9uKGtleSwgdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodGhpcy5tb3VzZSAmJiBrZXkgIT09IFwibW91c2VcIikgdGhpcy5tb3VzZVsxXSA9IHRyYW5zZm9ybS5pbnZlcnQodGhpcy5tb3VzZVswXSk7XG4gICAgICBpZiAodGhpcy50b3VjaDAgJiYga2V5ICE9PSBcInRvdWNoXCIpIHRoaXMudG91Y2gwWzFdID0gdHJhbnNmb3JtLmludmVydCh0aGlzLnRvdWNoMFswXSk7XG4gICAgICBpZiAodGhpcy50b3VjaDEgJiYga2V5ICE9PSBcInRvdWNoXCIpIHRoaXMudG91Y2gxWzFdID0gdHJhbnNmb3JtLmludmVydCh0aGlzLnRvdWNoMVswXSk7XG4gICAgICB0aGlzLnRoYXQuX196b29tID0gdHJhbnNmb3JtO1xuICAgICAgdGhpcy5lbWl0KFwiem9vbVwiKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRoaXMuYWN0aXZlID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRoYXQuX196b29taW5nO1xuICAgICAgICB0aGlzLmVtaXQoXCJlbmRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVtaXQ6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIHZhciBkID0gc2VsZWN0KHRoaXMudGhhdCkuZGF0dW0oKTtcbiAgICAgIGxpc3RlbmVycy5jYWxsKFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aGlzLnRoYXQsXG4gICAgICAgIG5ldyBab29tRXZlbnQodHlwZSwge1xuICAgICAgICAgIHNvdXJjZUV2ZW50OiB0aGlzLnNvdXJjZUV2ZW50LFxuICAgICAgICAgIHRhcmdldDogem9vbSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy50aGF0Ll9fem9vbSxcbiAgICAgICAgICBkaXNwYXRjaDogbGlzdGVuZXJzXG4gICAgICAgIH0pLFxuICAgICAgICBkXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiB3aGVlbGVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgIHQgPSB0aGlzLl9fem9vbSxcbiAgICAgICAgayA9IE1hdGgubWF4KHNjYWxlRXh0ZW50WzBdLCBNYXRoLm1pbihzY2FsZUV4dGVudFsxXSwgdC5rICogTWF0aC5wb3coMiwgd2hlZWxEZWx0YS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSkpLFxuICAgICAgICBwID0gcG9pbnRlcihldmVudCk7XG5cbiAgICAvLyBJZiB0aGUgbW91c2UgaXMgaW4gdGhlIHNhbWUgbG9jYXRpb24gYXMgYmVmb3JlLCByZXVzZSBpdC5cbiAgICAvLyBJZiB0aGVyZSB3ZXJlIHJlY2VudCB3aGVlbCBldmVudHMsIHJlc2V0IHRoZSB3aGVlbCBpZGxlIHRpbWVvdXQuXG4gICAgaWYgKGcud2hlZWwpIHtcbiAgICAgIGlmIChnLm1vdXNlWzBdWzBdICE9PSBwWzBdIHx8IGcubW91c2VbMF1bMV0gIT09IHBbMV0pIHtcbiAgICAgICAgZy5tb3VzZVsxXSA9IHQuaW52ZXJ0KGcubW91c2VbMF0gPSBwKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dChnLndoZWVsKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIHdoZWVsIGV2ZW50IHdvblx1MjAxOXQgdHJpZ2dlciBhIHRyYW5zZm9ybSBjaGFuZ2UsIGlnbm9yZSBpdC5cbiAgICBlbHNlIGlmICh0LmsgPT09IGspIHJldHVybjtcblxuICAgIC8vIE90aGVyd2lzZSwgY2FwdHVyZSB0aGUgbW91c2UgcG9pbnQgYW5kIGxvY2F0aW9uIGF0IHRoZSBzdGFydC5cbiAgICBlbHNlIHtcbiAgICAgIGcubW91c2UgPSBbcCwgdC5pbnZlcnQocCldO1xuICAgICAgaW50ZXJydXB0KHRoaXMpO1xuICAgICAgZy5zdGFydCgpO1xuICAgIH1cblxuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGcud2hlZWwgPSBzZXRUaW1lb3V0KHdoZWVsaWRsZWQsIHdoZWVsRGVsYXkpO1xuICAgIGcuem9vbShcIm1vdXNlXCIsIGNvbnN0cmFpbih0cmFuc2xhdGUoc2NhbGUodCwgayksIGcubW91c2VbMF0sIGcubW91c2VbMV0pLCBnLmV4dGVudCwgdHJhbnNsYXRlRXh0ZW50KSk7XG5cbiAgICBmdW5jdGlvbiB3aGVlbGlkbGVkKCkge1xuICAgICAgZy53aGVlbCA9IG51bGw7XG4gICAgICBnLmVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlZG93bmVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKHRvdWNoZW5kaW5nIHx8ICFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgZyA9IGdlc3R1cmUodGhpcywgYXJncywgdHJ1ZSkuZXZlbnQoZXZlbnQpLFxuICAgICAgICB2ID0gc2VsZWN0KGV2ZW50LnZpZXcpLm9uKFwibW91c2Vtb3ZlLnpvb21cIiwgbW91c2Vtb3ZlZCwgdHJ1ZSkub24oXCJtb3VzZXVwLnpvb21cIiwgbW91c2V1cHBlZCwgdHJ1ZSksXG4gICAgICAgIHAgPSBwb2ludGVyKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgeDAgPSBldmVudC5jbGllbnRYLFxuICAgICAgICB5MCA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICBkcmFnRGlzYWJsZShldmVudC52aWV3KTtcbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBnLm1vdXNlID0gW3AsIHRoaXMuX196b29tLmludmVydChwKV07XG4gICAgaW50ZXJydXB0KHRoaXMpO1xuICAgIGcuc3RhcnQoKTtcblxuICAgIGZ1bmN0aW9uIG1vdXNlbW92ZWQoZXZlbnQpIHtcbiAgICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKCFnLm1vdmVkKSB7XG4gICAgICAgIHZhciBkeCA9IGV2ZW50LmNsaWVudFggLSB4MCwgZHkgPSBldmVudC5jbGllbnRZIC0geTA7XG4gICAgICAgIGcubW92ZWQgPSBkeCAqIGR4ICsgZHkgKiBkeSA+IGNsaWNrRGlzdGFuY2UyO1xuICAgICAgfVxuICAgICAgZy5ldmVudChldmVudClcbiAgICAgICAuem9vbShcIm1vdXNlXCIsIGNvbnN0cmFpbih0cmFuc2xhdGUoZy50aGF0Ll9fem9vbSwgZy5tb3VzZVswXSA9IHBvaW50ZXIoZXZlbnQsIGN1cnJlbnRUYXJnZXQpLCBnLm1vdXNlWzFdKSwgZy5leHRlbnQsIHRyYW5zbGF0ZUV4dGVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNldXBwZWQoZXZlbnQpIHtcbiAgICAgIHYub24oXCJtb3VzZW1vdmUuem9vbSBtb3VzZXVwLnpvb21cIiwgbnVsbCk7XG4gICAgICBkcmFnRW5hYmxlKGV2ZW50LnZpZXcsIGcubW92ZWQpO1xuICAgICAgbm9ldmVudChldmVudCk7XG4gICAgICBnLmV2ZW50KGV2ZW50KS5lbmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkYmxjbGlja2VkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciB0MCA9IHRoaXMuX196b29tLFxuICAgICAgICBwMCA9IHBvaW50ZXIoZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50LCB0aGlzKSxcbiAgICAgICAgcDEgPSB0MC5pbnZlcnQocDApLFxuICAgICAgICBrMSA9IHQwLmsgKiAoZXZlbnQuc2hpZnRLZXkgPyAwLjUgOiAyKSxcbiAgICAgICAgdDEgPSBjb25zdHJhaW4odHJhbnNsYXRlKHNjYWxlKHQwLCBrMSksIHAwLCBwMSksIGV4dGVudC5hcHBseSh0aGlzLCBhcmdzKSwgdHJhbnNsYXRlRXh0ZW50KTtcblxuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyYXRpb24pLmNhbGwoc2NoZWR1bGUsIHQxLCBwMCwgZXZlbnQpO1xuICAgIGVsc2Ugc2VsZWN0KHRoaXMpLmNhbGwoem9vbS50cmFuc2Zvcm0sIHQxLCBwMCwgZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hzdGFydGVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFmaWx0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLFxuICAgICAgICBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzLCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IG4pLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRlZCwgaSwgdCwgcDtcblxuICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHQgPSB0b3VjaGVzW2ldLCBwID0gcG9pbnRlcih0LCB0aGlzKTtcbiAgICAgIHAgPSBbcCwgdGhpcy5fX3pvb20uaW52ZXJ0KHApLCB0LmlkZW50aWZpZXJdO1xuICAgICAgaWYgKCFnLnRvdWNoMCkgZy50b3VjaDAgPSBwLCBzdGFydGVkID0gdHJ1ZSwgZy50YXBzID0gMSArICEhdG91Y2hzdGFydGluZztcbiAgICAgIGVsc2UgaWYgKCFnLnRvdWNoMSAmJiBnLnRvdWNoMFsyXSAhPT0gcFsyXSkgZy50b3VjaDEgPSBwLCBnLnRhcHMgPSAwO1xuICAgIH1cblxuICAgIGlmICh0b3VjaHN0YXJ0aW5nKSB0b3VjaHN0YXJ0aW5nID0gY2xlYXJUaW1lb3V0KHRvdWNoc3RhcnRpbmcpO1xuXG4gICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgIGlmIChnLnRhcHMgPCAyKSB0b3VjaGZpcnN0ID0gcFswXSwgdG91Y2hzdGFydGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoc3RhcnRpbmcgPSBudWxsOyB9LCB0b3VjaERlbGF5KTtcbiAgICAgIGludGVycnVwdCh0aGlzKTtcbiAgICAgIGcuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaG1vdmVkKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLl9fem9vbWluZykgcmV0dXJuO1xuICAgIHZhciBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzKS5ldmVudChldmVudCksXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCB0LCBwLCBsO1xuXG4gICAgbm9ldmVudChldmVudCk7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdCA9IHRvdWNoZXNbaV0sIHAgPSBwb2ludGVyKHQsIHRoaXMpO1xuICAgICAgaWYgKGcudG91Y2gwICYmIGcudG91Y2gwWzJdID09PSB0LmlkZW50aWZpZXIpIGcudG91Y2gwWzBdID0gcDtcbiAgICAgIGVsc2UgaWYgKGcudG91Y2gxICYmIGcudG91Y2gxWzJdID09PSB0LmlkZW50aWZpZXIpIGcudG91Y2gxWzBdID0gcDtcbiAgICB9XG4gICAgdCA9IGcudGhhdC5fX3pvb207XG4gICAgaWYgKGcudG91Y2gxKSB7XG4gICAgICB2YXIgcDAgPSBnLnRvdWNoMFswXSwgbDAgPSBnLnRvdWNoMFsxXSxcbiAgICAgICAgICBwMSA9IGcudG91Y2gxWzBdLCBsMSA9IGcudG91Y2gxWzFdLFxuICAgICAgICAgIGRwID0gKGRwID0gcDFbMF0gLSBwMFswXSkgKiBkcCArIChkcCA9IHAxWzFdIC0gcDBbMV0pICogZHAsXG4gICAgICAgICAgZGwgPSAoZGwgPSBsMVswXSAtIGwwWzBdKSAqIGRsICsgKGRsID0gbDFbMV0gLSBsMFsxXSkgKiBkbDtcbiAgICAgIHQgPSBzY2FsZSh0LCBNYXRoLnNxcnQoZHAgLyBkbCkpO1xuICAgICAgcCA9IFsocDBbMF0gKyBwMVswXSkgLyAyLCAocDBbMV0gKyBwMVsxXSkgLyAyXTtcbiAgICAgIGwgPSBbKGwwWzBdICsgbDFbMF0pIC8gMiwgKGwwWzFdICsgbDFbMV0pIC8gMl07XG4gICAgfVxuICAgIGVsc2UgaWYgKGcudG91Y2gwKSBwID0gZy50b3VjaDBbMF0sIGwgPSBnLnRvdWNoMFsxXTtcbiAgICBlbHNlIHJldHVybjtcblxuICAgIGcuem9vbShcInRvdWNoXCIsIGNvbnN0cmFpbih0cmFuc2xhdGUodCwgcCwgbCksIGcuZXh0ZW50LCB0cmFuc2xhdGVFeHRlbnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoZW5kZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX196b29taW5nKSByZXR1cm47XG4gICAgdmFyIGcgPSBnZXN0dXJlKHRoaXMsIGFyZ3MpLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsIGksIHQ7XG5cbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBpZiAodG91Y2hlbmRpbmcpIGNsZWFyVGltZW91dCh0b3VjaGVuZGluZyk7XG4gICAgdG91Y2hlbmRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0b3VjaGVuZGluZyA9IG51bGw7IH0sIHRvdWNoRGVsYXkpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHQgPSB0b3VjaGVzW2ldO1xuICAgICAgaWYgKGcudG91Y2gwICYmIGcudG91Y2gwWzJdID09PSB0LmlkZW50aWZpZXIpIGRlbGV0ZSBnLnRvdWNoMDtcbiAgICAgIGVsc2UgaWYgKGcudG91Y2gxICYmIGcudG91Y2gxWzJdID09PSB0LmlkZW50aWZpZXIpIGRlbGV0ZSBnLnRvdWNoMTtcbiAgICB9XG4gICAgaWYgKGcudG91Y2gxICYmICFnLnRvdWNoMCkgZy50b3VjaDAgPSBnLnRvdWNoMSwgZGVsZXRlIGcudG91Y2gxO1xuICAgIGlmIChnLnRvdWNoMCkgZy50b3VjaDBbMV0gPSB0aGlzLl9fem9vbS5pbnZlcnQoZy50b3VjaDBbMF0pO1xuICAgIGVsc2Uge1xuICAgICAgZy5lbmQoKTtcbiAgICAgIC8vIElmIHRoaXMgd2FzIGEgZGJsdGFwLCByZXJvdXRlIHRvIHRoZSAob3B0aW9uYWwpIGRibGNsaWNrLnpvb20gaGFuZGxlci5cbiAgICAgIGlmIChnLnRhcHMgPT09IDIpIHtcbiAgICAgICAgdCA9IHBvaW50ZXIodCwgdGhpcyk7XG4gICAgICAgIGlmIChNYXRoLmh5cG90KHRvdWNoZmlyc3RbMF0gLSB0WzBdLCB0b3VjaGZpcnN0WzFdIC0gdFsxXSkgPCB0YXBEaXN0YW5jZSkge1xuICAgICAgICAgIHZhciBwID0gc2VsZWN0KHRoaXMpLm9uKFwiZGJsY2xpY2suem9vbVwiKTtcbiAgICAgICAgICBpZiAocCkgcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgem9vbS53aGVlbERlbHRhID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHdoZWVsRGVsdGEgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgem9vbSkgOiB3aGVlbERlbHRhO1xuICB9O1xuXG4gIHpvb20uZmlsdGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGZpbHRlciA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgem9vbSkgOiBmaWx0ZXI7XG4gIH07XG5cbiAgem9vbS50b3VjaGFibGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodG91Y2hhYmxlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCB6b29tKSA6IHRvdWNoYWJsZTtcbiAgfTtcblxuICB6b29tLmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChleHRlbnQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KFtbK19bMF1bMF0sICtfWzBdWzFdXSwgWytfWzFdWzBdLCArX1sxXVsxXV1dKSwgem9vbSkgOiBleHRlbnQ7XG4gIH07XG5cbiAgem9vbS5zY2FsZUV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzY2FsZUV4dGVudFswXSA9ICtfWzBdLCBzY2FsZUV4dGVudFsxXSA9ICtfWzFdLCB6b29tKSA6IFtzY2FsZUV4dGVudFswXSwgc2NhbGVFeHRlbnRbMV1dO1xuICB9O1xuXG4gIHpvb20udHJhbnNsYXRlRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRyYW5zbGF0ZUV4dGVudFswXVswXSA9ICtfWzBdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMV1bMF0gPSArX1sxXVswXSwgdHJhbnNsYXRlRXh0ZW50WzBdWzFdID0gK19bMF1bMV0sIHRyYW5zbGF0ZUV4dGVudFsxXVsxXSA9ICtfWzFdWzFdLCB6b29tKSA6IFtbdHJhbnNsYXRlRXh0ZW50WzBdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMF1bMV1dLCBbdHJhbnNsYXRlRXh0ZW50WzFdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMV1bMV1dXTtcbiAgfTtcblxuICB6b29tLmNvbnN0cmFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb25zdHJhaW4gPSBfLCB6b29tKSA6IGNvbnN0cmFpbjtcbiAgfTtcblxuICB6b29tLmR1cmF0aW9uID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGR1cmF0aW9uID0gK18sIHpvb20pIDogZHVyYXRpb247XG4gIH07XG5cbiAgem9vbS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0ZSA9IF8sIHpvb20pIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgem9vbS5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IGxpc3RlbmVycy5vbi5hcHBseShsaXN0ZW5lcnMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHZhbHVlID09PSBsaXN0ZW5lcnMgPyB6b29tIDogdmFsdWU7XG4gIH07XG5cbiAgem9vbS5jbGlja0Rpc3RhbmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsaWNrRGlzdGFuY2UyID0gKF8gPSArXykgKiBfLCB6b29tKSA6IE1hdGguc3FydChjbGlja0Rpc3RhbmNlMik7XG4gIH07XG5cbiAgem9vbS50YXBEaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0YXBEaXN0YW5jZSA9ICtfLCB6b29tKSA6IHRhcERpc3RhbmNlO1xuICB9O1xuXG4gIHJldHVybiB6b29tO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBeUQ7OztBQ0FsRCxJQUFJLFFBQVE7QUFFbkIsSUFBTyxxQkFBUTtBQUFBLEVBQ2IsS0FBSztBQUFBLEVBQ0w7QUFBQSxFQUNBLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFDVDs7O0FDTmUsU0FBUixrQkFBaUIsTUFBTTtBQUM1QixNQUFJLFNBQVMsUUFBUSxJQUFJLElBQUksT0FBTyxRQUFRLEdBQUc7QUFDL0MsTUFBSSxLQUFLLE1BQU0sU0FBUyxLQUFLLE1BQU0sR0FBRyxDQUFDLE9BQU8sUUFBUyxRQUFPLEtBQUssTUFBTSxJQUFJLENBQUM7QUFDOUUsU0FBTyxtQkFBVyxlQUFlLE1BQU0sSUFBSSxFQUFDLE9BQU8sbUJBQVcsTUFBTSxHQUFHLE9BQU8sS0FBSSxJQUFJO0FBQ3hGOzs7QUNIQSxTQUFTLGVBQWUsTUFBTTtBQUM1QixTQUFPLFdBQVc7QUFDaEIsUUFBSUEsWUFBVyxLQUFLLGVBQ2hCLE1BQU0sS0FBSztBQUNmLFdBQU8sUUFBUSxTQUFTQSxVQUFTLGdCQUFnQixpQkFBaUIsUUFDNURBLFVBQVMsY0FBYyxJQUFJLElBQzNCQSxVQUFTLGdCQUFnQixLQUFLLElBQUk7QUFBQSxFQUMxQztBQUNGO0FBRUEsU0FBUyxhQUFhLFVBQVU7QUFDOUIsU0FBTyxXQUFXO0FBQ2hCLFdBQU8sS0FBSyxjQUFjLGdCQUFnQixTQUFTLE9BQU8sU0FBUyxLQUFLO0FBQUEsRUFDMUU7QUFDRjtBQUVlLFNBQVIsZ0JBQWlCLE1B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ZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsc0JBQXNCO0FBQUEsRUFDdEIsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1Isa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEs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QixFQUFFLE1BQU07QUFDbkMsZUFBSyxpQkFBaUI7QUFDdEIscUJBQVcsUUFBUSxPQUFLLEVBQUUsWUFBWSwyQkFBMkIsQ0FBQztBQUFBLFFBQ25FLE9BQU87QUFDTixlQUFLLGlCQUFpQixFQUFFO0FBQ3hCLHFCQUFXLFFBQVEsQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLDZCQUE2QixNQUFNLEVBQUUsSUFBSSxDQUFDO0FBQUEsUUFDdEY7QUFDQSxhQUFLLGdCQUFnQixHQUFHO0FBQ3hCLGFBQUssYUFBYTtBQUFBLE1BQ25CLENBQUM7QUFBQSxJQUNGO0FBQUEsRUFDRDtBQUNEO0FBR0EsSUFBcUIsdUJBQXJCLGNBQWtELHVCQUFPO0FBQUEsRUFDeEQsTUFBTSxTQUFTO0FBQ2QsU0FBSyxhQUFhLFdBQVcsVUFBUSxJQUFJLGtCQUFrQixNQUFNLElBQUksQ0FBQztBQUN0RSxTQUFLLGNBQWMsWUFBVywyQkFBMEIsTUFBSSxLQUFLLGFBQWEsQ0FBQztBQUMvRSxTQUFLLFdBQVcsRUFBQyxJQUFHLHVCQUFzQixNQUFLLHVCQUFzQixVQUFTLE1BQUksS0FBSyxhQUFhLEVBQUMsQ0FBQztBQUFBLEVBQ3ZHO0FBQUEsRUFDQSxNQUFNLGVBQWU7QUFDcEIsVUFBTSxFQUFDLFVBQVMsSUFBRSxLQUFLO0FBQ3ZCLFFBQUksT0FBSyxVQUFVLGdCQUFnQixTQUFTLEVBQUUsQ0FBQztBQUMvQyxRQUFJLENBQUMsTUFBTTtBQUFFLGFBQUssVUFBVSxhQUFhLEtBQUs7QUFBSSxZQUFNLEtBQUssYUFBYSxFQUFDLE1BQUssV0FBVSxRQUFPLEtBQUksQ0FBQztBQUFBLElBQUc7QUFDekcsY0FBVSxXQUFXLElBQUk7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQUM7QUFDYjsiLAogICJuYW1lcyI6IFsiZG9jdW1lbnQiLCAibSIsICJ4IiwgIm0iLCAibSIsICJkYXR1bSIsICJ4IiwgIm0iLCAic2VsZWN0aW9uIiwgIm0iLCAibSIsICJhIiwgIm0iLCAibSIsICJtIiwgImNyZWF0ZSIsICJjcmVhdGUiLCAibSIsICJ3aW5kb3ciLCAibSIsICJzZWxlY3RfZGVmYXVsdCIsICJ4IiwgInkiLCAieCIsICJ5IiwgIngiLCAieSIsICJkYXRhX2RlZmF1bHQiLCAieCIsICJ5IiwgIngyIiwgInkyIiwgIngzIiwgInkzIiwgInJlbW92ZV9kZWZhdWx0IiwgIngiLCAieSIsICJzaXplX2RlZmF1bHQiLCAieCIsICJ5IiwgImRhdGFfZGVmYXVsdCIsICJyZW1vdmVfZGVmYXVsdCIsICJzaXplX2RlZmF1bHQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ5IiwgImZpbmQiLCAiaWQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgInkiLCAibSIsICJpIiwgInBhcnNlVHlwZW5hbWVzIiwgImMiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJub3ciLCAieCIsICJ5IiwgImRpc3BhdGNoX2RlZmF1bHQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgInkiLCAibm9kZSIsICJzdHJlbmd0aCIsICJjIiwgIngyIiwgInhfZGVmYXVsdCIsICJ4IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieV9kZWZhdWx0IiwgInkiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJyb290IiwgInNlbGVjdGlvbiIsICJzZWxlY3RfZGVmYXVsdCIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAieCIsICJ5IiwgImRpc3BhdGNoIiwgImZpbHRlciIsICJkaXNwYXRjaF9kZWZhdWx0IiwgInNlbGVjdGlvbiIsICJzZWxlY3RfZGVmYXVsdCIsICJjIiwgImNvbnRhaW5lciIsICJkaXNwYXRjaCIsICJldmVudCIsICJ0b3VjaCIsICJjb25zdGFudF9kZWZhdWx0IiwgIm0iLCAiYSIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAiYSIsICJ5IiwgInkiLCAiYSIsICJjb25zdGFudF9kZWZhdWx0IiwgInkiLCAiY29sb3IiLCAicmdiIiwgInN0YXJ0IiwgImEiLCAiYSIsICJpIiwgImEiLCAiYyIsICJtIiwgImEiLCAieCIsICJkaXNwYXRjaF9kZWZhdWx0IiwgImlkIiwgImluZGV4IiwgImdldCIsICJzZXQiLCAic3RhcnQiLCAiZW1wdHkiLCAiaW50ZXJydXB0X2RlZmF1bHQiLCAiaWQiLCAic2V0IiwgImdldCIsICJ0cmFuc2l0aW9uIiwgImEiLCAiYyIsICJhdHRyUmVtb3ZlIiwgImF0dHJSZW1vdmVOUyIsICJhdHRyQ29uc3RhbnQiLCAiYXR0ckNvbnN0YW50TlMiLCAiYXR0ckZ1bmN0aW9uIiwgImF0dHJGdW5jdGlvbk5TIiwgImF0dHJfZGVmYXVsdCIsICJpZCIsICJnZXQiLCAiaWQiLCAic2V0IiwgImdldCIsICJpZCIsICJzZXQiLCAiZ2V0IiwgImlkIiwgInNldCIsICJmaWx0ZXJfZGVmYXVsdCIsICJtIiwgIm1lcmdlX2RlZmF1bHQiLCAidHJhbnNpdGlvbiIsICJtIiwgImlkIiwgInNldCIsICJvbl9kZWZhdWx0IiwgImdldCIsICJpZCIsICJyZW1vdmVfZGVmYXVsdCIsICJzZWxlY3RfZGVmYXVsdCIsICJpZCIsICJtIiwgImdldCIsICJzZWxlY3RBbGxfZGVmYXVsdCIsICJpZCIsICJtIiwgImNoaWxkcmVuIiwgImluaGVyaXQiLCAiZ2V0IiwgIlNlbGVjdGlvbiIsICJzZWxlY3Rpb25fZGVmYXVsdCIsICJzdHlsZVJlbW92ZSIsICJzdHlsZUNvbnN0YW50IiwgInN0eWxlRnVuY3Rpb24iLCAiaWQiLCAicmVtb3ZlIiwgInNldCIsICJzdHlsZV9kZWZhdWx0IiwgInRleHRDb25zdGFudCIsICJ0ZXh0RnVuY3Rpb24iLCAidGV4dF9kZWZhdWx0IiwgIm0iLCAiaW5oZXJpdCIsICJnZXQiLCAiaWQiLCAic2V0IiwgImlkIiwgInNlbGVjdF9kZWZhdWx0IiwgInNlbGVjdEFsbF9kZWZhdWx0IiwgImZpbHRlcl9kZWZhdWx0IiwgIm1lcmdlX2RlZmF1bHQiLCAic2VsZWN0aW9uX2RlZmF1bHQiLCAib25fZGVmYXVsdCIsICJhdHRyX2RlZmF1bHQiLCAic3R5bGVfZGVmYXVsdCIsICJ0ZXh0X2RlZmF1bHQiLCAicmVtb3ZlX2RlZmF1bHQiLCAiaWQiLCAidHJhbnNpdGlvbl9kZWZhdWx0IiwgIm0iLCAiaW50ZXJydXB0X2RlZmF1bHQiLCAidHJhbnNpdGlvbl9kZWZhdWx0IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ0cmFuc2Zvcm0iLCAiZGlzcGF0Y2giLCAieCIsICJ5IiwgImlkZW50aXR5IiwgIm5vcHJvcGFnYXRpb24iLCAibm9ldmVudF9kZWZhdWx0IiwgImRlZmF1bHRGaWx0ZXIiLCAiaWRlbnRpdHkiLCAiZGVmYXVsdFRvdWNoYWJsZSIsICJ0cmFuc2Zvcm0iLCAiem9vbV9kZWZhdWx0IiwgImZpbHRlciIsICJkaXNwYXRjaF9kZWZhdWx0IiwgInNlbGVjdGlvbiIsICJ4IiwgInkiLCAiZXh0ZW50IiwgInRyYW5zaXRpb24iLCAiYSIsICJzZWxlY3RfZGVmYXVsdCIsICJub2V2ZW50X2RlZmF1bHQiLCAibm9wcm9wYWdhdGlvbiIsICJldmVudCIsICJjb25zdGFudF9kZWZhdWx0IiwgInNlbGVjdF9kZWZhdWx0IiwgIm0iLCAiYSIsICJfYSIsICJfYiIsICJ6b29tX2RlZmF1bHQiLCAieCIsICJ5IiwgImlkZW50aXR5IiwgInhfZGVmYXVsdCIsICJ5X2RlZmF1bHQiLCAiZyIsICJjb2xvciIsICJpZCIsICJjIl0KfQo=
