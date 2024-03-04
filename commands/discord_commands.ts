require('dotenv/config');
import Discord, { Client, Message } from 'discord.js'
import { Command } from '../utils/types_and_classes/Command';
const botDis: Client = new Discord.Client({ intents: [1, 512, 32768] });


botDis.on('ready', () => {
    console.log("¡Hola Mundo!")
    botDis.user?.setActivity("¡ '.help' para ayuda!")
})

botDis.on("messageCreate", async (message: Message) => {

    //Exit if it's a bot
    if (message.author.bot) return;

    //Exit if it's not a command
    if (message.content.indexOf(".") !== 0) return;

    
    //Isolate the command and the arguments
    var splittedMesssage: Array<string> = message.content.slice(1).trim().split(/ +/g)

    const command: Command = new Command(splittedMesssage.shift()!!,splittedMesssage);

    switch(command.commandName){
        case 'ai':
            message.reply("Cuack "+ message.author.displayName)
    }
})

botDis.login(process.env.DISCORD_TOKEN);