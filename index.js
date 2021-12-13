const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Yo boi!!'));

app.listen(port, () =>
	console.log(`Your app is listening to http://localhost:${port}`)
);

const discord = require('discord.js')
const akinator = require('discord.js-akinator')

const { Client } = require("discord.js");
const Discord = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

//Bot prefix
const prefix = "cl"
//

//Status
client.on("ready", () => {
  let statusList = [`${prefix}akinator`, `Cleo is here!`, `Hi! I'm Cleo!`];
    setInterval(function() {
  		let status = statusList[Math.floor(Math.random()*statusList.length)];
  		client.user.setActivity(status, {type: "LISTENING"});
  	}, 10000)

    console.log(`${client.user.tag} has been successfully deployed!! 🚀`)
});
//

//Akinator Command
client.on("messageCreate", async message => {
    if(message.content.startsWith(`${prefix}akinator`)) {
        akinator(message, client, "en");
    }
});
//

//Help Command
client.on("messageCreate", async message => {
    if(message.content.startsWith(`${prefix}help`)) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Command Panel")
        .setDescription("Cleo is an Akinator bot. Pick 1 character and I will try to guess it correctly!")
        .addField("clakinator", 'Get yourself ready and run the command to start the brain fight!')
        .addField("clhelp", 'I always love to help people! Especially about me!')
        .addField("clinvite", 'You want me to be in your own party? Come and invite me then!')
        .setTimestamp()
        .setFooter("Cleo!")
        .setColor("ORANGE")
      message.channel.send({ embeds: [embed] });
    }
});
//

//Invite Command
client.on("messageCreate", async message => {
    if(message.content.startsWith(`${prefix}invite`)) {
        const invites = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle("Invite Cleo and Start Challenging Me!")
        .setDescription(`My prefix in this server is **${prefix}**`)
        .addField("Thanks for inviting Cleo!", '[Invite Generated!](https://discord.com/api/oauth2/authorize?client_id=915947566380765184&permissions=274878102593&scope=bot)')
        .setTimestamp()
        .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
      message.channel.send({ embeds: [invites] });
    }
});
//


client.login(process.env.token) //token should be put in the lock/client secrets button
