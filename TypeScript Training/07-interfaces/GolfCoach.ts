import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkOut(): string {
        return "Pratice your throwing!!"
    }
    
}