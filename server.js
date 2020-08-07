const express = require("express"); // express library
const app = express(); // init express
const PORT = 8000; // server port
const cors = require("cors"); // CORS

// Todo: setup router for default '/' route

// Importing Hex & RGB routers
const HexRouter = require("./routes/hex/hex");
const RGBRouter = require("./routes/rgb/rgb");


// CORS Settings
const corsOptions = {
    "origin": "*",
    "optionsSuccessStatus": 200
}
// Setting CORS
app.use(cors(corsOptions));


// Setting routers
app.use("/hex", HexRouter);
app.use("/rgb", RGBRouter);

// Starting Express server on PORT
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})