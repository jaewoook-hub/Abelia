const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/AmeliaSite';
const db = mongoose.connect(mongoUri);
module.exports = db;