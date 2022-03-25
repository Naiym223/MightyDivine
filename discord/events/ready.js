const { readdirSync } = require('fs');
const { join } = require('path');
const filePath2 = join(__dirname, '..', 'events');
const eventFiles2 = readdirSync(filePath2);
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async (client) => {
  console.log(`${client.user.tag} is online.`);
  client.user.setActivity(`InfinityApplications`, { type: 'WATCHING' });

  const embed = new Discord.MessageEmbed()
    .setTitle('**__Site & Bot Startup:__**')
    .setColor('#3a34eb')
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(
      `${client.user.username} has started up and the apps site has started up with no errors.`,
    )
    .setTimestamp()
    .setFooter('© Copyright 2022 - Infinity Applications');
  client.channels.cache.get('915000866648494097').send(embed);
};
