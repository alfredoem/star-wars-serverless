'use strict';

const Species = require('../../domain/species.entity')
const CreateSpeciesValidation = require('./create-species-validation')
const CreateSpeciesService = require('./create-species.service');

module.exports.create = async (event, context, callback) => {
    let response;

    try {
        const data = JSON.parse(event.body);
        const createSpeciesValidation = new CreateSpeciesValidation();
        createSpeciesValidation.validate(data)

        const createSpeciesService = new CreateSpeciesService();
        const created = await createSpeciesService.create(new Species(
            data.average_height,
            data.average_lifespan,
            data.classification,
            data.designation,
            data.eye_colors,
            data.hair_colors,
            data.homeworld,
            data.language,
            data.name,
            data.people,
            data.films,
            data.skin_colors,
            data.url
        ))

        response = {
            statusCode: 201,
            body: JSON.stringify({
                error: false,
                code: 201,
                message: 'Los datos se guardaron con exito.',
                data: created
            }),
        };
    } catch (e) {
        response = {
            statusCode: e.code,
            body: JSON.stringify({
                error: true,
                code: e.code,
                message: e.message,
                data: []
            }),
        };
    }

    callback(null, response);
};