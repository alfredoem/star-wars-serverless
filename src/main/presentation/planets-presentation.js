'use strict'

class PlanetsPresentation {
    format(planet) {
        return {
            nombre: planet.name,
            clima: planet.climate,
            diametro: planet.diameter,
            peliculas: planet.films,
            gravedad: planet.gravity,
            periodo_orbital: planet.orbital_period,
            poblacion: planet.population,
            habitantes: planet.residents,
            periodo_rotacion: planet.rotation_period,
            agua_superficial: planet.surface_water,
            terreno: planet.terrain,
            url: planet.url,
            fecha_edicion: planet.edited,
            fecha_creacion: planet.created
        }
    }
}

module.exports = PlanetsPresentation;
