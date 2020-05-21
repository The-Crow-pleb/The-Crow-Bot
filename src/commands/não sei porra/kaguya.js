module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!kaguya')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Kaguya-Sama uwu')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/99/11/47/991147d84b1097e2bc7e79ef0e5d780b.gif")
            .addField("Fofamente fofa", 'Eu te peço desculpas. Mas a morte ainda não está ao seu favor, eu sou companheiro dela, posso dizer isso.\nVocê tem de aproveitar mais.\nNão se esquece do seu remédio, por favor!')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
