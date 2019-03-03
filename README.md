# Node.js ApexTab-API Wrapper

A simple Node.js Wrapper for the *Apex Legends* API provided by ApexTab. 


- [ApexTab](https://apextab.com/) 
- [API Documentation](https://github.com/Tabwire/ApexTab-API)

___
## Table of Contents

- [Node.js ApexTab-API Wrapper](#nodejs-apextab-api-wrapper)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [Contributing](#contributing)


## Installation 
```sh
npm install apextab-api --save
yarn add apextab-api
bower install apextab-api --save
```


## Usage 
```js
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
/**
 * output:
 * Player: annoulele
Aid: c33e579ef0dd208b7e2ae8877a6781d5
Kills:0


-- Got Stats for Player:annoulele
-- Rank:0
{ playerfound: true,
  aid: 'c33e579ef0dd208b7e2ae8877a6781d5',
  name: 'annoulele',
  platform: 'pc',
  skillratio: 0,
  visits: 3,
  avatar: 'https://apextab.com/cache/7372d16d41bc4f938b985c7df16a13b6.png',
  legend: 'Bangalore',
  level: 11,
  kills: 0,
  headshots: 0,
  matches: 0,
  kills_Bloodhound: 0,
  kills_Gibraltar: 0,
  kills_Lifeline: 0,
  kills_Pathfinder: 0,
  kills_Wraith: 0,
  kills_Bangalore: 0,
  kills_Caustic: 0,
  kills_Mirage: 0,
  headshots_Bloodhound: 0,
  headshots_Gibraltar: 0,
  headshots_Lifeline: 0,
  headshots_Pathfinder: 0,
  headshots_Wraith: 0,
  headshots_Bangalore: 0,
  headshots_Caustic: 0,
  headshots_Mirage: 0,
  matches_Bloodhound: 0,
  matches_Gibraltar: 0,
  matches_Lifeline: 0,
  matches_Pathfinder: 0,
  matches_Wraith: 0,
  matches_Bangalore: 0,
  matches_Caustic: 0,
  matches_Mirage: 0,
  globalrank: 0,
  utime: 1551305261 }
 *  
 */
```

## Documentation

 - [Functions](#functions)
      - [Search Player](#search-player)
        - [Usage](#usage-1)
      - [Get Player](#get-player)
        - [Usage](#usage-2)
    - [Types](#types)
      - [Player](#player)
      - [RawPlayer](#rawplayer)
      - [PlayerSearchResult](#playersearchresult)
      - [SearchResults](#searchresults)
    - [Enums](#enums)
      - [Platform](#platform)
      - [Legend](#legend)

### Functions

All Methods are accessable through the *Apextab_API*-Module.

#### Search Player
`ApexTab_API.searchPlayer(username, platform)`

Returns a Promise for an Object of Type ***SearchResults***, a List of ***PlayerResult***.
##### Usage
```js

ApexTab_API.searchPlayer("Anno",API.Platform.PC).then((results) => {
    // do something
    console.log(results);
});

/* output:
 * {
   "results":[
      {
         "aid":"c33e579ef0dd208b7e2ae8877a6781d5",
         "name":"annoulele",
         "platform":"pc",
         "avatar":"https:\/\/apextab.com\/cache\/7372d16d41bc4f938b985c7df16a13b6.png",
         "legend":"Bangalore",
         "level":"11",
         "kills":"0"
      }
   ],
   "totalresults":1
}
 */ 
```


#### Get Player

`ApexTab_API.getPlayer(user_aid)`

Returns a Promise for an Object of Type **Player**
##### Usage
```js

ApexTab_API.getPlayer("f5337d769b7b29628f59d8c84ea45d9d").then((player) => {
    // do something
    console.log(results);
});
```


### Types

#### Player

```ts
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
```

#### RawPlayer
```ts
export interface RawPlayer {
        playerfound: boolean;
        aid: string;
        name: string;
        platform: string;
        skillratio: number;
        visits: string;
        avatar: string;
        legend: string;
        level: string;
        kills: string;
        headshots: string;
        matches: string;
        kills_Bloodhound: string;
        kills_Gibraltar: string;
        kills_Lifeline: string;
        kills_Pathfinder: string;
        kills_Wraith: string;
        kills_Bangalore: string;
        kills_Caustic: string;
        kills_Mirage: string;
        headshots_Bloodhound: string;
        headshots_Gibraltar: string;
        headshots_Lifeline: string;
        headshots_Pathfinder: string;
        headshots_Wraith: string;
        headshots_Bangalore: string;
        headshots_Caustic: string;
        headshots_Mirage: string;
        matches_Bloodhound: string;
        matches_Gibraltar: string;
        matches_Lifeline: string;
        matches_Pathfinder: string;
        matches_Wraith: string;
        matches_Bangalore: string;
        matches_Caustic: string;
        matches_Mirage: string;
        globalrank: string;
        utime: string;
}

```

#### PlayerSearchResult

A single Search Result:

```js
export interface PlayerResult {
    aid: string;
    name: string;
    platform: Platform;
    avatar: string;
    legend: Legend;
    level: string;
    kills: string;
}
```

#### SearchResults

The Array *results* stores all of the Results.

```js
export interface SearchResults {
    results: PlayerResult[];
    totalresults: number;
}
```
### Enums

#### Platform
Enum which stores ID for corresponding Platform

* PC = "pc"
* PS4 = "ps4"
* XBOX_ONE = "xbl"

#### Legend
Enum which stores the Legends:

* Bangalore = "Bangalore",
* Bloodhound = "Bloodhound",
* Caustic = "Caustic",
* Gibraltar = "Gibraltar",
* Lifeline = "Lifeline",
* Mirage = "Mirage",
* Pathfinder = "Pathfinder",
* Wraith = "Wraith"


## Contributing

Feel free to open Issues.

To run a dev build locally simply clone the repository and run `npm install` in root of the project. To build use `npm run build`. The TypeScript-Code will be compiled to JavaScript and put into the *\lib*-Folder.

