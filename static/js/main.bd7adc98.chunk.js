(this.webpackJsonpregions=this.webpackJsonpregions||[]).push([[0],{68:function(n,e,t){"use strict";t.r(e);var i,c,a,o,r,s=t(0),l=t.n(s),p=t(35),u=t.n(p),d=t(14),b=t(4),j=t(5),x=t(17),g=t.n(x),f=t(2),h=t(3),m=h.b.div(i||(i=Object(f.a)(["\n    width:min(100%, 1228px);\n\n    margin: 50px auto;\n\n    flex:1;\n    display:flex;\n    flex-basis: 316px;\n    flex-direction:column;\n    align-items:center;\n    flex-basis: 316px;\n    position:relative;\n    \n    gap:20px;\n\n    @media(min-width:1168px){ \n        gap:45px;\n        flex-direction:row;\n        flex-flow:wrap;\n        justify-content:space-evenly;\n    }\n\n    padding-bottom: 164px;\n    \n"]))),O=h.b.img(c||(c=Object(f.a)(["\n    width:316px;\n    max-width:100%;\n    height:181px;\n"]))),v=h.b.div(a||(a=Object(f.a)(["\n    position:absolute;\n    bottom:50px;\n    width:100%;\n    display:flex;\n    flex-flow:wrap;\n    justify-content:center;\n\n    gap:8px;\n"]))),w=h.b.button(o||(o=Object(f.a)(["\n    height: 34px;\n    width: 34px;\n    border-radius: 2px;\n    cursor:pointer;\n\n    background-color:",";\n    color:",";\n\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n"])),(function(n){return n.selected?"var(--primary)":"white"}),(function(n){return n.selected?"white":"#8D8D8D"})),y=h.b.img(r||(r=Object(f.a)(["\n    width:12px;\n    height: 12px;\n"]))),D=t.p+"static/media/arrow-left.6692cf15.svg",k=t.p+"static/media/arrow-right.dbb348f7.svg",S=t(1);var C,E,L=function(n){var e=n.countries,t=void 0===e?[]:e,i=n.pageSize,c=void 0===i?12:i,a=Object(s.useState)(0),o=Object(j.a)(a,2),r=o[0],l=o[1],p=Object(s.useState)(0),u=Object(j.a)(p,2),b=u[0],x=u[1];return Object(s.useEffect)((function(){x(t.length/c),l(0)}),[t]),Object(S.jsxs)(m,{children:[t.slice(c*r,c*(r+1)).map((function(n,e){return Object(S.jsx)(d.b,{to:"/country/".concat(n.alpha2Code),children:Object(S.jsx)(O,{src:n.flag})},e)})),Object(S.jsxs)(v,{children:[0!=r&&Object(S.jsx)(w,{outside:!0,onClick:function(){return l(r-1)},children:Object(S.jsx)(y,{src:D})}),function(){for(var n=[],e=function(e){n.push(Object(S.jsx)(w,{selected:e==r,onClick:function(){return l(e)},children:e+1},e))},t=0;t<b;t++)e(t);return n}(),r+1<b&&Object(S.jsx)(w,{onClick:function(){return l(r+1)},outside:!0,children:Object(S.jsx)(y,{src:k})})]})]})},F=t.p+"static/media/logo.b8164f55.svg",z=t(11),A=t(12),N=t.p+"static/media/back.02064001.svg",R=h.b.button(C||(C=Object(f.a)(["\n    display:flex;\n    align-items:center;\n    justify-content:space-evenly;\n\n    text-indent: -9999px;\n    white-space: nowrap;\n    border:none; \n\n    font-size:18px;\n    font-style:normal;\n    font-weight:normal;\n    color: var(--primary);\n    line-height:21.94px;\n    margin-left:auto;\n    margin-right:33px;\n\n    cursor:pointer;\n\n    @media (min-width:1024px){\n        text-indent: unset;\n        white-space: unset;\n\n        margin-right:67px;\n\n        width: 134px;\n        height: 36px;\n        border: 1px solid #6D2080;\n    }\n"]))),B=h.b.img(E||(E=Object(f.a)(["\n    width:24px;\n    height:24px;\n"])));var P,I,M=function(n){var e=n.children,t=n.hideIcon,i=Object(A.a)(n,["children","hideIcon"]);return Object(S.jsxs)(R,Object(z.a)(Object(z.a)({},i),{},{children:[!t&&Object(S.jsx)(B,{src:N}),e]}))},T=h.b.div(P||(P=Object(f.a)(["\n    position: absolute;\n    left: 0%;\n    right: 0%;\n    top: 0%;\n    bottom: 0%;\n    height:100px;\n\n    display:flex;\n    align-items:center;\n\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),J=h.b.img(I||(I=Object(f.a)(["\n    margin-left:46px;\n"])));var q,V,W=function(n){var e=n.hideBackButton,t=Object(b.f)();return Object(S.jsxs)(T,{children:[Object(S.jsx)(J,{src:F}),!e&&Object(S.jsx)(M,{onClick:function(){t.goBack()},children:"Voltar"})]})},G=h.b.div(q||(q=Object(f.a)(["\n    margin-top: 123px;\n\n    padding: 0 22px;\n\n    width:min(100%, 1366px);\n    margin-left: auto;\n    margin-right: auto;\n    display:flex;\n    flex-direction:column;\n    flex-flow: wrap;\n    gap: 22px;\n    \n\n    @media(min-width:1506px){\n        padding:0; \n        flex-direction:row;\n        gap: 58px;\n    }\n"]))),H=h.b.div(V||(V=Object(f.a)(["\n    width:min(100%, 1366px);\n    display: flex;\n    flex-direction:column;\n\n    @media (min-width:1366px){\n        flex-direction:row;\n        margin-top:0;\n    }\n\n    > div {\n        width:fit-content;\n\n        > img{\n            width:min(100%, 443px);\n        }\n\n        &:first-child{\n            width:min(100%, 443px);\n        }\n\n        &:last-child{\n            margin-top:22px;\n            display:flex;\n            flex-direction:column;\n            justify-content:space-evenly;\n            gap:22px;\n\n            > p {\n                font-family: Montserrat, sans-serif;\n                font-size: 18px;\n                font-style: normal;\n                font-weight: 400;\n                line-height: 22px;\n                letter-spacing: 0em;\n                text-align: left;\n                color:#454545;\n\n            }\n\n            @media (min-width:1366px){\n                margin-top:0;\n                margin-left:24px;\n                gap:0;\n            }\n        }\n    }\n"])));var K,Q=function(){var n=Object(s.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1],c=Object(s.useState)([]),a=Object(j.a)(c,2),o=a[0],r=a[1],l=Object(b.f)(),p=Object(b.g)().alpha;return Object(s.useEffect)((function(){p&&g.a.get("https://restcountries.eu/rest/v2/alpha/".concat(p)).then((function(n){var e=n.status,t=n.data;n.statusText,200==e&&i(t)})).catch((function(n){var e;404===(null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.status)&&l.goBack()}))}),[p]),Object(s.useEffect)((function(){t&&function(){var n="";t.borders.forEach((function(e,i){n+=e+(i+1<t.borders.length?";":"")})),g.a.get("https://restcountries.eu/rest/v2/alpha?codes=".concat(n)).then((function(n){var e=n.status,t=n.data;n.statusText;200==e&&r(t)})).catch((function(n){}))}()}),[t]),Object(S.jsxs)(G,{children:[Object(S.jsx)(W,{}),t&&Object(S.jsxs)(H,{children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:t.flag})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:["Nome: ",t.name]}),Object(S.jsxs)("p",{children:["Capital: ",t.capital]}),Object(S.jsxs)("p",{children:["Regi\xe3o: ",Object(S.jsx)(d.b,{to:"/".concat(t.region),children:t.region})]}),Object(S.jsxs)("p",{children:["Sub-Regi\xe3o: ",t.subregion]}),Object(S.jsxs)("p",{children:["Popula\xe7\xe3o: ",new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t.population)]}),Object(S.jsxs)("p",{children:["Linguas:",t.languages.map((function(n,e){return" "+n.nativeName+(e+1<t.languages.length?",":"")}))]})]})]}),o.length>0&&Object(S.jsx)(L,{countries:o,pageSize:12})]})},U=t(19),X=t.n(U),Y=h.b.button(K||(K=Object(f.a)(["\n    cursor:pointer;\n    background-color:var(--primary);\n\n    color:white;\n    text-transform:uppercase;\n    font-weight:lighter;\n\n    width:156px;\n    height:36px;\n    \n    margin-top:auto;\n    margin-left:auto;\n\n    border-radius:10px;\n"])));var Z,$,_,nn,en,tn=function(n){var e=n.children,t=Object(A.a)(n,["children"]);return Object(S.jsx)(Y,Object(z.a)(Object(z.a)({},t),{},{children:e}))},cn=t.p+"static/media/arrow-down.ff39ba1d.svg",an=h.b.div(Z||(Z=Object(f.a)(["\n    position: relative;\n    height: 41.01px;\n    min-width:min(100%, min(100%, 316px));\n"]))),on=h.b.div($||($=Object(f.a)(["\n    color:var(--primary);\n    font-weight:400;\n    font-size:14px;\n    line-height:17px;\n"]))),rn=h.b.div(_||(_=Object(f.a)(["\n    display:flex;\n    align-items:center;\n\n    cursor:pointer;\n\n    padding-top:3px;\n    padding-left:10px;\n    padding-bottom:3px;\n    \n    color:#8D8D8D;\n    font-weight:400;\n    font-size:14px;\n    border-bottom: 2px solid #A8A8A8;\n\n    > img {\n        margin-left:auto;\n        margin-right:5px;\n    }\n"]))),sn=h.b.ul(nn||(nn=Object(f.a)(["\n    min-width:min(100%, min(100%, 328px));\n\n    cursor:pointer;\n\n    opacity:0;\n    transition:.3s;\n    z-index:-1;\n\n    &.open{\n        opacity:1;\n        z-index:1;\n    }\n\n    list-style:none;\n\n    padding-left: 16px;\n    padding-right: 16px;\n\n    overflow-y:auto;\n    max-height:350px;\n    \n    background-color:white;\n    top:16px;\n    position:absolute;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n\n  \n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    \n    &::-webkit-scrollbar-thumb {\n        background-color: var(--primary);\n    }\n\n\n"]))),ln=h.b.li(en||(en=Object(f.a)(["\n    height:48px;\n\n    display: flex;\n    align-items: center;\n\n    color:",";\n    font-weight:700;\n    font-size: 16px;\n    line-height: 20px;\n"])),(function(n){return n.selected?"#02AE99":"#8D8D8D"}));var pn,un,dn=function(n){var e=n.options,t=n.label,i=n.placeholder,c=n.onSelect,a=Object(A.a)(n,["options","label","placeholder","onSelect"]),o=Object(s.useState)(!1),r=Object(j.a)(o,2),l=r[0],p=r[1],u=Object(s.useState)(""),d=Object(j.a)(u,2),b=d[0],x=d[1],g=Object(s.useState)(""),f=Object(j.a)(g,2),h=f[0],m=f[1],O=Object(s.useRef)(null);function v(n){O.current&&!O.current.contains(n.target)&&p(!1)}return Object(s.useEffect)((function(){return document.addEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}}),[]),Object(S.jsxs)(an,Object(z.a)(Object(z.a)({},a),{},{children:[Object(S.jsx)(on,{children:t}),Object(S.jsxs)(rn,{onClick:function(){return p(!0)},children:[b?Object(S.jsx)(S.Fragment,{children:h}):Object(S.jsx)(S.Fragment,{children:i||""}),Object(S.jsx)("img",{src:cn})]}),Object(S.jsxs)(sn,{ref:O,className:l?"open":"",children:[Object(S.jsx)(ln,{children:i}),e.map((function(n){var e="";return Object.keys(n).forEach((function(t){e=Object(S.jsx)(ln,{selected:t==b,onClick:function(){return function(n,e){c&&c(n),x(n),m(e),p(!1)}(t,n[t])},children:n[t]},t)})),e}))]})]}))},bn=(t(34),h.b.input.attrs({placeholderStyle:{color:"#8D8D8D",fontWeight:400,fontSize:"14px"}})(pn||(pn=Object(f.a)(["\n    width:100%;\n    display:flex;\n    align-items:center;\n\n    cursor:pointer;\n\n    padding-top:3px;\n    padding-left:10px;\n    padding-bottom:3px;\n    \n    border:none;\n    outline:0;\n    color:#8D8D8D;\n    font-weight:400;\n    font-size:14px;\n    border-bottom: 2px solid #A8A8A8;\n\n    &::placeholder,\n    &::-webkit-input-placeholder {\n        opacity:1;\n        color:#8D8D8D;\n        font-weight:400;\n        font-size:14px;\n    }\n    &:-ms-input-placeholder {\n        color:#8D8D8D;\n        font-weight:400;\n        font-size:14px;\n    }\n\n    &:hover{\n        border-bottom: 2px solid #A8A8A8;\n    }\n"])))),jn=Object(h.b)(sn)(un||(un=Object(f.a)(["\n    top:42px;\n"])));var xn=function(n){var e=n.options,t=n.label,i=n.placeholder,c=n.value,a=n.onSelect,o=Object(s.useState)(!1),r=Object(j.a)(o,2),l=r[0],p=r[1],u=Object(s.useState)(""),d=Object(j.a)(u,2),b=d[0],x=d[1],g=Object(s.useState)([]),f=Object(j.a)(g,2),h=f[0],m=f[1],O=Object(s.useState)(""),v=Object(j.a)(O,2),w=v[0],y=v[1],D=Object(s.useRef)(null),k=Object(s.useRef)(null);function C(){var n={};""!=w.replace(/\s/g,"")&&Object.keys(e).forEach((function(t){e[t].indexOf(w)>=0&&(n[t]=e[t])})),m(n)}function E(n){D.current&&!D.current.contains(n.target)&&p(!1)}return Object(s.useEffect)((function(){return document.addEventListener("mousedown",E),function(){document.removeEventListener("mousedown",E)}}),[]),Object(s.useEffect)((function(){C()}),[c]),Object(s.useEffect)((function(){C()}),[w]),Object(s.useEffect)((function(){k.current&&k.current.focus()}),[l]),Object(S.jsxs)(an,{children:[Object(S.jsx)(on,{children:t}),l?Object(S.jsx)(bn,{ref:k,value:w,onChange:function(n){return e=n.target.value,void y(e);var e},placeholder:i,onBlur:function(){return p(!1)}}):Object(S.jsxs)(rn,{onClick:function(){p(!0)},children:[c?Object(S.jsx)(S.Fragment,{children:b}):Object(S.jsx)(S.Fragment,{children:i||""}),Object(S.jsx)("img",{src:cn})]}),Object(S.jsxs)(jn,{ref:D,className:l?"open":"",children:[Object(S.jsx)(ln,{children:i}),Object.keys(h).map((function(n){return Object(S.jsx)(ln,{selected:n===c,onClick:function(){return function(n,e){a&&a(n),x(e),p(!1)}(n,h[n])},children:h[n]},n)}))]})]})};var gn,fn,hn=function(n){var e=n.label,t=Object(A.a)(n,["label"]);return Object(S.jsxs)(an,{children:[Object(S.jsx)(on,{children:e}),Object(S.jsx)(bn,Object(z.a)({},t))]})},mn=h.b.div(gn||(gn=Object(f.a)(["\n    margin-top: 123px;\n\n    padding: 0 22px;\n\n    width:min(100%, 1366px);\n    margin-left: auto;\n    margin-right: auto;\n    display:flex;\n    flex-direction:column;\n    flex-flow: wrap;\n    gap: 22px;\n    \n\n    @media(min-width:1506px){\n        padding:0; \n        flex-direction:row;\n        gap: 58px;\n    }\n"]))),On=h.b.h4(fn||(fn=Object(f.a)(["\n    color:red;\n    font-weight:lighter;\n    margin:30px auto;\n"]))),vn=X.a.customList("countryCallingCode","{countryNameEn}: +{countryCallingCode}"),wn=X.a.customList("officialLanguageCode","{officialLanguageNameEn}"),yn=X.a.customList("countryCode","{countryNameEn}"),Dn=[{region:"Regi\xe3o"},{capital:"Capital"},{lang:"Linguagem"},{alpha:"Pa\xeds"},{callingcode:"C\xf3digo de Liga\xe7\xe3o"}],kn=[{americas:"Am\xe9ricas"},{asia:"\xc1sia"},{africa:"\xc1frica"},{europe:"Europa"},{oceania:"Oceania"}],Sn={lang:"Digite uma L\xedngua",alpha:"Digite um Pa\xeds",callingcode:"Digite um C\xf3digo de Liga\xe7\xe3o"},Cn={lang:"Regi\xe3o",alpha:"Pa\xeds",callingcode:"Codigo de Liga\xe7\xe3o"},En={lang:wn,alpha:yn,callingcode:vn};var Ln,Fn=function(){var n=Object(b.g)().region,e=Object(s.useState)(n?"region":""),t=Object(j.a)(e,2),i=t[0],c=t[1],a=Object(s.useState)(n?n.toLowerCase():""),o=Object(j.a)(a,2),r=o[0],l=o[1],p=Object(s.useState)([]),u=Object(j.a)(p,2),d=u[0],x=u[1],f=Object(s.useState)(!1),h=Object(j.a)(f,2),m=h[0],O=h[1];function v(){g.a.get("https://restcountries.eu/rest/v2/".concat(i,"/").concat(r)).then((function(n){var e=n.status,t=n.data;n.statusText;200==e&&x("alpha"===i?[t]:t),O(!1)})).catch((function(n){var e;404===(null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.status)&&(x([]),O(!0))}))}return Object(s.useEffect)((function(){n&&v()}),[]),Object(s.useEffect)((function(){l("")}),[i]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W,{}),Object(S.jsxs)(mn,{children:[Object(S.jsx)(dn,{label:"Filtrar Por",placeholder:"Escolha uma Op\xe7\xe3o",options:Dn,onSelect:function(n){return c(n)},className:!i&&"field-margin"}),"region"===i&&Object(S.jsx)(dn,{label:"Regi\xe3o",placeholder:"Escolha uma regi\xe3o",options:kn,onSelect:function(n){return l(n)}}),("lang"===i||"alpha"===i||"callingcode"===i)&&Object(S.jsx)(xn,{value:r,label:Cn[i],placeholder:Sn[i],options:En[i],onSelect:function(n){return l(n)}}),"capital"===i&&Object(S.jsx)(hn,{label:"Capital",placeholder:"Digite uma Capital",value:r,onChange:function(n){return l(n.target.value)}}),Object(S.jsx)(tn,{onClick:v,children:"Pesquisar"})]}),m&&Object(S.jsx)(On,{children:" Nenhum Pa\xeds Encontrado!"}),Object(S.jsx)(L,{countries:d})]})},zn=Object(h.a)(Ln||(Ln=Object(f.a)(["\n\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');\n\n    * {\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n    }\n\n    *, button, input{\n        border:0;\n        background:none;\n        font-family: 'Montserrat', sans-serif;\n    }\n\n    #root{\n        margin-top:100px;\n        min-height: calc(100vh - 100px);\n\n        display:flex;\n        flex-direction:column;\n    }\n\n    .field-margin{\n        margin-bottom:85px;\n    }\n\n    @media(min-width:1168px){\n        .field-margin{\n            margin-bottom:0;\n        }\n    }\n\n\n    :root {\n        --primary: #6D2080;\n    }\n"])));var An=function(){return Object(S.jsxs)(d.a,{children:[Object(S.jsxs)(b.c,{children:[Object(S.jsx)(b.a,{exact:!0,path:"/:region?",component:Fn}),Object(S.jsx)(b.a,{exact:!0,path:"/country/:alpha",component:Q})]}),Object(S.jsx)(zn,{})]})};u.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(An,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bd7adc98.chunk.js.map