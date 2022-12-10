const Discord = require("discord.js");
require("dotenv").config()



const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.login(process.env.TOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log(`Logged in as ${client.user.tag} and we are ready to go!`)
}

client.on("messageCreate", gotMessage);

function gotMessage(msg) {
	console.log(msg.content);
	if (msg.content === `test`) {
		msg.reply(`f you`);
	}
}