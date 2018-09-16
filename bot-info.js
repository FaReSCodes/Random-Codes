  client.on('message', message => {
             if(message.content.startsWith(`${prefix}about`)){
                 if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                 message.channel.send(`** # Platinum Bot : نحن نقدم لكم بلاتنيوم بوت الذي يتوفر فيه ...
            ``  خدمات اسرع``

            ``  اوامر اكثر ``

            ``  سهولة استعمال ``

            `` امان لسيرفرك ``

              وانتضرونا بما هو احسن ... **    `)
             }
         });
  
