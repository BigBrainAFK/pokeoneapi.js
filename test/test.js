const API = require('../');

async function main() {
	console.log(await API.usersonline);
	console.log(await API.invalidrequest);
}

main();
