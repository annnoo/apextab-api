import * as https from "https";
import { Platform, RawPlayerResult, PlayerResult } from "..";
import { ApextabConfig } from "./Config";

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
        console.log("--GetRawPlayer:"+playerId);
        let p = new Promise < RawPlayerResult > ((resolve, reject) => {
                const path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.PLAYER + '?aid='+ playerId;
                console.log("--GetRawPlayer Path:"+path);

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
                console.log("--GetRawPlayer Params:"+params);

    

                let req = https.request(params, (res) => {

                    res.on('error', (args) => {
                        console.log(args);
                    })
                    
                    res.on('close', (args) => {
                        console.log(args);
                    })
                    res.on('readable',(args) => {
                        console.log(args);
                    })
                    let body: any | RawPlayerResult = [];
                    res.on('data', (data) => {
                        body.push(data);
                        console.log(data);
                    })
                    res.on('end', () => {
                        try {
                            body = < RawPlayerResult > JSON.parse(Buffer.concat(body).toString());
                            console.log(body);
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
                console.log(req);


               
            });
            return p;
            

        
    }

    public static async searchPlayers(playerId: string, platform: Platform,){
        const path = ApiClient.CONFIG.APEXTAB_API + ApiClient.CONFIG.ENDPOINTS.SEARCH + '?platform='+ platform+"&search="+playerId;
                const params = {
                    host: "google.com",
                    
                    path : path,
                    method: 'GET',
                };
                return new Promise((resolve,reject)=> {
                let req = https.request(params, (res) => {


                    let body: any | RawPlayerResult = [];
                    res.on('data', (data) => {
                        body.push(data);
                        console.log(data);
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
                    req.end();
                    
                });

    })
}

}