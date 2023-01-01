const express = require("express");
import { req, res } from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
const pubKey = require("./api/pubkey");
const prvKey = require("./api/prvkey");

app.get('/api/pubkey', (req, res) => {
    const { publicKey } = 'TUroCx2IxK7p8fZLIK6cS6O~9xritQk~';
    res.json({ publicKey });
});

app.get('/api/prvkey', (req, res) => {
    const { privateKey } = 'Y6tS35_9cysvUkpxXEYD0f2L8qiHZidj';
    res.json({ privateKey });
});

app.use(express.json({ extended: false }));

app.use("/api/product", product);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;