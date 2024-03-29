"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5458],{99594:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=t(85893),o=t(11151);const n={title:"Migrations",sidebar_label:"Migrations",sidebar_position:9,slug:"/ibc/light-clients/wasm/migrations"},r="Migrations",c={id:"light-clients/wasm/migrations",title:"Migrations",description:"This guide provides instructions for migrating 08-wasm versions.",source:"@site/versioned_docs/version-v8.1.x/03-light-clients/04-wasm/09-migrations.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/migrations",permalink:"/v8/ibc/light-clients/wasm/migrations",draft:!1,unlisted:!1,tags:[],version:"v8.1.x",sidebarPosition:9,frontMatter:{title:"Migrations",sidebar_label:"Migrations",sidebar_position:9,slug:"/ibc/light-clients/wasm/migrations"},sidebar:"defaultSidebar",previous:{title:"Client",permalink:"/v8/ibc/light-clients/wasm/client"},next:{title:"Overview",permalink:"/v8/middleware/ics29-fee/overview"}},a={},l=[{value:"From ibc-go v7.3.x to ibc-go v8.0.x",id:"from-ibc-go-v73x-to-ibc-go-v80x",level:2},{value:"Chains",id:"chains",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"migrations",children:"Migrations"}),"\n",(0,s.jsx)(i.p,{children:"This guide provides instructions for migrating 08-wasm versions."}),"\n",(0,s.jsx)(i.h2,{id:"from-ibc-go-v73x-to-ibc-go-v80x",children:"From ibc-go v7.3.x to ibc-go v8.0.x"}),"\n",(0,s.jsx)(i.h2,{id:"chains",children:"Chains"}),"\n",(0,s.jsxs)(i.p,{children:["In the 08-wasm versions compatible with ibc-go v7.3.x and above from the v7 release line, the checksums of the uploaded Wasm bytecodes are all stored under a single key. From ibc-go v8.0.x the checksums are stored using ",(0,s.jsx)(i.a,{href:"https://docs.cosmos.network/v0.50/build/packages/collections#keyset",children:(0,s.jsx)(i.code,{children:"collections.KeySet"})}),", whose full functionality became available in Cosmos SDK v0.50. There is therefore an ",(0,s.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/module.go#L115-L118",children:"automatic migration handler"})," configured in the 08-wasm module to migrate the stored checksums to ",(0,s.jsx)(i.code,{children:"collections.KeySet"}),"."]})]})}function m(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>r});var s=t(67294);const o={},n=s.createContext(o);function r(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);