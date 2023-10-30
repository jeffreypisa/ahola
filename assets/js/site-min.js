/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t(e.bootstrap={},e.jQuery)}(this,function(e,t){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function n(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */function a(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function l(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Xt))}}
/**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
function c(e){var t;return e&&"[object Function]"==={}.toString.call(e)}
/**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */function b(e,t){if(1!==e.nodeType)return[];
// NOTE: 1 DOM access here
var n=getComputedStyle(e,null);return t?n[t]:n}
/**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */function h(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}
/**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */function m(e){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}
// Firefox want us to check `-x` and `-y` variations as well
var t=b(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:m(h(e))}
/**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
function g(e){return 11===e?$t:10===e?en:$t||en}
/**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */function y(e){if(!e)return document.documentElement;
// Skip hidden elements which don't have an offsetParent
for(var t=g(10)?document.body:null,n=e.offsetParent
// NOTE: 1 DOM access here
;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?
// .offsetParent will return the closest TD or TABLE in case
// no offsetParent is present, I hate this job...
-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===b(n,"position")?y(n):n:e?e.ownerDocument.documentElement:document.documentElement}function u(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||y(e.firstElementChild)===e)}
/**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */function f(e){return null!==e.parentNode?f(e.parentNode):e}
/**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */function p(e,t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var a=r.commonAncestorContainer;
// Both nodes are inside #document
if(e!==a&&t!==a||i.contains(o))return u(a)?a:y(a);
// one of the nodes is inside shadowDOM, find which one
var s=f(e);return s.host?p(s.host,t):p(e,f(t).host)}
/**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */function d(e,t
/*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */){var n,i="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"!==o&&"HTML"!==o)return e[i];var r=e.ownerDocument.documentElement,a;return(e.ownerDocument.scrollingElement||r)[i]}function v(e,t,n
/*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */){var i=2<arguments.length&&void 0!==n&&n,o=d(t,"top"),r=d(t,"left"),a=i?-1:1;return e.top+=o*a,e.bottom+=o*a,e.left+=r*a,e.right+=r*a,e}function _(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function w(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],g(10)?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function E(){var e=document.body,t=document.documentElement,n=g(10)&&getComputedStyle(t);return{height:w("Height",e,t,n),width:w("Width",e,t,n)}}
/**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
function S(e){return rn({},e,{right:e.left+e.width,bottom:e.top+e.height})}
/**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */function C(e){var t={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(g(10)){t=e.getBoundingClientRect();var n=d(e,"top"),i=d(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?E():{},a=r.width||e.clientWidth||o.right-o.left,s=r.height||e.clientHeight||o.bottom-o.top,l=e.offsetWidth-a,c=e.offsetHeight-s;
// subtract scrollbar size from sizes
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(l||c){var u=b(e);l-=_(u,"x"),c-=_(u,"y"),o.width-=l,o.height-=c}return S(o)}function T(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=g(10),r="HTML"===t.nodeName,a=C(e),s=C(t),l=m(e),c=b(t),u=parseFloat(c.borderTopWidth,10),f=parseFloat(c.borderLeftWidth,10);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
i&&"HTML"===t.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var d=S({top:a.top-s.top-u,left:a.left-s.left-f,width:a.width,height:a.height});
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(d.marginTop=0,d.marginLeft=0,!o&&r){var h=parseFloat(c.marginTop,10),p=parseFloat(c.marginLeft,10);d.top-=u-h,d.bottom-=u-h,d.left-=f-p,d.right-=f-p,
// Attach marginTop and marginLeft because in some circumstances we may need them
d.marginTop=h,d.marginLeft=p}return(o&&!i?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(d=v(d,t)),d}function A(e,t
/**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */){var n=1<arguments.length&&void 0!==t&&t,i=e.ownerDocument.documentElement,o=T(e,i),r=Math.max(i.clientWidth,window.innerWidth||0),a=Math.max(i.clientHeight,window.innerHeight||0),s=n?0:d(i),l=n?0:d(i,"left"),c;return S({top:s-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:r,height:a})}function I(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===b(e,"position")||I(h(e)))}
/**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */function O(e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||g())return document.documentElement;for(var t=e.parentElement;t&&"none"===b(t,"transform");)t=t.parentElement;return t||document.documentElement}
/**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */function D(e,t,n,i,o){var r=4<arguments.length&&void 0!==o&&o,a={top:0,left:0},s=r?O(e):p(e,t);
// NOTE: 1 DOM access here
// Handle viewport case
if("viewport"===i)a=A(s,r);else{
// Handle other cases based on DOM element used as boundaries
var l=void 0;"scrollParent"===i?"BODY"===(l=m(h(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===i?e.ownerDocument.documentElement:i;var c=T(l,s,r);
// In case of HTML, we need a different computation
if("HTML"!==l.nodeName||I(s))
// for all the other DOM elements, this one is good
a=c;else{var u=E(),f=u.height,d=u.width;a.top+=c.top-c.marginTop,a.bottom=f+c.top,a.left+=c.left-c.marginLeft,a.right=d+c.left}}
// Add paddings
return a.left+=n,a.top+=n,a.right-=n,a.bottom-=n,a}function x(e){var t,n;return e.width*e.height}
/**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function k(e,t,i,n,o,r
/**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */){var a=5<arguments.length&&void 0!==r?r:0;if(-1===e.indexOf("auto"))return e;var s=D(i,n,a,o),l={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},c=Object.keys(l).map(function(e){return rn({key:e},l[e],{area:x(l[e])})}).sort(function(e,t){return t.area-e.area}),u=c.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),f=0<u.length?u[0].key:c[0].key,d=e.split("-")[1];return f+(d?"-"+d:"")}function N(e,t,n,i
/**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */){var o=3<arguments.length&&void 0!==i?i:null,r;return T(n,o?O(t):p(t,n),o)}function L(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),o;return{width:e.offsetWidth+i,height:e.offsetHeight+n}}
/**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */function M(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}
/**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */function H(e,t,n){n=n.split("-")[0];
// Get popper node sizes
var i=L(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",c=r?"width":"height";
// Add position, width and height to our offsets object
return o[a]=t[a]+t[l]/2-i[l]/2,o[s]=n===s?t[s]-i[c]:t[M(s)],o}
/**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */function j(e,t){
// use native find if supported
return Array.prototype.find?e.find(t):e.filter(t)[0];
// use `filter` to obtain the same behavior of `find`
}
/**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */function P(e,t,n){
// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});
// use `find` + `indexOf` if `findIndex` isn't supported
var i=j(e,function(e){return e[t]===n});return e.indexOf(i)}
/**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */function R(e,n,t){var i;return(void 0===t?e:e.slice(0,P(e,"name",t))).forEach(function(e){e.function&&
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;// eslint-disable-line dot-notation
e.enabled&&c(t)&&(
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
n.offsets.popper=S(n.offsets.popper),n.offsets.reference=S(n.offsets.reference),n=t(n,e))}),n}
/**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */function B(){
// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};
// compute reference element offsets
e.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=k(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),
// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,
// compute the popper offsets
e.offsets.popper=H(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",
// run the modifiers
e=R(this.modifiers,e),
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}
/**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */function W(e,i){return e.some(function(e){var t=e.name,n;return e.enabled&&t===i})}
/**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */function F(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if(void 0!==document.body.style[r])return r}return null}
/**
   * Destroy the popper
   * @method
   * @memberof Popper
   */function U(){return this.state.isDestroyed=!0,
// touch DOM only if `applyStyle` modifier is enabled
W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[F("transform")]=""),this.disableEventListeners(),
// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}
/**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */function z(e){var t=e.ownerDocument;return t?t.defaultView:window}function Y(e,t,n,i){var o="BODY"===e.nodeName,r=o?e.ownerDocument.defaultView:e;r.addEventListener(t,n,{passive:!0}),o||Y(m(r.parentNode),t,n,i),i.push(r)}
/**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */function q(e,t,n,i){
// Resize event listener on window
n.updateBound=i,z(e).addEventListener("resize",n.updateBound,{passive:!0});
// Scroll event listener on scroll parents
var o=m(e);return Y(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}
/**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */function Q(){this.state.eventsEnabled||(this.state=q(this.reference,this.options,this.state,this.scheduleUpdate))}
/**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */function K(e,t){
// Remove resize event listener on window
return z(e).removeEventListener("resize",t.updateBound),
// Remove scroll event listener on scroll parents
t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),
// Reset state
t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}
/**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */function V(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=K(this.reference,this.state))}
/**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */function X(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}
/**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */function Z(n,i){Object.keys(i).forEach(function(e){var t="";
// add unit if the value is numeric and is one of the following
-1!==["width","height","top","right","bottom","left"].indexOf(e)&&X(i[e])&&(t="px"),n.style[e]=i[e]+t})}
/**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */function G(n,i){Object.keys(i).forEach(function(e){var t;!1!==i[e]?n.setAttribute(e,i[e]):n.removeAttribute(e)})}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */function J(e){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
return Z(e.instance.popper,e.styles),
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
G(e.instance.popper,e.attributes),
// if arrowElement is defined and arrowStyles has some properties
e.arrowElement&&Object.keys(e.arrowStyles).length&&Z(e.arrowElement,e.arrowStyles),e}
/**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */function $(e,t,n,i,o){
// compute reference element offsets
var r=N(o,t,e,n.positionFixed),a=k(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
return t.setAttribute("x-placement",a),
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
Z(t,{position:n.positionFixed?"fixed":"absolute"}),n}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function ee(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=j(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==r?r:t.gpuAcceleration,s,l=C(y(e.instance.popper)),c={position:o.position},u={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)},f="bottom"===n?"top":"bottom",d="right"===i?"left":"right",h=F("transform"),p=void 0,m=void 0;if(m="bottom"===f?-l.height+u.bottom:u.top,p="right"===d?-l.width+u.right:u.left,a&&h)c[h]="translate3d("+p+"px, "+m+"px, 0)",c[f]=0,c[d]=0,c.willChange="transform";else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var g="bottom"===f?-1:1,v="right"===d?-1:1;c[f]=m*g,c[d]=p*v,c.willChange=f+", "+d}
// Attributes
var _={"x-placement":e.placement};
// Update `data` attributes, styles and arrowStyles
return e.attributes=rn({},_,e.attributes),e.styles=rn({},c,e.styles),e.arrowStyles=rn({},e.offsets.arrow,e.arrowStyles),e}
/**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */function te(e,n,t){var i=j(e,function(e){var t;return e.name===n}),o=!!i&&e.some(function(e){return e.name===t&&e.enabled&&e.order<i.order});if(!o){var r="`"+n+"`",a="`"+t+"`";console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function ne(e,t){var n;
// arrow depends on keepTogether in order to work
if(!te(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof i){
// if arrowElement is not found, don't run the modifier
if(!(i=e.instance.popper.querySelector(i)))return e}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,a=r.popper,s=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",u=l?"Top":"Left",f=u.toLowerCase(),d=l?"left":"top",h=l?"bottom":"right",p=L(i)[c];
//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjuction
//
// top/left side
s[h]-p<a[f]&&(e.offsets.popper[f]-=a[f]-(s[h]-p)),
// bottom/right side
s[f]+p>a[h]&&(e.offsets.popper[f]+=s[f]+p-a[h]),e.offsets.popper=S(e.offsets.popper);
// compute center of the popper
var m=s[f]+s[c]/2-p/2,g=b(e.instance.popper),v=parseFloat(g["margin"+u],10),_=parseFloat(g["border"+u+"Width"],10),y=m-e.offsets.popper[f]-v-_;
// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
// prevent arrowElement from being placed not contiguously to its popper
return y=Math.max(Math.min(a[c]-p,y),0),e.arrowElement=i,e.offsets.arrow=(on(n={},f,Math.round(y)),on(n,d,""),n),e}
/**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */function ie(e){return"end"===e?"start":"start"===e?"end":e}
/**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
/**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
function oe(e,t){var n=1<arguments.length&&void 0!==t&&t,i=sn.indexOf(e),o=sn.slice(i+1).concat(sn.slice(0,i));return n?o.reverse():o}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
function re(h,p){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(W(h.instance.modifiers,"inner"))return h;if(h.flipped&&h.placement===h.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return h;var m=D(h.instance.popper,h.instance.reference,p.padding,p.boundariesElement,h.positionFixed),g=h.placement.split("-")[0],v=M(g),_=h.placement.split("-")[1]||"",y=[];switch(p.behavior){case ln:y=[g,v];break;case cn:y=oe(g);break;case un:y=oe(g,!0);break;default:y=p.behavior}return y.forEach(function(e,t){if(g!==e||y.length===t+1)return h;g=h.placement.split("-")[0],v=M(g);var n=h.offsets.popper,i=h.offsets.reference,o=Math.floor,r="left"===g&&o(n.right)>o(i.left)||"right"===g&&o(n.left)<o(i.right)||"top"===g&&o(n.bottom)>o(i.top)||"bottom"===g&&o(n.top)<o(i.bottom),a=o(n.left)<o(m.left),s=o(n.right)>o(m.right),l=o(n.top)<o(m.top),c=o(n.bottom)>o(m.bottom),u="left"===g&&a||"right"===g&&s||"top"===g&&l||"bottom"===g&&c,f=-1!==["top","bottom"].indexOf(g),d=!!p.flipVariations&&(f&&"start"===_&&a||f&&"end"===_&&s||!f&&"start"===_&&l||!f&&"end"===_&&c);(r||u||d)&&(
// this boolean to detect any flip loop
h.flipped=!0,(r||u)&&(g=y[t+1]),d&&(_=ie(_)),h.placement=g+(_?"-"+_:""),
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
h.offsets.popper=rn({},h.offsets.popper,H(h.instance.popper,h.offsets.reference,h.placement)),h=R(h.instance.modifiers,h,"flip"))}),h}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function ae(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",c=a?"width":"height";return n[s]<r(i[l])&&(e.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[s])&&(e.offsets.popper[l]=r(i[s])),e}
/**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */function se(e,t,n,i){
// separate value from unit
var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2];
// If it's not a number it's an operator, I guess
if(!r)return e;if(0===a.indexOf("%")){var s=void 0,l;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return S(s)[t]/100*r}if("vh"!==a&&"vw"!==a)
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return r;
// if is a vh or vw, we calculate the size based on the viewport
var c=void 0;return(c="vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}
/**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */function le(e,o,r,t){var a=[0,0],s=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(j(n,function(e){return-1!==e.search(/,|\s/)}));
// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
return(c=c.map(function(e,t){
// Most of the units rely on the orientation of the popper
var n=(1===t?!s:s)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return se(e,n,o,r)})})).forEach(function(n,i){n.forEach(function(e,t){X(e)&&(a[i]+=e*("-"===n[t-1]?-1:1))})}),a}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */function ce(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,a=o.reference,s=i.split("-")[0],l=void 0;return l=X(+n)?[+n,0]:le(n,r,a,s),"left"===s?(r.top+=l[0],r.left-=l[1]):"right"===s?(r.top+=l[0],r.left+=l[1]):"top"===s?(r.left+=l[0],r.top-=l[1]):"bottom"===s&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function ue(e,o){var t=o.boundariesElement||y(e.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
e.instance.reference===t&&(t=y(t));
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var n=F("transform"),i=e.instance.popper.style,r=i.top,a=i.left,s=i[n];i.top="",i.left="",i[n]="";var l=D(e.instance.popper,e.instance.reference,o.padding,t,e.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
i.top=r,i.left=a,i[n]=s,o.boundaries=l;var c=o.priority,u=e.offsets.popper,f={primary:function e(t){var n=u[t];return u[t]<l[t]&&!o.escapeWithReference&&(n=Math.max(u[t],l[t])),on({},t,n)},secondary:function e(t){var n="right"===t?"left":"top",i=u[n];return u[t]>l[t]&&!o.escapeWithReference&&(i=Math.min(u[n],l[t]-("right"===t?u.width:u.height))),on({},n,i)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=rn({},u,f[t](e))}),e.offsets.popper=u,e}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function fe(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(i){var o=e.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",c=s?"width":"height",u={start:on({},l,r[l]),end:on({},l,r[l]+r[c]-a[c])};e.offsets.popper=rn({},a,u[i])}return e}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function de(e){if(!te(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=j(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function he(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),e.placement=M(t),e.offsets.popper=S(o),e}
/**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */
/**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */for(var pe=function(o){// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function l(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function e(){return{bindType:i,delegateType:i,handle:function e(t){if(o(t.target).is(this))return t.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}}}function t(e){var t=this,n=!1;return o(this).one(c.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||c.triggerTransitionEnd(t)},e),this}function n(){o.fn.emulateTransitionEnd=t,o.event.special[c.TRANSITION_END]=e()}
/**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
var i="transitionend",r=1e6,a=1e3,c={TRANSITION_END:"bsTransitionEnd",getUID:function e(t){for(;
// eslint-disable-next-line no-bitwise
t+=~~(Math.random()*r),document.getElementById(t););return t},getSelectorFromElement:function e(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return document.querySelector(n)?n:null}catch(e){return null}},getTransitionDurationFromElement:function e(t){if(!t)return 0;// Get transition-duration of the element
var n=o(t).css("transition-duration"),i;// Return 0 if element or transition duration is not found
return parseFloat(n)?(// If multiple durations are defined, take the first
n=n.split(",")[0],parseFloat(n)*a):0},reflow:function e(t){return t.offsetHeight},triggerTransitionEnd:function e(t){o(t).trigger(i)},
// TODO: Remove in v5
supportsTransitionEnd:function e(){return Boolean(i)},isElement:function e(t){return(t[0]||t).nodeType},typeCheckConfig:function e(t,n,i){for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var r=i[o],a=n[o],s=a&&c.isElement(a)?"element":l(a);if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+o+'" provided type "'+s+'" but expected type "'+r+'".')}}};return n(),c}(t=t&&t.hasOwnProperty("default")?t.default:t),me=(ve="alert",_e="4.1.3",be="."+(ye="bs.alert"),we=".data-api",Ee=(ge=t).fn[ve],Se='[data-dismiss="alert"]',Ce={CLOSE:"close"+be,CLOSED:"closed"+be,CLICK_DATA_API:"click"+be+we},Te="alert",Ae="fade",Ie="show"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Oe=
/* */
function(){function i(e){this._element=e}// Getters
var e=i.prototype;
// Public
return e.close=function e(t){var n=this._element,i;t&&(n=this._getRootElement(t)),this._triggerCloseEvent(n).isDefaultPrevented()||this._removeElement(n)},e.dispose=function e(){ge.removeData(this._element,ye),this._element=null},// Private
e._getRootElement=function e(t){var n=pe.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=ge(t).closest("."+Te)[0]),i},e._triggerCloseEvent=function e(t){var n=ge.Event(Ce.CLOSE);return ge(t).trigger(n),n},e._removeElement=function e(t){var n=this;if(ge(t).removeClass(Ie),ge(t).hasClass(Ae)){var i=pe.getTransitionDurationFromElement(t);ge(t).one(pe.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(i)}else this._destroyElement(t)},e._destroyElement=function e(t){ge(t).detach().trigger(Ce.CLOSED).remove()},// Static
i._jQueryInterface=function e(n){return this.each(function(){var e=ge(this),t=e.data(ye);t||(t=new i(this),e.data(ye,t)),"close"===n&&t[n](this)})},i._handleDismiss=function e(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(i,null,[{key:"VERSION",get:function e(){return _e}}]),i}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
ge(document).on(Ce.CLICK_DATA_API,Se,Oe._handleDismiss(new Oe)),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
ge.fn[ve]=Oe._jQueryInterface,ge.fn[ve].Constructor=Oe,ge.fn[ve].noConflict=function(){return ge.fn[ve]=Ee,Oe._jQueryInterface},Oe),ge,ve,_e,ye,be,we,Ee,Se,Ce,Te,Ae,Ie,Oe,De=(ke="button",Ne="4.1.3",Me="."+(Le="bs.button"),He=".data-api",je=(xe=t).fn[ke],Pe="active",Re="btn",We='[data-toggle^="button"]',Fe='[data-toggle="buttons"]',Ue="input",ze=".active",Ye=".btn",qe={CLICK_DATA_API:"click"+Me+He,FOCUS_BLUR_DATA_API:(Be="focus")+Me+He+" blur"+Me+He
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},Qe=
/* */
function(){function n(e){this._element=e}// Getters
var e=n.prototype;
// Public
return e.toggle=function e(){var t=!0,n=!0,i=xe(this._element).closest(Fe)[0];if(i){var o=this._element.querySelector(Ue);if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(Pe))t=!1;else{var r=i.querySelector(ze);r&&xe(r).removeClass(Pe)}if(t){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!this._element.classList.contains(Pe),xe(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(Pe)),t&&xe(this._element).toggleClass(Pe)},e.dispose=function e(){xe.removeData(this._element,Le),this._element=null},// Static
n._jQueryInterface=function e(t){return this.each(function(){var e=xe(this).data(Le);e||(e=new n(this),xe(this).data(Le,e)),"toggle"===t&&e[t]()})},r(n,null,[{key:"VERSION",get:function e(){return Ne}}]),n}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
xe(document).on(qe.CLICK_DATA_API,We,function(e){e.preventDefault();var t=e.target;xe(t).hasClass(Re)||(t=xe(t).closest(Ye)),Qe._jQueryInterface.call(xe(t),"toggle")}).on(qe.FOCUS_BLUR_DATA_API,We,function(e){var t=xe(e.target).closest(Ye)[0];xe(t).toggleClass(Be,/^focus(in)?$/.test(e.type))}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
xe.fn[ke]=Qe._jQueryInterface,xe.fn[ke].Constructor=Qe,xe.fn[ke].noConflict=function(){return xe.fn[ke]=je,Qe._jQueryInterface},Qe),xe,ke,Ne,Le,Me,He,je,Pe,Re,Be,We,Fe,Ue,ze,Ye,qe,Qe,Ke=(Xe="carousel",Ze="4.1.3",Je="."+(Ge="bs.carousel"),$e=".data-api",et=(Ve=t).fn[Xe],tt=37,nt=39,ot={interval:5e3,keyboard:!0,slide:!(it=500),pause:"hover",wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},at="next",st="prev",lt="left",ct="right",ut={SLIDE:"slide"+Je,SLID:"slid"+Je,KEYDOWN:"keydown"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je,TOUCHEND:"touchend"+Je,LOAD_DATA_API:"load"+Je+$e,CLICK_DATA_API:"click"+Je+$e},ft="carousel",dt="active",ht="slide",pt="carousel-item-right",mt="carousel-item-left",gt="carousel-item-next",vt="carousel-item-prev",_t="carousel-item",yt=".active",bt=".active.carousel-item",wt=".carousel-item",Et=".carousel-item-next, .carousel-item-prev",St=".carousel-indicators",Ct="[data-slide], [data-slide-to]",Tt='[data-ride="carousel"]'
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,At=
/* */
function(){function a(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(t),this._element=Ve(e)[0],this._indicatorsElement=this._element.querySelector(St),this._addEventListeners()}// Getters
var e=a.prototype;
// Public
return e.next=function e(){this._isSliding||this._slide(at)},e.nextWhenVisible=function e(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&Ve(this._element).is(":visible")&&"hidden"!==Ve(this._element).css("visibility")&&this.next()},e.prev=function e(){this._isSliding||this._slide(st)},e.pause=function e(t){t||(this._isPaused=!0),this._element.querySelector(Et)&&(pe.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function e(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function e(t){var n=this;this._activeElement=this._element.querySelector(bt);var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)Ve(this._element).one(ut.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var o=i<t?at:st;this._slide(o,this._items[t])}},e.dispose=function e(){Ve(this._element).off(Je),Ve.removeData(this._element,Ge),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},// Private
e._getConfig=function e(t){return t=s({},ot,t),pe.typeCheckConfig(Xe,t,rt),t},e._addEventListeners=function e(){var t=this;this._config.keyboard&&Ve(this._element).on(ut.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(Ve(this._element).on(ut.MOUSEENTER,function(e){return t.pause(e)}).on(ut.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
Ve(this._element).on(ut.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},it+t._config.interval)}))},e._keydown=function e(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:}},e._getItemIndex=function e(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(wt)):[],this._items.indexOf(t)},e._getItemByDirection=function e(t,n){var i=t===at,o=t===st,r=this._getItemIndex(n),a=this._items.length-1,s;if((o&&0===r||i&&r===a)&&!this._config.wrap)return n;var l,c=(r+(t===st?-1:1))%this._items.length;return-1===c?this._items[this._items.length-1]:this._items[c]},e._triggerSlideEvent=function e(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(bt)),r=Ve.Event(ut.SLIDE,{relatedTarget:t,direction:n,from:o,to:i});return Ve(this._element).trigger(r),r},e._setActiveIndicatorElement=function e(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(yt));Ve(n).removeClass(dt);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&Ve(i).addClass(dt)}},e._slide=function e(t,n){var i=this,o=this._element.querySelector(bt),r=this._getItemIndex(o),a=n||o&&this._getItemByDirection(t,o),s=this._getItemIndex(a),l=Boolean(this._interval),c,u,f,d;if(f=t===at?(c=mt,u=gt,lt):(c=pt,u=vt,ct),a&&Ve(a).hasClass(dt))this._isSliding=!1;else if(!this._triggerSlideEvent(a,f).isDefaultPrevented()&&o&&a){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(a);var h=Ve.Event(ut.SLID,{relatedTarget:a,direction:f,from:r,to:s});if(Ve(this._element).hasClass(ht)){Ve(a).addClass(u),pe.reflow(a),Ve(o).addClass(c),Ve(a).addClass(c);var p=pe.getTransitionDurationFromElement(o);Ve(o).one(pe.TRANSITION_END,function(){Ve(a).removeClass(c+" "+u).addClass(dt),Ve(o).removeClass(dt+" "+u+" "+c),i._isSliding=!1,setTimeout(function(){return Ve(i._element).trigger(h)},0)}).emulateTransitionEnd(p)}else Ve(o).removeClass(dt),Ve(a).addClass(dt),this._isSliding=!1,Ve(this._element).trigger(h);l&&this.cycle()}},// Static
a._jQueryInterface=function e(i){return this.each(function(){var e=Ve(this).data(Ge),t=s({},ot,Ve(this).data());"object"==typeof i&&(t=s({},t,i));var n="string"==typeof i?i:t.slide;if(e||(e=new a(this,t),Ve(this).data(Ge,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&(e.pause(),e.cycle())})},a._dataApiClickHandler=function e(t){var n=pe.getSelectorFromElement(this);if(n){var i=Ve(n)[0];if(i&&Ve(i).hasClass(ft)){var o=s({},Ve(i).data(),Ve(this).data()),r=this.getAttribute("data-slide-to");r&&(o.interval=!1),a._jQueryInterface.call(Ve(i),o),r&&Ve(i).data(Ge).to(r),t.preventDefault()}}},r(a,null,[{key:"VERSION",get:function e(){return Ze}},{key:"Default",get:function e(){return ot}}]),a}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
Ve(document).on(ut.CLICK_DATA_API,Ct,At._dataApiClickHandler),Ve(window).on(ut.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(Tt)),t=0,n=e.length;t<n;t++){var i=Ve(e[t]);At._jQueryInterface.call(i,i.data())}}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Ve.fn[Xe]=At._jQueryInterface,Ve.fn[Xe].Constructor=At,Ve.fn[Xe].noConflict=function(){return Ve.fn[Xe]=et,At._jQueryInterface},At),Ve,Xe,Ze,Ge,Je,$e,et,tt,nt,it,ot,rt,at,st,lt,ct,ut,ft,dt,ht,pt,mt,gt,vt,_t,yt,bt,wt,Et,St,Ct,Tt,At,It=(Dt="collapse",xt="4.1.3",Nt="."+(kt="bs.collapse"),Lt=".data-api",Mt=(Ot=t).fn[Dt],Ht={toggle:!0,parent:""},jt={toggle:"boolean",parent:"(string|element)"},Pt={SHOW:"show"+Nt,SHOWN:"shown"+Nt,HIDE:"hide"+Nt,HIDDEN:"hidden"+Nt,CLICK_DATA_API:"click"+Nt+Lt},Rt="show",Bt="collapse",Wt="collapsing",Ft="collapsed",Ut="width",zt="height",Yt=".show, .collapsing",qt='[data-toggle="collapse"]'
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Qt=
/* */
function(){function u(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=Ot.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(qt)),i=0,o=n.length;i<o;i++){var r=n[i],a=pe.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter(function(e){return e===t});null!==a&&0<s.length&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
var e=u.prototype;
// Public
return e.toggle=function e(){Ot(this._element).hasClass(Rt)?this.hide():this.show()},e.show=function e(){var t=this,n,i;if(!this._isTransitioning&&!Ot(this._element).hasClass(Rt)&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(Yt)).filter(function(e){return e.getAttribute("data-parent")===t._config.parent})).length&&(n=null),!(n&&(i=Ot(n).not(this._selector).data(kt))&&i._isTransitioning))){var o=Ot.Event(Pt.SHOW);if(Ot(this._element).trigger(o),!o.isDefaultPrevented()){n&&(u._jQueryInterface.call(Ot(n).not(this._selector),"hide"),i||Ot(n).data(kt,null));var r=this._getDimension();Ot(this._element).removeClass(Bt).addClass(Wt),this._element.style[r]=0,this._triggerArray.length&&Ot(this._triggerArray).removeClass(Ft).attr("aria-expanded",!0),this.setTransitioning(!0);var a=function e(){Ot(t._element).removeClass(Wt).addClass(Bt).addClass(Rt),t._element.style[r]="",t.setTransitioning(!1),Ot(t._element).trigger(Pt.SHOWN)},s,l="scroll"+(r[0].toUpperCase()+r.slice(1)),c=pe.getTransitionDurationFromElement(this._element);Ot(this._element).one(pe.TRANSITION_END,a).emulateTransitionEnd(c),this._element.style[r]=this._element[l]+"px"}}},e.hide=function e(){var t=this;if(!this._isTransitioning&&Ot(this._element).hasClass(Rt)){var n=Ot.Event(Pt.HIDE);if(Ot(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",pe.reflow(this._element),Ot(this._element).addClass(Wt).removeClass(Bt).removeClass(Rt);var o=this._triggerArray.length;if(0<o)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=pe.getSelectorFromElement(a),l;if(null!==s)Ot([].slice.call(document.querySelectorAll(s))).hasClass(Rt)||Ot(a).addClass(Ft).attr("aria-expanded",!1)}this.setTransitioning(!0);var c=function e(){t.setTransitioning(!1),Ot(t._element).removeClass(Wt).addClass(Bt).trigger(Pt.HIDDEN)};this._element.style[i]="";var u=pe.getTransitionDurationFromElement(this._element);Ot(this._element).one(pe.TRANSITION_END,c).emulateTransitionEnd(u)}}},e.setTransitioning=function e(t){this._isTransitioning=t},e.dispose=function e(){Ot.removeData(this._element,kt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},// Private
e._getConfig=function e(t){return(t=s({},Ht,t)).toggle=Boolean(t.toggle),// Coerce string values
pe.typeCheckConfig(Dt,t,jt),t},e._getDimension=function e(){var t;return Ot(this._element).hasClass(Ut)?Ut:zt},e._getParent=function e(){var n=this,t=null;pe.isElement(this._config.parent)?(t=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(t.querySelectorAll(i));return Ot(o).each(function(e,t){n._addAriaAndCollapsedClass(u._getTargetFromElement(t),[t])}),t},e._addAriaAndCollapsedClass=function e(t,n){if(t){var i=Ot(t).hasClass(Rt);n.length&&Ot(n).toggleClass(Ft,!i).attr("aria-expanded",i)}},// Static
u._getTargetFromElement=function e(t){var n=pe.getSelectorFromElement(t);return n?document.querySelector(n):null},u._jQueryInterface=function e(i){return this.each(function(){var e=Ot(this),t=e.data(kt),n=s({},Ht,e.data(),"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new u(this,n),e.data(kt,t)),"string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},r(u,null,[{key:"VERSION",get:function e(){return xt}},{key:"Default",get:function e(){return Ht}}]),u}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
Ot(document).on(Pt.CLICK_DATA_API,qt,function(e){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===e.currentTarget.tagName&&e.preventDefault();var i=Ot(this),t=pe.getSelectorFromElement(this),n=[].slice.call(document.querySelectorAll(t));Ot(n).each(function(){var e=Ot(this),t,n=e.data(kt)?"toggle":i.data();Qt._jQueryInterface.call(e,n)})}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Ot.fn[Dt]=Qt._jQueryInterface,Ot.fn[Dt].Constructor=Qt,Ot.fn[Dt].noConflict=function(){return Ot.fn[Dt]=Mt,Qt._jQueryInterface},Qt),Ot,Dt,xt,kt,Nt,Lt,Mt,Ht,jt,Pt,Rt,Bt,Wt,Ft,Ut,zt,Yt,qt,Qt,Kt="undefined"!=typeof window&&"undefined"!=typeof document,Vt=["Edge","Trident","Firefox"],Xt=0,Zt=0
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */;Zt<Vt.length;Zt+=1)if(Kt&&0<=navigator.userAgent.indexOf(Vt[Zt])){Xt=1;break}var Gt,Jt=Kt&&window.Promise?a:l,$t=Kt&&!(!window.MSInputMethodContext||!document.documentMode),en=Kt&&/MSIE 10/.test(navigator.userAgent),tn=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},nn=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),on=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},rn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},an=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],sn=an.slice(3),ln="flip",cn="clockwise",un="counterclockwise",fn,dn={
/**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
placement:"bottom",
/**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
positionFixed:!1,
/**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
eventsEnabled:!0,
/**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
removeOnDestroy:!1,
/**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
onCreate:function e(){},
/**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
onUpdate:function e(){},
/**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
modifiers:{
/**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
shift:{
/** @prop {number} order=100 - Index used to define the order of execution */
order:100,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:fe},
/**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
offset:{
/** @prop {number} order=200 - Index used to define the order of execution */
order:200,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ce,
/** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
offset:0},
/**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
preventOverflow:{
/** @prop {number} order=300 - Index used to define the order of execution */
order:300,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ue,
/**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
priority:["left","right","top","bottom"],
/**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
padding:5,
/**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
boundariesElement:"scrollParent"},
/**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
keepTogether:{
/** @prop {number} order=400 - Index used to define the order of execution */
order:400,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ae},
/**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
arrow:{
/** @prop {number} order=500 - Index used to define the order of execution */
order:500,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ne,
/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},
/**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
flip:{
/** @prop {number} order=600 - Index used to define the order of execution */
order:600,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:re,
/**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
behavior:"flip",
/**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
padding:5,
/**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
boundariesElement:"viewport"},
/**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
inner:{
/** @prop {number} order=700 - Index used to define the order of execution */
order:700,
/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:!1,
/** @prop {ModifierFn} */
fn:he},
/**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
hide:{
/** @prop {number} order=800 - Index used to define the order of execution */
order:800,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:de},
/**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
computeStyle:{
/** @prop {number} order=850 - Index used to define the order of execution */
order:850,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ee,
/**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
gpuAcceleration:!0,
/**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
x:"bottom",
/**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
y:"right"},
/**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
applyStyle:{
/** @prop {number} order=900 - Index used to define the order of execution */
order:900,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:J,
/** @prop {Function} */
onLoad:$,
/**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
gpuAcceleration:void 0}}},hn=function(){
/**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
function a(e,t,n){var i=this,o=2<arguments.length&&void 0!==n?n:{};tn(this,a),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},
// make update() debounced, so that it only runs at most once-per-tick
this.update=Jt(this.update.bind(this)),
// with {} we create a new object with the options inside it
this.options=rn({},a.Defaults,o),
// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},
// get reference and popper elements (allow jQuery wrappers)
this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,
// Deep merge modifiers options
this.options.modifiers={},Object.keys(rn({},a.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=rn({},a.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(e){return rn({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(e){e.enabled&&c(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)}),
// fire the first update to position the popper in the right place
this.update();var r=this.options.eventsEnabled;r&&
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners(),this.state.eventsEnabled=r}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
return nn(a,[{key:"update",value:function e(){return B.call(this)}},{key:"destroy",value:function e(){return U.call(this)}},{key:"enableEventListeners",value:function e(){return Q.call(this)}},{key:"disableEventListeners",value:function e(){return V.call(this)}
/**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */
/**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */}]),a}();
/**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
/**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */
hn.Utils=("undefined"!=typeof window?window:global).PopperUtils,hn.placements=an,hn.Defaults=dn;
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
var pn=(gn="dropdown",vn="4.1.3",yn="."+(_n="bs.dropdown"),bn=".data-api",wn=(mn=t).fn[gn],En=27,Sn=32,Cn=9,Tn=38,An=40,In=3,On=new RegExp("38|40|27"),Dn={HIDE:"hide"+yn,HIDDEN:"hidden"+yn,SHOW:"show"+yn,SHOWN:"shown"+yn,CLICK:"click"+yn,CLICK_DATA_API:"click"+yn+bn,KEYDOWN_DATA_API:"keydown"+yn+bn,KEYUP_DATA_API:"keyup"+yn+bn},xn="disabled",kn="show",Nn="dropup",Ln="dropright",Mn="dropleft",Hn="dropdown-menu-right",jn="dropdown-menu-left",Pn="position-static",Rn='[data-toggle="dropdown"]',Bn=".dropdown form",Wn=".dropdown-menu",Fn=".navbar-nav",Un=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",zn="top-start",Yn="top-end",qn="bottom-start",Qn="bottom-end",Kn="right-start",Vn="right-end",Xn="left-start",Zn="left-end",Gn={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Jn={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},$n=
/* */
function(){function u(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}// Getters
var e=u.prototype;
// Public
return e.toggle=function e(){if(!this._element.disabled&&!mn(this._element).hasClass(xn)){var t=u._getParentFromElement(this._element),n=mn(this._menu).hasClass(kn);if(u._clearMenus(),!n){var i={relatedTarget:this._element},o=mn.Event(Dn.SHOW,i);if(mn(t).trigger(o),!o.isDefaultPrevented()){// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){
/**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
if(void 0===hn)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:pe.isElement(this._config.reference)&&(r=this._config.reference,// Check if it's jQuery element
void 0!==this._config.reference.jquery&&(r=this._config.reference[0])),// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&mn(t).addClass(Pn),this._popper=new hn(r,this._menu,this._getPopperConfig())}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===mn(t).closest(Fn).length&&mn(document.body).children().on("mouseover",null,mn.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mn(this._menu).toggleClass(kn),mn(t).toggleClass(kn).trigger(mn.Event(Dn.SHOWN,i))}}}},e.dispose=function e(){mn.removeData(this._element,_n),mn(this._element).off(yn),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function e(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},// Private
e._addEventListeners=function e(){var t=this;mn(this._element).on(Dn.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function e(t){return t=s({},this.constructor.Default,mn(this._element).data(),t),pe.typeCheckConfig(gn,t,this.constructor.DefaultType),t},e._getMenuElement=function e(){if(!this._menu){var t=u._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Wn))}return this._menu},e._getPlacement=function e(){var t=mn(this._element.parentNode),n=qn;// Handle dropup
return t.hasClass(Nn)?(n=zn,mn(this._menu).hasClass(Hn)&&(n=Yn)):t.hasClass(Ln)?n=Kn:t.hasClass(Mn)?n=Xn:mn(this._menu).hasClass(Hn)&&(n=Qn),n},e._detectNavbar=function e(){return 0<mn(this._element).closest(".navbar").length},e._getPopperConfig=function e(){var t=this,n={};"function"==typeof this._config.offset?n.fn=function(e){return e.offsets=s({},e.offsets,t._config.offset(e.offsets)||{}),e}:n.offset=this._config.offset;var i={placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(i.modifiers.applyStyle={enabled:!1}),i},// Static
u._jQueryInterface=function e(n){return this.each(function(){var e=mn(this).data(_n),t;if(e||(e=new u(this,"object"==typeof n?n:null),mn(this).data(_n,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},u._clearMenus=function e(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=[].slice.call(document.querySelectorAll(Rn)),i=0,o=n.length;i<o;i++){var r=u._getParentFromElement(n[i]),a=mn(n[i]).data(_n),s={relatedTarget:n[i]};if(t&&"click"===t.type&&(s.clickEvent=t),a){var l=a._menu;if(mn(r).hasClass(kn)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mn.contains(r,t.target))){var c=mn.Event(Dn.HIDE,s);mn(r).trigger(c),c.isDefaultPrevented()||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&mn(document.body).children().off("mouseover",null,mn.noop),n[i].setAttribute("aria-expanded","false"),mn(l).removeClass(kn),mn(r).removeClass(kn).trigger(mn.Event(Dn.HIDDEN,s)))}}}},u._getParentFromElement=function e(t){var n,i=pe.getSelectorFromElement(t);return i&&(n=document.querySelector(i)),n||t.parentNode},// eslint-disable-next-line complexity
u._dataApiKeydownHandler=function e(t){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mn(t.target).closest(Wn).length)):On.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mn(this).hasClass(xn))){var n=u._getParentFromElement(this),i=mn(n).hasClass(kn);if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var o=[].slice.call(n.querySelectorAll(Un));if(0!==o.length){var r=o.indexOf(t.target);38===t.which&&0<r&&
// Up
r--,40===t.which&&r<o.length-1&&
// Down
r++,r<0&&(r=0),o[r].focus()}}else{if(27===t.which){var a=n.querySelector(Rn);mn(a).trigger("focus")}mn(this).trigger("click")}}},r(u,null,[{key:"VERSION",get:function e(){return vn}},{key:"Default",get:function e(){return Gn}},{key:"DefaultType",get:function e(){return Jn}}]),u}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
mn(document).on(Dn.KEYDOWN_DATA_API,Rn,$n._dataApiKeydownHandler).on(Dn.KEYDOWN_DATA_API,Wn,$n._dataApiKeydownHandler).on(Dn.CLICK_DATA_API+" "+Dn.KEYUP_DATA_API,$n._clearMenus).on(Dn.CLICK_DATA_API,Rn,function(e){e.preventDefault(),e.stopPropagation(),$n._jQueryInterface.call(mn(this),"toggle")}).on(Dn.CLICK_DATA_API,Bn,function(e){e.stopPropagation()}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
mn.fn[gn]=$n._jQueryInterface,mn.fn[gn].Constructor=$n,mn.fn[gn].noConflict=function(){return mn.fn[gn]=wn,$n._jQueryInterface},$n),mn,gn,vn,_n,yn,bn,wn,En,Sn,Cn,Tn,An,In,On,Dn,xn,kn,Nn,Ln,Mn,Hn,jn,Pn,Rn,Bn,Wn,Fn,Un,zn,Yn,qn,Qn,Kn,Vn,Xn,Zn,Gn,Jn,$n,ei=(ni="modal",ii="4.1.3",ri="."+(oi="bs.modal"),ai=".data-api",si=(ti=t).fn[ni],li=27,ci={backdrop:!0,keyboard:!0,focus:!0,show:!0},ui={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},fi={HIDE:"hide"+ri,HIDDEN:"hidden"+ri,SHOW:"show"+ri,SHOWN:"shown"+ri,FOCUSIN:"focusin"+ri,RESIZE:"resize"+ri,CLICK_DISMISS:"click.dismiss"+ri,KEYDOWN_DISMISS:"keydown.dismiss"+ri,MOUSEUP_DISMISS:"mouseup.dismiss"+ri,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ri,CLICK_DATA_API:"click"+ri+ai},di="modal-scrollbar-measure",hi="modal-backdrop",pi="modal-open",mi="fade",gi="show",vi=".modal-dialog",_i='[data-toggle="modal"]',yi='[data-dismiss="modal"]',bi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",wi=".sticky-top"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Ei=
/* */
function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(vi),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}// Getters
var e=o.prototype;
// Public
return e.toggle=function e(t){return this._isShown?this.hide():this.show(t)},e.show=function e(t){var n=this;if(!this._isTransitioning&&!this._isShown){ti(this._element).hasClass(mi)&&(this._isTransitioning=!0);var i=ti.Event(fi.SHOW,{relatedTarget:t});ti(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),ti(document.body).addClass(pi),this._setEscapeEvent(),this._setResizeEvent(),ti(this._element).on(fi.CLICK_DISMISS,yi,function(e){return n.hide(e)}),ti(this._dialog).on(fi.MOUSEDOWN_DISMISS,function(){ti(n._element).one(fi.MOUSEUP_DISMISS,function(e){ti(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},e.hide=function e(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=ti.Event(fi.HIDE);if(ti(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=ti(this._element).hasClass(mi);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),ti(document).off(fi.FOCUSIN),ti(this._element).removeClass(gi),ti(this._element).off(fi.CLICK_DISMISS),ti(this._dialog).off(fi.MOUSEDOWN_DISMISS),o){var r=pe.getTransitionDurationFromElement(this._element);ti(this._element).one(pe.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function e(){ti.removeData(this._element,oi),ti(window,document,this._element,this._backdrop).off(ri),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function e(){this._adjustDialog()},// Private
e._getConfig=function e(t){return t=s({},ci,t),pe.typeCheckConfig(ni,t,ui),t},e._showElement=function e(t){var n=this,i=ti(this._element).hasClass(mi);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&pe.reflow(this._element),ti(this._element).addClass(gi),this._config.focus&&this._enforceFocus();var o=ti.Event(fi.SHOWN,{relatedTarget:t}),r=function e(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,ti(n._element).trigger(o)};if(i){var a=pe.getTransitionDurationFromElement(this._element);ti(this._dialog).one(pe.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},e._enforceFocus=function e(){var t=this;ti(document).off(fi.FOCUSIN).on(fi.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===ti(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function e(){var t=this;this._isShown&&this._config.keyboard?ti(this._element).on(fi.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||ti(this._element).off(fi.KEYDOWN_DISMISS)},e._setResizeEvent=function e(){var t=this;this._isShown?ti(window).on(fi.RESIZE,function(e){return t.handleUpdate(e)}):ti(window).off(fi.RESIZE)},e._hideModal=function e(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){ti(document.body).removeClass(pi),t._resetAdjustments(),t._resetScrollbar(),ti(t._element).trigger(fi.HIDDEN)})},e._removeBackdrop=function e(){this._backdrop&&(ti(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function e(t){var n=this,i=ti(this._element).hasClass(mi)?mi:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=hi,i&&this._backdrop.classList.add(i),ti(this._backdrop).appendTo(document.body),ti(this._element).on(fi.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&pe.reflow(this._backdrop),ti(this._backdrop).addClass(gi),!t)return;if(!i)return void t();var o=pe.getTransitionDurationFromElement(this._backdrop);ti(this._backdrop).one(pe.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){ti(this._backdrop).removeClass(gi);var r=function e(){n._removeBackdrop(),t&&t()};if(ti(this._element).hasClass(mi)){var a=pe.getTransitionDurationFromElement(this._backdrop);ti(this._backdrop).one(pe.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
e._adjustDialog=function e(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function e(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function e(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function e(){var o=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var t=[].slice.call(document.querySelectorAll(bi)),n=[].slice.call(document.querySelectorAll(wi));// Adjust fixed content padding
ti(t).each(function(e,t){var n=t.style.paddingRight,i=ti(t).css("padding-right");ti(t).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),// Adjust sticky content margin
ti(n).each(function(e,t){var n=t.style.marginRight,i=ti(t).css("margin-right");ti(t).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});// Adjust body padding
var i=document.body.style.paddingRight,r=ti(document.body).css("padding-right");ti(document.body).data("padding-right",i).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}},e._resetScrollbar=function e(){
// Restore fixed content padding
var t=[].slice.call(document.querySelectorAll(bi));ti(t).each(function(e,t){var n=ti(t).data("padding-right");ti(t).removeData("padding-right"),t.style.paddingRight=n||""});// Restore sticky content
var n=[].slice.call(document.querySelectorAll(""+wi));ti(n).each(function(e,t){var n=ti(t).data("margin-right");void 0!==n&&ti(t).css("margin-right",n).removeData("margin-right")});// Restore body padding
var i=ti(document.body).data("padding-right");ti(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},e._getScrollbarWidth=function e(){
// thx d.walsh
var t=document.createElement("div");t.className=di,document.body.appendChild(t);var n=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),n},// Static
o._jQueryInterface=function e(n,i){return this.each(function(){var e=ti(this).data(oi),t=s({},ci,ti(this).data(),"object"==typeof n&&n?n:{});if(e||(e=new o(this,t),ti(this).data(oi,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},r(o,null,[{key:"VERSION",get:function e(){return ii}},{key:"Default",get:function e(){return ci}}]),o}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
ti(document).on(fi.CLICK_DATA_API,_i,function(e){var t=this,n,i=pe.getSelectorFromElement(this);i&&(n=document.querySelector(i));var o=ti(n).data(oi)?"toggle":s({},ti(n).data(),ti(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=ti(n).one(fi.SHOW,function(e){e.isDefaultPrevented()||r.one(fi.HIDDEN,function(){ti(t).is(":visible")&&t.focus()})});Ei._jQueryInterface.call(ti(n),o,this)}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
ti.fn[ni]=Ei._jQueryInterface,ti.fn[ni].Constructor=Ei,ti.fn[ni].noConflict=function(){return ti.fn[ni]=si,Ei._jQueryInterface},Ei),ti,ni,ii,oi,ri,ai,si,li,ci,ui,fi,di,hi,pi,mi,gi,vi,_i,yi,bi,wi,Ei,Si=(Ti="tooltip",Ai="4.1.3",Oi="."+(Ii="bs.tooltip"),Di=(Ci=t).fn[Ti],xi="bs-tooltip",ki=new RegExp("(^|\\s)"+xi+"\\S+","g"),Mi={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Li={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Ni={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},ji="out",Pi={HIDE:"hide"+Oi,HIDDEN:"hidden"+Oi,SHOW:(Hi="show")+Oi,SHOWN:"shown"+Oi,INSERTED:"inserted"+Oi,CLICK:"click"+Oi,FOCUSIN:"focusin"+Oi,FOCUSOUT:"focusout"+Oi,MOUSEENTER:"mouseenter"+Oi,MOUSELEAVE:"mouseleave"+Oi},Ri="fade",Bi="show",Wi=".tooltip",Fi=".tooltip-inner",Ui=".arrow",zi="hover",Yi="focus",qi="click",Qi="manual"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Ki=
/* */
function(){function i(e,t){
/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===hn)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}// Getters
var e=i.prototype;
// Public
return e.enable=function e(){this._isEnabled=!0},e.disable=function e(){this._isEnabled=!1},e.toggleEnabled=function e(){this._isEnabled=!this._isEnabled},e.toggle=function e(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=Ci(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),Ci(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(Ci(this.getTipElement()).hasClass(Bi))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function e(){clearTimeout(this._timeout),Ci.removeData(this.element,this.constructor.DATA_KEY),Ci(this.element).off(this.constructor.EVENT_KEY),Ci(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&Ci(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function e(){var n=this;if("none"===Ci(this.element).css("display"))throw new Error("Please use show on visible elements");var t=Ci.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){Ci(this.element).trigger(t);var i=Ci.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=pe.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&Ci(o).addClass(Ri);var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,s=this._getAttachment(a);this.addAttachmentClass(s);var l=!1===this.config.container?document.body:Ci(document).find(this.config.container);Ci(o).data(this.constructor.DATA_KEY,this),Ci.contains(this.element.ownerDocument.documentElement,this.tip)||Ci(o).appendTo(l),Ci(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new hn(this.element,o,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ui},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function e(t){t.originalPlacement!==t.placement&&n._handlePopperPlacementChange(t)},onUpdate:function e(t){n._handlePopperPlacementChange(t)}}),Ci(o).addClass(Bi),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&Ci(document.body).children().on("mouseover",null,Ci.noop);var c=function e(){n.config.animation&&n._fixTransition();var t=n._hoverState;n._hoverState=null,Ci(n.element).trigger(n.constructor.Event.SHOWN),t===ji&&n._leave(null,n)};if(Ci(this.tip).hasClass(Ri)){var u=pe.getTransitionDurationFromElement(this.tip);Ci(this.tip).one(pe.TRANSITION_END,c).emulateTransitionEnd(u)}else c()}},e.hide=function e(t){var n=this,i=this.getTipElement(),o=Ci.Event(this.constructor.Event.HIDE),r=function e(){n._hoverState!==Hi&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),Ci(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(Ci(this.element).trigger(o),!o.isDefaultPrevented()){if(Ci(i).removeClass(Bi),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&Ci(document.body).children().off("mouseover",null,Ci.noop),this._activeTrigger[qi]=!1,this._activeTrigger[Yi]=!1,this._activeTrigger[zi]=!1,Ci(this.tip).hasClass(Ri)){var a=pe.getTransitionDurationFromElement(i);Ci(i).one(pe.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},e.update=function e(){null!==this._popper&&this._popper.scheduleUpdate()},// Protected
e.isWithContent=function e(){return Boolean(this.getTitle())},e.addAttachmentClass=function e(t){Ci(this.getTipElement()).addClass(xi+"-"+t)},e.getTipElement=function e(){return this.tip=this.tip||Ci(this.config.template)[0],this.tip},e.setContent=function e(){var t=this.getTipElement();this.setElementContent(Ci(t.querySelectorAll(Fi)),this.getTitle()),Ci(t).removeClass(Ri+" "+Bi)},e.setElementContent=function e(t,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?
// Content is a DOM node or a jQuery
i?Ci(n).parent().is(t)||t.empty().append(n):t.text(Ci(n).text()):t[i?"html":"text"](n)},e.getTitle=function e(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},// Private
e._getAttachment=function e(t){return Li[t.toUpperCase()]},e._setListeners=function e(){var i=this,t;this.config.trigger.split(" ").forEach(function(e){if("click"===e)Ci(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if(e!==Qi){var t=e===zi?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===zi?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;Ci(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}Ci(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function e(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function e(t,n){var i=this.constructor.DATA_KEY;(n=n||Ci(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),Ci(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?Yi:zi]=!0),Ci(n.getTipElement()).hasClass(Bi)||n._hoverState===Hi?n._hoverState=Hi:(clearTimeout(n._timeout),n._hoverState=Hi,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===Hi&&n.show()},n.config.delay.show):n.show())},e._leave=function e(t,n){var i=this.constructor.DATA_KEY;(n=n||Ci(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),Ci(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?Yi:zi]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=ji,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===ji&&n.hide()},n.config.delay.hide):n.hide())},e._isWithActiveTrigger=function e(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function e(t){return"number"==typeof(t=s({},this.constructor.Default,Ci(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),pe.typeCheckConfig(Ti,t,this.constructor.DefaultType),t},e._getDelegateConfig=function e(){var t={};if(this.config)for(var n in this.config)this.constructor.Default[n]!==this.config[n]&&(t[n]=this.config[n]);return t},e._cleanTipClass=function e(){var t=Ci(this.getTipElement()),n=t.attr("class").match(ki);null!==n&&n.length&&t.removeClass(n.join(""))},e._handlePopperPlacementChange=function e(t){var n=t.instance;this.tip=n.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function e(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(Ci(t).removeClass(Ri),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},// Static
i._jQueryInterface=function e(n){return this.each(function(){var e=Ci(this).data(Ii),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),Ci(this).data(Ii,e)),"string"==typeof n)){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},r(i,null,[{key:"VERSION",get:function e(){return Ai}},{key:"Default",get:function e(){return Mi}},{key:"NAME",get:function e(){return Ti}},{key:"DATA_KEY",get:function e(){return Ii}},{key:"Event",get:function e(){return Pi}},{key:"EVENT_KEY",get:function e(){return Oi}},{key:"DefaultType",get:function e(){return Ni}}]),i}(),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Ci.fn[Ti]=Ki._jQueryInterface,Ci.fn[Ti].Constructor=Ki,Ci.fn[Ti].noConflict=function(){return Ci.fn[Ti]=Di,Ki._jQueryInterface},Ki),Ci,Ti,Ai,Ii,Oi,Di,xi,ki,Ni,Li,Mi,Hi,ji,Pi,Ri,Bi,Wi,Fi,Ui,zi,Yi,qi,Qi,Ki,Vi=(Zi="popover",Gi="4.1.3",$i="."+(Ji="bs.popover"),eo=(Xi=t).fn[Zi],to="bs-popover",no=new RegExp("(^|\\s)"+to+"\\S+","g"),io=s({},Si.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),oo=s({},Si.DefaultType,{content:"(string|element|function)"}),ro="fade",so=".popover-header",lo=".popover-body",co={HIDE:"hide"+$i,HIDDEN:"hidden"+$i,SHOW:(ao="show")+$i,SHOWN:"shown"+$i,INSERTED:"inserted"+$i,CLICK:"click"+$i,FOCUSIN:"focusin"+$i,FOCUSOUT:"focusout"+$i,MOUSEENTER:"mouseenter"+$i,MOUSELEAVE:"mouseleave"+$i
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},uo=
/* */
function(e){function i(){return e.apply(this,arguments)||this}n(i,e);var t=i.prototype;
// Overrides
return t.isWithContent=function e(){return this.getTitle()||this._getContent()},t.addAttachmentClass=function e(t){Xi(this.getTipElement()).addClass(to+"-"+t)},t.getTipElement=function e(){return this.tip=this.tip||Xi(this.config.template)[0],this.tip},t.setContent=function e(){var t=Xi(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent(t.find(so),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(lo),n),t.removeClass(ro+" "+ao)},// Private
t._getContent=function e(){return this.element.getAttribute("data-content")||this.config.content},t._cleanTipClass=function e(){var t=Xi(this.getTipElement()),n=t.attr("class").match(no);null!==n&&0<n.length&&t.removeClass(n.join(""))},// Static
i._jQueryInterface=function e(n){return this.each(function(){var e=Xi(this).data(Ji),t="object"==typeof n?n:null;if((e||!/destroy|hide/.test(n))&&(e||(e=new i(this,t),Xi(this).data(Ji,e)),"string"==typeof n)){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},r(i,null,[{key:"VERSION",
// Getters
get:function e(){return Gi}},{key:"Default",get:function e(){return io}},{key:"NAME",get:function e(){return Zi}},{key:"DATA_KEY",get:function e(){return Ji}},{key:"Event",get:function e(){return co}},{key:"EVENT_KEY",get:function e(){return $i}},{key:"DefaultType",get:function e(){return oo}}]),i}(Si),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Xi.fn[Zi]=uo._jQueryInterface,Xi.fn[Zi].Constructor=uo,Xi.fn[Zi].noConflict=function(){return Xi.fn[Zi]=eo,uo._jQueryInterface},uo),Xi,Zi,Gi,Ji,$i,eo,to,no,io,oo,ro,ao,so,lo,co,uo,fo=(po="scrollspy",mo="4.1.3",vo="."+(go="bs.scrollspy"),_o=".data-api",yo=(ho=t).fn[po],bo={offset:10,method:"auto",target:""},wo={offset:"number",method:"string",target:"(string|element)"},Eo={ACTIVATE:"activate"+vo,SCROLL:"scroll"+vo,LOAD_DATA_API:"load"+vo+_o},So="dropdown-item",Co="dropdown-menu",To="active",Ao='[data-spy="scroll"]',Io=".active",Oo=".nav, .list-group",Do=".nav-link",xo=".nav-item",ko=".list-group-item",No=".dropdown",Lo=".dropdown-item",Mo=".dropdown-toggle",Ho="offset",jo="position"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Po=
/* */
function(){function i(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+Do+","+this._config.target+" "+ko+","+this._config.target+" "+Lo,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,ho(this._scrollElement).on(Eo.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}// Getters
var e=i.prototype;
// Public
return e.refresh=function e(){var t=this,n=this._scrollElement===this._scrollElement.window?Ho:jo,o="auto"===this._config.method?n:this._config.method,r=o===jo?this._getScrollTop():0,i;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=pe.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)
// TODO (fat): remove sketch reliance on jQuery position/offset
return[ho(t)[o]().top+r,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function e(){ho.removeData(this._element,go),ho(this._scrollElement).off(vo),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},// Private
e._getConfig=function e(t){if("string"!=typeof(t=s({},bo,"object"==typeof t&&t?t:{})).target){var n=ho(t.target).attr("id");n||(n=pe.getUID(po),ho(t.target).attr("id",n)),t.target="#"+n}return pe.typeCheckConfig(po,t,wo),t},e._getScrollTop=function e(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function e(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function e(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function e(){var t=this._getScrollTop()+this._config.offset,n=this._getScrollHeight(),i=this._config.offset+n-this._getOffsetHeight();if(this._scrollHeight!==n&&this.refresh(),i<=t){var o=this._targets[this._targets.length-1];this._activeTarget!==o&&this._activate(o)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r,a=this._offsets.length;a--;){var s;this._activeTarget!==this._targets[a]&&t>=this._offsets[a]&&(void 0===this._offsets[a+1]||t<this._offsets[a+1])&&this._activate(this._targets[a])}}},e._activate=function e(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");// eslint-disable-next-line arrow-body-style
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var i=ho([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(So)?(i.closest(No).find(Mo).addClass(To),i.addClass(To)):(
// Set triggered link as active
i.addClass(To),// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
i.parents(Oo).prev(Do+", "+ko).addClass(To),// Handle special case when .nav-link is inside .nav-item
i.parents(Oo).prev(xo).children(Do).addClass(To)),ho(this._scrollElement).trigger(Eo.ACTIVATE,{relatedTarget:t})},e._clear=function e(){var t=[].slice.call(document.querySelectorAll(this._selector));ho(t).filter(Io).removeClass(To)},// Static
i._jQueryInterface=function e(n){return this.each(function(){var e=ho(this).data(go),t;if(e||(e=new i(this,"object"==typeof n&&n),ho(this).data(go,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},r(i,null,[{key:"VERSION",get:function e(){return mo}},{key:"Default",get:function e(){return bo}}]),i}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
ho(window).on(Eo.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(Ao)),t,n=e.length;n--;){var i=ho(e[n]);Po._jQueryInterface.call(i,i.data())}}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
ho.fn[po]=Po._jQueryInterface,ho.fn[po].Constructor=Po,ho.fn[po].noConflict=function(){return ho.fn[po]=yo,Po._jQueryInterface},Po),ho,po,mo,go,vo,_o,yo,bo,wo,Eo,So,Co,To,Ao,Io,Oo,Do,xo,ko,No,Lo,Mo,Ho,jo,Po,Ro=(Wo="tab",Fo="4.1.3",zo="."+(Uo="bs.tab"),Yo=".data-api",qo=(Bo=t).fn.tab,Qo={HIDE:"hide"+zo,HIDDEN:"hidden"+zo,SHOW:"show"+zo,SHOWN:"shown"+zo,CLICK_DATA_API:"click"+zo+Yo},Ko="dropdown-menu",Vo="active",Xo="disabled",Zo="fade",Go="show",Jo=".dropdown",$o=".nav, .list-group",er=".active",tr="> li > .active",nr='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',ir=".dropdown-toggle",or="> .dropdown-menu .active"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,rr=
/* */
function(){function i(e){this._element=e}// Getters
var e=i.prototype;
// Public
return e.show=function e(){var i=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&Bo(this._element).hasClass(Vo)||Bo(this._element).hasClass(Xo))){var t,o,n=Bo(this._element).closest($o)[0],r=pe.getSelectorFromElement(this._element);if(n){var a="UL"===n.nodeName?tr:er;o=(o=Bo.makeArray(Bo(n).find(a)))[o.length-1]}var s=Bo.Event(Qo.HIDE,{relatedTarget:this._element}),l=Bo.Event(Qo.SHOW,{relatedTarget:o});if(o&&Bo(o).trigger(s),Bo(this._element).trigger(l),!l.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,n);var c=function e(){var t=Bo.Event(Qo.HIDDEN,{relatedTarget:i._element}),n=Bo.Event(Qo.SHOWN,{relatedTarget:o});Bo(o).trigger(t),Bo(i._element).trigger(n)};t?this._activate(t,t.parentNode,c):c()}}},e.dispose=function e(){Bo.removeData(this._element,Uo),this._element=null},// Private
e._activate=function e(t,n,i){var o=this,r,a=(r="UL"===n.nodeName?Bo(n).find(tr):Bo(n).children(er))[0],s=i&&a&&Bo(a).hasClass(Zo),l=function e(){return o._transitionComplete(t,a,i)};if(a&&s){var c=pe.getTransitionDurationFromElement(a);Bo(a).one(pe.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},e._transitionComplete=function e(t,n,i){if(n){Bo(n).removeClass(Go+" "+Vo);var o=Bo(n.parentNode).find(or)[0];o&&Bo(o).removeClass(Vo),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(Bo(t).addClass(Vo),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),pe.reflow(t),Bo(t).addClass(Go),t.parentNode&&Bo(t.parentNode).hasClass(Ko)){var r=Bo(t).closest(Jo)[0];if(r){var a=[].slice.call(r.querySelectorAll(ir));Bo(a).addClass(Vo)}t.setAttribute("aria-expanded",!0)}i&&i()},// Static
i._jQueryInterface=function e(n){return this.each(function(){var e=Bo(this),t=e.data(Uo);if(t||(t=new i(this),e.data(Uo,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},r(i,null,[{key:"VERSION",get:function e(){return Fo}}]),i}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
Bo(document).on(Qo.CLICK_DATA_API,nr,function(e){e.preventDefault(),rr._jQueryInterface.call(Bo(this),"show")}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Bo.fn.tab=rr._jQueryInterface,Bo.fn.tab.Constructor=rr,Bo.fn.tab.noConflict=function(){return Bo.fn.tab=qo,rr._jQueryInterface},rr),Bo,Wo,Fo,Uo,zo,Yo,qo,Qo,Ko,Vo,Xo,Zo,Go,Jo,$o,er,tr,nr,ir,or,rr;
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
!function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split("."),n=1,i=2,o=9,r=1,a=4;if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(t),e.Util=pe,e.Alert=me,e.Button=De,e.Carousel=Ke,e.Collapse=It,e.Dropdown=pn,e.Modal=ei,e.Popover=Vi,e.Scrollspy=fo,e.Tab=Ro,e.Tooltip=Si,Object.defineProperty(e,"__esModule",{value:!0})}),function(e,t,n,i,o){"function"==typeof define&&define.amd?define(function(){return e.fullpage=i(t,n),e.fullpage}):"object"==typeof exports?module.exports=i(t,n):t.fullpage=i(t,n)}(this,window,document,function(zt,Yt){"use strict";function qt(e,t){zt.console&&zt.console[e]&&zt.console[e]("fullPage: "+t)}function Qt(e,t){return(t=1<arguments.length?t:Yt)?t.querySelectorAll(e):null}function Kt(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var i=arguments[t];if(i)for(var o in i)i.hasOwnProperty(o)&&("[object Object]"!==Object.prototype.toString.call(i[o])?e[o]=i[o]:e[o]=Kt(e[o],i[o]))}return e}function Vt(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Xt(){return"innerHeight"in zt?zt.innerHeight:Yt.documentElement.offsetHeight}function Zt(e,t){var n;for(n in e=a(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var i=0;i<e.length;i++)e[i].style[n]=t[n];return e}function n(e,t,n){for(var i=e[n];i&&!bn(i,t);)i=i[n];return i}function Gt(e,t){return n(e,t,"previousElementSibling")}function Jt(e,t){return n(e,t,"nextElementSibling")}function $t(e,t){if(null==t)return e.previousElementSibling;var n=$t(e);return n&&bn(n,t)?n:null}function en(e,t){if(null==t)return e.nextElementSibling;var n=en(e);return n&&bn(n,t)?n:null}function tn(e){return e[e.length-1]}function nn(e,t){e=r(e)?e[0]:e;for(var n=null!=t?Qt(t,e.parentNode):e.parentNode.childNodes,i=0,o=0;o<n.length;o++){if(n[o]==e)return i;1==n[o].nodeType&&i++}return-1}function a(e){return r(e)?e:[e]}function on(e){e=a(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function rn(e){e=a(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function r(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function an(e,t){e=a(e);for(var n=0;n<e.length;n++){var i=e[n];i.classList?i.classList.add(t):i.className+=" "+t}return e}function sn(e,t){e=a(e);for(var n=t.split(" "),i=0;i<n.length;i++){t=n[i];for(var o=0;o<e.length;o++){var r=e[o];r.classList?r.classList.remove(t):r.className=r.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function ln(e,t){t.appendChild(e)}function i(e,t,n){var i;t=t||Yt.createElement("div");for(var o=0;o<e.length;o++){var r=e[o];(n&&!o||!n)&&(i=t.cloneNode(!0),r.parentNode.insertBefore(i,r)),i.appendChild(r)}return e}function cn(e,t){i(e,t,!0)}function un(e,t){for("string"==typeof t&&(t=En(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function fn(e){for(var t=Yt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function dn(e,t){return e&&1===e.nodeType?bn(e,t)?e:dn(e.parentNode,t):null}function hn(e,t){o(e,e.nextSibling,t)}function pn(e,t){o(e,e,t)}function o(e,t,n){r(n)||("string"==typeof n&&(n=En(n)),n=[n]);for(var i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],t)}function mn(){var e=Yt.documentElement;return(zt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function gn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function vn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function _n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function yn(e,t,n){var i;n=void 0===n?{}:n,"function"==typeof zt.CustomEvent?i=new CustomEvent(t,{detail:n}):(i=Yt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)}function bn(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function wn(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function En(e){var t=Yt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Sn(e){e=a(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function s(e,t,n){for(var i=e[n],o=[];i;)(bn(i,t)||null==t)&&o.push(i),i=i[n];return o}function Cn(e,t){return s(e,t,"nextElementSibling")}function Tn(e,t){return s(e,t,"previousElementSibling")}function An(e,t){e.insertBefore(t,e.firstChild)}var In="fullpage-wrapper",On="."+In,Dn="fp-responsive",xn="fp-notransition",kn="fp-destroyed",Nn="fp-enabled",Ln="fp-viewing",Mn="active",Hn="."+Mn,jn="fp-completely",Pn="fp-section",Rn="."+Pn,Bn=Rn+Hn,Wn="fp-tableCell",Fn="."+Wn,Un="fp-auto-height",zn="fp-normal-scroll",Yn="fp-nav",qn="#"+Yn,Qn="fp-tooltip",Kn="fp-slide",Vn="."+Kn,Xn=Vn+Hn,Zn="fp-slides",Gn="."+Zn,Jn="fp-slidesContainer",$n="."+Jn,ei="fp-table",ti="fp-slidesNav",ni="."+ti,ii=ni+" a",e,oi="."+"fp-controlArrow",ri="fp-prev",ai=oi+".fp-prev",si=oi+".fp-next";return zt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||zt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),zt.fp_utils={$:Qt,deepExtend:Kt,hasClass:Vt,getWindowHeight:Xt,css:Zt,until:n,prevUntil:Gt,nextUntil:Jt,prev:$t,next:en,last:tn,index:nn,getList:a,hide:on,show:rn,isArrayOrList:r,addClass:an,removeClass:sn,appendTo:ln,wrap:i,wrapAll:cn,wrapInner:un,unwrap:fn,closest:dn,after:hn,before:pn,insertBefore:o,getScrollTop:mn,siblings:gn,preventDefault:vn,isFunction:_n,trigger:yn,matches:bn,toggle:wn,createElementFromHTML:En,remove:Sn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:s,nextAll:Cn,prevAll:Tn,showError:qt,prependTo:An,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var i=Vt(e,t);i&&null==n||!n?sn(e,t):(!i&&null==n||n)&&an(e,t)}}},function(e,g){function n(e,t){e||je(0),Ye("autoScrolling",e,t);var n=Qt(Bn)[0];if(g.autoScrolling&&!g.scrollBar)Zt(Je,{overflow:"hidden",height:"100%"}),o(Ot.recordHistory,"internal"),Zt(lt,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&je(n.offsetTop);else if(Zt(Je,{overflow:"visible",height:"initial"}),o(!1,"internal"),Zt(lt,{"-ms-touch-action":"","touch-action":""}),Be(lt),null!=n){var i=U(n.offsetTop);i.element.scrollTo(0,i.options)}yn(lt,"setAutoScrolling",e)}function o(e,t){Ye("recordHistory",e,t)}function i(e,t){"internal"!==t&&g.fadingEffect&&et.fadingEffect&&et.fadingEffect.update(e),Ye("scrollingSpeed",e,t)}function r(e,t){Ye("fitToSection",e,t)}function t(e){e?(function(){var e,t="";zt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Yt.createElement("div")?"wheel":void 0!==Yt.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==n?Yt[e](t+"MozMousePixelScroll",M,!1):Yt[e](t+n,M,!1)}(),lt.addEventListener("mousedown",se),lt.addEventListener("mouseup",le)):(Yt.addEventListener?(Yt.removeEventListener("mousewheel",M,!1),Yt.removeEventListener("wheel",M,!1),Yt.removeEventListener("MozMousePixelScroll",M,!1)):Yt.detachEvent("onmousewheel",M),lt.removeEventListener("mousedown",se),lt.removeEventListener("mouseup",le))}function a(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Re(t,e,"m")}):Re(t,"all","m"),yn(lt,"setAllowScrolling",{value:t,directions:e})}function s(e){e?(t(!0),function(){if(at||st){g.autoScrolling&&($e.removeEventListener(Tt.touchmove,D,{passive:!1}),$e.addEventListener(Tt.touchmove,D,{passive:!1}));var e=Qt(On)[0];e&&(e.removeEventListener(Tt.touchstart,N),e.removeEventListener(Tt.touchmove,x,{passive:!1}),e.addEventListener(Tt.touchstart,N),e.addEventListener(Tt.touchmove,x,{passive:!1}))}}()):(t(!1),function(){if(at||st){g.autoScrolling&&($e.removeEventListener(Tt.touchmove,x,{passive:!1}),$e.removeEventListener(Tt.touchmove,D,{passive:!1}));var e=Qt(On)[0];e&&(e.removeEventListener(Tt.touchstart,N),e.removeEventListener(Tt.touchmove,x,{passive:!1}))}}())}function l(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Re(t,e,"k")}):(Re(t,"all","k"),g.keyboardScrolling=t)}function c(){var e=Gt(Qt(Bn)[0],Rn);e||!g.loopTop&&!g.continuousVertical||(e=tn(Qt(Rn))),null!=e&&R(e,null,!0)}function u(){var e=Jt(Qt(Bn)[0],Rn);e||!g.loopBottom&&!g.continuousVertical||(e=Qt(Rn)[0]),null!=e&&R(e,null,!1)}function f(e,t){i(0,"internal"),d(e,t),i(Ot.scrollingSpeed,"internal")}function d(e,t){var n=Ae(e);void 0!==t?Ie(e,t):null!=n&&R(n)}function h(e){H("right",e)}function p(e){H("left",e)}function m(e){if(!Vt(lt,kn)){ut=!0,ct=Xt();for(var t=Qt(Rn),n=0;n<t.length;++n){var i=t[n],o=Qt(Gn,i)[0],r=Qt(Vn,i);g.verticalCentered&&Zt(Qt(Fn,i),{height:Ce(i)+"px"}),Zt(i,{height:S(i)+"px"}),1<r.length&&de(o,Qt(Xn,o)[0])}g.scrollOverflow&&mt.createScrollBarForAll();var a=nn(Qt(Bn)[0],Rn);a&&!We("fadingEffect")&&f(a+1),ut=!1,_n(g.afterResize)&&e&&g.afterResize.call(lt,zt.innerWidth,zt.innerHeight),_n(g.afterReBuild)&&!e&&g.afterReBuild.call(lt),yn(lt,"afterRebuild")}}function v(e){var t=Vt($e,Dn);e?t||(n(!1,"internal"),r(!1,"internal"),on(Qt(qn)),an($e,Dn),_n(g.afterResponsive)&&g.afterResponsive.call(lt,e),g.responsiveSlides&&et.responsiveSlides&&et.responsiveSlides.toSections(),yn(lt,"afterResponsive",e),g.scrollOverflow&&mt.createScrollBarForAll()):t&&(n(Ot.autoScrolling,"internal"),r(Ot.autoScrolling,"internal"),rn(Qt(qn)),sn($e,Dn),_n(g.afterResponsive)&&g.afterResponsive.call(lt,e),g.responsiveSlides&&et.responsiveSlides&&et.responsiveSlides.toSlides(),yn(lt,"afterResponsive",e))}function _(e){var t=e.target;t&&dn(t,qn+" a")?function(e){vn(e);var t=nn(dn(this,qn+" li"));R(Qt(Rn)[t])}.call(t,e):bn(t,".fp-tooltip")?function(){yn($t(this),"click")}.call(t):bn(t,oi)?function(){var e=dn(this,Rn);Vt(this,ri)?pt.m.left&&p(e):pt.m.right&&h(e)}.call(t,e):bn(t,ii)||null!=dn(t,ii)?function(e){vn(e);var t=Qt(Gn,dn(this,Rn))[0],n;de(t,Qt(Vn,t)[nn(dn(this,"li"))])}.call(t,e):dn(t,g.menu+" [data-menuanchor]")&&function(e){!Qt(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(vn(e),d(this.getAttribute("data-menuanchor")))}.call(t,e)}function y(e,t){Yt["fp_"+e]=t,Yt.addEventListener(e,b,!0)}function b(t){t.target!=Yt&&g.normalScrollElements.split(",").forEach(function(e){null!=dn(t.target,e)&&s(Yt["fp_"+t.type])})}function w(e){var t="fp_"+e+"Extension";xt[e]=g[e+"Key"],et[e]=void 0!==zt[t]?new zt[t]:null,et[e]&&et[e].c(e)}function E(e,t,n){var i=100*n,o=100/n,r=Yt.createElement("div");r.className=Zn,cn(t,r);var a,s,l=Yt.createElement("div");l.className=Jn,cn(t,l),Zt(Qt($n,e),{width:i+"%"}),1<n&&(g.controlArrows&&(a=e,s=[En('<div class="fp-controlArrow fp-prev"></div>'),En('<div class="fp-controlArrow fp-next"></div>')],hn(Qt(Gn,a)[0],s),"#fff"!==g.controlArrowColor&&(Zt(Qt(si,a),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Zt(Qt(ai,a),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||on(Qt(ai,a))),g.slidesNavigation&&function(e,t){ln(En('<div class="'+ti+'"><ul></ul></div>'),e);var n=Qt(ni,e)[0];an(n,"fp-"+g.slidesNavPosition);for(var i=0;i<t;i++)ln(En('<li><a href="#"><span class="fp-sr-only">'+C(i,"Slide")+"</span><span></span></a></li>"),Qt("ul",n)[0]);Zt(n,{"margin-left":"-"+n.innerWidth/2+"px"}),an(Qt("a",Qt("li",n)[0]),Mn)}(e,n)),t.forEach(function(e){Zt(e,{width:o+"%"}),g.verticalCentered&&Se(e)});var c=Qt(Xn,e)[0];null!=c&&(0!==nn(Qt(Bn),Rn)||0===nn(Qt(Bn),Rn)&&0!==nn(c))?(He(c,"internal"),an(c,"fp-initial")):an(t[0],Mn)}function S(e){return g.offsetSections&&et.offsetSections?Math.round(et.offsetSections.getWindowHeight(e)):Xt()}function C(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function T(){var e,t=Qt(Bn)[0];an(t,jn),q(t),Q(t),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),(!(e=Ae(oe().section))||void 0!==e&&nn(e)===nn(ot))&&_n(g.afterLoad)&&B("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:nn(t,Rn)}),_n(g.afterRender)&&B("afterRender"),yn(lt,"afterRender")}function A(){var e;if(yn(lt,"onScroll"),(!g.autoScrolling||g.scrollBar||We("dragAndMove"))&&!ze()){var t=We("dragAndMove")?Math.abs(et.dragAndMove.getCurrentScroll()):mn(),n=0,i=t+Xt()/2,o=(We("dragAndMove")?et.dragAndMove.getDocumentHeight():$e.offsetHeight-Xt())===t,r=Qt(Rn);if(o)n=r.length-1;else if(t)for(var a=0;a<r.length;++a)r[a].offsetTop<=i&&(n=a);else n=0;if(!Vt(e=r[n],Mn)){Mt=!0;var s,l,c=Qt(Bn)[0],u=nn(c,Rn)+1,f=we(e),d=e.getAttribute("data-anchor"),h=nn(e,Rn)+1,p=Qt(Xn,e)[0],m={activeSection:c,sectionIndex:h-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(l=p.getAttribute("data-anchor"),s=nn(p)),dt&&(an(e,Mn),sn(gn(e),Mn),Fe("parallax","afterLoad"),_n(g.onLeave)&&B("onLeave",m),_n(g.afterLoad)&&B("afterLoad",m),g.resetSliders&&et.resetSliders&&et.resetSliders.apply({localIsResizing:ut,leavingSection:u}),V(c),q(e),Q(e),be(d,h-1),g.anchors.length&&(tt=d),De(s,l,d)),clearTimeout(yt),yt=setTimeout(function(){Mt=!1},100)}g.fitToSection&&(clearTimeout(bt),bt=setTimeout(function(){g.fitToSection&&Qt(Bn)[0].offsetHeight<=ct&&I()},g.fitToSectionDelay))}}function I(){dt&&(ut=!0,R(Qt(Bn)[0]),ut=!1)}function O(e){if(pt.m[e]){var t="down"===e?u:c;if(et.scrollHorizontally&&(t=et.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Qt(Bn)[0]),i="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(i,n))return!0;t()}else t()}else t()}}function D(e){g.autoScrolling&&k(e)&&vn(e)}function x(e){var t=dn(e.target,Rn);if(k(e)){g.autoScrolling&&vn(e);var n=Me(e);Pt=n.y,Rt=n.x,Qt(Gn,t).length&&Math.abs(jt-Rt)>Math.abs(Ht-Pt)?!rt&&Math.abs(jt-Rt)>zt.innerWidth/100*g.touchSensitivity&&(Rt<jt?pt.m.right&&h(t):pt.m.left&&p(t)):g.autoScrolling&&dt&&Math.abs(Ht-Pt)>zt.innerHeight/100*g.touchSensitivity&&(Pt<Ht?O("down"):Ht<Pt&&O("up"))}}function k(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function N(e){if(g.fitToSection&&(St=!1),k(e)){var t=Me(e);Ht=t.y,jt=t.x}}function L(e,t){for(var n=0,i=e.slice(Math.max(e.length-t,1)),o=0;o<i.length;o++)n+=i[o];return Math.ceil(n/t)}function M(e){var t=(new Date).getTime(),n=Vt(Qt(".fp-completely")[0],zn);if(!pt.m.down&&!pt.m.up)return vn(e),!1;if(g.autoScrolling&&!it&&!n){var i=(e=e||zt.event).wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,i)),r=void 0!==e.wheelDeltaX||void 0!==e.deltaX,a=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!r;149<ht.length&&ht.shift(),ht.push(Math.abs(i)),g.scrollBar&&vn(e);var s=t-Bt;if(Bt=t,200<s&&(ht=[]),dt&&!Ue()){var l=L(ht,10);L(ht,70)<=l&&a&&O(o<0?"down":"up")}return!1}g.fitToSection&&(St=!1)}function H(e,t){var n=null==t?Qt(Bn)[0]:t,i=Qt(Gn,n)[0];if(!(null==i||Ue()||rt||Qt(Vn,i).length<2)){var o=Qt(Xn,i)[0],r=null;if(null==(r="left"===e?Gt(o,Vn):Jt(o,Vn))){if(!g.loopHorizontal)return;var a=gn(o);r="left"===e?a[a.length-1]:a[0]}rt=!et.test.isTesting,de(i,r,e)}}function j(){for(var e=Qt(Xn),t=0;t<e.length;t++)He(e[t],"internal")}function P(e){var t=e.offsetHeight,n=e.offsetTop,i=n,o=We("dragAndMove")&&et.dragAndMove.isGrabbing?et.dragAndMove.isScrollingDown():Wt<n,r=i-ct+t,a=g.bigSectionsDestination;return ct<t?(o||a)&&"bottom"!==a||(i=r):(o||ut&&null==en(e))&&(i=r),g.offsetSections&&et.offsetSections&&(i=et.offsetSections.getSectionPosition(o,i,e)),Wt=i}function R(e,t,n){if(null!=e){var i,o,r={element:e,callback:t,isMovementUp:n,dtop:P(e),yMovement:we(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:nn(e,Rn),activeSlide:Qt(Xn,e)[0],activeSection:Qt(Bn)[0],leavingSection:nn(Qt(Bn),Rn)+1,localIsResizing:ut};if(!(r.activeSection==e&&!ut||g.scrollBar&&mn()===r.dtop&&!Vt(e,Un))){if(null!=r.activeSlide&&(i=r.activeSlide.getAttribute("data-anchor"),o=nn(r.activeSlide)),!r.localIsResizing){var a=r.yMovement;if(void 0!==n&&(a=n?"up":"down"),r.direction=a,_n(g.onLeave)&&!1===B("onLeave",r))return}var s;Fe("parallax","apply",r),g.autoScrolling&&g.continuousVertical&&void 0!==r.isMovementUp&&(!r.isMovementUp&&"up"==r.yMovement||r.isMovementUp&&"down"==r.yMovement)&&((l=r).isMovementUp?pn(Qt(Bn)[0],Cn(l.activeSection,Rn)):hn(Qt(Bn)[0],Tn(l.activeSection,Rn).reverse()),je(Qt(Bn)[0].offsetTop),j(),l.wrapAroundElements=l.activeSection,l.dtop=l.element.offsetTop,l.yMovement=we(l.element),l.leavingSection=nn(l.activeSection,Rn)+1,l.sectionIndex=nn(l.element,Rn),yn(Qt(On)[0],"onContinuousVertical",l),r=l),We("scrollOverflowReset")&&et.scrollOverflowReset.setPrevious(r.activeSection),r.localIsResizing||V(r.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),an(e,Mn),sn(gn(e),Mn),q(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),dt=et.test.isTesting,De(o,i,r.anchorLink,r.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t;Te("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),g.scrollingSpeed?(clearTimeout(vt),vt=setTimeout(function(){z(e)},g.scrollingSpeed)):z(e)}else{var n=U(e.dtop);et.test.top=-e.dtop+"px",Qe(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){z(e)},30):z(e)})}}(r),tt=r.anchorLink,be(r.anchorLink,null==(s=r).wrapAroundElements?s.sectionIndex:s.isMovementUp?Qt(Rn).length-1:0)}}var l}function B(e,t){var n,i,o,r,a=(i=e,o=t,(r=g.v2compatible?{afterRender:function(){return[lt]},onLeave:function(){return[o.activeSection,o.leavingSection,o.sectionIndex+1,o.direction]},afterLoad:function(){return[o.element,o.anchorLink,o.sectionIndex+1]},afterSlideLoad:function(){return[o.destiny,o.anchorLink,o.sectionIndex+1,o.slideAnchor,o.slideIndex]},onSlideLeave:function(){return[o.prevSlide,o.anchorLink,o.sectionIndex+1,o.prevSlideIndex,o.direction,o.slideIndex]}}:{afterRender:function(){return{section:W(Qt(Bn)[0]),slide:F(Qt(Xn,Qt(Bn)[0])[0])}},onLeave:function(){return{origin:W(o.activeSection),destination:W(o.element),direction:o.direction}},afterLoad:function(){return r.onLeave()},afterSlideLoad:function(){return{section:W(o.section),origin:F(o.prevSlide),destination:F(o.destiny),direction:o.direction}},onSlideLeave:function(){return r.afterSlideLoad()}})[i]());if(g.v2compatible){if(!1===g[e].apply(a[0],a.slice(1)))return!1}else if(yn(lt,e,a),!1===g[e].apply(a[Object.keys(a)[0]],(n=a,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function W(e){return e?new Xe(e):null}function F(e){return e?new Ze(e):null}function U(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Qt(On)[0]):(t.options=e,t.element=zt),t}function z(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?pn(Qt(Rn)[0],t.wrapAroundElements):hn(Qt(Rn)[Qt(Rn).length-1],t.wrapAroundElements),je(Qt(Bn)[0].offsetTop),j(),t.sectionIndex=nn(t.element,Rn),t.leavingSection=nn(t.activeSection,Rn)+1),_n(g.afterLoad)&&!e.localIsResizing&&B("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),Fe("parallax","afterLoad"),We("scrollOverflowReset")&&et.scrollOverflowReset.reset(),We("resetSliders")&&et.resetSliders.apply(e),e.localIsResizing||Q(e.element),an(e.element,jn),sn(gn(e.element),jn),dt=!0,_n(e.callback)&&e.callback()}function Y(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function q(e){g.lazyLoading&&Qt("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",X(e)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&Y(n,e)}),bn(n,"source")){var e=dn(n,"video, audio");e&&e.load()}})}function Q(e){var t=X(e);Qt("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Qt('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&K(e),e.onload=function(){e.hasAttribute("data-autoplay")&&K(e)}})}function K(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function V(e){var t=X(e);Qt("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Qt('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function X(e){var t=Qt(Xn,e);return t.length&&(e=t[0]),e}function Z(e){function i(e){var t,n,i,o,r,a,s="",l=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");l<e.length;)t=c.indexOf(e.charAt(l++))<<2|(o=c.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(r=c.indexOf(e.charAt(l++)))>>2,i=(3&r)<<6|(a=c.indexOf(e.charAt(l++))),s+=String.fromCharCode(t),64!=r&&(s+=String.fromCharCode(n)),64!=a&&(s+=String.fromCharCode(i));return s=function(e){for(var t,n="",i=0,o=0,r=0;i<e.length;)(o=e.charCodeAt(i))<128?(n+=String.fromCharCode(o),i++):191<o&&o<224?(r=e.charCodeAt(i+1),n+=String.fromCharCode((31&o)<<6|63&r),i+=2):(r=e.charCodeAt(i+1),t=e.charCodeAt(i+2),n+=String.fromCharCode((15&o)<<12|(63&r)<<6|63&t),i+=3);return n}(s)}function o(e){return e.slice(3).slice(0,-3)}var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(o(t[1]),"").split("_")[0]+"_"+i(n.slice(3).slice(0,-3))}return o(e)}(i(e))}function G(e){var t=function(){if(Yt.domain.length){for(var e=Yt.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],i=Z(n[0]),o=Z(n[1]),r=Z(n[2]),a=Z(n[3]),s=[i,o,r].indexOf(t)<0&&0!==t.length,l=void 0!==xt[e]&&xt[e].length;if(!l&&s)return!1;var c=l?Z(xt[e]):"",u=1<(c=c.split("_")).length&&-1<c[1].indexOf(e,c[1].length-e.length);return!(c[0].indexOf(t,c[0].length-t.length)<0&&s&&a!=c[0])&&u||!s}function J(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(Nt)&&(clearTimeout(Lt),Lt=setTimeout($,900))})}function $(){At=!1}function ee(e){Nt=Yt.createElement("div"),kt=Z("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),Nt.innerHTML=kt,Nt=Nt.firstChild,"MutationObserver"in zt&&new MutationObserver(J).observe(Yt.body,{childList:!0,subtree:!1}),We(e)&&et[e]&&(G(e)||(te(),setInterval(te,2e3)))}function te(){Nt&&(At||(Math.random()<.5?An($e,Nt):ln(Nt,$e),At=!0),Nt.setAttribute("style",Z("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,Z("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function ne(){var e=oe(),t=e.section,n=e.slide;t&&(g.animateAnchor?Ie(t,n):f(t,n))}function ie(){if(!Mt&&!g.lockAnchors){var e=oe(),t=e.section,n=e.slide,i=void 0===tt,o=void 0===tt&&void 0===n&&!rt;t&&t.length&&(t&&t!==tt&&!i||o||!rt&&nt!=n)&&Ie(t,n)}}function oe(){var e,t,n=zt.location.hash;if(n.length){var i=n.replace("#","").split("/"),o=-1<n.indexOf("#/");e=o?"/"+i[1]:decodeURIComponent(i[0]);var r=o?i[2]:i[1];r&&r.length&&(t=decodeURIComponent(r))}return{section:e,slide:t}}function re(e){clearTimeout(wt);var t=Yt.activeElement,n=e.keyCode;9===n?function(e){function t(e){return vn(e),f[0]?f[0].focus():null}var n,i,o,r,a,s,l,c=e.shiftKey,u=Yt.activeElement,f=ce(X(Qt(Bn)[0]));n=e,o=(i=ce(Yt)).indexOf(Yt.activeElement),s=F(dn(a=i[r=n.shiftKey?o-1:o+1],Vn)),l=W(dn(a,Rn)),(s||l)&&(u?null==dn(u,Bn+","+Bn+" "+Xn)&&(u=t(e)):t(e),(!c&&u==f[f.length-1]||c&&u==f[0])&&vn(e))}(e):bn(t,"textarea")||bn(t,"input")||bn(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&vn(e),it=e.ctrlKey,wt=setTimeout(function(){!function(e){var t=e.shiftKey;if(dt||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:pt.k.up&&c();break;case 32:if(t&&pt.k.up){c();break}case 40:case 34:pt.k.down&&u();break;case 36:pt.k.up&&d(1);break;case 35:pt.k.down&&d(Qt(Rn).length);break;case 37:pt.k.left&&p();break;case 39:pt.k.right&&h()}}(e)},150))}function ae(e){ft&&(it=e.ctrlKey)}function se(e){2==e.which&&(Ft=e.pageY,lt.addEventListener("mousemove",fe))}function le(e){2==e.which&&lt.removeEventListener("mousemove",fe)}function ce(e){return[].slice.call(Qt(It,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function ue(){it=ft=!1}function fe(e){dt&&(e.pageY<Ft&&pt.m.up?c():e.pageY>Ft&&pt.m.down&&u()),Ft=e.pageY}function de(e,t,n){var i=dn(e,Rn),o={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:nn(t),section:i,sectionIndex:nn(i,Rn),anchorLink:i.getAttribute("data-anchor"),slidesNav:Qt(ni,i)[0],slideAnchor:ke(t),prevSlide:Qt(Xn,i)[0],prevSlideIndex:nn(Qt(Xn,i)[0]),localIsResizing:ut};o.xMovement=Ee(o.prevSlideIndex,o.slideIndex),o.localIsResizing||(dt=!1),Fe("parallax","applyHorizontal",o),g.onSlideLeave&&!o.localIsResizing&&"none"!==o.xMovement&&_n(g.onSlideLeave)&&!1===B("onSlideLeave",o)?rt=!1:(an(t,Mn),sn(gn(t),Mn),o.localIsResizing||(V(o.prevSlide),q(t)),he(o),Vt(i,Mn)&&!o.localIsResizing&&De(o.slideIndex,o.slideAnchor,o.anchorLink,o.sectionIndex),et.continuousHorizontal&&et.continuousHorizontal.apply(o),ze()?pe(o):me(e,o,!0),g.interlockedSlides&&et.interlockedSlides&&(We("continuousHorizontal")&&void 0!==n&&n!==o.xMovement||et.interlockedSlides.apply(o)))}function he(e){!g.loopHorizontal&&g.controlArrows&&(wn(Qt(ai,e.section),0!==e.slideIndex),wn(Qt(si,e.section),null!=en(e.destiny)))}function pe(e){var t,n;et.continuousHorizontal&&et.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(sn(Qt(Hn,t),Mn),an(Qt("a",Qt("li",t)[n]),Mn)),e.localIsResizing||(Fe("parallax","afterSlideLoads"),_n(g.afterSlideLoad)&&B("afterSlideLoad",e),dt=!0,Q(e.destiny)),rt=!1,We("interlockedSlides")&&et.interlockedSlides.apply(e)}function me(e,t,n){var i=t.destinyPos;if(g.css3){var o="translate3d(-"+Math.round(i.left)+"px, 0px, 0px)";et.test.translate3dH[t.sectionIndex]=o,Zt(_e(Qt($n,e)),Pe(o)),_t=setTimeout(function(){n&&pe(t)},g.scrollingSpeed)}else et.test.left[t.sectionIndex]=Math.round(i.left),Qe(e,Math.round(i.left),g.scrollingSpeed,function(){n&&pe(t)})}function ge(){if(yn(lt,"onResize"),ve(),at){var e=Yt.activeElement;if(!bn(e,"textarea")&&!bn(e,"input")&&!bn(e,"select")){var t=Xt();Math.abs(t-Ut)>20*Math.max(Ut,t)/100&&(gt=setTimeout(function(){m(!0),Ut=t},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(gt),gt=setTimeout(function(){m(!0)},350)}function ve(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&zt.innerWidth<e,i=t&&zt.innerHeight<t;e&&t?v(n||i):e?v(n):t&&v(i)}function _e(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return sn(e,xn),Zt(e,{"-webkit-transition":t,transition:t})}function ye(e){return an(e,xn)}function be(e,t){var n,i,o,r;n=e,i=Qt(g.menu)[0],g.menu&&null!=i&&(sn(Qt(Hn,i),Mn),an(Qt('[data-menuanchor="'+n+'"]',i),Mn)),o=e,r=t,g.navigation&&null!=Qt(qn)[0]&&(sn(Qt(Hn,Qt(qn)[0]),Mn),an(o?Qt('a[href="#'+o+'"]',Qt(qn)[0]):Qt("a",Qt("li",Qt(qn)[0])[r]),Mn))}function we(e){var t=nn(Qt(Bn)[0],Rn),n=nn(e,Rn);return t==n?"none":n<t?"up":"down"}function Ee(e,t){return e==t?"none":t<e?"left":"right"}function Se(e){if(!Vt(e,ei)){var t=Yt.createElement("div");t.className=Wn,t.style.height=Ce(e)+"px",an(e,ei),un(e,t)}}function Ce(e){var t=S(e);if(g.paddingTop||g.paddingBottom){var n=e;Vt(n,Pn)||(n=dn(e,Rn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function Te(e,t){t?_e(lt):ye(lt),clearTimeout(Et),Zt(lt,Pe(e)),et.test.translate3d=e,Et=setTimeout(function(){sn(lt,xn)},10)}function Ae(e){var t=Qt(Rn+'[data-anchor="'+e+'"]',lt)[0];if(!t){var n=void 0!==e?e-1:0;t=Qt(Rn)[n]}return t}function Ie(e,t){var n=Ae(e);if(null!=n){var i,o,r,a=(null==(r=Qt(Vn+'[data-anchor="'+(i=t)+'"]',o=n)[0])&&(i=void 0!==i?i:0,r=Qt(Vn,o)[i]),r);ke(n)===tt||Vt(n,Mn)?Oe(a):R(n,function(){Oe(a)})}}function Oe(e){null!=e&&de(dn(e,Gn),e)}function De(e,t,n,i){var o="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(o=n),null==t&&(t=e),xe(o+"/"+(nt=t))):(null!=e&&(nt=t),xe(n))),Ne()}function xe(e){if(g.recordHistory)location.hash=e;else if(at||st)zt.history.replaceState(void 0,void 0,"#"+e);else{var t=zt.location.href.split("#")[0];zt.location.replace(t+"#"+e)}}function ke(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=nn(e);return null==t&&(t=n),t}function Ne(){var e=Qt(Bn)[0],t=Qt(Xn,e)[0],n=ke(e),i=ke(t),o=String(n);t&&(o=o+"-"+i),o=o.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+Ln+"-[^\\s]+\\b","g");$e.className=$e.className.replace(r,""),an($e,Ln+"-"+o)}function Le(){return zt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Me(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,st&&k(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function He(e,t){i(0,"internal"),void 0!==t&&(ut=!0),de(dn(e,Gn),e),void 0!==t&&(ut=!1),i(Ot.scrollingSpeed,"internal")}function je(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)Te("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Zt(lt,{top:-t+"px"}),et.test.top=-t+"px";else{var n=U(t);Ke(n.element,n.options)}}function Pe(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Re(t,e,n){"all"!==e?pt[n][e]=t:Object.keys(pt[n]).forEach(function(e){pt[n][e]=t})}function Be(e){return Zt(e,{"-webkit-transition":"none",transition:"none"})}function We(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&et[e]:g[e]&&et[e]}function Fe(e,t,n){if(We(e))return et[e][t](n)}function Ue(){return We("dragAndMove")&&et.dragAndMove.isAnimating}function ze(){return We("dragAndMove")&&et.dragAndMove.isGrabbing}function Ye(e,t,n){g[e]=t,"internal"!==n&&(Ot[e]=t)}function qe(){Ge||(qt("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),qt("error","https://github.com/alvarotrigo/fullPage.js#options.")),Vt(Qt("html"),Nn)?qt("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,qt("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||qt("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,qt("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,qt("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Qt("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Qt(
"[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});(n.length||e.length)&&(qt("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&qt("error",'"'+t+'" is is being used by another element `id` property'),e.length&&qt("error",'"'+t+'" is is being used by another element `name` property'))}))}function Qe(t,n,i,o){var e,r=(e=t).self!=zt&&Vt(e,Zn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?mn():e.offsetTop,a=n-r,s=0;St=!0;var l=function(){if(St){var e=n;s+=20,i&&(e=zt.fp_easings[g.easing](s,r,a,i)),Ke(t,e),s<i?setTimeout(l,20):void 0!==o&&o()}else s<i&&o()};l()}function Ke(e,t){!g.autoScrolling||g.scrollBar||e.self!=zt&&Vt(e,Zn)?e.self!=zt&&Vt(e,Zn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Ve(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=nn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Xe(e){Ve.call(this,e,Rn)}function Ze(e){Ve.call(this,e,Vn)}var Ge=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<Yt.domain.indexOf("alvarotrigo.com");if(!Vt(Qt("html"),Nn)){var Je=Qt("html, body"),$e=Qt("body")[0],et={};g=Kt({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:zt.fp_scrolloverflow?zt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var tt,nt,it,ot,rt=!1,at=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),st="ontouchstart"in zt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,lt="string"==typeof e?Qt(e)[0]:e,ct=Xt(),ut=!1,ft=!0,dt=!0,ht=[],pt={m:{up:!0,down:!0,left:!0,right:!0}};pt.k=Kt({},pt.m);var mt,gt,vt,_t,yt,bt,wt,Et,St,Ct=Le(),Tt={touchmove:"ontouchmove"in zt?"touchmove":Ct.move,touchstart:"ontouchstart"in zt?"touchstart":Ct.down},At=!1,It='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Ot=Kt({},g),Dt=!1,xt={};qe(),zt.fp_easings=Kt(zt.fp_easings,{easeInOutCubic:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),lt&&(et.version="3.0.2",et.setAutoScrolling=n,et.setRecordHistory=o,et.setScrollingSpeed=i,et.setFitToSection=r,et.setLockAnchors=function(e){g.lockAnchors=e},et.setMouseWheelScrolling=t,et.setAllowScrolling=a,et.setKeyboardScrolling=l,et.moveSectionUp=c,et.moveSectionDown=u,et.silentMoveTo=f,et.moveTo=d,et.moveSlideRight=h,et.moveSlideLeft=p,et.fitToSection=I,et.reBuild=m,et.setResponsive=v,et.getFullpageData=function(){return{options:g,internals:{container:lt,canScroll:dt,isScrollAllowed:pt,getDestinationPosition:P,isTouch:st,c:ee,getXmovement:Ee,removeAnimation:ye,getTransforms:Pe,lazyLoad:q,addAnimation:_e,performHorizontalMove:me,landscapeScroll:de,silentLandscapeScroll:He,keepSlidesPosition:j,silentScroll:je,styleSlides:E,scrollHandler:A,getEventsPage:Me,getMSPointer:Le,isReallyTouch:k,usingExtension:We,toggleControlArrows:he,touchStartHandler:N,touchMoveHandler:x}}},et.destroy=function(e){yn(lt,"destroy",e),n(!1,"internal"),a(!0),s(!1),l(!1),an(lt,kn),clearTimeout(_t),clearTimeout(vt),clearTimeout(gt),clearTimeout(yt),clearTimeout(bt),zt.removeEventListener("scroll",A),zt.removeEventListener("hashchange",ie),zt.removeEventListener("resize",ge),Yt.removeEventListener("keydown",re),Yt.removeEventListener("keyup",ae),["click","touchstart"].forEach(function(e){Yt.removeEventListener(e,_)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Yt.removeEventListener(e,b,!0)}),We("dragAndMove")&&et.dragAndMove.destroy(),clearTimeout(_t),clearTimeout(vt),e&&(je(0),Qt("img[data-src], source[data-src], audio[data-src], iframe[data-src]",lt).forEach(function(e){Y(e,"src")}),Qt("img[data-srcset]").forEach(function(e){Y(e,"srcset")}),Sn(Qt(qn+", "+ni+", "+oi)),Zt(Qt(Rn),{height:"","background-color":"",padding:""}),Zt(Qt(Vn),{width:""}),Zt(lt,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Zt(Je,{overflow:"",height:""}),sn(Qt("html"),Nn),sn($e,Dn),$e.className.split(/\s+/).forEach(function(e){0===e.indexOf(Ln)&&sn($e,e)}),Qt(Rn+", "+Vn).forEach(function(e){var t;g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),sn(e,ei+" "+Mn+" "+jn),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Vt(e,Pn)&&!Dt&&e.removeAttribute("data-anchor")}),Be(lt),[Fn,$n,Gn].forEach(function(e){Qt(e,lt).forEach(function(e){fn(e)})}),zt.scrollTo(0,0),[Pn,Kn,Jn].forEach(function(e){sn(Qt("."+e),e)}))},et.getActiveSection=function(){return new Xe(Qt(Bn)[0])},et.getActiveSlide=function(){return F(Qt(Xn,Qt(Bn)[0])[0])},et.landscapeScroll=de,et.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Qt(g.sectionSelector,lt).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Qt(g.sectionSelector,lt).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:n},et.shared={afterRenderActions:T},zt.fullpage_api=et,w("continuousHorizontal"),w("scrollHorizontally"),w("resetSliders"),w("interlockedSlides"),w("responsiveSlides"),w("fadingEffect"),w("dragAndMove"),w("offsetSections"),w("scrollOverflowReset"),w("parallax"),We("dragAndMove")&&et.dragAndMove.init(),g.css3&&(g.css3=function(){var e,t=Yt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in t.style.display="block",Yt.body.insertBefore(t,null),n)void 0!==t.style[i]&&(t.style[i]="translate3d(1px,1px,1px)",e=zt.getComputedStyle(t).getPropertyValue(n[i]));return Yt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Qt(g.sectionSelector.split(",").join(e+",")+e,lt);t.length&&(Dt=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var e="[data-tooltip]",n=Qt(g.sectionSelector.split(",").join(e+",")+e,lt);n.length&&n.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Zt(lt,{height:"100%",position:"relative"}),an(lt,In),an(Qt("html"),Nn),ct=Xt(),sn(lt,kn),an(Qt(g.sectionSelector,lt),Pn),an(Qt(g.slideSelector,lt),Kn),Fe("parallax","init");for(var e=Qt(Rn),t=0;t<e.length;t++){var n=t,i=e[t],o=Qt(Vn,i),r=o.length;i.setAttribute("data-fp-styles",i.getAttribute("style")),l=i,(c=n)||null!=Qt(Bn)[0]||an(l,Mn),ot=Qt(Bn)[0],Zt(l,{height:S(l)+"px"}),g.paddingTop&&Zt(l,{"padding-top":g.paddingTop}),g.paddingBottom&&Zt(l,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[c]&&Zt(l,{"background-color":g.sectionsColor[c]}),void 0!==g.anchors[c]&&l.setAttribute("data-anchor",g.anchors[c]),a=i,s=n,void 0!==g.anchors[s]&&Vt(a,Mn)&&be(g.anchors[s],s),g.menu&&g.css3&&null!=dn(Qt(g.menu)[0],On)&&$e.appendChild(Qt(g.menu)[0]),0<r?E(i,o,r):g.verticalCentered&&Se(i)}var a,s,l,c;g.fixedElements&&g.css3&&Qt(g.fixedElements).forEach(function(e){$e.appendChild(e)}),g.navigation&&function(){var e=Yt.createElement("div");e.setAttribute("id",Yn);var t=Yt.createElement("ul");e.appendChild(t),ln(e,$e);var n=Qt(qn)[0];an(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&an(n,"fp-show-active");for(var i="",o=0;o<Qt(Rn).length;o++){var r="";g.anchors.length&&(r=g.anchors[o]),i+='<li><a href="#'+r+'"><span class="fp-sr-only">'+C(o,"Section")+"</span><span></span></a>";var a=g.navigationTooltips[o];void 0!==a&&""!==a&&(i+='<div class="'+Qn+" fp-"+g.navigationPosition+'">'+a+"</div>"),i+="</li>"}Qt("ul",n)[0].innerHTML=i,Zt(Qt(qn),{"margin-top":"-"+Qt(qn)[0].offsetHeight/2+"px"}),an(Qt("a",Qt("li",Qt(qn)[0])[nn(Qt(Bn)[0],Rn)]),Mn)}(),Qt('iframe[src*="youtube.com/embed/"]',lt).forEach(function(e){var t,n,i;n="enablejsapi=1",i=(t=e).getAttribute("src"),t.setAttribute("src",i+(/\?/.test(i)?"&":"?")+n)}),g.fadingEffect&&et.fadingEffect&&et.fadingEffect.apply(),g.scrollOverflow&&(mt=g.scrollOverflowHandler.init(g))}(),a(!0),s(!0),n(g.autoScrolling,"internal"),ve(),Ne(),"complete"===Yt.readyState&&ne(),zt.addEventListener("load",ne),g.scrollOverflow||T(),zt.addEventListener("scroll",A),zt.addEventListener("hashchange",ie),zt.addEventListener("blur",ue),zt.addEventListener("resize",ge),Yt.addEventListener("keydown",re),Yt.addEventListener("keyup",ae),["click","touchstart"].forEach(function(e){Yt.addEventListener(e,_)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){y(e,!1)}),["mouseleave","touchend"].forEach(function(e){y(e,!0)})),We("dragAndMove")&&et.dragAndMove.turnOffTouch());var kt,Nt,Lt,Mt=!1,Ht=0,jt=0,Pt=0,Rt=0,Bt=(new Date).getTime(),Wt=0,Ft=0,Ut=ct;return et}qe()}}),window.jQuery&&window.fullpage&&function(n,i){"use strict";n&&i?n.fn.fullpage=function(e){var t=new i(this[0],e);Object.keys(t).forEach(function(e){n.fn.fullpage[e]=t[e]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(l){var i=-1,o=-1,c=function(e){return parseFloat(e)||0},u=function(e){var t=1,n=l(e),i=null,o=[];return n.each(function(){var e=l(this),t=e.offset().top-c(e.css("margin-top")),n=0<o.length?o[o.length-1]:null;null===n?o.push(e):Math.floor(Math.abs(i-t))<=1?o[o.length-1]=n.add(e):o.push(e),i=t}),o},f=function(e){var t={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?l.extend(t,e):("boolean"==typeof e?t.byRow=e:"remove"===e&&(t.remove=!0),t)},d=l.fn.matchHeight=function(e){var t=f(e);if(t.remove){var n=this;return this.css(t.property,""),l.each(d._groups,function(e,t){t.elements=t.elements.not(n)}),this}return this.length<=1&&!t.target||(d._groups.push({elements:this,options:t}),d._apply(this,t)),this};d.version="0.7.2",d._groups=[],d._throttle=80,d._maintainScroll=!1,d._beforeUpdate=null,d._afterUpdate=null,d._rows=u,d._parse=c,d._parseOptions=f,d._apply=function(e,t){var r=f(t),n=l(e),i=[n],o=l(window).scrollTop(),a=l("html").outerHeight(!0),s=n.parents().filter(":hidden");return s.each(function(){var e=l(this);e.data("style-cache",e.attr("style"))}),s.css("display","block"),r.byRow&&!r.target&&(n.each(function(){var e=l(this),t=e.css("display");"inline-block"!==t&&"flex"!==t&&"inline-flex"!==t&&(t="block"),e.data("style-cache",e.attr("style")),e.css({display:t,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),i=u(n),n.each(function(){var e=l(this);e.attr("style",e.data("style-cache")||"")})),l.each(i,function(e,t){var n=l(t),o=0;if(r.target)o=r.target.outerHeight(!1);else{if(r.byRow&&n.length<=1)return void n.css(r.property,"");n.each(function(){var e=l(this),t=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var i={display:n};i[r.property]="",e.css(i),e.outerHeight(!1)>o&&(o=e.outerHeight(!1)),t?e.attr("style",t):e.css("display","")})}n.each(function(){var e=l(this),t=0;r.target&&e.is(r.target)||("border-box"!==e.css("box-sizing")&&(t+=c(e.css("border-top-width"))+c(e.css("border-bottom-width")),t+=c(e.css("padding-top"))+c(e.css("padding-bottom"))),e.css(r.property,o-t+"px"))})}),s.each(function(){var e=l(this);e.attr("style",e.data("style-cache")||null)}),d._maintainScroll&&l(window).scrollTop(o/a*l("html").outerHeight(!0)),this},d._applyDataApi=function(){var n={};l("[data-match-height], [data-mh]").each(function(){var e=l(this),t=e.attr("data-mh")||e.attr("data-match-height");n[t]=t in n?n[t].add(e):e}),l.each(n,function(){this.matchHeight(!0)})};var r=function(e){d._beforeUpdate&&d._beforeUpdate(e,d._groups),l.each(d._groups,function(){d._apply(this.elements,this.options)}),d._afterUpdate&&d._afterUpdate(e,d._groups)};d._update=function(e,t){if(t&&"resize"===t.type){var n=l(window).width();if(n===i)return;i=n}e?-1===o&&(o=setTimeout(function(){r(t),o=-1},d._throttle)):r(t)},l(d._applyDataApi);var e=l.fn.on?"on":"bind";l(window)[e]("load",function(e){d._update(!1,e)}),l(window)[e]("resize orientationchange",function(e){d._update(!0,e)})}),function(a){a(document).ready(function(){function e(){t+=(i-t)*r,n+=(o-n)*r,translate="translate("+t+"px, "+n+"px) scale(1.1)",a(".bganimate .bg").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),window.requestAnimationFrame(e)}var i=0,o=0,t=0,n=0,r=1/30;a(window).on("mousemove click",function(e){var t=Math.max(-100,Math.min(100,a(window).width()/2-e.clientX)),n=Math.max(-100,Math.min(100,a(window).height()/2-e.clientY));i=20*t/100,// 100 : 12 = lMouxeX : lFollow
o=10*n/100}),e()}),a(".mod-content .foto").addClass("animated fadeIn"),a(".mod-content .content").addClass("animated fadeInUp"),a(function(){var t=a(".page .header");a(window).scroll(function(){var e;300<=a(window).scrollTop()?t.removeClass("leftwhite"):t.addClass("leftwhite")})})}(jQuery),function(e){e(document).ready(function(){e(".js-menu").on("click",function(){e("body").toggleClass("menuopen"),e("body").toggleClass("opensidemenu"),e(".js-menu").toggleClass("is-active"),e(".js-mobilemenu").toggleClass("open")}),e(window).resize(function(){e("body").removeClass("menuopen").removeClass("opensidemenu"),e(".js-menu").removeClass("is-active")})})}(jQuery),function(o){o(document).ready(function(){
// Matchheight
function e(){var e=o(".footer").outerHeight(),t=o("header").height(),n,i=o(window).height()-e-t;o("#content").css("min-height",i)}e(),o(window).resize(function(){e()})})}(jQuery),function(e){e(document).ready(function(){e(".js-closemodal, .modal-dialog").on("click",function(){e("#modal").modal("hide")}),e(".modal").on("show",function(){e("body").addClass("modal-open")}).on("hidden",function(){e("body").removeClass("modal-open")})})}(jQuery),function(t){t(document).ready(function(){t(window).scroll(function(){var e;100<=t(window).scrollTop()?t("header").addClass("scrolled"):t("header").removeClass("scrolled")}),t("body").addClass("loaded");var e=t(".js-setbw").text();"links"==e&&t("header").addClass("leftwhite"),"rechts"==e&&t("header").addClass("rightwhite")})}(jQuery),function(e){e(document).ready(function(){e(".js-matchheight-0").matchHeight(),e(".js-matchheight-1").matchHeight(),e(".js-matchheight-2").matchHeight()})}(jQuery),function(n){n(window).mousemove(function(e){var t;n("#mouse-pointer").css({top:e.pageY+"px",left:e.pageX+"px"}),!!n("a[href], button").filter(function(){return n(this).is(":hover")}).length?n("#mouse-pointer").addClass("clickable"):n("#mouse-pointer").removeClass("clickable"),n(".modal-dialog").mouseenter(function(){n("#mouse-pointer").addClass("close")}),n(".modal-dialog").mouseleave(function(){n("#mouse-pointer").removeClass("close")}),n(".fullpage-slide").mouseenter(function(){n("#mouse-pointer").addClass("arrow")}),n(".fullpage-slide").mouseleave(function(){n("#mouse-pointer").removeClass("arrow")}),n(".fullpage-nextslide").mouseenter(function(){n("#mouse-pointer").addClass("right")}),n(".fullpage-nextslide").mouseleave(function(){n("#mouse-pointer").removeClass("right")}),n(".fullpage-prevsection").mouseenter(function(){n("#mouse-pointer").addClass("up")}),n(".fullpage-prevsection").mouseleave(function(){n("#mouse-pointer").removeClass("up")}),n(".fullpage-nextsection").mouseenter(function(){n("#mouse-pointer").addClass("down")}),n(".fullpage-nextsection").mouseleave(function(){n("#mouse-pointer").removeClass("down")}),n(".cards-archive .card, .foto, header.leftwhite .logo a, .mod-mobilemenu, .hamburger.is-active").mouseenter(function(){n("#mouse-pointer").addClass("white")}),n(".cards-archive .card, .foto, header.leftwhite .logo a, .mod-mobilemenu, .hamburger.is-active").mouseleave(function(){n("#mouse-pointer").removeClass("white")})})}(jQuery),function(e){e(document).ready(function(){})}(jQuery);