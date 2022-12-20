import { IRacer } from "../Interfaces/IRacer";

//implement interfaces but extend classes
//concrete.....concretion it is a class
export class SolarCar implements IRacer{
    team: string;
    speed: number;
    //interface does not know the implementation of these methods
   
    constructor(team: string) {
        this.team = team;
        this.speed = 0;
    }
    accelerate(): void{
        this.speed += 1//this speed = this.speed + 1
       
    }
isFuelEmpty(): boolean{
    return false;
    }

}