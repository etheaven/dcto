const { MessageEmbed } = require("discord.js");
module.exports={
    name: "statstart",
    description: "stats",
    execute: async(bot,msg,args,fetch)=>{
        const {players} = await fetch('https://api.mcsrvstat.us/2/93.188.166.214:25522').then(response => response.json());
        if(msg.member.hasPermission("ADMINISTRATOR")) {
            setInterval(() => {
                const em = msg.guild.channels.cache.find(r => r.id === "733721299196575845")
                em.setName(`Players Online: ${players.online}`)
            }, 10000) 
        }
    }
}