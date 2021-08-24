(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory());
}(this, (function () { 'use strict';

  function Button({
    value,
    onClick
  }) {
    function add() {
      onClick(value + 1);
    }

    return /*#__PURE__*/React.createElement("button", {
      onClick: add
    }, value);
  }

  return Button;

})));
//# sourceMappingURL=index2.umd.js.map
