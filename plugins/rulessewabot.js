let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `╭═════〘 𝗥 𝗨 𝗟 𝗘 𝗦 𝗦 𝗘 𝗪 𝗔 𝗕 𝗢 𝗧 〙═══
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙎𝙥𝙖𝙢 𝘽𝙤𝙩 𝙠𝙖𝙧𝙚𝙣𝙖 𝘽𝙤𝙩 𝙞𝙣𝙞 𝙨𝙪𝙙𝙖𝙝 𝙢𝙚𝙢𝙞𝙡𝙞𝙠𝙞 𝙊𝙩𝙤𝙢𝙖𝙩𝙞𝙨 𝘽𝙡𝙤𝙠𝙞𝙧 𝘽𝙖𝙜𝙞 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 𝘽𝙤𝙩 𝙮𝙖𝙣𝙜 𝙎𝙥𝙖𝙢
⬡ 𝘽𝙤𝙩 𝙖𝙠𝙖𝙣 𝙢𝙖𝙨𝙪𝙠 𝙜𝙧𝙖𝙩𝙞𝙨 𝙠𝙚 𝙜𝙧𝙤𝙪𝙥 𝙮𝙜 𝙙𝙞𝙢𝙞𝙣𝙩𝙖 𝙟𝙞𝙠𝙖 𝙢𝙚𝙢𝙗𝙚𝙧𝙣𝙮𝙖 𝙙𝙞 𝙖𝙩𝙖𝙨 20 orang

Pls gw gada Konsep buat Rulesnya:v,tpi itu aja dlu ye
╰═══════════════════
╭═════════════════
║╭─────❉ 〔 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧 〕 ❉─────
║│➥ *name:* ElainaXyz
║│➥ *HomePage:* github.com/LasDrak
║│➥ *Issue:* https://github.com/LasDrak
║│➥ *Total user:* *${Object.keys(global.db.data.users).length}* Pengguna
║╰──────────────────
║╭─────❉〘 𝘿𝙊𝙉𝘼𝙎𝙄 〙❉───── 
║│➥ Pulsa : 6285756507257
║│➥ Gopay : 6281244653014
║╰──────────────────
║╭─────❉〘 𝗥𝗘𝗤𝗨𝗘𝗦𝗧 〙❉─────
║│➥https://github.com/LasDrak
║╰──────────────────
╠════════════════════════
║╭────❉ 「 𝙎𝙊𝘾𝙄𝘼𝙇 𝙈𝙀𝘿𝙄𝘼 」 ❉─────
║│ ❍ *𝗢𝗪𝗡𝗘𝗥*          :
║│ wa.me/6285823467060
║│ ❍ *𝗬𝗢𝗨𝗧𝗨𝗕𝗘*               :
║│ Ga punya
║│ ❍ *𝗧𝗜𝗞𝗧𝗢𝗞*                   :
║│ F
║╰──────────────────
╠════════════════════════
║╭─────────────────
║│ ©𝗕𝗮𝘀𝗲𝗡𝗲𝘄 ElainaXyz
║│ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝙗𝙮 Adryan👑
║╰──────────────────
╠════════════════════════
║╭─────────────────
║│ ©𝟮𝟬𝟮𝟮 𝘄𝗮𝗯𝗼𝘁-𝗮𝗾
║│ Script Original By : Gatau
║╰──────────────────
╰═════〘 ElainaXyz *_?_*〙 ═`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Group Bot', description: "Official Group Bot Lyn", rowId:".gcbot"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".tutorbot"},
        {title: 'Owner', description: "Owner/Creator Bot", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules2|rule2)$/i
handler.help = ['rules']
module.exports = handler
