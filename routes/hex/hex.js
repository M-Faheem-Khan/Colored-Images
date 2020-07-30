const express = require("express");
const HexRouter = express.Router(); // importing express router
const { defaultRouteHandler, ProcessHexColor } = require("./hex.handler");

/**
 * Route: /hex/
 * Method: GET
 * Description: Returns how to use the api
 */
HexRouter.get("/", defaultRouteHandler);



/**
 * Route: /hex/:color/:?size
 * Method: GET
 * Description: Returns a default 150x150px jpeg image
 */
HexRouter.get("/:color", ProcessHexColor)


// Exporting Hex Router
module.exports = HexRouter;