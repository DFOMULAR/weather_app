const request = require("request");
const forecast= (address,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=da42c8052ad57909cf62714477ff49a5&query="+encodeURIComponent(address)
    request({ url:url,json: true},(error,response)=>{
      if(error){
       // console.log("unable to connect to the weather api check your conncetion and try again")
        callback("unable to connect to the weather api check your conncetion and try again",undefined)
      }
      else if(response.body.error){
       // console.log("unable to find location ")
        callback("unable to find location ",undefined)
      }
      else{
        const temp = response.body.current.temperature
        const rain = response.body.current.precip
        const loca = response.body.request.query
        const lati = response.body.location.lat
        const logi = response.body.location.lon
      //console.log(loca+": the latituid:"+lati+" and the logitude:"+logi+"the weather is "+response.body.current.weather_descriptions[0]+" The current temperature is "+temp+"'F and "+rain+" % chance of rain")
      callback(undefined,loca+": The latituid:"+lati+" and the logitude:"+logi+" the weather is "+response.body.current.weather_descriptions[0]+" The current temperature is "+temp+"'C and "+rain+" % chance of rain")
    }})
    }
    module.exports = forecast