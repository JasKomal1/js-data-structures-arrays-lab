// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  return drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveFirstDriver(name){
    return drivers.shift();
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop();
}

function appendDriver(name){
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers];
}

function removeLastDriver() {
    return drivers.slice(0,drivers.length -1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}