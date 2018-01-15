const dbus = require('dbus');

const bus = new dbus.getBus('session');

const service = 'org.gnome.Rhythmbox3';
const servicePath = '/org/mpris/MediaPlayer2';
const interface = 'org.mpris.MediaPlayer2.Player';

bus.getInterface(service, servicePath, interface, (err, player) => {
    if(err){
        throw err
    }else{
        console.log(player);
        player.PlayPause();
    }
});