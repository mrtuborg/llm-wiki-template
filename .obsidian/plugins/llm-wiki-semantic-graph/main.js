var Ql=Object.defineProperty;var bg=Object.getOwnPropertyDescriptor;var Mg=Object.getOwnPropertyNames;var Sg=Object.prototype.hasOwnProperty;var wg=(n,t)=>{for(var e in t)Ql(n,e,{get:t[e],enumerable:!0})},Eg=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Mg(t))!Sg.call(n,s)&&s!==e&&Ql(n,s,{get:()=>t[s],enumerable:!(i=bg(t,s))||i.enumerable});return n};var Tg=n=>Eg(Ql({},"__esModule",{value:!0}),n);var KS={};wg(KS,{default:()=>Jl});module.exports=Tg(KS);var Ke=require("obsidian");var Mo="185",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ju=0,Dc=1,Ku=2;var Er=1,ju=2,Ps=3,Qn=0,We=1,zn=2,kn=0,Xi=1,Lc=2,Nc=3,Uc=4,Qu=5;var gi=100,tf=101,ef=102,nf=103,sf=104,rf=200,af=201,of=202,lf=203,Fa=204,Oa=205,cf=206,hf=207,uf=208,ff=209,df=210,pf=211,mf=212,gf=213,_f=214,Ba=0,za=1,ka=2,qi=3,Va=4,Ga=5,Ha=6,Wa=7,Fc=0,xf=1,yf=2,Sn=0,Oc=1,Bc=2,zc=3,kc=4,Vc=5,Gc=6,Hc=7;var Wc=300,Ai=301,Yi=302,So=303,wo=304,Tr=306,Xa=1e3,Fn=1001,qa=1002,Re=1003,vf=1004;var Ar=1005;var De=1006,Eo=1007;var Ci=1008;var on=1009,Xc=1010,qc=1011,Ds=1012,To=1013,wn=1014,En=1015,Vn=1016,Ao=1017,Co=1018,Ls=1020,Yc=35902,Zc=35899,$c=1021,Jc=1022,un=1023,On=1026,Ri=1027,Kc=1028,Ro=1029,Ii=1030,Io=1031;var Po=1033,Cr=33776,Rr=33777,Ir=33778,Pr=33779,Do=35840,Lo=35841,No=35842,Uo=35843,Fo=36196,Oo=37492,Bo=37496,zo=37488,ko=37489,Dr=37490,Vo=37491,Go=37808,Ho=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,Zo=37814,$o=37815,Jo=37816,Ko=37817,jo=37818,Qo=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,Lr=36285,ol=36286;var Qs=2300,Ya=2301,Ua=2302,Sc=2303,wc=2400,Ec=2401,Tc=2402;var bf=3200;var jc=0,Mf=1,ni="",en="srgb",tr="srgb-linear",er="linear",te="srgb";var Gi=7680;var Ac=519,Sf=512,wf=513,Ef=514,ll=515,Tf=516,Af=517,cl=518,Cf=519,Za=35044;var Qc="300 es",bn=2e3,nr=2001;function Ag(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Cg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rf(){let n=ir("canvas");return n.style.display="block",n}var bu={},bs=null;function sr(...n){let t="THREE."+n.shift();bs?bs("log",t,...n):console.log(t,...n)}function If(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=If(n);let t="THREE."+n.shift();if(bs)bs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Nt(...n){n=If(n);let t="THREE."+n.shift();if(bs)bs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Wi(...n){let t=n.join(" ");t in bu||(bu[t]=!0,Pt(...n))}function Pf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Df={[Ba]:za,[ka]:Ha,[Va]:Wa,[qi]:Ga,[za]:Ba,[Ha]:ka,[Wa]:Va,[Ga]:qi},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Ks=Math.PI/180,Ms=180/Math.PI;function Kn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function th(n,t){return(n%t+t)%t}function Rg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ig(n,t,e){return n!==t?(e-n)/(t-n):0}function js(n,t,e){return(1-e)*n+e*t}function Pg(n,t,e,i){return js(n,t,1-Math.exp(-e*i))}function Dg(n,t=1){return t-Math.abs(th(n,t*2)-t)}function Lg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ng(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ug(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Fg(n,t){return n+Math.random()*(t-n)}function Og(n){return n*(.5-Math.random())}function Bg(n){n!==void 0&&(Mu=n);let t=Mu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zg(n){return n*Ks}function kg(n){return n*Ms}function Vg(n){return(n&n-1)===0&&n!==0}function Gg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wg(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eh={DEG2RAD:Ks,RAD2DEG:Ms,generateUUID:Kn,clamp:Yt,euclideanModulo:th,mapLinear:Rg,inverseLerp:Ig,lerp:js,damp:Pg,pingpong:Dg,smoothstep:Lg,smootherstep:Ng,randInt:Ug,randFloat:Fg,randFloatSpread:Og,seededRandom:Bg,degToRad:zg,radToDeg:kg,isPowerOfTwo:Vg,ceilPowerOfTwo:Gg,floorPowerOfTwo:Hg,setQuaternionFromProperEuler:Wg,normalize:ne,denormalize:vn},ah=class ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;var At=ah,nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*y;m<0&&(u=-u,p=-p,g=-g,y=-y,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);f=Math.sin(f*b)/E,o=Math.sin(o*b)/E,c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+y*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+y*o;let b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oh=class oh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;var V=oh,tc=new V,Su=new nn,lh=class lh{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],b=s[1],E=s[4],_=s[7],M=s[2],S=s[5],w=s[8];return r[0]=a*y+o*b+c*M,r[3]=a*m+o*E+c*S,r[6]=a*f+o*_+c*w,r[1]=l*y+h*b+d*M,r[4]=l*m+h*E+d*S,r[7]=l*f+h*_+d*w,r[2]=u*y+p*b+g*M,r[5]=u*m+p*E+g*S,r[8]=u*f+p*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*l-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var kt=lh,ec=new kt,wu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xg(){let n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:t,whitePoint:i,transfer:er,toXYZ:wu,fromXYZ:Eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:te,toXYZ:wu,fromXYZ:Eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var Jt=Xg();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ss,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=ir("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qg=0,Ss=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nc(s[a].image)):r.push(nc(s[a]))}else r=nc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function nc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?$a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Yg=0,ic=new V,Ve=class n extends Mn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Fn,s=Fn,r=De,a=Ci,o=un,c=on,l=n.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Kn(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Wc;Ve.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,_=(p+1)/2,M=(f+1)/2,S=(h+u)/4,w=(d+y)/4,x=(g+m)/4;return E>_&&E>M?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=w/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=x/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=x/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var de=ch,Ja=class extends Mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ve(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Ja{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},rr=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class bo{constructor(t,e,i,s,r,a,o,c,l,h,d,u,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,d,u,p,g,y,m)}set(t,e,i,s,r,a,o,c,l,h,d,u,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,y=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,g=l*h,y=l*d;e[0]=u+y*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,g=l*h,y=l*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,y=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+y,e[1]=c*d,e[5]=y*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+y,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zg,t,$g)}lookAt(t,e,i){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),hi.crossVectors(i,Qe),hi.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),hi.crossVectors(i,Qe)),hi.normalize(),la.crossVectors(Qe,hi),s[0]=hi.x,s[4]=la.x,s[8]=Qe.x,s[1]=hi.y,s[5]=la.y,s[9]=Qe.y,s[2]=hi.z,s[6]=la.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],b=i[3],E=i[7],_=i[11],M=i[15],S=s[0],w=s[4],x=s[8],T=s[12],P=s[1],D=s[5],I=s[9],B=s[13],R=s[2],N=s[6],U=s[10],L=s[14],O=s[3],X=s[7],Z=s[11],tt=s[15];return r[0]=a*S+o*P+c*R+l*O,r[4]=a*w+o*D+c*N+l*X,r[8]=a*x+o*I+c*U+l*Z,r[12]=a*T+o*B+c*L+l*tt,r[1]=h*S+d*P+u*R+p*O,r[5]=h*w+d*D+u*N+p*X,r[9]=h*x+d*I+u*U+p*Z,r[13]=h*T+d*B+u*L+p*tt,r[2]=g*S+y*P+m*R+f*O,r[6]=g*w+y*D+m*N+f*X,r[10]=g*x+y*I+m*U+f*Z,r[14]=g*T+y*B+m*L+f*tt,r[3]=b*S+E*P+_*R+M*O,r[7]=b*w+E*D+_*N+M*X,r[11]=b*x+E*I+_*U+M*Z,r[15]=b*T+E*B+_*L+M*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15],b=c*p-l*u,E=o*p-l*d,_=o*u-c*d,M=a*p-l*h,S=a*u-c*h,w=a*d-o*h;return e*(y*b-m*E+f*_)-i*(g*b-m*M+f*S)+s*(g*E-y*M+f*w)-r*(g*_-y*S+m*w)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],b=e*o-i*a,E=e*c-s*a,_=e*l-r*a,M=i*c-s*o,S=i*l-r*o,w=s*l-r*c,x=h*y-d*g,T=h*m-u*g,P=h*f-p*g,D=d*m-u*y,I=d*f-p*y,B=u*f-p*m,R=b*B-E*I+_*D+M*P-S*T+w*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/R;return t[0]=(o*B-c*I+l*D)*N,t[1]=(s*I-i*B-r*D)*N,t[2]=(y*w-m*S+f*M)*N,t[3]=(u*S-d*w-p*M)*N,t[4]=(c*P-a*B-l*T)*N,t[5]=(e*B-s*P+r*T)*N,t[6]=(m*_-g*w-f*E)*N,t[7]=(h*w-u*_+p*E)*N,t[8]=(a*I-o*P+l*x)*N,t[9]=(i*P-e*I-r*x)*N,t[10]=(g*S-y*_+f*b)*N,t[11]=(d*_-h*S-p*b)*N,t[12]=(o*T-a*D-c*x)*N,t[13]=(e*D-i*T+s*x)*N,t[14]=(y*E-g*M-m*b)*N,t[15]=(h*M-d*E+u*b)*N,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,y=a*h,m=a*d,f=o*d,b=c*l,E=c*h,_=c*d,M=i.x,S=i.y,w=i.z;return s[0]=(1-(y+f))*M,s[1]=(p+_)*M,s[2]=(g-E)*M,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(u+f))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+E)*w,s[9]=(m-b)*w,s[10]=(1-(u+y))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),c=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let l=1/a,h=1/o,d=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=bn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===nr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=bn,c=!1){let l=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===bn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===nr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};bo.prototype.isMatrix4=!0;var fe=bo,rs=new V,_n=new fe,Zg=new V(0,0,0),$g=new V(1,1,1),hi=new V,la=new V,Qe=new V,Tu=new fe,Au=new nn,_i=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jg=0,Cu=new V,as=new nn,Xn=new fe,ca=new V,Hs=new V,Kg=new V,jg=new nn,Ru=new V(1,0,0),Iu=new V(0,1,0),Pu=new V(0,0,1),Du={type:"added"},Qg={type:"removed"},os={type:"childadded",child:null},sc={type:"childremoved",child:null},Ge=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new _i,i=new nn,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ca.copy(t):ca.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Hs,ca,this.up):Xn.lookAt(ca,Hs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Xn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),os.child=t,this.dispatchEvent(os),os.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qg),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Kg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,jg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new V(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},ha={h:0,s:0,l:0};function rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=th(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=rc(a,r,t+1/3),this.g=rc(a,r,t),this.b=rc(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=Lf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Jt.workingToColorSpace(Oe.copy(this),t),Math.round(Yt(Oe.r*255,0,255))*65536+Math.round(Yt(Oe.g*255,0,255))*256+Math.round(Yt(Oe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Oe.copy(this),e);let i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=en){Jt.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,i=Oe.g,s=Oe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(ha);let i=js(ui.h,ha.h,e),s=js(ui.s,ha.s,e),r=js(ui.l,ha.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Zt;Zt.NAMES=Lf;var ar=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new V,qn=new V,ac=new V,Yn=new V,ls=new V,cs=new V,Lu=new V,oc=new V,lc=new V,cc=new V,hc=new de,uc=new de,fc=new de,Jn=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),qn.subVectors(i,e),ac.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(qn),c=xn.dot(ac),l=qn.dot(qn),h=qn.dot(ac),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return hc.setScalar(0),uc.setScalar(0),fc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,i),fc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hc,r.x),a.addScaledVector(uc,r.y),a.addScaledVector(fc,r.z),a}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),qn.subVectors(t,e),xn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),xn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,i),cs.subVectors(r,i),oc.subVectors(t,i);let c=ls.dot(oc),l=cs.dot(oc);if(c<=0&&l<=0)return e.copy(i);lc.subVectors(t,s);let h=ls.dot(lc),d=cs.dot(lc);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(ls,a);cc.subVectors(t,r);let p=ls.dot(cc),g=cs.dot(cc);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(cs,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Lu.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Lu,o);let f=1/(m+y+u);return a=y*f,o=u*f,e.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),fa.subVectors(this.max,Ws),hs.subVectors(t.a,Ws),us.subVectors(t.b,Ws),fs.subVectors(t.c,Ws),fi.subVectors(us,hs),di.subVectors(fs,us),Bi.subVectors(hs,fs);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Bi.z,Bi.y,fi.z,0,-fi.x,di.z,0,-di.x,Bi.z,0,-Bi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Bi.y,Bi.x,0];return!dc(e,hs,us,fs,fa)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,hs,us,fs,fa))?!1:(da.crossVectors(fi,di),e=[da.x,da.y,da.z],dc(e,hs,us,fs,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new V,new V,new V,new V,new V,new V,new V,new V],yn=new V,ua=new xi,hs=new V,us=new V,fs=new V,fi=new V,di=new V,Bi=new V,Ws=new V,fa=new V,da=new V,zi=new V;function dc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zi.fromArray(n,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var be=new V,pa=new At,e0=0,Ye=class extends Mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Za,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lr=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var he=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},n0=new xi,Xs=new V,pc=new V,yi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):n0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(pc)),this.expandByPoint(Xs.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},i0=0,cn=new fe,mc=new Ge,ds=new V,tn=new xi,qs=new xi,Ce=new V,Se=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ag(t)?lr:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(tn.min,qs.min),tn.expandByPoint(Ce),Ce.addVectors(tn.max,qs.max),tn.expandByPoint(Ce)):(tn.expandByPoint(qs.min),tn.expandByPoint(qs.max))}tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(t,l),Ce.add(ds)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new V,c[x]=new V;let l=new V,h=new V,d=new V,u=new At,p=new At,g=new At,y=new V,m=new V;function f(x,T,P){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),d.sub(l),p.sub(u),g.sub(u);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(y),o[T].add(y),o[P].add(y),c[x].add(m),c[T].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let P=b[x],D=P.start,I=P.count;for(let B=D,R=D+I;B<R;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new V,_=new V,M=new V,S=new V;function w(x){M.fromBufferAttribute(s,x),S.copy(M);let T=o[x];E.copy(T),E.sub(M.multiplyScalar(M.dot(T))).normalize(),_.crossVectors(S,T);let D=_.dot(c[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,D)}for(let x=0,T=b.length;x<T;++x){let P=b[x],D=P.start,I=P.count;for(let B=D,R=D+I;B<R;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,h=new V,d=new V;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new Ye(u,h,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new V,cr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},s0=0,Bn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Xi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ts=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,Ys=new V,ms=new V,gs=new V,_s=new At,Zs=new At,Nf=new fe,ma=new V,$s=new V,ga=new V,Nu=new At,gc=new At,Uu=new At,hr=class extends Ge{constructor(t=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ja(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new cr(i,3,0,!1)),ps.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=ps,this.material=t,this.center=new At(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;_a(ma.set(-.5,-.5,0),gs,a,ms,s,r),_a($s.set(.5,-.5,0),gs,a,ms,s,r),_a(ga.set(.5,.5,0),gs,a,ms,s,r),Nu.set(0,0),gc.set(1,0),Uu.set(1,1);let o=t.ray.intersectTriangle(ma,$s,ga,!1,Ys);if(o===null&&(_a($s.set(-.5,.5,0),gs,a,ms,s,r),gc.set(0,1),o=t.ray.intersectTriangle(ma,ga,$s,!1,Ys),o===null))return;let c=t.ray.origin.distanceTo(Ys);c<t.near||c>t.far||e.push({distance:c,point:Ys.clone(),uv:Jn.getInterpolation(Ys,ma,$s,ga,Nu,gc,Uu,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _a(n,t,e,i,s,r){_s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Zs.x=r*_s.x-s*_s.y,Zs.y=s*_s.x+r*_s.y):Zs.copy(_s),n.copy(t),n.x+=Zs.x,n.y+=Zs.y,n.applyMatrix4(Nf)}var $n=new V,_c=new V,xa=new V,pi=new V,xc=new V,ya=new V,yc=new V,ti=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_c.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(_c);let r=t.distanceTo(e)*.5,a=-this.direction.dot(xa),o=pi.dot(this.direction),c=-pi.dot(xa),l=pi.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_c).addScaledVector(xa,u),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,i,s,r){xc.subVectors(e,t),ya.subVectors(i,t),yc.crossVectors(xc,ya);let a=this.direction.dot(yc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);let c=o*this.direction.dot(ya.crossVectors(pi,ya));if(c<0)return null;let l=o*this.direction.dot(xc.cross(pi));if(l<0||c+l>a)return null;let h=-o*pi.dot(yc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fu=new fe,ki=new ti,va=new yi,Ou=new V,ba=new V,Ma=new V,Sa=new V,vc=new V,wa=new V,Bu=new V,Ea=new V,He=class extends Ge{constructor(t=new Se,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(vc.fromBufferAttribute(d,t),a?wa.addScaledVector(vc,h):wa.addScaledVector(vc.sub(e),h))}e.add(wa)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(va.containsPoint(ki.origin)===!1&&(ki.intersectSphere(va,Ou)===null||ki.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Fu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,M=E;_<M;_+=3){let S=o.getX(_),w=o.getX(_+1),x=o.getX(_+2);s=Ta(this,f,t,i,l,h,d,S,w,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let b=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);s=Ta(this,a,t,i,l,h,d,b,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,M=E;_<M;_+=3){let S=_,w=_+1,x=_+2;s=Ta(this,f,t,i,l,h,d,S,w,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let b=m,E=m+1,_=m+2;s=Ta(this,a,t,i,l,h,d,b,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function r0(n,t,e,i,s,r,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Qn,o),c===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ea);return l<e.near||l>e.far?null:{distance:l,point:Ea.clone(),object:n}}function Ta(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,ba),n.getVertexPosition(c,Ma),n.getVertexPosition(l,Sa);let h=r0(n,t,e,i,ba,Ma,Sa,Bu);if(h){let d=new V;Jn.getBarycoord(Bu,ba,Ma,Sa,d),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,c,l,d,new At)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,c,l,d,new At)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,c,l,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new V,materialIndex:0};Jn.getNormal(ba,Ma,Sa,u.normal),h.face=u,h.barycoord=d}return h}var Qa=class extends Ve{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Re,h=Re,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bc=new V,a0=new V,o0=new kt,hn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=bc.subVectors(i,e).cross(a0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||o0.getNormalMatrix(t),s=this.coplanarPoint(bc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new yi,l0=new At(.5,.5),Aa=new V,ur=class{constructor(t=new hn,e=new hn,i=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],b=r[12],E=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,p-h,f-g,M-b).normalize(),s[1].setComponents(l+a,p+h,f+g,M+b).normalize(),s[2].setComponents(l+o,p+d,f+y,M+E).normalize(),s[3].setComponents(l-o,p-d,f-y,M-E).normalize(),i)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,p-u,f-m,M-_).normalize();else if(s[4].setComponents(l-c,p-u,f-m,M-_).normalize(),e===bn)s[5].setComponents(l+c,p+u,f+m,M+_).normalize();else if(e===nr)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=l0.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},to=new V,eo=new V,zu=new fe,Js=new ti,Ca=new yi,Mc=new V,ku=new V,no=class extends Ge{constructor(t=new Se,e=new As){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)to.fromBufferAttribute(e,s-1),eo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=to.distanceTo(eo);t.setAttribute("lineDistance",new he(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;zu.copy(s).invert(),Js.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=l){let f=h.getX(y),b=h.getX(y+1),E=Ra(this,t,Js,c,f,b,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),f=Ra(this,t,Js,c,y,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=l){let f=Ra(this,t,Js,c,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){let y=Ra(this,t,Js,c,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ra(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(to.fromBufferAttribute(o,s),eo.fromBufferAttribute(o,r),e.distanceSqToSegment(to,eo,Mc,ku)>i)return;Mc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Mc);if(!(l<t.near||l>t.far))return{distance:l,point:ku.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Vu=new V,Gu=new V,fr=class extends no{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vu.fromBufferAttribute(e,s),Gu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vu.distanceTo(Gu);t.setAttribute("lineDistance",new he(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Cs=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hu=new fe,Cc=new ti,Ia=new yi,Pa=new V,dr=class extends Ge{constructor(t=new Se,e=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;Hu.copy(s).invert(),Cc.copy(t.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,y=p;g<y;g++){let m=l.getX(g);Pa.fromBufferAttribute(d,m),Wu(Pa,m,c,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,y=p;g<y;g++)Pa.fromBufferAttribute(d,g),Wu(Pa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wu(n,t,e,i,s,r,a){let o=Cc.distanceSqToPoint(n);if(o<e){let c=new V;Cc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var pr=class extends Ve{constructor(t=[],e=Ai,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mr=class extends Ve{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends Ve{constructor(t,e,i=wn,s,r,a,o=Re,c=Re,l,h=On,d=1){if(h!==On&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},io=class extends ei{constructor(t,e=wn,i=Ai,s,r,a=Re,o=Re,c,l=On){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bi=class n extends Se{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function g(y,m,f,b,E,_,M,S,w,x,T){let P=_/w,D=M/x,I=_/2,B=M/2,R=S/2,N=w+1,U=x+1,L=0,O=0,X=new V;for(let Z=0;Z<U;Z++){let tt=Z*D-B;for(let it=0;it<N;it++){let Ct=it*P-I;X[y]=Ct*b,X[m]=tt*E,X[f]=R,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[f]=S>0?1:-1,h.push(X.x,X.y,X.z),d.push(it/w),d.push(1-Z/x),L+=1}}for(let Z=0;Z<x;Z++)for(let tt=0;tt<w;tt++){let it=u+tt+N*Z,Ct=u+tt+N*(Z+1),Ut=u+(tt+1)+N*(Z+1),Lt=u+(tt+1)+N*Z;c.push(it,Ct,Lt),c.push(Ct,Ut,Lt),O+=6}o.addGroup(p,O,T),p+=O,u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _r=class n extends Se{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,y=[],m=i/2,f=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(p,2));function b(){let _=new V,M=new V,S=0,w=(e-t)/i;for(let x=0;x<=r;x++){let T=[],P=x/r,D=P*(e-t)+t;for(let I=0;I<=s;I++){let B=I/s,R=B*c+o,N=Math.sin(R),U=Math.cos(R);M.x=D*N,M.y=-P*i+m,M.z=D*U,d.push(M.x,M.y,M.z),_.set(N,w,U).normalize(),u.push(_.x,_.y,_.z),p.push(B,1-P),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let P=y[T][x],D=y[T+1][x],I=y[T+1][x+1],B=y[T][x+1];(t>0||T!==0)&&(h.push(P,D,B),S+=3),(e>0||T!==r-1)&&(h.push(D,I,B),S+=3)}l.addGroup(f,S,0),f+=S}function E(_){let M=g,S=new At,w=new V,x=0,T=_===!0?t:e,P=_===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),g++;let D=g;for(let I=0;I<=s;I++){let R=I/s*c+o,N=Math.cos(R),U=Math.sin(R);w.x=T*U,w.y=m*P,w.z=T*N,d.push(w.x,w.y,w.z),u.push(0,P,0),S.x=N*.5+.5,S.y=U*.5*P+.5,p.push(S.x,S.y),g++}for(let I=0;I<s;I++){let B=M+I,R=D+I;_===!0?h.push(R,R+1,B):h.push(R+1,R,B),x+=3}l.addGroup(f,x,_===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var so=class n extends Se{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let E=new V,_=new V,M=new V;for(let S=0;S<e.length;S+=3)p(e[S+0],E),p(e[S+1],_),p(e[S+2],M),c(E,_,M,b)}function c(b,E,_,M){let S=M+1,w=[];for(let x=0;x<=S;x++){w[x]=[];let T=b.clone().lerp(_,x/S),P=E.clone().lerp(_,x/S),D=S-x;for(let I=0;I<=D;I++)I===0&&x===S?w[x][I]=T:w[x][I]=T.clone().lerp(P,I/D)}for(let x=0;x<S;x++)for(let T=0;T<2*(S-x)-1;T++){let P=Math.floor(T/2);T%2===0?(u(w[x][P+1]),u(w[x+1][P]),u(w[x][P])):(u(w[x][P+1]),u(w[x+1][P+1]),u(w[x+1][P]))}}function l(b){let E=new V;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(b),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let b=new V;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let _=m(b)/2/Math.PI+.5,M=f(b)/Math.PI+.5;a.push(_,1-M)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let E=a[b+0],_=a[b+2],M=a[b+4],S=Math.max(E,_,M),w=Math.min(E,_,M);S>.9&&w<.1&&(E<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),M<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function p(b,E){let _=b*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){let b=new V,E=new V,_=new V,M=new V,S=new At,w=new At,x=new At;for(let T=0,P=0;T<r.length;T+=9,P+=6){b.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(a[P+0],a[P+1]),w.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),M.copy(b).add(E).add(_).divideScalar(3);let D=m(M);y(S,P+0,b,D),y(w,P+2,E,D),y(x,P+4,_,D)}}function y(b,E,_,M){M<0&&b.x===1&&(a[E]=b.x-1),_.x===0&&_.z===0&&(a[E]=M/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var xr=class n extends so{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},yr=class n extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let b=f*u-a;for(let E=0;E<l;E++){let _=E*d-r;g.push(_,-b,0),y.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let E=b+l*f,_=b+l*(f+1),M=b+1+l*(f+1),S=b+1+l*f;p.push(E,_,S),p.push(_,M,S)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Rs=class n extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new V,u=new V,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let b=[],E=f/i,_=a+E*o,M=t*Math.cos(_),S=Math.sqrt(t*t-M*M),w=0;f===0&&a===0?w=.5/e:f===i&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){let T=x/e,P=s+T*r;d.x=-S*Math.cos(P),d.y=M,d.z=S*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+w,1-E),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){let E=h[f][b+1],_=h[f][b],M=h[f+1][b],S=h[f+1][b+1];(f!==0||a>0)&&p.push(E,_,S),(f!==i-1||c<Math.PI)&&p.push(_,M,S)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Xu(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ze(n){let t={};for(let e=0;e<n.length;e++){let i=Zi(n[e]);for(let s in i)t[s]=i[s]}return t}function Xu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function c0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Uf={clone:Zi,merge:ze},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=c0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new At().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new de().fromArray(s.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ro=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ao=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oo=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Da(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var Mi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lo=class extends Mi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,o=2*e-i;break;case Tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ec:a=t,c=2*i-e;break;case Tc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,f=-u*m+2*u*y-u*g,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,_=p*m-p*y;for(let M=0;M!==o;++M)r[M]=f*a[h+M]+b*a[l+M]+E*a[c+M]+_*a[d+M];return r}},co=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},ho=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uo=class extends Mi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],f=p*u+g*2,b=d[f],E=d[f+1],_=t*u+g*2,M=h[_],S=h[_+1],w=(i-e)/(s-e),x,T,P,D,I;for(let B=0;B<8;B++){x=w*w,T=x*w,P=1-w,D=P*P,I=D*P;let N=I*e+3*D*w*b+3*P*x*M+T*s-i;if(Math.abs(N)<1e-10)break;let U=3*D*(b-e)+6*P*w*(M-b)+3*x*(s-M);if(Math.abs(U)<1e-10)break;w=w-N/U,w=Math.max(0,Math.min(1,w))}r[g]=I*y+3*D*w*E+3*P*x*S+T*m}return r}},an=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Da(e,this.TimeBufferType),this.values=Da(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Da(t.times,Array),values:Da(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break;case Sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Nt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Nt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Cg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Nt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let p=0;p!==i;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Ya;var Si=class extends an{constructor(t,e,i){super(t,e,i)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Qs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};fo.prototype.ValueTypeName="color";var po=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};po.prototype.ValueTypeName="number";var mo=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(r,0,a,l-o,a,l,c);return r}},vr=class extends an{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends an{constructor(t,e,i){super(t,e,i)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Qs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};go.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new _o,xo=class{constructor(t){this.manager=t!==void 0?t:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var La=new V,Na=new nn,Un=new V,br=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Na,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(La,Na,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new V,qu=new At,Yu=new At,Be=class extends br{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mr=class extends br{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var xs=-90,ys=1,yo=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(xs,ys,t,e);s.layers=this.layers,this.add(s);let r=new Be(xs,ys,t,e);r.layers=this.layers,this.add(r);let a=new Be(xs,ys,t,e);a.layers=this.layers,this.add(a);let o=new Be(xs,ys,t,e);o.layers=this.layers,this.add(o);let c=new Be(xs,ys,t,e);c.layers=this.layers,this.add(c);let l=new Be(xs,ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vo=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ih="\\[\\]\\.:\\/",f0=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",d0="[^"+ih.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",sh),m0=/(WCOD+)?/.source.replace("WCOD",d0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),x0=new RegExp("^"+p0+m0+g0+_0+"$"),y0=["material","materials","bones","map"],Rc=class{constructor(t,e,i){let s=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);y0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Rc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QS=new Float32Array(1);var Zu=new fe,Sr=class{constructor(t,e,i=0,s=1/0){this.ray=new ti(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zu),this}intersectObject(t,e=!0,i=[]){return Ic(t,this,i,e),i.sort($u),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ic(t[s],this,i,e);return i.sort($u),i}};function $u(n,t){return n.distance-t.distance}function Ic(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Ic(r[a],t,e,!0)}}var Is=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var hh=class hh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};hh.prototype.isMatrix2=!0;var Pc=hh;var wr=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function rh(n,t,e,i){let s=v0(i);switch(e){case $c:return n*t;case Kc:return n*t/s.components*s.byteLength;case Ro:return n*t/s.components*s.byteLength;case Ii:return n*t*2/s.components*s.byteLength;case Io:return n*t*2/s.components*s.byteLength;case Jc:return n*t*3/s.components*s.byteLength;case un:return n*t*4/s.components*s.byteLength;case Po:return n*t*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(n,16)*Math.max(t,8)/4;case Do:case No:return Math.max(n,8)*Math.max(t,8)/2;case Fo:case Oo:case zo:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:case Dr:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rl:case al:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Lr:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v0(n){switch(n){case on:case Xc:return{byteLength:1,components:1};case Ds:case qc:case Vn:return{byteLength:2,components:1};case Ao:case Co:return{byteLength:2,components:4};case wn:case To:case En:return{byteLength:4,components:1};case Yc:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window!="undefined"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);function rd(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function b0(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,p_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,__=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ix=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:w0,alphamap_pars_fragment:E0,alphatest_fragment:T0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:I0,batching_vertex:P0,begin_vertex:D0,beginnormal_vertex:L0,bsdfs:N0,iridescence_fragment:U0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:k0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:H0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:Z0,displacementmap_vertex:$0,emissivemap_fragment:J0,emissivemap_pars_fragment:K0,colorspace_fragment:j0,colorspace_pars_fragment:Q0,envmap_fragment:t_,envmap_common_pars_fragment:e_,envmap_pars_fragment:n_,envmap_pars_vertex:i_,envmap_physical_pars_fragment:p_,envmap_vertex:s_,fog_vertex:r_,fog_pars_vertex:a_,fog_fragment:o_,fog_pars_fragment:l_,gradientmap_pars_fragment:c_,lightmap_pars_fragment:h_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:f_,lights_pars_begin:d_,lights_toon_fragment:m_,lights_toon_pars_fragment:g_,lights_phong_fragment:__,lights_phong_pars_fragment:x_,lights_physical_fragment:y_,lights_physical_pars_fragment:v_,lights_fragment_begin:b_,lights_fragment_maps:M_,lights_fragment_end:S_,lightprobes_pars_fragment:w_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:C_,map_fragment:R_,map_pars_fragment:I_,map_particle_fragment:P_,map_particle_pars_fragment:D_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:N_,morphinstance_vertex:U_,morphcolor_vertex:F_,morphnormal_vertex:O_,morphtarget_pars_vertex:B_,morphtarget_vertex:z_,normal_fragment_begin:k_,normal_fragment_maps:V_,normal_pars_fragment:G_,normal_pars_vertex:H_,normal_vertex:W_,normalmap_pars_fragment:X_,clearcoat_normal_fragment_begin:q_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:$_,opaque_fragment:J_,packing:K_,premultiplied_alpha_fragment:j_,project_vertex:Q_,dithering_fragment:tx,dithering_pars_fragment:ex,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:rx,shadowmap_vertex:ax,shadowmask_pars_fragment:ox,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:hx,skinnormal_vertex:ux,specularmap_fragment:fx,specularmap_pars_fragment:dx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:_x,uv_pars_fragment:xx,uv_pars_vertex:yx,uv_vertex:vx,worldpos_vertex:bx,background_vert:Mx,background_frag:Sx,backgroundCube_vert:wx,backgroundCube_frag:Ex,cube_vert:Tx,cube_frag:Ax,depth_vert:Cx,depth_frag:Rx,distance_vert:Ix,distance_frag:Px,equirect_vert:Dx,equirect_frag:Lx,linedashed_vert:Nx,linedashed_frag:Ux,meshbasic_vert:Fx,meshbasic_frag:Ox,meshlambert_vert:Bx,meshlambert_frag:zx,meshmatcap_vert:kx,meshmatcap_frag:Vx,meshnormal_vert:Gx,meshnormal_frag:Hx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:qx,meshphysical_frag:Yx,meshtoon_vert:Zx,meshtoon_frag:$x,points_vert:Jx,points_frag:Kx,shadow_vert:jx,shadow_frag:Qx,sprite_vert:ty,sprite_frag:ey},dt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Hn={basic:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:ze([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:ze([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:ze([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:ze([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:ze([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:ze([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:ze([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:ze([dt.lights,dt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Hn.physical={uniforms:ze([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var hl={r:0,b:0,g:0},ny=new fe,ad=new kt;ad.set(-1,0,0,0,1,0,0,0,1);function iy(n,t,e,i,s,r){let a=new Zt(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let _=b.backgroundBlurriness>0;E=t.get(E,_)}return E}function g(b){let E=!1,_=p(b);_===null?m(a,o):_&&_.isColor&&(m(_,1),E=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,E){let _=p(E);_&&(_.isCubeTexture||_.mapping===Tr)?(l===void 0&&(l=new He(new bi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Zi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ad),l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==te,(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new He(new yr(2,2),new rn({name:"BackgroundMaterial",uniforms:Zi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,E){b.getRGB(hl,nh(n)),e.buffers.color.setClear(hl.r,hl.g,hl.b,E,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:f}}function sy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(D,I,B,R,N){let U=!1,L=d(D,R,B,I);r!==L&&(r=L,l(r.object)),U=p(D,R,B,N),U&&g(D,R,B,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(D,I,B,R),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,I,B,R){let N=R.wireframe===!0,U=i[I.id];U===void 0&&(U={},i[I.id]=U);let L=D.isInstancedMesh===!0?D.id:0,O=U[L];O===void 0&&(O={},U[L]=O);let X=O[B.id];X===void 0&&(X={},O[B.id]=X);let Z=X[N];return Z===void 0&&(Z=u(c()),X[N]=Z),Z}function u(D){let I=[],B=[],R=[];for(let N=0;N<e;N++)I[N]=0,B[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:R,object:D,attributes:{},index:null}}function p(D,I,B,R){let N=r.attributes,U=I.attributes,L=0,O=B.getAttributes();for(let X in O)if(O[X].location>=0){let tt=N[X],it=U[X];if(it===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),tt===void 0||tt.attribute!==it||it&&tt.data!==it.data)return!0;L++}return r.attributesNum!==L||r.index!==R}function g(D,I,B,R){let N={},U=I.attributes,L=0,O=B.getAttributes();for(let X in O)if(O[X].location>=0){let tt=U[X];tt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let it={};it.attribute=tt,tt&&tt.data&&(it.data=tt.data),N[X]=it,L++}r.attributes=N,r.attributesNum=L,r.index=R}function y(){let D=r.newAttributes;for(let I=0,B=D.length;I<B;I++)D[I]=0}function m(D){f(D,0)}function f(D,I){let B=r.newAttributes,R=r.enabledAttributes,N=r.attributeDivisors;B[D]=1,R[D]===0&&(n.enableVertexAttribArray(D),R[D]=1),N[D]!==I&&(n.vertexAttribDivisor(D,I),N[D]=I)}function b(){let D=r.newAttributes,I=r.enabledAttributes;for(let B=0,R=I.length;B<R;B++)I[B]!==D[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function E(D,I,B,R,N,U,L){L===!0?n.vertexAttribIPointer(D,I,B,N,U):n.vertexAttribPointer(D,I,B,R,N,U)}function _(D,I,B,R){y();let N=R.attributes,U=B.getAttributes(),L=I.defaultAttributeValues;for(let O in U){let X=U[O];if(X.location>=0){let Z=N[O];if(Z===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){let tt=Z.normalized,it=Z.itemSize,Ct=t.get(Z);if(Ct===void 0)continue;let Ut=Ct.buffer,Lt=Ct.type,z=Ct.bytesPerElement,et=Lt===n.INT||Lt===n.UNSIGNED_INT||Z.gpuType===To;if(Z.isInterleavedBufferAttribute){let j=Z.data,ft=j.stride,_t=Z.offset;if(j.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)f(X.location+xt,j.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let xt=0;xt<X.locationSize;xt++)E(X.location+xt,it/X.locationSize,Lt,tt,ft*z,(_t+it/X.locationSize*xt)*z,et)}else{if(Z.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)f(X.location+j,Z.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let j=0;j<X.locationSize;j++)E(X.location+j,it/X.locationSize,Lt,tt,it*z,it/X.locationSize*j*z,et)}}else if(L!==void 0){let tt=L[O];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(X.location,tt);break;case 3:n.vertexAttrib3fv(X.location,tt);break;case 4:n.vertexAttrib4fv(X.location,tt);break;default:n.vertexAttrib1fv(X.location,tt)}}}}b()}function M(){T();for(let D in i){let I=i[D];for(let B in I){let R=I[B];for(let N in R){let U=R[N];for(let L in U)h(U[L].object),delete U[L];delete R[N]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;let I=i[D.id];for(let B in I){let R=I[B];for(let N in R){let U=R[N];for(let L in U)h(U[L].object),delete U[L];delete R[N]}}delete i[D.id]}function w(D){for(let I in i){let B=i[I];for(let R in B){let N=B[R];if(N[D.id]===void 0)continue;let U=N[D.id];for(let L in U)h(U[L].object),delete U[L];delete N[D.id]}}}function x(D){for(let I in i){let B=i[I],R=D.isInstancedMesh===!0?D.id:0,N=B[R];if(N!==void 0){for(let U in N){let L=N[U];for(let O in L)h(L[O].object),delete L[O];delete N[U]}delete B[R],Object.keys(B).length===0&&delete i[I]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function ry(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ay(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==on&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!x)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Pt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:_,maxSamples:M,samples:S}}function oy(n){let t=this,e=null,i=0,s=!1,r=!1,a=new hn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:i,E=b*4,_=f.clippingState||null;c.value=_,_=h(g,u,E,p);for(let M=0;M!==E;++M)_[M]=e[M];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=p+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,_=p;E!==y;++E,_+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Pi=4,Of=[.125,.215,.35,.446,.526,.582],$i=20,ly=256,Nr=new Mr,Bf=new Zt,uh=null,fh=0,dh=0,ph=!1,cy=new V,fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=cy}=r;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=ph,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:Vn,format:un,colorSpace:tr,depthBuffer:!1},s=zf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hy(r)),this._blurMaterial=fy(r,t,e),this._ggxMaterial=uy(r,t,e)}return s}_compileMaterial(t){let e=new He(new Se,t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,i,s,r){let c=new Be(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Bf),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new bi,new vi({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Bf),f=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):_===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let M=this._cubeSize;Ns(s,_*M,E>2?M:0,M,M),d.setRenderTarget(s),f&&d.render(y,c),d.render(t,c)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ai||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ns(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Nr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,p=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Pi?i-g+Pi:0),f=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,Ns(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(o,Nr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Ns(t,m,f,3*y,2*y),s.setRenderTarget(t),s.render(o,Nr)}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=l;let u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$i-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):$i;m>$i&&Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);let f=[],b=0;for(let w=0;w<$i;++w){let x=w/y,T=Math.exp(-x*x/2);f.push(T),w===0?b+=T:w<m&&(b+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;let _=this._sizeLods[s],M=3*_*(s>E-Pi?s-E+Pi:0),S=4*(this._cubeSize-_);Ns(e,M,S,3*_,2*_),c.setRenderTarget(e),c.render(d,Nr)}};function hy(n){let t=[],e=[],i=[],s=n,r=n-Pi+1+Of.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Pi?c=Of[a-n+Pi-1]:a===0&&(c=0),e.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,y=3,m=2,f=1,b=new Float32Array(y*g*p),E=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,x=S>2?0:-1,T=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];b.set(T,y*g*S),E.set(u,m*g*S);let P=[S,S,S,S,S,S];_.set(P,f*g*S)}let M=new Se;M.setAttribute("position",new Ye(b,y)),M.setAttribute("uv",new Ye(E,m)),M.setAttribute("faceIndex",new Ye(_,f)),i.push(new He(M,null)),s>Pi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function zf(n,t,e){let i=new sn(n,t,e);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function uy(n,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ly,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fy(n,t,e){let i=new Float32Array($i),s=new V(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function kf(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Vf(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var dl=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bi(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:kn});r.uniforms.tEquirect.value=e;let a=new He(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=De),new yo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function dy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===So||p===wo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new dl(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===So||p===wo,y=p===Ai||p===Yi;if(g||y){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new fl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||y&&b&&c(b)?(i===null&&(i=new fl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===So?u.mapping=Ai:p===wo&&(u.mapping=Yi),u}function c(u){let p=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function l(u){let p=u.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function py(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Wi("WebGLRenderer: "+i+" extension not supported."),s}}}function my(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)t.update(u[p],n.ARRAY_BUFFER)}function l(d){let u=[],p=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(p!==null){let b=p.array;y=p.version;for(let E=0,_=b.length;E<_;E+=3){let M=b[E+0],S=b[E+1],w=b[E+2];u.push(M,S,S,w,w,M)}}else{let b=g.array;y=g.version;for(let E=0,_=b.length/3-1;E<_;E+=3){let M=E+0,S=E+1,w=E+2;u.push(M,S,S,w,w,M)}}let m=new(g.count>=65535?lr:or)(u,1);m.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function gy(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function l(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*a,p),e.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function _y(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xy(n,t,e){let i=new WeakMap,s=new de;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let _=o.attributes.position.count*E,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*M*4*d),w=new rr(S,_,M,d);w.type=En,w.needsUpdate=!0;let x=E*4;for(let P=0;P<d;P++){let D=m[P],I=f[P],B=b[P],R=_*M*4*P;for(let N=0;N<D.count;N++){let U=N*x;p===!0&&(s.fromBufferAttribute(D,N),S[R+U+0]=s.x,S[R+U+1]=s.y,S[R+U+2]=s.z,S[R+U+3]=0),g===!0&&(s.fromBufferAttribute(I,N),S[R+U+4]=s.x,S[R+U+5]=s.y,S[R+U+6]=s.z,S[R+U+7]=0),y===!0&&(s.fromBufferAttribute(B,N),S[R+U+8]=s.x,S[R+U+9]=s.y,S[R+U+10]=s.z,S[R+U+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new At(_,M)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yy(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var vy={[Oc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[kc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function by(n,t,e,i,s,r){let a=new sn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ei(t,e):void 0}),o=new sn(t,e,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new Se;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));let l=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new He(c,l),d=new Mr(-1,1,1,-1,0,1),u=null,p=null,g=!1,y,m=null,f=[],b=!1;this.setSize=function(E,_){a.setSize(E,_),o.setSize(E,_);for(let M=0;M<f.length;M++){let S=f[M];S.setSize&&S.setSize(E,_)}},this.setEffects=function(E){f=E,b=f.length>0&&f[0].isRenderPass===!0;let _=a.width,M=a.height;for(let S=0;S<f.length;S++){let w=f[S];w.setSize&&w.setSize(_,M)}},this.begin=function(E,_){if(g||E.toneMapping===Sn&&f.length===0)return!1;if(m=_,_!==null){let M=_.width,S=_.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return b===!1&&E.setRenderTarget(a),y=E.toneMapping,E.toneMapping=Sn,!0},this.hasRenderPass=function(){return b},this.end=function(E,_){E.toneMapping=y,g=!0;let M=a,S=o;for(let w=0;w<f.length;w++){let x=f[w];if(x.enabled!==!1&&(x.render(E,S,M,_),x.needsSwap!==!1)){let T=M;M=S,S=T}}if(u!==E.outputColorSpace||p!==E.toneMapping){u=E.outputColorSpace,p=E.toneMapping,l.defines={},Jt.getTransfer(u)===te&&(l.defines.SRGB_TRANSFER="");let w=vy[p];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(m),E.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var od=new Ve,_h=new ei(1,1),ld=new rr,cd=new Ka,hd=new pr,Gf=[],Hf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Fs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gl(n,t){let e=Hf[t];e===void 0&&(e=new Int32Array(t),Hf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function My(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Ty(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),Ee(e,i)}}function Ay(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Xf.set(i),n.uniformMatrix3fv(this.addr,!1,Xf),Ee(e,i)}}function Cy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Wf.set(i),n.uniformMatrix4fv(this.addr,!1,Wf),Ee(e,i)}}function Ry(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function Py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function Dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Ly(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function Uy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Oy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_h.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=_h):r=od,e.setTexture2D(t||r,s)}function By(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||cd,s)}function zy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hd,s)}function ky(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ld,s)}function Vy(n){switch(n){case 5126:return My;case 35664:return Sy;case 35665:return wy;case 35666:return Ey;case 35674:return Ty;case 35675:return Ay;case 35676:return Cy;case 5124:case 35670:return Ry;case 35667:case 35671:return Iy;case 35668:case 35672:return Py;case 35669:case 35673:return Dy;case 5125:return Ly;case 36294:return Ny;case 36295:return Uy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}function Gy(n,t){n.uniform1fv(this.addr,t)}function Hy(n,t){let e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Wy(n,t){let e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Xy(n,t){let e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function qy(n,t){let e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yy(n,t){let e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zy(n,t){let e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $y(n,t){n.uniform1iv(this.addr,t)}function Jy(n,t){n.uniform2iv(this.addr,t)}function Ky(n,t){n.uniform3iv(this.addr,t)}function jy(n,t){n.uniform4iv(this.addr,t)}function Qy(n,t){n.uniform1uiv(this.addr,t)}function tv(n,t){n.uniform2uiv(this.addr,t)}function ev(n,t){n.uniform3uiv(this.addr,t)}function nv(n,t){n.uniform4uiv(this.addr,t)}function iv(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=_h:a=od;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sv(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cd,r[a])}function rv(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hd,r[a])}function av(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ld,r[a])}function ov(n){switch(n){case 5126:return Gy;case 35664:return Hy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return Zy;case 5124:case 35670:return $y;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vy(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ov(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Yf(n,t){n.seq.push(t),n.map[t.id]=t}function lv(n,t,e){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),a=mh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yf(e,l===void 0?new xh(o,n,t):new yh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new vh(o),Yf(e,d)),e=d}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);lv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Zf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var cv=37297,hv=0;function uv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var $f=new kt;function fv(n){Jt._getMatrix($f,Jt.workingColorSpace,n);let t=`mat3( ${$f.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case er:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+uv(n.getShaderSource(t),o)}else return r}function dv(n,t){let e=fv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var pv={[Oc]:"Linear",[Bc]:"Reinhard",[zc]:"Cineon",[kc]:"ACESFilmic",[Gc]:"AgX",[Hc]:"Neutral",[Vc]:"Custom"};function mv(n,t){let e=pv[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new V;function gv(){Jt.getLuminanceCoefficients(ul);let n=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function xv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Fr(n){return n!==""}function Kf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(vv,Mv)}var bv=new Map;function Mv(n,t){let e=Wt[t];if(e===void 0){let i=bv.get(t);if(i!==void 0)e=Wt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bh(e)}var Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(n){return n.replace(Sv,wv)}function wv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ev={[Er]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Tv(n){return Ev[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Av={[Ai]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function Cv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Av[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rv={[Yi]:"ENVMAP_MODE_REFRACTION"};function Iv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pv={[Fc]:"ENVMAP_BLENDING_MULTIPLY",[xf]:"ENVMAP_BLENDING_MIX",[yf]:"ENVMAP_BLENDING_ADD"};function Dv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pv[n.combine]||"ENVMAP_BLENDING_NONE"}function Lv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Nv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Tv(e),l=Cv(e),h=Iv(e),d=Dv(e),u=Lv(e),p=_v(e),g=xv(r),y=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),f.length>0&&(f+=`
`)):(m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),f=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),a=bh(a),a=Kf(a,e),a=jf(a,e),o=bh(o),o=Kf(o,e),o=jf(o,e),a=Qf(a),o=Qf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=b+m+a,_=b+f+o,M=Zf(s,s.VERTEX_SHADER,E),S=Zf(s,s.FRAGMENT_SHADER,_);s.attachShader(y,M),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(D){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(S)||"",N=I.trim(),U=B.trim(),L=R.trim(),O=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,M,S);else{let Z=Jf(s,M,"vertex"),tt=Jf(s,S,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+Z+`
`+tt)}else N!==""?Pt("WebGLProgram: Program Info Log:",N):(U===""||L==="")&&(X=!1);X&&(D.diagnostics={runnable:O,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:L,prefix:f}})}s.deleteShader(M),s.deleteShader(S),x=new Us(s,y),T=yv(s,y)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,cv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=S,this}var Uv=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sh(t),e.set(t,i)),i}},Sh=class{constructor(t){this.id=Uv++,this.code=t,this.usedTimes=0}};function Fv(n){return n===Ii||n===Dr||n===Lr}function Ov(n,t,e,i,s,r){let a=new ws,o=new Mh,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,P,D,I,B){let R=D.fog,N=I.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||U,L),X=O&&O.mapping===Tr?O.image.height:null,Z=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=tt!==void 0?tt.length:0,Ct=0;N.morphAttributes.position!==void 0&&(Ct=1),N.morphAttributes.normal!==void 0&&(Ct=2),N.morphAttributes.color!==void 0&&(Ct=3);let Ut,Lt,z,et;if(Z){let St=Hn[Z];Ut=St.vertexShader,Lt=St.fragmentShader}else{Ut=x.vertexShader,Lt=x.fragmentShader;let St=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,St,me),z=St.id,et=me.id}let j=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),_t=I.isInstancedMesh===!0,xt=I.isBatchedMesh===!0,qt=!!x.map,Bt=!!x.matcap,Gt=!!O,zt=!!x.aoMap,Vt=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,Ft=!!x.normalMap,$t=!!x.displacementMap,jt=!!x.emissiveMap,re=!!x.metalnessMap,pe=!!x.roughnessMap,G=x.anisotropy>0,xe=x.clearcoat>0,Qt=x.dispersion>0,C=x.iridescence>0,v=x.sheen>0,F=x.transmission>0,W=G&&!!x.anisotropyMap,J=xe&&!!x.clearcoatMap,rt=xe&&!!x.clearcoatNormalMap,at=xe&&!!x.clearcoatRoughnessMap,K=C&&!!x.iridescenceMap,Q=C&&!!x.iridescenceThicknessMap,ot=v&&!!x.sheenColorMap,Mt=v&&!!x.sheenRoughnessMap,ct=!!x.specularMap,lt=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Dt=F&&!!x.transmissionMap,Ot=F&&!!x.thicknessMap,k=!!x.gradientMap,ht=!!x.alphaMap,nt=x.alphaTest>0,ut=!!x.alphaHash,gt=!!x.extensions,st=Sn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(st=n.toneMapping);let Et={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Ut,fragmentShader:Lt,defines:x.defines,customVertexShaderID:z,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xt,batchingColor:xt&&I._colorsTexture!==null,instancing:_t,instancingColor:_t&&I.instanceColor!==null,instancingMorph:_t&&I.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:Bt,envMap:Gt,envMapMode:Gt&&O.mapping,envMapCubeUVHeight:X,aoMap:zt,lightMap:Vt,bumpMap:vt,normalMap:Ft,displacementMap:$t,emissiveMap:jt,normalMapObjectSpace:Ft&&x.normalMapType===Mf,normalMapTangentSpace:Ft&&x.normalMapType===jc,packedNormalMap:Ft&&x.normalMapType===jc&&Fv(x.normalMap.format),metalnessMap:re,roughnessMap:pe,anisotropy:G,anisotropyMap:W,clearcoat:xe,clearcoatMap:J,clearcoatNormalMap:rt,clearcoatRoughnessMap:at,dispersion:Qt,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:ot,sheenRoughnessMap:Mt,specularMap:ct,specularColorMap:lt,specularIntensityMap:Rt,transmission:F,transmissionMap:Dt,thicknessMap:Ot,gradientMap:k,opaque:x.transparent===!1&&x.blending===Xi&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:nt,alphaHash:ut,combine:x.combine,mapUv:qt&&g(x.map.channel),aoMapUv:zt&&g(x.aoMap.channel),lightMapUv:Vt&&g(x.lightMap.channel),bumpMapUv:vt&&g(x.bumpMap.channel),normalMapUv:Ft&&g(x.normalMap.channel),displacementMapUv:$t&&g(x.displacementMap.channel),emissiveMapUv:jt&&g(x.emissiveMap.channel),metalnessMapUv:re&&g(x.metalnessMap.channel),roughnessMapUv:pe&&g(x.roughnessMap.channel),anisotropyMapUv:W&&g(x.anisotropyMap.channel),clearcoatMapUv:J&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(x.sheenRoughnessMap.channel),specularMapUv:ct&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Rt&&g(x.specularIntensityMap.channel),transmissionMapUv:Dt&&g(x.transmissionMap.channel),thicknessMapUv:Ot&&g(x.thicknessMap.channel),alphaMapUv:ht&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ft||G),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(qt||ht),fog:!!R,useFog:x.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Ct,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:jt&&x.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(f(T,x),b(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let T=p[x.type],P;if(T){let D=Hn[T];P=Uf.clone(D.uniforms)}else P=x.uniforms;return P}function _(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Nv(n,T,x,s),l.push(P),h.set(T,P)),P}function M(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:w}}function Bv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ed(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,y,m,f){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},n[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=g,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function c(u,p,g,y,m,f){let b=o(u,p,g,y,m,f);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(u,p,g,y,m,f){let b=o(u,p,g,y,m,f);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p,g){e.length>1&&e.sort(u||zv),i.length>1&&i.sort(p||ed),s.length>1&&s.sort(p||ed),g&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let u=t,p=n.length;u<p;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function kv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new nd,n.set(i,[a])):s>=r.length?(a=new nd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Vv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Zt};break;case"SpotLight":e={position:new V,direction:new V,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function Gv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Hv=0;function Wv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xv(n){let t=new Vv,e=Gv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let s=new V,r=new fe,a=new fe;function o(l){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,b=0,E=0,_=0,M=0,S=0,w=0;l.sort(Wv);for(let T=0,P=l.length;T<P;T++){let D=l[T],I=D.color,B=D.intensity,R=D.distance,N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ii?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=I.r*B,d+=I.g*B,u+=I.b*B;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],B);w++}else if(D.isDirectionalLight){let U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let L=D.shadow,O=e.get(D);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=D.shadow.matrix,b++}i.directional[p]=U,p++}else if(D.isSpotLight){let U=t.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(I).multiplyScalar(B),U.distance=R,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[y]=U;let L=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,L.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[y]=L.matrix,D.castShadow){let O=e.get(D);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=N,_++}y++}else if(D.isRectAreaLight){let U=t.get(D);U.color.copy(I).multiplyScalar(B),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=U,m++}else if(D.isPointLight){let U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){let L=D.shadow,O=e.get(D);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,O.shadowCameraNear=L.camera.near,O.shadowCameraFar=L.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=U,g++}else if(D.isHemisphereLight){let U=t.get(D);U.skyColor.copy(D.color).multiplyScalar(B),U.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[f]=U,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==b||x.numPointShadows!==E||x.numSpotShadows!==_||x.numSpotMaps!==M||x.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=_+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,x.directionalLength=p,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=b,x.numPointShadows=E,x.numSpotShadows=_,x.numSpotMaps=M,x.numLightProbes=w,i.version=Hv++)}function c(l,h){let d=0,u=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let E=l[f];if(E.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(E.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function id(n){let t=new Xv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function qv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new id(n),t.set(s,[o])):r>=a.length?(o=new id(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$v=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Jv=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],sd=new fe,Ur=new V,gh=new V;function Kv(n,t,e){let i=new ur,s=new At,r=new At,a=new de,o=new ao,c=new oo,l={},h=e.maxTextureSize,d={[Qn]:We,[We]:Qn,[zn]:zn},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Yv,fragmentShader:Zv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new He(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;this.render=function(S,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===ju&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Er);let T=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(kn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=f!==this.type;B&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(N=>N.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,N=S.length;R<N;R++){let U=S[R],L=U.shadow;if(L===void 0){Pt("WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let O=L.getFrameExtents();s.multiply(O),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,L.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(L.camera._reversedDepth=X,L.map===null||B===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Ps){if(U.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new sn(s.x,s.y,{format:Ii,type:Vn,minFilter:De,magFilter:De,generateMipmaps:!1}),L.map.texture.name=U.name+".shadowMap",L.map.depthTexture=new ei(s.x,s.y,En),L.map.depthTexture.name=U.name+".shadowMapDepth",L.map.depthTexture.format=On,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Re,L.map.depthTexture.magFilter=Re}else U.isPointLight?(L.map=new dl(s.x),L.map.depthTexture=new io(s.x,wn)):(L.map=new sn(s.x,s.y),L.map.depthTexture=new ei(s.x,s.y,wn)),L.map.depthTexture.name=U.name+".shadowMap",L.map.depthTexture.format=On,this.type===Er?(L.map.depthTexture.compareFunction=X?cl:ll,L.map.depthTexture.minFilter=De,L.map.depthTexture.magFilter=De):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Re,L.map.depthTexture.magFilter=Re);L.camera.updateProjectionMatrix()}let Z=L.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<Z;tt++){if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(L.map),n.clear());let it=L.getViewport(tt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),I.viewport(a)}if(U.isPointLight){let it=L.camera,Ct=L.matrix,Ut=U.distance||it.far;Ut!==it.far&&(it.far=Ut,it.updateProjectionMatrix()),Ur.setFromMatrixPosition(U.matrixWorld),it.position.copy(Ur),gh.copy(it.position),gh.add($v[tt]),it.up.copy(Jv[tt]),it.lookAt(gh),it.updateMatrixWorld(),Ct.makeTranslation(-Ur.x,-Ur.y,-Ur.z),sd.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),L._frustum.setFromProjectionMatrix(sd,it.coordinateSystem,it.reversedDepth)}else L.updateMatrices(U);i=L.getFrustum(),_(w,x,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===Ps&&b(L,x),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,D)};function b(S,w){let x=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new sn(s.x,s.y,{format:Ii,type:Vn})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,x,u,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,x,p,y,null)}function E(S,w,x,T){let P=null,D=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=P.uuid,B=w.uuid,R=l[I];R===void 0&&(R={},l[I]=R);let N=R[B];N===void 0&&(N=P.clone(),R[B]=N,w.addEventListener("dispose",M)),P=N}if(P.visible=w.visible,P.wireframe=w.wireframe,T===Ps?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let I=n.properties.get(P);I.light=x}return P}function _(S,w,x,T,P){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Ps)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let B=t.update(S),R=S.material;if(Array.isArray(R)){let N=B.groups;for(let U=0,L=N.length;U<L;U++){let O=N[U],X=R[O.materialIndex];if(X&&X.visible){let Z=E(S,X,T,P);S.onBeforeShadow(n,S,w,x,B,Z,O),n.renderBufferDirect(x,null,B,Z,S,O),S.onAfterShadow(n,S,w,x,B,Z,O)}}}else if(R.visible){let N=E(S,R,T,P);S.onBeforeShadow(n,S,w,x,B,N,null),n.renderBufferDirect(x,null,B,N,S,null),S.onAfterShadow(n,S,w,x,B,N,null)}}let I=S.children;for(let B=0,R=I.length;B<R;B++)_(I[B],w,x,T,P)}function M(S){S.target.removeEventListener("dispose",M);for(let x in l){let T=l[x],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function jv(n,t){function e(){let k=!1,ht=new de,nt=null,ut=new de(0,0,0,0);return{setMask:function(gt){nt!==gt&&!k&&(n.colorMask(gt,gt,gt,gt),nt=gt)},setLocked:function(gt){k=gt},setClear:function(gt,st,Et,St,me){me===!0&&(gt*=St,st*=St,Et*=St),ht.set(gt,st,Et,St),ut.equals(ht)===!1&&(n.clearColor(gt,st,Et,St),ut.copy(ht))},reset:function(){k=!1,nt=null,ut.set(-1,0,0,0)}}}function i(){let k=!1,ht=!1,nt=null,ut=null,gt=null;return{setReversed:function(st){if(ht!==st){let Et=t.get("EXT_clip_control");st?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ht=st;let St=gt;gt=null,this.setClear(St)}},getReversed:function(){return ht},setTest:function(st){st?j(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(st){nt!==st&&!k&&(n.depthMask(st),nt=st)},setFunc:function(st){if(ht&&(st=Df[st]),ut!==st){switch(st){case Ba:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case qi:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Ga:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=st}},setLocked:function(st){k=st},setClear:function(st){gt!==st&&(gt=st,ht&&(st=1-st),n.clearDepth(st))},reset:function(){k=!1,nt=null,ut=null,gt=null,ht=!1}}}function s(){let k=!1,ht=null,nt=null,ut=null,gt=null,st=null,Et=null,St=null,me=null;return{setTest:function(le){k||(le?j(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(le){ht!==le&&!k&&(n.stencilMask(le),ht=le)},setFunc:function(le,Dn,Ln){(nt!==le||ut!==Dn||gt!==Ln)&&(n.stencilFunc(le,Dn,Ln),nt=le,ut=Dn,gt=Ln)},setOp:function(le,Dn,Ln){(st!==le||Et!==Dn||St!==Ln)&&(n.stencilOp(le,Dn,Ln),st=le,Et=Dn,St=Ln)},setLocked:function(le){k=le},setClear:function(le){me!==le&&(n.clearStencil(le),me=le)},reset:function(){k=!1,ht=null,nt=null,ut=null,gt=null,st=null,Et=null,St=null,me=null}}}let r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,b=null,E=null,_=null,M=null,S=null,w=null,x=new Zt(0,0,0),T=0,P=!1,D=null,I=null,B=null,R=null,N=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),L=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),L=O>=2);let Z=null,tt={},it=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Ut=new de().fromArray(it),Lt=new de().fromArray(Ct);function z(k,ht,nt,ut){let gt=new Uint8Array(4),st=n.createTexture();n.bindTexture(k,st),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<nt;Et++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ht+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return st}let et={};et[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(qi),vt(!1),Ft(Dc),j(n.CULL_FACE),zt(kn);function j(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function ft(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function _t(k,ht){return u[k]!==ht?(n.bindFramebuffer(k,ht),u[k]=ht,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function xt(k,ht){let nt=g,ut=!1;if(k){nt=p.get(ht),nt===void 0&&(nt=[],p.set(ht,nt));let gt=k.textures;if(nt.length!==gt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Et=gt.length;st<Et;st++)nt[st]=n.COLOR_ATTACHMENT0+st;nt.length=gt.length,ut=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,ut=!0);ut&&n.drawBuffers(nt)}function qt(k){return y!==k?(n.useProgram(k),y=k,!0):!1}let Bt={[gi]:n.FUNC_ADD,[tf]:n.FUNC_SUBTRACT,[ef]:n.FUNC_REVERSE_SUBTRACT};Bt[nf]=n.MIN,Bt[sf]=n.MAX;let Gt={[rf]:n.ZERO,[af]:n.ONE,[of]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[df]:n.SRC_ALPHA_SATURATE,[uf]:n.DST_COLOR,[cf]:n.DST_ALPHA,[lf]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[ff]:n.ONE_MINUS_DST_COLOR,[hf]:n.ONE_MINUS_DST_ALPHA,[pf]:n.CONSTANT_COLOR,[mf]:n.ONE_MINUS_CONSTANT_COLOR,[gf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(k,ht,nt,ut,gt,st,Et,St,me,le){if(k===kn){m===!0&&(ft(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),k!==Qu){if(k!==f||le!==P){if((b!==gi||M!==gi)&&(n.blendEquation(n.FUNC_ADD),b=gi,M=gi),le)switch(k){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFunc(n.ONE,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",k);break}else switch(k){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nc:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",k);break}E=null,_=null,S=null,w=null,x.set(0,0,0),T=0,f=k,P=le}return}gt=gt||ht,st=st||nt,Et=Et||ut,(ht!==b||gt!==M)&&(n.blendEquationSeparate(Bt[ht],Bt[gt]),b=ht,M=gt),(nt!==E||ut!==_||st!==S||Et!==w)&&(n.blendFuncSeparate(Gt[nt],Gt[ut],Gt[st],Gt[Et]),E=nt,_=ut,S=st,w=Et),(St.equals(x)===!1||me!==T)&&(n.blendColor(St.r,St.g,St.b,me),x.copy(St),T=me),f=k,P=!1}function Vt(k,ht){k.side===zn?ft(n.CULL_FACE):j(n.CULL_FACE);let nt=k.side===We;ht&&(nt=!nt),vt(nt),k.blending===Xi&&k.transparent===!1?zt(kn):zt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ut=k.stencilWrite;o.setTest(ut),ut&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){D!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),D=k)}function Ft(k){k!==Ju?(j(n.CULL_FACE),k!==I&&(k===Dc?n.cullFace(n.BACK):k===Ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),I=k}function $t(k){k!==B&&(L&&n.lineWidth(k),B=k)}function jt(k,ht,nt){k?(j(n.POLYGON_OFFSET_FILL),(R!==ht||N!==nt)&&(R=ht,N=nt,a.getReversed()&&(ht=-ht),n.polygonOffset(ht,nt))):ft(n.POLYGON_OFFSET_FILL)}function re(k){k?j(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function pe(k){k===void 0&&(k=n.TEXTURE0+U-1),Z!==k&&(n.activeTexture(k),Z=k)}function G(k,ht,nt){nt===void 0&&(Z===null?nt=n.TEXTURE0+U-1:nt=Z);let ut=tt[nt];ut===void 0&&(ut={type:void 0,texture:void 0},tt[nt]=ut),(ut.type!==k||ut.texture!==ht)&&(Z!==nt&&(n.activeTexture(nt),Z=nt),n.bindTexture(k,ht||et[k]),ut.type=k,ut.texture=ht)}function xe(){let k=tt[Z];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function v(){try{n.texSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function F(){try{n.texSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function rt(){try{n.texStorage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function at(){try{n.texStorage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function K(){try{n.texImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function Q(){try{n.texImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function ot(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function Mt(k,ht){d[k]!==ht&&(n.pixelStorei(k,ht),d[k]=ht)}function ct(k){Ut.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Ut.copy(k))}function lt(k){Lt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Lt.copy(k))}function Rt(k,ht){let nt=l.get(ht);nt===void 0&&(nt=new WeakMap,l.set(ht,nt));let ut=nt.get(k);ut===void 0&&(ut=n.getUniformBlockIndex(ht,k.name),nt.set(k,ut))}function Dt(k,ht){let ut=l.get(ht).get(k);c.get(ht)!==ut&&(n.uniformBlockBinding(ht,ut,k.__bindingPointIndex),c.set(ht,ut))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,tt={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,b=null,E=null,_=null,M=null,S=null,w=null,x=new Zt(0,0,0),T=0,P=!1,D=null,I=null,B=null,R=null,N=null,Ut.set(0,0,n.canvas.width,n.canvas.height),Lt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ft,bindFramebuffer:_t,drawBuffers:xt,useProgram:qt,setBlending:zt,setMaterial:Vt,setFlipSided:vt,setCullFace:Ft,setLineWidth:$t,setPolygonOffset:jt,setScissorTest:re,activeTexture:pe,bindTexture:G,unbindTexture:xe,compressedTexImage2D:Qt,compressedTexImage3D:C,texImage2D:K,texImage3D:Q,pixelStorei:Mt,getParameter:ot,updateUBOMapping:Rt,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:at,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:ct,viewport:lt,reset:Ot}}function Qv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function y(C,v){return g?new OffscreenCanvas(C,v):ir("canvas")}function m(C,v,F){let W=1,J=Qt(C);if((J.width>F||J.height>F)&&(W=F/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let rt=Math.floor(W*J.width),at=Math.floor(W*J.height);u===void 0&&(u=y(rt,at));let K=v?y(rt,at):u;return K.width=rt,K.height=at,K.getContext("2d").drawImage(C,0,0,rt,at),Pt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+rt+"x"+at+")."),K}else return"data"in C&&Pt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function f(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,v,F,W,J,rt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;W&&(at=t.get("EXT_texture_norm16"),at||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8),F===n.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),F===n.SHORT&&at&&(K=at.R16_SNORM_EXT)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),v===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8),F===n.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),F===n.SHORT&&at&&(K=at.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),F===n.SHORT&&at&&(K=at.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){let Q=rt?er:Jt.getTransfer(J);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Q===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),F===n.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(C,v){let F;return C?v===null||v===wn||v===Ls?F=n.DEPTH24_STENCIL8:v===En?F=n.DEPTH32F_STENCIL8:v===Ds&&(F=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===Ls?F=n.DEPTH_COMPONENT24:v===En?F=n.DEPTH_COMPONENT32F:v===Ds&&(F=n.DEPTH_COMPONENT16),F}function S(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Re&&C.minFilter!==De?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),D(v)}function T(C){let v=i.get(C);if(v.__webglInit===void 0)return;let F=C.source,W=p.get(F);if(W){let J=W[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(W).length===0&&p.delete(F)}i.remove(C)}function P(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let F=C.source,W=p.get(F);delete W[v.__cacheKey],a.memory.textures--}function D(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let J=0;J<v.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[W][J]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=C.textures;for(let W=0,J=F.length;W<J;W++){let rt=i.get(F[W]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(F[W])}i.remove(C)}let I=0;function B(){I=0}function R(){return I}function N(C){I=C}function U(){let C=I;return C>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function L(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function O(C,v){let F=i.get(C);if(C.isVideoTexture&&G(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){let W=C.image;if(W===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(F,C,v);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function X(C,v){let F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){ft(F,C,v);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Z(C,v){let F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){ft(F,C,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function tt(C,v){let F=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){_t(F,C,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let it={[Xa]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},Ct={[Re]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[De]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Ut={[Sf]:n.NEVER,[Cf]:n.ALWAYS,[wf]:n.LESS,[ll]:n.LEQUAL,[Ef]:n.EQUAL,[cl]:n.GEQUAL,[Tf]:n.GREATER,[Af]:n.NOTEQUAL};function Lt(C,v){if(v.type===En&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===De||v.magFilter===Eo||v.magFilter===Ar||v.magFilter===Ci||v.minFilter===De||v.minFilter===Eo||v.minFilter===Ar||v.minFilter===Ci)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,it[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ct[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==Ar&&v.minFilter!==Ci||v.type===En&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function z(C,v){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let W=v.source,J=p.get(W);J===void 0&&(J={},p.set(W,J));let rt=L(v);if(rt!==C.__cacheKey){J[rt]===void 0&&(J[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[rt].usedTimes++;let at=J[C.__cacheKey];at!==void 0&&(J[C.__cacheKey].usedTimes--,at.usedTimes===0&&P(v)),C.__cacheKey=rt,C.__webglTexture=J[rt].texture}return F}function et(C,v,F){return Math.floor(Math.floor(C/F)/v)}function j(C,v,F,W){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{rt.sort((Mt,ct)=>Mt.start-ct.start);let at=0;for(let Mt=1;Mt<rt.length;Mt++){let ct=rt[at],lt=rt[Mt],Rt=ct.start+ct.count,Dt=et(lt.start,v.width,4),Ot=et(ct.start,v.width,4);lt.start<=Rt+1&&Dt===Ot&&et(lt.start+lt.count-1,v.width,4)===Dt?ct.count=Math.max(ct.count,lt.start+lt.count-ct.start):(++at,rt[at]=lt)}rt.length=at+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Mt=0,ct=rt.length;Mt<ct;Mt++){let lt=rt[Mt],Rt=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),Ot=Rt%v.width,k=Math.floor(Rt/v.width),ht=Dt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,Ot,k,ht,nt,F,W,v.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function ft(C,v,F){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let J=z(C,v),rt=v.source;e.bindTexture(W,C.__webglTexture,n.TEXTURE0+F);let at=i.get(rt);if(rt.version!==at.__version||J===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let nt=Jt.getPrimaries(Jt.workingColorSpace),ut=v.colorSpace===ni?null:Jt.getPrimaries(v.colorSpace),gt=v.colorSpace===ni||nt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,s.maxTextureSize);Q=xe(v,Q);let ot=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),ct=_(v.internalFormat,ot,Mt,v.normalized,v.colorSpace,v.isVideoTexture);Lt(W,v);let lt,Rt=v.mipmaps,Dt=v.isVideoTexture!==!0,Ot=at.__version===void 0||J===!0,k=rt.dataReady,ht=S(v,Q);if(v.isDepthTexture)ct=M(v.format===Ri,v.type),Ot&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,ct,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,ct,Q.width,Q.height,0,ot,Mt,null));else if(v.isDataTexture)if(Rt.length>0){Dt&&Ot&&e.texStorage2D(n.TEXTURE_2D,ht,ct,Rt[0].width,Rt[0].height);for(let nt=0,ut=Rt.length;nt<ut;nt++)lt=Rt[nt],Dt?k&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,Mt,lt.data):e.texImage2D(n.TEXTURE_2D,nt,ct,lt.width,lt.height,0,ot,Mt,lt.data);v.generateMipmaps=!1}else Dt?(Ot&&e.texStorage2D(n.TEXTURE_2D,ht,ct,Q.width,Q.height),k&&j(v,Q,ot,Mt)):e.texImage2D(n.TEXTURE_2D,0,ct,Q.width,Q.height,0,ot,Mt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&Ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,ct,Rt[0].width,Rt[0].height,Q.depth);for(let nt=0,ut=Rt.length;nt<ut;nt++)if(lt=Rt[nt],v.format!==un)if(ot!==null)if(Dt){if(k)if(v.layerUpdates.size>0){let gt=rh(lt.width,lt.height,v.format,v.type);for(let st of v.layerUpdates){let Et=lt.data.subarray(st*gt/lt.data.BYTES_PER_ELEMENT,(st+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,st,lt.width,lt.height,1,ot,Et)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,Q.depth,ot,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,ct,lt.width,lt.height,Q.depth,0,lt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,Q.depth,ot,Mt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,ct,lt.width,lt.height,Q.depth,0,ot,Mt,lt.data)}else{Dt&&Ot&&e.texStorage2D(n.TEXTURE_2D,ht,ct,Rt[0].width,Rt[0].height);for(let nt=0,ut=Rt.length;nt<ut;nt++)lt=Rt[nt],v.format!==un?ot!==null?Dt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,ct,lt.width,lt.height,0,lt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?k&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,Mt,lt.data):e.texImage2D(n.TEXTURE_2D,nt,ct,lt.width,lt.height,0,ot,Mt,lt.data)}else if(v.isDataArrayTexture)if(Dt){if(Ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,ct,Q.width,Q.height,Q.depth),k)if(v.layerUpdates.size>0){let nt=rh(Q.width,Q.height,v.format,v.type);for(let ut of v.layerUpdates){let gt=Q.data.subarray(ut*nt/Q.data.BYTES_PER_ELEMENT,(ut+1)*nt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,ot,Mt,gt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ot,Mt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,Q.width,Q.height,Q.depth,0,ot,Mt,Q.data);else if(v.isData3DTexture)Dt?(Ot&&e.texStorage3D(n.TEXTURE_3D,ht,ct,Q.width,Q.height,Q.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ot,Mt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,ct,Q.width,Q.height,Q.depth,0,ot,Mt,Q.data);else if(v.isFramebufferTexture){if(Ot)if(Dt)e.texStorage2D(n.TEXTURE_2D,ht,ct,Q.width,Q.height);else{let nt=Q.width,ut=Q.height;for(let gt=0;gt<ht;gt++)e.texImage2D(n.TEXTURE_2D,gt,ct,nt,ut,0,ot,Mt,null),nt>>=1,ut>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Q.parentNode!==nt){nt.appendChild(Q),d.add(v),nt.onpaint=ut=>{let gt=ut.changedElements;for(let st of d)gt.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let gt=n.RGBA,st=n.RGBA,Et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,gt,st,Et,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Dt&&Ot){let nt=Qt(Rt[0]);e.texStorage2D(n.TEXTURE_2D,ht,ct,nt.width,nt.height)}for(let nt=0,ut=Rt.length;nt<ut;nt++)lt=Rt[nt],Dt?k&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ot,Mt,lt):e.texImage2D(n.TEXTURE_2D,nt,ct,ot,Mt,lt);v.generateMipmaps=!1}else if(Dt){if(Ot){let nt=Qt(Q);e.texStorage2D(n.TEXTURE_2D,ht,ct,nt.width,nt.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Mt,Q)}else e.texImage2D(n.TEXTURE_2D,0,ct,ot,Mt,Q);f(v)&&b(W),at.__version=rt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function _t(C,v,F){if(v.image.length!==6)return;let W=z(C,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+F);let rt=i.get(J);if(J.version!==rt.__version||W===!0){e.activeTexture(n.TEXTURE0+F);let at=Jt.getPrimaries(Jt.workingColorSpace),K=v.colorSpace===ni?null:Jt.getPrimaries(v.colorSpace),Q=v.colorSpace===ni||at===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ot=v.isCompressedTexture||v.image[0].isCompressedTexture,Mt=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let st=0;st<6;st++)!ot&&!Mt?ct[st]=m(v.image[st],!0,s.maxCubemapSize):ct[st]=Mt?v.image[st].image:v.image[st],ct[st]=xe(v,ct[st]);let lt=ct[0],Rt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Ot=_(v.internalFormat,Rt,Dt,v.normalized,v.colorSpace),k=v.isVideoTexture!==!0,ht=rt.__version===void 0||W===!0,nt=J.dataReady,ut=S(v,lt);Lt(n.TEXTURE_CUBE_MAP,v);let gt;if(ot){k&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ot,lt.width,lt.height);for(let st=0;st<6;st++){gt=ct[st].mipmaps;for(let Et=0;Et<gt.length;Et++){let St=gt[Et];v.format!==un?Rt!==null?k?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,St.width,St.height,Rt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Ot,St.width,St.height,0,St.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,St.width,St.height,Rt,Dt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Ot,St.width,St.height,0,Rt,Dt,St.data)}}}else{if(gt=v.mipmaps,k&&ht){gt.length>0&&ut++;let st=Qt(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ot,st.width,st.height)}for(let st=0;st<6;st++)if(Mt){k?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ct[st].width,ct[st].height,Rt,Dt,ct[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,ct[st].width,ct[st].height,0,Rt,Dt,ct[st].data);for(let Et=0;Et<gt.length;Et++){let me=gt[Et].image[st].image;k?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,me.width,me.height,Rt,Dt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Ot,me.width,me.height,0,Rt,Dt,me.data)}}else{k?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt,Dt,ct[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,Rt,Dt,ct[st]);for(let Et=0;Et<gt.length;Et++){let St=gt[Et];k?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Rt,Dt,St.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Ot,Rt,Dt,St.image[st])}}}f(v)&&b(n.TEXTURE_CUBE_MAP),rt.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function xt(C,v,F,W,J,rt){let at=r.convert(F.format,F.colorSpace),K=r.convert(F.type),Q=_(F.internalFormat,at,K,F.normalized,F.colorSpace),ot=i.get(v),Mt=i.get(F);if(Mt.__renderTarget=v,!ot.__hasExternalTextures){let ct=Math.max(1,v.width>>rt),lt=Math.max(1,v.height>>rt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,rt,Q,ct,lt,v.depth,0,at,K,null):e.texImage2D(J,rt,Q,ct,lt,0,at,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,Mt.__webglTexture,0,re(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,Mt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(C,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let W=v.depthTexture,J=W&&W.isDepthTexture?W.type:null,rt=M(v.stencilBuffer,J),at=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(v),rt,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(v),rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,rt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,C)}else{let W=v.textures;for(let J=0;J<W.length;J++){let rt=W[J],at=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),Q=_(rt.internalFormat,at,K,rt.normalized,rt.colorSpace);pe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(v),Q,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(v),Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(C,v,F){let W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,v.depthTexture);let ot=r.convert(v.depthTexture.format),Mt=r.convert(v.depthTexture.type),ct;v.depthTexture.format===On?ct=n.DEPTH_COMPONENT24:v.depthTexture.format===Ri&&(ct=n.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ct,v.width,v.height,0,ot,Mt,null)}}else O(v.depthTexture,0);let rt=J.__webglTexture,at=re(v),K=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Q=v.depthTexture.format===Ri?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===On)pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,rt,0);else if(v.depthTexture.format===Ri)pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,rt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(C){let v=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=W}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let W=0;W<6;W++)Bt(v.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?Bt(v.__webglFramebuffer[0],C,0):Bt(v.__webglFramebuffer,C,0)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),qt(v.__webglDepthbuffer[W],C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),qt(v.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(C,v,F){let W=i.get(C);v!==void 0&&xt(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Gt(C)}function Vt(C){let v=C.texture,F=i.get(C),W=i.get(v);C.addEventListener("dispose",x);let J=C.textures,rt=C.isWebGLCubeRenderTarget===!0,at=J.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),rt){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Q=0;Q<v.mipmaps.length;Q++)F.__webglFramebuffer[K][Q]=n.createFramebuffer()}else F.__webglFramebuffer[K]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)F.__webglFramebuffer[K]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(at)for(let K=0,Q=J.length;K<Q;K++){let ot=i.get(J[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&pe(C)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let Q=J[K];F.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let ot=r.convert(Q.format,Q.colorSpace),Mt=r.convert(Q.type),ct=_(Q.internalFormat,ot,Mt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),lt=re(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ct,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,F.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)xt(F.__webglFramebuffer[K][Q],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else xt(F.__webglFramebuffer[K],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(v)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,Q=J.length;K<Q;K++){let ot=J[K],Mt=i.get(ot),ct=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Mt.__webglTexture),Lt(ct,ot),xt(F.__webglFramebuffer,C,ot,n.COLOR_ATTACHMENT0+K,ct,0),f(ot)&&b(ct)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),Lt(K,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)xt(F.__webglFramebuffer[Q],C,v,n.COLOR_ATTACHMENT0,K,Q);else xt(F.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,K,0);f(v)&&b(K),e.unbindTexture()}C.depthBuffer&&Gt(C)}function vt(C){let v=C.textures;for(let F=0,W=v.length;F<W;F++){let J=v[F];if(f(J)){let rt=E(C),at=i.get(J).__webglTexture;e.bindTexture(rt,at),b(rt),e.unbindTexture()}}}let Ft=[],$t=[];function jt(C){if(C.samples>0){if(pe(C)===!1){let v=C.textures,F=C.width,W=C.height,J=n.COLOR_BUFFER_BIT,rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(C),K=v.length>1;if(K)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Mt=i.get(v[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,J,n.NEAREST),c===!0&&(Ft.length=0,$t.length=0,Ft.push(n.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ft.push(rt),$t.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Mt=i.get(v[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function re(C){return Math.min(s.maxSamples,C.samples)}function pe(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function xe(C,v){let F=C.colorSpace,W=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==tr&&F!==ni&&(Jt.getTransfer(F)===te?(W!==un||J!==on)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",F)),v}function Qt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.getTextureUnits=R,this.setTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=tt,this.rebindTextures=zt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tb(n,t){function e(i,s=ni){let r,a=Jt.getTransfer(s);if(i===on)return n.UNSIGNED_BYTE;if(i===Ao)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Co)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xc)return n.BYTE;if(i===qc)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===To)return n.INT;if(i===wn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===Vn)return n.HALF_FLOAT;if(i===$c)return n.ALPHA;if(i===Jc)return n.RGB;if(i===un)return n.RGBA;if(i===On)return n.DEPTH_COMPONENT;if(i===Ri)return n.DEPTH_STENCIL;if(i===Kc)return n.RED;if(i===Ro)return n.RED_INTEGER;if(i===Ii)return n.RG;if(i===Io)return n.RG_INTEGER;if(i===Po)return n.RGBA_INTEGER;if(i===Cr||i===Rr||i===Ir||i===Pr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===Lo||i===No||i===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Dr||i===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fo||i===Oo)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zo)return r.COMPRESSED_R11_EAC;if(i===ko)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Dr)return r.COMPRESSED_RG11_EAC;if(i===Vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Go||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===jo||i===Qo||i===tl||i===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Go)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ho)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ko)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===il||i===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===nl)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===al||i===Lr||i===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new rn({vertexShader:eb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Mn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new wh,f={},b=e.getContextAttributes(),E=null,_=null,M=[],S=[],w=new At,x=null,T=new Be;T.viewport=new de;let P=new Be;P.viewport=new de;let D=[T,P],I=new vo,B=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let et=M[z];return et===void 0&&(et=new Es,M[z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(z){let et=M[z];return et===void 0&&(et=new Es,M[z]=et),et.getGripSpace()},this.getHand=function(z){let et=M[z];return et===void 0&&(et=new Es,M[z]=et),et.getHandSpace()};function N(z){let et=S.indexOf(z.inputSource);if(et===-1)return;let j=M[et];j!==void 0&&(j.update(z.inputSource,z.frame,l||a),j.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",L);for(let z=0;z<M.length;z++){let et=S[z];et!==null&&(S[z]=null,M[z].disconnect(et))}B=null,R=null,m.reset();for(let z in f)delete f[z];t.setRenderTarget(E),p=null,u=null,d=null,s=null,_=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",L),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ft=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=b.stencil?Ri:On,ft=b.stencil?Ls:wn);let xt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new sn(u.textureWidth,u.textureHeight,{format:un,type:on,depthTexture:new ei(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new sn(p.framebufferWidth,p.framebufferHeight,{format:un,type:on,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(z){for(let et=0;et<z.removed.length;et++){let j=z.removed[et],ft=S.indexOf(j);ft>=0&&(S[ft]=null,M[ft].disconnect(j))}for(let et=0;et<z.added.length;et++){let j=z.added[et],ft=S.indexOf(j);if(ft===-1){for(let xt=0;xt<M.length;xt++)if(xt>=S.length){S.push(j),ft=xt;break}else if(S[xt]===null){S[xt]=j,ft=xt;break}if(ft===-1)break}let _t=M[ft];_t&&_t.connect(j)}}let O=new V,X=new V;function Z(z,et,j){O.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(j.matrixWorld);let ft=O.distanceTo(X),_t=et.projectionMatrix.elements,xt=j.projectionMatrix.elements,qt=_t[14]/(_t[10]-1),Bt=_t[14]/(_t[10]+1),Gt=(_t[9]+1)/_t[5],zt=(_t[9]-1)/_t[5],Vt=(_t[8]-1)/_t[0],vt=(xt[8]+1)/xt[0],Ft=qt*Vt,$t=qt*vt,jt=ft/(-Vt+vt),re=jt*-Vt;if(et.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(re),z.translateZ(jt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),_t[10]===-1)z.projectionMatrix.copy(et.projectionMatrix),z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let pe=qt+jt,G=Bt+jt,xe=Ft-re,Qt=$t+(ft-re),C=Gt*Bt/G*pe,v=zt*Bt/G*pe;z.projectionMatrix.makePerspective(xe,Qt,C,v,pe,G),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function tt(z,et){et===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(et.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let et=z.near,j=z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(j=m.depthFar)),I.near=P.near=T.near=et,I.far=P.far=T.far=j,(B!==I.near||R!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,R=I.far),I.layers.mask=z.layers.mask|6,T.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;let ft=z.parent,_t=I.cameras;tt(I,ft);for(let xt=0;xt<_t.length;xt++)tt(_t[xt],ft);_t.length===2?Z(I,T,P):I.projectionMatrix.copy(T.projectionMatrix),it(z,I,ft)};function it(z,et,j){j===null?z.matrix.copy(et.matrixWorld):(z.matrix.copy(j.matrixWorld),z.matrix.invert(),z.matrix.multiply(et.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(et.projectionMatrix),z.projectionMatrixInverse.copy(et.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ms*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(z){c=z,u!==null&&(u.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(z){return f[z]};let Ct=null;function Ut(z,et){if(h=et.getViewerPose(l||a),g=et,h!==null){let j=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ft=!1;j.length!==I.cameras.length&&(I.cameras.length=0,ft=!0);for(let Bt=0;Bt<j.length;Bt++){let Gt=j[Bt],zt=null;if(p!==null)zt=p.getViewport(Gt);else{let vt=d.getViewSubImage(u,Gt);zt=vt.viewport,Bt===0&&(t.setRenderTargetTextures(_,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(_))}let Vt=D[Bt];Vt===void 0&&(Vt=new Be,Vt.layers.enable(Bt),Vt.viewport=new de,D[Bt]=Vt),Vt.matrix.fromArray(Gt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Gt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(zt.x,zt.y,zt.width,zt.height),Bt===0&&(I.matrix.copy(Vt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ft===!0&&I.cameras.push(Vt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Bt=d.getDepthInformation(j[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(_t&&_t.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Bt=0;Bt<j.length;Bt++){let Gt=j[Bt].camera;if(Gt){let zt=f[Gt];zt||(zt=new gr,f[Gt]=zt);let Vt=d.getCameraImage(Gt);zt.sourceTexture=Vt}}}}for(let j=0;j<M.length;j++){let ft=S[j],_t=M[j];ft!==null&&_t!==void 0&&_t.update(ft,et,l||a)}Ct&&Ct(z,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let Lt=new rd;Lt.setAnimationLoop(Ut),this.setAnimationLoop=function(z){Ct=z},this.dispose=function(){}}},ib=new fe,ud=new kt;ud.set(-1,0,0,0,1,0,0,0,1);function sb(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,nh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,E,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),E=b.envMap,_=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ud),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rb(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let S=M.program;i.uniformBlockBinding(_,S)}function l(_,M){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",b));let w=M.program;i.updateUBOMapping(_,w);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let M=d();_.__bindingPointIndex=M;let S=n.createBuffer(),w=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let M=s[_.id],S=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let x=0,T=S.length;x<T;x++){let P=S[x];if(Array.isArray(P))for(let D=0,I=P.length;D<I;D++)p(P[D],x,D,w);else p(P,x,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,M,S,w){if(y(_,M,S,w)===!0){let x=_.__offset,T=_.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let I=T[D],B=f(I);g(I,_.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function y(_,M,S,w){let x=_.value,T=M+"_"+S;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let P=w[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(_){let M=_.uniforms,S=0,w=16;for(let T=0,P=M.length;T<P;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let I=0,B=D.length;I<B;I++){let R=D[I],N=Array.isArray(R.value)?R.value:[R.value];for(let U=0,L=N.length;U<L;U++){let O=N[U],X=f(O),Z=S%w,tt=Z%X.boundary,it=Z+tt;S+=tt,it!==0&&w-it<X.storage&&(S+=w-it),R.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=X.storage}}}let x=S%w;return x>0&&(S+=w-x),_.__size=S,_.__cache={},this}function f(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",_),M}function b(_){let M=_.target;M.removeEventListener("dispose",b);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}var ab=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function ob(){return Gn===null&&(Gn=new Qa(ab,16,16,Ii,Vn),Gn.name="DFG_LUT",Gn.minFilter=De,Gn.magFilter=De,Gn.wrapS=Fn,Gn.wrapT=Fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var pl=class{constructor(t={}){let{canvas:e=Rf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=on}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=p,m=new Set([Po,Io,Ro]),f=new Set([on,wn,Ds,Ls,Ao,Co]),b=new Uint32Array(4),E=new Int32Array(4),_=new V,M=null,S=null,w=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,I=null,B=null,R=null,N=null;this._outputColorSpace=en;let U=0,L=0,O=null,X=-1,Z=null,tt=new de,it=new de,Ct=null,Ut=new Zt(0),Lt=0,z=e.width,et=e.height,j=1,ft=null,_t=null,xt=new de(0,0,z,et),qt=new de(0,0,z,et),Bt=!1,Gt=new ur,zt=!1,Vt=!1,vt=new fe,Ft=new V,$t=new de,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function pe(){return O===null?j:1}let G=i;function xe(A,H){return e.getContext(A,H)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),G===null){let H="webgl2";if(G=xe(H,A),G===null)throw xe(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Nt("WebGLRenderer: "+A.message),A}let Qt,C,v,F,W,J,rt,at,K,Q,ot,Mt,ct,lt,Rt,Dt,Ot,k,ht,nt,ut,gt,st;function Et(){Qt=new py(G),Qt.init(),ut=new tb(G,Qt),C=new ay(G,Qt,t,ut),v=new jv(G,Qt),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),B=G.createFramebuffer(),R=G.createFramebuffer(),N=G.createFramebuffer(),F=new _y(G),W=new Bv,J=new Qv(G,Qt,v,W,C,ut,F),rt=new dy(P),at=new b0(G),gt=new sy(G,at),K=new my(G,at,F,gt),Q=new yy(G,K,at,gt,F),k=new xy(G,C,J),Rt=new oy(W),ot=new Ov(P,rt,Qt,C,gt,Rt),Mt=new sb(P,W),ct=new kv,lt=new qv(Qt),Ot=new iy(P,rt,v,Q,g,c),Dt=new Kv(P,Q,C),st=new rb(G,F,C,v),ht=new ry(G,Qt,F),nt=new gy(G,Qt,F),F.programs=ot.programs,P.capabilities=C,P.extensions=Qt,P.properties=W,P.renderLists=ct,P.shadowMap=Dt,P.state=v,P.info=F}Et(),y!==on&&(T=new by(y,e.width,e.height,o,s,r));let St=new Eh(P,G);this.xr=St,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(z,et,!1))},this.getSize=function(A){return A.set(z,et)},this.setSize=function(A,H,$=!0){if(St.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,et=H,e.width=Math.floor(A*j),e.height=Math.floor(H*j),$===!0&&(e.style.width=A+"px",e.style.height=H+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(z*j,et*j).floor()},this.setDrawingBufferSize=function(A,H,$){z=A,et=H,j=$,e.width=Math.floor(A*$),e.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(y===on){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(tt)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,H,$,q){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,H,$,q),v.viewport(tt.copy(xt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,H,$,q){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,H,$,q),v.scissor(it.copy(qt).multiplyScalar(j).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(A){v.setScissorTest(Bt=A)},this.setOpaqueSort=function(A){ft=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,$=!0){let q=0;if(A){let Y=!1;if(O!==null){let mt=O.texture.format;Y=m.has(mt)}if(Y){let mt=O.texture.type,bt=f.has(mt),pt=Ot.getClearColor(),wt=Ot.getClearAlpha(),Tt=pt.r,Ht=pt.g,Xt=pt.b;bt?(b[0]=Tt,b[1]=Ht,b[2]=Xt,b[3]=wt,G.clearBufferuiv(G.COLOR,0,b)):(E[0]=Tt,E[1]=Ht,E[2]=Xt,E[3]=wt,G.clearBufferiv(G.COLOR,0,E))}else q|=G.COLOR_BUFFER_BIT}H&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Ot.dispose(),ct.dispose(),lt.dispose(),W.dispose(),rt.dispose(),Q.dispose(),gt.dispose(),st.dispose(),ot.dispose(),St.dispose(),St.removeEventListener("sessionstart",du),St.removeEventListener("sessionend",pu),Oi.stop()};function me(A){A.preventDefault(),sr("WebGLRenderer: Context Lost."),D=!0}function le(){sr("WebGLRenderer: Context Restored."),D=!1;let A=F.autoReset,H=Dt.enabled,$=Dt.autoUpdate,q=Dt.needsUpdate,Y=Dt.type;Et(),F.autoReset=A,Dt.enabled=H,Dt.autoUpdate=$,Dt.needsUpdate=q,Dt.type=Y}function Dn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ln(A){let H=A.target;H.removeEventListener("dispose",Ln),pg(H)}function pg(A){mg(A),W.remove(A)}function mg(A){let H=W.get(A).programs;H!==void 0&&(H.forEach(function($){ot.releaseProgram($)}),A.isShaderMaterial&&ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,q,Y,mt){H===null&&(H=jt);let bt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,pt=xg(A,H,$,q,Y);v.setMaterial(q,bt);let wt=$.index,Tt=1;if(q.wireframe===!0){if(wt=K.getWireframeAttribute($),wt===void 0)return;Tt=2}let Ht=$.drawRange,Xt=$.attributes.position,It=Ht.start*Tt,ie=(Ht.start+Ht.count)*Tt;mt!==null&&(It=Math.max(It,mt.start*Tt),ie=Math.min(ie,(mt.start+mt.count)*Tt)),wt!==null?(It=Math.max(It,0),ie=Math.min(ie,wt.count)):Xt!=null&&(It=Math.max(It,0),ie=Math.min(ie,Xt.count));let ye=ie-It;if(ye<0||ye===1/0)return;gt.setup(Y,q,pt,$,wt);let ge,ae=ht;if(wt!==null&&(ge=at.get(wt),ae=nt,ae.setIndex(ge)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*pe()),ae.setMode(G.LINES)):ae.setMode(G.TRIANGLES);else if(Y.isLine){let Ue=q.linewidth;Ue===void 0&&(Ue=1),v.setLineWidth(Ue*pe()),Y.isLineSegments?ae.setMode(G.LINES):Y.isLineLoop?ae.setMode(G.LINE_LOOP):ae.setMode(G.LINE_STRIP)}else Y.isPoints?ae.setMode(G.POINTS):Y.isSprite&&ae.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ue=Y._multiDrawStarts,yt=Y._multiDrawCounts,je=Y._multiDrawCount,Kt=wt?at.get(wt).bytesPerElement:1,ln=W.get(q).currentProgram.getUniforms();for(let Nn=0;Nn<je;Nn++)ln.setValue(G,"_gl_DrawID",Nn),ae.render(Ue[Nn]/Kt,yt[Nn])}else if(Y.isInstancedMesh)ae.renderInstances(It,ye,Y.count);else if($.isInstancedBufferGeometry){let Ue=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,yt=Math.min($.instanceCount,Ue);ae.renderInstances(It,ye,yt)}else ae.render(It,ye)};function fu(A,H,$){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,oa(A,H,$),A.side=Qn,A.needsUpdate=!0,oa(A,H,$),A.side=zn):oa(A,H,$)}this.compile=function(A,H,$=null){$===null&&($=A),S=lt.get($),S.init(H),x.push(S),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let mt=Y.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){let pt=mt[bt];fu(pt,$,Y),q.add(pt)}else fu(mt,$,Y),q.add(mt)}),S=x.pop(),q},this.compileAsync=function(A,H,$=null){let q=this.compile(A,H,$);return new Promise(Y=>{function mt(){if(q.forEach(function(bt){W.get(bt).currentProgram.isReady()&&q.delete(bt)}),q.size===0){Y(A);return}setTimeout(mt,10)}Qt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Kl=null;function gg(A){Kl&&Kl(A)}function du(){Oi.stop()}function pu(){Oi.start()}let Oi=new rd;Oi.setAnimationLoop(gg),typeof self!="undefined"&&Oi.setContext(self),this.setAnimationLoop=function(A){Kl=A,St.setAnimationLoop(A),A===null?Oi.stop():Oi.start()},St.addEventListener("sessionstart",du),St.addEventListener("sessionend",pu),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(A,H);let $=St.enabled===!0&&St.isPresenting===!0,q=T!==null&&(O===null||$)&&T.begin(P,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(H),H=St.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,H,O),S=lt.get(A,x.length),S.init(H),S.state.textureUnits=J.getTextureUnits(),x.push(S),vt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Gt.setFromProjectionMatrix(vt,bn,H.reversedDepth),Vt=this.localClippingEnabled,zt=Rt.init(this.clippingPlanes,Vt),M=ct.get(A,w.length),M.init(),w.push(M),St.enabled===!0&&St.isPresenting===!0){let bt=P.xr.getDepthSensingMesh();bt!==null&&jl(bt,H,-1/0,P.sortObjects)}jl(A,H,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(ft,_t,H.reversedDepth),re=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,re&&Ot.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Rt.beginShadows();let Y=S.state.shadowsArray;if(Dt.render(Y,A,H),zt===!0&&Rt.endShadows(),(q&&T.hasRenderPass())===!1){let bt=M.opaque,pt=M.transmissive;if(S.setupLights(),H.isArrayCamera){let wt=H.cameras;if(pt.length>0)for(let Tt=0,Ht=wt.length;Tt<Ht;Tt++){let Xt=wt[Tt];gu(bt,pt,A,Xt)}re&&Ot.render(A);for(let Tt=0,Ht=wt.length;Tt<Ht;Tt++){let Xt=wt[Tt];mu(M,A,Xt,Xt.viewport)}}else pt.length>0&&gu(bt,pt,A,H),re&&Ot.render(A),mu(M,A,H)}O!==null&&L===0&&(J.updateMultisampleRenderTarget(O),J.updateRenderTargetMipmap(O)),q&&T.end(P),A.isScene===!0&&A.onAfterRender(P,A,H),gt.resetDefaultState(),X=-1,Z=null,x.pop(),x.length>0?(S=x[x.length-1],J.setTextureUnits(S.state.textureUnits),zt===!0&&Rt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,I!==null&&I.renderEnd()};function jl(A,H,$,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Gt.intersectsSprite(A)){q&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);let bt=Q.update(A),pt=A.material;pt.visible&&M.push(A,bt,pt,$,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Gt.intersectsObject(A))){let bt=Q.update(A),pt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),$t.copy(bt.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(pt)){let wt=bt.groups;for(let Tt=0,Ht=wt.length;Tt<Ht;Tt++){let Xt=wt[Tt],It=pt[Xt.materialIndex];It&&It.visible&&M.push(A,bt,It,$,$t.z,Xt)}}else pt.visible&&M.push(A,bt,pt,$,$t.z,null)}}let mt=A.children;for(let bt=0,pt=mt.length;bt<pt;bt++)jl(mt[bt],H,$,q)}function mu(A,H,$,q){let{opaque:Y,transmissive:mt,transparent:bt}=A;S.setupLightsView($),zt===!0&&Rt.setGlobalState(P.clippingPlanes,$),q&&v.viewport(tt.copy(q)),Y.length>0&&aa(Y,H,$),mt.length>0&&aa(mt,H,$),bt.length>0&&aa(bt,H,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function gu(A,H,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let It=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new sn(1,1,{generateMipmaps:!0,type:It?Vn:on,minFilter:Ci,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let mt=S.state.transmissionRenderTarget[q.id],bt=q.viewport||tt;mt.setSize(bt.z*P.transmissionResolutionScale,bt.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),wt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(Ut),Lt=P.getClearAlpha(),Lt<1&&P.setClearColor(16777215,.5),P.clear(),re&&Ot.render($);let Ht=P.toneMapping;P.toneMapping=Sn;let Xt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),zt===!0&&Rt.setGlobalState(P.clippingPlanes,q),aa(A,$,q),J.updateMultisampleRenderTarget(mt),J.updateRenderTargetMipmap(mt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ie=0,ye=H.length;ie<ye;ie++){let ge=H[ie],{object:ae,geometry:Ue,material:yt,group:je}=ge;if(yt.side===zn&&ae.layers.test(q.layers)){let Kt=yt.side;yt.side=We,yt.needsUpdate=!0,_u(ae,$,q,Ue,yt,je),yt.side=Kt,yt.needsUpdate=!0,It=!0}}It===!0&&(J.updateMultisampleRenderTarget(mt),J.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,wt,Tt),P.setClearColor(Ut,Lt),Xt!==void 0&&(q.viewport=Xt),P.toneMapping=Ht}function aa(A,H,$){let q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,mt=A.length;Y<mt;Y++){let bt=A[Y],{object:pt,geometry:wt,group:Tt}=bt,Ht=bt.material;Ht.allowOverride===!0&&q!==null&&(Ht=q),pt.layers.test($.layers)&&_u(pt,H,$,wt,Ht,Tt)}}function _u(A,H,$,q,Y,mt){A.onBeforeRender(P,H,$,q,Y,mt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(P,H,$,q,A,mt),Y.transparent===!0&&Y.side===zn&&Y.forceSinglePass===!1?(Y.side=We,Y.needsUpdate=!0,P.renderBufferDirect($,H,q,Y,A,mt),Y.side=Qn,Y.needsUpdate=!0,P.renderBufferDirect($,H,q,Y,A,mt),Y.side=zn):P.renderBufferDirect($,H,q,Y,A,mt),A.onAfterRender(P,H,$,q,Y,mt)}function oa(A,H,$){H.isScene!==!0&&(H=jt);let q=W.get(A),Y=S.state.lights,mt=S.state.shadowsArray,bt=Y.state.version,pt=ot.getParameters(A,Y.state,mt,H,$,S.state.lightProbeGridArray),wt=ot.getProgramCacheKey(pt),Tt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let Ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=rt.get(A.envMap||q.environment,Ht),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Tt===void 0&&(A.addEventListener("dispose",Ln),Tt=new Map,q.programs=Tt);let Xt=Tt.get(wt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===bt)return yu(A,pt),Xt}else pt.uniforms=ot.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,$,pt),A.onBeforeCompile(pt,P),Xt=ot.acquireProgram(pt,wt),Tt.set(wt,Xt),q.uniforms=pt.uniforms;let It=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=Rt.uniform),yu(A,pt),q.needsLights=vg(A),q.lightsStateVersion=bt,q.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=Xt,q.uniformsList=null,Xt}function xu(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=Us.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function yu(A,H){let $=W.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function _g(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let $=0,q=A.length;$<q;$++){let Y=A[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function xg(A,H,$,q,Y){H.isScene!==!0&&(H=jt),J.resetTextureUnits();let mt=H.fog,bt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,pt=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Jt.workingColorSpace,wt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Tt=rt.get(q.envMap||bt,wt),Ht=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,ye=!!$.morphAttributes.color,ge=Sn;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ge=P.toneMapping);let ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ue=ae!==void 0?ae.length:0,yt=W.get(q),je=S.state.lights;if(zt===!0&&(Vt===!0||A!==Z)){let ce=A===Z&&q.id===X;Rt.setState(q,A,ce)}let Kt=!1;q.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==je.state.version||yt.outputColorSpace!==pt||Y.isBatchedMesh&&yt.batching===!1||!Y.isBatchedMesh&&yt.batching===!0||Y.isBatchedMesh&&yt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&yt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&yt.instancing===!1||!Y.isInstancedMesh&&yt.instancing===!0||Y.isSkinnedMesh&&yt.skinning===!1||!Y.isSkinnedMesh&&yt.skinning===!0||Y.isInstancedMesh&&yt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&yt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&yt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&yt.instancingMorph===!1&&Y.morphTexture!==null||yt.envMap!==Tt||q.fog===!0&&yt.fog!==mt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Rt.numPlanes||yt.numIntersection!==Rt.numIntersection)||yt.vertexAlphas!==Ht||yt.vertexTangents!==Xt||yt.morphTargets!==It||yt.morphNormals!==ie||yt.morphColors!==ye||yt.toneMapping!==ge||yt.morphTargetsCount!==Ue||!!yt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,yt.__version=q.version);let ln=yt.currentProgram;Kt===!0&&(ln=oa(q,H,Y),I&&q.isNodeMaterial&&I.onUpdateProgram(q,ln,yt));let Nn=!1,oi=!1,ns=!1,oe=ln.getUniforms(),ve=yt.uniforms;if(v.useProgram(ln.program)&&(Nn=!0,oi=!0,ns=!0),q.id!==X&&(X=q.id,oi=!0),yt.needsLights){let ce=_g(S.state.lightProbeGridArray,Y);yt.lightProbeGrid!==ce&&(yt.lightProbeGrid=ce,oi=!0)}if(Nn||Z!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),oe.setValue(G,"projectionMatrix",A.projectionMatrix),oe.setValue(G,"viewMatrix",A.matrixWorldInverse);let ci=oe.map.cameraPosition;ci!==void 0&&ci.setValue(G,Ft.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&oe.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&oe.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,oi=!0,ns=!0)}if(yt.needsLights&&(je.state.directionalShadowMap.length>0&&oe.setValue(G,"directionalShadowMap",je.state.directionalShadowMap,J),je.state.spotShadowMap.length>0&&oe.setValue(G,"spotShadowMap",je.state.spotShadowMap,J),je.state.pointShadowMap.length>0&&oe.setValue(G,"pointShadowMap",je.state.pointShadowMap,J)),Y.isSkinnedMesh){oe.setOptional(G,Y,"bindMatrix"),oe.setOptional(G,Y,"bindMatrixInverse");let ce=Y.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),oe.setValue(G,"boneTexture",ce.boneTexture,J))}Y.isBatchedMesh&&(oe.setOptional(G,Y,"batchingTexture"),oe.setValue(G,"batchingTexture",Y._matricesTexture,J),oe.setOptional(G,Y,"batchingIdTexture"),oe.setValue(G,"batchingIdTexture",Y._indirectTexture,J),oe.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&oe.setValue(G,"batchingColorTexture",Y._colorsTexture,J));let li=$.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&k.update(Y,$,ln),(oi||yt.receiveShadow!==Y.receiveShadow)&&(yt.receiveShadow=Y.receiveShadow,oe.setValue(G,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(ve.envMapIntensity.value=H.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=ob()),oi){if(oe.setValue(G,"toneMappingExposure",P.toneMappingExposure),yt.needsLights&&yg(ve,ns),mt&&q.fog===!0&&Mt.refreshFogUniforms(ve,mt),Mt.refreshMaterialUniforms(ve,q,j,et,S.state.transmissionRenderTarget[A.id]),yt.needsLights&&yt.lightProbeGrid){let ce=yt.lightProbeGrid;ve.probesSH.value=ce.texture,ve.probesMin.value.copy(ce.boundingBox.min),ve.probesMax.value.copy(ce.boundingBox.max),ve.probesResolution.value.copy(ce.resolution)}Us.upload(G,xu(yt),ve,J)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Us.upload(G,xu(yt),ve,J),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&oe.setValue(G,"center",Y.center),oe.setValue(G,"modelViewMatrix",Y.modelViewMatrix),oe.setValue(G,"normalMatrix",Y.normalMatrix),oe.setValue(G,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let ce=q.uniformsGroups;for(let ci=0,is=ce.length;ci<is;ci++){let vu=ce[ci];st.update(vu,ln),st.bind(vu,ln)}}return ln}function yg(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function vg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,H,$){let q=W.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=H,W.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let $=W.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,$=0){O=A,U=H,L=$;let q=null,Y=!1,mt=!1;if(A){let pt=W.get(A);if(pt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(G.FRAMEBUFFER,pt.__webglFramebuffer),tt.copy(A.viewport),it.copy(A.scissor),Ct=A.scissorTest,v.viewport(tt),v.scissor(it),v.setScissorTest(Ct),X=-1;return}else if(pt.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(pt.__hasExternalTextures)J.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ht=A.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&W.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}let wt=A.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(mt=!0);let Tt=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Tt[H])?q=Tt[H][$]:q=Tt[H],Y=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?q=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Tt)?q=Tt[$]:q=Tt,tt.copy(A.viewport),it.copy(A.scissor),Ct=A.scissorTest}else tt.copy(xt).multiplyScalar(j).floor(),it.copy(qt).multiplyScalar(j).floor(),Ct=Bt;if($!==0&&(q=B),v.bindFramebuffer(G.FRAMEBUFFER,q)&&v.drawBuffers(A,q),v.viewport(tt),v.scissor(it),v.setScissorTest(Ct),Y){let pt=W.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,pt.__webglTexture,$)}else if(mt){let pt=H;for(let wt=0;wt<A.textures.length;wt++){let Tt=W.get(A.textures[wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+wt,Tt.__webglTexture,$,pt)}}else if(A!==null&&$!==0){let pt=W.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pt.__webglTexture,$)}X=-1},this.readRenderTargetPixels=function(A,H,$,q,Y,mt,bt,pt=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){v.bindFramebuffer(G.FRAMEBUFFER,wt);try{let Tt=A.textures[pt],Ht=Tt.format,Xt=Tt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(Ht)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Xt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&$>=0&&$<=A.height-Y&&G.readPixels(H,$,q,Y,ut.convert(Ht),ut.convert(Xt),mt)}finally{let Tt=O!==null?W.get(O).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,q,Y,mt,bt,pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt)if(H>=0&&H<=A.width-q&&$>=0&&$<=A.height-Y){v.bindFramebuffer(G.FRAMEBUFFER,wt);let Tt=A.textures[pt],Ht=Tt.format,Xt=Tt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,It),G.bufferData(G.PIXEL_PACK_BUFFER,mt.byteLength,G.STREAM_READ),G.readPixels(H,$,q,Y,ut.convert(Ht),ut.convert(Xt),0);let ie=O!==null?W.get(O).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,ie);let ye=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Pf(G,ye,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,It),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,mt),G.deleteBuffer(It),G.deleteSync(ye),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(A.image.width*q),mt=Math.floor(A.image.height*q),bt=H!==null?H.x:0,pt=H!==null?H.y:0;J.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,bt,pt,Y,mt),v.unbindTexture()},this.copyTextureToTexture=function(A,H,$=null,q=null,Y=0,mt=0){let bt,pt,wt,Tt,Ht,Xt,It,ie,ye,ge=A.isCompressedTexture?A.mipmaps[mt]:A.image;if($!==null)bt=$.max.x-$.min.x,pt=$.max.y-$.min.y,wt=$.isBox3?$.max.z-$.min.z:1,Tt=$.min.x,Ht=$.min.y,Xt=$.isBox3?$.min.z:0;else{let ve=Math.pow(2,-Y);bt=Math.floor(ge.width*ve),pt=Math.floor(ge.height*ve),A.isDataArrayTexture?wt=ge.depth:A.isData3DTexture?wt=Math.floor(ge.depth*ve):wt=1,Tt=0,Ht=0,Xt=0}q!==null?(It=q.x,ie=q.y,ye=q.z):(It=0,ie=0,ye=0);let ae=ut.convert(H.format),Ue=ut.convert(H.type),yt;H.isData3DTexture?(J.setTexture3D(H,0),yt=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(J.setTexture2DArray(H,0),yt=G.TEXTURE_2D_ARRAY):(J.setTexture2D(H,0),yt=G.TEXTURE_2D),v.activeTexture(G.TEXTURE0),v.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);let je=v.getParameter(G.UNPACK_ROW_LENGTH),Kt=v.getParameter(G.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(G.UNPACK_SKIP_PIXELS),Nn=v.getParameter(G.UNPACK_SKIP_ROWS),oi=v.getParameter(G.UNPACK_SKIP_IMAGES);v.pixelStorei(G.UNPACK_ROW_LENGTH,ge.width),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ge.height),v.pixelStorei(G.UNPACK_SKIP_PIXELS,Tt),v.pixelStorei(G.UNPACK_SKIP_ROWS,Ht),v.pixelStorei(G.UNPACK_SKIP_IMAGES,Xt);let ns=A.isDataArrayTexture||A.isData3DTexture,oe=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let ve=W.get(A),li=W.get(H),ce=W.get(ve.__renderTarget),ci=W.get(li.__renderTarget);v.bindFramebuffer(G.READ_FRAMEBUFFER,ce.__webglFramebuffer),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let is=0;is<wt;is++)ns&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.get(A).__webglTexture,Y,Xt+is),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.get(H).__webglTexture,mt,ye+is)),G.blitFramebuffer(Tt,Ht,bt,pt,It,ie,bt,pt,G.DEPTH_BUFFER_BIT,G.NEAREST);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||W.has(A)){let ve=W.get(A),li=W.get(H);v.bindFramebuffer(G.READ_FRAMEBUFFER,R),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let ce=0;ce<wt;ce++)ns?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ve.__webglTexture,Y,Xt+ce):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ve.__webglTexture,Y),oe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,li.__webglTexture,mt,ye+ce):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,li.__webglTexture,mt),Y!==0?G.blitFramebuffer(Tt,Ht,bt,pt,It,ie,bt,pt,G.COLOR_BUFFER_BIT,G.NEAREST):oe?G.copyTexSubImage3D(yt,mt,It,ie,ye+ce,Tt,Ht,bt,pt):G.copyTexSubImage2D(yt,mt,It,ie,Tt,Ht,bt,pt);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else oe?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(yt,mt,It,ie,ye,bt,pt,wt,ae,Ue,ge.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(yt,mt,It,ie,ye,bt,pt,wt,ae,ge.data):G.texSubImage3D(yt,mt,It,ie,ye,bt,pt,wt,ae,Ue,ge):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,mt,It,ie,bt,pt,ae,Ue,ge.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,mt,It,ie,ge.width,ge.height,ae,ge.data):G.texSubImage2D(G.TEXTURE_2D,mt,It,ie,bt,pt,ae,Ue,ge);v.pixelStorei(G.UNPACK_ROW_LENGTH,je),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Kt),v.pixelStorei(G.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(G.UNPACK_SKIP_ROWS,Nn),v.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),mt===0&&H.generateMipmaps&&G.generateMipmap(yt),v.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){U=0,L=0,O=null,v.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var fd={type:"change"},Ah={type:"start"},pd={type:"end"},_l=new ti,dd=new hn,lb=Math.cos(70*eh.DEG2RAD),Te=new V,Ze=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Th=1e-6,xl=class extends wr{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new nn,this._lastTargetPosition=new V,this._quat=new nn().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Is,this._sphericalDelta=new Is,this._scale=1,this._panOffset=new V,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new V,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hb.bind(this),this._onPointerDown=cb.bind(this),this._onPointerUp=ub.bind(this),this._onContextMenu=xb.bind(this),this._onMouseWheel=pb.bind(this),this._onKeyDown=mb.bind(this),this._onTouchStart=gb.bind(this),this._onTouchMove=_b.bind(this),this._onMouseDown=fb.bind(this),this._onMouseMove=db.bind(this),this._interceptControlDown=yb.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fd),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Te.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_l.origin.copy(this.object.position),_l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_l.direction))<lb?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),_l.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Th||this._lastTargetPosition.distanceToSquared(this.target)>Th?(this.dispatchEvent(fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function cb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ub(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pd),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=se.DOLLY;break;case Ei.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}break;case Ei.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Ah)}function db(n){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pb(n){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(n.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pd))}function mb(n){this.enabled!==!1&&this._handleKeyDown(n)}function gb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=se.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=se.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Ah)}function _b(n){switch(this._trackPointer(n),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=se.NONE}}function xb(n){this.enabled!==!1&&n.preventDefault()}function yb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ch(n,t,e){var i,s=1;n==null&&(n=0),t==null&&(t=0),e==null&&(e=0);function r(){var a,o=i.length,c,l=0,h=0,d=0;for(a=0;a<o;++a)c=i[a],l+=c.x||0,h+=c.y||0,d+=c.z||0;for(l=(l/o-n)*s,h=(h/o-t)*s,d=(d/o-e)*s,a=0;a<o;++a)c=i[a],l&&(c.x-=l),h&&(c.y-=h),d&&(c.z-=d)}return r.initialize=function(a){i=a},r.x=function(a){return arguments.length?(n=+a,r):n},r.y=function(a){return arguments.length?(t=+a,r):t},r.z=function(a){return arguments.length?(e=+a,r):e},r.strength=function(a){return arguments.length?(s=+a,r):s},r}function md(n){let t=+this._x.call(null,n);return gd(this.cover(t),t,n)}function gd(n,t,e){if(isNaN(t))return n;var i,s=n._root,r={data:e},a=n._x0,o=n._x1,c,l,h,d,u;if(!s)return n._root=r,n;for(;s.length;)if((h=t>=(c=(a+o)/2))?a=c:o=c,i=s,!(s=s[d=+h]))return i[d]=r,n;if(l=+n._x.call(null,s.data),t===l)return r.next=s,i?i[d]=r:n._root=r,n;do i=i?i[d]=new Array(2):n._root=new Array(2),(h=t>=(c=(a+o)/2))?a=c:o=c;while((d=+h)==(u=+(l>=c)));return i[u]=s,i[d]=r,n}function _d(n){Array.isArray(n)||(n=Array.from(n));let t=n.length,e=new Float64Array(t),i=1/0,s=-1/0;for(let r=0,a;r<t;++r)isNaN(a=+this._x.call(null,n[r]))||(e[r]=a,a<i&&(i=a),a>s&&(s=a));if(i>s)return this;this.cover(i).cover(s);for(let r=0;r<t;++r)gd(this,e[r],n[r]);return this}function xd(n){if(isNaN(n=+n))return this;var t=this._x0,e=this._x1;if(isNaN(t))e=(t=Math.floor(n))+1;else{for(var i=e-t||1,s=this._root,r,a;t>n||n>=e;)switch(a=+(n<t),r=new Array(2),r[a]=s,s=r,i*=2,a){case 0:e=t+i;break;case 1:t=e-i;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._x1=e,this}function yd(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function vd(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function fn(n,t,e){this.node=n,this.x0=t,this.x1=e}function bd(n,t){var e,i=this._x0,s,r,a=this._x1,o=[],c=this._root,l,h;for(c&&o.push(new fn(c,i,a)),t==null?t=1/0:(i=n-t,a=n+t);l=o.pop();)if(!(!(c=l.node)||(s=l.x0)>a||(r=l.x1)<i))if(c.length){var d=(s+r)/2;o.push(new fn(c[1],d,r),new fn(c[0],s,d)),(h=+(n>=d))&&(l=o[o.length-1],o[o.length-1]=o[o.length-1-h],o[o.length-1-h]=l)}else{var u=Math.abs(n-+this._x.call(null,c.data));u<t&&(t=u,i=n-u,a=n+u,e=c.data)}return e}function Md(n){if(isNaN(c=+this._x.call(null,n)))return this;var t,e=this._root,i,s,r,a=this._x0,o=this._x1,c,l,h,d,u;if(!e)return this;if(e.length)for(;;){if((h=c>=(l=(a+o)/2))?a=l:o=l,t=e,!(e=e[d=+h]))return this;if(!e.length)break;t[d+1&1]&&(i=t,u=d)}for(;e.data!==n;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[d]=r:delete t[d],(e=t[0]||t[1])&&e===(t[1]||t[0])&&!e.length&&(i?i[u]=e:this._root=e),this):(this._root=r,this)}function Sd(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function wd(){return this._root}function Ed(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function Td(n){var t=[],e,i=this._root,s,r,a;for(i&&t.push(new fn(i,this._x0,this._x1));e=t.pop();)if(!n(i=e.node,r=e.x0,a=e.x1)&&i.length){var o=(r+a)/2;(s=i[1])&&t.push(new fn(s,o,a)),(s=i[0])&&t.push(new fn(s,r,o))}return this}function Ad(n){var t=[],e=[],i;for(this._root&&t.push(new fn(this._root,this._x0,this._x1));i=t.pop();){var s=i.node;if(s.length){var r,a=i.x0,o=i.x1,c=(a+o)/2;(r=s[0])&&t.push(new fn(r,a,c)),(r=s[1])&&t.push(new fn(r,c,o))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.x1);return this}function Cd(n){return n[0]}function Rd(n){return arguments.length?(this._x=n,this):this._x}function Or(n,t){var e=new Rh(t==null?Cd:t,NaN,NaN);return n==null?e:e.addAll(n)}function Rh(n,t,e){this._x=n,this._x0=t,this._x1=e,this._root=void 0}function Id(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var $e=Or.prototype=Rh.prototype;$e.copy=function(){var n=new Rh(this._x,this._x0,this._x1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Id(t),n;for(e=[{source:t,target:n._root=new Array(2)}];t=e.pop();)for(var s=0;s<2;++s)(i=t.source[s])&&(i.length?e.push({source:i,target:t.target[s]=new Array(2)}):t.target[s]=Id(i));return n};$e.add=md;$e.addAll=_d;$e.cover=xd;$e.data=yd;$e.extent=vd;$e.find=bd;$e.remove=Md;$e.removeAll=Sd;$e.root=wd;$e.size=Ed;$e.visit=Td;$e.visitAfter=Ad;$e.x=Rd;function Pd(n){let t=+this._x.call(null,n),e=+this._y.call(null,n);return Dd(this.cover(t,e),t,e,n)}function Dd(n,t,e,i){if(isNaN(t)||isNaN(e))return n;var s,r=n._root,a={data:i},o=n._x0,c=n._y0,l=n._x1,h=n._y1,d,u,p,g,y,m,f,b;if(!r)return n._root=a,n;for(;r.length;)if((y=t>=(d=(o+l)/2))?o=d:l=d,(m=e>=(u=(c+h)/2))?c=u:h=u,s=r,!(r=r[f=m<<1|y]))return s[f]=a,n;if(p=+n._x.call(null,r.data),g=+n._y.call(null,r.data),t===p&&e===g)return a.next=r,s?s[f]=a:n._root=a,n;do s=s?s[f]=new Array(4):n._root=new Array(4),(y=t>=(d=(o+l)/2))?o=d:l=d,(m=e>=(u=(c+h)/2))?c=u:h=u;while((f=m<<1|y)===(b=(g>=u)<<1|p>=d));return s[b]=r,s[f]=a,n}function Ld(n){var t,e,i=n.length,s,r,a=new Array(i),o=new Array(i),c=1/0,l=1/0,h=-1/0,d=-1/0;for(e=0;e<i;++e)isNaN(s=+this._x.call(null,t=n[e]))||isNaN(r=+this._y.call(null,t))||(a[e]=s,o[e]=r,s<c&&(c=s),s>h&&(h=s),r<l&&(l=r),r>d&&(d=r));if(c>h||l>d)return this;for(this.cover(c,l).cover(h,d),e=0;e<i;++e)Dd(this,a[e],o[e],n[e]);return this}function Nd(n,t){if(isNaN(n=+n)||isNaN(t=+t))return this;var e=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(e))s=(e=Math.floor(n))+1,r=(i=Math.floor(t))+1;else{for(var a=s-e||1,o=this._root,c,l;e>n||n>=s||i>t||t>=r;)switch(l=(t<i)<<1|n<e,c=new Array(4),c[l]=o,o=c,a*=2,l){case 0:s=e+a,r=i+a;break;case 1:e=s-a,r=i+a;break;case 2:s=e+a,i=r-a;break;case 3:e=s-a,i=r-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=e,this._y0=i,this._x1=s,this._y1=r,this}function Ud(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function Fd(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ie(n,t,e,i,s){this.node=n,this.x0=t,this.y0=e,this.x1=i,this.y1=s}function Od(n,t,e){var i,s=this._x0,r=this._y0,a,o,c,l,h=this._x1,d=this._y1,u=[],p=this._root,g,y;for(p&&u.push(new Ie(p,s,r,h,d)),e==null?e=1/0:(s=n-e,r=t-e,h=n+e,d=t+e,e*=e);g=u.pop();)if(!(!(p=g.node)||(a=g.x0)>h||(o=g.y0)>d||(c=g.x1)<s||(l=g.y1)<r))if(p.length){var m=(a+c)/2,f=(o+l)/2;u.push(new Ie(p[3],m,f,c,l),new Ie(p[2],a,f,m,l),new Ie(p[1],m,o,c,f),new Ie(p[0],a,o,m,f)),(y=(t>=f)<<1|n>=m)&&(g=u[u.length-1],u[u.length-1]=u[u.length-1-y],u[u.length-1-y]=g)}else{var b=n-+this._x.call(null,p.data),E=t-+this._y.call(null,p.data),_=b*b+E*E;if(_<e){var M=Math.sqrt(e=_);s=n-M,r=t-M,h=n+M,d=t+M,i=p.data}}return i}function Bd(n){if(isNaN(h=+this._x.call(null,n))||isNaN(d=+this._y.call(null,n)))return this;var t,e=this._root,i,s,r,a=this._x0,o=this._y0,c=this._x1,l=this._y1,h,d,u,p,g,y,m,f;if(!e)return this;if(e.length)for(;;){if((g=h>=(u=(a+c)/2))?a=u:c=u,(y=d>=(p=(o+l)/2))?o=p:l=p,t=e,!(e=e[m=y<<1|g]))return this;if(!e.length)break;(t[m+1&3]||t[m+2&3]||t[m+3&3])&&(i=t,f=m)}for(;e.data!==n;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[m]=r:delete t[m],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[f]=e:this._root=e),this):(this._root=r,this)}function zd(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function kd(){return this._root}function Vd(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function Gd(n){var t=[],e,i=this._root,s,r,a,o,c;for(i&&t.push(new Ie(i,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!n(i=e.node,r=e.x0,a=e.y0,o=e.x1,c=e.y1)&&i.length){var l=(r+o)/2,h=(a+c)/2;(s=i[3])&&t.push(new Ie(s,l,h,o,c)),(s=i[2])&&t.push(new Ie(s,r,h,l,c)),(s=i[1])&&t.push(new Ie(s,l,a,o,h)),(s=i[0])&&t.push(new Ie(s,r,a,l,h))}return this}function Hd(n){var t=[],e=[],i;for(this._root&&t.push(new Ie(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var s=i.node;if(s.length){var r,a=i.x0,o=i.y0,c=i.x1,l=i.y1,h=(a+c)/2,d=(o+l)/2;(r=s[0])&&t.push(new Ie(r,a,o,h,d)),(r=s[1])&&t.push(new Ie(r,h,o,c,d)),(r=s[2])&&t.push(new Ie(r,a,d,h,l)),(r=s[3])&&t.push(new Ie(r,h,d,c,l))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Wd(n){return n[0]}function Xd(n){return arguments.length?(this._x=n,this):this._x}function qd(n){return n[1]}function Yd(n){return arguments.length?(this._y=n,this):this._y}function ii(n,t,e){var i=new Ih(t==null?Wd:t,e==null?qd:e,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Ih(n,t,e,i,s,r){this._x=n,this._y=t,this._x0=e,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function Zd(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Xe=ii.prototype=Ih.prototype;Xe.copy=function(){var n=new Ih(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Zd(t),n;for(e=[{source:t,target:n._root=new Array(4)}];t=e.pop();)for(var s=0;s<4;++s)(i=t.source[s])&&(i.length?e.push({source:i,target:t.target[s]=new Array(4)}):t.target[s]=Zd(i));return n};Xe.add=Pd;Xe.addAll=Ld;Xe.cover=Nd;Xe.data=Ud;Xe.extent=Fd;Xe.find=Od;Xe.remove=Bd;Xe.removeAll=zd;Xe.root=kd;Xe.size=Vd;Xe.visit=Gd;Xe.visitAfter=Hd;Xe.x=Xd;Xe.y=Yd;function $d(n){let t=+this._x.call(null,n),e=+this._y.call(null,n),i=+this._z.call(null,n);return Jd(this.cover(t,e,i),t,e,i,n)}function Jd(n,t,e,i,s){if(isNaN(t)||isNaN(e)||isNaN(i))return n;var r,a=n._root,o={data:s},c=n._x0,l=n._y0,h=n._z0,d=n._x1,u=n._y1,p=n._z1,g,y,m,f,b,E,_,M,S,w,x;if(!a)return n._root=o,n;for(;a.length;)if((_=t>=(g=(c+d)/2))?c=g:d=g,(M=e>=(y=(l+u)/2))?l=y:u=y,(S=i>=(m=(h+p)/2))?h=m:p=m,r=a,!(a=a[w=S<<2|M<<1|_]))return r[w]=o,n;if(f=+n._x.call(null,a.data),b=+n._y.call(null,a.data),E=+n._z.call(null,a.data),t===f&&e===b&&i===E)return o.next=a,r?r[w]=o:n._root=o,n;do r=r?r[w]=new Array(8):n._root=new Array(8),(_=t>=(g=(c+d)/2))?c=g:d=g,(M=e>=(y=(l+u)/2))?l=y:u=y,(S=i>=(m=(h+p)/2))?h=m:p=m;while((w=S<<2|M<<1|_)===(x=(E>=m)<<2|(b>=y)<<1|f>=g));return r[x]=a,r[w]=o,n}function Kd(n){Array.isArray(n)||(n=Array.from(n));let t=n.length,e=new Float64Array(t),i=new Float64Array(t),s=new Float64Array(t),r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,h=-1/0;for(let d=0,u,p,g,y;d<t;++d)isNaN(p=+this._x.call(null,u=n[d]))||isNaN(g=+this._y.call(null,u))||isNaN(y=+this._z.call(null,u))||(e[d]=p,i[d]=g,s[d]=y,p<r&&(r=p),p>c&&(c=p),g<a&&(a=g),g>l&&(l=g),y<o&&(o=y),y>h&&(h=y));if(r>c||a>l||o>h)return this;this.cover(r,a,o).cover(c,l,h);for(let d=0;d<t;++d)Jd(this,e[d],i[d],s[d],n[d]);return this}function jd(n,t,e){if(isNaN(n=+n)||isNaN(t=+t)||isNaN(e=+e))return this;var i=this._x0,s=this._y0,r=this._z0,a=this._x1,o=this._y1,c=this._z1;if(isNaN(i))a=(i=Math.floor(n))+1,o=(s=Math.floor(t))+1,c=(r=Math.floor(e))+1;else{for(var l=a-i||1,h=this._root,d,u;i>n||n>=a||s>t||t>=o||r>e||e>=c;)switch(u=(e<r)<<2|(t<s)<<1|n<i,d=new Array(8),d[u]=h,h=d,l*=2,u){case 0:a=i+l,o=s+l,c=r+l;break;case 1:i=a-l,o=s+l,c=r+l;break;case 2:a=i+l,s=o-l,c=r+l;break;case 3:i=a-l,s=o-l,c=r+l;break;case 4:a=i+l,o=s+l,r=c-l;break;case 5:i=a-l,o=s+l,r=c-l;break;case 6:a=i+l,s=o-l,r=c-l;break;case 7:i=a-l,s=o-l,r=c-l;break}this._root&&this._root.length&&(this._root=h)}return this._x0=i,this._y0=s,this._z0=r,this._x1=a,this._y1=o,this._z1=c,this}function Qd(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function tp(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function ee(n,t,e,i,s,r,a){this.node=n,this.x0=t,this.y0=e,this.z0=i,this.x1=s,this.y1=r,this.z1=a}function ep(n,t,e,i){var s,r=this._x0,a=this._y0,o=this._z0,c,l,h,d,u,p,g=this._x1,y=this._y1,m=this._z1,f=[],b=this._root,E,_;for(b&&f.push(new ee(b,r,a,o,g,y,m)),i==null?i=1/0:(r=n-i,a=t-i,o=e-i,g=n+i,y=t+i,m=e+i,i*=i);E=f.pop();)if(!(!(b=E.node)||(c=E.x0)>g||(l=E.y0)>y||(h=E.z0)>m||(d=E.x1)<r||(u=E.y1)<a||(p=E.z1)<o))if(b.length){var M=(c+d)/2,S=(l+u)/2,w=(h+p)/2;f.push(new ee(b[7],M,S,w,d,u,p),new ee(b[6],c,S,w,M,u,p),new ee(b[5],M,l,w,d,S,p),new ee(b[4],c,l,w,M,S,p),new ee(b[3],M,S,h,d,u,w),new ee(b[2],c,S,h,M,u,w),new ee(b[1],M,l,h,d,S,w),new ee(b[0],c,l,h,M,S,w)),(_=(e>=w)<<2|(t>=S)<<1|n>=M)&&(E=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=E)}else{var x=n-+this._x.call(null,b.data),T=t-+this._y.call(null,b.data),P=e-+this._z.call(null,b.data),D=x*x+T*T+P*P;if(D<i){var I=Math.sqrt(i=D);r=n-I,a=t-I,o=e-I,g=n+I,y=t+I,m=e+I,s=b.data}}return s}var bb=(n,t,e,i,s,r)=>Math.sqrt((n-i)**2+(t-s)**2+(e-r)**2);function np(n,t,e,i){let s=[],r=n-i,a=t-i,o=e-i,c=n+i,l=t+i,h=e+i;return this.visit((d,u,p,g,y,m,f)=>{if(!d.length)do{let b=d.data;bb(n,t,e,this._x(b),this._y(b),this._z(b))<=i&&s.push(b)}while(d=d.next);return u>c||p>l||g>h||y<r||m<a||f<o}),s}function ip(n){if(isNaN(u=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var t,e=this._root,i,s,r,a=this._x0,o=this._y0,c=this._z0,l=this._x1,h=this._y1,d=this._z1,u,p,g,y,m,f,b,E,_,M,S;if(!e)return this;if(e.length)for(;;){if((b=u>=(y=(a+l)/2))?a=y:l=y,(E=p>=(m=(o+h)/2))?o=m:h=m,(_=g>=(f=(c+d)/2))?c=f:d=f,t=e,!(e=e[M=_<<2|E<<1|b]))return this;if(!e.length)break;(t[M+1&7]||t[M+2&7]||t[M+3&7]||t[M+4&7]||t[M+5&7]||t[M+6&7]||t[M+7&7])&&(i=t,S=M)}for(;e.data!==n;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[M]=r:delete t[M],(e=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&e===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[S]=e:this._root=e),this):(this._root=r,this)}function sp(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function rp(){return this._root}function ap(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function op(n){var t=[],e,i=this._root,s,r,a,o,c,l,h;for(i&&t.push(new ee(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));e=t.pop();)if(!n(i=e.node,r=e.x0,a=e.y0,o=e.z0,c=e.x1,l=e.y1,h=e.z1)&&i.length){var d=(r+c)/2,u=(a+l)/2,p=(o+h)/2;(s=i[7])&&t.push(new ee(s,d,u,p,c,l,h)),(s=i[6])&&t.push(new ee(s,r,u,p,d,l,h)),(s=i[5])&&t.push(new ee(s,d,a,p,c,u,h)),(s=i[4])&&t.push(new ee(s,r,a,p,d,u,h)),(s=i[3])&&t.push(new ee(s,d,u,o,c,l,p)),(s=i[2])&&t.push(new ee(s,r,u,o,d,l,p)),(s=i[1])&&t.push(new ee(s,d,a,o,c,u,p)),(s=i[0])&&t.push(new ee(s,r,a,o,d,u,p))}return this}function lp(n){var t=[],e=[],i;for(this._root&&t.push(new ee(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=t.pop();){var s=i.node;if(s.length){var r,a=i.x0,o=i.y0,c=i.z0,l=i.x1,h=i.y1,d=i.z1,u=(a+l)/2,p=(o+h)/2,g=(c+d)/2;(r=s[0])&&t.push(new ee(r,a,o,c,u,p,g)),(r=s[1])&&t.push(new ee(r,u,o,c,l,p,g)),(r=s[2])&&t.push(new ee(r,a,p,c,u,h,g)),(r=s[3])&&t.push(new ee(r,u,p,c,l,h,g)),(r=s[4])&&t.push(new ee(r,a,o,g,u,p,d)),(r=s[5])&&t.push(new ee(r,u,o,g,l,p,d)),(r=s[6])&&t.push(new ee(r,a,p,g,u,h,d)),(r=s[7])&&t.push(new ee(r,u,p,g,l,h,d))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function cp(n){return n[0]}function hp(n){return arguments.length?(this._x=n,this):this._x}function up(n){return n[1]}function fp(n){return arguments.length?(this._y=n,this):this._y}function dp(n){return n[2]}function pp(n){return arguments.length?(this._z=n,this):this._z}function Br(n,t,e,i){var s=new Ph(t==null?cp:t,e==null?up:e,i==null?dp:i,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?s:s.addAll(n)}function Ph(n,t,e,i,s,r,a,o,c){this._x=n,this._y=t,this._z=e,this._x0=i,this._y0=s,this._z0=r,this._x1=a,this._y1=o,this._z1=c,this._root=void 0}function mp(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Le=Br.prototype=Ph.prototype;Le.copy=function(){var n=new Ph(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=mp(t),n;for(e=[{source:t,target:n._root=new Array(8)}];t=e.pop();)for(var s=0;s<8;++s)(i=t.source[s])&&(i.length?e.push({source:i,target:t.target[s]=new Array(8)}):t.target[s]=mp(i));return n};Le.add=$d;Le.addAll=Kd;Le.cover=jd;Le.data=Qd;Le.extent=tp;Le.find=ep;Le.findAllWithinRadius=np;Le.remove=ip;Le.removeAll=sp;Le.root=rp;Le.size=ap;Le.visit=op;Le.visitAfter=lp;Le.x=hp;Le.y=fp;Le.z=pp;function dn(n){return function(){return n}}function Tn(n){return(n()-.5)*1e-6}function Mb(n){return n.index}function gp(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function Dh(n){var t=Mb,e=u,i,s=dn(30),r,a,o,c,l,h,d=1;n==null&&(n=[]);function u(f){return 1/Math.min(c[f.source.index],c[f.target.index])}function p(f){for(var b=0,E=n.length;b<d;++b)for(var _=0,M,S,w,x=0,T=0,P=0,D,I;_<E;++_)M=n[_],S=M.source,w=M.target,x=w.x+w.vx-S.x-S.vx||Tn(h),o>1&&(T=w.y+w.vy-S.y-S.vy||Tn(h)),o>2&&(P=w.z+w.vz-S.z-S.vz||Tn(h)),D=Math.sqrt(x*x+T*T+P*P),D=(D-r[_])/D*f*i[_],x*=D,T*=D,P*=D,w.vx-=x*(I=l[_]),o>1&&(w.vy-=T*I),o>2&&(w.vz-=P*I),S.vx+=x*(I=1-I),o>1&&(S.vy+=T*I),o>2&&(S.vz+=P*I)}function g(){if(a){var f,b=a.length,E=n.length,_=new Map(a.map((S,w)=>[t(S,w,a),S])),M;for(f=0,c=new Array(b);f<E;++f)M=n[f],M.index=f,typeof M.source!="object"&&(M.source=gp(_,M.source)),typeof M.target!="object"&&(M.target=gp(_,M.target)),c[M.source.index]=(c[M.source.index]||0)+1,c[M.target.index]=(c[M.target.index]||0)+1;for(f=0,l=new Array(E);f<E;++f)M=n[f],l[f]=c[M.source.index]/(c[M.source.index]+c[M.target.index]);i=new Array(E),y(),r=new Array(E),m()}}function y(){if(a)for(var f=0,b=n.length;f<b;++f)i[f]=+e(n[f],f,n)}function m(){if(a)for(var f=0,b=n.length;f<b;++f)r[f]=+s(n[f],f,n)}return p.initialize=function(f,...b){a=f,h=b.find(E=>typeof E=="function")||Math.random,o=b.find(E=>[1,2,3].includes(E))||2,g()},p.links=function(f){return arguments.length?(n=f,g(),p):n},p.id=function(f){return arguments.length?(t=f,p):t},p.iterations=function(f){return arguments.length?(d=+f,p):d},p.strength=function(f){return arguments.length?(e=typeof f=="function"?f:dn(+f),y(),p):e},p.distance=function(f){return arguments.length?(s=typeof f=="function"?f:dn(+f),m(),p):s},p}var Sb={value:()=>{}};function xp(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new yl(e)}function yl(n){this._=n}function wb(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",s=e.indexOf(".");if(s>=0&&(i=e.slice(s+1),e=e.slice(0,s)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}yl.prototype=xp.prototype={constructor:yl,on:function(n,t){var e=this._,i=wb(n+"",e),s,r=-1,a=i.length;if(arguments.length<2){for(;++r<a;)if((s=(n=i[r]).type)&&(s=Eb(e[s],n.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<a;)if(s=(n=i[r]).type)e[s]=_p(e[s],n.name,t);else if(t==null)for(s in e)e[s]=_p(e[s],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new yl(n)},call:function(n,t){if((s=arguments.length-2)>0)for(var e=new Array(s),i=0,s,r;i<s;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(r=this._[n],i=0,s=r.length;i<s;++i)r[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],s=0,r=i.length;s<r;++s)i[s].value.apply(t,e)}};function Eb(n,t){for(var e=0,i=n.length,s;e<i;++e)if((s=n[e]).name===t)return s.value}function _p(n,t,e){for(var i=0,s=n.length;i<s;++i)if(n[i].name===t){n[i]=Sb,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var An=xp;var Os=0,kr=0,zr=0,vp=1e3,vl,Vr,bl=0,Ji=0,Ml=0,Gr=typeof performance=="object"&&performance.now?performance:Date,bp=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Wr(){return Ji||(bp(Tb),Ji=Gr.now()+Ml)}function Tb(){Ji=0}function Hr(){this._call=this._time=this._next=null}Hr.prototype=Di.prototype={constructor:Hr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Wr():+e)+(t==null?0:+t),!this._next&&Vr!==this&&(Vr?Vr._next=this:vl=this,Vr=this),this._call=n,this._time=e,Lh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Lh())}};function Di(n,t,e){var i=new Hr;return i.restart(n,t,e),i}function Mp(){Wr(),++Os;for(var n=vl,t;n;)(t=Ji-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Os}function yp(){Ji=(bl=Gr.now())+Ml,Os=kr=0;try{Mp()}finally{Os=0,Cb(),Ji=0}}function Ab(){var n=Gr.now(),t=n-bl;t>vp&&(Ml-=t,bl=n)}function Cb(){for(var n,t=vl,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:vl=e);Vr=n,Lh(i)}function Lh(n){if(!Os){kr&&(kr=clearTimeout(kr));var t=n-Ji;t>24?(n<1/0&&(kr=setTimeout(yp,n-Gr.now()-Ml)),zr&&(zr=clearInterval(zr))):(zr||(bl=Gr.now(),zr=setInterval(Ab,vp)),Os=1,bp(yp))}}function Sl(n,t,e){var i=new Hr;return t=t==null?0:+t,i.restart(s=>{i.stop(),n(s+t)},t,e),i}function Sp(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}var wp=3;function wl(n){return n.x}function Nh(n){return n.y}function Ep(n){return n.z}var Rb=10,Ib=Math.PI*(3-Math.sqrt(5)),Pb=Math.PI*20/(9+Math.sqrt(221));function Uh(n,t){t=t||2;var e=Math.min(wp,Math.max(1,Math.round(t))),i,s=1,r=.001,a=1-Math.pow(r,1/300),o=0,c=.6,l=new Map,h=Di(p),d=An("tick","end"),u=Sp();n==null&&(n=[]);function p(){g(),d.call("tick",i),s<r&&(h.stop(),d.call("end",i))}function g(f){var b,E=n.length,_;f===void 0&&(f=1);for(var M=0;M<f;++M)for(s+=(o-s)*a,l.forEach(function(S){S(s)}),b=0;b<E;++b)_=n[b],_.fx==null?_.x+=_.vx*=c:(_.x=_.fx,_.vx=0),e>1&&(_.fy==null?_.y+=_.vy*=c:(_.y=_.fy,_.vy=0)),e>2&&(_.fz==null?_.z+=_.vz*=c:(_.z=_.fz,_.vz=0));return i}function y(){for(var f=0,b=n.length,E;f<b;++f){if(E=n[f],E.index=f,E.fx!=null&&(E.x=E.fx),E.fy!=null&&(E.y=E.fy),E.fz!=null&&(E.z=E.fz),isNaN(E.x)||e>1&&isNaN(E.y)||e>2&&isNaN(E.z)){var _=Rb*(e>2?Math.cbrt(.5+f):e>1?Math.sqrt(.5+f):f),M=f*Ib,S=f*Pb;e===1?E.x=_:e===2?(E.x=_*Math.cos(M),E.y=_*Math.sin(M)):(E.x=_*Math.sin(M)*Math.cos(S),E.y=_*Math.cos(M),E.z=_*Math.sin(M)*Math.sin(S))}(isNaN(E.vx)||e>1&&isNaN(E.vy)||e>2&&isNaN(E.vz))&&(E.vx=0,e>1&&(E.vy=0),e>2&&(E.vz=0))}}function m(f){return f.initialize&&f.initialize(n,u,e),f}return y(),i={tick:g,restart:function(){return h.restart(p),i},stop:function(){return h.stop(),i},numDimensions:function(f){return arguments.length?(e=Math.min(wp,Math.max(1,Math.round(f))),l.forEach(m),i):e},nodes:function(f){return arguments.length?(n=f,y(),l.forEach(m),i):n},alpha:function(f){return arguments.length?(s=+f,i):s},alphaMin:function(f){return arguments.length?(r=+f,i):r},alphaDecay:function(f){return arguments.length?(a=+f,i):+a},alphaTarget:function(f){return arguments.length?(o=+f,i):o},velocityDecay:function(f){return arguments.length?(c=1-f,i):1-c},randomSource:function(f){return arguments.length?(u=f,l.forEach(m),i):u},force:function(f,b){return arguments.length>1?(b==null?l.delete(f):l.set(f,m(b)),i):l.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),b=f.shift()||0,E=(e>1?f.shift():null)||0,_=(e>2?f.shift():null)||0,M=f.shift()||1/0,S=0,w=n.length,x,T,P,D,I,B;for(M*=M,S=0;S<w;++S)I=n[S],x=b-I.x,T=E-(I.y||0),P=_-(I.z||0),D=x*x+T*T+P*P,D<M&&(B=I,M=D);return B},on:function(f,b){return arguments.length>1?(d.on(f,b),i):d.on(f)}}}function Fh(){var n,t,e,i,s,r=dn(-30),a,o=1,c=1/0,l=.81;function h(g){var y,m=n.length,f=(t===1?Or(n,wl):t===2?ii(n,wl,Nh):t===3?Br(n,wl,Nh,Ep):null).visitAfter(u);for(s=g,y=0;y<m;++y)e=n[y],f.visit(p)}function d(){if(n){var g,y=n.length,m;for(a=new Array(y),g=0;g<y;++g)m=n[g],a[m.index]=+r(m,g,n)}}function u(g){var y=0,m,f,b=0,E,_,M,S,w=g.length;if(w){for(E=_=M=S=0;S<w;++S)(m=g[S])&&(f=Math.abs(m.value))&&(y+=m.value,b+=f,E+=f*(m.x||0),_+=f*(m.y||0),M+=f*(m.z||0));y*=Math.sqrt(4/w),g.x=E/b,t>1&&(g.y=_/b),t>2&&(g.z=M/b)}else{m=g,m.x=m.data.x,t>1&&(m.y=m.data.y),t>2&&(m.z=m.data.z);do y+=a[m.data.index];while(m=m.next)}g.value=y}function p(g,y,m,f,b){if(!g.value)return!0;var E=[m,f,b][t-1],_=g.x-e.x,M=t>1?g.y-e.y:0,S=t>2?g.z-e.z:0,w=E-y,x=_*_+M*M+S*S;if(w*w/l<x)return x<c&&(_===0&&(_=Tn(i),x+=_*_),t>1&&M===0&&(M=Tn(i),x+=M*M),t>2&&S===0&&(S=Tn(i),x+=S*S),x<o&&(x=Math.sqrt(o*x)),e.vx+=_*g.value*s/x,t>1&&(e.vy+=M*g.value*s/x),t>2&&(e.vz+=S*g.value*s/x)),!0;if(g.length||x>=c)return;(g.data!==e||g.next)&&(_===0&&(_=Tn(i),x+=_*_),t>1&&M===0&&(M=Tn(i),x+=M*M),t>2&&S===0&&(S=Tn(i),x+=S*S),x<o&&(x=Math.sqrt(o*x)));do g.data!==e&&(w=a[g.data.index]*s/x,e.vx+=_*w,t>1&&(e.vy+=M*w),t>2&&(e.vz+=S*w));while(g=g.next)}return h.initialize=function(g,...y){n=g,i=y.find(m=>typeof m=="function")||Math.random,t=y.find(m=>[1,2,3].includes(m))||2,d()},h.strength=function(g){return arguments.length?(r=typeof g=="function"?g:dn(+g),d(),h):r},h.distanceMin=function(g){return arguments.length?(o=g*g,h):Math.sqrt(o)},h.distanceMax=function(g){return arguments.length?(c=g*g,h):Math.sqrt(c)},h.theta=function(g){return arguments.length?(l=g*g,h):Math.sqrt(l)},h}function Oh(n,t,e,i){var s,r,a=dn(.1),o,c;typeof n!="function"&&(n=dn(+n)),t==null&&(t=0),e==null&&(e=0),i==null&&(i=0);function l(d){for(var u=0,p=s.length;u<p;++u){var g=s[u],y=g.x-t||1e-6,m=(g.y||0)-e||1e-6,f=(g.z||0)-i||1e-6,b=Math.sqrt(y*y+m*m+f*f),E=(c[u]-b)*o[u]*d/b;g.vx+=y*E,r>1&&(g.vy+=m*E),r>2&&(g.vz+=f*E)}}function h(){if(s){var d,u=s.length;for(o=new Array(u),c=new Array(u),d=0;d<u;++d)c[d]=+n(s[d],d,s),o[d]=isNaN(c[d])?0:+a(s[d],d,s)}}return l.initialize=function(d,...u){s=d,r=u.find(p=>[1,2,3].includes(p))||2,h()},l.strength=function(d){return arguments.length?(a=typeof d=="function"?d:dn(+d),h(),l):a},l.radius=function(d){return arguments.length?(n=typeof d=="function"?d:dn(+d),h(),l):n},l.x=function(d){return arguments.length?(t=+d,l):t},l.y=function(d){return arguments.length?(e=+d,l):e},l.z=function(d){return arguments.length?(i=+d,l):i},l}var El=class{constructor(){this.animId=null;this.raycaster=new Sr;this.mouse=new At(-9999,-9999);this.nodeMeshes=new Map;this.labelSprites=new Map;this.simNodes=[];this.simLinks=[];this.hoveredId=null;this.ro=null;this.sim=null;this.nodeBaseSizes=new Map;this.currentNodeScale=1;this.currentLabelSize=10;this.physicsLinkDist=80;this.physicsCharge=120;this.physicsGravity=.04;this.frameCount=0}get nodeIds(){return this.simNodes.map(t=>t.id)}getNodeType(t){var e,i;return(i=(e=this.simNodes.find(s=>s.id===t))==null?void 0:e.type)!=null?i:"concept"}init(t,e){this.container=t,this.opts=e,this.currentNodeScale=e.nodeScale,this.currentLabelSize=e.labelSize,this.physicsLinkDist=e.linkDist,this.physicsCharge=e.chargeStr,this.physicsGravity=e.gravityStr;let i=t.clientWidth||800,s=t.clientHeight||600;this.renderer=new pl({antialias:!0}),this.renderer.setSize(i,s),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(266,1),this.renderer.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;",t.style.position="relative",t.appendChild(this.renderer.domElement),this.scene=new ar,this.camera=new Be(60,i/s,.5,5e4),this.camera.position.set(0,0,600),this.controls=new xl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.2,this.buildStarField(),this.edgeGeo=new Se,this.edgeMat=new As({color:4478327,opacity:Math.min(.5,.12+e.edgeWidth/8*.38),transparent:!0,depthWrite:!1}),this.edgeLines=new fr(this.edgeGeo,this.edgeMat),this.scene.add(this.edgeLines),this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this)),this.renderer.domElement.addEventListener("click",this.onClick.bind(this)),this.ro=new ResizeObserver(()=>this.onResize()),this.ro.observe(t),this.updateLabelFade(e.labelFadeAt),this.loop()}buildStarField(){let e=new Float32Array(6e3);for(let r=0;r<2e3;r++){let a=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),c=1800+Math.random()*800;e[r*3]=c*Math.sin(o)*Math.cos(a),e[r*3+1]=c*Math.sin(o)*Math.sin(a),e[r*3+2]=c*Math.cos(o)}let i=new Se;i.setAttribute("position",new he(e,3));let s=new Cs({color:13687024,size:1,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1});this.starField=new dr(i,s),this.scene.add(this.starField)}makeShapeGeo(t){switch(t){case"axiom":case"rule":return new xr(1);case"process":case"decision":return new bi(1.6,1.6,1.6);case"pattern":case"overview":case"synthesis":return new _r(1,1,.7,6);default:return new Rs(1,12,8)}}setData(t,e){for(let r of this.nodeMeshes.values())this.scene.remove(r);for(let r of this.labelSprites.values())this.scene.remove(r);this.nodeMeshes.clear(),this.labelSprites.clear(),this.nodeBaseSizes.clear(),this.simNodes=t,this.simLinks=e;let i=new Rs(1,8,6);for(let r of t){let a=new vi({color:new Zt(r.color)}),o=new He(this.makeShapeGeo(r.type),a),c=r.size*2.5;this.nodeBaseSizes.set(r.id,c),o.scale.setScalar(c*this.currentNodeScale),o.userData.id=r.id,o.userData.type=r.type,this.nodeMeshes.set(r.id,o),this.scene.add(o);let l=new He(i.clone(),new vi({visible:!1}));l.userData.id=r.id,o.add(l);let h=this.makeLabel(r.title,this.currentLabelSize);h.userData.id=r.id,this.labelSprites.set(r.id,h),this.scene.add(h)}let s=new Float32Array(e.length*6);this.edgeGeo.setAttribute("position",new he(s,3)),this.edgeGeo.setDrawRange(0,0),this.runSim(this.physicsLinkDist,this.physicsCharge,this.physicsGravity)}runSim(t=80,e=120,i=.08){let s=Math.max(100,Math.sqrt(this.simNodes.length)*20);this.sim=Uh(this.simNodes,3).force("link",Dh(this.simLinks).id(r=>r.id).distance(t).strength(.4)).force("charge",Fh().strength(-e)).force("center",Ch(0,0,0)).force("radial",Oh(s,0,0,0).strength(i)).alphaDecay(.025),this.sim.on("tick",()=>this.updatePositions())}updateLinkDist(t){var e,i,s;(i=(e=this.sim)==null?void 0:e.force("link"))==null||i.distance(t),(s=this.sim)==null||s.alpha(.4).restart()}updateCharge(t){var e,i,s;(i=(e=this.sim)==null?void 0:e.force("charge"))==null||i.strength(-t),(s=this.sim)==null||s.alpha(.4).restart()}updateGravity(t){var e,i,s;(i=(e=this.sim)==null?void 0:e.force("radial"))==null||i.strength(t),(s=this.sim)==null||s.alpha(.3).restart()}updateNodeScale(t){var e;this.currentNodeScale=t;for(let[i,s]of this.nodeMeshes){let r=(e=this.nodeBaseSizes.get(i))!=null?e:2.5;s.scale.setScalar(r*t)}}updateEdgeWidth(t){this.edgeMat.opacity=Math.min(.5,.12+t/8*.38)}updateLabelSize(t){var e;this.currentLabelSize=t;for(let[,i]of this.labelSprites){let s=(e=i.material.map)==null?void 0:e.image;s&&i.scale.set(s.width*t/95,t*1.4,1)}}updateLabelFade(t){let e=t>.15;for(let i of this.labelSprites.values())i.visible=e}updatePositions(){var i,s,r,a,o,c,l;for(let h of this.simNodes){let d=this.nodeMeshes.get(h.id),u=this.labelSprites.get(h.id);if(!d)continue;let p=(i=h.x)!=null?i:0,g=(s=h.y)!=null?s:0,y=(r=h.z)!=null?r:0;d.position.set(p,g,y),u&&u.position.set(p+h.size*6,g+h.size*4,y)}let t=this.edgeGeo.getAttribute("position"),e=0;for(let h of this.simLinks){let d=h.source,u=h.target;!d||!u||d.x==null||(t.array[e++]=d.x,t.array[e++]=(a=d.y)!=null?a:0,t.array[e++]=(o=d.z)!=null?o:0,t.array[e++]=u.x,t.array[e++]=(c=u.y)!=null?c:0,t.array[e++]=(l=u.z)!=null?l:0)}t.needsUpdate=!0,this.edgeGeo.setDrawRange(0,e/3)}highlight(t,e=.08){let i=t.size>0;for(let[s,r]of this.nodeMeshes){let a=r.material;a.transparent=i&&!t.has(s),a.opacity=i&&!t.has(s)?e:1}}makeLabel(t,e=10){let i=document.createElement("canvas"),s=i.getContext("2d"),r=t.length>24?t.slice(0,22)+"\u2026":t;s.font='24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';let a=s.measureText(r).width+16;i.width=a,i.height=40,s.font='24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',s.fillStyle="rgba(220, 230, 255, 0.90)",s.fillText(r,8,30);let o=new mr(i),c=new Ts({map:o,transparent:!0,depthWrite:!1}),l=new hr(c);return l.scale.set(a*e/95,e*1.3,1),l}setLabelVisibility(t){for(let e of this.labelSprites.values())e.visible=t}onMouseMove(t){let e=this.renderer.domElement.getBoundingClientRect();this.mouse.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}onClick(t){var i,s;this.raycaster.setFromCamera(this.mouse,this.camera);let e=this.raycaster.intersectObjects([...this.nodeMeshes.values()],!0);if(e.length>0){let r=(s=e[0].object.userData.id)!=null?s:(i=e[0].object.parent)==null?void 0:i.userData.id;r&&this.opts.onNodeClick(r)}}loop(){var s,r,a,o;this.animId=requestAnimationFrame(()=>this.loop()),this.controls.update(),this.frameCount++,this.starField&&(this.starField.rotation.y+=25e-6),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects([...this.nodeMeshes.values()],!0),e=t.length>0?(r=t[0].object.userData.id)!=null?r:(s=t[0].object.parent)==null?void 0:s.userData.id:null,i=e!=null?e:null;if(i!==this.hoveredId){if(this.hoveredId){let c=this.nodeMeshes.get(this.hoveredId);if(c){let l=(a=this.nodeBaseSizes.get(this.hoveredId))!=null?a:2.5;c.scale.setScalar(l*this.currentNodeScale)}}if(i){let c=this.nodeMeshes.get(i);if(c){let l=(o=this.nodeBaseSizes.get(i))!=null?o:2.5;c.scale.setScalar(l*this.currentNodeScale*1.8)}}this.hoveredId=i,this.renderer.domElement.style.cursor=i?"pointer":"default"}this.renderer.render(this.scene,this.camera)}onResize(){let t=this.container.clientWidth,e=this.container.clientHeight;!t||!e||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}updateColors(t){for(let[e,i]of this.nodeMeshes){let s=t.get(e);s&&i.material.color.set(s)}}getCameraState(){return{px:this.camera.position.x,py:this.camera.position.y,pz:this.camera.position.z,tx:this.controls.target.x,ty:this.controls.target.y,tz:this.controls.target.z}}setCameraState(t){this.camera.position.set(t.px,t.py,t.pz),this.controls.target.set(t.tx,t.ty,t.tz),this.controls.update()}dispose(){var t,e,i,s,r,a;this.animId!=null&&cancelAnimationFrame(this.animId),(t=this.ro)==null||t.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove();for(let o of this.nodeMeshes.values())o.geometry.dispose(),o.material.dispose();for(let o of this.labelSprites.values())(e=o.material.map)==null||e.dispose(),o.material.dispose();(s=(i=this.starField)==null?void 0:i.material)==null||s.dispose(),(a=(r=this.starField)==null?void 0:r.geometry)==null||a.dispose(),this.edgeGeo.dispose(),this.edgeMat.dispose()}};var Tl="http://www.w3.org/1999/xhtml",Bh={svg:"http://www.w3.org/2000/svg",xhtml:Tl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function si(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Bh.hasOwnProperty(t)?{space:Bh[t],local:n}:n}function Db(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Tl&&t.documentElement.namespaceURI===Tl?t.createElement(n):t.createElementNS(e,n)}}function Lb(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Al(n){var t=si(n);return(t.local?Lb:Db)(t)}function Nb(){}function Ki(n){return n==null?Nb:function(){return this.querySelector(n)}}function Tp(n){typeof n!="function"&&(n=Ki(n));for(var t=this._groups,e=t.length,i=new Array(e),s=0;s<e;++s)for(var r=t[s],a=r.length,o=i[s]=new Array(a),c,l,h=0;h<a;++h)(c=r[h])&&(l=n.call(c,c.__data__,h,r))&&("__data__"in c&&(l.__data__=c.__data__),o[h]=l);return new _e(i,this._parents)}function zh(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Ub(){return[]}function Xr(n){return n==null?Ub:function(){return this.querySelectorAll(n)}}function Fb(n){return function(){return zh(n.apply(this,arguments))}}function Ap(n){typeof n=="function"?n=Fb(n):n=Xr(n);for(var t=this._groups,e=t.length,i=[],s=[],r=0;r<e;++r)for(var a=t[r],o=a.length,c,l=0;l<o;++l)(c=a[l])&&(i.push(n.call(c,c.__data__,l,a)),s.push(c));return new _e(i,s)}function qr(n){return function(){return this.matches(n)}}function Cl(n){return function(t){return t.matches(n)}}var Ob=Array.prototype.find;function Bb(n){return function(){return Ob.call(this.children,n)}}function zb(){return this.firstElementChild}function Cp(n){return this.select(n==null?zb:Bb(typeof n=="function"?n:Cl(n)))}var kb=Array.prototype.filter;function Vb(){return Array.from(this.children)}function Gb(n){return function(){return kb.call(this.children,n)}}function Rp(n){return this.selectAll(n==null?Vb:Gb(typeof n=="function"?n:Cl(n)))}function Ip(n){typeof n!="function"&&(n=qr(n));for(var t=this._groups,e=t.length,i=new Array(e),s=0;s<e;++s)for(var r=t[s],a=r.length,o=i[s]=[],c,l=0;l<a;++l)(c=r[l])&&n.call(c,c.__data__,l,r)&&o.push(c);return new _e(i,this._parents)}function Rl(n){return new Array(n.length)}function Pp(){return new _e(this._enter||this._groups.map(Rl),this._parents)}function Yr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Yr.prototype={constructor:Yr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Dp(n){return function(){return n}}function Hb(n,t,e,i,s,r){for(var a=0,o,c=t.length,l=r.length;a<l;++a)(o=t[a])?(o.__data__=r[a],i[a]=o):e[a]=new Yr(n,r[a]);for(;a<c;++a)(o=t[a])&&(s[a]=o)}function Wb(n,t,e,i,s,r,a){var o,c,l=new Map,h=t.length,d=r.length,u=new Array(h),p;for(o=0;o<h;++o)(c=t[o])&&(u[o]=p=a.call(c,c.__data__,o,t)+"",l.has(p)?s[o]=c:l.set(p,c));for(o=0;o<d;++o)p=a.call(n,r[o],o,r)+"",(c=l.get(p))?(i[o]=c,c.__data__=r[o],l.delete(p)):e[o]=new Yr(n,r[o]);for(o=0;o<h;++o)(c=t[o])&&l.get(u[o])===c&&(s[o]=c)}function Xb(n){return n.__data__}function Lp(n,t){if(!arguments.length)return Array.from(this,Xb);var e=t?Wb:Hb,i=this._parents,s=this._groups;typeof n!="function"&&(n=Dp(n));for(var r=s.length,a=new Array(r),o=new Array(r),c=new Array(r),l=0;l<r;++l){var h=i[l],d=s[l],u=d.length,p=qb(n.call(h,h&&h.__data__,l,i)),g=p.length,y=o[l]=new Array(g),m=a[l]=new Array(g),f=c[l]=new Array(u);e(h,d,y,m,f,p,t);for(var b=0,E=0,_,M;b<g;++b)if(_=y[b]){for(b>=E&&(E=b+1);!(M=m[E])&&++E<g;);_._next=M||null}}return a=new _e(a,i),a._enter=o,a._exit=c,a}function qb(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Np(){return new _e(this._exit||this._groups.map(Rl),this._parents)}function Up(n,t,e){var i=this.enter(),s=this,r=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(s=t(s),s&&(s=s.selection())),e==null?r.remove():e(r),i&&s?i.merge(s).order():s}function Fp(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,s=e.length,r=i.length,a=Math.min(s,r),o=new Array(s),c=0;c<a;++c)for(var l=e[c],h=i[c],d=l.length,u=o[c]=new Array(d),p,g=0;g<d;++g)(p=l[g]||h[g])&&(u[g]=p);for(;c<s;++c)o[c]=e[c];return new _e(o,this._parents)}function Op(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],s=i.length-1,r=i[s],a;--s>=0;)(a=i[s])&&(r&&a.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(a,r),r=a);return this}function Bp(n){n||(n=Yb);function t(d,u){return d&&u?n(d.__data__,u.__data__):!d-!u}for(var e=this._groups,i=e.length,s=new Array(i),r=0;r<i;++r){for(var a=e[r],o=a.length,c=s[r]=new Array(o),l,h=0;h<o;++h)(l=a[h])&&(c[h]=l);c.sort(t)}return new _e(s,this._parents).order()}function Yb(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function zp(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function kp(){return Array.from(this)}function Vp(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],s=0,r=i.length;s<r;++s){var a=i[s];if(a)return a}return null}function Gp(){let n=0;for(let t of this)++n;return n}function Hp(){return!this.node()}function Wp(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var s=t[e],r=0,a=s.length,o;r<a;++r)(o=s[r])&&n.call(o,o.__data__,r,s);return this}function Zb(n){return function(){this.removeAttribute(n)}}function $b(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Jb(n,t){return function(){this.setAttribute(n,t)}}function Kb(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function jb(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Qb(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Xp(n,t){var e=si(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?$b:Zb:typeof t=="function"?e.local?Qb:jb:e.local?Kb:Jb)(e,t))}function Il(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function tM(n){return function(){this.style.removeProperty(n)}}function eM(n,t,e){return function(){this.style.setProperty(n,t,e)}}function nM(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function qp(n,t,e){return arguments.length>1?this.each((t==null?tM:typeof t=="function"?nM:eM)(n,t,e==null?"":e)):Li(this.node(),n)}function Li(n,t){return n.style.getPropertyValue(t)||Il(n).getComputedStyle(n,null).getPropertyValue(t)}function iM(n){return function(){delete this[n]}}function sM(n,t){return function(){this[n]=t}}function rM(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Yp(n,t){return arguments.length>1?this.each((t==null?iM:typeof t=="function"?rM:sM)(n,t)):this.node()[n]}function Zp(n){return n.trim().split(/^|\s+/)}function kh(n){return n.classList||new $p(n)}function $p(n){this._node=n,this._names=Zp(n.getAttribute("class")||"")}$p.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Jp(n,t){for(var e=kh(n),i=-1,s=t.length;++i<s;)e.add(t[i])}function Kp(n,t){for(var e=kh(n),i=-1,s=t.length;++i<s;)e.remove(t[i])}function aM(n){return function(){Jp(this,n)}}function oM(n){return function(){Kp(this,n)}}function lM(n,t){return function(){(t.apply(this,arguments)?Jp:Kp)(this,n)}}function jp(n,t){var e=Zp(n+"");if(arguments.length<2){for(var i=kh(this.node()),s=-1,r=e.length;++s<r;)if(!i.contains(e[s]))return!1;return!0}return this.each((typeof t=="function"?lM:t?aM:oM)(e,t))}function cM(){this.textContent=""}function hM(n){return function(){this.textContent=n}}function uM(n){return function(){var t=n.apply(this,arguments);this.textContent=t==null?"":t}}function Qp(n){return arguments.length?this.each(n==null?cM:(typeof n=="function"?uM:hM)(n)):this.node().textContent}function fM(){this.innerHTML=""}function dM(n){return function(){this.innerHTML=n}}function pM(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}}function tm(n){return arguments.length?this.each(n==null?fM:(typeof n=="function"?pM:dM)(n)):this.node().innerHTML}function mM(){this.nextSibling&&this.parentNode.appendChild(this)}function em(){return this.each(mM)}function gM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function nm(){return this.each(gM)}function im(n){var t=typeof n=="function"?n:Al(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function _M(){return null}function sm(n,t){var e=typeof n=="function"?n:Al(n),i=t==null?_M:typeof t=="function"?t:Ki(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function xM(){var n=this.parentNode;n&&n.removeChild(this)}function rm(){return this.each(xM)}function yM(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function vM(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function am(n){return this.select(n?vM:yM)}function om(n){return arguments.length?this.property("__data__",n):this.node().__data__}function bM(n){return function(t){n.call(this,t,this.__data__)}}function MM(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function SM(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,s=t.length,r;e<s;++e)r=t[e],(!n.type||r.type===n.type)&&r.name===n.name?this.removeEventListener(r.type,r.listener,r.options):t[++i]=r;++i?t.length=i:delete this.__on}}}function wM(n,t,e){return function(){var i=this.__on,s,r=bM(t);if(i){for(var a=0,o=i.length;a<o;++a)if((s=i[a]).type===n.type&&s.name===n.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=e),s.value=t;return}}this.addEventListener(n.type,r,e),s={type:n.type,name:n.name,value:t,listener:r,options:e},i?i.push(s):this.__on=[s]}}function lm(n,t,e){var i=MM(n+""),s,r=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var c=0,l=o.length,h;c<l;++c)for(s=0,h=o[c];s<r;++s)if((a=i[s]).type===h.type&&a.name===h.name)return h.value}return}for(o=t?wM:SM,s=0;s<r;++s)this.each(o(i[s],t,e));return this}function cm(n,t,e){var i=Il(n),s=i.CustomEvent;typeof s=="function"?s=new s(t,e):(s=i.document.createEvent("Event"),e?(s.initEvent(t,e.bubbles,e.cancelable),s.detail=e.detail):s.initEvent(t,!1,!1)),n.dispatchEvent(s)}function EM(n,t){return function(){return cm(this,n,t)}}function TM(n,t){return function(){return cm(this,n,t.apply(this,arguments))}}function hm(n,t){return this.each((typeof t=="function"?TM:EM)(n,t))}function*um(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],s=0,r=i.length,a;s<r;++s)(a=i[s])&&(yield a)}var Vh=[null];function _e(n,t){this._groups=n,this._parents=t}function fm(){return new _e([[document.documentElement]],Vh)}function AM(){return this}_e.prototype=fm.prototype={constructor:_e,select:Tp,selectAll:Ap,selectChild:Cp,selectChildren:Rp,filter:Ip,data:Lp,enter:Pp,exit:Np,join:Up,merge:Fp,selection:AM,order:Op,sort:Bp,call:zp,nodes:kp,node:Vp,size:Gp,empty:Hp,each:Wp,attr:Xp,style:qp,property:Yp,classed:jp,text:Qp,html:tm,raise:em,lower:nm,append:im,insert:sm,remove:rm,clone:am,datum:om,on:lm,dispatch:hm,[Symbol.iterator]:um};var ri=fm;function Pe(n){return typeof n=="string"?new _e([[document.querySelector(n)]],[document.documentElement]):new _e([[n]],Vh)}function dm(n){let t;for(;t=n.sourceEvent;)n=t;return n}function pn(n,t){if(n=dm(n),t===void 0&&(t=n.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=n.clientX,i.y=n.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var s=t.getBoundingClientRect();return[n.clientX-s.left-t.clientLeft,n.clientY-s.top-t.clientTop]}}return[n.pageX,n.pageY]}function Me(n){return function(){return n}}function Cn(n){return(n()-.5)*1e-6}function CM(n){return n.x+n.vx}function RM(n){return n.y+n.vy}function Gh(n){var t,e,i,s=1,r=1;typeof n!="function"&&(n=Me(n==null?1:+n));function a(){for(var l,h=t.length,d,u,p,g,y,m,f=0;f<r;++f)for(d=ii(t,CM,RM).visitAfter(o),l=0;l<h;++l)u=t[l],y=e[u.index],m=y*y,p=u.x+u.vx,g=u.y+u.vy,d.visit(b);function b(E,_,M,S,w){var x=E.data,T=E.r,P=y+T;if(x){if(x.index>u.index){var D=p-x.x-x.vx,I=g-x.y-x.vy,B=D*D+I*I;B<P*P&&(D===0&&(D=Cn(i),B+=D*D),I===0&&(I=Cn(i),B+=I*I),B=(P-(B=Math.sqrt(B)))/B*s,u.vx+=(D*=B)*(P=(T*=T)/(m+T)),u.vy+=(I*=B)*P,x.vx-=D*(P=1-P),x.vy-=I*P)}return}return _>p+P||S<p-P||M>g+P||w<g-P}}function o(l){if(l.data)return l.r=e[l.data.index];for(var h=l.r=0;h<4;++h)l[h]&&l[h].r>l.r&&(l.r=l[h].r)}function c(){if(t){var l,h=t.length,d;for(e=new Array(h),l=0;l<h;++l)d=t[l],e[d.index]=+n(d,l,t)}}return a.initialize=function(l,h){t=l,i=h,c()},a.iterations=function(l){return arguments.length?(r=+l,a):r},a.strength=function(l){return arguments.length?(s=+l,a):s},a.radius=function(l){return arguments.length?(n=typeof l=="function"?l:Me(+l),c(),a):n},a}function IM(n){return n.index}function pm(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function Hh(n){var t=IM,e=d,i,s=Me(30),r,a,o,c,l,h=1;n==null&&(n=[]);function d(m){return 1/Math.min(o[m.source.index],o[m.target.index])}function u(m){for(var f=0,b=n.length;f<h;++f)for(var E=0,_,M,S,w,x,T,P;E<b;++E)_=n[E],M=_.source,S=_.target,w=S.x+S.vx-M.x-M.vx||Cn(l),x=S.y+S.vy-M.y-M.vy||Cn(l),T=Math.sqrt(w*w+x*x),T=(T-r[E])/T*m*i[E],w*=T,x*=T,S.vx-=w*(P=c[E]),S.vy-=x*P,M.vx+=w*(P=1-P),M.vy+=x*P}function p(){if(a){var m,f=a.length,b=n.length,E=new Map(a.map((M,S)=>[t(M,S,a),M])),_;for(m=0,o=new Array(f);m<b;++m)_=n[m],_.index=m,typeof _.source!="object"&&(_.source=pm(E,_.source)),typeof _.target!="object"&&(_.target=pm(E,_.target)),o[_.source.index]=(o[_.source.index]||0)+1,o[_.target.index]=(o[_.target.index]||0)+1;for(m=0,c=new Array(b);m<b;++m)_=n[m],c[m]=o[_.source.index]/(o[_.source.index]+o[_.target.index]);i=new Array(b),g(),r=new Array(b),y()}}function g(){if(a)for(var m=0,f=n.length;m<f;++m)i[m]=+e(n[m],m,n)}function y(){if(a)for(var m=0,f=n.length;m<f;++m)r[m]=+s(n[m],m,n)}return u.initialize=function(m,f){a=m,l=f,p()},u.links=function(m){return arguments.length?(n=m,p(),u):n},u.id=function(m){return arguments.length?(t=m,u):t},u.iterations=function(m){return arguments.length?(h=+m,u):h},u.strength=function(m){return arguments.length?(e=typeof m=="function"?m:Me(+m),g(),u):e},u.distance=function(m){return arguments.length?(s=typeof m=="function"?m:Me(+m),y(),u):s},u}function mm(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}function gm(n){return n.x}function _m(n){return n.y}var PM=10,DM=Math.PI*(3-Math.sqrt(5));function Wh(n){var t,e=1,i=.001,s=1-Math.pow(i,1/300),r=0,a=.6,o=new Map,c=Di(d),l=An("tick","end"),h=mm();n==null&&(n=[]);function d(){u(),l.call("tick",t),e<i&&(c.stop(),l.call("end",t))}function u(y){var m,f=n.length,b;y===void 0&&(y=1);for(var E=0;E<y;++E)for(e+=(r-e)*s,o.forEach(function(_){_(e)}),m=0;m<f;++m)b=n[m],b.fx==null?b.x+=b.vx*=a:(b.x=b.fx,b.vx=0),b.fy==null?b.y+=b.vy*=a:(b.y=b.fy,b.vy=0);return t}function p(){for(var y=0,m=n.length,f;y<m;++y){if(f=n[y],f.index=y,f.fx!=null&&(f.x=f.fx),f.fy!=null&&(f.y=f.fy),isNaN(f.x)||isNaN(f.y)){var b=PM*Math.sqrt(.5+y),E=y*DM;f.x=b*Math.cos(E),f.y=b*Math.sin(E)}(isNaN(f.vx)||isNaN(f.vy))&&(f.vx=f.vy=0)}}function g(y){return y.initialize&&y.initialize(n,h),y}return p(),t={tick:u,restart:function(){return c.restart(d),t},stop:function(){return c.stop(),t},nodes:function(y){return arguments.length?(n=y,p(),o.forEach(g),t):n},alpha:function(y){return arguments.length?(e=+y,t):e},alphaMin:function(y){return arguments.length?(i=+y,t):i},alphaDecay:function(y){return arguments.length?(s=+y,t):+s},alphaTarget:function(y){return arguments.length?(r=+y,t):r},velocityDecay:function(y){return arguments.length?(a=1-y,t):1-a},randomSource:function(y){return arguments.length?(h=y,o.forEach(g),t):h},force:function(y,m){return arguments.length>1?(m==null?o.delete(y):o.set(y,g(m)),t):o.get(y)},find:function(y,m,f){var b=0,E=n.length,_,M,S,w,x;for(f==null?f=1/0:f*=f,b=0;b<E;++b)w=n[b],_=y-w.x,M=m-w.y,S=_*_+M*M,S<f&&(x=w,f=S);return x},on:function(y,m){return arguments.length>1?(l.on(y,m),t):l.on(y)}}}function Xh(){var n,t,e,i,s=Me(-30),r,a=1,o=1/0,c=.81;function l(p){var g,y=n.length,m=ii(n,gm,_m).visitAfter(d);for(i=p,g=0;g<y;++g)t=n[g],m.visit(u)}function h(){if(n){var p,g=n.length,y;for(r=new Array(g),p=0;p<g;++p)y=n[p],r[y.index]=+s(y,p,n)}}function d(p){var g=0,y,m,f=0,b,E,_;if(p.length){for(b=E=_=0;_<4;++_)(y=p[_])&&(m=Math.abs(y.value))&&(g+=y.value,f+=m,b+=m*y.x,E+=m*y.y);p.x=b/f,p.y=E/f}else{y=p,y.x=y.data.x,y.y=y.data.y;do g+=r[y.data.index];while(y=y.next)}p.value=g}function u(p,g,y,m){if(!p.value)return!0;var f=p.x-t.x,b=p.y-t.y,E=m-g,_=f*f+b*b;if(E*E/c<_)return _<o&&(f===0&&(f=Cn(e),_+=f*f),b===0&&(b=Cn(e),_+=b*b),_<a&&(_=Math.sqrt(a*_)),t.vx+=f*p.value*i/_,t.vy+=b*p.value*i/_),!0;if(p.length||_>=o)return;(p.data!==t||p.next)&&(f===0&&(f=Cn(e),_+=f*f),b===0&&(b=Cn(e),_+=b*b),_<a&&(_=Math.sqrt(a*_)));do p.data!==t&&(E=r[p.data.index]*i/_,t.vx+=f*E,t.vy+=b*E);while(p=p.next)}return l.initialize=function(p,g){n=p,e=g,h()},l.strength=function(p){return arguments.length?(s=typeof p=="function"?p:Me(+p),h(),l):s},l.distanceMin=function(p){return arguments.length?(a=p*p,l):Math.sqrt(a)},l.distanceMax=function(p){return arguments.length?(o=p*p,l):Math.sqrt(o)},l.theta=function(p){return arguments.length?(c=p*p,l):Math.sqrt(c)},l}function qh(n){var t=Me(.1),e,i,s;typeof n!="function"&&(n=Me(n==null?0:+n));function r(o){for(var c=0,l=e.length,h;c<l;++c)h=e[c],h.vx+=(s[c]-h.x)*i[c]*o}function a(){if(e){var o,c=e.length;for(i=new Array(c),s=new Array(c),o=0;o<c;++o)i[o]=isNaN(s[o]=+n(e[o],o,e))?0:+t(e[o],o,e)}}return r.initialize=function(o){e=o,a()},r.strength=function(o){return arguments.length?(t=typeof o=="function"?o:Me(+o),a(),r):t},r.x=function(o){return arguments.length?(n=typeof o=="function"?o:Me(+o),a(),r):n},r}function Yh(n){var t=Me(.1),e,i,s;typeof n!="function"&&(n=Me(n==null?0:+n));function r(o){for(var c=0,l=e.length,h;c<l;++c)h=e[c],h.vy+=(s[c]-h.y)*i[c]*o}function a(){if(e){var o,c=e.length;for(i=new Array(c),s=new Array(c),o=0;o<c;++o)i[o]=isNaN(s[o]=+n(e[o],o,e))?0:+t(e[o],o,e)}}return r.initialize=function(o){e=o,a()},r.strength=function(o){return arguments.length?(t=typeof o=="function"?o:Me(+o),a(),r):t},r.y=function(o){return arguments.length?(n=typeof o=="function"?o:Me(+o),a(),r):n},r}var xm={passive:!1},ji={capture:!0,passive:!1};function Pl(n){n.stopImmediatePropagation()}function Ni(n){n.preventDefault(),n.stopImmediatePropagation()}function Zr(n){var t=n.document.documentElement,e=Pe(n).on("dragstart.drag",Ni,ji);"onselectstart"in t?e.on("selectstart.drag",Ni,ji):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function $r(n,t){var e=n.document.documentElement,i=Pe(n).on("dragstart.drag",null);t&&(i.on("click.drag",Ni,ji),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in e?i.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}var Jr=n=>()=>n;function Kr(n,{sourceEvent:t,subject:e,target:i,identifier:s,active:r,x:a,y:o,dx:c,dy:l,dispatch:h}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:h}})}Kr.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function LM(n){return!n.ctrlKey&&!n.button}function NM(){return this.parentNode}function UM(n,t){return t==null?{x:n.x,y:n.y}:t}function FM(){return navigator.maxTouchPoints||"ontouchstart"in this}function Zh(){var n=LM,t=NM,e=UM,i=FM,s={},r=An("start","drag","end"),a=0,o,c,l,h,d=0;function u(_){_.on("mousedown.drag",p).filter(i).on("touchstart.drag",m).on("touchmove.drag",f,xm).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(_,M){if(!(h||!n.call(this,_,M))){var S=E(this,t.call(this,_,M),_,M,"mouse");S&&(Pe(_.view).on("mousemove.drag",g,ji).on("mouseup.drag",y,ji),Zr(_.view),Pl(_),l=!1,o=_.clientX,c=_.clientY,S("start",_))}}function g(_){if(Ni(_),!l){var M=_.clientX-o,S=_.clientY-c;l=M*M+S*S>d}s.mouse("drag",_)}function y(_){Pe(_.view).on("mousemove.drag mouseup.drag",null),$r(_.view,l),Ni(_),s.mouse("end",_)}function m(_,M){if(n.call(this,_,M)){var S=_.changedTouches,w=t.call(this,_,M),x=S.length,T,P;for(T=0;T<x;++T)(P=E(this,w,_,M,S[T].identifier,S[T]))&&(Pl(_),P("start",_,S[T]))}}function f(_){var M=_.changedTouches,S=M.length,w,x;for(w=0;w<S;++w)(x=s[M[w].identifier])&&(Ni(_),x("drag",_,M[w]))}function b(_){var M=_.changedTouches,S=M.length,w,x;for(h&&clearTimeout(h),h=setTimeout(function(){h=null},500),w=0;w<S;++w)(x=s[M[w].identifier])&&(Pl(_),x("end",_,M[w]))}function E(_,M,S,w,x,T){var P=r.copy(),D=pn(T||S,M),I,B,R;if((R=e.call(_,new Kr("beforestart",{sourceEvent:S,target:u,identifier:x,active:a,x:D[0],y:D[1],dx:0,dy:0,dispatch:P}),w))!=null)return I=R.x-D[0]||0,B=R.y-D[1]||0,function N(U,L,O){var X=D,Z;switch(U){case"start":s[x]=N,Z=a++;break;case"end":delete s[x],--a;case"drag":D=pn(O||L,M),Z=a;break}P.call(U,_,new Kr(U,{sourceEvent:L,subject:R,target:u,identifier:x,active:Z,x:D[0]+I,y:D[1]+B,dx:D[0]-X[0],dy:D[1]-X[1],dispatch:P}),w)}}return u.filter=function(_){return arguments.length?(n=typeof _=="function"?_:Jr(!!_),u):n},u.container=function(_){return arguments.length?(t=typeof _=="function"?_:Jr(_),u):t},u.subject=function(_){return arguments.length?(e=typeof _=="function"?_:Jr(_),u):e},u.touchable=function(_){return arguments.length?(i=typeof _=="function"?_:Jr(!!_),u):i},u.on=function(){var _=r.on.apply(r,arguments);return _===r?u:_},u.clickDistance=function(_){return arguments.length?(d=(_=+_)*_,u):Math.sqrt(d)},u}function Dl(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function $h(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function ta(){}var jr=.7,Ul=1/jr,Bs="\\s*([+-]?\\d+)\\s*",Qr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",OM=/^#([0-9a-f]{3,8})$/,BM=new RegExp(`^rgb\\(${Bs},${Bs},${Bs}\\)$`),zM=new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`),kM=new RegExp(`^rgba\\(${Bs},${Bs},${Bs},${Qr}\\)$`),VM=new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${Qr}\\)$`),GM=new RegExp(`^hsl\\(${Qr},${Wn},${Wn}\\)$`),HM=new RegExp(`^hsla\\(${Qr},${Wn},${Wn},${Qr}\\)$`),ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dl(ta,Ui,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:vm,formatHex:vm,formatHex8:WM,formatHsl:XM,formatRgb:bm,toString:bm});function vm(){return this.rgb().formatHex()}function WM(){return this.rgb().formatHex8()}function XM(){return Am(this).formatHsl()}function bm(){return this.rgb().formatRgb()}function Ui(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=OM.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Mm(t):e===3?new Je(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Ll(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Ll(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=BM.exec(n))?new Je(t[1],t[2],t[3],1):(t=zM.exec(n))?new Je(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=kM.exec(n))?Ll(t[1],t[2],t[3],t[4]):(t=VM.exec(n))?Ll(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=GM.exec(n))?Em(t[1],t[2]/100,t[3]/100,1):(t=HM.exec(n))?Em(t[1],t[2]/100,t[3]/100,t[4]):ym.hasOwnProperty(n)?Mm(ym[n]):n==="transparent"?new Je(NaN,NaN,NaN,0):null}function Mm(n){return new Je(n>>16&255,n>>8&255,n&255,1)}function Ll(n,t,e,i){return i<=0&&(n=t=e=NaN),new Je(n,t,e,i)}function qM(n){return n instanceof ta||(n=Ui(n)),n?(n=n.rgb(),new Je(n.r,n.g,n.b,n.opacity)):new Je}function zs(n,t,e,i){return arguments.length===1?qM(n):new Je(n,t,e,i==null?1:i)}function Je(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}Dl(Je,zs,$h(ta,{brighter(n){return n=n==null?Ul:Math.pow(Ul,n),new Je(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?jr:Math.pow(jr,n),new Je(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Je(ts(this.r),ts(this.g),ts(this.b),Fl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Sm,formatHex:Sm,formatHex8:YM,formatRgb:wm,toString:wm}));function Sm(){return`#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}`}function YM(){return`#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}${Qi((isNaN(this.opacity)?1:this.opacity)*255)}`}function wm(){let n=Fl(this.opacity);return`${n===1?"rgb(":"rgba("}${ts(this.r)}, ${ts(this.g)}, ${ts(this.b)}${n===1?")":`, ${n})`}`}function Fl(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ts(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Qi(n){return n=ts(n),(n<16?"0":"")+n.toString(16)}function Em(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Rn(n,t,e,i)}function Am(n){if(n instanceof Rn)return new Rn(n.h,n.s,n.l,n.opacity);if(n instanceof ta||(n=Ui(n)),!n)return new Rn;if(n instanceof Rn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,s=Math.min(t,e,i),r=Math.max(t,e,i),a=NaN,o=r-s,c=(r+s)/2;return o?(t===r?a=(e-i)/o+(e<i)*6:e===r?a=(i-t)/o+2:a=(t-e)/o+4,o/=c<.5?r+s:2-r-s,a*=60):o=c>0&&c<1?0:a,new Rn(a,o,c,n.opacity)}function Cm(n,t,e,i){return arguments.length===1?Am(n):new Rn(n,t,e,i==null?1:i)}function Rn(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Dl(Rn,Cm,$h(ta,{brighter(n){return n=n==null?Ul:Math.pow(Ul,n),new Rn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?jr:Math.pow(jr,n),new Rn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,s=2*e-i;return new Je(Jh(n>=240?n-240:n+120,s,i),Jh(n,s,i),Jh(n<120?n+240:n-120,s,i),this.opacity)},clamp(){return new Rn(Tm(this.h),Nl(this.s),Nl(this.l),Fl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let n=Fl(this.opacity);return`${n===1?"hsl(":"hsla("}${Tm(this.h)}, ${Nl(this.s)*100}%, ${Nl(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Tm(n){return n=(n||0)%360,n<0?n+360:n}function Nl(n){return Math.max(0,Math.min(1,n||0))}function Jh(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function Kh(n,t,e,i,s){var r=n*n,a=r*n;return((1-3*n+3*r-a)*t+(4-6*r+3*a)*e+(1+3*n+3*r-3*a)*i+a*s)/6}function Rm(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),s=n[i],r=n[i+1],a=i>0?n[i-1]:2*s-r,o=i<t-1?n[i+2]:2*r-s;return Kh((e-i/t)*t,a,s,r,o)}}function Im(n){var t=n.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*t),s=n[(i+t-1)%t],r=n[i%t],a=n[(i+1)%t],o=n[(i+2)%t];return Kh((e-i/t)*t,s,r,a,o)}}var jh=n=>()=>n;function ZM(n,t){return function(e){return n+e*t}}function $M(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function Pm(n){return(n=+n)==1?Ol:function(t,e){return e-t?$M(t,e,n):jh(isNaN(t)?e:t)}}function Ol(n,t){var e=t-n;return e?ZM(n,e):jh(isNaN(n)?t:n)}var Bl=function n(t){var e=Pm(t);function i(s,r){var a=e((s=zs(s)).r,(r=zs(r)).r),o=e(s.g,r.g),c=e(s.b,r.b),l=Ol(s.opacity,r.opacity);return function(h){return s.r=a(h),s.g=o(h),s.b=c(h),s.opacity=l(h),s+""}}return i.gamma=n,i}(1);function Dm(n){return function(t){var e=t.length,i=new Array(e),s=new Array(e),r=new Array(e),a,o;for(a=0;a<e;++a)o=zs(t[a]),i[a]=o.r||0,s[a]=o.g||0,r[a]=o.b||0;return i=n(i),s=n(s),r=n(r),o.opacity=1,function(c){return o.r=i(c),o.g=s(c),o.b=r(c),o+""}}}var JM=Dm(Rm),KM=Dm(Im);function mn(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}var tu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Qh=new RegExp(tu.source,"g");function jM(n){return function(){return n}}function QM(n){return function(t){return n(t)+""}}function eu(n,t){var e=tu.lastIndex=Qh.lastIndex=0,i,s,r,a=-1,o=[],c=[];for(n=n+"",t=t+"";(i=tu.exec(n))&&(s=Qh.exec(t));)(r=s.index)>e&&(r=t.slice(e,r),o[a]?o[a]+=r:o[++a]=r),(i=i[0])===(s=s[0])?o[a]?o[a]+=s:o[++a]=s:(o[++a]=null,c.push({i:a,x:mn(i,s)})),e=Qh.lastIndex;return e<t.length&&(r=t.slice(e),o[a]?o[a]+=r:o[++a]=r),o.length<2?c[0]?QM(c[0].x):jM(t):(t=c.length,function(l){for(var h=0,d;h<t;++h)o[(d=c[h]).i]=d.x(l);return o.join("")})}var Lm=180/Math.PI,zl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function nu(n,t,e,i,s,r){var a,o,c;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(c=n*e+t*i)&&(e-=n*c,i-=t*c),(o=Math.sqrt(e*e+i*i))&&(e/=o,i/=o,c/=o),n*i<t*e&&(n=-n,t=-t,c=-c,a=-a),{translateX:s,translateY:r,rotate:Math.atan2(t,n)*Lm,skewX:Math.atan(c)*Lm,scaleX:a,scaleY:o}}var kl;function Nm(n){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?zl:nu(t.a,t.b,t.c,t.d,t.e,t.f)}function Um(n){return n==null?zl:(kl||(kl=document.createElementNS("http://www.w3.org/2000/svg","g")),kl.setAttribute("transform",n),(n=kl.transform.baseVal.consolidate())?(n=n.matrix,nu(n.a,n.b,n.c,n.d,n.e,n.f)):zl)}function Fm(n,t,e,i){function s(l){return l.length?l.pop()+" ":""}function r(l,h,d,u,p,g){if(l!==d||h!==u){var y=p.push("translate(",null,t,null,e);g.push({i:y-4,x:mn(l,d)},{i:y-2,x:mn(h,u)})}else(d||u)&&p.push("translate("+d+t+u+e)}function a(l,h,d,u){l!==h?(l-h>180?h+=360:h-l>180&&(l+=360),u.push({i:d.push(s(d)+"rotate(",null,i)-2,x:mn(l,h)})):h&&d.push(s(d)+"rotate("+h+i)}function o(l,h,d,u){l!==h?u.push({i:d.push(s(d)+"skewX(",null,i)-2,x:mn(l,h)}):h&&d.push(s(d)+"skewX("+h+i)}function c(l,h,d,u,p,g){if(l!==d||h!==u){var y=p.push(s(p)+"scale(",null,",",null,")");g.push({i:y-4,x:mn(l,d)},{i:y-2,x:mn(h,u)})}else(d!==1||u!==1)&&p.push(s(p)+"scale("+d+","+u+")")}return function(l,h){var d=[],u=[];return l=n(l),h=n(h),r(l.translateX,l.translateY,h.translateX,h.translateY,d,u),a(l.rotate,h.rotate,d,u),o(l.skewX,h.skewX,d,u),c(l.scaleX,l.scaleY,h.scaleX,h.scaleY,d,u),l=h=null,function(p){for(var g=-1,y=u.length,m;++g<y;)d[(m=u[g]).i]=m.x(p);return d.join("")}}}var iu=Fm(Nm,"px, ","px)","deg)"),su=Fm(Um,", ",")",")");var tS=1e-12;function Om(n){return((n=Math.exp(n))+1/n)/2}function eS(n){return((n=Math.exp(n))-1/n)/2}function nS(n){return((n=Math.exp(2*n))-1)/(n+1)}var ru=function n(t,e,i){function s(r,a){var o=r[0],c=r[1],l=r[2],h=a[0],d=a[1],u=a[2],p=h-o,g=d-c,y=p*p+g*g,m,f;if(y<tS)f=Math.log(u/l)/t,m=function(w){return[o+w*p,c+w*g,l*Math.exp(t*w*f)]};else{var b=Math.sqrt(y),E=(u*u-l*l+i*y)/(2*l*e*b),_=(u*u-l*l-i*y)/(2*u*e*b),M=Math.log(Math.sqrt(E*E+1)-E),S=Math.log(Math.sqrt(_*_+1)-_);f=(S-M)/t,m=function(w){var x=w*f,T=Om(M),P=l/(e*b)*(T*nS(t*x+M)-eS(M));return[o+P*p,c+P*g,l*T/Om(t*x+M)]}}return m.duration=f*1e3*t/Math.SQRT2,m}return s.rho=function(r){var a=Math.max(.001,+r),o=a*a,c=o*o;return n(a,o,c)},s}(Math.SQRT2,2,4);var iS=An("start","end","cancel","interrupt"),sS=[],km=0,Bm=1,Gl=2,Vl=3,zm=4,Hl=5,ea=6;function Fi(n,t,e,i,s,r){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;rS(n,e,{name:t,index:i,group:s,on:iS,tween:sS,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:km})}function na(n,t){var e=Ae(n,t);if(e.state>km)throw new Error("too late; already scheduled");return e}function Ne(n,t){var e=Ae(n,t);if(e.state>Vl)throw new Error("too late; already running");return e}function Ae(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function rS(n,t,e){var i=n.__transition,s;i[t]=e,e.timer=Di(r,0,e.time);function r(l){e.state=Bm,e.timer.restart(a,e.delay,e.time),e.delay<=l&&a(l-e.delay)}function a(l){var h,d,u,p;if(e.state!==Bm)return c();for(h in i)if(p=i[h],p.name===e.name){if(p.state===Vl)return Sl(a);p.state===zm?(p.state=ea,p.timer.stop(),p.on.call("interrupt",n,n.__data__,p.index,p.group),delete i[h]):+h<t&&(p.state=ea,p.timer.stop(),p.on.call("cancel",n,n.__data__,p.index,p.group),delete i[h])}if(Sl(function(){e.state===Vl&&(e.state=zm,e.timer.restart(o,e.delay,e.time),o(l))}),e.state=Gl,e.on.call("start",n,n.__data__,e.index,e.group),e.state===Gl){for(e.state=Vl,s=new Array(u=e.tween.length),h=0,d=-1;h<u;++h)(p=e.tween[h].value.call(n,n.__data__,e.index,e.group))&&(s[++d]=p);s.length=d+1}}function o(l){for(var h=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=Hl,1),d=-1,u=s.length;++d<u;)s[d].call(n,h);e.state===Hl&&(e.on.call("end",n,n.__data__,e.index,e.group),c())}function c(){e.state=ea,e.timer.stop(),delete i[t];for(var l in i)return;delete n.__transition}}function es(n,t){var e=n.__transition,i,s,r=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((i=e[a]).name!==t){r=!1;continue}s=i.state>Gl&&i.state<Hl,i.state=ea,i.timer.stop(),i.on.call(s?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[a]}r&&delete n.__transition}}function Vm(n){return this.each(function(){es(this,n)})}function aS(n,t){var e,i;return function(){var s=Ne(this,n),r=s.tween;if(r!==e){i=e=r;for(var a=0,o=i.length;a<o;++a)if(i[a].name===t){i=i.slice(),i.splice(a,1);break}}s.tween=i}}function oS(n,t,e){var i,s;if(typeof e!="function")throw new Error;return function(){var r=Ne(this,n),a=r.tween;if(a!==i){s=(i=a).slice();for(var o={name:t,value:e},c=0,l=s.length;c<l;++c)if(s[c].name===t){s[c]=o;break}c===l&&s.push(o)}r.tween=s}}function Gm(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=Ae(this.node(),e).tween,s=0,r=i.length,a;s<r;++s)if((a=i[s]).name===n)return a.value;return null}return this.each((t==null?aS:oS)(e,n,t))}function ks(n,t,e){var i=n._id;return n.each(function(){var s=Ne(this,i);(s.value||(s.value={}))[t]=e.apply(this,arguments)}),function(s){return Ae(s,i).value[t]}}function Wl(n,t){var e;return(typeof t=="number"?mn:t instanceof Ui?Bl:(e=Ui(t))?(t=e,Bl):eu)(n,t)}function lS(n){return function(){this.removeAttribute(n)}}function cS(n){return function(){this.removeAttributeNS(n.space,n.local)}}function hS(n,t,e){var i,s=e+"",r;return function(){var a=this.getAttribute(n);return a===s?null:a===i?r:r=t(i=a,e)}}function uS(n,t,e){var i,s=e+"",r;return function(){var a=this.getAttributeNS(n.space,n.local);return a===s?null:a===i?r:r=t(i=a,e)}}function fS(n,t,e){var i,s,r;return function(){var a,o=e(this),c;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),c=o+"",a===c?null:a===i&&c===s?r:(s=c,r=t(i=a,o)))}}function dS(n,t,e){var i,s,r;return function(){var a,o=e(this),c;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),c=o+"",a===c?null:a===i&&c===s?r:(s=c,r=t(i=a,o)))}}function Hm(n,t){var e=si(n),i=e==="transform"?su:Wl;return this.attrTween(n,typeof t=="function"?(e.local?dS:fS)(e,i,ks(this,"attr."+n,t)):t==null?(e.local?cS:lS)(e):(e.local?uS:hS)(e,i,t))}function pS(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function mS(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function gS(n,t){var e,i;function s(){var r=t.apply(this,arguments);return r!==i&&(e=(i=r)&&mS(n,r)),e}return s._value=t,s}function _S(n,t){var e,i;function s(){var r=t.apply(this,arguments);return r!==i&&(e=(i=r)&&pS(n,r)),e}return s._value=t,s}function Wm(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=si(n);return this.tween(e,(i.local?gS:_S)(i,t))}function xS(n,t){return function(){na(this,n).delay=+t.apply(this,arguments)}}function yS(n,t){return t=+t,function(){na(this,n).delay=t}}function Xm(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?xS:yS)(t,n)):Ae(this.node(),t).delay}function vS(n,t){return function(){Ne(this,n).duration=+t.apply(this,arguments)}}function bS(n,t){return t=+t,function(){Ne(this,n).duration=t}}function qm(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?vS:bS)(t,n)):Ae(this.node(),t).duration}function MS(n,t){if(typeof t!="function")throw new Error;return function(){Ne(this,n).ease=t}}function Ym(n){var t=this._id;return arguments.length?this.each(MS(t,n)):Ae(this.node(),t).ease}function SS(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Ne(this,n).ease=e}}function Zm(n){if(typeof n!="function")throw new Error;return this.each(SS(this._id,n))}function $m(n){typeof n!="function"&&(n=qr(n));for(var t=this._groups,e=t.length,i=new Array(e),s=0;s<e;++s)for(var r=t[s],a=r.length,o=i[s]=[],c,l=0;l<a;++l)(c=r[l])&&n.call(c,c.__data__,l,r)&&o.push(c);return new qe(i,this._parents,this._name,this._id)}function Jm(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,s=e.length,r=Math.min(i,s),a=new Array(i),o=0;o<r;++o)for(var c=t[o],l=e[o],h=c.length,d=a[o]=new Array(h),u,p=0;p<h;++p)(u=c[p]||l[p])&&(d[p]=u);for(;o<i;++o)a[o]=t[o];return new qe(a,this._parents,this._name,this._id)}function wS(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function ES(n,t,e){var i,s,r=wS(t)?na:Ne;return function(){var a=r(this,n),o=a.on;o!==i&&(s=(i=o).copy()).on(t,e),a.on=s}}function Km(n,t){var e=this._id;return arguments.length<2?Ae(this.node(),e).on.on(n):this.each(ES(e,n,t))}function TS(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function jm(){return this.on("end.remove",TS(this._id))}function Qm(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Ki(n));for(var i=this._groups,s=i.length,r=new Array(s),a=0;a<s;++a)for(var o=i[a],c=o.length,l=r[a]=new Array(c),h,d,u=0;u<c;++u)(h=o[u])&&(d=n.call(h,h.__data__,u,o))&&("__data__"in h&&(d.__data__=h.__data__),l[u]=d,Fi(l[u],t,e,u,l,Ae(h,e)));return new qe(r,this._parents,t,e)}function tg(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Xr(n));for(var i=this._groups,s=i.length,r=[],a=[],o=0;o<s;++o)for(var c=i[o],l=c.length,h,d=0;d<l;++d)if(h=c[d]){for(var u=n.call(h,h.__data__,d,c),p,g=Ae(h,e),y=0,m=u.length;y<m;++y)(p=u[y])&&Fi(p,t,e,y,u,g);r.push(u),a.push(h)}return new qe(r,a,t,e)}var AS=ri.prototype.constructor;function eg(){return new AS(this._groups,this._parents)}function CS(n,t){var e,i,s;return function(){var r=Li(this,n),a=(this.style.removeProperty(n),Li(this,n));return r===a?null:r===e&&a===i?s:s=t(e=r,i=a)}}function ng(n){return function(){this.style.removeProperty(n)}}function RS(n,t,e){var i,s=e+"",r;return function(){var a=Li(this,n);return a===s?null:a===i?r:r=t(i=a,e)}}function IS(n,t,e){var i,s,r;return function(){var a=Li(this,n),o=e(this),c=o+"";return o==null&&(c=o=(this.style.removeProperty(n),Li(this,n))),a===c?null:a===i&&c===s?r:(s=c,r=t(i=a,o))}}function PS(n,t){var e,i,s,r="style."+t,a="end."+r,o;return function(){var c=Ne(this,n),l=c.on,h=c.value[r]==null?o||(o=ng(t)):void 0;(l!==e||s!==h)&&(i=(e=l).copy()).on(a,s=h),c.on=i}}function ig(n,t,e){var i=(n+="")=="transform"?iu:Wl;return t==null?this.styleTween(n,CS(n,i)).on("end.style."+n,ng(n)):typeof t=="function"?this.styleTween(n,IS(n,i,ks(this,"style."+n,t))).each(PS(this._id,n)):this.styleTween(n,RS(n,i,t),e).on("end.style."+n,null)}function DS(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function LS(n,t,e){var i,s;function r(){var a=t.apply(this,arguments);return a!==s&&(i=(s=a)&&DS(n,a,e)),i}return r._value=t,r}function sg(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,LS(n,t,e==null?"":e))}function NS(n){return function(){this.textContent=n}}function US(n){return function(){var t=n(this);this.textContent=t==null?"":t}}function rg(n){return this.tween("text",typeof n=="function"?US(ks(this,"text",n)):NS(n==null?"":n+""))}function FS(n){return function(t){this.textContent=n.call(this,t)}}function OS(n){var t,e;function i(){var s=n.apply(this,arguments);return s!==e&&(t=(e=s)&&FS(s)),t}return i._value=n,i}function ag(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,OS(n))}function og(){for(var n=this._name,t=this._id,e=Xl(),i=this._groups,s=i.length,r=0;r<s;++r)for(var a=i[r],o=a.length,c,l=0;l<o;++l)if(c=a[l]){var h=Ae(c,t);Fi(c,n,e,l,a,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new qe(i,this._parents,n,e)}function lg(){var n,t,e=this,i=e._id,s=e.size();return new Promise(function(r,a){var o={value:a},c={value:function(){--s===0&&r()}};e.each(function(){var l=Ne(this,i),h=l.on;h!==n&&(t=(n=h).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(c)),l.on=t}),s===0&&r()})}var BS=0;function qe(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function cg(n){return ri().transition(n)}function Xl(){return++BS}var ai=ri.prototype;qe.prototype=cg.prototype={constructor:qe,select:Qm,selectAll:tg,selectChild:ai.selectChild,selectChildren:ai.selectChildren,filter:$m,merge:Jm,selection:eg,transition:og,call:ai.call,nodes:ai.nodes,node:ai.node,size:ai.size,empty:ai.empty,each:ai.each,on:Km,attr:Hm,attrTween:Wm,style:ig,styleTween:sg,text:rg,textTween:ag,remove:jm,tween:Gm,delay:Xm,duration:qm,ease:Ym,easeVarying:Zm,end:lg,[Symbol.iterator]:ai[Symbol.iterator]};function ql(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var zS={time:null,delay:0,duration:250,ease:ql};function kS(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function hg(n){var t,e;n instanceof qe?(t=n._id,n=n._name):(t=Xl(),(e=zS).time=Wr(),n=n==null?null:n+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var a=i[r],o=a.length,c,l=0;l<o;++l)(c=a[l])&&Fi(c,n,t,l,a,e||kS(c,t));return new qe(i,this._parents,n,t)}ri.prototype.interrupt=Vm;ri.prototype.transition=hg;var ia=n=>()=>n;function au(n,{sourceEvent:t,target:e,transform:i,dispatch:s}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:s}})}function In(n,t,e){this.k=n,this.x=t,this.y=e}In.prototype={constructor:In,scale:function(n){return n===1?this:new In(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new In(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Pn=new In(1,0,0);Vs.prototype=In.prototype;function Vs(n){for(;!n.__zoom;)if(!(n=n.parentNode))return Pn;return n.__zoom}function Yl(n){n.stopImmediatePropagation()}function Gs(n){n.preventDefault(),n.stopImmediatePropagation()}function VS(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function GS(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function ug(){return this.__zoom||Pn}function HS(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function WS(){return navigator.maxTouchPoints||"ontouchstart"in this}function XS(n,t,e){var i=n.invertX(t[0][0])-e[0][0],s=n.invertX(t[1][0])-e[1][0],r=n.invertY(t[0][1])-e[0][1],a=n.invertY(t[1][1])-e[1][1];return n.translate(s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s),a>r?(r+a)/2:Math.min(0,r)||Math.max(0,a))}function ou(){var n=VS,t=GS,e=XS,i=HS,s=WS,r=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],o=250,c=ru,l=An("start","zoom","end"),h,d,u,p=500,g=150,y=0,m=10;function f(R){R.property("__zoom",ug).on("wheel.zoom",x,{passive:!1}).on("mousedown.zoom",T).on("dblclick.zoom",P).filter(s).on("touchstart.zoom",D).on("touchmove.zoom",I).on("touchend.zoom touchcancel.zoom",B).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}f.transform=function(R,N,U,L){var O=R.selection?R.selection():R;O.property("__zoom",ug),R!==O?M(R,N,U,L):O.interrupt().each(function(){S(this,arguments).event(L).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},f.scaleBy=function(R,N,U,L){f.scaleTo(R,function(){var O=this.__zoom.k,X=typeof N=="function"?N.apply(this,arguments):N;return O*X},U,L)},f.scaleTo=function(R,N,U,L){f.transform(R,function(){var O=t.apply(this,arguments),X=this.__zoom,Z=U==null?_(O):typeof U=="function"?U.apply(this,arguments):U,tt=X.invert(Z),it=typeof N=="function"?N.apply(this,arguments):N;return e(E(b(X,it),Z,tt),O,a)},U,L)},f.translateBy=function(R,N,U,L){f.transform(R,function(){return e(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof U=="function"?U.apply(this,arguments):U),t.apply(this,arguments),a)},null,L)},f.translateTo=function(R,N,U,L,O){f.transform(R,function(){var X=t.apply(this,arguments),Z=this.__zoom,tt=L==null?_(X):typeof L=="function"?L.apply(this,arguments):L;return e(Pn.translate(tt[0],tt[1]).scale(Z.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof U=="function"?-U.apply(this,arguments):-U),X,a)},L,O)};function b(R,N){return N=Math.max(r[0],Math.min(r[1],N)),N===R.k?R:new In(N,R.x,R.y)}function E(R,N,U){var L=N[0]-U[0]*R.k,O=N[1]-U[1]*R.k;return L===R.x&&O===R.y?R:new In(R.k,L,O)}function _(R){return[(+R[0][0]+ +R[1][0])/2,(+R[0][1]+ +R[1][1])/2]}function M(R,N,U,L){R.on("start.zoom",function(){S(this,arguments).event(L).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(L).end()}).tween("zoom",function(){var O=this,X=arguments,Z=S(O,X).event(L),tt=t.apply(O,X),it=U==null?_(tt):typeof U=="function"?U.apply(O,X):U,Ct=Math.max(tt[1][0]-tt[0][0],tt[1][1]-tt[0][1]),Ut=O.__zoom,Lt=typeof N=="function"?N.apply(O,X):N,z=c(Ut.invert(it).concat(Ct/Ut.k),Lt.invert(it).concat(Ct/Lt.k));return function(et){if(et===1)et=Lt;else{var j=z(et),ft=Ct/j[2];et=new In(ft,it[0]-j[0]*ft,it[1]-j[1]*ft)}Z.zoom(null,et)}})}function S(R,N,U){return!U&&R.__zooming||new w(R,N)}function w(R,N){this.that=R,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(R,N),this.taps=0}w.prototype={event:function(R){return R&&(this.sourceEvent=R),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(R,N){return this.mouse&&R!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&R!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&R!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(R){var N=Pe(this.that).datum();l.call(R,this.that,new au(R,{sourceEvent:this.sourceEvent,target:f,type:R,transform:this.that.__zoom,dispatch:l}),N)}};function x(R,...N){if(!n.apply(this,arguments))return;var U=S(this,N).event(R),L=this.__zoom,O=Math.max(r[0],Math.min(r[1],L.k*Math.pow(2,i.apply(this,arguments)))),X=pn(R);if(U.wheel)(U.mouse[0][0]!==X[0]||U.mouse[0][1]!==X[1])&&(U.mouse[1]=L.invert(U.mouse[0]=X)),clearTimeout(U.wheel);else{if(L.k===O)return;U.mouse=[X,L.invert(X)],es(this),U.start()}Gs(R),U.wheel=setTimeout(Z,g),U.zoom("mouse",e(E(b(L,O),U.mouse[0],U.mouse[1]),U.extent,a));function Z(){U.wheel=null,U.end()}}function T(R,...N){if(u||!n.apply(this,arguments))return;var U=R.currentTarget,L=S(this,N,!0).event(R),O=Pe(R.view).on("mousemove.zoom",it,!0).on("mouseup.zoom",Ct,!0),X=pn(R,U),Z=R.clientX,tt=R.clientY;Zr(R.view),Yl(R),L.mouse=[X,this.__zoom.invert(X)],es(this),L.start();function it(Ut){if(Gs(Ut),!L.moved){var Lt=Ut.clientX-Z,z=Ut.clientY-tt;L.moved=Lt*Lt+z*z>y}L.event(Ut).zoom("mouse",e(E(L.that.__zoom,L.mouse[0]=pn(Ut,U),L.mouse[1]),L.extent,a))}function Ct(Ut){O.on("mousemove.zoom mouseup.zoom",null),$r(Ut.view,L.moved),Gs(Ut),L.event(Ut).end()}}function P(R,...N){if(n.apply(this,arguments)){var U=this.__zoom,L=pn(R.changedTouches?R.changedTouches[0]:R,this),O=U.invert(L),X=U.k*(R.shiftKey?.5:2),Z=e(E(b(U,X),L,O),t.apply(this,N),a);Gs(R),o>0?Pe(this).transition().duration(o).call(M,Z,L,R):Pe(this).call(f.transform,Z,L,R)}}function D(R,...N){if(n.apply(this,arguments)){var U=R.touches,L=U.length,O=S(this,N,R.changedTouches.length===L).event(R),X,Z,tt,it;for(Yl(R),Z=0;Z<L;++Z)tt=U[Z],it=pn(tt,this),it=[it,this.__zoom.invert(it),tt.identifier],O.touch0?!O.touch1&&O.touch0[2]!==it[2]&&(O.touch1=it,O.taps=0):(O.touch0=it,X=!0,O.taps=1+!!h);h&&(h=clearTimeout(h)),X&&(O.taps<2&&(d=it[0],h=setTimeout(function(){h=null},p)),es(this),O.start())}}function I(R,...N){if(this.__zooming){var U=S(this,N).event(R),L=R.changedTouches,O=L.length,X,Z,tt,it;for(Gs(R),X=0;X<O;++X)Z=L[X],tt=pn(Z,this),U.touch0&&U.touch0[2]===Z.identifier?U.touch0[0]=tt:U.touch1&&U.touch1[2]===Z.identifier&&(U.touch1[0]=tt);if(Z=U.that.__zoom,U.touch1){var Ct=U.touch0[0],Ut=U.touch0[1],Lt=U.touch1[0],z=U.touch1[1],et=(et=Lt[0]-Ct[0])*et+(et=Lt[1]-Ct[1])*et,j=(j=z[0]-Ut[0])*j+(j=z[1]-Ut[1])*j;Z=b(Z,Math.sqrt(et/j)),tt=[(Ct[0]+Lt[0])/2,(Ct[1]+Lt[1])/2],it=[(Ut[0]+z[0])/2,(Ut[1]+z[1])/2]}else if(U.touch0)tt=U.touch0[0],it=U.touch0[1];else return;U.zoom("touch",e(E(Z,tt,it),U.extent,a))}}function B(R,...N){if(this.__zooming){var U=S(this,N).event(R),L=R.changedTouches,O=L.length,X,Z;for(Yl(R),u&&clearTimeout(u),u=setTimeout(function(){u=null},p),X=0;X<O;++X)Z=L[X],U.touch0&&U.touch0[2]===Z.identifier?delete U.touch0:U.touch1&&U.touch1[2]===Z.identifier&&delete U.touch1;if(U.touch1&&!U.touch0&&(U.touch0=U.touch1,delete U.touch1),U.touch0)U.touch0[1]=this.__zoom.invert(U.touch0[0]);else if(U.end(),U.taps===2&&(Z=pn(Z,this),Math.hypot(d[0]-Z[0],d[1]-Z[1])<m)){var tt=Pe(this).on("dblclick.zoom");tt&&tt.apply(this,arguments)}}}return f.wheelDelta=function(R){return arguments.length?(i=typeof R=="function"?R:ia(+R),f):i},f.filter=function(R){return arguments.length?(n=typeof R=="function"?R:ia(!!R),f):n},f.touchable=function(R){return arguments.length?(s=typeof R=="function"?R:ia(!!R),f):s},f.extent=function(R){return arguments.length?(t=typeof R=="function"?R:ia([[+R[0][0],+R[0][1]],[+R[1][0],+R[1][1]]]),f):t},f.scaleExtent=function(R){return arguments.length?(r[0]=+R[0],r[1]=+R[1],f):[r[0],r[1]]},f.translateExtent=function(R){return arguments.length?(a[0][0]=+R[0][0],a[1][0]=+R[1][0],a[0][1]=+R[0][1],a[1][1]=+R[1][1],f):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},f.constrain=function(R){return arguments.length?(e=R,f):e},f.duration=function(R){return arguments.length?(o=+R,f):o},f.interpolate=function(R){return arguments.length?(c=R,f):c},f.on=function(){var R=l.on.apply(l,arguments);return R===l?f:R},f.clickDistance=function(R){return arguments.length?(y=(R=+R)*R,f):Math.sqrt(y)},f.tapDistance=function(R){return arguments.length?(m=+R,f):m},f}var ra="llm-wiki-semantic-graph",qS=new Set(["the","a","an","and","or","in","is","it","of","to","for","on","with","as","at","by","from","be","was","were","been","that","this","are","have","has","had","not","but","can","all","if","they","their","more","will","would","could","should","also","just","about","when","then","than","into","over","use","used","using","new","one","two","may","how","what","its","which"]);function cu(n){return n.toLowerCase().replace(/```[\s\S]*?```/g," ").replace(/\[\[([^\]]+)\]\]/g,"$1").replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(t=>t.length>2&&!qS.has(t))}function YS(n,t){let e=0,i=0,s=0,r=Math.min(n.length,t.length);for(let o=0;o<r;o++)e+=n[o]*t[o],i+=n[o]*n[o],s+=t[o]*t[o];let a=Math.sqrt(i)*Math.sqrt(s);return a>0?e/a:0}var hu=class{constructor(){this.tf=new Map;this.df=new Map;this.dl=new Map;this.avgdl=1;this.N=0;this.k1=1.5;this.b=.75}add(t,e){var r,a;let i=cu(e),s=new Map;for(let o of i)s.set(o,((r=s.get(o))!=null?r:0)+1);this.tf.set(t,s),this.dl.set(t,i.length);for(let o of s.keys())this.df.set(o,((a=this.df.get(o))!=null?a:0)+1);this.N++}finalize(){let t=[...this.dl.values()].reduce((e,i)=>e+i,0);this.avgdl=this.N>0?t/this.N:1}score(t,e){var a,o,c;let i=this.tf.get(t);if(!i)return 0;let s=(a=this.dl.get(t))!=null?a:1,r=0;for(let l of e){let h=(o=i.get(l))!=null?o:0;if(h===0)continue;let d=(c=this.df.get(l))!=null?c:0,u=Math.log((this.N-d+.5)/(d+.5)+1);r+=u*(h*(this.k1+1))/(h+this.k1*(1-this.b+this.b*s/this.avgdl))}return r}topK(t,e=30,i=.5){let s=[];for(let r of this.tf.keys()){let a=this.score(r,t);a>=i&&s.push([r,a])}return s.sort((r,a)=>a[1]-r[1]),s.slice(0,e).map(([r])=>r)}},sa={axiom:"#4E79A7",rule:"#4E79A7",entity:"#59A14F",concept:"#76B7B2",index:"#BAB0AC",process:"#F28E2B",decision:"#E15759",pattern:"#B07AA1",overview:"#9C755F",synthesis:"#9C755F"},gn=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf","#aec7e8","#ffbb78","#98df8a","#ff9896","#c5b0d5","#c49c94","#f7b6d2","#dbdb8d","#9edae5","#393b79"];function Zl(n){let t=0;for(let e=0;e<n.length;e++)t=Math.imul(31,t)+n.charCodeAt(e)>>>0;return gn[t%gn.length]}var fg={axiom:"diamond",rule:"diamond",process:"square",decision:"square",pattern:"hexagon",overview:"hexagon",synthesis:"hexagon",entity:"circle",concept:"circle",index:"circle"},dg=["Axiom","Entity","Process","Pattern","Method","Concept","Rule","Overview","Decision","Synthesis"],lu=["wiki/templates/","wiki/graph/","wiki/compiled/","wiki/updates/","wiki/Meta/","pipeline/","schema/","ontology/","domains/","tools/","docs/"],ZS=/^wiki\/graph\/\d{8}T\d{6}Z-graph\.md$/,$S=/^\|\s*([^|]+?)\s*\|\s*[A-Za-z]+→[A-Za-z]+\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/,JS={showNodeLabels:!0,showEdgeLabels:!0,showArrows:!0,sidebarOpen:!1,semSidebarOpen:!1,hiddenTypes:[],linkDist:60,chargeStr:120,gravityStr:.03,labelFadeAt:.9,labelSize:10,nodeScale:1,edgeWidth:1.2,searchQuery:"",selectedDomains:[],embeddingEndpoint:"http://localhost:11434",embeddingModel:"nomic-embed-text",colorMode:"type",numClusters:6,mode3D:!1},$l=class extends Ke.ItemView{constructor(e,i){super(e);this.nodes=[];this.edges=[];this.analytics=null;this.sim=null;this.showNodeLabels=!0;this.showEdgeLabels=!0;this.showArrows=!0;this.sidebarOpen=!1;this.semSidebarOpen=!1;this.searchResultsData=null;this.semSidebarEl=null;this.hiddenTypes=new Set;this.extraColorMap=new Map;this.showOrphans=!1;this.selectedId=null;this.searchQuery="";this.selectedDomains=new Set;this._labelsUserSet=!1;this.embeddingEndpoint="http://localhost:11434";this.embeddingModel="nomic-embed-text";this.colorMode="type";this.numClusters=6;this.clusterMap=new Map;this.mode3D=!1;this.graph3D=null;this.bm25Index=null;this.embeddings=null;this.semanticIds=new Set;this.semSearchTimer=null;this.linkDist=60;this.chargeStr=120;this.gravityStr=.03;this.labelFadeAt=.9;this.labelSize=10;this.nodeScale=1;this.edgeWidth=1.2;this.savedTransform=null;this.savedCameraState=null;this.pendingRaf=null;this.isRefreshing=!1;this.selNodeEl=null;this.selEdgeLine=null;this.selEdgeLabel=null;this.selNodeLabel=null;this.focusNodeFn=null;this.svgEl=null;this.layerRowMap=new Map;this.neighborSet=new Set;this.refreshTimer=null;this.plugin=i}async loadSettings(){var s,r,a,o,c,l,h,d,u,p,g;let e=await this.plugin.loadData();if(!e)return;let i={...JS,...e};this.showNodeLabels=i.showNodeLabels,this.showEdgeLabels=i.showEdgeLabels,this.showArrows=i.showArrows,this.sidebarOpen=i.sidebarOpen,this.semSidebarOpen=(s=i.semSidebarOpen)!=null?s:!1,this.hiddenTypes=new Set(i.hiddenTypes),this.linkDist=i.linkDist,this.chargeStr=i.chargeStr,this.gravityStr=i.gravityStr,this.labelFadeAt=(r=i.labelFadeAt)!=null?r:.9,this.labelSize=(a=i.labelSize)!=null?a:10,this.nodeScale=(o=i.nodeScale)!=null?o:1,this.edgeWidth=(c=i.edgeWidth)!=null?c:1.2,this.searchQuery=i.searchQuery,this.selectedDomains=new Set((l=i.selectedDomains)!=null?l:[]),this.embeddingEndpoint=(h=i.embeddingEndpoint)!=null?h:"http://localhost:11434",this.embeddingModel=(d=i.embeddingModel)!=null?d:"nomic-embed-text",this.colorMode=(u=i.colorMode)!=null?u:"type",this.numClusters=(p=i.numClusters)!=null?p:6,this.mode3D=(g=i.mode3D)!=null?g:!1}saveSettings(){let e={showNodeLabels:this.showNodeLabels,showEdgeLabels:this.showEdgeLabels,showArrows:this.showArrows,sidebarOpen:this.sidebarOpen,semSidebarOpen:this.semSidebarOpen,hiddenTypes:[...this.hiddenTypes],linkDist:this.linkDist,chargeStr:this.chargeStr,gravityStr:this.gravityStr,labelFadeAt:this.labelFadeAt,labelSize:this.labelSize,nodeScale:this.nodeScale,edgeWidth:this.edgeWidth,searchQuery:this.searchQuery,selectedDomains:[...this.selectedDomains],embeddingEndpoint:this.embeddingEndpoint,embeddingModel:this.embeddingModel,colorMode:this.colorMode,numClusters:this.numClusters,mode3D:this.mode3D};this.plugin.saveData(e)}getViewType(){return ra}getDisplayText(){return"Semantic Graph"}getIcon(){return"git-fork"}async onOpen(){await this.loadSettings(),await this.buildGraph(),this.render(),this.buildSearchIndex(),this.loadEmbeddings();let e=i=>i.path.startsWith("wiki/")&&!lu.some(s=>i.path.includes(s));this.registerEvent(this.app.vault.on("modify",i=>{e(i)&&this.scheduleRefresh()})),this.registerEvent(this.app.vault.on("create",i=>{e(i)&&this.scheduleRefresh()})),this.registerEvent(this.app.vault.on("delete",i=>{e(i)&&this.scheduleRefresh()})),this.registerEvent(this.app.vault.on("rename",i=>{e(i)&&this.scheduleRefresh()}))}async onClose(){var e;(e=this.sim)==null||e.stop(),this.refreshTimer!==null&&(window.clearTimeout(this.refreshTimer),this.refreshTimer=null),this.isRefreshing=!1}captureZoom(){if(this.svgEl&&this.zoomBehavior){let e=Vs(this.svgEl);this.savedTransform={k:e.k,x:e.x,y:e.y}}}scheduleRefresh(){this.refreshTimer!==null&&window.clearTimeout(this.refreshTimer),this.refreshTimer=window.setTimeout(async()=>{if(this.refreshTimer=null,!this.isRefreshing){this.isRefreshing=!0;try{this.captureZoom(),await this.buildGraph(),this.render()}finally{this.isRefreshing=!1}}},1500)}async manualRefresh(){if(this.refreshTimer!==null&&(window.clearTimeout(this.refreshTimer),this.refreshTimer=null),!this.isRefreshing){this.isRefreshing=!0;try{this.captureZoom(),await this.buildGraph(),this.render()}finally{this.isRefreshing=!1}}}async buildGraph(){var h,d,u,p,g;let e=this.app.vault.getMarkdownFiles().filter(y=>ZS.test(y.path)).sort((y,m)=>m.basename.localeCompare(y.basename));if(e.length===0){this.nodes=[],this.edges=[],this.analytics=this.computeAnalytics();return}let i=e[0];console.log(`[llm-wiki-graph] reading compiled graph: ${i.path}`);let r=(await this.app.vault.cachedRead(i)).split(`
`),a=new Map,o=this.app.vault.getMarkdownFiles().filter(y=>y.path.startsWith("wiki/")&&!lu.some(m=>y.path.includes(m)));for(let y of o){let m=(d=(h=this.app.metadataCache.getFileCache(y))==null?void 0:h.frontmatter)!=null?d:{};a.set(y.basename,{id:y.basename,title:(u=m.title)!=null?u:y.basename,type:((p=m.type)!=null?p:"unknown").toLowerCase(),domain:(g=m.domain)!=null?g:""})}let c=[],l=!1;for(let y of r){if(y.startsWith("## Edge List")){l=!0;continue}if(l&&y.startsWith("## ")){l=!1;continue}if(!l)continue;let m=$S.exec(y);if(!m)continue;let[,f,b,E]=m;f!=="Source"&&c.push({src:f.trim(),tgt:b.trim(),label:E.trim()})}this.nodes=Array.from(a.values()),this.edges=c.filter(y=>a.has(y.src)&&a.has(y.tgt)).map(y=>({source:y.src,target:y.tgt,label:y.label})),this.analytics=this.computeAnalytics()}async buildSearchIndex(){let e=new hu,i=this.app.vault.getMarkdownFiles().filter(s=>s.path.startsWith("wiki/")&&!lu.some(r=>s.path.includes(r)));await Promise.all(i.map(async s=>{let a=(await this.app.vault.cachedRead(s)).replace(/^---[\s\S]*?---\n?/,"");e.add(s.basename,s.basename+" "+a)})),e.finalize(),this.bm25Index=e}async loadEmbeddings(){let e=this.app.vault.getAbstractFileByPath("wiki/search/embeddings.json");if(e instanceof Ke.TFile)try{let i=await this.app.vault.read(e),s=JSON.parse(i);this.embeddings=new Map(Object.entries(s)),console.log(`[llm-wiki-graph] loaded ${this.embeddings.size} embeddings`),this.colorMode==="semantic"&&this.computeClusters(this.numClusters)}catch(i){console.warn("[llm-wiki-graph] could not load embeddings:",i)}}computeClusters(e){var h,d;this.clusterMap.clear();let i=this.embeddings;if(!i||i.size===0)return;let s=[...i.keys()],r=s.map(u=>i.get(u)),a=(d=(h=r[0])==null?void 0:h.length)!=null?d:0;if(a===0||s.length<e){s.forEach((u,p)=>this.clusterMap.set(u,p%e));return}let o=(u,p)=>{let g=0,y=0,m=0;for(let b=0;b<u.length;b++)g+=u[b]*p[b],y+=u[b]*u[b],m+=p[b]*p[b];return 1-(y===0||m===0?0:g/(Math.sqrt(y)*Math.sqrt(m)))},c=[r[Math.floor(Math.random()*r.length)]];for(;c.length<e;){let u=r.map(m=>Math.min(...c.map(f=>o(m,f)))),p=u.reduce((m,f)=>m+f,0),g=Math.random()*p,y=0;for(;y<u.length-1&&(g-=u[y],!(g<=0));y++);c.push(r[y])}let l=new Array(r.length).fill(0);for(let u=0;u<25;u++){let p=!1;for(let g=0;g<r.length;g++){let y=0,m=1/0;for(let f=0;f<e;f++){let b=o(r[g],c[f]);b<m&&(m=b,y=f)}l[g]!==y&&(l[g]=y,p=!0)}if(!p)break;for(let g=0;g<e;g++){let y=r.filter((f,b)=>l[b]===g);if(y.length===0)continue;let m=new Array(a).fill(0);for(let f of y)for(let b=0;b<a;b++)m[b]+=f[b]/y.length;c[g]=m}}s.forEach((u,p)=>this.clusterMap.set(u,l[p])),console.log(`[llm-wiki-graph] computed ${e} clusters over ${s.length} nodes`)}async runSemanticSearch(e){if(!this.embeddings||!e.trim())return[];let i;try{let r=await fetch(`${this.embeddingEndpoint}/api/embeddings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.embeddingModel,prompt:e})});if(!r.ok)return[];i=(await r.json()).embedding}catch(r){return[]}let s=[];for(let[r,a]of this.embeddings)s.push([r,YS(i,a)]);return s.sort((r,a)=>a[1]-r[1]),s.slice(0,30).filter(([,r])=>r>=.45).map(([r,a])=>({id:r,score:a}))}computeAnalytics(){var _,M,S,w,x,T,P,D;let e=new Map;for(let I of this.edges){let B=I.source,R=I.target;e.set(B,((_=e.get(B))!=null?_:0)+1),e.set(R,((M=e.get(R))!=null?M:0)+1)}let i=new Map(this.nodes.map(I=>[I.id,I])),s=new Map;for(let I of this.edges){let B=I.source,R=I.target,N=(S=i.get(B))==null?void 0:S.domain,U=(w=i.get(R))==null?void 0:w.domain;N&&N===U&&s.set(B,((x=s.get(B))!=null?x:0)+1)}let r=this.nodes.length,a=this.edges.length,o=r>1?+(a/(r*(r-1))).toFixed(4):0,c=r>0?+([...e.values()].reduce((I,B)=>I+B,0)/r).toFixed(2):0,l=this.nodes.filter(I=>!e.has(I.id)).map(I=>I.id),h=new Map;for(let I of this.nodes)h.set(I.type,((T=h.get(I.type))!=null?T:0)+1);let d=new Set(dg.map(I=>I.toLowerCase())),u=0,p=new Set;for(let[I,B]of h)d.has(I)||(u+=B,p.add(I));let g=[...dg.map(I=>{var B,R;return{name:I,color:(B=sa[I.toLowerCase()])!=null?B:"#888",count:(R=h.get(I.toLowerCase()))!=null?R:0}}),...u>0?[{name:"Others",color:"#888888",count:u}]:[]],y=new Map;for(let I of this.edges)y.set(I.label,((P=y.get(I.label))!=null?P:0)+1);let m=[...y.entries()].sort((I,B)=>B[1]-I[1]).map(([I,B])=>({label:I,count:B})),f=this.nodes.filter(I=>e.has(I.id)).sort((I,B)=>{var R,N;return((R=e.get(B.id))!=null?R:0)-((N=e.get(I.id))!=null?N:0)}).slice(0,10).map(I=>({id:I.id,deg:e.get(I.id),type:I.type})),b=new Map;for(let I of this.nodes)I.domain&&b.set(I.domain,((D=b.get(I.domain))!=null?D:0)+1);let E=[...b.entries()].sort((I,B)=>B[1]-I[1]).map(([I,B])=>({name:I,count:B}));return{n:r,m:a,density:o,avgDeg:c,orphans:l.length,orphanIds:l,layers:g,edgeTypes:m,hubs:f,domains:E,degreeOf:e,intraDomainOut:s,othersTypeSet:p}}buildAdjacency(e){let i=new Map;for(let s of e)i.has(s.source.id)||i.set(s.source.id,new Set),i.has(s.target.id)||i.set(s.target.id,new Set),i.get(s.source.id).add(s.target.id),i.get(s.target.id).add(s.source.id);return i}nodeTypeColor(e){var i,s;return(s=(i=sa[e])!=null?i:this.extraColorMap.get(e))!=null?s:"#BAB0AC"}recolorNodes(){if(!this.selNodeEl)return;let e=this.colorMode,i=this.clusterMap,s=r=>this.nodeTypeColor(r);this.selNodeEl.each(function(r){let a;e==="semantic"&&i.has(r.id)?a=gn[i.get(r.id)%gn.length]:a=s(r.type),Pe(this).selectAll(".llm-graph-node-shape").attr("fill",a)})}applyVisibility(e){var o,c,l,h,d;if(!this.selNodeEl)return;let i=this.selectedId,s=i?(o=e.get(i))!=null?o:new Set:null,r=this.selectedDomains.size>0;this.selNodeEl.style("opacity",u=>{var p,g;return this.hiddenTypes.has(u.type)||!r&&!this.showOrphans&&((g=(p=e.get(u.id))==null?void 0:p.size)!=null?g:0)===0?"0":i?u.id===i||s.has(u.id)?"1":"0.07":"1"}).style("display",u=>{var p,g;return this.hiddenTypes.has(u.type)||!r&&!this.showOrphans&&((g=(p=e.get(u.id))==null?void 0:p.size)!=null?g:0)===0?"none":null});let a=u=>{let p=u.source,g=u.target;return this.hiddenTypes.has(p.type)||this.hiddenTypes.has(g.type)?"0":i?p.id===i||g.id===i?"0.9":"0.04":"0.55"};(c=this.selEdgeLine)==null||c.style("opacity",a),(l=this.selEdgeLabel)==null||l.style("opacity",a).style("display",this.showEdgeLabels?null:"none"),(h=this.selNodeLabel)==null||h.style("display",this.showNodeLabels?null:"none"),(d=this.selEdgeLine)==null||d.attr("marker-end",this.showArrows?"url(#llm-arrow)":null)}render(){var Ut,Lt;(Ut=this.sim)==null||Ut.stop(),this.pendingRaf!==null&&(cancelAnimationFrame(this.pendingRaf),this.pendingRaf=null);let e=this.containerEl.children[1];if(e.empty(),e.addClass("llm-graph-container"),!this.analytics){e.createEl("p",{text:"Loading graph\u2026",cls:"llm-graph-loading"});return}let i=this.analytics,s=this.selectedDomains,r=this.hiddenTypes,a=r.has("others"),o=(Lt=i.othersTypeSet)!=null?Lt:new Set,c=this.nodes.filter(z=>(s.size===0||s.has(z.domain))&&!r.has(z.type)&&!(a&&o.has(z.type))),l=new Set(c.map(z=>z.id)),h=this.edges.filter(z=>l.has(z.source)&&l.has(z.target));this.extraColorMap.clear();for(let z of o)this.extraColorMap.set(z,"#888888");let d=c.length;d>0&&(this.chargeStr=Math.min(800,Math.max(120,Math.round(d*2))),this.linkDist=Math.min(200,Math.max(50,Math.round(Math.sqrt(d)*8))));let u=e.createDiv({cls:"llm-graph-toolbar"}),p=e.createDiv({cls:"llm-graph-searchbar"}),g=p.createEl("input",{cls:"llm-graph-search",attr:{type:"text",placeholder:"Search nodes\u2026 (BM25 + semantic)"}}),y=p.createSpan({cls:"llm-graph-sem-indicator"});y.style.display="none";let m=p.createEl("button",{cls:"llm-graph-btn llm-graph-find-btn",text:"Find"}),f=p.createEl("button",{cls:"llm-graph-search-clear",text:"\xD7"});f.style.display="none",this.searchQuery&&(g.value=this.searchQuery,f.style.display="flex");let b=new Map(this.nodes.map(z=>[z.id,z])),E=()=>{var z,et;g.value="",this.searchQuery="",this.semanticIds.clear(),this.searchResultsData=null,y.style.display="none",f.style.display="none",this.semSidebarEl&&this.buildSemanticSidebar(this.semSidebarEl),this.selNodeEl&&(this.selNodeEl.style("opacity",null).style("pointer-events",null),(z=this.selEdgeLine)==null||z.style("opacity",null),(et=this.selEdgeLabel)==null||et.style("opacity",null),this.saveSettings())},_=(z,et)=>{var j,ft;this.selNodeEl&&(this.selNodeEl.style("opacity",_t=>z.has(_t.id)?"1":et.has(_t.id)?"0.5":"0.06").style("pointer-events",_t=>z.has(_t.id)||et.has(_t.id)?null:"none"),(j=this.selEdgeLine)==null||j.style("opacity",_t=>{let xt=_t.source.id,qt=_t.target.id;return z.has(xt)||z.has(qt)?"0.6":et.has(xt)||et.has(qt)?"0.25":"0.03"}),(ft=this.selEdgeLabel)==null||ft.style("opacity",_t=>{let xt=_t.source.id,qt=_t.target.id;return z.has(xt)||z.has(qt)?"1":et.has(xt)||et.has(qt)?"0.5":"0"}))};g.addEventListener("input",()=>{this.searchQuery=g.value,this.saveSettings();let z=this.searchQuery.toLowerCase().trim();if(f.style.display=z?"flex":"none",!z){E();return}let et=cu(z),j=new Set;for(let ft of this.nodes){let _t=0;ft.title.toLowerCase().includes(z)&&(_t+=10),ft.type.toLowerCase().includes(z)&&(_t+=5),ft.domain.toLowerCase().includes(z)&&(_t+=5),this.bm25Index&&et.length>0&&(_t+=this.bm25Index.score(ft.id,et)),_t>0&&j.add(ft.id)}_(j,this.semanticIds)}),g.addEventListener("keydown",z=>{z.key==="Enter"&&m.click()}),m.addEventListener("click",async()=>{let z=this.searchQuery.trim();if(!z){E();return}m.disabled=!0,m.textContent="\u2026",y.textContent="\u27F3",y.style.display="inline";let et=z.toLowerCase(),j=cu(et),ft=[];for(let Gt of this.nodes){let zt=0;Gt.title.toLowerCase().includes(et)&&(zt+=10),Gt.type.toLowerCase().includes(et)&&(zt+=5),Gt.domain.toLowerCase().includes(et)&&(zt+=5),this.bm25Index&&j.length>0&&(zt+=this.bm25Index.score(Gt.id,j)),zt>0&&ft.push({id:Gt.id,score:zt})}let _t=await this.runSemanticSearch(z),xt=new Set(ft.map(Gt=>Gt.id)),qt=new Set(_t.map(Gt=>Gt.id));this.semanticIds=qt,this.searchResultsData={bm25:ft,sem:_t},_(xt,qt),this.semSidebarEl&&(this.semSidebarOpen=!0,this.semSidebarEl.addClass("llm-graph-sem-sidebar--open"),D.addClass("llm-graph-btn--active"),this.buildSemanticSidebar(this.semSidebarEl));let Bt=new Set([...xt,...qt]).size;y.textContent=`${Bt}`,y.style.display=Bt>0?"inline":"none",m.disabled=!1,m.textContent="Find",this.saveSettings()}),f.addEventListener("click",()=>{E(),g.focus()});let M=(z,et,j=!1)=>{let ft=u.createEl("button",{cls:"llm-graph-btn"});return(0,Ke.setIcon)(ft,z),ft.createSpan({text:et}),ft.setAttribute("aria-label",et),j&&ft.addClass("llm-graph-btn--active"),ft},S=M("rotate-ccw","Reset zoom"),w=M("refresh-cw","Refresh"),x=M("type","Nodes",this.showNodeLabels),T=M("minus","Edges",this.showEdgeLabels),P=M("arrow-right","Arrows",this.showArrows),D=M("cpu","Semantic",this.semSidebarOpen),I=M("layers","Clusters",this.colorMode==="semantic"),B=M("box","3D",this.mode3D),R=M("bar-chart-2","Analytics",this.sidebarOpen);u.createSpan({cls:"llm-graph-stats",text:`${i.n} nodes \xB7 ${i.m} edges \xB7 density ${i.density}`});let N=new Map,U=e.createDiv({cls:"llm-graph-layout"}),L=U.createDiv({cls:"llm-graph-sem-sidebar"});if(this.semSidebarOpen&&L.addClass("llm-graph-sem-sidebar--open"),this.semSidebarEl=L,this.mode3D){let z=U.createDiv({cls:"llm-graph-3d-canvas"}),et=U.createDiv({cls:"llm-graph-sidebar"});this.sidebarOpen&&et.addClass("llm-graph-sidebar--open"),this.buildSidebar(et,i,N),this.buildSemanticSidebar(L),this.graph3D&&(this.graph3D.dispose(),this.graph3D=null);let j=new El;this.graph3D=j;let ft=vt=>this.colorMode==="semantic"&&this.clusterMap.has(vt.id)?gn[this.clusterMap.get(vt.id)%gn.length]:this.nodeTypeColor(vt.type),_t=this.nodes.filter(vt=>(this.selectedDomains.size===0||this.selectedDomains.has(vt.domain))&&!r.has(vt.type)&&!(a&&o.has(vt.type))),xt=new Set(_t.map(vt=>vt.id)),qt=i.degreeOf,Bt=_t.map(vt=>{var Ft;return{id:vt.id,title:vt.title,type:vt.type,domain:vt.domain,color:ft(vt),size:1+Math.log1p((Ft=qt.get(vt.id))!=null?Ft:0)*.4}}),Gt=this.edges.filter(vt=>{let Ft=typeof vt.source=="string"?vt.source:vt.source.id,$t=typeof vt.target=="string"?vt.target:vt.target.id;return xt.has(Ft)&&xt.has($t)}).map(vt=>({source:typeof vt.source=="string"?vt.source:vt.source.id,target:typeof vt.target=="string"?vt.target:vt.target.id}));B.addEventListener("click",()=>{this.graph3D&&(this.savedCameraState=this.graph3D.getCameraState(),this.graph3D.dispose(),this.graph3D=null),this.mode3D=!1,this.saveSettings(),this.render()}),I.addEventListener("click",()=>{if(this.colorMode==="type"){if(!this.embeddings||this.embeddings.size===0)return;this.colorMode="semantic",this.computeClusters(this.numClusters)}else this.colorMode="type";if(I.toggleClass("llm-graph-btn--active",this.colorMode==="semantic"),this.saveSettings(),this.graph3D){let vt=new Map(Bt.map(jt=>[jt.id,jt.color])),Ft=this.colorMode,$t=this.clusterMap;Bt.forEach(jt=>{jt.color=Ft==="semantic"&&$t.has(jt.id)?gn[$t.get(jt.id)%gn.length]:this.nodeTypeColor(jt.type),vt.set(jt.id,jt.color)}),this.graph3D.updateColors(vt)}}),requestAnimationFrame(()=>{j.init(z,{onNodeClick:vt=>this.app.workspace.openLinkText(vt,"",!1),onClose:()=>{},linkDist:this.linkDist,chargeStr:this.chargeStr,gravityStr:this.gravityStr,nodeScale:this.nodeScale,edgeWidth:this.edgeWidth,labelSize:this.labelSize,labelFadeAt:this.labelFadeAt}),j.setData(Bt,Gt),this.savedCameraState&&(j.setCameraState(this.savedCameraState),this.savedCameraState=null)}),et.querySelectorAll("[data-physics]").forEach(vt=>{vt.addEventListener("input",()=>{let Ft=+vt.value,$t=vt.dataset.physics,jt=$t==="gravityStr"||$t==="labelFadeAt"||$t==="nodeScale"||$t==="edgeWidth",re=vt.nextElementSibling;re&&(re.textContent=jt?Ft.toFixed(2):String(Ft)),$t==="linkDist"?(this.linkDist=Ft,j.updateLinkDist(Ft)):$t==="chargeStr"?(this.chargeStr=Ft,j.updateCharge(Ft)):$t==="gravityStr"?(this.gravityStr=Ft,j.updateGravity(Ft)):$t==="nodeScale"?(this.nodeScale=Ft,j.updateNodeScale(Ft)):$t==="edgeWidth"?(this.edgeWidth=Ft,j.updateEdgeWidth(Ft)):$t==="labelSize"?(this.labelSize=Ft,j.updateLabelSize(Ft)):$t==="labelFadeAt"&&(this.labelFadeAt=Ft,j.updateLabelFade(Ft)),this.saveSettings()})});let zt=u.querySelector('[aria-label="Reset zoom"]'),Vt=u.querySelector('[aria-label="Refresh"]');zt==null||zt.addEventListener("click",()=>{var vt,Ft;(vt=j.camera)==null||vt.position.set(0,0,600),(Ft=j.controls)==null||Ft.reset()}),Vt==null||Vt.addEventListener("click",()=>this.render()),R.addEventListener("click",()=>{this.sidebarOpen=!this.sidebarOpen,R.toggleClass("llm-graph-btn--active",this.sidebarOpen),et.toggleClass("llm-graph-sidebar--open",this.sidebarOpen),this.saveSettings()}),D.addEventListener("click",()=>{this.semSidebarOpen=!this.semSidebarOpen,D.toggleClass("llm-graph-btn--active",this.semSidebarOpen),L.toggleClass("llm-graph-sem-sidebar--open",this.semSidebarOpen),this.saveSettings()});return}let O=U.createSvg("svg",{cls:"llm-graph-svg"});this.svgEl=O;let X=U.createDiv({cls:"llm-graph-sidebar"});this.sidebarOpen&&X.addClass("llm-graph-sidebar--open"),this.buildSidebar(X,i,N),this.buildSemanticSidebar(L);let Z=Pe(O),tt=Z.append("g");if(this.zoomBehavior=ou().scaleExtent([.05,10]).on("zoom",z=>{tt.attr("transform",z.transform);let et=z.transform.k,j=this.labelSize/et,ft=this.labelSize*.85/et,_t=this.labelFadeAt,xt=this.labelFadeAt*.45,qt=Math.max(0,Math.min(1,(et-xt)/(_t-xt)));this.showNodeLabels&&tt.selectAll(".llm-graph-node-label").style("font-size",`${j}px`).style("opacity",String(qt)),this.showEdgeLabels&&tt.selectAll(".llm-graph-edge-label").style("font-size",`${ft}px`).style("opacity",String(qt))}),Z.call(this.zoomBehavior),this.savedTransform&&this.selectedDomains.size===0){let{k:z,x:et,y:j}=this.savedTransform;Z.call(this.zoomBehavior.transform,Pn.translate(et,j).scale(z))}Z.on("click",z=>{z.target===O&&(this.selectedId=null,this.applyVisibility(N))}),S.addEventListener("click",()=>{this.savedTransform=null,Z.transition().duration(400).call(this.zoomBehavior.transform,Pn)}),w.addEventListener("click",()=>this.manualRefresh()),Z.append("defs").append("marker").attr("id","llm-arrow").attr("viewBox","0 -3 6 6").attr("refX",10).attr("refY",0).attr("markerWidth",6).attr("markerHeight",6).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M0,-3L6,0L0,3").attr("fill","var(--text-faint)");let it=new Map(c.map(z=>[z.id,z])),Ct=h.map(z=>({...z,source:it.get(z.source),target:it.get(z.target)})).filter(z=>z.source&&z.target);this.pendingRaf=requestAnimationFrame(()=>{this.pendingRaf=null;let z=O.clientWidth||900,et=O.clientHeight||700,j=Hh(Ct).id(C=>C.id).distance(this.linkDist).strength(C=>{var v,F;return 1/Math.sqrt(Math.max(1,(v=i.degreeOf.get(C.source.id))!=null?v:1)*Math.max(1,(F=i.degreeOf.get(C.target.id))!=null?F:1))}),ft=Xh().strength(-this.chargeStr),_t=qh(z/2).strength(this.gravityStr),xt=Yh(et/2).strength(this.gravityStr),qt=Math.max(15,Math.sqrt(d)*2);this.sim=Wh(c).force("link",j).force("charge",ft).force("gx",_t).force("gy",xt).force("collide",Gh(qt));let Bt=this.buildAdjacency(Ct);N.clear();for(let[C,v]of Bt)N.set(C,v);let Gt=tt.append("g").selectAll("line").data(Ct).join("line").attr("class","llm-graph-edge").attr("stroke-width",this.edgeWidth).style("stroke",C=>{let v=C.source.domain||C.target.domain;return v?Zl(v):"#888"}).style("stroke-opacity",C=>{let v=C.source.domain,F=C.target.domain;return v&&F&&v===F?"0.7":"0.3"}).attr("marker-end","url(#llm-arrow)");this.selEdgeLine=Gt;let zt=tt.append("g").selectAll("text").data(Ct).join("text").attr("class","llm-graph-edge-label").attr("pointer-events","none").text(C=>C.label);this.selEdgeLabel=zt;let Vt=tt.append("g").selectAll("g").data(c).join("g").attr("class","llm-graph-node").call(Zh().on("start",(C,v)=>{var F;C.active||(F=this.sim)==null||F.alphaTarget(.3).restart(),v.fx=v.x,v.fy=v.y}).on("drag",(C,v)=>{v.fx=C.x,v.fy=C.y}).on("end",(C,v)=>{var F;C.active||(F=this.sim)==null||F.alphaTarget(0),v.fx=null,v.fy=null})).on("click",(C,v)=>{C.stopPropagation(),this.selectedId===v.id?this.app.workspace.openLinkText(v.id,"",!1):(this.selectedId=v.id,this.applyVisibility(N))});this.selNodeEl=Vt;let vt=this.colorMode,Ft=this.clusterMap,$t=this.nodeScale,jt=C=>this.nodeTypeColor(C),re=i.intraDomainOut,pe=i.degreeOf;Vt.each(function(C){var Mt,ct,lt;let v=Pe(this),F;vt==="semantic"&&Ft.has(C.id)?F=gn[Ft.get(C.id)%gn.length]:F=jt(C.type);let W=(Mt=fg[C.type])!=null?Mt:"circle",J="llm-graph-node-shape",rt=(ct=re.get(C.id))!=null?ct:0,at=(lt=pe.get(C.id))!=null?lt:0,K=rt>0?rt:at,Q=1+Math.log1p(K)*(rt>0?.5:.25),ot=v.append("g").attr("class","llm-node-shape-wrapper").attr("data-base-scale",Q).attr("transform",`scale(${Q*$t})`);W==="diamond"?ot.append("rect").attr("class",J).attr("width",11).attr("height",11).attr("x",-5.5).attr("y",-5.5).attr("transform","rotate(45)").attr("rx",1.5).attr("fill",F):W==="square"?ot.append("rect").attr("class",J).attr("width",13).attr("height",13).attr("x",-6.5).attr("y",-6.5).attr("rx",2).attr("fill",F):W==="hexagon"?ot.append("polygon").attr("class",J).attr("points","0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4").attr("fill",F):ot.append("circle").attr("class",J).attr("r",7).attr("fill",F)});let G=Vt.append("text").attr("class","llm-graph-node-label").attr("dy","0.35em").attr("x",13).attr("pointer-events","none").text(C=>C.title.length>26?C.title.slice(0,24)+"\u2026":C.title).attr("display",this.showNodeLabels?null:"none");this.selNodeLabel=G;let xe=e.createDiv({cls:"llm-graph-tooltip"});Vt.on("mouseenter",(C,v)=>{var J,rt;let F=(J=i.degreeOf.get(v.id))!=null?J:0,W=(rt=N.get(v.id))!=null?rt:new Set;xe.innerHTML=`<strong>${v.title}</strong><br><span class="llm-tp-type" style="color:${this.nodeTypeColor(v.type)}">${v.type}</span>`+(v.domain?`<br><em>${v.domain}</em>`:"")+`<br><small>degree: ${F} \xB7 neighbors: ${W.size}</small><br><small class="llm-tp-hint">click to select \xB7 click again to open</small>`,xe.style.display="block"}).on("mousemove",C=>{let v=e.getBoundingClientRect();xe.style.left=C.clientX-v.left+14+"px",xe.style.top=C.clientY-v.top+14+"px"}).on("mouseleave",()=>{xe.style.display="none"}),this.focusNodeFn=C=>{let v=it.get(C);if(!v||v.x==null||v.y==null)return;this.selectedId=C,this.applyVisibility(N);let F=O.clientWidth,W=O.clientHeight;Z.transition().duration(600).call(this.zoomBehavior.transform,Pn.translate(F/2,W/2).scale(1.8).translate(-v.x,-v.y)),xe.style.display="none"},X.querySelectorAll("[data-node-id]").forEach(C=>{C.addEventListener("click",()=>{var v;return(v=this.focusNodeFn)==null?void 0:v.call(this,C.dataset.nodeId)})}),this.sim.on("tick",()=>{Gt.attr("x1",C=>C.source.x).attr("y1",C=>C.source.y).attr("x2",C=>C.target.x).attr("y2",C=>C.target.y),zt.attr("x",C=>(C.source.x+C.target.x)/2).attr("y",C=>(C.source.y+C.target.y)/2),Vt.attr("transform",C=>`translate(${C.x},${C.y})`)}),(this.selectedDomains.size>0||!this.savedTransform)&&this.sim.on("end",()=>{let C=c.filter(Ot=>Ot.x!=null&&Ot.y!=null);if(C.length===0)return;let v=C.map(Ot=>Ot.x),F=C.map(Ot=>Ot.y),W=Math.min(...v),J=Math.max(...v),rt=Math.min(...F),at=Math.max(...F),K=O.clientWidth||900,Q=O.clientHeight||700,ot=60,Mt=(K-ot*2)/Math.max(J-W,1),ct=(Q-ot*2)/Math.max(at-rt,1),lt=Math.min(Mt,ct,3),Rt=(W+J)/2,Dt=(rt+at)/2;Z.transition().duration(500).call(this.zoomBehavior.transform,Pn.translate(K/2,Q/2).scale(lt).translate(-Rt,-Dt))}),X.querySelectorAll("[data-physics]").forEach(C=>{C.addEventListener("input",()=>{var rt;let v=+C.value,F=C.dataset.physics,W=C.nextElementSibling,J=F==="gravityStr"||F==="labelFadeAt"||F==="nodeScale"||F==="edgeWidth";if(W&&(W.textContent=J?v.toFixed(2):String(v)),F==="linkDist")this.linkDist=v,this.sim.force("link").distance(v);else if(F==="chargeStr")this.chargeStr=v,this.sim.force("charge").strength(-v);else if(F==="gravityStr")this.gravityStr=v,this.sim.force("gx").strength(v),this.sim.force("gy").strength(v);else if(F==="labelFadeAt"||F==="labelSize"){F==="labelFadeAt"&&(this.labelFadeAt=v),F==="labelSize"&&(this.labelSize=v);let at=Vs(O).k,K=this.labelFadeAt,Q=this.labelFadeAt*.45,ot=String(Math.max(0,Math.min(1,(at-Q)/(K-Q))));this.showNodeLabels&&tt.selectAll(".llm-graph-node-label").style("font-size",`${this.labelSize/at}px`).style("opacity",ot),this.showEdgeLabels&&tt.selectAll(".llm-graph-edge-label").style("font-size",`${this.labelSize*.85/at}px`).style("opacity",ot),this.saveSettings();return}else if(F==="nodeScale"){this.nodeScale=v,tt.selectAll(".llm-node-shape-wrapper").attr("transform",function(){var K;return`scale(${+((K=this.getAttribute("data-base-scale"))!=null?K:1)*v})`}),this.saveSettings();return}else if(F==="edgeWidth"){this.edgeWidth=v,(rt=this.selEdgeLine)==null||rt.attr("stroke-width",v),this.saveSettings();return}this.sim.alpha(.4).restart(),this.saveSettings()})}),this.applyVisibility(N)}),x.addEventListener("click",()=>{var z;this._labelsUserSet=!0,this.showNodeLabels=!this.showNodeLabels,x.toggleClass("llm-graph-btn--active",this.showNodeLabels),(z=this.selNodeLabel)==null||z.attr("display",this.showNodeLabels?null:"none"),this.saveSettings()}),T.addEventListener("click",()=>{var z;this.showEdgeLabels=!this.showEdgeLabels,T.toggleClass("llm-graph-btn--active",this.showEdgeLabels),(z=this.selEdgeLabel)==null||z.attr("display",this.showEdgeLabels?null:"none"),this.saveSettings()}),P.addEventListener("click",()=>{var z;this.showArrows=!this.showArrows,P.toggleClass("llm-graph-btn--active",this.showArrows),(z=this.selEdgeLine)==null||z.attr("marker-end",this.showArrows?"url(#llm-arrow)":null),this.saveSettings()}),R.addEventListener("click",()=>{this.sidebarOpen=!this.sidebarOpen,R.toggleClass("llm-graph-btn--active",this.sidebarOpen),X.toggleClass("llm-graph-sidebar--open",this.sidebarOpen),this.saveSettings()}),D.addEventListener("click",()=>{this.semSidebarOpen=!this.semSidebarOpen,D.toggleClass("llm-graph-btn--active",this.semSidebarOpen),L.toggleClass("llm-graph-sem-sidebar--open",this.semSidebarOpen),this.saveSettings()}),I.addEventListener("click",()=>{if(this.colorMode==="type"){if(!this.embeddings||this.embeddings.size===0){new(require("obsidian")).Notice("Generate embeddings first (Semantic sidebar)");return}this.colorMode="semantic",this.computeClusters(this.numClusters)}else this.colorMode="type";I.toggleClass("llm-graph-btn--active",this.colorMode==="semantic"),this.saveSettings(),this.recolorNodes()}),B.addEventListener("click",()=>{this.graph3D?(this.savedCameraState=this.graph3D.getCameraState(),this.graph3D.dispose(),this.graph3D=null):this.captureZoom(),this.mode3D=!this.mode3D,this.saveSettings(),this.render()})}async generateEmbeddings(e){let i=this.app.vault.getMarkdownFiles().filter(d=>d.path.startsWith("wiki/")&&!["wiki/updates/","wiki/compiled/","wiki/graph/","wiki/synthesis/","wiki/decisions/"].some(u=>d.path.includes(u))),s={},r=i.length,a=0,o=0;for(let d of i){e.textContent=`${a}/${r} embedded${o?` (${o} failed)`:""}\u2026`;try{let p=(await this.app.vault.cachedRead(d)).replace(/^---[\s\S]*?---\n?/,"").slice(0,1e3),g=d.basename+". "+p,y=await fetch(`${this.embeddingEndpoint}/api/embeddings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.embeddingModel,prompt:g})});if(!y.ok){o++;continue}let m=(await y.json()).embedding;m!=null&&m.length&&(s[d.basename]=m)}catch(u){o++}a++}e.textContent=`Done: ${a} embedded, ${o} failed. Saving\u2026`;let c="wiki/search/embeddings.json",l=JSON.stringify(s),h=this.app.vault.getAbstractFileByPath(c);if(h instanceof Ke.TFile)await this.app.vault.modify(h,l);else{try{await this.app.vault.createFolder("wiki/search")}catch(d){}await this.app.vault.create(c,l)}e.textContent=`\u2713 ${Object.keys(s).length} embeddings saved.`}buildSemanticSidebar(e){var h,d,u,p;e.empty();let i=this.embeddings,s=this.nodes,r=new Map(s.map(g=>[g.id,g])),a=g=>{let y=e.createDiv({cls:"llm-sb-section"});return y.createDiv({cls:"llm-sb-title",text:g}),y};if(this.searchResultsData){let{bm25:g,sem:y}=this.searchResultsData,m=new Map;for(let{id:_,score:M}of g)m.set(_,{bm25:M,sem:0});for(let{id:_,score:M}of y){let S=(h=m.get(_))!=null?h:{bm25:0,sem:0};m.set(_,{...S,sem:M})}let f=[...m.entries()].sort((_,M)=>{let S=_[1].bm25>0?_[1].bm25*2+_[1].sem:_[1].sem;return(M[1].bm25>0?M[1].bm25*2+M[1].sem:M[1].sem)-S}),b=a(`Search Results (${f.length})`);y.length>0&&((d=b.querySelector(".llm-sb-title"))==null||d.appendChild(createSpan({cls:"llm-res-sem-tag",text:"~ semantic"})));let E=b.createEl("button",{cls:"llm-graph-btn",text:"Clear search"});E.style.cssText="font-size:10px;padding:2px 8px;margin:4px 0 8px;",E.addEventListener("click",()=>{var _,M;this.searchResultsData=null,this.semanticIds.clear(),this.selNodeEl&&(this.selNodeEl.style("opacity",null).style("pointer-events",null),(_=this.selEdgeLine)==null||_.style("opacity",null),(M=this.selEdgeLabel)==null||M.style("opacity",null)),this.buildSemanticSidebar(e)}),f.length===0&&b.createDiv({cls:"llm-sb-muted",text:"No results found."});for(let[_,{bm25:M,sem:S}]of f){let w=r.get(_);if(!w)continue;let x=b.createDiv({cls:"llm-res-row"+(M>0?" llm-res-row--bm25":" llm-res-row--sem")}),T=x.createSpan({cls:"llm-res-score"});T.textContent=S>0?S.toFixed(2):"\u2014",T.title=`BM25: ${M.toFixed(1)}  semantic: ${S.toFixed(2)}`;let P=x.createSpan({cls:"llm-res-domain",text:w.domain||w.type});P.style.background=w.domain?Zl(w.domain)+"33":"",P.style.color=w.domain?Zl(w.domain):"",x.createEl("a",{cls:"llm-res-title",text:w.title}).addEventListener("click",()=>{this.app.workspace.openLinkText(_,"",!1);let I=w;if(I.x!=null&&I.y!=null&&this.zoomBehavior&&this.svgEl){let{width:B,height:R}=this.svgEl.getBoundingClientRect(),N=Pn.translate(B/2-I.x,R/2-I.y);Pe(this.svgEl).transition().duration(400).call(this.zoomBehavior.transform,N)}})}}if(!i||i.size===0)a("Semantic Metrics").createDiv({cls:"llm-sb-muted",text:"No embeddings found. Generate them below (requires Ollama running). Configure endpoint and model in plugin Settings."});else{let g=(L,O)=>{let X=0,Z=0,tt=0;for(let it=0;it<L.length;it++)X+=L[it]*O[it],Z+=L[it]*L[it],tt+=O[it]*O[it];return Z===0||tt===0?0:X/(Math.sqrt(Z)*Math.sqrt(tt))},y=new Map;for(let L of s)!L.domain||!i.has(L.id)||(y.has(L.domain)||y.set(L.domain,[]),y.get(L.domain).push(L));let m=new Map,f=(p=(u=i.values().next().value)==null?void 0:u.length)!=null?p:0;for(let[L,O]of y){if(O.length<2||f===0)continue;let X=new Array(f).fill(0);for(let Ct of O){let Ut=i.get(Ct.id);for(let Lt=0;Lt<f;Lt++)X[Lt]+=Ut[Lt]/O.length}let Z=O.map(Ct=>({id:Ct.id,sim:g(i.get(Ct.id),X)})),tt=Z.reduce((Ct,Ut)=>Ct+Ut.sim,0)/Z.length,it=[...Z].sort((Ct,Ut)=>Ct.sim-Ut.sim).slice(0,5);m.set(L,{cohesion:tt,centroid:X,outliers:it})}let b=a("Domain Cohesion");b.createDiv({cls:"llm-sb-muted",text:"avg cos-sim to domain centroid (1.0 = perfectly focused)"});let E=[...m.entries()].sort((L,O)=>O[1].cohesion-L[1].cohesion),_=Math.max(...E.map(([,L])=>L.cohesion),.01);for(let[L,{cohesion:O}]of E){let X=b.createDiv({cls:"llm-sb-bar-row"});X.createSpan({cls:"llm-sb-bar-name",text:L});let Z=X.createDiv({cls:"llm-sb-track"}),tt=Math.max(O/_*100,2),it=Math.round(O*120);Z.createDiv({cls:"llm-sb-fill",attr:{style:`width:${tt}%;background:hsl(${it},60%,45%)`}}),X.createSpan({cls:"llm-sb-bar-cnt",text:O.toFixed(2)})}let M=a("Semantic Outliers");M.createDiv({cls:"llm-sb-muted",text:"nodes farthest from their domain centroid"});for(let[L,{outliers:O}]of E.slice(0,8)){M.createDiv({cls:"llm-sb-outlier-domain"}).createSpan({cls:"llm-sb-bar-name",text:L});for(let Z of O.slice(0,3)){let tt=M.createDiv({cls:"llm-sb-outlier-row"});tt.createSpan({cls:"llm-sb-outlier-sim",text:Z.sim.toFixed(2)});let it=tt.createEl("a",{cls:"llm-sb-outlier-name",text:Z.id.length>28?Z.id.slice(0,26)+"\u2026":Z.id});it.setAttribute("title",Z.id),it.addEventListener("click",()=>this.app.workspace.openLinkText(Z.id,"",!1))}}let S=a("Missing Links");S.createDiv({cls:"llm-sb-muted",text:"similar nodes without an edge (cos-sim > 0.80)"});let w=new Set(this.edges.map(L=>`${L.source}|${L.target}`)),x=s.filter(L=>i.has(L.id)).map(L=>L.id),T=[],P=.8;if(x.length<=300){for(let L=0;L<x.length&&T.length<200;L++)for(let O=L+1;O<x.length;O++){if(w.has(`${x[L]}|${x[O]}`)||w.has(`${x[O]}|${x[L]}`))continue;let X=g(i.get(x[L]),i.get(x[O]));X>=P&&T.push({a:x[L],b:x[O],sim:X})}T.sort((L,O)=>O.sim-L.sim)}else S.createDiv({cls:"llm-sb-muted",text:`${x.length} nodes \u2014 too many for full scan (max 300)`});for(let{a:L,b:O,sim:X}of T.slice(0,15)){let Z=S.createDiv({cls:"llm-sb-miss-row"});Z.createSpan({cls:"llm-sb-outlier-sim",text:X.toFixed(2)}),Z.createEl("a",{cls:"llm-sb-miss-name",text:L.length>18?L.slice(0,16)+"\u2026":L}).addEventListener("click",()=>this.app.workspace.openLinkText(L,"",!1)),Z.createSpan({text:" \u2194 "}),Z.createEl("a",{cls:"llm-sb-miss-name",text:O.length>18?O.slice(0,16)+"\u2026":O}).addEventListener("click",()=>this.app.workspace.openLinkText(O,"",!1))}T.length===0&&x.length<=300&&S.createDiv({cls:"llm-sb-muted",text:"None found above threshold."});let D=a("Near Duplicates");D.createDiv({cls:"llm-sb-muted",text:"cos-sim > 0.93 \u2014 potential redundancy"});let I=T.filter(L=>L.sim>=.93);I.length===0&&D.createDiv({cls:"llm-sb-muted",text:"None found."});for(let{a:L,b:O,sim:X}of I.slice(0,10)){let Z=D.createDiv({cls:"llm-sb-miss-row"});Z.createSpan({cls:"llm-sb-outlier-sim",text:X.toFixed(2)}),Z.createEl("a",{cls:"llm-sb-miss-name",text:L.length>18?L.slice(0,16)+"\u2026":L}).addEventListener("click",()=>this.app.workspace.openLinkText(L,"",!1)),Z.createSpan({text:" \u2194 "}),Z.createEl("a",{cls:"llm-sb-miss-name",text:O.length>18?O.slice(0,16)+"\u2026":O}).addEventListener("click",()=>this.app.workspace.openLinkText(O,"",!1))}let R=a("Semantic Clusters").createDiv({cls:"llm-sb-slider-row"});R.createSpan({cls:"llm-sb-slider-lbl",text:"k clusters"});let N=R.createEl("input",{type:"range"});N.addClass("llm-sb-slider"),N.min="2",N.max="20",N.step="1",N.value=String(this.numClusters);let U=R.createSpan({cls:"llm-sb-slider-val",text:String(this.numClusters)});N.addEventListener("input",()=>{var O;let L=+N.value;if(U.textContent=String(L),this.numClusters=L,this.saveSettings(),this.colorMode==="semantic"&&(this.computeClusters(L),this.recolorNodes(),this.graph3D)){let X=this.colorMode,Z=this.clusterMap,tt=new Map;for(let it of this.graph3D.nodeIds)tt.set(it,X==="semantic"&&Z.has(it)?gn[Z.get(it)%gn.length]:(O=sa[this.graph3D.getNodeType(it)])!=null?O:"#BAB0AC");this.graph3D.updateColors(tt)}})}let o=a(i&&i.size>0?`Regenerate Embeddings (${i.size} stored)`:"Generate Embeddings");o.createDiv({cls:"llm-sb-muted",text:`Endpoint: ${this.embeddingEndpoint} \xB7 Model: ${this.embeddingModel}`});let c=o.createDiv({cls:"llm-sem-gen-progress"}),l=o.createEl("button",{cls:"llm-graph-btn llm-sem-gen-btn",text:i&&i.size>0?"Regenerate":"Generate Embeddings"});l.addEventListener("click",async()=>{l.disabled=!0,l.textContent="Generating\u2026",await this.generateEmbeddings(c),await this.loadEmbeddings(),this.buildSemanticSidebar(e)})}buildSidebar(e,i,s){let r=w=>{let x=e.createDiv({cls:"llm-sb-section"});return x.createDiv({cls:"llm-sb-title",text:w}),x},a=r("Physics"),o=(w,x,T,P,D,I)=>{let B=a.createDiv({cls:"llm-sb-slider-row"});B.createSpan({cls:"llm-sb-slider-lbl",text:w});let R=B.createEl("input",{type:"range"});R.addClass("llm-sb-slider"),R.min=String(T),R.max=String(P),R.value=String(D),R.step=String(I),R.dataset.physics=x;let N=I<1?D.toFixed(2):String(D);B.createSpan({cls:"llm-sb-slider-val",text:N})};o("Link dist","linkDist",20,200,this.linkDist,5),o("Repulsion","chargeStr",30,800,this.chargeStr,10),o("Gravity","gravityStr",0,.3,this.gravityStr,.01),o("Node size","nodeScale",.3,4,this.nodeScale,.1),o("Edge width","edgeWidth",.5,8,this.edgeWidth,.5),o("Font size","labelSize",6,24,this.labelSize,1),o("Labels fade","labelFadeAt",.05,3,this.labelFadeAt,.05);let c=r("Graph Health"),l=[{lbl:"Nodes",val:i.n,warn:!1},{lbl:"Edges",val:i.m,warn:!1},{lbl:"Density",val:i.density,warn:i.density<.01},{lbl:"Avg deg",val:i.avgDeg,warn:i.avgDeg<1},{lbl:"Orphans",val:i.orphans,warn:i.orphans>0}],h=c.createDiv({cls:"llm-sb-cards"});for(let w of l){let x=h.createDiv({cls:"llm-sb-card"+(w.warn?" llm-sb-card--warn":"")});x.createDiv({cls:"llm-sb-card-val",text:String(w.val)}),x.createDiv({cls:"llm-sb-card-lbl",text:w.lbl})}if(i.orphans>0){let x=c.createDiv({cls:"llm-sb-orphan-row"}).createEl("button",{cls:"llm-graph-btn llm-graph-btn--xs"+(this.showOrphans?" llm-graph-btn--active":""),text:this.showOrphans?`Hide ${i.orphans} orphans`:`Show ${i.orphans} orphans`});x.addEventListener("click",()=>{this.showOrphans=!this.showOrphans,x.textContent=this.showOrphans?`Hide ${i.orphans} orphans`:`Show ${i.orphans} orphans`,x.toggleClass("llm-graph-btn--active",this.showOrphans),this.applyVisibility(s)})}let d=r("Epistemic Layers"),u=(w,x)=>{let T=`fill="${x}"`;switch(w){case"diamond":return`<svg width="12" height="12" viewBox="0 0 10 10"><rect ${T} x="1.5" y="1.5" width="7" height="7" rx="1" transform="rotate(45 5 5)"/></svg>`;case"square":return`<svg width="12" height="12" viewBox="0 0 10 10"><rect ${T} x="1.5" y="1.5" width="7" height="7" rx="1.5"/></svg>`;case"hexagon":return`<svg width="12" height="12" viewBox="0 0 10 10"><polygon ${T} points="5,1 8.7,3 8.7,7 5,9 1.3,7 1.3,3"/></svg>`;default:return`<svg width="12" height="12" viewBox="0 0 10 10"><circle ${T} cx="5" cy="5" r="4"/></svg>`}},p=d.createDiv({cls:"llm-sb-layer-ctrl"}),g=p.createEl("button",{cls:"llm-graph-btn llm-graph-btn--xs",text:"All"}),y=p.createEl("button",{cls:"llm-graph-btn llm-graph-btn--xs",text:"None"});this.layerRowMap.clear();let m=Math.max(...i.layers.map(w=>w.count),1);i.layers.forEach((w,x)=>{var U;let T=w.name.toLowerCase(),P=w.color,D=T==="others",I=D?"circle":(U=fg[T])!=null?U:"circle",B=d.createDiv({cls:"llm-sb-layer-row"});w.count>0&&B.addClass("llm-sb-layer-clickable"),this.hiddenTypes.has(T)&&B.addClass("llm-sb-layer-row--off"),D&&B.addClass("llm-sb-layer-row--others"),this.layerRowMap.set(T,B),B.createSpan({cls:"llm-sb-layer-num",text:D?"?":String(x+1)}),B.innerHTML+=u(I,P);let R=B.createSpan({cls:"llm-sb-layer-name",text:w.name});R.style.color=P,D&&(R.title="Types outside epistemic model \u2014 needs Maintain");let N=B.createDiv({cls:"llm-sb-track"});if(w.count>0){let L=N.createDiv({cls:"llm-sb-fill"});L.style.cssText=`width:${Math.max(w.count/m*100,4)}%;background:${P}`}else N.createSpan({cls:"llm-sb-gap",text:"gap"});B.createSpan({cls:"llm-sb-layer-cnt",text:w.count?String(w.count):"\u2014"}).style.color=w.count?P:"var(--text-faint)",w.count>0&&B.addEventListener("click",()=>{this.hiddenTypes.has(T)?this.hiddenTypes.delete(T):this.hiddenTypes.add(T),this.layerRowMap.forEach((L,O)=>L.toggleClass("llm-sb-layer-row--off",this.hiddenTypes.has(O))),this.saveSettings(),this.captureZoom(),this.render()})}),g.addEventListener("click",()=>{this.hiddenTypes.clear(),this.layerRowMap.forEach(w=>w.removeClass("llm-sb-layer-row--off")),this.saveSettings(),this.captureZoom(),this.render()}),y.addEventListener("click",()=>{i.layers.forEach(w=>{w.count>0&&this.hiddenTypes.add(w.name.toLowerCase())}),this.layerRowMap.forEach((w,x)=>w.toggleClass("llm-sb-layer-row--off",this.hiddenTypes.has(x))),this.saveSettings(),this.captureZoom(),this.render()});let f=r("Edge Types"),b=Math.max(...i.edgeTypes.map(w=>w.count),1);for(let w of i.edgeTypes){let x=f.createDiv({cls:"llm-sb-bar-row"});x.createSpan({cls:"llm-sb-bar-name",text:w.label});let P=x.createDiv({cls:"llm-sb-track"}).createDiv({cls:"llm-sb-fill llm-sb-fill--blue"});P.style.width=`${w.count/b*100}%`,x.createSpan({cls:"llm-sb-bar-cnt",text:String(w.count)})}let E=r("Top Hubs \xB7 by degree"),_=Math.max(...i.hubs.map(w=>w.deg),1);i.hubs.forEach((w,x)=>{var I,B;let T=E.createDiv({cls:"llm-sb-hub-row"});T.dataset.nodeId=w.id,T.createSpan({cls:"llm-sb-hub-rank",text:String(x+1)});let P=T.createSpan({cls:"llm-sb-hub-dot"});P.style.background=(I=sa[w.type])!=null?I:"#888",T.createSpan({cls:"llm-sb-hub-name",text:w.id.length>20?w.id.slice(0,18)+"\u2026":w.id}).setAttribute("title",w.id),T.createDiv({cls:"llm-sb-hub-bar"}).createDiv({cls:"llm-sb-fill",style:`width:${w.deg/_*100}%;background:${(B=sa[w.type])!=null?B:"#888"}`}),T.createSpan({cls:"llm-sb-hub-deg",text:String(w.deg)})});let M=r("Domain Coverage");if(this.selectedDomains.size>0){let w=M.createDiv({cls:"llm-sb-domain-badge"});w.setText(`${this.selectedDomains.size} selected \u2014 `),w.createEl("a",{text:"clear all"}).addEventListener("click",T=>{T.stopPropagation(),this.selectedDomains.clear(),this.saveSettings(),this.render()})}let S=Math.max(...i.domains.map(w=>w.count),1);for(let w of i.domains){let x=this.selectedDomains.has(w.name),T=M.createDiv({cls:"llm-sb-bar-row llm-sb-domain-row"+(x?" llm-sb-domain-row--active":"")});T.createSpan({cls:"llm-sb-bar-name",text:w.name});let D=T.createDiv({cls:"llm-sb-track"}).createDiv({cls:"llm-sb-fill"});D.style.cssText=`width:${Math.max(w.count/S*100,4)}%;background:${Zl(w.name)}`,T.createSpan({cls:"llm-sb-bar-cnt",text:String(w.count)}),T.addEventListener("click",()=>{this.selectedDomains.has(w.name)?this.selectedDomains.delete(w.name):this.selectedDomains.add(w.name),this.saveSettings(),this.render()})}}},uu=class extends Ke.PluginSettingTab{constructor(t,e){super(t,e),this.plugin=e}display(){let{containerEl:t}=this;t.empty(),t.createEl("h2",{text:"LLM Wiki Semantic Graph"}),new Ke.Setting(t).setName("Ollama endpoint").setDesc("Base URL of your Ollama server (no trailing slash)").addText(e=>e.setPlaceholder("http://localhost:11434").setValue(this.plugin.embeddingEndpoint).onChange(async i=>{let s=i.trim()||"http://localhost:11434";this.plugin.embeddingEndpoint=s;let r=this.plugin.getActiveView();r&&(r.embeddingEndpoint=s,r.saveSettings())})),new Ke.Setting(t).setName("Embedding model").setDesc("Ollama model to use for embeddings (must be pulled locally)").addText(e=>e.setPlaceholder("nomic-embed-text").setValue(this.plugin.embeddingModel).onChange(async i=>{let s=i.trim()||"nomic-embed-text";this.plugin.embeddingModel=s;let r=this.plugin.getActiveView();r&&(r.embeddingModel=s,r.saveSettings())}))}},Jl=class extends Ke.Plugin{constructor(){super(...arguments);this.embeddingEndpoint="http://localhost:11434";this.embeddingModel="nomic-embed-text"}async onload(){this.registerView(ra,e=>new $l(e,this)),this.addRibbonIcon("git-fork","LLM Wiki Semantic Graph",()=>this.activateView()),this.addCommand({id:"open-semantic-graph",name:"Open Semantic Graph",callback:()=>this.activateView()}),this.addSettingTab(new uu(this.app,this))}async activateView(){let{workspace:e}=this.app,i=e.getLeavesOfType(ra)[0];i||(i=e.getRightLeaf(!1),await i.setViewState({type:ra,active:!0})),e.revealLeaf(i)}getActiveView(){let e=this.app.workspace.getLeavesOfType(ra)[0];return(e==null?void 0:e.view)instanceof $l?e.view:null}onunload(){}};
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
