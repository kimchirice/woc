# What is documentation

no idea lets do something here

- [bare skeleton notes](./skeleton.md)

## run scripts

### vscode recommended settings

- recommend to work on vscode to format every save
- install prettier ext for vscode
- add this to your `settings.json`
```json
// NOTE: this will affect every file youll work on anywhere
// if you want to limit this to only this workspace
// look up on adding this to `.vscode` instead
{
    // other settings
    "editor.formatOnSave": true,
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```
- install prettier globally
```sh
sudo npm i -g prettier
```

### for development 

install/reinstall node packages
```sh
# will install packages for both web and server
npm install
# or
npm i
```

for development 
```sh
# while in the main folder
npm run dev-web
npm run dev-server

# while in web or server
npm start
```

for prod?
```sh
npm build
npm run serve
```