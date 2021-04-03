module.exports = {
    name: "ping",
    description: "ping pong!",
    execute(client, message, args, Discord) {
        let waitingEmbed = new Discord.MessageEmbed()
            .setColor("#B5BFFF")
            .setTitle("Obliczanie pingu...");
 
        message.channel.send(waitingEmbed).then(async resultMessage =>{
            const ping = await resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit(new Discord.MessageEmbed().setColor('#B5BFFF').setTitle(`Pong! 🏓 !`).setDescription(`**${message.author.tag}**, ping bota wynosi **${ping}**, a opóźnienie Discordowego API wynosi **${client.ws.ping}**.`));
            
        })

       }
    }
 