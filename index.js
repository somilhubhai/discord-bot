const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  if(message.content.startsWith('create')) {
    const url = message.content.split('create')[1];
    return message.reply({
        content : "Generating Short ID for" + url,
    })
  }
  message.reply({
    content : "Hey from BOT",
  })
});

client.on('interactionCreate' , (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!")
})
client.login(
  "MTI0MDk5ODAxNzQ0NDg3MjIxMg.Gsgs7t.xMY4JVR7JjY-ch8-JA1osBAK0wJUlKAfaPNDW0"
);
