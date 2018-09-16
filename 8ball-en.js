  Client.on('message', async FARES => {
if(FARES.author.bot) return;
if (FARES.channel.guild) {
if (FARES.content.startsWith(prefix + `8ball`)) {
   let argsFARES = FARES.content.split(' ').slice(1).join(' ');
   let authorFARES = FARES.author.username;

   let FARES = [
"● It is certain.",
"● It is decidedly so.",
"● Without a doubt.",
"● Yes - definitely.",
"● You may rely on it.",
"● As I see it, yes.",
"● Most likely.",
"● Outlook good.",
"● Yes.",
"● Signs point to yes.",
       // إجابات غير ملتزمة
"● Reply hazy, try again",
"● Ask again later.",
"● Better not tell you now.",
"● Cannot predict now.",
"● Concentrate and ask again.",


       // إجابات سلبية
"● Don't count on it.",
"● My reply is no.",
"● My sources say no",
"● Outlook not so good.",
"● Very doubtful.",
   ]
   let randomFARES = Math.floor(Math.random() * FARES.length);

   if (!argsFARES) return ReBeLL.reply("ask him something.");
   FARES.channel.send(`\:8ball\: | ${FARES[randomFARES]} **${authorFARES}**`);
}}});
  
