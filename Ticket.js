editedcodes.on("message", (edited) => {
    
  if (edited.content === '-new') {
        const reason = edited.content.split(" ").slice(1).join(" ");
        if (!edited.guild.roles.exists("name", "فريق الدعم")) return edited.channel.send(`**يجب عمل رتبة بأسم \`فريق الدعم\`**`);
        if (edited.guild.channels.exists("name", "ticket-" + edited.author.id)) return edited.channel.send(`لديك تذكرة من الأسآس :joy:`);
        edited.guild.createChannel(`just-ticket`, "text").then(c => {
            let edited1 = edited.guild.roles.find("name", "فريق الدعم");
            let edited2 = edited.guild.roles.find("name", "@everyone");
            c.overwritePermissions(edited1, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(edited2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            edited.channel.send(`:white_check_mark: تـم فتح التذكرة , #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(` ${message.author.username}!`, `**مرحبآ    , لدنيا فريق المساعده ليساعدك في أقرب وقت . **`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }
    if (edited.content === '-close') {
        if (!edited.channel.name.startsWith(`ticket-`)) return edited.channel.send(`**لا تستطيع :x:**`);

        edited.channel.send(`**هل انت متأكد ؟ ** `)
            .then((m) => {
                edited.channel.awaitMessages(response => response.content === 'نعم', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        edited.channel.delete();
                    })
                    .catch(() => {
                        m.edit('وقت الأغلاق أنتهي , لن تمسح التذكرة .').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
        }

    });

editedcodes.login('Token || توكن بوتك .');
