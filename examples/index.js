'use strict';

var subscriptions = require( './../lib' );

var opts = {
	'useragent': 'beep-boop-bop',
	'username': 'kgryte'
};

subscriptions( opts, clbk );

function clbk( error, results, info ) {
	if ( info ) {
		console.error( info );
	}
	if ( error ) {
		throw new Error( error.message );
	}
	console.log( results );
}