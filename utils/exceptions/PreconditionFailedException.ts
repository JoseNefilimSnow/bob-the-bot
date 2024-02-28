export class PreconditionFailedException {
    code : number = 412;
    message : string;

    constructor(message:string){
        this.message = message;
    }
}