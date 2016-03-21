// ----------------------------------------
// View
// ----------------------------------------


// init(onClick)
// accepts an onClick callback function as a parameter
// this callback should be used to send the index of the clicked square to the controller (loosely couples your view and controller)
// initializes any attributes on HTML .square elements needed to identify them (data attributes are your friend)
// sets up your click event listeners
// updateSquares(dataSquares)
// accepts an array of integers as the data representation of the squares
// correctly renders the squares applying an active class to those with an active value
// updateScore(points)
// accepts a points parameter
// updates the view's scoreboard with the passed value
var JC = JC || {};

var JC.view = (function($){
  
  var $game = $('#game');
  var $squares = $('.square');
  var $score = $('#score');

  function _updateSquares(dataSquares) {

    for (var i = 0; i < dataSquares.length; i++) {
      var $square = $squares.eq(i);
      var dataSquare = _dataSquares[i];
      if (dataSquare === 0) {
        $square.addClass('active');
      }
    }
  }

  function _updateScore(score) {
    $score.text(score);
  }

  function _squareClick() {

    $game.click($squares, function(e) {
      var $square = $(e.target);
      var index = parseInt($square.attr('data-id'));
      return index;
    }
  }

  function _idSquares() {
    $squares.each(function(index, element) {
       var $element = $(element);
       $element.attr('data-id', index);
    });    
  }

  function _init(onClick) {
    _idSquares();
    var index =  _squareClick();
    return index;
  };


  return {
    init: _init,
    updateSquares: _updateSquares,
    updateScore: _updateScore,
  }

})(jQuery);

//JC.view;

