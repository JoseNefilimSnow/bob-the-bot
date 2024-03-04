export class Command {
    commandName:string;
    commandArguments:Array<string>

    constructor(commandName:string,commandArguments:Array<string>){
        this.commandName = commandName;
        this.commandArguments=commandArguments;
    }
}