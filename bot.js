
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";          //    Token Here
<CLient>.on("messageReactionAdd", (reaction, user) => {
  if (user.bot) return;
  const member = reaction.message.member
  switch (reaction.name) {
    case "emoji_name_1":
    member.addRole("612601847634591753").then((res) => {
      
     
    }).catch(console.error);
    break;
  
  };
})

<CLient>.on("messageReactionRemove", (reaction, user) => {
  if (user.bot) return;
  const member = reaction.message.member
  switch (reaction.name) {
    case "emoji_name_1":
    member.removeRole("612601847634591753").then((res) => {
      // You can do something like this, or nothing at all. Your choice.
      reaction.message.channel.send(`You've been removed from the \`${res.name}\` role!`)
    }).catch(console.error);
    break;
    case "emoji_name_2":
    member.removeRole("someOtherRole").then((res) => {
      
    }).catch(console.error);
  };
})

client.login(process.env.BOT_TOKEN);

