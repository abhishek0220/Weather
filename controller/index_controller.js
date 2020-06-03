module.exports = function(app, request) {
  app.get('/', function(req, res){
    console.log('index initiated ');
    res.render('index', {weather : null, error : null});
  });
  app.post('/', function(req, res){
    const apiKey = process.env.MYAPIKEY;
    let city = req.body.city;
    console.log(city);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(url);
    request(url, function(err, response, body){
      console.log(body)
      if(err){
        res.render('index', {weather:null, error: 'Error, please Try Again'});
      }else{
        let weather = JSON.parse(body);
        if(weather.main == undefined){
          res.render('index', {weather:null, error: 'Error, Invalid City'});
        }else{
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather:weatherText, error: null});
        }
      }
    });
  })
}
