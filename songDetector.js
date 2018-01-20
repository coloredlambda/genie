const dbus = require('dbus');

// I put the dbus service details in arrays so we can support more players in future
const service = ['org.gnome.Rhythmbox3'];
const servicePath = ['/org/mpris/MediaPlayer2'];
const serviceInterface = ['org.mpris.MediaPlayer2.Player'];

// Function to detect running song on OS
const detectSong = () => {
    const bus = new dbus.getBus('session');
    console.log('Detecting song');
    bus.getInterface(service[0], servicePath[0], serviceInterface[0], (err, player) => {
        if(err){
            throw err;
        }else{
            player.getProperties((err, properties) => {
                if(err){
                    bus.disconnect();
                    throw err;
                }else{
                    console.log(properties.Metadata);
                    bus.disconnect();
                }
            })
        }
    });


};

module.exports = detectSong;