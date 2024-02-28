export class InternalServerException {
    code : number = 500;
    message : string;

    constructor(){
        this.message = "Oh...";
    }
}