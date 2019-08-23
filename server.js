const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('./passport/passport')
const secret = require('./secret')

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: secret.secret,
    name: 'cookiename'
  }))

app.use(passport.initialize())
app.use(passport.session())


app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server Listening On Port : http://localhost:" + PORT)
})