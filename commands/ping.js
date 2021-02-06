const { executionAsyncResource } = require('async_hooks')
const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    async execute(message, args, client){
        const pinging = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Pong!")
        message.reply(pinging)
    }
}