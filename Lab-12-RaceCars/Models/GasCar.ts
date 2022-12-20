import { IRacer } from "../Interfaces/IRacer";

class GasCar implements IRacer {
    team: string;
    speed: number;
    fuel: number = 10;
    //interface does not know the implementation of these methods
   
    constructor(team: string, fuel?: number = 10) {
        this.team = team;
        this.speed = 0;

        if (fuel !== undefined) {
            this.fuel = fuel;

        }
    }
    accelerate(): void {
        this.speed += 2//this speed = this.speed + 1
        this.fuel -= 1;
    }
    IsFuelEmpty(): boolean {
        if (this.fuel <= 0) {
            return true;
        }
        else {
            return false
            
        
        }
    }
}
    export{GasCar}
    

