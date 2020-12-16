(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1442:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-setup"}},[t._v("#")]),t._v(" Server Setup")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),a("p",[t._v("If you haven't followed this guide to setup your n8n instance on a server, please make sure that you secure your n8n instance as described under "),a("RouterLink",{attrs:{to:"/reference/security.html"}},[t._v("Security")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"example-setup-with-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-setup-with-docker-compose"}},[t._v("#")]),t._v(" Example setup with docker-compose")]),t._v(" "),a("p",[t._v("If you have already installed docker and docker-compose, then you can directly start with step 4.")]),t._v(" "),a("h3",{attrs:{id:"_1-install-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-docker"}},[t._v("#")]),t._v(" 1. Install Docker")]),t._v(" "),a("p",[t._v("This can vary depending on the Linux distribution used. Example bellow is for Ubuntu:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" software-properties-common -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Depending on Version:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu 18.04:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu 20.04")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce -y\n")])])]),a("h3",{attrs:{id:"_2-optional-if-it-should-run-as-not-root-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-optional-if-it-should-run-as-not-root-user"}},[t._v("#")]),t._v(" 2. Optional: If it should run as not root user")]),t._v(" "),a("p",[t._v("Run when logged in as the user that should also be allowed to run docker:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-install-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-docker-compose"}},[t._v("#")]),t._v(" 3. Install Docker-compose")]),t._v(" "),a("p",[t._v("This can vary depending on the Linux distribution used. Example bellow is for Ubuntu:")]),t._v(" "),a("p",[t._v('Check before what version the latestand replace "1.24.1" with that version accordingly.\nhttps://github.com/docker/compose/releases')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" -o /usr/local/bin/docker-compose\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n")])])]),a("h3",{attrs:{id:"_4-setup-dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-setup-dns"}},[t._v("#")]),t._v(" 4. Setup DNS")]),t._v(" "),a("p",[t._v("Add A record to route the subdomain accordingly.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Type: A\nName: n8n (or whatever the subdomain should be)\nIP address: <IP_OF_YOUR_SERVER>\n")])])]),a("h3",{attrs:{id:"_5-create-docker-compose-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-create-docker-compose-file"}},[t._v("#")]),t._v(" 5. Create docker-compose file")]),t._v(" "),a("p",[t._v("Save this file as "),a("code",[t._v("docker-compose.yml")]),t._v(".")]),t._v(" "),a("p",[t._v("Normally no changes should be needed, but if you are planning on reading/writing local files with n8n (for example, by using the "),a("em",[t._v("Write Binary File")]),t._v(" node), you will need to configure a data directory for those files here. If you are running n8n as a root user, add this under "),a("code",[t._v("volumes")]),t._v(" for the n8n service:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/files\n")])])]),a("p",[t._v("If you are running n8n as a non-root user, add this under "),a("code",[t._v("volumes")]),t._v(" for the n8n service:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /home/<YOUR USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("/n8n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/files\n")])])]),a("p",[t._v("Then, you will be able to write files to the "),a("code",[t._v("/files")]),t._v(" directory in n8n and they will appear on your server in either "),a("code",[t._v("/local-files")]),t._v(" or "),a("code",[t._v("/home/<YOUR USERNAME>/n8n-local-files")]),t._v(", respectively.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("traefik")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--api=true"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--api.insecure=true"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--providers.docker=true"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--providers.docker.exposedbydefault=false"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--entrypoints.websecure.address=:443"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"443:443"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DATA_FOLDER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/letsencrypt\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("n8n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" n8nio/n8n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:5678:5678"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.enable=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.routers.n8n.rule=Host(`$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SUBDOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOMAIN_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`)\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.routers.n8n.tls=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.routers.n8n.entrypoints=websecure\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.routers.n8n.tls.certresolver=mytlschallenge\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.SSLRedirect=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.STSSeconds=315360000\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.browserXSSFilter=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.contentTypeNosniff=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.forceSTSHeader=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.SSLHost=$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOMAIN_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traefik.http.middlewares.n8n.headers.STSPreload=true\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" N8N_BASIC_AUTH_ACTIVE=true\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" N8N_BASIC_AUTH_USER\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" N8N_BASIC_AUTH_PASSWORD\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" N8N_HOST=$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SUBDOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOMAIN_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" N8N_PORT=5678\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" N8N_PROTOCOL=https\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" NODE_ENV=production\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" WEBHOOK_TUNNEL_URL=https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SUBDOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOMAIN_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DATA_FOLDER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/.n8n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/home/node/.n8n\n")])])]),a("h3",{attrs:{id:"_6-create-env-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-create-env-file"}},[t._v("#")]),t._v(" 6. Create "),a("code",[t._v(".env")]),t._v(" file")]),t._v(" "),a("p",[t._v("Create "),a("code",[t._v(".env")]),t._v(" file and change it accordingly.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Folder where data should be saved")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA_FOLDER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/n8n/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The top level domain to serve from")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOMAIN_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("example.com\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The subdomain to serve from")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBDOMAIN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n8n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DOMAIN_NAME and SUBDOMAIN combined decide where n8n will be reachable from")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# above example would result in: https://n8n.example.com")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The user name to use for autentication - IMPORTANT ALWAYS CHANGE!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The password to use for autentication - IMPORTANT ALWAYS CHANGE!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("password\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional timezone to set which gets used by Cron-Node by default")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If not set New York time will be used")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GENERIC_TIMEZONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Europe/Berlin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The email address to use for the SSL certificate creation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SSL_EMAIL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user@example.com\n")])])]),a("h3",{attrs:{id:"_7-create-data-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-create-data-folder"}},[t._v("#")]),t._v(" 7. Create data folder")]),t._v(" "),a("p",[t._v("Create the folder which is defined as "),a("code",[t._v("DATA_FOLDER")]),t._v(". In the example\nabove, it is "),a("code",[t._v("/root/n8n/")]),t._v(".")]),t._v(" "),a("p",[t._v("In that folder, the database file from SQLite as well as the encryption key will be saved.")]),t._v(" "),a("p",[t._v("The folder can be created like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir /root/n8n/\n")])])]),a("h3",{attrs:{id:"_8-start-docker-compose-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-start-docker-compose-setup"}},[t._v("#")]),t._v(" 8. Start docker-compose setup")]),t._v(" "),a("p",[t._v("n8n can now be started via:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose up -d\n")])])]),a("p",[t._v("In case it should ever be stopped that can be done with this command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose stop\n")])])]),a("h3",{attrs:{id:"_9-done"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-done"}},[t._v("#")]),t._v(" 9. Done")]),t._v(" "),a("p",[t._v("n8n will now be reachable via the above defined subdomain + domain combination.\nThe above example would result in: https://n8n.example.com")]),t._v(" "),a("p",[t._v("n8n will only be reachable via https and not via http.")])])}),[],!1,null,null,null);s.default=n.exports}}]);