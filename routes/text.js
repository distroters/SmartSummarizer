const route = require('express').Router()
const express = require('express')
const tr = require('textrank')
const tesseract = require('node-tesseract-ocr')
const path = require('path')
const rimraf = require('rimraf')


let filePath = path.join(__dirname, "../public/textPage")
route.use('/', express.static(filePath))




let dataToBeSent = ""

function returnText(articleOfText) {
  return new Promise((resolve, reject) => {

    articleOfText = articleOfText.replace(/(\r\n|\n|\r)/gm, " ");
    var textRank = new tr.TextRank(articleOfText)
    dataToBeSent = textRank.summarizedArticle
    resolve(textRank.summarizedArticle)

  })

}

route.post('/', (req, res) => {

  let articleOfText = req.body.text
  returnText(articleOfText)
    .then((summary) => {
      dataToBeSent = summary
      res.send(summary)
    })

})



exports = module.exports = route