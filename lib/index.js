"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./src/index");
var api_1 = require("./src/api");
//Apextab_API.getSearchResults('Gebunden',Platform.PC,(data) => {console.log(data)});
index_1.Apextab_API.searchPlayer('Der', api_1.Platform.PC).then(function (obj) {
});