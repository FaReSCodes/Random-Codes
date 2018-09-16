client.on('message', OmarMessage => {
    var prefix = '!WoW!';
    var OmarNull = null;
    if(!OmarMessage.author.bot || OmarMessage.content.startsWith(prefix)) {
        if(OmarMessage.content.split(' ')[0] == `${prefix}Colse-Channels`) {
            if(OmarMessage.guild.member(OmarMessage.author).hasPermission('MANAGE_CHANNELS') && OmarMessage.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
                let OmarEveryOne = OmarMessage.guild.roles.filter(r => r.name == `@everyone`).first();
                let i = 0;
                for (i; i <= OmarMessage.guild.channels.size; i++) {
                    let channel = OmarMessage.guild.channels.array()[i];
                    if(i == OmarMessage.guild.channels.size) {
                        OmarMessage.channel.send(`${OmarMessage.author}, تم اغلاق جميع الرومات`);
                    } else {
                        if(channel.type == 'text') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:false});
                        } else if(channel.type == 'voice') {
                            channel.overwritePermissions(OmarEveryOne, {CONNECT:false});
                        } else if(channel.type == 'category') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:false,CONNECT:false});
                        } else OmarNull;
                    };
                };
            };
        };
        if(OmarMessage.content.split(' ')[0] == `${prefix}Open-Channels`) {
            if(OmarMessage.guild.member(OmarMessage.author).hasPermission('MANAGE_CHANNELS') && OmarMessage.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
                let OmarEveryOne = OmarMessage.guild.roles.filter(r => r.name == `@everyone`).first();
                let i = 0;
                for (i; i <= OmarMessage.guild.channels.size; i++) {
                    let channel = OmarMessage.guild.channels.array()[i];
                    if(i == OmarMessage.guild.channels.size) {
                        OmarMessage.channel.send(`${OmarMessage.author}, تم فتح جميع الرومات`);
                    } else {
                        if(channel.type == 'text') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:true});
                        } else if(channel.type == 'voice') {
                            channel.overwritePermissions(OmarEveryOne, {CONNECT:true});
                        } else if(channel.type == 'category') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:true,CONNECT:true});
                        } else OmarNull;
                    };
                };
            };
        };
    };
});
