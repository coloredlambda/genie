const Genius = require('node-genius');
const geniusClient = new Genius('6Fq2QbUzjCZO3ApnYkr1GBB5-xcSHt2CDit_g88R2fFthOmiFND8L6KqJXEIz1D9');

const getSong = (song, callback) => {
    console.log('Getting song from Genius');
    geniusClient.search(song, (err, results) => {
        console.log(results)
    })
};

module.exports = getSong;