module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!luiza')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Luluzinha OwO')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/10/1d/6d/101d6d064d43691fd929ac37cc1a6b74.gif")
            .addField("Lolizinha fofa", 'Sai da moto, interesseira. E não esquece, antes de sair, manda foto da coxa pls')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
