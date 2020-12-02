const pinger = require('minecraft-pinger')
 
console.log('start')
pinger.pingPromise('175.141.82.152', 25571)
  .then( data => {
     console.log(`Ping to server: ${data.ping}`)
     console.log(`Players: ${data.players.online} / ${data.players.max}`)
     
  })
  .catch( err => {
    console.error(err);
    process.exit();

  })
 
