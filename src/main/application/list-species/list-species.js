'use strict';

const ListSpeciesService = require('./list-species.service');
const SpeciesDynamoDbRepository = require('../../infrastructure/repository/species-dynamodb-repository');

module.exports.list = async (event, context, callback) => {
    let response;

    try {
        const listSpeciesService = new ListSpeciesService(new SpeciesDynamoDbRepository());
        const data = await listSpeciesService.getAll();

        response = {
            statusCode: 200,
            body: JSON.stringify({
                error: false,
                code: 200,
                message: 'Datos obtenidos correctamente.',
                data: data
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