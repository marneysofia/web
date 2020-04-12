(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return d}));var i=t(1),a=t(9),r=(t(0),t(213)),o={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"koenmtb1",lastUpdatedAt:1586597846,sidebar:"docs",previous:{title:"After Jobs",permalink:"/kratos/docs/next/self-service/workflows/jobs/after"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},l=[],u={rightToc:l};function d(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Kratos Configuration\n#\n\n## Data Source Name ##\n#\n# DSN is used to specify the database credentials as a connection URI.\n#\n# Examples:\n# - "postgres://user:\n#   password@postgresd:5432/database?sslmode=disable&max_conns=20&max_idle_conns=\\\n#   4"\n# - mysql://user:secret@tcp(mysqld:3306)/database?max_conns=20&max_idle_conns=4\n# - cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n# - sqlite:///var/lib/sqlite/db.sqlite?_fk=true&mode=rwc\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: sqlite:///var/lib/sqlite/db.sqlite?_fk=true&mode=rwc\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: https://bXycEQYxkKXzHalQiHRtWIWcfKafb.jjhpuf,p8,maWkjUtgjwvowomWjsSOYe1U6oaBNC0qjML8hN8mZ6Y+mazvKcSeQaShbcdOWX7w\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - null\n      - false\n      - 42487000.20195937\n      - false\n      - magna\n\n## selfservice ##\n#\nselfservice:\n  ## logout ##\n  #\n  logout:\n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: https://WVWamcOcNLQgXmBUTuaZVM.rzhCfnwseuSBZKpIZVnaKRZD8QhsXJ21fBNUfHTdi0+4AmC4B,0PAWoXD4R4kOye1,u1h\n\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: true\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: false\n\n      ## config ##\n      #\n      config:\n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: est cupidatat eu sint\n            provider: github\n            client_id: proident ex\n            client_secret: laboris\n            schema_url: https://mPbBL.xyflWvA\n            issuer_url: http://hUOFRNyUqqqBSsA.epnwfTfy2.Y,obppRZGav50Oaqn7.mZmTn4NjPSW6ygfoEg27LJAw-JZPZRnKcdq2bSycUhsLjcC\n            auth_url: http://R.kphyk.AYNt5FvZ8Io6+CgG5m.J-82RcCRYqsKoM0HGYFlx5QBxPEJ0RfNjN1yrqMdvaBZnKdtrCeX\n            token_url: https://tFaCrEdJdccSLPJVUPnTJhPt.derZ+rBRMLzcto\n            scope:\n              - qui ipsum Duis adipisicing commodo\n              - magna ex sit\n          - id: magna aliqua\n            provider: github\n            client_id: quis sit ut ea\n            client_secret: minim\n            schema_url: https://BE.hiewQTohjUBFNU9JtgOyHIwSe1gJOW+GghGfzkJZ0HrdjUQJtOVctKx.mwv3Kdui+-zF\n            issuer_url: http://bcLRIhBiWczguKaVprmFCDmhZFgpMouHP.iaDNXV5M3OfJ++.0\n            auth_url: https://GsNsVll.tcgyursGcokgthysFi-eW5JVskphMeT2xJVN2jsi7wbaA4wgAX.PqbZMYCVrS4L\n            token_url: https://jEQAMJxJfLVFQdS.ykwXu7RyZPsKu3TlTwMkveEcmVzfgH0K-WNDQYftUg6w\n            scope:\n              - proident\n          - id: et\n            provider: github\n            client_id: consectetur culpa\n            client_secret: ex amet tempor Ut\n            schema_url: http://dXhFNqGzC.gwQivliFf3s2toHkwUulxqVHIDbuxVBSLQACXw2\n            issuer_url: https://THMZtRWVKzgWHgqaqAJOBTdo.dwpBgnQXpmdnNKoUyJq4-.pclX+CBsyW35gciR2-TM\n            auth_url: https://NqawwfalBWf.jgiRNcTQ5r+9Y8roUNRZJc0k\n            token_url: http://GnmTZACmpKGdhRJXOhWFboLf.roNrtgm+TBL-lYNawcGdUJocrpqdWmr3tD9RteOncm6wTqQB-F-,WlcN-CuKoBsC\n            scope:\n              - non eu in elit commodo\n              - consequat est ad Excepteur esse\n              - proident\n          - id: in non fugiat aute\n            provider: github\n            client_id: quis\n            client_secret: nostrud cupidatat labore\n            schema_url: http://lMxRsLnaxgxsMgYtQXC.tfaFVdXgjkxEzp\n            issuer_url: http://LXddtFPtdbTmep.tohQBjJzlPeGYJUGuWd8aOsvyKGNXlun\n            auth_url: https://hqBcuUoNaxJVdQ.eijqXwg1\n            token_url: https://qKkJzVgJCz.ebspSoriZg,Q19yRnk1weVffD09t8VMamf8oUP0vmBkk1NFtfMKO7al4B1fIt4ILRSiRrRTchUB.jm\n            scope:\n              - velit labore quis deserunt\n              - non tempor nulla cillum\n\n  ## settings ##\n  #\n  settings:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 737464299h\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 774157451s\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: verify\n\n      ## profile ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE=<value>\n      #\n      profile:\n        - job: redirect\n          config:\n            default_redirect_url: http://udBPelWtVhmBqjvSVyWqKqjC.azuj36x2WXRqPMQ7WVmm+ZqWH,4GZp8XQJPKBt2JAVaNIG\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: https://zJOLqFyGQjr.weuFYbXWo7kyDuGtfBi.VdWW.Yt6QzVlOtaNNnwWYpXg7VQRI-ZR8AbwQIE\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: http://RUXfi.xxwukV5cm.3fOU4qW\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: https://tlq.rdYQJ-hnQowejpEp+vQ0sCbvsWjZy+ggH\n            allow_user_defined_redirect: true\n        - job: verify\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 902874ms\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 40416618793m\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 14588us\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://nOEMYtPljshEmNy.mgb+abSqgUcUjqJJe5skV\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: http://aldsRG.kzxmfiRod0jrPCaeJYGa79CnvYtHLm8LGpC2-s0lInml8qh6V\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://euIvgvbftqjdQMuUvsbWfpxYl.ytfPHdN847UQkZo\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://uePGfmrzbpqpXujEMvvzRHW.tbrHbFTatIIgxKUuvq\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: http://cNAiZzPhyNQMZ.mlmCOk.,LRpBt160eU+9agxeyhrcO\n          allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: redirect\n          config:\n            default_redirect_url: https://Tw.yoFTqxxLvWBgviaU8FoU1z+baTbSFDJRH03MxVt+RcJOQUNZlcvLIzlvc1xAotzpgqwtz\n            allow_user_defined_redirect: true\n        - job: revoke_active_sessions\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: revoke_active_sessions\n        - job: redirect\n          config:\n            default_redirect_url: http://aUJo.biwfb.ieVxZ8pYsJvtSlBm\n            allow_user_defined_redirect: false\n        - job: session\n        - job: redirect\n          config:\n            default_redirect_url: http://YAuBIeBJWkrwnSgnBvdSUSjoSZQc.hxmicK4EXmb,guXFQ6tbCfNkGer-xb4Ao\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: https://EgsUFCsUtFEbqNydAlwUGaYLNlR.ikuemlCOYRdVAsUsJDhJJncwURUdJVDNN8MrIvyrlilqtxVY\n            allow_user_defined_redirect: false\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 16h\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://BGtDv.tantZ-JEdxGwOoin7lRnUGb1HlN-TKXT\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://WVoaPZNJPCyntOqIQLXhBSiyhHGIpmj.wjpbAcwgT9i,dThCa.iaMkLFtTRoDi2mc+9-gI+b49vg\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: http://GdIWHrbSEVVoLepOEQrcLBgC.rqklYcWSfwh2J,tXmkB\n          allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: redirect\n          config:\n            default_redirect_url: http://Qv.gezWSEdZC6-l\n            allow_user_defined_redirect: false\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: redirect\n          config:\n            default_redirect_url: http://yDpTefZxBckoPsgiRpjyIlhSPwg.kyua8FbaU3gmEEtbrmUsYtc6bT\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: http://YxmFXccjnAlSYkpdJbFGIScG.rorc3+upmoZVkx\n            allow_user_defined_redirect: true\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: XtTTijklvM9@bhhW.mpcw\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: magna\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: magna aute ut dolore labore\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: Excepteur ut in pariatur id\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## settings_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_SETTINGS_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_SETTINGS_UI=<value>\n  #\n  settings_ui: https://QuSCeEkdgBokNPqmYRN.apezTK-p+gD-1z+HHgGElqqBd5cIqv5NOMXR+\n\n  ## mfa_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: https://BDmJheXChhqMgLYGhR.rzvVDHxadIrgC8WzlFKK4dKSUBJpgu6--Lk+e\n\n  ## login_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: http://kPZevDFRTcKuJ.rtsRH,dCqk3fhLSt0b3jPqofCEmDedRWG3sg.NugzZGqjd+h99+0J.\n\n  ## registration_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: https://MRweidgSvUGSVoKxrHhQSFRqzFyZdbVIx.fyGhfekKhkqLijmAxY-eoO2igPM2Ax2NlkoR6bAQxlKleA9WMJ-tU\n\n  ## error_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://upAPZLaowPUWDbQPmqjT.hfrwGYRxs973YQ-UVbDj0VFZK\n\n  ## Verify User Interface URL ##\n  #\n  # The URL of the Verify User Interface, the page where users can request activate and / or verify their email or telephone number.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://oVkkrWCBcixNEejSEWTINCrEWufhuwtgV.tqqlbOPfjjOdhX.DJonoRo8tXQ2CowEtBj5rE4z5POSK-66n5q,T0FwKp93V\n\n  ## default_return_to ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: https://GipRCGlQDIM.iedLuti48jst..mA\n\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: http://GNkGRLmXJkiXsLiBl.hgkCirai9LQCeF1MSryVQtDpozeKmgt8JmJ6Z\n\n    ## admin ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: http://lJiHKEthMMTizPkcbOKGT.svrUliw3UCCay2K5qzQlhhHLFPPXB9h8gImOTqkb\n\n  ## whitelisted_return_to_domains ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  #\n  whitelisted_return_to_domains:\n    - https://VABS.gqmOyEg.SEP\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: info\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: json\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - et autealiqua dolore id\n    - ut ea dolorfugiat ea enim amet minim\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 12562193\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 77235645\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 54638654\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 67322389\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 15393962\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: Strict\n')))}d.isMDXComponent=!0},213:function(n,e,t){"use strict";t.d(e,"a",(function(){return S})),t.d(e,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),d=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},S=function(n){var e=d(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},_=Object(i.forwardRef)((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),S=d(t),_=i,m=S["".concat(o,".").concat(_)]||S[_]||c[_]||r;return t?a.a.createElement(m,s({ref:e},u,{components:t})):a.a.createElement(m,s({ref:e},u))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=_;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}_.displayName="MDXCreateElement"}}]);