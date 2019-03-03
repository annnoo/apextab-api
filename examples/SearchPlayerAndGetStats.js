const API = require('apextab-api');
const ApexTab_API  = API.Apextab_API;


ApexTab_API.searchPlayer("Anno",API.Platform.PC).then((results) => {
    results.results.forEach((playerResult) => {
        console.log("Player: "+playerResult.name)
        console.log("Aid: "+playerResult.aid)
        console.log("Kills:"+playerResult.kills+ "\n\n");

        ApexTab_API.getPlayerById(playerResult.aid).then((player) => {
            console.log("-- Got Stats for Player:"+player.name);
            console.log("-- Rank:"+player.globalrank);
            console.log(player);
        })
    })
});