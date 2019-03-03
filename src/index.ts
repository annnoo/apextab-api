///<reference path="../node_modules/@types/node/index.d.ts"/>
import {
    RawPlayer,
    Platform,
    SearchResults,
    Player,
    Legend,
    PlayerResult
} from './api/index'
import {
    ApiClient
} from "./api/client/ApiClient";


export module Apextab_API {


    export function getRawPlayer(playerId: string): Promise < RawPlayer > {

        return ApiClient.getRawPlayer(playerId);

    }


    export function getPlayerById(playerId: string): Promise < Player > {

        return ApiClient.getPlayer(playerId);

    }



    export async function searchPlayer(playerId: string, platform: Platform): Promise < SearchResults > {

        return ApiClient.searchPlayers(playerId, platform);

    }

   


}
export {
    RawPlayer,
    ApiClient,
    SearchResults,
    PlayerResult,
    Player,

    Platform,
    Legend
}