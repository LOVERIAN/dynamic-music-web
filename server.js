const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    var g = 854
    var u = 652154
    var s = 0
    var p = 7

    res.render('pages/index.ejs', {
        guilds: g, users:u, shards:s, premium:p
    })
})

app.get('/patreon', (re, res) => {
    res.redirect('https://patreon.com/LOVERIAN')
})

app.get('/invite', (re, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=665628292958781460&permissions=37080128&scope=bot')
})

app.get('/premium', (re, res) => {
    res.render('pages/premium')
})

app.get('/commands', (re, res) => {
    res.render('pages/commands')
})

app.get('/faq', (re, res) => {
    res.render('pages/faq')
})


app.get('/discord', (re, res) => {
    res.redirect('http://discord.gg/dynamogaming')
})

app.get('/docs', (re, res) => {
    res.sendfile('public/docs.html')
})

app.get('/terms', (re, res) => {
    res.sendfile('public/terms.html')
})

app.get('/privacy', (re, res) => {
    res.sendfile('public/privacypolicy.html')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})