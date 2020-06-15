module.exports = {
  run: async(client, message) => {  
    
      const { MessageEmbed } = require('discord.js')
      const { guild } = message;

      if(message.author.bot) return;
      if(message.content.toLowerCase().startsWith('c!help')) {
        const args = message.content.split(' ');
        if(args.length > 1) {
          message.channel.send(`Tente Novamente!`);
      } else if(args.length === 1) {
          const embed = new MessageEmbed()
            .setTitle('Olá, você precisa de ajuda para voar? Pois bem, eu te jogo do seu ninho!')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addField("Meu prefixo é:", "c!")
            .addField("Utilidades: ", "c!help (Bem... Eu acho que não preciso explicar muito.)\n\nc!avatar (Mostra o avatar da pessoa mencionada ou pelo ID)\n\nc!info (Mostra informações do usuario **presente no servidor** mencionado/pelo ID do mesmo, ou, informações **deste** servidor)\n\nc!ping (Mostra o meu ping e o ping que eu tenho da API do Discord!)")
            .addField("Moderação: ", "c!ban (Bane um membro do servidor)\n\nc!kick (Expulsa um membro do servidor)\n\nc!mute (Muta um membro)\n\nc!unban (Bem, todo comando de desbanimento só funciana por ID, então...)\n\nc!unmute (Desmuta um membro)")
            .addField("Diversões: ", "c!dado (Roda um dado de número aleatório entre 1 e 25!)")
            .setFooter("Sim, eu sei, não tenho muitas funcionalidades, mas eu ainda estou em desenvolvimento, irei logo mais ser aprimorado e ser um Corvo melhor!\n\nMinha versão atual é: 1.5.0")
            .setColor('RANDOM')
              message.channel.send(embed);
      }
    }         
  },
  aliases: ['ajuda'],
  description: 'Comando de ajuda, mostra todos os comandos presentes no servidor!'
}
