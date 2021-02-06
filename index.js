 const Discord = require('discord.js')
 const fs = require('fs')
 const Derieri = require('derieri')
const deri = new Derieri.Client({
    islearning: true
})

 
 const client = new Discord.Client()
 const config = JSON.parse(fs.readFileSync('./config.json'))
 client.commands = new Discord.Collection()
 const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
 for (const file of commandfiles){
     const command = require(`./commands/${file}`)
     client.commands.set(command.name, command)
 }

 client.on('ready', ready => {
     console.log("Ready")
     client.user.setActivity('being casey', { type: 'COMPETING' })
 })
 client.on('message', message => {
     if (message.author.bot) return;
     const prefix = 'c!'
     const args = message.content.slice(prefix.length).split(" ")
     let chatinfo = JSON.parse(fs.readFileSync('./chattoggle.json'))
     if (chatinfo[message.guild.id]) {
         if (message.channel.id === chatinfo[message.guild.id].channelid) {
             if (chatinfo[message.guild.id].chatting == true) {
                deri.reply(args.join(" ")).then(response => {
                    message.channel.send(response)
                })
             }
         }
     }
     const command = args.shift().toLowerCase()
     try {
         client.commands.get(command).execute(message, args, client, prefix, deri)
     } catch (e) {
         return;
     }
 })
 client.login(config.token)