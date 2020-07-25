const {MessageEmbed} = require("discord.js");
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

            var result = [];
            var username = "";
            for(var i in json)
            {
                result.push([i, json [i]]);
                if (i == "username"){
                    username = json [i];
                }
            }

            //msg.channel.send(`1: ${JSON.parse(json)}`)
            const myJson = JSON.stringify(result);
            //msg.channel.send(`RESULT: \`\`\`json\n${myJson}\`\`\``)
            console.log(myJson);
            
            //dmsg.channel.send(`username: ${username}`)
            console.log(username);
            
            switch(json.group) {
                //contributor
                case (" "): {
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
                    msg.channel.send("Your auth key returned: Godlike")
                    const lol = await msg.channel.send("Assinging role...")
                    msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add godlike`)
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
                case "3":
                case "4":
                case "6":
                case "92":
                case "94":
                case "96":
                case "97":
                case "99":
                case "100":
                case "101":
                case "97": {
                    msg.channel.send('This is the "BabiKoqi    they probably contain like staff usergroups, custom ones etc case"')
                } break;
                default: {
                    msg.channel.send(`Your auth key is not supported:${result.group}`)
                } break;
            }
            msg.delete();
        });        
    }
}