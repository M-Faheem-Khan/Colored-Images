// importing common functions
const GenerateImage = require("../../lib/common");

/**
 * defaultRouteHandler
 * Route: /
 * Method: GET
 * Description: Returns a description about the route
 */
const defaultRouteHandler = (request, response) => {
    console.log(request.originalUrl)
    response.status(200).send("HEX default route")
}

/**
 * ProcessHexColor
 * Route: /hex/:color
 * Method: GET
 * Description: Returns an image with the given color(hex value)
 */
const ProcessHexColor = (request, response) => {
    const color = "#" + request.params.color; // getting color
    var imageData = GenerateImage(color);
    // removing the image identifier to create buffer
    imageData = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    var image = Buffer.from(imageData, 'base64'); // creating base64 image buffer

    // Creating Response
    response.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': image.length
    });
    // Sending the Actual Image
    response.end(image);
}

// Function Exports
exports.defaultRouteHandler = defaultRouteHandler;
exports.ProcessHexColor = ProcessHexColor;