(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return r})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return c}));var a=t(1),o=t(9),i=(t(0),t(175)),r={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/keto/docs/next/reference/configuration",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1587301980,sidebar:"docs",previous:{title:"AWS IAM Policies",permalink:"/keto/docs/next/engines/acp-aws"},next:{title:"REST API",permalink:"/keto/docs/next/reference/api"}},l=[],u={rightToc:l};function c(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If file ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.keto.yaml")," exists, it will be used as a configuration file which\nsupports all configuration settings listed below."),Object(i.b)("p",null,"You can load the config file from another source using the\n",Object(i.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(i.b)("inlineCode",{parentName:"p"},"keto --config path/to/config.yaml"),"."),Object(i.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(i.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"## ORY Kratos Configuration\n#\n\n## Data Source Name ##\n#\n# Sets the data source name. This configures the backend where ORY Keto persists data. If dsn is \"memory\", data will be written to memory and is lost when you restart this instance. ORY Hydra supports popular SQL databases. For more detailed configuration information go to: https://www.ory.sh/docs/hydra/dependencies-environment#sql\n#\n# Examples:\n# - postgres://user:password@host:123/database\n# - mysql://user:password@tcp(host:123)/database\n# - memory\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: mysql://user:password@tcp(host:123)/database\n\n## HTTP REST API ##\n#\nserve:\n  ## Port ##\n  #\n  # The port to listen on.\n  #\n  # Default value: 4456\n  #\n  # Examples:\n  # - 4456\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SERVE_PORT=<value>\n  # - Windows Command Line (CMD):\n  #    > set SERVE_PORT=<value>\n  #\n  port: 4456\n\n  ## Host ##\n  #\n  # The network interface to listen on.\n  #\n  # Examples:\n  # - localhost\n  # - 127.0.0.1\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SERVE_HOST=<value>\n  # - Windows Command Line (CMD):\n  #    > set SERVE_HOST=<value>\n  #\n  host: 127.0.0.1\n\n  ## Cross Origin Resource Sharing (CORS) ##\n  #\n  # Configure [Cross Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) using the following options.\n  #\n  cors:\n    ## Enable CORS ##\n    #\n    # If set to true, CORS will be enabled and preflight-requests (OPTION) will be answered.\n    #\n    # Default value: false\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_ENABLED=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_ENABLED=<value>\n    #\n    enabled: false\n\n    ## Allowed Origins ##\n    #\n    # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penality. Only one wildcard can be used per origin.\n    #\n    # Default value: *\n    #\n    # Examples:\n    # - - https://example.com\n    #   - https://*.example.com\n    #   - https://*.foo.example.com\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_ALLOWED_ORIGINS=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_ALLOWED_ORIGINS=<value>\n    #\n    allowed_origins:\n      - '*'\n\n    ## Allowed HTTP Methods ##\n    #\n    # A list of methods the client is allowed to use with cross-domain requests.\n    #\n    # Default value: GET,POST,PUT,PATCH,DELETE\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_ALLOWED_METHODS=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_ALLOWED_METHODS=<value>\n    #\n    allowed_methods:\n      - DELETE\n      - HEAD\n\n    ## Allowed Request HTTP Headers ##\n    #\n    # A list of non simple headers the client is allowed to use with cross-domain requests.\n    #\n    # Default value: Authorization,Content-Type\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_ALLOWED_HEADERS=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_ALLOWED_HEADERS=<value>\n    #\n    allowed_headers:\n      - dolor adipisicing\n      - irure\n      - id velit ut sint nisi\n      - culpa proident irure sunt in\n      - veniam\n\n    ## Allowed Response HTTP Headers ##\n    #\n    # Indicates which headers are safe to expose to the API of a CORS API specification\n    #\n    # Default value: Content-Type\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_EXPOSED_HEADERS=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_EXPOSED_HEADERS=<value>\n    #\n    exposed_headers:\n      - dolore tempor\n\n    ## Allow HTTP Credentials ##\n    #\n    # Indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n    #\n    # Default value: false\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_ALLOW_CREDENTIALS=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_ALLOW_CREDENTIALS=<value>\n    #\n    allow_credentials: true\n\n    ## Maximum Age ##\n    #\n    # Indicates how long (in seconds) the results of a preflight request can be cached. The default is 0 which stands for no max age.\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_MAX_AGE=<value>\n    #\n    max_age: -70832199\n\n    ## Enable Debugging ##\n    #\n    # Set to true to debug server side CORS issues.\n    #\n    # Default value: false\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_CORS_DEBUG=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_CORS_DEBUG=<value>\n    #\n    debug: true\n\n  ## HTTPS ##\n  #\n  # Configure HTTP over TLS (HTTPS). All options can also be set using environment variables by replacing dots (`.`) with underscores (`_`) and uppercasing the key. For example, `some.prefix.tls.key.path` becomes `export SOME_PREFIX_TLS_KEY_PATH`. If all keys are left undefined, TLS will be disabled.\n  #\n  tls:\n    ## Private Key (PEM) ##\n    #\n    key:\n      ## path ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_KEY_PATH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_KEY_PATH=<value>\n      #\n      path: path/to/file.pem\n\n      ## base64 ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_KEY_BASE64=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_KEY_BASE64=<value>\n      #\n      base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n    ## TLS Certificate (PEM) ##\n    #\n    cert:\n      ## path ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_CERT_PATH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_CERT_PATH=<value>\n      #\n      path: path/to/file.pem\n\n      ## base64 ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_CERT_BASE64=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_CERT_BASE64=<value>\n      #\n      base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n## Profiling ##\n#\n# Enables CPU or memory profiling if set. For more details on profiling Go programs read [Profiling Go Programs](https://blog.golang.org/profiling-go-programs).\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export PROFILING=<value>\n# - Windows Command Line (CMD):\n#    > set PROFILING=<value>\n#\nprofiling: ''\n\n## Log ##\n#\n# Configure logging using the following options. Logging will always be sent to stdout and stderr.\n#\nlog:\n  ## Level ##\n  #\n  # Debug enables stack traces on errors. Can also be set using environment variable LOG_LEVEL.\n  #\n  # Default value: info\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: info\n\n  ## Format ##\n  #\n  # The log format can either be text or JSON.\n  #\n  # Default value: text\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: json\n\n## tracing ##\n#\n# ORY Hydra supports distributed tracing.\n#\ntracing:\n  ## provider ##\n  #\n  # Set this to the tracing backend you wish to use. Currently supports jaeger. If omitted or empty, tracing will be disabled.\n  #\n  # Examples:\n  # - jaeger\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_PROVIDER=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_PROVIDER=<value>\n  #\n  provider: jaeger\n\n  ## service_name ##\n  #\n  # Specifies the service name to use on the tracer.\n  #\n  # Examples:\n  # - ORY Hydra\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_SERVICE_NAME=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_SERVICE_NAME=<value>\n  #\n  service_name: ORY Hydra\n\n  ## providers ##\n  #\n  providers:\n    ## jaeger ##\n    #\n    # Configures the jaeger tracing backend.\n    #\n    jaeger:\n      ## local_agent_address ##\n      #\n      # The address of the jaeger-agent where spans should be sent to.\n      #\n      # Examples:\n      # - 127.0.0.1:6831\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      #\n      local_agent_address: 127.0.0.1:6831\n\n      ## propagation ##\n      #\n      # The tracing header format\n      #\n      # Examples:\n      # - jaeger\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      #\n      propagation: jaeger\n\n      ## sampling ##\n      #\n      # Examples:\n      # - type: const\n      #   value: 1\n      #   server_url: http://localhost:5778/sampling\n      #\n      sampling:\n        ## type ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        #\n        type: const\n\n        ## value ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        #\n        value: 1\n\n        ## server_url ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        #\n        server_url: http://localhost:5778/sampling\n")))}c.isMDXComponent=!0},175:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return E}));var a=t(0),o=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=o.a.createContext({}),c=function(n){var e=o.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},m=function(n){var e=c(n.components);return o.a.createElement(u.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},p=Object(a.forwardRef)((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,r=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=c(t),p=a,E=m["".concat(r,".").concat(p)]||m[p]||d[p]||i;return t?o.a.createElement(E,s({ref:e},u,{components:t})):o.a.createElement(E,s({ref:e},u))}));function E(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,r[1]=s;for(var u=2;u<i;u++)r[u]=t[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);