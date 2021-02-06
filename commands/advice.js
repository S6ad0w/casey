const snekfetch = require('snekfetch')
const Discord = require('discord.js')

module.exports = {
    name: 'advice',
    async execute(message, args, client){
        const { body } = await snekfetch.get('http://api.adviceslip.com/advice')
        let advice = JSON.parse(body.toString())
        const adviceEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(advice.slip.advice)
        message.channel.send(adviceEmbed)
    }
}