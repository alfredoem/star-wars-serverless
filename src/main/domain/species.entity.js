'use strict';

const uuid = require('uuid');

class Species {
    constructor(
        average_height,
        average_lifespan,
        classification,
        designation,
        eye_colors,
        hair_colors,
        homeworld,
        language,
        name,
        people,
        films,
        skin_colors,
        url
    ) {
        const timestamp = new Date().getTime();
        this.id = uuid.v1();
        this.average_height = average_height;
        this.average_lifespan = average_lifespan;
        this.classification = classification;
        this.created = timestamp;
        this.designation = designation;
        this.edited = timestamp;
        this.eye_colors = eye_colors;
        this.hair_colors = hair_colors;
        this.homeworld = homeworld;
        this.language = language;
        this.name = name;
        this.people = people;
        this.films = films;
        this.skin_colors = skin_colors;
        this.url = url;
    }
}

module.exports = Species;
