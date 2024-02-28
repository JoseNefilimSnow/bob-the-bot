export class RequestTimeoutException {
    code : number = 408;
    message : string;

    constructor(context:string){
        this.message = context.concat(" timed out!");
    }
}