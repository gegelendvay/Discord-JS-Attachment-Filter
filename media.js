const Discord = require('discord.js');

module.exports = client => {
    let prefix = client.config.prefix;

    client.on('message', async (message) => {
        if(message.author.bot) return;
        if(!message.guild) return;
        if(message.partial) await message.fetch();

        //================================= C O N F I G =================================

        // ID's
        let mediaChannelID = ""; // Media channel ID, where messages without images will be removed
        let ignoredIDs = ['', '']; // Array of roles that can bypass the limitation

        // Response on/off
        let response = false; // Toggles the bot's response: True (on) or false (false)

        // Embeds
        const mediaEmbed = new Discord.MessageEmbed()
            .setColor("#ff5353")
            .setDescription(`${message.author}, you cannot send messages here that don't contain at least 1 attachment.`)
            .setFooter("Made by Gege#6988")
            .setTimestamp()

        //===============================================================================

        if(message.channel.id === mediaChannelID) {
            for (let i = 0; i < ignoredIDs.length; i++) {
                if(!ignoredIDs.some(role => message.member.roles.cache.get(role)) && (message.attachments.size < 1)) {
                    message.delete();
                    if(response) {
                        message.channel.send(mediaEmbed)
                        break;
                    }else {
                        return;
                    }
                }
            }
        }
    })
}