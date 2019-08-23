const route = require('express').Router()
const path = require('path')
const express = require('express')
const fs = require('fs')
const fsExtra = require('fs-extra')
const tr = require('textrank')
const tesseract = require('node-tesseract-ocr')
const multer = require('multer')
const rimraf = require('rimraf')


let dataToBeSent = ""
let filePath = path.join(__dirname, "../public/uploadPage")
route.use('/', express.static(filePath))

const upload = multer({
    dest: path.join(__dirname, "/../temp")
})

function summarizeImage() {
    const config = {
        lang: 'eng',
        oem: 1,
        psm: 3
    }

    return new Promise((resolve, reject) => {

        tesseract
            .recognize(path.join(__dirname, "/../temp/image.png"), config)
            .then(text => {
                text = text.replace(/(\r\n|\n|\r)/gm, " ");
                var textRank = new tr.TextRank(text);
                resolve(textRank.summarizedArticle)
            })
            .catch(err => {
                console.log('error:', err)
            })
    })

}

route.post("/",
    upload.single("file"),
    (req, res) => {


        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, "../temp/image.png");

        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
            fs.rename(tempPath, targetPath, err => {
                if (err) return handleError(err, res);


                summarizeImage().then((text) => {
                        fs.writeFile(__dirname + '/File.txt', text, function (err) {
                            if (err) throw err

                        })


                        dataToBeSent = text
                        res
                            .status(200)
                            .contentType("text/plain")
                            .redirect('/imageSummary')



                    })
                    .catch((err) => {
                        console.log(err)
                    })
            });

        } else {
            fs.unlink(tempPath, err => {
                if (err) return handleError(err, res);

                res
                    .status(403)
                    .contentType("text/plain")
                    .end("Only .png files are allowed!");
            });
        }

    }
);





exports = module.exports = route
