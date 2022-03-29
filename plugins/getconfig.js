let fs = require('fs')
let handler  = async (m, { conn, text }) => {
m.reply('Tunggu Sebentar, Proses Getting File database.json')
let db = fs.readFileSync('./config.js')
conn.sendFile(m.chat, db, 'config.js', m)
}
handler.help = ['getcf','getconfigjs'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(cf|getcf)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
