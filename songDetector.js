const dbus = require('dbus');
let bus = dbus.getBus('session');



// I put the dbus service details in arrays so we can support more players in future
const service = ['org.gnome.Rhythmbox3'];
const servicePath = ['/org/mpris/MediaPlayer2'];
const serviceInterface = ['org.mpris.MediaPlayer2.Player'];

// Function to detect running song on OS
const detectSong = () => {

    console.log('Detecting song');
    bus.getInterface(service[0], servicePath[0], serviceInterface[0], (err, player) => {
        if(err){
            throw err;
        }else{
            player.getProperties((err, properties) => {
                if(err){
                    throw err;
                }else{
                    console.log(properties.Metadata);
                    return properties.Metadata;
                }
            })
        }
    });

};

module.exports = detectSong;