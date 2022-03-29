let handler = async (m, { usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let time1 = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let time2 = require('moment-timezone').tz('Asia/Makassar').format('HH:mm:ss')
let time3 = require('moment-timezone').tz('Asia/Jayapura').format('HH:mm:ss')
let runnya = `
*───「 RUNTIME BOT💌 」───*

👾Runtime : ${uptime}

*───「 INDONESIA TIME 」───*

Time : ${time1} WIB
Time : ${time2} WITA
Time : ${time3} WIT
`
conn.sendButton(m.chat, runnya, watermark, 'Menu', '.menu', m) 
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
