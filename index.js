const {Collection,MessageEmbed,Client} = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch')

const {prefix,token} = require("./config.json");

const bot = new Client();
bot.on('ready', () => {
    console.log(`Bot Online | Logged in as ${bot.user.tag}`);
});

bot.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('message', async msg => {
    
    if(!msg.guild) return;
    if(msg.channel.type === "dm") return;
    if(!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === "stats") {
        bot.commands.get("stats").execute(bot,msg,args,fetch);
    }

    if(command === "statstart") {
        bot.commands.get("statstart").execute(bot,msg,args,fetch);
    }

    if (command == "auth" && args.length == 2) {
        bot.commands.get("auth").execute(bot,msg,args,fetch);
    }
});

bot.login(token);