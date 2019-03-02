"use strict";
///<reference path="../node_modules/@types/node/index.d.ts"/>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var https = __importStar(require("https"));
var index_1 = require("./api/index");
var ApiClient_1 = require("./api/client/ApiClient");
var Apextab_API;
(function (Apextab_API) {
    var APEXTAB_URL = 'apextab.com';
    var APEXTAB_API = '/api/';
    var ENDPOINTS = {
        'SEARCH': 'search.php',
        'PLAYER': 'player.php'
    };
    function getSearchResults(playerId, platfrom, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var options, request;
            return __generator(this, function (_a) {
                options = {
                    host: APEXTAB_URL,
                    path: APEXTAB_API + ENDPOINTS.SEARCH + '?platform=' + platfrom + '&search=' + playerId,
                    method: 'GET'
                };
                request = https.request(options, function (res) {
                    res.on('data', function (data) {
                        var rawPlayer = JSON.parse(data.toString());
                        console.log(rawPlayer);
                        callback(rawPlayer);
                    });
                });
                request.end();
                return [2 /*return*/];
            });
        });
    }
    Apextab_API.getSearchResults = getSearchResults;
    function getSinglePlayer(playerId, platform, data) {
    }
    function getPlayerResult(playerId, platform, callback) {
        return __awaiter(this, void 0, void 0, function () {
            function getLegend(data) {
                return index_1.Legend[data];
            }
            return __generator(this, function (_a) {
                getSinglePlayer(playerId, platform, function (data) {
                    var player;
                    player = {
                        playerfound: data.playerfound,
                        aid: data.aid,
                        name: data.name,
                        platform: data.platform == "PC" ? index_1.Platform.PC : (data.platform == "XBL" ? index_1.Platform.XBOX_ONE : index_1.Platform.PS4),
                        skillratio: data.skillratio,
                        visits: Number(data.visits),
                        avatar: data.avatar,
                        legend: getLegend(data.legend),
                        level: Number(data.level),
                        kills: Number(data.kills),
                        headshots: Number(data.headshots),
                        matches: Number(data.matches),
                        kills_Bloodhound: Number(data.kills_Bloodhound),
                        kills_Gibraltar: Number(data.kills_Gibraltar),
                        kills_Lifeline: Number(data.kills_Lifeline),
                        kills_Pathfinder: Number(data.kills_Pathfinder),
                        kills_Wraith: Number(data.kills_Wraith),
                        kills_Bangalore: Number(data.kills_Bangalore),
                        kills_Caustic: Number(data.kills_Caustic),
                        kills_Mirage: Number(data.kills_Mirage),
                        headshots_Bloodhound: Number(data.headshots_Bloodhound),
                        headshots_Gibraltar: Number(data.headshots_Gibraltar),
                        headshots_Lifeline: Number(data.headshots_Lifeline),
                        headshots_Pathfinder: Number(data.headshots_Pathfinder),
                        headshots_Wraith: Number(data.headshots_Wraith),
                        headshots_Bangalore: Number(data.headshots_Bangalore),
                        headshots_Caustic: Number(data.headshots_Caustic),
                        headshots_Mirage: Number(data.headshots_Mirage),
                        matches_Bloodhound: Number(data.matches_Bloodhound),
                        matches_Gibraltar: Number(data.matches_Gibraltar),
                        matches_Lifeline: Number(data.matches_Lifeline),
                        matches_Pathfinder: Number(data.matches_Pathfinder),
                        matches_Wraith: Number(data.matches_Wraith),
                        matches_Bangalore: Number(data.matches_Bangalore),
                        matches_Caustic: Number(data.matches_Caustic),
                        matches_Mirage: Number(data.matches_Mirage),
                        globalrank: Number(data.globalrank),
                        utime: Number(data.utime)
                    };
                    return player;
                });
                return [2 /*return*/];
            });
        });
    }
    Apextab_API.getPlayerResult = getPlayerResult;
    function test(playerId, platform) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ApiClient_1.ApiClient.getRawPlayer(playerId).then(function (value) {
                }).catch(function (reason) { console.log(reason); });
                return [2 /*return*/];
            });
        });
    }
    Apextab_API.test = test;
    function searchPlayer(playerId, platform) {
        ApiClient_1.ApiClient.searchPlayers(playerId, platform).then(function (data) { console.log(data); });
    }
    Apextab_API.searchPlayer = searchPlayer;
})(Apextab_API = exports.Apextab_API || (exports.Apextab_API = {}));
