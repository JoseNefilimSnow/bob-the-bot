export class TooEarlyException {
    code : number = 425;
    message : string;

    constructor(){
        this.message = "TOO EARLY!";
    }
}