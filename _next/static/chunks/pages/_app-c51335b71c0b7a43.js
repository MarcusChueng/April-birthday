(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3310:function(e,t,n){"use strict";n.d(t,{LB:function(){return e4},MA:function(){return ej},LO:function(){return eF},O1:function(){return tt},Zj:function(){return tr},VT:function(){return en},Dy:function(){return er}});var r,l,i,a,o,u,s,c,d,h,f,g,p,v,b,m,y,w,x,D,E=n(7294),C=n(3935);let S="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function M(e){let t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function R(e){return"nodeType"in e}function k(e){var t,n;return e?M(e)?e:R(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function T(e){let{Document:t}=k(e);return e instanceof t}function O(e){return!M(e)&&e instanceof k(e).HTMLElement}function L(e){return e instanceof k(e).SVGElement}function N(e){return e?M(e)?e.document:R(e)?T(e)?e:O(e)||L(e)?e.ownerDocument:document:document:document}let A=S?E.useLayoutEffect:E.useEffect;function P(e){let t=(0,E.useRef)(e);return A(()=>{t.current=e}),(0,E.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}function B(e,t){void 0===t&&(t=[e]);let n=(0,E.useRef)(e);return A(()=>{n.current!==e&&(n.current=e)},t),n}function z(e,t){let n=(0,E.useRef)();return(0,E.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function j(e){let t=P(e),n=(0,E.useRef)(null),r=(0,E.useCallback)(e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e},[]);return[n,r]}function I(e){let t=(0,E.useRef)();return(0,E.useEffect)(()=>{t.current=e},[e]),t.current}let F={};function _(e,t){return(0,E.useMemo)(()=>{if(t)return t;let n=null==F[e]?0:F[e]+1;return F[e]=n,e+"-"+n},[e,t])}function U(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];return r.reduce((t,n)=>{let r=Object.entries(n);for(let[n,l]of r){let r=t[n];null!=r&&(t[n]=r+e*l)}return t},{...t})}}let K=U(1),X=U(-1);function W(e){if(!e)return!1;let{KeyboardEvent:t}=k(e.target);return t&&e instanceof t}function Y(e){if(function(e){if(!e)return!1;let{TouchEvent:t}=k(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return"clientX"in e&&"clientY"in e?{x:e.clientX,y:e.clientY}:null}let V=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[V.Translate.toString(e),V.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),H="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",J={display:"none"};function q(e){let{id:t,value:n}=e;return E.createElement("div",{id:t,style:J},n)}function G(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return E.createElement("div",{id:t,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}let Z=(0,E.createContext)(null),Q={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},$={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ee(e){let{announcements:t=$,container:n,hiddenTextDescribedById:r,screenReaderInstructions:l=Q}=e,{announce:i,announcement:a}=function(){let[e,t]=(0,E.useState)(""),n=(0,E.useCallback)(e=>{null!=e&&t(e)},[]);return{announce:n,announcement:e}}(),o=_("DndLiveRegion"),[u,s]=(0,E.useState)(!1);if((0,E.useEffect)(()=>{s(!0)},[]),!function(e){let t=(0,E.useContext)(Z);(0,E.useEffect)(()=>{if(!t)throw Error("useDndMonitor must be used within a children of <DndContext>");let n=t(e);return n},[e,t])}((0,E.useMemo)(()=>({onDragStart(e){let{active:n}=e;i(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&i(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;i(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;i(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;i(t.onDragCancel({active:n,over:r}))}}),[i,t])),!u)return null;let c=E.createElement(E.Fragment,null,E.createElement(q,{id:r,value:l.draggable}),E.createElement(G,{id:o,announcement:a}));return n?(0,C.createPortal)(c,n):c}function et(){}function en(e,t){return(0,E.useMemo)(()=>({sensor:e,options:null!=t?t:{}}),[e,t])}function er(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,E.useMemo)(()=>[...t].filter(e=>null!=e),[...t])}(r=f||(f={})).DragStart="dragStart",r.DragMove="dragMove",r.DragEnd="dragEnd",r.DragCancel="dragCancel",r.DragOver="dragOver",r.RegisterDroppable="registerDroppable",r.SetDroppableDisabled="setDroppableDisabled",r.UnregisterDroppable="unregisterDroppable";let el=Object.freeze({x:0,y:0});function ei(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}let ea=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,l=[];for(let e of r){let{id:r}=e,i=n.get(r);if(i){let n=function(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),l=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height);if(r<l&&n<i){let a=t.width*t.height,o=e.width*e.height,u=(l-r)*(i-n);return Number((u/(a+o-u)).toFixed(4))}return 0}(i,t);n>0&&l.push({id:r,data:{droppableContainer:e,value:n}})}}return l.sort(ei)};function eo(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:el}let eu=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((e,t)=>({...e,top:e.top+1*t.y,bottom:e.bottom+1*t.y,left:e.left+1*t.x,right:e.right+1*t.x}),{...e})},es={ignoreTransform:!1};function ec(e,t){void 0===t&&(t=es);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=k(e).getComputedStyle(e);t&&(n=function(e,t,n){let r=function(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;let{scaleX:l,scaleY:i,x:a,y:o}=r,u=e.left-a-(1-l)*parseFloat(n),s=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),c=l?e.width/l:e.width,d=i?e.height/i:e.height;return{width:c,height:d,top:s,right:u+c,bottom:s+d,left:u}}(n,t,r))}let{top:r,left:l,width:i,height:a,bottom:o,right:u}=n;return{top:r,left:l,width:i,height:a,bottom:o,right:u}}function ed(e){return ec(e,{ignoreTransform:!0})}function eh(e,t){let n=[];return e?function r(l){var i;if(null!=t&&n.length>=t||!l)return n;if(T(l)&&null!=l.scrollingElement&&!n.includes(l.scrollingElement))return n.push(l.scrollingElement),n;if(!O(l)||L(l)||n.includes(l))return n;let a=k(e).getComputedStyle(l);return(l!==e&&function(e,t){void 0===t&&(t=k(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{let r=t[e];return"string"==typeof r&&n.test(r)})}(l,a)&&n.push(l),void 0===(i=a)&&(i=k(l).getComputedStyle(l)),"fixed"===i.position)?n:r(l.parentNode)}(e):n}function ef(e){let[t]=eh(e,1);return null!=t?t:null}function eg(e){return S&&e?M(e)?e:R(e)?T(e)||e===N(e).scrollingElement?window:O(e)?e:null:null:null}function ep(e){return M(e)?e.scrollX:e.scrollLeft}function ev(e){return M(e)?e.scrollY:e.scrollTop}function eb(e){return{x:ep(e),y:ev(e)}}function em(e){return!!S&&!!e&&e===document.scrollingElement}function ey(e){let t={x:0,y:0},n=em(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},l=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,a=e.scrollTop>=r.y,o=e.scrollLeft>=r.x;return{isTop:l,isLeft:i,isBottom:a,isRight:o,maxScroll:r,minScroll:t}}(l=g||(g={}))[l.Forward=1]="Forward",l[l.Backward=-1]="Backward";let ew={x:.2,y:.2};function ex(e){return e.reduce((e,t)=>K(e,eb(t)),el)}let eD=[["x",["left","right"],function(e){return e.reduce((e,t)=>e+ep(t),0)}],["y",["top","bottom"],function(e){return e.reduce((e,t)=>e+ev(t),0)}]];class eE{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=eh(t),r=ex(n);for(let[t,l,i]of(this.rect={...e},this.width=e.width,this.height=e.height,eD))for(let e of l)Object.defineProperty(this,e,{get:()=>{let l=i(n),a=r[t]-l;return this.rect[e]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class eC{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)})},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function eS(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}function eM(e){e.preventDefault()}function eR(e){e.stopPropagation()}(i=p||(p={})).Click="click",i.DragStart="dragstart",i.Keydown="keydown",i.ContextMenu="contextmenu",i.Resize="resize",i.SelectionChange="selectionchange",i.VisibilityChange="visibilitychange",(a=v||(v={})).Space="Space",a.Down="ArrowDown",a.Right="ArrowRight",a.Left="ArrowLeft",a.Up="ArrowUp",a.Esc="Escape",a.Enter="Enter",a.Tab="Tab";let ek={start:[v.Space,v.Enter],cancel:[v.Esc],end:[v.Space,v.Enter,v.Tab]},eT=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case v.Right:return{...n,x:n.x+25};case v.Left:return{...n,x:n.x-25};case v.Down:return{...n,y:n.y+25};case v.Up:return{...n,y:n.y-25}}};class eO{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new eC(N(t)),this.windowListeners=new eC(k(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(p.Resize,this.handleCancel),this.windowListeners.add(p.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(p.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=ec),!e)return;let{top:n,left:r,bottom:l,right:i}=t(e),a=ef(e);a&&(l<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(el)}handleKeyDown(e){if(W(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:l=ek,coordinateGetter:i=eT,scrollBehavior:a="smooth"}=r,{code:o}=e;if(l.end.includes(o)){this.handleEnd(e);return}if(l.cancel.includes(o)){this.handleCancel(e);return}let{collisionRect:u}=n.current,s=u?{x:u.left,y:u.top}:el;this.referenceCoordinates||(this.referenceCoordinates=s);let c=i(e,{active:t,context:n.current,currentCoordinates:s});if(c){let t=X(c,s),r={x:0,y:0},{scrollableAncestors:l}=n.current;for(let n of l){let l=e.code,{isTop:i,isRight:o,isLeft:u,isBottom:s,maxScroll:d,minScroll:h}=ey(n),f=function(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:l}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:l,width:e.clientWidth,height:e.clientHeight}}(n),g={x:Math.min(l===v.Right?f.right-f.width/2:f.right,Math.max(l===v.Right?f.left:f.left+f.width/2,c.x)),y:Math.min(l===v.Down?f.bottom-f.height/2:f.bottom,Math.max(l===v.Down?f.top:f.top+f.height/2,c.y))},p=l===v.Right&&!o||l===v.Left&&!u,b=l===v.Down&&!s||l===v.Up&&!i;if(p&&g.x!==c.x){let e=n.scrollLeft+t.x,i=l===v.Right&&e<=d.x||l===v.Left&&e>=h.x;if(i&&!t.y){n.scrollTo({left:e,behavior:a});return}i?r.x=n.scrollLeft-e:r.x=l===v.Right?n.scrollLeft-d.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(b&&g.y!==c.y){let e=n.scrollTop+t.y,i=l===v.Down&&e<=d.y||l===v.Up&&e>=h.y;if(i&&!t.x){n.scrollTo({top:e,behavior:a});return}i?r.y=n.scrollTop-e:r.y=l===v.Down?n.scrollTop-d.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,K(X(c,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}function eL(e){return!!(e&&"distance"in e)}function eN(e){return!!(e&&"delay"in e)}eO.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=ek,onActivation:l}=t,{active:i}=n,{code:a}=e.nativeEvent;if(r.start.includes(a)){let t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==l||l({event:e.nativeEvent}),!0)}return!1}}];class eA{constructor(e,t,n){var r;void 0===n&&(n=function(e){let{EventTarget:t}=k(e);return e instanceof t?e:N(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:l}=e,{target:i}=l;this.props=e,this.events=t,this.document=N(i),this.documentListeners=new eC(this.document),this.listeners=new eC(n),this.windowListeners=new eC(k(i)),this.initialCoordinates=null!=(r=Y(l))?r:el,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(p.Resize,this.handleCancel),this.windowListeners.add(p.DragStart,eM),this.windowListeners.add(p.VisibilityChange,this.handleCancel),this.windowListeners.add(p.ContextMenu,eM),this.documentListeners.add(p.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(eN(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(eL(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(p.Click,eR,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(p.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;let{activated:n,initialCoordinates:r,props:l}=this,{onMove:i,options:{activationConstraint:a}}=l;if(!r)return;let o=null!=(t=Y(e))?t:el,u=X(r,o);if(!n&&a){if(eL(a)){if(null!=a.tolerance&&eS(u,a.tolerance))return this.handleCancel();if(eS(u,a.distance))return this.handleStart()}return eN(a)&&eS(u,a.tolerance)?this.handleCancel():void this.handlePending(a,u)}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===v.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}let eP={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class eB extends eA{constructor(e){let{event:t}=e,n=N(t.target);super(e,eP,n)}}eB.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!!n.isPrimary&&0===n.button&&(null==r||r({event:n}),!0)}}];let ez={move:{name:"mousemove"},end:{name:"mouseup"}};(o=b||(b={}))[o.RightClick=2]="RightClick";class ej extends eA{constructor(e){super(e,ez,N(e.event.target))}}ej.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==b.RightClick&&(null==r||r({event:n}),!0)}}];let eI={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class eF extends eA{constructor(e){super(e,eI)}static setup(){return window.addEventListener(eI.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(eI.move.name,e)};function e(){}}}eF.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:l}=n;return!(l.length>1)&&(null==r||r({event:n}),!0)}}],(u=m||(m={}))[u.Pointer=0]="Pointer",u[u.DraggableRect=1]="DraggableRect",(s=y||(y={}))[s.TreeOrder=0]="TreeOrder",s[s.ReversedTreeOrder=1]="ReversedTreeOrder";let e_={x:{[g.Backward]:!1,[g.Forward]:!1},y:{[g.Backward]:!1,[g.Forward]:!1}};(c=w||(w={}))[c.Always=0]="Always",c[c.BeforeDragging=1]="BeforeDragging",c[c.WhileDragging=2]="WhileDragging",(x||(x={})).Optimized="optimized";let eU=new Map;function eK(e,t){return z(n=>e?n||("function"==typeof t?t(e):e):null,[t,e])}function eX(e){let{callback:t,disabled:n}=e,r=P(t),l=(0,E.useMemo)(()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,E.useEffect)(()=>()=>null==l?void 0:l.disconnect(),[l]),l}function eW(e){return new eE(ec(e),e)}function eY(e,t,n){void 0===t&&(t=eW);let[r,l]=(0,E.useState)(null);function i(){l(r=>{if(!e)return null;if(!1===e.isConnected){var l;return null!=(l=null!=r?r:n)?l:null}let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let a=function(e){let{callback:t,disabled:n}=e,r=P(t),l=(0,E.useMemo)(()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,E.useEffect)(()=>()=>null==l?void 0:l.disconnect(),[l]),l}({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){i();break}}}}),o=eX({callback:i});return A(()=>{i(),e?(null==o||o.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==o||o.disconnect(),null==a||a.disconnect())},[e]),r}let eV=[];function eH(e,t){void 0===t&&(t=[]);let n=(0,E.useRef)(null);return(0,E.useEffect)(()=>{n.current=null},t),(0,E.useEffect)(()=>{let t=e!==el;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?X(e,n.current):el}function eJ(e){return(0,E.useMemo)(()=>e?function(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null,[e])}let eq=[],eG=[{sensor:eB,options:{}},{sensor:eO,options:{}}],eZ={current:{}},eQ={draggable:{measure:ed},droppable:{measure:ed,strategy:w.WhileDragging,frequency:x.Optimized},dragOverlay:{measure:ec}};class e$ extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}let e0={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new e$,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:et},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:eQ,measureDroppableContainers:et,windowRect:null,measuringScheduled:!1},e1={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:et,draggableNodes:new Map,over:null,measureDroppableContainers:et},e2=(0,E.createContext)(e1),e5=(0,E.createContext)(e0);function e3(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new e$}}}function e9(e,t){switch(t.type){case f.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case f.DragMove:if(null==e.draggable.active)return e;return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case f.DragEnd:case f.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case f.RegisterDroppable:{let{element:n}=t,{id:r}=n,l=new e$(e.droppable.containers);return l.set(r,n),{...e,droppable:{...e.droppable,containers:l}}}case f.SetDroppableDisabled:{let{id:n,key:r,disabled:l}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new e$(e.droppable.containers);return a.set(n,{...i,disabled:l}),{...e,droppable:{...e.droppable,containers:a}}}case f.UnregisterDroppable:{let{id:n,key:r}=t,l=e.droppable.containers.get(n);if(!l||r!==l.key)return e;let i=new e$(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function e7(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:l}=(0,E.useContext)(e2),i=I(r),a=I(null==n?void 0:n.id);return(0,E.useEffect)(()=>{if(!t&&!r&&i&&null!=a){if(!W(i)||document.activeElement===i.target)return;let e=l.get(a);if(!e)return;let{activatorNode:t,node:n}=e;(t.current||n.current)&&requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=e.matches(H)?e:e.querySelector(H);if(t){t.focus();break}}})}},[r,t,l,a,i]),null}let e8=(0,E.createContext)({...el,scaleX:1,scaleY:1});(d=D||(D={}))[d.Uninitialized=0]="Uninitialized",d[d.Initializing=1]="Initializing",d[d.Initialized=2]="Initialized";let e4=(0,E.memo)(function(e){var t,n,r,l,i;let{id:a,accessibility:o,autoScroll:u=!0,children:s,sensors:c=eG,collisionDetection:d=ea,measuring:h,modifiers:p,...v}=e,b=(0,E.useReducer)(e9,void 0,e3),[x,M]=b,[R,T]=function(){let[e]=(0,E.useState)(()=>new Set),t=(0,E.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]),n=(0,E.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)})},[e]);return[n,t]}(),[L,N]=(0,E.useState)(D.Uninitialized),P=L===D.Initialized,{draggable:{active:F,nodes:U,translate:X},droppable:{containers:W}}=x,V=null!=F?U.get(F):null,H=(0,E.useRef)({initial:null,translated:null}),J=(0,E.useMemo)(()=>{var e;return null!=F?{id:F,data:null!=(e=null==V?void 0:V.data)?e:eZ,rect:H}:null},[F,V]),q=(0,E.useRef)(null),[G,Q]=(0,E.useState)(null),[$,et]=(0,E.useState)(null),en=B(v,Object.values(v)),er=_("DndDescribedBy",a),ei=(0,E.useMemo)(()=>W.getEnabled(),[W]),es=(0,E.useMemo)(()=>({draggable:{...eQ.draggable,...null==h?void 0:h.draggable},droppable:{...eQ.droppable,...null==h?void 0:h.droppable},dragOverlay:{...eQ.dragOverlay,...null==h?void 0:h.dragOverlay}}),[null==h?void 0:h.draggable,null==h?void 0:h.droppable,null==h?void 0:h.dragOverlay]),{droppableRects:ed,measureDroppableContainers:ep,measuringScheduled:ev}=function(e,t){let{dragging:n,dependencies:r,config:l}=t,[i,a]=(0,E.useState)(null),{frequency:o,measure:u,strategy:s}=l,c=(0,E.useRef)(e),d=function(){switch(s){case w.Always:return!1;case w.BeforeDragging:return n;default:return!n}}(),h=B(d),f=(0,E.useCallback)(function(e){void 0===e&&(e=[]),h.current||a(t=>null===t?e:t.concat(e.filter(e=>!t.includes(e))))},[h]),g=(0,E.useRef)(null),p=z(t=>{if(d&&!n)return eU;if(!t||t===eU||c.current!==e||null!=i){let t=new Map;for(let n of e){if(!n)continue;if(i&&i.length>0&&!i.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new eE(u(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,i,n,d,u]);return(0,E.useEffect)(()=>{c.current=e},[e]),(0,E.useEffect)(()=>{d||f()},[n,d]),(0,E.useEffect)(()=>{i&&i.length>0&&a(null)},[JSON.stringify(i)]),(0,E.useEffect)(()=>{d||"number"!=typeof o||null!==g.current||(g.current=setTimeout(()=>{f(),g.current=null},o))},[o,d,f,...r]),{droppableRects:p,measureDroppableContainers:f,measuringScheduled:null!=i}}(ei,{dragging:P,dependencies:[X.x,X.y],config:es.droppable}),eD=function(e,t){let n=null!=t?e.get(t):void 0,r=n?n.node.current:null;return z(e=>{var n;return null==t?null:null!=(n=null!=r?r:e)?n:null},[r,t])}(U,F),eC=(0,E.useMemo)(()=>$?Y($):null,[$]),eS=function(){let e=(null==G?void 0:G.autoScrollEnabled)===!1,t="object"==typeof u?!1===u.enabled:!1===u,n=P&&!e&&!t;return"object"==typeof u?{...u,enabled:n}:{enabled:n}}(),eM=eK(eD,es.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:l=!0}=e,i=(0,E.useRef)(!1),{x:a,y:o}="boolean"==typeof l?{x:l,y:l}:l;A(()=>{let e=!a&&!o;if(e||!t){i.current=!1;return}if(i.current||!r)return;let l=null==t?void 0:t.node.current;if(!l||!1===l.isConnected)return;let u=n(l),s=eo(u,r);if(a||(s.x=0),o||(s.y=0),i.current=!0,Math.abs(s.x)>0||Math.abs(s.y)>0){let e=ef(l);e&&e.scrollBy({top:s.y,left:s.x})}},[t,a,o,r,n])}({activeNode:null!=F?U.get(F):null,config:eS.layoutShiftCompensation,initialRect:eM,measure:es.draggable.measure});let eR=eY(eD,es.draggable.measure,eM),ek=eY(eD?eD.parentElement:null),eT=(0,E.useRef)({activatorEvent:null,active:null,activeNode:eD,collisionRect:null,collisions:null,droppableRects:ed,draggableNodes:U,draggingNode:null,draggingNodeRect:null,droppableContainers:W,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),eO=W.getNodeFor(null==(t=eT.current.over)?void 0:t.id),eL=function(e){let{measure:t}=e,[n,r]=(0,E.useState)(null),l=(0,E.useCallback)(e=>{for(let{target:n}of e)if(O(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t]),i=eX({callback:l}),a=(0,E.useCallback)(e=>{let n=function(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return O(t)?t:e}(e);null==i||i.disconnect(),n&&(null==i||i.observe(n)),r(n?t(n):null)},[t,i]),[o,u]=j(a);return(0,E.useMemo)(()=>({nodeRef:o,rect:n,setRef:u}),[n,o,u])}({measure:es.dragOverlay.measure}),eN=null!=(n=eL.nodeRef.current)?n:eD,eA=P?null!=(r=eL.rect)?r:eR:null,eP=!!(eL.nodeRef.current&&eL.rect),eB=function(e){let t=eK(e);return eo(e,t)}(eP?null:eR),ez=eJ(eN?k(eN):null),ej=function(e){let t=(0,E.useRef)(e),n=z(n=>e?n&&n!==eV&&e&&t.current&&e.parentNode===t.current.parentNode?n:eh(e):eV,[e]);return(0,E.useEffect)(()=>{t.current=e},[e]),n}(P?null!=eO?eO:eD:null),eI=function(e,t){void 0===t&&(t=ec);let[n]=e,r=eJ(n?k(n):null),[l,i]=(0,E.useState)(eq);function a(){i(()=>e.length?e.map(e=>em(e)?r:new eE(t(e),e)):eq)}let o=eX({callback:a});return A(()=>{null==o||o.disconnect(),a(),e.forEach(e=>null==o?void 0:o.observe(e))},[e]),l}(ej),eF=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}(p,{transform:{x:X.x-eB.x,y:X.y-eB.y,scaleX:1,scaleY:1},activatorEvent:$,active:J,activeNodeRect:eR,containerNodeRect:ek,draggingNodeRect:eA,over:eT.current.over,overlayNodeRect:eL.rect,scrollableAncestors:ej,scrollableAncestorRects:eI,windowRect:ez}),eW=eC?K(eC,X):null,e$=function(e){let[t,n]=(0,E.useState)(null),r=(0,E.useRef)(e),l=(0,E.useCallback)(e=>{let t=eg(e.target);t&&n(e=>e?(e.set(t,eb(t)),new Map(e)):null)},[]);return(0,E.useEffect)(()=>{let t=r.current;if(e!==t){i(t);let a=e.map(e=>{let t=eg(e);return t?(t.addEventListener("scroll",l,{passive:!0}),[t,eb(t)]):null}).filter(e=>null!=e);n(a.length?new Map(a):null),r.current=e}return()=>{i(e),i(t)};function i(e){e.forEach(e=>{let t=eg(e);null==t||t.removeEventListener("scroll",l)})}},[l,e]),(0,E.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>K(e,t),el):ex(e):el,[e,t])}(ej),e0=eH(e$),e1=eH(e$,[eR]),e4=K(eF,e0),e6=eA?eu(eA,eF):null,te=J&&e6?d({active:J,collisionRect:e6,droppableRects:ed,droppableContainers:ei,pointerCoordinates:eW}):null,tt=function(e,t){if(!e||0===e.length)return null;let[n]=e;return t?n[t]:n}(te,"id"),[tn,tr]=(0,E.useState)(null),tl=eP?eF:K(eF,e1),ti=(i=null!=(l=null==tn?void 0:tn.rect)?l:null,{...tl,scaleX:i&&eR?i.width/eR.width:1,scaleY:i&&eR?i.height/eR.height:1}),ta=(0,E.useRef)(null),to=(0,E.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(null==q.current)return;let l=U.get(q.current);if(!l)return;let i=e.nativeEvent,a=new n({active:q.current,activeNode:l,event:i,options:r,context:eT,onAbort(e){let t=U.get(e);if(!t)return;let{onDragAbort:n}=en.current,r={id:e};null==n||n(r),R({type:"onDragAbort",event:r})},onPending(e,t,n,r){let l=U.get(e);if(!l)return;let{onDragPending:i}=en.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};null==i||i(a),R({type:"onDragPending",event:a})},onStart(e){let t=q.current;if(null==t)return;let n=U.get(t);if(!n)return;let{onDragStart:r}=en.current,l={activatorEvent:i,active:{id:t,data:n.data,rect:H}};(0,C.unstable_batchedUpdates)(()=>{null==r||r(l),N(D.Initializing),M({type:f.DragStart,initialCoordinates:e,active:t}),R({type:"onDragStart",event:l}),Q(ta.current),et(i)})},onMove(e){M({type:f.DragMove,coordinates:e})},onEnd:o(f.DragEnd),onCancel:o(f.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:l}=eT.current,a=null;if(t&&l){let{cancelDrop:o}=en.current;if(a={activatorEvent:i,active:t,collisions:n,delta:l,over:r},e===f.DragEnd&&"function"==typeof o){let t=await Promise.resolve(o(a));t&&(e=f.DragCancel)}}q.current=null,(0,C.unstable_batchedUpdates)(()=>{M({type:e}),N(D.Uninitialized),tr(null),Q(null),et(null),ta.current=null;let t=e===f.DragEnd?"onDragEnd":"onDragCancel";if(a){let e=en.current[t];null==e||e(a),R({type:t,event:a})}})}}ta.current=a},[U]),tu=(0,E.useCallback)((e,t)=>(n,r)=>{let l=n.nativeEvent,i=U.get(r);if(null!==q.current||!i||l.dndKit||l.defaultPrevented)return;let a=e(n,t.options,{active:i});!0===a&&(l.dndKit={capturedBy:t.sensor},q.current=r,to(n,t))},[U,to]),ts=(0,E.useMemo)(()=>c.reduce((e,t)=>{let{sensor:n}=t,r=n.activators.map(e=>({eventName:e.eventName,handler:tu(e.handler,t)}));return[...e,...r]},[]),[c,tu]);(0,E.useEffect)(()=>{if(!S)return;let e=c.map(e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()});return()=>{for(let t of e)null==t||t()}},c.map(e=>{let{sensor:t}=e;return t})),A(()=>{eR&&L===D.Initializing&&N(D.Initialized)},[eR,L]),(0,E.useEffect)(()=>{let{onDragMove:e}=en.current,{active:t,activatorEvent:n,collisions:r,over:l}=eT.current;if(!t||!n)return;let i={active:t,activatorEvent:n,collisions:r,delta:{x:e4.x,y:e4.y},over:l};(0,C.unstable_batchedUpdates)(()=>{null==e||e(i),R({type:"onDragMove",event:i})})},[e4.x,e4.y]),(0,E.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:l}=eT.current;if(!e||null==q.current||!t||!l)return;let{onDragOver:i}=en.current,a=r.get(tt),o=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,u={active:e,activatorEvent:t,collisions:n,delta:{x:l.x,y:l.y},over:o};(0,C.unstable_batchedUpdates)(()=>{tr(o),null==i||i(u),R({type:"onDragOver",event:u})})},[tt]),A(()=>{eT.current={activatorEvent:$,active:J,activeNode:eD,collisionRect:e6,collisions:te,droppableRects:ed,draggableNodes:U,draggingNode:eN,draggingNodeRect:eA,droppableContainers:W,over:tn,scrollableAncestors:ej,scrollAdjustedTranslate:e4},H.current={initial:eA,translated:e6}},[J,eD,te,e6,U,eN,eA,ed,W,tn,ej,e4]),function(e){let{acceleration:t,activator:n=m.Pointer,canScroll:r,draggingRect:l,enabled:i,interval:a=5,order:o=y.TreeOrder,pointerCoordinates:u,scrollableAncestors:s,scrollableAncestorRects:c,delta:d,threshold:h}=e,f=function(e){let{delta:t,disabled:n}=e,r=I(t);return z(e=>{if(n||!r||!e)return e_;let l={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[g.Backward]:e.x[g.Backward]||-1===l.x,[g.Forward]:e.x[g.Forward]||1===l.x},y:{[g.Backward]:e.y[g.Backward]||-1===l.y,[g.Forward]:e.y[g.Forward]||1===l.y}}},[n,t,r])}({delta:d,disabled:!i}),[p,v]=function(){let e=(0,E.useRef)(null),t=(0,E.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),n=(0,E.useCallback)(()=>{null!==e.current&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}(),b=(0,E.useRef)({x:0,y:0}),w=(0,E.useRef)({x:0,y:0}),x=(0,E.useMemo)(()=>{switch(n){case m.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case m.DraggableRect:return l}},[n,l,u]),D=(0,E.useRef)(null),C=(0,E.useCallback)(()=>{let e=D.current;if(!e)return;let t=b.current.x*w.current.x,n=b.current.y*w.current.y;e.scrollBy(t,n)},[]),S=(0,E.useMemo)(()=>o===y.TreeOrder?[...s].reverse():s,[o,s]);(0,E.useEffect)(()=>{if(!i||!s.length||!x){v();return}for(let e of S){if((null==r?void 0:r(e))===!1)continue;let n=s.indexOf(e),l=c[n];if(!l)continue;let{direction:i,speed:o}=function(e,t,n,r,l){let{top:i,left:a,right:o,bottom:u}=n;void 0===r&&(r=10),void 0===l&&(l=ew);let{isTop:s,isBottom:c,isLeft:d,isRight:h}=ey(e),f={x:0,y:0},p={x:0,y:0},v={height:t.height*l.y,width:t.width*l.x};return!s&&i<=t.top+v.height?(f.y=g.Backward,p.y=r*Math.abs((t.top+v.height-i)/v.height)):!c&&u>=t.bottom-v.height&&(f.y=g.Forward,p.y=r*Math.abs((t.bottom-v.height-u)/v.height)),!h&&o>=t.right-v.width?(f.x=g.Forward,p.x=r*Math.abs((t.right-v.width-o)/v.width)):!d&&a<=t.left+v.width&&(f.x=g.Backward,p.x=r*Math.abs((t.left+v.width-a)/v.width)),{direction:f,speed:p}}(e,l,x,t,h);for(let e of["x","y"])f[e][i[e]]||(o[e]=0,i[e]=0);if(o.x>0||o.y>0){v(),D.current=e,p(C,a),b.current=o,w.current=i;return}}b.current={x:0,y:0},w.current={x:0,y:0},v()},[t,C,r,v,i,a,JSON.stringify(x),JSON.stringify(f),p,s,S,c,JSON.stringify(h)])}({...eS,delta:X,draggingRect:e6,pointerCoordinates:eW,scrollableAncestors:ej,scrollableAncestorRects:eI});let tc=(0,E.useMemo)(()=>({active:J,activeNode:eD,activeNodeRect:eR,activatorEvent:$,collisions:te,containerNodeRect:ek,dragOverlay:eL,draggableNodes:U,droppableContainers:W,droppableRects:ed,over:tn,measureDroppableContainers:ep,scrollableAncestors:ej,scrollableAncestorRects:eI,measuringConfiguration:es,measuringScheduled:ev,windowRect:ez}),[J,eD,eR,$,te,ek,eL,U,W,ed,tn,ep,ej,eI,es,ev,ez]),td=(0,E.useMemo)(()=>({activatorEvent:$,activators:ts,active:J,activeNodeRect:eR,ariaDescribedById:{draggable:er},dispatch:M,draggableNodes:U,over:tn,measureDroppableContainers:ep}),[$,ts,J,eR,M,er,U,tn,ep]);return E.createElement(Z.Provider,{value:T},E.createElement(e2.Provider,{value:td},E.createElement(e5.Provider,{value:tc},E.createElement(e8.Provider,{value:ti},s)),E.createElement(e7,{disabled:(null==o?void 0:o.restoreFocus)===!1})),E.createElement(ee,{...o,hiddenTextDescribedById:er}))}),e6=(0,E.createContext)(null),te="button";function tt(e){let{id:t,data:n,disabled:r=!1,attributes:l}=e,i=_("Draggable"),{activators:a,activatorEvent:o,active:u,activeNodeRect:s,ariaDescribedById:c,draggableNodes:d,over:h}=(0,E.useContext)(e2),{role:f=te,roleDescription:g="draggable",tabIndex:p=0}=null!=l?l:{},v=(null==u?void 0:u.id)===t,b=(0,E.useContext)(v?e8:e6),[m,y]=j(),[w,x]=j(),D=(0,E.useMemo)(()=>a.reduce((e,n)=>{let{eventName:r,handler:l}=n;return e[r]=e=>{l(e,t)},e},{}),[a,t]),C=B(n);A(()=>(d.set(t,{id:t,key:i,node:m,activatorNode:w,data:C}),()=>{let e=d.get(t);e&&e.key===i&&d.delete(t)}),[d,t]);let S=(0,E.useMemo)(()=>({role:f,tabIndex:p,"aria-disabled":r,"aria-pressed":!!v&&f===te||void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[r,f,p,v,g,c.draggable]);return{active:u,activatorEvent:o,activeNodeRect:s,attributes:S,isDragging:v,listeners:r?void 0:D,node:m,over:h,setNodeRef:y,setActivatorNodeRef:x,transform:b}}let tn={timeout:25};function tr(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:l}=e,i=_("Droppable"),{active:a,dispatch:o,over:u,measureDroppableContainers:s}=(0,E.useContext)(e2),c=(0,E.useRef)({disabled:n}),d=(0,E.useRef)(!1),h=(0,E.useRef)(null),g=(0,E.useRef)(null),{disabled:p,updateMeasurementsFor:v,timeout:b}={...tn,...l},m=B(null!=v?v:r),y=(0,E.useCallback)(()=>{if(!d.current){d.current=!0;return}null!=g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{s(Array.isArray(m.current)?m.current:[m.current]),g.current=null},b)},[b]),w=eX({callback:y,disabled:p||!a}),x=(0,E.useCallback)((e,t)=>{w&&(t&&(w.unobserve(t),d.current=!1),e&&w.observe(e))},[w]),[D,C]=j(x),S=B(t);return(0,E.useEffect)(()=>{w&&D.current&&(w.disconnect(),d.current=!1,w.observe(D.current))},[D,w]),(0,E.useEffect)(()=>(o({type:f.RegisterDroppable,element:{id:r,key:i,disabled:n,node:D,rect:h,data:S}}),()=>o({type:f.UnregisterDroppable,key:i,id:r})),[r]),(0,E.useEffect)(()=>{n!==c.current.disabled&&(o({type:f.SetDroppableDisabled,id:r,key:i,disabled:n}),c.current.disabled=n)},[r,i,n,o]),{active:a,rect:h,isOver:(null==u?void 0:u.id)===r,node:D,over:u,setNodeRef:C}}h={styles:{active:{opacity:"0"}}},e=>{let{active:t,dragOverlay:n}=e,r={},{styles:l,className:i}=h;if(null!=l&&l.active)for(let[e,n]of Object.entries(l.active))void 0!==n&&(r[e]=t.node.style.getPropertyValue(e),t.node.style.setProperty(e,n));if(null!=l&&l.dragOverlay)for(let[e,t]of Object.entries(l.dragOverlay))void 0!==t&&n.node.style.setProperty(e,t);return null!=i&&i.active&&t.node.classList.add(i.active),null!=i&&i.dragOverlay&&n.node.classList.add(i.dragOverlay),function(){for(let[e,n]of Object.entries(r))t.node.style.setProperty(e,n);null!=i&&i.active&&t.node.classList.remove(i.active)}}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7219)}])},7219:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893);n(7952);let l=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var i=n(9008),a=n.n(i),o=n(7294),u=n(3310);function s(e){let{Component:t,pageProps:n}=e,[i,s]=(0,o.useState)("pc");(0,o.useEffect)(()=>{l()?s("mobile"):s("pc")},[]);let c=(0,u.VT)(u.MA),d=(0,u.VT)(u.LO),h=(0,u.Dy)(c,d);return(0,r.jsxs)(u.LB,{sensors:h,children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"给璇璇姐的生日礼物！"})}),(0,r.jsx)(t,{...n})]})}},7952:function(){},9008:function(e,t,n){e.exports=n(2636)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);