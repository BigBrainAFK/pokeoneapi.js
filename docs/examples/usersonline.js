/**
 * Get the current user count
 */

// Import the pokeoneapi.js module
const Router = require('pokeoneapi.js');

// Create a new webhook
const API = new Router().api;

// Get the user count
API.usersonline.then(console.log);
