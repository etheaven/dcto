const {MessageEmbed} = require("discord.js");
function cleanInt(x) {
    x = Number(x);
    return x >= 0 ? Math.floor(x) : Math.ceil(x);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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
        fetch(url, {method: "POST", headers: headers, body: `a=auth&k=${authKey}&hwid=${makeid(8)}`})
          .then((res) => {
            return res.json()
        })
        .then(async (json) => {
            console.log(json)
            if (json.error != undefined){
                let responseMessage = await msg.channel.send(`Your auth key response is: ${json.error}`)
                if (json.error.includes('invalid hwid')){
                    responseMessage.edit("Generate new auth key because currently hwid for this exact key is already taken")
                }
                msg.delete();
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

                    let contributor = msg.guild.roles.cache.find(r => r.name === "Contibutor")
                    msg.member.roles.add(contributor)

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
                    var role = member.guild.roles.cache.find(role => role.name === "role name");
                    member.roles.add(role);

                    let contributor = msg.guild.roles.cache.find(r => r.name === "CtoStaff")
                    msg.member.roles.add(contributor)
                    
                    lol.edit("Complete!")
                } break;
                // godlike
                case ("11"): {
                    // actual godlike
                    if (cleanInt(json.likes) > 1999){
                        msg.channel.send("Your auth key returned: Godlike")
                        const lol = await msg.channel.send("Assinging role...")
                        msg.guild.channels.cache.get("734044818061131886").send(`lp user ${args[1]} group add godlike`)
                            
                        if(username !== msg.member.displayName) {
                            var user = msg.guild.members.fetch(msg.member.id).then((member) => {
                                member.setNickname(username);
                            });
                        }

                        let contributor = msg.guild.roles.cache.find(r => r.name === "Godlike")
                        msg.member.roles.add(contributor)
                                                
                        msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)
                        lol.edit("Complete!")   
                    }
                    // just premium
                    else{
                        let noPremiumMsg = await msg.channel.send("Premium rank expires in a month, and we have no way of checking the expiry time")
                    }           
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

                    let contributor = msg.guild.roles.cache.find(r => r.name === "Supreme")
                    msg.member.roles.add(contributor)                                            
                    
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

                    let contributor = msg.guild.roles.cache.find(r => r.name === "Infinity")
                    msg.member.roles.add(contributor)                                            
                    
                    msg.guild.channels.cache.get("734044818061131886").send(`nick ${args[1]} ${username}`)                   
                    lol.edit("Complete!")              
                } break;
                default: {
                    msg.channel.send(`Your auth key is not supported:${result.group} @Staff`)
                } break;
            }
            msg.delete();
        }).catch(console.log("ming mong long dong"));;        
    }
}
