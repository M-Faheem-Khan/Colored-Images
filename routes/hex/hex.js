const express = require("express");
const HexRouter = express.Router(); // importing express router
const { defaultRouteHandler, ProcessHexColor, RandomHexColor } = require("./hex.handler");

/**
 * Route: /hex/
 * Method: GET
 * Description: Returns how to use the api
 */
HexRouter.get("/", defaultRouteHandler);


/**
 * Route: /hex/random
 * Method: GET
 * Description: Returns a randomly colored image
 */
HexRouter.get("/:size?/random", RandomHexColor)


/**
 * Route: /hex/:size?/:color/
 * Method: GET
 * Description: Returns a default 150x150px jpeg image
 */
HexRouter.get("/:size?/:color", ProcessHexColor)



// Exporting Hex Router
module.exports = HexRouter;