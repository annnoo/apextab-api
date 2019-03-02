import { Platform } from "../Platform";
import { Legend } from "../Legend";

export interface PlayerResult {
    aid: string;
    name: string;
    platform: Platform;
    avatar: string;
    legend: Legend;
    level: string;
    kills: string;
}
