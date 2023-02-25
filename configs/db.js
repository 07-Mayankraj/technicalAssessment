require('dotenv').config();
const mongoose = require('mongoose');


const dbconnect = mongoose.connect(process.env.mongoURL)

module.exports = {dbconnect}