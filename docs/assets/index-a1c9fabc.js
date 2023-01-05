(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function R(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(o){if(o.ep)return;o.ep=!0;const a=R(o);fetch(o.href,a)}})();const re={type:"change"},z={type:"start"},se={type:"end"};class Pe extends THREE.EventDispatcher{constructor(h,R){super(),this.object=h,this.domElement=R,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN},this.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",te),this._domElementKeyEvents=t},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(re),e.update(),a=o.NONE},this.update=function(){const t=new THREE.Vector3,n=new THREE.Quaternion().setFromUnitVectors(h.up,new THREE.Vector3(0,1,0)),s=n.clone().invert(),c=new THREE.Vector3,E=new THREE.Quaternion,O=2*Math.PI;return function(){const ie=e.object.position;t.copy(ie).sub(e.target),t.applyQuaternion(n),r.setFromVector3(t),e.autoRotate&&a===o.NONE&&N(ce()),e.enableDamping?(r.theta+=f.theta*e.dampingFactor,r.phi+=f.phi*e.dampingFactor):(r.theta+=f.theta,r.phi+=f.phi);let y=e.minAzimuthAngle,M=e.maxAzimuthAngle;return isFinite(y)&&isFinite(M)&&(y<-Math.PI?y+=O:y>Math.PI&&(y-=O),M<-Math.PI?M+=O:M>Math.PI&&(M-=O),y<=M?r.theta=Math.max(y,Math.min(M,r.theta)):r.theta=r.theta>(y+M)/2?Math.max(y,r.theta):Math.min(M,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=A,r.radius=Math.max(e.minDistance,Math.min(e.maxDistance,r.radius)),e.enableDamping===!0?e.target.addScaledVector(T,e.dampingFactor):e.target.add(T),t.setFromSpherical(r),t.applyQuaternion(s),ie.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(f.theta*=1-e.dampingFactor,f.phi*=1-e.dampingFactor,T.multiplyScalar(1-e.dampingFactor)):(f.set(0,0,0),T.set(0,0,0)),A=1,x||c.distanceToSquared(e.object.position)>l||8*(1-E.dot(e.object.quaternion))>l?(e.dispatchEvent(re),c.copy(e.object.position),E.copy(e.object.quaternion),x=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",oe),e.domElement.removeEventListener("pointerdown",J),e.domElement.removeEventListener("pointercancel",$),e.domElement.removeEventListener("wheel",ee),e.domElement.removeEventListener("pointermove",Y),e.domElement.removeEventListener("pointerup",U),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",te)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const l=1e-6,r=new THREE.Spherical,f=new THREE.Spherical;let A=1;const T=new THREE.Vector3;let x=!1;const b=new THREE.Vector2,p=new THREE.Vector2,m=new THREE.Vector2,u=new THREE.Vector2,d=new THREE.Vector2,g=new THREE.Vector2,H=new THREE.Vector2,P=new THREE.Vector2,S=new THREE.Vector2,i=[],D={};function ce(){return 2*Math.PI/60/60*e.autoRotateSpeed}function j(){return Math.pow(.95,e.zoomSpeed)}function N(t){f.theta-=t}function I(t){f.phi-=t}const V=function(){const t=new THREE.Vector3;return function(s,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-s),T.add(t)}}(),_=function(){const t=new THREE.Vector3;return function(s,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(s),T.add(t)}}(),w=function(){const t=new THREE.Vector3;return function(s,c){const E=e.domElement;if(e.object.isPerspectiveCamera){const O=e.object.position;t.copy(O).sub(e.target);let k=t.length();k*=Math.tan(e.object.fov/2*Math.PI/180),V(2*s*k/E.clientHeight,e.object.matrix),_(2*c*k/E.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(V(s*(e.object.right-e.object.left)/e.object.zoom/E.clientWidth,e.object.matrix),_(c*(e.object.top-e.object.bottom)/e.object.zoom/E.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function C(t){e.object.isPerspectiveCamera?A/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),x=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function K(t){e.object.isPerspectiveCamera?A*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),x=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Z(t){b.set(t.clientX,t.clientY)}function le(t){H.set(t.clientX,t.clientY)}function v(t){u.set(t.clientX,t.clientY)}function pe(t){p.set(t.clientX,t.clientY),m.subVectors(p,b).multiplyScalar(e.rotateSpeed);const n=e.domElement;N(2*Math.PI*m.x/n.clientHeight),I(2*Math.PI*m.y/n.clientHeight),b.copy(p),e.update()}function ue(t){P.set(t.clientX,t.clientY),S.subVectors(P,H),S.y>0?C(j()):S.y<0&&K(j()),H.copy(P),e.update()}function de(t){d.set(t.clientX,t.clientY),g.subVectors(d,u).multiplyScalar(e.panSpeed),w(g.x,g.y),u.copy(d),e.update()}function fe(t){t.deltaY<0?K(j()):t.deltaY>0&&C(j()),e.update()}function me(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?I(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?I(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?N(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?N(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function X(){if(i.length===1)b.set(i[0].pageX,i[0].pageY);else{const t=.5*(i[0].pageX+i[1].pageX),n=.5*(i[0].pageY+i[1].pageY);b.set(t,n)}}function G(){if(i.length===1)u.set(i[0].pageX,i[0].pageY);else{const t=.5*(i[0].pageX+i[1].pageX),n=.5*(i[0].pageY+i[1].pageY);u.set(t,n)}}function W(){const t=i[0].pageX-i[1].pageX,n=i[0].pageY-i[1].pageY,s=Math.sqrt(t*t+n*n);H.set(0,s)}function he(){e.enableZoom&&W(),e.enablePan&&G()}function Ee(){e.enableZoom&&W(),e.enableRotate&&X()}function B(t){if(i.length==1)p.set(t.pageX,t.pageY);else{const s=F(t),c=.5*(t.pageX+s.x),E=.5*(t.pageY+s.y);p.set(c,E)}m.subVectors(p,b).multiplyScalar(e.rotateSpeed);const n=e.domElement;N(2*Math.PI*m.x/n.clientHeight),I(2*Math.PI*m.y/n.clientHeight),b.copy(p)}function q(t){if(i.length===1)d.set(t.pageX,t.pageY);else{const n=F(t),s=.5*(t.pageX+n.x),c=.5*(t.pageY+n.y);d.set(s,c)}g.subVectors(d,u).multiplyScalar(e.panSpeed),w(g.x,g.y),u.copy(d)}function Q(t){const n=F(t),s=t.pageX-n.x,c=t.pageY-n.y,E=Math.sqrt(s*s+c*c);P.set(0,E),S.set(0,Math.pow(P.y/H.y,e.zoomSpeed)),C(S.y),H.copy(P)}function Te(t){e.enableZoom&&Q(t),e.enablePan&&q(t)}function be(t){e.enableZoom&&Q(t),e.enableRotate&&B(t)}function J(t){e.enabled!==!1&&(i.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",Y),e.domElement.addEventListener("pointerup",U)),He(t),t.pointerType==="touch"?Me(t):ge(t))}function Y(t){e.enabled!==!1&&(t.pointerType==="touch"?Re(t):ye(t))}function U(t){ne(t),i.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",Y),e.domElement.removeEventListener("pointerup",U)),e.dispatchEvent(se),a=o.NONE}function $(t){ne(t)}function ge(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case THREE.MOUSE.DOLLY:if(e.enableZoom===!1)return;le(t),a=o.DOLLY;break;case THREE.MOUSE.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;v(t),a=o.PAN}else{if(e.enableRotate===!1)return;Z(t),a=o.ROTATE}break;case THREE.MOUSE.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;Z(t),a=o.ROTATE}else{if(e.enablePan===!1)return;v(t),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&e.dispatchEvent(z)}function ye(t){switch(a){case o.ROTATE:if(e.enableRotate===!1)return;pe(t);break;case o.DOLLY:if(e.enableZoom===!1)return;ue(t);break;case o.PAN:if(e.enablePan===!1)return;de(t);break}}function ee(t){e.enabled===!1||e.enableZoom===!1||a!==o.NONE||(t.preventDefault(),e.dispatchEvent(z),fe(t),e.dispatchEvent(se))}function te(t){e.enabled===!1||e.enablePan===!1||me(t)}function Me(t){switch(ae(t),i.length){case 1:switch(e.touches.ONE){case THREE.TOUCH.ROTATE:if(e.enableRotate===!1)return;X(),a=o.TOUCH_ROTATE;break;case THREE.TOUCH.PAN:if(e.enablePan===!1)return;G(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(e.touches.TWO){case THREE.TOUCH.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;he(),a=o.TOUCH_DOLLY_PAN;break;case THREE.TOUCH.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ee(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&e.dispatchEvent(z)}function Re(t){switch(ae(t),a){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;B(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;q(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Te(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;be(t),e.update();break;default:a=o.NONE}}function oe(t){e.enabled!==!1&&t.preventDefault()}function He(t){i.push(t)}function ne(t){delete D[t.pointerId];for(let n=0;n<i.length;n++)if(i[n].pointerId==t.pointerId){i.splice(n,1);return}}function ae(t){let n=D[t.pointerId];n===void 0&&(n=new THREE.Vector2,D[t.pointerId]=n),n.set(t.pageX,t.pageY)}function F(t){const n=t.pointerId===i[0].pointerId?i[1]:i[0];return D[n.pointerId]}e.domElement.addEventListener("contextmenu",oe),e.domElement.addEventListener("pointerdown",J),e.domElement.addEventListener("pointercancel",$),e.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const we=new Float32Array([-10,10,10,-10,-10,10,10,10,10,10,-10,10,10,10,10,10,-10,10,10,10,-10,10,-10,-10,10,10,-10,10,-10,-10,-10,10,-10,-10,-10,-10,-10,10,-10,-10,-10,-10,-10,10,10,-10,-10,10,-10,10,-10,-10,10,10,10,10,-10,10,10,10,-10,-10,10,-10,-10,-10,10,-10,10,10,-10,-10]),Oe=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]),Le=new Uint32Array([0,1,2,3,2,1,4,5,6,7,6,5,8,9,10,11,10,9,12,13,14,15,14,13,16,17,18,19,18,17,20,21,22,23,22,21]),Ae=[65280,16737792,255,16711680,16776960,16777215],xe=0;class Se{constructor(h,R){const e=new THREE.BufferGeometry;e.setAttribute("position",new THREE.BufferAttribute(we,3)),e.setAttribute("normal",new THREE.BufferAttribute(Oe,3)),e.setIndex(new THREE.BufferAttribute(Le,1)),e.clearGroups(),e.addGroup(0,6,0),e.addGroup(6,6,1),e.addGroup(12,6,2),e.addGroup(18,6,3),e.addGroup(24,6,4),e.addGroup(30,6,5);const o=h.map((a,l)=>{const r=a?Ae[l]:xe;return console.log(r),new THREE.MeshToonMaterial({color:r,gradientMap:R})});return new THREE.Mesh(e,o)}}(()=>{const L=new THREE.LoadingManager(()=>{const u=document.getElementById("loading");u.addEventListener("transitionend",d=>{u.remove()}),u.className="fade"}),{innerWidth:h,innerHeight:R,devicePixelRatio:e}=window,o=new THREE.Vector3(0,0,0),a=new THREE.Scene;a.background=new THREE.Color(3355443);const l=new THREE.PerspectiveCamera(100,h/R,.25,1e3);l.position.y=60,l.position.z=160,l.lookAt(o);const f=new THREE.TextureLoader(L).load("threeTone.jpg");f.minFilter=THREE.NearestFilter,f.magFilter=THREE.NearestFilter;const T=new THREE.TextureLoader(L).load("fiveTone.jpg");T.minFilter=THREE.NearestFilter,T.magFilter=THREE.NearestFilter,[{colorMap:[1,0,0,1,0,1],position:[-21,-21,21]},{colorMap:[1,0,0,0,0,1],position:[0,-21,21]},{colorMap:[1,1,0,0,0,1],position:[21,-21,21]},{colorMap:[0,0,0,1,0,1],position:[-21,-21,0]},{colorMap:[0,0,0,0,0,1],position:[0,-21,0]},{colorMap:[0,1,0,0,0,1],position:[21,-21,0]},{colorMap:[0,0,1,1,0,1],position:[-21,-21,-21]},{colorMap:[0,0,1,0,0,1],position:[0,-21,-21]},{colorMap:[0,1,1,0,0,1],position:[21,-21,-21]},{colorMap:[1,0,0,1,0,0],position:[-21,0,21]},{colorMap:[1,0,0,0,0,0],position:[0,0,21]},{colorMap:[1,1,0,0,0,0],position:[21,0,21]},{colorMap:[0,0,0,1,0,0],position:[-21,0,0]},{colorMap:[0,0,0,0,0,0],position:[0,0,0]},{colorMap:[0,1,0,0,0,0],position:[21,0,0]},{colorMap:[0,0,1,1,0,0],position:[-21,0,-21]},{colorMap:[0,0,1,0,0,0],position:[0,0,-21]},{colorMap:[0,1,1,0,0,0],position:[21,0,-21]},{colorMap:[1,0,0,1,1,0],position:[-21,21,21]},{colorMap:[1,0,0,0,1,0],position:[0,21,21]},{colorMap:[1,1,0,0,1,0],position:[21,21,21]},{colorMap:[0,0,0,1,1,0],position:[-21,21,0]},{colorMap:[0,0,0,0,1,0],position:[0,21,0]},{colorMap:[0,1,0,0,1,0],position:[21,21,0]},{colorMap:[0,0,1,1,1,0],position:[-21,21,-21]},{colorMap:[0,0,1,0,1,0],position:[0,21,-21]},{colorMap:[0,1,1,0,1,0],position:[21,21,-21]}].map(u=>{const d=new Se(u.colorMap,T);a.add(d),d.position.set(...u.position)});const b=new THREE.AmbientLight(14540253);a.add(b);const p=new THREE.WebGLRenderer({antialias:!0});p.setPixelRatio(e),p.setSize(h,R),p.shadowMap.enabled=!0,document.body.appendChild(p.domElement),p.setAnimationLoop(u=>{m.update(),p.render(a,l)});const m=new Pe(l,p.domElement);m.autoRotate=!0,m.enablePan=!1,m.enableZoom=!1,m.target=o,window.addEventListener("resize",u=>{const d=window.innerWidth,g=window.innerHeight;l.aspect=d/g,l.updateProjectionMatrix(),p.setSize(d,g)},!1)})();