"use strict"

// We must run this as root since we are accessing hardware directly.
// Furthermore just one instance of this driver is allowed per Pi concurrently.

// Load and configure the drivers:
const DMX = require( 'dmx4pi' )( {
	// Any free GPIO can be used:
	pinTx: 22,   // Data pin
	pinEn: 27,   // Enable ping
	// The signal levels can be inverted if neccessary:
	invTx: true, // Data pin
	invEn: true  // Enable pin
} );

module.exports = (context, callback) => {
  let data = Buffer.from( [ 5, 5, 5, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0] );

  setInterval( () => DMX.transmit( data ), 1000/2);
 
  callback(undefined, {nodeVersion: process.version, input: context });
};
