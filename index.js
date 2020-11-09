const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendfile('public/index.html')
})

app.get('/patreon', (req, res) => {
    res.redirect('https://patreon.com/LOVERIAN')
})

app.get('/invite', (re, res) => {
    res.redirect(https://discord.com/api/oauth2/authorize?client_id=665628292958781460&permissions=37080128&scope=bot'')
})

app.get('/premium', (re, res) => {
    res.redirect('https://patreon.com/LOVERIAN')
})

app.get('/commands', (re, res) => {
    res.redirect('http://dynamicmusic.xyz/#tta')
})

app.get('/faq', (re, res) => {
    res.redirect('http://dynamicmusic.xyz//#faqb')
})

app.get('/nowplaying', (re, res) => {
    res.redirect('http://dynamicmusic.xyz/#cs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})