module.exports = {
    run: async(client, message) => {
        const { MessageEmbed } = require('discord.js')
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!info')) {
          const args = message.content.split(' ');
          if(args.length > 2) {
            message.channel.send(`Como usar: c!info | c!info <user_id> | c!info @mention`);
        } else if(args.length === 2) {
            const member = message.mentions.members.size === 1 ? 
              message.mentions.members.first() :
              message.guild.members.cache.get(args[1]);
            if(member) {
              const embed = new MessageEmbed()
                .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL({ dynamic: true }))
                .setDescription('Essas são as informações que encontrei sobre esse usuário:')
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .addField('Conta Criada em:', member.user.createdAt.toLocaleString(), true)
                .addField('Entrou em:', member.joinedAt, true)
                .addField('Pode ser expulso?:', member.kickable, false)
                .addField('Canal de Voz:', member.voice.channel ? member.voice.channel.name : 'Não está conectado em nenhum canal de voz')
                .setColor('#df1515')
              message.channel.send(embed);
            } else {
              message.channel.send(`Eu não consegui encontrar o usuario com o ID ou Menção: " ${args[1]} " , será que ele aprendeu a voar?`);
            }
            
        } else {
            const { guild } = message;
            const embed = new MessageEmbed()
              .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL({ dynamic: true }))
              .setDescription('Essas são as informações que encontrei deste servidor:')
              .setThumbnail(guild.iconURL({ dynamic: true }))
              .addField('Criado em:', guild.createdAt.toLocaleString(), true)
              .addField('Dono da Guilda:', guild.owner.user.tag)
              .addField('Total de Membros:', guild.memberCount, true)
              .addField('Total de Pessoas Reais:', guild.members.cache.filter(member => !member.user.bot).size, true)
              .addField('Total de Robôs(Bots):', guild.members.cache.filter(member => member.user.bot).size, true)
              .addField('Total de Canais:', guild.channels.cache.size, true)
              .addField('Total Canais de Texto:', guild.channels.cache.filter(ch => ch.type === 'text').size, true)
              .addField('Total de Canais de Voz:', guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
              .setColor('#5CC5FF')
            message.channel.send(embed);
          }
        }
    },
    aliases: [""],
    description: "Mostra Informações do usuario ou servidor!"
}