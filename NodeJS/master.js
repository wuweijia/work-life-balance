var fork = require('child_process').fork;
var cpus = require('os').cpus();

for (let index = 0; index < cpus.length; index++) {
  fork('./worker.js')
}
