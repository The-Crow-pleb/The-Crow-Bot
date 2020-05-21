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
            .setTitle('Vicci, o "Mono" "Talon"')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/ed/51/a3/ed51a3234379d2555a1a904445b834a2.gif")
            .addField("De um corvo, para.... O quê você é?", 'Se algum dia você me encontrar voando por aí, apenas me observe e aprecie o meu vôo, mas por favor, não tente impedir minhas asas de bater.\nUm dia, eu voarei mais alto que todos, eu prometo.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
