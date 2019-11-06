#!/usr/bin/env node
//表明这是一个可执行的应用

const program = require('commander');

program
  .version('0.1.0', '-v, --version')
  .option('-i, --init', 'init something')
  .option('-g, --generate', 'generate something')
  .option('-r, --remove', 'remove something')
  .command('init <name>')
  .action(name => {
    console.log(name);
  });

program.on('--help', function() {
  console.log('  Examples:');
  console.log('   this is an example');
});

program.parse(process.argv);

if (program.init) {
  console.log('init something');
}

if (program.generate) {
  console.log('generate something');
}

if (program.remove) {
  console.log('remove something');
}
