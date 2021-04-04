# Bare skeleton notes

basic skeleton setup incase this is reused else where

## client

In general, try to:
- use functional components, react hooks
- split complex components into 2 separate:
  - wrapper components `NameWrapper.jsx` handling containing logic (api calls) then pass data into
  - styled components `Name.jsx` handling the look of it on the front end.
> not strict, keep them combined if its clearer for you that way
- set `proxy` to the same port the server is served on (in `package.json`)

`src` folder structure
```
src/
|_ app/             app components/wrapper components, set overall style, handle routing
|_ assets/          non-code assets (images)
|_ components/      common components
|_ context/         react context
|_ utils/          utility helper functions
|_ pages/           main wrapper/style components for each pages
|_ index.html       entry point, apply global context, global themes
|_ // any other global styling stuff
```

> no styling/component libraries applied yet


### dependencies

|Package|Description|
|:---|:---|
|react|base react module|
|axios|handle api calls|
|react-router-dom|

---

## server 

simple express api server

folder structure
```
|_ configs/         store configs, util functions, middleware
|  |_ logging.js    custom logging functions
|  |_ config.js     server configs
|_ models/          data model
|_ routes/          setup api routes with controllers
|_ controllers/     controllers definitions
|_ .env             environment variables
|_ server.js        main server entry point, configs, api routing
``` 

### dependencies

- express
- dotenv 
