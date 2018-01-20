const dbus = require('dbus');

const detectSong = () => {
    const bus = new dbus.getBus('session');
    let service = ['org.gnome.Rhythmbox3'];
    let servicePath = ['/org/mpris/MediaPlayer2'];
    let serviceInterface = ['org.mpris.MediaPlayer2.Player'];


    bus.getInterface(service[0], servicePath[0], serviceInterface[0], (err, player) => {
        if(err){
            throw err;
        }else{
            return function (){
                console.log(player.PlayPause);
            }
        }
    });


};

module.exports = detectSong;