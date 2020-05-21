module.exports = {
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Desculpe, mas você não tem permissão para fazer isso."
        );
      }  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Eu não tenho permissão para fazer isso!");
      }  
      const user = message.mentions.members.first();
      if (!user) {
        return message.channel.send(
          "Por favor, mencione o usuario que deseja silenciar."
        );
      }
      let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("O membro mencionado não está mutado. Aconteceu algo?")
      }
      user.roles.remove(muterole)
      await message.channel.send(`**${message.mentions.users.first().username}** foi desmutado`)
      user.send(`Você foi desmutado no servidor: **${message.guild.name}**, tome cuidado para não acontecer novamente!`)
    },
    aliases: ['desmutar'],
    description: 'Desmuta um membro'
};