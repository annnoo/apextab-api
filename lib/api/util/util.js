"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var Legend_1 = require("../Static/Legend");
exports.RAW_PLAYER_RESULT_TO_PLAYER = function (data) {
    var player;
    player = {
        playerfound: data.playerfound,
        aid: data.aid,
        name: data.name,
        platform: data.platform == "PC" ? __1.Platform.PC : (data.platform == "XBL" ? __1.Platform.XBOX_ONE : __1.Platform.PS4),
        skillratio: data.skillratio,
        visits: Number(data.visits),
        avatar: data.avatar,
        legend: Legend_1.ResolveLegend(data.legend),
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
};
