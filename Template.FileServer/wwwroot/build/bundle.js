var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let l;function d(t){l=t}const p=[],h=[];let $=[];const m=[],g=Promise.resolve();let y=!1;function _(t){$.push(t)}const b=new Set;let x=0;function w(){if(0!==x)return;const t=l;do{try{for(;x<p.length;){const t=p[x];x++,d(t),E(t.$$)}}catch(t){throw p.length=0,x=0,t}for(d(null),p.length=0,x=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];b.has(n)||(b.add(n),n())}$.length=0}while(p.length);for(;m.length;)m.pop()();y=!1,b.clear(),d(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const k=new Set;function v(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];$.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),$=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,g.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,u,s,i,f,p,h,$=[-1]){const m=l;d(c);const g=c.$$={fragment:null,ctx:[],props:p,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(m?m.$$.context:[])),callbacks:e(),dirty:$,skip_bound:!1,root:u.target||m.$$.root};h&&h(g.root);let y=!1;if(g.ctx=s?s(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&j(c,t)),n})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(k.delete(b),b.i(x))),function(t,e,c,u){const{fragment:a,after_update:s}=t.$$;a&&a.m(e,c),u||_((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(_)}(c,u.target,u.anchor,u.customElement),w()}var b,x;d(m)}class N{$destroy(){v(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function O(n){let e,o,r,c;return{c(){e=s("main"),o=s("h1"),r=i(n[0]),c=i("!"),f(o,"class","text-4xl font-bold"),f(e,"class","text-center p-4 svelte-59rj2w")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(o,r),u(o,c)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(r,t[0])},i:t,o:t,d(t){t&&a(e)}}}function B(t,n,e){let o="";return async function(){const t=await fetch("http://localhost:5000/api/main"),n=await t.json();e(0,o=n.message)}(),[o]}return new class extends N{constructor(t){super(),A(this,t,B,O,c,{})}}({target:document.getElementById("app")})}();
//# sourceMappingURL=bundle.js.map
