module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!udy')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Udy, o psicopata do Randuin')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/564x/85/0c/82/850c8244e1d69467a1671c1b0d020136.jpg  ")
            .addField("O único com permissão de oprimir muié", 'Você me fez rir, por mais dificil que seja, você realmente me fez rir. Obrigado.\nE PARA DE RUSHAR RANDUIN GARAIO, NINGUEM MERECE ISSO!')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
