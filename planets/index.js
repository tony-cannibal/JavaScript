const parse = require('csv-parse');
const fs = require('fs');

const results = [];

function habitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED';
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse.parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanet);
        console.log('done');
    })
