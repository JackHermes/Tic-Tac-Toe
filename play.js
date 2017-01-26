var program = require('commander');

program
  .version('0.0.1')
  .usage('[options] <number>')
  .command('add <number>', 'Add a number')
  .action(function(number) {
    console.log(number);
  })
  .parse(process.argv);

console.log('hey');
if(program.add) console.log(' added a piece');