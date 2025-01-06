import { Coach } from "./Coach";

export class CricketCoach implements Coach{

    getDailyWorkOut(): string {
        return 'Train your spin boulling techniche';
    }

}