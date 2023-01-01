const routes = require("express").Router();

const poolstat = require("./poolstat");

routes.get("/", async function (req, res) {
    res.send('Reached Home!');
});

routes.use("/", poolstat);

module.exports = routes;