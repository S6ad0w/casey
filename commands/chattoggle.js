const Discord = require('discord.js')
const { execute } = require('./ping')
const fs = require('fs')

module.exports = {
    name: 'chattoggle',
    async execute(message, args, client){
        let chatinfo = JSON.parse(fs.readFileSync('./chattoggle.json'))
        console.log(chatinfo)
        if (!chatinfo[message.guild.id]) {
            chatinfo[message.guild.id] = {
                chatting: false
            }
            fs.writeFileSync('./chattoggle.json', JSON.stringify(chatinfo))
        } 
        if (chatinfo[message.guild.id].chatting === false) {
            chatinfo[message.guild.id] = {
                chatting: true,
                channelid: message.channel.id
            }
            message.channel.send("You are now chatting with casey")
            return fs.writeFileSync('./chattoggle.json', JSON.stringify(chatinfo))
        }
        if (chatinfo[message.guild.id].chatting === true) {
            chatinfo[message.guild.id] = {
                chatting: false,
                channelid: message.channel.id
            }
            message.channel.send("You now aren't chatting with casey")
            return fs.writeFileSync('./chattoggle.json', JSON.stringify(chatinfo))
        }
    }
}