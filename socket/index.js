exports.Handler = Handler;


function Handler ( nameSpace ) {

    if ( typeof nameSpace !== "string" ) {
        throw new Error( "Handler.nameSpace must be a string" );
    }

    this.nameSpace = "/" + nameSpace;
    this.tasks = [];
    this.channel = null;

}

Handler.prototype.addTask = function( name, action ) {

    if ( typeof name !== "string" ) {
        throw new Error( "'name' parameter must be a string" );
    }

    if ( typeof action !== "function" ) {
        throw new Error( "'action' parameter must be a function" );
    }

    this.tasks.push( { name: name, action: action } );

};

Handler.prototype.registerChannel = function( io ) {

    var _this = this;

    _this.channel = io.of( this.nameSpace );
    _this.channel.on( "connection", onConnection );

    function onConnection ( socket ) {
        _this.tasks.forEach( function ( t ) {
            socket.on( t.name, t.action );
        } );
    }

};
