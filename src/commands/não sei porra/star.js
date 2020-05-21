module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!star')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('É estranho Star um pouco viado hoje?')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://data.whicdn.com/images/260566552/original.gif")
            .addField("Ala mó viadãokkkkkkkkkkkkkkkkkk", 'Você é ainda menos confiável do que eu, e isso todo mundo sabe, mas, um amigo ainda é um amigo, não é?')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
