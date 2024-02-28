export class NoResponseException {
    code : number = 444;
    message : string;

    constructor(){
        this.message = "No Response...";
    }
}