// importing common functions
const { GenerateImage, GetRandomHexColor } = require("../../lib/common");


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
 * Route: /hex/:size/:color
 * Method: GET
 * Description: Returns an image with the given color(hex value)
 */
const ProcessHexColor = (request, response) => {
    const color = "#" + request.params.color; // getting color
    var size = request.params.size; // getting size

    var imageData;

    if (!color) {
        response.status(400).send({
            "error": "Invalid Color",
            "message": "No Color was sent, '/hex/size[optional]/hex{no # in front}",
            "example": "/hex/1000x1200/EF12EF"
        });
    }

    // Checking if size is valid
    if (!size || size.length < 3) {
        imageData = GenerateImage(color);
    } else {
        size = size.split("x"); // splitting the size WidthxHeight
        var width = parseInt(size[0]);
        var height = parseInt(size[1]);
        imageData = GenerateImage(color, height, width);
    }


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


/**
 * RandomHexColor
 * Description: Returns Random Hex Color Image
 */
const RandomHexColor = (request, response) => {
    const color = GetRandomHexColor(); // generating random color
    var size = request.params.size; // getting size
    var imageData; // holds the image data base64 encoded

    console.log(`Color: ${color}`);
    
    // Checking if size is valid
    if (!size || size.length < 3) {
        imageData = GenerateImage(color);
    } else {
        size = size.split("x"); // splitting the size WidthxHeight
        var width = parseInt(size[0]);
        var height = parseInt(size[1]);
        imageData = GenerateImage(color, height, width);
    }

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
exports.RandomHexColor = RandomHexColor;