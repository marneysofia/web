(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),a=(n(0),n(275)),o={id:"sign-in-with-github",title:"Sign in with GitHub"},s={id:"guides/sign-in-with-github",title:"Sign in with GitHub",description:'In this document we will take a look at setting up "Sign in with GitHub" using',source:"@site/docs/guides/sign-in-with-github.mdx",permalink:"/kratos/docs/next/guides/sign-in-with-github",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/sign-in-with-github.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588771753,sidebar:"docs",previous:{title:"Hooks",permalink:"/kratos/docs/next/self-service/hooks/index"},next:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/next/guides/zero-trust-iap-proxy-identity-access-proxy"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'In this document we will take a look at setting up "Sign in with GitHub" using\nORY Kratos.'),Object(a.b)("p",null,"Run the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart")," with Docker Compose:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'# This assumes that you have ORY Kratos checked out locally and\n# that your current directory ("pwd") is the folder where ORY Kratos\n# is.\n\n$ make quickstart\n')),Object(a.b)("p",null,'To set up "Sign in with GitHub" you must create a\n',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/"}),"GitHub OAuth2 Client"),'\nand set the "Authorization callback URL" to\n',Object(a.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/oidc/callback/github"),".\nThe pattern of this URL is\n",Object(a.b)("inlineCode",{parentName:"p"},"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/browser/flows/registration/strategies/oidc/callback/<provider-id>"),".\nThe provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file (explained in paragraphs)."),Object(a.b)("p",null,"As explained in\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Credentails"),",\nyou must also create a JSON Schema for the provider. Save the JSON Schema in\n",Object(a.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/github.schema.json"),".\nThe following schema takes take ",Object(a.b)("inlineCode",{parentName:"p"},"email_primary")," maps it to ",Object(a.b)("inlineCode",{parentName:"p"},"traits.email"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/github.schema.json"',title:'"contrib/quickstart/kratos/email-password/github.schema.json"'}),'{\n  "$id": "http://mydomain.com/github.schema.json ",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "email_primary": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "mappings": {\n          "identity": {\n            "traits": [\n              {\n                "path": "email"\n              }\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"Now, enable the GitHub provider in the ORY Kratos config located at\n",Object(a.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/.kratos.yml"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/.kratos.yml"',title:'"contrib/quickstart/kratos/email-password/.kratos.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: github # this is `<provider-id>` in the Authorization callback URL\n            provider: github\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitHub\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitHub\n            schema_url: file:///etc/config/kratos/github.schema.json\n            scope:\n              - user:email\n")),Object(a.b)("p",null,"Next, open the login endpoint of the SecureApp and you should see the GitHub\nLogin option!"))}l.isMDXComponent=!0},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(h,s({ref:t},p,{components:n})):i.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);