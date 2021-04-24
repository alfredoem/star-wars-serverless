'use strict';

class ListSpeciesService {
    constructor(speciesRepository) {
        this.speciesRepository = speciesRepository;
    }

    async getAll() {
        try {
            return this.speciesRepository.getAll();
        } catch (e) {
            throw new Error(e.message);
        }
    }
}

module.exports = ListSpeciesService;
