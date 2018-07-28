const fetch = require('node-fetch');
const { validRequests } = require('./src/util/constants');

class Router {
	get api() {
		const handler = this.handler;
		return new Proxy({}, {
			get: (obj, prop) => handler(prop)
		});
	}

	async handler(name) {
		if (!validRequests.includes(name)) return new RangeError(`'${name}' is not a valid request!`);

		const reqBody = {
			request: name
		};

		const response = await fetch('http://api.poke.one/', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: { 'Content-Type': 'application/json' }
		})
			.catch(console.error);

		const resBody = await response.json();

		return resBody.success ? resBody.response.online : resBody.response;
	}
}

module.exports = new Router().api;
