!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UserList=t():e.UserList=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(0),c=n.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,o,a=d(c);function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),m(h(t=a.call(this,e)),"checkOptId",(function(e){return e.id>=0||(e=t.state.options.filter((function(t){return t.value===e.value}))[0]),e})),m(h(t),"scrollToFocus",(function(){var e=t.optionRefs&&t.optionRefs[t.state.focused.id];if(t.optionBox&&e&&t.optionBox.scrollHeight>t.optionBox.clientHeight){var n=t.optionBox.clientHeight+t.optionBox.scrollTop,o=e.offsetTop+e.offsetHeight;o>n?t.optionBox.scrollTop=o-t.optionBox.clientHeight:e.offsetTop<t.optionBox.scrollTop&&(t.optionBox.scrollTop=e.offsetTop)}})),m(h(t),"moveUpItems",(function(){var e=void 0===t.state.focused.id?0:t.state.focused.id-1;e>=0&&t.handleFocusChange(t.state.options[e])})),m(h(t),"moveDownItems",(function(){var e=void 0===t.state.focused.id?0:t.state.focused.id+1;e<t.state.options.length&&t.handleFocusChange(t.state.options[e])})),m(h(t),"focusFirstItem",(function(){t.handleFocusChange(t.state.options[0])})),m(h(t),"focusLastItem",(function(){t.handleFocusChange(t.state.options[t.state.options.length-1])})),m(h(t),"toggleList",(function(e,n){e||t.setState({focused:t.state.selected}),t.setState({isActive:e},(function(){t.state.isActive&&t.optionBox.focus(),n&&n()}))})),m(h(t),"handleFocusChange",(function(e){e=t.checkOptId(e),t.setState({focused:e},(function(){t.scrollToFocus()}))})),m(h(t),"handleSelectChange",(function(e){e.disabled||(t.state.selected.value!==e.value?(e=t.checkOptId(e),t.setState({selected:e,focused:e},(function(){t.toggleList(!1),t.props.onChange&&t.props.onChange(e)}))):t.toggleList(!1))})),m(h(t),"handleOptionOnFocus",(function(e){return function(n){e=t.checkOptId(e),t.setState({focused:e})}})),m(h(t),"handleOptionOnBlur",(function(e){"Escape"!==e.key&&"Enter"!==e.key||t.setState({isActive:!1,focused:t.state.selected})})),m(h(t),"handleButtonOnClick",(function(e){e.stopPropagation(),t.toggleList(!t.state.isActive)})),m(h(t),"handleButtonOnKeyDown",(function(e){"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),t.toggleList(!0))})),m(h(t),"clearKeysSoFarAfterDelay",(function(){t.keyClear&&(clearTimeout(t.keyClear),t.keyClear=null),t.keyClear=setTimeout((function(){t.keysSoFar="",t.keyClear=null}),500)})),m(h(t),"findMatchInRange",(function(e,n,o){for(var r=n;r<o;r+=1){var a=e[r].innerText;if(a&&0===a.toUpperCase().indexOf(t.keysSoFar.toUpperCase()))return e[r]}return null})),m(h(t),"findItemToFocus",(function(e){var n,o=t.optionRefs,r={};if(!t.keysSoFar)for(var a=0;a<o.length;a+=1)Number(o[a].getAttribute("data-ras-id"))===t.state.focused.id&&(t.searchIndex=a);return t.keysSoFar+=e,t.clearKeysSoFarAfterDelay(),void 0===t.state.focused.id?n=t.findMatchInRange(o,0,o.length):(n=t.findMatchInRange(o,t.searchIndex+1,o.length))||(n=t.findMatchInRange(o,0,t.searchIndex)),n&&(r=t.state.options.filter((function(e){return e.id===Number(n.getAttribute("data-ras-id"))}))[0]),r})),m(h(t),"handleListOnKeyDown",(function(e){var n;if(t.state.isActive)switch("Tab"!==e.key&&e.preventDefault(),e.key){case"PageUp":case"ArrowUp":t.moveUpItems();break;case"PageDown":case"ArrowDown":t.moveDownItems();break;case"Escape":t.toggleList(!1),t.selectBox.focus();break;case"Home":t.focusFirstItem();break;case"End":t.focusLastItem();break;case"Backspace":case"Delete":case"Enter":if(t.state.focused.disabled)return;t.handleSelectChange(t.state.focused),t.selectBox.focus();break;case"Tab":t.handleSelectChange(t.state.focused);break;default:(n=t.findItemToFocus(e.key)).id>=0&&t.handleFocusChange(n)}t.props.onListKeyDown&&t.props.onListKeyDown(e,t.state.focused)})),m(h(t),"handleClickOutside",(function(e){t.wrapperRef&&!t.wrapperRef.contains(e.target)&&t.setState({isActive:!1})})),m(h(t),"renderOption",(function(e){return r.a.createElement("li",l({id:"".concat(t.props.name,"-option-").concat(e.id),"data-ras-id":e.id,key:e.id,role:"option",ref:function(n){t.optionRefs[e.id]=n},disabled:e.disabled?"disabled":null,"aria-disabled":!!e.disabled||null,"aria-selected":t.state.selected.value===e.value,className:"ras-li ".concat(t.state.focused.value===e.value?"ras-focused":""," ").concat(t.state.selected.value===e.value?"ras-selected":""),onFocus:t.handleOptionOnFocus(e),onBlur:t.handleOptionOnBlur,onClick:function(n){n.preventDefault(),t.handleSelectChange(e)},onMouseOver:t.handleOptionOnFocus(e)},t.props.optionAttr(e)),t.props.customOption?t.props.customOption(e):e.label)}));var n,o=e.options.map((function(e,t){return s(s({},e),{},{id:t})}));return n=e.initEmpty?{}:e.initOption.value?o.filter((function(t){return t.value===e.initOption.value}))[0]||{}:o[0],t.state={isActive:!1,options:o,selected:n,focused:n},t.optionRefs=[],t.keysSoFar="",t}return t=c,(n=[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.hideLabel,a=t.name,c=t.placeholder,u=t.className,i=t.customButton,s=this.state,f=s.isActive,p=s.focused,d=s.selected,y="".concat(a,"-label"),h=i?i(this):d.label;return r.a.createElement("div",{className:"react-accessible-select ".concat(u," ").concat(f?"ras-active":"")},r.a.createElement("label",{id:y,htmlFor:"".concat(a,"-button"),className:"ras-label ".concat(o?"ras-label-hide":"")},n),r.a.createElement("div",{id:"".concat(a,"-wrapper"),className:"ras-main",ref:function(t){return e.wrapperRef=t}},r.a.createElement("button",l({id:"".concat(a,"-button"),"aria-haspopup":"listbox","aria-labelledby":"".concat(y," ").concat(a,"-button"),"aria-expanded":f,ref:function(t){return e.selectBox=t},onKeyDown:this.handleButtonOnKeyDown,onClick:this.handleButtonOnClick,className:"ras-button ".concat(d.value?"ras-value":"ras-placeholder")},this.props.buttonAttr(this)),d.value?h:c,r.a.createElement("span",{className:"ras-arrow"})),r.a.createElement("ul",{className:"ras-ul",id:"".concat(a,"-list"),role:"listbox",tabIndex:"0","aria-labelledby":y,"aria-activedescendant":void 0===p.id?null:"".concat(a,"-option-").concat(p.id),"aria-hidden":!f,ref:function(t){return e.optionBox=t},onKeyDown:this.handleListOnKeyDown},this.state.options.map((function(t){return e.renderOption(t)})))))}}])&&f(t.prototype,n),o&&f(t,o),c}(r.a.Component);v.defaultProps={label:null,hideLabel:!1,placeholder:null,options:[],name:"ras",className:"",initOption:{},initEmpty:!1,customOption:null,customButton:null,optionAttr:function(){},buttonAttr:function(){},onChange:null,onListKeyDown:null},v.propTypes={options:c.a.array.isRequired,onChange:c.a.func,onListKeyDown:c.a.func,label:c.a.node,hideLabel:c.a.bool,placeholder:c.a.node,name:c.a.string.isRequired,className:c.a.string,initOption:c.a.object,initEmpty:c.a.bool,customOption:c.a.func,customButton:c.a.func,optionAttr:c.a.func,buttonAttr:c.a.func},t.default=v},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(4),r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function w(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=O.prototype;var S=k.prototype=new w;S.constructor=k,o(S,O.prototype),S.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,r={},c=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,o)&&!C.hasOwnProperty(o)&&(r[o]=t[o]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];r.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===r[o]&&(r[o]=i[o]);return{$$typeof:a,type:e,key:c,ref:u,props:r,_owner:j.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,R=[];function T(e,t,n,o){if(R.length){var r=R.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,n){return null==e?0:function e(t,n,o,r){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case c:i=!0}}if(i)return o(r,t,""===n?"."+A(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var l=n+A(u=t[s],s);i+=e(u,l,o,r)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=b&&t[b]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),s=0;!(u=t.next()).done;)i+=e(u=u.value,l=n+A(u,s++),o,r);else if("object"===u)throw o=""+t,Error(m(31,"[object Object]"===o?"object with keys {"+Object.keys(t).join(", ")+"}":o,""));return i}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,o,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),o.push(e))}function L(e,t,n,o,r){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),D(e,B,t=T(t,a,o,r)),I(t)}var $={current:null};function U(){var e=$.current;if(null===e)throw Error(m(321));return e}var N={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:function(e,t,n){if(null==e)return e;var o=[];return L(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;D(e,F,t=T(null,null,t,n)),I(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=s,t.PureComponent=k,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var r=o({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)x.call(t,l)&&!C.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:a,type:e.type,key:c,ref:u,props:r,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,i=c(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))r.call(n,l)&&(i[l]=n[l]);if(o){u=o(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(i[u[f]]=n[u[f]])}}return i}},function(e,t,n){"use strict";var o=n(6);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,c){if(c!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]).default}));