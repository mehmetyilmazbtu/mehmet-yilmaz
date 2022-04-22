const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=68634d13645c81b06ed412caeb1d0c7a&query=Bursa' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json:true}, (error, response) => {
       
        if (error) {
           
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            
            callback('Unable to find location', undefined)
        } else {
           
            callback(undefined, 'Hava ' + response.body.current.weather_descriptions[0] + 
            ' hava sıcaklığı' + response.body.current.temperature + 
            ' hissedilen ' + response.body.current.feelslike + 
            ' derece')
        } 
    })
}

module.exports = forecast