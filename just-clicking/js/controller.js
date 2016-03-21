// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

var JC.controller = (function(){

  function init() {

    setInterval(function() {
      JC.model.activateRandomSquare();
    }, 1000);
  }
 
  return {
    init: init
  }
})();

//JC.controller;


