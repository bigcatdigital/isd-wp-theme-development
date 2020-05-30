/*!
 * GSAP 3.0.5
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function J(t){return(l=dt(t,at))&&ne}function K(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function L(t,e){return!e&&console.warn(t)}function M(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function N(){return 0}function X(t){var e,n,i=t[0];if(r(i)||o(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(n=pt.length;n--&&!pt[n].targetTest(i););e=pt[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Rt(t[n],e)))||t.splice(n,1);return t}function Y(t){return t._gsap||X(yt(t))[0]._gsap}function Z(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function $(t,e){return(t=t.split(",")).forEach(e)||t}function _(t){return Math.round(1e4*t)/1e4}function aa(t,e){for(var r=e.length,n=0;t.indexOf(e[n])<0&&++n<r;);return n<r}function ba(t,e,r){var n,i=p(t[1]),a=(i?2:1)+(e<2?0:1),o=t[a];return i&&(o.duration=t[1]),1===e?(o.runBackwards=1,o.immediateRender=s(o.immediateRender)):2===e&&(n=t[a-1],o.startAt=n,o.immediateRender=s(o.immediateRender)),o.parent=r,o}function ca(){var t,e,r=ot.length,n=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=n[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function da(t,e,r,n){ot.length&&ca(),t.render(e,r,n),ot.length&&ca()}function ea(t){var e=parseFloat(t);return e||0===e?e:t}function fa(t){return t}function ga(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ha(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ja(t,e){for(var n in e)t[n]=r(e[n])?ja(t[n]||(t[n]={}),e[n]):e[n];return t}function ka(t,e){var r,n={};for(r in t)r in e||(n[r]=t[r]);return n}function oa(t,e,r,n){void 0===r&&(r="_first"),void 0===n&&(n="_last");var i=e._prev,a=e._next;i?i._next=a:t[r]===e&&(t[r]=a),a?a._prev=i:t[n]===e&&(t[n]=i),e._dp=t,e._next=e._prev=e.parent=null}function pa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function qa(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ta(t){return t._repeat?ct(t._tTime,t=t.duration()+t._rDelay)*t:0}function va(t,e){return(t-e._start)*e._ts+(0<e._ts?0:e._dirty?e.totalDuration():e._tDur)}function wa(t,e,r){if(e.parent&&pa(e),e._start=r+e._delay,e._end=e._start+(e.totalDuration()/e._ts||0),function _addLinkedListItem(t,e,r,n,i){void 0===r&&(r="_first"),void 0===n&&(n="_last");var a,s=t[n];if(i)for(a=e[i];s&&s[i]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[n]=e,e._prev=s,e.parent=t}(t,e,"_first","_last",t._sort?"_start":0),(t._recent=e)._time||!e._dur&&e._initted){var n=(t.rawTime()-e._start)*e._ts;(!e._dur||gt(0,e.totalDuration(),n)-e._tTime>B)&&e.render(n,!0)}if(qa(t),t._dp&&t._time>=t._dur&&t._ts&&t._dur<t.duration())for(var i=t;i._dp;)i.totalTime(i._tTime,!0),i=i._dp;return t}function xa(t,e,r,n){return Yt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Mt.frame?(ot.push(t),t._lazy=[e,n],1):void 0:1}function Aa(t){if(t instanceof Bt)return qa(t);var e=t._repeat;return t._tDur=e?e<0?1e12:_(t._dur*(e+1)+t._rDelay*e):t._dur,qa(t.parent),t}function Ca(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=F?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ca(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Da(t,e){return t||0===t?e(t):e}function Fa(t){return(t+"").substr((parseFloat(t)+"").length)}function Ia(t){return t&&r(t)&&"length"in t&&(!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function La(t){if(o(t))return t;var c=r(t)?t:{each:t},m=Ft(c.ease),g=c.from||0,v=parseFloat(c.base)||0,y={},e=0<g&&g<1,w=isNaN(g)||e,b=c.axis,T=g,x=g;return n(g)?T=x={center:.5,edges:.5,end:1}[g]||0:!e&&w&&(T=g[0],x=g[1]),function(t,e,r){var n,i,a,s,o,u,h,l,f,p=(r||c).length,d=y[p];if(!d){if(!(f="auto"===c.grid?0:(c.grid||[1,F])[1])){for(h=-F;h<(h=r[f++].getBoundingClientRect().left)&&f<p;);f--}for(d=y[p]=[],n=w?Math.min(f,p)*T-.5:g%f,i=w?p*x/f-.5:g/f|0,l=F,u=h=0;u<p;u++)a=u%f-n,s=i-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):V(a*a+s*s),h<o&&(h=o),o<l&&(l=o);d.max=h-l,d.min=l,d.v=p=(parseFloat(c.amount)||parseFloat(c.each)*(p<f?p-1:b?"y"===b?p/f:f:Math.max(f,p/f))||0)*("edges"===g?-1:1),d.b=p<0?v-p:v,d.u=Fa(c.amount||c.each)||0,m=m&&p<0?Dt(m):m}return p=(d[t]-d.min)/d.max||0,_(d.b+(m?m(p):p)*d.v)+d.u}}function Ma(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Fa(t))}}function Na(u,t){var h,l,e=W(u);return!e&&r(u)&&(h=e=u.radius||F,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ma(u.increment)),Da(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,n=parseFloat(l?t.x:t),i=parseFloat(l?t.y:0),a=F,s=0,o=u.length;o--;)(e=l?(e=u[o].x-n)*e+(r=u[o].y-i)*r:Math.abs(u[o]-n))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Fa(t)}:Ma(u))}function Oa(t,e,r,n){return Da(W(t)?!e:!0===r?!!(r=0):!n,function(){return W(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(n=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*n)/n})}function Sa(e,r,t){return Da(t,function(t){return e[~~r(t)]})}function Va(t){for(var e,r,n,i,a=0,s="";~(e=t.indexOf("random(",a));)n=t.indexOf(")",e),i="["===t.charAt(e+7),r=t.substr(e+7,n-e-7).match(i?it:G),s+=t.substr(a,e-a)+Oa(i?r:+r[0],+r[1],+r[2]||1e-5),a=n+1;return s+t.substr(a,t.length-a)}function Ya(t,e,r){var n,i,a,s=t.labels,o=F;for(n in s)(i=s[n]-e)<0==!!r&&i&&o>(i=Math.abs(i))&&(a=n,o=i);return a}function $a(t){return pa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function db(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Tt+.5|0}function eb(t,e){var r,n,i,a,s,o,u,h,l,f,_=t?p(t)?[t>>16,t>>8&Tt,t&Tt]:0:xt.black;if(!_){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])_=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(n=t.charAt(2))+n+(i=t.charAt(3))+i),_=[(t=parseInt(t.substr(1),16))>>16,t>>8&Tt,t&Tt];else if("hsl"===t.substr(0,3))if(_=f=t.match(G),e){if(~t.indexOf("="))return t.match(tt)}else a=+_[0]%360/360,s=_[1]/100,r=2*(o=_[2]/100)-(n=o<=.5?o*(s+1):o+s-o*s),3<_.length&&(_[3]*=1),_[0]=db(a+1/3,r,n),_[1]=db(a,r,n),_[2]=db(a-1/3,r,n);else _=t.match(G)||xt.transparent;_=_.map(Number)}return e&&!f&&(r=_[0]/Tt,n=_[1]/Tt,i=_[2]/Tt,o=((u=Math.max(r,n,i))+(h=Math.min(r,n,i)))/2,u===h?a=s=0:(l=u-h,s=.5<o?l/(2-u-h):l/(u+h),a=u===r?(n-i)/l+(n<i?6:0):u===n?(i-r)/l+2:(r-n)/l+4,a*=60),_[0]=a+.5|0,_[1]=100*s+.5|0,_[2]=100*o+.5|0),_}function fb(t,e){var r,n,i,a=(t+"").match(kt),s=0,o="";if(!a)return t;for(r=0;r<a.length;r++)n=a[r],s+=(i=t.substr(s,t.indexOf(n,s)-s)).length+n.length,3===(n=eb(n,e)).length&&n.push(1),o+=i+(e?"hsla("+n[0]+","+n[1]+"%,"+n[2]+"%,"+n[3]:"rgba("+n.join(","))+")";return o+t.substr(s)}function ib(t){var e,r=t.join(" ");kt.lastIndex=0,kt.test(r)&&(e=Ot.test(r),t[0]=fb(t[0],e),t[1]=fb(t[1],e))}function qb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,n,i={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,n=r.substr(0,e),i[s]=isNaN(n)?n.replace(At,"").trim():+n,s=r.substr(e+1).trim();return i}(e[1])]:rt.exec(t)[1].split(",").map(ea)):Pt._CE&&St.test(t)?Pt._CE("",t):r}function tb(t,e,r,n){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===n&&(n=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,a={easeIn:e,easeOut:r,easeInOut:n};return $(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[i=t.toLowerCase()]=r,a)Pt[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function ub(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function vb(r,t,e){function zk(t){return 1===t?1:n*Math.pow(2,-10*t)*H((t-a)*i)+1}var n=1<=t?t:1,i=(e||(r?.3:.45))/(t<1?t:1),a=i/z*(Math.asin(1/n)||0),s="out"===r?zk:"in"===r?function(t){return 1-zk(1-t)}:ub(zk);return i=z/i,s.config=function(t,e){return vb(r,t,e)},s}function wb(e,r){function Hk(t){return--t*t*((r+1)*t+r)+1}void 0===r&&(r=1.70158);var t="out"===e?Hk:"in"===e?function(t){return 1-Hk(1-t)}:ub(Hk);return t.config=function(t){return wb(e,t)},t}var R,i,a,h,l,f,d,c,m,g,v,y,w,b,T,x,k,O,C,P,S,A,D,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},F=1e8,B=1/F,z=2*Math.PI,I=z/4,U=0,V=Math.sqrt,Q=Math.cos,H=Math.sin,W=Array.isArray,G=/(?:-?\.?\d|\.)+/gi,tt=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,et=/[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,nt=/[\+-]=-?[\.\d]+/,it=/[#\-+\.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,pt=[],_t="onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",dt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},ct=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:N},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Ct()?W(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Ia(t)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Ia(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},wt=function mapRange(e,t,r,n,i){var a=t-e,s=n-r;return Da(i,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var n,i,a=t.vars,s=a[e];if(s)return n=a[e+"Params"],i=a.callbackScope||t,r&&ot.length&&ca(),n?s.apply(i,n):s.call(i)},Tt=255,xt={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in xt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ot=/hsl[a]?\(/,Mt=(b=Date.now,T=500,x=33,k=b(),O=k,P=C=1/60,w={time:0,frame:0,tick:function tick(){Fj(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ne,(i.gsapVersions||(i.gsapVersions=[])).push(ne.version),J(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&w.sleep(),v=y||function(t){return setTimeout(t,1e3*(P-w.time)+1|0)},m=1,Fj(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=N},lagSmoothing:function lagSmoothing(t,e){T=t||1e8,x=Math.min(e,T,0)},fps:function fps(t){C=1/(t||60),P=w.time+C},add:function add(t){S.indexOf(t)<0&&S.push(t),Ct()},remove:function remove(t){var e;~(e=S.indexOf(t))&&S.splice(e,1)},_listeners:S=[]}),Ct=function _wake(){return!m&&Mt.wake()},Pt={},St=/^[\d.\-M][\d.\-,\s]/,At=/["']/g,Dt=function _invertEase(e){return function(t){return 1-e(1-t)}},Ft=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||qb(t))||e};function Fj(e){var t,r,n=b()-O,i=!0===e;T<n&&(k+=n-x),O+=n,w.time=(O-k)/1e3,(0<(t=w.time-P)||i)&&(w.frame++,P+=t+(C<=t?.004:C-t),r=1),i||(g=v(Fj)),r&&S.forEach(function(t){return t(w.time,n,w.frame,e)})}function Yk(t){return t<D?A*t*t:t<.7272727272727273?A*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?A*(t-=2.25/2.75)*t+.9375:A*Math.pow(t-2.625/2.75,2)+.984375}$("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;tb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,tb("Elastic",vb("in"),vb("out"),vb()),A=7.5625,D=1/2.75,tb("Bounce",function(t){return 1-Yk(1-t)},Yk),tb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),tb("Circ",function(t){return-(V(1-t*t)-1)}),tb("Sine",function(t){return 1-Q(t*I)}),tb("Back",wb("in"),wb("out"),wb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,n=t+(e?0:1),i=e?1:0;return function(t){return((n*gt(0,.99999999,t)|0)+i)*r}}},E.ease=Pt["quad.out"];var zt,Rt=function GSCache(t,e){this.id=U++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:Z,this.set=e?e.getSetter:Qt},Et=((zt=Animation.prototype).delay=function delay(t){return t||0===t?(this._delay=t,this):this._delay},zt.duration=function duration(t){var e=arguments.length,r=this._repeat,n=0<r?r*((e?t:this._dur)+this._rDelay):0;return e?this.totalDuration(r<0?t:t+n):this.totalDuration()&&this._dur},zt.totalDuration=function totalDuration(t){if(!arguments.length)return this._tDur;var e=this._repeat,r=(t||this._rDelay)&&e<0;return this._tDur=r?1e12:t,this._dur=r?t:(t-e*this._rDelay)/(e+1),this._dirty=0,qa(this.parent),this},zt.totalTime=function totalTime(t,e){if(Ct(),!arguments.length)return this._tTime;var r,n=this.parent||this._dp;if(n&&n.smoothChildTiming&&this._ts){for(r=this._start,this._start=n._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts),this._end+=this._start-r,n._dirty||qa(n);n.parent;)n.parent._time!==n._start+(0<n._ts?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;this.parent||wa(this._dp,this,this._start-this._delay)}return this._tTime===t&&(this._dur||e)||(this._ts||(this._pTime=t),da(this,t,e)),this},zt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ta(this))%this._dur||(t?this._dur:0),e):this._time},zt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._tTime/this.totalDuration()},zt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ta(this),e):this.duration()?this._time/this._dur:this.ratio},zt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?ct(this._tTime,r)+1:1},zt.timeScale=function timeScale(t){return arguments.length?null!==this._pauseTS?(this._pauseTS=t,this):(this._ts=t,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(this.parent?va(this.parent._time,this):this._tTime,!0))):this._ts||this._pauseTS||0},zt.paused=function paused(t){var e=!this._ts;return arguments.length?(e!==t&&(t?(this._pauseTS=this._ts,this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(this._ts=this._pauseTS||1,this._pauseTS=null,t=this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B),this.totalTime(t,!0))),this):e},zt.startTime=function startTime(t){return arguments.length?(this.parent&&this.parent._sort&&wa(this.parent,this,t-this._delay),this):this._start},zt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},zt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?va(e.rawTime(t),this):this._tTime:this._tTime},zt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Aa(this)):this._repeat},zt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Aa(this)):this._rDelay},zt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},zt.seek=function seek(t,e){return this.totalTime(Ca(this,t),s(e))},zt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},zt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},zt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},zt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},zt.resume=function resume(){return this.paused(!1)},zt.reversed=function reversed(t){var e=this._ts||this._pauseTS||0;return arguments.length?(t!==this.reversed()&&(this[null===this._pauseTS?"_ts":"_pauseTS"]=Math.abs(e)*(t?-1:1),this.totalTime(this._tTime,!0)),this):e<0},zt.invalidate=function invalidate(){return this._initted=0,this},zt.isActive=function isActive(t){var e,r=this.parent||this._dp,n=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=n&&e<this.endTime(!0)-B))},zt.eventCallback=function eventCallback(t,e,r){var n=this.vars;return 1<arguments.length?(e?(n[t]=e,r&&(n[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete n[t],this):n[t]},zt.then=function then(t){var n=this;return new Promise(function(e){function qm(){var t=n.then;n.then=null,(r=r(n))&&(r.then||r===n)&&(n._prom=r,n.then=t),e(r),n.then=t}var r=t||fa;n._initted&&1===n.totalProgress()&&0<=n._ts||!n._tTime&&n._ts<0?qm():n._prom=qm})},zt.kill=function kill(){$a(this)},Animation);function Animation(t,e){var r=t.parent||R;this.vars=t,this._dur=this._tDur=+t.duration||0,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase,Aa(this)),this._ts=1,this.data=t.data,m||Mt.wake(),r&&wa(r,this,e||0===e?e:r._time),t.reversed&&this.reversed(!0),t.paused&&this.paused(!0)}ga(Et.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:0,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_pauseTS:null});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=s(t.smoothChildTiming),r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,n){return new Xt(t,ba(arguments,0,this),Ca(this,p(e)?n:r)),this},t.from=function from(t,e,r,n){return new Xt(t,ba(arguments,1,this),Ca(this,p(e)?n:r)),this},t.fromTo=function fromTo(t,e,r,n,i){return new Xt(t,ba(arguments,2,this),Ca(this,p(e)?i:n)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,e.repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Xt(t,e,Ca(this,r)),this},t.call=function call(t,e,r){return wa(this,Xt.delayedCall(0,t,e),Ca(this,r))},t.staggerTo=function staggerTo(t,e,r,n,i,a,s){return r.duration=e,r.stagger=r.stagger||n,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Xt(t,r,Ca(this,i)),this},t.staggerFrom=function staggerFrom(t,e,r,n,i,a,o){return r.runBackwards=1,r.immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,n,i,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,n,i,a,o,u){return n.startAt=r,n.immediateRender=s(n.immediateRender),this.staggerTo(t,e,n,i,a,o,u)},t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,p,d,c=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=m-B<t&&0<=t&&this!==R?m:t<B?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(y&&(g||(c=this._zTime),!t&&e||(this._zTime=t)),n=v,f=this._start,u=0===(l=this._ts),c!==this._time&&g&&(n+=this._time-c),this._repeat&&(d=this._yoyo,o=g+this._rDelay,(g<(n=_(v%o))||m===v)&&(n=g),(s=~~(v/o))&&s===v/o&&(n=g,s--),d&&1&s&&(n=g-n),s!==(p=ct(this._tTime,o))&&!this._lock)){var w=d&&1&p,b=w===(d&&1&s);if(s<p&&(w=!w),c=w?0:g,this._lock=1,this.render(c,e,!g)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),c!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,c=w?g+1e-4:-1e-4,this.render(c,!0)),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var n;if(e<r)for(n=t._first;n&&n._start<=r;){if(!n._dur&&"isPause"===n.data&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=r;){if(!n._dur&&"isPause"===n.data&&n._start<e)return n;n=n._prev}}(this,_(c),_(n)))&&(v-=n-(n=h._start)),this._tTime=v,this._time=n,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1),c||!n||e||bt(this,"onStart"),c<=n&&0<=t)for(i=this._first;i;){if(a=i._next,(i._act||n>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(n-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(n-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}else{i=this._last;for(var T=t<0?t:n;i;){if(a=i._prev,(i._act||T<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(T-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(T-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}}if(h&&!e&&(this.pause(),h.render(c<=n?0:-B)._zTime=c<=n?1:-1,this._ts))return this._start=f,this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(v===m||!v&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||(!n||m>=this.totalDuration())&&(!t&&g||!(v&&0<this._ts||!v&&this._ts<0)||pa(this,1),e||t<0&&!c||(bt(this,v===m?"onComplete":"onReverseComplete",!0),this._prom&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ca(this,e)),!(t instanceof Et)){if(W(t))return t.forEach(function(t){return r.add(t,e)}),qa(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Xt.delayedCall(0,t)}return this!==t?wa(this,t,e):this},t.getChildren=function getChildren(t,e,r,n){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===n&&(n=-F);for(var i=[],a=this._first;a;)a._start>=n&&(a instanceof Xt?e&&i.push(a):(r&&i.push(a),t&&i.push.apply(i,a.getChildren(!0,e,r)))),a=a._next;return i},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(oa(this,t),t===this._recent&&(this._recent=this._last),qa(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=Mt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts)),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ca(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var n=Xt.delayedCall(0,e||N,r);return n.data="isPause",this._hasPause=1,wa(this,n,Ca(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ca(this,t);e;)e._start===t&&"isPause"===e.data&&pa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var n=this.getTweensOf(t,r),i=n.length;i--;)Lt!==n[i]&&n[i].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,n=[],i=yt(t),a=this._first;a;)a instanceof Xt?!aa(a._targets,i)||e&&!a.isActive("started"===e)||n.push(a):(r=a.getTweensOf(i,e)).length&&n.push.apply(n,r),a=a._next;return n},t.tweenTo=function tweenTo(t,e){var r=this,n=Ca(r,t),i=e&&e.startAt,a=Xt.to(r,ga({ease:"none",lazy:!1,time:n,duration:Math.abs(n-(i&&"time"in i?i.time:r._time))/r.timeScale()||B,onStart:function onStart(){r.pause();var t=Math.abs(n-r._time)/r.timeScale();a._dur!==t&&(a._dur=t,a.render(a._time,!0,!0)),e&&e.onStart&&e.onStart.apply(a,e.onStartParams||[])}},e));return a},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ga({startAt:{time:Ca(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),Ya(this,Ca(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),Ya(this,Ca(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var n,i=this._first,a=this.labels;i;)i._start>=r&&(i._start+=t),i=i._next;if(e)for(n in a)a[n]>=r&&(a[n]+=t);return qa(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),qa(this)},t.totalDuration=function totalDuration(t){var e,r,n=0,i=this,a=i._last,s=F,o=i._repeat,u=o*i._rDelay||0,h=o<0;if(arguments.length)return h?i:i.timeScale(i.totalDuration()/t);if(i._dirty){for(;a;)e=a._prev,a._dirty&&a.totalDuration(),a._start>s&&i._sort&&a._ts&&!i._lock?(i._lock=1,wa(i,a,a._start-a._delay),i._lock=0):s=a._start,a._start<0&&a._ts&&(n-=a._start,(!i.parent&&!i._dp||i.parent&&i.parent.smoothChildTiming)&&(i._start+=a._start/i._ts,i._time-=a._start,i._tTime-=a._start),i.shiftChildren(-a._start,!1,-1e20),s=0),n<(r=a._end=a._start+a._tDur/Math.abs(a._ts||a._pauseTS||B))&&a._ts&&(n=_(r)),a=e;i._dur=i===R&&i._time>n?i._time:Math.min(F,n),i._tDur=h&&(i._dur||u)?1e12:Math.min(F,n*(o+1)+u),i._end=i._start+(i._tDur/Math.abs(i._ts||i._pauseTS||B)||0),i._dirty=0}return i._tDur},Timeline.updateRoot=function updateRoot(t){if(R._ts&&(da(R,va(t,R)),d=Mt.frame),Mt.frame>=ft){ft+=j.autoSleep||120;var e=R._first;if((!e||!e._ts)&&j.autoSleep&&Mt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Mt.sleep()}}},Timeline}(Et);ga(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Db(t,e,i,a,s,u){var h,l,f,p;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=qt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||W(t))return n(t)?qt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=qt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],p=h._props.length;p--;)f[h._props[p]]=l;return h}var Lt,It=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,p=t[e],_="get"!==r?r:o(p)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():p,d=o(p)?l?$t:Vt:Ut;if(n(i)&&(~i.indexOf("random(")&&(i=Va(i)),"="===i.charAt(1)&&(i=parseFloat(_)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Fa(_)||0))),_!==i)return isNaN(_+i)?(p||e in t||K(e,i),function _addComplexStringPropTween(t,e,r,n,i,a,s){var o,u,h,l,f,p,_,d,c=new ee(this._pt,t,e,0,1,Gt,null,i),m=0,g=0;for(c.b=r,c.e=n,r+="",(_=~(n+="").indexOf("random("))&&(n=Va(n)),a&&(a(d=[r,n],t,e),r=d[0],n=d[1]),u=r.match(et)||[];o=et.exec(n);)l=o[0],f=n.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(p=parseFloat(u[g-1])||0,c._pt={_next:c._pt,p:f||1===g?f:",",s:p,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-p,m:h&&h<4?Math.round:0},m=et.lastIndex);return c.c=m<n.length?n.substring(m,n.length):"",c.fp=s,(nt.test(n)||_)&&(c.e=0),this._pt=c}.call(this,t,e,_,i,d,h||j.stringFilter,l)):(f=new ee(this._pt,t,e,+_||0,i-(_||0),"boolean"==typeof p?Wt:Ht,0,d),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},Yt=function _initTween(t,e){var r,n,i,a,o,u,h,l,f,p,_,d,c=t.vars,m=c.ease,g=c.startAt,v=c.immediateRender,y=c.lazy,w=c.onUpdate,b=c.onUpdateParams,T=c.callbackScope,x=c.runBackwards,k=c.yoyoEase,O=c.keyframes,M=c.autoRevert,C=t._dur,P=t._startAt,S=t._targets,A=t.parent,D=A&&"nested"===A.data?A.parent._targets:S,F="auto"===t._overwrite,z=t.timeline;if(!z||O&&m||(m="none"),t._ease=Ft(m,E.ease),t._yEase=k?Dt(Ft(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!z){if(P&&P.render(-1,!0).kill(),g){if(pa(t._startAt=Xt.set(S,ga({data:"isStart",overwrite:!1,parent:A,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:w,onUpdateParams:b,callbackScope:T,stagger:0},g))),v)if(0<e)M||(t._startAt=0);else if(C)return}else if(x&&C)if(P)M||(t._startAt=0);else if(e&&(v=!1),pa(t._startAt=Xt.set(S,dt(ka(c,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:A}))),v){if(!e)return}else _initTween(t._startAt,B);for(r=ka(c,st),d=(l=S[t._pt=0]?Y(S[0]).harness:0)&&c[l.prop],y=C&&s(y)||y&&!C,n=0;n<S.length;n++){if(h=(o=S[n])._gsap||X(S)[n]._gsap,t._ptLookup[n]=p={},ut[h.id]&&ca(),_=D===S?n:D.indexOf(o),l&&!1!==(f=new l).init(o,d||r,t,_,D)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){p[t]=a}),f.priority&&(u=1)),!l||d)for(i in r)ht[i]&&(f=Db(i,r,t,_,o,D))?f.priority&&(u=1):p[i]=a=It.call(t,o,i,"get",r[i],_,D,0,c.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),F&&t._pt&&(Lt=t,R.killTweensOf(o,p,"started"),Lt=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!z&&!!c.runBackwards,t._onUpdate=w,t._initted=1},qt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?Va(t):t},Nt=_t+",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",jt=(Nt+",id,stagger,delay,duration,paused").split(","),Xt=function(O){function Tween(t,e,n){var i;"number"==typeof e&&(n.duration=e,e=n,n=null);var a,o,h,l,f,_,d,c,m=(i=O.call(this,function _inheritDefaults(t){var e=t.parent||R,r=t.keyframes?ha:ga;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}(e),n)||this).vars,g=m.duration,v=m.delay,y=m.immediateRender,w=m.stagger,b=m.overwrite,T=m.keyframes,x=m.defaults,k=W(t)&&p(t[0])?[t]:yt(t);if(i._targets=k.length?X(k):L("GSAP target "+t+" not found. https://greensock.com",!j.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=b,T||w||u(g)||u(v)){if(e=i.vars,(a=i.timeline=new Bt({data:"nested",defaults:x||{}})).kill(),a.parent=_assertThisInitialized(i),T)ga(a.vars.defaults,{ease:"none"}),T.forEach(function(t){return a.to(k,t,">")});else{if(l=k.length,d=w?La(w):N,r(w))for(f in w)~Nt.indexOf(f)&&((c=c||{})[f]=w[f]);for(o=0;o<l;o++){for(f in h={},e)jt.indexOf(f)<0&&(h[f]=e[f]);h.stagger=0,c&&dt(h,c),e.yoyoEase&&!e.repeat&&(h.yoyoEase=e.yoyoEase),_=k[o],h.duration=+qt(g,_assertThisInitialized(i),o,_,k),h.delay=(+qt(v,_assertThisInitialized(i),o,_,k)||0)-i._delay,!w&&1===l&&h.delay&&(i._delay=v=h.delay,i._start+=v,h.delay=0),a.to(_,h,d(o,_,k))}g=v=0}g||i.duration(g=a.duration())}else i.timeline=0;return!0===b&&(Lt=_assertThisInitialized(i),R.killTweensOf(k),Lt=0),(y||!g&&!T&&i._start===i.parent._time&&s(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(i))&&"nested"!==i.parent.data)&&(i._tTime=-B,i.render(Math.max(0,-v))),i}_inheritsLoose(Tween,O);var t=Tween.prototype;return t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,p=this._time,d=this._tDur,c=this._dur,m=d-B<t&&0<=t?d:t<B?0:t;if(c){if(m!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(n=m,l=this.timeline,this._repeat){if(s=c+this._rDelay,c<(n=_(m%s))&&(n=c),(a=~~(m/s))&&a===m/s&&(n=c,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,n=c-n),o=ct(this._tTime,s),n===p&&!r&&this._initted)return this;a!==o&&this.vars.repeatRefresh&&!this._lock&&(this._lock=r=1,this.render(s*a,!0).invalidate()._lock=0)}if(!this._initted&&xa(this,n,r,e))return this._tTime=0,this;for(this._tTime=m,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(n/c),this._from&&(this.ratio=h=1-h),p||!n||e||bt(this,"onStart"),i=this._pt;i;)i.r(h,i.d),i=i._next;l&&l.render(t<0?t:!n&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),m!==d&&m||this._tTime!==m||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&c||!(m&&0<this._ts||!m&&this._ts<0)||pa(this,1),e||t<0&&!p||(bt(this,m===d?"onComplete":"onReverseComplete",!0),this._prom&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,n){var i,a=t._zTime<0?0:1,s=e<0?0:1,o=t._rDelay,u=0;if(o&&t._repeat&&(u=gt(0,t._tDur,e),ct(u,o)!==ct(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),(t._initted||!xa(t,e,n,r))&&(s!==a||n||t._zTime===B||!e&&t._zTime)){for(t._zTime=e||(r?B:0),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,r||bt(t,"onStart"),i=t._pt;i;)i.r(s,i.d),i=i._next;!s&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,n),t._onUpdate&&!r&&bt(t,"onUpdate"),u&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(t.ratio&&pa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),O.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return $a(this);if(this.timeline)return this.timeline.killTweensOf(t,e,Lt&&!0!==Lt.vars.overwrite),this;var r,i,a,s,o,u,h,l=this._targets,f=t?yt(t):l,p=this._ptLookup,_=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,n=r===e.length;n&&r--&&t[r]===e[r];);return r<0}(l,f))return $a(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},$(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,n,i,a,s=t[0]?Y(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(n in r=dt({},e),o)if(n in r)for(i=(a=o[n].split(",")).length;i--;)r[a[i]]=r[n];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=p[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||oa(this,u,"_pt"),delete i[o]),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&_&&$a(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ba(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,n){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:n})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ba(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return R.killTweensOf(t,e,r)},Tween}(Et);ga(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),$("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var t=new Bt,e=yt(arguments);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Ob(t,e,r){return t.setAttribute(e,r)}function Wb(t,e,r,n){n.mSet(t,e,n.m.call(n.tween,r,n.mt),n)}var Ut=function _setterPlain(t,e,r){return t[e]=r},Vt=function _setterFunc(t,e,r){return t[e](r)},$t=function _setterFuncWithParam(t,e,r,n){return t[e](n.fp,r)},Qt=function _getSetter(t,e){return o(t[e])?Vt:q(t[e])&&t.setAttribute?Ob:Ut},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Wt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Gt=function _renderComplexString(t,e){var r=e._pt,n="";if(!t&&e.b)n=e.b;else if(1===t&&e.e)n=e.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+n,r=r._next;n+=e.c}e.set(e.t,e.p,n,e)},Zt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Jt=function _addPluginModifier(t,e,r,n){for(var i,a=this._pt;a;)i=a._next,a.p===n&&a.modifier(t,e,r),a=i},Kt=function _killPropTweensOf(t){for(var e,r,n=this._pt;n;)r=n._next,n.p===t&&!n.op||n.op===t?oa(this,n,"_pt"):n.dep||(e=1),n=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,n,i,a=t._pt;a;){for(e=a._next,r=n;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:i)?a._prev._next=a:n=a,(a._next=r)?r._prev=a:i=a,a=e}t._pt=n},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=Wb,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,n,i,a,s,o,u){this.t=e,this.s=n,this.c=i,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Ut,this.pr=u||0,(this._next=t)&&(t._prev=this)}$(_t+",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){st[t]=1,"on"===t.substr(0,2)&&(st[t+"Params"]=1)}),at.TweenMax=at.TweenLite=Xt,at.TimelineLite=at.TimelineMax=Bt,R=new Bt({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root"}),j.stringFilter=ib;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),n=e&&!r&&t.init?function(){this._props=[]}:t,i={init:N,render:Zt,add:It,kill:Kt,modifier:Jt,rawVars:0},a={targetTest:0,get:0,getSetter:Qt,aliases:{},register:0};if(Ct(),t!==n){if(ht[e])return;ga(n,ga(ka(t,i),a)),dt(n.prototype,dt(i,ka(t,a))),ht[n.prop=e]=n,t.targetTest&&(pt.push(n),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}M(e,n),t.register&&t.register(ne,n,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return R.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Y(i||{}).get,s=e?fa:ea;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,n){if(1<(r=yt(r)).length){var i=r.map(function(t){return ne.quickSetter(t,e,n)}),a=i.length;return function(t){for(var e=a;e--;)i[e](t)}}r=r[0]||{};var s=ht[e],o=Y(r),u=s?function(t){var e=new s;c._pt=0,e.init(r,n?t+n:t,c,0,[r]),e.render(1,e),c._pt&&Zt(1,c)}:o.set(r,e);return s?u:function(t){return u(r,e,n?t+n:t,o,1)}},isTweening:function isTweening(t){return 0<R.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Ft(t.ease,E.ease)),ja(E,t||{})},config:function config(t){return ja(j,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&L(i+" effect requires "+t+" plugin.")}),lt[i]=function(t,e){return n(yt(t),ga(e||{},a))},s&&(Bt.prototype[i]=function(t,e,n){return this.add(lt[i](t,r(e)?e:(n=e)&&{}),n)})},registerEase:function registerEase(t,e){Pt[t]=Ft(e)},parseEase:function parseEase(t,e){return arguments.length?Ft(t,e):Pt},getById:function getById(t){return R.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,n,i=new Bt(t);for(i.smoothChildTiming=s(t.smoothChildTiming),R.remove(i),i._dp=0,i._time=i._tTime=R._time,r=R._first;r;)n=r._next,!e&&!r._dur&&r instanceof Xt&&r.vars.onComplete===r._targets[0]||wa(i,r,r._start-r._delay),r=n;return wa(R,i,0),i},utils:{wrap:function wrap(e,t,r){var n=t-e;return W(e)?Sa(e,wrap(0,e.length),t):Da(r,function(t){return(n+(t-e)%n)%n+e})},wrapYoyo:function wrapYoyo(e,t,r){var n=t-e,i=2*n;return W(e)?Sa(e,wrapYoyo(0,e.length-1),t):Da(r,function(t){return e+(n<(t=(i+(t-e)%i)%i)?i-t:t)})},distribute:La,random:Oa,snap:Na,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:Fa,clamp:function clamp(e,r,t){return Da(t,function(t){return gt(e,r,t)})},splitColor:eb,toArray:yt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Fa(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),p={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(W(e)&&!W(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=dt(W(e)?[]:{},e));if(!u){for(s in r)It.call(p,e,s,"get",r[s]);a=function func(t){return Zt(t,p)||(f?e.p:e)}}}return Da(t,a)}},install:J,effects:lt,ticker:Mt,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:R,core:{PropTween:ee,globals:M,Tween:Xt,Timeline:Bt,Animation:Et,getCache:Y}};$("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=Xt[t]}),Mt.add(Bt.updateRoot),c=re.to({},{duration:0});function $b(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function ac(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},$(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,n,i,a=t._targets;for(r in e)for(n=a.length;n--;)(i=(i=t._ptLookup[n][r])&&i.d)&&(i._pt&&(i=$b(i,r)),i&&i.modifier&&i.modifier(e[r],t,a[n],r))}(t,i)}}}}var ne=re.registerPlugin({name:"attr",init:function init(t,e,r,n,i){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],n,i,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},ac("roundProps",Ma),ac("modifiers"),ac("snap",Na))||re;Xt.version=Bt.version=ne.version="3.0.5",f=1,t()&&Ct();function Mc(t,e){return e.set(e.t,e.p,~~(1e3*(e.s+e.c*t))/1e3+e.u,e)}function Nc(t,e){return e.set(e.t,e.p,1===t?e.e:~~(1e3*(e.s+e.c*t))/1e3+e.u,e)}function Oc(t,e){return e.set(e.t,e.p,t?~~(1e3*(e.s+e.c*t))/1e3+e.u:e.b,e)}function Pc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Qc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Rc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Sc(t,e,r){return t.style[e]=r}function Tc(t,e,r){return t.style.setProperty(e,r)}function Uc(t,e,r){return t._gsap[e]=r}function Vc(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Wc(t,e,r,n,i){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(i,a)}function Xc(t,e,r,n,i){var a=t._gsap;a[e]=r,a.renderTransform(i,a)}function _c(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function ad(t,e,r){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Le,"-$1").toLowerCase())||n.getPropertyValue(e)||!r&&ad(t,Ve(e)||e,1)||""}function dd(){!function _windowExists(){return"undefined"!=typeof window}()||(ie=window,ae=ie.document,se=ae.documentElement,ue=_c("div")||{style:{}},he=_c("div"),je=Ve(je),Xe=Ve(Xe),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Ve("perspective"),oe=1)}function fd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function gd(e){var r;try{r=e.getBBox()}catch(t){r=function _getBBoxHack(t){var e,r=_c("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=_getBBoxHack}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i?n.insertBefore(this,i):n.appendChild(this),se.removeChild(r),this.style.cssText=a,e}.call(e,!0)}return!r||r.width||r.x||r.y?r:{x:+fd(e,["x","cx","x1"])||0,y:+fd(e,["y","cy","y1"])||0,width:0,height:0}}function hd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!gd(t))}function id(t,e){if(e){var r=t.style;e in ze&&(e=je),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Le,"-$1").toLowerCase())):r.removeAttribute(e)}}function jd(t,e,r,n,i,a){var s=new ee(t._pt,e,r,0,1,a?Rc:Qc);return(t._pt=s).b=n,s.e=i,t._props.push(r),s}function ld(t,e,r,n){var i,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Ye.test(e),p="svg"===t.tagName.toLowerCase(),d=(p?"client":"offset")+(f?"Width":"Height"),c="px"===n;return n===h||!u||$e[n]||$e[h]?u:(o=t.getCTM&&hd(t),"%"===n&&ze[e]?_(u/(o?t.getBBox()[f?"width":"height"]:t[d])*100):(l[f?"width":"height"]=100+(c?h:n),a="em"===n&&t.appendChild&&!p?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&"%"===n&&s.width&&f&&s.time===Mt.time?_(u/s.width*100):(a.appendChild(ue),i=ue[d],a.removeChild(ue),f&&"%"===n&&((s=Y(a)).time=Mt.time,s.width=a[d]),_(c?i*u/100:100/i*u))))}function md(t,e,r,n){var i;return oe||dd(),e in Ne&&"transform"!==e&&~(e=Ne[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(i=Ze(t,n),i="transformOrigin"!==e?i[e]:Je(ad(t,Xe))+i.zOrigin+"px"):(i=t.style[e])&&"auto"!==i&&!n&&!~(i+"").indexOf("calc(")||(i=ad(t,e)||Z(t,e)||("opacity"===e?1:0)),r?ld(t,e,i,r)+r:i}function nd(t,e,r,n){var i,a,s,o,u,h,l,f,p,_,d,c,m=new ee(this._pt,t.style,e,0,1,Gt),g=0,v=0;if(m.b=r,m.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=ad(t,e)||n,t.style[e]=r),ib(i=[r,n]),n=i[1],!!(h=(r=i[0]).indexOf("rgba("))!=!!(l=n.indexOf("rgba("))&&(h?r=r.substr(h)+" "+r.substr(0,h-1):n=n.substr(l)+" "+n.substr(0,l-1)),s=r.match(Ie)||[],(n.match(Ie)||[]).length){for(;a=Ie.exec(n);)l=a[0],p=n.substring(g,a.index),u?u=(u+1)%5:"rgba("===p.substr(-5)&&(u=1),l!==(h=s[v++]||"")&&(o=parseFloat(h)||0,d=h.substr((o+"").length),(c="="===l.charAt(1)?+(l.charAt(0)+"1"):0)&&(l=l.substr(2)),f=parseFloat(l),_=l.substr((f+"").length),g=Ie.lastIndex-_.length,_||(_=_||j.units[e]||d,g===n.length&&(n+=_,m.e+=_)),d!==_&&(o=ld(t,e,h,_)||0),m._pt={_next:m._pt,p:p||1===v?p:",",s:o,c:c?c*f:f-o,m:u&&u<4?Math.round:0});m.c=g<n.length?n.substring(g,n.length):""}else m.r="display"===e&&"none"===n?Rc:Qc;return nt.test(n)&&(m.e=0),this._pt=m}function pd(t){var e=t.split(" "),r=e[0],n=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==n&&"right"!==n||(t=r,r=n,n=t),e[0]=Qe[r]||r,e[1]=Qe[n]||n,e.join(" ")}function qd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,i,a=e.t,s=a.style,o=e.u;if("all"===o||!0===o)s.cssText="",n=1;else for(i=(o=o.split(",")).length;-1<--i;)r=o[i],ze[r]&&(n=1,r="transformOrigin"===r?Xe:je),id(a,r);n&&(id(a,je),(n=a._gsap)&&(n.svg&&a.removeAttribute("transform"),Ze(a,1)))}}function ud(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function vd(t){var e=ad(t,je);return ud(e)?We:e.substr(7).match(tt).map(_)}function wd(t,e){var r,n,i,a,s=t._gsap,o=t.style,u=vd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?We:u:(u!==We||t.offsetParent||t===se||s.svg||(i=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextSibling,se.appendChild(t)),u=vd(t),i?o.display=i:id(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function xd(t,e,r,n,i,a){var s,o,u,h=t._gsap,l=i||wd(t,!0),f=h.xOrigin||0,p=h.yOrigin||0,_=h.xOffset||0,d=h.yOffset||0,c=l[0],m=l[1],g=l[2],v=l[3],y=l[4],w=l[5],b=e.split(" "),T=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==We&&(o=c*v-m*g)&&(u=T*(-m/o)+x*(c/o)-(c*w-m*y)/o,T=T*(v/o)+x*(-g/o)+(g*w-v*y)/o,x=u):(T=(s=gd(t)).x+(~b[0].indexOf("%")?T/100*s.width:T),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),n||!1!==n&&h.smooth?(y=T-f,w=x-p,h.xOffset=_+(y*c+w*g)-y,h.yOffset=d+(y*m+w*v)-w):h.xOffset=h.yOffset=0,h.xOrigin=T,h.yOrigin=x,h.smooth=!!n,h.origin=e,h.originIsAbsolute=!!r,t.style[Xe]="0px 0px",a&&(jd(a,h,"xOrigin",f,T),jd(a,h,"yOrigin",p,x),jd(a,h,"xOffset",_,h.xOffset),jd(a,h,"yOffset",d,h.yOffset))}function Ad(t,e,r){var n=Fa(e);return _(parseFloat(e)+parseFloat(ld(t,"x",r+"px",n)))+n}function Hd(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Re:1),p=s?f*s:f-i,_=i+p+"deg";return l&&("short"===(o=a.split("_")[1])&&(p%=h)!==p%180&&(p+=p<0?h:-h),"cw"===o&&p<0?p=(p+36e9)%h-~~(p/h)*h:"ccw"===o&&0<p&&(p=(p-36e9)%h-~~(p/h)*h)),t._pt=u=new ee(t._pt,e,r,i,p,Nc),u.e=_,u.u="deg",t._props.push(r),u}function Id(t,e,r){var n,i,a,s,o,u,h,l=he.style,f=r._gsap;for(i in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[je]=e,ae.body.appendChild(he),n=Ze(he,1),ze)(a=f[i])!==(s=n[i])&&"perspective"!==i&&(o=Fa(a)!==(h=Fa(s))?ld(r,i,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,i,o,u-o,Mc),t._pt.u=h,t._props.push(i));ae.body.removeChild(he)}var ie,ae,se,oe,ue,he,le,fe,pe,_e,de,ce=Pt.Power0,me=Pt.Power1,ge=Pt.Power2,ve=Pt.Power3,ye=Pt.Power4,we=Pt.Linear,be=Pt.Quad,Te=Pt.Cubic,xe=Pt.Quart,ke=Pt.Quint,Oe=Pt.Strong,Me=Pt.Elastic,Ce=Pt.Back,Pe=Pt.SteppedEase,Se=Pt.Bounce,Ae=Pt.Sine,De=Pt.Expo,Fe=Pt.Circ,ze={},Re=180/Math.PI,Ee=Math.PI/180,Be=Math.atan2,Le=/([A-Z])/g,Ie=/[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,Ye=/(?:left|right|width|margin|padding|x)/i,qe=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},je="transform",Xe=je+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),Ve=function _checkPropPrefix(t,e){var r=(e||ue).style,n=5;if(t in r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in r););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},$e={deg:1,rad:1,turn:1},Qe={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},He={clearProps:function clearProps(t,e,r,n,i){if("isFromStart"!==i.data){var a=t._pt=new ee(t._pt,e,r,0,0,qd);return a.u=n,a.pr=-10,a.tween=i,t._props.push(r),1}}},We=[1,0,0,1,0,0],Ge={},Ze=function _parseTransform(t,e){var r=t._gsap||new Rt(t);if("x"in r&&!e&&!r.uncache)return r;var n,i,a,s,o,u,h,l,f,p,d,c,m,g,v,y,w,b,T,x,k,O,M,C,P,S,A,D,F,z,R=t.style,E=r.scaleX<0,B=r.xOrigin||0,L=r.yOrigin||0,I="deg",Y=ad(t,Xe)||"0";return n=i=a=u=h=l=f=p=d=0,s=o=1,r.svg=!(!t.getCTM||!hd(t)),c=wd(t,r.svg),r.svg&&xd(t,Y,r.originIsAbsolute,!1!==r.smooth,c),c!==We&&(y=c[0],w=c[1],b=c[2],T=c[3],n=x=c[4],i=k=c[5],6===c.length?(s=Math.sqrt(y*y+w*w),o=Math.sqrt(T*T+b*b),u=y||w?Be(w,y)*Re:0,f=b||T?Be(b,T)*Re+u:0,r.svg&&(n-=B-(B*y+L*b),i-=L-(B*w+L*T))):(z=c[6],D=c[7],P=c[8],S=c[9],A=c[10],F=c[11],n=c[12],i=c[13],a=c[14],h=(m=Be(z,A))*Re,m&&(O=x*(g=Math.cos(-m))+P*(v=Math.sin(-m)),M=k*g+S*v,C=z*g+A*v,P=x*-v+P*g,S=k*-v+S*g,A=z*-v+A*g,F=D*-v+F*g,x=O,k=M,z=C),l=(m=Be(-b,A))*Re,m&&(g=Math.cos(-m),F=T*(v=Math.sin(-m))+F*g,y=O=y*g-P*v,w=M=w*g-S*v,b=C=b*g-A*v),u=(m=Be(w,y))*Re,m&&(O=y*(g=Math.cos(m))+w*(v=Math.sin(m)),M=x*g+k*v,w=w*g-y*v,k=k*g-x*v,y=O,x=M),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=_(Math.sqrt(y*y+w*w+b*b)),o=_(Math.sqrt(k*k+z*z)),m=Be(x,k),f=2e-4<Math.abs(m)?m*Re:0,d=F?1/(F<0?-F:F):0),r.svg&&(c=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ud(ad(t,je)),c&&t.setAttribute("transform",c))),90<Math.abs(f)&&Math.abs(f)<270&&(E?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=n&&Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)?0:n)+"px",r.y=((r.yPercent=i&&Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)?0:i)+"px",r.z=a+"px",r.scaleX=_(s),r.scaleY=_(o),r.rotation=_(u)+I,r.rotationX=_(h)+I,r.rotationY=_(l)+I,r.skewX=f+I,r.skewY=p+I,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(R[Xe]=Je(Y)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?ir:fe?nr:Ke,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ke=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nr(t,e)},tr="0deg",er="0px",rr=") ",nr=function _renderCSSTransforms(t,e){var r=e||this,n=r.xPercent,i=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,p=r.skewY,_=r.scaleX,d=r.scaleY,c=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",w="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==tr||h!==tr)){var b,T=parseFloat(h)*Ee,x=Math.sin(T),k=Math.cos(T);T=parseFloat(l)*Ee,b=Math.cos(T),a=Ad(g,a,x*b*-v),s=Ad(g,s,-Math.sin(T)*-v),o=Ad(g,o,k*b*-v+v)}(n||i)&&(y="translate("+n+"%, "+i+"%) "),!w&&a===er&&s===er&&o===er||(y+=o!==er||w?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+rr),c!==er&&(y+="perspective("+c+rr),u!==tr&&(y+="rotate("+u+rr),h!==tr&&(y+="rotateY("+h+rr),l!==tr&&(y+="rotateX("+l+rr),f===tr&&p===tr||(y+="skew("+f+", "+p+rr),1===_&&1===d||(y+="scale("+_+", "+d+rr),g.style[je]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,n,i,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,p=o.rotation,d=o.skewX,c=o.skewY,m=o.scaleX,g=o.scaleY,v=o.target,y=o.xOrigin,w=o.yOrigin,b=o.xOffset,T=o.yOffset,x=o.forceCSS,k=parseFloat(l),O=parseFloat(f);p=parseFloat(p),d=parseFloat(d),(c=parseFloat(c))&&(d+=c=parseFloat(c),p+=c),p||d?(p*=Ee,d*=Ee,r=Math.cos(p)*m,n=Math.sin(p)*m,i=Math.sin(p-d)*-g,a=Math.cos(p-d)*g,d&&(c*=Ee,s=Math.tan(d-c),i*=s=Math.sqrt(1+s*s),a*=s,c&&(s=Math.tan(c),r*=s=Math.sqrt(1+s*s),n*=s)),r=_(r),n=_(n),i=_(i),a=_(a)):(r=m,a=g,n=i=0),(k&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(k=ld(v,"x",l,"px"),O=ld(v,"y",f,"px")),(y||w||b||T)&&(k=_(k+y-(y*r+w*i)+b),O=_(O+w-(y*n+w*a)+T)),(u||h)&&(s=v.getBBox(),k=_(k+u/100*s.width),O=_(O+h/100*s.height)),s="matrix("+r+","+n+","+i+","+a+","+k+","+O+")",v.setAttribute("transform",s),x&&(v.style[je]=s)},ar={name:"css",register:dd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,n,i){var a,s,o,u,h,l,f,p,_,d,c,m,g,v,y,w=this._props,b=t.style;for(f in oe||dd(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Db(f,e,r,n,t,i)))if(l=He[f],"function"===(h=typeof s)&&(h=typeof(s=s.call(r,n,t,i))),"string"===h&&~s.indexOf("random(")&&(s=Va(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",n,i,0,0,f);else{if(a=md(t,f),u=parseFloat(a),(d="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Ne&&("autoAlpha"===f&&(1===u&&"hidden"===md(t,"visibility")&&o&&(u=0),jd(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Ne[f]).indexOf(",")&&(f=f.split(",")[0])),c=f in ze)if(m||(g=t._gsap,v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,b,je,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,d?d*o:o-g.scaleY),w.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=pd(s),g.svg?xd(t,s,0,v,0,this):((_=parseFloat(s.split(" ")[2]))!==g.zOrigin&&jd(this,g,"zOrigin",g.zOrigin,_),jd(this,b,f,Je(a),Je(s)));continue}if("svgOrigin"===f){xd(t,s,1,v,0,this);continue}if(f in Ge){Hd(this,g,f,u,s,d);continue}if("smoothOrigin"===f){jd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Id(this,s,t);continue}}else f in b||(f=Ve(f)||f);if(c||(o||0===o)&&(u||0===u)&&!qe.test(s)&&f in b)(p=(a+"").substr((u+"").length))!==(_=(s+"").substr((o+"").length)||(f in j.units?j.units[f]:p))&&(u=ld(t,f,a,_)),this._pt=new ee(this._pt,c?g:b,f,u,d?d*o:o-u,"px"!==_||!1===e.autoRound||c?Mc:Pc),this._pt.u=_||0,p!==_&&(this._pt.b=a,this._pt.r=Oc);else if(f in b)nd.call(this,t,f,a,s);else{if(!(f in t)){K(f,s);continue}this.add(t,f,t[f],s,n,i)}w.push(f)}y&&te(this)},get:md,aliases:Ne,getSetter:function getSetter(t,e,r){return e in ze&&e!==Xe&&(t._gsap.x||md(t,"x"))?r&&le===r?"scale"===e?Vc:Uc:(le=r||{})&&("scale"===e?Wc:Xc):t.style&&!q(t.style[e])?Sc:~e.indexOf("-")?Tc:Qt(t,e)}};ne.utils.checkPrefix=Ve,de=$((pe="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(_e="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),$(_e,function(t){j.units[t]="deg",Ge[t]=1}),Ne[de[13]]=pe+","+_e,$("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ne[e[1]]=de[e[0]]}),$("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),ne.registerPlugin(ar);var sr=ne.registerPlugin(ar)||ne;e.Back=Ce,e.Bounce=Se,e.CSSPlugin=ar,e.Circ=Fe,e.Cubic=Te,e.Elastic=Me,e.Expo=De,e.Linear=we,e.Power0=ce,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=be,e.Quart=xe,e.Quint=ke,e.Sine=Ae,e.SteppedEase=Pe,e.Strong=Oe,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Xt,e.TweenMax=Xt,e.default=sr,e.gsap=sr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
//# sourceMappingURL=gsap.min.js.map

/*!
 * ScrollToPlugin 3.0.5
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function k(){return"undefined"!=typeof window}function l(){return e||k()&&(e=window.gsap)&&e.registerPlugin&&e}function m(t){return"string"==typeof t}function n(t,e){var o="x"===e?"Width":"Height",n="scroll"+o,r="client"+o;return t===x||t===s||t===f?Math.max(s[n],f[n])-(x["inner"+o]||s[r]||f[r]):t[n]-t["offset"+o]}function o(t,e){var o="scroll"+("x"===e?"Left":"Top");return t===x&&(null!=t.pageXOffset?o="page"+e.toUpperCase()+"Offset":t=null!=s[o]?s:f),function(){return t[o]}}function p(t,e){var n=a(t)[0].getBoundingClientRect(),r=!e||e===x||e===f,i=r?{top:s.clientTop-(x.pageYOffset||s.scrollTop||f.scrollTop||0),left:s.clientLeft-(x.pageXOffset||s.scrollLeft||f.scrollLeft||0)}:e.getBoundingClientRect(),l={x:n.left-i.left,y:n.top-i.top};return!r&&e&&(l.x+=o(e,"x")(),l.y+=o(e,"y")()),l}function q(t,e,o,r){return isNaN(t)?m(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+r:"max"===t?n(e,o):Math.min(n(e,o),p(t,e)[o]):parseFloat(t)}function r(){e=l(),k()&&e&&document.body&&(x=window,f=document.body,s=document.documentElement,a=e.utils.toArray,e.config({autoKillThreshold:7}),g=e.config(),u=1)}var e,u,x,s,f,a,g,i={version:"3.0.5",name:"scrollTo",rawVars:1,register:function register(t){e=t,r()},init:function init(t,e,n,i,l){u||r();var s=this;s.isWin=t===x,s.target=t,s.tween=n,"object"!=typeof e?m((e={y:e}).y)&&"max"!==e.y&&"="!==e.y.charAt(1)&&(e.x=e.y):e.nodeType&&(e={y:e,x:e}),s.vars=e,s.autoKill=!!e.autoKill,s.getX=o(t,"x"),s.getY=o(t,"y"),s.x=s.xPrev=s.getX(),s.y=s.yPrev=s.getY(),null!=e.x?(s.add(s,"x",s.x,q(e.x,t,"x",s.x)-(e.offsetX||0),i,l,Math.round),s._props.push("scrollTo_x")):s.skipX=1,null!=e.y?(s.add(s,"y",s.y,q(e.y,t,"y",s.y)-(e.offsetY||0),i,l,Math.round),s._props.push("scrollTo_y")):s.skipY=1},render:function render(t,e){for(var o,r,i,l,s,u=e._pt,f=e.target,p=e.tween,a=e.autoKill,c=e.xPrev,y=e.yPrev,d=e.isWin;u;)u.r(t,u.d),u=u._next;o=d||!e.skipX?e.getX():c,i=(r=d||!e.skipY?e.getY():y)-y,l=o-c,s=g.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),a&&(!e.skipX&&(s<l||l<-s)&&o<n(f,"x")&&(e.skipX=1),!e.skipY&&(s<i||i<-s)&&r<n(f,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(p.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(p,e.vars.onAutoKillParams||[]))),d?x.scrollTo(e.skipX?o:e.x,e.skipY?r:e.y):(e.skipY||(f.scrollTop=e.y),e.skipX||(f.scrollLeft=e.x)),e.xPrev=e.x,e.yPrev=e.y},kill:function kill(t){var e="scrollTo"===t;!e&&"scrollTo_x"!==t||(this.skipX=1),!e&&"scrollTo_y"!==t||(this.skipY=1)}};i.max=n,i.getOffset=p,i.buildGetter=o,l()&&e.registerPlugin(i),t.ScrollToPlugin=i,t.default=i;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});
//# sourceMappingURL=ScrollToPlugin.min.js.map

/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/cell',[
      'get-size/get-size'
    ], function( getSize ) {
      return factory( window, getSize );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {



function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-hidden', 'true' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.unselect();
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

proto.select = function() {
  this.element.classList.add('is-selected');
  this.element.removeAttribute('aria-hidden');
};

proto.unselect = function() {
  this.element.classList.remove('is-selected');
  this.element.setAttribute( 'aria-hidden', 'true' );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));

// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/slide',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.cells.forEach( function( cell ) {
    cell.select();
  });
};

proto.unselect = function() {
  this.cells.forEach( function( cell ) {
    cell.unselect();
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));

// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/animate',[
      'fizzy-ui-utils/utils'
    ], function( utils ) {
      return factory( window, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils ) {



// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  this.setTranslateX( x, this.isAnimating );
  this.dispatchScrollEvent();
};

proto.setTranslateX = function( x, is3d ) {
  x += this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var translateX = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = is3d ?
    'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
};

proto.dispatchScrollEvent = function() {
  var firstSlide = this.slides[0];
  if ( !firstSlide ) {
    return;
  }
  var positionX = -this.x - firstSlide.target;
  var progress = positionX / this.slidesWidth;
  this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));

// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/flickity',[
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './slide',
      './animate'
    ], function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {



// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');
  this.selectInitialIndex();
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
proto._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

proto.selectInitialIndex = function() {
  var initialIndex = this.options.initialIndex;
  // already activated, select previous selectedIndex
  if ( this.isInitActivated ) {
    this.select( this.selectedIndex, false, true );
    return;
  }
  // select with selector string
  if ( initialIndex && typeof initialIndex == 'string' ) {
    var cell = this.queryCell( initialIndex );
    if ( cell ) {
      this.selectCell( initialIndex, false, true );
      return;
    }
  }

  var index = 0;
  // select with number
  if ( initialIndex && this.slides[ initialIndex ] ) {
    index = initialIndex;
  }
  // select instantly
  this.select( index, false, true );
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // do not select invalid selectors from hash: #123, #/. #791
    if ( selector.match(/^[#\.]?[\d\/]/) ) {
      return;
    }
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

// keep focus on element when child UI elements are clicked
proto.childUIPointerDown = function( event ) {
  // HACK iOS does not allow touch events to bubble up?!
  if ( event.type != 'touchstart' ) {
    event.preventDefault();
  }
  this.focus();
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.allOff();
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;
Flickity.Slide = Slide;

return Flickity;

}));

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unipointer/unipointer',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {



function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));

/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unidragger/unidragger',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  this.pointerDownPointer = pointer;

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));

// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/drag',[
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils ) {



// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'deactivate', this.onDeactivateDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
  this.pointerDownPointer = {
    pageX: pointer.pageX,
    pageY: pointer.pageY,
  };
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x = moveVector.x % this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));

// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/prev-next-button',[
      './flickity',
      'unipointer/unipointer',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unipointer'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.Unipointer,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unipointer, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( Unipointer.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindStartEvent( this.element );
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // click events
  this.unbindStartEvent( this.element );
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
  this.allOff();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));

// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/page-dots',[
      './flickity',
      'unipointer/unipointer',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unipointer'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.Unipointer,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unipointer, utils ) {

// -------------------------- PageDots -------------------------- //



function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = Object.create( Unipointer.prototype );

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.handleClick = this.onClick.bind( this );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.holder.addEventListener( 'click', this.handleClick );
  this.bindStartEvent( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  this.holder.removeEventListener( 'click', this.handleClick );
  this.unbindStartEvent( this.holder );
  // remove from DOM
  this.parent.element.removeChild( this.holder );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = // old method name, backwards-compatible
PageDots.prototype.onClick = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
  this.allOff();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));

// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/player',[
      'ev-emitter/ev-emitter',
      'fizzy-ui-utils/utils',
      './flickity'
    ], function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils, Flickity ) {



// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));

// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/add-remove-cell',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {



// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

}));

// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/lazyload',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));

/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/index',[
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});

/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity-as-nav-for/as-nav-for',[
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Flickity, utils ) {



// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

Flickity.createMethods.push('_createAsNavFor');

var proto = Flickity.prototype;

proto._createAsNavFor = function() {
  this.on( 'activate', this.activateAsNavFor );
  this.on( 'deactivate', this.deactivateAsNavFor );
  this.on( 'destroy', this.destroyAsNavFor );

  var asNavForOption = this.options.asNavFor;
  if ( !asNavForOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initNavCompanion() {
    _this.setNavCompanion( asNavForOption );
  });
};

proto.setNavCompanion = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  // stop if no companion or companion is self
  if ( !companion || companion == this ) {
    return;
  }

  this.navCompanion = companion;
  // companion select
  var _this = this;
  this.onNavCompanionSelect = function() {
    _this.navCompanionSelect();
  };
  companion.on( 'select', this.onNavCompanionSelect );
  // click
  this.on( 'staticClick', this.onNavStaticClick );

  this.navCompanionSelect( true );
};

proto.navCompanionSelect = function( isInstant ) {
  // wait for companion & selectedCells first. #8
  var companionCells = this.navCompanion && this.navCompanion.selectedCells;
  if ( !companionCells ) {
    return;
  }
  // select slide that matches first cell of slide
  var selectedCell = companionCells[0];
  var firstIndex = this.navCompanion.cells.indexOf( selectedCell );
  var lastIndex = firstIndex + companionCells.length - 1;
  var selectIndex = Math.floor( lerp( firstIndex, lastIndex,
    this.navCompanion.cellAlign ) );
  this.selectCell( selectIndex, false, isInstant );
  // set nav selected class
  this.removeNavSelectedElements();
  // stop if companion has more cells than this one
  if ( selectIndex >= this.cells.length ) {
    return;
  }

  var selectedCells = this.cells.slice( firstIndex, lastIndex + 1 );
  this.navSelectedElements = selectedCells.map( function( cell ) {
    return cell.element;
  });
  this.changeNavSelectedClass('add');
};

function lerp( a, b, t ) {
  return ( b - a ) * t + a;
}

proto.changeNavSelectedClass = function( method ) {
  this.navSelectedElements.forEach( function( navElem ) {
    navElem.classList[ method ]('is-nav-selected');
  });
};

proto.activateAsNavFor = function() {
  this.navCompanionSelect( true );
};

proto.removeNavSelectedElements = function() {
  if ( !this.navSelectedElements ) {
    return;
  }
  this.changeNavSelectedClass('remove');
  delete this.navSelectedElements;
};

proto.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    this.navCompanion.selectCell( cellIndex );
  }
};

proto.deactivateAsNavFor = function() {
  this.removeNavSelectedElements();
};

proto.destroyAsNavFor = function() {
  if ( !this.navCompanion ) {
    return;
  }
  this.navCompanion.off( 'select', this.onNavCompanionSelect );
  this.off( 'staticClick', this.onNavStaticClick );
  delete this.navCompanion;
};

// -----  ----- //

return Flickity;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'imagesloaded/imagesloaded',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

var proto = Flickity.prototype;

proto._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

proto.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
    if ( !_this.options.freeScroll ) {
      _this.positionSliderAtSelected();
    }
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));


(function bcScriptsWrap() {
	/* The scripts object */
	const $bc = (function bigCatScripts() {
		/* Utility functions */
		/* 
			Tests is a selector is a String or DOM Node, retunrs the selected Node if it can
			Returns false otherwise
			*/
		function _getDOMNode(selector) {
			let $el = null;
			if (typeof selector === 'string') {
				if (document.querySelector(selector) === null) {
					return false;
				}
				$el = document.querySelector(selector);
				return $el ;
			} else if (selector instanceof Node) {
				$el = selector;
				return $el;
			} else {
				return false;
			}
		}//_getOMNode() 
		/* 
			Tests will a string selector will return a DOM Node, retunrs an array of Nodes if it can
			Returns false otherwise
			*/
		function _getAllDOMNodes(selector) {
			let $els = null;
			if (typeof selector === 'string') {
				if (document.querySelectorAll(selector) === null) {
					return false;
				}
				$els = document.querySelectorAll(selector);
				return $els ;
			} else {
				return false;
			}
		}//_getAllDOMNodes()
		/* API functions */
		/** 
			Get the offsets for an element relative to the viewport
			*/
		function getOffset($el = document) {
			const elRect = $el.getBoundingClientRect();
			const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: elRect.top + scrollTop, left: elRect.left + scrollLeft };
		}
		/**
			Add and remove classes
			el:  					DOM element: class toggle target 
			className: 		String: active class to toggle
			callback: 		Callback function, get the el and the className on success
			*/
		function toggleClass(el, classname, callback) {
			if ((el !== undefined && el instanceof Node) && (classname !== undefined && typeof classname === 'string')) {
				el.classList.toggle(classname);
				if (typeof callback == 'function') {
					callback(el, classname);
				}
			} else {
				throw new Error('Function classToggle requires: a HTML Node and a class name of type String');
			}
		}//toggleClass()
		/**
			Select siblings - select the direct next siblings of an element filtered by a classname
			Returns an array of HTMLElements if there is no callback
			el:  					DOM element: find this element's siblings filtered by an optional class 
			className: 		String: Class to filter the list of siblings
			callback: 		Gets the array of matching siblings
			*/
		function selectSiblings(el, classname, callback) {
			if ((el !== undefined && el instanceof Node) && (classname !== undefined && typeof classname === 'string')) {
				let allSiblings = Array.from(el.parentNode.childNodes);
				let matchingSiblings = allSiblings.filter((sibling) => {
					if (classname){
						return (sibling.tagName !== undefined && sibling.classList.contains(classname)) ? sibling : false;		
					} else {
						return (sibling.tagName !== undefined) ? sibling : false;	
					}
				});
				if (callback !== undefined && typeof callback == 'function') {
					callback(matchingSiblings);
				} else {
					return matchingSiblings; 
				}
			} else {
				throw new Error('Function selectSiblings requires: a HTML Node and a class name of type String');
			}
		}//selectSiblings()
		/* Check if an element is within the viewport on scroll */
		function isScrollVisible($el, threshold = '50%'){
			console.log(threshold);
		}//isScrollVisible
		/* 
			Remove width and height from iframes
			@arg iframeParents, String selector for the iframe parent or an array of String selector parents
		*/
		function makeResponsiveiFrames(iframeParents) {
			iframeParents = Array.from(document.querySelectorAll(iframeParents));
			if (iframeParents.length > 0) {
				for (let parent in iframeParents) {
					let iframes = Array.from(iframeParents[parent].getElementsByTagName(`iframe`));
					for (let iframe in iframes) {
						iframes[iframe].removeAttribute('width');	
						iframes[iframe].removeAttribute('height'); 	
					}
					iframeParents[parent].classList.remove('is-not-loaded');
				}	
					
			}
			return;
		}//makeResponsiveiFrames
	
		/* Slides an element up or down by transitioning the height */
		/* 
				On click some element, call this
				Show/hide the target element based on the presence or not of the active class
				Add or remove the active class
		*/
		function showHide(el, activeClass) {
			//let startTime = Date.now();
			function _lerpShowHide($el, currentHeight, targetHeight) {
				if (Math.round(targetHeight) > Math.round(currentHeight)) {
					//Show
					currentHeight += (targetHeight - currentHeight) * 0.25;
					requestAnimationFrame(() => {
						$el.style.height = currentHeight + 'px';
						_lerpShowHide($el, currentHeight, targetHeight);
					});
				} else if (Math.round(currentHeight) > Math.round(targetHeight)) {
					//Hide
					if (currentHeight < 2) {
						requestAnimationFrame(() => {
							$el.style.height = 0 + 'px';
						});	
						
						return ;
					}
					currentHeight -= (currentHeight - targetHeight) * 0.25;
					$el.style.height = currentHeight + 'px';
					requestAnimationFrame(() => {
						$el.style.height = currentHeight + 'px';
						_lerpShowHide($el, currentHeight, targetHeight);
					});
				} else {
					
					return ;
				}
			}//_lerpShowHide()
			let $el = null;
			try {
				$el = _getDOMNode(el);	
				
			} catch (err) {
				return console.log(err);
			}
			if ($el.classList.contains(activeClass)) {
				const elHeight = $el.scrollHeight;
				const elTransitions = $el.style.transition;
				$el.style.transition = '';
				requestAnimationFrame(() => {
					$el.style.height = elHeight + 'px';
					$el.style.transition = elTransitions;
					_lerpShowHide($el, elHeight, 0); 
					$el.classList.remove(activeClass);
				});
			} else {
				//show
				const elHeight = $el.scrollHeight;
				requestAnimationFrame(() => {
					_lerpShowHide($el, $el.clientHeight, elHeight) ;
					$el.style.height = null;
					$el.classList.add(activeClass);
					$el.addEventListener('transitionend', () => {
						$el.removeEventListener('transitionend', arguments.callee);
					});
				});
			}
		}//showHide()
		/* 
			Wrapper functions for gsap https://greensock.com/
		*/
		const $gsap = gsap;
		function gsapScrollTo(targetScrollOptions, $el, cb) {
			$el = $el || window;
			$gsap.registerPlugin(ScrollToPlugin); 
			const scrollOptions =  Object.assign({
				scrollTo: {x: 0, y: 0}, 
				duration: 1, 
				ease: 'power1.in'
			}, targetScrollOptions);
			const scrollToTween = $gsap.to($el, scrollOptions).pause();
			if (typeof cb === 'function') {
				scrollToTween.eventCallback('onComplete', cb);
				scrollToTween.play();
			} else {
				scrollToTween.play();	
			}
			
		}
		function gsapFadeIn($el, targetFadeInOpts, cb) {
			if ($el) {
				const fadeInOptions = Object.assign({
					duration: 0.82,
					opacity: 1,
					y: 0
				}, targetFadeInOpts);
				$gsap.to($el, fadeInOptions);
			} else {
				return new Error(`gsapFadeIn requries a target DOMNode`);
			}
			if (typeof cb === 'function') {
				cb($el);
			}
		}
		function gsapShowHide($el, GSAPOptions, cb) {
			if ($el) {
				const opts = Object.assign({
					duration: 0.482,
					ease: 'power1.out'	
				}, GSAPOptions);
				opts.height = ($el.scrollHeight < opts.height) ? opts.height : '0px';
				$gsap.to($el, opts).eventCallback('onComplete', cb, [$el]);
				
			} else {
				return new Error(`gsapFadeIn requries a target DOMNode`);
			}
		}
		function gsapShow($el, height, GSAPOptions, cb) {
			if ($el) {
				const opts = Object.assign({
					duration: 0.482,
					ease: 'power1.out'	
				}, GSAPOptions);
				
				opts.height = height;
				$gsap.to($el, opts).eventCallback('onComplete', cb, [$el]);
				
			} else {
				return new Error(`gsapShow requries a target DOMNode`);
			}
		}
		function gsapHide($el, GSAPOptions, cb) {
			if ($el) {
				const opts = Object.assign({
					duration: 0.482,
					ease: 'power1.out'	
				}, GSAPOptions);
				opts.height = 0;
				$gsap.to($el, opts).eventCallback('onComplete', cb, [$el]);
			} else {
				return new Error(`gsapHide requries a target DOMNode`);
			}
		}
		/* 
			Interface 
		*/
		return {
			toggleClass: toggleClass,
			selectSiblings: selectSiblings,
			responsiveiFrames: makeResponsiveiFrames,
			getElOffset: getOffset,
			showHide: showHide,
			isScrollVisible: isScrollVisible,
			gsap: $gsap,
			gsapFns: {
				scrollTo: gsapScrollTo,
				fadeIn: gsapFadeIn,
				showHide: gsapShowHide,
				show: gsapShow,
				hide: gsapHide
			},
			utils: {
				getDomNode: _getDOMNode,
				getDomNodes: _getAllDOMNodes,
			}
		};
	})();	//bigCatScripts()()
	
	/*** Project scripts ***/
	window.onload = () => {
		
		/* Making iFrames responsive */
		$bc.responsiveiFrames('.bc-responsive-embed'); 
		
		/* All feature content components - used through */
		const $pageFeatures = (document.querySelectorAll('.bc-hero, .bc-feature-component').length > 0) ? document.querySelectorAll('.bc-hero, .bc-feature-component') : null;
		/*
			** Navigation components **
		*/
		/** Make nav icons **/
		function navTogglersFactory($navigationToggler, opts, cb) {
			//The SVG icon
			const $menuIcon = $navigationToggler.querySelector('.bc-menu-icon');
			//Default state horizontal lines
			const $defaultIconTop = $menuIcon.querySelector('.bc-menu-icon__lines__line--top');
			const $defaultIconMiddle = $menuIcon.querySelector('.bc-menu-icon__lines__line--middle');
			const $defaultIconBottom = $menuIcon.querySelector('.bc-menu-icon__lines__line--bottom');
			
			//Active state diagonal lines
			const $activeIconFirst = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--first');
			const $activeIconSecond = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--second');
			
			//Animation options
			const options = {
				duration: 0.28,
				easing: 'power1.out',
				defaultStroke: '#fff',
				activeStroke: '#303030'
			};
			Object.assign(options, opts);
			
			//Default & active coordinates
			
			const defaultIconTopStart = { 
				attr: {
					x1: 1, 
					y1: 25,
					x2: 99, 
					y2: 25
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconTopActive = {
				attr: {
					x1: -99, 
					y1: 25,
					x2: -1, 
					y2: 25
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconMiddleStart = {
				attr: {
					x1: 1, 
					y1: 50,
					x2: 99, 
					y2: 50
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconMiddleActive = {
				attr: {
					x1: 101, 
					y1: 50,
					x2: 199, 
					y2: 50
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconBottomStart = {
				attr: {
					x1: 1, 
					y1: 75,
					x2: 99, 
					y2: 75
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconBottomActive = {
				attr: {
					x1: -99, 
					y1: 75,
					x2: -1, 
					y2: 75
				},
				duration: options.duration,
				ease: options.easing
			};

			const activeIconFirstStart = {
				attr: {
					x1: -70,
					y1: -70,
					x2: 0,
					y2: 0
				},
				stroke: options.defaultStroke,
				duration: options.duration,
				ease: options.easing 
			};

			const activeIconFirstActive = {
				attr: {
					x1: 15,
					y1: 15,
					x2: 85,
					y2: 85
				},
				stroke: options.activeStroke,
				duration: options.duration,
				ease: options.easing 
				
			};
			const activeIconSecondStart = {
				attr: {
					x1: 100,
					y1: 0,
					x2: 170,
					y2: -70
				},
				stroke: options.defaultStroke,
				duration: options.duration,
				ease: options.easing
			};
			const activeIconSecondActive = {
				attr: {
					x1: 15,
					y1: 85,
					x2: 85,
					y2: 15
				},
				stroke: options.activeStroke,
				duration: options.duration,
				ease: options.easing
			};
			
			//Default and active timelines
			const defaultTl = $bc.gsap.timeline();
			const activeTl = $bc.gsap.timeline();
			
			$navigationToggler.addEventListener('click', function navIconClickHandler (evt) {
				const $this = evt.currentTarget;
				evt.preventDefault();
				if ($this.classList.contains('is-animating')) {
					return;
				}
				$this.classList.add('is-animating');
				if ($this.classList.contains('is-active')) {
					activeTl.seek(0);
					activeTl.to($activeIconFirst, activeIconFirstStart);
					activeTl.to($activeIconSecond, activeIconSecondStart, '<');
					activeTl.to($defaultIconTop, defaultIconTopStart, '>');
					activeTl.to($defaultIconMiddle, defaultIconMiddleStart, '<');
					activeTl.to($defaultIconBottom, defaultIconBottomStart, '<').eventCallback('onComplete', () => {
						$this.classList.remove('is-active');	
						$this.classList.remove('is-animating');
					});
				} else {
					defaultTl.seek(0);
					defaultTl.to($defaultIconTop, defaultIconTopActive, 0);
					defaultTl.to($defaultIconMiddle, defaultIconMiddleActive, 0);
					defaultTl.to($defaultIconBottom, defaultIconBottomActive, 0);
					defaultTl.to($activeIconFirst, activeIconFirstActive, '>');
					defaultTl.to($activeIconSecond, activeIconSecondActive, '<').eventCallback('onComplete', () => {
						$this.classList.add('is-active');	
						$this.classList.remove('is-animating');
					});
				}	
				if (typeof cb === 'function') {
					cb($this);
				}
			});
			return $navigationToggler;
		}//navTogglersFactory
		
		/** Main navigation **/
		const $mainNavIcon = document.querySelector('.bc-main-navigation-toggle .menu-icon-wrap');
		navTogglersFactory($mainNavIcon, {activeStroke: '#017CC0', duration: 0.16}, ($mainNavIcon) => {
			const $siteHeader = $mainNavIcon.closest('.bc-site-header');
			requestAnimationFrame(() => {
				$siteHeader.classList.toggle('has-active-navigation');	
			//	$this.dispatchEvent(iconClick);
			});
		});
		
		/** Landing page navigation **/ 
		let $landingPageToggle = (document.querySelector('.site-quicklinks__toggle')) ? document.querySelector('.site-quicklinks__toggle') : null;
		const $landingPageNavList = (document.querySelector('.site-quicklinks__list')) ? document.querySelector('.site-quicklinks__list') : null;
		let $landingPageNav = null;
		if ($landingPageToggle) {
			$landingPageNav = $landingPageNavList.closest('.site-quicklinks');
			
			navTogglersFactory($landingPageToggle, {activeStroke: '#fff', duration: 0.16}, () => {
				
				const duration = 0.4;
				const ease = 'ease.out';
				const $thisWrapper =  $landingPageNav.querySelector('.site-quicklinks__wrapper');
				const $thisContainer = $landingPageNav.closest('.site-quicklinks');
				if ($thisWrapper.classList.contains('is-active')) { 	
					$thisContainer.classList.toggle('is-active'); 
					$bc.gsap.to($thisWrapper, {height: 0, duration: duration, ease: ease}).eventCallback('onComplete', () => {
						$thisWrapper.classList.toggle('is-active'); 
					});
				} else {
					$thisContainer.classList.toggle('is-active'); 
					$bc.gsap.to($thisWrapper, {height: $thisWrapper.scrollHeight, duration: duration, ease: ease}).eventCallback('onComplete', () => {
						$thisWrapper.classList.toggle('is-active');
					});
				}
			});
			//set up links
			const $landingPageNavLinks = (document.querySelectorAll('.site-quicklinks__item > a').length > 0) ? document.querySelectorAll('.feature-page-navigation__item a') : null;
			if ($landingPageNavLinks) {
				for (let $landingPageNavLink of $landingPageNavLinks) {
					$landingPageNavLink.addEventListener('click', (evt) => {
						/* If it is not a site quicklink */
						if ($landingPageNavLink.classList.contains('.is-site-quicklink') === false) {
							evt.preventDefault();
							let linkTarget = document.querySelector($landingPageNavLink.getAttribute('href'));
							$bc.gsapFns.scrollTo({scrollTo: {y: linkTarget.offsetTop}, duration: 0.360});
						}
					});
				}
			}
		}//if landing page nav
		/** Floating widget **/ 
		const $floatingWidget = (document.querySelector('.bc-floating-widget')) ? document.querySelector('.bc-floating-widget') : null;
		
		if ($floatingWidget) {	
			const dur = 0.4; 
			const easing = 'back(0.5)';
			const scrollThreshold = $floatingWidget.scrollHeight;
			if (window.scrollY >= scrollThreshold && $floatingWidget.classList.contains('is-visible') === false) {
				if ($floatingWidget.classList.contains('is-visible')) {	
					$bc.gsap.to($floatingWidget, {bottom: '-100%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
						$floatingWidget.classList.remove('is-visible');
					});
				} else {
					$bc.gsap.to($floatingWidget, {bottom: '3%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
						$floatingWidget.classList.add('is-visible');
					});
				}
			}
			window.onscroll = () => {
				if (window.scrollY >= scrollThreshold && $floatingWidget.classList.contains('is-visible') === false) {
					if ($floatingWidget.classList.contains('is-visible')) {	
						$bc.gsap.to($floatingWidget, {bottom: '-100%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.remove('is-visible');
						});
					} else {
						$bc.gsap.to($floatingWidget, {bottom: '3%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.add('is-visible');
						});
					}
				} else if (window.scrollY < scrollThreshold && $floatingWidget.classList.contains('is-visible')) {
					if ($floatingWidget.classList.contains('is-visible')) {	
						$bc.gsap.to($floatingWidget, {bottom: '-100%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.remove('is-visible');
						});
					} else {
						$bc.gsap.to($floatingWidget, {bottom: '3%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.add('is-visible');
						});
					}
				}
			};
			/* Floating page nav */
			const $floatingNav = document.querySelector('.feature-page-navigation--floating'); 
			if ($floatingNav) {
				const $floatingNavToggle = $floatingNav.querySelector('.feature-page-navigation__toggle__link'); 
				
				navTogglersFactory($floatingNavToggle, {duration: 0.2, defaultStroke: '#fff', activeStroke: '#fff'}, ($floatingNavToggle) => {
					const $floatingNavWrapper = $floatingNavToggle.parentElement.nextElementSibling;
					if ($floatingNavWrapper.classList.contains('is-active')) {
						$bc.gsap.to($floatingNavWrapper, {opacity: 0, duration: 0.328, display: 'none'}).eventCallback('onComplete', () => {
							$floatingNavWrapper.classList.toggle('is-active');
						});	
					} else {
						$bc.gsap.to($floatingNavWrapper, {opacity: 1,  duration: 0.328, display: 'block'}).eventCallback('onComplete', () => {
							$floatingNavWrapper.classList.toggle('is-active');
						});	
					}
				}); 		
			}
			const $toTop = $floatingWidget.querySelector('.bc-to-page-top');
			$toTop.addEventListener('click', (evt) => {
				evt.stopPropagation();
				$bc.gsapFns.scrollTo({scrollTo: {y: 0}, duration: 0.360});
			});
		}// end if $floatingWidget
		
		/* Feature page navigation links */
		function featurePageNavClick($link) {
			
			const $linkTarget = document.getElementById($link.getAttribute('href').slice(1));
			
			$bc.gsapFns.scrollTo({scrollTo: {y: $bc.getElOffset($linkTarget).top}, duration: 0.360});
		}
		const $featurePageNav = (document.querySelector('.feature-page-navigation')) ? document.querySelector('.feature-page-navigation') : null; 
		if ($featurePageNav) {
			const featurePageNavLinks = Array.from($featurePageNav.querySelectorAll('.feature-page-navigation__link'));
			for (let $navLink of featurePageNavLinks) {
				$navLink.addEventListener('click', (evt) => {
					evt.preventDefault();
					featurePageNavClick($navLink);													
				});
			}
		}
		
		/* Section subnavigation component */
		const $headerSubNav = (document.querySelector('.bc-header-sub-nav')) ? document.querySelector('.bc-header-sub-nav') : null;
		if ($headerSubNav) {
			const $headerSubNavToggle = $headerSubNav.querySelector('.bc-header-sub-nav__toggle__icon');
			const $headerSubNavToggleIcon = $headerSubNavToggle.querySelector('.bc-header-sub-nav__toggle__icon .bc-svg-icon');
			const $headerSubNavBody = $headerSubNav.querySelector('.bc-header-sub-nav__list');
			$headerSubNavToggle.addEventListener('click', (evt) => {
				evt.preventDefault();
				const navBodyHeight = $headerSubNavBody.scrollHeight;
				if ($headerSubNavToggle.classList.contains('is-active')) {
					$bc.gsap.to($headerSubNavBody, {height: 0, duration: 0.328}).eventCallback('onComplete', () => {
						$headerSubNavBody.classList.toggle('is-active');
						$headerSubNavBody.removeAttribute('style');
						$headerSubNavToggle.classList.toggle('is-active');
					});
					$bc.gsap.to($headerSubNavToggleIcon, {rotate: '45deg', duration: 0.4});	
				} else {
					$bc.gsap.to($headerSubNavBody, {height: navBodyHeight+'px',  duration: 0.328}).eventCallback('onComplete', () => {
						$headerSubNavBody.classList.toggle('is-active');
						$headerSubNavToggle.classList.toggle('is-active');
					});	
					$bc.gsap.to($headerSubNavToggleIcon, {rotate: '90deg', duration: 0.4});
				}
			});
			
		}// Section subnavigation component
		
		/** 
			*	Animate elements as they become visible
			*	.bc-fade-in-up--is-not-visible has not been seen
			*	.bc-fade-in-up--is-visible has been seen
		**/
		/* 
			* 					-- If !(IntersectionObserver in window) -- 
		*/
		// Custom event - fired when an element becomes visible in the viewport
		const bcIsVisibleEvt = document.createEvent('Event');
		bcIsVisibleEvt.initEvent('bc-is-visible', true, true);
		const animatableElements = document.querySelectorAll('.bc-feature-component, .bc-hero .bc-fade-in-up--is-not-visible');
		for (const $el of animatableElements) {
			//bc-is-visible handler
			$el.addEventListener('bc-is-visible', () => {
				console.log('bc-is-visible');
				//Fade in up
				/*$bc.gsapFns.fadeIn($el, {duration: 1, y: 20}, ($el) => {
					$el.classList.remove('bc-fade-in-up--is-not-visible');
					$el.classList.add('bc-fade-in-up--is-visible');
				});*/
			});
		}
		document.addEventListener('scroll', () => {
			for (const $el of animatableElements) {
				//Test visibility using $bc.isScrollVisible()
				if ($el.classList.contains('bc-fade-in-up--is-not-visible') ) {
					$el.dispatchEvent(bcIsVisibleEvt);	
				}
			}
		});
		//* If (IntersectionObserver in window) */
		/*const featuresObserverOptions = {
			threshold: [0.1, 0.2, 0.25, 0.3, 0.5, 0.9]
		};*/
		const bcFeaturesFadeInOptions = {
			rootMargin: '0% 0% 0% 0%',
			threshold: [0, 0.20, 0.382, 0.5, 0.75, 0.95]
		};
		const bcHeroesFadeInOptions = {
			rootMargin: '0% 0% 0% 0%',
			threshold: [0.15, 0.20, 0.382, 0.5, 0.75, 0.95]
		};
		
		/* Observer for Features */
		const bcFeaturesFadeInObserver = new IntersectionObserver((entries, observer) => {
			const targets = entries.filter(entry => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
					return entry;
				} 
			}).map(entry => {
				return entry.target;
			}); 
			
			if (targets.length > 0 ) {
				$bc.gsap.to(targets, {y: 0, opacity: 1, duration: 1.125, ease: 'power4.out', stagger: 0.2}).eventCallback('onComplete', () => {
					console.log('This is complete');
				});	
			}
		}, bcFeaturesFadeInOptions);
		//Observe all fadable elements in feature components
		const bcFadeInFeatures = document.querySelectorAll('.bc-feature-component .bc-fade-in-up--is-not-visible');
		if (bcFadeInFeatures.length > 0) {
			for (let fadeInFeature of bcFadeInFeatures) {
				bcFeaturesFadeInObserver.observe(fadeInFeature);	
			}
		}
		/* Observer for Heroes */
		const bcHeroesFadeInObserver = new IntersectionObserver((entries, observer) => {
			for (let entry of entries) {
				if (entry.intersectionRatio >= 0.5) {
					const $target = entry.target; 
					const $thisHero = $target.closest('.bc-hero');
					const $animatables = Array.from($target.querySelectorAll('.bc-fade-in-up--is-not-visible'));
					let yTarget = -0;
					
					if (window.innerWidth >= 768 && window.innerHeight >= 600) {
						yTarget =  ($thisHero.classList.contains('bc-hero--inpage')) ? -0 : -30;
					}
					if (window.innerWidth >= 1600) {
						yTarget =  ($thisHero.classList.contains('bc-hero--inpage')) ? -80 : -110;
					}
					$bc.gsap.to($animatables, {y: yTarget, opacity: 1, duration: 1.125, ease: 'power4.out', stagger: 0.3});
					observer.unobserve($target);
				}
			}
		}, bcHeroesFadeInOptions);
		const bcHeroesFadeInFeatures = document.querySelectorAll('.bc-hero .bc-hero__body'); 
		
		if (bcHeroesFadeInFeatures.length > 0) {			
			for (let fadeInFeature of bcHeroesFadeInFeatures) {
				bcHeroesFadeInObserver.observe(fadeInFeature);	
			}
		}
		
		/** Feature components, Heroes scroll to next content onclick **/
		if ($pageFeatures) {
			//For each node in the list 
			$pageFeatures.forEach(($this) =>{
				
				//Project specific - if this is a hero component and it has the site quick nav embedded or if it is not full VH in it then skip it
				if ($this.classList.contains('has-quick-nav') || $this.classList.contains('is-full-vh') === false) {
					return;
				} 
				if ($this.nextElementSibling) {
					const $nextSibling = $this.nextElementSibling;
					//Skip this if the next element is the CTA feature
					if ($nextSibling.classList.contains('.bc-cta-feature')) {
						return;
					}
					const linkText = ($nextSibling.getAttribute('aria-label')) ? 'Next: '+$nextSibling.getAttribute('aria-label') : 'Next content' ;	
					const $thisCTA = $this.querySelector('.bc-hero__cta, .bc-feature-component__cta');
					if ($thisCTA  && $thisCTA.querySelector('.bc-feature-component__next')) {
						const $nextLinkText = $thisCTA.querySelector('.bc-feature-component__next__text');
						//const $nextLinkIcon = $thisCTA.querySelector('.bc-feature-component__next__icon svg');
						$nextLinkText.innerHTML = '';
						$nextLinkText.append(document.createTextNode(linkText));
						$nextLinkText.addEventListener('click', (evt) => {
							evt.preventDefault(); 
							$bc.gsapFns.scrollTo({scrollTo: {y: $nextSibling.offsetTop}, duration: 0.360});
						});
					}
				} else {
					return;
				}
			});
		}
		/* 
			** Flickty sliders 
		*/
		if (document.querySelector('.bc-flickty-slider')) {
			const $sliderElement = document.querySelector('.bc-flickty-slider');
			const $sliderNext = document.querySelector('.bc-flickty-slider__next');
			const $sliderPrev = document.querySelector('.bc-flickty-slider__prev');
			const $slider = new Flickity($sliderElement, {
				cellSelector: '.bc-flickty-slider__slide',
				prevNextButtons: false,
				pageDots: false
			});
			if ($slider.selectedIndex === 0) {
				$sliderPrev.classList.add('is-inactive');	
				$sliderNext.classList.remove('is-inactive');	
			} else if ($slider.selectedIndex === $slider.cells.length -1) {
				$sliderPrev.classList.remove('is-inactive');
				$sliderNext.classList.add('is-inactive');	
			} else {
				$sliderPrev.classList.remove('is-inactive');	
				$sliderNext.classList.remove('is-inactive');	
			}
			if ($sliderElement.querySelectorAll('.bc-flickty-slider__slide--video').length > 0) {
				const $videoSlide = $sliderElement.querySelectorAll('.bc-flickty-slider__slide--video')[0];
				const $videoSlideWrap = $sliderElement.querySelectorAll('.bc-flickty-slider__video-wrap')[0];
				$bc.responsiveiFrames('.bc-flickty-slider .bc-flickty-slider__slide--video');
				
				//	const $videoSlideContent = $videoSlide.querySelector('.bc-flickty-slider__slide__content'); 
				//const $videoSlidePlay = $videoSlide.querySelector('.bc-flickty-slider__slide--video__play'); 
				const $videoSlideHeading = $videoSlide.querySelector('.bc-flickty-slider__slide__heading');
				const $videoSlideSubHeading = $videoSlide.querySelector('.bc-flickty-slider__slide__sub-heading');
				const $videoSlideLeader = $videoSlide.querySelector('.bc-flickty-slider__slide__leader');
				const $videoSlideLink = $videoSlide.querySelector('.bc-flickty-slider__slide__link'); 
				const videoSliderElements = [$videoSlideHeading, $videoSlideSubHeading, $videoSlideLink, $videoSlideLeader];
				
				$videoSlideHeading.style.top = $videoSlideHeading.offsetTop + 'px'; 
				
				const videoTl = $bc.gsap.timeline().pause();
				videoTl.to(videoSliderElements, {y: 50, opacity: 0, transformOrigin: 'left bottom'});
				videoTl.set($videoSlideWrap, {display: 'block', opacity: 0, y: -50});
				//videoTl.set([$videoSlidePlay, $videoSlideHeading, $videoSlideSubHeading], {display: 'none'});
				videoTl.set([$videoSlideLink, $videoSlideLeader], {y: -20});
				videoTl.to($videoSlideWrap, {opacity: 1, y: 0});
				videoTl.to([$videoSlideLink, $videoSlideLeader], {opacity: 1, y: 0});
				//videoTl.to($, {height: 0});
				
				/*$videoSlidePlay.addEventListener('click', (evt) => {
					evt.preventDefault();
					const $this = evt.currentTarget;
					videoTl.play();
					
					$this.removeEventListener('click', arguments.callee);
				});*/
			}
			$sliderNext.addEventListener('click', (evt) => { 
				evt.preventDefault();
				$slider.next();
				if ($slider.selectedIndex === 0) {
					$sliderPrev.classList.add('is-inactive');
					$sliderNext.classList.remove('is-inactive');
				} else if ($slider.selectedIndex === $slider.cells.length -1) {
					$sliderPrev.classList.remove('is-inactive');
					$sliderNext.classList.add('is-inactive');	
				} else {
					$sliderPrev.classList.remove('is-inactive');	
					$sliderNext.classList.remove('is-inactive');	
				}
			});
			$sliderPrev.addEventListener('click', (evt) => {
				evt.preventDefault();
				$slider.previous(); 
				if ($slider.selectedIndex === 0) {
					$sliderPrev.classList.add('is-inactive');
					$sliderNext.classList.remove('is-inactive');
				} else if ($slider.selectedIndex === $slider.cells.length -1) {
					$sliderPrev.classList.remove('is-inactive');
					$sliderNext.classList.add('is-inactive');	
				} else {
					$sliderPrev.classList.remove('is-inactive');	
					$sliderNext.classList.remove('is-inactive');	
				}
			});
		}// end if .bc-flickty-slider
		/* Expandible blocks */
		if (document.querySelectorAll('.bc-expandible-block__expander__button').length > 0) {
			const $expandButtons = document.querySelectorAll('.bc-expandible-block__expander__button');
			for (let $btn of $expandButtons) {
				const $expandableBlock = $btn.closest('.bc-expandible-block');
				const blockOffsets = $bc.getElOffset($expandableBlock);
				const $expandableBody = $expandableBlock.querySelector('.bc-expandible-block__body'); 
				$btn.addEventListener('click', () => {
					if ($btn.classList.contains('is-active')) {
						hideAccordionBody($expandableBody, () => {
							$btn.classList.toggle('is-active');	
						});
						
					} else {
						showAccordionBody($expandableBody, () => {
							$btn.classList.toggle('is-active');	
							$bc.gsapFns.scrollTo({scrollTo: {y: blockOffsets.top}, duration: 0.2});
						});
						
					}
				});
			}
		}/* End Expandible blocks */
		/** Accordion components **/ 
		function showAccordionBody(accordionBody, cb) {
			if (accordionBody.classList.contains('is-active') === false) {
				$bc.gsap.to(accordionBody, {height: accordionBody.scrollHeight + 'px'}).eventCallback('onComplete', () => {
					accordionBody.classList.toggle('is-active');
					if (typeof cb === 'function') {
						cb();
					}
				});
			} else {
				return;
			}
		}
		function hideAccordionBody(accordionBody, cb) {
			if (accordionBody.classList.contains('is-active')) {
				$bc.gsap.to(accordionBody, {height: 0 + 'px'}).eventCallback('onComplete', () => {
					accordionBody.classList.toggle('is-active');
					if (typeof cb === 'function') {
						cb();
					}
				});	
			} else {
				return;
			}
		}
		if (document.querySelectorAll('.bc-accordion').length > 0) {
			const accordions = document.querySelectorAll('.bc-accordion');
			for (let $accordion of accordions) {
				const accordionTriggers = $accordion.querySelectorAll('.bc-accordion__block-trigger');
				for (let $accordionTrigger of accordionTriggers) {
					$accordionTrigger.addEventListener('click', (evt) => {
						evt.preventDefault();
						const $accordionTriggerIcon = $accordionTrigger.querySelector('.bc-accordion__block-trigger__icon > .bc-svg-icon');
						const $accordionBody = $accordionTrigger.closest('.bc-accordion__block-heading').nextElementSibling;
						const $accordionCloseLink = $accordionBody.querySelector('.bc-accordion__close > a');
						const $accordionHeading = $accordionBody.previousElementSibling;
						const headingOffsets = $bc.getElOffset($accordionHeading);
						if ($accordionTrigger.classList.contains('is-active') === false) {
							showAccordionBody($accordionBody);
							$bc.gsap.to($accordionTriggerIcon, {rotate: '90deg', duration: 0.1}).eventCallback('onComplete', () => {
								$accordionTrigger.classList.toggle('is-active');
							});
							
							$bc.gsapFns.scrollTo({scrollTo: {y: headingOffsets.top}, duration: 0.2});
						} else {
							hideAccordionBody($accordionBody);
							$bc.gsap.to($accordionTriggerIcon, {rotate: '45deg', duration: 0.1}).eventCallback('onComplete', () => {
								$accordionTrigger.classList.toggle('is-active');
							});
							$bc.gsapFns.scrollTo({scrollTo: {y: headingOffsets.top}, duration: 0.2}); 
						}
						
						$accordionCloseLink.addEventListener('click', function closeLinkClickHander(evt) { 
							evt.preventDefault();
							hideAccordionBody($accordionBody);
							$bc.gsap.to($accordionTriggerIcon, {rotate: '45deg', duration: 0.1}).eventCallback('onComplete', () => {
								$accordionTrigger.classList.toggle('is-active');
							});
						});
					});	
				}
				
			}
		}// Accordion components
		
		const wavyComponents = (document.querySelectorAll('.has-waves')) ? document.querySelectorAll('.has-waves') : null;
		if (wavyComponents) {
			wavyComponents.forEach(($el) => {
				
				const $waves = $el.querySelector('.wave-wrap');
				const $nextEl  = $el.nextElementSibling;
				let $nextElWrap  = null;
				let paddingTop = Number.parseInt(window.getComputedStyle($nextEl).getPropertyValue('padding-top'));
				
				$nextEl.style.marginTop = '-' + $waves.clientHeight + 'px';
				
				if ($nextEl.classList.contains('has-waves')) {
					$nextElWrap  = $nextEl.querySelector('.bc-feature-component__wrap');	
					paddingTop = Number.parseInt(window.getComputedStyle($nextElWrap).getPropertyValue('padding-top'));
					console.log(paddingTop);
					$nextElWrap.style.paddingTop = paddingTop + $waves.clientHeight + 'px';
					$nextEl.style.zIndex = '4';
				} else {
					$nextEl.style.paddingTop = ($nextEl.classList.contains('bc-breadcrumbs')) ? paddingTop * 3.5 + 'px' : paddingTop + $waves.clientHeight + 'px';
				}
			});
		}
	};/*** // window.onload Project scripts ***/
	
})();// bcScriptsWrap()
