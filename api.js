const expressjwt = require("express-jwt");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.API_PORT || 5555;

const jwtCheck = expressjwt({
    secret: "mykey"
});

app.use(bodyParser.json());

app.get("/asset", (req, res) => {
    res.status(200).send("Everybody can see this");
});

app.get("/asset/secret", jwtCheck, (req, res) => {
    console.log(jwtCheck)
    res.status(200).send("Only logged in people can see me");
    
});
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});