const app = require("..");
const route = require("../routes/poolstat");

app.use("/api/", route);

module.exports = app;