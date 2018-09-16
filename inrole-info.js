client.on('message', eyadcodes =>{
    var eyad = 0;
    var codes = "!" , codees = 'inrole';
if(eyadcodes.content.startsWith(codes + codees)) {
    const args = eyadcodes.content.split(' ').slice(1).join(' ');
    const role = eyadcodes.guild.roles.find('name' , args);
    if(!args) return;
    if(!role) return eyadcodes.channel.send('**قد يكون أسم الرتبه خطأ او ليست موجوده !!**')
    let eyadtxt= "";
     eyadcodes.guild.members.filter(m => m.roles.has(role.id)).forEach(xx => {
        eyad++;
        eyadtxt += `\`${eyad}\` - <@${xx.id}> \n`;
    });

    if(eyadtxt == "") {
        eyadtxt = "لا يوجد احد في هذه الرتبة";
    } else {
        eyadtxt = eyadtxt;
    };

    eyadcodes.channel.send({embed: new Discord.RichEmbed()
    .setThumbnail(eyadcodes.author.avatarURL)
    .setAuthor(eyadcodes.guild.name , eyadcodes.guild.iconURL)
            .setDescription(`**Users in this role ${role} \n\n${eyadtxt}**`)
            .setFooter(eyadcodes.guild.name)
            .setColor('RANDOM')
            .setTimestamp()
    })
}
})
