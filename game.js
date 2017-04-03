#!/usr/bin/env node

var program = require('commander');
var board = {
  row1: ['_','_','_'],
  row2: ['_','_','_'],
  row3: ['_','_','_']
};

var displayBoard = function() {
  console.log([0],['A','B','C']);
  console.log([1], board.row1);
  console.log([2], board.row2);
  console.log([3], board.row3);
};

program
  .version('0.0.1')
  .command('show')
  .action(function() {
    displayBoard();
  })

program
  .command('new')
  .action(function() {
    console.log('Building board...');
    board.row1 = ['_','_','_'];
    board.row2 = ['_','_','_'];
    board.row3 = ['_','_','_'];

    displayBoard();
  })

program
  .command('add')
  .action(function() {
    console.log('add in a piece');
    board.row2[1] = 'X'

    displayBoard();
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






