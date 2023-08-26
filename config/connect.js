const { connect, connection } = require('mongoose');

connect('mongodb+srv://admin:root@cluster0.5gxmekr.mongodb.net/socialNetwork_DB');

module.exports = connection; 