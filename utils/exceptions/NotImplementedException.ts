export class NotImplementedException {
    code : number = 501;
    message : string;

    constructor(){
        this.message = "Somethings are missing...";
    }
}