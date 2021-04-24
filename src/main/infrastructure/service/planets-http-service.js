'use strict';

const swapi = require('swapi-node');

class PlanetsHttpService {

    async find(id) {
        return await swapi.getPlanets(id).then((result) => {
            return result;
        });
    }

}

module.exports = PlanetsHttpService;