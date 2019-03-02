import * as https from "https";
import { Platform, RawPlayerResult, PlayerResult, SearchResults, Player } from "..";
import { ApextabConfig } from "./Config";
import { RAW_PLAYER_RESULT_TO_PLAYER } from "../util/util";

export class ApiClient {
    
    
    public static CONFIG: ApextabConfig = {
        APEXTAB_HOST_URL: 'apextab.com',
        APEXTAB_API: '/api/',
        ENDPOINTS: {
            'SEARCH': 'search.php',
            'PLAYER': 'player.php'
        }
    };
    constructor() {

    }

    public static getRawPlayer(playerId: string): Promise < RawPlayerResult > {
        let p = new Promise < RawPlayerResult > ((resolve, reject) => {
                const path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.PLAYER + '?aid='+ playerId;

                let params = {
                    host: ApiClient.CONFIG.APEXTAB_HOST_URL,
                    port:443,
                    
                    path : path,
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36' ,
                        accept: '*/*'

                    }
                };

    

                let req = https.request(params, (res) => {

                   
                    
                    
                    let body: any | RawPlayerResult = [];
                    res.on('data', (data) => {
                        body.push(data);
                    })
                    res.on('end', () => {
                        try {
                            body = < RawPlayerResult > JSON.parse(Buffer.concat(body).toString());
                        } catch (e) {
                            reject(e);
                        }
                        resolve(body);
                    });
                   

                    req.on('error', (err) => {
                        reject(err);
                    })
                  
                    
                });
                req.end();


               
            });
            return p;
            

        
    }


    
    public static getPlayer(playerId: string): Promise < Player > {
        let p = new Promise < Player > ((resolve, reject) => {
                const path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.PLAYER + '?aid='+ playerId;

                let params = {
                    host: ApiClient.CONFIG.APEXTAB_HOST_URL,
                    port:443,
                    
                    path : path,
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36' ,
                        accept: '*/*'

                    }
                };

    

                let req = https.request(params, (res) => {

                   
                    
                    
                    let body: any | RawPlayerResult = [];
                    let player: Player;
                    res.on('data', (data) => {
                        body.push(data);
                    })
                    res.on('end', () => {
                        try {
                            body = < RawPlayerResult > JSON.parse(Buffer.concat(body).toString());
                            player = RAW_PLAYER_RESULT_TO_PLAYER(body);
                        } catch (e) {
                            reject(e);
                        }
                        resolve(player);
                    });
                   

                    req.on('error', (err) => {
                        reject(err);
                    })
                  
                    
                });
                req.end();


               
            });
            return p;
            

        
    }

    public static async searchPlayers(playerId: string, platform: Platform) : Promise<SearchResults>{
        const path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.SEARCH + '?platform='+ platform+"&search="+playerId;
              

                let params = {
                    host: ApiClient.CONFIG.APEXTAB_HOST_URL,
                    port:443,
                    
                    path : path,
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36' ,
                        accept: '*/*'

                    }
                };
                let p =  new Promise<SearchResults>((resolve,reject)=> {
                let req = https.request(params, (res) => {


                    let body: any | SearchResults = [];

                    res.on('data', (data) => {
                        body.push(data);
                    })
                    res.on('end', () => {
                        try {
                            body = < SearchResults > JSON.parse(Buffer.concat(body).toString());
                        } catch (e) {
                            reject(e);
                        }
                        resolve(body);
                    });
                   

                    req.on('error', (err) => {
                        reject(err);
                    })
                
                    
                });
                req.end();
            })
                return p;
            

    }
}