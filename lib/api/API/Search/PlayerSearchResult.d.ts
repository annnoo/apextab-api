import { Platform } from "../../Static/Platform";
import { Legend } from "../../Static/Legend";
export interface PlayerResult {
    aid: string;
    name: string;
    platform: Platform;
    avatar: string;
    legend: Legend;
    level: string;
    kills: string;
}
