const express = require("express"); // express library
const app = express(); // init express
const PORT = 8000; // server port
const cors = require("cors"); // CORS

// Todo: setup router for default '/' route

// Importing Hex router
const HexRouter = require("./routes/hex/hex")


// CORS Settings
const corsOptions = {
    "origin": "*",
    "optionsSuccessStatus": 200
}
// Setting CORS
app.use(cors(corsOptions));


// Setting routers
app.use("/hex", HexRouter);

// Starting Express server on PORT
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})