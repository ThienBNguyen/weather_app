//create a button to add eventlisterner for a click
const button = document.getElementById("submit");
button.addEventListener('click', (e) => {
    e.preventDefault()
    // const location = document.getElementById('location').value;
    console.log(location);
    getData()
});
//create a get data from the server 
const getData = async () => {
    const location = document.getElementById('location').value;
    try {
        const api_url = `./weather/${location}` //get data url 
        console.log(api_url)
        const result = await fetch(api_url); // fetch data from the server
        const api_data = await result.json()
        // set json data to seperate variable
        const geonames_data = api_data.geonames
        const pixabay_data = api_data.picture
        const weatherbit_data = api_data.weather
        // console.log(pixabay_data)
        document.getElementById('name').textContent = `${geonames_data.geonames[0]['name']}-${geonames_data.geonames[0]['adminName1']} `;
        // document.getElementById('high').textContent = `High - ${weatherbit_data.data[0].app_max_temp}`;
        // document.getElementById('low').textContent = `Low - ${weatherbit_data.data[0].app_min_temp}`;
        document.getElementById('weather-detail').textContent = `Description: ${weatherbit_data.data[0].weather.description}`;
        document.getElementById('img').src = pixabay_data.hits[0]['largeImageURL'];
        document.getElementById('img').alt = pixabay_data.hits[0]['tags'];
        document.getElementById('detail').textContent = `typical weather for then is: High - ${weatherbit_data.data[0].app_max_temp}, Low - ${weatherbit_data.data[0].app_min_temp}`;

        return api_data;
    }
    catch (err) {
        console.log('error', err)
    }
}

export { getData }