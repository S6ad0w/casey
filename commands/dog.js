const pixabay = require('pixabay-api')
const Discord = require('discord.js')
const fs = require('fs')
const { execute } = require('./ping')
const config = JSON.parse(fs.readFileSync('./config.json'))

module.exports = {
    name: 'dog',
    async execute(message, args, client){
        const key = config.pixabay
        pixabay.searchImages(key, "dog")
         .then((r) => {
             let results = JSON.parse(JSON.stringify(r))
             function randomIntFromInterval(min, max) { 
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
             let random = randomIntFromInterval(1, results.hits.length-1)
             const dogEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setTitle("Random Dog")
             .setImage(results.hits[random].largeImageURL)
             .setFooter("Dog Images provided by pixabay")
             message.reply(dogEmbed)
         })
    }
}