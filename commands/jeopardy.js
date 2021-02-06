const fs = require('fs')
const jeopardy = JSON.parse(fs.readFileSync('./jeopardy.json'))
const Discord = require('discord.js')
const { execute } = require('./ping')

module.exports = {
    name: 'jeopardy',
    async execute(message, args, client){
        function randomIntFromInterval(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        var random = randomIntFromInterval(1, 216930)
        let question = jeopardy[random]
        const jeopardyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(question.round)  
        .setTitle(question.question)
        .setDescription(`||${question.answer}||`)
        .setFooter(`Air date: ${question.air_date}, Show number: ${question.show_number}, Value: ${question.value}`)
        message.reply(jeopardyEmbed)     
    }
}