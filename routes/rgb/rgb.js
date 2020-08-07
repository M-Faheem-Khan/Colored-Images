const express = require("express");
const RGBRouter = express.Router(); // importing express router
const { defaultRouteHandler, ProcessRGBColor, RandomRGBColor } = require("./rgb.handler");

/**
 * Route: /hex/
 * Method: GET
 * Description: Returns how to use the api
 */
RGBRouter.get("/", defaultRouteHandler);


/**
 * Route: /hex/random
 * Method: GET
 * Description: Returns a randomly colored image
 */
RGBRouter.get("/:size?/random", RandomRGBColor)


/**
 * Route: /hex/:size?/:color/
 * Method: GET
 * Description: Returns a default 150x150px jpeg image
 */
RGBRouter.get("/:size?/:color", ProcessRGBColor)



// Exporting Hex Router
module.exports = RGBRouter;