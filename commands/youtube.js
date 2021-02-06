const search = require('youtube-search')
const Discord = require('discord.js')
const he = require('he')
const { execute } = require('./ping')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))
module.exports = {
    name: 'youtube',
    async execute(message, args, client){
        var apiKey = config.youtube
        const videoName = args.join(" ")
        if (!videoName) return message.reply("Please enter a video to search for!")
        const searchOptions = { maxResults: 1, key: apiKey, type: "video" }
        let result = await search(videoName, searchOptions)
        var video = result.results[0]
        console.log(video.title)
        if (!video) return message.reply("I cannot find a video to match your search")
        const decodedTitle = he.decode(video.title)
        const videoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${decodedTitle}`)
        .setURL(video.link)
        .setThumbnail(video.thumbnails.high.url)
        .setDescription(video.description)
        message.reply(videoEmbed)
    }
}