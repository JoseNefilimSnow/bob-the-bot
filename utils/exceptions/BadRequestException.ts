export class BadRequestException {
    code : number = 400;
    message : string;

    constructor(){
        this.message = "Bad Request!";
    }
}