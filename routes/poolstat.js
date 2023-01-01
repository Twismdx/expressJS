const poolstat = require("express").Router();
const CryptoJS = require("crypto-js");
require('dotenv').config();

poolstat.get("/poolstat", async function (req, res) {
    const { privateKey, publicKey } = req.query;
    if (privateKey, publicKey) {
        res.status(200).send({
            privateKey: process.env.PRIVATE_KEY,
            publicKey: process.env.PUBLIC_KEY,
        });
    } else {
        res.send("No key!");
    }
});

poolstat.post("/poolstat", async function (req, res) {
    const { urlparams } = req.body;
    const hash = CryptoJS.HmacSHA256(urlparams, process.env.PRIVATE_KEY).toString(CryptoJS.enc.Hex)
    if (hash) {
        res.status(200).send({
            Hash: hash,
        });
    } else {
        res.send("hashing failed");
    }
});

module.exports = poolstat;