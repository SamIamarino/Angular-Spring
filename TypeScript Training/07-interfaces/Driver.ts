import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";


let myCricketCoach = new CricketCoach();
let myGolfCoach =  new GolfCoach();
let theCoaches: Coach [] = []

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoaches of theCoaches){
    console.log(tempCoaches.getDailyWorkOut());
}
    

