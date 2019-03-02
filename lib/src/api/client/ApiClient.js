"use strict";
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
var util_1 = require("../util/util");
var ApiClient = /** @class */ (function () {
    function ApiClient() {
    }
    ApiClient.getRawPlayer = function (playerId) {
        var p = new Promise(function (resolve, reject) {
            var path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.PLAYER + '?aid=' + playerId;
            var params = {
                host: ApiClient.CONFIG.APEXTAB_HOST_URL,
                port: 443,
                path: path,
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
                    accept: '*/*'
                }
            };
            var req = https.request(params, function (res) {
                var body = [];
                res.on('data', function (data) {
                    body.push(data);
                });
                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                    }
                    catch (e) {
                        reject(e);
                    }
                    resolve(body);
                });
                req.on('error', function (err) {
                    reject(err);
                });
            });
            req.end();
        });
        return p;
    };
    ApiClient.getPlayer = function (playerId) {
        var p = new Promise(function (resolve, reject) {
            var path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.PLAYER + '?aid=' + playerId;
            var params = {
                host: ApiClient.CONFIG.APEXTAB_HOST_URL,
                port: 443,
                path: path,
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
                    accept: '*/*'
                }
            };
            var req = https.request(params, function (res) {
                var body = [];
                var player;
                res.on('data', function (data) {
                    body.push(data);
                });
                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                        player = util_1.RAW_PLAYER_RESULT_TO_PLAYER(body);
                    }
                    catch (e) {
                        reject(e);
                    }
                    resolve(player);
                });
                req.on('error', function (err) {
                    reject(err);
                });
            });
            req.end();
        });
        return p;
    };
    ApiClient.searchPlayers = function (playerId, platform) {
        return __awaiter(this, void 0, void 0, function () {
            var path, params, p;
            return __generator(this, function (_a) {
                path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.SEARCH + '?platform=' + platform + "&search=" + playerId;
                params = {
                    host: ApiClient.CONFIG.APEXTAB_HOST_URL,
                    port: 443,
                    path: path,
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
                        accept: '*/*'
                    }
                };
                p = new Promise(function (resolve, reject) {
                    var req = https.request(params, function (res) {
                        var body = [];
                        res.on('data', function (data) {
                            body.push(data);
                        });
                        res.on('end', function () {
                            try {
                                body = JSON.parse(Buffer.concat(body).toString());
                            }
                            catch (e) {
                                reject(e);
                            }
                            resolve(body);
                        });
                        req.on('error', function (err) {
                            reject(err);
                        });
                    });
                    req.end();
                });
                return [2 /*return*/, p];
            });
        });
    };
    ApiClient.CONFIG = {
        APEXTAB_HOST_URL: 'apextab.com',
        APEXTAB_API: '/api/',
        ENDPOINTS: {
            'SEARCH': 'search.php',
            'PLAYER': 'player.php'
        }
    };
    return ApiClient;
}());
exports.ApiClient = ApiClient;
