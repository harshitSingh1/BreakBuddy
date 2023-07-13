var sudoku = {
}
// variables
var vars = {
  difficulty: 1,
  boards: {
  	empty: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]],
    start: [
      [1,2,3,6,7,8,9,4,5],
      [5,8,4,2,3,9,7,6,1],
      [9,6,7,1,4,5,3,2,8],
      [3,7,2,4,6,1,5,8,9],
      [6,9,1,5,8,3,2,7,4],
      [4,5,8,7,9,2,6,1,3],
      [8,3,6,9,2,4,1,5,7],
      [2,1,9,8,5,7,4,3,6],
      [7,4,5,3,1,6,8,9,2]],
    // beginner: 45 hints
    veryEasy: [ // 34 hints
      [0,0,5,0,0,2,0,0,6],
      [4,0,0,0,0,0,0,0,0],
      [3,6,0,8,9,0,5,1,4],
      [6,9,0,0,0,8,0,0,0],
      [5,0,3,7,0,1,2,0,9],
      [0,0,0,5,0,0,0,8,7],
      [2,4,6,0,7,3,0,5,8],
      [0,0,0,0,0,0,0,0,3],
      [8,0,0,2,0,0,7,0,0]],
    medEasy: [ // 32 hints
      [0,7,3,0,0,0,6,4,0],
      [9,0,0,1,0,8,0,0,7],
      [8,0,0,0,7,0,0,0,1],
      [0,2,0,0,6,0,0,7,0],
      [0,0,5,8,0,7,1,0,0],
      [0,1,0,0,9,0,8,0,0],
      [2,0,0,0,3,0,0,6,0],
      [5,0,0,4,0,9,0,0,2],
      [0,8,9,0,0,0,4,3,0]],
    mild: [ // 28 hints
      [7,0,2,8,0,6,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [8,0,0,4,0,0,2,0,7],
      [5,0,0,2,0,0,0,8,0],
      [2,8,0,7,0,9,0,3,5],
      [0,1,0,0,0,8,0,0,6],
      [3,0,7,0,0,4,0,0,8],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,9,0,7,1,0,2]],
 	 medium: [ // 24 hints
      [0,0,0,0,0,0,0,0,0],
      [8,0,0,0,2,0,0,0,5],
      [0,0,0,0,0,6,2,4,0],
      [0,3,8,0,0,7,1,0,0],
      [2,0,4,0,0,0,3,0,9],
      [0,0,7,4,0,0,5,2,0],
      [0,7,2,5,0,0,0,0,0],
      [6,0,0,0,8,0,0,0,1],
      [0,0,0,0,0,0,0,0,0]],
    hard: [ // 27 hints
      [0,9,0,0,1,0,0,0,0],
      [0,0,0,0,2,0,0,0,6],
      [0,0,1,9,0,0,8,2,4],
      [0,0,5,0,0,0,0,1,7],
      [0,0,0,4,3,7,0,0,0],
      [4,6,0,0,0,0,9,0,0],
      [9,4,3,0,0,5,2,0,0],
      [2,0,0,0,9,0,0,0,0],
      [0,0,0,0,4,0,0,3,0]],
    evil: [ // 26 hints
      [0,0,1,0,0,7,0,6,0],
      [4,0,0,6,0,0,3,0,5],
      [6,0,0,0,0,0,0,4,0],
      [0,0,0,5,0,9,0,0,0],
      [0,1,4,0,0,0,2,7,0],
      [0,0,0,7,0,2,0,0,0],
      [0,3,0,0,0,0,0,0,1],
      [7,0,8,0,0,6,0,0,4],
      [0,4,0,2,0,0,8,0,0]],
    impossible: [ // 17 hints
      [0,0,0,7,0,0,0,0,0],
      [1,0,0,0,0,0,0,0,0],
      [0,0,0,4,3,0,2,0,0],
      [0,0,0,0,0,0,0,0,6],
      [0,0,0,5,0,9,0,0,0],
      [0,0,0,0,0,0,4,1,8],
      [0,0,0,0,8,1,0,0,0],
      [0,0,2,0,0,0,0,5,0],
      [0,4,0,0,0,0,3,0,0]],
 	 problem: null,
 	 solution: null
  },
  DOMview: null,
  goingBack: false,
  clock: null,
  isTicking: false,
  timer: null,
  min: null,
  sec: null,
  clear: null,
  allowResClick: false
};
// Utility functions
var util = {
  clone: function(arr) {
    // DEEP COPIES A 2D ARRAY - meaning a complete separate array is created, not just a reference
    var output = new Array();
    for (var i=0;i<arr.length;i++) {
      output[i] = new Array();
      for (var j=0;j<arr[i].length;j++) {
        output[i][j] = arr[i][j];
      }
    }
    return output;
  },
  clear: function(arr,obj) {
    // clears two-dimensional array
    var i = arr.length;
  	while (i--) {
      var j = arr[i].length;
      while (j--) {
        arr[i][j] = 0;
      }
  	}
    return arr;
  },
  contains: function(arr,obj) {
    // searches for object in array
    var i = arr.length;
  	while (i--) {
  		if (arr[i] === obj) {
  			return true;
  		}
  	}
  	return false;
  },
  compare: function(arr1,arr2) {
    // compares entries of 2d arrays, assuming same length
    for (var i=0;i<arr1.length;i++) {
      for (var j=0;j<arr1[i].length;j++) {
        if (arr1[i][j]!==arr2[i][j]) {
          return false;
        }
      }
    }
    return true;
  },
  getRand: function(min,max) {
    return Math.round(Math.random()*(max-min)+min); // rand number from min-max
  },
  startClock: function() {
    if (!vars.isTicking) {
      vars.clock = setInterval(util.ticClock,1000);
      vars.isTicking = true;
    }
  },
  stopClock: function() {
    vars.clear = clearInterval(vars.clock);
    vars.isTicking = false;
  },
  resetClock: function() {
    vars.timer = vars.min = vars.sec = 0;
    $('.minutes').text(vars.min);
    $('.seconds').text('00');
  },
  ticClock: function() {
    vars.timer++;
    vars.min = Math.floor(vars.timer / 60);
    vars.sec = vars.timer % 60;
    if (vars.sec < 10) {vars.sec = '0' + vars.sec;}
    $('.minutes').text(vars.min);
    $('.seconds').text(vars.sec);
  }
}
// Puzzle functions
var puzzle = {
  permuteRowColGroups: function(board) {
    var pBoard = util.clone(board);
    var rowGrp1 = util.getRand(0,2)*3+1; // 1st row to manipulate
    var rowGrp2 = util.getRand(0,2)*3+1; // 2nd row to manipulate
    while (rowGrp2==rowGrp1) {
      rowGrp2 = util.getRand(0,2)*3+1; // make sure rowGrp2 !== rowGrp1
    }
    var temp1 = [pBoard[rowGrp1-1], pBoard[rowGrp1], pBoard[rowGrp1+1]]; // store row group 1
    pBoard[rowGrp1-1] = pBoard[rowGrp2-1];
    pBoard[rowGrp1] = pBoard[rowGrp2];
    pBoard[rowGrp1+1] = pBoard[rowGrp2+1];
    pBoard[rowGrp2-1] = temp1[0];
    pBoard[rowGrp2] = temp1[1];
    pBoard[rowGrp2+1] = temp1[2];
    var colGrp1 = util.getRand(0,2)*3+1; var colGrp2 = util.getRand(0,2)*3+1;
    while (colGrp2==colGrp1) {
      colGrp2 = util.getRand(0,2)*3+1; // column 2 cannot be same as column 1
    }
    for (var j=0;j<9;j++) { // loop through rows
      var temp2 = {
        first: pBoard[j][colGrp1-1],
        second: pBoard[j][colGrp1],
        third: pBoard[j][colGrp1+1]
      }; // store col group 1 current cell values
      pBoard[j][colGrp1-1] = pBoard[j][colGrp2-1];
      pBoard[j][colGrp1] = pBoard[j][colGrp2];
      pBoard[j][colGrp1+1] = pBoard[j][colGrp2+1];
      pBoard[j][colGrp2-1] = temp2.first;
      pBoard[j][colGrp2] = temp2.second;
      pBoard[j][colGrp2+1] = temp2.third;
    }
    return pBoard;
  },
  permuteRowCol: function(board) {
    var pBoard = util.clone(board);
    for (var i=0;i<3;i++) { // manipulate rows and cols in same group
      var row1 = util.getRand(0,2) + 3*i; // 1st row to manipulate
      var row2 = util.getRand(0,2) + 3*i; // 2nd row to manipulate
      while (row2==row1) {
        row2 = util.getRand(0,2) + 3*i; // make sure row2 !== row1
      }
      var temp = pBoard[row1]; // store first row
      pBoard[row1] = pBoard[row2]; // swap rows
      pBoard[row2] = temp; // swap rows
      var col1 = util.getRand(0,2)+3*i; var col2 = util.getRand(0,2)+3*i;
      while (col2==col1) {
        col2 = util.getRand(0,2)+3*i; // column 2 cannot be same as column 1
      }
      for (var j=0;j<pBoard.length;j++) { // loop through rows
        var temp = pBoard[j][col1]; // store col 1 current cell value
        pBoard[j][col1] = pBoard[j][col2]; // swap col1 cell w/ col2 cell
        pBoard[j][col2] = temp; // swap col2 cell w/ col1 cell
      }
    }
    return pBoard;
  },
  permuteNumbers: function(board) {
    var permutedBoard = util.clone(board);
    var left = [1,2,3,4,5,6,7,8,9];
    var linked = [1,2,3,4,5,6,7,8,9];
    // generate permutation
    for (var i=0;i<9;i++) {
      var index=0; var replacement=0;
      while (index==replacement) { // they can't be the same
        index = util.getRand(0,left.length-1);
        replacement = left[index]; // randomly select a replacement number
      }
      left.splice(index,1); // prevent number from being used again
      linked[i] = replacement; // replace 1-9 with its replacement
    }
    // implement: switch board numbers
    for (var j=0;j<9;j++) {
      for (var k=0;k<9;k++) {
        if (board[j][k]) { // if board cell not 0
          permutedBoard[j][k] = linked[board[j][k]-1]; // replace numbers with their links
        }
      }
    }
    return permutedBoard;
  },
  solveBoard: function(board) {
    vars.goingBack = false;
    var solved = util.clone(board); // start with the board hints
    var markedup = util.clone(vars.boards.empty); // empty 9x9
    var bySquares = puzzle.rowsToSquares(board);
    // check cols, rows, squares for hints
    for (var i=0;i<9;i++) {
      for (var j=0;j<9;j++) {
        var avail = [1,2,3,4,5,6,7,8,9]; // total numbers available - we'll decrease this by checking rows, cols, boxes
        for (var k=0;k<9;k++) {
          var rnum = board[i][k];
          var cnum = board[k][j];
          var sqnum = Math.floor(i/3)*3+Math.floor(j/3);
          var cellnum = bySquares[sqnum][k];
          if (rnum && avail.indexOf(rnum) >= 0) {
            avail.splice(avail.indexOf(rnum),1); // cell cannot have same value as another on the same row
          }
          if (cnum && avail.indexOf(cnum) >= 0) {
            avail.splice(avail.indexOf(cnum),1); // cell cannot have same value as another on the same column
          }
          if (cellnum && avail.indexOf(cellnum) >= 0) {
            avail.splice(avail.indexOf(cellnum),1); // cell cannot have same value as another on the same row
          }
        }
        markedup[i][j] = avail; // populate
      }
    }
    // now we have the values each cell cannot be, so we start our algorithm
    var freeRow; var freeCol;
    // get first mutable cell
    for (var a=0;a<9;a++) {
      for (var b=0;b<9;b++) {
        if (!solved[a][b]) {
          freeRow = a; freeCol = b; a = 9; b = 9;
        }
      }
    }
    // start search algorithm
    for (var a=0;a<81;a++) {
      var i = Math.floor(a/9);
      var j = a % 9;
      // all cells we need to change (ones that have 0s)
      if (!board[i][j]) {
        var sqnum = Math.floor(i/3)*3+Math.floor(j/3);
        var cell = 3*(i%3)+(j%3);
        var value = markedup[i][j][0]; // initial value tried for each cell
        var index = 0;
        // if backtracking
        if (vars.goingBack) {
          index = markedup[i][j].indexOf(solved[i][j]); // current index in markup
          // if this is the last value available, keep going back
          if (index + 1 == markedup[i][j].length) {
            // check if this is the first cell in sudoku board
            if (i==freeRow && j==freeCol) {
              console.log('Cannot be solved!');
              return false;
            }
            else { // set cell to 0 and keep going back
              solved[i][j] = 0;
              a = a - 2;
            }
          }
          else { // otherwise start from next value in available
            index++;
            value = markedup[i][j][index];
            vars.goingBack = false;
          }
        }
        // try all values available in markup
        while (index < markedup[i][j].length) {
          // if not valid, increment index and value
          if (!puzzle.checkValid(value,solved,i,j,sqnum,cell)) {
            index++;
            value = markedup[i][j][index];
            if (index >= markedup[i][j].length) { // if no more values, go back!
              if (i==freeRow && j==freeCol) {
                console.log('Cannot be solved!');
                return false;
              }
              solved[i][j] = 0;
              vars.goingBack = true;
              a = a - 2;
            }
          }
          // otherwise, assume the value
          else {
            solved[i][j] = value;
            vars.goingBack = false;
            break;
          }
        }
      }
      // non-zero cells (immutables)
      else if (vars.goingBack) {// keep going back
        a = a - 2;
      }
    }
    return solved;
  },
  checkValid: function(num,solBoard,row,col,sq,cell) {
    // num = number to check; solBoard = partially filled solution board; row = row of cell to check; col = column of cell to check (zero-indexed)
    var asSquares = puzzle.rowsToSquares(solBoard);
    for (var i=0;i<9;i++) {
      if (num == solBoard[row][i] && i!== col) {
        return false;
      }
      if (num == solBoard[i][col] && i!== row) {
        return false;
      }
      if (num == asSquares[sq][i] && i!== cell) {
        return false;
      }
    }
    return true;
  },
  bruteSolve: function(board) {
    vars.goingBack = false;
    var solved = util.clone(board); // start with the board hints
    var freeRow; var freeCol;
    // get first mutable cell
    for (var a=0;a<9;a++) {
      for (var b=0;b<9;b++) {
        if (!board[a][b]) {
          freeRow = a; freeCol = b; a = 9; b = 9;
        }
      }
    }
    // start search algorithm
    for (var a=0;a<81;a++) {
      var i = Math.floor(a/9);
      var j = a % 9;
      // all cells we need to change (ones that have 0s)
      if (!board[i][j]) {
        var sqnum = Math.floor(i/3)*3+Math.floor(j/3);
        var cell = 3*(i%3)+(j%3);
        var value = 1; // initial value tried for each cell
        // if backtracking, increment current cell and check if >9
        if (vars.goingBack) {
          value = solved[i][j] + 1;
          if (value > 9) {
            // check if this is the first cell
            if (i==freeRow && j==freeCol) {
              console.log('Cannot be solved!');
              return false;
            }
            // set cell to 0 and keep going back
            solved[i][j] = 0;
            a = a - 2;
          }
        }
        // try values 1-9
        while (value < 10) {
          // if not valid, increment value
          if (!puzzle.checkValid(value,solved,i,j,sqnum,cell)) {
            value++;
            // if value > 9, go back!
            if (value > 9) {
              solved[i][j] = 0;
              if (i==freeRow && j==freeCol) {
                console.log('Cannot be solved!');
                return false;
              }
              vars.goingBack = true;
              a = a - 2;
            }
          }
          // otherwise, assume the value
          else {
            solved[i][j] = value;
            vars.goingBack = false;
            break;
          }
        }
      }
      // non-zero cells (immutables)
      else if (vars.goingBack) {
        // keep going back
        a = a - 2;
      }
    }
    return solved;
  },
  removeCells: function(board,number) {
    var removed = puzzle.rowsToSquares(board); // get board in square config: removed[square][label]
    for (var i=0;i<removed.length;i++) {
      var toBeRemoved = []; var j=number;
      while (j--) {
        var candidate = util.getRand(0,8);
        if (!util.contains(toBeRemoved,candidate)) {
          toBeRemoved.push(candidate);
          removed[i][candidate] = 0;
        }
        else {
          j++;
        }
      }
    }
    return puzzle.squaresToRows(removed);
  },
  rowsToCols: function(byRows) {
    var byCols = util.clone(byRows);
    var rowFlat = [].concat.apply([], byRows);
    for (var i=0;i<rowFlat.length;i++) {
      var col=i%9;
      var row=Math.floor(i/9);
      byCols[col][row] = rowFlat[i];
    }
    return byCols;
  },
  rowsToSquares: function(byRows) {
    // converts a matrix of rows (board[rowindex][colindex]) to a matrix of squares (board[square#][label#])
    var bySquares = util.clone(byRows);
    var square; var label;
    for (var row=0;row<byRows.length;row++) {
      for (var col=0;col<byRows[row].length;col++) {
        var square = Math.floor(row/3)*3+Math.floor(col/3);
        var label = ((row%3)*3)+(col%3);
        bySquares[square][label] = byRows[row][col];
      }
    }
    return bySquares;
  },
  squaresToRows: function(bySquares) {
    // converts a matrix of squares (board[square#][label#]) to a matrix of rows (board[rowindex][colindex])
    var byRows = util.clone(bySquares);
    for (var sq=0;sq<bySquares.length;sq++) {
      for (var lb=0;lb<bySquares[sq].length;lb++) {
        var row = Math.floor(sq/3)*3+Math.floor(lb/3);
        var col = ((sq%3)*3)+(lb%3);
        byRows[row][col] = bySquares[sq][lb];
      }
    }
    return byRows;
  },
  genNewBoard: function() {
    if (vars.difficulty == 1) {
      var newBoard = puzzle.removeCells(vars.boards.start,4);
    }
    else if (vars.difficulty == 2) {
      var newBoard = puzzle.removeCells(vars.boards.start,5);
      // var newBoard = util.clone(vars.boards.veryEasy);
    }
    else if (vars.difficulty == 3) {
      var newBoard = util.clone(vars.boards.medEasy);
    }
    else if (vars.difficulty == 4) {
      var newBoard = util.clone(vars.boards.mild);
    }
    else if (vars.difficulty == 5) {
      var newBoard = util.clone(vars.boards.medium);
    }
    else if (vars.difficulty == 6) {
      var newBoard = util.clone(vars.boards.hard);
    }
    else if (vars.difficulty == 7) {
      var newBoard = util.clone(vars.boards.evil);
    }
    else if (vars.difficulty == 8) {
      var newBoard = util.clone(vars.boards.impossible);
    }
    newBoard = puzzle.permuteNumbers(newBoard);
    newBoard = puzzle.permuteRowCol(newBoard);
    newBoard = puzzle.permuteRowColGroups(newBoard);
    vars.boards.problem = newBoard;
    return newBoard;
  },
  displayBoard: function(rowMaskedBoard) {
    var sqMaskedBoard = puzzle.rowsToSquares(rowMaskedBoard);
    $(".square").each(function(square) {
      var $cells = $(this).find('.cell');
      var $cellVals = $cells.find('.value');
      for (var i=0;i<9;i++) { // loop through cells in square
        $cells.eq(i).removeClass('valid error');
        var disp = sqMaskedBoard[square][i];
        var $val = $cellVals.eq(i);
        if (disp==0) {
          disp = '';
          $val.removeClass('immutable');
        }
        else {
          $val.addClass('immutable');
        }
        $val.text(disp);
      }
    });
  },
  getBoardFromDisplay: function() {
    var board = [];
    $(".square").each(function(square) {
      var sqArr = [];
      var cellVals = $(this).find('.cell .value');
      for (var i=0;i<9;i++) { // loop through cells in square
        var text = cellVals.eq(i).text();
        if (!text) {text = '0';}
        sqArr.push(text);
      }
      board.push(sqArr);
    });
    return puzzle.squaresToRows(board);
  },
  applyLabels: function() {
    $(".square").each(function(){
      var $labels = $(this).find(".label");
      for (var i=0;i<9;i++){
        $labels.eq(i).text(i+1);
      }
    });
  },
  applyEventHandlers: function() {
    $("#pause").click(function() {
      $(".sudoku").hide();
      $(".numbers-bar").hide();
      util.stopClock();
      vars.isTicking = false;
      $(this).hide();
      $('#resume').show();
    
      // Display the large text
      var resumeText = $("<div>").text("Resume to Continue...").addClass("resume-text");
      $("body").append(resumeText);
    });
    $("#resume").click(function(){
      if (!vars.isTicking) {
        $(".sudoku").show();
        $(".numbers-bar").show();
        util.startClock();
        vars.isTicking = true;
        $(this).hide();
        $('#pause').show();
      }
      $(".resume-text").remove();
    });
    $("#restart").click(function(){
      puzzle.displayBoard(vars.boards.problem);
      util.resetClock();
    });
    $("#solve").click(function(){
      puzzle.displayBoard(vars.boards.solution);
    });
    $("#new").click(puzzle.newPuzzle);
    $('.cell').click(function() {
      $('.cell').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.difficulty').change(function(){
      vars.difficulty = $(this).val();
    })
    $('body').keydown(function(key) {
      if (key.which >= 37 && key.which <= 40) {
        key.preventDefault();
        puzzle.moveSelected(key.which);
      }
    });
    // Picking numbers for cells
    $('body').keypress(function(key){
      var number = key.which - 48;
      puzzle.userPick(number);
    });
    $('.number').click(function(){
      var number = Number($(this).text());
      puzzle.userPick(number);
    });
  },
  userPick: function(number) {
    var $curCell = $(".cell.selected");
    var $curSq = $curCell.parent();
    var cellNum = $curCell.index();
    var colGroup = $curSq.index();
    var srowNum = $curSq.parent().index();
    var row = srowNum*3 + Math.floor(cellNum/3);
    var col = colGroup*3 + (cellNum%3);
    var $target = $curCell.find('.value');
    if (!$target.hasClass('immutable')) {
      // 0-9
      if (number >= 1 && number <= 9) {
        var correct = (number === vars.boards.solution[row][col]);
        if (correct) {
          $curCell.addClass('valid');
          $curCell.removeClass('error');
        }
        else {
          $curCell.addClass('error');
          $curCell.removeClass('valid');
        }
        $target.text(number);
      }
      // backspace / delete
      else if (number == (8-48) || number == (46-48)) {
        $target.text("");
        $curCell.removeClass("valid error");
      }
    }
  },
  moveSelected: function(arrowKey) {
    puzzle.storeDOMviewCells();
    var $cellsInRows = vars.DOMview;
    var $selCell = $(".cell.selected");
    var $curSq = $selCell.parent();
    var cellNum = $selCell.index();
    var colGroup = $curSq.index();
    var srowNum = $curSq.parent().index();
    var row = srowNum*3 + Math.floor(cellNum/3);
    var col = colGroup*3 + (cellNum%3);
    $selCell.removeClass('selected');
    // left
    if (arrowKey == 37) {
      if (col==0) {
        if (row==0) {
          $selCell.addClass('selected');
        }
        else {
          $cellsInRows[row-1][8].addClass('selected');
        }
      }
      else {
        $cellsInRows[row][col-1].addClass('selected');
      }
    }
    // up
    else if (arrowKey == 38) {
      if (row==0) {
        $cellsInRows[row][col].addClass('selected');
      }
      else {
        $cellsInRows[row-1][col].addClass('selected');
      }
    }
    // right
    else if (arrowKey == 39) {
      if (col==8) {
        if (row==8) {
          $selCell.addClass('selected');
        }
        else {
          $cellsInRows[row+1][0].addClass('selected');
        }
      }
      else {
        $cellsInRows[row][col+1].addClass('selected');
      }
    }
    // down
    else if (arrowKey == 40) {
      if (row==8) {
        $cellsInRows[row][col].addClass('selected');
      }
      else {
        $cellsInRows[row+1][col].addClass('selected');
      }
    }
  },
  storeDOMviewCells: function() {
    vars.DOMview = util.clear(util.clone(vars.boards.problem));
    $(".square").each(function(sq) {
      var $cells = $(this).children();
      for (var i=0;i<9;i++) { // loop through cells in square
        var $cell = $cells.eq(i);
        var cellNum = $cell.index();
        var $square = $cell.parent();
        var row = $square.parent().index()*3 + Math.floor(cellNum/3);
        var col = $square.index()*3 + (cellNum%3);
        vars.DOMview[row][col] = $cell;
      }
    });
  },
  newPuzzle: function() {
    var board = puzzle.genNewBoard();
    puzzle.displayBoard(board);
    vars.boards.problem = util.clone(board);
    vars.boards.solution = puzzle.bruteSolve(board);
    util.resetClock();
    util.startClock();
  },
  init: function() {
    puzzle.applyLabels();
    puzzle.newPuzzle();
    puzzle.applyEventHandlers();
  },
  runTests: function() {
    var i = 20;
    var bruteRuns = []; var bruteAvgTime = 0;
    var hybridRuns = []; var hybridAvgTime = 0;
    while (i--) {
      var startBrute = performance.now();
      var board = puzzle.bruteSolve(puzzle.genNewBoard());
      var bruteTime = performance.now() - startBrute;
      bruteRuns.push(bruteTime);
      // var startHybrid = performance.now();
      // var board = hybridSolve(puzzle.genNewBoard());
      // var hybridTime = performance.now() - startHybrid;
      // hybridRuns.push(hybridTime);
    }
    for (var j=0;j<bruteRuns.length;j++) {
      bruteAvgTime += bruteRuns[j];
      // hybridAvgTime += hybridRuns[j];
    }
    bruteAvgTime = bruteAvgTime / bruteRuns.length;
    console.log("Brute force algorithm, avg time: " + bruteAvgTime + " ms");

    var bruteEasyStart = performance.now();
    var hardBruteBoard = puzzle.bruteSolve(vars.boards.empty);
    var bruteEasyTime = performance.now() - bruteEasyStart;
    console.log("Brute force algorithm, empty puzzle: " + bruteEasyTime + " ms");

    var bruteHardStart = performance.now();
    var hardBruteBoard = puzzle.bruteSolve(vars.boards.hard);
    var bruteHardTime = performance.now() - bruteHardStart;
    // var hybridHardStart = performance.now();
    // var hardHybridBoard = hybridSolve(puzzle.genNewBoard());
    // var hybridHardTime = performance.now() - hybridHardStart;
    console.log("Brute force algorithm, difficult puzzle: " + bruteHardTime + " ms");
    // console.log("Hybrid algorithm, difficult puzzle: " + hybridHardTime  + " ms");
  }
}

puzzle.init();
