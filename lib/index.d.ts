import { RawPlayer, Platform, SearchResults, Player, Legend, PlayerResult } from './api/index';
export declare module Apextab_API {
    function getRawPlayer(playerId: string): Promise<RawPlayer>;
    function getPlayerById(playerId: string): Promise<Player>;
    function searchPlayer(playerId: string, platform: Platform): Promise<SearchResults>;
}
export { RawPlayer, SearchResults, PlayerResult, Player, Platform, Legend };
