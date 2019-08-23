const route = require('express').Router()
const path = require('path')
const express = require('express')

let filePath = path.join(__dirname, '../public/imageSummary')
route.use('/', express.static(filePath))


exports = module.exports = route