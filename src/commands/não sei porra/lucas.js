module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!lucas')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Para o Deus Pescador, um grande amigo.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/39/33/c3/3933c3d5e6b43d71512147f001b223f1.gif")
            .addField("Shitposter do caraio", 'Nós não nos conhecemos a muito tempo, eu admito isso, mas isso não deixa fazer com que eu aprecie nossa relação. Desculpe-me não me aproximar mais de você, eu tenho medo das pessoas, de confiar nelas, é angustiante para mim, sabe? Sufocante, até. Me desculpe, mas você é um bom amigo e uma boa pessoa, é uma pena que não vejo você voar muito por esses arredores.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
