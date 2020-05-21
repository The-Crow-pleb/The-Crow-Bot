const discord = require("discord.js");

module.exports = {
    run: (client, message, args) => {     
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Você não tem permissão para isso!`)
      }     
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Eu não tenho permissão para fazer isso!`)
      }      
      let target = message.mentions.members.first();     
      if(!target) {
        return message.channel.send(`**${message.author.username}**, Por favor, mencione alguém.`)
      }
      if(target.id === message.author.id) {
       return message.channel.send(`**${message.author.username}**, Não é mais fácil usar o botão de "Sair do Servidor" nesse caso?`)
      }
    if(!args[1]) {
      return message.channel.send(`**${message.author.username}**, Me dê um motivo para cumprir a ordem!`)
    }
      let embed = new discord.MessageEmbed()
      .setTitle("Ação: Expulsão")
      .setDescription(`${target} foi expulso(a) do servidor!`)
      .setColor("#ff2050")
      .setThumbnail('https://cdn.discordapp.com/attachments/694416599939022848/710235085957365810/DoctorDance.gif')
      .setFooter(`${message.author.username} expulsou ${target}`);
      message.channel.send(embed)
      target.kick(args[1]);
    },
    aliases: ['kc'],
    description: 'Retira um membro do servidor!'
  }