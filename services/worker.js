const { sleep } = require('../utils/sleep');

async function worker(_id, _wait) {
    await sleep(_wait);
    console.log('worker: ', _id);
}

function test() {
    console.log('test');
}

module.exports = {
    worker,
    test
}