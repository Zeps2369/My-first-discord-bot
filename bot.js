const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, Guildmember, Threadmember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMessages, GuildMembers],
  partials: [User, Message, Guildmember, Threadmember],
});

const { loadEvents } = require("./Handlers/eventHandler");

require("dotenv").config();

client.events = new Collection();

loadEvents(client);

client.login(process.env.TOKEN);
