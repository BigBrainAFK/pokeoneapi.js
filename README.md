<div align="center">
  <p>
    <a href="https://discord.gg/56MdzWH"><img src="https://discordapp.com/api/guilds/395758802361909258/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/pokeoneapi.js"><img src="https://img.shields.io/npm/v/pokeoneapi.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/pokeoneapi.js"><img src="https://img.shields.io/npm/dt/pokeoneapi.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/BigBrainAFK/pokeoneapi.js"><img src="https://travis-ci.org/BigBrainAFK/pokeoneapi.js.svg" alt="Build status" /></a>
    <a href="https://david-dm.org/BigBrainAFK/pokeoneapi.js"><img src="https://img.shields.io/david/BigBrainAFK/pokeoneapi.js.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/pokeoneapi.js/"><img src="https://nodei.co/npm/pokeoneapi.js.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Welcome!
Welcome to the pokeoneapi.js v0.0.3 documentation.

v0.0.3 is still very much a work-in-progress, as we're aiming to make it the best it can possibly be before releasing.
Only use it if you are fond of living life on the bleeding edge.

## About
pokeoneapi.js is a powerful [Node.js](https://nodejs.org) module that allows you to interact with the
[PokéOne API](http://poke.one/) very easily.

In the future we hope to be:
- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the PokéOne API

## Installation
**Node.js 8.0.0 or newer is required.**
`npm install pokeoneapi.js`  

## Example usage
```js
const Router = require('pokeoneapi.js');
const API = new Router().api;

API.usersonline.then(console.log);
```

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested.  
See [the contribution guide](https://github.com/BigBrainAFK/pokeoneapi.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Rising Phoenix Discord Server](https://discord.gg/56MdzWH).

### Credits
- BigBrainAFK (for most of the code)
- [Discord.JS](https://github.com/discordjs/discord.js) (for travis, the templates and the nice docs)
