const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const Delevery = require("./models/adressSchema")
app.use(express.json());
app.use(cors())


require("dotenv/config")


const PORT = process.env.PORT || 7000;
//posting the delevery address

app.post("/address", async (req, res) => {
    const address = req.body;
    const newAddress = new Delevery(address);
    await newAddress.save();
    res.json(address)

})
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((data) =>
        app.listen(process.env.PORT, () => {
            console.log(`my server is starting at ${PORT}`)
        })
    )
    .catch((Error) => {
        console.log("DB_connection failed", Error)
    })