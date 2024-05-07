const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const routes = require("./routes");
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
dotenv.config();

app.get('/', (req, res) => {
    return res.send('Hello');
});


mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});



app.listen(port, () => {
    console.log("Server is running on port: " + port);
});

app.use(bodyParser.json())
routes(app);
