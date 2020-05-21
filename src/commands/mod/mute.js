module.exports = {
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Desculpe, mas você não tem permissão para fazer isso."
        );
      }
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Eu não tenho permissão para mutar alguém.");
      }
      const user = message.mentions.members.first();
      if(!user) {
        return message.channel.send("Por favor, mencione alguém que deseja mutar.")
      }
      if(user.id === message.author.id) {
        return message.channel.send("Eu não vou te mutar -_-");
      }
      let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
        if(!muterole) {
        return message.channel.send("Esse servidor não tem o cargo `Silenciado`, tente criar um com as permissões corretas!")
      }
      if(user.roles.cache.has(muterole)) {
        return message.channel.send("Usuário já silenciado.")
      }
      user.roles.add(muterole)
  await message.channel.send(`Você mutou **${message.mentions.users.first().username}**`)
      
      user.send(`Você foi mutado no  servidor: **${message.guild.name}**`)
    },
    aliases: ['mute'],
    description: 'Muta um membro'
  };
  
  