const express = require("express");
const cors = require("cors");

const app = express();
const Routes = require("./routes/index");

const connectMongo = require("./config/mongo.js");
connectMongo();

const port = 5000;

app.use(cors({origin:"*"}))
app.use(express.json({ extended: false }));

app.get("/test", (req, res) => {
    return res.send({ success: true, data: "Test Route" });
});

app.use("/api", Routes);


console.log("hello");

app.listen(port, () => console.log(`Listening on port ${port}`));