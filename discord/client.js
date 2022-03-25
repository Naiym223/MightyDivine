const { Client, Collection } = require('discord.js');
const config = require('../configs/index');

const client = new Client({
  disableMentions: 'everyone',
  disabledEvents: ['TYPING_START'],
});

client.commands = new Collection();
client.aliases = new Collection();
client.limits = new Map();

//const commands = require('./utilitys/commands');
const events = require('./utilitys/events');

//commands.run(client);
events.run(client);

module.exports.init = async (token) => {
  client.userBaseDirectory = __dirname;

  await client.login(config.token);

  return client;
};
