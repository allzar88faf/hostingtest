const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Brodcast someone's avatar",

    execute(message, args, client)  {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`Zdjęcie profilowe: ${message.author.tag}`)
        .setDescription(`[Kliknij](${message.author.displayAvatarURL()}) by otworzyć zdjęcie!`)
        .setImage(avatar)
        .setColor("BLUE")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send(embed)
    }
}