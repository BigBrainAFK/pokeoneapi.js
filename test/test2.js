const Router = require('../');
const router = new Router();

async function main() {
	console.log('Querying API for online user count');
	console.log(await router.api.usersonline);
}

main();
