const Discord = require("discord.js");

const TOKEN = "NDAyNTM2NTAzMTUxOTUxODgz.DUZdIQ.29mYfRyTabSXK5S8RkNkVXZwGuE";
const PREFIX = "!";

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ok... My data is loading... Wait a minute! ...I have now started up! What can I do for you?");
    bot.user.setGame('Gebruik me!',"https://www.twitch.tv/kanedevelopment");
});
bot.on("message", function(message) {
    if (message.channel.id === `402184956681388053`) {
        if (isNaN(message.content.startsWith(PREFIX))) {
            message.delete()
            message.author.send('Wilt u geen bot commands in dit kanaal doen hiervoor is #bot-spam bedoeld! Dankuwel')
        }
    }

});

bot.on("message", function(message) {
    if (message.author.bot) return;

    if(!message.guild) return message.reply(`${message.author},  Je kan pas mij gebruiken als je mij hebt toegevoegd op jou server https://discordapp.com/oauth2/authorize?client_id=397832997186830336&scope=bot&permissions=8`);

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "test":
            message.channel.sendMessage("Dit is een test command gemaakt door Kane!")
            break;
        case "discordbot":
        var embed = new Discord.RichEmbed()
        .setTitle("Hoe maak je een discord ``BOT``?!")
        .addField("Stap 1.", "Je moet wel op mijn kanaal geabonneerd zijn! https://www.youtube.com/KaneDoetGamez")
        .addField("Stap 2.", "Je moet op Kane's (kanaal zijn laatste video of stream) achterlaten wat voor **``BOT``** je wilt zoals : Embed bijv.")
        .addField("Stap 3.", "Wachten! :P")
        .setColor(0x0FFF)
        message.channel.sendEmbed(embed);
            break;
        case "ip":
            message.channel.sendMessage(`${message.author}, We hebben **ATM** geen server! Hopelijk **ZSM** komt er een server! :)`)
            break;
        case "help":
        var embed = new Discord.RichEmbed()
        .setTitle("Dit is de help menu")
        .addField("!profiel", "Laat u profiel zien!")
        .addField("!IP", "Laat ons IP zien!")
        .addField("!DiscordBot", "Laat stappen zien hoe je een **Discord ``BOT``** kan maken!")
        .setDescription("Heb jij nog leuke ideeën voor de **BOT** laat het dan **Kane** weten!")        
        .setColor(0x0FFF)
        message.channel.sendEmbed(embed);
            break;
        case "profiel":
        var embed = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .setFooter("Copyrighted by SmikkelHosting")
            .setTitle("Dit is jou profiel info!")
            .setColor(0x0FFF)
            .addField("Full Username", `${message.author}`)
            .addField("ID", `${message.id}`)
    message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Onbekent command, gebruik !help om alle functies te zien");
            break;
    }
});

bot.login(process.env.BOT_TOKEN);
