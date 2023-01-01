const app = require('./app');
const routes = require("./routes/router");

app.use("/", routes);

app.listen(process.env.PORT,function () {
    console.log("Server started. Go to http://localhost:3000/");
});