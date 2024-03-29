"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5749],{66295:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(85893),o=i(11151);const s={title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},r="State verification",a={id:"light-clients/localhost/state-verification",title:"State Verification",description:"The localhost client handles state verification through the ClientState interface methods VerifyMembership and VerifyNonMembership by performing read-only operations directly on the core IBC store.",source:"@site/versioned_docs/version-v8.1.x/03-light-clients/02-localhost/05-state-verification.md",sourceDirName:"03-light-clients/02-localhost",slug:"/ibc/light-clients/localhost/state-verification",permalink:"/v8/ibc/light-clients/localhost/state-verification",draft:!1,unlisted:!1,tags:[],version:"v8.1.x",sidebarPosition:5,frontMatter:{title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},sidebar:"defaultSidebar",previous:{title:"Connection",permalink:"/v8/ibc/light-clients/localhost/connection"},next:{title:"Solomachine",permalink:"/v8/ibc/light-clients/solomachine/solomachine"}},c={},l=[];function h(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"state-verification",children:"State verification"}),"\n",(0,n.jsxs)(t.p,{children:["The localhost client handles state verification through the ",(0,n.jsx)(t.code,{children:"ClientState"})," interface methods ",(0,n.jsx)(t.code,{children:"VerifyMembership"})," and ",(0,n.jsx)(t.code,{children:"VerifyNonMembership"})," by performing read-only operations directly on the core IBC store."]}),"\n",(0,n.jsxs)(t.p,{children:["When verifying channel state in handshakes or processing packets the ",(0,n.jsx)(t.code,{children:"09-localhost"})," client can simply compare bytes stored under the standardized key paths defined by ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements",children:"ICS-24"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For existence proofs via ",(0,n.jsx)(t.code,{children:"VerifyMembership"})," the 09-localhost client will retrieve the value stored under the provided key path and compare it against the value provided by the caller. In contrast, non-existence proofs via ",(0,n.jsx)(t.code,{children:"VerifyNonMembership"})," assert the absence of a value at the provided key path."]}),"\n",(0,n.jsxs)(t.p,{children:["Relayers are expected to provide a sentinel proof when sending IBC messages. Submission of nil or empty proofs is disallowed in core IBC messaging.\nThe 09-localhost light client module defines a ",(0,n.jsx)(t.code,{children:"SentinelProof"})," as a single byte. Localhost client state verification will fail if the sentinel proof value is not provided."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"var SentinelProof = []byte{0x01}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(67294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);