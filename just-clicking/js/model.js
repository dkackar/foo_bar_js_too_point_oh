// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};


var JC.model = (function(){
  
  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  var _score = 0;

  function getScore() {
    return _score;
  };

  function processSquareClick(index) {
    if (_dataSquare[index] === 1) {
      _score += 10 
      _dataScore[index] = 0;
    }
  };

  function getSquares() {
    return _dataSquares;
  }

  function activateRandomSquare() {
    var indexes = _.times(_dataSquares.length, function(index) {
      return index;
    });

    indexes = _.shuffle(indexes);

    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i];
      var dataSquare = _dataSquares[index];
      if (dataSquare === 0) {
        _dataSquares[index] = 1;
        break;
      }
    }
  }

  return {
    getSquares: getSquares,
    getScore: getScore,
    processSquareClick: processSquareClick
  }

})();

//JC.model;
