module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!kauan')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Kauan, O meu Melhor Amigo.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://media0.giphy.com/media/uWcNWtfqzySDYqkORw/giphy.gif")
            .addField("Ookina caralho", '“Não caminhe diante de mim, pode ser que eu não o siga. Não caminhe atrás de mim, pode ser que eu não o guie. Caminhe junto de mim e seja meu amigo”.\nÉ como eu defino nosso relacionamento, apesar de todas desavenças, nós nunca paramos de ser amigos, até porquê, amigos precisam de um tempo também... Me desculpe, Kauan, eu genuinamente espero que você seja feliz.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
