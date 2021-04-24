'use strict';

const SpeciesDynamoDbRepository = require('../../infrastructure/repository/species-dynamodb-repository');

class CreateSpeciesService {
    speciesRepository;

    constructor() {
        this.speciesRepository = new SpeciesDynamoDbRepository();
    }

    async create(species) {
        return this.speciesRepository.store(species);
    }

}

module.exports = CreateSpeciesService;
