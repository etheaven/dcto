const { MessageEmbed } = require("discord.js");
module.exports={
    name: "stats",
    description: "stats",
    execute: async(bot,msg,args,fetch)=>{
        const {online,players,version,motd} = await fetch('https://api.mcsrvstat.us/2/hypixel.net').then(response => response.json());
        const urmom = new MessageEmbed()
        .setTitle("Statistics")
        .setThumbnail(bot.user.displayAvatarURL())
        .addField("**Online:**", online)
        .setColor("GREEN")
        .addField("**Version**", version)
        .addField("**MOTD**", motd.clean)
        .addField("**Player Count:**", `${players.online}/${players.max}`);
        const msgs = await msg.channel.send(urmom)
        setInterval(() =>{
            msgs.edit(urmom)
        }, 10000)
    }
}