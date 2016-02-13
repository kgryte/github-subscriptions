'use strict';

// MODULES //

var factory = require( './factory.js' );


// SUBSCRIPTIONS //

/**
* FUNCTION: subscriptions( opts, clbk )
*	Gets a list of repositories a user is watching.
*
* @param {Object} opts - function options
* @param {String} [opts.token] - Github access token
* @param {String} [opts.username] - Github username
* @param {String} [opts.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Void}
*/
function subscriptions( opts, clbk ) {
	factory( opts, clbk )();
} // end FUNCTION subscriptions()


// EXPORTS //

module.exports = subscriptions;
