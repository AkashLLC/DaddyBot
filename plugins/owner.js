 
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "<a href="https://ibb.co/k0BS6R4"><img src="https://i.ibb.co/P4j6z7c/Daddy-Botinc.jpg" alt="Daddy-Botinc" border="0"></a>jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creator Akash*



*owner number  wa.me/12028863660?text=Hi*


*Follow us on Instagram    https://www.instagram.com/akash__inc/*


`}) 

}));
