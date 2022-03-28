let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝚯𝐖𝚴𝚺𝚪」
    𝛢રյ𝛖𝛈𝑆𝜀ર🧚‍♂️ https://wa.me/916238440754?text=%F0%9D%9B%A8%F0%9D%9B%AA%20%F0%9D%9B%A2%E0%AA%B0%D5%B5%F0%9D%9B%96%F0%9D%9B%88%F0%9D%91%86%F0%9D%9C%80%E0%AA%B0%F0%9F%92%98
                  http://Wa.me/3584460000602
    𝛬𝐣𐌼𝛢𝐿🧚‍♂️       https://wa.me/919744196187?text=%F0%9D%9A%AE%F0%9D%9A%BC%F0%9D%9A%BC%20%F0%9D%9A%AB%F0%9D%90%89%F0%9D%9A%B3%F0%9D%9A%AB%F0%9D%90%8B%20%F0%9D%90%92%F0%9D%9A%BA%F0%9D%9A%AA%20%F0%9D%9A%A9%F0%9D%9A%B0%F0%9D%90%86%20%F0%9D%90%85%F0%9D%9A%AB%F0%9D%9A%B4%F0%9F%92%98%E2%9D%A4
`.trim()
    await conn.send2ButtonImg(m.chat, await (await fetch("https://telegra.ph/file/9309d42a1feea4063c849.jpg")).buffer(), haruno, '© ᴀʀᴊᴜɴsᴇʀ', 'ᴍᴇɴᴜ', '.menu', 'ᴏᴡɴᴇʀ', '.credit', m)
}
handler.tags = ['main']
handler.help = ['owner']
handler.command = /^(owner)$/i
module.exports = handler
