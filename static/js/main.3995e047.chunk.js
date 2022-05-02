(this.webpackJsonpcocktails=this.webpackJsonpcocktails||[]).push([[0],{160:function(e,t){},170:function(e,t){},222:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(35),s=n.n(r),o=n(37),i=n(7),l=n(8),j=n.n(l),d=n(233),u=n(237),b=Object({NODE_ENV:"production",PUBLIC_URL:"/cocktails",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"contract.lewisjacobs.testnet";var x=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(57),h=n(67),O=x("testnet");function m(){return(m=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new p.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new p.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["getCocktail","getCocktails"],changeMethods:["makeCocktail","setCocktail","deleteCocktail"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(O.contractName)}function v(){window.walletConnection.signOut(),window.location.reload()}var C=n(235),k=n(230),N=n(240),y=n(1),I=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(C.a,{children:[Object(y.jsx)(C.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(y.jsxs)(y.Fragment,{children:[n," ",Object(y.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(y.jsx)(k.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(y.jsxs)(C.a.Menu,{className:"shadow-lg border-0",children:[Object(y.jsx)(C.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(y.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(y.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(y.jsx)("span",{className:"font-monospace",children:t})]})}),Object(y.jsx)(C.a.Divider,{}),Object(y.jsxs)(C.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(y.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},S=n(59),T=(n(217),function(){return Object(y.jsx)(S.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),F=function(e){var t=e.text;return Object(y.jsxs)("div",{children:[Object(y.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(y.jsx)("span",{className:"text-secondary mx-1",children:t})]})},E=function(e){var t=e.text;return Object(y.jsxs)("div",{children:[Object(y.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(y.jsx)("span",{className:"text-secondary mx-1",children:t})]})},U={text:""};F.defaultProps=U,E.defaultProps=U;var P=n(2),R=n(144),A=n(234),B=n(236),_=n(146),D=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),x=b[0],p=b[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),m=O[0],f=O[1],g=Object(c.useState)(""),w=Object(i.a)(g,2),v=w[0],C=w[1],k=Object(c.useState)(0),N=Object(i.a)(k,2),I=N[0],S=N[1],T=Object(c.useState)(!1),F=Object(i.a)(T,2),E=F[0],U=F[1],P=function(){return U(!1)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(R.a,{onClick:function(){return U(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(y.jsx)("i",{class:"bi bi-plus"})}),Object(y.jsxs)(A.a,{show:E,onHide:P,centered:!0,children:[Object(y.jsx)(A.a.Header,{closeButton:!0,children:Object(y.jsx)(A.a.Title,{children:"New Cocktail"})}),Object(y.jsx)(B.a,{children:Object(y.jsxs)(A.a.Body,{children:[Object(y.jsx)(_.a,{controlId:"inputName",label:"Cocktail name",className:"mb-3",children:Object(y.jsx)(B.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of cocktail"})}),Object(y.jsx)(_.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(y.jsx)(B.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){C(e.target.value)}})}),Object(y.jsx)(_.a,{controlId:"inputIngredients",label:"Ingredients",className:"mb-3",children:Object(y.jsx)(B.a.Control,{as:"textarea",placeholder:"ingredients",style:{height:"80px"},onChange:function(e){d(e.target.value)}})}),Object(y.jsx)(_.a,{controlId:"inputDecoration",label:"Decoration",className:"mb-3",children:Object(y.jsx)(B.a.Control,{as:"textarea",placeholder:"decoration",style:{height:"80px"},onChange:function(e){p(e.target.value)}})}),Object(y.jsx)(_.a,{controlId:"inputRecipe",label:"Recipe",className:"mb-3",children:Object(y.jsx)(B.a.Control,{as:"textarea",placeholder:"recipe",style:{height:"80px"},onChange:function(e){f(e.target.value)}})}),Object(y.jsx)(_.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(y.jsx)(B.a.Control,{type:"text",placeholder:"Price",onChange:function(e){S(e.target.value)}})})]})}),Object(y.jsxs)(A.a.Footer,{children:[Object(y.jsx)(R.a,{variant:"outline-secondary",onClick:P,children:"Close"}),Object(y.jsx)(R.a,{variant:"dark",disabled:!(r&&j&&x&&m&&v&&I),onClick:function(){t({name:r,ingredients:j,decoration:x,recipe:m,image:v,price:I}),P()},children:"Save product"})]})]})]})},L=n(145),H=n(239),M=n(231),W=function(e){var t=e.Cocktail,n=e.make,c=window.walletConnection.account(),a=t.id,r=t.price,s=t.name,o=t.ingredients,i=t.decoration,l=t.recipe,j=t.made,d=t.image;return Object(y.jsx)(L.a,{children:Object(y.jsxs)(H.a,{className:" h-100",children:[Object(y.jsx)(H.a.Header,{children:Object(y.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(y.jsx)("span",{className:"text-secondary",children:s}),Object(y.jsxs)(M.a,{bg:"secondary",className:"ms-auto",children:["Made ",j," time",1===j?"":"s"]})]})}),Object(y.jsx)("div",{className:" ratio ratio-4x3",children:Object(y.jsx)("img",{src:d,alt:s,style:{objectFit:"cover"}})}),Object(y.jsxs)(H.a.Body,{className:"d-flex flex-column",children:[Object(y.jsx)(H.a.Text,{className:"flex-grow-1 h5",children:"Ingredients"}),null===o||void 0===o?void 0:o.split("\n").map((function(e){return Object(y.jsx)(H.a.Text,{className:"flex-grow-1",style:{marginBottom:"0px"},children:e})})),Object(y.jsx)(H.a.Text,{className:"flex-grow-1 h5",style:{marginTop:"10px"},children:"Decoration"}),null===i||void 0===i?void 0:i.split("\n").map((function(e){return Object(y.jsx)(H.a.Text,{className:"flex-grow-1",style:{marginBottom:"0px"},children:e})})),Object(y.jsx)(H.a.Text,{className:"flex-grow-1 h5",style:{marginTop:"10px"},children:"Recipe"}),Object(y.jsx)(H.a.Text,{className:"flex-grow-1",children:l}),c.accountId?Object(y.jsxs)(R.a,{variant:"outline-dark",onClick:function(){n(a,r)},className:"w-100 py-3",children:["Make for ",p.utils.format.formatNearAmount(r)," NEAR"]}):null]})]})},a)},K=function(){return Object(y.jsx)("div",{className:"d-flex justify-content-center",children:Object(y.jsx)(k.a,{animation:"border",role:"status",className:"opacity-25",children:Object(y.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},z=n(232),J=n(238),q=1e14;function V(e){return G.apply(this,arguments)}function G(){return(G=Object(o.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.makeCocktail({cocktailId:n},q,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(){var e=window.walletConnection.account(),t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),l=Object(i.a)(s,2),d=l[0],u=l[1],b=Object(c.useCallback)(Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=r,e.next=5,window.contract.getCocktails();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),x=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u(!0),(n=t,n.id=Object(J.a)(),n.price=Object(h.parseNearAmount)(n.price+""),window.contract.setCocktail({cocktail:n})).then((function(e){b()})),Object(S.b)(Object(y.jsx)(F,{text:"Cocktail added successfully."}))}catch(c){console.log({error:c}),Object(S.b)(Object(y.jsx)(E,{text:"Failed to create a Cocktail."}))}finally{u(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V({id:t,price:n}).then((function(e){return b()}));case 3:Object(S.b)(Object(y.jsx)(F,{text:"Cocktail bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(S.b)(Object(y.jsx)(E,{text:"Failed to purchase Cocktail."}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(y.jsx)(y.Fragment,{children:d?Object(y.jsx)(K,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(y.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Cocktails"}),e.accountId?Object(y.jsx)(D,{save:x}):null]}),Object(y.jsx)(z.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:a.map((function(e){return Object(y.jsx)(W,{Cocktail:Object(P.a)({},e),make:p})}))})]})})},X=function(e){e.name;var t=e.login;return t?Object(y.jsx)(R.a,{onClick:t,variant:"dark",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"}):null};X.defaultProps={name:""};var Y=X,Z=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(o.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,f();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(T,{}),Object(y.jsxs)(d.a,{fluid:"md",children:[Object(y.jsx)(u.a,{className:"justify-content-end pt-3 pb-5",children:Object(y.jsx)(u.a.Item,{children:e.accountId?Object(y.jsx)(I,{address:e.accountId,amount:a,symbol:"NEAR",destroy:v}):Object(y.jsx)(Y,{login:w})})}),Object(y.jsx)("main",{children:Object(y.jsx)(Q,{})})]})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,241)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(223),n(220),n(221);window.nearInitPromise=function(){return m.apply(this,arguments)}().then((function(){s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Z,{})}),document.getElementById("root"))})).catch(console.error),$()}},[[222,1,2]]]);
//# sourceMappingURL=main.3995e047.chunk.js.map