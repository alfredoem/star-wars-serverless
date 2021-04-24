'use strict'

const dataTest = require('./data')
const CreateSpeciesValidation = require('../../../src/main/application/create-species/create-species-validation');

describe('Creación de especies', () => {

    describe('WHEN se envian datos completos', () => {
        const data = dataTest(1);

        it('THEN el validador de datos retorna true', () => {
            const createSpeciesValidation = new CreateSpeciesValidation();
            expect(createSpeciesValidation.requiredValidate(data)).toBe(false);
        });
    });

    describe('WHEN se envian datos incompletos', () => {
        const data = dataTest(1);
        const eyeColors = data.eye_colors;
        data.eye_colors = '';

        it('THEN el validador de datos retorna false', () => {
            const createSpeciesValidation = new CreateSpeciesValidation();
            expect(createSpeciesValidation.requiredValidate(data)).toBe(true);
            data.eye_colors = eyeColors;
        });
    });

    describe('WHEN se envian el campo films como string', () => {
        const data = dataTest(1);
        data.films = 'Roge One';

        it('THEN el validador de datos retorna false', () => {
            const createSpeciesValidation = new CreateSpeciesValidation();
            expect(createSpeciesValidation.requiredValidate(data)).toBe(true);
        });
    });



});



