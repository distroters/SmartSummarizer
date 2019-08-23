const route = require('express').Router()

route.get('/', (req, res) => {
    req.logout();
    res.redirect('/')

})


exports = module.exports = route 