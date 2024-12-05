require('dotenv').config({
    path: './src/config/.env'
});
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URL)
        .then((data) => {
            console.log(
                `Database is connected successfully: ${data.connection.host}`
            );
        })
        .catch((err) => {
            console.error(`Error connecting to the database: ${err.message}`);
        });
};

module.exports = connectDatabase;
