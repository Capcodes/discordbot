// Require the necessary discord.js classes
const { Client, Intents, WebhookClient } = require("discord.js");
require("dotenv").config();
const PREFIX = "$";
let interval;

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
console.log(process.env.DISCORD_API_KEY);
// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
  console.log(`${client.user.tag}`);
});
client.on("messageCreate", (message) => {
  //   this is to check if we have an author
  //   if (message.author.bot) console.log("first");
  if (message.content === "ping") {
    console.log("message");
    message.reply("messages");
  }
  //   console.log(message.content);

  //   console.log("first");
  switch (message.content) {
    case "!meme":
      message.reply("hello world");
      break;
    case "!eye":
      // example to setup a interval to keep the bot running
      msg.channel.send("You are now subscribed to eye reminders.");
      interval = setInterval(function () {
        msg.channel.send("Please take an eye break now!").catch(console.error);
      }, 3600000); //every hour
      break;
  }
});
// Login to Discord with your client's token
client.login(process.env.DISCORD_API_KEY);
