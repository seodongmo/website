(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[6270],{20830:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(19756),a=n(67294),o=n(73727),c=n(13919),l=n(10412),i=(0,a.createContext)({collectLink:function(){}}),s=n(44996),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m,d=e.isNavLink,f=e.to,v=e.href,h=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],p=e.autoAddBaseUrl,E=void 0===p||p,k=(0,r.Z)(e,u),y=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(i),w=f||v,C=(0,c.Z)(w),N=null==w?void 0:w.replace("pathname://",""),_=void 0!==N?(n=N,E&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,L=(0,a.useRef)(!1),S=d?o.OL:o.rU,A=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!A&&C&&null!=_&&window.docusaurus.prefetch(_),function(){A&&m&&m.disconnect()}}),[_,A,C]);var I=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,B=!_||!C||I;return _&&C&&!I&&!b&&Z.collectLink(_),B?a.createElement("a",Object.assign({href:_},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(S,Object.assign({},k,{onMouseEnter:function(){L.current||null==_||(window.docusaurus.preload(_),L.current=!0)},innerRef:function(e){var t,n;A&&e&&C&&(t=e,n=function(){null!=_&&window.docusaurus.prefetch(_)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())}))}))).observe(t))},to:_||""},d&&{isActive:g,activeClassName:h}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return c}});var r=n(52263),a=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,l=void 0!==c&&c,i=o.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},70094:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n(86010),o=n(86700),c=n(80944),l=n(24973),i="announcementBar_3WsW",s="announcementBarClose_38nx",u="announcementBarContent_3EUC",m="announcementBarCloseable_3myR";var d=function(){var e,t=(0,c.Z)(),n=t.isAnnouncementBarClosed,d=t.closeAnnouncementBar,f=(0,o.LU)().announcementBar;if(!f)return null;var v=f.content,h=f.backgroundColor,g=f.textColor,b=f.isCloseable;return!v||b&&n?null:r.createElement("div",{className:i,style:{backgroundColor:h,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(u,(e={},e[m]=b,e)),dangerouslySetInnerHTML:{__html:v}}),b?r.createElement("button",{type:"button",className:s,onClick:d,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},84478:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(67294),c=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,l=e.height,i=void 0===l?30:l,s=e.className,u=(0,a.Z)(e,c);return o.createElement("svg",(0,r.Z)({"aria-label":"Menu",className:s,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.createElement("title",null,"Menu"),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},26270:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ce}});var r=n(67294),a=n(86010),o=n(24973),c=n(5977),l="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,c.TH)();return(0,r.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:l,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(70094),m=n(22122),d=n(19756),f=n(73935),v=n(52263),h=n(44996),g=n(36742),b=n(99105),p=n(6397);function E(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var k=n(20830);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N="Ctrl";var _=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,o=C(e,["translations"]),c=a.buttonText,l=void 0===c?"Search":c,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=Z((0,r.useState)(null),2),m=u[0],d=u[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&d(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":N)}),[]),r.createElement("button",y({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},o,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(k.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},l)),null!==m&&r.createElement("span",{className:"DocSearch-Button-Keys"},r.createElement("span",{className:"DocSearch-Button-Key"},m===N?r.createElement(E,null):m),r.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),L=n(80907),S=n(86700);function A(){var e=function(){var e=(0,v.default)().i18n,t=(0,L.useAllDocsData)(),n=(0,L.useActivePluginAndVersion)(),r=(0,S.Oh)(),a=[S.HX].concat(Object.keys(t).map((function(e){var a,o,c=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,l=r[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=c?c:l)?o:i;return(0,S.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var I=["contextualSearch"],B=null;function D(e){var t=e.hit,n=e.children;return r.createElement(g.Z,{to:t.url},n)}function T(e){var t=e.state,n=e.onClose,a=(0,p.Z)().generateSearchPageLink;return r.createElement(g.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function U(e){var t,a,l=e.contextualSearch,i=(0,d.Z)(e,I),s=(0,v.default)().siteMetadata,u=A(),g=null!=(t=null==(a=i.searchParameters)?void 0:a.facetFilters)?t:[],p=l?[].concat(u,g):g,E=Object.assign({},i.searchParameters,{facetFilters:p}),k=(0,h.C)().withBaseUrl,y=(0,c.k6)(),Z=(0,r.useRef)(null),w=(0,r.useRef)(null),C=(0,r.useState)(!1),N=C[0],L=C[1],S=(0,r.useState)(null),U=S[0],M=S[1],O=(0,r.useCallback)((function(){return B?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,83763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(400)]).then(n.bind(n,95256))]).then((function(e){var t=e[0].DocSearchModal;B=t}))}),[]),P=(0,r.useCallback)((function(){O().then((function(){Z.current=document.createElement("div"),document.body.insertBefore(Z.current,document.body.firstChild),L(!0)}))}),[O,L]),x=(0,r.useCallback)((function(){L(!1),Z.current.remove()}),[L]),R=(0,r.useCallback)((function(e){O().then((function(){L(!0),M(e.key)}))}),[O,L,M]),V=(0,r.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,j=(0,r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,H=(0,r.useMemo)((function(){return function(e){return r.createElement(T,(0,m.Z)({},e,{onClose:x}))}}),[x]),W=(0,r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e}),[s.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,c=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,c])}({isOpen:N,onOpen:P,onClose:x,onInput:R,searchButtonRef:w});var z=(0,o.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(b.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+i.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement(_,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:P,ref:w,translations:{buttonText:z,buttonAriaLabel:z}}),N&&(0,f.createPortal)(r.createElement(B,(0,m.Z)({onClose:x,initialScrollY:window.scrollY,initialQuery:U,navigator:V,transformItems:j,hitComponent:D,resultsFooterComponent:H,transformSearchClient:W},i,{searchParameters:E})),Z.current))}var M=function(){var e=(0,v.default)().siteConfig;return r.createElement(U,e.themeConfig.algolia)},O={toggle:"toggle_71bT"},P=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(O.toggle,O.dark),style:n},t)},x=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(O.toggle,O.light),style:n},t)},R=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,c=e.disabled,l=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":c}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function V(e){var t=(0,S.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,l=(0,v.default)().isClient;return r.createElement(R,(0,m.Z)({disabled:!l,icons:{checked:r.createElement(P,{icon:n,style:a}),unchecked:r.createElement(x,{icon:o,style:c})}},e))}var j=n(85350),H=n(77898),W=function(e){var t=(0,c.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],l=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,H.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(l.current)return l.current=!1,void o(!1);a&&0===r&&o(!0);var c=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?o(!1):r+i<c&&o(!0)}}),[s,l]),(0,r.useEffect)((function(){e&&o(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},z=n(31839),q=n(93783),F=n(5525),K=["width","height"],G=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,c=(0,d.Z)(e,K);return r.createElement("svg",(0,m.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:o},c),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},Y=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function Q(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,d.Z)(e,Y),c=(0,v.default)().i18n,l=c.currentLocale,i=c.locales,s=c.localeConfigs,u=(0,S.l5)();function f(e){return s[e].label}var h=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),g=[].concat(n,h,a),b=t?"Languages":f(l);return r.createElement(F.Z,(0,m.Z)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(G,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,b)),items:g}))}var X="searchWrapper_3rmH";function J(e){return e.mobile?null:r.createElement("div",{className:X},r.createElement(M,null))}var $=["type"],ee={default:function(){return F.Z},localeDropdown:function(){return Q},search:function(){return J},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(76400).Z}};function te(e){var t=e.type,n=(0,d.Z)(e,$),a=function(e){void 0===e&&(e="default");var t=ee[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var ne=n(55537),re=n(84478),ae="displayOnlyInLargeViewport_GrZ2",oe="navbarHideable_2qcr",ce="navbarHidden_3yey",le="right";var ie=function(){var e,t=(0,S.LU)(),n=t.navbar,o=n.items,c=n.hideOnScroll,l=n.style,i=t.colorMode.disableSwitch,s=(0,r.useState)(!1),u=s[0],d=s[1],f=(0,j.Z)(),v=f.isDarkTheme,h=f.setLightTheme,g=f.setDarkTheme,b=W(c),p=b.navbarRef,E=b.isNavbarVisible;(0,z.Z)(u);var k=(0,r.useCallback)((function(){d(!0)}),[d]),y=(0,r.useCallback)((function(){d(!1)}),[d]),Z=(0,r.useCallback)((function(e){return e.target.checked?g():h()}),[h,g]),w=(0,q.Z)();(0,r.useEffect)((function(){w===q.D.desktop&&d(!1)}),[w]);var C=o.some((function(e){return"search"===e.type})),N=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:le)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:le)}))}}(o),_=N.leftItems,L=N.rightItems;return r.createElement("nav",{ref:p,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":u},e[oe]=c,e[ce]=c&&!E,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:k,onKeyDown:k},r.createElement(re.Z,null)),r.createElement(ne.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),_.map((function(e,t){return r.createElement(te,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return r.createElement(te,(0,m.Z)({},e,{key:t}))})),!i&&r.createElement(V,{className:ae,checked:v,onChange:Z}),!C&&r.createElement(M,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(ne.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!i&&u&&r.createElement(V,{checked:v,onChange:Z})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(te,(0,m.Z)({mobile:!0},e,{onClick:y,key:t}))})))))))},se="footerLogoLink_MyFc",ue=n(98465),me=["to","href","label","prependBaseUrlToHref"];function de(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,c=(0,d.Z)(e,me),l=(0,h.Z)(t),i=(0,h.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(g.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:l},c),a)}var fe=function(e){var t=e.sources,n=e.alt;return r.createElement(ue.Z,{className:"footer__logo",alt:n,sources:t})};var ve=function(){var e=(0,S.LU)().footer,t=e||{},n=t.copyright,o=t.links,c=void 0===o?[]:o,l=t.logo,i=void 0===l?{}:l,s={light:(0,h.Z)(i.src),dark:(0,h.Z)(i.srcDark||i.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},c&&c.length>0&&r.createElement("div",{className:"row footer__links"},c.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(de,e))}))):null)}))),(i||n)&&r.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},i.href?r.createElement(g.Z,{href:i.href,className:se},r.createElement(fe,{alt:i.alt,sources:s})):r.createElement(fe,{alt:i.alt,sources:s})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},he=n(48543),ge=n(55057);function be(e){var t=e.children;return r.createElement(he.Z,null,r.createElement(ge.Z,null,r.createElement(S.L5,null,t)))}function pe(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(b.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var Ee=n(41217);function ke(){var e=(0,v.default)().i18n,t=e.defaultLocale,n=e.locales,a=(0,S.l5)();return r.createElement(b.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ye(e){var t=e.permalink,n=(0,v.default)().siteConfig.url,a=function(){var e=(0,v.default)().siteConfig.url,t=(0,c.TH)().pathname;return e+(0,h.Z)(t)}(),o=t?""+n+t:a;return r.createElement(b.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function Ze(e){var t=(0,v.default)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig.metadatas,c=t.i18n,l=c.currentLocale,i=c.localeConfigs,s=e.title,u=e.description,d=e.image,f=e.keywords,g=e.searchMetadatas,p=(0,h.Z)(a),E=(0,S.pe)(s),k=l,y=i[l].direction;return r.createElement(r.Fragment,null,r.createElement(b.Z,null,r.createElement("html",{lang:k,dir:y}),a&&r.createElement("link",{rel:"shortcut icon",href:p}),r.createElement("title",null,E),r.createElement("meta",{property:"og:title",content:E})),r.createElement(Ee.Z,{description:u,keywords:f,image:d}),r.createElement(ye,null),r.createElement(ke,null),r.createElement(pe,(0,m.Z)({tag:S.HX,locale:l},g)),r.createElement(b.Z,null,o.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var we=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ce=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,c=e.pageClassName;return we(),r.createElement(be,null,r.createElement(Ze,e),r.createElement(s,null),r.createElement(u.Z,null),r.createElement(ie,null),r.createElement("div",{className:(0,a.Z)(S.kM.wrapper.main,o,c)},t),!n&&r.createElement(ve,null))}},55537:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(67294),c=n(36742),l=n(98465),i=n(44996),s=n(52263),u=n(86700),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.default)().isClient,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,a.Z)(e,m),p=(0,i.Z)(v.href||"/"),E={light:(0,i.Z)(v.src),dark:(0,i.Z)(v.srcDark||v.src)};return o.createElement(c.Z,(0,r.Z)({to:p},b,v.target&&{target:v.target}),v.src&&o.createElement(l.Z,{key:t,className:h,sources:E,alt:v.alt||d||"Logo"}),null!=d&&o.createElement("strong",{className:g},d))}},5525:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(67294),c=n(86010),l=n(36742),i=n(44996),s=n(5977),u=n(86700),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],f=["className"],v=["items","className","position"],h=["className"],g=["mobile"];function b(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,s=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,v=e.prependBaseUrlToHref,h=(0,a.Z)(e,m),g=(0,i.Z)(c),b=(0,i.Z)(t),p=(0,i.Z)(s,{forcePrependBaseUrl:!0});return o.createElement(l.Z,(0,r.Z)({},s?{href:v?p:s}:Object.assign({isNavLink:!0,activeClassName:f,to:g},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function p(e){var t,n=e.items,l=e.position,i=e.className,s=(0,a.Z)(e,d),u=(0,o.useRef)(null),m=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],g=v[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),(0,c.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,c.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l,"dropdown--show":h})},o.createElement(b,(0,r.Z)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,l=(0,a.Z)(e,f);return o.createElement("li",{key:t},o.createElement(b,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.createElement(b,(0,r.Z)({className:p(i)},s))}function E(e){var t,n,l,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,v)),f=(0,o.useRef)(null),g=(0,s.TH)().pathname,p=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,g)}))))||e})),E=p[0],k=p[1],y=function(e,t){return void 0===t&&(t=!1),(0,c.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.Z)({className:y(m)},d)));var Z=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":E})},o.createElement(b,(0,r.Z)({role:"button",className:y(m,!0)},d,{onClick:function(e){e.preventDefault(),k((function(e){return!e}))}}),null!=(l=d.children)?l:d.label),o.createElement("ul",{className:"menu__list",ref:f,style:{height:E?void 0:Z}},i.map((function(e,t){var n=e.className,c=(0,a.Z)(e,h);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(b,(0,r.Z)({activeClassName:"menu__link--active",className:y(n)},c,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,g),c=n?E:p;return o.createElement(c,r)}},76400:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),c=n(5525),l=n(80907),i=n(86010),s=n(86700),u=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,n,m=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,u),g=(0,l.useActiveDocContext)(v),b=g.activeVersion,p=g.activeDoc,E=(0,s.J)(v).preferredVersion,k=(0,l.useLatestVersion)(v),y=null!=(t=null!=b?b:E)?t:k,Z=y.docs.find((function(e){return e.id===m}));if(!Z){var w=y.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+m+" in version "+y.name+".\nAvailable docIds=\n- "+w)}return o.createElement(c.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(n={},n[d]=p&&p.sidebar===Z.sidebar,n)),label:null!=f?f:Z.id,to:Z.path}))}},59308:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),c=n(5525),l=n(80907),i=n(86700),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.Z)(e,s),b=(0,l.useActiveDocContext)(d),p=(0,l.useVersions)(d),E=(0,l.useLatestVersion)(d),k=(0,i.J)(d),y=k.preferredVersion,Z=k.savePreferredVersionName;var w=null!=(t=null!=(n=b.activeVersion)?n:y)?t:E,C=m?"Versions":w.label,N=m?void 0:u(w).path;return o.createElement(c.Z,(0,r.Z)({},g,{mobile:m,label:C,to:N,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){Z(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},47250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(22122),a=n(19756),o=n(67294),c=n(5525),l=n(80907),i=n(86700),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,l.useActiveVersion)(m),v=(0,i.J)(m).preferredVersion,h=(0,l.useLatestVersion)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(c.Z,(0,r.Z)({},d,{label:b,to:p}))}},41217:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),a=n(99105),o=n(86700),c=n(44996);function l(e){var t=e.title,n=e.description,l=e.keywords,i=e.image,s=(0,o.LU)().image,u=(0,o.pe)(t),m=(0,c.Z)(i||s,{absolute:!0});return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),l&&r.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}),m&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},48543:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),a=n(10412),o=n(86700),c=(0,o.WA)("theme"),l="light",i="dark",s=function(e){return e===i?i:l},u=function(e){(0,o.WA)("theme").set(s(e))},m=function(){var e=(0,o.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,m=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return a.Z.canUseDOM?s(document.documentElement.getAttribute("data-theme")):s(e)}(t)),f=d[0],v=d[1],h=(0,r.useCallback)((function(){v(l),u(l)}),[]),g=(0,r.useCallback)((function(){v(i),u(i)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(f))}),[f]),(0,r.useEffect)((function(){if(!n)try{var e=c.get();null!==e&&v(s(e))}catch(t){console.error(t)}}),[v]),(0,r.useEffect)((function(){n&&!m||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;v(t?i:l)}))}),[]),{isDarkTheme:f===i,setLightTheme:h,setDarkTheme:g}},d=n(82924);var f=function(e){var t=m(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)}},98465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),c=n(86010),l=n(52263),i=n(85350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,l.default)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,c.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},55057:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c=n(86700),l="docusaurus.tab.",i=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=o((0,c._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(l))t[a.substring(l.length)]=(0,c.WA)(a).get()}n(t)}catch(i){console.error(i)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},s=(0,c.WA)("docusaurus.announcement.dismiss"),u=(0,c.WA)("docusaurus.announcement.id"),m=function(){var e=(0,c.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){s.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=u.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;u.set(t),r&&s.set("false"),(r||"false"===s.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},d=n(79443);var f=function(e){var t=i(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=m(),c=o.isAnnouncementBarClosed,l=o.closeAnnouncementBar;return r.createElement(d.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:c,closeAnnouncementBar:l}},e.children)}},31839:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},77898:function(e,t,n){"use strict";var r=n(67294),a=n(10412),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93783:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(67294),a=n(10412),o={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),c=n[0],l=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){l(t())}}),[]),c}},6397:function(e,t,n){"use strict";var r=n(5977),a=n(10412),o=n(52263);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.default)().siteConfig,c=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return c+"search?q="+encodeURIComponent(e)}}}}}]);