import { IRacer } from "../Interfaces/IRacer";

export class GasCar implements IRacer {
    team: string;
    speed: number;
    fuel: number;
    //interface does not know the implementation of these methods
   
    constructor(team: string, fuel: number = 10) {
        this.team = team;
        this.speed = 0;
        this.fuel = fuel;

        if (fuel !== undefined) {
            this.fuel = fuel;

        }
    }
    accelerate(): void {
        this.speed += 2//this speed = this.speed + 1
        this.fuel -= 1;
    }
    IsFuelEmpty(): boolean {
        return this.fuel <= 0;
        // if (this.fuel <= 0) {
        //     return true;
        // }
        // else {
        //     return false
        // }
    }
}
 
    

