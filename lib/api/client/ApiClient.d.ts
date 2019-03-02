import { Platform, RawPlayerResult, SearchResults, Player } from "..";
import { ApextabConfig } from "./Config";
export declare class ApiClient {
    static CONFIG: ApextabConfig;
    constructor();
    static getRawPlayer(playerId: string): Promise<RawPlayerResult>;
    static getPlayer(playerId: string): Promise<Player>;
    static searchPlayers(playerId: string, platform: Platform): Promise<SearchResults>;
}
