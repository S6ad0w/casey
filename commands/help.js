const Discord = require('discord.js')

module.exports = {
    name: 'help',
    async execute(message, args, client){
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setColor("RANDOM")
        .setDescription(`
        \`c!dog\` - It's a dog
        \`c!cat\` - It's a cat
        \`c!help\` - If you need help using help you are truely lost
        \`c!jeopardy\` - Try and get all 216,930 questions. I dare you.
        \`c!ping\` - Not the game ping pong
        \`c!zalgo <text>\` - Makes text zalgo.
        \`c!youtube <search>\` - Searches youtube for a video
        \`c!advice\` - Gives some advice
        \`c!dogeify <text>\` - Translates your text into doge
        \`c!chat <message>\` - Lets you chat with the bot
        \`c!chattoggle\` - Lets you continuously chat with the bot while its on.
        `)
        message.reply(helpEmbed)
    }
}