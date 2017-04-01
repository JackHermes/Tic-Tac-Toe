#!/usr/bin/env node

var program = require('commander');
var board = require('./board.js');

program
  .version('0.0.1')
  // .usage('[options] <words>')
// create new board
program
  .command('new game')
  .action(function() {
    console.log('Building board');
    board.row1 = ['_','_','_'];
    board.row2 = ['_','_','_'];
    board.row3 = ['_','_','_'];
    row1 = board.row1;
    row2 = board.row2;
    row3 = board.row3;

    console.log([0],['A','B','C']);
    console.log([1], row1);
    console.log([2], row2);
    console.log([3], row3);
  })

program.parse(process.argv);

  // var words = program.args;
  // var row1 = ['_','_','_'];
  // var row2 = ['_','_','_'];
  // var row3 = ['_','_','_'];
  //
  //
  // if(program.add){
  //   console.log('Adding piece to ', program.add);
  //   console.log([0],['A','B','C']);
  //   console.log([1], row1);
  //   console.log([2], row2);
  //   console.log([3], row3);
  // }






