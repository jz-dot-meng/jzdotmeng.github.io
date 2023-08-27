(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{6142:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post/exploring-digital-identities-a-plan",function(){return i(4961)}])},597:function(e,t,i){"use strict";i.d(t,{X:function(){return o}});var n=i(4246),s=i(9894),a=i.n(s);i(7378);var o=function(e){var t=e.data,i=e.children;return(0,n.jsx)("div",{className:"flex justify-center h-full p-8 overflow-y-scroll no-scrollbar",children:(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsxs)("section",{className:"flex flex-col gap-4",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(a(),{href:"/",children:"@jz-dot-meng"})}),(0,n.jsxs)("div",{className:"flex items-start flex-col gap-1 md:items-end md:flex-row",children:[(0,n.jsx)("h1",{children:t.title}),t.secondaryTitle&&(0,n.jsxs)("span",{className:"pb-2",children:[" :: ",t.secondaryTitle]})]}),(0,n.jsxs)("div",{className:"text-xs md:text-sm flex flex-col gap-1",children:[(0,n.jsxs)("p",{children:["first drafted: ",t.firstDrafted.toDateString()]}),t.lastEdited&&(0,n.jsxs)("p",{className:"italic text-grey-600",children:["last edited: ",t.lastEdited.toDateString()]})]}),t.tags.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"text-grey-600 text-xs",children:"tags:"})," ",t.tags.map(function(e,i){return(0,n.jsxs)("span",{children:[(0,n.jsx)(a(),{href:"/blog",children:e}),i!==t.tags.length-1&&", "]},i)})]})]}),(0,n.jsx)("section",{className:"py-8 flex flex-col gap-4",children:i}),(0,n.jsx)("footer",{className:"text-xs pb-8",children:(0,n.jsx)(a(),{href:"/blog",children:"← Return to blogs"})})]})})}},273:function(e,t,i){"use strict";i.d(t,{Ax:function(){return s},e2:function(){return n},xu:function(){return a}});var n=[{url:"/minigame/memory",name:"memory"},{url:"/minigame/stroop",name:"stroop effect"}],s=[{url:"/tools/lowercase-me",name:"lowercase me"},{url:"/tools/hex-to-number",name:"hex to number"},{url:"/tools/date-formatter",name:"date formatter"}],a={"exploring-digital-identities-a-plan":{title:"exploring digital identities - a plan",secondaryTitle:"creating an online social space",description:"the start of a deep dive into cryptography",firstDrafted:new Date(2023,4,25),tags:["project"]},"digital-identities-and-impermanence":{title:"digital identities, and impermanence",secondaryTitle:"a reflection, and new beginnings",description:"a short post explaining the reasoning for this new project",firstDrafted:new Date(2023,4,21),tags:["blogging"]}}},4961:function(e,t,i){"use strict";i.r(t);var n=i(4246),s=i(597),a=i(273),o=i(9894),r=i.n(o);i(7378),t.default=function(){var e=a.xu["exploring-digital-identities-a-plan"];return(0,n.jsxs)(s.X,{data:e,children:[(0,n.jsx)("i",{children:"This post serves as both a preamble and outline of a three-part plan, and a means to hold myself accountable for executing on said plan. Given that I work full-time as a freelance/contractor software dev, I'll allow myself the concession of not setting concrete timeframes, but here goes:"}),(0,n.jsxs)("p",{children:["Recently I have been reading and watching a lot of videos about"," ",(0,n.jsx)(r(),{href:"https://www.youtube.com/watch?v=RCJdPiogUIk",target:"_blank",children:"hacking"}),","," ",(0,n.jsx)(r(),{href:"https://github.com/0xJuancito/multichain-auditor",target:"_blank",children:"penetration testing/security auditing"})," ","and"," ",(0,n.jsx)(r(),{href:"https://salt.security/blog/a-new-oauth-vulnerability-that-may-impact-hundreds-of-online-services",target:"_blank",children:"post-hack vulnerability breakdowns"}),". This interest was born from the 'hacker'-esque mindset embraced by the current startup that I'm working at, fostered by the genius whizz of a software dev that I count lucky to call my colleague - as part of the 'build fast, iterate better' mentality, there's a lot of reverse-engineering API calls, and scraping off services that don't secure their database behind (standard?) security protocols (so we don't need to devote dev time to roll our own modules and infrastructure in order to manually index the same publicly-available data, not for nefarious reasons!)."]}),(0,n.jsxs)("p",{children:["Tangentially, this has also meant touching on cryptography, and trying to understand (at least on a surface level, if not more in depth) for example the steps involved from start to end how your computer reaches out to a server, and how the two"," ",(0,n.jsx)(r(),{href:"https://tls13.xargs.org/#client-key-exchange-generation",children:"complete a handshake"})," ","to generate a shared key with which data can be encrypted on one end and decrypted on the other."]}),(0,n.jsx)("p",{children:"This led to the following idea - what better way to learn more about the processes involved, than to build something of my own that implements it? Now I know, the first rule (if there were any) in the cryptography community is for non-specialists to NOT run their own implementation of existing cryptographic protocols, which makes complete sense! And so where ever possible, I'll seek to use open source cryptography libraries, and also make very apparent that this is something I've built on my own, mainly for learning and novelty purposes, and not intended for anything secure."}),(0,n.jsx)("p",{children:"That being said, here's the plan:"}),(0,n.jsx)("h2",{children:"part 1: pseudonymous identities"}),(0,n.jsx)("i",{children:"goal: allow visitors to the site to generate a pseudonymous identity"}),(0,n.jsxs)("p",{children:["brief: visitors will be able opt in to creating + registering a pseudonymous identity, which will allow them to leave music suggestions on my"," ",(0,n.jsx)(r(),{href:"/music/recently-listened",children:"music page"}),", drop their high score on a leaderboard on each of my ",(0,n.jsx)(r(),{href:"/minigame/memory",children:"minigames"}),", and maybe even leave comments on these blog posts."]}),(0,n.jsxs)("p",{children:["technical: there'll be no need to sign-in to any third party service (Facebook, Google, etc.) - a private key will be generated for the public identity, and will be stored in the web browser's local storage, with the option to export (should anyone feel strongly enough to maintain the same identity across different browsers/devices). Storage of public identifiers, leaderboard and comments/suggestions in plain-text will initially be Google's"," ",(0,n.jsx)(r(),{href:"https://firebase.google.com/",children:"Firebase"}),", simply because I am familiar with the workflow to be able to get something up and running quickly"]}),(0,n.jsx)("h2",{children:"part 2: private messaging"}),(0,n.jsx)("i",{children:"goal: allow two visitors to instantiate a private messaging channel"}),(0,n.jsx)("p",{children:"brief: a registered identity can view other registered identities on this site, and request to connect with one to exchange private messages. on a semi-technical note, these messages will be stored in its encrypted form in Firebase storage, and should only be able to be decrypted locally in-browser by the two identities via their private keys."}),(0,n.jsxs)("p",{children:["tehcnical: a whole lot more research on my part needs to go into this: I only understand on a high level how ECDH works"," ",(0,n.jsx)("i",{children:"just so two users can agree on a shared key"}),", without even considering how to use that shared key to encrypt messages. The idea is that the server (and any other malicious actors listening in) can see the two public identities and see the shared key they agreed on, but without the private key shouldn't be able to do much with that information to reveal the messages themselves, since it would be computationally 'impossible' to decrypt them through brute force. Of course, other information can be leaked (i.e. time when the user sends the message, message length maybe?), but at this moment it's beyond the scope of what I'm looking to achieve."]}),(0,n.jsx)("h2",{children:"part 3: self-hosted?"}),(0,n.jsx)("i",{children:"goal: move away from a centralised store of data"}),(0,n.jsx)("p",{children:"brief: allow the user to self-custody their messages"}),(0,n.jsxs)("p",{children:["technical: ??? (see ",(0,n.jsx)(r(),{href:"https://simplex.chat/",children:"SimpleX chat"})," as a possible implementation to draw inspiration from)"]}),(0,n.jsx)("p",{children:"While building this out, I'll try to be as open-source as possible with the implementation, including (if possible) the Firebase implementation, without leaking my own private API keys left and right."})]})}}},function(e){e.O(0,[894,774,888,179],function(){return e(e.s=6142)}),_N_E=e.O()}]);