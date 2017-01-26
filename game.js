#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .usage('[options] <words>')
  .option('-a, --add <n>', 'Add location')
  .option('-b, --build', 'Build')
  // .action(function(number) {
  //   console.log(number);
  // })
  .parse(process.argv);

  var words = program.args;
  var row1 = ['_','_','_'];
  var row2 = ['_','_','_'];
  var row3 = ['_','_','_'];


  if(program.add){
    console.log('Adding piece to ', program.add);
    console.log([0],['A','B','C']);
    console.log([1], row1);
    console.log([2],row2);
    console.log([3],row3);
  }
  if(program.build){
    console.log('Building board', program.build);
    row1 = ['_','_','_'];
    row2 = ['_','_','_'];
    row3 = ['_','_','_'];
    
    console.log([0],['A','B','C']);
    console.log([1], row1);
    console.log([2],row2);
    console.log([3],row3);
  }