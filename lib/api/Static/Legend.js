"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Legend;
(function (Legend) {
    Legend["Bangalore"] = "Bangalore";
    Legend["Bloodhound"] = "Bloodhound";
    Legend["Caustic"] = "Caustic";
    Legend["Gibraltar"] = "Gibraltar";
    Legend["Lifeline"] = "Lifeline";
    Legend["Mirage"] = "Mirage";
    Legend["Pathfinder"] = "Pathfinder";
    Legend["Wraith"] = "Wraith";
})(Legend = exports.Legend || (exports.Legend = {}));
exports.ResolveLegend = function (data) {
    return Legend[data];
};
