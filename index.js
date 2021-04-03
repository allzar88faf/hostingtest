const Discord = require('discord.js');
const nodemon = require('nodemon');
require('dotenv').config();
const client = new Discord.Client({partials: ['MESSAGE',  'CHANNEL,', 'REACTION' ] });
const { token, prefix } = require('./config.js');
const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));


client.once('ready', () =>{
    console.log(`Aplikacja o tagu ${client.user.tag} połączył sie z Discordem.`);
    client.user.setStatus('dnd');
    client.user.setActivity('allzar88', {type: 'LISTENING'});
});

client.on('guildMemberAdd', guildMember =>{
    const channel = guildMember.guild.channels.cache.get('827880102472712242');

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Witamy!")
    .setDescription(`Witamy <@${guildMember.user.id}> na naszym serwerze!\n`
        + `Jestes naszym **${client.guilds.cache.get('827880064330235904').memberCount}** używkownikiem`);

    channel.send(embed);
});

client.on('guildMemberRemove', guildMember =>{
    const channel = guildMember.guild.channels.cache.get('827880102472712242');

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Żegnamy!")
    .setDescription(`<@${guildMember.user.id}> opóscił nasz serwer!\n`
        + `Jest nas teraz **${client.guilds.cache.get('827880064330235904').memberCount}**`);

    channel.send(embed);
})

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'boop') {
        client.commands.get('boop').execute(message, args);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(client, message, args, Discord);
    } else if (command === 'testafk') {
        client.commands.get('testafk').execute(message, args);
    }  else if (command === 'invite') {
        client.commands.get('invite').execute(message, args, Discord);
    } else if (command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args); 
    } else if (command === 'rr') {
    client.commands.get('rr').execute(client, message, args, Discord); 
    } else if (command === 'suggest') {
        client.commands.get('suggest').execute(message, args, Discord);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args);
    } else if (command === 'slowmode') {
        client.commands.get('slowmode').execute(message, args);
    } else if (command === 'diss') {
        client.commands.get('diss').execute(message, args);
    } else if (command === 'serverinfo') {
        const { guild } = message;

        const embed = new Discord.MessageEmbed()
        .setColor('#a51b9d')
        .setAuthor(`Informacje o serwerze ${guild.name}`, guild.iconURL({ dynamic: true }))
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
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

    } else if (command === 'userinfo') {
        const userTarget = message.mentions.users.first() || message.author;
    const memberTarget = message.guild.members.cache.get(userTarget.id);

    let isBot;
    if (userTarget.bot) isBot = "tak";
    else isBot = "nie";

    const embed = new Discord.MessageEmbed()
      .setColor("#00aaff")
      .setThumbnail(userTarget.displayAvatarURL())        
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setTitle(
        `Użytkownik ${userTarget.username}`
      )
      .addFields(
        { name: "🧔 **• Nick:** ",value: `${userTarget.tag}` },
        { name: "<:737711096852381696:827880675465363486> **• Tag:** ",value: `${userTarget.tag}` },
        { name: "🆔 **• ID:** ", value: `${userTarget.id}`},
        { name: "🤖 **• BOT:**", value: isBot },
        { name: "Nickname użytkownika: ",value: memberTarget.nickname || "Nie istnieje." },
        { name: "Dołączył do serwera: ",value: new Date(memberTarget.joinedTimestamp).toLocaleDateString() },
        { name: "Założył konto: ",value: new Date(userTarget.createdTimestamp).toLocaleDateString() },

        {
          name: "Ilość posiadanych ról: ",value: memberTarget.roles.cache.size - 1,
        }
      );

    message.channel.send(embed);

    } else if (command === 'help') {
        const embed = new Discord.MessageEmbed()
            .setTitle("Pomoc GryzzliBOT")
            .addField("Wszystkie komendy: ", client.commands.map(command => command.name).join(', '), false)
            .setColor(`RANDOM`)
            .setFooter(message.member.user.tag)
            .setThumbnail(message.guild.iconURL)
            .setColor(`RANDOM`)

            client.commands.map(command => command.name).join(', ');
            message.channel.send(embed);

    } else if (command === 'pies') {
        var pies = new Discord.MessageEmbed()
            .setTitle("Hał 🐶")
            .setColor(`RANDOM`)
        var random = Math.floor(Math.random() * 3) + 1
        if (random == 1) {
            pies
                .setImage('https://static.polityka.pl/_resource/res/path/22/99/229904bf-a6ef-4889-bcab-cd16647d25ed_f1400x900')
        }
        if (random == 2) {
            pies
                .setImage('https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20200317/SWIAT/200319192/AR/0/AR-200319192.jpg?imageversion=Artykul&lastModified=')
        }
        if (random == 3) {
            pies
                .setImage('https://www.dworsierakow.pl/images/pakiety/twoj_pies.jpg')
        }
        message.channel.send(pies)
        
    } else if (command === 'kot') {
        var kot = new Discord.MessageEmbed()
            .setTitle("Miau 🐱")
            .setColor(`RANDOM`)
        var random = Math.floor(Math.random() * 3) + 1
        if (random == 1) {
            kot
                .setImage('https://a.allegroimg.com/original/1212b0/f00c51784b3d8b6318d17d96f770')
        }
        if (random == 2) {
            kot
                .setImage('https://lh3.googleusercontent.com/zyxyn0-yvlY69Ql-jkVtgdZmh7Pc9fer59sg4TAyVrlWPyN08DL6BIfiRqMtDD6wbGb5svjGRKStOEWt9ORqFeEIj2AKjtCqNn2c_mcNkgP8-bbJT_Jzc9DzBG4QWErCXW1R_KS1S1mMPGGV_INQ_npR8jichuuemqoTQQOgm-6yohu92EihAK9V8MuomCFrevkC_qX35CPyBGWdKzwXJt9ImAfmzuMVdMRD-rcYGUwfx4yKfdZCUX77Kt7S5KMrEbMka9R2WGz1nFtqjL6ifZSnK5ZAtzxKYE2QIbeoE5Fd3qm744ujDxHT1cmaaC4Ksc5mCO9u3KnwlvZ25RPoaBky_f8scCNnkcn-Fi9D9I7NdvQWn90HQ6uX3h-n0u7oF-7RIJjLIA8_XYXYXj64tKouQ_vAB_Or4bKIO-nLbmwz5zb-z0r7dpHe1iXLWKFnXMgn4WDE9r3wrk81F4KJGdzXa05903EG281LVN4_ifGFR_7wxpumuxbjtmcPkP6XAv_q9gIdDPDpcSQf2npphbfSxhYSa7u8vajn2RwoJdWrslFMpEuL1ouOcF9f1AaD6SeuVmcloyV0pdf9C-DgA0CqNOkrMTIT_ozko5UbyfOoe0eiF53yHmG88ZtbCJepb1-6Iqvxtau0GYoHyW-Wf8D3KZU_qLgV-O-jUPOz1LqaZaqEmpNL1UY8f0rJjQ=w975-h1299-no?authuser=0')
        }
        if (random == 3) {
            kot
                .setImage('https://r.dcs.redcdn.pl/http/o2/redefine/cp/wk/wkh4c1uo7ngkpyjw4wdp5vbw3bws7nax.jpg')
        }
        message.channel.send(kot)
        
    }


});

client.login(process.env.DISCORDBOTOKEN);