let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `β γ π―ππ΄πΊπͺγ

    π’ΰͺ°Υ΅ππππΰͺ°π§ββοΈ https://wa.me/916238440754?text=%F0%9D%9B%A8%F0%9D%9B%AA%20%F0%9D%9B%A2%E0%AA%B0%D5%B5%F0%9D%9B%96%F0%9D%9B%88%F0%9D%91%86%F0%9D%9C%80%E0%AA%B0%F0%9F%92%98
               http://Wa.me/3584460000602
                http://Wa.me/642777712025
BOT CODDED BY ArjunSerπ     https://Arjun-ser-ofc.github.io
    π§ββοΈ       
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/9309d42a1feea4063c849.jpg")).buffer(), haruno, 'Β© α΄Κα΄α΄Ι΄sα΄Κ', 'α΄α΄Ι΄α΄', '.menu', 'α΄α΄‘Ι΄α΄Κ', '.credit', m)
}
handler.tags = ['main']
handler.help = ['owner']
handler.command = /^(owner)$/i
module.exports = handler
