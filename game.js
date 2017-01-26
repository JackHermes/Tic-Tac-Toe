#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .usage('[options] <words>')
  .option('-a, --add', 'Add')
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
    console.log('Adding');
  }
  if(program.build){
    console.log('Building');
    console.log(row1);
    console.log(row2);
    console.log(row3);
  }