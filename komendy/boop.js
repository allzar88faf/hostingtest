module.exports = {
    name: 'boop',
    description: 'Booop Beep!',
    execute(message, args) {
        message.channel.send('Beep 🤖');
    },
};