//console.log('hello');
const mymap = L.map('mapid').setView([0, 0], 1);
const marker = L.marker([0, 0]).addTo(mymap);
const attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	// by reference from json =
	//console.log(data.latitude);
	//console.log(data.longitude);
	//
	// below = seperates variables
	const { latitude, longitude, altitude, velocity } = data;
	//console.log(data);
	//console.log(longitude);

	marker.setLatLng([latitude, longitude]);
	if (firstTime) {
		mymap.setView([latitude, longitude], 2);
		firstTime = false;
	}
	//display variables
	document.getElementById('lat').textContent = latitude.toFixed(2);
	document.getElementById('lon').textContent = longitude.toFixed(2);
	document.getElementById('alt').textContent = altitude.toFixed(2);
	document.getElementById('vel').textContent = velocity.toFixed(2);
}

getISS();
setInterval(getISS, 1500);
