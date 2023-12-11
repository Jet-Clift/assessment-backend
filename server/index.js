const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, flipCoin, rollDice, catPic } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/coin", flipCoin);
app.get("/api/dice", rollDice);
app.get("/api/cat", catPic)

app.listen(4000, () => console.log("Server running on 4000"));
