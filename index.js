const search = document.querySelector('button');
const cityİnput = document.querySelector('input');
const container = document.querySelector('div');

const getWeatherİnfo = async () => {

    if(container.innerHTML.toLowerCase().includes(cityİnput.value.toLowerCase())){

        alert(cityİnput.value + " is already exists")
    }
    else{

    const key = 'e2af97e3d8610f38c17673dafdfc1412';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityİnput.value}&units=metric&appid=${key}`;
    
    try{

        const response = await fetch(url);
        const weatherİnfo = await response.json();
        console.log(weatherİnfo);
        const {weather,main,name} = weatherİnfo;
        console.log(weather,main.name);
        container.innerHTML += `${main.temp} <br>
        ${name}<br>${weather[0].description} <br> <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/> <br>`

        cityİnput.value='';

    }catch(error){
        alert('there is not a city called' + cityİnput.value)
        
    }finally{cityİnput.value='';}

}
}

search.addEventListener('click', getWeatherİnfo);

