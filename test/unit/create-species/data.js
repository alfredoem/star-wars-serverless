'use strict'

const DATA = [
    {
        id: 1,
        average_height: "2.1",
        average_lifespan: "400",
        classification: "Mammal",
        designation: "Sentient",
        eye_colors: "blue, green, yellow, brown, golden, red",
        hair_colors: "black, brown",
        homeworld: "https://swapi.py4e.com/api/planets/14/",
        language: "Shyriiwook",
        name: "Wookie",
        people: [
            "https://swapi.py4e.com/api/people/13/"
        ],
        films: [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/"
        ],
        skin_colors: "gray",
        url: "https://swapi.py4e.com/api/species/3/"
    }
]

function dataTest(id) {
    const response = Object.assign({}, DATA.find(item => item.id === id));
    delete response.id;
    return response;
}

module.exports = dataTest