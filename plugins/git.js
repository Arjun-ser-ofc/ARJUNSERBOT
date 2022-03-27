let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝐆𝐈𝐓」
     https://github.com/Arjun-ser-ofc/ARJUNSERBOT 🙂  
𝐅𝛐ર 𝛨𝜀𝐿𝛲 https://wa.me/916238440754 ❤
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/9b98520c4158403cda881.jpg")).buffer(), haruno, '© ᴀʀᴊᴜɴsᴇʀ', 'ᴍᴇɴᴜ', '.menu', 'ᴏᴡɴᴇʀ', '.owner', m)
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
