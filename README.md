# Node.js ApexTab-API Wrapper
[ApexTab](https://apextab.com/) 

[API Documentation](https://github.com/Tabwire/ApexTab-API)

## Installation 
```sh
npm install apextab-api --save
yarn add apextab-api
bower install apextab-api --save
```


## Usage 
```js

const API = require('apextab-api');
const ApexTab_API  = API.Apextab_API;


ApexTab_API.searchPlayer("Anno",API.Platform.PC).then((results) => {
    console.log(results);
});
```

