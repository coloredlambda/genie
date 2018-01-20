const dbus = require('dbus');
let bus = dbus.getBus('session');


// I put the dbus service details in arrays so we can support more players in future
const service = ['org.gnome.Rhythmbox3'];
const servicePath = ['/org/mpris/MediaPlayer2'];
const serviceInterface = ['org.mpris.MediaPlayer2.Player'];

// Function to detect running song on OS. Runs a callback with the detected song as argument
const detectSong = (callback) => {

    console.log('Detecting song');
    bus.getInterface(service[0], servicePath[0], serviceInterface[0], (err, player) => {
        if(err){
            throw err;
        }else{
            // This method fetches properties on the object
            player.getProperty('Metadata', (err, metadata) => {
                if(err){
                    throw err;
                }else{
                    console.log(metadata);
                    console.log(metadata['xesam:artist']);
                    let song = `${metadata['xesam:artist'][0]} - ${metadata['xesam:title']}`;
                    console.log(song);
                    callback(song);
                }
            })
        }
    });

};

module.exports = detectSong;