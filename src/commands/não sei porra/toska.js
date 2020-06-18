module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!toska')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Um dia, tudo voltará.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://media3.giphy.com/media/mHqF3NgGhyFJS/source.gif")
            .addField("Corvos costumam voar para longe, sabia?", 'Quando um corvo tem sua asa ferida, ele é obrigado a repousar e ficar no mesmo lugar, as vezes, infelizmente, alguns humanos cuidam desse corvo, e corvos são como cães, eles se apegam aos humanos, e quando um corvo se apega a um, ele não quer deixar aquele lugar.\nCorvos são livres, um dia, por mais apegado que seja, ele voará e não voltará. Corvos também sentem ódio, sentem o fervor dele por suas penas, corvos são tão humanos quanto você.\nQuer saber o que significa Toska? Clique [aqui](https://www.urbandictionary.com/define.php?term=Toska) e você verá.\n5949, existem muitas surpresas por aí, não acha?')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
