'use strict'

class CreateSpeciesValidation {
    validate(data) {
        if (this.requiredValidate(data)) {
            throw new Error('Ocurrio un problema con los datos enviados.');
        }
    }

    requiredValidate(data) {
        return data.average_height === '' ||
            data.average_lifespan === '' ||
            data.classification === '' ||
            data.designation === '' ||
            data.eye_colors === '' ||
            data.hair_colors === '' ||
            data.homeworld === '' ||
            data.language === '' ||
            data.name === '' ||
            typeof data.people !== 'object' ||
            typeof data.films !== 'object' ||
            data.skin_colors === '' ||
            data.url === '';
    }
}

module.exports = CreateSpeciesValidation;
