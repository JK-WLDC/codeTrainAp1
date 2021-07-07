//console.log('hello');

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	// by reference from json =
	//console.log(data.latitude);
	//console.log(data.longitude);
	//
	// below = seperates variables
	const { latitude, longitude } = data;
	//console.log(latitude);
	//console.log(longitude);
	//display variables
	document.getElementById('lat').textContent = latitude;
	document.getElementById('lon').textContent = longitude;
}

getISS();

setTimeout(function () {
	window.location.reload(1);
}, 5000);
