module.exports = {
    name: "slowmode",
    description: "change slowmode!",
    execute(message, args) {
        // sprawdzanie permisjii;
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Nie masz uprawnień do użycia tej komendy! Brakujące uprawnienia: `MANAGE_CHANNELS`");
        
        // sprawdzanie, czy użytkownik podał na ile sekund slowmode ma być ustawiony;
        if(args[0] === null) return message.channel.send("Nie podałeś, ile ma być warty **slowmode**!");

        // finalne ustawianie slowmode'u;
        try{
            message.react('✅');
            message.channel.setRateLimitPerUser(args[0]);
        } catch (err) {
            // wyłapywanie błędu;
            message.channel.send("Wystąpił błąd.");
        }

    }
}