module.exports = {
    name: 'chat',
    async execute(message, args, client, prefix, deri){
        if (!args[0]) return message.reply("You must enter text!")
        deri.reply(args.join(" ")).then(response => {
            message.channel.send(response)
        })
    }
}