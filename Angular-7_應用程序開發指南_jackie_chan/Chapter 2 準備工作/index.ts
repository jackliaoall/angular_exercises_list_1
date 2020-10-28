import { helloWorld } from './hello-world';

// debugger;
helloWorld();
var i = 1;
setInterval(function() {
    console.log('odd:' + i);
    i += 2;
}, 3000);