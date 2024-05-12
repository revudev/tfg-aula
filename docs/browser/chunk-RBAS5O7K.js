import{a as g,k as S,s as p}from"./chunk-5ZWOYYOE.js";import{d as f}from"./chunk-VPJNKMGE.js";import{$ as c,C as v,F as w,G as l,Ua as u,aa as d,ea as o,j as _,la as h,m as a,r as m}from"./chunk-7P7IC7KT.js";var b=20,pe=(()=>{let i=class i{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new a,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=b){return this._platform.isBrowser?new _(t=>{this._globalSubscription||this._addGlobalListener();let r=e>0?this._scrolled.pipe(l(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):m()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(w(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,e)&&t.push(s)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=S(t),s=e.getElementRef().nativeElement;do if(r==s)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return v(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};i.\u0275fac=function(t){return new(t||i)(o(u),o(g),o(f,8))},i.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var x=20,_e=(()=>{let i=class i{constructor(e,t,r){this._platform=e,this._change=new a,this._changeListener=s=>{this._change.next(s)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){let s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,s=r.getBoundingClientRect(),R=-s.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,y=-s.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:R,left:y}}change(e=x){return e>0?this._change.pipe(l(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}};i.\u0275fac=function(t){return new(t||i)(o(g),o(u),o(f,8))},i.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var C=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h({type:i}),i.\u0275inj=d({});let n=i;return n})(),me=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h({type:i}),i.\u0275inj=d({imports:[p,C,p,C]});let n=i;return n})();export{pe as a,_e as b,C as c,me as d};
