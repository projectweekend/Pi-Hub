var Handler = require( "../socket" ).Handler;


exports.test = new Handler( "test" );
exports.test.addTask( "test", function ( m ) {
    console.log( m );
} );
