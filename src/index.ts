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


    export function getRawPlayer(playerId: string): Promise < RawPlayerResult > {

        return ApiClient.getRawPlayer(playerId);

    }


    export function getPlayerById(playerId: string): Promise < Player > {

        return ApiClient.getPlayer(playerId);

    }



    export async function searchPlayer(playerId: string, platform: Platform): Promise < SearchResults > {

        return ApiClient.searchPlayers(playerId, platform);

    }

}