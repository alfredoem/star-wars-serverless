'use strict';

const PlanetsHttpService = require('../../infrastructure/service/planets-http-service');
const PlanetsPresentation = require('../../presentation/planets-presentation')

module.exports.find = async(event, context, callback) => {
    let response;

    try {
        const planetsService = new PlanetsHttpService();
        const data = await planetsService.find(event.pathParameters.id);

        const planetsPresentation = new PlanetsPresentation();
        response = {
            statusCode: 200,
            body: JSON.stringify({
                error: false,
                code: 200,
                message: 'Datos obtenidos correctamente.',
                data: planetsPresentation.format(data)
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
