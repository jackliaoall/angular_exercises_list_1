export function helloWorld() {
    console.log('hello, world');
}
var i = 0;
setInterval(function() {
    console.log('even:' + i);
    i += 2;
}, 3000);