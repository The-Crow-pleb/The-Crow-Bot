module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!son')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('SonOtaku uwu')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://media0.giphy.com/media/aHCl9hfKPkFlS/source.gif")
            .addField("Tu é um urso humano ou um humano urso?", 'Eu não tenho muito o que dizer, você me apresentou pessoas fora daqui, e eu realmente agradeço a isso, obrigado, Son, eu nunca vou esquecer da tua amizade.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
