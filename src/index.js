const fetch = require('node-fetch');
const { validRequests } = require('./src/util/constants');

class Router {
	/**
	 * API Handler
	 * @returns {Proxy} Proxy handler to handle all the API requests
	 * @readonly
	 */
	get api() {
		const handler = this.handler;
		return new Proxy({}, {
			get: (obj, prop) => handler(prop)
		});
	}

	/**
	 * RAW API Handler
	 * @returns {Proxy} Proxy handler to handle all the API requests
	 * @readonly
	 */
	get raw() {
		const rawHandler = this.rawHandler;
		return new Proxy({}, {
			get: (obj, prop) => rawHandler(prop)
		});
	}

	/**
	 * Handles a specific request
	 * @param {string} name The name of the endpoint
	 * @returns {Object} The response in JSON format
	 */
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

	/**
	 * Handles a specific request but returns the raw response
	 * @param {string} name The name of the endpoint
	 * @returns {Response} The response in its RAW state
	 */
	async rawHandler(name) {
		const reqBody = {
			request: name
		};

		const response = await fetch('http://api.poke.one/', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: { 'Content-Type': 'application/json' }
		})
			.catch(console.error);

		return response;
	}
}

module.exports = Router;
