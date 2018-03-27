function PlayerScore(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

PlayerScore.prototype.addToCurrent = function() {
  this.currentScore += this.diceRoll;
}



$(document).ready(function() {
  var player1 = new PlayerScore();
  var player2 = new PlayerScore();
  $("#roll,#roll1").click(function() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    addToCurrent(diceRoll);


    if (diceRoll === 1) {
      $("#roll").hide();
    }
  });
  $("#hold,#hold1").click(function() {
    sumArray.length = 0;
    $("#roll").show();
  });
});
