const mcServer = require('flying-squid')

mcServer.createMCServer({
    'motd': 'A Minecraft Server \nRunning flying-squid',
    'port': process.env.PORT || 3000,
    'max-players': 10,
    'online-mode': false,
    'logging': true,
    'gameMode': 1,
    'difficulty': 1,
    'worldFolder': 'world',
    'generation': {
        'name': 'diamond_square',
        'options': {
            'worldHeight': 80
        }
    },
    'kickTimeout': 10000,
    'plugins': {},
    'modpe': false,
    'view-distance': 10,
    'player-list-text': {
        'header': 'Flying squid',
        'footer': 'Test server'
    },
    'everybody-op': true,
    'max-entities': 100,
    'version': '1.12'
})

process.on('unhandledRejection', err => {
    console.log(err.stack)
})
