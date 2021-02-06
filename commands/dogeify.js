const { DiscordAPIError } = require('discord.js')
const dogeify = require('dogeify-js')
const Discord = require('discord.js')

module.exports = {
    name: 'dogeify',
    async execute(message, args, client){
        if (!args[0]) return message.reply("You must enter text to be translated!")
        let input = args.join(" ")
        let output = await dogeify(input)
        const dogeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Dogeify")
        .addField("Input:", `\`\`\`${input}\`\`\``)
        .addField("Output:", `\`\`\`${output}\`\`\``)
        message.reply(dogeEmbed)
    }
}