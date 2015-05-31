var io = require( "socket.io" )( process.env.PORT || 3030 );
var _ = require( "lodash" );
var handlers = require( "./handlers" );


_.forOwn( handlers, function ( v, k ) {
    v.registerChannel( io );
} );
