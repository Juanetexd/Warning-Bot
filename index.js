const Discord = require('discord.js');
const bot = new Discord.Client();

const token = ' '; //no i'm not making it public

const CAMBIANDO_DE_TEMA = 'bueno pero cambiando de tema, cuantos grados bajo cero hicieron en tu ciudad?' 

const PREFIX = 'w#';

//aca empiezan los comandos jejox

bot.on('ready', () =>{
    console.log('hola xd');
})

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong');
            break;
        case 'osu':
            message.channel.send('https://osu.ppy.sh/users/5040981/taiko');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send("que te importa amigo ");        
            }else{
                message.channel.send('ese comando no existe :v derecho podria hacerlo ' + "<:rescatatEH:733943887776710767>");
                message.channel.send(CAMBIANDO_DE_TEMA);
            }
            break;
        case 'tema':
                let saymsg = message.content
                message.channel.send(saymsg.replace("w#tema","bueno cambiando de tema,"))
            break;
    }
})

bot.login(token);
