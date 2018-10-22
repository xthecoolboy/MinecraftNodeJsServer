const mcServer = require('flying-squid');
const port = process.env.PORT || 3000;

console.log("IP: "+ process.env.IP);
mcServer.createMCServer({
    'motd': 'A Minecraft Server \nRunning flying-squid',
    'port': port,
    'max-players': 2,
    'online-mode': false,
    'logging': true,
    'gameMode': 1,
    'difficulty': 1,
    'worldFolder': 'world',
    'generation': {
        'name': 'diamond_square',
        'options': {
            'worldHeight': 20,
            'worldWidth': 20
        }
    },
    'kickTimeout': 10000,
    'plugins': {},
    'modpe': false,
    'view-distance': 5,
    'player-list-text': {
        'header': 'Flying squid',
        'footer': 'Test server'
    },
    'everybody-op': true,
    'max-entities': 10,
    'version': '1.12'
});

process.on('unhandledRejection', err => {
    console.log(err.stack)
});