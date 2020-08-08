# Colored Image  
Colored Image is a simple server that generates single colored placeholder images to help speed up frontend development. All images are generated in memory in nodejs.  

## DEMO
### The following images are retrieved via the api
`Note`: The images below are automatically been cached by github and will not update in realtime. However, you can play with the api yourself to get a feel of how it works. 

#### api.pbias.org/hex/{size}/{color}  
| Image | Color | URL | Size (width,height) |  
| ----- | ----- | --- | ---- |  
| ![#001f3f](http://api.pbias.org/hex/30x30/001f3f) | #001F3F | http://api.pbias.org/hex/30x30/001f3f | 30x30 |  
| ![#FF851B](http://api.pbias.org/hex/30x30/FF851B) | #FF851B | http://api.pbias.org/hex/30x30/FF851B | 30x30 |   
| ![#F012BE](http://api.pbias.org/hex/30x30/F012BE) | #F012BE | http://api.pbias.org/hex/30x30/F012BE | 30x30 |   
| ![random](http://api.pbias.org/hex/30x30/random)  | random | http://api.pbias.org/hex/30x30/random | 30x30 |   
| ![random](http://api.pbias.org/hex/70x30/random)  | random | http://api.pbias.org/hex/70x30/random | 70x30 |   
| ![random](http://api.pbias.org/hex/0x70/random)  | random | http://api.pbias.org/hex/30x70/random | 30x70 |  


#### api.pbias.org/rgb/{size}/{color}  
| Image | Color | URL | Size (width, height) |  
| ----- | ----- | --- | ---- |  
| ![rgb(235, 64, 52)](http://api.pbias.org/rgb/30x30/235-64-52) | rgb(235, 64, 52) | http://api.pbias.org/rgb/30x30/235-64-52 | 30x30 |  
| ![rgb(252-186-3)](http://api.pbias.org/rgb/30x30/252-186-3) | rgb(252, 186, 3) | http://api.pbias.org/rgb/30x30/252-186-3 | 30x30 |  
| ![rgb(50, 168, 82)](http://api.pbias.org/rgb/30x30/50-168-82) | rgb(50, 168, 82) | http://api.pbias.org/rgb/30x30/50-168-82 | 30x30 |  
| ![random](http://api.pbias.org/rgb/30x30/random) | random | http://api.pbias.org/rgb/30x30/random | 30x30 |  
| ![random](http://api.pbias.org/rgb/70x30/random) | random | http://api.pbias.org/rgb/30x30/random | 70x30 |  
| ![random](http://api.pbias.org/rgb/30x70/random) | random | http://api.pbias.org/rgb/30x30/random | 30x70 |  

### Size Constaints
`Random Color with size 200x600`  
`URL: http://api.pbias.org/hex/200x600/random`  
![Random Color 200x600](http://api.pbias.org/hex/200x600/random)  

`TEAL: #7FDBFF | Size 500x250`  
`URL: http://api.pbias.org/hex/500x250/7FDBFF`  
![#7FDBFF](http://api.pbias.org/hex/500x200/7FDBFF)  

# Api-Endpoints  
[api.pbias.org/hex](http://api.pbias.org/hex/)  
[api.pbias.org/rgb](http://api.pbias.org/rgb/)  



## How to use the API
`Remeber`
- Do not add `#` in your url.  
- If no size is passed in the url, image size will default to 150x150  


##### Getting Image with default size
Get a hex colored imaged: `http://api.pbias.org/hex/{hex}`  
Example: `http://api.pbias.org/hex/7FDBFF`  


##### Getting Image with a custom size
Get a hex colored imaged with size 400x650: `http://api.pbias.org/hex/{size}/{hex}`  
Example: `http://api.pbias.org/hex/400x650/7FDBFF`  


## Installation Instructions  
- Clone the repository: `git clone https://github.com/M-Faheem-Khan/Colored-Images`  
- Change Directory to Colored-Images: `cd Colored-Images`  
- Install Dependencies: `npm install`   
- Start Server: `npm run start`  

License: MIT  
