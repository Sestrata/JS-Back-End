const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/bookingunidb';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
