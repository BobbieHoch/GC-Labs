
//abstract//
//contract
export interface IRacer {
    team: string;
    speed: number;
    //interface does not know the implementation of these methods
    accelerate(): void;
    IsFuelEmpty(): boolean;
//abstract structure that will never have new
}
 //interface will require all features of IRacer//
