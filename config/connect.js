const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5gxmekr.mongodb.net/socialNetwork_DB`);

module.exports = connection; 