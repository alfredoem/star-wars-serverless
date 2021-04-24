'use strict'

const ListSpeciesService = require('../../../src/main/application/list-species/list-species.service');
const dataTest = require('../create-species/data')

describe('Listado de especies', () => {

    describe('WHEN se cambia de repository en el servicio', () => {

        it('THEN el servicio debe devolver los datos correctamente', async () => {
            const data = dataTest(1);
            const mock = {
                getAll: () => {
                    return [data];
                }
            };

            const listSpeciesService = new ListSpeciesService(mock);
            expect(await listSpeciesService.getAll()).toHaveLength(1);
        });

    });

});
