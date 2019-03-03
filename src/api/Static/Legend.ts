export enum Legend {
    Bangalore = "Bangalore",
    Bloodhound = "Bloodhound",
    Caustic = "Caustic",
    Gibraltar = "Gibraltar",
    Lifeline = "Lifeline",
    Mirage = "Mirage",
    Pathfinder = "Pathfinder",
    Wraith = "Wraith"
}
export const ResolveLegend = (data: keyof typeof Legend): Legend  => {
    return Legend[data];
}