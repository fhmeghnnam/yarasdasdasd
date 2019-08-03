client.on("ready", () => {
  const channel = client.channels.get("555871258361856000");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});


client.login(process.env.BOT_TOKEN)
