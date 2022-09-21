const { worker, test } = require('./services/worker');
const file = require('./instructions.json');

function start() {
    file.forEach(o => {
        worker(o.worker, o.wait);
    });
}

console.log('starting program...');
start();



