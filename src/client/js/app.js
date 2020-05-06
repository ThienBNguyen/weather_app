//create a button to add eventlisterner for a click
const button = document.getElementById("submit");
button.addEventListener('click', (e) => {
    e.preventDefault()
    const date1 = document.getElementById('departure').value;
    const date2 = document.getElementById('leave').value;
    var d1 = new Date(date1)
    var d2 = new Date(date2)


    // const location = document.getElementById('location').value;

    getData()
    showDay(d1, d2)
});
//get the date of the trip
function showDay(date1, date2) {
    const day = (date2 - date1) / 1000;
    const dayDiffe = Math.abs(Math.floor(day))
    const totalDays = Math.floor(dayDiffe / (24 * 60 * 60))
    const today = new Date()
    const todayday = (date1 - today) / 1000;
    const todayDiffe = Math.abs(Math.floor(todayday))
    const tripDays = Math.floor(todayDiffe / (24 * 60 * 60))
    document.getElementById("showDay").innerHTML = `You have ${tripDays} days until your trip and Your total trip is ${totalDays} days`;
    setTimeout(showDay, 1000)
}
//create a button when click
function createButton() {
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button'); // input element of type button
    btn.setAttribute('value', 'save trip');
    btn.id = "add"
    const container = document.getElementById("container");
    container.appendChild(btn)
};
// // create a remove button
// function removeButton() {
//     var removeBtn = document.createElement('input');
//     removeBtn.setAttribute('type', 'button'); // input element of type button
//     removeBtn.setAttribute('value', 'remove trip');
//     const container = document.getElementById("container");
//     container.appendChild(removeBtn)
// };
// 
//create a get data from the server 
const getData = async () => {

    const location = document.getElementById('location').value;
    try {
        const api_url = `./weather/${location}` //get data url 

        const result = await fetch(api_url); // fetch data from the server
        const api_data = await result.json()
        // set json data to seperate variable
        const geonames_data = api_data.geonames
        const pixabay_data = api_data.picture
        const weatherbit_data = api_data.weather
        // console.log(pixabay_data)
        const apiName = `${geonames_data.geonames[0]['name']}-${geonames_data.geonames[0]['adminName1']} `
        const apiWeather = `Description: ${weatherbit_data.data[0].weather.description}`
        const apiImg = pixabay_data.hits[0]['largeImageURL']
        const apiAlt = pixabay_data.hits[0]['tags']
        const apiDetail = `typical weather for then is: High - ${weatherbit_data.data[0].app_max_temp}, Low - ${weatherbit_data.data[0].app_min_temp}`
        document.getElementById('name').textContent = apiName;
        document.getElementById('weather-detail').textContent = apiWeather;
        document.getElementById('img').src = apiImg;
        document.getElementById('img').alt = apiAlt;
        document.getElementById('detail').textContent = apiDetail;


        createButton()

        //create a click event
        document.getElementById('add').addEventListener('click', function () {
            //get element by id
            removeButton()
            //set item for localstorage
            localStorage.setItem('apiName', apiName)
            localStorage.setItem('apiWeather', apiWeather)
            localStorage.setItem('apiImg', apiImg)
            localStorage.setItem('apiAlt', apiAlt)
            localStorage.setItem('apiDetail', apiDetail)
            // localStorage.setItem('totalDays', totalDays)

            // super dry get item from the local storage maybe use for loop for this
            document.getElementById('name1').textContent = localStorage.getItem("apiName");
            document.getElementById('weather-detail1').textContent = localStorage.getItem("apiWeather");
            document.getElementById('img1').src = localStorage.getItem("apiImg");
            document.getElementById('img1').alt = localStorage.getItem("apiAlt");
            document.getElementById('detail1').textContent = localStorage.getItem("apiDetail");

            // create a remove button
            function removeButton() {
                var removeBtn = document.createElement('input');
                removeBtn.setAttribute('type', 'button'); // input element of type button
                removeBtn.id = "remove"
                removeBtn.setAttribute('value', 'remove trip');
                const showDay1 = document.getElementById("showDay1");
                showDay1.appendChild(removeBtn)
            };
            document.getElementById('remove').addEventListener('click', function () {
                localStorage.removeItem("apiImg")
            })
        })

        return api_data;
    }
    catch (err) {
        console.log('error', err)
    }
}