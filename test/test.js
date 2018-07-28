const Router = require('../');
const router = new Router();

async function main() {
	console.log(await router.raw.usersonline);
	console.log(await router.raw.invalidrequest);
	console.log(await router.api.usersonline);
	console.log(await router.api.invalidrequest);
}

main();
