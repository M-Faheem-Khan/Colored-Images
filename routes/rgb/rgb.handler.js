// importing common functions
const { GenerateImage, GetRandomRGBColor, ParseInteger } = require("../../lib/common");


/**
 * defaultRouteHandler
 * Route: /
 * Method: GET
 * Description: Returns a description about the route
 */
const defaultRouteHandler = (request, response) => {
    return response.status(200).send("RGB default route")
}



/**
 * ProcessRGBColor
 * Route: /
 * Method: GET
 * Description: Returns the rgb colored images
 */
const ProcessRGBColor = (request, response) => {
    var color = request.params.color;
    var r, g, b;
    var size = request.params.size; // getting size
    var imageData; // holds the image data base64 encoded

    if (!size || size.length < 3) {
        size = "150x150"
    }

    if (!color || color.length < 5) {
        return response.status(400).send({
            "Error": "Invalid Color",
            "message": "format: rgb/{size}/{r-g-b}"
        });
    } else {
        // getting rgb values
        color = color.split('-');
        // assigning rgb values
        r = ParseInteger(color[0]);
        g = ParseInteger(color[1]);
        b = ParseInteger(color[2]);
        // If r,g,b are not valid integers
        if (r < 0 || g < 0 || b < 0) {
            return response.status(400).send({
                "Error": "Invalid Color",
                "message": "format: rgb/{size}/{r-g-b}"
            });
        } else if (r > 255 || g > 255 || b > 255) { // if r,g,b is more than 255
            return response.status(400).send({
                "Error": "Color out of Range",
                "message": "r,g,b value must be between 0 and 255"
            });
        }

        var rgb = `rgb(${r}, ${g}, ${b})`; // rbg color formatted string for fillStyle


        size = size.split("x"); // splitting the size WidthxHeight
        var width = ParseInteger(size[0]);
        var height = ParseInteger(size[1]);

        if (width < 0 || height < 0) {
            // setting default value so we don't attempt to create an image of negative height / wdith
            height = width = 150
        }

        imageData = GenerateImage(rgb, height, width); // generating image

        // removing the image identifier to create buffer
        imageData = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''); // removing image header
        var image = Buffer.from(imageData, 'base64'); // creating base64 image buffer

        // Creating Response
        response.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': image.length
        });

        // Sending the Image
        return response.end(image);

    }

}



/**
 * RandomRGBColor
 * Route: /
 * Method: GET
 * Description: Returns a random RGB colored images
 */
const RandomRGBColor = (request, response) => {
    var color = GetRandomRGBColor(); // generating random color
    var size = request.params.size; // getting size
    var imageData; // holds the image data base64 encoded

    // Checking if size is valid
    if (!size || size.length < 3) {
        imageData = GenerateImage(color);
    } else {
        size = size.split("x"); // splitting the size WidthxHeight
        // Getting Size (Height, Width)
        var width = parseInt(size[0]);
        var height = parseInt(size[1]);
        imageData = GenerateImage(color, height, width); // generating image
    }

    // removing the image identifier to create buffer
    imageData = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''); // removing image header
    var image = Buffer.from(imageData, 'base64'); // creating base64 image buffer

    // Creating Response
    response.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': image.length
    });

    // Sending the Image
    return response.end(image);
}

// Function Exports
exports.defaultRouteHandler = defaultRouteHandler;
exports.ProcessRGBColor = ProcessRGBColor;
exports.RandomRGBColor = RandomRGBColor;