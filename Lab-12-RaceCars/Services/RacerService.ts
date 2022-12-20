import { IRacer } from "../Interfaces/IRacer";
import { GasCar } from "../Models/GasCar";
//business logic
export function findRacersWithEmptyFuel(racers: IRacer[]) :IRacer[] {
    
    // Filter the racers array to find only the racers for which isFuelEmpty returns true. Return a new array of those matching racers*/
    let emptyRaceArray: IRacer[] = [];
    
    for (let r = 0; r <= racers.length; r++){
        if (racers[r].IsFuelEmpty()) {
            emptyRaceArray.push(racers[r])
        }
    }
    return emptyRaceArray;

}
//DRY=Don't Repeat Yourself
export function findAverageSpeed(racers: IRacer[]): number {
    let totalSpeed = 0;

    if (racers.length === 0) {
        return 0;
    }
    for (let racer of racers) {
        totalSpeed += racer.speed;
    }
    return totalSpeed / racers.length;
}
export function getFastestRacer(racerA: IRacer, racerB: IRacer):IRacer | null {
    if (racerA.speed > racerB.speed) {
        return racerA;
    }
    else if (racerB.speed > racerA.speed) {
        return racerB;
    }
    else {
        return null;
    }

        
    }
