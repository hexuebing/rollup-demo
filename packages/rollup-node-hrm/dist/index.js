(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Demo = factory());
}(this, (function () { 'use strict';

  var demo1 = {
    init: function init() {
      console.log('this lib/demo1 module!');
    }
  };

  var demo2 = {
    init: function init() {
      console.log('this lib/demo2 module!');
    }
  };

  var index = {
    init: function init() {
      var arr1 = [1, 2, 3];
      var arr2 = [4, 5, 6];
      console.log([].concat(arr1, arr2));
      console.log('src/index');
      demo1.init();
      demo2.init();
    }
  };

  return index;

})));
//# sourceMappingURL=index.js.map
