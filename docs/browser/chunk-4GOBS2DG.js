import{d as I,r as Oe}from"./chunk-C5NXSQJ6.js";import{$ as h,Ba as w,Ca as L,Ga as xe,Ha as q,Ia as Me,J as X,L as U,Ma as f,N as De,T as V,U as Te,Ua as E,W as H,Za as K,Zb as Ne,a as u,aa as _,b as ye,ca as A,cc as W,ea as c,fa as m,fb as Ce,j as Q,ja as b,la as v,m as k,ma as x,n as Ee,r as Ie,sa as ke,v as B,w as Ae,z as we}from"./chunk-O5IVALO7.js";var ee;try{ee=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ee=!1}var p=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Oe(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||ee)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(i){return new(i||e)(c(xe))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var S;function nt(){if(S==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>S=!0}))}finally{S=S||!1}return S}function F(n){return nt()?n:!!n.capture}var M;function Xt(){if(M==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return M=!1,M;if("scrollBehavior"in document.documentElement.style)M=!0;else{let n=Element.prototype.scrollTo;n?M=!/\{\s*\[native code\]\s*\}/.test(n.toString()):M=!1}}return M}var J;function st(){if(J==null){let n=typeof document<"u"?document.head:null;J=!!(n&&(n.createShadowRoot||n.attachShadow))}return J}function Fe(n){if(st()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Re(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let e=n.shadowRoot.activeElement;if(e===n)break;n=e}return n}function D(n){return n.composedPath?n.composedPath()[0]:n.target}function Le(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function qt(n,...e){return e.length?e.some(s=>n[s]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function ot(n,e=0){return rt(n)?Number(n):e}function rt(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function ie(n){return Array.isArray(n)?n:[n]}function ti(n){return n==null?"":typeof n=="string"?n:`${n}px`}function C(n){return n instanceof w?n.nativeElement:n}var at=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=_({providers:[at]});let n=e;return n})();var je=new Set,N,ct=(()=>{let e=class e{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):lt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&dt(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(i){return new(i||e)(c(p),c(Me,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function dt(n,e){if(!je.has(n))try{N||(N=document.createElement("style"),e&&N.setAttribute("nonce",e),N.setAttribute("type","text/css"),document.head.appendChild(N)),N.sheet&&(N.sheet.insertRule(`@media ${n} {body{ }}`,0),je.add(n))}catch(s){console.error(s)}}function lt(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Be=(()=>{let e=class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new k}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Pe(ie(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Pe(ie(t)).map(a=>this._registerQuery(a).observable),r=Ae(o);return r=we(r.pipe(U(1)),r.pipe(V(1),X(0))),r.pipe(B(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:g,query:l})=>{d.matches=d.matches||g,d.breakpoints[l]=g}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),r={observable:new Q(a=>{let d=g=>this._zone.run(()=>a.next(g));return i.addListener(d),()=>{i.removeListener(d)}}).pipe(Te(i),B(({matches:a})=>({query:t,matches:a})),H(this._destroySubject)),mql:i};return this._queries.set(t,r),r}};e.\u0275fac=function(i){return new(i||e)(c(ct),c(E))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Pe(n){return n.map(e=>e.split(",")).reduce((e,s)=>e.concat(s)).map(e=>e.trim())}var ht=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return mt(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=ut(Et(t));if(i&&(Ue(i)===-1||!this.isVisible(i)))return!1;let o=t.nodeName.toLowerCase(),r=Ue(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!vt(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,i){return yt(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(i){return new(i||e)(c(p))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function ut(n){try{return n.frameElement}catch{return null}}function mt(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function ft(n){let e=n.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function pt(n){return _t(n)&&n.type=="hidden"}function gt(n){return bt(n)&&n.hasAttribute("href")}function _t(n){return n.nodeName.toLowerCase()=="input"}function bt(n){return n.nodeName.toLowerCase()=="a"}function Ke(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let e=n.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Ue(n){if(!Ke(n))return null;let e=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function vt(n){let e=n.nodeName.toLowerCase(),s=e==="input"&&n.type;return s==="text"||s==="password"||e==="select"||e==="textarea"}function yt(n){return pt(n)?!1:ft(n)||gt(n)||n.hasAttribute("contenteditable")||Ke(n)}function Et(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var se=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,s,t,i,o=!1){this._element=e,this._checker=s,this._ngZone=t,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,o||this.attachAnchors()}destroy(){let e=this._startAnchor,s=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),s&&(s.removeEventListener("focus",this.endAnchorListener),s.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(s=>{this._executeOnStable(()=>s(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(s=>{this._executeOnStable(()=>s(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(s=>{this._executeOnStable(()=>s(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let s=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?s.length?s[0]:this._getFirstTabbableElement(this._element):s.length?s[s.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let s=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(s){if(!this._checker.isFocusable(s)){let t=this._getFirstTabbableElement(s);return t?.focus(e),!!t}return s.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let s=this._getRegionBoundary("start");return s&&s.focus(e),!!s}focusLastTabbableElement(e){let s=this._getRegionBoundary("end");return s&&s.focus(e),!!s}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let s=e.children;for(let t=0;t<s.length;t++){let i=s[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(s[t]):null;if(i)return i}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let s=e.children;for(let t=s.length-1;t>=0;t--){let i=s[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(s[t]):null;if(i)return i}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,s){e?s.setAttribute("tabindex","0"):s.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(U(1)).subscribe(e)}},It=(()=>{let e=class e{constructor(t,i,o){this._checker=t,this._ngZone=i,this._document=o}create(t,i=!1){return new se(t,this._checker,this._ngZone,this._document,i)}};e.\u0275fac=function(i){return new(i||e)(c(ht),c(E),c(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ui=(()=>{let e=class e{get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}constructor(t,i,o){this._elementRef=t,this._focusTrapFactory=i,this._previouslyFocusedElement=null,m(p).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let i=t.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Re(),this.focusTrap?.focusInitialElementWhenReady()}};e.\u0275fac=function(i){return new(i||e)(f(w),f(It),f(I))},e.\u0275dir=x({type:e,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[b.HasDecoratorInputTransform,"cdkTrapFocus","enabled",W],autoCapture:[b.HasDecoratorInputTransform,"cdkTrapFocusAutoCapture","autoCapture",W]},exportAs:["cdkTrapFocus"],standalone:!0,features:[K,ke]});let n=e;return n})();function oe(n){return n.buttons===0||n.detail===0}function re(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var At=new A("cdk-input-modality-detector-options"),wt={ignoreKeys:[18,17,224,91,16]},We=650,R=F({passive:!0,capture:!0}),Dt=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,i,o,r){this._platform=t,this._mostRecentTarget=null,this._modality=new Ee(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=D(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<We||(this._modality.next(oe(a)?"keyboard":"mouse"),this._mostRecentTarget=D(a))},this._onTouchstart=a=>{if(re(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=D(a)},this._options=u(u({},wt),r),this.modalityDetected=this._modality.pipe(V(1)),this.modalityChanged=this.modalityDetected.pipe(De()),t.isBrowser&&i.runOutsideAngular(()=>{o.addEventListener("keydown",this._onKeydown,R),o.addEventListener("mousedown",this._onMousedown,R),o.addEventListener("touchstart",this._onTouchstart,R)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,R),document.removeEventListener("mousedown",this._onMousedown,R),document.removeEventListener("touchstart",this._onTouchstart,R))}};e.\u0275fac=function(i){return new(i||e)(c(p),c(E),c(I),c(At,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var z=function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n}(z||{}),Tt=new A("cdk-focus-monitor-default-options"),$=F({passive:!0,capture:!0}),kt=(()=>{let e=class e{constructor(t,i,o,r,a){this._ngZone=t,this._platform=i,this._inputModalityDetector=o,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new k,this._rootNodeFocusAndBlurListener=d=>{let g=D(d);for(let l=g;l;l=l.parentElement)d.type==="focus"?this._onFocus(d,l):this._onBlur(d,l)},this._document=r,this._detectionMode=a?.detectionMode||z.IMMEDIATE}monitor(t,i=!1){let o=C(t);if(!this._platform.isBrowser||o.nodeType!==1)return Ie();let r=Fe(o)||this._getDocument(),a=this._elementInfo.get(o);if(a)return i&&(a.checkChildren=!0),a.subject;let d={checkChildren:i,subject:new k,rootNode:r};return this._elementInfo.set(o,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let i=C(t),o=this._elementInfo.get(i);o&&(o.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(o))}focusVia(t,i,o){let r=C(t),a=this._getDocument().activeElement;r===a?this._getClosestElementsInfo(r).forEach(([d,g])=>this._originChanged(d,i,g)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===z.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===z.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?We:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,i){let o=this._elementInfo.get(i),r=D(t);!o||!o.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),o)}_onBlur(t,i){let o=this._elementInfo.get(i);!o||o.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(o,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,o=this._rootNodeFocusListenerCount.get(i)||0;o||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,$),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,$)}),this._rootNodeFocusListenerCount.set(i,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(H(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let o=this._rootNodeFocusListenerCount.get(i);o>1?this._rootNodeFocusListenerCount.set(i,o-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,$),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,$),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,o){this._setClasses(t,i),this._emitOrigin(o,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&i.push([r,o])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(i))return!0}return!1}};e.\u0275fac=function(i){return new(i||e)(c(E),c(p),c(Dt),c(I,8),c(Tt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Vi=(()=>{let e=class e{constructor(t,i){this._elementRef=t,this._focusMonitor=i,this._focusOrigin=null,this.cdkFocusChange=new L}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(f(w),f(kt))},e.\u0275dir=x({type:e,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"],standalone:!0});let n=e;return n})(),O=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(O||{}),Ve="cdk-high-contrast-black-on-white",He="cdk-high-contrast-white-on-black",ne="cdk-high-contrast-active",ae=(()=>{let e=class e{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=m(Be).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return O.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,o=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return O.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return O.BLACK_ON_WHITE}return O.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ne,Ve,He),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===O.BLACK_ON_WHITE?t.add(ne,Ve):i===O.WHITE_ON_BLACK&&t.add(ne,He)}}};e.\u0275fac=function(i){return new(i||e)(c(p),c(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Hi=(()=>{let e=class e{constructor(t){t._applyBodyHighContrastModeCssClasses()}};e.\u0275fac=function(i){return new(i||e)(c(ae))},e.\u0275mod=v({type:e}),e.\u0275inj=_({imports:[Se]});let n=e;return n})();var Nt=new A("cdk-dir-doc",{providedIn:"root",factory:Ot});function Ot(){return m(I)}var Ft=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Rt(n){let e=n?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?Ft.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Ji=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new L,t){let i=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.value=Rt(i||o||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(i){return new(i||e)(c(Nt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=_({});let n=e;return n})();function Lt(){return!0}var St=new A("mat-sanity-checks",{providedIn:"root",factory:Lt}),$e=(()=>{let e=class e{constructor(t,i,o){this._sanityChecks=i,this._document=o,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return Le()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}};e.\u0275fac=function(i){return new(i||e)(c(ae),c(St,8),c(I))},e.\u0275mod=v({type:e}),e.\u0275inj=_({imports:[ce,ce]});let n=e;return n})();var ze=new A("MAT_DATE_LOCALE",{providedIn:"root",factory:jt});function jt(){return m(Ne)}var Z=class{constructor(){this._localeChanges=new k,this.localeChanges=this._localeChanges}getValidDateOrNull(e){return this.isDateInstance(e)&&this.isValid(e)?e:null}deserialize(e){return e==null||this.isDateInstance(e)&&this.isValid(e)?e:this.invalid()}setLocale(e){this.locale=e,this._localeChanges.next()}compareDate(e,s){return this.getYear(e)-this.getYear(s)||this.getMonth(e)-this.getMonth(s)||this.getDate(e)-this.getDate(s)}sameDate(e,s){if(e&&s){let t=this.isValid(e),i=this.isValid(s);return t&&i?!this.compareDate(e,s):t==i}return e==s}clampDate(e,s,t){return s&&this.compareDate(e,s)<0?s:t&&this.compareDate(e,t)>0?t:e}},Pt=new A("mat-date-formats"),Bt=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;function de(n,e){let s=Array(n);for(let t=0;t<n;t++)s[t]=e(t);return s}var Ut=(()=>{let e=class e extends Z{constructor(t){super(),this.useUtcForDisplay=!1,this._matDateLocale=m(ze,{optional:!0}),t!==void 0&&(this._matDateLocale=t),super.setLocale(this._matDateLocale)}getYear(t){return t.getFullYear()}getMonth(t){return t.getMonth()}getDate(t){return t.getDate()}getDayOfWeek(t){return t.getDay()}getMonthNames(t){let i=new Intl.DateTimeFormat(this.locale,{month:t,timeZone:"utc"});return de(12,o=>this._format(i,new Date(2017,o,1)))}getDateNames(){let t=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return de(31,i=>this._format(t,new Date(2017,0,i+1)))}getDayOfWeekNames(t){let i=new Intl.DateTimeFormat(this.locale,{weekday:t,timeZone:"utc"});return de(7,o=>this._format(i,new Date(2017,0,o+1)))}getYearName(t){let i=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(i,t)}getFirstDayOfWeek(){return 0}getNumDaysInMonth(t){return this.getDate(this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+1,0))}clone(t){return new Date(t.getTime())}createDate(t,i,o){let r=this._createDateWithOverflow(t,i,o);return r.getMonth()!=i,r}today(){return new Date}parse(t,i){return typeof t=="number"?new Date(t):t?new Date(Date.parse(t)):null}format(t,i){if(!this.isValid(t))throw Error("NativeDateAdapter: Cannot format invalid date.");let o=new Intl.DateTimeFormat(this.locale,ye(u({},i),{timeZone:"utc"}));return this._format(o,t)}addCalendarYears(t,i){return this.addCalendarMonths(t,i*12)}addCalendarMonths(t,i){let o=this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+i,this.getDate(t));return this.getMonth(o)!=((this.getMonth(t)+i)%12+12)%12&&(o=this._createDateWithOverflow(this.getYear(o),this.getMonth(o),0)),o}addCalendarDays(t,i){return this._createDateWithOverflow(this.getYear(t),this.getMonth(t),this.getDate(t)+i)}toIso8601(t){return[t.getUTCFullYear(),this._2digit(t.getUTCMonth()+1),this._2digit(t.getUTCDate())].join("-")}deserialize(t){if(typeof t=="string"){if(!t)return null;if(Bt.test(t)){let i=new Date(t);if(this.isValid(i))return i}}return super.deserialize(t)}isDateInstance(t){return t instanceof Date}isValid(t){return!isNaN(t.getTime())}invalid(){return new Date(NaN)}_createDateWithOverflow(t,i,o){let r=new Date;return r.setFullYear(t,i,o),r.setHours(0,0,0,0),r}_2digit(t){return("00"+t).slice(-2)}_format(t,i){let o=new Date;return o.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),o.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()),t.format(o)}};e.\u0275fac=function(i){return new(i||e)(c(ze,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),Vt={parse:{dateInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}};var Hn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=_({providers:[Ht()]});let n=e;return n})();function Ht(n=Vt){return[{provide:Z,useClass:Ut},{provide:Pt,useValue:n}]}var y=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(y||{}),ue=class{constructor(e,s,t,i=!1){this._renderer=e,this.element=s,this.config=t,this._animationForciblyDisabledThroughCss=i,this.state=y.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Ge=F({passive:!0,capture:!0}),me=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let s=D(e);s&&this._events.get(e.type)?.forEach((t,i)=>{(i===s||i.contains(s))&&t.forEach(o=>o.handleEvent(e))})}}addHandler(e,s,t,i){let o=this._events.get(s);if(o){let r=o.get(t);r?r.add(i):o.set(t,new Set([i]))}else this._events.set(s,new Map([[t,new Set([i])]])),e.runOutsideAngular(()=>{document.addEventListener(s,this._delegateEventHandler,Ge)})}removeHandler(e,s,t){let i=this._events.get(e);if(!i)return;let o=i.get(s);o&&(o.delete(t),o.size===0&&i.delete(s),i.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Ge)))}},Ze={enterDuration:225,exitDuration:150},Kt=800,Ye=F({passive:!0,capture:!0}),Qe=["mousedown","touchstart"],Xe=["mouseup","mouseleave","touchend","touchcancel"],P=class P{constructor(e,s,t,i){this._target=e,this._ngZone=s,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=C(t))}fadeInRipple(e,s,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=u(u({},Ze),t.animation);t.centered&&(e=i.left+i.width/2,s=i.top+i.height/2);let r=t.radius||Wt(e,s,i),a=e-i.left,d=s-i.top,g=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${g}ms`,this._containerElement.appendChild(l);let pe=window.getComputedStyle(l),it=pe.transitionProperty,ge=pe.transitionDuration,Y=it==="none"||ge==="0s"||ge==="0s, 0s"||i.width===0&&i.height===0,T=new ue(this,l,t,Y);l.style.transform="scale3d(1, 1, 1)",T.state=y.FADING_IN,t.persistent||(this._mostRecentTransientRipple=T);let _e=null;return!Y&&(g||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let be=()=>this._finishRippleTransition(T),ve=()=>this._destroyRipple(T);l.addEventListener("transitionend",be),l.addEventListener("transitioncancel",ve),_e={onTransitionEnd:be,onTransitionCancel:ve}}),this._activeRipples.set(T,_e),(Y||!g)&&this._finishRippleTransition(T),T}fadeOutRipple(e){if(e.state===y.FADING_OUT||e.state===y.HIDDEN)return;let s=e.element,t=u(u({},Ze),e.config.animation);s.style.transitionDuration=`${t.exitDuration}ms`,s.style.opacity="0",e.state=y.FADING_OUT,(e._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let s=C(e);!this._platform.isBrowser||!s||s===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=s,Qe.forEach(t=>{P._eventManager.addHandler(this._ngZone,t,s,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xe.forEach(s=>{this._triggerElement.addEventListener(s,this,Ye)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===y.FADING_IN?this._startFadeOutTransition(e):e.state===y.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let s=e===this._mostRecentTransientRipple,{persistent:t}=e.config;e.state=y.VISIBLE,!t&&(!s||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let s=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=y.HIDDEN,s!==null&&(e.element.removeEventListener("transitionend",s.onTransitionEnd),e.element.removeEventListener("transitioncancel",s.onTransitionCancel)),e.element.remove()}_onMousedown(e){let s=oe(e),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Kt;!this._target.rippleDisabled&&!s&&!t&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!re(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let s=e.changedTouches;if(s)for(let t=0;t<s.length;t++)this.fadeInRipple(s[t].clientX,s[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let s=e.state===y.VISIBLE||e.config.terminateOnPointerUp&&e.state===y.FADING_IN;!e.config.persistent&&s&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Qe.forEach(s=>P._eventManager.removeHandler(s,e,this)),this._pointerUpEventsRegistered&&(Xe.forEach(s=>e.removeEventListener(s,this,Ye)),this._pointerUpEventsRegistered=!1))}};P._eventManager=new me;var fe=P;function Wt(n,e,s){let t=Math.max(Math.abs(n-s.left),Math.abs(n-s.right)),i=Math.max(Math.abs(e-s.top),Math.abs(e-s.bottom));return Math.sqrt(t*t+i*i)}var tt=new A("mat-ripple-global-options"),$t=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,i,o,r,a){this._elementRef=t,this._animationMode=a,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=r||{},this._rippleRenderer=new fe(this,i,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,u(u({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),t))}};e.\u0275fac=function(i){return new(i||e)(f(w),f(E),f(p),f(tt,8),f(q,8))},e.\u0275dir=x({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,o){i&2&&Ce("mat-ripple-unbounded",o.unbounded)},inputs:{color:[b.None,"matRippleColor","color"],unbounded:[b.None,"matRippleUnbounded","unbounded"],centered:[b.None,"matRippleCentered","centered"],radius:[b.None,"matRippleRadius","radius"],animation:[b.None,"matRippleAnimation","animation"],disabled:[b.None,"matRippleDisabled","disabled"],trigger:[b.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let n=e;return n})(),Kn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=_({imports:[$e,$e]});let n=e;return n})();var qe={capture:!0},Je=["focus","click","mouseenter","touchstart"],le="mat-ripple-loader-uninitialized",he="mat-ripple-loader-class-name",et="mat-ripple-loader-centered",G="mat-ripple-loader-disabled",Wn=(()=>{let e=class e{constructor(){this._document=m(I,{optional:!0}),this._animationMode=m(q,{optional:!0}),this._globalRippleOptions=m(tt,{optional:!0}),this._platform=m(p),this._ngZone=m(E),this._hosts=new Map,this._onInteraction=t=>{if(!(t.target instanceof HTMLElement))return;let o=t.target.closest(`[${le}]`);o&&this._createRipple(o)},this._ngZone.runOutsideAngular(()=>{for(let t of Je)this._document?.addEventListener(t,this._onInteraction,qe)})}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);for(let i of Je)this._document?.removeEventListener(i,this._onInteraction,qe)}configureRipple(t,i){t.setAttribute(le,""),(i.className||!t.hasAttribute(he))&&t.setAttribute(he,i.className||""),i.centered&&t.setAttribute(et,""),i.disabled&&t.setAttribute(G,"")}getRipple(t){return this._hosts.get(t)||this._createRipple(t)}setDisabled(t,i){let o=this._hosts.get(t);if(o){o.disabled=i;return}i?t.setAttribute(G,""):t.removeAttribute(G)}_createRipple(t){if(!this._document)return;let i=this._hosts.get(t);if(i)return i;t.querySelector(".mat-ripple")?.remove();let o=this._document.createElement("span");o.classList.add("mat-ripple",t.getAttribute(he)),t.append(o);let r=new $t(new w(o),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return r._isInitialized=!0,r.trigger=t,r.centered=t.hasAttribute(et),r.disabled=t.hasAttribute(G),this.attachRipple(t,r),r}attachRipple(t,i){t.removeAttribute(le),this._hosts.set(t,i)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.ngOnDestroy(),this._hosts.delete(t))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{p as a,F as b,Xt as c,Fe as d,D as e,Le as f,qt as g,ot as h,ie as i,ti as j,C as k,Ui as l,oe as m,re as n,kt as o,Vi as p,Hi as q,Ji as r,ce as s,$e as t,ze as u,Z as v,Pt as w,Hn as x,Ht as y,Kn as z,Wn as A};
