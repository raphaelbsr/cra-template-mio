# create-react-app mio template

> Create React App Template for MIO Applications

## Plug and Play

```sh
npx create-react-app my-app --template mio
cd my-app
npm start
```

Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with npm run build.

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .Dockerfile
├── .dockerignore
├── .env
├── .eslintrc.json
├── .config-overrides.js
├── .jsonconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── routes.js
    ├── index.js
    ├── serviceWorker.js
    ├── assets
    |   ├──background.png
    |   ├──background@2x.png
    |   ├──Logo.png
    |   └──Logo@2x.png
    ├── configs
    ├── pages
    ├── services
    ├── stores
    └── styles