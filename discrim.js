hero.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let tag;
  if(args[0] === `${prefix}discrim`) {
    if(args[1]) {
      let discrim = Array.from(args[1]);
      if(isNaN(args[1])) return message.channel.send(`- \`${message.author.username}\`, يجب ان تتكون هذه الخانة من ارقام وليس احرف`);
      if(discrim.length !== 4) return message.channel.send(`- \`${message.author.username}\`, يجب ان يكون التاق مكون من 4 ارقام`);

      tag = discrim.map(r => r.toString()).join('');
      console.log(tag);
      if(hero.users.filter(f => f.discriminator === tag).size === 0) return message.channel.send(`- \`${message.author.username}\`, لا يوجد احد بهذا التاق`);
      let iLD = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(hero.users.filter(f => f.discriminator === tag).map(r => r.username).slice(0, 10).join('\n'))
      .setFooter('By: xYouseeF\'₁₁ || Roýale.#0001');
      message.channel.send(iLD);
    } else if(!args[1]) {
      tag = message.author.discriminator;
      if(hero.users.filter(f => f.discriminator === tag).size === 0) return message.channel.send(`- \`${message.author.username}\`, لا يوجد احد بهذا التاق`);
      let L4U = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(hero.users.filter(f => f.discriminator === tag).map(r => r.username).slice(0, 10).join('\n'))
      .setFooter('By: xYouseeF\'₁₁ || Roýale.#0001');
      message.channel.send(L4U);
    }
  }
});
