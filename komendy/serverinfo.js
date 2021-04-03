const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'serverinfo',
    aliases: ['sw', 'server-info'],
    description: "get server info!",
    cooldown: 0,
    permissions: 0,
    async execute(message, args, Discord, client) {
        const { guild } = message;

        const embed = new MessageEmbed()
        .setColor('#a51b9d')
        .setAuthor(`${guild.name}`)
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        .addFields(
            { name: "Nazwa i ID: ", value: `${guild.name} | ${guild.id}` },
            { name: "Właściciel: ", value: guild.owner.user.tag },
            { name: "Ilość użytkowników: ", value: guild.memberCount },
            { name: "Kiedy został utworzony: ", value: new Date(guild.createdAt).toLocaleDateString() },
            { name: "Ilość kanałów: ", value: guild.channels.cache.size },
            { name: "Ilość ról: ", value: guild.roles.cache.size },
            { name: "Ilość emotek: ", value: guild.emojis.cache.size },
        )

        message.channel.send(embed);
    }
}