module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!vicci')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Die Krähe wird dich nie vergessen. Diesmal brauchte der Wolf die Hilfe der Krähe.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/564x/a1/b7/8e/a1b78e0f3f85feed610491195c6e625c.jpg")
            .addField("Von einer Krähe zu einem Wolf", 'Eu disse, você me veria voar novamente, com as asas tão fortes quanto antes, com sua vitalidade restaurada.\nVocê pode não se considerar um, mas eu te considero, after all, the Crow need the help from the Wolf to get his preys killed, isnt it? Now, the Crow will help you. Bleed for me, I will bleed for you.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
