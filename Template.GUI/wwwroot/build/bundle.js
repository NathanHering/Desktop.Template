var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let a;function i(t){a=t}const l=[],d=[];let p=[];const $=[],h=Promise.resolve();let g=!1;function m(t){p.push(t)}const y=new Set;let _=0;function b(){if(0!==_)return;const t=a;do{try{for(;_<l.length;){const t=l[_];_++,i(t),x(t.$$)}}catch(t){throw l.length=0,_=0,t}for(i(null),l.length=0,_=0;d.length;)d.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];y.has(n)||(y.add(n),n())}p.length=0}while(l.length);for(;$.length;)$.pop()();g=!1,y.clear(),i(t)}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(m)}}const E=new Set;function k(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];p.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),p=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function w(t,n){-1===t.$$.dirty[0]&&(l.push(t),g||(g=!0,h.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function v(c,s,f,l,d,p,$,h=[-1]){const g=a;i(c);const y=c.$$={fragment:null,ctx:[],props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(g?g.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:s.target||g.$$.root};$&&$(y.root);let _=!1;if(y.ctx=f?f(c,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),_&&w(c,t)),n})):[],y.update(),_=!0,o(y.before_update),y.fragment=!!l&&l(y.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);y.fragment&&y.fragment.l(t),t.forEach(u)}else y.fragment&&y.fragment.c();s.intro&&((x=c.$$.fragment)&&x.i&&(E.delete(x),x.i(k))),function(t,e,c,u){const{fragment:s,after_update:f}=t.$$;s&&s.m(e,c),u||m((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(m)}(c,s.target,s.anchor,s.customElement),b()}var x,k;i(g)}class j{$destroy(){k(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function A(n){let e,o;return{c(){e=s("main"),o=s("h1"),o.textContent=`Hello ${O}!`,f(o,"class","text-4xl font-bold"),f(e,"class","text-center p-4 svelte-59rj2w")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),function(t,n){t.appendChild(n)}(e,o)},p:t,i:t,o:t,d(t){t&&u(e)}}}let O="world";return new class extends j{constructor(t){super(),v(this,t,null,A,c,{})}}({target:document.getElementById("app")})}();
//# sourceMappingURL=bundle.js.map
