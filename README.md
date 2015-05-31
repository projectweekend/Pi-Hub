## About

This project organizes a small [socket.io](http://socket.io/) server. There is nothing specific to the [Raspberry Pi](https://www.raspberrypi.org/help/what-is-a-raspberry-pi/) in this project, but I put this together as an experiment for receiving real-time data from the devices.

## Adding handlers

Handlers organize the code that will run when data is received from a device. They are stored in [/handlers/index.js](./handlers/index.js). When the server starts it will read all of the handlers defined in this file and configure **socket.io** namespaces and connection stuff.

An example handler is included in the project. To create one you make a new instance of `Handler`, give it a name, and make sure it gets exported. The name `test` in this snippet is used to define a namespace. This handler will be available for connection at `http://your_hostname_or_ip/test`.

```javascript
exports.test = new Handler( "test" );
```

With a handler instance you can add tasks to it. A task associates a text label with some function to execute. In the snippet below, when a connected socket emits data using the `whatever` label, the provided function that will run on the server. The function takes a single input parameter that will be populated with the data received from the device.

```javascript
exports.test.addTask( "whatever", function ( m ) {
    console.log( m );
} );
```


## Run locally with [Docker](https://docs.docker.com/) [Compose](https://docs.docker.com/compose/)

```
docker-compose up
```


## Run locally without Docker

**Install dependencies:**

```
npm install
```

**Start server:**

```
npm start
```


## Deploy to Heroku

**Clone it:**

```
git clone git@github.com:projectweekend/Pi-Hub.git && cd Pi-Hub
```

**Create Heroku app:**

This is assuming you:
* Have a [Heroku](https://www.heroku.com/) account
* Installed the [Heroku Toolbelt](https://toolbelt.heroku.com/)

```
heroku create name-for-your-app
```

If you omit `name-for-your-app` above Heroku will generate a random name for you.

**Push it:**

```
git push heroku master
```
