const {MessageEmbed} = require("discord.js");
function cleanInt(x) {
    x = Number(x);
    return x >= 0 ? Math.floor(x) : Math.ceil(x);
}

module.exports={
    name: "auth",
    description: "auth",
    execute: async(bot,msg,args,fetch)=>{
        var url = "https://cracked.to/auth.php"
        var authKey = args[0];
        var headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        fetch(url, {method: "POST", headers: headers, body: `a=auth&k=${authKey}&hwid=randomHWID`})
          .then((res) => {
            return res.json()
        })
        .then(async (json) => {
            console.log(json)
            if (json.error != undefined){
                msg.channel.send(`Your auth key response is: ${json.error}`)
                return;
            }
            
            var username = json.username
            
            switch(json.group) {
                //contributor
                case "" && cleanInt(json.likes) > 499:
                case " " && cleanInt(json.likes) > 499: {
                    msg.channel.send("Your auth key returned: contributor")
                    const lol = await msg.channel.send("Assinging role...")
                    msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add contributor`)
                    if(username !== msg.member.displayName) {
                        var user = msg.guild.members.fetch(msg.member.id).then((member) => {
                            member.setNickname(username);
                        });
                    }
                    msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)
                    lol.edit("Complete!")  
                } break;
                // staff
                case ("3"): {
                    msg.channel.send("Your auth key returned: Staff (prolly)")
                    const lol = await msg.channel.send("Assinging role...")
                    msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add staff`)
                    if(username !== msg.member.displayName) {
                        var user = msg.guild.members.fetch(msg.member.id).then((member) => {
                            member.setNickname(username);
                        });
                    }
                    msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)
                    lol.edit("Complete!")              
                } break;
                // godlike
                case ("11"): {
                    // actual godlike
                    let lol = null;
                    if (cleanInt(json.likes) > 1999){
                        msg.channel.send("Your auth key returned: Godlike")
                        lol = await msg.channel.send("Assinging role...")
                        msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add godlike`)
                    }
                    // or just premium?
                    else{
                        msg.channel.send("Your auth key returned: Premium?")
                        lol = await msg.channel.send("Assinging role...")
                        msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add premium`)
                    }
                    if(username !== msg.member.displayName) {
                        var user = msg.guild.members.fetch(msg.member.id).then((member) => {
                            member.setNickname(username);
                        });
                    }
                    msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)
                    lol.edit("Complete!")              
                } break;
                // supreme
                case ("12"): {
                    msg.channel.send("Your auth key returned: Supreme")
                    const lol = await msg.channel.send("Assinging role...")
                    msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add supreme`)
                    if(username !== msg.member.displayName) {
                        var user = msg.guild.members.fetch(msg.member.id).then((member) => {
                            member.setNickname(username);
                        });
                    }
                    msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)
                    lol.edit("Complete!")              
                } break;
                // Infinity 
                case ("93"): {
                    msg.channel.send("Your auth key returned: Infinity")
                    const lol = await msg.channel.send("Assinging role...")
                    msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add infinity`)
                    if(username !== msg.member.displayName) {
                        var user = msg.guild.members.fetch(msg.member.id).then((member) => {
                            member.setNickname(username);
                        });
                    }
                    msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)                   
                    lol.edit("Complete!")              
                } break;
                default: {
                    msg.channel.send(`Your auth key is not supported:${result.group} @Staff`)
                } break;
            }
            msg.delete();
        }).catch(console.log("error happenned"));;        
    }
}
