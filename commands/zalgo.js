const zalgo = require('to-zalgo')

module.exports = {
    name: 'zalgo',
    async execute(message, args, client){
        if (!args[0]) return message.reply("You must enter text to be translated!")
        message.channel.send(zalgo(args.join(" ")))
    }
}