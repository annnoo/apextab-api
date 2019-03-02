import { RawPlayerResult, Platform, SearchResults, Player } from './api/index';
export declare module Apextab_API {
    function getRawPlayer(playerId: string): Promise<RawPlayerResult>;
    function getPlayerById(playerId: string): Promise<Player>;
    function searchPlayer(playerId: string, platform: Platform): Promise<SearchResults>;
}
