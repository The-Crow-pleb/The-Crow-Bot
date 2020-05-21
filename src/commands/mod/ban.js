const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Você não tem permissão para banir alguém!`)
      }
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Eu não tenho permissão para banir!`)
      }
      const target = message.mentions.members.first();
      if(!target) {
        return message.channel.send(`**${message.author.username}**, Por favor, mencione quem deseja banir!`)
      }
      if(target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, Você não pode se banir -.-`)
      }
     if(!args[1]) {
       return message.channel.send(`**${message.author.username}**, Por favor, mencione uma razão para o banimento, se possivel`)
     }
      let embed = new discord.MessageEmbed()
      .setTitle("Ação: Ban")
      .setDescription(`${target} foi banido(a).`)
      .setColor("RANDOM")
      .setThumbnail('https://cdn.discordapp.com/attachments/694416599939022848/710235085957365810/DoctorDance.gif')
      .setFooter(`Banimento realizado por: ${message.author.tag}`);
      
      message.channel.send(embed)
      target.ban(args[1])
    },
    aliases: ['userban'],
    description: 'Bane um membro'
  }