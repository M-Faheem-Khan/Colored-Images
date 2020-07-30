# Colored Image  
Colored Image is a simple server that generates single colored placeholder images to help speed up frontend development. All images are generated in memory in nodejs.  

# DEMO
[api.pbias.org/hex](http://api.pbias.org/hex/)

### The following images are retrieved via the api
`Note`: The images below are automatically been cached by github and will not update in realtime. However, you can play with the api yourself to get a feel of how it works. Docs comming soon.  

`NAVY: #001f3f`  
`URL: http://api.pbias.org/hex/001f3f`  
![#001f3f](http://api.pbias.org/hex/001f3f)  

`ORANGE: #FF851B`  
`URL: http://api.pbias.org/hex/FF851B`  
![#FF851B](http://api.pbias.org/hex/FF851B)  


`FUCHSIA: #F012BE`  
`URL: http://api.pbias.org/hex/F012BE`  
![#F012BE](http://api.pbias.org/hex/F012BE)  


`Random Color`  
`URL: http://api.pbias.org/hex/random`  
![Random Color](http://api.pbias.org/hex/random)  

### Size Constaints
`Random Color with size 200x600`  
`URL: http://api.pbias.org/hex/200x600/random`  
![Random Color 200x600](http://api.pbias.org/hex/200x600/random)  

`TEAL: #7FDBFF | Size 500x250`  
`URL: http://api.pbias.org/hex/500x250/7FDBFF`  
![#7FDBFF](http://api.pbias.org/hex/500x200/7FDBFF)

## API
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
