// Description: This file contains common functions used through out the server

const { createCanvas, Image } = require("canvas");

/**
 * GenerateImage
 * Description: Returns an image the given the size(height, width) and color
 * @param {string} color 
 * @param {number} height 
 * @param {number} width 
 */
const GenerateImage = (color, height = 150, width = 150) => {
    // If no color is sent
    if (!color) {
        const errorResponse = {
            "error": "Invalid Color",
            "message": "No Color was sent!!",
            "body": {
                "color": color,
                "size": {
                    "height": height,
                    "width": width
                }
            }
        };
        return errorResponse; // sending error response
    }

    // If invalid height or width is sent
    if (height < 0 || width < 0) {
        const errorResponse = {
            "error": "Invalid Size",
            "message": "Height or Width is less than or equal to 0px",
            "body": {
                "color": color,
                "size": {
                    "height": height,
                    "width": width
                }
            }
        };
        return errorResponse; // sending error response
    }


    // Creating Image of the given image / size
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.fillStyle = color; // setting the fill color
    context.fillRect(0, 0, width, height); // drawing the color on the canvas
    return canvas.toDataURL(); // returning base64 encoded image data
}


/**
 * GetRandomHexColor
 * Description: Returns random hex color
 */
const GetRandomHexColor = () => {
    var color = "#";
    const charSet = "0123456789ABCDEF".split(""); // lazy way of generating array of characters

    // generating random hex value
    for (var i = 0; i < 6; i++) {
        color += charSet[Math.floor(Math.random() * Math.floor(max))];
    }

    return color; // returning random hex color value
}


// Function Exports
exports.GenerateImage = GenerateImage;
exports.GetRandomHexColor = GetRandomHexColor; 