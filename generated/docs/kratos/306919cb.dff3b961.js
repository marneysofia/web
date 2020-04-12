(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return S}));var i=t(1),a=t(9),r=(t(0),t(213)),o={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1586680937,sidebar:"docs",previous:{title:"After Jobs",permalink:"/kratos/docs/next/self-service/workflows/jobs/after"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},l=[],u={rightToc:l};function S(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Kratos Configuration\n#\n\n## Data Source Name ##\n#\n# DSN is used to specify the database credentials as a connection URI.\n#\n# Examples:\n# - "postgres://user:\n#   password@postgresd:5432/database?sslmode=disable&max_conns=20&max_idle_conns=\\\n#   4"\n# - mysql://user:secret@tcp(mysqld:3306)/database?max_conns=20&max_idle_conns=4\n# - cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n# - sqlite:///var/lib/sqlite/db.sqlite?_fk=true&mode=rwc\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: "postgres://user:\n  password@postgresd:5432/database?sslmode=disable&max_conns=20&max_idle_conns=\\\n  4"\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: http://aoIHfucPLZtIGjmuOeTdvaavyNsTmTOq.lyelDx7k+0yJLfNDiFjwvISd8rQB1CFqmjuBiUf1BbhyN9Rd4PTiUKaj+3IMUh4G7LMXTqSAT\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - 66347359.023707986\n\n## selfservice ##\n#\nselfservice:\n  ## logout ##\n  #\n  logout:\n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: http://P.vjtka6GIzxpX6Qk21d7HMtJZbVqjKcRRecEZZcp0AbA6HrAtr-mGSEvD6M0HDZHtVjTRLV\n\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: false\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: true\n\n      ## config ##\n      #\n      config:\n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: fugiat\n            provider: generic\n            client_id: sit qui mollit\n            client_secret: ex deserunt\n            schema_url: http://GVzW.iszcbJ.g9JqWVMZgdrlce0VHqBP\n            issuer_url: http://IQnmczbxWZlLLTmiyKmxDZSqasNT.elqhKs.azSEuZRp+DwwXZuWGbV1u\n            auth_url: http://QPnxuqaYkoGUGvYDjiRkRe.gagpFGGhdNNTmsl\n            token_url: https://MIezrCOacdtMoXGDmiPBO.uxwzIdh8eJOMkW76AiTc0U0wd59RRFmOK8oOR0yoPjvhwhkmY\n            scope:\n              - reprehenderit mollit\n              - cillum pariatur labore\n          - id: cillum cupidatat\n            provider: github\n            client_id: voluptate laborum\n            client_secret: ullamco non et\n            schema_url: http://bu.kend1bd-ReJ9F\n            issuer_url: http://fGwFxDirAwELwzcWkXNU.qmlphXTHoXFRppzKWbljwlUSpUi2QVNIZ1XApGZD0HR+IvIln4V4+DB\n            auth_url: http://symOahkIfv.onJ-bSnjIv-6bGs+C,hywXYj+A4uB-qssOA9WAgx6MUnakBOaD+iIv+,I89aSpnxP2p\n            token_url: http://RWmsVRmlJwbOOVOBqfLuKzQkyPkctJA.dhrmNax8KKIGFGDuRMglLKXFkTqD,G4raQTJ3\n            scope:\n              - exercitation laborum\n\n  ## settings ##\n  #\n  settings:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 14972679581m\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 0311us\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: redirect\n          config:\n            default_redirect_url: https://TfxzDgHUNKENQwKstDtdUmzeBqBuq.ksdyyf041cgYrA8jq3DxnUhZTkNJlRpsFoN1FvG8Q4urBiWtDM+nfVuXrTUZt0lp8PYALUT1OKd7NM33\n            allow_user_defined_redirect: true\n        - job: verify\n        - job: redirect\n          config:\n            default_redirect_url: http://zTklEIzHDpNuemWC.rbobPOGaSflMQbw0bVx+Z+wecCnNX9bCHOM6gRC\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: https://RZGolcdYJ.etWDXWUG42Lgvk1dH4gqvKKZ.Q4WyDMGOup-oc4J0ddp82+SVE5r+HM8t7eLgvzBg-QZrwuy,\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: http://D.bzgaDGmGGJq3EQkgYGXnaYTmi-WTNJMYgAo0msIzUp0\n            allow_user_defined_redirect: false\n\n      ## profile ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE=<value>\n      #\n      profile:\n        - job: verify\n        - job: redirect\n          config:\n            default_redirect_url: https://lRcVQBlRVDInepxBqaWcUvdlArsmsCizC.cvtaFTH0Bxg3Qg7cI+OZPEwZz,qwHPQW8+PqWw\n            allow_user_defined_redirect: true\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 3s\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 5735224061h\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 4629511m\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: https://awkxUowzAJVAmijRlrfkYGXBWpTOSzKy.fjgsJ6,dxw\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://abrFjVVgnbymmAzlLngqCOH.jysmca6nayFk90PMVWI+dVov9ppprDjHsxl3OCl8t\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: http://ir.kiwImkk.kCdaO0m9JMiAM9uF1fIobYXt,asj2mMmrjOtxBt6tNJqY4yGQo\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://mMB.bwY8J-oTS,ingizvIZT9Kmm8AKFMs7fTmQshwEDmj3dfqIa.ODTuP+CjnAflJNaHHegweZ.M-K\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://WEMiYzEBXP.dxRvfEamYRIolXVG\n          allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: session\n        - job: redirect\n          config:\n            default_redirect_url: http://VUXjbHbXcrIhiwuyUpGrAGxnIdTeS.swpOAg8DTevK\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: https://FDIhipIrlBXVPrElZnPcfd.hvepVY,H\n            allow_user_defined_redirect: true\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: revoke_active_sessions\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 20454524519m\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://Slp.amcZS2OW1hSCX\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://XFrPxbefJrBHXzOBTQPRCWnFnE.qfv.Qe.85OqFVp8dO1,TuOirH8-2rdjJQ\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://lXREJolaCVKmzqNoQHYyhyDGnLqs.ftoiyR2rJJSP4Z31c5y2gxPo7JhBW0\n          allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: redirect\n          config:\n            default_redirect_url: http://KVNdDrhEeczk.koyViGxtTP8n-KGdoVITwibksItCYxAxiUmIyFY6ceE+rzdy1qW\n            allow_user_defined_redirect: false\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: verify\n        - job: session\n        - job: redirect\n          config:\n            default_redirect_url: https://HxDoBbbZnHaYHTLYDgSi.ieYnF3RNzZZ,v1o8JfTqlI-XgYAgmCXQu1Eb-qo9\n            allow_user_defined_redirect: false\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: s9qDmb@TIqSqtqHCWEznN.dzbw\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: in non sunt labore elit\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: dolor Duis laborum pariatur enim\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: aute elit ex deserunt cillum\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## settings_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_SETTINGS_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_SETTINGS_UI=<value>\n  #\n  settings_ui: https://BVunxe.nrvdJkx\n\n  ## mfa_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: http://PoEkBmyqmK.xadrbcdxIIKkdWvYNt+nKCT6FyFH6p14hT8XNgIWC2xPLauoxCNs-Oev.Ah8np5sc1988\n\n  ## login_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: http://U.avebMM30WoFGrZ4DTCVgtUG3Y+yXTMoAFUAH6NXW4ZIqNSSkWh2w+oIn5KhNpbpnRGSi6Yw\n\n  ## registration_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: http://gNanhspvkOYgOADqaYibVNYTeyt.pjvVfE5SoYlAtgCUKDaByxTKbe.,nDssXF1ura1MvwcZx9XJst\n\n  ## error_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://PLJGtGYjyjbcDtbWeQWl.mugbi9yKv5OPGcW7hLHvWgJIY2uQIoTWyIS1v,DgV6Zx3nfBfC-zOHrY\n\n  ## Verify User Interface URL ##\n  #\n  # The URL of the Verify User Interface, the page where users can request activate and / or verify their email or telephone number.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://vlJTyawiCCNROrgNcenibsiBEaH.ayBqvXovW-WHX7YCm-.l28utoT+aIhqrIKSZ9\n\n  ## default_return_to ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: http://ipZNFqN.qjtwiCQCC3vLnmGbNC8cQRxVQttw6kaNRMDht5blGqyYtTyrXE-6T-sjyUgZCA1lblVZ0fdZu2+9Yjmw68.0GeM2dTUo0MWu+\n\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: http://UcOw.pxdSmcMFeU6Vwv2xGSFDKmNzX0ZqDDd2nO2-Tltjb-pnkxVA9oJQ.\n\n    ## admin ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: https://dPUGMXFncIsuZQsKWZnboJd.uocrdzrIOPs03N+PF2EVCAgiZhhR2KE\n\n  ## whitelisted_return_to_domains ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  #\n  whitelisted_return_to_domains:\n    - http://AONcvfpOysiknZaQhjJ.kgXtLezyijBeVZjkO48sxMo\n    - https://lQFTShXnsbaoiSFPDYgWEgMwOlpASVU.xsskHYfJ7lWaFArRZiejG,hyqyDMjaqxUvR+EdL9wWn.MRQUbd8awsEOMvZURsUoqSBgRGxpc8V6k2\n    - https://jw.vsVVKqwvOOWVJeYMC3DBwbNxiEIEoGCX,ENRKRwr7Y.TXg8W\n    - http://REuaHjJxzXNXGSoNDPTYgtVhn.uddHXyOENHgP5xPr,pBbwLpsVbU6gJRVrt9fp5xWMErTuHjFCcZhWTe6zLv-c16i+0QJONoT-SWZp\n    - https://wRCYYPdQwKNQNDhsqJhbhPBrBlC.nttdwvMn8igYDnWh7c9O4zVLcjP-2zObRBJG5nwH4NIv.+PRB\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: debug\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - eu esse adipisicing tempor\n    - eiusmod irure esse\n    - officiadolaborum Ut voluptate quis proident\n    - in officia ea cillum dolore\n    - ut tempor do elit Duis\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 21927655\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 52600083\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 16172870\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 57700942\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 33327673\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: Strict\n')))}S.isMDXComponent=!0},213:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),S=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},d=function(n){var e=S(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},_={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},c=Object(i.forwardRef)((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=S(t),c=i,m=d["".concat(o,".").concat(c)]||d[c]||_[c]||r;return t?a.a.createElement(m,s({ref:e},u,{components:t})):a.a.createElement(m,s({ref:e},u))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);