module.exports = {
    name: 'invite',
    description: 'Zaproś bota na własny serwer!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()

        .setColor('RANDOM')
        .setTitle('Zaproś mnie na swój serwer!')
        .setURL('https://discord.com/oauth2/authorize?client_id=814882466148909126&scope=bot&permissions=5905580031')
        .setDescription('Aby zaprosić mnie na własny serwer, użyj **linku powyżej**!')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        

        message.channel.send(newEmbed);
    }
}