let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/273f53682e219d4badd08.jpg")).buffer(), devil, 'ᴛʏᴘᴇ .? ᴏʀ .ʟɪsᴛᴛ ғᴏʀ ᴍᴀɪɴ ᴍᴇɴᴜ🧚‍♂️🚀 ᴀʀᴊᴜɴ sᴇʀ  ʙʏ ᴀʀᴊᴜɴ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ © ī.am ꪶᴀʀᴊᴜɴ sᴇʀꫂ⁩⁴⁰⁴⁩' , 'ᴍᴇɴᴜ', '.?', 'ᴏᴡɴᴇʀ', '.creator')
}
handler.tags = ['main']
handler.help = ['menu']
handler.command = /^(menu)$/i
module.exports = handler
