module.exports = {
    name: 'ankieta',
    description: 'Zrób ankietę!',
    async execute(message, args, Discord) {
        let Arguments = args.join(' ');
 
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#00a2e8')
        .setTitle(`<a:701165380386684969:827943996067676180> Ankieta!`)
        .setDescription(`${Arguments}?`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
 
        let messageEmbed = await message.channel.send(newEmbed);
 
        messageEmbed.react('✔');
        messageEmbed.react('➖');
        messageEmbed.react('❌');
    }
}