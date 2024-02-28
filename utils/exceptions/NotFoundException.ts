export class NotFoundException {
    code : number = 404;
    message : string;

    constructor(context:string){
        this.message = context.concat(" not found!");
    }
}