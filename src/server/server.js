/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.json({ limit: '1mb' }));
const fetch = require('node-fetch')
/* Initialize the main project folder*/
app.use(express.static('website'));
app.use(express.json({ limit: '1mb' }))
const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
}

app.get('/', function (req, res) {
    res.sendFile('.index.html')
})
//get data from the api
app.get('/weather/:location', async function fetchApi(request, response) {
    const location = request.params.location
    console.log(location)
    const weatherbit_url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=9239ee028e8345bbbd8e90265ff00ad1`
    const fetch_response = await fetch(weatherbit_url)
    const weatherbit_data = await fetch_response.json()
    // response.json(weatherbit_data)
    // console.log(weatherbit_data)

    const geoname_url = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=kangtan1`;
    const geoname_response = await fetch(geoname_url);
    const geoname_data = await geoname_response.json();
    // console.log(geoname_data)
    const pixabay_url = `https://pixabay.com/api/?key=15673499-99eb954ced86f46b0b3b423b4&q=${location}&image_type=photo&category=travel`;
    const pixabay_response = await fetch(pixabay_url);
    const pixabay_data = await pixabay_response.json();
    projectData = {
        weather: weatherbit_data,
        picture: pixabay_data,
        geonames: geoname_data
    }
    // console.log(projectData)
    response.json(projectData)

})
module.export = fetchApi
