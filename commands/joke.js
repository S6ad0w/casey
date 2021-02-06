const Discord = require('discord.js')
const snekfetch = require('snekfetch') 
module.exports = {
    name: 'joke',
    async execute(message, args, client){
        const { body } = await snekfetch.get('https://official-joke-api.appspot.com/random_joke')
        let content = JSON.parse(JSON.stringify(body))
        const jokeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(content.setup)
        .setDescription(`||${content.punchline}||`)
        message.channel.send(jokeEmbed)

    }
}