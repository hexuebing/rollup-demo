(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.demo2 = factory());
}(this, (function () { 'use strict';

  var demo2 = {
    init: function init() {
      console.log('this lib/demo2 module!');
    }
  };

  return demo2;

})));
//# sourceMappingURL=demo2.js.map
