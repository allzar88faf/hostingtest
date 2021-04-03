module.exports = {
    name: 'testafk',
    description: 'Czy bot jest aktywny?',
    execute(message, args) {
        message.react('✅');
        message.channel.send('Jestem! 😆');
    },
};