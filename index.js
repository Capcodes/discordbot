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
  //   set the bots activity here
  client.user.setActivity("my javascript");
});
client.on("messageCreate", (message) => {
  //   this is to check if we have an author
  //   if (message.author.bot) console.log("first");
  if (message.content === "ping") {
    console.log("message");
    message.reply("messages");
  }

  if (message.author == client.user) return;
  switch (message.content) {
    case "!meme":
      message.reply("hello world");
      //   we can aslo put a reaction for each time a case is met cool huh!

      message.react("👍");
      message.react("🛐");
      //   message.guild.emojis.forEach((element) => {
      //     console.log(element);
      //   });
      console.log(message.guild.emojis.guild);
      //   message.guild.emojis.forEach((customEmoji) => {
      //     console.log(
      //       `Reacting with custom emoji: ${customEmoji.name} (${customEmoji.id})`
      //     );
      //     message.react(customEmoji);
      //   });

      break;
    case "!eye":
      // example to setup a interval to keep the bot running
      msg.channel.send("You are now subscribed to eye reminders.");

      interval = setInterval(function () {
        msg.channel.send("Please take an eye break now!").catch(console.error);
      }, 3600000); //every hour
      break;
    case "!stop":
      msg.channel.send("I have stopped eye reminders.");
      clearInterval(interval);
      break;
  }
});
// Login to Discord with your client's token
client.login(process.env.DISCORD_API_KEY);
