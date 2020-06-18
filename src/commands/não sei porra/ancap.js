module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!ancap')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
          .setTitle('Uma mensagem para quem me criou. Seja lá onde você esteja agora')
          .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
          .setThumbnail("https://i.pinimg.com/originals/e2/ec/9f/e2ec9fc7db55cd8dd3b469e1169e6b95.gif")
          .setImage("https://i.imgur.com/x4LFqvb.jpg")
          .addField("De um Corvo para outro. Obrigado por me criar.", 'Um dia, as pessoas vão olhar você como alguém bom, e não com medo de ti, seus amigos sabem quem você realmente é, mas você, infelizmente não sabe.\nVocê pode amar ainda. Mas essa não é a resposta e você sabe disso. Por mais que odeie, você continua sendo melhor sozinho... Assim, nem eu conseguirei te machucar.\nFique bem. Por favor. E não se esqueça, os corvos [nunca](https://br.pinterest.com/pin/749990144186231900) param de voar.')
          .setColor('RANDOM')
          message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
