const pixabay = require('pixabay-api')
const Discord = require('discord.js')
const fs = require('fs')
const { execute } = require('./ping')
const config = JSON.parse(fs.readFileSync('./config.json'))

module.exports = {
    name: 'cat',
    async execute(message, args, client){
        const key = config.pixabay
        pixabay.searchImages(key, "cat")
         .then((r) => {
             let results = JSON.parse(JSON.stringify(r))
             function randomIntFromInterval(min, max) { 
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
             let random = randomIntFromInterval(1, results.hits.length-1)
             const dogEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setTitle("Random Cat")
             .setImage(results.hits[random].largeImageURL)
             .setFooter("Cat Images provided by pixabay")
             message.reply(dogEmbed)
         })
    }
}