const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";function t(t){if(isNaN(t)||t===1/0||t<0)throw"invalid input";let n,o="";for(t=Math.floor(t);n=t%64,o=e.charAt(n)+o,0!=(t=Math.floor(t/64)););return o}function n(t){let n=0;const o=t.split("");for(let t=0;t<o.length;t++)n=64*n+e.indexOf(o[t]);return n}const o=function(e){let t=3735928559,n=1103547991;for(let o,l=0;l<e.length;l++)o=e.charCodeAt(l),t=Math.imul(t^o,2654435761),n=Math.imul(n^o,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)};function l(e){return t(o(e.wholeText.trim()))}function r(e){return e.wholeText.length-e.wholeText.trimStart().length}function i(e){const t=(e,t)=>{let n,o;return 3==e.nodeType||0==e.childNodes.length?(n=e,o=t):(n=e.childNodes[Math.min(t,e.childNodes.length-1)],o=3==n.nodeType?t==e.childNodes.length?n.wholeText.length:0:t==e.childNodes.length?1:0),[n,o]},[n,o]=t(e.startContainer,e.startOffset),[l,r]=t(e.endContainer,e.endOffset),i=new Range,a=document.createTreeWalker(e.commonAncestorContainer);let s=0,c=a.currentNode,h=l;for(;c;){if(0==s&&c==n){if(3!=c.nodeType&&0!=o&&(c=a.nextNode(),!c))return null;s=1}if(3==c.nodeType&&""!=c.wholeText.trim()&&(1==s&&(i.setStart(c,c==n?o:0),s=2),2==s&&(h=i.endContainer,i.setEnd(c,c.wholeText.length))),2==s&&c==l)return 3==c.nodeType&&""!=c.wholeText.trim()?(i.setEnd(c,r),i):(c==i.endContainer&&0==r&&i.setEnd(h,h.wholeText.length),i);c=a.nextNode()}return null}function a(e){const[t,o,i,a]=e.split("~"),s=t.split(".").map((e=>e.split(":")));let c,h,d,u;1==s.length?([[c,h,u]]=s,d=c):[[c,h],[d,u]]=s,[h,u]=[h,u].map(n);const f=[],m=document.createTreeWalker(document.body,4,null);let g,p,T,x=0;for(;g=m.nextNode();){const e=l(g);e==c?f.push([g,!0]):e==d&&(f.push([g,!1]),x++)}if(o&&f.map((e=>e[1]?"s":"e")).join("")==o&&(p=f[n(i)],T=f[n(a)]),!p||!T)if(c==d)p=f[0],T=p;else{const e=x>1,t=f.findIndex((t=>t[1]==e));p=f[e?t:t-1],T=f[e?t+1:t]}const w=new Range;return p&&T&&(w.setStart(p[0],Math.min(h+r(p[0]),p[0].wholeText.length)),w.setEnd(T[0],Math.min(u+r(T[0]),T[0].wholeText.length))),w}function s(e){const t=document.getSelection();t.removeAllRanges();for(const n of e)t.addRange(n);e[0].startContainer.parentElement?.scrollIntoView(),t.rangeCount!=e.length&&import("./e-d610c008.js").then((t=>t.m(e)))}(async()=>{const e=location.hash.slice(1);if(e&&!document.getElementById(e))if("1"==e[0]){s((await import("./1-6ee99c94.js")).fragmentToRangeList(e))}else"2"==e[0]&&s(function(e){return e.substring(1).split(",").map(a)}(e));setTimeout((()=>{document.addEventListener("selectionchange",(()=>{const e=function(e){const n=[];for(let o=0;o<e.rangeCount;o++){const a=i(e.getRangeAt(o));if(a&&!a.collapsed){const[e,o]=[a.startContainer,a.endContainer];3==e.nodeType&&3==o.nodeType&&n.push([[l(e),e,t(Math.max(a.startOffset-r(e),0))],[l(o),o,t(Math.max(Math.min(a.endOffset-r(o),o.wholeText.trim().length),0))],[[],0,0]])}}if(0==n.length)return"";const o=document.createTreeWalker(document.body,4);let a;for(;a=o.nextNode();){const e=l(a);for(const[[t,o],[l,r],i]of n)o==a&&(i[1]=i[0].length),r==a&&(i[2]=i[0].length),t==e?i[0].push(!0):l==e&&i[0].push(!1)}return`#2${n.map((([[e,,n],[o,,l],[r,i,a]])=>{let s;return s=e==o?`${e}:${n}:${l}`:`${e}:${n}.${o}:${l}`,new Set(r).size!=r.length&&(s+=`~${r.map((e=>e?"s":"e")).join("")}~${t(i)}~${t(a)}`),s})).join()}`}(document.getSelection());history.replaceState(null,"",location.pathname+e)}))}),0)})();export{o as c,t as f};//# sourceMappingURL=deeplinks.js.map