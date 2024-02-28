export class MethodNotAllowedException {
    code : number = 405;
    message : string;

    constructor(context:string){
        this.message = context.concat(" not allowed!");
    }
}