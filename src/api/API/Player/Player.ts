import { Legend } from "../../Static/Legend";
import { Platform } from "../../Static/Platform"


export interface Player {
    playerfound: boolean;
        aid: string;
        name: string;
        platform: Platform;
        skillratio: number;
        visits: number;
        avatar: string;
        legend: Legend;
        level: number;
        kills: number;
        headshots: number;
        matches: number;
        kills_Bloodhound: number;
        kills_Gibraltar: number;
        kills_Lifeline: number;
        kills_Pathfinder: number;
        kills_Wraith: number;
        kills_Bangalore: number;
        kills_Caustic: number;
        kills_Mirage: number;
        headshots_Bloodhound: number;
        headshots_Gibraltar: number;
        headshots_Lifeline: number;
        headshots_Pathfinder: number;
        headshots_Wraith: number;
        headshots_Bangalore: number;
        headshots_Caustic: number;
        headshots_Mirage: number;
        matches_Bloodhound: number;
        matches_Gibraltar: number;
        matches_Lifeline: number;
        matches_Pathfinder: number;
        matches_Wraith: number;
        matches_Bangalore: number;
        matches_Caustic: number;
        matches_Mirage: number;
        globalrank: number;
        utime: number;
}