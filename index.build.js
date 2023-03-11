(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/@shopify/draggable/lib/sortable.js
  var require_sortable = __commonJS({
    "node_modules/@shopify/draggable/lib/sortable.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define("Sortable", [], factory);
        else if (typeof exports === "object")
          exports["Sortable"] = factory();
        else
          root["Sortable"] = factory();
      })(window, function() {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1)
                value = __webpack_require__(value);
              if (mode & 8)
                return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule)
                return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string")
                for (var key in value)
                  __webpack_require__.d(ns, key, function(key2) {
                    return value[key2];
                  }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 48);
          }([
            /* 0 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SensorEvent = __webpack_require__(19);
              Object.keys(_SensorEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _SensorEvent[key];
                  }
                });
              });
            },
            /* 1 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Sensor = __webpack_require__(22);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Sensor2.default;
            },
            /* 2 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _closest = __webpack_require__(30);
              Object.defineProperty(exports2, "closest", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_closest).default;
                }
              });
              var _requestNextAnimationFrame = __webpack_require__(28);
              Object.defineProperty(exports2, "requestNextAnimationFrame", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_requestNextAnimationFrame).default;
                }
              });
              var _distance = __webpack_require__(26);
              Object.defineProperty(exports2, "distance", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_distance).default;
                }
              });
              var _touchCoords = __webpack_require__(24);
              Object.defineProperty(exports2, "touchCoords", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_touchCoords).default;
                }
              });
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
            },
            /* 3 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _AbstractEvent = __webpack_require__(46);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _AbstractEvent2.default;
            },
            /* 4 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _AbstractPlugin = __webpack_require__(39);
              var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _AbstractPlugin2.default;
            },
            /* 5 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Sensor = __webpack_require__(1);
              Object.defineProperty(exports2, "Sensor", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_Sensor).default;
                }
              });
              var _MouseSensor = __webpack_require__(21);
              Object.defineProperty(exports2, "MouseSensor", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_MouseSensor).default;
                }
              });
              var _TouchSensor = __webpack_require__(18);
              Object.defineProperty(exports2, "TouchSensor", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_TouchSensor).default;
                }
              });
              var _DragSensor = __webpack_require__(16);
              Object.defineProperty(exports2, "DragSensor", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_DragSensor).default;
                }
              });
              var _ForceTouchSensor = __webpack_require__(14);
              Object.defineProperty(exports2, "ForceTouchSensor", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_ForceTouchSensor).default;
                }
              });
              var _SensorEvent = __webpack_require__(0);
              Object.keys(_SensorEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _SensorEvent[key];
                  }
                });
              });
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
            },
            /* 6 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Announcement = __webpack_require__(41);
              Object.defineProperty(exports2, "Announcement", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_Announcement).default;
                }
              });
              Object.defineProperty(exports2, "defaultAnnouncementOptions", {
                enumerable: true,
                get: function() {
                  return _Announcement.defaultOptions;
                }
              });
              var _Focusable = __webpack_require__(38);
              Object.defineProperty(exports2, "Focusable", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_Focusable).default;
                }
              });
              var _Mirror = __webpack_require__(36);
              Object.defineProperty(exports2, "Mirror", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_Mirror).default;
                }
              });
              Object.defineProperty(exports2, "defaultMirrorOptions", {
                enumerable: true,
                get: function() {
                  return _Mirror.defaultOptions;
                }
              });
              var _Scrollable = __webpack_require__(32);
              Object.defineProperty(exports2, "Scrollable", {
                enumerable: true,
                get: function() {
                  return _interopRequireDefault(_Scrollable).default;
                }
              });
              Object.defineProperty(exports2, "defaultScrollableOptions", {
                enumerable: true,
                get: function() {
                  return _Scrollable.defaultOptions;
                }
              });
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
            },
            /* 7 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DraggableEvent = __webpack_require__(42);
              Object.keys(_DraggableEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _DraggableEvent[key];
                  }
                });
              });
            },
            /* 8 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DragEvent = __webpack_require__(43);
              Object.keys(_DragEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _DragEvent[key];
                  }
                });
              });
            },
            /* 9 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SortableEvent = __webpack_require__(47);
              Object.keys(_SortableEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _SortableEvent[key];
                  }
                });
              });
            },
            /* 10 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              class Emitter {
                constructor() {
                  this.callbacks = {};
                }
                /**
                 * Registers callbacks by event name
                 * @param {String} type
                 * @param {...Function} callbacks
                 */
                on(type, ...callbacks) {
                  if (!this.callbacks[type]) {
                    this.callbacks[type] = [];
                  }
                  this.callbacks[type].push(...callbacks);
                  return this;
                }
                /**
                 * Unregisters callbacks by event name
                 * @param {String} type
                 * @param {Function} callback
                 */
                off(type, callback) {
                  if (!this.callbacks[type]) {
                    return null;
                  }
                  const copy = this.callbacks[type].slice(0);
                  for (let i = 0; i < copy.length; i++) {
                    if (callback === copy[i]) {
                      this.callbacks[type].splice(i, 1);
                    }
                  }
                  return this;
                }
                /**
                 * Triggers event callbacks by event object
                 * @param {AbstractEvent} event
                 */
                trigger(event) {
                  if (!this.callbacks[event.type]) {
                    return null;
                  }
                  const callbacks = [...this.callbacks[event.type]];
                  const caughtErrors = [];
                  for (let i = callbacks.length - 1; i >= 0; i--) {
                    const callback = callbacks[i];
                    try {
                      callback(event);
                    } catch (error) {
                      caughtErrors.push(error);
                    }
                  }
                  if (caughtErrors.length) {
                    console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);
                  }
                  return this;
                }
              }
              exports2.default = Emitter;
            },
            /* 11 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Emitter = __webpack_require__(10);
              var _Emitter2 = _interopRequireDefault(_Emitter);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Emitter2.default;
            },
            /* 12 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = void 0;
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _utils = __webpack_require__(2);
              var _Plugins = __webpack_require__(6);
              var _Emitter = __webpack_require__(11);
              var _Emitter2 = _interopRequireDefault(_Emitter);
              var _Sensors = __webpack_require__(5);
              var _DraggableEvent = __webpack_require__(7);
              var _DragEvent = __webpack_require__(8);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onDragStart = Symbol("onDragStart");
              const onDragMove = Symbol("onDragMove");
              const onDragStop = Symbol("onDragStop");
              const onDragPressure = Symbol("onDragPressure");
              const defaultAnnouncements = {
                "drag:start": (event) => `Picked up ${event.source.textContent.trim() || event.source.id || "draggable element"}`,
                "drag:stop": (event) => `Released ${event.source.textContent.trim() || event.source.id || "draggable element"}`
              };
              const defaultClasses = {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror"
              };
              const defaultOptions = exports2.defaultOptions = {
                draggable: ".draggable-source",
                handle: null,
                delay: {},
                distance: 0,
                placedTimeout: 800,
                plugins: [],
                sensors: [],
                exclude: {
                  plugins: [],
                  sensors: []
                }
              };
              class Draggable {
                /**
                 * Draggable constructor.
                 * @constructs Draggable
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
                 * @param {Object} options - Options for draggable
                 */
                /**
                 * Default plugins draggable uses
                 * @static
                 * @property {Object} Plugins
                 * @property {Announcement} Plugins.Announcement
                 * @property {Focusable} Plugins.Focusable
                 * @property {Mirror} Plugins.Mirror
                 * @property {Scrollable} Plugins.Scrollable
                 * @type {Object}
                 */
                constructor(containers = [document.body], options = {}) {
                  if (containers instanceof NodeList || containers instanceof Array) {
                    this.containers = [...containers];
                  } else if (containers instanceof HTMLElement) {
                    this.containers = [containers];
                  } else {
                    throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                  }
                  this.options = _extends({}, defaultOptions, options, {
                    classes: _extends({}, defaultClasses, options.classes || {}),
                    announcements: _extends({}, defaultAnnouncements, options.announcements || {}),
                    exclude: {
                      plugins: options.exclude && options.exclude.plugins || [],
                      sensors: options.exclude && options.exclude.sensors || []
                    }
                  });
                  this.emitter = new _Emitter2.default();
                  this.dragging = false;
                  this.plugins = [];
                  this.sensors = [];
                  this[onDragStart] = this[onDragStart].bind(this);
                  this[onDragMove] = this[onDragMove].bind(this);
                  this[onDragStop] = this[onDragStop].bind(this);
                  this[onDragPressure] = this[onDragPressure].bind(this);
                  document.addEventListener("drag:start", this[onDragStart], true);
                  document.addEventListener("drag:move", this[onDragMove], true);
                  document.addEventListener("drag:stop", this[onDragStop], true);
                  document.addEventListener("drag:pressure", this[onDragPressure], true);
                  const defaultPlugins = Object.values(Draggable.Plugins).filter((Plugin) => !this.options.exclude.plugins.includes(Plugin));
                  const defaultSensors = Object.values(Draggable.Sensors).filter((sensor) => !this.options.exclude.sensors.includes(sensor));
                  this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
                  this.addSensor(...[...defaultSensors, ...this.options.sensors]);
                  const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
                    draggable: this
                  });
                  this.on("mirror:created", ({ mirror }) => this.mirror = mirror);
                  this.on("mirror:destroy", () => this.mirror = null);
                  this.trigger(draggableInitializedEvent);
                }
                /**
                 * Destroys Draggable instance. This removes all internal event listeners and
                 * deactivates sensors and plugins
                 */
                /**
                 * Default sensors draggable uses
                 * @static
                 * @property {Object} Sensors
                 * @property {MouseSensor} Sensors.MouseSensor
                 * @property {TouchSensor} Sensors.TouchSensor
                 * @type {Object}
                 */
                destroy() {
                  document.removeEventListener("drag:start", this[onDragStart], true);
                  document.removeEventListener("drag:move", this[onDragMove], true);
                  document.removeEventListener("drag:stop", this[onDragStop], true);
                  document.removeEventListener("drag:pressure", this[onDragPressure], true);
                  const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
                    draggable: this
                  });
                  this.trigger(draggableDestroyEvent);
                  this.removePlugin(...this.plugins.map((plugin) => plugin.constructor));
                  this.removeSensor(...this.sensors.map((sensor) => sensor.constructor));
                }
                /**
                 * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
                 * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
                 * @return {Draggable}
                 * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
                 */
                addPlugin(...plugins) {
                  const activePlugins = plugins.map((Plugin) => new Plugin(this));
                  activePlugins.forEach((plugin) => plugin.attach());
                  this.plugins = [...this.plugins, ...activePlugins];
                  return this;
                }
                /**
                 * Removes plugins that are already attached to this draggable instance. This will end up calling
                 * the detach method of the plugin
                 * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
                 * @return {Draggable}
                 * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
                 */
                removePlugin(...plugins) {
                  const removedPlugins = this.plugins.filter((plugin) => plugins.includes(plugin.constructor));
                  removedPlugins.forEach((plugin) => plugin.detach());
                  this.plugins = this.plugins.filter((plugin) => !plugins.includes(plugin.constructor));
                  return this;
                }
                /**
                 * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
                 * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
                 * @return {Draggable}
                 * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
                 */
                addSensor(...sensors) {
                  const activeSensors = sensors.map((Sensor) => new Sensor(this.containers, this.options));
                  activeSensors.forEach((sensor) => sensor.attach());
                  this.sensors = [...this.sensors, ...activeSensors];
                  return this;
                }
                /**
                 * Removes sensors that are already attached to this draggable instance. This will end up calling
                 * the detach method of the sensor
                 * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
                 * @return {Draggable}
                 * @example draggable.removeSensor(TouchSensor, DragSensor)
                 */
                removeSensor(...sensors) {
                  const removedSensors = this.sensors.filter((sensor) => sensors.includes(sensor.constructor));
                  removedSensors.forEach((sensor) => sensor.detach());
                  this.sensors = this.sensors.filter((sensor) => !sensors.includes(sensor.constructor));
                  return this;
                }
                /**
                 * Adds container to this draggable instance
                 * @param {...HTMLElement} containers - Containers you want to add to draggable
                 * @return {Draggable}
                 * @example draggable.addContainer(document.body)
                 */
                addContainer(...containers) {
                  this.containers = [...this.containers, ...containers];
                  this.sensors.forEach((sensor) => sensor.addContainer(...containers));
                  return this;
                }
                /**
                 * Removes container from this draggable instance
                 * @param {...HTMLElement} containers - Containers you want to remove from draggable
                 * @return {Draggable}
                 * @example draggable.removeContainer(document.body)
                 */
                removeContainer(...containers) {
                  this.containers = this.containers.filter((container) => !containers.includes(container));
                  this.sensors.forEach((sensor) => sensor.removeContainer(...containers));
                  return this;
                }
                /**
                 * Adds listener for draggable events
                 * @param {String} type - Event name
                 * @param {...Function} callbacks - Event callbacks
                 * @return {Draggable}
                 * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
                 */
                on(type, ...callbacks) {
                  this.emitter.on(type, ...callbacks);
                  return this;
                }
                /**
                 * Removes listener from draggable
                 * @param {String} type - Event name
                 * @param {Function} callback - Event callback
                 * @return {Draggable}
                 * @example draggable.off('drag:start', handlerFunction);
                 */
                off(type, callback) {
                  this.emitter.off(type, callback);
                  return this;
                }
                /**
                 * Triggers draggable event
                 * @param {AbstractEvent} event - Event instance
                 * @return {Draggable}
                 * @example draggable.trigger(event);
                 */
                trigger(event) {
                  this.emitter.trigger(event);
                  return this;
                }
                /**
                 * Returns class name for class identifier
                 * @param {String} name - Name of class identifier
                 * @return {String|null}
                 */
                getClassNameFor(name) {
                  return this.getClassNamesFor(name)[0];
                }
                /**
                 * Returns class names for class identifier
                 * @return {String[]}
                 */
                getClassNamesFor(name) {
                  const classNames = this.options.classes[name];
                  if (classNames instanceof Array) {
                    return classNames;
                  } else if (typeof classNames === "string" || classNames instanceof String) {
                    return [classNames];
                  } else {
                    return [];
                  }
                }
                /**
                 * Returns true if this draggable instance is currently dragging
                 * @return {Boolean}
                 */
                isDragging() {
                  return Boolean(this.dragging);
                }
                /**
                 * Returns all draggable elements
                 * @return {HTMLElement[]}
                 */
                getDraggableElements() {
                  return this.containers.reduce((current, container) => {
                    return [...current, ...this.getDraggableElementsForContainer(container)];
                  }, []);
                }
                /**
                 * Returns draggable elements for a given container, excluding the mirror and
                 * original source element if present
                 * @param {HTMLElement} container
                 * @return {HTMLElement[]}
                 */
                getDraggableElementsForContainer(container) {
                  const allDraggableElements = container.querySelectorAll(this.options.draggable);
                  return [...allDraggableElements].filter((childElement) => {
                    return childElement !== this.originalSource && childElement !== this.mirror;
                  });
                }
                /**
                 * Drag start handler
                 * @private
                 * @param {Event} event - DOM Drag event
                 */
                [onDragStart](event) {
                  const sensorEvent = getSensorEvent(event);
                  const { target, container } = sensorEvent;
                  if (!this.containers.includes(container)) {
                    return;
                  }
                  if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
                    sensorEvent.cancel();
                    return;
                  }
                  this.originalSource = (0, _utils.closest)(target, this.options.draggable);
                  this.sourceContainer = container;
                  if (!this.originalSource) {
                    sensorEvent.cancel();
                    return;
                  }
                  if (this.lastPlacedSource && this.lastPlacedContainer) {
                    clearTimeout(this.placedTimeoutID);
                    this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed"));
                    this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"));
                  }
                  this.source = this.originalSource.cloneNode(true);
                  this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
                  this.originalSource.style.display = "none";
                  const dragEvent = new _DragEvent.DragStartEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: container,
                    sensorEvent
                  });
                  this.trigger(dragEvent);
                  this.dragging = !dragEvent.canceled();
                  if (dragEvent.canceled()) {
                    this.source.parentNode.removeChild(this.source);
                    this.originalSource.style.display = null;
                    return;
                  }
                  this.originalSource.classList.add(...this.getClassNamesFor("source:original"));
                  this.source.classList.add(...this.getClassNamesFor("source:dragging"));
                  this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging"));
                  document.body.classList.add(...this.getClassNamesFor("body:dragging"));
                  applyUserSelect(document.body, "none");
                  requestAnimationFrame(() => {
                    const oldSensorEvent = getSensorEvent(event);
                    const newSensorEvent = oldSensorEvent.clone({ target: this.source });
                    this[onDragMove](_extends({}, event, {
                      detail: newSensorEvent
                    }));
                  });
                }
                /**
                 * Drag move handler
                 * @private
                 * @param {Event} event - DOM Drag event
                 */
                [onDragMove](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const sensorEvent = getSensorEvent(event);
                  const { container } = sensorEvent;
                  let target = sensorEvent.target;
                  const dragMoveEvent = new _DragEvent.DragMoveEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: container,
                    sensorEvent
                  });
                  this.trigger(dragMoveEvent);
                  if (dragMoveEvent.canceled()) {
                    sensorEvent.cancel();
                  }
                  target = (0, _utils.closest)(target, this.options.draggable);
                  const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
                  const overContainer = sensorEvent.overContainer || withinCorrectContainer;
                  const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
                  const isLeavingDraggable = this.currentOver && target !== this.currentOver;
                  const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
                  const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
                  if (isLeavingDraggable) {
                    const dragOutEvent = new _DragEvent.DragOutEvent({
                      source: this.source,
                      originalSource: this.originalSource,
                      sourceContainer: container,
                      sensorEvent,
                      over: this.currentOver,
                      overContainer: this.currentOverContainer
                    });
                    this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over"));
                    this.currentOver = null;
                    this.trigger(dragOutEvent);
                  }
                  if (isLeavingContainer) {
                    const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
                      source: this.source,
                      originalSource: this.originalSource,
                      sourceContainer: container,
                      sensorEvent,
                      overContainer: this.currentOverContainer
                    });
                    this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over"));
                    this.currentOverContainer = null;
                    this.trigger(dragOutContainerEvent);
                  }
                  if (isOverContainer) {
                    overContainer.classList.add(...this.getClassNamesFor("container:over"));
                    const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
                      source: this.source,
                      originalSource: this.originalSource,
                      sourceContainer: container,
                      sensorEvent,
                      overContainer
                    });
                    this.currentOverContainer = overContainer;
                    this.trigger(dragOverContainerEvent);
                  }
                  if (isOverDraggable) {
                    target.classList.add(...this.getClassNamesFor("draggable:over"));
                    const dragOverEvent = new _DragEvent.DragOverEvent({
                      source: this.source,
                      originalSource: this.originalSource,
                      sourceContainer: container,
                      sensorEvent,
                      overContainer,
                      over: target
                    });
                    this.currentOver = target;
                    this.trigger(dragOverEvent);
                  }
                }
                /**
                 * Drag stop handler
                 * @private
                 * @param {Event} event - DOM Drag event
                 */
                [onDragStop](event) {
                  if (!this.dragging) {
                    return;
                  }
                  this.dragging = false;
                  const dragStopEvent = new _DragEvent.DragStopEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: event.sensorEvent,
                    sourceContainer: this.sourceContainer
                  });
                  this.trigger(dragStopEvent);
                  this.source.parentNode.insertBefore(this.originalSource, this.source);
                  this.source.parentNode.removeChild(this.source);
                  this.originalSource.style.display = "";
                  this.source.classList.remove(...this.getClassNamesFor("source:dragging"));
                  this.originalSource.classList.remove(...this.getClassNamesFor("source:original"));
                  this.originalSource.classList.add(...this.getClassNamesFor("source:placed"));
                  this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed"));
                  this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging"));
                  document.body.classList.remove(...this.getClassNamesFor("body:dragging"));
                  applyUserSelect(document.body, "");
                  if (this.currentOver) {
                    this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over"));
                  }
                  if (this.currentOverContainer) {
                    this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over"));
                  }
                  this.lastPlacedSource = this.originalSource;
                  this.lastPlacedContainer = this.sourceContainer;
                  this.placedTimeoutID = setTimeout(() => {
                    if (this.lastPlacedSource) {
                      this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed"));
                    }
                    if (this.lastPlacedContainer) {
                      this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"));
                    }
                    this.lastPlacedSource = null;
                    this.lastPlacedContainer = null;
                  }, this.options.placedTimeout);
                  const dragStoppedEvent = new _DragEvent.DragStoppedEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sensorEvent: event.sensorEvent,
                    sourceContainer: this.sourceContainer
                  });
                  this.trigger(dragStoppedEvent);
                  this.source = null;
                  this.originalSource = null;
                  this.currentOverContainer = null;
                  this.currentOver = null;
                  this.sourceContainer = null;
                }
                /**
                 * Drag pressure handler
                 * @private
                 * @param {Event} event - DOM Drag event
                 */
                [onDragPressure](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const sensorEvent = getSensorEvent(event);
                  const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);
                  const dragPressureEvent = new _DragEvent.DragPressureEvent({
                    sensorEvent,
                    source,
                    pressure: sensorEvent.pressure
                  });
                  this.trigger(dragPressureEvent);
                }
              }
              exports2.default = Draggable;
              Draggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };
              Draggable.Sensors = { MouseSensor: _Sensors.MouseSensor, TouchSensor: _Sensors.TouchSensor };
              function getSensorEvent(event) {
                return event.detail;
              }
              function applyUserSelect(element, value) {
                element.style.webkitUserSelect = value;
                element.style.mozUserSelect = value;
                element.style.msUserSelect = value;
                element.style.oUserSelect = value;
                element.style.userSelect = value;
              }
            },
            /* 13 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Sensor = __webpack_require__(1);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              var _SensorEvent = __webpack_require__(0);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onMouseForceWillBegin = Symbol("onMouseForceWillBegin");
              const onMouseForceDown = Symbol("onMouseForceDown");
              const onMouseDown = Symbol("onMouseDown");
              const onMouseForceChange = Symbol("onMouseForceChange");
              const onMouseMove = Symbol("onMouseMove");
              const onMouseUp = Symbol("onMouseUp");
              const onMouseForceGlobalChange = Symbol("onMouseForceGlobalChange");
              class ForceTouchSensor extends _Sensor2.default {
                /**
                 * ForceTouchSensor constructor.
                 * @constructs ForceTouchSensor
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                 * @param {Object} options - Options
                 */
                constructor(containers = [], options = {}) {
                  super(containers, options);
                  this.mightDrag = false;
                  this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
                  this[onMouseForceDown] = this[onMouseForceDown].bind(this);
                  this[onMouseDown] = this[onMouseDown].bind(this);
                  this[onMouseForceChange] = this[onMouseForceChange].bind(this);
                  this[onMouseMove] = this[onMouseMove].bind(this);
                  this[onMouseUp] = this[onMouseUp].bind(this);
                }
                /**
                 * Attaches sensors event listeners to the DOM
                 */
                attach() {
                  for (const container of this.containers) {
                    container.addEventListener("webkitmouseforcewillbegin", this[onMouseForceWillBegin], false);
                    container.addEventListener("webkitmouseforcedown", this[onMouseForceDown], false);
                    container.addEventListener("mousedown", this[onMouseDown], true);
                    container.addEventListener("webkitmouseforcechanged", this[onMouseForceChange], false);
                  }
                  document.addEventListener("mousemove", this[onMouseMove]);
                  document.addEventListener("mouseup", this[onMouseUp]);
                }
                /**
                 * Detaches sensors event listeners to the DOM
                 */
                detach() {
                  for (const container of this.containers) {
                    container.removeEventListener("webkitmouseforcewillbegin", this[onMouseForceWillBegin], false);
                    container.removeEventListener("webkitmouseforcedown", this[onMouseForceDown], false);
                    container.removeEventListener("mousedown", this[onMouseDown], true);
                    container.removeEventListener("webkitmouseforcechanged", this[onMouseForceChange], false);
                  }
                  document.removeEventListener("mousemove", this[onMouseMove]);
                  document.removeEventListener("mouseup", this[onMouseUp]);
                }
                /**
                 * Mouse force will begin handler
                 * @private
                 * @param {Event} event - Mouse force will begin event
                 */
                [onMouseForceWillBegin](event) {
                  event.preventDefault();
                  this.mightDrag = true;
                }
                /**
                 * Mouse force down handler
                 * @private
                 * @param {Event} event - Mouse force down event
                 */
                [onMouseForceDown](event) {
                  if (this.dragging) {
                    return;
                  }
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  const container = event.currentTarget;
                  const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container,
                    originalEvent: event
                  });
                  this.trigger(container, dragStartEvent);
                  this.currentContainer = container;
                  this.dragging = !dragStartEvent.canceled();
                  this.mightDrag = false;
                }
                /**
                 * Mouse up handler
                 * @private
                 * @param {Event} event - Mouse up event
                 */
                [onMouseUp](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target: null,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragStopEvent);
                  this.currentContainer = null;
                  this.dragging = false;
                  this.mightDrag = false;
                }
                /**
                 * Mouse down handler
                 * @private
                 * @param {Event} event - Mouse down event
                 */
                [onMouseDown](event) {
                  if (!this.mightDrag) {
                    return;
                  }
                  event.stopPropagation();
                  event.stopImmediatePropagation();
                  event.preventDefault();
                }
                /**
                 * Mouse move handler
                 * @private
                 * @param {Event} event - Mouse force will begin event
                 */
                [onMouseMove](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragMoveEvent);
                }
                /**
                 * Mouse force change handler
                 * @private
                 * @param {Event} event - Mouse force change event
                 */
                [onMouseForceChange](event) {
                  if (this.dragging) {
                    return;
                  }
                  const target = event.target;
                  const container = event.currentTarget;
                  const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                    pressure: event.webkitForce,
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container,
                    originalEvent: event
                  });
                  this.trigger(container, dragPressureEvent);
                }
                /**
                 * Mouse force global change handler
                 * @private
                 * @param {Event} event - Mouse force global change event
                 */
                [onMouseForceGlobalChange](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const target = event.target;
                  const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                    pressure: event.webkitForce,
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragPressureEvent);
                }
              }
              exports2.default = ForceTouchSensor;
            },
            /* 14 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _ForceTouchSensor = __webpack_require__(13);
              var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _ForceTouchSensor2.default;
            },
            /* 15 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _utils = __webpack_require__(2);
              var _Sensor = __webpack_require__(1);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              var _SensorEvent = __webpack_require__(0);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onMouseDown = Symbol("onMouseDown");
              const onMouseUp = Symbol("onMouseUp");
              const onDragStart = Symbol("onDragStart");
              const onDragOver = Symbol("onDragOver");
              const onDragEnd = Symbol("onDragEnd");
              const onDrop = Symbol("onDrop");
              const reset = Symbol("reset");
              class DragSensor extends _Sensor2.default {
                /**
                 * DragSensor constructor.
                 * @constructs DragSensor
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                 * @param {Object} options - Options
                 */
                constructor(containers = [], options = {}) {
                  super(containers, options);
                  this.mouseDownTimeout = null;
                  this.draggableElement = null;
                  this.nativeDraggableElement = null;
                  this[onMouseDown] = this[onMouseDown].bind(this);
                  this[onMouseUp] = this[onMouseUp].bind(this);
                  this[onDragStart] = this[onDragStart].bind(this);
                  this[onDragOver] = this[onDragOver].bind(this);
                  this[onDragEnd] = this[onDragEnd].bind(this);
                  this[onDrop] = this[onDrop].bind(this);
                }
                /**
                 * Attaches sensors event listeners to the DOM
                 */
                attach() {
                  document.addEventListener("mousedown", this[onMouseDown], true);
                }
                /**
                 * Detaches sensors event listeners to the DOM
                 */
                detach() {
                  document.removeEventListener("mousedown", this[onMouseDown], true);
                }
                /**
                 * Drag start handler
                 * @private
                 * @param {Event} event - Drag start event
                 */
                [onDragStart](event) {
                  event.dataTransfer.setData("text", "");
                  event.dataTransfer.effectAllowed = this.options.type;
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  this.currentContainer = (0, _utils.closest)(event.target, this.containers);
                  if (!this.currentContainer) {
                    return;
                  }
                  const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  setTimeout(() => {
                    this.trigger(this.currentContainer, dragStartEvent);
                    if (dragStartEvent.canceled()) {
                      this.dragging = false;
                    } else {
                      this.dragging = true;
                    }
                  }, 0);
                }
                /**
                 * Drag over handler
                 * @private
                 * @param {Event} event - Drag over event
                 */
                [onDragOver](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  const container = this.currentContainer;
                  const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container,
                    originalEvent: event
                  });
                  this.trigger(container, dragMoveEvent);
                  if (!dragMoveEvent.canceled()) {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = this.options.type;
                  }
                }
                /**
                 * Drag end handler
                 * @private
                 * @param {Event} event - Drag end event
                 */
                [onDragEnd](event) {
                  if (!this.dragging) {
                    return;
                  }
                  document.removeEventListener("mouseup", this[onMouseUp], true);
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  const container = this.currentContainer;
                  const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container,
                    originalEvent: event
                  });
                  this.trigger(container, dragStopEvent);
                  this.dragging = false;
                  this.startEvent = null;
                  this[reset]();
                }
                /**
                 * Drop handler
                 * @private
                 * @param {Event} event - Drop event
                 */
                [onDrop](event) {
                  event.preventDefault();
                }
                /**
                 * Mouse down handler
                 * @private
                 * @param {Event} event - Mouse down event
                 */
                [onMouseDown](event) {
                  if (event.target && (event.target.form || event.target.contenteditable)) {
                    return;
                  }
                  const nativeDraggableElement = (0, _utils.closest)(event.target, (element) => element.draggable);
                  if (nativeDraggableElement) {
                    nativeDraggableElement.draggable = false;
                    this.nativeDraggableElement = nativeDraggableElement;
                  }
                  document.addEventListener("mouseup", this[onMouseUp], true);
                  document.addEventListener("dragstart", this[onDragStart], false);
                  document.addEventListener("dragover", this[onDragOver], false);
                  document.addEventListener("dragend", this[onDragEnd], false);
                  document.addEventListener("drop", this[onDrop], false);
                  const target = (0, _utils.closest)(event.target, this.options.draggable);
                  if (!target) {
                    return;
                  }
                  this.startEvent = event;
                  this.mouseDownTimeout = setTimeout(() => {
                    target.draggable = true;
                    this.draggableElement = target;
                  }, this.delay.drag);
                }
                /**
                 * Mouse up handler
                 * @private
                 * @param {Event} event - Mouse up event
                 */
                [onMouseUp]() {
                  this[reset]();
                }
                /**
                 * Mouse up handler
                 * @private
                 * @param {Event} event - Mouse up event
                 */
                [reset]() {
                  clearTimeout(this.mouseDownTimeout);
                  document.removeEventListener("mouseup", this[onMouseUp], true);
                  document.removeEventListener("dragstart", this[onDragStart], false);
                  document.removeEventListener("dragover", this[onDragOver], false);
                  document.removeEventListener("dragend", this[onDragEnd], false);
                  document.removeEventListener("drop", this[onDrop], false);
                  if (this.nativeDraggableElement) {
                    this.nativeDraggableElement.draggable = true;
                    this.nativeDraggableElement = null;
                  }
                  if (this.draggableElement) {
                    this.draggableElement.draggable = false;
                    this.draggableElement = null;
                  }
                }
              }
              exports2.default = DragSensor;
            },
            /* 16 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DragSensor = __webpack_require__(15);
              var _DragSensor2 = _interopRequireDefault(_DragSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _DragSensor2.default;
            },
            /* 17 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _utils = __webpack_require__(2);
              var _Sensor = __webpack_require__(1);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              var _SensorEvent = __webpack_require__(0);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onTouchStart = Symbol("onTouchStart");
              const onTouchEnd = Symbol("onTouchEnd");
              const onTouchMove = Symbol("onTouchMove");
              const startDrag = Symbol("startDrag");
              const onDistanceChange = Symbol("onDistanceChange");
              let preventScrolling = false;
              window.addEventListener("touchmove", (event) => {
                if (!preventScrolling) {
                  return;
                }
                event.preventDefault();
              }, { passive: false });
              class TouchSensor extends _Sensor2.default {
                /**
                 * TouchSensor constructor.
                 * @constructs TouchSensor
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                 * @param {Object} options - Options
                 */
                constructor(containers = [], options = {}) {
                  super(containers, options);
                  this.currentScrollableParent = null;
                  this.tapTimeout = null;
                  this.touchMoved = false;
                  this.pageX = null;
                  this.pageY = null;
                  this[onTouchStart] = this[onTouchStart].bind(this);
                  this[onTouchEnd] = this[onTouchEnd].bind(this);
                  this[onTouchMove] = this[onTouchMove].bind(this);
                  this[startDrag] = this[startDrag].bind(this);
                  this[onDistanceChange] = this[onDistanceChange].bind(this);
                }
                /**
                 * Attaches sensors event listeners to the DOM
                 */
                attach() {
                  document.addEventListener("touchstart", this[onTouchStart]);
                }
                /**
                 * Detaches sensors event listeners to the DOM
                 */
                detach() {
                  document.removeEventListener("touchstart", this[onTouchStart]);
                }
                /**
                 * Touch start handler
                 * @private
                 * @param {Event} event - Touch start event
                 */
                [onTouchStart](event) {
                  const container = (0, _utils.closest)(event.target, this.containers);
                  if (!container) {
                    return;
                  }
                  const { distance = 0 } = this.options;
                  const { delay } = this;
                  const { pageX, pageY } = (0, _utils.touchCoords)(event);
                  Object.assign(this, { pageX, pageY });
                  this.onTouchStartAt = Date.now();
                  this.startEvent = event;
                  this.currentContainer = container;
                  document.addEventListener("touchend", this[onTouchEnd]);
                  document.addEventListener("touchcancel", this[onTouchEnd]);
                  document.addEventListener("touchmove", this[onDistanceChange]);
                  container.addEventListener("contextmenu", onContextMenu);
                  if (distance) {
                    preventScrolling = true;
                  }
                  this.tapTimeout = window.setTimeout(() => {
                    this[onDistanceChange]({ touches: [{ pageX: this.pageX, pageY: this.pageY }] });
                  }, delay.touch);
                }
                /**
                 * Start the drag
                 * @private
                 */
                [startDrag]() {
                  const startEvent = this.startEvent;
                  const container = this.currentContainer;
                  const touch = (0, _utils.touchCoords)(startEvent);
                  const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                    clientX: touch.pageX,
                    clientY: touch.pageY,
                    target: startEvent.target,
                    container,
                    originalEvent: startEvent
                  });
                  this.trigger(this.currentContainer, dragStartEvent);
                  this.dragging = !dragStartEvent.canceled();
                  if (this.dragging) {
                    document.addEventListener("touchmove", this[onTouchMove]);
                  }
                  preventScrolling = this.dragging;
                }
                /**
                 * Touch move handler prior to drag start.
                 * @private
                 * @param {Event} event - Touch move event
                 */
                [onDistanceChange](event) {
                  const { distance } = this.options;
                  const { startEvent, delay } = this;
                  const start = (0, _utils.touchCoords)(startEvent);
                  const current = (0, _utils.touchCoords)(event);
                  const timeElapsed = Date.now() - this.onTouchStartAt;
                  const distanceTravelled = (0, _utils.distance)(start.pageX, start.pageY, current.pageX, current.pageY);
                  Object.assign(this, current);
                  clearTimeout(this.tapTimeout);
                  if (timeElapsed < delay.touch) {
                    document.removeEventListener("touchmove", this[onDistanceChange]);
                  } else if (distanceTravelled >= distance) {
                    document.removeEventListener("touchmove", this[onDistanceChange]);
                    this[startDrag]();
                  }
                }
                /**
                 * Mouse move handler while dragging
                 * @private
                 * @param {Event} event - Touch move event
                 */
                [onTouchMove](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const { pageX, pageY } = (0, _utils.touchCoords)(event);
                  const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
                  const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                    clientX: pageX,
                    clientY: pageY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragMoveEvent);
                }
                /**
                 * Touch end handler
                 * @private
                 * @param {Event} event - Touch end event
                 */
                [onTouchEnd](event) {
                  clearTimeout(this.tapTimeout);
                  preventScrolling = false;
                  document.removeEventListener("touchend", this[onTouchEnd]);
                  document.removeEventListener("touchcancel", this[onTouchEnd]);
                  document.removeEventListener("touchmove", this[onDistanceChange]);
                  if (this.currentContainer) {
                    this.currentContainer.removeEventListener("contextmenu", onContextMenu);
                  }
                  if (!this.dragging) {
                    return;
                  }
                  document.removeEventListener("touchmove", this[onTouchMove]);
                  const { pageX, pageY } = (0, _utils.touchCoords)(event);
                  const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
                  event.preventDefault();
                  const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                    clientX: pageX,
                    clientY: pageY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragStopEvent);
                  this.currentContainer = null;
                  this.dragging = false;
                  this.startEvent = null;
                }
              }
              exports2.default = TouchSensor;
              function onContextMenu(event) {
                event.preventDefault();
                event.stopPropagation();
              }
            },
            /* 18 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _TouchSensor = __webpack_require__(17);
              var _TouchSensor2 = _interopRequireDefault(_TouchSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _TouchSensor2.default;
            },
            /* 19 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DragPressureSensorEvent = exports2.DragStopSensorEvent = exports2.DragMoveSensorEvent = exports2.DragStartSensorEvent = exports2.SensorEvent = void 0;
              var _AbstractEvent = __webpack_require__(3);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              class SensorEvent extends _AbstractEvent2.default {
                /**
                 * Original browser event that triggered a sensor
                 * @property originalEvent
                 * @type {Event}
                 * @readonly
                 */
                get originalEvent() {
                  return this.data.originalEvent;
                }
                /**
                 * Normalized clientX for both touch and mouse events
                 * @property clientX
                 * @type {Number}
                 * @readonly
                 */
                get clientX() {
                  return this.data.clientX;
                }
                /**
                 * Normalized clientY for both touch and mouse events
                 * @property clientY
                 * @type {Number}
                 * @readonly
                 */
                get clientY() {
                  return this.data.clientY;
                }
                /**
                 * Normalized target for both touch and mouse events
                 * Returns the element that is behind cursor or touch pointer
                 * @property target
                 * @type {HTMLElement}
                 * @readonly
                 */
                get target() {
                  return this.data.target;
                }
                /**
                 * Container that initiated the sensor
                 * @property container
                 * @type {HTMLElement}
                 * @readonly
                 */
                get container() {
                  return this.data.container;
                }
                /**
                 * Trackpad pressure
                 * @property pressure
                 * @type {Number}
                 * @readonly
                 */
                get pressure() {
                  return this.data.pressure;
                }
              }
              exports2.SensorEvent = SensorEvent;
              class DragStartSensorEvent extends SensorEvent {
              }
              exports2.DragStartSensorEvent = DragStartSensorEvent;
              DragStartSensorEvent.type = "drag:start";
              class DragMoveSensorEvent extends SensorEvent {
              }
              exports2.DragMoveSensorEvent = DragMoveSensorEvent;
              DragMoveSensorEvent.type = "drag:move";
              class DragStopSensorEvent extends SensorEvent {
              }
              exports2.DragStopSensorEvent = DragStopSensorEvent;
              DragStopSensorEvent.type = "drag:stop";
              class DragPressureSensorEvent extends SensorEvent {
              }
              exports2.DragPressureSensorEvent = DragPressureSensorEvent;
              DragPressureSensorEvent.type = "drag:pressure";
            },
            /* 20 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _utils = __webpack_require__(2);
              var _Sensor = __webpack_require__(1);
              var _Sensor2 = _interopRequireDefault(_Sensor);
              var _SensorEvent = __webpack_require__(0);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onContextMenuWhileDragging = Symbol("onContextMenuWhileDragging");
              const onMouseDown = Symbol("onMouseDown");
              const onMouseMove = Symbol("onMouseMove");
              const onMouseUp = Symbol("onMouseUp");
              const startDrag = Symbol("startDrag");
              const onDistanceChange = Symbol("onDistanceChange");
              class MouseSensor extends _Sensor2.default {
                /**
                 * MouseSensor constructor.
                 * @constructs MouseSensor
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                 * @param {Object} options - Options
                 */
                constructor(containers = [], options = {}) {
                  super(containers, options);
                  this.mouseDownTimeout = null;
                  this.pageX = null;
                  this.pageY = null;
                  this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
                  this[onMouseDown] = this[onMouseDown].bind(this);
                  this[onMouseMove] = this[onMouseMove].bind(this);
                  this[onMouseUp] = this[onMouseUp].bind(this);
                  this[startDrag] = this[startDrag].bind(this);
                  this[onDistanceChange] = this[onDistanceChange].bind(this);
                }
                /**
                 * Attaches sensors event listeners to the DOM
                 */
                attach() {
                  document.addEventListener("mousedown", this[onMouseDown], true);
                }
                /**
                 * Detaches sensors event listeners to the DOM
                 */
                detach() {
                  document.removeEventListener("mousedown", this[onMouseDown], true);
                }
                /**
                 * Mouse down handler
                 * @private
                 * @param {Event} event - Mouse down event
                 */
                [onMouseDown](event) {
                  if (event.button !== 0 || event.ctrlKey || event.metaKey) {
                    return;
                  }
                  const container = (0, _utils.closest)(event.target, this.containers);
                  if (!container) {
                    return;
                  }
                  const { delay } = this;
                  const { pageX, pageY } = event;
                  Object.assign(this, { pageX, pageY });
                  this.onMouseDownAt = Date.now();
                  this.startEvent = event;
                  this.currentContainer = container;
                  document.addEventListener("mouseup", this[onMouseUp]);
                  document.addEventListener("dragstart", preventNativeDragStart);
                  document.addEventListener("mousemove", this[onDistanceChange]);
                  this.mouseDownTimeout = window.setTimeout(() => {
                    this[onDistanceChange]({ pageX: this.pageX, pageY: this.pageY });
                  }, delay.mouse);
                }
                /**
                 * Start the drag
                 * @private
                 */
                [startDrag]() {
                  const startEvent = this.startEvent;
                  const container = this.currentContainer;
                  const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                    clientX: startEvent.clientX,
                    clientY: startEvent.clientY,
                    target: startEvent.target,
                    container,
                    originalEvent: startEvent
                  });
                  this.trigger(this.currentContainer, dragStartEvent);
                  this.dragging = !dragStartEvent.canceled();
                  if (this.dragging) {
                    document.addEventListener("contextmenu", this[onContextMenuWhileDragging], true);
                    document.addEventListener("mousemove", this[onMouseMove]);
                  }
                }
                /**
                 * Detect change in distance, starting drag when both
                 * delay and distance requirements are met
                 * @private
                 * @param {Event} event - Mouse move event
                 */
                [onDistanceChange](event) {
                  const { pageX, pageY } = event;
                  const { distance } = this.options;
                  const { startEvent, delay } = this;
                  Object.assign(this, { pageX, pageY });
                  if (!this.currentContainer) {
                    return;
                  }
                  const timeElapsed = Date.now() - this.onMouseDownAt;
                  const distanceTravelled = (0, _utils.distance)(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
                  clearTimeout(this.mouseDownTimeout);
                  if (timeElapsed < delay.mouse) {
                    document.removeEventListener("mousemove", this[onDistanceChange]);
                  } else if (distanceTravelled >= distance) {
                    document.removeEventListener("mousemove", this[onDistanceChange]);
                    this[startDrag]();
                  }
                }
                /**
                 * Mouse move handler
                 * @private
                 * @param {Event} event - Mouse move event
                 */
                [onMouseMove](event) {
                  if (!this.dragging) {
                    return;
                  }
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragMoveEvent);
                }
                /**
                 * Mouse up handler
                 * @private
                 * @param {Event} event - Mouse up event
                 */
                [onMouseUp](event) {
                  clearTimeout(this.mouseDownTimeout);
                  if (event.button !== 0) {
                    return;
                  }
                  document.removeEventListener("mouseup", this[onMouseUp]);
                  document.removeEventListener("dragstart", preventNativeDragStart);
                  document.removeEventListener("mousemove", this[onDistanceChange]);
                  if (!this.dragging) {
                    return;
                  }
                  const target = document.elementFromPoint(event.clientX, event.clientY);
                  const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container: this.currentContainer,
                    originalEvent: event
                  });
                  this.trigger(this.currentContainer, dragStopEvent);
                  document.removeEventListener("contextmenu", this[onContextMenuWhileDragging], true);
                  document.removeEventListener("mousemove", this[onMouseMove]);
                  this.currentContainer = null;
                  this.dragging = false;
                  this.startEvent = null;
                }
                /**
                 * Context menu handler
                 * @private
                 * @param {Event} event - Context menu event
                 */
                [onContextMenuWhileDragging](event) {
                  event.preventDefault();
                }
              }
              exports2.default = MouseSensor;
              function preventNativeDragStart(event) {
                event.preventDefault();
              }
            },
            /* 21 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _MouseSensor = __webpack_require__(20);
              var _MouseSensor2 = _interopRequireDefault(_MouseSensor);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _MouseSensor2.default;
            },
            /* 22 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              const defaultDealy = {
                mouse: 0,
                drag: 0,
                touch: 100
              };
              class Sensor {
                /**
                 * Sensor constructor.
                 * @constructs Sensor
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                 * @param {Object} options - Options
                 */
                constructor(containers = [], options = {}) {
                  this.containers = [...containers];
                  this.options = _extends({}, options);
                  this.dragging = false;
                  this.currentContainer = null;
                  this.startEvent = null;
                  this.delay = calcDelay(options.delay);
                }
                /**
                 * Attaches sensors event listeners to the DOM
                 * @return {Sensor}
                 */
                attach() {
                  return this;
                }
                /**
                 * Detaches sensors event listeners to the DOM
                 * @return {Sensor}
                 */
                detach() {
                  return this;
                }
                /**
                 * Adds container to this sensor instance
                 * @param {...HTMLElement} containers - Containers you want to add to this sensor
                 * @example draggable.addContainer(document.body)
                 */
                addContainer(...containers) {
                  this.containers = [...this.containers, ...containers];
                }
                /**
                 * Removes container from this sensor instance
                 * @param {...HTMLElement} containers - Containers you want to remove from this sensor
                 * @example draggable.removeContainer(document.body)
                 */
                removeContainer(...containers) {
                  this.containers = this.containers.filter((container) => !containers.includes(container));
                }
                /**
                 * Triggers event on target element
                 * @param {HTMLElement} element - Element to trigger event on
                 * @param {SensorEvent} sensorEvent - Sensor event to trigger
                 */
                trigger(element, sensorEvent) {
                  const event = document.createEvent("Event");
                  event.detail = sensorEvent;
                  event.initEvent(sensorEvent.type, true, true);
                  element.dispatchEvent(event);
                  this.lastEvent = sensorEvent;
                  return sensorEvent;
                }
              }
              exports2.default = Sensor;
              function calcDelay(optionsDelay) {
                const delay = {};
                if (optionsDelay === void 0) {
                  return _extends({}, defaultDealy);
                }
                if (typeof optionsDelay === "number") {
                  for (const key in defaultDealy) {
                    if (defaultDealy.hasOwnProperty(key)) {
                      delay[key] = optionsDelay;
                    }
                  }
                  return delay;
                }
                for (const key in defaultDealy) {
                  if (defaultDealy.hasOwnProperty(key)) {
                    if (optionsDelay[key] === void 0) {
                      delay[key] = defaultDealy[key];
                    } else {
                      delay[key] = optionsDelay[key];
                    }
                  }
                }
                return delay;
              }
            },
            /* 23 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.default = touchCoords;
              function touchCoords(event = {}) {
                const { touches, changedTouches } = event;
                return touches && touches[0] || changedTouches && changedTouches[0];
              }
            },
            /* 24 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _touchCoords = __webpack_require__(23);
              var _touchCoords2 = _interopRequireDefault(_touchCoords);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _touchCoords2.default;
            },
            /* 25 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.default = distance;
              function distance(x1, y1, x2, y2) {
                return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
              }
            },
            /* 26 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _distance = __webpack_require__(25);
              var _distance2 = _interopRequireDefault(_distance);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _distance2.default;
            },
            /* 27 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.default = requestNextAnimationFrame;
              function requestNextAnimationFrame(callback) {
                return requestAnimationFrame(() => {
                  requestAnimationFrame(callback);
                });
              }
            },
            /* 28 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _requestNextAnimationFrame = __webpack_require__(27);
              var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _requestNextAnimationFrame2.default;
            },
            /* 29 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.default = closest;
              const matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
              function closest(element, value) {
                if (!element) {
                  return null;
                }
                const selector = value;
                const callback = value;
                const nodeList = value;
                const singleElement = value;
                const isSelector = Boolean(typeof value === "string");
                const isFunction = Boolean(typeof value === "function");
                const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
                const isElement = Boolean(value instanceof HTMLElement);
                function conditionFn(currentElement) {
                  if (!currentElement) {
                    return currentElement;
                  } else if (isSelector) {
                    return matchFunction.call(currentElement, selector);
                  } else if (isNodeList) {
                    return [...nodeList].includes(currentElement);
                  } else if (isElement) {
                    return singleElement === currentElement;
                  } else if (isFunction) {
                    return callback(currentElement);
                  } else {
                    return null;
                  }
                }
                let current = element;
                do {
                  current = current.correspondingUseElement || current.correspondingElement || current;
                  if (conditionFn(current)) {
                    return current;
                  }
                  current = current.parentNode;
                } while (current && current !== document.body && current !== document);
                return null;
              }
            },
            /* 30 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _closest = __webpack_require__(29);
              var _closest2 = _interopRequireDefault(_closest);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _closest2.default;
            },
            /* 31 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = exports2.scroll = exports2.onDragStop = exports2.onDragMove = exports2.onDragStart = void 0;
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _AbstractPlugin = __webpack_require__(4);
              var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
              var _utils = __webpack_require__(2);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onDragStart = exports2.onDragStart = Symbol("onDragStart");
              const onDragMove = exports2.onDragMove = Symbol("onDragMove");
              const onDragStop = exports2.onDragStop = Symbol("onDragStop");
              const scroll = exports2.scroll = Symbol("scroll");
              const defaultOptions = exports2.defaultOptions = {
                speed: 6,
                sensitivity: 50,
                scrollableElements: []
              };
              class Scrollable extends _AbstractPlugin2.default {
                /**
                 * Scrollable constructor.
                 * @constructs Scrollable
                 * @param {Draggable} draggable - Draggable instance
                 */
                constructor(draggable) {
                  super(draggable);
                  this.options = _extends({}, defaultOptions, this.getOptions());
                  this.currentMousePosition = null;
                  this.scrollAnimationFrame = null;
                  this.scrollableElement = null;
                  this.findScrollableElementFrame = null;
                  this[onDragStart] = this[onDragStart].bind(this);
                  this[onDragMove] = this[onDragMove].bind(this);
                  this[onDragStop] = this[onDragStop].bind(this);
                  this[scroll] = this[scroll].bind(this);
                }
                /**
                 * Attaches plugins event listeners
                 */
                attach() {
                  this.draggable.on("drag:start", this[onDragStart]).on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]);
                }
                /**
                 * Detaches plugins event listeners
                 */
                detach() {
                  this.draggable.off("drag:start", this[onDragStart]).off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]);
                }
                /**
                 * Returns options passed through draggable
                 * @return {Object}
                 */
                getOptions() {
                  return this.draggable.options.scrollable || {};
                }
                /**
                 * Returns closest scrollable elements by element
                 * @param {HTMLElement} target
                 * @return {HTMLElement}
                 */
                getScrollableElement(target) {
                  if (this.hasDefinedScrollableElements()) {
                    return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
                  } else {
                    return closestScrollableElement(target);
                  }
                }
                /**
                 * Returns true if at least one scrollable element have been defined via options
                 * @param {HTMLElement} target
                 * @return {Boolean}
                 */
                hasDefinedScrollableElements() {
                  return Boolean(this.options.scrollableElements.length !== 0);
                }
                /**
                 * Drag start handler. Finds closest scrollable parent in separate frame
                 * @param {DragStartEvent} dragEvent
                 * @private
                 */
                [onDragStart](dragEvent) {
                  this.findScrollableElementFrame = requestAnimationFrame(() => {
                    this.scrollableElement = this.getScrollableElement(dragEvent.source);
                  });
                }
                /**
                 * Drag move handler. Remembers mouse position and initiates scrolling
                 * @param {DragMoveEvent} dragEvent
                 * @private
                 */
                [onDragMove](dragEvent) {
                  this.findScrollableElementFrame = requestAnimationFrame(() => {
                    this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
                  });
                  if (!this.scrollableElement) {
                    return;
                  }
                  const sensorEvent = dragEvent.sensorEvent;
                  const scrollOffset = { x: 0, y: 0 };
                  if ("ontouchstart" in window) {
                    scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                  }
                  this.currentMousePosition = {
                    clientX: sensorEvent.clientX - scrollOffset.x,
                    clientY: sensorEvent.clientY - scrollOffset.y
                  };
                  this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
                }
                /**
                 * Drag stop handler. Cancels scroll animations and resets state
                 * @private
                 */
                [onDragStop]() {
                  cancelAnimationFrame(this.scrollAnimationFrame);
                  cancelAnimationFrame(this.findScrollableElementFrame);
                  this.scrollableElement = null;
                  this.scrollAnimationFrame = null;
                  this.findScrollableElementFrame = null;
                  this.currentMousePosition = null;
                }
                /**
                 * Scroll function that does the heavylifting
                 * @private
                 */
                [scroll]() {
                  if (!this.scrollableElement || !this.currentMousePosition) {
                    return;
                  }
                  cancelAnimationFrame(this.scrollAnimationFrame);
                  const { speed, sensitivity } = this.options;
                  const rect = this.scrollableElement.getBoundingClientRect();
                  const bottomCutOff = rect.bottom > window.innerHeight;
                  const topCutOff = rect.top < 0;
                  const cutOff = topCutOff || bottomCutOff;
                  const documentScrollingElement = getDocumentScrollingElement();
                  const scrollableElement = this.scrollableElement;
                  const clientX = this.currentMousePosition.clientX;
                  const clientY = this.currentMousePosition.clientY;
                  if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
                    const { offsetHeight, offsetWidth } = scrollableElement;
                    if (rect.top + offsetHeight - clientY < sensitivity) {
                      scrollableElement.scrollTop += speed;
                    } else if (clientY - rect.top < sensitivity) {
                      scrollableElement.scrollTop -= speed;
                    }
                    if (rect.left + offsetWidth - clientX < sensitivity) {
                      scrollableElement.scrollLeft += speed;
                    } else if (clientX - rect.left < sensitivity) {
                      scrollableElement.scrollLeft -= speed;
                    }
                  } else {
                    const { innerHeight, innerWidth } = window;
                    if (clientY < sensitivity) {
                      documentScrollingElement.scrollTop -= speed;
                    } else if (innerHeight - clientY < sensitivity) {
                      documentScrollingElement.scrollTop += speed;
                    }
                    if (clientX < sensitivity) {
                      documentScrollingElement.scrollLeft -= speed;
                    } else if (innerWidth - clientX < sensitivity) {
                      documentScrollingElement.scrollLeft += speed;
                    }
                  }
                  this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
                }
              }
              exports2.default = Scrollable;
              function hasOverflow(element) {
                const overflowRegex = /(auto|scroll)/;
                const computedStyles = getComputedStyle(element, null);
                const overflow = computedStyles.getPropertyValue("overflow") + computedStyles.getPropertyValue("overflow-y") + computedStyles.getPropertyValue("overflow-x");
                return overflowRegex.test(overflow);
              }
              function isStaticallyPositioned(element) {
                const position = getComputedStyle(element).getPropertyValue("position");
                return position === "static";
              }
              function closestScrollableElement(element) {
                if (!element) {
                  return getDocumentScrollingElement();
                }
                const position = getComputedStyle(element).getPropertyValue("position");
                const excludeStaticParents = position === "absolute";
                const scrollableElement = (0, _utils.closest)(element, (parent) => {
                  if (excludeStaticParents && isStaticallyPositioned(parent)) {
                    return false;
                  }
                  return hasOverflow(parent);
                });
                if (position === "fixed" || !scrollableElement) {
                  return getDocumentScrollingElement();
                } else {
                  return scrollableElement;
                }
              }
              function getDocumentScrollingElement() {
                return document.scrollingElement || document.documentElement;
              }
            },
            /* 32 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = void 0;
              var _Scrollable = __webpack_require__(31);
              var _Scrollable2 = _interopRequireDefault(_Scrollable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Scrollable2.default;
              exports2.defaultOptions = _Scrollable.defaultOptions;
            },
            /* 33 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.MirrorDestroyEvent = exports2.MirrorMoveEvent = exports2.MirrorAttachedEvent = exports2.MirrorCreatedEvent = exports2.MirrorCreateEvent = exports2.MirrorEvent = void 0;
              var _AbstractEvent = __webpack_require__(3);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              class MirrorEvent extends _AbstractEvent2.default {
                /**
                 * Draggables source element
                 * @property source
                 * @type {HTMLElement}
                 * @readonly
                 */
                get source() {
                  return this.data.source;
                }
                /**
                 * Draggables original source element
                 * @property originalSource
                 * @type {HTMLElement}
                 * @readonly
                 */
                get originalSource() {
                  return this.data.originalSource;
                }
                /**
                 * Draggables source container element
                 * @property sourceContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get sourceContainer() {
                  return this.data.sourceContainer;
                }
                /**
                 * Sensor event
                 * @property sensorEvent
                 * @type {SensorEvent}
                 * @readonly
                 */
                get sensorEvent() {
                  return this.data.sensorEvent;
                }
                /**
                 * Drag event
                 * @property dragEvent
                 * @type {DragEvent}
                 * @readonly
                 */
                get dragEvent() {
                  return this.data.dragEvent;
                }
                /**
                 * Original event that triggered sensor event
                 * @property originalEvent
                 * @type {Event}
                 * @readonly
                 */
                get originalEvent() {
                  if (this.sensorEvent) {
                    return this.sensorEvent.originalEvent;
                  }
                  return null;
                }
              }
              exports2.MirrorEvent = MirrorEvent;
              class MirrorCreateEvent extends MirrorEvent {
              }
              exports2.MirrorCreateEvent = MirrorCreateEvent;
              MirrorCreateEvent.type = "mirror:create";
              class MirrorCreatedEvent extends MirrorEvent {
                /**
                 * Draggables mirror element
                 * @property mirror
                 * @type {HTMLElement}
                 * @readonly
                 */
                get mirror() {
                  return this.data.mirror;
                }
              }
              exports2.MirrorCreatedEvent = MirrorCreatedEvent;
              MirrorCreatedEvent.type = "mirror:created";
              class MirrorAttachedEvent extends MirrorEvent {
                /**
                 * Draggables mirror element
                 * @property mirror
                 * @type {HTMLElement}
                 * @readonly
                 */
                get mirror() {
                  return this.data.mirror;
                }
              }
              exports2.MirrorAttachedEvent = MirrorAttachedEvent;
              MirrorAttachedEvent.type = "mirror:attached";
              class MirrorMoveEvent extends MirrorEvent {
                /**
                 * Draggables mirror element
                 * @property mirror
                 * @type {HTMLElement}
                 * @readonly
                 */
                get mirror() {
                  return this.data.mirror;
                }
                /**
                 * Sensor has exceeded mirror's threshold on x axis
                 * @type {Boolean}
                 * @readonly
                 */
                get passedThreshX() {
                  return this.data.passedThreshX;
                }
                /**
                 * Sensor has exceeded mirror's threshold on y axis
                 * @type {Boolean}
                 * @readonly
                 */
                get passedThreshY() {
                  return this.data.passedThreshY;
                }
              }
              exports2.MirrorMoveEvent = MirrorMoveEvent;
              MirrorMoveEvent.type = "mirror:move";
              MirrorMoveEvent.cancelable = true;
              class MirrorDestroyEvent extends MirrorEvent {
                /**
                 * Draggables mirror element
                 * @property mirror
                 * @type {HTMLElement}
                 * @readonly
                 */
                get mirror() {
                  return this.data.mirror;
                }
              }
              exports2.MirrorDestroyEvent = MirrorDestroyEvent;
              MirrorDestroyEvent.type = "mirror:destroy";
              MirrorDestroyEvent.cancelable = true;
            },
            /* 34 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _MirrorEvent = __webpack_require__(33);
              Object.keys(_MirrorEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _MirrorEvent[key];
                  }
                });
              });
            },
            /* 35 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = exports2.getAppendableContainer = exports2.onScroll = exports2.onMirrorMove = exports2.onMirrorCreated = exports2.onDragStop = exports2.onDragMove = exports2.onDragStart = void 0;
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _AbstractPlugin = __webpack_require__(4);
              var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
              var _MirrorEvent = __webpack_require__(34);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                  if (keys.indexOf(i) >= 0)
                    continue;
                  if (!Object.prototype.hasOwnProperty.call(obj, i))
                    continue;
                  target[i] = obj[i];
                }
                return target;
              }
              const onDragStart = exports2.onDragStart = Symbol("onDragStart");
              const onDragMove = exports2.onDragMove = Symbol("onDragMove");
              const onDragStop = exports2.onDragStop = Symbol("onDragStop");
              const onMirrorCreated = exports2.onMirrorCreated = Symbol("onMirrorCreated");
              const onMirrorMove = exports2.onMirrorMove = Symbol("onMirrorMove");
              const onScroll = exports2.onScroll = Symbol("onScroll");
              const getAppendableContainer = exports2.getAppendableContainer = Symbol("getAppendableContainer");
              const defaultOptions = exports2.defaultOptions = {
                constrainDimensions: false,
                xAxis: true,
                yAxis: true,
                cursorOffsetX: null,
                cursorOffsetY: null,
                thresholdX: null,
                thresholdY: null
              };
              class Mirror extends _AbstractPlugin2.default {
                /**
                 * Mirror constructor.
                 * @constructs Mirror
                 * @param {Draggable} draggable - Draggable instance
                 */
                constructor(draggable) {
                  super(draggable);
                  this.options = _extends({}, defaultOptions, this.getOptions());
                  this.scrollOffset = { x: 0, y: 0 };
                  this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                  };
                  this[onDragStart] = this[onDragStart].bind(this);
                  this[onDragMove] = this[onDragMove].bind(this);
                  this[onDragStop] = this[onDragStop].bind(this);
                  this[onMirrorCreated] = this[onMirrorCreated].bind(this);
                  this[onMirrorMove] = this[onMirrorMove].bind(this);
                  this[onScroll] = this[onScroll].bind(this);
                }
                /**
                 * Attaches plugins event listeners
                 */
                attach() {
                  this.draggable.on("drag:start", this[onDragStart]).on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]).on("mirror:created", this[onMirrorCreated]).on("mirror:move", this[onMirrorMove]);
                }
                /**
                 * Detaches plugins event listeners
                 */
                detach() {
                  this.draggable.off("drag:start", this[onDragStart]).off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]).off("mirror:created", this[onMirrorCreated]).off("mirror:move", this[onMirrorMove]);
                }
                /**
                 * Returns options passed through draggable
                 * @return {Object}
                 */
                getOptions() {
                  return this.draggable.options.mirror || {};
                }
                [onDragStart](dragEvent) {
                  if (dragEvent.canceled()) {
                    return;
                  }
                  if ("ontouchstart" in window) {
                    document.addEventListener("scroll", this[onScroll], true);
                  }
                  this.initialScrollOffset = {
                    x: window.scrollX,
                    y: window.scrollY
                  };
                  const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;
                  this.lastMirrorMovedClient = {
                    x: sensorEvent.clientX,
                    y: sensorEvent.clientY
                  };
                  const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
                    source,
                    originalSource,
                    sourceContainer,
                    sensorEvent,
                    dragEvent
                  });
                  this.draggable.trigger(mirrorCreateEvent);
                  if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
                    return;
                  }
                  const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
                  this.mirror = source.cloneNode(true);
                  const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
                    source,
                    originalSource,
                    sourceContainer,
                    sensorEvent,
                    dragEvent,
                    mirror: this.mirror
                  });
                  const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
                    source,
                    originalSource,
                    sourceContainer,
                    sensorEvent,
                    dragEvent,
                    mirror: this.mirror
                  });
                  this.draggable.trigger(mirrorCreatedEvent);
                  appendableContainer.appendChild(this.mirror);
                  this.draggable.trigger(mirrorAttachedEvent);
                }
                [onDragMove](dragEvent) {
                  if (!this.mirror || dragEvent.canceled()) {
                    return;
                  }
                  const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;
                  let passedThreshX = true;
                  let passedThreshY = true;
                  if (this.options.thresholdX || this.options.thresholdY) {
                    const { x: lastX, y: lastY } = this.lastMirrorMovedClient;
                    if (Math.abs(lastX - sensorEvent.clientX) < this.options.thresholdX) {
                      passedThreshX = false;
                    } else {
                      this.lastMirrorMovedClient.x = sensorEvent.clientX;
                    }
                    if (Math.abs(lastY - sensorEvent.clientY) < this.options.thresholdY) {
                      passedThreshY = false;
                    } else {
                      this.lastMirrorMovedClient.y = sensorEvent.clientY;
                    }
                    if (!passedThreshX && !passedThreshY) {
                      return;
                    }
                  }
                  const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
                    source,
                    originalSource,
                    sourceContainer,
                    sensorEvent,
                    dragEvent,
                    mirror: this.mirror,
                    passedThreshX,
                    passedThreshY
                  });
                  this.draggable.trigger(mirrorMoveEvent);
                }
                [onDragStop](dragEvent) {
                  if ("ontouchstart" in window) {
                    document.removeEventListener("scroll", this[onScroll], true);
                  }
                  this.initialScrollOffset = { x: 0, y: 0 };
                  this.scrollOffset = { x: 0, y: 0 };
                  if (!this.mirror) {
                    return;
                  }
                  const { source, sourceContainer, sensorEvent } = dragEvent;
                  const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
                    source,
                    mirror: this.mirror,
                    sourceContainer,
                    sensorEvent,
                    dragEvent
                  });
                  this.draggable.trigger(mirrorDestroyEvent);
                  if (!mirrorDestroyEvent.canceled()) {
                    this.mirror.parentNode.removeChild(this.mirror);
                  }
                }
                [onScroll]() {
                  this.scrollOffset = {
                    x: window.scrollX - this.initialScrollOffset.x,
                    y: window.scrollY - this.initialScrollOffset.y
                  };
                }
                /**
                 * Mirror created handler
                 * @param {MirrorCreatedEvent} mirrorEvent
                 * @return {Promise}
                 * @private
                 */
                [onMirrorCreated]({ mirror, source, sensorEvent }) {
                  const mirrorClasses = this.draggable.getClassNamesFor("mirror");
                  const setState = (_ref) => {
                    let { mirrorOffset, initialX, initialY } = _ref, args = _objectWithoutProperties(_ref, ["mirrorOffset", "initialX", "initialY"]);
                    this.mirrorOffset = mirrorOffset;
                    this.initialX = initialX;
                    this.initialY = initialY;
                    this.lastMovedX = initialX;
                    this.lastMovedY = initialY;
                    return _extends({ mirrorOffset, initialX, initialY }, args);
                  };
                  mirror.style.display = "none";
                  const initialState = {
                    mirror,
                    source,
                    sensorEvent,
                    mirrorClasses,
                    scrollOffset: this.scrollOffset,
                    options: this.options,
                    passedThreshX: true,
                    passedThreshY: true
                  };
                  return Promise.resolve(initialState).then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);
                }
                /**
                 * Mirror move handler
                 * @param {MirrorMoveEvent} mirrorEvent
                 * @return {Promise|null}
                 * @private
                 */
                [onMirrorMove](mirrorEvent) {
                  if (mirrorEvent.canceled()) {
                    return null;
                  }
                  const setState = (_ref2) => {
                    let { lastMovedX, lastMovedY } = _ref2, args = _objectWithoutProperties(_ref2, ["lastMovedX", "lastMovedY"]);
                    this.lastMovedX = lastMovedX;
                    this.lastMovedY = lastMovedY;
                    return _extends({ lastMovedX, lastMovedY }, args);
                  };
                  const initialState = {
                    mirror: mirrorEvent.mirror,
                    sensorEvent: mirrorEvent.sensorEvent,
                    mirrorOffset: this.mirrorOffset,
                    options: this.options,
                    initialX: this.initialX,
                    initialY: this.initialY,
                    scrollOffset: this.scrollOffset,
                    passedThreshX: mirrorEvent.passedThreshX,
                    passedThreshY: mirrorEvent.passedThreshY,
                    lastMovedX: this.lastMovedX,
                    lastMovedY: this.lastMovedY
                  };
                  return Promise.resolve(initialState).then(positionMirror({ raf: true })).then(setState);
                }
                /**
                 * Returns appendable container for mirror based on the appendTo option
                 * @private
                 * @param {Object} options
                 * @param {HTMLElement} options.source - Current source
                 * @return {HTMLElement}
                 */
                [getAppendableContainer](source) {
                  const appendTo = this.options.appendTo;
                  if (typeof appendTo === "string") {
                    return document.querySelector(appendTo);
                  } else if (appendTo instanceof HTMLElement) {
                    return appendTo;
                  } else if (typeof appendTo === "function") {
                    return appendTo(source);
                  } else {
                    return source.parentNode;
                  }
                }
              }
              exports2.default = Mirror;
              function computeMirrorDimensions(_ref3) {
                let { source } = _ref3, args = _objectWithoutProperties(_ref3, ["source"]);
                return withPromise((resolve) => {
                  const sourceRect = source.getBoundingClientRect();
                  resolve(_extends({ source, sourceRect }, args));
                });
              }
              function calculateMirrorOffset(_ref4) {
                let { sensorEvent, sourceRect, options } = _ref4, args = _objectWithoutProperties(_ref4, ["sensorEvent", "sourceRect", "options"]);
                return withPromise((resolve) => {
                  const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
                  const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
                  const mirrorOffset = { top, left };
                  resolve(_extends({ sensorEvent, sourceRect, mirrorOffset, options }, args));
                });
              }
              function resetMirror(_ref5) {
                let { mirror, source, options } = _ref5, args = _objectWithoutProperties(_ref5, ["mirror", "source", "options"]);
                return withPromise((resolve) => {
                  let offsetHeight;
                  let offsetWidth;
                  if (options.constrainDimensions) {
                    const computedSourceStyles = getComputedStyle(source);
                    offsetHeight = computedSourceStyles.getPropertyValue("height");
                    offsetWidth = computedSourceStyles.getPropertyValue("width");
                  }
                  mirror.style.display = null;
                  mirror.style.position = "fixed";
                  mirror.style.pointerEvents = "none";
                  mirror.style.top = 0;
                  mirror.style.left = 0;
                  mirror.style.margin = 0;
                  if (options.constrainDimensions) {
                    mirror.style.height = offsetHeight;
                    mirror.style.width = offsetWidth;
                  }
                  resolve(_extends({ mirror, source, options }, args));
                });
              }
              function addMirrorClasses(_ref6) {
                let { mirror, mirrorClasses } = _ref6, args = _objectWithoutProperties(_ref6, ["mirror", "mirrorClasses"]);
                return withPromise((resolve) => {
                  mirror.classList.add(...mirrorClasses);
                  resolve(_extends({ mirror, mirrorClasses }, args));
                });
              }
              function removeMirrorID(_ref7) {
                let { mirror } = _ref7, args = _objectWithoutProperties(_ref7, ["mirror"]);
                return withPromise((resolve) => {
                  mirror.removeAttribute("id");
                  delete mirror.id;
                  resolve(_extends({ mirror }, args));
                });
              }
              function positionMirror({ withFrame = false, initial = false } = {}) {
                return (_ref8) => {
                  let {
                    mirror,
                    sensorEvent,
                    mirrorOffset,
                    initialY,
                    initialX,
                    scrollOffset,
                    options,
                    passedThreshX,
                    passedThreshY,
                    lastMovedX,
                    lastMovedY
                  } = _ref8, args = _objectWithoutProperties(_ref8, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options", "passedThreshX", "passedThreshY", "lastMovedX", "lastMovedY"]);
                  return withPromise((resolve) => {
                    const result = _extends({
                      mirror,
                      sensorEvent,
                      mirrorOffset,
                      options
                    }, args);
                    if (mirrorOffset) {
                      const x = passedThreshX ? Math.round((sensorEvent.clientX - mirrorOffset.left - scrollOffset.x) / (options.thresholdX || 1)) * (options.thresholdX || 1) : Math.round(lastMovedX);
                      const y = passedThreshY ? Math.round((sensorEvent.clientY - mirrorOffset.top - scrollOffset.y) / (options.thresholdY || 1)) * (options.thresholdY || 1) : Math.round(lastMovedY);
                      if (options.xAxis && options.yAxis || initial) {
                        mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                      } else if (options.xAxis && !options.yAxis) {
                        mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
                      } else if (options.yAxis && !options.xAxis) {
                        mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
                      }
                      if (initial) {
                        result.initialX = x;
                        result.initialY = y;
                      }
                      result.lastMovedX = x;
                      result.lastMovedY = y;
                    }
                    resolve(result);
                  }, { frame: withFrame });
                };
              }
              function withPromise(callback, { raf = false } = {}) {
                return new Promise((resolve, reject) => {
                  if (raf) {
                    requestAnimationFrame(() => {
                      callback(resolve, reject);
                    });
                  } else {
                    callback(resolve, reject);
                  }
                });
              }
              function isNativeDragEvent(sensorEvent) {
                return /^drag/.test(sensorEvent.originalEvent.type);
              }
            },
            /* 36 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = void 0;
              var _Mirror = __webpack_require__(35);
              var _Mirror2 = _interopRequireDefault(_Mirror);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Mirror2.default;
              exports2.defaultOptions = _Mirror.defaultOptions;
            },
            /* 37 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _AbstractPlugin = __webpack_require__(4);
              var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onInitialize = Symbol("onInitialize");
              const onDestroy = Symbol("onDestroy");
              const defaultOptions = {};
              class Focusable extends _AbstractPlugin2.default {
                /**
                 * Focusable constructor.
                 * @constructs Focusable
                 * @param {Draggable} draggable - Draggable instance
                 */
                constructor(draggable) {
                  super(draggable);
                  this.options = _extends({}, defaultOptions, this.getOptions());
                  this[onInitialize] = this[onInitialize].bind(this);
                  this[onDestroy] = this[onDestroy].bind(this);
                }
                /**
                 * Attaches listeners to draggable
                 */
                attach() {
                  this.draggable.on("draggable:initialize", this[onInitialize]).on("draggable:destroy", this[onDestroy]);
                }
                /**
                 * Detaches listeners from draggable
                 */
                detach() {
                  this.draggable.off("draggable:initialize", this[onInitialize]).off("draggable:destroy", this[onDestroy]);
                  this[onDestroy]();
                }
                /**
                 * Returns options passed through draggable
                 * @return {Object}
                 */
                getOptions() {
                  return this.draggable.options.focusable || {};
                }
                /**
                 * Returns draggable containers and elements
                 * @return {HTMLElement[]}
                 */
                getElements() {
                  return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
                }
                /**
                 * Intialize handler
                 * @private
                 */
                [onInitialize]() {
                  requestAnimationFrame(() => {
                    this.getElements().forEach((element) => decorateElement(element));
                  });
                }
                /**
                 * Destroy handler
                 * @private
                 */
                [onDestroy]() {
                  requestAnimationFrame(() => {
                    this.getElements().forEach((element) => stripElement(element));
                  });
                }
              }
              exports2.default = Focusable;
              const elementsWithMissingTabIndex = [];
              function decorateElement(element) {
                const hasMissingTabIndex = Boolean(!element.getAttribute("tabindex") && element.tabIndex === -1);
                if (hasMissingTabIndex) {
                  elementsWithMissingTabIndex.push(element);
                  element.tabIndex = 0;
                }
              }
              function stripElement(element) {
                const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
                if (tabIndexElementPosition !== -1) {
                  element.tabIndex = -1;
                  elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
                }
              }
            },
            /* 38 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _Focusable = __webpack_require__(37);
              var _Focusable2 = _interopRequireDefault(_Focusable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Focusable2.default;
            },
            /* 39 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              class AbstractPlugin {
                /**
                 * AbstractPlugin constructor.
                 * @constructs AbstractPlugin
                 * @param {Draggable} draggable - Draggable instance
                 */
                constructor(draggable) {
                  this.draggable = draggable;
                }
                /**
                 * Override to add listeners
                 * @abstract
                 */
                attach() {
                  throw new Error("Not Implemented");
                }
                /**
                 * Override to remove listeners
                 * @abstract
                 */
                detach() {
                  throw new Error("Not Implemented");
                }
              }
              exports2.default = AbstractPlugin;
            },
            /* 40 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = void 0;
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _AbstractPlugin = __webpack_require__(4);
              var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onInitialize = Symbol("onInitialize");
              const onDestroy = Symbol("onDestroy");
              const announceEvent = Symbol("announceEvent");
              const announceMessage = Symbol("announceMessage");
              const ARIA_RELEVANT = "aria-relevant";
              const ARIA_ATOMIC = "aria-atomic";
              const ARIA_LIVE = "aria-live";
              const ROLE = "role";
              const defaultOptions = exports2.defaultOptions = {
                expire: 7e3
              };
              class Announcement extends _AbstractPlugin2.default {
                /**
                 * Announcement constructor.
                 * @constructs Announcement
                 * @param {Draggable} draggable - Draggable instance
                 */
                constructor(draggable) {
                  super(draggable);
                  this.options = _extends({}, defaultOptions, this.getOptions());
                  this.originalTriggerMethod = this.draggable.trigger;
                  this[onInitialize] = this[onInitialize].bind(this);
                  this[onDestroy] = this[onDestroy].bind(this);
                }
                /**
                 * Attaches listeners to draggable
                 */
                attach() {
                  this.draggable.on("draggable:initialize", this[onInitialize]);
                }
                /**
                 * Detaches listeners from draggable
                 */
                detach() {
                  this.draggable.off("draggable:destroy", this[onDestroy]);
                }
                /**
                 * Returns passed in options
                 */
                getOptions() {
                  return this.draggable.options.announcements || {};
                }
                /**
                 * Announces event
                 * @private
                 * @param {AbstractEvent} event
                 */
                [announceEvent](event) {
                  const message = this.options[event.type];
                  if (message && typeof message === "string") {
                    this[announceMessage](message);
                  }
                  if (message && typeof message === "function") {
                    this[announceMessage](message(event));
                  }
                }
                /**
                 * Announces message to screen reader
                 * @private
                 * @param {String} message
                 */
                [announceMessage](message) {
                  announce(message, { expire: this.options.expire });
                }
                /**
                 * Initialize hander
                 * @private
                 */
                [onInitialize]() {
                  this.draggable.trigger = (event) => {
                    try {
                      this[announceEvent](event);
                    } finally {
                      this.originalTriggerMethod.call(this.draggable, event);
                    }
                  };
                }
                /**
                 * Destroy hander
                 * @private
                 */
                [onDestroy]() {
                  this.draggable.trigger = this.originalTriggerMethod;
                }
              }
              exports2.default = Announcement;
              const liveRegion = createRegion();
              function announce(message, { expire }) {
                const element = document.createElement("div");
                element.textContent = message;
                liveRegion.appendChild(element);
                return setTimeout(() => {
                  liveRegion.removeChild(element);
                }, expire);
              }
              function createRegion() {
                const element = document.createElement("div");
                element.setAttribute("id", "draggable-live-region");
                element.setAttribute(ARIA_RELEVANT, "additions");
                element.setAttribute(ARIA_ATOMIC, "true");
                element.setAttribute(ARIA_LIVE, "assertive");
                element.setAttribute(ROLE, "log");
                element.style.position = "fixed";
                element.style.width = "1px";
                element.style.height = "1px";
                element.style.top = "-1px";
                element.style.overflow = "hidden";
                return element;
              }
              document.addEventListener("DOMContentLoaded", () => {
                document.body.appendChild(liveRegion);
              });
            },
            /* 41 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultOptions = void 0;
              var _Announcement = __webpack_require__(40);
              var _Announcement2 = _interopRequireDefault(_Announcement);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Announcement2.default;
              exports2.defaultOptions = _Announcement.defaultOptions;
            },
            /* 42 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DraggableDestroyEvent = exports2.DraggableInitializedEvent = exports2.DraggableEvent = void 0;
              var _AbstractEvent = __webpack_require__(3);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              class DraggableEvent extends _AbstractEvent2.default {
                /**
                 * Draggable instance
                 * @property draggable
                 * @type {Draggable}
                 * @readonly
                 */
                get draggable() {
                  return this.data.draggable;
                }
              }
              exports2.DraggableEvent = DraggableEvent;
              DraggableEvent.type = "draggable";
              class DraggableInitializedEvent extends DraggableEvent {
              }
              exports2.DraggableInitializedEvent = DraggableInitializedEvent;
              DraggableInitializedEvent.type = "draggable:initialize";
              class DraggableDestroyEvent extends DraggableEvent {
              }
              exports2.DraggableDestroyEvent = DraggableDestroyEvent;
              DraggableDestroyEvent.type = "draggable:destroy";
            },
            /* 43 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DragStoppedEvent = exports2.DragStopEvent = exports2.DragPressureEvent = exports2.DragOutContainerEvent = exports2.DragOverContainerEvent = exports2.DragOutEvent = exports2.DragOverEvent = exports2.DragMoveEvent = exports2.DragStartEvent = exports2.DragEvent = void 0;
              var _AbstractEvent = __webpack_require__(3);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              class DragEvent extends _AbstractEvent2.default {
                /**
                 * Draggables source element
                 * @property source
                 * @type {HTMLElement}
                 * @readonly
                 */
                get source() {
                  return this.data.source;
                }
                /**
                 * Draggables original source element
                 * @property originalSource
                 * @type {HTMLElement}
                 * @readonly
                 */
                get originalSource() {
                  return this.data.originalSource;
                }
                /**
                 * Draggables mirror element
                 * @property mirror
                 * @type {HTMLElement}
                 * @readonly
                 */
                get mirror() {
                  return this.data.mirror;
                }
                /**
                 * Draggables source container element
                 * @property sourceContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get sourceContainer() {
                  return this.data.sourceContainer;
                }
                /**
                 * Sensor event
                 * @property sensorEvent
                 * @type {SensorEvent}
                 * @readonly
                 */
                get sensorEvent() {
                  return this.data.sensorEvent;
                }
                /**
                 * Original event that triggered sensor event
                 * @property originalEvent
                 * @type {Event}
                 * @readonly
                 */
                get originalEvent() {
                  if (this.sensorEvent) {
                    return this.sensorEvent.originalEvent;
                  }
                  return null;
                }
              }
              exports2.DragEvent = DragEvent;
              DragEvent.type = "drag";
              class DragStartEvent extends DragEvent {
              }
              exports2.DragStartEvent = DragStartEvent;
              DragStartEvent.type = "drag:start";
              DragStartEvent.cancelable = true;
              class DragMoveEvent extends DragEvent {
              }
              exports2.DragMoveEvent = DragMoveEvent;
              DragMoveEvent.type = "drag:move";
              class DragOverEvent extends DragEvent {
                /**
                 * Draggable container you are over
                 * @property overContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get overContainer() {
                  return this.data.overContainer;
                }
                /**
                 * Draggable element you are over
                 * @property over
                 * @type {HTMLElement}
                 * @readonly
                 */
                get over() {
                  return this.data.over;
                }
              }
              exports2.DragOverEvent = DragOverEvent;
              DragOverEvent.type = "drag:over";
              DragOverEvent.cancelable = true;
              class DragOutEvent extends DragEvent {
                /**
                 * Draggable container you are over
                 * @property overContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get overContainer() {
                  return this.data.overContainer;
                }
                /**
                 * Draggable element you left
                 * @property over
                 * @type {HTMLElement}
                 * @readonly
                 */
                get over() {
                  return this.data.over;
                }
              }
              exports2.DragOutEvent = DragOutEvent;
              DragOutEvent.type = "drag:out";
              class DragOverContainerEvent extends DragEvent {
                /**
                 * Draggable container you are over
                 * @property overContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get overContainer() {
                  return this.data.overContainer;
                }
              }
              exports2.DragOverContainerEvent = DragOverContainerEvent;
              DragOverContainerEvent.type = "drag:over:container";
              class DragOutContainerEvent extends DragEvent {
                /**
                 * Draggable container you left
                 * @property overContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get overContainer() {
                  return this.data.overContainer;
                }
              }
              exports2.DragOutContainerEvent = DragOutContainerEvent;
              DragOutContainerEvent.type = "drag:out:container";
              class DragPressureEvent extends DragEvent {
                /**
                 * Pressure applied on draggable element
                 * @property pressure
                 * @type {Number}
                 * @readonly
                 */
                get pressure() {
                  return this.data.pressure;
                }
              }
              exports2.DragPressureEvent = DragPressureEvent;
              DragPressureEvent.type = "drag:pressure";
              class DragStopEvent extends DragEvent {
              }
              exports2.DragStopEvent = DragStopEvent;
              DragStopEvent.type = "drag:stop";
              class DragStoppedEvent extends DragEvent {
              }
              exports2.DragStoppedEvent = DragStoppedEvent;
              DragStoppedEvent.type = "drag:stopped";
            },
            /* 44 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _DragEvent = __webpack_require__(8);
              Object.keys(_DragEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _DragEvent[key];
                  }
                });
              });
              var _DraggableEvent = __webpack_require__(7);
              Object.keys(_DraggableEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _DraggableEvent[key];
                  }
                });
              });
              var _Plugins = __webpack_require__(6);
              Object.keys(_Plugins).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _Plugins[key];
                  }
                });
              });
              var _Sensors = __webpack_require__(5);
              Object.keys(_Sensors).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _Sensors[key];
                  }
                });
              });
              var _Draggable = __webpack_require__(12);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Draggable2.default;
            },
            /* 45 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _Draggable = __webpack_require__(44);
              var _Draggable2 = _interopRequireDefault(_Draggable);
              var _SortableEvent = __webpack_require__(9);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              const onDragStart = Symbol("onDragStart");
              const onDragOverContainer = Symbol("onDragOverContainer");
              const onDragOver = Symbol("onDragOver");
              const onDragStop = Symbol("onDragStop");
              function onSortableSortedDefaultAnnouncement({ dragEvent }) {
                const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "sortable element";
                if (dragEvent.over) {
                  const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || "sortable element";
                  const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
                  if (isFollowing) {
                    return `Placed ${sourceText} after ${overText}`;
                  } else {
                    return `Placed ${sourceText} before ${overText}`;
                  }
                } else {
                  return `Placed ${sourceText} into a different container`;
                }
              }
              const defaultAnnouncements = {
                "sortable:sorted": onSortableSortedDefaultAnnouncement
              };
              class Sortable2 extends _Draggable2.default {
                /**
                 * Sortable constructor.
                 * @constructs Sortable
                 * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers
                 * @param {Object} options - Options for Sortable
                 */
                constructor(containers = [], options = {}) {
                  super(containers, _extends({}, options, {
                    announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                  }));
                  this.startIndex = null;
                  this.startContainer = null;
                  this[onDragStart] = this[onDragStart].bind(this);
                  this[onDragOverContainer] = this[onDragOverContainer].bind(this);
                  this[onDragOver] = this[onDragOver].bind(this);
                  this[onDragStop] = this[onDragStop].bind(this);
                  this.on("drag:start", this[onDragStart]).on("drag:over:container", this[onDragOverContainer]).on("drag:over", this[onDragOver]).on("drag:stop", this[onDragStop]);
                }
                /**
                 * Destroys Sortable instance.
                 */
                destroy() {
                  super.destroy();
                  this.off("drag:start", this[onDragStart]).off("drag:over:container", this[onDragOverContainer]).off("drag:over", this[onDragOver]).off("drag:stop", this[onDragStop]);
                }
                /**
                 * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source
                 * @param {HTMLElement} element - An element
                 * @return {Number}
                 */
                index(element) {
                  return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
                }
                /**
                 * Returns sortable elements for a given container, excluding the mirror and
                 * original source element if present
                 * @param {HTMLElement} container
                 * @return {HTMLElement[]}
                 */
                getSortableElementsForContainer(container) {
                  const allSortableElements = container.querySelectorAll(this.options.draggable);
                  return [...allSortableElements].filter((childElement) => {
                    return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
                  });
                }
                /**
                 * Drag start handler
                 * @private
                 * @param {DragStartEvent} event - Drag start event
                 */
                [onDragStart](event) {
                  this.startContainer = event.source.parentNode;
                  this.startIndex = this.index(event.source);
                  const sortableStartEvent = new _SortableEvent.SortableStartEvent({
                    dragEvent: event,
                    startIndex: this.startIndex,
                    startContainer: this.startContainer
                  });
                  this.trigger(sortableStartEvent);
                  if (sortableStartEvent.canceled()) {
                    event.cancel();
                  }
                }
                /**
                 * Drag over container handler
                 * @private
                 * @param {DragOverContainerEvent} event - Drag over container event
                 */
                [onDragOverContainer](event) {
                  if (event.canceled()) {
                    return;
                  }
                  const { source, over, overContainer } = event;
                  const oldIndex = this.index(source);
                  const sortableSortEvent = new _SortableEvent.SortableSortEvent({
                    dragEvent: event,
                    currentIndex: oldIndex,
                    source,
                    over
                  });
                  this.trigger(sortableSortEvent);
                  if (sortableSortEvent.canceled()) {
                    return;
                  }
                  const children = this.getSortableElementsForContainer(overContainer);
                  const moves = move({ source, over, overContainer, children });
                  if (!moves) {
                    return;
                  }
                  const { oldContainer, newContainer } = moves;
                  const newIndex = this.index(event.source);
                  const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                    dragEvent: event,
                    oldIndex,
                    newIndex,
                    oldContainer,
                    newContainer
                  });
                  this.trigger(sortableSortedEvent);
                }
                /**
                 * Drag over handler
                 * @private
                 * @param {DragOverEvent} event - Drag over event
                 */
                [onDragOver](event) {
                  if (event.over === event.originalSource || event.over === event.source) {
                    return;
                  }
                  const { source, over, overContainer } = event;
                  const oldIndex = this.index(source);
                  const sortableSortEvent = new _SortableEvent.SortableSortEvent({
                    dragEvent: event,
                    currentIndex: oldIndex,
                    source,
                    over
                  });
                  this.trigger(sortableSortEvent);
                  if (sortableSortEvent.canceled()) {
                    return;
                  }
                  const children = this.getDraggableElementsForContainer(overContainer);
                  const moves = move({ source, over, overContainer, children });
                  if (!moves) {
                    return;
                  }
                  const { oldContainer, newContainer } = moves;
                  const newIndex = this.index(source);
                  const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                    dragEvent: event,
                    oldIndex,
                    newIndex,
                    oldContainer,
                    newContainer
                  });
                  this.trigger(sortableSortedEvent);
                }
                /**
                 * Drag stop handler
                 * @private
                 * @param {DragStopEvent} event - Drag stop event
                 */
                [onDragStop](event) {
                  const sortableStopEvent = new _SortableEvent.SortableStopEvent({
                    dragEvent: event,
                    oldIndex: this.startIndex,
                    newIndex: this.index(event.source),
                    oldContainer: this.startContainer,
                    newContainer: event.source.parentNode
                  });
                  this.trigger(sortableStopEvent);
                  this.startIndex = null;
                  this.startContainer = null;
                }
              }
              exports2.default = Sortable2;
              function index(element) {
                return Array.prototype.indexOf.call(element.parentNode.children, element);
              }
              function move({ source, over, overContainer, children }) {
                const emptyOverContainer = !children.length;
                const differentContainer = source.parentNode !== overContainer;
                const sameContainer = over && source.parentNode === over.parentNode;
                if (emptyOverContainer) {
                  return moveInsideEmptyContainer(source, overContainer);
                } else if (sameContainer) {
                  return moveWithinContainer(source, over);
                } else if (differentContainer) {
                  return moveOutsideContainer(source, over, overContainer);
                } else {
                  return null;
                }
              }
              function moveInsideEmptyContainer(source, overContainer) {
                const oldContainer = source.parentNode;
                overContainer.appendChild(source);
                return { oldContainer, newContainer: overContainer };
              }
              function moveWithinContainer(source, over) {
                const oldIndex = index(source);
                const newIndex = index(over);
                if (oldIndex < newIndex) {
                  source.parentNode.insertBefore(source, over.nextElementSibling);
                } else {
                  source.parentNode.insertBefore(source, over);
                }
                return { oldContainer: source.parentNode, newContainer: source.parentNode };
              }
              function moveOutsideContainer(source, over, overContainer) {
                const oldContainer = source.parentNode;
                if (over) {
                  over.parentNode.insertBefore(source, over);
                } else {
                  overContainer.appendChild(source);
                }
                return { oldContainer, newContainer: source.parentNode };
              }
            },
            /* 46 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              const canceled = Symbol("canceled");
              class AbstractEvent {
                /**
                 * AbstractEvent constructor.
                 * @constructs AbstractEvent
                 * @param {object} data - Event data
                 */
                /**
                 * Event type
                 * @static
                 * @abstract
                 * @property type
                 * @type {String}
                 */
                constructor(data) {
                  this[canceled] = false;
                  this.data = data;
                }
                /**
                 * Read-only type
                 * @abstract
                 * @return {String}
                 */
                /**
                 * Event cancelable
                 * @static
                 * @abstract
                 * @property cancelable
                 * @type {Boolean}
                 */
                get type() {
                  return this.constructor.type;
                }
                /**
                 * Read-only cancelable
                 * @abstract
                 * @return {Boolean}
                 */
                get cancelable() {
                  return this.constructor.cancelable;
                }
                /**
                 * Cancels the event instance
                 * @abstract
                 */
                cancel() {
                  this[canceled] = true;
                }
                /**
                 * Check if event has been canceled
                 * @abstract
                 * @return {Boolean}
                 */
                canceled() {
                  return Boolean(this[canceled]);
                }
                /**
                 * Returns new event instance with existing event data.
                 * This method allows for overriding of event data.
                 * @param {Object} data
                 * @return {AbstractEvent}
                 */
                clone(data) {
                  return new this.constructor(_extends({}, this.data, data));
                }
              }
              exports2.default = AbstractEvent;
              AbstractEvent.type = "event";
              AbstractEvent.cancelable = false;
            },
            /* 47 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SortableStopEvent = exports2.SortableSortedEvent = exports2.SortableSortEvent = exports2.SortableStartEvent = exports2.SortableEvent = void 0;
              var _AbstractEvent = __webpack_require__(3);
              var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              class SortableEvent extends _AbstractEvent2.default {
                /**
                 * Original drag event that triggered this sortable event
                 * @property dragEvent
                 * @type {DragEvent}
                 * @readonly
                 */
                get dragEvent() {
                  return this.data.dragEvent;
                }
              }
              exports2.SortableEvent = SortableEvent;
              SortableEvent.type = "sortable";
              class SortableStartEvent extends SortableEvent {
                /**
                 * Start index of source on sortable start
                 * @property startIndex
                 * @type {Number}
                 * @readonly
                 */
                get startIndex() {
                  return this.data.startIndex;
                }
                /**
                 * Start container on sortable start
                 * @property startContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get startContainer() {
                  return this.data.startContainer;
                }
              }
              exports2.SortableStartEvent = SortableStartEvent;
              SortableStartEvent.type = "sortable:start";
              SortableStartEvent.cancelable = true;
              class SortableSortEvent extends SortableEvent {
                /**
                 * Index of current draggable element
                 * @property currentIndex
                 * @type {Number}
                 * @readonly
                 */
                get currentIndex() {
                  return this.data.currentIndex;
                }
                /**
                 * Draggable element you are hovering over
                 * @property over
                 * @type {HTMLElement}
                 * @readonly
                 */
                get over() {
                  return this.data.over;
                }
                /**
                 * Draggable container element you are hovering over
                 * @property overContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get overContainer() {
                  return this.data.dragEvent.overContainer;
                }
              }
              exports2.SortableSortEvent = SortableSortEvent;
              SortableSortEvent.type = "sortable:sort";
              SortableSortEvent.cancelable = true;
              class SortableSortedEvent extends SortableEvent {
                /**
                 * Index of last sorted event
                 * @property oldIndex
                 * @type {Number}
                 * @readonly
                 */
                get oldIndex() {
                  return this.data.oldIndex;
                }
                /**
                 * New index of this sorted event
                 * @property newIndex
                 * @type {Number}
                 * @readonly
                 */
                get newIndex() {
                  return this.data.newIndex;
                }
                /**
                 * Old container of draggable element
                 * @property oldContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get oldContainer() {
                  return this.data.oldContainer;
                }
                /**
                 * New container of draggable element
                 * @property newContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get newContainer() {
                  return this.data.newContainer;
                }
              }
              exports2.SortableSortedEvent = SortableSortedEvent;
              SortableSortedEvent.type = "sortable:sorted";
              class SortableStopEvent extends SortableEvent {
                /**
                 * Original index on sortable start
                 * @property oldIndex
                 * @type {Number}
                 * @readonly
                 */
                get oldIndex() {
                  return this.data.oldIndex;
                }
                /**
                 * New index of draggable element
                 * @property newIndex
                 * @type {Number}
                 * @readonly
                 */
                get newIndex() {
                  return this.data.newIndex;
                }
                /**
                 * Original container of draggable element
                 * @property oldContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get oldContainer() {
                  return this.data.oldContainer;
                }
                /**
                 * New container of draggable element
                 * @property newContainer
                 * @type {HTMLElement}
                 * @readonly
                 */
                get newContainer() {
                  return this.data.newContainer;
                }
              }
              exports2.SortableStopEvent = SortableStopEvent;
              SortableStopEvent.type = "sortable:stop";
            },
            /* 48 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _SortableEvent = __webpack_require__(9);
              Object.keys(_SortableEvent).forEach(function(key) {
                if (key === "default" || key === "__esModule")
                  return;
                Object.defineProperty(exports2, key, {
                  enumerable: true,
                  get: function() {
                    return _SortableEvent[key];
                  }
                });
              });
              var _Sortable = __webpack_require__(45);
              var _Sortable2 = _interopRequireDefault(_Sortable);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = _Sortable2.default;
            }
            /******/
          ])
        );
      });
    }
  });

  // index.js
  var import_sortable = __toESM(require_sortable());

  // plucked-classics.json
  var plucked_classics_default = [{ title: "Pride and Prejudice", author: "Austen, Jane", year: 1998, url: "https://www.gutenberg.org/ebooks/1342", characters: 586794, languages: ["en"], subjects: ["Sisters -- Fiction", "Courtship -- Fiction", "Social classes -- Fiction", "England -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 36576, rank: 1 }, { title: "The Yellow Wallpaper", author: "Gilman, Charlotte Perkins", year: 1999, url: "https://www.gutenberg.org/ebooks/1952", characters: 26769, languages: ["en"], subjects: ["Mentally ill women -- Fiction", "Feminist fiction", "Psychological fiction", "Married women -- Psychology -- Fiction", "Sex role -- Fiction"], downloads: 26363, rank: 2 }, { title: "Alice's Adventures in Wonderland", author: "Carroll, Lewis", year: 1994, url: "https://www.gutenberg.org/ebooks/11", characters: 122719, languages: ["en"], subjects: ["Fantasy"], downloads: 18882, rank: 3 }, { title: "Frankenstein; Or, The Modern Prometheus", author: "Shelley, Mary Wollstonecraft", year: 2008, url: "https://www.gutenberg.org/ebooks/84", characters: 357604, languages: ["en"], subjects: ["Monsters -- Fiction", "Frankenstein's monster (Fictitious character) -- Fiction", "Gothic fiction (Literary genre)", "Science fiction", "Frankenstein, Victor (Fictitious character) -- Fiction", "Scientists -- Fiction", "Horror tales"], downloads: 17128, rank: 4 }, { title: "Metamorphosis", author: "Kafka, Franz", year: 2005, url: "https://www.gutenberg.org/ebooks/5200", characters: 100372, languages: ["en"], subjects: ["Psychological fiction", "Metamorphosis -- Fiction"], downloads: 15683, rank: 5 }, { title: "Adventures of Huckleberry Finn", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/76", characters: 485099, languages: ["en"], subjects: ["Male friendship -- Fiction", "Humorous stories", "Missouri -- Fiction", "Race relations -- Fiction", "Bildungsromans", "Finn, Huckleberry (Fictitious character) -- Fiction", "Fugitive slaves -- Fiction", "Mississippi River -- Fiction", "Adventure stories", "Runaway children -- Fiction", "Boys -- Fiction"], downloads: 15347, rank: 6 }, { title: "The Importance of Being Earnest: A Trivial Comedy for Serious People", author: "Wilde, Oscar", year: 2006, url: "https://www.gutenberg.org/ebooks/844", characters: 101906, languages: ["en"], subjects: ["Identity (Psychology) -- Drama", "Comedies", "England -- Drama", "Foundlings -- Drama"], downloads: 13638, rank: 7 }, { title: "The Adventures of Tom Sawyer", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/74", characters: 338075, languages: ["en"], subjects: ["Male friendship -- Fiction", "Humorous stories", "Missouri -- Fiction", "Child witnesses -- Fiction", "Bildungsromans", "Mississippi River Valley -- Fiction", "Adventure stories", "Runaway children -- Fiction", "Boys -- Fiction", "Sawyer, Tom (Fictitious character) -- Fiction"], downloads: 13237, rank: 8 }, { title: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Douglass, Frederick", year: 2006, url: "https://www.gutenberg.org/ebooks/23", characters: 190493, languages: ["en"], subjects: ["Slaves -- United States -- Biography", "Douglass, Frederick, 1818-1895", "African American abolitionists -- Biography", "Abolitionists -- United States -- Biography"], downloads: 12794, rank: 9 }, { title: "A Doll's House : a play", author: "Ibsen, Henrik", year: 2001, url: "https://www.gutenberg.org/ebooks/2542", characters: 121943, languages: ["en"], subjects: ["Wives -- Drama", "Man-woman relationships -- Drama", "Marriage -- Drama", "Norwegian drama -- Translations into English"], downloads: 11625, rank: 10 }, { title: "Moby Dick; Or, The Whale", author: "Melville, Herman", year: 2001, url: "https://www.gutenberg.org/ebooks/2701", characters: 1043045, languages: ["en"], subjects: ["Ship captains -- Fiction", "Whaling ships -- Fiction", "Psychological fiction", "Whaling -- Fiction", "Whales -- Fiction", "Ahab, Captain (Fictitious character) -- Fiction", "Sea stories", "Adventure stories", "Mentally ill -- Fiction"], downloads: 11270, rank: 11 }, { title: "The Adventures of Sherlock Holmes", author: "Doyle, Arthur Conan", year: 1892, url: "https://www.gutenberg.org/ebooks/1661", characters: 480294, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories, English", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 11125, rank: 12 }, { title: "Great Expectations", author: "Dickens, Charles", year: 1998, url: "https://www.gutenberg.org/ebooks/1400", characters: 845501, languages: ["en"], subjects: ["Revenge -- Fiction", "Ex-convicts -- Fiction", "Orphans -- Fiction", "Bildungsromans", "England -- Fiction", "Man-woman relationships -- Fiction", "Benefactors -- Fiction", "Young men -- Fiction"], downloads: 11068, rank: 13 }, { title: "Ulysses", author: "Joyce, James", year: 2003, url: "https://www.gutenberg.org/ebooks/4300", characters: 1311231, languages: ["en"], subjects: ["Male friendship -- Fiction", "City and town life -- Fiction", "Psychological fiction", "Alienation (Social psychology) -- Fiction", "Married people -- Fiction", "Jewish men -- Fiction", "Artists -- Fiction", "Epic literature", "Domestic fiction", "Dublin (Ireland) -- Fiction"], downloads: 10568, rank: 14 }, { title: "A Tale of Two Cities", author: "Dickens, Charles", year: 1994, url: "https://www.gutenberg.org/ebooks/98", characters: 649070, languages: ["en"], subjects: ["War stories", "France -- History -- Revolution, 1789-1799 -- Fiction", "Paris (France) -- History -- 1789-1799 -- Fiction", "French -- England -- London -- Fiction", "Executions and executioners -- Fiction", "London (England) -- History -- 18th century -- Fiction", "British -- France -- Paris -- Fiction", "Historical fiction", "Lookalikes -- Fiction"], downloads: 10312, rank: 15 }, { title: "A Modest Proposal: For preventing the children of poor people in Ireland, from being a burden on their parents or country, and for making them beneficial to the publick", author: "Swift, Jonathan", year: 1997, url: "https://www.gutenberg.org/ebooks/1080", characters: 16656, languages: ["en"], subjects: ["Ireland -- Politics and government -- 18th century -- Humor", "Religious satire, English", "Political satire, English"], downloads: 10014, rank: 16 }, { title: "Dracula", author: "Stoker, Bram", year: 2013, url: "https://www.gutenberg.org/ebooks/345", characters: 708335, languages: ["en"], subjects: ["Dracula, Count (Fictitious character) -- Fiction", "Epistolary fiction", "Vampires -- Fiction", "Gothic fiction (Literary genre)", "Transylvania (Romania) -- Fiction", "Whitby (England) -- Fiction", "Horror tales"], downloads: 9852, rank: 17 }, { title: "The Prince", author: "Machiavelli, Niccolo", year: 2006, url: "https://www.gutenberg.org/ebooks/1232", characters: 239378, languages: ["en"], subjects: ["Political ethics -- Early works to 1800", "Political science -- Philosophy -- Early works to 1800", "State, The -- Early works to 1800"], downloads: 9690, rank: 18 }, { title: "The Picture of Dorian Gray", author: "Wilde, Oscar", year: 2008, url: "https://www.gutenberg.org/ebooks/174", characters: 365606, languages: ["en"], subjects: ["London (England) -- History -- 1800-1950 -- Fiction", "Conduct of life -- Fiction", "Paranormal fiction", "Portraits -- Fiction", "Appearance (Philosophy) -- Fiction", "Supernatural -- Fiction", "Great Britain -- History -- Victoria, 1837-1901 -- Fiction", "Didactic fiction"], downloads: 9681, rank: 19 }, { title: "War and Peace", author: "Tolstoy, Leo, graf", year: 1870, url: "https://www.gutenberg.org/ebooks/2600", characters: 2759940, languages: ["en"], subjects: ["War stories", "Napoleonic Wars, 1800-1815 -- Campaigns -- Russia -- Fiction", "Aristocracy (Social class) -- Russia -- Fiction", "Historical fiction", "Russia -- History -- Alexander I, 1801-1825 -- Fiction"], downloads: 9580, rank: 20 }, { title: "Grimms' Fairy Tales", author: "Grimm, Wilhelm", year: 2001, url: "https://www.gutenberg.org/ebooks/2591", characters: 435880, languages: ["en"], subjects: ["Fairy tales -- Germany"], downloads: 9016, rank: 21 }, { title: "The Kama Sutra of Vatsyayana: Translated From the Sanscrit in Seven Parts With Preface, Introduction and Concluding Remarks", author: "Vatsyayana", year: 2009, url: "https://www.gutenberg.org/ebooks/27827", characters: 283286, languages: ["en"], subjects: ["Love", "Sex"], downloads: 8559, rank: 22 }, { title: "Emma", author: "Austen, Jane", year: 1994, url: "https://www.gutenberg.org/ebooks/158", characters: 755056, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Humorous stories", "Bildungsromans", "England -- Fiction", "Mate selection -- Fiction", "Female friendship -- Fiction", "Young women -- Fiction", "Love stories"], downloads: 8513, rank: 23 }, { title: "Beowulf: An Anglo-Saxon Epic Poem", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/16328", characters: 211970, languages: ["en"], subjects: ["Dragons -- Poetry", "Epic poetry, English (Old)", "Monsters -- Poetry"], downloads: 8199, rank: 24 }, { title: "Les Mis\xE9rables", author: "Hugo, Victor", year: 2008, url: "https://www.gutenberg.org/ebooks/135", characters: 2783024, languages: ["en"], subjects: ["Paris (France) -- Fiction", "Ex-convicts -- Fiction", "Epic literature", "Orphans -- Fiction", "Historical fiction"], downloads: 7900, rank: 25 }, { title: "The Romance of Lust: A Classic Victorian erotic novel", author: "Anonymous", year: 2009, url: "https://www.gutenberg.org/ebooks/30254", characters: 876698, languages: ["en"], subjects: ["Erotic stories"], downloads: 7458, rank: 26 }, { title: "Jane Eyre: An Autobiography", author: "Bronte, Charlotte", year: 2007, url: "https://www.gutenberg.org/ebooks/1260", characters: 876153, languages: ["en"], subjects: ["Country homes -- Fiction", "Fathers and daughters -- Fiction", "Charity-schools -- Fiction", "Orphans -- Fiction", "Bildungsromans", "England -- Fiction", "Married people -- Fiction", "Mentally ill women -- Fiction", "Governesses -- Fiction", "Young women -- Fiction", "Love stories"], downloads: 7449, rank: 27 }, { title: "Leaves of Grass", author: "Whitman, Walt", year: 1998, url: "https://www.gutenberg.org/ebooks/1322", characters: 607831, languages: ["en"], subjects: ["American poetry -- 19th century"], downloads: 6899, rank: 28 }, { title: "Dubliners", author: "Joyce, James", year: 2001, url: "https://www.gutenberg.org/ebooks/2814", characters: 315667, languages: ["en"], subjects: ["Short stories", "Dublin (Ireland) -- Fiction"], downloads: 6879, rank: 29 }, { title: "Sense and Sensibility", author: "Austen, Jane", year: 2008, url: "https://www.gutenberg.org/ebooks/161", characters: 574844, languages: ["en"], subjects: ["Gentry -- England -- Fiction", "Sisters -- Fiction", "Social classes -- Fiction", "England -- Social life and customs -- 19th century -- Fiction", "England -- Fiction", "Mate selection -- Fiction", "Regency fiction", "Inheritance and succession -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 6503, rank: 30 }, { title: "Leviathan", author: "Hobbes, Thomas", year: 2002, url: "https://www.gutenberg.org/ebooks/3207", characters: 1038638, languages: ["en"], subjects: ["Political science -- Early works to 1800", "State, The -- Early works to 1800"], downloads: 6411, rank: 31 }, { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Stevenson, Robert Louis", year: 1992, url: "https://www.gutenberg.org/ebooks/42", characters: 119352, languages: ["en"], subjects: ["Self-experimentation in medicine -- Fiction", "Psychological fiction", "Multiple personality -- Fiction", "Physicians -- Fiction", "London (England) -- Fiction", "Science fiction", "Horror tales"], downloads: 6410, rank: 32 }, { title: "Treasure Island", author: "Stevenson, Robert Louis", year: 2006, url: "https://www.gutenberg.org/ebooks/120", characters: 307677, languages: ["en"], subjects: ["Treasure Island (Imaginary place) -- Fiction", "Pirates -- Fiction", "Treasure troves -- Fiction", "Sea stories"], downloads: 6396, rank: 33 }, { title: "Wuthering Heights", author: "Bronte, Emily", year: 2007, url: "https://www.gutenberg.org/ebooks/768", characters: 552364, languages: ["en"], subjects: ["Revenge -- Fiction", "Psychological fiction", "Foundlings -- Fiction", "Heathcliff (Fictitious character : Bront\xEB) -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Rural families -- Fiction", "Domestic fiction", "Rejection (Psychology) -- Fiction", "Yorkshire (England) -- Fiction", "Love stories"], downloads: 6237, rank: 34 }, { title: "Heart of Darkness", author: "Conrad, Joseph", year: 1995, url: "https://www.gutenberg.org/ebooks/219", characters: 178939, languages: ["en"], subjects: ["Africa -- Fiction", "Psychological fiction", "Imperialism -- Fiction", "Trading posts -- Fiction", "Europeans -- Africa -- Fiction", "Degeneration -- fiction"], downloads: 5875, rank: 35 }, { title: "The Count of Monte Cristo, Illustrated", author: "Dumas, Alexandre", year: 1998, url: "https://www.gutenberg.org/ebooks/1184", characters: 2248795, languages: ["en"], subjects: ["Adventure stories", "Revenge -- Fiction", "France -- History -- 19th century -- Fiction", "Pirates -- Fiction", "Historical fiction", "Prisoners -- Fiction", "Dant\xE8s, Edmond (Fictitious character) -- Fiction"], downloads: 5861, rank: 36 }, { title: "Gulliver's Travels into Several Remote Nations of the World", author: "Swift, Jonathan", year: 2009, url: "https://www.gutenberg.org/ebooks/829", characters: 491558, languages: ["en"], subjects: ["Fantasy fiction", "Satire", "Voyages, Imaginary -- Early works to 1800", "Travelers -- Fiction", "Gulliver, Lemuel (Fictitious character) -- Fiction"], downloads: 5752, rank: 37 }, { title: "The Awakening, and Selected Short Stories", author: "Chopin, Kate", year: 2006, url: "https://www.gutenberg.org/ebooks/160", characters: 308607, languages: ["en"], subjects: ["Louisiana -- Social life and customs -- Fiction", "Women -- Louisiana -- New Orleans -- Social conditions -- Fiction", "New Orleans (La.) -- Fiction", "Self-actualization (Psychology) -- Fiction", "Adultery -- Fiction"], downloads: 5702, rank: 38 }, { title: "Peter Pan", author: "Barrie, J. M. (James Matthew)", year: 1991, url: "https://www.gutenberg.org/ebooks/16", characters: 220012, languages: ["en"], subjects: ["Peter Pan (Fictitious character) -- Fiction", "Fantasy", "Fairies -- Juvenile fiction", "Never-Never Land (Imaginary place) -- Fiction", "Pirates -- Juvenile fiction"], downloads: 5657, rank: 39 }, { title: "Siddhartha", author: "Hesse, Hermann", year: 2008, url: "https://www.gutenberg.org/ebooks/2500", characters: 184183, languages: ["en"], subjects: ["Buddhist philosophy -- Fiction", "Religious fiction", "Buddhism -- Fiction", "India -- Fiction", "Gautama Buddha -- Fiction"], downloads: 5483, rank: 40 }, { title: "The Republic", author: "Plato", year: 1998, url: "https://www.gutenberg.org/ebooks/1497", characters: 1022560, languages: ["en"], subjects: ["Utopias -- Early works to 1800", "Justice -- Early works to 1800", "Political science -- Early works to 1800", "Classical literature"], downloads: 5360, rank: 41 }, { title: "Autobiography of Benjamin Franklin", author: "Franklin, Benjamin", year: 2006, url: "https://www.gutenberg.org/ebooks/20203", characters: 371844, languages: ["en"], subjects: ["Statesmen -- United States -- Biography", "Franklin, Benjamin, 1706-1790"], downloads: 5169, rank: 42 }, { title: "The Life and Adventures of Robinson Crusoe", author: "Defoe, Daniel", year: 2010, url: "https://www.gutenberg.org/ebooks/521", characters: 519352, languages: ["en"], subjects: ["Atlantic Ocean -- Fiction", "Crusoe, Robinson (Fictitious character) -- Fiction", "Adventure stories", "Shipwreck survival -- Fiction", "Castaways -- Fiction", "Islands -- Fiction"], downloads: 5140, rank: 43 }, { title: "Songs of Innocence, and Songs of Experience", author: "Blake, William", year: 2008, url: "https://www.gutenberg.org/ebooks/1934", characters: 27028, languages: ["en"], subjects: ["Pastoral poetry", "English poetry -- 18th century"], downloads: 5115, rank: 44 }, { title: "Essays of Michel de Montaigne \u2014 Complete", author: "Montaigne, Michel de", year: 2006, url: "https://www.gutenberg.org/ebooks/3600", characters: 2518187, languages: ["en"], subjects: ["French essays -- Translations into English"], downloads: 5056, rank: 45 }, { title: "The Divine Comedy by Dante, Illustrated", author: "Dante Alighieri", year: 2005, url: "https://www.gutenberg.org/ebooks/8800", characters: 525296, languages: ["en"], subjects: ["Epic poetry, Italian -- Translations into English", "Italian poetry -- To 1400 -- Translations into English"], downloads: 4973, rank: 46 }, { title: "A Christmas Carol in Prose; Being a Ghost Story of Christmas", author: "Dickens, Charles", year: 2004, url: "https://www.gutenberg.org/ebooks/46", characters: 136753, languages: ["en"], subjects: ["Ghost stories", "Scrooge, Ebenezer (Fictitious character) -- Fiction", "Poor families -- Fiction", "Christmas stories", "London (England) -- Fiction", "Misers -- Fiction", "Sick children -- Fiction"], downloads: 4741, rank: 47 }, { title: "A Study in Scarlet", author: "Doyle, Arthur Conan", year: 1995, url: "https://www.gutenberg.org/ebooks/244", characters: 207047, languages: ["en"], subjects: ["England -- Fiction", "Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction", "Private investigators -- England -- Fiction"], downloads: 4703, rank: 48 }, { title: "The Jungle Book", author: "Kipling, Rudyard", year: 2006, url: "https://www.gutenberg.org/ebooks/236", characters: 230331, languages: ["en"], subjects: ["Jungles -- Fiction", "Jungle animals -- Fiction", "Feral children -- Fiction", "Mowgli (Fictitious character) -- Fiction", "Adventure stories, English", "Animals -- Fiction", "Short stories", "India -- Fiction"], downloads: 4526, rank: 49 }, { title: "Crime and Punishment", author: "Dostoyevsky, Fyodor", year: 2006, url: "https://www.gutenberg.org/ebooks/2554", characters: 971506, languages: ["en"], subjects: ["Saint Petersburg (Russia) -- Fiction", "Russia -- Fiction", "Detective and mystery stories", "Psychological fiction"], downloads: 4483, rank: 50 }, { title: "The Iliad", author: "Homer", year: 2006, url: "https://www.gutenberg.org/ebooks/6130", characters: 957200, languages: ["en"], subjects: ["Classical literature", "Epic poetry, Greek -- Translations into English", "Achilles (Mythological character) -- Poetry", "Trojan War -- Poetry"], downloads: 4443, rank: 51 }, { title: "Beyond Good and Evil", author: "Nietzsche, Friedrich Wilhelm", year: 2003, url: "https://www.gutenberg.org/ebooks/4363", characters: 330833, languages: ["en"], subjects: ["Philosophy, German", "Ethics"], downloads: 4347, rank: 52 }, { title: "Candide", author: "Voltaire", year: 2006, url: "https://www.gutenberg.org/ebooks/19942", characters: 174417, languages: ["en"], subjects: ["Satire", "Optimism -- Fiction"], downloads: 4339, rank: 53 }, { title: "Steam, Its Generation and Use", author: "Babcock & Wilcox Company", year: 2007, url: "https://www.gutenberg.org/ebooks/22657", characters: 760404, languages: ["en"], subjects: ["Steam-boilers, Water-tube"], downloads: 4297, rank: 54 }, { title: "Pygmalion", author: "Shaw, Bernard", year: 2003, url: "https://www.gutenberg.org/ebooks/3825", characters: 162315, languages: ["en"], subjects: ["Linguistics teachers -- Drama", "London (England) -- Drama", "Flower vending -- Drama", "Social classes -- Drama", "Comedies", "Speech and social status -- Drama"], downloads: 4287, rank: 55 }, { title: "The Complete Works of William Shakespeare", author: "Shakespeare, William", year: 1994, url: "https://www.gutenberg.org/ebooks/100", characters: 4183870, languages: ["en"], subjects: ["English drama -- Early modern and Elizabethan, 1500-1600"], downloads: 4166, rank: 56 }, { title: "Oliver Twist", author: "Dickens, Charles", year: 1996, url: "https://www.gutenberg.org/ebooks/730", characters: 768704, languages: ["en"], subjects: ["Criminals -- Fiction", "Orphans -- Fiction", "Bildungsromans", "London (England) -- Fiction", "Kidnapping victims -- Fiction", "Boys -- Fiction"], downloads: 4066, rank: 57 }, { title: "Heart of Darkness", author: "Conrad, Joseph", year: 2006, url: "https://www.gutenberg.org/ebooks/526", characters: 179060, languages: ["en"], subjects: ["Africa -- Fiction", "Psychological fiction", "Imperialism -- Fiction", "Trading posts -- Fiction", "Europeans -- Africa -- Fiction", "Degeneration -- fiction"], downloads: 3957, rank: 58 }, { title: "English Literature: Its History and Its Significance for the Life of the English-Speaking World", author: "Long, William J. (William Joseph)", year: 2004, url: "https://www.gutenberg.org/ebooks/10609", characters: 1095489, languages: ["en"], subjects: ["English literature -- History and criticism"], downloads: 3933, rank: 59 }, { title: "An Occurrence at Owl Creek Bridge", author: "Bierce, Ambrose", year: 2008, url: "https://www.gutenberg.org/ebooks/375", characters: 18193, languages: ["en"], subjects: ["Short stories", "United States -- History -- Civil War, 1861-1865 -- Fiction", "Prisoners -- Fiction"], downloads: 3850, rank: 60 }, { title: "Second Treatise of Government", author: "Locke, John", year: 2005, url: "https://www.gutenberg.org/ebooks/7370", characters: 266846, languages: ["en"], subjects: ["Toleration -- Early works to 1800", "Liberty -- Early works to 1800", "Political science -- Early works to 1800"], downloads: 3842, rank: 61 }, { title: "The King James Version of the Bible", author: "Unknown", year: 2011, url: "https://www.gutenberg.org/ebooks/10", characters: 3684178, languages: ["en"], subjects: ["Bible"], downloads: 3776, rank: 62 }, { title: "My Secret Life, Volumes I. to III.: 1888 Edition", author: "Anonymous", year: 1888, url: "https://www.gutenberg.org/ebooks/30360", characters: 1124639, languages: ["en"], subjects: ["Pornography", "Sex addicts -- Biography", "Erotic literature"], downloads: 3765, rank: 63 }, { title: "The Wonderful Wizard of Oz", author: "Baum, L. Frank (Lyman Frank)", year: 2008, url: "https://www.gutenberg.org/ebooks/55", characters: 175909, languages: ["en"], subjects: ["Fantasy", "Oz (Imaginary place) -- Fiction"], downloads: 3704, rank: 64 }, { title: "On Liberty", author: "Mill, John Stuart", year: 2011, url: "https://www.gutenberg.org/ebooks/34901", characters: 263422, languages: ["en"], subjects: ["Liberty"], downloads: 3683, rank: 65 }, { title: "The Hound of the Baskervilles", author: "Doyle, Arthur Conan", year: 2001, url: "https://www.gutenberg.org/ebooks/2852", characters: 270731, languages: ["en"], subjects: ["Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction", "Private investigators -- England -- Fiction", "Blessing and cursing -- Fiction", "Dogs -- Fiction", "Dartmoor (England) -- Fiction"], downloads: 3677, rank: 66 }, { title: "Three Men in a Boat", author: "Jerome, Jerome K. (Jerome Klapka)", year: 2010, url: "https://www.gutenberg.org/ebooks/308", characters: 306930, languages: ["en"], subjects: ["Male friendship -- Fiction", "Thames River (England) -- Fiction", "Boats and boating -- England -- Thames River -- Fiction", "Dogs -- Fiction", "Humorous stories, English", "Young men -- Travel -- England -- Thames River -- Fiction"], downloads: 3647, rank: 67 }, { title: "Through the Looking-Glass", author: "Carroll, Lewis", year: 1991, url: "https://www.gutenberg.org/ebooks/12", characters: 137377, languages: ["en"], subjects: ["Fantasy"], downloads: 3626, rank: 68 }, { title: "The Time Machine", author: "Wells, H. G. (Herbert George)", year: 2004, url: "https://www.gutenberg.org/ebooks/35", characters: 152740, languages: ["en"], subjects: ["Science fiction", "Dystopias -- Fiction", "Time travel -- Fiction"], downloads: 3599, rank: 69 }, { title: "The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African: Written By Himself", author: "Equiano, Olaudah", year: 2005, url: "https://www.gutenberg.org/ebooks/15399", characters: 377573, languages: ["en"], subjects: ["Slaves -- United States -- Biography", "Slaves -- Great Britain -- Biography", "Equiano, Olaudah, 1745-1797"], downloads: 3526, rank: 70 }, { title: "The Jungle", author: "Sinclair, Upton", year: 2006, url: "https://www.gutenberg.org/ebooks/140", characters: 686087, languages: ["en"], subjects: ["Immigrants -- Fiction", "Political fiction", "Meat industry and trade -- Fiction", "Lithuanian Americans -- Fiction", "Chicago (Ill.) -- Fiction", "Stockyards -- Fiction", "Working class -- Fiction"], downloads: 3522, rank: 71 }, { title: "Josefine Mutzenbacher: oder Die Geschichte einer Wienerischen Dirne von ihr selbst erz\xE4hlt", author: "Salten, Felix", year: 2010, url: "https://www.gutenberg.org/ebooks/31284", characters: 359174, languages: ["de"], subjects: ["Erotic stories, German"], downloads: 3506, rank: 72 }, { title: "Walden, and On The Duty Of Civil Disobedience", author: "Thoreau, Henry David", year: 1995, url: "https://www.gutenberg.org/ebooks/205", characters: 536586, languages: ["en"], subjects: ["Civil disobedience", "Solitude", "Thoreau, Henry David, 1817-1862 -- Homes and haunts -- Massachusetts -- Walden Woods", "Government, Resistance to", "Natural history -- Massachusetts -- Walden Woods", "Wilderness areas -- Massachusetts -- Walden Woods", "Authors, American -- 19th century -- Biography", "Walden Woods (Mass.) -- Social life and customs"], downloads: 3501, rank: 73 }, { title: "Hard Times", author: "Dickens, Charles", year: 2013, url: "https://www.gutenberg.org/ebooks/786", characters: 491593, languages: ["en"], subjects: ["England -- Fiction", "Political fiction", "Education -- Fiction", "Utilitarianism -- Fiction", "Social problems -- Fiction", "Domestic fiction"], downloads: 3494, rank: 74 }, { title: "The Brothers Karamazov", author: "Dostoyevsky, Fyodor", year: 2009, url: "https://www.gutenberg.org/ebooks/28054", characters: 1651301, languages: ["en"], subjects: ["Brothers -- Fiction", "Fathers and sons -- Fiction", "Didactic fiction", "Russia -- Social life and customs -- 1533-1917 -- Fiction"], downloads: 3478, rank: 75 }, { title: "Democracy in America \u2014 Volume 1", author: "Tocqueville, Alexis de", year: 2006, url: "https://www.gutenberg.org/ebooks/815", characters: 974148, languages: ["en"], subjects: ["United States -- Social conditions", "Democracy -- United States", "United States -- Politics and government"], downloads: 3455, rank: 76 }, { title: "Complete Original Short Stories of Guy De Maupassant", author: "Maupassant, Guy de", year: 2004, url: "https://www.gutenberg.org/ebooks/3090", characters: 2322316, languages: ["en"], subjects: ["Short stories, French -- Translations into English"], downloads: 3437, rank: 77 }, { title: "Practical Grammar and Composition", author: "Wood, Thomas", year: 2007, url: "https://www.gutenberg.org/ebooks/22577", characters: 326211, languages: ["en"], subjects: ["English language -- Composition and exercises", "English language -- Grammar -- Problems, exercises, etc."], downloads: 3434, rank: 78 }, { title: "David Copperfield", author: "Dickens, Charles", year: 1996, url: "https://www.gutenberg.org/ebooks/766", characters: 1647137, languages: ["en"], subjects: ["England -- Social life and customs -- 19th century -- Fiction", "Bildungsromans", "Orphans -- Fiction", "Child labor -- Fiction", "Autobiographical fiction", "England -- Fiction", "Young men -- Fiction", "Boys -- Fiction", "Stepfathers -- Fiction"], downloads: 3427, rank: 79 }, { title: "Narrative of the Captivity and Restoration of Mrs. Mary Rowlandson", author: "Rowlandson, Mary White", year: 1997, url: "https://www.gutenberg.org/ebooks/851", characters: 87391, languages: ["en"], subjects: ["Lancaster (Mass.) -- History -- Colonial period, ca. 1600-1775", "King Philip's War, 1675-1676", "Massachusetts -- Biography", "Indian captivities -- Massachusetts", "Rowlandson, Mary White, approximately 1635-1711"], downloads: 3389, rank: 80 }, { title: "Uncle Tom's Cabin", author: "Stowe, Harriet Beecher", year: 1995, url: "https://www.gutenberg.org/ebooks/203", characters: 861422, languages: ["en"], subjects: ["Plantation life -- Fiction", "Slavery -- Fiction", "Uncle Tom (Fictitious character) -- Fiction", "African Americans -- Fiction", "Political fiction", "Master and servant -- Fiction", "Fugitive slaves -- Fiction", "Southern States -- Fiction", "Slaves -- Fiction", "Didactic fiction"], downloads: 3336, rank: 81 }, { title: "How to Analyze People on Sight: Through the Science of Human Analysis: The Five Human Types", author: "Benedict, Ralph Paine", year: 2009, url: "https://www.gutenberg.org/ebooks/30601", characters: 305692, languages: ["en"], subjects: ["Characters and characteristics"], downloads: 3334, rank: 82 }, { title: "The Legend of Sleepy Hollow", author: "Irving, Washington", year: 1992, url: "https://www.gutenberg.org/ebooks/41", characters: 59630, languages: ["en"], subjects: ["Ghosts -- Fiction", "New York (State) -- History -- 1775-1865 -- Fiction"], downloads: 3287, rank: 83 }, { title: "Around the World in Eighty Days", author: "Verne, Jules", year: 2008, url: "https://www.gutenberg.org/ebooks/103", characters: 319415, languages: ["en"], subjects: ["Voyages around the world -- Fiction", "Adventure stories"], downloads: 3248, rank: 84 }, { title: "Anna Karenina", author: "Tolstoy, Leo, graf", year: 1998, url: "https://www.gutenberg.org/ebooks/1399", characters: 1687204, languages: ["en"], subjects: ["Russia -- Fiction", "Adultery -- Fiction", "Married women -- Fiction", "Didactic fiction", "Love stories"], downloads: 3208, rank: 85 }, { title: "The Mysterious Affair at Styles", author: "Christie, Agatha", year: 2008, url: "https://www.gutenberg.org/ebooks/863", characters: 278825, languages: ["en"], subjects: ["Belgians -- England -- Fiction", "Private investigators -- England -- Fiction", "Detective and mystery stories", "Poirot, Hercule (Fictitious character) -- Fiction"], downloads: 3192, rank: 86 }, { title: "The Call of the Wild", author: "London, Jack", year: 2008, url: "https://www.gutenberg.org/ebooks/215", characters: 149454, languages: ["en"], subjects: ["Pet theft -- Fiction", "Animal welfare -- Fiction", "Klondike River Valley (Yukon) -- Fiction", "Feral dogs -- Fiction", "Dogs -- Fiction", "Adventure stories", "Nature stories", "Sled dogs -- Fiction"], downloads: 3141, rank: 87 }, { title: "Anne of Green Gables", author: "Montgomery, L. M. (Lucy Maud)", year: 1992, url: "https://www.gutenberg.org/ebooks/45", characters: 476944, languages: ["en"], subjects: ["Friendship -- Fiction", "Country life -- Prince Edward Island -- Fiction", "Orphans -- Fiction", "Bildungsromans", "Prince Edward Island -- History -- 20th century -- Fiction", "Canada -- History -- 1867-1914 -- Fiction", "Shirley, Anne (Fictitious character) -- Fiction", "Girls -- Fiction", "Islands -- Fiction"], downloads: 3089, rank: 88 }, { title: "Persuasion", author: "Austen, Jane", year: 2008, url: "https://www.gutenberg.org/ebooks/105", characters: 396720, languages: ["en"], subjects: ["Ship captains -- Fiction", "First loves -- Fiction", "Regency fiction", "Rejection (Psychology) -- Fiction", "England -- Social life and customs -- 19th century -- Fiction", "Young women -- Fiction", "Psychological fiction", "Dysfunctional families -- Fiction", "Motherless families -- Fiction", "Love stories"], downloads: 3079, rank: 89 }, { title: "Don Quixote", author: "Cervantes Saavedra, Miguel de", year: 2004, url: "https://www.gutenberg.org/ebooks/996", characters: 1935500, languages: ["en"], subjects: ["Picaresque literature", "Spain -- Social life and customs -- 16th century -- Fiction", "Knights and knighthood -- Spain -- Fiction", "Romances"], downloads: 3043, rank: 90 }, { title: "Democracy and Education: An Introduction to the Philosophy of Education", author: "Dewey, John", year: 1997, url: "https://www.gutenberg.org/ebooks/852", characters: 718535, languages: ["en"], subjects: ["Education -- Social aspects", "Education -- Philosophy"], downloads: 3023, rank: 91 }, { title: "A Portrait of the Artist as a Young Man", author: "Joyce, James", year: 2003, url: "https://www.gutenberg.org/ebooks/4217", characters: 395910, languages: ["en"], subjects: ["Autobiographical fiction", "Artists -- Fiction", "Bildungsromans", "Dublin (Ireland) -- Fiction", "Young men -- Fiction"], downloads: 2979, rank: 92 }, { title: "The Tragical History of Doctor Faustus: From the Quarto of 1604", author: "Marlowe, Christopher", year: 1997, url: "https://www.gutenberg.org/ebooks/779", characters: 100446, languages: ["en"], subjects: ["Faust, -approximately 1540 -- Drama", "Tragedies", "Germany -- Drama", "Magicians -- Drama"], downloads: 2963, rank: 93 }, { title: "Ethan Frome", author: "Wharton, Edith", year: 2003, url: "https://www.gutenberg.org/ebooks/4517", characters: 160545, languages: ["en"], subjects: ["New England -- Fiction", "Accident victims -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Rural poor -- Fiction", "Married people -- Fiction", "Domestic fiction"], downloads: 2951, rank: 94 }, { title: "Paradise Lost", author: "Milton, John", year: 1991, url: "https://www.gutenberg.org/ebooks/20", characters: 395670, languages: ["en"], subjects: ["Eve (Biblical figure) -- Poetry", "Bible. Genesis -- History of Biblical events -- Poetry", "Fall of man -- Poetry", "Adam (Biblical figure) -- Poetry"], downloads: 2942, rank: 95 }, { title: "The Tragedy of Romeo and Juliet", author: "Shakespeare, William", year: 1997, url: "https://www.gutenberg.org/ebooks/1112", characters: 120950, languages: ["en"], subjects: ["Vendetta -- Drama", "Verona (Italy) -- Drama", "Conflict of generations -- Drama", "Juliet (Fictitious character) -- Drama", "Romeo (Fictitious character) -- Drama", "Youth -- Drama"], downloads: 2938, rank: 96 }, { title: "Utopia", author: "More, Thomas, Saint", year: 2005, url: "https://www.gutenberg.org/ebooks/2130", characters: 200527, languages: ["en"], subjects: ["Utopias -- Early works to 1800"], downloads: 2933, rank: 97 }, { title: "Myths and Legends of Ancient Greece and Rome", author: "Berens, E. M.", year: 2007, url: "https://www.gutenberg.org/ebooks/22381", characters: 552373, languages: ["en"], subjects: ["Mythology, Classical"], downloads: 2924, rank: 98 }, { title: "Forbidden Fruit: Luscious and exciting story and More forbidden fruit or; Master Percy's progress in and beyond the domestic circle", author: "Anonymous", year: 2009, url: "https://www.gutenberg.org/ebooks/28520", characters: 143755, languages: ["en"], subjects: ["Erotic stories"], downloads: 2905, rank: 99 }, { title: "Common Sense", author: "Paine, Thomas", year: 2008, url: "https://www.gutenberg.org/ebooks/147", characters: 107703, languages: ["en"], subjects: ["United States -- Politics and government -- 1775-1783", "Monarchy -- Early works to 1800", "Political science -- Early works to 1800"], downloads: 2884, rank: 100 }, { title: "Northanger Abbey", author: "Austen, Jane", year: 1994, url: "https://www.gutenberg.org/ebooks/121", characters: 370744, languages: ["en"], subjects: ["Gentry -- England -- Fiction", "Horror tales -- Appreciation -- Fiction", "Books and reading -- Fiction", "Satire", "Gothic fiction (Literary genre)", "England -- Social life and customs -- 19th century -- Fiction", "England -- Fiction", "Marriage -- Economic aspects -- Fiction", "Young women -- Fiction", "Love stories"], downloads: 2871, rank: 101 }, { title: "The Scarlet Letter", author: "Hawthorne, Nathaniel", year: 1992, url: "https://www.gutenberg.org/ebooks/33", characters: 418571, languages: ["en"], subjects: ["Boston (Mass.) -- History -- Colonial period, ca. 1600-1775 -- Fiction", "Revenge -- Fiction", "Married women -- Fiction", "Adultery -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Women immigrants -- Fiction", "Illegitimate children -- Fiction", "Historical fiction", "Psychological fiction", "Clergy -- Fiction", "Puritans -- Fiction"], downloads: 2861, rank: 102 }, { title: "The Communist Manifesto", author: "Engels, Friedrich", year: 2005, url: "https://www.gutenberg.org/ebooks/61", characters: 64006, languages: ["en"], subjects: ["Socialism", "Communism"], downloads: 2856, rank: 103 }, { title: "The Turn of the Screw", author: "James, Henry", year: 1995, url: "https://www.gutenberg.org/ebooks/209", characters: 194581, languages: ["en"], subjects: ["Governesses -- Fiction", "England -- Fiction", "Children -- Fiction", "Ghost stories", "Psychological fiction"], downloads: 2850, rank: 104 }, { title: "Lysistrata", author: "Aristophanes", year: 2008, url: "https://www.gutenberg.org/ebooks/7700", characters: 74555, languages: ["en"], subjects: ["Women and peace -- Drama", "Aristophanes -- Translations into English", "Lysistrata (Fictitious character) -- Drama", "Peace movements -- Drama", "Greece -- History -- Peloponnesian War, 431-404 B.C. -- Drama", "Greek drama (Comedy) -- Translations into English", "Comedies"], downloads: 2849, rank: 105 }, { title: "The Souls of Black Folk", author: "Du Bois, W. E. B. (William Edward Burghardt)", year: 2008, url: "https://www.gutenberg.org/ebooks/408", characters: 343713, languages: ["en"], subjects: ["African Americans"], downloads: 2793, rank: 106 }, { title: "Madame Bovary", author: "Flaubert, Gustave", year: 2006, url: "https://www.gutenberg.org/ebooks/2413", characters: 560219, languages: ["en"], subjects: ["Domestic fiction", "Married women -- Fiction", "Middle class -- Fiction", "Suicide victims -- Fiction", "Physicians' spouses -- Fiction", "France -- Fiction", "Adultery -- Fiction"], downloads: 2744, rank: 107 }, { title: "The Reign of Greed", author: "Rizal, Jose", year: 2005, url: "https://www.gutenberg.org/ebooks/10676", characters: 578558, languages: ["en"], subjects: ["Philippine fiction (Spanish) -- Translations into English", "Nationalists -- Philippines -- Fiction", "Philippines -- History -- Fiction"], downloads: 2741, rank: 108 }, { title: "Hedda Gabler", author: "Ibsen, Henrik", year: 2003, url: "https://www.gutenberg.org/ebooks/4093", characters: 157809, languages: ["en"], subjects: ["Norwegian drama -- Translations into English", "Man-woman relationships -- Drama", "Identity (Psychology) -- Drama", "Women -- Social conditions -- Drama"], downloads: 2713, rank: 109 }, { title: "The Return of Sherlock Holmes", author: "Doyle, Arthur Conan", year: 2007, url: "https://www.gutenberg.org/ebooks/108", characters: 519512, languages: ["en"], subjects: ["Detective and mystery stories, English", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 2669, rank: 110 }, { title: "Le Morte d'Arthur: Volume 1", author: "Malory, Thomas, Sir", year: 1998, url: "https://www.gutenberg.org/ebooks/1251", characters: 740589, languages: ["en"], subjects: ["Arthur, King -- Legends", "Arthurian romances"], downloads: 2638, rank: 111 }, { title: "The Works of Edgar Allan Poe \u2014 Volume 1", author: "Poe, Edgar Allan", year: 2008, url: "https://www.gutenberg.org/ebooks/2147", characters: 446218, languages: ["en"], subjects: ["Fantasy fiction", "American fiction -- 19th century", "Horror tales, American", "Poe, Edgar Allan, 1809-1849"], downloads: 2613, rank: 112 }, { title: "Don Juan", author: "Byron, George Gordon Byron, Baron", year: 2007, url: "https://www.gutenberg.org/ebooks/21700", characters: 610338, languages: ["en"], subjects: ["Don Juan (Legendary character) -- Poetry"], downloads: 2572, rank: 113 }, { title: "The War of the Worlds", author: "Wells, H. G. (Herbert George)", year: 1992, url: "https://www.gutenberg.org/ebooks/36", characters: 289027, languages: ["en"], subjects: ["War stories", "Mars (Planet) -- Fiction", "Science fiction", "Martians -- Fiction", "Space warfare -- Fiction", "Life on other planets -- Fiction", "Imaginary wars and battles -- Fiction"], downloads: 2546, rank: 114 }, { title: "Mansfield Park", author: "Austen, Jane", year: 1994, url: "https://www.gutenberg.org/ebooks/141", characters: 752380, languages: ["en"], subjects: ["Country homes -- Fiction", "Adoptees -- Fiction", "Children of the rich -- Fiction", "Uncles -- Fiction", "Cousins -- Fiction", "England -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 2537, rank: 115 }, { title: "Just So Stories", author: "Kipling, Rudyard", year: 2004, url: "https://www.gutenberg.org/ebooks/2781", characters: 134002, languages: ["en"], subjects: ["Animals -- Fiction", "Children's stories, English", "Short stories"], downloads: 2526, rank: 116 }, { title: "Middlemarch", author: "Eliot, George", year: 2008, url: "https://www.gutenberg.org/ebooks/145", characters: 1526614, languages: ["en"], subjects: ["City and town life -- Fiction", "Bildungsromans", "England -- Fiction", "Married people -- Fiction", "Domestic fiction", "Didactic fiction", "Young women -- Fiction", "Love stories"], downloads: 2461, rank: 117 }, { title: "Thus Spake Zarathustra: A Book for All and None", author: "Nietzsche, Friedrich Wilhelm", year: 1999, url: "https://www.gutenberg.org/ebooks/1998", characters: 552707, languages: ["en"], subjects: ["Philosophy", "Superman (Philosophical concept)"], downloads: 2454, rank: 118 }, { title: "Meditations", author: "Marcus Aurelius, Emperor of Rome", year: 2001, url: "https://www.gutenberg.org/ebooks/2680", characters: 339097, languages: ["en"], subjects: ["Life", "Ethics", "Stoics"], downloads: 2452, rank: 119 }, { title: "On the Origin of Species By Means of Natural Selection: Or, the Preservation of Favoured Races in the Struggle for Life", author: "Darwin, Charles", year: 1998, url: "https://www.gutenberg.org/ebooks/1228", characters: 806411, languages: ["en"], subjects: ["Evolution (Biology)", "Natural selection"], downloads: 2449, rank: 120 }, { title: "Faust", author: "Goethe, Johann Wolfgang von", year: 2005, url: "https://www.gutenberg.org/ebooks/14591", characters: 194148, languages: ["en"], subjects: ["Legends -- Germany -- Drama", "Magicians -- Drama", "German poetry -- Translations into English", "Faust, -approximately 1540 -- Drama"], downloads: 2439, rank: 121 }, { title: "An Inquiry into the Nature and Causes of the Wealth of Nations", author: "Smith, Adam", year: 2002, url: "https://www.gutenberg.org/ebooks/3300", characters: 1898965, languages: ["en"], subjects: ["Economics"], downloads: 2407, rank: 122 }, { title: "The Tale of Peter Rabbit", author: "Potter, Beatrix", year: 2005, url: "https://www.gutenberg.org/ebooks/14838", characters: 5188, languages: ["en"], subjects: ["Rabbits -- Juvenile fiction"], downloads: 2371, rank: 123 }, { title: "The Ladies' Book of Etiquette, and Manual of Politeness: A Complete Hand Book for the Use of the Lady in Polite Society", author: "Hartley, Florence", year: 2011, url: "https://www.gutenberg.org/ebooks/35123", characters: 418464, languages: ["en"], subjects: ["Etiquette for women", "Formulas, recipes, etc.", "Etiquette -- United States -- Handbooks, manuals, etc."], downloads: 2351, rank: 124 }, { title: "A Treatise of Human Nature", author: "Hume, David", year: 2003, url: "https://www.gutenberg.org/ebooks/4705", characters: 1135584, languages: ["en"], subjects: ["Knowledge, Theory of"], downloads: 2345, rank: 125 }, { title: "Little Women", author: "Alcott, Louisa May", year: 1996, url: "https://www.gutenberg.org/ebooks/514", characters: 857711, languages: ["en"], subjects: ["New England -- Fiction", "Sisters -- Fiction", "Bildungsromans", "Autobiographical fiction", "Family life -- New England -- Fiction", "Young women -- Fiction", "March family (Fictitious characters) -- Fiction", "Domestic fiction", "Mothers and daughters -- Fiction"], downloads: 2340, rank: 126 }, { title: "The Problems of Philosophy", author: "Russell, Bertrand", year: 2004, url: "https://www.gutenberg.org/ebooks/5827", characters: 210540, languages: ["en"], subjects: ["Metaphysics", "Knowledge, Theory of", "Philosophy -- Introductions"], downloads: 2332, rank: 127 }, { title: "Bleak House", author: "Dickens, Charles", year: 1997, url: "https://www.gutenberg.org/ebooks/1023", characters: 1659331, languages: ["en"], subjects: ["Bildungsromans", "Illegitimate children -- Fiction", "London (England) -- Fiction", "Guardian and ward -- Fiction", "Legal stories", "Inheritance and succession -- Fiction", "Domestic fiction", "Young women -- Fiction"], downloads: 2330, rank: 128 }, { title: "The Works of Edgar Allan Poe \u2014 Volume 2", author: "Poe, Edgar Allan", year: 2008, url: "https://www.gutenberg.org/ebooks/2148", characters: 472152, languages: ["en"], subjects: ["Fantasy fiction", "American fiction -- 19th century", "Horror tales, American", "Short stories"], downloads: 2307, rank: 129 }, { title: "The Devil's Dictionary", author: "Bierce, Ambrose", year: 1911, url: "https://www.gutenberg.org/ebooks/972", characters: 310497, languages: ["en"], subjects: ["Vocabulary -- Humor", "English language -- Semantics -- Humor", "English language -- Dictionaries -- Humor"], downloads: 2287, rank: 130 }, { title: "The Art of War", author: "Sunzi, active 6th century B.C.", year: 1994, url: "https://www.gutenberg.org/ebooks/132", characters: 263909, languages: ["en"], subjects: ["Military art and science -- Early works to 1800", "War -- Early works to 1800"], downloads: 2270, rank: 131 }, { title: "The Critique of Pure Reason", author: "Kant, Immanuel", year: 2003, url: "https://www.gutenberg.org/ebooks/4280", characters: 1093379, languages: ["en"], subjects: ["Philosophy, German", "Causation", "Reason", "Knowledge, Theory of"], downloads: 2252, rank: 132 }, { title: "Memoirs Of Fanny Hill: A New and Genuine Edition from the Original Text (London, 1749)", author: "Cleland, John", year: 2008, url: "https://www.gutenberg.org/ebooks/25305", characters: 396142, languages: ["en"], subjects: ["Prostitutes -- Fiction", "England -- Fiction", "Erotic stories"], downloads: 2210, rank: 133 }, { title: "The Practice and Science of Drawing", author: "Speed, Harold", year: 2004, url: "https://www.gutenberg.org/ebooks/14264", characters: 373627, languages: ["en"], subjects: ["Drawing"], downloads: 2209, rank: 134 }, { title: "The Sign of the Four", author: "Doyle, Arthur Conan", year: 2e3, url: "https://www.gutenberg.org/ebooks/2097", characters: 196825, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 2200, rank: 135 }, { title: "The Odyssey: Rendered into English prose for the use of those who cannot read the original", author: "Homer", year: 1999, url: "https://www.gutenberg.org/ebooks/1727", characters: 570379, languages: ["en"], subjects: ["Epic poetry, Greek -- Translations into English", "Odysseus (Greek mythology)", "Homer -- Translations into English"], downloads: 2199, rank: 136 }, { title: "A Princess of Mars", author: "Burroughs, Edgar Rice", year: 2008, url: "https://www.gutenberg.org/ebooks/62", characters: 316458, languages: ["en"], subjects: ["Princesses -- Fiction", "Dejah Thoris (Fictitious character) -- Fiction", "Carter, John (Fictitious character) -- Fiction", "Mars (Planet) -- Fiction", "Science fiction"], downloads: 2190, rank: 137 }, { title: "Myths and Legends of China", author: "Werner, E. T. C. (Edward Theodore Chalmers)", year: 2005, url: "https://www.gutenberg.org/ebooks/15250", characters: 584463, languages: ["en"], subjects: ["Tales -- China", "Legends -- China", "Mythology, Chinese"], downloads: 2187, rank: 138 }, { title: "The Three Musketeers", author: "Dumas, Alexandre", year: 1998, url: "https://www.gutenberg.org/ebooks/1257", characters: 1120021, languages: ["en"], subjects: ["France -- History -- Louis XIII, 1610-1643 -- Fiction", "Adventure and adventurers -- Fiction", "Swordsmen -- Fiction", "Historical fiction"], downloads: 2162, rank: 139 }, { title: "2 B R 0 2 B", author: "Vonnegut, Kurt", year: 2007, url: "https://www.gutenberg.org/ebooks/21279", characters: 12848, languages: ["en"], subjects: ["Science fiction", "Short stories"], downloads: 2144, rank: 140 }, { title: "The Sorrows of Young Werther", author: "Goethe, Johann Wolfgang von", year: 2001, url: "https://www.gutenberg.org/ebooks/2527", characters: 200590, languages: ["en"], subjects: ["Unrequited love -- Fiction", "Young men -- Germany -- Fiction", "Germany -- Social life and customs -- Fiction"], downloads: 2130, rank: 141 }, { title: "The Woman in White", author: "Collins, Wilkie", year: 1996, url: "https://www.gutenberg.org/ebooks/583", characters: 1155740, languages: ["en"], subjects: ["Country homes -- Fiction", "Psychological fiction", "Art teachers -- Fiction", "Nobility -- Fiction", "Deception -- Fiction", "Gothic fiction (Literary genre)", "England -- Fiction", "Psychiatric hospital patients -- Fiction", "Inheritance and succession -- Fiction", "Love stories"], downloads: 2127, rank: 142 }, { title: "Notes from the Underground", author: "Dostoyevsky, Fyodor", year: 1996, url: "https://www.gutenberg.org/ebooks/600", characters: 203528, languages: ["en"], subjects: ["Political fiction", "Russia -- Officials and employees -- Fiction", "Russia -- History -- 1801-1917 -- Fiction"], downloads: 2125, rank: 143 }, { title: "Latin for Beginners", author: "D'Ooge, Benjamin L. (Benjamin Leonard)", year: 2006, url: "https://www.gutenberg.org/ebooks/18251", characters: 617437, languages: ["en"], subjects: ["Latin language -- Grammar -- Problems, exercises, etc."], downloads: 2116, rank: 144 }, { title: "The Memoirs of Sherlock Holmes", author: "Doyle, Arthur Conan", year: 1997, url: "https://www.gutenberg.org/ebooks/834", characters: 403005, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories, English", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 2115, rank: 145 }, { title: "The History Of The Decline And Fall Of The Roman Empire: Table of Contents with links in the HTML file to the two; Project Gutenberg editions (12 volumes)", author: "Gibbon, Edward", year: 2008, url: "https://www.gutenberg.org/ebooks/25717", characters: 57743, languages: ["en"], subjects: ["Rome -- History -- Empire, 30 B.C.-476 A.D.", "Byzantine Empire -- History -- To 527", "Indexes"], downloads: 2105, rank: 146 }, { title: "The Trial", author: "Kafka, Franz", year: 2005, url: "https://www.gutenberg.org/ebooks/7849", characters: 379078, languages: ["en"], subjects: ["Social problems -- Fiction"], downloads: 2099, rank: 147 }, { title: "Hamlet, Prince of Denmark", author: "Shakespeare, William", year: 1603, url: "https://www.gutenberg.org/ebooks/1524", characters: 153985, languages: ["en"], subjects: ["Hamlet (Legendary character) -- Drama", "Tragedies", "Murder victims' families -- Drama", "Princes -- Drama", "Denmark -- Drama", "Fathers -- Death -- Drama", "Revenge -- Drama", "Kings and rulers -- Succession -- Drama"], downloads: 2092, rank: 148 }, { title: "A Concise Dictionary of Middle English from A.D. 1150 to 1580", author: "Skeat, Walter W. (Walter William)", year: 2004, url: "https://www.gutenberg.org/ebooks/10625", characters: 1059372, languages: ["en"], subjects: ["English language -- Middle English, 1100-1500 -- Dictionaries"], downloads: 2069, rank: 149 }, { title: "Journal of Small Things", author: "Mackay, Helen", year: 2016, url: "https://www.gutenberg.org/ebooks/51245", characters: 263162, languages: ["en"], subjects: [], downloads: 2046, rank: 150 }, { title: "The Wind in the Willows", author: "Grahame, Kenneth", year: 1995, url: "https://www.gutenberg.org/ebooks/289", characters: 277439, languages: ["en"], subjects: ["Country life -- Fiction", "Humorous stories", "Pastoral fiction", "England -- Fiction", "Fantasy fiction", "Animals -- Fiction", "Friendship -- Fiction", "River life -- Fiction"], downloads: 2019, rank: 151 }, { title: "Tess of the d'Urbervilles: A Pure Woman", author: "Hardy, Thomas", year: 1994, url: "https://www.gutenberg.org/ebooks/110", characters: 715944, languages: ["en"], subjects: ["Pastoral fiction", "Wessex (England) -- Fiction", "Children of clergy -- Fiction", "Children of the rich -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Poor families -- Fiction", "Women household employees -- Fiction", "Man-woman relationships -- Fiction", "Women murderers -- Fiction", "Rape victims -- Fiction", "Didactic fiction"], downloads: 2014, rank: 152 }, { title: "Macbeth", author: "Shakespeare, William", year: 1623, url: "https://www.gutenberg.org/ebooks/2264", characters: 90199, languages: ["en"], subjects: ["Scotland -- Kings and rulers -- Drama", "Tragedies", "Macbeth, King of Scotland, active 11th century -- Drama", "Regicides -- Drama"], downloads: 2012, rank: 153 }, { title: "The Elements of Style", author: "Strunk, William", year: 2011, url: "https://www.gutenberg.org/ebooks/37134", characters: 73214, languages: ["en"], subjects: ["Report writing", "English language -- Style", "English language -- Rhetoric"], downloads: 2e3, rank: 154 }, { title: "An Ideal Husband", author: "Wilde, Oscar", year: 2009, url: "https://www.gutenberg.org/ebooks/885", characters: 151199, languages: ["en"], subjects: ["London (England) -- Drama", "Comedies"], downloads: 1980, rank: 155 }, { title: "Don Quijote", author: "Cervantes Saavedra, Miguel de", year: 1999, url: "https://www.gutenberg.org/ebooks/2000", characters: 1782519, languages: ["es"], subjects: ["Picaresque literature", "Spain -- Social life and customs -- 16th century -- Fiction", "Knights and knighthood -- Spain -- Fiction", "Romances"], downloads: 1975, rank: 156 }, { title: "The Prince and the Pauper", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/1837", characters: 340217, languages: ["en"], subjects: ["Edward VI, King of England, 1537-1553 -- Fiction", "Princes -- Fiction", "Social classes -- Fiction", "Poor children -- Fiction", "London (England) -- Fiction", "Impostors and imposture -- Fiction", "Historical fiction", "Lookalikes -- Fiction", "Boys -- Fiction"], downloads: 1955, rank: 157 }, { title: "North and South", author: "Gaskell, Elizabeth Cleghorn", year: 2012, url: "https://www.gutenberg.org/ebooks/4276", characters: 847167, languages: ["en"], subjects: ["Children of clergy -- Fiction", "Bildungsromans", "Social classes -- Fiction", "Didactic fiction", "Young women -- Fiction", "England, Northern -- Fiction", "Mothers and daughters -- Fiction"], downloads: 1948, rank: 158 }, { title: "Childe Harold's Pilgrimage", author: "Byron, George Gordon Byron, Baron", year: 2004, url: "https://www.gutenberg.org/ebooks/5131", characters: 187170, languages: ["en"], subjects: ["Pilgrims and pilgrimages -- Europe -- Poetry", "Voyages and travels -- Poetry", "English poetry"], downloads: 1947, rank: 159 }, { title: "The Anatomy of Melancholy", author: "Burton, Robert", year: 2004, url: "https://www.gutenberg.org/ebooks/10800", characters: 2889437, languages: ["en"], subjects: ["Melancholy -- Early works to 1800"], downloads: 1939, rank: 160 }, { title: "The Notebooks of Leonardo Da Vinci \u2014 Complete", author: "Leonardo, da Vinci", year: 2004, url: "https://www.gutenberg.org/ebooks/5000", characters: 1187359, languages: ["en"], subjects: ["Leonardo, da Vinci, 1452-1519 -- Notebooks, sketchbooks, etc."], downloads: 1927, rank: 161 }, { title: "Andersen's Fairy Tales", author: "Andersen, H. C. (Hans Christian)", year: 1999, url: "https://www.gutenberg.org/ebooks/1597", characters: 253942, languages: ["en"], subjects: ["Fairy tales -- Denmark", "Fairy tales", "Children's stories, Danish -- Translations into English"], downloads: 1924, rank: 162 }, { title: "Great Disasters and Horrors in the World's History", author: "Godbey, Allen Howard", year: 2016, url: "https://www.gutenberg.org/ebooks/51246", characters: 730982, languages: ["en"], subjects: [], downloads: 1904, rank: 163 }, { title: "Plays", author: "Glaspell, Susan", year: 2004, url: "https://www.gutenberg.org/ebooks/10623", characters: 280155, languages: ["en"], subjects: ["American drama"], downloads: 1897, rank: 164 }, { title: "Dead End", author: "Macfarlane, Wallace", year: 2016, url: "https://www.gutenberg.org/ebooks/51247", characters: 20878, languages: ["en"], subjects: [], downloads: 1896, rank: 165 }, { title: "Philosophiae Naturalis Principia Mathematica", author: "Newton, Isaac, Sir", year: 2009, url: "https://www.gutenberg.org/ebooks/28233", characters: 701744, languages: ["la"], subjects: ["Celestial mechanics -- Early works to 1800", "Mechanics -- Early works to 1800"], downloads: 1895, rank: 166 }, { title: "The Confessions of St. Augustine", author: "Augustine, Saint, Bishop of Hippo", year: 2002, url: "https://www.gutenberg.org/ebooks/3296", characters: 509067, languages: ["en"], subjects: ["Catholic Church -- Bishops -- Biography", "Bishops -- Algeria -- Hippo (Extinct city) -- Biography", "Augustine, Saint, Bishop of Hippo", "Christian saints -- Algeria -- Hippo (Extinct city) -- Biography"], downloads: 1890, rank: 167 }, { title: "Swann's Way", author: "Proust, Marcel", year: 2009, url: "https://www.gutenberg.org/ebooks/7178", characters: 922547, languages: ["en"], subjects: ["Autobiographical fiction", "Villages -- France -- Fiction", "France -- Social life and customs -- 19th century -- Fiction"], downloads: 1877, rank: 168 }, { title: "Twelve Years a Slave: Narrative of Solomon Northup, a Citizen of New-York, Kidnapped in Washington City in 1841, and Rescued in 1853, from a Cotton Plantation near the Red River in Louisiana", author: "Northup, Solomon", year: 2014, url: "https://www.gutenberg.org/ebooks/45631", characters: 405024, languages: ["en"], subjects: ["Slaves -- United States -- Biography", "Plantation life -- Louisiana -- History -- 19th century", "Northup, Solomon, 1808-1863?", "Slaves' writings, American", "African Americans -- Biography", "Slavery -- Louisiana -- History -- 19th century"], downloads: 1868, rank: 169 }, { title: "The Sea-Gull", author: "Chekhov, Anton Pavlovich", year: 2006, url: "https://www.gutenberg.org/ebooks/1754", characters: 87650, languages: ["en"], subjects: ["Russia -- Social life and customs -- Drama", "Authors, Russian -- 19th century -- Drama", "Russian drama -- Translations into English", "Man-woman relationships -- Drama"], downloads: 1856, rank: 170 }, { title: "Spacemen Die at Home", author: "Ludwig, Edward W.", year: 2016, url: "https://www.gutenberg.org/ebooks/51249", characters: 22449, languages: ["en"], subjects: [], downloads: 1846, rank: 171 }, { title: "The Secret Adversary", author: "Christie, Agatha", year: 2008, url: "https://www.gutenberg.org/ebooks/1155", characters: 369756, languages: ["en"], subjects: ["Beresford, Tommy (Fictitious character) -- Fiction", "Detective and mystery stories", "Private investigators -- England -- Fiction", "Beresford, Tuppence (Fictitious character) -- Fiction", "Missing persons -- Fiction", "Married people -- Fiction", "Domestic fiction"], downloads: 1825, rank: 172 }, { title: "The Ten Books on Architecture", author: "Vitruvius Pollio", year: 2006, url: "https://www.gutenberg.org/ebooks/20239", characters: 492780, languages: ["en"], subjects: ["Architecture -- Early works to 1800"], downloads: 1823, rank: 173 }, { title: "The vision of hell.: By Dante Alighieri.; Translated by Rev. Henry Francis Cary, M.A.; and illustrated with the seventy-five designs of Gustave Dor\xE9.", author: "Dante Alighieri", year: 2004, url: "https://www.gutenberg.org/ebooks/8789", characters: 176090, languages: ["en"], subjects: ["Epic poetry, Italian -- Translations into English", "Italian poetry -- To 1400 -- Translations into English", "Hell -- Poetry"], downloads: 1822, rank: 174 }, { title: "Noli Me Tangere", author: "Rizal, Jose", year: 2006, url: "https://www.gutenberg.org/ebooks/20228", characters: 1030259, languages: ["tl"], subjects: ["Philippines -- History -- 1812-1898 -- Fiction", "Historical fiction"], downloads: 1819, rank: 175 }, { title: "Beasts, Men and Gods", author: "Ossendowski, Ferdynand Antoni", year: 2006, url: "https://www.gutenberg.org/ebooks/2067", characters: 391573, languages: ["en"], subjects: ["Communism -- Soviet Union", "Mongolia -- Description and travel"], downloads: 1801, rank: 176 }, { title: "The Castle of Otranto", author: "Walpole, Horace", year: 2012, url: "https://www.gutenberg.org/ebooks/696", characters: 181332, languages: ["en"], subjects: ["Inheritance and succession -- Fiction", "Gothic fiction (Literary genre)", "Horror tales"], downloads: 1797, rank: 177 }, { title: "Lyrical Ballads, With a Few Other Poems (1798)", author: "Wordsworth, William", year: 2006, url: "https://www.gutenberg.org/ebooks/9622", characters: 100332, languages: ["en"], subjects: ["English poetry -- 18th century"], downloads: 1793, rank: 178 }, { title: "The Moonstone", author: "Collins, Wilkie", year: 2006, url: "https://www.gutenberg.org/ebooks/155", characters: 916844, languages: ["en"], subjects: ["Country homes -- Fiction", "Jewelry theft -- Fiction", "Police -- England -- Fiction", "England -- Fiction", "East Indians -- England -- Fiction", "Mystery fiction"], downloads: 1770, rank: 179 }, { title: "The Fall of the House of Usher", author: "Poe, Edgar Allan", year: 1997, url: "https://www.gutenberg.org/ebooks/932", characters: 35955, languages: ["en"], subjects: ["Gothic fiction (Literary genre)", "Short stories", "Horror tales"], downloads: 1739, rank: 180 }, { title: "The Age of Innocence", author: "Wharton, Edith", year: 1996, url: "https://www.gutenberg.org/ebooks/541", characters: 497605, languages: ["en"], subjects: ["Upper class -- Fiction", "Separated people -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Married people -- Fiction", "New York (N.Y.) -- Fiction", "Domestic fiction", "Love stories"], downloads: 1737, rank: 181 }, { title: "The Aeneid", author: "Virgil", year: 2008, url: "https://www.gutenberg.org/ebooks/228", characters: 528282, languages: ["en"], subjects: ["Legends -- Rome -- Poetry", "Aeneas (Legendary character) -- Poetry", "Epic poetry, Latin -- Translations into English"], downloads: 1723, rank: 182 }, { title: "The Monkey's Paw: The Lady of the Barge and Others, Part 2.", author: "Jacobs, W. W. (William Wymark)", year: 2004, url: "https://www.gutenberg.org/ebooks/12122", characters: 18896, languages: ["en"], subjects: ["Wishes -- Fiction", "Horror tales"], downloads: 1692, rank: 183 }, { title: "Alice's Adventures in Wonderland", author: "Carroll, Lewis", year: 2006, url: "https://www.gutenberg.org/ebooks/19033", characters: 45325, languages: ["en"], subjects: ["Fantasy"], downloads: 1660, rank: 184 }, { title: "The Secret Garden", author: "Burnett, Frances Hodgson", year: 2008, url: "https://www.gutenberg.org/ebooks/113", characters: 364915, languages: ["en"], subjects: ["People with disabilities -- Fiction", "Gardens -- Fiction", "Orphans -- Fiction", "Yorkshire (England) -- Fiction"], downloads: 1621, rank: 185 }, { title: "The History of the Peloponnesian War", author: "Thucydides", year: 2004, url: "https://www.gutenberg.org/ebooks/7142", characters: 1010983, languages: ["en"], subjects: ["Greece -- History -- Peloponnesian War, 431-404 B.C."], downloads: 1605, rank: 186 }, { title: "A Connecticut Yankee in King Arthur's Court", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/86", characters: 543973, languages: ["en"], subjects: ["Britons -- Fiction", "Time travel -- Fiction", "Fantasy fiction", "Satire", "Kings and rulers -- Fiction", "Arthurian romances -- Adaptations", "Americans -- Great Britain -- Fiction", "Knights and knighthood -- Fiction"], downloads: 1605, rank: 187 }, { title: "The Livestock Producer and Armour", author: "Unknown", year: 2016, url: "https://www.gutenberg.org/ebooks/51244", characters: 34052, languages: ["en"], subjects: ["Packing-house products", "Animal industry -- United States"], downloads: 1601, rank: 188 }, { title: "Carmilla", author: "Le Fanu, Joseph Sheridan", year: 2003, url: "https://www.gutenberg.org/ebooks/10007", characters: 133260, languages: ["en"], subjects: ["Vampires -- Fiction", "Young women -- Fiction"], downloads: 1583, rank: 189 }, { title: "Eve's Diary, Complete", author: "Twain, Mark", year: 2004, url: "https://www.gutenberg.org/ebooks/8525", characters: 28589, languages: ["en"], subjects: ["Diary fiction", "Humorous stories", "Eve (Biblical figure) -- Fiction", "Bible. Genesis -- History of Biblical events -- Fiction"], downloads: 1553, rank: 190 }, { title: "Ethics", author: "Spinoza, Benedictus de", year: 2003, url: "https://www.gutenberg.org/ebooks/3800", characters: 430451, languages: ["en"], subjects: ["Ethics"], downloads: 1552, rank: 191 }, { title: "Anthem", author: "Rand, Ayn", year: 1998, url: "https://www.gutenberg.org/ebooks/1250", characters: 82019, languages: ["en"], subjects: ["Men -- Psychology -- Fiction", "Psychological fiction", "Time travel -- Fiction", "Science fiction", "Love stories", "Individuality -- Fiction"], downloads: 1551, rank: 192 }, { title: "A Room with a View", author: "Forster, E. M. (Edward Morgan)", year: 2001, url: "https://www.gutenberg.org/ebooks/2641", characters: 323940, languages: ["en"], subjects: ["England -- Fiction", "British -- Italy -- Fiction", "Humorous stories", "Young women -- Fiction", "Florence (Italy) -- Fiction"], downloads: 1546, rank: 193 }, { title: "The Divine Comedy by Dante, Illustrated, Paradise, Complete", author: "Dante Alighieri", year: 2004, url: "https://www.gutenberg.org/ebooks/8799", characters: 172852, languages: ["en"], subjects: ["Epic poetry, Italian -- Translations into English", "Italian poetry -- To 1400 -- Translations into English"], downloads: 1545, rank: 194 }, { title: "The Mechanical Properties of Wood: Including a Discussion of the Factors Affecting the Mechanical Properties, and Methods of Timber Testing", author: "Record, Samuel J. (Samuel James)", year: 2004, url: "https://www.gutenberg.org/ebooks/12299", characters: 276151, languages: ["en"], subjects: ["Wood", "Wood -- Testing"], downloads: 1544, rank: 195 }, { title: "Pamela, or Virtue Rewarded", author: "Richardson, Samuel", year: 2004, url: "https://www.gutenberg.org/ebooks/6124", characters: 961887, languages: ["en"], subjects: ["Virtue -- Fiction", "Epistolary fiction", "Kidnapping victims -- Fiction", "Didactic fiction", "Women household employees -- Fiction", "England -- Fiction", "Master and servant -- Fiction"], downloads: 1541, rank: 196 }, { title: "This Side of Paradise", author: "Fitzgerald, F. Scott (Francis Scott)", year: 1997, url: "https://www.gutenberg.org/ebooks/805", characters: 408838, languages: ["en"], subjects: ["College students -- Fiction", "Children of the rich -- Fiction", "Bildungsromans", "World War, 1914-1918 -- Veterans -- Fiction", "Advertising -- Fiction", "Young men -- Fiction", "Love stories"], downloads: 1536, rank: 197 }, { title: "The Happy Prince, and Other Tales", author: "Wilde, Oscar", year: 2015, url: "https://www.gutenberg.org/ebooks/902", characters: 73985, languages: ["en"], subjects: ["Short stories, English", "Children's stories, English", "Fairy tales"], downloads: 1530, rank: 198 }, { title: "The Innocents Abroad", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/3176", characters: 934065, languages: ["en"], subjects: ["Voyages and travels", "Middle East -- Description and travel", "Europe -- Description and travel"], downloads: 1523, rank: 199 }, { title: "An Essay on Man; Moral Essays and Satires", author: "Pope, Alexander", year: 2007, url: "https://www.gutenberg.org/ebooks/2428", characters: 225628, languages: ["en"], subjects: ["English poetry -- 18th century"], downloads: 1517, rank: 200 }, { title: "The Tragedy of Pudd'nhead Wilson", author: "Twain, Mark", year: 1994, url: "https://www.gutenberg.org/ebooks/102", characters: 249191, languages: ["en"], subjects: ["Trials (Murder) -- Fiction", "Missouri -- Fiction", "Race relations -- Fiction", "Infants switched at birth -- Fiction", "Impostors and imposture -- Fiction", "Passing (Identity) -- Fiction", "Legal stories"], downloads: 1511, rank: 201 }, { title: "Symposium", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1600", characters: 151197, languages: ["en"], subjects: ["Classical literature", "Philosophy, Ancient", "Socrates, 470 BC-399 BC", "Love -- Early works to 1800"], downloads: 1511, rank: 202 }, { title: "The Gentlemen's Book of Etiquette and Manual of Politeness: Being a Complete Guide for a Gentleman's Conduct in All His Relations Towards Society", author: "Hartley, Cecil B.", year: 2012, url: "https://www.gutenberg.org/ebooks/39293", characters: 427624, languages: ["en"], subjects: ["Etiquette for men", "Etiquette", "Men -- Conduct of life"], downloads: 1510, rank: 203 }, { title: "The Man Who Was Six", author: "Wallace, F. L. (Floyd L.)", year: 2016, url: "https://www.gutenberg.org/ebooks/51295", characters: 70956, languages: ["en"], subjects: [], downloads: 1501, rank: 204 }, { title: "Plays of Sophocles: Oedipus the King; Oedipus at Colonus; Antigone", author: "Sophocles", year: 2006, url: "https://www.gutenberg.org/ebooks/31", characters: 181303, languages: ["en"], subjects: ["Antigone (Mythological character) -- Drama", "Greek drama (Tragedy) -- Translations into English", "Oedipus (Greek mythological figure) -- Drama", "Tragedies"], downloads: 1496, rank: 205 }, { title: "The Red Badge of Courage: An Episode of the American Civil War", author: "Crane, Stephen", year: 2008, url: "https://www.gutenberg.org/ebooks/73", characters: 221566, languages: ["en"], subjects: ["Virginia -- History -- Civil War, 1861-1865 -- Fiction", "War stories", "United States -- History -- Civil War, 1861-1865 -- Fiction", "Historical fiction", "Chancellorsville, Battle of, Chancellorsville, Va., 1863 -- Fiction"], downloads: 1496, rank: 206 }, { title: "The Condition of the Working-Class in England in 1844: with a Preface written in 1892", author: "Engels, Friedrich", year: 2005, url: "https://www.gutenberg.org/ebooks/17306", characters: 603104, languages: ["en"], subjects: ["Working class -- Great Britain", "Great Britain -- Economic conditions"], downloads: 1489, rank: 207 }, { title: "Divine Comedy, Longfellow's Translation, Hell", author: "Dante Alighieri", year: 1997, url: "https://www.gutenberg.org/ebooks/1001", characters: 182524, languages: ["en"], subjects: ["Epic poetry, Italian -- Translations into English", "Italian poetry -- To 1400 -- Translations into English", "Hell -- Poetry"], downloads: 1487, rank: 208 }, { title: "Cyrano de Bergerac", author: "Rostand, Edmond", year: 1998, url: "https://www.gutenberg.org/ebooks/1254", characters: 187927, languages: ["en"], subjects: ["France -- History -- 17th century -- Drama", "Authors, French -- 17th century -- Drama", "Cyrano de Bergerac, 1619-1655 -- Drama"], downloads: 1486, rank: 209 }, { title: "Hamlet", author: "Shakespeare, William", year: 1603, url: "https://www.gutenberg.org/ebooks/2265", characters: 142685, languages: ["en"], subjects: ["Hamlet (Legendary character) -- Drama", "Tragedies", "Murder victims' families -- Drama", "Princes -- Drama", "Denmark -- Drama", "Fathers -- Death -- Drama", "Revenge -- Drama", "Kings and rulers -- Succession -- Drama"], downloads: 1481, rank: 210 }, { title: "Discourse on the Method of Rightly Conducting One's Reason and of Seeking Truth in the Sciences", author: "Descartes, Rene", year: 2008, url: "https://www.gutenberg.org/ebooks/59", characters: 109197, languages: ["en"], subjects: ["Methodology", "Science -- Methodology"], downloads: 1476, rank: 211 }, { title: "Maggie: A Girl of the Streets", author: "Crane, Stephen", year: 1996, url: "https://www.gutenberg.org/ebooks/447", characters: 112317, languages: ["en"], subjects: ["Slums -- Fiction", "Poor women -- Fiction", "Psychological fiction", "Prostitutes -- Fiction", "Poor families -- Fiction", "Suicide victims -- Fiction", "New York (N.Y.) -- Fiction"], downloads: 1470, rank: 212 }, { title: "The Library of Entertainment Handbook", author: "Scammell, John Chilton", year: 2016, url: "https://www.gutenberg.org/ebooks/51248", characters: 280673, languages: ["en"], subjects: ["Literature -- Collections"], downloads: 1466, rank: 213 }, { title: "Twenty Thousand Leagues under the Sea", author: "Verne, Jules", year: 2008, url: "https://www.gutenberg.org/ebooks/164", characters: 504932, languages: ["en"], subjects: ["Submarines (Ships) -- Fiction", "Science fiction", "Sea stories", "Underwater exploration -- Fiction"], downloads: 1459, rank: 214 }, { title: "The King in Yellow", author: "Chambers, Robert W. (Robert William)", year: 2005, url: "https://www.gutenberg.org/ebooks/8492", characters: 342362, languages: ["en"], subjects: ["Short stories, American", "Horror tales, American", "United States -- Social life and customs -- 19th century -- Fiction"], downloads: 1453, rank: 215 }, { title: "The World as Will and Idea (Vol. 1 of 3)", author: "Schopenhauer, Arthur", year: 2011, url: "https://www.gutenberg.org/ebooks/38427", characters: 1031991, languages: ["en"], subjects: ["Will", "Philosophy", "Idea (Philosophy)", "Knowledge, Theory of"], downloads: 1452, rank: 216 }, { title: "The American Occupation of the Philippines 1898-1912", author: "Blount, James H. (James Henderson)", year: 2011, url: "https://www.gutenberg.org/ebooks/36542", characters: 1001457, languages: ["en"], subjects: ["Philippines -- Politics and government -- 1898-1935", "Philippines -- History -- 1898-1946"], downloads: 1448, rank: 217 }, { title: "The Canterbury Tales, and Other Poems", author: "Chaucer, Geoffrey", year: 1475, url: "https://www.gutenberg.org/ebooks/2383", characters: 1313149, languages: ["en"], subjects: ["Chaucer, Geoffrey, -1400", "English poetry", "Christian pilgrims and pilgrimages -- Poetry"], downloads: 1447, rank: 218 }, { title: "My Man Jeeves", author: "Wodehouse, P. G. (Pelham Grenville)", year: 2005, url: "https://www.gutenberg.org/ebooks/8164", characters: 233636, languages: ["en"], subjects: ["Humorous stories", "Valets -- Fiction", "Jeeves (Fictitious character) -- Fiction", "Wooster, Bertie (Fictitious character) -- Fiction", "England -- Fiction", "Single men -- Fiction"], downloads: 1444, rank: 219 }, { title: "Spenser's The Faerie Queene, Book I", author: "Spenser, Edmund", year: 2005, url: "https://www.gutenberg.org/ebooks/15272", characters: 371807, languages: ["en"], subjects: ["Virtues -- Poetry", "Knights and knighthood -- Poetry"], downloads: 1443, rank: 220 }, { title: "Mrs. Warren's Profession", author: "Shaw, Bernard", year: 2006, url: "https://www.gutenberg.org/ebooks/1097", characters: 166013, languages: ["en"], subjects: ["Prostitution -- Great Britain -- Drama", "Working class women -- Great Britain -- Drama", "Prostitutes -- Great Britain -- Drama", "Great Britain -- Social conditions -- 19th century -- Drama"], downloads: 1441, rank: 221 }, { title: "Pascal's Pens\xE9es", author: "Pascal, Blaise", year: 2006, url: "https://www.gutenberg.org/ebooks/18269", characters: 539550, languages: ["en"], subjects: ["Apologetics", "Philosophy"], downloads: 1435, rank: 222 }, { title: "Venus in Furs", author: "Sacher-Masoch, Leopold, Ritter von", year: 2004, url: "https://www.gutenberg.org/ebooks/6852", characters: 200172, languages: ["en"], subjects: ["Erotic stories", "Sadomasochism -- Fiction"], downloads: 1425, rank: 223 }, { title: "The Legends of King Arthur and His Knights", author: "Knowles, James, Sir", year: 2004, url: "https://www.gutenberg.org/ebooks/12753", characters: 423607, languages: ["en"], subjects: ["Arthur, King -- Legends", "Knights and knighthood -- Folklore", "Folklore -- England", "Arthurian romances -- Adaptations"], downloads: 1421, rank: 224 }, { title: "The Satyricon \u2014 Complete", author: "Petronius Arbiter", year: 2006, url: "https://www.gutenberg.org/ebooks/5225", characters: 474848, languages: ["en"], subjects: ["Rome -- Fiction", "Satire, Latin -- Translations into English"], downloads: 1412, rank: 225 }, { title: "The Pilgrim's Progress from this world to that which is to come: Delivered under the similitude of a dream, by John Bunyan", author: "Bunyan, John", year: 2008, url: "https://www.gutenberg.org/ebooks/131", characters: 258035, languages: ["en"], subjects: ["Christian fiction", "Christian pilgrims and pilgrimages -- Fiction"], downloads: 1402, rank: 226 }, { title: "Kidnapped", author: "Stevenson, Robert Louis", year: 2006, url: "https://www.gutenberg.org/ebooks/421", characters: 355162, languages: ["en"], subjects: ["Adventure and adventurers -- Fiction", "Kidnapping -- Fiction", "Scotland -- History -- 18th century -- Fiction", "Historical fiction"], downloads: 1402, rank: 227 }, { title: "On War \u2014 Volume 1", author: "Clausewitz, Carl von", year: 2006, url: "https://www.gutenberg.org/ebooks/1946", characters: 530178, languages: ["en"], subjects: ["Military art and science", "War"], downloads: 1399, rank: 228 }, { title: "The Confessions of Jean Jacques Rousseau \u2014 Complete", author: "Rousseau, Jean-Jacques", year: 2015, url: "https://www.gutenberg.org/ebooks/3913", characters: 1310575, languages: ["en"], subjects: ["Rousseau, Jean-Jacques, 1712-1778", "Authors, French -- 18th century -- Biography"], downloads: 1397, rank: 229 }, { title: "Die Verwandlung", author: "Kafka, Franz", year: 2007, url: "https://www.gutenberg.org/ebooks/22367", characters: 105822, languages: ["de"], subjects: ["Psychological fiction", "Metamorphosis -- Fiction"], downloads: 1389, rank: 230 }, { title: "The Idiot", author: "Dostoyevsky, Fyodor", year: 2001, url: "https://www.gutenberg.org/ebooks/2638", characters: 1157e3, languages: ["en"], subjects: ["Russia -- Social conditions -- 1801-1917 -- Fiction", "Historical fiction"], downloads: 1386, rank: 231 }, { title: "Famous Impostors", author: "Stoker, Bram", year: 2016, url: "https://www.gutenberg.org/ebooks/51391", characters: 389989, languages: ["en"], subjects: [], downloads: 1381, rank: 232 }, { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Stevenson, Robert Louis", year: 1992, url: "https://www.gutenberg.org/ebooks/43", characters: 117634, languages: ["en"], subjects: ["Self-experimentation in medicine -- Fiction", "Psychological fiction", "Multiple personality -- Fiction", "Physicians -- Fiction", "London (England) -- Fiction", "Science fiction", "Horror tales"], downloads: 1380, rank: 233 }, { title: "The Addicts", author: "Samachson, Joseph", year: 2016, url: "https://www.gutenberg.org/ebooks/51240", characters: 17152, languages: ["en"], subjects: [], downloads: 1379, rank: 234 }, { title: "The Lost World", author: "Doyle, Arthur Conan", year: 2008, url: "https://www.gutenberg.org/ebooks/139", characters: 358664, languages: ["en"], subjects: ["Challenger, Professor (Fictitious character) -- Fiction", "Fantasy fiction", "Prehistoric peoples -- Fiction", "Dinosaurs -- Fiction", "South America -- Fiction"], downloads: 1378, rank: 235 }, { title: "Life on the Mississippi", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/245", characters: 691132, languages: ["en"], subjects: ["Mississippi River -- Description and travel", "Mississippi River Valley -- Social life and customs -- 19th century", "Authors, American -- 19th century -- Biography", "Pilots and pilotage -- Mississippi River", "Twain, Mark, 1835-1910 -- Travel -- Mississippi River"], downloads: 1368, rank: 236 }, { title: "An Enquiry Concerning Human Understanding", author: "Hume, David", year: 2006, url: "https://www.gutenberg.org/ebooks/9662", characters: 296154, languages: ["en"], subjects: ["Ethics", "Knowledge, Theory of"], downloads: 1350, rank: 237 }, { title: "The Marching Morons", author: "Kornbluth, C. M. (Cyril M.)", year: 2016, url: "https://www.gutenberg.org/ebooks/51233", characters: 57058, languages: ["en"], subjects: [], downloads: 1349, rank: 238 }, { title: "The Decameron of Giovanni Boccaccio", author: "Boccaccio, Giovanni", year: 2007, url: "https://www.gutenberg.org/ebooks/23700", characters: 1442516, languages: ["en"], subjects: ["Plague -- Europe -- History -- Fiction", "Allegories", "Frame-stories", "Storytelling -- Fiction"], downloads: 1339, rank: 239 }, { title: "A Vindication of the Rights of Woman: With Strictures on Political and Moral Subjects", author: "Wollstonecraft, Mary", year: 2002, url: "https://www.gutenberg.org/ebooks/3420", characters: 438290, languages: ["en"], subjects: ["Women's rights -- Great Britain", "Women -- History -- 19th century", "Women -- Education -- Great Britain", "Feminism"], downloads: 1339, rank: 240 }, { title: "Tarzan of the Apes", author: "Burroughs, Edgar Rice", year: 2008, url: "https://www.gutenberg.org/ebooks/78", characters: 412646, languages: ["en"], subjects: ["Africa -- Fiction", "Tarzan (Fictitious character) -- Fiction", "Fantasy fiction", "Wild men -- Fiction", "British -- Africa -- Fiction", "Adventure stories"], downloads: 1336, rank: 241 }, { title: "Southern Horrors: Lynch Law in All Its Phases", author: "Wells-Barnett, Ida B.", year: 2005, url: "https://www.gutenberg.org/ebooks/14975", characters: 47665, languages: ["en"], subjects: ["Lynching"], downloads: 1333, rank: 242 }, { title: "Uncle Vanya: Scenes from Country Life in Four Acts", author: "Chekhov, Anton Pavlovich", year: 1999, url: "https://www.gutenberg.org/ebooks/1756", characters: 76783, languages: ["en"], subjects: ["Russia -- Social life and customs -- Drama", "Country life -- Russia -- Drama", "Russian drama -- Translations into English", "Families -- Russia -- Drama"], downloads: 1333, rank: 243 }, { title: "The Social Cancer: A Complete English Version of Noli Me Tangere", author: "Rizal, Jose", year: 2007, url: "https://www.gutenberg.org/ebooks/6737", characters: 864628, languages: ["en"], subjects: ["Philippines -- History -- 1812-1898 -- Fiction", "Historical fiction"], downloads: 1333, rank: 244 }, { title: "Gargantua and Pantagruel", author: "Rabelais, Francois", year: 2004, url: "https://www.gutenberg.org/ebooks/1200", characters: 1548310, languages: ["en"], subjects: ["Giants -- Fiction", "Fantasy fiction, French -- Translations into English", "Gargantua (Legendary character) -- Fiction"], downloads: 1328, rank: 245 }, { title: "The Pursuit of God", author: "Tozer, A. W. (Aiden Wilson)", year: 2008, url: "https://www.gutenberg.org/ebooks/25141", characters: 134387, languages: ["en"], subjects: ["Spirituality", "God (Christianity) -- Worship and love"], downloads: 1328, rank: 246 }, { title: "The Federalist Papers", author: "Jay, John", year: 1998, url: "https://www.gutenberg.org/ebooks/1404", characters: 991913, languages: ["en"], subjects: ["Constitutional law -- United States", "Constitutional history -- United States -- Sources"], downloads: 1327, rank: 247 }, { title: "The Life and Opinions of Tristram Shandy, Gentleman", author: "Sterne, Laurence", year: 1997, url: "https://www.gutenberg.org/ebooks/1079", characters: 886874, languages: ["en"], subjects: ["Fiction -- Authorship -- Fiction", "Infants -- Fiction", "Fetus -- Fiction", "Experimental fiction", "Stream of consciousness fiction"], downloads: 1326, rank: 248 }, { title: "The Ladies Delight", author: "Anonymous", year: 2004, url: "https://www.gutenberg.org/ebooks/14005", characters: 24516, languages: ["en"], subjects: ["Erotic literature", "Heidegger, John James, 1659?-1748", "Penis -- Poetry"], downloads: 1322, rank: 249 }, { title: "The Lives of the Twelve Caesars, Complete", author: "Suetonius", year: 2006, url: "https://www.gutenberg.org/ebooks/6400", characters: 1173111, languages: ["en"], subjects: ["Rome -- History -- Empire, 30 B.C.-284 A.D.", "Emperors -- Rome -- Biography -- Early works to 1800"], downloads: 1317, rank: 250 }, { title: "Roughing It", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/3177", characters: 798587, languages: ["en"], subjects: ["West (U.S.) -- Description and travel", "West (U.S.) -- Intellectual life -- 19th century", "Authors, American -- Homes and haunts -- West (U.S.)", "Twain, Mark, 1835-1910 -- Travel -- West (U.S.)"], downloads: 1313, rank: 251 }, { title: "Second Variety", author: "Dick, Philip K.", year: 2010, url: "https://www.gutenberg.org/ebooks/32032", characters: 76487, languages: ["en"], subjects: ["Science fiction", "War stories", "Robots -- Fiction"], downloads: 1308, rank: 252 }, { title: "Bridge Crossing", author: "Dryfoos, Dave", year: 2016, url: "https://www.gutenberg.org/ebooks/51241", characters: 24095, languages: ["en"], subjects: [], downloads: 1308, rank: 253 }, { title: "The Thousand and One Nights, Vol. I.: Commonly Called the Arabian Nights' Entertainments", author: "Unknown", year: 2010, url: "https://www.gutenberg.org/ebooks/34206", characters: 1253534, languages: ["en"], subjects: ["Tales -- Arab countries", "Fairy tales"], downloads: 1307, rank: 254 }, { title: "The Consolation of Philosophy", author: "Boethius", year: 2004, url: "https://www.gutenberg.org/ebooks/14328", characters: 210578, languages: ["en"], subjects: ["Philosophy and religion", "Happiness"], downloads: 1306, rank: 255 }, { title: "A Complete Guide to Heraldry", author: "Fox-Davies, Arthur Charles", year: 2012, url: "https://www.gutenberg.org/ebooks/41617", characters: 1366469, languages: ["en"], subjects: ["Heraldry -- Great Britain"], downloads: 1306, rank: 256 }, { title: "Max und Moritz: Eine Bubengeschichte in sieben Streichen", author: "Busch, Wilhelm", year: 2005, url: "https://www.gutenberg.org/ebooks/17161", characters: 15431, languages: ["de"], subjects: ["Children's poetry, German", "Practical jokes -- Juvenile poetry", "Wit and humor"], downloads: 1302, rank: 257 }, { title: "The Poetics of Aristotle", author: "Aristotle", year: 1999, url: "https://www.gutenberg.org/ebooks/1974", characters: 74594, languages: ["en"], subjects: ["Aesthetics -- Early works to 1800", "Poetry -- Early works to 1800"], downloads: 1300, rank: 258 }, { title: "Ghosts", author: "Ibsen, Henrik", year: 2005, url: "https://www.gutenberg.org/ebooks/8121", characters: 118219, languages: ["en"], subjects: ["Norwegian drama -- Translations into English"], downloads: 1295, rank: 259 }, { title: "Struwwelpeter: Merry Stories and Funny Pictures", author: "Hoffmann, Heinrich", year: 2004, url: "https://www.gutenberg.org/ebooks/12116", characters: 11231, languages: ["en"], subjects: ["Children -- Conduct of life -- Juvenile fiction", "Children's stories, German -- Translations into English", "Children's poetry, German -- Translations into English", "Stories in rhyme", "Picture books for children", "Behavior -- Fiction"], downloads: 1290, rank: 260 }, { title: "Youth", author: "Asimov, Isaac", year: 2010, url: "https://www.gutenberg.org/ebooks/31547", characters: 49777, languages: ["en"], subjects: ["Human-alien encounters -- Fiction", "Science fiction"], downloads: 1287, rank: 261 }, { title: "Plain Tales from the Hills", author: "Kipling, Rudyard", year: 1999, url: "https://www.gutenberg.org/ebooks/1858", characters: 340924, languages: ["en"], subjects: ["India -- History -- British occupation, 1765-1947 -- Fiction", "British -- India -- Fiction"], downloads: 1284, rank: 262 }, { title: "The Invisible Man: A Grotesque Romance", author: "Wells, H. G. (Herbert George)", year: 2004, url: "https://www.gutenberg.org/ebooks/5230", characters: 235353, languages: ["en"], subjects: ["Mentally ill -- Fiction", "Science fiction", "Scientists -- Fiction", "Psychological fiction"], downloads: 1283, rank: 263 }, { title: "Utilitarianism", author: "Mill, John Stuart", year: 2004, url: "https://www.gutenberg.org/ebooks/11224", characters: 138340, languages: ["en"], subjects: ["Utilitarianism"], downloads: 1282, rank: 264 }, { title: "Novo dicion\xE1rio da l\xEDngua portuguesa", author: "Figueiredo, Candido de", year: 2010, url: "https://www.gutenberg.org/ebooks/31552", characters: 12051675, languages: ["pt"], subjects: ["Portuguese language -- Dictionaries"], downloads: 1277, rank: 265 }, { title: "Beasts and Super-Beasts", author: "Saki", year: 2011, url: "https://www.gutenberg.org/ebooks/269", characters: 305894, languages: ["en"], subjects: ["Short stories, English", "Humorous stories", "Supernatural -- Fiction"], downloads: 1276, rank: 266 }, { title: "The History of Prostitution: Its Extent, Causes, and Effects throughout the World", author: "Sanger, William W.", year: 2013, url: "https://www.gutenberg.org/ebooks/41873", characters: 1471906, languages: ["en"], subjects: [], downloads: 1267, rank: 267 }, { title: "A Journey to the Centre of the Earth", author: "Verne, Jules", year: 2006, url: "https://www.gutenberg.org/ebooks/18857", characters: 419936, languages: ["en"], subjects: ["Science fiction", "Earth (Planet) -- Core -- Fiction", "Voyages, Imaginary -- Fiction", "Adventure stories"], downloads: 1263, rank: 268 }, { title: "A Classification and Subject Index for Cataloguing and Arranging the Books and Pamphlets of a Library", author: "Dewey, Melvil", year: 2004, url: "https://www.gutenberg.org/ebooks/12513", characters: 94731, languages: ["en"], subjects: ["Classification, Dewey decimal"], downloads: 1244, rank: 269 }, { title: "The Theory of the Leisure Class", author: "Veblen, Thorstein", year: 1997, url: "https://www.gutenberg.org/ebooks/833", characters: 556401, languages: ["en"], subjects: ["Sociology", "Leisure class"], downloads: 1244, rank: 270 }, { title: "Ivanhoe: A Romance", author: "Scott, Walter", year: 1993, url: "https://www.gutenberg.org/ebooks/82", characters: 951286, languages: ["en"], subjects: ["Great Britain -- History -- Richard I, 1189-1199 -- Fiction", "Knights and knighthood -- Fiction", "Normans -- Great Britain -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Ivanhoe, Wilfred of, Sir (Fictitious character) -- Fiction", "Jews -- England -- Fiction", "Anglo-Saxons -- Fiction", "Historical fiction", "Love stories"], downloads: 1241, rank: 271 }, { title: "Notre-Dame De Paris", author: "Hugo, Victor", year: 2001, url: "https://www.gutenberg.org/ebooks/2610", characters: 912590, languages: ["en"], subjects: ["France -- History -- Louis XI, 1461-1483 -- Fiction", "Paris (France) -- History -- To 1515 -- Fiction", "Historical fiction", "People with disabilities -- Fiction", "Clergy -- Fiction", "Romances", "Notre-Dame de Paris (Cathedral) -- Fiction"], downloads: 1239, rank: 272 }, { title: "Lineage, Life and Labors of Jos\xE9 Rizal, Philippine Patriot", author: "Craig, Austin", year: 2004, url: "https://www.gutenberg.org/ebooks/6867", characters: 320812, languages: ["en"], subjects: ["Rizal, Jos\xE9, 1861-1896"], downloads: 1239, rank: 273 }, { title: "The Valley of Fear", author: "Doyle, Arthur Conan", year: 2002, url: "https://www.gutenberg.org/ebooks/3289", characters: 266455, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 1230, rank: 274 }, { title: "The Island of Doctor Moreau", author: "Wells, H. G. (Herbert George)", year: 2004, url: "https://www.gutenberg.org/ebooks/159", characters: 206998, languages: ["en"], subjects: ["Science fiction", "Animal experimentation -- Fiction", "Islands -- Fiction", "Shipwreck survival -- Fiction"], downloads: 1229, rank: 275 }, { title: "Alice's Adventures in Wonderland: Illustrated by Arthur Rackham. With a Proem by Austin Dobson", author: "Carroll, Lewis", year: 2009, url: "https://www.gutenberg.org/ebooks/28885", characters: 128331, languages: ["en"], subjects: ["Fantasy"], downloads: 1229, rank: 276 }, { title: "The Man Outside", author: "Smith, Evelyn E.", year: 2016, url: "https://www.gutenberg.org/ebooks/51337", characters: 32572, languages: ["en"], subjects: [], downloads: 1218, rank: 277 }, { title: "The Last of the Mohicans; A narrative of 1757", author: "Cooper, James Fenimore", year: 2006, url: "https://www.gutenberg.org/ebooks/940", characters: 725414, languages: ["en"], subjects: ["United States -- History -- French and Indian War, 1754-1763 -- Fiction", "War stories", "Adventure stories", "Frontier and pioneer life -- Fiction", "Mohegan Indians -- Fiction", "Historical fiction", "Bumppo, Natty (Fictitious character) -- Fiction"], downloads: 1215, rank: 278 }, { title: "The Adventures of Pinocchio", author: "Collodi, Carlo", year: 2006, url: "https://www.gutenberg.org/ebooks/500", characters: 183332, languages: ["en"], subjects: ["Fairy tales", "Puppets -- Juvenile fiction", "Pinocchio (Fictitious character) -- Juvenile fiction"], downloads: 1214, rank: 279 }, { title: "The Spectator, Volumes 1, 2 and 3: With Translations and Index for the Series", author: "Steele, Richard, Sir", year: 2004, url: "https://www.gutenberg.org/ebooks/12030", characters: 4618241, languages: ["en"], subjects: ["English essays -- 18th century -- Periodicals"], downloads: 1207, rank: 280 }, { title: "The Jungle Book", author: "Kipling, Rudyard", year: 2011, url: "https://www.gutenberg.org/ebooks/35997", characters: 237540, languages: ["en"], subjects: ["Jungles -- Fiction", "Jungle animals -- Fiction", "Feral children -- Fiction", "Mowgli (Fictitious character) -- Fiction", "Adventure stories, English", "Animals -- Fiction", "Short stories", "India -- Fiction"], downloads: 1207, rank: 281 }, { title: "The Sense of Wonder", author: "Marlowe, Stephen", year: 2016, url: "https://www.gutenberg.org/ebooks/51296", characters: 28513, languages: ["en"], subjects: [], downloads: 1207, rank: 282 }, { title: "China and Pottery Marks", author: "Unknown", year: 2012, url: "https://www.gutenberg.org/ebooks/40311", characters: 18090, languages: ["en"], subjects: ["Pottery -- Marks"], downloads: 1201, rank: 283 }, { title: "Aesop's Fables; a new translation", author: "Aesop", year: 2004, url: "https://www.gutenberg.org/ebooks/11339", characters: 183612, languages: ["en"], subjects: ["Fables, Greek -- Translations into English"], downloads: 1199, rank: 284 }, { title: "Essays by Ralph Waldo Emerson", author: "Emerson, Ralph Waldo", year: 2005, url: "https://www.gutenberg.org/ebooks/16643", characters: 461494, languages: ["en"], subjects: ["Essays"], downloads: 1194, rank: 285 }, { title: "Encyclopedia of Needlework", author: "Dillmont, Therese de", year: 2007, url: "https://www.gutenberg.org/ebooks/20776", characters: 672756, languages: ["en"], subjects: ["Needlework"], downloads: 1194, rank: 286 }, { title: "Chaucer's Works, Volume 4 (of 7) \u2014 The Canterbury Tales", author: "Chaucer, Geoffrey", year: 2007, url: "https://www.gutenberg.org/ebooks/22120", characters: 1091798, languages: ["enm"], subjects: ["Christian pilgrims and pilgrimages -- Poetry"], downloads: 1176, rank: 287 }, { title: "White Fang", author: "London, Jack", year: 2005, url: "https://www.gutenberg.org/ebooks/910", characters: 338321, languages: ["en"], subjects: ["Wolfdogs -- Fiction", "Adventure stories", "Canada, Northern -- Fiction"], downloads: 1174, rank: 288 }, { title: "Mosses from an Old Manse, and Other Stories", author: "Hawthorne, Nathaniel", year: 1996, url: "https://www.gutenberg.org/ebooks/512", characters: 361648, languages: ["en"], subjects: ["New England -- Social life and customs -- Fiction", "Short stories"], downloads: 1173, rank: 289 }, { title: "The Mayor of Casterbridge", author: "Hardy, Thomas", year: 2007, url: "https://www.gutenberg.org/ebooks/143", characters: 560649, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Psychological fiction", "Wessex (England) -- Fiction", "Runaway husbands -- Fiction", "Atonement -- Fiction", "Men -- England -- Fiction", "Mayors -- Fiction"], downloads: 1172, rank: 290 }, { title: "Shakespearean Tragedy: Lectures on Hamlet, Othello, King Lear, Macbeth", author: "Bradley, A. C. (Andrew Cecil)", year: 2005, url: "https://www.gutenberg.org/ebooks/16966", characters: 839782, languages: ["en"], subjects: ["Shakespeare, William, 1564-1616 -- Tragedies"], downloads: 1171, rank: 291 }, { title: "The Waste Land", author: "Eliot, T. S. (Thomas Stearns)", year: 1922, url: "https://www.gutenberg.org/ebooks/1321", characters: 22985, languages: ["en"], subjects: ["Poetry", "Prose poems"], downloads: 1169, rank: 292 }, { title: "My Antonia", author: "Cather, Willa", year: 2008, url: "https://www.gutenberg.org/ebooks/242", characters: 374190, languages: ["en"], subjects: ["Friendship -- Fiction", "Married women -- Fiction", "Women pioneers -- Fiction", "Farmers' spouses -- Fiction", "Farm life -- Fiction", "Western stories", "Women immigrants -- Fiction", "Czech Americans -- Fiction", "Frontier and pioneer life -- Nebraska -- Fiction", "Nebraska -- Fiction", "Domestic fiction"], downloads: 1169, rank: 293 }, { title: "Florante at Laura", author: "Balagtas, Francisco", year: 2005, url: "https://www.gutenberg.org/ebooks/15845", characters: 129058, languages: ["tl"], subjects: ["Tagalog poetry"], downloads: 1165, rank: 294 }, { title: "Apology", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1656", characters: 72343, languages: ["en"], subjects: ["Philosophy, Ancient", "Classical literature", "Socrates, 470 BC-399 BC"], downloads: 1165, rank: 295 }, { title: "Bartleby, the Scrivener: A Story of Wall-Street", author: "Melville, Herman", year: 2004, url: "https://www.gutenberg.org/ebooks/11231", characters: 70425, languages: ["en"], subjects: ["New York (N.Y.) -- Fiction", "Copyists -- Fiction", "Psychological fiction", "Young men -- Fiction", "Wall Street (New York, N.Y.) -- Fiction"], downloads: 1163, rank: 296 }, { title: "Far from the Madding Crowd", author: "Hardy, Thomas", year: 1992, url: "https://www.gutenberg.org/ebooks/27", characters: 657644, languages: ["en"], subjects: ["Pastoral fiction", "Wessex (England) -- Fiction", "Women farmers -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Farm life -- Fiction", "Didactic fiction", "Love stories"], downloads: 1158, rank: 297 }, { title: "History of the Decline and Fall of the Roman Empire \u2014 Volume 1", author: "Gibbon, Edward", year: 1996, url: "https://www.gutenberg.org/ebooks/731", characters: 1390693, languages: ["en"], subjects: ["Rome -- History -- Empire, 30 B.C.-476 A.D.", "Byzantine Empire -- History -- To 527"], downloads: 1156, rank: 298 }, { title: "The Lady with the Dog and Other Stories", author: "Chekhov, Anton Pavlovich", year: 2004, url: "https://www.gutenberg.org/ebooks/13415", characters: 338067, languages: ["en"], subjects: ["Chekhov, Anton Pavlovich, 1860-1904 -- Translations into English", "Russia -- Social life and customs -- Fiction"], downloads: 1151, rank: 299 }, { title: "Filipino Popular Tales", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/8299", characters: 972186, languages: ["en"], subjects: ["Folklore -- Philippines", "Tales -- Philippines"], downloads: 1151, rank: 300 }, { title: "Antiquities of the Jews", author: "Josephus, Flavius", year: 2001, url: "https://www.gutenberg.org/ebooks/2848", characters: 2498225, languages: ["en"], subjects: ["Jews -- Antiquities"], downloads: 1148, rank: 301 }, { title: "The Secret Agent: A Simple Tale", author: "Conrad, Joseph", year: 2010, url: "https://www.gutenberg.org/ebooks/974", characters: 445318, languages: ["en"], subjects: ["Bombings -- Fiction", "Political fiction", "Conspiracies -- Fiction", "Anarchists -- Fiction", "London (England) -- Fiction"], downloads: 1142, rank: 302 }, { title: "The Raven", author: "Poe, Edgar Allan", year: 2005, url: "https://www.gutenberg.org/ebooks/17192", characters: 37227, languages: ["en"], subjects: ["Fantasy poetry, American"], downloads: 1140, rank: 303 }, { title: "The Iliad", author: "Homer", year: 2e3, url: "https://www.gutenberg.org/ebooks/2199", characters: 682552, languages: ["en"], subjects: ["Classical literature", "Trojan War", "Achilles (Mythological character)", "Epic poetry, Greek -- Translations into English"], downloads: 1134, rank: 304 }, { title: "The Mysterious Stranger, and Other Stories", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/3186", characters: 188854, languages: ["en"], subjects: ["Short stories", "United States -- Social life and customs -- 19th century -- Fiction", "Humorous stories, American"], downloads: 1133, rank: 305 }, { title: "How?: or Spare Hours Made Profitable for Boys and Girls", author: "Holbrook, Kennedy", year: 2016, url: "https://www.gutenberg.org/ebooks/51315", characters: 314506, languages: ["en"], subjects: [], downloads: 1131, rank: 306 }, { title: "Laura Middleton; Her Brother and her Lover", author: "Anonymous", year: 2009, url: "https://www.gutenberg.org/ebooks/28522", characters: 148482, languages: ["en"], subjects: ["Erotic stories"], downloads: 1129, rank: 307 }, { title: "Biographia Literaria", author: "Coleridge, Samuel Taylor", year: 2004, url: "https://www.gutenberg.org/ebooks/6081", characters: 700675, languages: ["en"], subjects: ["Criticism", "Aesthetics", "Poetry", "Wordsworth, William, 1770-1850. Lyrical ballads"], downloads: 1129, rank: 308 }, { title: "Incidents in the Life of a Slave Girl, Written by Herself", author: "Jacobs, Harriet A. (Harriet Ann)", year: 2004, url: "https://www.gutenberg.org/ebooks/11030", characters: 374348, languages: ["en"], subjects: ["Women slaves -- United States -- Biography", "Slaves -- United States -- Biography", "Slaves -- United States -- Social conditions", "Jacobs, Harriet A. (Harriet Ann), 1813-1897"], downloads: 1128, rank: 309 }, { title: "How To Write Special Feature Articles: A Handbook for Reporters, Correspondents and Free-Lance Writers Who Desire to Contribute to Popular Magazines and Magazine Sections of Newspapers", author: "Bleyer, Willard Grosvenor", year: 2005, url: "https://www.gutenberg.org/ebooks/15718", characters: 693048, languages: ["en"], subjects: ["Authorship", "Journalism"], downloads: 1125, rank: 310 }, { title: "The Pickwick Papers", author: "Dickens, Charles", year: 1837, url: "https://www.gutenberg.org/ebooks/580", characters: 1506646, languages: ["en"], subjects: ["England -- Fiction", "Humorous stories", "Men -- Societies and clubs -- Fiction", "Male friendship -- Fiction"], downloads: 1121, rank: 311 }, { title: "The House of Mirth", author: "Wharton, Edith", year: 2008, url: "https://www.gutenberg.org/ebooks/284", characters: 625538, languages: ["en"], subjects: ["New York (N.Y.) -- Fiction", "Single women -- Fiction", "Social classes -- Fiction", "Psychological fiction"], downloads: 1119, rank: 312 }, { title: "A Little Princess: Being the whole story of Sara Crewe now told for the first time", author: "Burnett, Frances Hodgson", year: 2008, url: "https://www.gutenberg.org/ebooks/146", characters: 309635, languages: ["en"], subjects: ["Orphans -- Fiction", "Boarding schools -- Fiction", "Schools -- Fiction", "London (England) -- Fiction"], downloads: 1112, rank: 313 }, { title: "My Lady Greensleeves", author: "Pohl, Frederik", year: 2016, url: "https://www.gutenberg.org/ebooks/51310", characters: 69042, languages: ["en"], subjects: [], downloads: 1106, rank: 314 }, { title: "1000 Mythological Characters Briefly Described: Adapted to Private Schools, High Schools and Academies", author: "Ellis, Edward Sylvester", year: 2013, url: "https://www.gutenberg.org/ebooks/42474", characters: 167669, languages: ["en"], subjects: [], downloads: 1102, rank: 315 }, { title: "Women in Love", author: "Lawrence, D. H. (David Herbert)", year: 2003, url: "https://www.gutenberg.org/ebooks/4240", characters: 884117, languages: ["en"], subjects: ["Women -- England -- Fiction", "Male friendship -- Fiction", "Psychological fiction", "Sisters -- Fiction", "Midlands (England) -- Fiction", "Coal mines and mining -- Fiction", "Love stories"], downloads: 1098, rank: 316 }, { title: "An Enemy of the People", author: "Ibsen, Henrik", year: 2e3, url: "https://www.gutenberg.org/ebooks/2446", characters: 152190, languages: ["en"], subjects: ["Springs -- Drama", "Pollution -- Drama", "Social conflict -- Drama", "Physicians -- Drama", "Norwegian drama -- Translations into English"], downloads: 1093, rank: 317 }, { title: "Palmistry for All", author: "Cheiro", year: 2007, url: "https://www.gutenberg.org/ebooks/20480", characters: 205806, languages: ["en"], subjects: ["Palmistry"], downloads: 1089, rank: 318 }, { title: "The Person and Work of The Holy Spirit", author: "Torrey, R. A. (Reuben Archer)", year: 2009, url: "https://www.gutenberg.org/ebooks/30241", characters: 327452, languages: ["en"], subjects: ["Holy Spirit"], downloads: 1088, rank: 319 }, { title: "Best Russian Short Stories", author: "Unknown", year: 2004, url: "https://www.gutenberg.org/ebooks/13437", characters: 459617, languages: ["en"], subjects: ["Short stories, Russian -- Translations into English"], downloads: 1085, rank: 320 }, { title: "Faust: Der Trag\xF6die erster Teil", author: "Goethe, Johann Wolfgang von", year: 2e3, url: "https://www.gutenberg.org/ebooks/2229", characters: 169792, languages: ["de"], subjects: ["German poetry", "Magicians -- Drama", "Legends -- Germany -- Drama", "Faust, -approximately 1540 -- Drama"], downloads: 1085, rank: 321 }, { title: "The Thirty-Nine Steps", author: "Buchan, John", year: 1996, url: "https://www.gutenberg.org/ebooks/558", characters: 181287, languages: ["en"], subjects: ["Hannay, Richard (Fictitious character) -- Fiction", "Intelligence service -- Great Britain -- Fiction", "World War, 1914-1918 -- Fiction", "Spy stories"], downloads: 1082, rank: 322 }, { title: "Webster's Unabridged Dictionary", author: "Various", year: 2009, url: "https://www.gutenberg.org/ebooks/29765", characters: 25029704, languages: ["en"], subjects: ["English language -- Dictionaries"], downloads: 1076, rank: 323 }, { title: "Flatland: A Romance of Many Dimensions (Illustrated)", author: "Abbott, Edwin Abbott", year: 2008, url: "https://www.gutenberg.org/ebooks/201", characters: 170145, languages: ["en"], subjects: ["Fourth dimension"], downloads: 1075, rank: 324 }, { title: "What Is Man? and Other Essays", author: "Twain, Mark", year: 1993, url: "https://www.gutenberg.org/ebooks/70", characters: 456403, languages: ["en"], subjects: ["American essays"], downloads: 1073, rank: 325 }, { title: "The History of Don Quixote, Volume 1, Complete", author: "Cervantes Saavedra, Miguel de", year: 2004, url: "https://www.gutenberg.org/ebooks/5921", characters: 981016, languages: ["en"], subjects: ["Picaresque literature", "Spain -- Social life and customs -- 16th century -- Fiction", "Knights and knighthood -- Spain -- Fiction", "Romances"], downloads: 1071, rank: 326 }, { title: "Right Ho, Jeeves", author: "Wodehouse, P. G. (Pelham Grenville)", year: 2007, url: "https://www.gutenberg.org/ebooks/10554", characters: 349241, languages: ["en"], subjects: ["Humorous stories", "Valets -- Fiction", "Jeeves (Fictitious character) -- Fiction", "Wooster, Bertie (Fictitious character) -- Fiction", "England -- Fiction", "Single men -- Fiction"], downloads: 1068, rank: 327 }, { title: "Dr. Kometevsky's Day", author: "Leiber, Fritz", year: 2016, url: "https://www.gutenberg.org/ebooks/51353", characters: 34655, languages: ["en"], subjects: [], downloads: 1066, rank: 328 }, { title: "The Best American Humorous Short Stories", author: "Unknown", year: 2004, url: "https://www.gutenberg.org/ebooks/10947", characters: 515461, languages: ["en"], subjects: ["Short stories, American"], downloads: 1064, rank: 329 }, { title: "Silas Marner", author: "Eliot, George", year: 1996, url: "https://www.gutenberg.org/ebooks/550", characters: 334752, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Foundlings -- Fiction", "Adopted children -- Fiction", "England -- Fiction", "Domestic fiction", "Weavers -- Fiction"], downloads: 1064, rank: 330 }, { title: "The Vampyre; a Tale", author: "Polidori, John William", year: 2004, url: "https://www.gutenberg.org/ebooks/6087", characters: 62700, languages: ["en"], subjects: ["Vampires -- Fiction", "Horror tales", "Gothic fiction (Literary genre)"], downloads: 1060, rank: 331 }, { title: "Relativity : the Special and General Theory", author: "Einstein, Albert", year: 2004, url: "https://www.gutenberg.org/ebooks/5001", characters: 160050, languages: ["en"], subjects: ["Relativity (Physics)"], downloads: 1053, rank: 332 }, { title: "The Dor\xE9 Bible Gallery, Complete: Containing One Hundred Superb Illustrations, and a Page of Explanatory Letter-press Facing Each", author: "Unknown", year: 2004, url: "https://www.gutenberg.org/ebooks/8710", characters: 159818, languages: ["en"], subjects: ["Bible -- Illustrations"], downloads: 1052, rank: 333 }, { title: "The Literary World Seventh Reader", author: "Unknown", year: 2006, url: "https://www.gutenberg.org/ebooks/19721", characters: 500270, languages: ["en"], subjects: ["Readers"], downloads: 1047, rank: 334 }, { title: "The Innocence of Father Brown", author: "Chesterton, G. K. (Gilbert Keith)", year: 2008, url: "https://www.gutenberg.org/ebooks/204", characters: 376454, languages: ["en"], subjects: ["Brown, Father (Fictitious character) -- Fiction", "Clergy -- Fiction", "Detective and mystery stories, English", "Catholics -- Fiction", "England -- Fiction"], downloads: 1045, rank: 335 }, { title: "Electricity in Locomotion: An Account of its Mechanism, its Achievements, and its Prospects", author: "Whyte, Adam Gowens", year: 2016, url: "https://www.gutenberg.org/ebooks/51242", characters: 150549, languages: ["en"], subjects: [], downloads: 1039, rank: 336 }, { title: "Kim", author: "Kipling, Rudyard", year: 2e3, url: "https://www.gutenberg.org/ebooks/2226", characters: 495285, languages: ["en"], subjects: ["Irish -- India -- Fiction", "Orphans -- Fiction", "Lamas -- Fiction", "Spy stories", "Adventure stories", "India -- Fiction", "Boys -- Fiction"], downloads: 1038, rank: 337 }, { title: "Irish Fairy Tales", author: "Stephens, James", year: 2001, url: "https://www.gutenberg.org/ebooks/2892", characters: 299402, languages: ["en"], subjects: ["Tales -- Ireland", "Fairy tales -- Ireland", "Folklore -- Ireland"], downloads: 1036, rank: 338 }, { title: "My Bondage and My Freedom", author: "Douglass, Frederick", year: 2008, url: "https://www.gutenberg.org/ebooks/202", characters: 652807, languages: ["en"], subjects: ["African American abolitionists -- Biography", "Abolitionists -- United States -- Biography", "Slaves -- Maryland -- Social conditions -- 19th century", "Douglass, Frederick, 1818-1895", "Antislavery movements -- United States -- History -- 19th century", "Fugitive slaves -- Maryland -- Biography", "Plantation life -- Maryland -- History -- 19th century"], downloads: 1034, rank: 339 }, { title: `Captain Cook's Journal During His First Voyage Round the World: Made in H. M. Bark "Endeavour", 1768-71`, author: "Cook, James", year: 2005, url: "https://www.gutenberg.org/ebooks/8106", characters: 1090534, languages: ["en"], subjects: ["Oceania -- Discovery and exploration -- Early works to 1800", "Voyages around the world -- Early works to 1800"], downloads: 1020, rank: 340 }, { title: "Black Beauty", author: "Sewell, Anna", year: 2006, url: "https://www.gutenberg.org/ebooks/271", characters: 254175, languages: ["en"], subjects: ["Great Britain -- History -- 19th century -- Juvenile fiction", "Horses -- Juvenile fiction", "Historical fiction"], downloads: 1015, rank: 341 }, { title: "De Profundis", author: "Wilde, Oscar", year: 2007, url: "https://www.gutenberg.org/ebooks/921", characters: 78829, languages: ["en"], subjects: ["Grief", "Wilde, Oscar, 1854-1900", "Suffering", "Imprisonment"], downloads: 1012, rank: 342 }, { title: "A Discourse Upon the Origin and the Foundation of the Inequality Among Mankind", author: "Rousseau, Jean-Jacques", year: 2004, url: "https://www.gutenberg.org/ebooks/11136", characters: 131967, languages: ["en"], subjects: ["Natural law", "Equality", "Political science"], downloads: 1008, rank: 343 }, { title: "The Middle-Class Gentleman", author: "Moliere", year: 2001, url: "https://www.gutenberg.org/ebooks/2992", characters: 91982, languages: ["en"], subjects: ["Middle class -- France -- Drama", "French drama", "Comedies", "France -- Social life and customs -- 17th century -- Drama"], downloads: 1007, rank: 344 }, { title: "The Alchemist", author: "Jonson, Ben", year: 2003, url: "https://www.gutenberg.org/ebooks/4081", characters: 254512, languages: ["en"], subjects: ["London (England) -- Drama", "English drama (Comedy)", "City and town life -- Drama", "Alchemists -- Drama", "English drama -- 17th century"], downloads: 1002, rank: 345 }, { title: "Poems", author: "Hugo, Victor", year: 2005, url: "https://www.gutenberg.org/ebooks/8775", characters: 357199, languages: ["en"], subjects: ["Hugo, Victor, 1802-1885 -- Translations into English", "French poetry -- Translations into English"], downloads: 1002, rank: 346 }, { title: "The Rape of the Lock and Other Poems", author: "Pope, Alexander", year: 2006, url: "https://www.gutenberg.org/ebooks/9800", characters: 280108, languages: ["en"], subjects: ["English poetry -- 18th century"], downloads: 999, rank: 347 }, { title: "Aesop's Fables: Translated by George Fyler Townsend", author: "Aesop", year: 1991, url: "https://www.gutenberg.org/ebooks/21", characters: 189827, languages: ["en"], subjects: ["Aesop's fables -- Translations into English", "Fables, Greek -- Translations into English"], downloads: 997, rank: 348 }, { title: "Democracy in America \u2014 Volume 2", author: "Tocqueville, Alexis de", year: 2006, url: "https://www.gutenberg.org/ebooks/816", characters: 717199, languages: ["en"], subjects: ["United States -- Social conditions", "Democracy -- United States", "United States -- Politics and government"], downloads: 993, rank: 349 }, { title: "The Story of My Life: With her letters (1887-1901) and a supplementary account of her education, including passages from the reports and letters of her teacher, Anne Mansfield Sullivan, by John Albert Macy", author: "Keller, Helen", year: 2e3, url: "https://www.gutenberg.org/ebooks/2397", characters: 624528, languages: ["en"], subjects: ["Deafblind women -- United States -- Biography", "Keller, Helen, 1880-1968"], downloads: 989, rank: 350 }, { title: "She Stoops to Conquer; Or, The Mistakes of a Night: A Comedy", author: "Goldsmith, Oliver", year: 1995, url: "https://www.gutenberg.org/ebooks/383", characters: 110171, languages: ["en"], subjects: ["Comedies"], downloads: 988, rank: 351 }, { title: "The Scarlet Pimpernel", author: "Orczy, Emmuska Orczy, Baroness", year: 2006, url: "https://www.gutenberg.org/ebooks/60", characters: 416695, languages: ["en"], subjects: ["Historical fiction", "France -- History -- Revolution, 1789-1799 -- Fiction", "Nobility -- Fiction", "Adventure stories", "Blakeney, Percy, Sir (Fictitious character) -- Fiction", "British -- France -- Fiction"], downloads: 988, rank: 352 }, { title: "The Poems and Prose Poems of Charles Baudelaire: with an Introductory Preface by James Huneker", author: "Baudelaire, Charles", year: 2011, url: "https://www.gutenberg.org/ebooks/36287", characters: 142096, languages: ["en"], subjects: ["Prose poems", "French poetry -- Translations into English"], downloads: 987, rank: 353 }, { title: "The Rime of the Ancient Mariner", author: "Coleridge, Samuel Taylor", year: 2006, url: "https://www.gutenberg.org/ebooks/151", characters: 17990, languages: ["en"], subjects: ["Poetry"], downloads: 985, rank: 354 }, { title: "The Frontier in American History", author: "Turner, Frederick Jackson", year: 2007, url: "https://www.gutenberg.org/ebooks/22994", characters: 620157, languages: ["en"], subjects: ["Frontier and pioneer life -- United States", "Frontier thesis", "United States -- History", "United States -- Territorial expansion"], downloads: 985, rank: 355 }, { title: "Moby Dick", author: "Melville, Herman", year: 1991, url: "https://www.gutenberg.org/ebooks/15", characters: 8565, languages: ["en"], subjects: ["Ship captains -- Fiction", "Whaling ships -- Fiction", "Psychological fiction", "Whaling -- Fiction", "Whales -- Fiction", "Mentally ill -- Fiction", "Sea stories", "Adventure stories", "Ahab, Captain (Fictitious character) -- Fiction"], downloads: 984, rank: 356 }, { title: "Buddenbrooks: Verfall einer Familie", author: "Mann, Thomas", year: 2011, url: "https://www.gutenberg.org/ebooks/34811", characters: 1336902, languages: ["de"], subjects: ["Germany -- Fiction", "Domestic fiction", "Families -- Fiction"], downloads: 984, rank: 357 }, { title: "A Little Journey", author: "Bradbury, Ray", year: 2016, url: "https://www.gutenberg.org/ebooks/51171", characters: 12577, languages: ["en"], subjects: ["Older women -- Fiction", "Short stories", "Space flight -- Fiction", "Swindlers and swindling -- Fiction", "Science fiction"], downloads: 984, rank: 358 }, { title: "Vanity Fair", author: "Thackeray, William Makepeace", year: 1996, url: "https://www.gutenberg.org/ebooks/599", characters: 1462802, languages: ["en"], subjects: ["Married women -- Fiction", "Social classes -- Fiction", "Satire", "Waterloo, Battle of, Waterloo, Belgium, 1815 -- Fiction", "England -- Fiction", "Female friendship -- Fiction", "British -- Europe -- Fiction"], downloads: 984, rank: 359 }, { title: "Birds of a Feather", author: "Silverberg, Robert", year: 2016, url: "https://www.gutenberg.org/ebooks/51361", characters: 37623, languages: ["en"], subjects: [], downloads: 979, rank: 360 }, { title: "Autobiography of a Yogi", author: "Yogananda, Paramahansa", year: 2005, url: "https://www.gutenberg.org/ebooks/7452", characters: 808031, languages: ["en"], subjects: ["Yogananda, Paramahansa, 1893-1952", "Yogis -- India -- Biography"], downloads: 975, rank: 361 }, { title: "Nine Thousand Miles On A Pullman Train: An Account of a Tour of Railroad Conductors From; Philadelphia to the Pacific Coast an Return", author: "Shaw, Milton", year: 2016, url: "https://www.gutenberg.org/ebooks/51341", characters: 302305, languages: ["en"], subjects: [], downloads: 969, rank: 362 }, { title: "Dream Psychology: Psychoanalysis for Beginners", author: "Freud, Sigmund", year: 2005, url: "https://www.gutenberg.org/ebooks/15489", characters: 275214, languages: ["en"], subjects: ["Psychoanalysis", "Dreams"], downloads: 957, rank: 363 }, { title: "The Pilot and the Bushman", author: "Jacobs, Sylvia", year: 2016, url: "https://www.gutenberg.org/ebooks/51297", characters: 47170, languages: ["en"], subjects: [], downloads: 957, rank: 364 }, { title: "Beautiful Stories from Shakespeare", author: "Shakespeare, William", year: 1998, url: "https://www.gutenberg.org/ebooks/1430", characters: 233490, languages: ["en"], subjects: ["Shakespeare, William, 1564-1616 -- Stories, plots, etc. -- Juvenile literature", "Children's literature"], downloads: 951, rank: 365 }, { title: "The Works of Edgar Allan Poe \u2014 Volume 3", author: "Poe, Edgar Allan", year: 2008, url: "https://www.gutenberg.org/ebooks/2149", characters: 485441, languages: ["en"], subjects: ["Fantasy fiction", "American fiction -- 19th century", "Horror tales, American"], downloads: 951, rank: 366 }, { title: "Daisy Miller: A Study", author: "James, Henry", year: 2008, url: "https://www.gutenberg.org/ebooks/208", characters: 105557, languages: ["en"], subjects: ["Psychological fiction", "Europe -- Fiction", "Young women -- Fiction", "Americans -- Europe -- Fiction"], downloads: 949, rank: 367 }, { title: "Peter and Wendy", author: "Barrie, J. M. (James Matthew)", year: 2008, url: "https://www.gutenberg.org/ebooks/26654", characters: 219593, languages: ["en"], subjects: ["Fantasy", "Peter Pan (Fictitious character) -- Fiction", "Never-Never Land (Imaginary place) -- Fiction", "Fairies -- Juvenile fiction", "Pirates -- Juvenile fiction"], downloads: 949, rank: 368 }, { title: "Personal Memoirs of U. S. Grant, Complete", author: "Grant, Ulysses S. (Ulysses Simpson)", year: 2006, url: "https://www.gutenberg.org/ebooks/4367", characters: 1376193, languages: ["en"], subjects: ["Grant, Ulysses S. (Ulysses Simpson), 1822-1885", "Presidents -- United States -- Biography", "Generals -- United States -- Biography", "United States. Army -- Biography", "United States -- History -- Civil War, 1861-1865 -- Campaigns", "Mexican War, 1846-1848 -- Personal narratives"], downloads: 949, rank: 369 }, { title: "Trial of the Major War Criminals Before the International Military Tribunal, Vol. I: Nuremburg 14 November 1945-1 October 1946: Vol. I", author: "Various", year: 2016, url: "https://www.gutenberg.org/ebooks/51292", characters: 753801, languages: ["en"], subjects: [], downloads: 949, rank: 370 }, { title: "The Black Man, the Father of Civilization, Proven by Biblical History", author: "Webb, James Morris", year: 2012, url: "https://www.gutenberg.org/ebooks/39509", characters: 45911, languages: ["en"], subjects: ["Blacks in the Bible", "Theological anthropology", "Civilization, Ancient"], downloads: 947, rank: 371 }, { title: "The Autobiography of a Super-Tramp", author: "Davies, W. H. (William Henry)", year: 2016, url: "https://www.gutenberg.org/ebooks/51425", characters: 402904, languages: ["en"], subjects: [], downloads: 947, rank: 372 }, { title: "The Enchiridion", author: "Epictetus", year: 2014, url: "https://www.gutenberg.org/ebooks/45109", characters: 55597, languages: ["en"], subjects: [], downloads: 944, rank: 373 }, { title: "History  of the World War: An Authentic Narrative of the World's Greatest War", author: "March, Francis Andrew", year: 2006, url: "https://www.gutenberg.org/ebooks/18993", characters: 1245446, languages: ["en"], subjects: ["World War, 1914-1918"], downloads: 935, rank: 374 }, { title: "Confidence Game", author: "Harmon, Jim", year: 2016, url: "https://www.gutenberg.org/ebooks/51305", characters: 24701, languages: ["en"], subjects: [], downloads: 932, rank: 375 }, { title: "Confessions of an English Opium-Eater", author: "De Quincey, Thomas", year: 2005, url: "https://www.gutenberg.org/ebooks/2040", characters: 185922, languages: ["en"], subjects: ["De Quincey, Thomas, 1785-1859", "Drug addicts -- Great Britain -- Biography", "Authors, English -- 19th century -- Biography", "Opium abuse -- England"], downloads: 929, rank: 376 }, { title: "The Antichrist", author: "Nietzsche, Friedrich Wilhelm", year: 2006, url: "https://www.gutenberg.org/ebooks/19322", characters: 175159, languages: ["en"], subjects: ["Philosophy, German", "Christianity -- Controversial literature"], downloads: 928, rank: 377 }, { title: "A Short History of the World", author: "Wells, H. G. (Herbert George)", year: 2011, url: "https://www.gutenberg.org/ebooks/35461", characters: 616160, languages: ["en"], subjects: ["World history"], downloads: 928, rank: 378 }, { title: "The Phantom of the Opera", author: "Leroux, Gaston", year: 2008, url: "https://www.gutenberg.org/ebooks/175", characters: 403759, languages: ["en"], subjects: ["Musical fiction", "Paris (France) -- Fiction", "Opera -- Fiction", "Phantom of the Opera (Fictitious character) -- Fiction", "French fiction -- Translations into English", "Composers -- Fiction", "Horror tales"], downloads: 926, rank: 379 }, { title: "Three Contributions to the Theory of Sex", author: "Freud, Sigmund", year: 2005, url: "https://www.gutenberg.org/ebooks/14969", characters: 231813, languages: ["en"], subjects: ["Sex"], downloads: 924, rank: 380 }, { title: "The Varieties of Religious Experience: A Study in Human Nature", author: "James, William", year: 2014, url: "https://www.gutenberg.org/ebooks/621", characters: 929918, languages: ["en"], subjects: ["Religion", "Conversion", "Experience (Religion)", "Philosophy and religion", "Psychology, Religious"], downloads: 923, rank: 381 }, { title: "She", author: "Haggard, H. Rider (Henry Rider)", year: 2006, url: "https://www.gutenberg.org/ebooks/3155", characters: 631201, languages: ["en"], subjects: ["Africa -- Fiction", "Women -- Africa -- Fiction", "Fantasy fiction", "Immortalism -- Fiction", "Adventure stories", "Reincarnation -- Fiction", "Ayesha (Fictitious character : Haggard) -- Fiction", "Love stories"], downloads: 922, rank: 382 }, { title: "1811 Dictionary of the Vulgar Tongue", author: "Grose, Francis", year: 2004, url: "https://www.gutenberg.org/ebooks/5402", characters: 408958, languages: ["en"], subjects: ["English language -- Slang -- Dictionaries"], downloads: 921, rank: 383 }, { title: "Poems by Emily Dickinson, Three Series, Complete", author: "Dickinson, Emily", year: 2004, url: "https://www.gutenberg.org/ebooks/12242", characters: 159828, languages: ["en"], subjects: ["American poetry"], downloads: 920, rank: 384 }, { title: "Poems", author: "Eliot, T. S. (Thomas Stearns)", year: 1998, url: "https://www.gutenberg.org/ebooks/1567", characters: 33384, languages: ["en"], subjects: ["Poetry"], downloads: 920, rank: 385 }, { title: "On Heroes, Hero-Worship, and the Heroic in History", author: "Carlyle, Thomas", year: 1997, url: "https://www.gutenberg.org/ebooks/1091", characters: 428353, languages: ["en"], subjects: ["Heroes", "Hero worship"], downloads: 919, rank: 386 }, { title: "Ang Liham ni Dr. Jose Rizal sa mga Kadalagahan sa Malolos, Bulakan", author: "Rizal, Jose", year: 2005, url: "https://www.gutenberg.org/ebooks/17116", characters: 17765, languages: ["tl"], subjects: ["Rizal, Jos\xE9, 1861-1896 -- Correspondence"], downloads: 918, rank: 387 }, { title: "Patty's Fortune", author: "Wells, Carolyn", year: 2016, url: "https://www.gutenberg.org/ebooks/51354", characters: 251106, languages: ["en"], subjects: [], downloads: 918, rank: 388 }, { title: "The Wars of the Jews; Or, The History of the Destruction of Jerusalem", author: "Josephus, Flavius", year: 2009, url: "https://www.gutenberg.org/ebooks/2850", characters: 1103961, languages: ["en"], subjects: ["Jews -- History"], downloads: 917, rank: 389 }, { title: "The Origin of Species by Means of Natural Selection: Or, the Preservation of Favoured Races in the Struggle for Life, 6th Edition", author: "Darwin, Charles", year: 1999, url: "https://www.gutenberg.org/ebooks/2009", characters: 1082757, languages: ["en"], subjects: ["Evolution (Biology)", "Natural selection"], downloads: 916, rank: 390 }, { title: "The Tempest: The Works of William Shakespeare [Cambridge Edition] [9 vols.]", author: "Shakespeare, William", year: 2007, url: "https://www.gutenberg.org/ebooks/23042", characters: 115771, languages: ["en"], subjects: ["Political refugees -- Drama", "Shipwreck victims -- Drama", "Islands -- Drama", "Tragicomedy", "Spirits -- Drama", "Fathers and daughters -- Drama", "Magicians -- Drama"], downloads: 915, rank: 391 }, { title: "The Ignoble Savages", author: "Smith, Evelyn E.", year: 2016, url: "https://www.gutenberg.org/ebooks/51413", characters: 57952, languages: ["en"], subjects: [], downloads: 915, rank: 392 }, { title: "On the Nature of Things", author: "Lucretius Carus, Titus", year: 1997, url: "https://www.gutenberg.org/ebooks/785", characters: 361744, languages: ["en"], subjects: ["Philosophy, Ancient -- Poetry", "Didactic poetry, Latin -- Translations into English"], downloads: 915, rank: 393 }, { title: "The Outline of Science, Vol. 1 (of 4): A Plain Story Simply Told", author: "Thomson, J. Arthur (John Arthur)", year: 2007, url: "https://www.gutenberg.org/ebooks/20417", characters: 545976, languages: ["en"], subjects: ["Science"], downloads: 913, rank: 394 }, { title: "Pride and Prejudice", author: "Austen, Jane", year: 2013, url: "https://www.gutenberg.org/ebooks/42671", characters: 590445, languages: ["en"], subjects: ["Sisters -- Fiction", "Courtship -- Fiction", "Social classes -- Fiction", "England -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 912, rank: 395 }, { title: "Medea of Euripides", author: "Euripides", year: 2011, url: "https://www.gutenberg.org/ebooks/35451", characters: 97465, languages: ["en"], subjects: ["Medea, consort of Aegeus, King of Athens (Mythological character) -- Drama"], downloads: 910, rank: 396 }, { title: "Volpone; Or, The Fox", author: "Jonson, Ben", year: 2003, url: "https://www.gutenberg.org/ebooks/4039", characters: 258773, languages: ["en"], subjects: ["Venice (Italy) -- Drama", "Satire, English", "Extortion -- Drama", "Inheritance and succession -- Drama", "English drama -- 17th century", "English drama (Comedy)"], downloads: 905, rank: 397 }, { title: "The life of Midhat Pasha; a record of his services, political reforms, banishment, and judicial murder", author: "Ali Haydar Mithat", year: 2016, url: "https://www.gutenberg.org/ebooks/51243", characters: 517455, languages: ["en"], subjects: ["Midhat Pa\u015Fa, 1822-1884", "Statesmen -- Turkey -- Biography"], downloads: 902, rank: 398 }, { title: "Othello", author: "Shakespeare, William", year: 1622, url: "https://www.gutenberg.org/ebooks/2267", characters: 132501, languages: ["en"], subjects: ["Venice (Italy) -- Drama", "Othello (Fictitious character) -- Drama", "Tragedies", "Muslims -- Drama", "Interracial marriage -- Drama", "Jealousy -- Drama"], downloads: 896, rank: 399 }, { title: "The Pride of Jennico: Being a Memoir of Captain Basil Jennico", author: "Castle, Egerton", year: 2016, url: "https://www.gutenberg.org/ebooks/51238", characters: 351110, languages: ["en"], subjects: [], downloads: 896, rank: 400 }, { title: "Make Me An Offer", author: "Blomberg, Con", year: 2016, url: "https://www.gutenberg.org/ebooks/51311", characters: 12414, languages: ["en"], subjects: [], downloads: 894, rank: 401 }, { title: "People Soup", author: "Arkin, Alan", year: 2016, url: "https://www.gutenberg.org/ebooks/51397", characters: 9906, languages: ["en"], subjects: [], downloads: 894, rank: 402 }, { title: "The Mantle, and Other Stories", author: "Gogol, Nikolai Vasilevich", year: 2011, url: "https://www.gutenberg.org/ebooks/36238", characters: 263365, languages: ["en"], subjects: ["Gogol, Nikolai Vasilevich, 1809-1852 -- Translations into English", "Russia -- Social life and customs -- Fiction", "Short stories, Russian -- Translations into English"], downloads: 892, rank: 403 }, { title: "Gorgias", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1672", characters: 280841, languages: ["en"], subjects: ["Classical literature", "Political science -- Early works to 1800", "Ethics -- Early works to 1800"], downloads: 891, rank: 404 }, { title: "The Playboy of the Western World: A Comedy in Three Acts", author: "Synge, J. M. (John Millington)", year: 1998, url: "https://www.gutenberg.org/ebooks/1240", characters: 95664, languages: ["en"], subjects: ["Ireland -- Drama"], downloads: 887, rank: 405 }, { title: "Sea Legs", author: "Quattrocchi, Frank", year: 2016, url: "https://www.gutenberg.org/ebooks/51407", characters: 68820, languages: ["en"], subjects: [], downloads: 887, rank: 406 }, { title: "Phaedo", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1658", characters: 198125, languages: ["en"], subjects: ["Classical literature", "Immortality (Philosophy) -- Early works to 1800"], downloads: 885, rank: 407 }, { title: "Der Tod in Venedig", author: "Mann, Thomas", year: 2004, url: "https://www.gutenberg.org/ebooks/12108", characters: 153092, languages: ["de"], subjects: ["Authors -- Fiction", "Munich (Germany) -- Fiction", "Venice (Italy) -- Fiction"], downloads: 879, rank: 408 }, { title: "Our Mutual Friend", author: "Dickens, Charles", year: 2006, url: "https://www.gutenberg.org/ebooks/883", characters: 1555005, languages: ["en"], subjects: ["Social classes -- Fiction", "Poor families -- Fiction", "Satire", "Deception -- Fiction", "London (England) -- Fiction", "Inheritance and succession -- Fiction", "Love stories"], downloads: 879, rank: 409 }, { title: "The Spicy Sound of Success", author: "Harmon, Jim", year: 2016, url: "https://www.gutenberg.org/ebooks/51351", characters: 27775, languages: ["en"], subjects: [], downloads: 878, rank: 410 }, { title: "Boy Scouts Handbook: The First Edition, 1911", author: "Boy Scouts of America", year: 2009, url: "https://www.gutenberg.org/ebooks/29558", characters: 628536, languages: ["en"], subjects: ["Boy Scouts of America -- Handbooks, manuals, etc.", "Boy Scouts -- United States -- Handbooks, manuals, etc."], downloads: 877, rank: 411 }, { title: "The Ethics of Aristotle", author: "Aristotle", year: 2005, url: "https://www.gutenberg.org/ebooks/8438", characters: 542999, languages: ["en"], subjects: ["Ethics"], downloads: 877, rank: 412 }, { title: "The Great God Pan", author: "Machen, Arthur", year: 1996, url: "https://www.gutenberg.org/ebooks/389", characters: 100144, languages: ["en"], subjects: ["Paranormal fiction", "Horror tales"], downloads: 876, rank: 413 }, { title: "The Writings of Thomas Paine \u2014 Volume 4 (1794-1796): The Age of Reason", author: "Paine, Thomas", year: 2003, url: "https://www.gutenberg.org/ebooks/3743", characters: 344702, languages: ["en"], subjects: ["Rationalism", "Philosophy and religion", "Political science"], downloads: 871, rank: 414 }, { title: "The Works of the Right Honourable Edmund Burke, Vol. 01 (of 12)", author: "Burke, Edmund", year: 2005, url: "https://www.gutenberg.org/ebooks/15043", characters: 765346, languages: ["en"], subjects: ["Great Britain -- Politics and government -- 1760-1820", "Political science -- Early works to 1800"], downloads: 869, rank: 415 }, { title: "Pragmatism: A New Name for Some Old Ways of Thinking", author: "James, William", year: 2004, url: "https://www.gutenberg.org/ebooks/5116", characters: 262817, languages: ["en"], subjects: ["Pragmatism"], downloads: 869, rank: 416 }, { title: "Angel's Egg", author: "Pangborn, Edgar", year: 2016, url: "https://www.gutenberg.org/ebooks/51408", characters: 66288, languages: ["en"], subjects: [], downloads: 868, rank: 417 }, { title: "The Man Who Was Thursday: A Nightmare", author: "Chesterton, G. K. (Gilbert Keith)", year: 1999, url: "https://www.gutenberg.org/ebooks/1695", characters: 275028, languages: ["en"], subjects: ["Allegories", "Detective and mystery stories", "Anarchists -- Fiction", "Police -- Fiction", "London (England) -- Fiction", "Fantasy fiction"], downloads: 867, rank: 418 }, { title: "A Woman of No Importance", author: "Wilde, Oscar", year: 2014, url: "https://www.gutenberg.org/ebooks/854", characters: 108881, languages: ["en"], subjects: ["English drama", "Man-woman relationships -- Drama"], downloads: 866, rank: 419 }, { title: "The History of Herodotus \u2014 Volume 1", author: "Herodotus", year: 2001, url: "https://www.gutenberg.org/ebooks/2707", characters: 746202, languages: ["en"], subjects: ["History, Ancient", "Greece -- History -- To 146 B.C."], downloads: 864, rank: 420 }, { title: "Arms and the Man", author: "Shaw, Bernard", year: 2003, url: "https://www.gutenberg.org/ebooks/3618", characters: 121073, languages: ["en"], subjects: ["Bulgaria -- Drama", "Soldiers -- Bulgaria -- Drama", "Italians -- Bulgaria -- Drama", "Serbo-Bulgarian War, 1885 -- Drama", "War -- Drama", "Love -- Drama", "Man-woman relationships -- Drama"], downloads: 864, rank: 421 }, { title: "The Republic", author: "Plato", year: 2008, url: "https://www.gutenberg.org/ebooks/150", characters: 581468, languages: ["en"], subjects: ["Justice -- Early works to 1800", "Utopias -- Early works to 1800", "Political science -- Early works to 1800"], downloads: 863, rank: 422 }, { title: "Plays by Anton Chekhov, Second Series", author: "Chekhov, Anton Pavlovich", year: 2005, url: "https://www.gutenberg.org/ebooks/7986", characters: 330496, languages: ["en"], subjects: ["Russian drama -- Translations into English", "Chekhov, Anton Pavlovich, 1860-1904 -- Translations into English"], downloads: 863, rank: 423 }, { title: "The Duchess of Malfi", author: "Webster, John", year: 2e3, url: "https://www.gutenberg.org/ebooks/2232", characters: 132336, languages: ["en"], subjects: ["Brothers and sisters -- Drama", "Retribution -- Drama", "Tragedies", "English drama -- 17th century"], downloads: 862, rank: 424 }, { title: "Submarines, Mines and Torpedoes in the War", author: "Domville-Fife, Charles William", year: 2016, url: "https://www.gutenberg.org/ebooks/51347", characters: 141680, languages: ["en"], subjects: [], downloads: 862, rank: 425 }, { title: "Survival Type", author: "Bone, Jesse F. (Jesse Franklin)", year: 2016, url: "https://www.gutenberg.org/ebooks/51395", characters: 42639, languages: ["en"], subjects: [], downloads: 859, rank: 426 }, { title: "A Touch of E Flat", author: "Gibson, Joe", year: 2016, url: "https://www.gutenberg.org/ebooks/51304", characters: 35118, languages: ["en"], subjects: [], downloads: 851, rank: 427 }, { title: "Fresh Air Fiend", author: "Neville, Kris", year: 2016, url: "https://www.gutenberg.org/ebooks/51335", characters: 21618, languages: ["en"], subjects: [], downloads: 851, rank: 428 }, { title: "The Eyes Have It", author: "Dick, Philip K.", year: 2010, url: "https://www.gutenberg.org/ebooks/31516", characters: 5637, languages: ["en"], subjects: ["Science fiction", "Humorous stories", "Short stories"], downloads: 846, rank: 429 }, { title: "King Solomon's Mines", author: "Haggard, H. Rider (Henry Rider)", year: 2005, url: "https://www.gutenberg.org/ebooks/2166", characters: 377979, languages: ["en"], subjects: ["Africa -- Fiction", "Missing persons -- Fiction", "Hunting guides -- Fiction", "Treasure troves -- Fiction", "Adventure stories", "Quatermain, Allan (Fictitious character) -- Fiction", "Diamond mines and mining -- Fiction"], downloads: 840, rank: 430 }, { title: "Beyond the Door", author: "Dick, Philip K.", year: 2009, url: "https://www.gutenberg.org/ebooks/28644", characters: 11601, languages: ["en"], subjects: ["Fantasy", "Short stories"], downloads: 840, rank: 431 }, { title: "What Men Live By, and Other Tales", author: "Tolstoy, Leo, graf", year: 2004, url: "https://www.gutenberg.org/ebooks/6157", characters: 83393, languages: ["en"], subjects: ["Russia -- Fiction", "Peasants -- Russia -- Fiction"], downloads: 836, rank: 432 }, { title: "Der Struwwelpeter: oder lustige Geschichten und drollige Bilder", author: "Hoffmann, Heinrich", year: 2008, url: "https://www.gutenberg.org/ebooks/24571", characters: 17290, languages: ["de"], subjects: ["Children -- Conduct of life -- Juvenile fiction", "Children's poetry, German", "Stories in rhyme", "Children's stories, German", "Picture books for children", "Behavior -- Fiction"], downloads: 835, rank: 433 }, { title: "The Aesop for Children: With pictures by Milo Winter", author: "Aesop", year: 2006, url: "https://www.gutenberg.org/ebooks/19994", characters: 124215, languages: ["en"], subjects: ["Fables", "Aesop's fables -- Adaptations", "Folklore"], downloads: 834, rank: 434 }, { title: "The Possessed (The Devils)", author: "Dostoyevsky, Fyodor", year: 2005, url: "https://www.gutenberg.org/ebooks/8117", characters: 1231093, languages: ["en"], subjects: ["Terrorists -- Russia -- Fiction", "Russia -- Fiction", "Nihilism -- Fiction", "Russia -- Social life and customs -- 1533-1917 -- Fiction"], downloads: 834, rank: 435 }, { title: "The Fairy Tales of Charles Perrault", author: "Perrault, Charles", year: 2009, url: "https://www.gutenberg.org/ebooks/29021", characters: 132804, languages: ["en"], subjects: ["Fairy tales"], downloads: 832, rank: 436 }, { title: "The Secret Garden", author: "Burnett, Frances Hodgson", year: 2005, url: "https://www.gutenberg.org/ebooks/17396", characters: 366551, languages: ["en"], subjects: ["People with disabilities -- Fiction", "Gardens -- Fiction", "Orphans -- Fiction", "Yorkshire (England) -- Fiction"], downloads: 830, rank: 437 }, { title: "The National Geographic Magazine, Vol. II., No. 2, May, 1890", author: "Various", year: 2016, url: "https://www.gutenberg.org/ebooks/51382", characters: 192438, languages: ["en"], subjects: [], downloads: 829, rank: 438 }, { title: "The Journals of Lewis and Clark, 1804-1806", author: "Clark, William", year: 2005, url: "https://www.gutenberg.org/ebooks/8419", characters: 3002163, languages: ["en"], subjects: ["Lewis and Clark Expedition (1804-1806)", "Columbia River -- Description and travel", "Clark, William, 1770-1838", "Missouri River -- Description and travel", "West (U.S.) -- History -- To 1848", "West (U.S.) -- Description and travel", "Lewis, Meriwether, 1774-1809"], downloads: 829, rank: 439 }, { title: "An Enquiry Concerning the Principles of Morals", author: "Hume, David", year: 2010, url: "https://www.gutenberg.org/ebooks/4320", characters: 253234, languages: ["en"], subjects: ["Ethics", "Conduct of life"], downloads: 828, rank: 440 }, { title: "The Iron Heel", author: "London, Jack", year: 2006, url: "https://www.gutenberg.org/ebooks/1164", characters: 428593, languages: ["en"], subjects: ["Revolutions -- Fiction", "Oligarchy -- Fiction", "Science fiction", "Socialism -- Fiction", "Political fiction", "Revolutionaries -- Fiction", "Dystopias -- Fiction"], downloads: 827, rank: 441 }, { title: "A Journal of the Plague Year: Written by a Citizen Who Continued All the While in London", author: "Defoe, Daniel", year: 2006, url: "https://www.gutenberg.org/ebooks/376", characters: 434954, languages: ["en"], subjects: ["Plague -- Fiction", "London (England) -- History -- 17th century -- Fiction", "Historical fiction", "Great Fire, London, England, 1666 -- Fiction"], downloads: 826, rank: 442 }, { title: "Bede's Ecclesiastical History of England", author: "Bede, the Venerable, Saint", year: 2011, url: "https://www.gutenberg.org/ebooks/38326", characters: 884434, languages: ["en"], subjects: ["England -- Church history -- 449-1066"], downloads: 825, rank: 443 }, { title: "As a Man Thinketh", author: "Allen, James", year: 2003, url: "https://www.gutenberg.org/ebooks/4507", characters: 38850, languages: ["en"], subjects: ["New Thought"], downloads: 825, rank: 444 }, { title: "Inside Earth", author: "Anderson, Poul", year: 2016, url: "https://www.gutenberg.org/ebooks/51184", characters: 83833, languages: ["en"], subjects: [], downloads: 825, rank: 445 }, { title: "Bushido, the Soul of Japan", author: "Nitobe, Inazo", year: 2004, url: "https://www.gutenberg.org/ebooks/12096", characters: 169432, languages: ["en"], subjects: ["Japan -- Social life and customs", "Bushido", "Ethics -- Japan", "Samurai -- History", "Japan -- Civilization", "Philosophy, Japanese"], downloads: 821, rank: 446 }, { title: "The Red Room", author: "Wells, H. G. (Herbert George)", year: 2007, url: "https://www.gutenberg.org/ebooks/23218", characters: 18292, languages: ["en"], subjects: ["Short stories"], downloads: 821, rank: 447 }, { title: "The Blue Fairy Book", author: "Lang, Andrew", year: 1996, url: "https://www.gutenberg.org/ebooks/503", characters: 615928, languages: ["en"], subjects: ["Fairy tales", "Folklore"], downloads: 821, rank: 448 }, { title: "Citizen Jell", author: "Shaara, Michael", year: 2016, url: "https://www.gutenberg.org/ebooks/51342", characters: 15310, languages: ["en"], subjects: [], downloads: 821, rank: 449 }, { title: "Nationalism", author: "Tagore, Rabindranath", year: 2012, url: "https://www.gutenberg.org/ebooks/40766", characters: 131561, languages: ["en"], subjects: ["Nationalism"], downloads: 820, rank: 450 }, { title: "Anne of the Island", author: "Montgomery, L. M. (Lucy Maud)", year: 2006, url: "https://www.gutenberg.org/ebooks/51", characters: 364866, languages: ["en"], subjects: ["Universities and colleges -- Fiction", "Self-perception -- Fiction", "Canada -- History -- 1914-1945 -- Fiction", "Orphans -- Fiction", "Prince Edward Island -- History -- 20th century -- Fiction", "Nova Scotia -- History -- 20th century -- Fiction", "Interpersonal relations -- Fiction", "Shirley, Anne (Fictitious character) -- Fiction"], downloads: 819, rank: 451 }, { title: "Villette", author: "Bronte, Charlotte", year: 2005, url: "https://www.gutenberg.org/ebooks/9182", characters: 941477, languages: ["en"], subjects: ["Autobiographical fiction", "British -- Belgium -- Fiction", "Brussels (Belgium) -- Fiction", "Women teachers -- Fiction", "Love stories"], downloads: 819, rank: 452 }, { title: "The Poetical Works of William Wordsworth \u2014 Volume 3", author: "Wordsworth, William", year: 2004, url: "https://www.gutenberg.org/ebooks/12383", characters: 619927, languages: ["en"], subjects: ["English poetry -- 18th century", "English poetry -- 19th century"], downloads: 814, rank: 453 }, { title: "The Mysterious Island", author: "Verne, Jules", year: 1998, url: "https://www.gutenberg.org/ebooks/1268", characters: 959926, languages: ["en"], subjects: ["Islands of the Pacific -- Fiction", "Science fiction", "Castaways -- Fiction", "Adventure stories"], downloads: 813, rank: 454 }, { title: "The Canterville Ghost", author: "Wilde, Oscar", year: 2004, url: "https://www.gutenberg.org/ebooks/14522", characters: 56107, languages: ["en"], subjects: ["England -- Fiction", "Ghosts -- Fiction"], downloads: 812, rank: 455 }, { title: "Prime Difference", author: "Nourse, Alan Edward", year: 2016, url: "https://www.gutenberg.org/ebooks/51321", characters: 23692, languages: ["en"], subjects: [], downloads: 810, rank: 456 }, { title: "Adventures of Sherlock Holmes: Illustrated", author: "Doyle, Arthur Conan", year: 2015, url: "https://www.gutenberg.org/ebooks/48320", characters: 489706, languages: ["en"], subjects: [], downloads: 809, rank: 457 }, { title: "The Man in the Iron Mask", author: "Dumas, Alexandre", year: 2001, url: "https://www.gutenberg.org/ebooks/2759", characters: 859847, languages: ["en"], subjects: ["France -- History -- Louis XIV, 1643-1715 -- Fiction", "Adventure and adventurers -- Fiction", "Swordsmen -- Fiction", "Historical fiction", "Man in the Iron Mask -- Fiction", "Romances"], downloads: 808, rank: 458 }, { title: "Poems and Songs of Robert Burns", author: "Burns, Robert", year: 2005, url: "https://www.gutenberg.org/ebooks/1279", characters: 640138, languages: ["en"], subjects: ["Songs, Scots -- Scotland -- Texts", "Scotland -- Poetry"], downloads: 807, rank: 459 }, { title: "Man in a Quandary", author: "Wesley, Joseph", year: 2016, url: "https://www.gutenberg.org/ebooks/51421", characters: 14989, languages: ["en"], subjects: [], downloads: 804, rank: 460 }, { title: "Opticks: Or, A Treatise of the Reflections, Refractions, Inflections, and Colours of Light", author: "Newton, Isaac, Sir", year: 2010, url: "https://www.gutenberg.org/ebooks/33504", characters: 478682, languages: ["en"], subjects: ["Optics -- Early works to 1800"], downloads: 802, rank: 461 }, { title: "The Gilded Age: A Tale of Today", author: "Twain, Mark", year: 1873, url: "https://www.gutenberg.org/ebooks/3178", characters: 760584, languages: ["en"], subjects: ["Political corruption -- Fiction", "Political fiction", "Satire", "Legislators -- Fiction", "Speculation -- Fiction", "Washington (D.C.) -- Fiction", "Businessmen -- Fiction"], downloads: 800, rank: 462 }, { title: "Memoirs of Extraordinary Popular Delusions and the Madness of Crowds", author: "Mackay, Charles", year: 2008, url: "https://www.gutenberg.org/ebooks/24518", characters: 1396288, languages: ["en"], subjects: ["Investments -- Psychological aspects", "Common fallacies", "Impostors and imposture", "Hallucinations and illusions", "Occultism -- Early works to 1900", "Stock exchanges -- Psychological aspects", "Alchemy", "Delusions", "Swindlers and swindling", "Social psychology"], downloads: 799, rank: 463 }, { title: "The House of the Seven Gables", author: "Hawthorne, Nathaniel", year: 2008, url: "https://www.gutenberg.org/ebooks/77", characters: 527575, languages: ["en"], subjects: ["Paranormal fiction", "Domestic fiction", "Haunted houses -- Fiction", "Historical fiction", "Salem (Mass.) -- Fiction"], downloads: 798, rank: 464 }, { title: "Simple Sabotage Field Manual", author: "United States. Office of Strategic Services", year: 2008, url: "https://www.gutenberg.org/ebooks/26184", characters: 47115, languages: ["en"], subjects: ["Sabotage"], downloads: 797, rank: 465 }, { title: "Life in the Iron-Mills; Or, The Korl Woman", author: "Davis, Rebecca Harding", year: 1997, url: "https://www.gutenberg.org/ebooks/876", characters: 69916, languages: ["en"], subjects: ["Women iron and steel workers -- Fiction", "Feminism -- Fiction"], downloads: 796, rank: 466 }, { title: "Time In the Round", author: "Leiber, Fritz", year: 2016, url: "https://www.gutenberg.org/ebooks/51380", characters: 27588, languages: ["en"], subjects: [], downloads: 794, rank: 467 }, { title: "Anne of Avonlea", author: "Montgomery, L. M. (Lucy Maud)", year: 2006, url: "https://www.gutenberg.org/ebooks/47", characters: 413885, languages: ["en"], subjects: ["Canada -- History -- 1914-1945 -- Fiction", "Orphans -- Fiction", "Prince Edward Island -- History -- 20th century -- Fiction", "Shirley, Anne (Fictitious character) -- Fiction", "Teachers -- Fiction", "Islands -- Fiction"], downloads: 793, rank: 468 }, { title: "Japanese Fairy Tales", author: "Ozaki, Yei Theodora", year: 2003, url: "https://www.gutenberg.org/ebooks/4018", characters: 314871, languages: ["en"], subjects: ["Folklore -- Japan", "Fairy tales -- Japan", "Fairy tales"], downloads: 792, rank: 469 }, { title: "The Monk: A Romance", author: "Lewis, M. G. (Matthew Gregory)", year: 1996, url: "https://www.gutenberg.org/ebooks/601", characters: 675505, languages: ["en"], subjects: ["Monks -- Fiction", "Gothic fiction (Literary genre)", "Madrid (Spain) -- Fiction", "Horror tales"], downloads: 791, rank: 470 }, { title: "Indian Fairy Tales", author: "Unknown", year: 2003, url: "https://www.gutenberg.org/ebooks/7128", characters: 327132, languages: ["en"], subjects: ["Fairy tales -- India", "Folklore -- India", "Fairy tales"], downloads: 791, rank: 471 }, { title: "Historia de Venezuela, Tomo I", author: "Aguado, Pedro de, active 16th century", year: 2012, url: "https://www.gutenberg.org/ebooks/39947", characters: 962119, languages: ["es"], subjects: ["Venezuela -- History -- 1556-1810", "Venezuela -- History -- To 1556"], downloads: 789, rank: 472 }, { title: "Public School Life: Boys Masters Parents", author: "Waugh, Alec", year: 2016, url: "https://www.gutenberg.org/ebooks/51409", characters: 348622, languages: ["en"], subjects: [], downloads: 789, rank: 473 }, { title: "The Campaign in Russian Poland", author: "Standing, Percy Cross", year: 2016, url: "https://www.gutenberg.org/ebooks/51411", characters: 129078, languages: ["en"], subjects: [], downloads: 789, rank: 474 }, { title: "Also sprach Zarathustra: Ein Buch f\xFCr Alle und Keinen", author: "Nietzsche, Friedrich Wilhelm", year: 2005, url: "https://www.gutenberg.org/ebooks/7205", characters: 459296, languages: ["de"], subjects: ["Philosophy, German", "Superman (Philosophical concept)"], downloads: 789, rank: 475 }, { title: "Double Standard", author: "Coppel, Alfred", year: 2016, url: "https://www.gutenberg.org/ebooks/51363", characters: 12222, languages: ["en"], subjects: [], downloads: 788, rank: 476 }, { title: "The Red Record: Tabulated Statistics and Alleged Causes of Lynching in the United States", author: "Wells-Barnett, Ida B.", year: 2005, url: "https://www.gutenberg.org/ebooks/14977", characters: 168129, languages: ["en"], subjects: ["Lynching -- United States", "Lynching -- United States -- Statistics", "African Americans -- History -- 1877-1964"], downloads: 786, rank: 477 }, { title: "The Elementary Forms of the Religious Life", author: "Durkheim, Emile", year: 2012, url: "https://www.gutenberg.org/ebooks/41360", characters: 1104702, languages: ["en"], subjects: ["Religion -- Philosophy", "Religion", "Cults", "Totemism", "Rites and ceremonies"], downloads: 786, rank: 478 }, { title: "The Works of Edgar Allan Poe \u2014 Volume 5", author: "Poe, Edgar Allan", year: 2008, url: "https://www.gutenberg.org/ebooks/2151", characters: 362481, languages: ["en"], subjects: ["Fantasy fiction", "American fiction -- 19th century", "Horror tales, American", "American poetry"], downloads: 784, rank: 479 }, { title: "Paradise Lost", author: "Milton, John", year: 1992, url: "https://www.gutenberg.org/ebooks/26", characters: 400345, languages: ["en"], subjects: ["Eve (Biblical figure) -- Poetry", "Bible. Genesis -- History of Biblical events -- Poetry", "Fall of man -- Poetry", "Adam (Biblical figure) -- Poetry"], downloads: 784, rank: 480 }, { title: "On the Sublime", author: "Longinus, 1st cent.", year: 2006, url: "https://www.gutenberg.org/ebooks/17957", characters: 152599, languages: ["en"], subjects: ["Sublime, The", "Rhetoric, Ancient"], downloads: 782, rank: 481 }, { title: "Break a Leg", author: "Harmon, Jim", year: 2016, url: "https://www.gutenberg.org/ebooks/51320", characters: 37941, languages: ["en"], subjects: [], downloads: 782, rank: 482 }, { title: "The Grand Inquisitor", author: "Dostoyevsky, Fyodor", year: 2005, url: "https://www.gutenberg.org/ebooks/8578", characters: 46747, languages: ["en"], subjects: ["Christian fiction", "Jesus Christ -- Fiction"], downloads: 782, rank: 483 }, { title: "Woodwork Joints: How they are Set Out, How Made and Where Used.", author: "Fairham, William", year: 2007, url: "https://www.gutenberg.org/ebooks/21531", characters: 183815, languages: ["en"], subjects: ["Woodwork", "Carpentry"], downloads: 781, rank: 484 }, { title: "To The Fore With the Tanks!", author: "Westerman, Percy F. (Percy Francis)", year: 2016, url: "https://www.gutenberg.org/ebooks/51332", characters: 245929, languages: ["en"], subjects: [], downloads: 781, rank: 485 }, { title: "Memories of the Kaiser's Court", author: "Topham, Anne", year: 2016, url: "https://www.gutenberg.org/ebooks/51290", characters: 487495, languages: ["en"], subjects: [], downloads: 780, rank: 486 }, { title: "I Am A Nucleus", author: "Barr, Stephen", year: 2016, url: "https://www.gutenberg.org/ebooks/51330", characters: 53745, languages: ["en"], subjects: [], downloads: 778, rank: 487 }, { title: "Turkey; the Awakening of Turkey; the Turkish Revolution of 1908", author: "Knight, E. F. (Edward Frederick)", year: 2016, url: "https://www.gutenberg.org/ebooks/51329", characters: 413277, languages: ["en"], subjects: [], downloads: 777, rank: 488 }, { title: "Not a Creature Was Stirring", author: "Evans, Dean", year: 2016, url: "https://www.gutenberg.org/ebooks/51396", characters: 24512, languages: ["en"], subjects: [], downloads: 777, rank: 489 }, { title: "My Life and Work", author: "Ford, Henry", year: 2005, url: "https://www.gutenberg.org/ebooks/7213", characters: 443582, languages: ["en"], subjects: ["Businesspeople -- United States -- Biography", "Automobiles -- History", "Ford Motor Company -- History", "Industrialists -- United States -- Biography", "Automobile industry and trade -- United States -- History", "Ford, Henry, 1863-1947"], downloads: 776, rank: 490 }, { title: "Siddhartha: eine indische Dichtung", author: "Hesse, Hermann", year: 2001, url: "https://www.gutenberg.org/ebooks/2499", characters: 185055, languages: ["de"], subjects: ["Buddhist philosophy -- Fiction", "Religious fiction", "Buddhism -- Fiction", "India -- Fiction", "Gautama Buddha -- Fiction"], downloads: 770, rank: 491 }, { title: "The Portrait of a Lady \u2014 Volume 1", author: "James, Henry", year: 2001, url: "https://www.gutenberg.org/ebooks/2833", characters: 563153, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Americans -- Italy -- Fiction", "Married women -- Fiction", "Italy -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Psychological fiction", "Inheritance and succession -- Fiction", "Archer, Isabel (Fictitious character) -- Fiction", "Love stories"], downloads: 769, rank: 492 }, { title: "Lord of the World", author: "Benson, Robert Hugh", year: 2004, url: "https://www.gutenberg.org/ebooks/14021", characters: 485539, languages: ["en"], subjects: ["Science fiction", "Second Advent -- Fiction"], downloads: 767, rank: 493 }, { title: "Nature", author: "Emerson, Ralph Waldo", year: 2009, url: "https://www.gutenberg.org/ebooks/29433", characters: 74572, languages: ["en"], subjects: ["Philosophy, American", "Nature"], downloads: 766, rank: 494 }, { title: "Fundamental Principles of the Metaphysic of Morals", author: "Kant, Immanuel", year: 2004, url: "https://www.gutenberg.org/ebooks/5682", characters: 151363, languages: ["en"], subjects: ["Philosophy, German", "Ethics"], downloads: 766, rank: 495 }, { title: "The Shunned House", author: "Lovecraft, H. P. (Howard Phillips)", year: 2010, url: "https://www.gutenberg.org/ebooks/31469", characters: 54824, languages: ["en"], subjects: ["Horror tales, American", "Haunted houses -- Fiction"], downloads: 764, rank: 496 }, { title: "Up from Slavery: An Autobiography", author: "Washington, Booker T.", year: 2e3, url: "https://www.gutenberg.org/ebooks/2376", characters: 356613, languages: ["en"], subjects: ["Washington, Booker T., 1856-1915", "African Americans -- Biography", "Tuskegee Institute", "Educators -- United States -- Biography"], downloads: 763, rank: 497 }, { title: "The Memoirs of Jacques Casanova de Seingalt, 1725-1798. Complete", author: "Casanova, Giacomo", year: 2006, url: "https://www.gutenberg.org/ebooks/2981", characters: 5512413, languages: ["en"], subjects: ["Europe -- History -- 18th century -- Biography", "Casanova, Giacomo, 1725-1798"], downloads: 763, rank: 498 }, { title: "A Tramp Abroad", author: "Twain, Mark", year: 2004, url: "https://www.gutenberg.org/ebooks/119", characters: 751486, languages: ["en"], subjects: ["Walking -- Fiction", "Humorous stories", "Europe -- Fiction", "Americans -- Europe -- Fiction"], downloads: 762, rank: 499 }, { title: "Letters of Pliny", author: "Pliny, the Younger", year: 2001, url: "https://www.gutenberg.org/ebooks/2811", characters: 441595, languages: ["en"], subjects: ["Latin letters -- Translations into English", "Lawyers -- Rome -- Correspondence", "Pliny, the Younger -- Correspondence", "Authors, Latin -- Rome -- Correspondence"], downloads: 760, rank: 500 }, { title: "Helps to Latin Translation at Sight", author: "Luce, Edmund", year: 2009, url: "https://www.gutenberg.org/ebooks/28890", characters: 697584, languages: ["en"], subjects: ["Latin language -- Readers"], downloads: 760, rank: 501 }, { title: "Erotica Romana", author: "Goethe, Johann Wolfgang von", year: 2005, url: "https://www.gutenberg.org/ebooks/7889", characters: 34257, languages: ["en"], subjects: ["German poetry -- Translations into English"], downloads: 760, rank: 502 }, { title: "Voyage to Far N'jurd", author: "Neville, Kris", year: 2016, url: "https://www.gutenberg.org/ebooks/51344", characters: 60102, languages: ["en"], subjects: [], downloads: 759, rank: 503 }, { title: "History of Tom Jones, a Foundling", author: "Fielding, Henry", year: 2004, url: "https://www.gutenberg.org/ebooks/6593", characters: 1672513, languages: ["en"], subjects: ["Humorous stories", "Foundlings -- Fiction", "Bildungsromans", "Identity (Psychology) -- Fiction", "England -- Fiction", "Young men -- Fiction"], downloads: 758, rank: 504 }, { title: "Micrographia: Some Physiological Descriptions of Minute Bodies Made by Magnifying Glasses with Observations and Inquiries Thereupon", author: "Hooke, Robert", year: 2005, url: "https://www.gutenberg.org/ebooks/15491", characters: 742341, languages: ["en"], subjects: ["Microscopy -- Early works to 1800", "Magnifying glasses -- Early works to 1800", "Natural history -- Pre-Linnean works"], downloads: 757, rank: 505 }, { title: "...So They Baked a Cake", author: "Marks, Winston K.", year: 2016, url: "https://www.gutenberg.org/ebooks/51414", characters: 20670, languages: ["en"], subjects: [], downloads: 757, rank: 506 }, { title: "Little Dorrit", author: "Dickens, Charles", year: 1997, url: "https://www.gutenberg.org/ebooks/963", characters: 1608982, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "London (England) -- Fiction", "Children of prisoners -- Fiction", "Debt, Imprisonment for -- Fiction", "Inheritance and succession -- Fiction", "Domestic fiction", "Love stories", "Marshalsea Prison (Southwark, London, England) -- Fiction"], downloads: 757, rank: 507 }, { title: "The Railway Children", author: "Nesbit, E. (Edith)", year: 1999, url: "https://www.gutenberg.org/ebooks/1874", characters: 279395, languages: ["en"], subjects: ["England -- Fiction", "Brothers and sisters -- Fiction", "Country life -- England -- Fiction", "Family life -- Fiction", "Railroads -- Fiction"], downloads: 756, rank: 508 }, { title: "The Beast in the Jungle", author: "James, Henry", year: 2005, url: "https://www.gutenberg.org/ebooks/1093", characters: 86054, languages: ["en"], subjects: ["Conduct of life -- Fiction", "Egoism -- Fiction", "Man-woman relationships -- Fiction", "Fate and fatalism -- Fiction"], downloads: 755, rank: 509 }, { title: "The Autobiography of Benjamin Franklin", author: "Franklin, Benjamin", year: 2008, url: "https://www.gutenberg.org/ebooks/148", characters: 318812, languages: ["en"], subjects: ["Statesmen -- United States -- Biography", "Franklin, Benjamin, 1706-1790"], downloads: 755, rank: 510 }, { title: "Politics: A Treatise on Government", author: "Aristotle", year: 2004, url: "https://www.gutenberg.org/ebooks/6762", characters: 488832, languages: ["en"], subjects: ["Political science -- Early works to 1800"], downloads: 749, rank: 511 }, { title: "Little Black Sambo", author: "Bannerman, Helen", year: 2006, url: "https://www.gutenberg.org/ebooks/17824", characters: 5940, languages: ["en"], subjects: ["India -- Juvenile fiction", "Pride and vanity -- Juvenile fiction", "Tiger -- Juvenile fiction", "Boys -- Juvenile fiction", "Children's stories"], downloads: 748, rank: 512 }, { title: "The Metamorphoses of Ovid, Books I-VII", author: "Ovid", year: 2007, url: "https://www.gutenberg.org/ebooks/21765", characters: 623738, languages: ["en"], subjects: ["Classical literature", "Mythology, Classical -- Poetry", "Latin poetry -- Translations into English", "Metamorphosis -- Mythology -- Poetry", "Fables, Latin -- Translations into English"], downloads: 748, rank: 513 }, { title: "Reflections; or Sentences and Moral Maxims", author: "La Rochefoucauld, Francois duc de", year: 2005, url: "https://www.gutenberg.org/ebooks/9105", characters: 179394, languages: ["en"], subjects: ["Maxims"], downloads: 746, rank: 514 }, { title: "The Man That Corrupted Hadleyburg", author: "Twain, Mark", year: 2005, url: "https://www.gutenberg.org/ebooks/1213", characters: 85953, languages: ["en"], subjects: ["United States -- Social life and customs -- 19th century -- Fiction", "Humorous stories, American"], downloads: 744, rank: 515 }, { title: "The Anglo-Saxon Chronicle", author: "Unknown", year: 1996, url: "https://www.gutenberg.org/ebooks/657", characters: 461915, languages: ["en"], subjects: ["Great Britain -- History -- Anglo-Saxon period, 449-1066 -- Sources", "Anglo-Saxons -- Early works to 1800"], downloads: 743, rank: 516 }, { title: "Amusements in Mathematics", author: "Dudeney, Henry Ernest", year: 2005, url: "https://www.gutenberg.org/ebooks/16713", characters: 779152, languages: ["en"], subjects: ["Puzzles", "Mathematical recreations"], downloads: 742, rank: 517 }, { title: "The Travels of Marco Polo \u2014 Volume 1", author: "Rustichello of Pisa", year: 2004, url: "https://www.gutenberg.org/ebooks/10636", characters: 1673904, languages: ["en"], subjects: ["Voyages and travels", "Polo, Marco, 1254-1323?", "Mongols -- History", "Asia -- Description and travel -- Early works to 1800"], downloads: 741, rank: 518 }, { title: "Herland", author: "Gilman, Charlotte Perkins", year: 1992, url: "https://www.gutenberg.org/ebooks/32", characters: 255637, languages: ["en"], subjects: ["Women -- Fiction", "Black humor", "Utopian fiction", "Utopias -- Fiction"], downloads: 740, rank: 519 }, { title: "Etiquette", author: "Post, Emily", year: 2004, url: "https://www.gutenberg.org/ebooks/14314", characters: 994302, languages: ["en"], subjects: ["Etiquette"], downloads: 739, rank: 520 }, { title: "Darkwater: Voices from Within the Veil", author: "Du Bois, W. E. B. (William Edward Burghardt)", year: 2005, url: "https://www.gutenberg.org/ebooks/15210", characters: 333620, languages: ["en"], subjects: ["United States -- Race relations", "African Americans"], downloads: 738, rank: 521 }, { title: "Poems Every Child Should Know: The What-Every-Child-Should-Know-Library", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/16436", characters: 322257, languages: ["en"], subjects: ["English poetry", "American poetry"], downloads: 736, rank: 522 }, { title: "The History of the Highland Clearances: Second Edition, Altered and Revised", author: "Mackenzie, Alexander", year: 2016, url: "https://www.gutenberg.org/ebooks/51271", characters: 503206, languages: ["en"], subjects: ["Highlands (Scotland) -- History", "Land tenure -- Scotland Highlands"], downloads: 736, rank: 523 }, { title: `Prisoner of the Mill: or, Captain Hayward's "Body Guard"`, author: "Hazelton, Harry", year: 2016, url: "https://www.gutenberg.org/ebooks/51318", characters: 165015, languages: ["en"], subjects: [], downloads: 736, rank: 524 }, { title: "Lex", author: "Haggert, W. T.", year: 2016, url: "https://www.gutenberg.org/ebooks/51362", characters: 37267, languages: ["en"], subjects: [], downloads: 736, rank: 525 }, { title: "The R\xE1m\xE1yan of V\xE1lm\xEDki, translated into English verse", author: "Valmiki", year: 2008, url: "https://www.gutenberg.org/ebooks/24869", characters: 1980031, languages: ["en"], subjects: ["Rama (Hindu deity) -- Poetry", "Epic poetry, Sanskrit -- Translations into English", "Folklore -- India"], downloads: 735, rank: 526 }, { title: "Human, All Too Human: A Book for Free Spirits", author: "Nietzsche, Friedrich Wilhelm", year: 2011, url: "https://www.gutenberg.org/ebooks/38145", characters: 190232, languages: ["en"], subjects: ["Human beings"], downloads: 735, rank: 527 }, { title: "The Girls From Earth", author: "Robinson, Frank M.", year: 2016, url: "https://www.gutenberg.org/ebooks/51268", characters: 35694, languages: ["en"], subjects: [], downloads: 735, rank: 528 }, { title: "Father Goriot", author: "Balzac, Honore de", year: 1998, url: "https://www.gutenberg.org/ebooks/1237", characters: 485775, languages: ["en"], subjects: ["Paris (France) -- Fiction", "Older men -- Fiction", "French fiction -- Translations into English", "France -- History -- Louis XVIII, 1814-1824 -- Fiction", "Fathers and daughters -- Fiction"], downloads: 734, rank: 529 }, { title: "Le Morte d'Arthur: Volume 2", author: "Malory, Thomas, Sir", year: 1998, url: "https://www.gutenberg.org/ebooks/1252", characters: 819850, languages: ["en"], subjects: ["Arthur, King -- Legends", "Arthurian romances"], downloads: 732, rank: 530 }, { title: "The Analysis of Mind", author: "Russell, Bertrand", year: 2001, url: "https://www.gutenberg.org/ebooks/2529", characters: 446852, languages: ["en"], subjects: ["Knowledge, Theory of", "Consciousness", "Psychology"], downloads: 730, rank: 531 }, { title: "The Power of Mesmerism: A Highly Erotic Narrative of Voluptuous Facts and Fancies", author: "Anonymous", year: 2009, url: "https://www.gutenberg.org/ebooks/28521", characters: 121976, languages: ["en"], subjects: ["Erotic stories"], downloads: 729, rank: 532 }, { title: "No Substitutions", author: "Harmon, Jim", year: 2016, url: "https://www.gutenberg.org/ebooks/51350", characters: 28500, languages: ["en"], subjects: [], downloads: 729, rank: 533 }, { title: "Growing Up On Big Muddy", author: "De Vet, Charles V. (Charles Vincent)", year: 2016, url: "https://www.gutenberg.org/ebooks/51398", characters: 27406, languages: ["en"], subjects: [], downloads: 729, rank: 534 }, { title: "Omens and Superstitions of Southern India", author: "Thurston, Edgar", year: 2011, url: "https://www.gutenberg.org/ebooks/35690", characters: 461876, languages: ["en"], subjects: ["Folklore -- India", "Occultism -- India, South", "Omens", "Dravidians -- Folklore", "Superstition -- India, South"], downloads: 724, rank: 535 }, { title: "Lady Windermere's Fan", author: "Wilde, Oscar", year: 2014, url: "https://www.gutenberg.org/ebooks/790", characters: 97694, languages: ["en"], subjects: ["Mothers and daughters -- Drama", "Aristocracy (Social class) -- Drama", "Marriage -- Drama"], downloads: 724, rank: 536 }, { title: "Shakespeare's Sonnets", author: "Shakespeare, William", year: 1997, url: "https://www.gutenberg.org/ebooks/1041", characters: 82358, languages: ["en"], subjects: ["Sonnets, English", "English poetry"], downloads: 723, rank: 537 }, { title: "The Mentor: The Metropolitan Museum of Art, Vol. 6, Num. 9, Serial No. 157, June 15, 1918", author: "Noe, Sydney P.", year: 2016, url: "https://www.gutenberg.org/ebooks/51340", characters: 49637, languages: ["en"], subjects: [], downloads: 723, rank: 538 }, { title: "Tender Buttons: Objects\u2014Food\u2014Rooms", author: "Stein, Gertrude", year: 2005, url: "https://www.gutenberg.org/ebooks/15396", characters: 68339, languages: ["en"], subjects: ["Prose poems"], downloads: 722, rank: 539 }, { title: "The Underground Railroad: A Record of Facts, Authentic Narratives, Letters, &c., Narrating the Hardships, Hair-Breadth Escapes and Death Struggles of the Slaves in Their Efforts for Freedom, As Related by Themselves and Others, or Witnessed by the Author.", author: "Still, William", year: 2005, url: "https://www.gutenberg.org/ebooks/15263", characters: 1969355, languages: ["en"], subjects: ["Fugitive slaves -- United States -- Biography", "Fugitive slaves -- United States -- History -- 19th century", "Underground Railroad", "Antislavery movements -- United States -- History -- 19th century", "Abolitionists -- United States -- Biography"], downloads: 721, rank: 540 }, { title: "Nicholas Nickleby", author: "Dickens, Charles", year: 2006, url: "https://www.gutenberg.org/ebooks/967", characters: 1592784, languages: ["en"], subjects: ["England -- Social life and customs -- 19th century -- Fiction", "Theatrical companies -- Fiction", "Poor families -- Fiction", "Bildungsromans", "Picaresque literature", "England -- Fiction", "Boarding schools -- Fiction", "Young men -- Fiction"], downloads: 721, rank: 541 }, { title: "Jude the Obscure", author: "Hardy, Thomas", year: 1994, url: "https://www.gutenberg.org/ebooks/153", characters: 686001, languages: ["en"], subjects: ["Unmarried couples -- Fiction", "Wessex (England) -- Fiction", "Illegitimate children -- Fiction", "Love stories", "Children -- Death -- Fiction", "Didactic fiction", "Stonemasons -- Fiction", "Adultery -- Fiction"], downloads: 720, rank: 542 }, { title: "Daddy-Long-Legs", author: "Webster, Jean", year: 2008, url: "https://www.gutenberg.org/ebooks/157", characters: 174193, languages: ["en"], subjects: ["Universities and colleges -- Fiction", "Schools -- Fiction", "Philanthropists -- Fiction", "Epistolary fiction", "Orphans -- Fiction", "Bildungsromans", "Women college students -- Fiction", "Letters -- Fiction", "Boarding schools -- Fiction", "Women authors -- Fiction", "Young women -- Fiction", "Love stories"], downloads: 718, rank: 543 }, { title: "The Tenant of Wildfell Hall", author: "Bronte, Anne", year: 2010, url: "https://www.gutenberg.org/ebooks/969", characters: 798839, languages: ["en"], subjects: ["Married women -- Fiction", "Landlord and tenant -- Fiction", "Alcoholics -- Fiction", "England -- Social life and customs -- 19th century -- Fiction", "England -- Fiction", "Domestic fiction"], downloads: 718, rank: 544 }, { title: "Fifteen Thousand Useful Phrases: A Practical Handbook Of Pertinent Expressions, Striking Similes, Literary, Commercial, Conversational, And Oratorical Terms, For The Embellishment Of Speech And Literature, And The Improvement Of The Vocabulary Of Those Persons Who Read, Write, And Speak English", author: "Kleiser, Grenville", year: 2006, url: "https://www.gutenberg.org/ebooks/18362", characters: 496119, languages: ["en"], subjects: ["English language -- Terms and phrases"], downloads: 717, rank: 545 }, { title: "Plain Living: A Bush Idyll", author: "Boldrewood, Rolf", year: 2016, url: "https://www.gutenberg.org/ebooks/51404", characters: 381201, languages: ["en"], subjects: [], downloads: 717, rank: 546 }, { title: "On the Duty of Civil Disobedience", author: "Thoreau, Henry David", year: 2004, url: "https://www.gutenberg.org/ebooks/71", characters: 43665, languages: ["en"], subjects: ["Government, Resistance to", "Civil disobedience"], downloads: 717, rank: 547 }, { title: "The Man Who Would Be King", author: "Kipling, Rudyard", year: 2005, url: "https://www.gutenberg.org/ebooks/8147", characters: 64923, languages: ["en"], subjects: ["Political fiction", "Kings and rulers -- Fiction", "British -- Afghanistan -- Fiction", "Afghanistan -- Fiction"], downloads: 714, rank: 548 }, { title: "Orthodoxy", author: "Chesterton, G. K. (Gilbert Keith)", year: 1994, url: "https://www.gutenberg.org/ebooks/130", characters: 300901, languages: ["en"], subjects: ["Christianity -- Essence, genius, nature", "Apologetics", "Chesterton, G. K. (Gilbert Keith), 1874-1936"], downloads: 713, rank: 549 }, { title: "The Tragedy of Macbeth", author: "Shakespeare, William", year: 1623, url: "https://www.gutenberg.org/ebooks/1129", characters: 89223, languages: ["en"], subjects: ["Scotland -- Kings and rulers -- Drama", "Tragedies", "Macbeth, King of Scotland, active 11th century -- Drama", "Regicides -- Drama"], downloads: 712, rank: 550 }, { title: "Boswell's Life of Johnson: Abridged and edited, with an introduction by Charles Grosvenor Osgood", author: "Boswell, James", year: 2006, url: "https://www.gutenberg.org/ebooks/1564", characters: 1037653, languages: ["en"], subjects: ["Johnson, Samuel, 1709-1784", "Critics -- Great Britain -- Biography", "Lexicographers -- Great Britain -- Biography", "Authors, English -- 18th century -- Biography"], downloads: 712, rank: 551 }, { title: "License to Steal", author: "Newman, Louis", year: 2016, url: "https://www.gutenberg.org/ebooks/51420", characters: 17803, languages: ["en"], subjects: [], downloads: 710, rank: 552 }, { title: "A Queen of Tears, vol. 1 of 2: Caroline Matilda, Queen of Denmark and Norway and Princess; of Great Britain and Ireland", author: "Wilkins, W. H. (William Henry)", year: 2016, url: "https://www.gutenberg.org/ebooks/51368", characters: 462143, languages: ["en"], subjects: [], downloads: 709, rank: 553 }, { title: "The Music Master of Babylon", author: "Pangborn, Edgar", year: 2016, url: "https://www.gutenberg.org/ebooks/51379", characters: 52077, languages: ["en"], subjects: [], downloads: 704, rank: 554 }, { title: "Sonnets from the Portuguese", author: "Browning, Elizabeth Barrett", year: 2004, url: "https://www.gutenberg.org/ebooks/2002", characters: 25781, languages: ["en"], subjects: ["Sonnets, English", "Love poetry, English"], downloads: 696, rank: 555 }, { title: "Essays of Schopenhauer", author: "Schopenhauer, Arthur", year: 2004, url: "https://www.gutenberg.org/ebooks/11945", characters: 362987, languages: ["en"], subjects: ["Philosophy, German"], downloads: 693, rank: 556 }, { title: "A Midsummer Night's Dream", author: "Shakespeare, William", year: 1600, url: "https://www.gutenberg.org/ebooks/2242", characters: 83258, languages: ["en"], subjects: ["Athens (Greece) -- Drama", "Courtship -- Drama", "Fairy plays", "Comedies"], downloads: 692, rank: 557 }, { title: "The Principles of Chemistry Volume I (of 2)", author: "Mendeleyev, Dmitry Ivanovich", year: 2016, url: "https://www.gutenberg.org/ebooks/51326", characters: 1932265, languages: ["en"], subjects: [], downloads: 691, rank: 558 }, { title: "The Tragedy of Julius Caesar", author: "Shakespeare, William", year: 1623, url: "https://www.gutenberg.org/ebooks/1120", characters: 99045, languages: ["en"], subjects: ["Caesar, Julius -- Assassination -- Drama", "Tragedies", "Conspiracies -- Drama", "Rome -- History -- Civil War, 43-31 B.C. -- Drama", "Brutus, Marcus Junius, 85 B.C.?-42 B.C. -- Drama", "Assassins -- Drama"], downloads: 689, rank: 559 }, { title: "Grimm's Fairy Stories", author: "Grimm, Jacob", year: 2004, url: "https://www.gutenberg.org/ebooks/11027", characters: 224364, languages: ["en"], subjects: ["Fairy tales", "Fairy tales -- Germany"], downloads: 688, rank: 560 }, { title: "Memoirs of Napoleon Bonaparte \u2014 Complete", author: "Bourrienne, Louis Antoine Fauvelet de", year: 2006, url: "https://www.gutenberg.org/ebooks/3567", characters: 2454011, languages: ["en"], subjects: ["Private secretaries -- France -- Biography", "Napoleon I, Emperor of the French, 1769-1821 -- Contemporaries", "Napoleon I, Emperor of the French, 1769-1821", "Bourrienne, Louis Antoine Fauvelet de, 1769-1834", "Napoleon I, Emperor of the French, 1769-1821 -- Relations with private secretaries"], downloads: 688, rank: 561 }, { title: "The Influence of Sea Power Upon History, 1660-1783", author: "Mahan, A. T. (Alfred Thayer)", year: 2004, url: "https://www.gutenberg.org/ebooks/13529", characters: 1076282, languages: ["en"], subjects: ["Sea-power", "Naval history, Modern"], downloads: 687, rank: 562 }, { title: "The Wendigo", author: "Blackwood, Algernon", year: 2004, url: "https://www.gutenberg.org/ebooks/10897", characters: 91490, languages: ["en"], subjects: ["Horror tales"], downloads: 686, rank: 563 }, { title: "Swenson, Dispatcher", author: "Miller, R. DeWitt", year: 2016, url: "https://www.gutenberg.org/ebooks/51331", characters: 40224, languages: ["en"], subjects: [], downloads: 686, rank: 564 }, { title: "A Dog Day: or The Angel in the House", author: "Emanuel, Walter", year: 2016, url: "https://www.gutenberg.org/ebooks/51306", characters: 9778, languages: ["en"], subjects: [], downloads: 685, rank: 565 }, { title: "In Praise of Folly: Illustrated with Many Curious Cuts", author: "Erasmus, Desiderius", year: 2009, url: "https://www.gutenberg.org/ebooks/30201", characters: 218530, languages: ["en"], subjects: ["Folly -- Early works to 1800"], downloads: 684, rank: 566 }, { title: "Cautionary Tales for Children", author: "Belloc, Hilaire", year: 2008, url: "https://www.gutenberg.org/ebooks/27424", characters: 14885, languages: ["en"], subjects: ["Conduct of life -- Juvenile poetry", "Children's poetry, English"], downloads: 681, rank: 567 }, { title: "Cookery and Dining in Imperial Rome", author: "Apicius", year: 2009, url: "https://www.gutenberg.org/ebooks/29728", characters: 573945, languages: ["en"], subjects: ["Cookbooks", "Cooking, Roman -- Early works to 1800"], downloads: 681, rank: 568 }, { title: "Famous Modern Ghost Stories", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/15143", characters: 451838, languages: ["en"], subjects: ["Ghost stories", "Short stories"], downloads: 680, rank: 569 }, { title: "The Book of Household Management", author: "Beeton, Mrs. (Isabella Mary)", year: 2003, url: "https://www.gutenberg.org/ebooks/10136", characters: 2569503, languages: ["en"], subjects: ["Cooking, English", "Home economics"], downloads: 679, rank: 570 }, { title: "The Economic Consequences of the Peace", author: "Keynes, John Maynard", year: 2005, url: "https://www.gutenberg.org/ebooks/15776", characters: 362587, languages: ["en"], subjects: ["Economic history -- 1918-1945", "Treaty of Versailles (1919)", "World War, 1914-1918 -- Economic aspects"], downloads: 679, rank: 571 }, { title: "A General History of the Pyrates:: from their first rise and settlement in the island of Providence, to the present time", author: "Defoe, Daniel", year: 2012, url: "https://www.gutenberg.org/ebooks/40580", characters: 633069, languages: ["en"], subjects: ["Pirates -- Early works to 1800"], downloads: 677, rank: 572 }, { title: "Stories from The Arabian Nights", author: "Housman, Laurence", year: 2016, url: "https://www.gutenberg.org/ebooks/51432", characters: 134089, languages: ["en"], subjects: [], downloads: 676, rank: 573 }, { title: "The Story of Doctor Dolittle", author: "Lofting, Hugh", year: 1996, url: "https://www.gutenberg.org/ebooks/501", characters: 119068, languages: ["en"], subjects: ["Fantasy", "Animals -- Juvenile fiction"], downloads: 675, rank: 574 }, { title: "Manners, Customs, and Dress During the Middle Ages and During the Renaissance Period", author: "Jacob, P. L.", year: 2004, url: "https://www.gutenberg.org/ebooks/10940", characters: 820838, languages: ["en"], subjects: ["Renaissance", "Manners and customs", "Clothing and dress", "Middle Ages"], downloads: 674, rank: 575 }, { title: "Cicero's Tusculan Disputations: Also, Treatises On The Nature Of The Gods, And On The Commonwealth", author: "Cicero, Marcus Tullius", year: 2005, url: "https://www.gutenberg.org/ebooks/14988", characters: 876187, languages: ["en"], subjects: ["Rome -- Politics and government -- 265-30 B.C.", "Happiness -- Early works to 1800", "Theology -- Early works to 1800", "Gods, Roman -- Early works to 1800", "State, The -- Early works to 1800", "Political science -- Early works to 1800"], downloads: 674, rank: 576 }, { title: "The Complete Plays of Gilbert and Sullivan", author: "Gilbert, W. S. (William Schwenck)", year: 1997, url: "https://www.gutenberg.org/ebooks/808", characters: 814526, languages: ["en"], subjects: ["Operas -- Librettos"], downloads: 671, rank: 577 }, { title: "Sir Gawayne and the Green Knight: An Alliterative Romance-Poem (c. 1360 A.D.)", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/14568", characters: 181520, languages: ["en", "enm"], subjects: ["Arthurian romances", "Gawain (Legendary character) -- Romances"], downloads: 669, rank: 578 }, { title: "The Book of the Thousand Nights and a Night \u2014 Volume 01", author: "Unknown", year: 2003, url: "https://www.gutenberg.org/ebooks/3435", characters: 802408, languages: ["en"], subjects: ["Tales -- Arab countries", "Fairy tales"], downloads: 667, rank: 579 }, { title: "Composition", author: "Dow, Arthur Wesley", year: 2014, url: "https://www.gutenberg.org/ebooks/45410", characters: 124599, languages: ["en"], subjects: [], downloads: 667, rank: 580 }, { title: "The Ballad of the White Horse", author: "Chesterton, G. K. (Gilbert Keith)", year: 1999, url: "https://www.gutenberg.org/ebooks/1719", characters: 80392, languages: ["en"], subjects: ["Christian poetry", "Historical poetry", "Great Britain -- History -- Alfred, 871-899 -- Poetry", "Epic poetry", "Alfred, King of England, 849-899 -- Poetry", "White Horse, Vale of (England) -- Poetry"], downloads: 666, rank: 581 }, { title: "Phaedra", author: "Racine, Jean", year: 1999, url: "https://www.gutenberg.org/ebooks/1977", characters: 67979, languages: ["en"], subjects: ["Phaedra (Greek mythology) -- Drama", "Tragedies"], downloads: 665, rank: 582 }, { title: "Man of Distinction", author: "Shaara, Michael", year: 2016, url: "https://www.gutenberg.org/ebooks/51288", characters: 10770, languages: ["en"], subjects: [], downloads: 665, rank: 583 }, { title: "The Mill on the Floss", author: "Eliot, George", year: 2004, url: "https://www.gutenberg.org/ebooks/6688", characters: 977083, languages: ["en"], subjects: ["Conflict of generations -- Fiction", "England -- Fiction", "Water mills -- Fiction", "Young women -- Fiction", "Vendetta -- Fiction", "Brothers and sisters -- Fiction", "Loss (Psychology) -- Fiction", "Domestic fiction", "Psychological fiction", "Love stories"], downloads: 663, rank: 584 }, { title: "Lord Jim", author: "Conrad, Joseph", year: 2006, url: "https://www.gutenberg.org/ebooks/5658", characters: 601440, languages: ["en"], subjects: ["Psychological fiction", "Indonesia -- Fiction", "British -- Indonesia -- Fiction", "Atonement -- Fiction", "Merchant marine -- Officers -- Fiction", "Cowardice -- Fiction"], downloads: 662, rank: 585 }, { title: "The Piazza Tales", author: "Melville, Herman", year: 2005, url: "https://www.gutenberg.org/ebooks/15859", characters: 401166, languages: ["en"], subjects: ["Manners and customs -- Fiction", "Short stories"], downloads: 659, rank: 586 }, { title: "A Treatise on Painting", author: "Leonardo, da Vinci", year: 2014, url: "https://www.gutenberg.org/ebooks/46915", characters: 359364, languages: ["en"], subjects: ["Drawing -- Technique -- Early works to 1800", "Painting -- Technique -- Early works to 1800", "Leonardo, da Vinci, 1452-1519"], downloads: 659, rank: 587 }, { title: "A Christmas Carol", author: "Dickens, Charles", year: 2006, url: "https://www.gutenberg.org/ebooks/19337", characters: 139805, languages: ["en"], subjects: ["Ghost stories", "Scrooge, Ebenezer (Fictitious character) -- Fiction", "Poor families -- Fiction", "Christmas stories", "London (England) -- Fiction", "Misers -- Fiction", "Sick children -- Fiction"], downloads: 658, rank: 588 }, { title: "A Shropshire Lad", author: "Housman, A. E. (Alfred Edward)", year: 2004, url: "https://www.gutenberg.org/ebooks/5720", characters: 42616, languages: ["en"], subjects: ["Shropshire (England) -- Poetry"], downloads: 658, rank: 589 }, { title: "The Will to Believe, and Other Essays in Popular Philosophy", author: "James, William", year: 2009, url: "https://www.gutenberg.org/ebooks/26659", characters: 507099, languages: ["en"], subjects: ["Essays", "Philosophy", "Belief and doubt"], downloads: 655, rank: 590 }, { title: "Love and Freindship [sic]", author: "Austen, Jane", year: 1998, url: "https://www.gutenberg.org/ebooks/1212", characters: 157906, languages: ["en"], subjects: ["Epistolary fiction", "Essays", "England -- Social life and customs -- 18th century -- Fiction"], downloads: 654, rank: 591 }, { title: "Slaveholding: Weighed in the Balance of Truth", author: "Fitch, Charles", year: 2016, url: "https://www.gutenberg.org/ebooks/51371", characters: 48382, languages: ["en"], subjects: [], downloads: 654, rank: 592 }, { title: "Oedipus King of Thebes: Translated into English Rhyming Verse with Explanatory Notes", author: "Sophocles", year: 2008, url: "https://www.gutenberg.org/ebooks/27673", characters: 89076, languages: ["en"], subjects: ["Tragedies", "Oedipus (Greek mythological figure) -- Drama"], downloads: 652, rank: 593 }, { title: "Bullet With His Name", author: "Leiber, Fritz", year: 2016, url: "https://www.gutenberg.org/ebooks/51436", characters: 59235, languages: ["en"], subjects: [], downloads: 652, rank: 594 }, { title: "Emile", author: "Rousseau, Jean-Jacques", year: 2004, url: "https://www.gutenberg.org/ebooks/5427", characters: 1160348, languages: ["en"], subjects: ["Education -- Early works to 1800"], downloads: 652, rank: 595 }, { title: "Myths of the Norsemen: From the Eddas and Sagas", author: "Guerber, H. A. (Helene Adeline)", year: 2009, url: "https://www.gutenberg.org/ebooks/28497", characters: 503971, languages: ["en"], subjects: ["Mythology, Norse"], downloads: 650, rank: 596 }, { title: "The Golden Bough: A Study of Magic and Religion", author: "Frazer, James George", year: 2003, url: "https://www.gutenberg.org/ebooks/3623", characters: 1933100, languages: ["en"], subjects: ["Religion", "Mythology", "Magic", "Superstition"], downloads: 650, rank: 597 }, { title: "How the Other Half Lives: Studies Among the Tenements of New York", author: "Riis, Jacob A. (Jacob August)", year: 2014, url: "https://www.gutenberg.org/ebooks/45502", characters: 394043, languages: ["en"], subjects: [], downloads: 649, rank: 598 }, { title: "Romeo and Juliet", author: "Shakespeare, William", year: 1597, url: "https://www.gutenberg.org/ebooks/1513", characters: 125550, languages: ["en"], subjects: ["Romeo (Fictitious character) -- Drama", "Verona (Italy) -- Drama", "Conflict of generations -- Drama", "Juliet (Fictitious character) -- Drama", "Vendetta -- Drama", "Youth -- Drama"], downloads: 648, rank: 599 }, { title: "Mark Twain's Speeches", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/3188", characters: 425130, languages: ["en"], subjects: ["Speeches, addresses, etc., American"], downloads: 648, rank: 600 }, { title: "The Man with Two Left Feet, and Other Stories", author: "Wodehouse, P. G. (Pelham Grenville)", year: 2005, url: "https://www.gutenberg.org/ebooks/7471", characters: 327280, languages: ["en"], subjects: ["Humorous stories, English", "Short stories"], downloads: 648, rank: 601 }, { title: "M\xE4rchen f\xFCr Kinder", author: "Andersen, H. C. (Hans Christian)", year: 2006, url: "https://www.gutenberg.org/ebooks/19163", characters: 301721, languages: ["de"], subjects: ["Fairy tales -- Denmark"], downloads: 645, rank: 602 }, { title: "Sense and Sensibility", author: "Austen, Jane", year: 2007, url: "https://www.gutenberg.org/ebooks/21839", characters: 591337, languages: ["en"], subjects: ["Gentry -- England -- Fiction", "Sisters -- Fiction", "Social classes -- Fiction", "England -- Social life and customs -- 19th century -- Fiction", "England -- Fiction", "Mate selection -- Fiction", "Regency fiction", "Inheritance and succession -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 645, rank: 603 }, { title: "Fairy Tales of Hans Christian Andersen", author: "Andersen, H. C. (Hans Christian)", year: 2008, url: "https://www.gutenberg.org/ebooks/27200", characters: 1692906, languages: ["en"], subjects: ["Fairy tales -- Denmark", "Fairy tales", "Short stories", "Children's stories, Danish -- Translations into English"], downloads: 645, rank: 604 }, { title: "Illustrated History of Furniture: From the Earliest to the Present Time", author: "Litchfield, Frederick", year: 2004, url: "https://www.gutenberg.org/ebooks/12254", characters: 410770, languages: ["en"], subjects: ["Furniture -- History"], downloads: 644, rank: 605 }, { title: "End as a Hero", author: "Laumer, Keith", year: 2016, url: "https://www.gutenberg.org/ebooks/51267", characters: 59894, languages: ["en"], subjects: [], downloads: 644, rank: 606 }, { title: "Hafiz in London", author: "Hafiz, 14th cent.", year: 2016, url: "https://www.gutenberg.org/ebooks/51392", characters: 31155, languages: ["en"], subjects: [], downloads: 644, rank: 607 }, { title: "The Gods of Mars", author: "Burroughs, Edgar Rice", year: 2008, url: "https://www.gutenberg.org/ebooks/64", characters: 384286, languages: ["en"], subjects: ["Life on other planets -- Fiction", "Science fiction", "Dejah Thoris (Fictitious character) -- Fiction", "Carter, John (Fictitious character) -- Fiction", "Mars (Planet) -- Fiction"], downloads: 643, rank: 608 }, { title: "The Pencil of Nature", author: "Talbot, William Henry Fox", year: 2010, url: "https://www.gutenberg.org/ebooks/33447", characters: 47597, languages: ["en"], subjects: ["Photography -- Early works to 1850"], downloads: 642, rank: 609 }, { title: "My Own Story", author: "Pankhurst, Emmeline", year: 2011, url: "https://www.gutenberg.org/ebooks/34856", characters: 472645, languages: ["en"], subjects: ["Feminists -- Great Britain -- Biography", "Suffragists -- Great Britain -- Biography", "Women -- Suffrage -- Great Britain", "Pankhurst, Emmeline, 1858-1928"], downloads: 642, rank: 610 }, { title: "Salom\xE9: A Tragedy in One Act", author: "Wilde, Oscar", year: 2013, url: "https://www.gutenberg.org/ebooks/42704", characters: 61485, languages: ["en"], subjects: ["Salome (Biblical figure) -- Drama", "Tragedies"], downloads: 641, rank: 611 }, { title: "An Advanced English Grammar with Exercises", author: "Farley, Frank Edgar", year: 2014, url: "https://www.gutenberg.org/ebooks/45814", characters: 567626, languages: ["en"], subjects: [], downloads: 641, rank: 612 }, { title: "What is Posat?", author: "Smith, Phyllis Sterling", year: 2016, url: "https://www.gutenberg.org/ebooks/51336", characters: 28009, languages: ["en"], subjects: [], downloads: 637, rank: 613 }, { title: "His Last Bow: An Epilogue of Sherlock Holmes", author: "Doyle, Arthur Conan", year: 2e3, url: "https://www.gutenberg.org/ebooks/2350", characters: 28325, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 636, rank: 614 }, { title: "Mysticism and Logic and Other Essays", author: "Russell, Bertrand", year: 2008, url: "https://www.gutenberg.org/ebooks/25447", characters: 365179, languages: ["en"], subjects: ["Science", "Philosophy", "Mathematics"], downloads: 634, rank: 615 }, { title: "The Memoirs of the Conquistador Bernal Diaz del Castillo, Vol 1 (of 2): Written by Himself Containing a True and Full Account of the Discovery and Conquest of Mexico and New Spain.", author: "Diaz del Castillo, Bernal", year: 2010, url: "https://www.gutenberg.org/ebooks/32474", characters: 905914, languages: ["en"], subjects: ["Mexico -- History -- Conquest, 1519-1540"], downloads: 632, rank: 616 }, { title: "The Dunwich Horror", author: "Lovecraft, H. P. (Howard Phillips)", year: 2015, url: "https://www.gutenberg.org/ebooks/50133", characters: 86905, languages: ["en"], subjects: [], downloads: 632, rank: 617 }, { title: "Anabasis", author: "Xenophon", year: 1998, url: "https://www.gutenberg.org/ebooks/1170", characters: 448493, languages: ["en"], subjects: ["Classical literature", "Iran -- History -- To 640", "Greece -- History -- Expedition of Cyrus, 401 B.C.", "Cyrus, the Younger, approximately 423 B.C.-401 B.C."], downloads: 630, rank: 618 }, { title: "The Younger Edda; Also called Snorre's Edda, or The Prose Edda", author: "Snorri Sturluson", year: 2006, url: "https://www.gutenberg.org/ebooks/18947", characters: 320473, languages: ["en"], subjects: ["Mythology, Norse", "Scalds and scaldic poetry"], downloads: 629, rank: 619 }, { title: "The Arabian Nights: Their Best-known Tales", author: "Unknown", year: 2007, url: "https://www.gutenberg.org/ebooks/20916", characters: 529633, languages: ["en"], subjects: ["Tales -- Arab countries", "Fairy tales -- Arab countries", "Fairy tales", "Folklore -- Arab countries", "Arabs -- Folklore"], downloads: 629, rank: 620 }, { title: "Dr. Montessori's Own Handbook", author: "Montessori, Maria", year: 2009, url: "https://www.gutenberg.org/ebooks/29635", characters: 125695, languages: ["en"], subjects: ["Montessori method of education"], downloads: 628, rank: 621 }, { title: "The Works of Edgar Allan Poe \u2014 Volume 4", author: "Poe, Edgar Allan", year: 2008, url: "https://www.gutenberg.org/ebooks/2150", characters: 394955, languages: ["en"], subjects: ["Fantasy fiction", "American fiction -- 19th century", "Horror tales, American", "Short stories"], downloads: 626, rank: 622 }, { title: "The Mysteries of Udolpho", author: "Radcliffe, Ann Ward", year: 2002, url: "https://www.gutenberg.org/ebooks/3268", characters: 1444531, languages: ["en"], subjects: ["Italy -- Fiction", "Orphans -- Fiction", "Gothic fiction (Literary genre)", "Guardian and ward -- Fiction", "Inheritance and succession -- Fiction", "Castles -- Fiction", "Young women -- Fiction", "Horror tales"], downloads: 626, rank: 623 }, { title: "In the path of the alphabet: an historical account of the ancient beginnings and; evolution of the modern alphabet", author: "Jermain, Frances", year: 2016, url: "https://www.gutenberg.org/ebooks/51422", characters: 166376, languages: ["en"], subjects: [], downloads: 625, rank: 624 }, { title: "The Declaration of Independence of the United States of America", author: "Jefferson, Thomas", year: 1776, url: "https://www.gutenberg.org/ebooks/1", characters: 289, languages: ["en"], subjects: ["United States. Declaration of Independence", "United States -- History -- Revolution, 1775-1783 -- Sources"], downloads: 624, rank: 625 }, { title: "A Bad Day for Vermin", author: "Laumer, Keith", year: 2016, url: "https://www.gutenberg.org/ebooks/51258", characters: 10401, languages: ["en"], subjects: [], downloads: 623, rank: 626 }, { title: "Anne's House of Dreams", author: "Montgomery, L. M. (Lucy Maud)", year: 1996, url: "https://www.gutenberg.org/ebooks/544", characters: 371897, languages: ["en"], subjects: ["Friendship -- Fiction", "Country life -- Prince Edward Island -- Fiction", "Orphans -- Fiction", "Prince Edward Island -- History -- 20th century -- Fiction", "Canada -- History -- 1867-1914 -- Fiction", "Shirley, Anne (Fictitious character) -- Fiction", "Marriage -- Fiction", "Young women -- Fiction"], downloads: 623, rank: 627 }, { title: "The Tribes and Castes of the Central Provinces of India, Volume 1", author: "Russell, R. V. (Robert Vane)", year: 2007, url: "https://www.gutenberg.org/ebooks/20583", characters: 952723, languages: ["en"], subjects: ["Madhya Pradesh (India) -- Religion", "Ethnology -- India -- Madhya Pradesh", "Caste -- India -- Madhya Pradesh", "Madhya Pradesh (India) -- Scheduled tribes"], downloads: 622, rank: 628 }, { title: "The Romance of Tristan and Iseult", author: "Bedier, Joseph", year: 2004, url: "https://www.gutenberg.org/ebooks/14244", characters: 113729, languages: ["en"], subjects: ["Tristan (Legendary character) -- Romances -- Adaptations", "Iseult (Legendary character) -- Romances -- Adaptations", "Arthurian romances -- Adaptations"], downloads: 621, rank: 629 }, { title: "In Stahlgewittern, aus dem Tagebuch eines Sto\xDFtruppf\xFChrers", author: "Junger, Ernst", year: 2010, url: "https://www.gutenberg.org/ebooks/34099", characters: 411406, languages: ["de"], subjects: ["J\xFCnger, Ernst, 1895-1998", "Soldiers -- Germany -- Diaries", "World War, 1914-1918 -- Personal narratives, German"], downloads: 621, rank: 630 }, { title: "Lady Susan", author: "Austen, Jane", year: 1997, url: "https://www.gutenberg.org/ebooks/946", characters: 108750, languages: ["en"], subjects: ["Widows -- Fiction", "England -- Fiction", "Mate selection -- Fiction", "Mothers and daughters -- Fiction", "Epistolary fiction"], downloads: 621, rank: 631 }, { title: "The Return of the Native", author: "Hardy, Thomas", year: 2006, url: "https://www.gutenberg.org/ebooks/122", characters: 669540, languages: ["en"], subjects: ["People with visual disabilities -- Fiction", "Wessex (England) -- Fiction", "Love stories", "Mothers and sons -- Fiction", "Mate selection -- Fiction", "Heathlands -- Fiction", "Didactic fiction", "Adultery -- Fiction"], downloads: 620, rank: 632 }, { title: "Idylls of the King", author: "Tennyson, Alfred Tennyson, Baron", year: 1996, url: "https://www.gutenberg.org/ebooks/610", characters: 389314, languages: ["en"], subjects: ["Arthurian romances -- Adaptations", "Arthur, King -- Poetry", "Knights and knighthood -- Poetry"], downloads: 620, rank: 633 }, { title: "Beowulf", author: "Unknown", year: 1997, url: "https://www.gutenberg.org/ebooks/981", characters: 128374, languages: ["en"], subjects: ["Dragons -- Poetry", "Epic poetry, English (Old)", "Monsters -- Poetry", "Scandinavia -- Poetry"], downloads: 619, rank: 634 }, { title: "Selected Sermons of Jonathan Edwards", author: "Edwards, Jonathan", year: 2010, url: "https://www.gutenberg.org/ebooks/34632", characters: 338752, languages: ["en"], subjects: ["Edwards, Jonathan, 1703-1758", "Sermons, American", "Congregational churches -- Sermons"], downloads: 618, rank: 635 }, { title: "Tartuffe; Or, The Hypocrite", author: "Moliere", year: 2e3, url: "https://www.gutenberg.org/ebooks/2027", characters: 88976, languages: ["en"], subjects: ["French drama -- 17th century -- Translations into English", "Comedies"], downloads: 617, rank: 636 }, { title: "Beyond Lies the Wub", author: "Dick, Philip K.", year: 2009, url: "https://www.gutenberg.org/ebooks/28554", characters: 13202, languages: ["en"], subjects: ["Science fiction", "Short stories"], downloads: 615, rank: 637 }, { title: "English Translations Of Works Of Emile Zola: An Index to the Project Gutenberg Works of Zola in English", author: "Zola, Emile", year: 2009, url: "https://www.gutenberg.org/ebooks/29004", characters: 6692, languages: ["en"], subjects: ["Indexes"], downloads: 615, rank: 638 }, { title: "A Text-Book of the History of Painting", author: "Van Dyke, John Charles", year: 2006, url: "https://www.gutenberg.org/ebooks/18900", characters: 411839, languages: ["en"], subjects: ["Painting -- History"], downloads: 613, rank: 639 }, { title: "Tales of the Jazz Age", author: "Fitzgerald, F. Scott (Francis Scott)", year: 2004, url: "https://www.gutenberg.org/ebooks/6695", characters: 430623, languages: ["en"], subjects: ["United States -- Social life and customs -- 20th century -- Fiction", "Short stories"], downloads: 613, rank: 640 }, { title: "Lady Audley's Secret", author: "Braddon, M. E. (Mary Elizabeth)", year: 2005, url: "https://www.gutenberg.org/ebooks/8954", characters: 708542, languages: ["en"], subjects: ["Married women -- Fiction", "Domestic fiction", "Deception -- Fiction", "England -- Fiction", "Psychological fiction", "Bigamy -- Fiction"], downloads: 613, rank: 641 }, { title: "Far from the Madding Crowd", author: "Hardy, Thomas", year: 1994, url: "https://www.gutenberg.org/ebooks/107", characters: 667326, languages: ["en"], subjects: ["Pastoral fiction", "Wessex (England) -- Fiction", "Women farmers -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Farm life -- Fiction", "Didactic fiction", "Love stories"], downloads: 612, rank: 642 }, { title: "How to Live on 24 Hours a Day", author: "Bennett, Arnold", year: 2e3, url: "https://www.gutenberg.org/ebooks/2274", characters: 60716, languages: ["en"], subjects: ["Values", "Conduct of life", "Time management"], downloads: 610, rank: 643 }, { title: "The Tragedy of King Lear", author: "Shakespeare, William", year: 1608, url: "https://www.gutenberg.org/ebooks/1128", characters: 130143, languages: ["en"], subjects: ["Kings and rulers -- Drama", "Britons -- Drama", "Tragedies", "Lear, King (Legendary character) -- Drama", "Aging parents -- Drama", "Inheritance and succession -- Drama", "Fathers and daughters -- Drama"], downloads: 609, rank: 644 }, { title: "Myths of Babylonia and Assyria", author: "Mackenzie, Donald A. (Donald Alexander)", year: 2005, url: "https://www.gutenberg.org/ebooks/16653", characters: 798355, languages: ["en"], subjects: ["Mythology, Assyro-Babylonian", "Assyro-Babylonian religion"], downloads: 609, rank: 645 }, { title: "Dead Souls", author: "Gogol, Nikolai Vasilevich", year: 1997, url: "https://www.gutenberg.org/ebooks/1081", characters: 695178, languages: ["en"], subjects: ["Satire", "Humorous stories", "Swindlers and swindling -- Russia -- Fiction", "Russia -- Social life and customs -- 1533-1917 -- Fiction"], downloads: 607, rank: 646 }, { title: "The Mahabharata of Krishna-Dwaipayana Vyasa, Volume 1: Books 1, 2 and 3", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/15474", characters: 3154531, languages: ["en"], subjects: ["Epic literature, Sanskrit"], downloads: 606, rank: 647 }, { title: "Doctor Thorne", author: "Trollope, Anthony", year: 2002, url: "https://www.gutenberg.org/ebooks/3166", characters: 1006262, languages: ["en"], subjects: ["Country life -- Fiction", "Barsetshire (England: Imaginary place) -- Fiction", "Great Britain -- History -- 19th century -- Fiction", "Physicians -- Fiction", "England -- Social life and customs -- 19th century -- Fiction", "Nieces -- Fiction", "Inheritance and succession -- Fiction", "Domestic fiction", "Love stories"], downloads: 606, rank: 648 }, { title: "Library of the World's Best Mystery and Detective Stories", author: "Unknown", year: 2004, url: "https://www.gutenberg.org/ebooks/12758", characters: 482758, languages: ["en"], subjects: ["Detective and mystery stories"], downloads: 603, rank: 649 }, { title: "Mechanical Drawing Self-Taught: Comprising instructions in the selection and preparation of drawing instruments, elementary instruction in practical mechanical drawing; together with examples in simple geometry and elementary mechanism, including screw threads, gear wheels, mechanical motions, engines and boilers", author: "Rose, Joshua", year: 2007, url: "https://www.gutenberg.org/ebooks/23319", characters: 336206, languages: ["en"], subjects: ["Drawing instruments", "Mechanical drawing"], downloads: 603, rank: 650 }, { title: "The Return of Sherlock Holmes", author: "Doyle, Arthur Conan", year: 2008, url: "https://www.gutenberg.org/ebooks/221", characters: 520468, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories, English", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 601, rank: 651 }, { title: "Dombey and Son", author: "Dickens, Charles", year: 1997, url: "https://www.gutenberg.org/ebooks/821", characters: 1708731, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Dysfunctional families -- Fiction", "Family-owned business enterprises -- Fiction", "England -- Fiction", "Businesspeople -- Fiction", "Domestic fiction"], downloads: 601, rank: 652 }, { title: "History of Egypt, Chaldea, Syria, Babylonia, and Assyria in the Light of Recent Discovery", author: "King, L. W. (Leonard William)", year: 2005, url: "https://www.gutenberg.org/ebooks/17321", characters: 568016, languages: ["en"], subjects: ["Egypt -- History -- To 332 B.C.", "History, Ancient"], downloads: 600, rank: 653 }, { title: "The Tao Teh King, or the Tao and its Characteristics", author: "Laozi", year: 1995, url: "https://www.gutenberg.org/ebooks/216", characters: 50124, languages: ["en"], subjects: ["Philosophy, Chinese", "Taoism -- Sacred books"], downloads: 600, rank: 654 }, { title: "Alice's Abenteuer im Wunderland", author: "Carroll, Lewis", year: 2007, url: "https://www.gutenberg.org/ebooks/19778", characters: 137490, languages: ["de"], subjects: ["Fantasy"], downloads: 599, rank: 655 }, { title: "The Variable Man", author: "Dick, Philip K.", year: 2010, url: "https://www.gutenberg.org/ebooks/32154", characters: 127398, languages: ["en"], subjects: ["Science fiction", "War stories", "Weapons -- Fiction"], downloads: 599, rank: 656 }, { title: "Pen Pal", author: "Marlowe, Stephen", year: 2016, url: "https://www.gutenberg.org/ebooks/51286", characters: 25306, languages: ["en"], subjects: [], downloads: 599, rank: 657 }, { title: "Warlord of Mars", author: "Burroughs, Edgar Rice", year: 1993, url: "https://www.gutenberg.org/ebooks/68", characters: 266383, languages: ["en"], subjects: ["Science fiction", "Dejah Thoris (Fictitious character) -- Fiction", "Carter, John (Fictitious character) -- Fiction", "Mars (Planet) -- Fiction"], downloads: 599, rank: 658 }, { title: "Household Stories by the Brothers Grimm", author: "Grimm, Wilhelm", year: 2006, url: "https://www.gutenberg.org/ebooks/19068", characters: 389881, languages: ["en"], subjects: ["Fairy tales -- Germany"], downloads: 598, rank: 659 }, { title: "How to Tell a Story, and Other Essays", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/3250", characters: 33284, languages: ["en"], subjects: ["Essays", "Short stories", "Storytelling"], downloads: 598, rank: 660 }, { title: "My Strange Rescue: and other stories of Sport and Adventure in Canada", author: "Oxley, J. Macdonald (James Macdonald)", year: 2016, url: "https://www.gutenberg.org/ebooks/51308", characters: 406325, languages: ["en"], subjects: [], downloads: 598, rank: 661 }, { title: "English Synonyms and Antonyms: With Notes on the Correct Use of Prepositions", author: "Fernald, James Champlin", year: 2009, url: "https://www.gutenberg.org/ebooks/28900", characters: 1184538, languages: ["en"], subjects: ["English language -- Prepositions", "English language -- Synonyms and antonyms"], downloads: 597, rank: 662 }, { title: "The Big Trip Up Yonder", author: "Vonnegut, Kurt", year: 2009, url: "https://www.gutenberg.org/ebooks/30240", characters: 18465, languages: ["en"], subjects: ["Science fiction", "Short stories"], downloads: 597, rank: 663 }, { title: "The Ways of the Planets", author: "Martin, Martha Evans", year: 2016, url: "https://www.gutenberg.org/ebooks/51284", characters: 262422, languages: ["en"], subjects: [], downloads: 597, rank: 664 }, { title: "Gutenberg, and the Art of Printing", author: "Pearson, Emily Clemens", year: 2016, url: "https://www.gutenberg.org/ebooks/51358", characters: 300494, languages: ["en"], subjects: [], downloads: 597, rank: 665 }, { title: "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival: The Belle of the Delaware", author: "Percival, Kate", year: 2009, url: "https://www.gutenberg.org/ebooks/29827", characters: 185242, languages: ["en"], subjects: ["Erotic literature, American", "Prostitutes -- Fiction"], downloads: 596, rank: 666 }, { title: "Meno", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1643", characters: 105531, languages: ["en"], subjects: ["Classical literature", "Socrates, 470 BC-399 BC", "Ethics -- Early works to 1800", "Virtue -- Early works to 1800"], downloads: 594, rank: 667 }, { title: "Das Unheimliche", author: "Freud, Sigmund", year: 2010, url: "https://www.gutenberg.org/ebooks/34222", characters: 73165, languages: ["de"], subjects: ["Psychoanalysis", "Uncanny, The (Psychoanalysis)"], downloads: 594, rank: 668 }, { title: "The Art of Public Speaking", author: "Esenwein, J. Berg (Joseph Berg)", year: 2005, url: "https://www.gutenberg.org/ebooks/16317", characters: 798930, languages: ["en"], subjects: ["Public speaking"], downloads: 593, rank: 669 }, { title: "Laughter: An Essay on the Meaning of the Comic", author: "Bergson, Henri", year: 2003, url: "https://www.gutenberg.org/ebooks/4352", characters: 196153, languages: ["en"], subjects: ["Comedy", "Laughter", "Philosophy, French"], downloads: 593, rank: 670 }, { title: "The History of Rome, Books 01 to 08", author: "Livy", year: 2006, url: "https://www.gutenberg.org/ebooks/19725", characters: 1158371, languages: ["en"], subjects: ["Rome -- History"], downloads: 592, rank: 671 }, { title: "Looking Backward, 2000 to 1887", author: "Bellamy, Edward", year: 1996, url: "https://www.gutenberg.org/ebooks/624", characters: 376018, languages: ["en"], subjects: ["Two thousand, A.D. -- Fiction", "Science fiction", "Time travel -- Fiction", "Utopian fiction", "Social problems -- Fiction", "Utopias -- Fiction", "Boston (Mass.) -- Fiction"], downloads: 591, rank: 672 }, { title: "The Art Of Writing & Speaking The English Language: Word-Study and Composition & Rhetoric", author: "Cody, Sherwin", year: 2006, url: "https://www.gutenberg.org/ebooks/19719", characters: 306618, languages: ["en"], subjects: ["English language"], downloads: 589, rank: 673 }, { title: "Heidi: (Gift Edition)", author: "Spyri, Johanna", year: 2007, url: "https://www.gutenberg.org/ebooks/20781", characters: 241058, languages: ["en"], subjects: ["Grandfathers -- Fiction", "Switzerland -- History -- 19th century -- Fiction", "Orphans -- Fiction", "Mountain life -- Switzerland -- Fiction"], downloads: 589, rank: 674 }, { title: "New Atlantis", author: "Bacon, Francis", year: 2e3, url: "https://www.gutenberg.org/ebooks/2434", characters: 73067, languages: ["en"], subjects: ["Utopias -- Early works to 1800"], downloads: 589, rank: 675 }, { title: "The Fortunes and Misfortunes of the Famous Moll Flanders", author: "Defoe, Daniel", year: 2008, url: "https://www.gutenberg.org/ebooks/370", characters: 589274, languages: ["en"], subjects: ["Repentance -- Fiction", "Women -- England -- Fiction", "Criminals -- Fiction", "Prostitutes -- Fiction", "British -- Virginia -- Fiction", "London (England) -- Fiction", "Picaresque literature", "Virginia -- Fiction", "Children of prisoners -- Fiction", "Adventure stories"], downloads: 589, rank: 676 }, { title: "Apology, Crito, and Phaedo of Socrates", author: "Plato", year: 2004, url: "https://www.gutenberg.org/ebooks/13726", characters: 242790, languages: ["en"], subjects: ["Socrates, 470 BC-399 BC"], downloads: 588, rank: 677 }, { title: "The School for Scandal", author: "Sheridan, Richard Brinsley", year: 1999, url: "https://www.gutenberg.org/ebooks/1929", characters: 149413, languages: ["en"], subjects: ["England -- Social life and customs -- 18th century -- Drama", "English drama -- 18th century", "Nobility -- England -- History -- 18th century -- Drama", "Comedies"], downloads: 586, rank: 678 }, { title: "The Letters of Wolfgang Amadeus Mozart \u2014 Volume 01", author: "Mozart, Wolfgang Amadeus", year: 2004, url: "https://www.gutenberg.org/ebooks/5307", characters: 405702, languages: ["en"], subjects: ["Composers -- Austria -- Correspondence", "Mozart, Wolfgang Amadeus, 1756-1791 -- Correspondence"], downloads: 586, rank: 679 }, { title: "The Art of Money Getting; Or, Golden Rules for Making Money", author: "Barnum, P. T. (Phineas Taylor)", year: 2005, url: "https://www.gutenberg.org/ebooks/8581", characters: 63935, languages: ["en"], subjects: ["Success", "Success in business"], downloads: 586, rank: 680 }, { title: "An Essay Concerning Humane Understanding, Volume 1: MDCXC, Based on the 2nd Edition, Books 1 and 2", author: "Locke, John", year: 2004, url: "https://www.gutenberg.org/ebooks/10615", characters: 712296, languages: ["en"], subjects: ["Knowledge, Theory of -- Early works to 1800"], downloads: 585, rank: 681 }, { title: "Four Arthurian Romances", author: "Chretien, de Troyes, active 12th century", year: 1997, url: "https://www.gutenberg.org/ebooks/831", characters: 844095, languages: ["en"], subjects: ["Arthurian romances", "Tales, Medieval", "Romances -- Translations into English", "Chr\xE9tien, de Troyes, active 12th century"], downloads: 584, rank: 682 }, { title: "The Mentor: The Incas, vol. 6, num. 3, Serial No. 151, March 15, 1918", author: "Hardy, Osgood", year: 2016, url: "https://www.gutenberg.org/ebooks/51322", characters: 48924, languages: ["en"], subjects: [], downloads: 583, rank: 683 }, { title: "Twice Told Tales", author: "Hawthorne, Nathaniel", year: 2004, url: "https://www.gutenberg.org/ebooks/13707", characters: 717333, languages: ["en"], subjects: ["New England -- Social life and customs -- Fiction", "Short stories", "Historical fiction, American"], downloads: 581, rank: 684 }, { title: "Sex-linked Inheritance in Drosophila", author: "Bridges, Calvin B. (Calvin Blackman)", year: 2010, url: "https://www.gutenberg.org/ebooks/34368", characters: 200487, languages: ["en"], subjects: ["Heredity", "Drosophila"], downloads: 579, rank: 685 }, { title: "Slave Narratives: A Folk History of Slavery in the United States From Interviews with Former Slaves: Volume I, Alabama Narratives", author: "United States. Work Projects Administration", year: 2011, url: "https://www.gutenberg.org/ebooks/36020", characters: 563155, languages: ["en"], subjects: ["African Americans -- Alabama -- Biography", "Slaves -- Alabama -- Social conditions", "Slaves -- Alabama -- Biography", "Slave narratives -- Alabama", "Slavery -- Alabama"], downloads: 578, rank: 686 }, { title: "How We Think", author: "Dewey, John", year: 2011, url: "https://www.gutenberg.org/ebooks/37423", characters: 351372, languages: ["en"], subjects: ["Thought and thinking", "Educational psychology"], downloads: 575, rank: 687 }, { title: "The Arabian Nights Entertainments", author: "Anonymous", year: 2006, url: "https://www.gutenberg.org/ebooks/19860", characters: 404406, languages: ["en"], subjects: ["Fairy tales", "Folklore -- Arab countries"], downloads: 574, rank: 688 }, { title: "Nostromo: A Tale of the Seaboard", author: "Conrad, Joseph", year: 2006, url: "https://www.gutenberg.org/ebooks/2021", characters: 829265, languages: ["en"], subjects: ["Latin America -- Fiction", "Political fiction", "Revolutions -- Fiction", "Sea stories", "Sailors -- Fiction"], downloads: 574, rank: 689 }, { title: "The Business, As Usual", author: "Sharkey, Jack", year: 2016, url: "https://www.gutenberg.org/ebooks/51435", characters: 13792, languages: ["en"], subjects: [], downloads: 574, rank: 690 }, { title: "McTeague: A Story of San Francisco", author: "Norris, Frank", year: 2006, url: "https://www.gutenberg.org/ebooks/165", characters: 547084, languages: ["en"], subjects: ["Avarice -- Fiction", "Psychological fiction", "Murderers -- Fiction", "Dentists -- Fiction", "Married people -- Fiction", "San Francisco (Calif.) -- Fiction", "Didactic fiction"], downloads: 573, rank: 691 }, { title: "The Taming of the Shrew", author: "Shakespeare, William", year: 1590, url: "https://www.gutenberg.org/ebooks/1107", characters: 105439, languages: ["en"], subjects: ["Man-woman relationships -- Drama", "Padua (Italy) -- Drama", "Comedies", "Sex role -- Drama", "Married people -- Drama"], downloads: 571, rank: 692 }, { title: "Sons and Lovers", author: "Lawrence, D. H. (David Herbert)", year: 2006, url: "https://www.gutenberg.org/ebooks/217", characters: 758330, languages: ["en"], subjects: ["Bildungsromans", "Autobiographical fiction", "England -- Fiction", "Working class families -- Fiction", "Domestic fiction", "Young men -- Fiction"], downloads: 571, rank: 693 }, { title: "A Brief Account of the Destruction of the Indies: Or, a faithful NARRATIVE OF THE Horrid and Unexampled Massacres, Butcheries, and all manner of Cruelties, that Hell and Malice could invent, committed by the Popish Spanish Party on the inhabitants of West-India, TOGETHER With the Devastations of several Kingdoms in America by Fire and Sword, for the space of Forty and Two Years, from the time of its first Discovery by them.", author: "Casas, Bartolome de las", year: 2007, url: "https://www.gutenberg.org/ebooks/20321", characters: 158018, languages: ["en"], subjects: ["Spain -- Colonies -- America", "Indians, Treatment of -- Latin America"], downloads: 570, rank: 694 }, { title: "The Seven Lamps of Architecture", author: "Ruskin, John", year: 2011, url: "https://www.gutenberg.org/ebooks/35898", characters: 393546, languages: ["en"], subjects: ["Architecture"], downloads: 570, rank: 695 }, { title: "The History of Don Quixote, Volume 2, Complete", author: "Cervantes Saavedra, Miguel de", year: 2004, url: "https://www.gutenberg.org/ebooks/5946", characters: 955228, languages: ["en"], subjects: ["Picaresque literature", "Spain -- Social life and customs -- 16th century -- Fiction", "Knights and knighthood -- Spain -- Fiction", "Romances"], downloads: 569, rank: 696 }, { title: "Les mis\xE9rables Tome I: Fantine", author: "Hugo, Victor", year: 2006, url: "https://www.gutenberg.org/ebooks/17489", characters: 572421, languages: ["fr"], subjects: ["Paris (France) -- Fiction", "Ex-convicts -- Fiction", "Epic literature", "Orphans -- Fiction", "Historical fiction"], downloads: 568, rank: 697 }, { title: "Jesus the Christ: A Study of the Messiah and His Mission According to Holy; Scriptures Both Ancient and Modern", author: "Talmage, James E. (James Edward)", year: 2007, url: "https://www.gutenberg.org/ebooks/22542", characters: 1524757, languages: ["en"], subjects: ["Jesus Christ -- Mormon interpretations", "Christian biography -- Palestine", "Jesus Christ -- Biography"], downloads: 568, rank: 698 }, { title: "Considerations on Representative Government", author: "Mill, John Stuart", year: 2004, url: "https://www.gutenberg.org/ebooks/5669", characters: 486701, languages: ["en"], subjects: ["Representative government and representation"], downloads: 568, rank: 699 }, { title: "Following the Equator: A Journey Around the World", author: "Twain, Mark", year: 2006, url: "https://www.gutenberg.org/ebooks/2895", characters: 908085, languages: ["en"], subjects: ["Equator -- Description and travel", "Voyages around the world", "Twain, Mark, 1835-1910 -- Travel"], downloads: 567, rank: 700 }, { title: "The Sea-Wolf", author: "London, Jack", year: 2010, url: "https://www.gutenberg.org/ebooks/1074", characters: 490405, languages: ["en"], subjects: ["Sealers (Persons) -- Fiction", "Ship captains -- Fiction", "Arctic regions -- Fiction", "Sea stories", "Sealing ships -- Fiction"], downloads: 566, rank: 701 }, { title: "Babbitt", author: "Lewis, Sinclair", year: 2006, url: "https://www.gutenberg.org/ebooks/1156", characters: 603433, languages: ["en"], subjects: ["Conformity -- Fiction", "Businessmen -- Fiction", "Satire", "Middle-aged men -- Fiction", "Psychological fiction"], downloads: 565, rank: 702 }, { title: "The Last Man", author: "Shelley, Mary Wollstonecraft", year: 2006, url: "https://www.gutenberg.org/ebooks/18247", characters: 855952, languages: ["en"], subjects: ["Science fiction", "Twenty-first century -- Fiction", "End of the world -- Fiction", "Plague -- Fiction"], downloads: 565, rank: 703 }, { title: "The Wind in the Willows", author: "Grahame, Kenneth", year: 2009, url: "https://www.gutenberg.org/ebooks/27805", characters: 279556, languages: ["en"], subjects: ["Country life -- Fiction", "Humorous stories", "Pastoral fiction", "Animals -- Fiction", "Fantasy fiction", "England -- Fiction", "Friendship -- Fiction", "River life -- Fiction"], downloads: 563, rank: 704 }, { title: "The Hand Phrenologically Considered: Being a Glimpse at the Relation of the Mind with the Organisation of the Body", author: "Anonymous", year: 2016, url: "https://www.gutenberg.org/ebooks/51328", characters: 73608, languages: ["en"], subjects: [], downloads: 562, rank: 705 }, { title: "Human, All-Too-Human: A Book For Free Spirits; Part II", author: "Nietzsche, Friedrich Wilhelm", year: 2011, url: "https://www.gutenberg.org/ebooks/37841", characters: 436175, languages: ["en"], subjects: ["Human beings"], downloads: 560, rank: 706 }, { title: "Frankenstein; Or, The Modern Prometheus", author: "Shelley, Mary Wollstonecraft", year: 2012, url: "https://www.gutenberg.org/ebooks/41445", characters: 348454, languages: ["en"], subjects: ["Monsters -- Fiction", "Frankenstein's monster (Fictitious character) -- Fiction", "Gothic fiction (Literary genre)", "Science fiction", "Frankenstein, Victor (Fictitious character) -- Fiction", "Scientists -- Fiction", "Horror tales"], downloads: 560, rank: 707 }, { title: "The Oxford Book of American Essays", author: "Unknown", year: 2012, url: "https://www.gutenberg.org/ebooks/40196", characters: 799414, languages: ["en"], subjects: ["American essays"], downloads: 559, rank: 708 }, { title: "Memoirs of General William T. Sherman \u2014 Complete", author: "Sherman, William T. (William Tecumseh)", year: 2006, url: "https://www.gutenberg.org/ebooks/4361", characters: 1748271, languages: ["en"], subjects: ["United States. Army -- Biography", "United States -- History -- Civil War, 1861-1865 -- Campaigns", "Sherman, William T. (William Tecumseh), 1820-1891", "United States -- History -- Civil War, 1861-1865 -- Personal narratives", "Generals -- United States -- Biography"], downloads: 559, rank: 709 }, { title: "The Merry Adventures of Robin Hood", author: "Pyle, Howard", year: 2003, url: "https://www.gutenberg.org/ebooks/10148", characters: 496155, languages: ["en"], subjects: ["Robin Hood (Legendary character) -- Legends", "Folklore -- England"], downloads: 558, rank: 710 }, { title: "Dr. Elsie Inglis", author: "Balfour, Lady Frances", year: 2016, url: "https://www.gutenberg.org/ebooks/51410", characters: 285837, languages: ["en"], subjects: [], downloads: 558, rank: 711 }, { title: "The Tenniel Illustrations for Carroll's Alice in Wonderland", author: "Tenniel, John", year: 2008, url: "https://www.gutenberg.org/ebooks/114", characters: 3276, languages: ["en"], subjects: ["Fantasy fiction", "Children's stories"], downloads: 557, rank: 712 }, { title: "Principles Of Political Economy: Abridged with Critical, Bibliographical, and Explanatory Notes, and a Sketch of the History of Political Economy", author: "Mill, John Stuart", year: 2009, url: "https://www.gutenberg.org/ebooks/30107", characters: 1219880, languages: ["en"], subjects: ["Economics"], downloads: 557, rank: 713 }, { title: "The Mysteries of London, v. 2/4", author: "Reynolds, George W. M. (George William MacArthur)", year: 2016, url: "https://www.gutenberg.org/ebooks/51294", characters: 2106486, languages: ["en"], subjects: [], downloads: 557, rank: 714 }, { title: "All Things Considered", author: "Chesterton, G. K. (Gilbert Keith)", year: 2004, url: "https://www.gutenberg.org/ebooks/11505", characters: 283614, languages: ["en"], subjects: ["English essays"], downloads: 556, rank: 715 }, { title: "The Iliads of Homer: Translated according to the Greek", author: "Homer", year: 2016, url: "https://www.gutenberg.org/ebooks/51355", characters: 812716, languages: ["en"], subjects: [], downloads: 556, rank: 716 }, { title: "Le roman de la rose - Tome I", author: "Guillaume, de Lorris, active 1230", year: 2005, url: "https://www.gutenberg.org/ebooks/16816", characters: 487412, languages: ["fr"], subjects: ["Courtly love -- Poetry", "Romances"], downloads: 555, rank: 717 }, { title: "The Merchant of Venice", author: "Shakespeare, William", year: 1623, url: "https://www.gutenberg.org/ebooks/2243", characters: 103455, languages: ["en"], subjects: ["Jews -- Italy -- Drama", "Moneylenders -- Drama", "Venice (Italy) -- Drama", "Comedies"], downloads: 555, rank: 718 }, { title: "All About Coffee", author: "Ukers, William H. (William Harrison)", year: 2009, url: "https://www.gutenberg.org/ebooks/28500", characters: 2322451, languages: ["en"], subjects: ["Coffee Industry", "Drinking customs", "Coffee"], downloads: 555, rank: 719 }, { title: "L\xE0-bas", author: "Huysmans, J.-K. (Joris-Karl)", year: 2004, url: "https://www.gutenberg.org/ebooks/14323", characters: 445639, languages: ["en"], subjects: ["Erotic stories", "France -- History -- 15th century -- Fiction", "Rais, Gilles de, 1404-1440 -- Fiction", "Satanism -- Fiction", "Paranormal fiction"], downloads: 553, rank: 720 }, { title: "A Husband for My Wife", author: "Stuart, William W.", year: 2016, url: "https://www.gutenberg.org/ebooks/51460", characters: 24327, languages: ["en"], subjects: [], downloads: 553, rank: 721 }, { title: "The Way of the World", author: "Congreve, William", year: 2015, url: "https://www.gutenberg.org/ebooks/1292", characters: 134515, languages: ["en"], subjects: ["English drama (Comedy)"], downloads: 551, rank: 722 }, { title: "English Coins and Tokens: With A Chapter on Greek and Roman Coins", author: "Jewitt, Llewellynn Frederick William", year: 2016, url: "https://www.gutenberg.org/ebooks/51302", characters: 195317, languages: ["en"], subjects: [], downloads: 551, rank: 723 }, { title: "The Forsyte Saga - Complete", author: "Galsworthy, John", year: 2006, url: "https://www.gutenberg.org/ebooks/4397", characters: 1532361, languages: ["en"], subjects: ["England -- Social life and customs -- 20th century -- Fiction", "Women -- England -- Fiction", "Forsyte family (Fictitious characters) -- Fiction", "Middle class -- England -- Fiction", "Families -- England -- Fiction", "England -- Social life and customs -- 19th century -- Fiction", "Domestic fiction"], downloads: 550, rank: 724 }, { title: "The Sleeping Beauty and other fairy tales", author: "Perrault, Charles", year: 2016, url: "https://www.gutenberg.org/ebooks/51275", characters: 127977, languages: ["en"], subjects: [], downloads: 550, rank: 725 }, { title: "The Willows", author: "Blackwood, Algernon", year: 2004, url: "https://www.gutenberg.org/ebooks/11438", characters: 93215, languages: ["en"], subjects: ["Horror tales"], downloads: 548, rank: 726 }, { title: "In Bad Company and other stories", author: "Boldrewood, Rolf", year: 2016, url: "https://www.gutenberg.org/ebooks/51314", characters: 944582, languages: ["en"], subjects: [], downloads: 548, rank: 727 }, { title: "The Birth of Tragedy: or Hellenism and Pessimism", author: "Nietzsche, Friedrich Wilhelm", year: 2016, url: "https://www.gutenberg.org/ebooks/51356", characters: 283814, languages: ["en"], subjects: [], downloads: 547, rank: 728 }, { title: "The Jew of Malta", author: "Marlowe, Christopher", year: 1997, url: "https://www.gutenberg.org/ebooks/901", characters: 130346, languages: ["en"], subjects: ["Tragedies", "Jews -- Malta -- Drama"], downloads: 547, rank: 729 }, { title: "The House on the Borderland", author: "Hodgson, William Hope", year: 2003, url: "https://www.gutenberg.org/ebooks/10002", characters: 238821, languages: ["en"], subjects: ["Science fiction"], downloads: 546, rank: 730 }, { title: "Major Barbara", author: "Shaw, Bernard", year: 2003, url: "https://www.gutenberg.org/ebooks/3790", characters: 158204, languages: ["en"], subjects: ["Salvation Army -- Drama", "Children of the rich -- Drama", "Didactic drama", "Crime -- Drama", "Fathers and daughters -- Drama"], downloads: 546, rank: 731 }, { title: "The Song of Roland", author: "Unknown", year: 1996, url: "https://www.gutenberg.org/ebooks/391", characters: 156953, languages: ["en"], subjects: ["Roland (Legendary character) -- Romances", "Epic poetry, French -- Translations into English"], downloads: 546, rank: 732 }, { title: "Life Is a Dream", author: "Calderon de la Barca, Pedro", year: 2006, url: "https://www.gutenberg.org/ebooks/2587", characters: 86968, languages: ["en"], subjects: ["Drama"], downloads: 545, rank: 733 }, { title: "The Game of Logic", author: "Carroll, Lewis", year: 2003, url: "https://www.gutenberg.org/ebooks/4763", characters: 78980, languages: ["en"], subjects: ["Logic -- Juvenile literature", "Logic, Symbolic and mathematical"], downloads: 544, rank: 734 }, { title: "The Marvelous Land of Oz", author: "Baum, L. Frank (Lyman Frank)", year: 1993, url: "https://www.gutenberg.org/ebooks/54", characters: 207468, languages: ["en"], subjects: ["Oz (Imaginary place) -- Fiction", "Fantasy"], downloads: 544, rank: 735 }, { title: "The Wisdom of Father Brown", author: "Chesterton, G. K. (Gilbert Keith)", year: 1995, url: "https://www.gutenberg.org/ebooks/223", characters: 341476, languages: ["en"], subjects: ["England -- Fiction", "Brown, Father (Fictitious character) -- Fiction", "Clergy -- Fiction", "Detective and mystery stories, English", "Catholics -- Fiction"], downloads: 543, rank: 736 }, { title: "Cawnpore", author: "Trevelyan, George Otto", year: 2016, url: "https://www.gutenberg.org/ebooks/51383", characters: 409381, languages: ["en"], subjects: [], downloads: 543, rank: 737 }, { title: "Astounding Stories of Super-Science January 1930", author: "Unknown", year: 2012, url: "https://www.gutenberg.org/ebooks/41481", characters: 359174, languages: ["en"], subjects: ["Science fiction, American -- Periodicals", "Science fiction -- Periodicals"], downloads: 541, rank: 738 }, { title: "Nice Girl With 5 Husbands", author: "Leiber, Fritz", year: 2016, url: "https://www.gutenberg.org/ebooks/51101", characters: 22048, languages: ["en"], subjects: [], downloads: 541, rank: 739 }, { title: "A First Spanish Reader", author: "Roessler, Erwin W. (Erwin William)", year: 2005, url: "https://www.gutenberg.org/ebooks/15353", characters: 225477, languages: ["en", "es"], subjects: ["Spanish language -- Textbooks for foreign speakers -- English", "Spanish language -- Readers"], downloads: 539, rank: 740 }, { title: 'The Essays of "George Eliot": Complete', author: "Eliot, George", year: 2009, url: "https://www.gutenberg.org/ebooks/28289", characters: 527396, languages: ["en"], subjects: ["Literature -- History and criticism"], downloads: 539, rank: 741 }, { title: "De Nederlandsche Geslachtsnamen in Oorsprong, Geschiedenis en Beteekenis", author: "Winkler, Johan", year: 2011, url: "https://www.gutenberg.org/ebooks/36077", characters: 1074571, languages: ["nl"], subjects: ["Names, Personal -- Netherlands", "Names, Personal -- Frisian"], downloads: 539, rank: 742 }, { title: "American Fairy Tales", author: "Baum, L. Frank (Lyman Frank)", year: 2003, url: "https://www.gutenberg.org/ebooks/4357", characters: 149784, languages: ["en"], subjects: ["Fairy tales", "Short stories", "Children's stories, American", "Fairy tales -- United States"], downloads: 539, rank: 743 }, { title: "The Social Contract & Discourses", author: "Rousseau, Jean-Jacques", year: 2014, url: "https://www.gutenberg.org/ebooks/46333", characters: 608759, languages: ["en"], subjects: [], downloads: 539, rank: 744 }, { title: "Home Geography for Primary Grades", author: "Long, C. C.", year: 2004, url: "https://www.gutenberg.org/ebooks/12228", characters: 81387, languages: ["en"], subjects: ["Geography -- Outlines, syllabi, etc."], downloads: 538, rank: 745 }, { title: "Bahnw\xE4rter Thiel", author: "Hauptmann, Gerhart", year: 2009, url: "https://www.gutenberg.org/ebooks/29376", characters: 91605, languages: ["de"], subjects: [], downloads: 537, rank: 746 }, { title: "Phaedrus", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1636", characters: 180589, languages: ["en"], subjects: ["Rhetoric, Ancient", "Love -- Early works to 1800", "Soul -- Early works to 1800", "Classical literature", "Rhetoric -- Early works to 1800", "Socrates, 470 BC-399 BC", "Lysias"], downloads: 536, rank: 747 }, { title: "Ibrahim Pasha: Grand Vizir of Suleiman the Magnificent", author: "Jenkins, Hester Donaldson", year: 2016, url: "https://www.gutenberg.org/ebooks/51299", characters: 189567, languages: ["en"], subjects: [], downloads: 535, rank: 748 }, { title: "Pollyanna", author: "Porter, Eleanor H. (Eleanor Hodgman)", year: 1998, url: "https://www.gutenberg.org/ebooks/1450", characters: 271307, languages: ["en"], subjects: ["Orphans -- Juvenile fiction", "Conduct of life -- Juvenile fiction", "Cheerfulness -- Juvenile fiction", "Aunts -- Juvenile fiction", "Interpersonal relations -- Juvenile fiction", "Vermont -- History -- 20th century -- Juvenile fiction"], downloads: 534, rank: 749 }, { title: "The Letters of Cicero, Volume 1: The Whole Extant Correspodence in Chronological Order", author: "Cicero, Marcus Tullius", year: 2007, url: "https://www.gutenberg.org/ebooks/21200", characters: 812337, languages: ["en"], subjects: ["Cicero, Marcus Tullius -- Correspondence", "Statesmen -- Rome -- Correspondence", "Authors, Latin -- Correspondence"], downloads: 534, rank: 750 }, { title: "The Good Soldier", author: "Ford, Ford Madox", year: 2001, url: "https://www.gutenberg.org/ebooks/2775", characters: 348578, languages: ["en"], subjects: ["Friendship -- Fiction", "Hessen (Hesse, Germany : Province) -- Fiction", "Middle class -- Fiction", "Bad Nauheim (Germany) -- Fiction", "British -- Germany -- Fiction", "Married people -- Fiction", "Domestic fiction", "Adultery -- Fiction"], downloads: 534, rank: 751 }, { title: "The Practice of the Presence of God", author: "Lawrence, of the Resurrection, Brother", year: 2004, url: "https://www.gutenberg.org/ebooks/5657", characters: 49984, languages: ["en"], subjects: ["Christian life -- Catholic authors", "Spiritual life -- Catholic Church"], downloads: 534, rank: 752 }, { title: "The Old Curiosity Shop", author: "Dickens, Charles", year: 2008, url: "https://www.gutenberg.org/ebooks/700", characters: 1037397, languages: ["en"], subjects: ["Grandfathers -- Fiction", "Antique dealers -- Fiction", "Didactic fiction", "England -- Fiction", "Grandparent and child -- Fiction", "Gamblers -- Fiction", "Domestic fiction", "Girls -- Fiction"], downloads: 534, rank: 753 }, { title: "Man and Superman: A Comedy and a Philosophy", author: "Shaw, Bernard", year: 2006, url: "https://www.gutenberg.org/ebooks/3328", characters: 329624, languages: ["en"], subjects: ["English drama", "Man-woman relationships -- Drama"], downloads: 533, rank: 754 }, { title: "Moral Equivalent", author: "Neville, Kris", year: 2016, url: "https://www.gutenberg.org/ebooks/51449", characters: 39615, languages: ["en"], subjects: [], downloads: 533, rank: 755 }, { title: "Ibong Adarna: Corrido at Buhay na Pinagdaanan nang tatlong Principeng Magcacapatid na Anac nang Haring Fernando at nang Reina Valeriana sa Cahariang Berbania", author: "Anonymous", year: 2005, url: "https://www.gutenberg.org/ebooks/16157", characters: 95076, languages: ["tl"], subjects: ["Folklore -- Philippines"], downloads: 532, rank: 756 }, { title: "Madame Bovary", author: "Flaubert, Gustave", year: 2004, url: "https://www.gutenberg.org/ebooks/14155", characters: 599538, languages: ["fr"], subjects: ["French literature"], downloads: 531, rank: 757 }, { title: "The Anabasis of Alexander: or, The History of the Wars and Conquests of Alexander the Great", author: "Nicomedia, Arrian of", year: 2014, url: "https://www.gutenberg.org/ebooks/46976", characters: 751421, languages: ["en"], subjects: [], downloads: 531, rank: 758 }, { title: "The Princess and the Goblin", author: "MacDonald, George", year: 1996, url: "https://www.gutenberg.org/ebooks/708", characters: 233013, languages: ["en"], subjects: ["Fantasy", "Goblins -- Juvenile fiction", "Fairy tales", "Children's stories", "Princesses -- Juvenile fiction"], downloads: 531, rank: 759 }, { title: "The Odyssey", author: "Homer", year: 2002, url: "https://www.gutenberg.org/ebooks/3160", characters: 608935, languages: ["en"], subjects: ["Epic poetry, Greek -- Translations into English", "Odysseus (Greek mythology) -- Poetry", "Homer -- Translations into English"], downloads: 529, rank: 760 }, { title: "That Which Hath Wings", author: "Dehan, Richard", year: 2016, url: "https://www.gutenberg.org/ebooks/51428", characters: 936877, languages: ["en"], subjects: [], downloads: 529, rank: 761 }, { title: "Spoon River Anthology", author: "Masters, Edgar Lee", year: 1998, url: "https://www.gutenberg.org/ebooks/1280", characters: 147836, languages: ["en"], subjects: ["American poetry"], downloads: 528, rank: 762 }, { title: "Stories from Tagore", author: "Tagore, Rabindranath", year: 2010, url: "https://www.gutenberg.org/ebooks/33525", characters: 230715, languages: ["en"], subjects: ["India -- Social life and customs -- Fiction", "English language -- Textbooks for foreign speakers -- Indic", "Tagore, Rabindranath, 1861-1941 -- Translations into English", "Short stories, Bengali -- Translations into English"], downloads: 528, rank: 763 }, { title: "The Divine Comedy by Dante, Illustrated, Purgatory, Complete", author: "Dante Alighieri", year: 2004, url: "https://www.gutenberg.org/ebooks/8795", characters: 176375, languages: ["en"], subjects: ["Epic poetry, Italian -- Translations into English", "Italian poetry -- To 1400 -- Translations into English"], downloads: 528, rank: 764 }, { title: "Cicero: Letters to Atticus, Volume III (of 3)", author: "Cicero, Marcus Tullius", year: 2016, url: "https://www.gutenberg.org/ebooks/51403", characters: 584777, languages: ["en"], subjects: [], downloads: 527, rank: 765 }, { title: "McGuffey's First Eclectic Reader, Revised Edition", author: "McGuffey, William Holmes", year: 2005, url: "https://www.gutenberg.org/ebooks/14640", characters: 34174, languages: ["en"], subjects: ["Readers"], downloads: 525, rank: 766 }, { title: "Hawaiian Folk Tales: A Collection of Native Legends", author: "Unknown", year: 2006, url: "https://www.gutenberg.org/ebooks/18450", characters: 336875, languages: ["en"], subjects: ["Tales -- Hawaii", "Legends -- Hawaii"], downloads: 525, rank: 767 }, { title: "The Second Jungle Book", author: "Kipling, Rudyard", year: 1999, url: "https://www.gutenberg.org/ebooks/1937", characters: 293271, languages: ["en"], subjects: ["Mowgli (Fictitious character) -- Fiction", "India -- Fiction", "Jungle animals -- Fiction"], downloads: 525, rank: 768 }, { title: "The Hound of the Baskervilles", author: "Doyle, Arthur Conan", year: 2002, url: "https://www.gutenberg.org/ebooks/3070", characters: 272373, languages: ["en"], subjects: ["Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction", "Private investigators -- England -- Fiction", "Blessing and cursing -- Fiction", "Dogs -- Fiction", "Dartmoor (England) -- Fiction"], downloads: 524, rank: 769 }, { title: "Plutarch: Lives of the noble Grecians and Romans", author: "Plutarch", year: 1517, url: "https://www.gutenberg.org/ebooks/674", characters: 3616766, languages: ["en"], subjects: ["Greece -- Biography -- Early works to 1800", "Rome -- Biography -- Early works to 1800"], downloads: 524, rank: 770 }, { title: "The Story of the Three Little Pigs", author: "Brooke, L. Leslie (Leonard Leslie)", year: 2006, url: "https://www.gutenberg.org/ebooks/18155", characters: 4907, languages: ["en"], subjects: ["Fairy tales"], downloads: 523, rank: 771 }, { title: "The Crowd: A Study of the Popular Mind", author: "Le Bon, Gustave", year: 1895, url: "https://www.gutenberg.org/ebooks/445", characters: 288178, languages: ["en"], subjects: ["Crowds"], downloads: 522, rank: 772 }, { title: "The Cool War", author: "Fetler, Andrew", year: 2016, url: "https://www.gutenberg.org/ebooks/51256", characters: 27708, languages: ["en"], subjects: [], downloads: 522, rank: 773 }, { title: "The Iliad of Homer: Translated into English Blank Verse by William Cowper", author: "Homer", year: 2005, url: "https://www.gutenberg.org/ebooks/16452", characters: 872233, languages: ["en"], subjects: ["Epic poetry, Greek -- Translations into English", "Achilles (Mythological character) -- Poetry", "Trojan War -- Poetry"], downloads: 521, rank: 774 }, { title: "The Imitation of Christ", author: "Thomas, a Kempis", year: 1422, url: "https://www.gutenberg.org/ebooks/1653", characters: 290060, languages: ["en"], subjects: ["Meditations"], downloads: 520, rank: 775 }, { title: "Fifty Famous Stories Retold", author: "Baldwin, James", year: 2006, url: "https://www.gutenberg.org/ebooks/18442", characters: 142498, languages: ["en"], subjects: ["Readers", "Folklore", "History"], downloads: 519, rank: 776 }, { title: '"Everyman," with other interludes, including eight miracle plays', author: "Unknown", year: 2006, url: "https://www.gutenberg.org/ebooks/19481", characters: 275211, languages: ["en"], subjects: ["Mysteries and miracle-plays, English", "Moralities, English", "English drama -- To 1500", "Bible plays, English"], downloads: 519, rank: 777 }, { title: "The Fight Against Lynching: Anti-Lynching Work of the National Association for the Advancement of Colored People for the Year Nineteen Eighteen", author: "Anonymous", year: 2016, url: "https://www.gutenberg.org/ebooks/51317", characters: 30965, languages: ["en"], subjects: [], downloads: 519, rank: 778 }, { title: "The Boy Mechanic: Volume 1: 700 Things for Boys to Do", author: "Popular Mechanics Company", year: 2004, url: "https://www.gutenberg.org/ebooks/12655", characters: 1112426, languages: ["en"], subjects: ["Handicraft for boys"], downloads: 518, rank: 779 }, { title: "The Lock and Key Library: Classic Mystery and Detective Stories: Modern English", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/2038", characters: 580220, languages: ["en"], subjects: ["Detective and mystery stories, English", "Short stories", "Fiction"], downloads: 518, rank: 780 }, { title: "Motor Matt's Reverse: or, Caught in a Losing Cause", author: "Matthews, Stanley R.", year: 2016, url: "https://www.gutenberg.org/ebooks/51343", characters: 157763, languages: ["en"], subjects: [], downloads: 518, rank: 781 }, { title: "White Nights and Other Stories: The Novels of Fyodor Dostoevsky, Volume X", author: "Dostoyevsky, Fyodor", year: 2011, url: "https://www.gutenberg.org/ebooks/36034", characters: 552879, languages: ["en"], subjects: ["Russian fiction -- Translations into English", "Dostoyevsky, Fyodor, 1821-1881 -- Translations into English"], downloads: 517, rank: 782 }, { title: "The Satyricon \u2014 Volume 02: Dinner of Trimalchio", author: "Petronius Arbiter", year: 2004, url: "https://www.gutenberg.org/ebooks/5219", characters: 89032, languages: ["en"], subjects: ["Rome -- Fiction", "Satire, Latin -- Translations into English"], downloads: 517, rank: 783 }, { title: "Hunt the Hunter", author: "Neville, Kris", year: 2016, url: "https://www.gutenberg.org/ebooks/51433", characters: 28031, languages: ["en"], subjects: [], downloads: 515, rank: 784 }, { title: "The Complete Project Gutenberg Works of Jane Austen: A Linked Index of all PG Editions of Jane Austen", author: "Austen, Jane", year: 2010, url: "https://www.gutenberg.org/ebooks/31100", characters: 3720159, languages: ["en"], subjects: ["England -- Social life and customs -- Fiction", "Love stories, English"], downloads: 514, rank: 785 }, { title: "Poems", author: "Rilke, Rainer Maria", year: 2012, url: "https://www.gutenberg.org/ebooks/38594", characters: 51223, languages: ["en"], subjects: ["Poetry"], downloads: 513, rank: 786 }, { title: "Advance Agent", author: "Anvil, Christopher", year: 2016, url: "https://www.gutenberg.org/ebooks/51273", characters: 54431, languages: ["en"], subjects: [], downloads: 513, rank: 787 }, { title: "The Life of Reason: The Phases of Human Progress", author: "Santayana, George", year: 2005, url: "https://www.gutenberg.org/ebooks/15000", characters: 1686496, languages: ["en"], subjects: ["Philosophy"], downloads: 512, rank: 788 }, { title: "Twenty Thousand Leagues Under the Seas: An Underwater Tour of the World", author: "Verne, Jules", year: 1870, url: "https://www.gutenberg.org/ebooks/2488", characters: 738533, languages: ["en"], subjects: ["Submarines (Ships) -- Fiction", "Science fiction", "Sea stories", "Underwater exploration -- Fiction"], downloads: 511, rank: 789 }, { title: "Tamburlaine the Great \u2014 Part 1", author: "Marlowe, Christopher", year: 1997, url: "https://www.gutenberg.org/ebooks/1094", characters: 128897, languages: ["en"], subjects: ["English drama", "Historical drama", "Timur, 1336-1405 -- Drama", "Tragedies"], downloads: 510, rank: 790 }, { title: "Symbolic Logic", author: "Carroll, Lewis", year: 2009, url: "https://www.gutenberg.org/ebooks/28696", characters: 313684, languages: ["en"], subjects: ["Logic, Symbolic and mathematical"], downloads: 510, rank: 791 }, { title: "The Master Builder", author: "Ibsen, Henrik", year: 2003, url: "https://www.gutenberg.org/ebooks/4070", characters: 149464, languages: ["en"], subjects: ["Norwegian drama -- Translations into English", "Architects -- Drama"], downloads: 510, rank: 792 }, { title: "Poem Outlines", author: "Lanier, Sidney", year: 2016, url: "https://www.gutenberg.org/ebooks/51346", characters: 39817, languages: ["en"], subjects: [], downloads: 509, rank: 793 }, { title: "The Expression of the Emotions in Man and Animals", author: "Darwin, Charles", year: 1998, url: "https://www.gutenberg.org/ebooks/1227", characters: 557040, languages: ["en"], subjects: ["Instinct", "Expression", "Psychology, Comparative", "Emotions"], downloads: 508, rank: 794 }, { title: "A Doll's House", author: "Ibsen, Henrik", year: 2005, url: "https://www.gutenberg.org/ebooks/15492", characters: 125711, languages: ["en"], subjects: ["Wives -- Drama", "Man-woman relationships -- Drama", "Marriage -- Drama", "Norwegian drama -- Translations into English"], downloads: 508, rank: 795 }, { title: "Sartor Resartus: The Life and Opinions of Herr Teufelsdr\xF6ckh", author: "Carlyle, Thomas", year: 1997, url: "https://www.gutenberg.org/ebooks/1051", characters: 419819, languages: ["en"], subjects: ["Conduct of life -- Fiction", "Humorous stories", "Germany -- Fiction", "Satire", "Clothing and dress -- Fiction", "Philosophers -- Fiction", "Didactic fiction"], downloads: 507, rank: 796 }, { title: "An Old Babylonian Version of the Gilgamesh Epic", author: "Clay, Albert Tobias", year: 2006, url: "https://www.gutenberg.org/ebooks/11000", characters: 197157, languages: ["en"], subjects: ["Epic poetry, Assyro-Babylonian"], downloads: 506, rank: 797 }, { title: "Autobiography of Andrew Carnegie", author: "Carnegie, Andrew", year: 2006, url: "https://www.gutenberg.org/ebooks/17976", characters: 571703, languages: ["en"], subjects: ["Philanthropists -- United States -- Biography", "Carnegie, Andrew, 1835-1919", "Industrialists -- United States -- Biography"], downloads: 505, rank: 798 }, { title: "The Beggar's Opera; to Which is Prefixed the Musick to Each Song", author: "Gay, John", year: 2008, url: "https://www.gutenberg.org/ebooks/25063", characters: 99115, languages: ["en"], subjects: ["Ballad operas -- Librettos"], downloads: 503, rank: 799 }, { title: "The Elements of Drawing, in Three Letters to Beginners", author: "Ruskin, John", year: 2009, url: "https://www.gutenberg.org/ebooks/30325", characters: 346156, languages: ["en"], subjects: ["Drawing"], downloads: 503, rank: 800 }, { title: "The Virginian: A Horseman of the Plains", author: "Wister, Owen", year: 1998, url: "https://www.gutenberg.org/ebooks/1298", characters: 608632, languages: ["en"], subjects: ["Cowboys -- Fiction", "Wyoming -- Fiction", "Western stories", "Vigilantes -- Fiction", "Cattle stealing -- Fiction"], downloads: 502, rank: 801 }, { title: "The Germany and the Agricola of Tacitus", author: "Tacitus, Cornelius", year: 2005, url: "https://www.gutenberg.org/ebooks/7524", characters: 249362, languages: ["en"], subjects: ["Agricola, Gnaeus Julius, 40-93", "Germanic peoples -- Early works to 1800", "Statesmen -- Rome -- Biography -- Early works to 1800"], downloads: 502, rank: 802 }, { title: "Common Sense", author: "Paine, Thomas", year: 2003, url: "https://www.gutenberg.org/ebooks/3755", characters: 95718, languages: ["en"], subjects: ["Monarchy", "United States -- Politics and government -- 1775-1783", "Political science"], downloads: 501, rank: 803 }, { title: "Letters to His Son, Complete: On the Fine Art of Becoming a Man of the World and a Gentleman", author: "Chesterfield, Philip Dormer Stanhope, Earl of", year: 2004, url: "https://www.gutenberg.org/ebooks/3361", characters: 1382425, languages: ["en"], subjects: ["Conduct of life"], downloads: 500, rank: 804 }, { title: "Chain Reaction", author: "Ellanby, Boyd", year: 2016, url: "https://www.gutenberg.org/ebooks/51255", characters: 23251, languages: ["en"], subjects: [], downloads: 500, rank: 805 }, { title: "The Border and the Buffalo: An Untold Story of the Southwest Plains", author: "Cook, John R.", year: 2016, url: "https://www.gutenberg.org/ebooks/51448", characters: 483715, languages: ["en"], subjects: [], downloads: 499, rank: 806 }, { title: "The Beautiful and Damned", author: "Fitzgerald, F. Scott (Francis Scott)", year: 2006, url: "https://www.gutenberg.org/ebooks/9830", characters: 625494, languages: ["en"], subjects: ["Psychological fiction", "Alcoholics -- Fiction", "Married people -- Fiction", "New York (N.Y.) -- Fiction", "Inheritance and succession -- Fiction", "Domestic fiction", "Socialites -- Fiction", "Young men -- Fiction"], downloads: 499, rank: 807 }, { title: "The Picture of Dorian Gray", author: "Wilde, Oscar", year: 2003, url: "https://www.gutenberg.org/ebooks/4078", characters: 252052, languages: ["en"], subjects: ["London (England) -- History -- 1800-1950 -- Fiction", "Conduct of life -- Fiction", "Paranormal fiction", "Portraits -- Fiction", "Appearance (Philosophy) -- Fiction", "Supernatural -- Fiction", "Great Britain -- History -- Victoria, 1837-1901 -- Fiction", "Didactic fiction"], downloads: 497, rank: 808 }, { title: "Franklin's Way to Wealth: or, 'Poor Richard Improved'", author: "Franklin, Benjamin", year: 2013, url: "https://www.gutenberg.org/ebooks/43855", characters: 17389, languages: ["en"], subjects: [], downloads: 497, rank: 809 }, { title: "The Gift of the Magi", author: "Henry, O.", year: 2005, url: "https://www.gutenberg.org/ebooks/7256", characters: 9560, languages: ["en"], subjects: ["Gifts -- Fiction", "Short stories", "Christmas stories"], downloads: 497, rank: 810 }, { title: "1001 \u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u043B\u044F \u0443\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430", author: "Rachinskii, Sergei Aleksandrovich", year: 2005, url: "https://www.gutenberg.org/ebooks/16527", characters: 126930, languages: ["ru"], subjects: ["Word problems (Mathematics)", "Mathematics -- Problems, exercises, etc."], downloads: 496, rank: 811 }, { title: "The Golden Gems of Life: Gathered Jewels for the Home Circle", author: "Ferguson, S. C.", year: 2016, url: "https://www.gutenberg.org/ebooks/51374", characters: 775097, languages: ["en"], subjects: [], downloads: 493, rank: 812 }, { title: "Sordman the Protector", author: "Purdom, Tom", year: 2016, url: "https://www.gutenberg.org/ebooks/51445", characters: 38809, languages: ["en"], subjects: [], downloads: 491, rank: 813 }, { title: "Of Human Bondage", author: "Maugham, W. Somerset (William Somerset)", year: 2008, url: "https://www.gutenberg.org/ebooks/351", characters: 1201159, languages: ["en"], subjects: ["People with disabilities -- Fiction", "Artists -- Fiction", "Orphans -- Fiction", "Bildungsromans", "Physicians -- Fiction"], downloads: 490, rank: 814 }, { title: "French Mediaeval Romances from the Lays of Marie de France", author: "Marie, Queen of Rumania", year: 2004, url: "https://www.gutenberg.org/ebooks/11417", characters: 329626, languages: ["en"], subjects: ["Lays -- Translations into English", "Romances -- Translations into English", "Marie, de France, active 12th century -- Translations into English"], downloads: 489, rank: 815 }, { title: "Against the Grain", author: "Huysmans, J.-K. (Joris-Karl)", year: 2004, url: "https://www.gutenberg.org/ebooks/12341", characters: 312655, languages: ["en"], subjects: ["French fiction -- Translations into English"], downloads: 489, rank: 816 }, { title: "Browning's Shorter Poems", author: "Browning, Robert", year: 2005, url: "https://www.gutenberg.org/ebooks/16376", characters: 239594, languages: ["en"], subjects: ["English poetry"], downloads: 489, rank: 817 }, { title: "Mr. Spaceship", author: "Dick, Philip K.", year: 2010, url: "https://www.gutenberg.org/ebooks/32522", characters: 52070, languages: ["en"], subjects: ["Science fiction", "War stories", "Space ships -- Fiction"], downloads: 489, rank: 818 }, { title: "Ambition", author: "Bade, William L.", year: 2016, url: "https://www.gutenberg.org/ebooks/51274", characters: 38365, languages: ["en"], subjects: [], downloads: 488, rank: 819 }, { title: "Captain Blood", author: "Sabatini, Rafael", year: 1999, url: "https://www.gutenberg.org/ebooks/1965", characters: 552249, languages: ["en"], subjects: ["Historical fiction", "Caribbean Area -- Fiction", "Pirates -- Fiction", "Physicians -- Fiction", "Sea stories", "Adventure stories", "British -- Caribbean Area -- Fiction"], downloads: 487, rank: 820 }, { title: "Jane's All the World's Aircraft. 1913", author: "Unknown", year: 2011, url: "https://www.gutenberg.org/ebooks/34815", characters: 495674, languages: ["en"], subjects: ["Aeronautics -- Periodicals", "Airships -- Periodicals"], downloads: 487, rank: 821 }, { title: '"1812" Napoleon I in Russia', author: "Vereshchagin, Vasilii Vasilevich", year: 2016, url: "https://www.gutenberg.org/ebooks/51418", characters: 391785, languages: ["en"], subjects: [], downloads: 487, rank: 822 }, { title: "The Voyage of the Beagle", author: "Darwin, Charles", year: 1997, url: "https://www.gutenberg.org/ebooks/944", characters: 1013480, languages: ["en"], subjects: ["Natural history", "Voyages around the world -- History -- 19th century", "Beagle Expedition (1831-1836)", "South America -- Discovery and exploration", "Geology"], downloads: 487, rank: 823 }, { title: "Howards End", author: "Forster, E. M. (Edward Morgan)", year: 2001, url: "https://www.gutenberg.org/ebooks/2891", characters: 531013, languages: ["en"], subjects: ["Country homes -- Fiction", "Sisters -- Fiction", "Social classes -- Fiction", "Illegitimate children -- Fiction", "England -- Fiction", "Remarried people -- Fiction", "Inheritance and succession -- Fiction", "Domestic fiction"], downloads: 486, rank: 824 }, { title: "Modern Essays", author: "Unknown", year: 2011, url: "https://www.gutenberg.org/ebooks/38280", characters: 414673, languages: ["en"], subjects: ["American essays", "English essays"], downloads: 486, rank: 825 }, { title: "The Essays or Counsels, Civil and Moral", author: "Bacon, Francis", year: 1996, url: "https://www.gutenberg.org/ebooks/575", characters: 254896, languages: ["en"], subjects: ["English essays -- Early modern, 1500-1700"], downloads: 486, rank: 826 }, { title: "The Sketch-Book of Geoffrey Crayon", author: "Irving, Washington", year: 2e3, url: "https://www.gutenberg.org/ebooks/2048", characters: 634742, languages: ["en"], subjects: ["Hudson River Valley (N.Y. and N.J.) -- Fiction", "Americans -- England -- History -- 19th century", "Fantasy fiction, American", "Catskill Mountains Region (N.Y.) -- Fiction", "Irving, Washington, 1783-1859 -- Travel -- England", "England -- Social life and customs -- 19th century"], downloads: 485, rank: 827 }, { title: "What's Wrong with the World", author: "Chesterton, G. K. (Gilbert Keith)", year: 1999, url: "https://www.gutenberg.org/ebooks/1717", characters: 287275, languages: ["en"], subjects: ["Social problems"], downloads: 484, rank: 828 }, { title: "Fox's Book of Martyrs: Or A History of the Lives, Sufferings, and Triumphant; Deaths of the Primitive Protestant Martyrs", author: "Foxe, John", year: 2007, url: "https://www.gutenberg.org/ebooks/22400", characters: 1313898, languages: ["en"], subjects: ["Persecution", "Martyrs", "Church history"], downloads: 484, rank: 829 }, { title: "Hamlet, Prince of Denmark", author: "Shakespeare, William", year: 2009, url: "https://www.gutenberg.org/ebooks/27761", characters: 167162, languages: ["en"], subjects: ["Hamlet (Legendary character) -- Drama", "Tragedies", "Murder victims' families -- Drama", "Princes -- Drama", "Denmark -- Drama", "Fathers -- Death -- Drama", "Revenge -- Drama", "Kings and rulers -- Succession -- Drama"], downloads: 484, rank: 830 }, { title: "The Night Land", author: "Hodgson, William Hope", year: 2004, url: "https://www.gutenberg.org/ebooks/10662", characters: 821706, languages: ["en"], subjects: ["Science fiction"], downloads: 483, rank: 831 }, { title: "Three Ghost Stories", author: "Dickens, Charles", year: 2013, url: "https://www.gutenberg.org/ebooks/1289", characters: 99041, languages: ["en"], subjects: ["Ghost stories", "English fiction"], downloads: 483, rank: 832 }, { title: "The Skull", author: "Dick, Philip K.", year: 2009, url: "https://www.gutenberg.org/ebooks/30255", characters: 38008, languages: ["en"], subjects: ["Science fiction", "Short stories", "Time travel -- Fiction"], downloads: 483, rank: 833 }, { title: "The Story of Elizabeth Canning Considered", author: "Hill, John A. (John Alexander)", year: 2016, url: "https://www.gutenberg.org/ebooks/51334", characters: 48751, languages: ["en"], subjects: [], downloads: 483, rank: 834 }, { title: "The Voyage Out", author: "Woolf, Virginia", year: 2006, url: "https://www.gutenberg.org/ebooks/144", characters: 655337, languages: ["en"], subjects: ["Ocean travel -- Fiction", "Women travelers -- Fiction", "Bildungsromans", "Love stories", "Young women -- Fiction", "British -- South America -- Fiction"], downloads: 482, rank: 835 }, { title: "The Golden Asse", author: "Apuleius", year: 2006, url: "https://www.gutenberg.org/ebooks/1666", characters: 371394, languages: ["en"], subjects: ["Classical literature", "Metamorphosis -- Fiction"], downloads: 482, rank: 836 }, { title: "Letters of Abelard and Heloise: To which is prefix'd a particular account of their lives, amours, and misfortunes", author: "Heloise", year: 2011, url: "https://www.gutenberg.org/ebooks/35977", characters: 227069, languages: ["en"], subjects: ["Abelard, Peter, 1079-1142 -- Correspondence", "Love-letters", "Authors, Latin (Medieval and modern) -- France -- Correspondence", "H\xE9lo\xEFse, approximately 1095-1163 or 1164 -- Correspondence"], downloads: 482, rank: 837 }, { title: "The Montessori Method: Scientific Pedagogy as Applied to Child Education in 'The Children's Houses' with Additions and Revisions by the Author", author: "Montessori, Maria", year: 2012, url: "https://www.gutenberg.org/ebooks/39863", characters: 600723, languages: ["en"], subjects: ["Montessori method of education"], downloads: 482, rank: 838 }, { title: "The German Classics from the Fourth to the Nineteenth Century, Vol. 1 (of 2)", author: "Muller, F. Max (Friedrich Max)", year: 2016, url: "https://www.gutenberg.org/ebooks/51389", characters: 1034461, languages: ["de"], subjects: [], downloads: 482, rank: 839 }, { title: "Night and Day", author: "Woolf, Virginia", year: 1998, url: "https://www.gutenberg.org/ebooks/1245", characters: 812422, languages: ["en"], subjects: ["Biographers -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Poets -- Family relationships -- Fiction", "London (England) -- Fiction", "Mothers and daughters -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 481, rank: 840 }, { title: "The Scarlet Letter", author: "Hawthorne, Nathaniel", year: 2008, url: "https://www.gutenberg.org/ebooks/25344", characters: 421010, languages: ["en"], subjects: ["Boston (Mass.) -- History -- Colonial period, ca. 1600-1775 -- Fiction", "Revenge -- Fiction", "Psychological fiction", "Triangles (Interpersonal relations) -- Fiction", "Women immigrants -- Fiction", "Illegitimate children -- Fiction", "Historical fiction", "Married women -- Fiction", "Clergy -- Fiction", "Puritans -- Fiction", "Adultery -- Fiction"], downloads: 481, rank: 841 }, { title: "The Mystery of the Yellow Room", author: "Leroux, Gaston", year: 1999, url: "https://www.gutenberg.org/ebooks/1685", characters: 356919, languages: ["en"], subjects: ["Detective and mystery stories", "Rouletabille, Joseph (Fictitious character) -- Fiction", "Reporters and reporting -- Fiction"], downloads: 480, rank: 842 }, { title: '"De Bello Gallico" and Other Commentaries', author: "Caesar, Julius", year: 2004, url: "https://www.gutenberg.org/ebooks/10657", characters: 798061, languages: ["en"], subjects: ["Rome -- History -- Civil War, 49-48 B.C.", "Gaul -- History -- Gallic Wars, 58-51 B.C."], downloads: 478, rank: 843 }, { title: "Myths & Legends of the Celtic Race", author: "Rolleston, T. W. (Thomas William)", year: 2010, url: "https://www.gutenberg.org/ebooks/34081", characters: 683116, languages: ["en"], subjects: ["Mythology, Celtic", "Celts -- Religion"], downloads: 478, rank: 844 }, { title: "The 2010 CIA World Factbook", author: "United States. Central Intelligence Agency", year: 2011, url: "https://www.gutenberg.org/ebooks/35830", characters: 10286089, languages: ["en"], subjects: ["Political science -- Handbooks, manuals, etc.", "World politics -- Handbooks, manuals, etc.", "Political statistics -- Handbooks, manuals, etc.", "Geography -- Handbooks, manuals, etc."], downloads: 478, rank: 845 }, { title: "The Inspector-General", author: "Gogol, Nikolai Vasilevich", year: 2003, url: "https://www.gutenberg.org/ebooks/3735", characters: 144918, languages: ["en"], subjects: ["Russia -- Social life and customs -- Drama", "Russian drama -- Translations into English", "Comedies"], downloads: 478, rank: 846 }, { title: "Toadstools, mushrooms, fungi, edible and poisonous; one thousand American fungi", author: "Macadam, Robert K.", year: 2016, url: "https://www.gutenberg.org/ebooks/51393", characters: 1363230, languages: ["en"], subjects: [], downloads: 478, rank: 847 }, { title: "The Garden Party, and Other Stories", author: "Mansfield, Katherine", year: 1998, url: "https://www.gutenberg.org/ebooks/1429", characters: 274198, languages: ["en"], subjects: ["Short stories, New Zealand", "New Zealand -- Social life and customs -- Fiction"], downloads: 477, rank: 848 }, { title: "Micromegas", author: "Voltaire", year: 2009, url: "https://www.gutenberg.org/ebooks/30123", characters: 37744, languages: ["en"], subjects: ["Life on other planets -- Fiction", "Voyages, Imaginary -- Fiction", "Interplanetary voyages -- Fiction", "Short stories", "Science fiction"], downloads: 477, rank: 849 }, { title: "Platero y yo", author: "Jimenez, Juan Ramon", year: 2006, url: "https://www.gutenberg.org/ebooks/9980", characters: 173502, languages: ["es"], subjects: ["Authors -- Fiction", "Andalusia (Spain) -- Social life and customs -- Fiction", "Donkeys -- Fiction"], downloads: 476, rank: 850 }, { title: "The Analects of Confucius (from the Chinese Classics)", author: "Confucius", year: 2002, url: "https://www.gutenberg.org/ebooks/3330", characters: 138419, languages: ["en"], subjects: ["Ethics -- China", "Philosophy, Chinese"], downloads: 475, rank: 851 }, { title: "English Fairy Tales", author: "Unknown", year: 2005, url: "https://www.gutenberg.org/ebooks/7439", characters: 274260, languages: ["en"], subjects: ["Folklore -- England", "Fairy tales -- England"], downloads: 475, rank: 852 }, { title: "The Ambassadors", author: "James, Henry", year: 1996, url: "https://www.gutenberg.org/ebooks/432", characters: 775285, languages: ["en"], subjects: ["Paris (France) -- Fiction", "Man-woman relationships -- Fiction", "Americans -- France -- Fiction", "Psychological fiction", "Young men -- Fiction"], downloads: 474, rank: 853 }, { title: "A Pail of Air", author: "Leiber, Fritz", year: 2016, url: "https://www.gutenberg.org/ebooks/51461", characters: 25861, languages: ["en"], subjects: [], downloads: 473, rank: 854 }, { title: "Hung Lou Meng, or, the Dream of the Red Chamber, a Chinese Novel, Book I", author: "Cao, Xueqin", year: 2006, url: "https://www.gutenberg.org/ebooks/9603", characters: 874241, languages: ["en"], subjects: ["Autobiographical fiction", "China -- History -- Qing dynasty, 1644-1912 -- Fiction", "Domestic fiction", "Cao, Xueqin, approximately 1717-1763 -- Fiction", "Jia, Baoyu (Fictitious character) -- Fiction"], downloads: 473, rank: 855 }, { title: "The Red House Mystery", author: "Milne, A. A. (Alan Alexander)", year: 1999, url: "https://www.gutenberg.org/ebooks/1872", characters: 287012, languages: ["en"], subjects: ["England -- Fiction", "Detective and mystery stories"], downloads: 472, rank: 856 }, { title: "The Mystery of Edwin Drood", author: "Dickens, Charles", year: 2010, url: "https://www.gutenberg.org/ebooks/564", characters: 464174, languages: ["en"], subjects: ["Psychological fiction", "Triangles (Interpersonal relations) -- Fiction", "Missing persons -- Fiction", "England -- Fiction", "Mystery fiction", "Choral conductors -- Fiction", "Cathedrals -- Fiction", "Separation (Psychology) -- Fiction"], downloads: 472, rank: 857 }, { title: "Theresa Raquin", author: "Zola, Emile", year: 2006, url: "https://www.gutenberg.org/ebooks/6626", characters: 346902, languages: ["en"], subjects: ["Murder -- Fiction", "Guilt -- Fiction", "Adultery -- Fiction"], downloads: 471, rank: 858 }, { title: "The Prisoner of Zenda", author: "Hope, Anthony", year: 2006, url: "https://www.gutenberg.org/ebooks/95", characters: 246183, languages: ["en"], subjects: ["British -- Foreign countries -- Fiction", "Impostors and imposture -- Fiction", "Adventure stories"], downloads: 471, rank: 859 }, { title: "Orthodoxy", author: "Chesterton, G. K. (Gilbert Keith)", year: 2005, url: "https://www.gutenberg.org/ebooks/16769", characters: 300209, languages: ["en"], subjects: ["Christianity -- Essence, genius, nature", "Apologetics", "Chesterton, G. K. (Gilbert Keith), 1874-1936"], downloads: 470, rank: 860 }, { title: "The Swiss Family Robinson; or Adventures in a Desert Island", author: "Wyss, Johann David", year: 2004, url: "https://www.gutenberg.org/ebooks/11703", characters: 574215, languages: ["en"], subjects: ["Family life -- Fiction", "Survival -- Fiction", "Islands -- Fiction"], downloads: 469, rank: 861 }, { title: "New Latin Grammar", author: "Bennett, Charles E. (Charles Edwin)", year: 2005, url: "https://www.gutenberg.org/ebooks/15665", characters: 463619, languages: ["en"], subjects: ["Latin language -- Grammar"], downloads: 469, rank: 862 }, { title: "Gulliver's Travels into Several Remote Regions of the World", author: "Swift, Jonathan", year: 2005, url: "https://www.gutenberg.org/ebooks/17157", characters: 245686, languages: ["en"], subjects: ["Fantasy fiction", "Satire", "Voyages, Imaginary -- Early works to 1800", "Travelers -- Fiction", "Gulliver, Lemuel (Fictitious character) -- Fiction"], downloads: 469, rank: 863 }, { title: "A History of Indian Philosophy, Volume 1", author: "Dasgupta, Surendranath", year: 2004, url: "https://www.gutenberg.org/ebooks/12956", characters: 1154886, languages: ["en"], subjects: ["Hindu philosophy", "India -- Religion"], downloads: 468, rank: 864 }, { title: "Little Men", author: "Alcott, Louisa May", year: 2001, url: "https://www.gutenberg.org/ebooks/2788", characters: 474837, languages: ["en"], subjects: ["New England -- History -- 19th century -- Fiction", "Family life -- New England -- Fiction", "Boarding schools -- Fiction", "Schools -- Fiction"], downloads: 468, rank: 865 }, { title: "Clarissa Harlowe; or the history of a young lady \u2014 Volume 1", author: "Richardson, Samuel", year: 2005, url: "https://www.gutenberg.org/ebooks/9296", characters: 492734, languages: ["en"], subjects: ["Psychological fiction", "Epistolary fiction", "England -- Fiction", "Young women -- Crimes against -- Fiction", "Conflict of generations -- Fiction", "Rape victims -- Fiction", "Kidnapping victims -- Fiction"], downloads: 468, rank: 866 }, { title: "The Chemistry of Food and Nutrition", author: "Duncan, A. W.", year: 2005, url: "https://www.gutenberg.org/ebooks/15237", characters: 172239, languages: ["en"], subjects: ["Vegetarianism", "Food -- Analysis", "Diet"], downloads: 467, rank: 867 }, { title: "Flappers and Philosophers", author: "Fitzgerald, F. Scott (Francis Scott)", year: 2003, url: "https://www.gutenberg.org/ebooks/4368", characters: 301886, languages: ["en"], subjects: ["Short stories, American", "Fiction"], downloads: 467, rank: 868 }, { title: "La chanson des vieux \xE9poux", author: "Loti, Pierre", year: 2016, url: "https://www.gutenberg.org/ebooks/51313", characters: 15025, languages: ["fr"], subjects: [], downloads: 467, rank: 869 }, { title: "Euthyphro", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1642", characters: 43113, languages: ["en"], subjects: ["Classical literature", "Philosophy, Ancient", "Socrates, 470 BC-399 BC", "Piety -- Early works to 1800"], downloads: 466, rank: 870 }, { title: "Hesiod, the Homeric Hymns, and Homerica", author: "Hesiod", year: 2008, url: "https://www.gutenberg.org/ebooks/348", characters: 441248, languages: ["en"], subjects: ["Epic poetry, Greek -- Translations into English", "Hymns, Greek (Classical) -- Translations into English", "Gods, Greek -- Poetry", "Epic poetry, Greek", "Hesiod -- Translations into English"], downloads: 466, rank: 871 }, { title: "The Furious Rose", author: "Evans, Dean", year: 2016, url: "https://www.gutenberg.org/ebooks/51257", characters: 21990, languages: ["en"], subjects: [], downloads: 466, rank: 872 }, { title: "The Writings of Thomas Paine \u2014 Volume 2 (1779-1792): The Rights of Man", author: "Paine, Thomas", year: 2003, url: "https://www.gutenberg.org/ebooks/3742", characters: 461496, languages: ["en"], subjects: ["Great Britain -- Politics and government -- 1760-1820", "France -- History -- Revolution, 1789-1799 -- Causes", "Burke, Edmund, 1729-1797. Reflections on the revolution in France", "Political science"], downloads: 465, rank: 873 }, { title: "Nursing as Caring: A Model for Transforming Practice", author: "Boykin, Anne", year: 2013, url: "https://www.gutenberg.org/ebooks/42988", characters: 198690, languages: ["en"], subjects: [], downloads: 465, rank: 874 }, { title: "The Secret Sharer", author: "Conrad, Joseph", year: 1995, url: "https://www.gutenberg.org/ebooks/220", characters: 75367, languages: ["en"], subjects: ["Ship captains -- Fiction", "Fugitives from justice -- Fiction", "Psychological fiction", "Sea stories"], downloads: 463, rank: 875 }, { title: "The Common Law", author: "Holmes, Oliver Wendell", year: 2e3, url: "https://www.gutenberg.org/ebooks/2449", characters: 625340, languages: ["en"], subjects: ["Common law"], downloads: 463, rank: 876 }, { title: "The Luck of Roaring Camp and Other Tales: With Condensed Novels, Spanish and American Legends, and Earlier Papers", author: "Harte, Bret", year: 2004, url: "https://www.gutenberg.org/ebooks/6373", characters: 649524, languages: ["en"], subjects: ["Western stories", "Frontier and pioneer life -- West (U.S.) -- Fiction"], downloads: 463, rank: 877 }, { title: "The Soul of Man under Socialism", author: "Wilde, Oscar", year: 2014, url: "https://www.gutenberg.org/ebooks/1017", characters: 69161, languages: ["en"], subjects: ["Socialism"], downloads: 462, rank: 878 }, { title: "The French Revolution: A History", author: "Carlyle, Thomas", year: 2006, url: "https://www.gutenberg.org/ebooks/1301", characters: 1610702, languages: ["en"], subjects: ["France -- History -- Revolution, 1789-1799", "France -- History -- Louis XVI, 1774-1793"], downloads: 462, rank: 879 }, { title: "O Pioneers!", author: "Cather, Willa", year: 1992, url: "https://www.gutenberg.org/ebooks/24", characters: 254122, languages: ["en"], subjects: ["Swedish Americans -- Fiction", "Women pioneers -- Fiction", "Women farmers -- Fiction", "Domestic fiction", "Women immigrants -- Fiction", "Frontier and pioneer life -- Nebraska -- Fiction", "Historical fiction", "Nebraska -- Fiction", "Brothers and sisters -- Fiction", "Farm life -- Fiction"], downloads: 461, rank: 880 }, { title: "The Lady of the Lake", author: "Scott, Walter", year: 2002, url: "https://www.gutenberg.org/ebooks/3011", characters: 391852, languages: ["en"], subjects: ["Arthurian romances", "Lady of the Lake (Legendary character) -- Romances"], downloads: 461, rank: 881 }, { title: "The Story of Mankind", author: "Van Loon, Hendrik Willem", year: 1996, url: "https://www.gutenberg.org/ebooks/754", characters: 637026, languages: ["en"], subjects: ["World history", "World history -- Juvenile literature"], downloads: 461, rank: 882 }, { title: "A Boy's Will", author: "Frost, Robert", year: 2002, url: "https://www.gutenberg.org/ebooks/3021", characters: 26318, languages: ["en"], subjects: ["American poetry -- 20th century"], downloads: 460, rank: 883 }, { title: "Les Fleurs du Mal", author: "Baudelaire, Charles", year: 2004, url: "https://www.gutenberg.org/ebooks/6099", characters: 131501, languages: ["fr"], subjects: ["Poetry"], downloads: 460, rank: 884 }, { title: "Studies in the Psychology of Sex, Volume 1: The Evolution of Modesty; The Phenomena of Sexual Periodicity; Auto-Erotism", author: "Ellis, Havelock", year: 2004, url: "https://www.gutenberg.org/ebooks/13610", characters: 740616, languages: ["en"], subjects: ["Sex (Psychology)", "Sex"], downloads: 459, rank: 885 }, { title: "The Art of War", author: "Sunzi, active 6th century B.C.", year: 2005, url: "https://www.gutenberg.org/ebooks/17405", characters: 53504, languages: ["en"], subjects: ["Military art and science -- Early works to 1800", "War -- Early works to 1800"], downloads: 458, rank: 886 }, { title: "Sketches New and Old", author: "Twain, Mark", year: 2002, url: "https://www.gutenberg.org/ebooks/3189", characters: 466586, languages: ["en"], subjects: ["United States -- Social life and customs -- Fiction", "Humorous stories, American"], downloads: 458, rank: 887 }, { title: "Hegel's Philosophy of Mind", author: "Hegel, Georg Wilhelm Friedrich", year: 2012, url: "https://www.gutenberg.org/ebooks/39064", characters: 629417, languages: ["en"], subjects: ["Philosophy"], downloads: 458, rank: 888 }, { title: "The Madman: His Parables and Poems", author: "Gibran, Kahlil", year: 2004, url: "https://www.gutenberg.org/ebooks/5616", characters: 32207, languages: ["en"], subjects: ["Mysticism -- Poetry", "Parables"], downloads: 458, rank: 889 }, { title: "Nicolo Paganini: His Life and Work", author: "Stratton, Stephen S. (Stephen Samuel)", year: 2012, url: "https://www.gutenberg.org/ebooks/39571", characters: 289437, languages: ["en"], subjects: ["Paganini, Nicol\xF2, 1782-1840", "Violinists -- Biography"], downloads: 457, rank: 890 }, { title: "The Imaginary Invalid", author: "Moliere", year: 2003, url: "https://www.gutenberg.org/ebooks/9070", characters: 93964, languages: ["en"], subjects: ["Moli\xE8re, 1622-1673 -- Translations into English", "Hypochondria -- Drama", "Comedies"], downloads: 457, rank: 891 }, { title: "Rilla of Ingleside", author: "Montgomery, L. M. (Lucy Maud)", year: 2003, url: "https://www.gutenberg.org/ebooks/3796", characters: 482994, languages: ["en"], subjects: ["World War, 1914-1918 -- Prince Edward Island -- Juvenile fiction", "Country life -- Canada -- Juvenile fiction", "Prince Edward Island -- Juvenile fiction"], downloads: 455, rank: 892 }, { title: "The Tale of Benjamin Bunny", author: "Potter, Beatrix", year: 2004, url: "https://www.gutenberg.org/ebooks/14407", characters: 6177, languages: ["en"], subjects: ["Rabbits -- Juvenile fiction"], downloads: 454, rank: 893 }, { title: "Line and Form (1900)", author: "Crane, Walter", year: 2008, url: "https://www.gutenberg.org/ebooks/25290", characters: 241540, languages: ["en"], subjects: ["Decoration and ornament", "Drawing"], downloads: 454, rank: 894 }, { title: "American Notes", author: "Dickens, Charles", year: 2013, url: "https://www.gutenberg.org/ebooks/675", characters: 499881, languages: ["en"], subjects: ["United States -- Social life and customs -- 1783-1865", "Dickens, Charles, 1812-1870 -- Travel -- United States", "United States -- Description and travel"], downloads: 454, rank: 895 }, { title: "Laws", author: "Plato", year: 1999, url: "https://www.gutenberg.org/ebooks/1750", characters: 1125953, languages: ["en"], subjects: ["Political science -- Early works to 1800", "State, The -- Early works to 1800"], downloads: 453, rank: 896 }, { title: "Demian: Die Geschichte von Emil Sinclairs Jugend", author: "Hesse, Hermann", year: 2013, url: "https://www.gutenberg.org/ebooks/41907", characters: 249434, languages: ["de"], subjects: [], downloads: 453, rank: 897 }, { title: "The Autobiography of an Ex-Colored Man", author: "Johnson, James Weldon", year: 2004, url: "https://www.gutenberg.org/ebooks/11012", characters: 237815, languages: ["en"], subjects: ["Racially mixed people -- Fiction", "African American men -- Fiction"], downloads: 452, rank: 898 }, { title: "The Complete Poetical Works of Edgar Allan Poe: Including Essays on Poetry", author: "Poe, Edgar Allan", year: 2003, url: "https://www.gutenberg.org/ebooks/10031", characters: 308412, languages: ["en"], subjects: ["Fantasy poetry, American"], downloads: 451, rank: 899 }, { title: "The Diary of a Nobody", author: "Grossmith, Weedon", year: 2011, url: "https://www.gutenberg.org/ebooks/1026", characters: 194604, languages: ["en"], subjects: ["Humorous stories", "Men -- England -- Fiction", "Diary fiction", "England -- Fiction", "Suburban life -- Fiction", "Middle class -- Fiction"], downloads: 451, rank: 900 }, { title: "Bradford's History of 'Plimoth Plantation': From the Original Manuscript. With a Report of the Proceedings Incident to the Return of the Manuscript to Massachusetts", author: "Bradford, William", year: 2008, url: "https://www.gutenberg.org/ebooks/24950", characters: 808901, languages: ["en"], subjects: ["Massachusetts -- History -- Colonial period, ca. 1600-1775"], downloads: 451, rank: 901 }, { title: "The Real Mother Goose", author: "Unknown", year: 2004, url: "https://www.gutenberg.org/ebooks/10607", characters: 75688, languages: ["en"], subjects: ["Nursery rhymes", "Children's poetry"], downloads: 450, rank: 902 }, { title: "Uncle Remus and Brer Rabbit", author: "Harris, Joel Chandler", year: 2007, url: "https://www.gutenberg.org/ebooks/22282", characters: 30239, languages: ["en"], subjects: ["Plantation life -- Fiction", "Animals -- Fiction", "African American men -- Fiction", "Remus, Uncle (Fictitious character) -- Fiction", "Georgia -- Social life and customs -- Fiction"], downloads: 450, rank: 903 }, { title: "The Rubaiyat of Omar Khayyam", author: "Omar Khayyam", year: 1995, url: "https://www.gutenberg.org/ebooks/246", characters: 58957, languages: ["en"], subjects: ["Persian poetry -- Translations into English"], downloads: 450, rank: 904 }, { title: "A Dictionary of Cebuano Visayan", author: "Wolff, John U.", year: 2012, url: "https://www.gutenberg.org/ebooks/40074", characters: 4658929, languages: ["en"], subjects: ["Cebuano language -- Dictionaries -- English"], downloads: 450, rank: 905 }, { title: "Lords and Lovers: and Other Dramas", author: "Dargan, Olive Tilford", year: 2016, url: "https://www.gutenberg.org/ebooks/51282", characters: 356882, languages: ["en"], subjects: [], downloads: 450, rank: 906 }, { title: "The Slang Dictionary: Etymological, Historical and Andecdotal", author: "Hotten, John Camden", year: 2013, url: "https://www.gutenberg.org/ebooks/42108", characters: 847901, languages: ["en"], subjects: [], downloads: 449, rank: 907 }, { title: "Tales of Terror and Mystery", author: "Doyle, Arthur Conan", year: 1996, url: "https://www.gutenberg.org/ebooks/537", characters: 349340, languages: ["en"], subjects: ["Detective and mystery stories, English", "Horror tales, English"], downloads: 449, rank: 908 }, { title: "Martin Eden", author: "London, Jack", year: 2004, url: "https://www.gutenberg.org/ebooks/1056", characters: 657206, languages: ["en"], subjects: ["Bildungsromans", "Autobiographical fiction", "Authors -- Fiction", "San Francisco (Calif.) -- Fiction", "Working class -- Fiction", "Young men -- Fiction"], downloads: 448, rank: 909 }, { title: "The Tragical History of Doctor Faustus: From the Quarto of 1616", author: "Marlowe, Christopher", year: 1997, url: "https://www.gutenberg.org/ebooks/811", characters: 114433, languages: ["en"], subjects: ["Magicians -- Drama", "Tragedies", "Germany -- Drama", "Faust, -approximately 1540 -- Drama"], downloads: 448, rank: 910 }, { title: "The Arabian Nights Entertainments", author: "Lang, Andrew", year: 2008, url: "https://www.gutenberg.org/ebooks/128", characters: 504353, languages: ["en"], subjects: ["Fairy tales -- Arab countries", "Fairy tales", "Folklore -- Arab countries", "Children's stories", "Tales -- Arab countries", "Arabs -- Folklore"], downloads: 447, rank: 911 }, { title: "Four Weird Tales", author: "Blackwood, Algernon", year: 2005, url: "https://www.gutenberg.org/ebooks/16726", characters: 269395, languages: ["en"], subjects: ["Fantasy fiction, English", "Horror tales, English", "Supernatural -- Fiction"], downloads: 445, rank: 912 }, { title: "Daemonologie.", author: "James I, King of England", year: 2008, url: "https://www.gutenberg.org/ebooks/25929", characters: 130985, languages: ["en"], subjects: ["Witchcraft -- Scotland", "Fian, John, d. 1591", "Magic", "Demonology"], downloads: 443, rank: 913 }, { title: "A Beginner's Psychology", author: "Titchener, Edward Bradford", year: 2016, url: "https://www.gutenberg.org/ebooks/51442", characters: 541032, languages: ["en"], subjects: [], downloads: 443, rank: 914 }, { title: "The History of Mary Prince, a West Indian Slave", author: "Prince, Mary", year: 2006, url: "https://www.gutenberg.org/ebooks/17851", characters: 125085, languages: ["en"], subjects: ["Fugitive slaves -- West Indies -- Biography", "Slavery -- West Indies", "Prince, Mary"], downloads: 442, rank: 915 }, { title: "Mary Barton", author: "Gaskell, Elizabeth Cleghorn", year: 1848, url: "https://www.gutenberg.org/ebooks/2153", characters: 744592, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Trials (Murder) -- Fiction", "Political fiction", "Domestic fiction", "Poor families -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Manchester (England) -- Fiction", "Working class women -- Fiction", "Labor unions -- Fiction", "Textile industry -- Fiction", "Love stories"], downloads: 442, rank: 916 }, { title: "The Little White Bird; Or, Adventures in Kensington Gardens", author: "Barrie, J. M. (James Matthew)", year: 1998, url: "https://www.gutenberg.org/ebooks/1376", characters: 296337, languages: ["en"], subjects: ["Fairies -- Fiction", "Kensington Gardens (London, England) -- Fiction", "Kensington (London, England) -- Fiction", "Adventure stories", "Peter Pan (Fictitious character) -- Fiction"], downloads: 441, rank: 917 }, { title: "Capture and Escape: A Narrative of Army and Prison Life", author: "Kellogg, John Azor", year: 2016, url: "https://www.gutenberg.org/ebooks/51451", characters: 188784, languages: ["en"], subjects: [], downloads: 441, rank: 918 }, { title: "The Critique of Practical Reason", author: "Kant, Immanuel", year: 2004, url: "https://www.gutenberg.org/ebooks/5683", characters: 315751, languages: ["en"], subjects: ["Philosophy, German", "Ethics", "Practical reason"], downloads: 441, rank: 919 }, { title: "The Poetical Works of John Milton", author: "Milton, John", year: 1999, url: "https://www.gutenberg.org/ebooks/1745", characters: 715335, languages: ["en"], subjects: ["English poetry"], downloads: 440, rank: 920 }, { title: "The Complete Poems of Paul Laurence Dunbar", author: "Dunbar, Paul Laurence", year: 2006, url: "https://www.gutenberg.org/ebooks/18338", characters: 404516, languages: ["en"], subjects: ["African Americans -- Poetry"], downloads: 440, rank: 921 }, { title: "The Flowers of Evil", author: "Baudelaire, Charles", year: 2011, url: "https://www.gutenberg.org/ebooks/36098", characters: 40830, languages: ["en"], subjects: ["French poetry -- Translations into English"], downloads: 440, rank: 922 }, { title: "Woodcraft and Camping", author: "Sears, George Washington", year: 2010, url: "https://www.gutenberg.org/ebooks/34607", characters: 181622, languages: ["en"], subjects: ["Camping"], downloads: 439, rank: 923 }, { title: "Woyzeck", author: "Buchner, Georg", year: 2004, url: "https://www.gutenberg.org/ebooks/5322", characters: 34610, languages: ["de"], subjects: ["Murderers -- Drama", "Soldiers -- Mental health -- Drama", "Germany -- Drama"], downloads: 439, rank: 924 }, { title: "Hamewith", author: "Murray, Charles Theodore", year: 2016, url: "https://www.gutenberg.org/ebooks/51412", characters: 71487, languages: ["en"], subjects: [], downloads: 438, rank: 925 }, { title: "Die Leiden des jungen Werther \u2014 Band 1", author: "Goethe, Johann Wolfgang von", year: 1774, url: "https://www.gutenberg.org/ebooks/2407", characters: 94674, languages: ["de"], subjects: ["Unrequited love -- Fiction", "Young men -- Germany -- Fiction", "Germany -- Social life and customs -- Fiction"], downloads: 437, rank: 926 }, { title: "Narrative and Critical History of America, Vol. IV (of 8): French Explorations and Settlements in North America and Those of the Portuguese, Dutch, and Swedes 1500-1700", author: "Various", year: 2016, url: "https://www.gutenberg.org/ebooks/51291", characters: 1516176, languages: ["en"], subjects: [], downloads: 437, rank: 927 }, { title: "The Zen Experience", author: "Hoover, Thomas", year: 2010, url: "https://www.gutenberg.org/ebooks/34325", characters: 499508, languages: ["en"], subjects: ["Zen priests -- Biography", "Zen Buddhism -- History"], downloads: 436, rank: 928 }, { title: "An Elephant for the Prinkip", author: "Wesley, Joseph", year: 2016, url: "https://www.gutenberg.org/ebooks/51434", characters: 17888, languages: ["en"], subjects: [], downloads: 436, rank: 929 }, { title: "Pennsylvania Dutch Cooking", author: "Unknown", year: 2008, url: "https://www.gutenberg.org/ebooks/26558", characters: 83183, languages: ["en"], subjects: ["Cooking -- Pennsylvania"], downloads: 435, rank: 930 }, { title: "The Hanging Stranger", author: "Dick, Philip K.", year: 2012, url: "https://www.gutenberg.org/ebooks/41562", characters: 25847, languages: ["en"], subjects: ["Science fiction", "Short stories"], downloads: 435, rank: 931 }, { title: "The Coral Island: A Tale of the Pacific Ocean", author: "Ballantyne, R. M. (Robert Michael)", year: 2007, url: "https://www.gutenberg.org/ebooks/646", characters: 457891, languages: ["en"], subjects: ["Outdoor life -- Juvenile fiction", "Oceania -- Juvenile fiction", "Shipwrecks -- Juvenile fiction", "Robinsonades", "Conduct of life -- Juvenile fiction", "Islands -- Juvenile fiction", "Pirates -- Juvenile fiction", "Survival skills -- Juvenile fiction", "Natural history -- Juvenile fiction", "Camping -- Juvenile fiction", "Shipwreck survival -- Juvenile fiction"], downloads: 435, rank: 932 }, { title: "The Wonderful Wizard of Oz", author: "Baum, L. Frank (Lyman Frank)", year: 2014, url: "https://www.gutenberg.org/ebooks/43936", characters: 180730, languages: ["en"], subjects: [], downloads: 434, rank: 933 }, { title: "The World Set Free", author: "Wells, H. G. (Herbert George)", year: 2006, url: "https://www.gutenberg.org/ebooks/1059", characters: 324138, languages: ["en"], subjects: ["Nuclear warfare -- Fiction", "Imaginary wars and battles -- Fiction", "War stories"], downloads: 432, rank: 934 }, { title: "The Religion of the Ancient Celts", author: "MacCulloch, J. A. (John Arnott)", year: 2005, url: "https://www.gutenberg.org/ebooks/14672", characters: 672025, languages: ["en"], subjects: ["Mythology, Celtic", "Celts -- Religion"], downloads: 432, rank: 935 }, { title: "Short Stories", author: "Dostoyevsky, Fyodor", year: 2012, url: "https://www.gutenberg.org/ebooks/40745", characters: 380552, languages: ["en"], subjects: ["Russia -- Social life and customs -- Fiction", "Dostoyevsky, Fyodor, 1821-1881 -- Translations into English", "Short stories, Russian -- Translations into English"], downloads: 432, rank: 936 }, { title: "Wives and Daughters", author: "Gaskell, Elizabeth Cleghorn", year: 2001, url: "https://www.gutenberg.org/ebooks/4274", characters: 1262322, languages: ["en"], subjects: ["Fathers and daughters -- Fiction", "Stepfamilies -- Fiction", "Social classes -- Fiction", "Children of physicians -- Fiction", "Bildungsromans", "England -- Fiction", "Domestic fiction", "Young women -- Fiction", "Love stories"], downloads: 432, rank: 937 }, { title: "A Defence of Poetry and Other Essays", author: "Shelley, Percy Bysshe", year: 2004, url: "https://www.gutenberg.org/ebooks/5428", characters: 146528, languages: ["en"], subjects: ["English essays", "Poetry"], downloads: 432, rank: 938 }, { title: "Hunger", author: "Hamsun, Knut", year: 2005, url: "https://www.gutenberg.org/ebooks/8387", characters: 300792, languages: ["en"], subjects: ["Authors -- Fiction", "Norway -- Fiction", "Hunger -- Fiction", "Starvation -- Fiction", "Urban poor -- Fiction"], downloads: 431, rank: 939 }, { title: "The Return of Tarzan", author: "Burroughs, Edgar Rice", year: 2008, url: "https://www.gutenberg.org/ebooks/81", characters: 422047, languages: ["en"], subjects: ["Fantasy fiction", "Tarzan (Fictitious character) -- Fiction", "Adventure stories"], downloads: 430, rank: 940 }, { title: "Prufrock and Other Observations", author: "Eliot, T. S. (Thomas Stearns)", year: 1998, url: "https://www.gutenberg.org/ebooks/1459", characters: 18623, languages: ["en"], subjects: ["Poetry"], downloads: 429, rank: 941 }, { title: "Heretics", author: "Chesterton, G. K. (Gilbert Keith)", year: 1996, url: "https://www.gutenberg.org/ebooks/470", characters: 308417, languages: ["en"], subjects: ["Apologetics", "Chesterton, G. K. (Gilbert Keith), 1874-1936"], downloads: 429, rank: 942 }, { title: "The Great English Short-Story Writers, Volume 1", author: "Unknown", year: 2003, url: "https://www.gutenberg.org/ebooks/10135", characters: 413165, languages: ["en"], subjects: ["Short stories"], downloads: 427, rank: 943 }, { title: "Thought-Forms", author: "Leadbeater, C. W. (Charles Webster)", year: 2005, url: "https://www.gutenberg.org/ebooks/16269", characters: 106072, languages: ["en"], subjects: ["Theosophy -- Doctrines", "Thought and thinking -- Religious aspects -- Theosophy"], downloads: 427, rank: 944 }, { title: "The Divine Comedy of Dante Alighieri: The Inferno", author: "Dante Alighieri", year: 2012, url: "https://www.gutenberg.org/ebooks/41537", characters: 563037, languages: ["en"], subjects: ["Hell", "Epic poetry, Italian -- Translations into English", "Italian poetry -- To 1400 -- Translations into English"], downloads: 427, rank: 945 }, { title: "The Elder Eddas of Saemund Sigfusson; and the Younger Eddas of Snorre Sturleson", author: "Snorri Sturluson", year: 2005, url: "https://www.gutenberg.org/ebooks/14726", characters: 425511, languages: ["en"], subjects: ["Mythology, Norse", "Scalds and scaldic poetry"], downloads: 426, rank: 946 }, { title: "The Crystal Crypt", author: "Dick, Philip K.", year: 2009, url: "https://www.gutenberg.org/ebooks/28698", characters: 36267, languages: ["en"], subjects: ["Science fiction", "Short stories"], downloads: 425, rank: 947 }, { title: "Public Opinion", author: "Lippmann, Walter", year: 2004, url: "https://www.gutenberg.org/ebooks/6456", characters: 529617, languages: ["en"], subjects: ["Social psychology", "Public opinion -- United States", "United States -- Politics and government", "Public opinion", "Social psychology -- United States"], downloads: 425, rank: 948 }, { title: "The Gardener", author: "Tagore, Rabindranath", year: 2004, url: "https://www.gutenberg.org/ebooks/6686", characters: 61279, languages: ["en"], subjects: ["Bengali poetry -- Translations into English", "Indic poetry -- Translations into English", "Tagore, Rabindranath, 1861-1941 -- Translations into English"], downloads: 425, rank: 949 }, { title: "The Kreutzer Sonata and Other Stories", author: "Tolstoy, Leo, graf", year: 2006, url: "https://www.gutenberg.org/ebooks/689", characters: 300899, languages: ["en"], subjects: ["Tolstoy, Leo, graf, 1828-1910 -- Translations into English", "Short stories", "Russia -- Social life and customs -- Fiction"], downloads: 425, rank: 950 }, { title: "The Jolly Corner", author: "James, Henry", year: 2005, url: "https://www.gutenberg.org/ebooks/1190", characters: 67719, languages: ["en"], subjects: ["Ghost stories", "Fiction"], downloads: 424, rank: 951 }, { title: "Mission Furniture: How to Make It, Part 3", author: "Windsor, H. H. (Henry Haven)", year: 2007, url: "https://www.gutenberg.org/ebooks/23666", characters: 87157, languages: ["en"], subjects: ["Furniture making -- Amateurs' manuals", "Furniture, Mission -- Design and construction"], downloads: 424, rank: 952 }, { title: "The Yoga Sutras of Patanjali: The Book of the Spiritual Man", author: "Patanjali", year: 2001, url: "https://www.gutenberg.org/ebooks/2526", characters: 151966, languages: ["en"], subjects: ["Yoga -- Early works to 1800"], downloads: 424, rank: 953 }, { title: "The Door in the Wall, and Other Stories", author: "Wells, H. G. (Herbert George)", year: 2005, url: "https://www.gutenberg.org/ebooks/456", characters: 202750, languages: ["en"], subjects: ["Fantasy fiction, English", "Short stories", "Science fiction, English"], downloads: 423, rank: 954 }, { title: "Plutarch's Lives, Volume I", author: "Plutarch", year: 2004, url: "https://www.gutenberg.org/ebooks/14033", characters: 893286, languages: ["en"], subjects: ["Greece -- Biography -- Early works to 1800", "Rome -- Biography -- Early works to 1800"], downloads: 422, rank: 955 }, { title: "Le comte de Monte-Cristo, Tome I", author: "Dumas, Alexandre", year: 2006, url: "https://www.gutenberg.org/ebooks/17989", characters: 634607, languages: ["fr"], subjects: ["Adventure stories", "Revenge -- Fiction", "France -- History -- 19th century -- Fiction", "Pirates -- Fiction", "Historical fiction", "Prisoners -- Fiction", "Dant\xE8s, Edmond (Fictitious character) -- Fiction"], downloads: 422, rank: 956 }, { title: "The Book of Tea", author: "Okakura, Kakuzo", year: 1997, url: "https://www.gutenberg.org/ebooks/769", characters: 90237, languages: ["en"], subjects: ["Japan -- Social life and customs", "Japanese tea ceremony", "Tea"], downloads: 422, rank: 957 }, { title: "Rasselas, Prince of Abyssinia", author: "Johnson, Samuel", year: 2013, url: "https://www.gutenberg.org/ebooks/652", characters: 187806, languages: ["en"], subjects: ["Princes -- Fiction", "Happiness -- Fiction", "Satire", "Ethiopia -- Fiction"], downloads: 421, rank: 958 }, { title: "The Argonautica", author: "Apollonius, Rhodius", year: 1997, url: "https://www.gutenberg.org/ebooks/830", characters: 288695, languages: ["en"], subjects: ["Classical literature", "Jason (Greek mythology)", "Argonauts (Greek mythology)", "Medea, consort of Aegeus, King of Athens (Mythological character)"], downloads: 421, rank: 959 }, { title: "La Divina Commedia di Dante", author: "Dante Alighieri", year: 1997, url: "https://www.gutenberg.org/ebooks/1012", characters: 469130, languages: ["it"], subjects: ["Italian poetry -- To 1400", "Epic poetry, Italian"], downloads: 417, rank: 960 }, { title: "The Works of Aphra Behn: Volume V", author: "Behn, Aphra", year: 2009, url: "https://www.gutenberg.org/ebooks/29854", characters: 841193, languages: ["en"], subjects: ["English drama -- 17th century"], downloads: 417, rank: 961 }, { title: "King Richard III", author: "Shakespeare, William", year: 1997, url: "https://www.gutenberg.org/ebooks/1103", characters: 149924, languages: ["en"], subjects: ["Historical drama", "Great Britain -- Kings and rulers -- Drama", "Tragedies", "Great Britain -- History -- Richard III, 1483-1485 -- Drama", "Richard III, King of England, 1452-1485 -- Drama"], downloads: 416, rank: 962 }, { title: "The Adventure of the Cardboard Box", author: "Doyle, Arthur Conan", year: 2e3, url: "https://www.gutenberg.org/ebooks/2344", characters: 38871, languages: ["en"], subjects: ["Private investigators -- England -- Fiction", "Detective and mystery stories", "Holmes, Sherlock (Fictitious character) -- Fiction"], downloads: 416, rank: 963 }, { title: "Foods That Will Win The War And How To Cook Them (1918)", author: "Goudiss, C. Houston (Charles Houston)", year: 2005, url: "https://www.gutenberg.org/ebooks/15464", characters: 155193, languages: ["en"], subjects: ["Menus", "Food conservation", "Cooking, American"], downloads: 414, rank: 964 }, { title: "The Entire Project Gutenberg Works of Mark Twain", author: "Twain, Mark", year: 2004, url: "https://www.gutenberg.org/ebooks/3200", characters: 942360, languages: ["en"], subjects: ["American literature -- 19th century", "Literature -- Collections"], downloads: 414, rank: 965 }, { title: "Woodcraft Boys at Sunset Island", author: "Roy, Lillian Elizabeth", year: 2016, url: "https://www.gutenberg.org/ebooks/51319", characters: 275533, languages: ["en"], subjects: [], downloads: 414, rank: 966 }, { title: "The Moon and Sixpence", author: "Maugham, W. Somerset (William Somerset)", year: 2007, url: "https://www.gutenberg.org/ebooks/222", characters: 346710, languages: ["en"], subjects: ["Tahiti (French Polynesia : Island) -- Fiction", "Painters -- Fiction", "Psychological fiction", "England -- Fiction"], downloads: 413, rank: 967 }, { title: "Moby Word Lists", author: "Ward, Grady", year: 2002, url: "https://www.gutenberg.org/ebooks/3201", characters: 3200, languages: ["en"], subjects: ["Words and phrase lists -- English"], downloads: 411, rank: 968 }, { title: "Riders to the Sea", author: "Synge, J. M. (John Millington)", year: 2008, url: "https://www.gutenberg.org/ebooks/994", characters: 22823, languages: ["en"], subjects: ["Mothers and sons -- Drama", "Seafaring life -- Drama", "Ireland -- Drama", "Drowning victims -- Drama"], downloads: 411, rank: 969 }, { title: "Ancient and Modern Ships, Part 1: Wooden Sailing Ships", author: "Holmes, George Charles Vincent, Sir", year: 2010, url: "https://www.gutenberg.org/ebooks/33098", characters: 221221, languages: ["en"], subjects: ["Ships -- History", "Sailing ships -- History", "Shipbuilding -- History"], downloads: 410, rank: 970 }, { title: "The New Life (La Vita Nuova)", author: "Dante Alighieri", year: 2012, url: "https://www.gutenberg.org/ebooks/41085", characters: 113760, languages: ["en"], subjects: ["Italian literature -- Translations into English"], downloads: 409, rank: 971 }, { title: "As You Like It", author: "Shakespeare, William", year: 1997, url: "https://www.gutenberg.org/ebooks/1121", characters: 106607, languages: ["en"], subjects: ["Exiles -- Drama", "Comedies", "Fathers and daughters -- Drama", "Pastoral drama"], downloads: 407, rank: 972 }, { title: "Viking Tales", author: "Hall, Jennie", year: 2008, url: "https://www.gutenberg.org/ebooks/24811", characters: 145746, languages: ["en"], subjects: ["Short stories", "Sagas -- Adaptations", "Vikings -- Folklore"], downloads: 406, rank: 973 }, { title: "Aeneidos", author: "Virgil", year: 2008, url: "https://www.gutenberg.org/ebooks/227", characters: 401511, languages: ["la"], subjects: ["Epic poetry, Latin", "Legends -- Rome -- Poetry", "Aeneas (Legendary character) -- Poetry"], downloads: 404, rank: 974 }, { title: "L'autre monde ou Histoire comique des Etats et Empires de la Lune", author: "Bergerac, Savinien de Cyrano de", year: 2016, url: "https://www.gutenberg.org/ebooks/51338", characters: 231466, languages: ["fr"], subjects: [], downloads: 402, rank: 975 }, { title: "Theodicy: Essays on the Goodness of God, the Freedom of Man and the Origin of Evil", author: "Leibniz, Gottfried Wilhelm, Freiherr von", year: 2005, url: "https://www.gutenberg.org/ebooks/17147", characters: 922130, languages: ["en"], subjects: ["Theodicy", "Theism", "Free will and determinism"], downloads: 401, rank: 976 }, { title: "The St. Gregory Hymnal and Catholic Choir Book", author: "Unknown", year: 2007, url: "https://www.gutenberg.org/ebooks/23673", characters: 256754, languages: ["en"], subjects: ["Catholic Church -- Hymns", "Hymns, Latin", "Hymns, English", "Service books (Music) -- Catholic Church"], downloads: 401, rank: 977 }, { title: "Beeton's Book of Needlework", author: "Beeton, Mrs. (Isabella Mary)", year: 2005, url: "https://www.gutenberg.org/ebooks/15147", characters: 462540, languages: ["en"], subjects: ["Crocheting", "Needlework -- Patterns", "Knitting", "Lace and lace making"], downloads: 400, rank: 978 }, { title: "Ghost Stories of an Antiquary", author: "James, M. R. (Montague Rhodes)", year: 2005, url: "https://www.gutenberg.org/ebooks/8486", characters: 212641, languages: ["en"], subjects: ["Short stories, English", "Horror tales, English", "Ghost stories, English"], downloads: 400, rank: 979 }, { title: "Martin Chuzzlewit", author: "Dickens, Charles", year: 2006, url: "https://www.gutenberg.org/ebooks/968", characters: 1610845, languages: ["en"], subjects: ["Grandfathers -- Fiction", "Avarice -- Fiction", "United States -- Description and travel -- Fiction", "Bildungsromans", "Satire", "Black humor", "England -- Fiction", "Adventure stories", "British -- United States -- Fiction", "Young men -- Fiction"], downloads: 400, rank: 980 }, { title: "Boy of My Heart", author: "Leighton, Marie Connor", year: 2016, url: "https://www.gutenberg.org/ebooks/51437", characters: 217034, languages: ["en"], subjects: [], downloads: 398, rank: 981 }, { title: "The Scarecrow of Oz", author: "Baum, L. Frank (Lyman Frank)", year: 2016, url: "https://www.gutenberg.org/ebooks/51263", characters: 217171, languages: ["en"], subjects: [], downloads: 397, rank: 982 }, { title: "Henry D. Thoreau", author: "Sanborn, F. B.", year: 2016, url: "https://www.gutenberg.org/ebooks/51426", characters: 338831, languages: ["en"], subjects: [], downloads: 394, rank: 983 }, { title: "The Ballad of Reading Gaol", author: "Wilde, Oscar", year: 1995, url: "https://www.gutenberg.org/ebooks/301", characters: 37001, languages: ["en"], subjects: ["Prisons -- Poetry", "Imprisonment -- Poetry", "Prisoners -- Poetry"], downloads: 393, rank: 984 }, { title: "The Analysis of Beauty: Written with a view of fixing the fluctuating ideas of taste", author: "Hogarth, William", year: 2016, url: "https://www.gutenberg.org/ebooks/51459", characters: 222095, languages: ["en"], subjects: [], downloads: 390, rank: 985 }, { title: "The Professor", author: "Bronte, Charlotte", year: 2008, url: "https://www.gutenberg.org/ebooks/1028", characters: 429454, languages: ["en"], subjects: ["Belgium -- Social life and customs -- 19th century -- Fiction", "British -- Belgium -- Fiction", "Triangles (Interpersonal relations) -- Fiction", "Women teachers -- Fiction", "Brussels (Belgium) -- Fiction", "Love stories"], downloads: 388, rank: 986 }, { title: "Russian Fairy Tales: A Choice Collection of Muscovite Folk-lore", author: "Unknown", year: 2007, url: "https://www.gutenberg.org/ebooks/22373", characters: 625217, languages: ["en"], subjects: ["Folklore -- Russia"], downloads: 379, rank: 987 }, { title: "Beethoven, the Man and the Artist, as Revealed in His Own Words", author: "Beethoven, Ludwig van", year: 2002, url: "https://www.gutenberg.org/ebooks/3528", characters: 121237, languages: ["en"], subjects: ["Composers -- Germany -- Biography", "Beethoven, Ludwig van, 1770-1827"], downloads: 377, rank: 988 }, { title: "Triplanetary", author: "Smith, E. E. (Edward Elmer)", year: 2010, url: "https://www.gutenberg.org/ebooks/32706", characters: 467426, languages: ["en"], subjects: ["Human-alien encounters -- Fiction", "Science fiction", "Space warfare -- Fiction"], downloads: 375, rank: 989 }, { title: "Ben-Hur; a tale of the Christ", author: "Wallace, Lew", year: 2e3, url: "https://www.gutenberg.org/ebooks/2145", characters: 945799, languages: ["en"], subjects: ["Bible. New Testament -- History of Biblical events -- Fiction", "Historical fiction", "Tiberius, Emperor of Rome 42 B.C.-37 A.D. -- Fiction", "Christian fiction", "Rome -- History -- Tiberius, 14-37 -- Fiction", "Jesus Christ -- Fiction"], downloads: 364, rank: 990 }, { title: "Claudian, volume 1 (of 2): With an English translation by Maurice Platnauer", author: "Claudianus, Claudius", year: 2016, url: "https://www.gutenberg.org/ebooks/51443", characters: 516663, languages: ["en"], subjects: [], downloads: 364, rank: 991 }, { title: "The Love of Monsieur", author: "Gibbs, George", year: 2016, url: "https://www.gutenberg.org/ebooks/51468", characters: 247163, languages: ["en"], subjects: [], downloads: 287, rank: 992 }, { title: "Self-Control Its Kingship and Majesty", author: "Jordan, William George", year: 2016, url: "https://www.gutenberg.org/ebooks/51469", characters: 116264, languages: ["en"], subjects: [], downloads: 201, rank: 993 }, { title: "Beach Scene", author: "King, Marshall", year: 2016, url: "https://www.gutenberg.org/ebooks/51494", characters: 25103, languages: ["en"], subjects: [], downloads: 104, rank: 994 }, { title: "Dumbwaiter", author: "Stamers, James", year: 2016, url: "https://www.gutenberg.org/ebooks/51478", characters: 21155, languages: ["en"], subjects: [], downloads: 97, rank: 995 }, { title: "Kreativity For Kats", author: "Leiber, Fritz", year: 2016, url: "https://www.gutenberg.org/ebooks/51493", characters: 16853, languages: ["en"], subjects: [], downloads: 92, rank: 996 }, { title: "East In The Morning", author: "Fisher, David E.", year: 2016, url: "https://www.gutenberg.org/ebooks/51475", characters: 21418, languages: ["en"], subjects: [], downloads: 88, rank: 997 }, { title: "The Donkey, the Elephant, and the Goat: At a Public Meeting", author: "Preston, Jack", year: 2016, url: "https://www.gutenberg.org/ebooks/51473", characters: 12424, languages: ["en"], subjects: [], downloads: 72, rank: 998 }, { title: "A Garden Diary: September 1899\u2014September 1900", author: "Lawless, Emily", year: 2016, url: "https://www.gutenberg.org/ebooks/51477", characters: 234934, languages: ["en"], subjects: [], downloads: 66, rank: 999 }, { title: "Flying Machines Today", author: "Ennis, William Duane", year: 2016, url: "https://www.gutenberg.org/ebooks/51481", characters: 175917, languages: ["en"], subjects: [], downloads: 3, rank: 1e3 }, { title: "Perfect Answer", author: "Stecher, L.J.", year: 2016, url: "https://www.gutenberg.org/ebooks/51482", characters: 19328, languages: ["en"], subjects: [], downloads: 0, rank: 1001 }, { title: "The Reluctant Heroes", author: "Robinson, Frank M.", year: 2016, url: "https://www.gutenberg.org/ebooks/51483", characters: 32354, languages: ["en"], subjects: [], downloads: 0, rank: 1002 }, { title: "Film Truth; September, 1920", author: "Anonymous", year: 2016, url: "https://www.gutenberg.org/ebooks/51484", characters: 45970, languages: ["en"], subjects: [], downloads: 0, rank: 1003 }, { title: "Othmar", author: "Ouida", year: 2016, url: "https://www.gutenberg.org/ebooks/51487", characters: 890918, languages: ["en"], subjects: [], downloads: 0, rank: 1004 }, { title: "Church History (Volumes 1-3)", author: "Kurtz, J. H. (Johann Heinrich)", year: 2016, url: "https://www.gutenberg.org/ebooks/51491", characters: 3883244, languages: ["en"], subjects: [], downloads: 0, rank: 1005 }, { title: "The Uncensored Letters of a Canteen Girl", author: "Morse, Katharine Duncan", year: 2016, url: "https://www.gutenberg.org/ebooks/51495", characters: 451687, languages: ["en"], subjects: [], downloads: 0, rank: 1006 }];

  // node_modules/morphdom/dist/morphdom-esm.js
  var DOCUMENT_FRAGMENT_NODE = 11;
  function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return;
    }
    for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
      attr = toNodeAttrs[i];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      attrValue = attr.value;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        if (fromValue !== attrValue) {
          if (attr.prefix === "xmlns") {
            attrName = attr.name;
          }
          fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
        }
      } else {
        fromValue = fromNode.getAttribute(attrName);
        if (fromValue !== attrValue) {
          fromNode.setAttribute(attrName, attrValue);
        }
      }
    }
    var fromNodeAttrs = fromNode.attributes;
    for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
      attr = fromNodeAttrs[d];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          fromNode.removeAttributeNS(attrNamespaceURI, attrName);
        }
      } else {
        if (!toNode.hasAttribute(attrName)) {
          fromNode.removeAttribute(attrName);
        }
      }
    }
  }
  var range;
  var NS_XHTML = "http://www.w3.org/1999/xhtml";
  var doc = typeof document === "undefined" ? void 0 : document;
  var HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
  var HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
  function createFragmentFromTemplate(str) {
    var template = doc.createElement("template");
    template.innerHTML = str;
    return template.content.childNodes[0];
  }
  function createFragmentFromRange(str) {
    if (!range) {
      range = doc.createRange();
      range.selectNode(doc.body);
    }
    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
  }
  function createFragmentFromWrap(str) {
    var fragment = doc.createElement("body");
    fragment.innerHTML = str;
    return fragment.childNodes[0];
  }
  function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) {
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }
    return createFragmentFromWrap(str);
  }
  function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;
    if (fromNodeName === toNodeName) {
      return true;
    }
    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);
    if (fromCodeStart <= 90 && toCodeStart >= 97) {
      return fromNodeName === toNodeName.toUpperCase();
    } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
      return toNodeName === fromNodeName.toUpperCase();
    } else {
      return false;
    }
  }
  function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
  }
  function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
      var nextChild = curChild.nextSibling;
      toEl.appendChild(curChild);
      curChild = nextChild;
    }
    return toEl;
  }
  function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
      fromEl[name] = toEl[name];
      if (fromEl[name]) {
        fromEl.setAttribute(name, "");
      } else {
        fromEl.removeAttribute(name);
      }
    }
  }
  var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
      var parentNode = fromEl.parentNode;
      if (parentNode) {
        var parentName = parentNode.nodeName.toUpperCase();
        if (parentName === "OPTGROUP") {
          parentNode = parentNode.parentNode;
          parentName = parentNode && parentNode.nodeName.toUpperCase();
        }
        if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
          if (fromEl.hasAttribute("selected") && !toEl.selected) {
            fromEl.setAttribute("selected", "selected");
            fromEl.removeAttribute("selected");
          }
          parentNode.selectedIndex = -1;
        }
      }
      syncBooleanAttrProp(fromEl, toEl, "selected");
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
      syncBooleanAttrProp(fromEl, toEl, "checked");
      syncBooleanAttrProp(fromEl, toEl, "disabled");
      if (fromEl.value !== toEl.value) {
        fromEl.value = toEl.value;
      }
      if (!toEl.hasAttribute("value")) {
        fromEl.removeAttribute("value");
      }
    },
    TEXTAREA: function(fromEl, toEl) {
      var newValue = toEl.value;
      if (fromEl.value !== newValue) {
        fromEl.value = newValue;
      }
      var firstChild = fromEl.firstChild;
      if (firstChild) {
        var oldValue = firstChild.nodeValue;
        if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
          return;
        }
        firstChild.nodeValue = newValue;
      }
    },
    SELECT: function(fromEl, toEl) {
      if (!toEl.hasAttribute("multiple")) {
        var selectedIndex = -1;
        var i = 0;
        var curChild = fromEl.firstChild;
        var optgroup;
        var nodeName;
        while (curChild) {
          nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
          if (nodeName === "OPTGROUP") {
            optgroup = curChild;
            curChild = optgroup.firstChild;
          } else {
            if (nodeName === "OPTION") {
              if (curChild.hasAttribute("selected")) {
                selectedIndex = i;
                break;
              }
              i++;
            }
            curChild = curChild.nextSibling;
            if (!curChild && optgroup) {
              curChild = optgroup.nextSibling;
              optgroup = null;
            }
          }
        }
        fromEl.selectedIndex = selectedIndex;
      }
    }
  };
  var ELEMENT_NODE = 1;
  var DOCUMENT_FRAGMENT_NODE$1 = 11;
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;
  function noop() {
  }
  function defaultGetNodeKey(node) {
    if (node) {
      return node.getAttribute && node.getAttribute("id") || node.id;
    }
  }
  function morphdomFactory(morphAttrs2) {
    return function morphdom2(fromNode, toNode, options) {
      if (!options) {
        options = {};
      }
      if (typeof toNode === "string") {
        if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
          var toNodeHtml = toNode;
          toNode = doc.createElement("html");
          toNode.innerHTML = toNodeHtml;
        } else {
          toNode = toElement(toNode);
        }
      } else if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        toNode = toNode.firstElementChild;
      }
      var getNodeKey = options.getNodeKey || defaultGetNodeKey;
      var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
      var onNodeAdded = options.onNodeAdded || noop;
      var onBeforeElUpdated = options.onBeforeElUpdated || noop;
      var onElUpdated = options.onElUpdated || noop;
      var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
      var onNodeDiscarded = options.onNodeDiscarded || noop;
      var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
      var skipFromChildren = options.skipFromChildren || noop;
      var addChild = options.addChild || function(parent, child) {
        return parent.appendChild(child);
      };
      var childrenOnly = options.childrenOnly === true;
      var fromNodesLookup = /* @__PURE__ */ Object.create(null);
      var keyedRemovalList = [];
      function addKeyedRemoval(key) {
        keyedRemovalList.push(key);
      }
      function walkDiscardedChildNodes(node, skipKeyedNodes) {
        if (node.nodeType === ELEMENT_NODE) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = void 0;
            if (skipKeyedNodes && (key = getNodeKey(curChild))) {
              addKeyedRemoval(key);
            } else {
              onNodeDiscarded(curChild);
              if (curChild.firstChild) {
                walkDiscardedChildNodes(curChild, skipKeyedNodes);
              }
            }
            curChild = curChild.nextSibling;
          }
        }
      }
      function removeNode(node, parentNode, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) === false) {
          return;
        }
        if (parentNode) {
          parentNode.removeChild(node);
        }
        onNodeDiscarded(node);
        walkDiscardedChildNodes(node, skipKeyedNodes);
      }
      function indexTree(node) {
        if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = getNodeKey(curChild);
            if (key) {
              fromNodesLookup[key] = curChild;
            }
            indexTree(curChild);
            curChild = curChild.nextSibling;
          }
        }
      }
      indexTree(fromNode);
      function handleNodeAdded(el) {
        onNodeAdded(el);
        var curChild = el.firstChild;
        while (curChild) {
          var nextSibling = curChild.nextSibling;
          var key = getNodeKey(curChild);
          if (key) {
            var unmatchedFromEl = fromNodesLookup[key];
            if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
              curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
              morphEl(unmatchedFromEl, curChild);
            } else {
              handleNodeAdded(curChild);
            }
          } else {
            handleNodeAdded(curChild);
          }
          curChild = nextSibling;
        }
      }
      function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
        while (curFromNodeChild) {
          var fromNextSibling = curFromNodeChild.nextSibling;
          if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
            addKeyedRemoval(curFromNodeKey);
          } else {
            removeNode(
              curFromNodeChild,
              fromEl,
              true
              /* skip keyed nodes */
            );
          }
          curFromNodeChild = fromNextSibling;
        }
      }
      function morphEl(fromEl, toEl, childrenOnly2) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
          delete fromNodesLookup[toElKey];
        }
        if (!childrenOnly2) {
          if (onBeforeElUpdated(fromEl, toEl) === false) {
            return;
          }
          morphAttrs2(fromEl, toEl);
          onElUpdated(fromEl);
          if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
            return;
          }
        }
        if (fromEl.nodeName !== "TEXTAREA") {
          morphChildren(fromEl, toEl);
        } else {
          specialElHandlers.TEXTAREA(fromEl, toEl);
        }
      }
      function morphChildren(fromEl, toEl) {
        var skipFrom = skipFromChildren(fromEl);
        var curToNodeChild = toEl.firstChild;
        var curFromNodeChild = fromEl.firstChild;
        var curToNodeKey;
        var curFromNodeKey;
        var fromNextSibling;
        var toNextSibling;
        var matchingFromEl;
        outer:
          while (curToNodeChild) {
            toNextSibling = curToNodeChild.nextSibling;
            curToNodeKey = getNodeKey(curToNodeChild);
            while (!skipFrom && curFromNodeChild) {
              fromNextSibling = curFromNodeChild.nextSibling;
              if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              curFromNodeKey = getNodeKey(curFromNodeChild);
              var curFromNodeType = curFromNodeChild.nodeType;
              var isCompatible = void 0;
              if (curFromNodeType === curToNodeChild.nodeType) {
                if (curFromNodeType === ELEMENT_NODE) {
                  if (curToNodeKey) {
                    if (curToNodeKey !== curFromNodeKey) {
                      if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                        if (fromNextSibling === matchingFromEl) {
                          isCompatible = false;
                        } else {
                          fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                          if (curFromNodeKey) {
                            addKeyedRemoval(curFromNodeKey);
                          } else {
                            removeNode(
                              curFromNodeChild,
                              fromEl,
                              true
                              /* skip keyed nodes */
                            );
                          }
                          curFromNodeChild = matchingFromEl;
                        }
                      } else {
                        isCompatible = false;
                      }
                    }
                  } else if (curFromNodeKey) {
                    isCompatible = false;
                  }
                  isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                  if (isCompatible) {
                    morphEl(curFromNodeChild, curToNodeChild);
                  }
                } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                  isCompatible = true;
                  if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                  }
                }
              }
              if (isCompatible) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              if (curFromNodeKey) {
                addKeyedRemoval(curFromNodeKey);
              } else {
                removeNode(
                  curFromNodeChild,
                  fromEl,
                  true
                  /* skip keyed nodes */
                );
              }
              curFromNodeChild = fromNextSibling;
            }
            if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
              if (!skipFrom) {
                addChild(fromEl, matchingFromEl);
              }
              morphEl(matchingFromEl, curToNodeChild);
            } else {
              var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
              if (onBeforeNodeAddedResult !== false) {
                if (onBeforeNodeAddedResult) {
                  curToNodeChild = onBeforeNodeAddedResult;
                }
                if (curToNodeChild.actualize) {
                  curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                }
                addChild(fromEl, curToNodeChild);
                handleNodeAdded(curToNodeChild);
              }
            }
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
          }
        cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
          specialElHandler(fromEl, toEl);
        }
      }
      var morphedNode = fromNode;
      var morphedNodeType = morphedNode.nodeType;
      var toNodeType = toNode.nodeType;
      if (!childrenOnly) {
        if (morphedNodeType === ELEMENT_NODE) {
          if (toNodeType === ELEMENT_NODE) {
            if (!compareNodeNames(fromNode, toNode)) {
              onNodeDiscarded(fromNode);
              morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
            }
          } else {
            morphedNode = toNode;
          }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
          if (toNodeType === morphedNodeType) {
            if (morphedNode.nodeValue !== toNode.nodeValue) {
              morphedNode.nodeValue = toNode.nodeValue;
            }
            return morphedNode;
          } else {
            morphedNode = toNode;
          }
        }
      }
      if (morphedNode === toNode) {
        onNodeDiscarded(fromNode);
      } else {
        if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
          return;
        }
        morphEl(morphedNode, toNode, childrenOnly);
        if (keyedRemovalList) {
          for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
            var elToRemove = fromNodesLookup[keyedRemovalList[i]];
            if (elToRemove) {
              removeNode(elToRemove, elToRemove.parentNode, false);
            }
          }
        }
      }
      if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        if (morphedNode.actualize) {
          morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
        }
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
      }
      return morphedNode;
    };
  }
  var morphdom = morphdomFactory(morphAttrs);
  var morphdom_esm_default = morphdom;

  // index.js
  var LIGHT_COLORS = [
    "235,219,193",
    "186,185,154",
    "202,186,161",
    "196,176,151",
    "203,192,190",
    "223,211,213",
    "178,177,173",
    "213,185,181"
  ];
  var DARK_COLORS = [
    "156,94,105",
    "89,55,79",
    "185,146,164",
    "131,108,116",
    "125,115,122",
    "20,28,79",
    "6,14,66",
    "137,154,174",
    "150,137,120",
    "28,63,95",
    "130,92,47",
    "166,143,137",
    "169,133,85",
    "89,114,82",
    "25,64,69",
    "168,138,112",
    "13,42,72",
    "126,68,54",
    "129,149,173",
    "126,68,54",
    "160,162,161",
    "138,157,163",
    "108,125,132",
    "18,53,10",
    "56,76,60",
    "38,81,125",
    "90,46,46",
    "75,0,15",
    "141,32,54",
    "23,26,48",
    "22,46,17",
    "97,47,16",
    "53,16,64",
    "126,19,27",
    "43,19,17",
    "12,15,102"
  ];
  var FONTS = [
    ["serif", 2],
    ["sans", 2],
    ["cursive", 0.5],
    ["fantasy", 0.25]
  ];
  var TEXT_COLORS = { LIGHT: "light", DARK: "dark" };
  var COVER_THICKNESS = 12;
  var PAGE_THICKNESS = 0.0667;
  var MAX_THICKNESS = 80;
  var MIN_HEIGHT = 100;
  var MAX_HEIGHT = 145;
  var APPROX_CHAR_PER_PAGE = 1277;
  var NUM_BOOKS = 47;
  var SHELF_WIDTH = 660;
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  var randomSubset = (items, n) => shuffle([...items]).slice(0, n);
  var weightedChoice = (itemsWithWeights) => {
    let thresh = Math.random() * itemsWithWeights.map(([a, b]) => b).reduce((a, b) => a + b);
    return itemsWithWeights.reduce(
      ([best, sum], [item, wt]) => sum < thresh ? [item, sum + wt] : [best, sum],
      [null, 0]
    )[0];
  };
  var randomIntRange = (min, max) => Math.floor((max - min) * Math.random() + min);
  var clampInt = (val, max, min = 0) => {
    [min, max] = min < max ? [min, max] : [max, min];
    return Math.max(Math.min(Math.floor(val), max), min);
  };
  var randomColor = () => {
    let colorIndex = Math.floor(Math.random() * (LIGHT_COLORS.length + DARK_COLORS.length)) - 1;
    if (colorIndex === -1) {
      colorIndex = 0;
    }
    return colorIndex < DARK_COLORS.length ? [DARK_COLORS[colorIndex], TEXT_COLORS.LIGHT] : [LIGHT_COLORS[colorIndex - DARK_COLORS.length], TEXT_COLORS.DARK];
  };
  var rotate = (arr) => arr.slice(1).concat(arr.slice(0, 1));
  var morph = (el1, el2, options) => morphdom_esm_default(el1, el2, {
    onBeforeElUpdated: function(fromEl, toEl) {
      if (fromEl.isEqualNode(toEl))
        return false;
      return true;
    },
    ...options
  });
  var Book = class {
    static randomLibrary(bookData, size) {
      return randomSubset(bookData, size).map((b) => new Book(b));
    }
    constructor({ title, author, characters, year }) {
      Object.assign(this, { title, author, characters, year });
      this.id = randomIntRange(0, 1e8);
      this.font = weightedChoice(FONTS);
      [this.backgroundColor, this.textColor] = randomColor();
    }
    get pages() {
      return this._pages ||= Math.floor(this.characters / APPROX_CHAR_PER_PAGE);
    }
    get height() {
      if (this._height)
        return this._height;
      let potential = this.pages / (MAX_HEIGHT - MIN_HEIGHT) * 2 + MIN_HEIGHT;
      return this._height = clampInt(randomIntRange(MIN_HEIGHT, potential), MAX_HEIGHT);
    }
    get thickness() {
      return this._thickness ||= clampInt(
        this.pages * PAGE_THICKNESS + COVER_THICKNESS,
        MAX_THICKNESS
      );
    }
    get abbreviatedTitle() {
      return this._abbrTitle ||= this.title.split(/[:;]/)[0];
    }
    get abbreviatedAuthor() {
      return this._abbrAuth ||= rotate(
        this.author.replace(/[^a-zA-Z0-9,\ ]/g, "").split(/\ |,/).filter((s) => s).map((s) => s[0])
      ).join("").substring(0, 3).toUpperCase();
    }
    get decoration() {
      return this._deco ??= this.abbreviatedTitle.length < 15 ? weightedChoice([
        ["top-double", 0.5],
        ["double", 0.25],
        ["double-solid", 0.25],
        ["ridge", 0.25]
      ]) : "";
    }
  };
  var _ApplicationState = class {
    constructor(numBooks, renderFn) {
      this.books = Book.randomLibrary(plucked_classics_default, numBooks);
      this.mode = _ApplicationState.MODES.DEFAULT;
      this.focused = 0;
      this.selected = null;
      this.mode = _ApplicationState.MODES.DEFAULT;
      this.multiplier = 1;
      this._render = renderFn;
    }
    focusBook(idx) {
      this.focused = idx;
      this.render();
    }
    keyDown(key) {
      if (this.mode == _ApplicationState.MODES.MOVING) {
        if (key >= 1 && key <= 9) {
          this.multiplier = parseInt(key, 10);
        }
        let direction;
        if (direction = _ApplicationState.DIRECTIONAL_KEYS.get(key)) {
          this.moveSelectedBook(direction);
        }
      } else if (this.mode == _ApplicationState.MODES.DEFAULT) {
        let direction;
        if (direction = _ApplicationState.DIRECTIONAL_KEYS.get(key)) {
          this.moveCursor(direction);
        } else if (key === " ") {
          this.enterMoveMode();
        }
      }
    }
    keyUp(key) {
      if (key === " ") {
        this.enterDefaultMode();
      }
    }
    moveCursor(direction) {
      if (direction === "l") {
        this.focused--;
      } else if (direction === "r") {
        this.focused++;
      }
      if (this.focused < 0) {
        this.focused += this.books.length;
      }
      this.focused %= this.books.length;
      this.render();
    }
    enterMoveMode() {
      this.selected = this.focused;
      this.focused = null;
      this.mode = _ApplicationState.MODES.MOVING;
      this.render();
    }
    enterDefaultMode() {
      this.focused = this.selected || this.focused || 0;
      this.selected = null;
      this.multiplier = 1;
      this.mode = _ApplicationState.MODES.DEFAULT;
      this.render();
    }
    moveSelectedBook(direction) {
      let dir = direction === "l" ? -1 : 1;
      let oldIdx = this.selected;
      let newIdx = clampInt(oldIdx + dir * this.multiplier, 0, this.books.length - 1);
      this.selected = newIdx;
      this.multiplier = 1;
      this.moveBookToIndex(oldIdx, newIdx);
    }
    moveBookToIndex(oldIdx, newIdx, render2 = true) {
      let books = this.books;
      let removed = books.splice(oldIdx, 1);
      books.splice(newIdx, 0, ...removed);
      if (render2)
        this.render();
    }
    changeSelection(idx) {
      this.selected = idx;
      if (idx != null) {
        let book = this.books[idx];
        return book;
      } else {
        return null;
      }
    }
    render(cb) {
      requestAnimationFrame(() => {
        this._render(this);
        if (cb)
          cb();
      });
      return this;
    }
  };
  var ApplicationState = _ApplicationState;
  __publicField(ApplicationState, "MODES", { DEFAULT: "default", MOVING: "moving" });
  __publicField(ApplicationState, "DIRECTIONAL_KEYS", /* @__PURE__ */ new Map([
    ["h", "l"],
    ["j", "l"],
    ["k", "k"],
    ["l", "r"],
    ["i", "u"],
    [";", "r"],
    ["ArrowLeft", "l"],
    ["ArrowRight", "r"],
    ["ArrowUp", "u"],
    ["ArrowDown", "k"]
  ]));
  var Components = {
    BookList: ({ books, selected, focused, isMoving }) => {
      let [chunks, _] = books.reduce(
        ([chunks2, width], book, i) => {
          if (book.thickness + width >= SHELF_WIDTH) {
            chunks2.push([[book], i]);
            return [chunks2, book.thickness];
          } else {
            let [chunk, _2] = chunks2[chunks2.length - 1];
            chunk.push(book);
            return [chunks2, width + book.thickness];
          }
        },
        [[[[], 0]], 0]
      );
      return `
    <div class="dummy">
      <div class="book-case">
      ${chunks.map(([books2, offset]) => Components.BookShelf(books2, offset, selected, focused, isMoving)).join("")}
      </div>
      ${selected !== null || focused !== null ? Components.BookDetails(books[selected] || books[focused]) : ""}
      </div>`;
    },
    BookShelf: (books, offset, selected, focused, moving) => {
      return `
    <ul class="book-shelf"
        data-book-idx="${offset}">
        ${books.map((book, i) => Components.Book(book, selected, focused, moving, i + offset)).join("")}
    </ul>`;
    },
    BookDetails: (book) => {
      deets = [
        ["Title", `<b>${book.title}</b>`],
        ["Author", book.author],
        ["Year", `\xA9 ${book.year}`],
        ["Pages", `${book.pages}pp.`]
      ];
      return `
     <aside class="selected-book">
        <dl class="book-details"
            style="border-color: rgb(${book.backgroundColor});">
            ${deets.map(([dt, dd]) => Components.BookDetail(dt, dd)).join("")}
            </dl>
    </aside>`;
    },
    BookDetail: (dt, dd) => {
      return `
    <dt>${dt}</dt>
    <dd>${dd}</dd>
    `;
    },
    Book: (book, selected, focused, moving, i) => {
      return `
    <li style="
            --book-color: ${book.backgroundColor};
            --book-height: ${book.height}px;
            --book-thickness: ${book.thickness}px;
            "
        class="book"
        id="book-${book.id}"
        title="${book.title}"
        data-index="${i}"
        ${selected === i ? "data-selected" : ""}
        ${moving && selected === i ? "data-moving" : ""}
        ${focused === i ? "data-focused" : ""}
        data-text-color="${book.textColor}"
        data-font="${book.font}"
        >
        <span class="title"
              data-spine-decoration="${book.decoration}">
            ${book.abbreviatedTitle}
        </span>
        <span class="author">${book.abbreviatedAuthor}</span>
    </li>`;
    }
  };
  var render = (state) => {
    morph(document.querySelector("main"), Components.BookList(state), {
      childrenOnly: true
    });
  };
  var attachEventHandlers = (app) => {
    window.addEventListener("keydown", (e) => {
      if (e.key === " ")
        e.preventDefault();
      app.keyDown(e.key);
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === " ")
        e.preventDefault();
      app.keyUp(e.key);
    });
    document.getElementById("app").addEventListener("click", (e) => {
      let bookEl = e.target.closest("li.book");
      if (bookEl) {
        e.preventDefault();
        const index = parseInt(bookEl.dataset.index);
        app.focusBook(index);
      }
    });
  };
  var sortable;
  function initSortable() {
    if (sortable) {
      sortable.destroy();
    }
    sortable = new import_sortable.default(document.querySelectorAll("ul.book-shelf"), {
      draggable: "li.book"
    });
    sortable.on("sortable:start", (e) => {
      let bookIdx = parseInt(e.data.dragEvent.source.dataset.index, 10);
      let book = application.changeSelection(bookIdx);
      morph(document.querySelector("aside.selected-book"), Components.BookDetails(book));
      Array.from(document.querySelectorAll("li.book")).forEach(function(el) {
        el.removeAttribute("data-focused");
      });
      document.querySelector(`li.book[data-index="${bookIdx}"`).setAttribute("data-selected", "");
    });
    sortable.on("sortable:stop", (e) => {
      let el = e.data.dragEvent.source;
      let oldIdx = parseInt(el.dataset.index, 10);
      let newIdx;
      if (el.previousElementSibling) {
        let sibIdx = parseInt(el.previousElementSibling.dataset.index, 10);
        newIdx = sibIdx > oldIdx ? sibIdx : sibIdx + 1;
      } else {
        let shelf = e.data.dragEvent.source.parentNode;
        let shelfIdx = parseInt(shelf.dataset.bookIdx, 10);
        newIdx = e.data.newIndex + shelfIdx;
      }
      application.moveBookToIndex(oldIdx, newIdx, false);
      application.changeSelection(null);
      application.focusBook(newIdx);
    });
  }
  var application = new ApplicationState(NUM_BOOKS, render).render(() => {
    initSortable();
    attachEventHandlers(application);
  });
})();
