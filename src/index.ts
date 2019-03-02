///<reference path="../node_modules/@types/node/index.d.ts"/>

import * as https from "https";
import {
    RawPlayerResult,
    Platform,
    SearchResults,
    Player,
    Legend
} from './api/index'
import {
    stringify
} from "querystring";
import {
    ApiClient
} from "./api/client/ApiClient";


export module Apextab_API {

    const APEXTAB_URL = 'apextab.com'
    const APEXTAB_API = '/api/'
    const ENDPOINTS = {
        'SEARCH': 'search.php',
        'PLAYER': 'player.php'
    }

    export async function getSearchResults(playerId: string, platfrom: Platform, callback: (data: RawPlayerResult) => void) {

        var options = {
            host: APEXTAB_URL,
            path: APEXTAB_API + ENDPOINTS.SEARCH + '?platform=' + platfrom + '&search=' + playerId,
            method: 'GET'
        }
        let request = https.request(options, (res) => {
            res.on('data', (data) => {
                let rawPlayer = < RawPlayerResult > JSON.parse(data.toString());
                console.log(rawPlayer);
                callback(rawPlayer);

            })
        })

        request.end();
    }

    function getSinglePlayer(playerId:string,platform:Platform,data:any){

    }
    export async function getPlayerResult(playerId: string, platform: Platform, callback: (data: RawPlayerResult) => void) {

        function getLegend(data: string): Legend {

            return Legend[data];

        }
        getSinglePlayer(playerId, platform, (data:any) => {
            let player: Player;
            player = {
                playerfound: data.playerfound,
                aid: data.aid,
                name: data.name,
                platform: data.platform == "PC" ? Platform.PC : (data.platform == "XBL" ? Platform.XBOX_ONE : Platform.PS4),
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
            }
            return player;

        })
    }
    export async function test(playerId: string, platform: Platform) {
        ApiClient.getRawPlayer(playerId).then((value)=> {
            console.log(value)
        }).catch(reason => {console.log(reason)});
        
    }

    export function searchPlayer(playerId: string, platform: Platform){
    ApiClient.searchPlayers(playerId,platform).then((data)=> {console.log(data)} );
    }
}




