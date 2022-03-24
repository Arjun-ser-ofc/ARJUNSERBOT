let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/9b98520c4158403cda881.jpg")).buffer(), ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ ғᴏʀ ʜᴇʟᴘ wa.me/916238440754, '  ᴀʀᴊᴜɴsᴇʀ ʙᴏᴛ ʙʏ ᴀʀᴊᴜɴʟᴀʟ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/Arjun-ser-ofc/ARJUNSERBOT \n\n\ © ī.am ꪶᴀʀᴊᴜɴsᴇʀꫂ⁩⁴⁰⁴⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
