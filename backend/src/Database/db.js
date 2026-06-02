const mongoose = require('mongoose');

async function ConnectDB() {
    await mongoose.connect(process.env.database_key);
    console.log("connected to DB");
}
module.exports = ConnectDB;