// Libraries
var cluster = require('cluster');
var datefmt = require('dateformat');

// http://nodejs.org/api/cluster.html

// Setup
var workers = parseInt(process.env.CLUSTER_WORKERS, 10);

cluster.setupMaster({
    // exec : "app.js",
    exec : "app.js",
});

// Utilities
function say(message) {
    console.log("[SERVER] " + message);
};

// Startup Messaging
say("Master starting:");
say("time        => " + datefmt(new Date(), "ddd, dd mmm yyyy hh:MM:ss Z"));
say("pid         => " + process.pid);
say("environment => " + process.env.NODE_ENV);

// Fork Workers
say("Workers starting:");

for (var i = 0; i < workers; i++) {
    cluster.fork();
}

// Worker Event Handlers
cluster.on('exit', function(worker, code, signal) {
    say('worker      => with pid: ' + worker.process.pid + ', died. Restarting...');
    cluster.fork();
});

cluster.on('online', function(worker) {
    say('worker      => start with pid: ' + worker.process.pid + '.');
});

