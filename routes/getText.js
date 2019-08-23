const fs = require('fs')
const rimraf = require('rimraf')
const fsExtra = require('fs-extra')
const route = require('express').Router()

let dataToBeSent = ""
route.get('/', (req, res) => {
    fs.readFile(__dirname + '/File.txt', (err, data) => {
        if (data !== undefined) {
            dataToBeSent = data.toString()
            fs.unlink(__dirname + '/File.txt', function (error) {
                if (error) {
                    throw error;
                }
                res.send(dataToBeSent)

            });

        }

    })
})


exports = module.exports = route
