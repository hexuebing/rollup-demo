(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.demo1 = factory());
}(this, (function () { 'use strict';

  var demo1 = {
    init: function init() {
      console.log('this lib/demo1 module!');
    }
  };

  return demo1;

})));
//# sourceMappingURL=demo1.js.map
