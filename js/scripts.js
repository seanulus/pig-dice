$(document).ready(function() {
  $("#roll").click(function() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
    $(".diceNumber").text(diceRoll);
    if (diceRoll === 1) {
      $("#roll").hide();
    }

  });
});
