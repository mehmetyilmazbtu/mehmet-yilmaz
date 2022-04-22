const port= process.env.PORT || 3000

const test_text = require('./utils/text')
const geocode = require('./utils/geocode')
const test_weather = require('./utils/weather')
const test_html = require('index.html')

const address = process.argv[2]
if (!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
        
    
        test_weather(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })    
}