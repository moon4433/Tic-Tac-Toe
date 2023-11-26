let counter = 1;
let turn = 0;

var places = [];

FillBoard();

function CheckWin() {
  //////////Win Checker///////
  if (
    ($(places[0][0]).text() == "X" &&
      $(places[0][1]).text() == "X" &&
      $(places[0][2]).text() == "X") ||
    ($(places[1][0]).text() == "X" &&
      $(places[1][1]).text() == "X" &&
      $(places[1][2]).text() == "X") ||
    ($(places[2][0]).text() == "X" &&
      $(places[2][1]).text() == "X" &&
      $(places[2][2]).text() == "X") ||
    ($(places[0][0]).text() == "X" &&
      $(places[1][0]).text() == "X" &&
      $(places[2][0]).text() == "X") ||
    ($(places[0][1]).text() == "X" &&
      $(places[1][1]).text() == "X" &&
      $(places[2][1]).text() == "X") ||
    ($(places[0][2]).text() == "X" &&
      $(places[1][2]).text() == "X" &&
      $(places[2][2]).text() == "X") ||
    ($(places[0][0]).text() == "X" &&
      $(places[1][1]).text() == "X" &&
      $(places[2][2]).text() == "X") ||
    ($(places[2][0]).text() == "X" &&
      $(places[1][1]).text() == "X" &&
      $(places[0][2]).text() == "X")
  ) {
    turn = 3;
  } ///////////////////////////
  else if (
    ($(places[0][0]).text() == "O" &&
      $(places[0][1]).text() == "O" &&
      $(places[0][2]).text() == "O") ||
    ($(places[1][0]).text() == "O" &&
      $(places[1][1]).text() == "O" &&
      $(places[1][2]).text() == "O") ||
    ($(places[2][0]).text() == "O" &&
      $(places[2][1]).text() == "O" &&
      $(places[2][2]).text() == "O") ||
    ($(places[0][0]).text() == "O" &&
      $(places[1][0]).text() == "O" &&
      $(places[2][0]).text() == "O") ||
    ($(places[0][1]).text() == "O" &&
      $(places[1][1]).text() == "O" &&
      $(places[2][1]).text() == "O") ||
    ($(places[0][2]).text() == "O" &&
      $(places[1][2]).text() == "O" &&
      $(places[2][2]).text() == "O") ||
    ($(places[0][0]).text() == "O" &&
      $(places[1][1]).text() == "O" &&
      $(places[2][2]).text() == "O") ||
    ($(places[2][0]).text() == "O" &&
      $(places[1][1]).text() == "O" &&
      $(places[0][2]).text() == "O")
  ) {
    turn = 4;
  }
  /////////////////////////////
  else if (
    $(places[2][2]).text() != "" &&
    $(places[2][1]).text() != "" &&
    $(places[2][0]).text() != "" &&
    $(places[1][2]).text() != "" &&
    $(places[1][1]).text() != "" &&
    $(places[1][0]).text() != "" &&
    $(places[0][2]).text() != "" &&
    $(places[0][1]).text() != "" &&
    $(places[0][0]).text() != ""
  ) {
    turn = 5;
  }
  if (turn == 3 || turn == 4) {
    for (var i = 0; i < 10; i++) {
      $("a." + i).css({
        "pointer-events": "none",
      });
    }
  }
  if (turn == 5) {
    $(".player-turn").text("Cats");
    $(".announcement").text("Game");
  } else if (turn == 4) {
    $(".player-turn").text("O");
    $(".announcement").text("Wins");
  } else if (turn == 3) {
    $(".player-turn").text("X");
    $(".announcement").text("Wins");
  } else if (turn == 2) {
    $(".player-turn").text("O's");
    $(".announcement").text("Turn");
  } else if (turn == 1) {
    $(".player-turn").text("X's");
    $(".announcement").text("Turn");
  } else if (turn == 0) {
    $(".player-turn").text("X");
    $(".announcement").text("Goes First");
  }
}

function FillBoard() {
  if (turn == 3 || turn == 4) {
    return;
  }
  for (var i = 0; i < 3; i++) {
    places[i] = [];
    for (var j = 0; j < 3; j++) {
      places[i][j] = $("a." + counter);
      counter++;
    }
  }
  if (counter == 10) {
    counter = 1;
  }
  CheckWin();
  setTimeout(FillBoard, 0.1);
}

function CheckBoard(button) {
  if (turn == 2) {
    $(button).text("O");
    turn = 1;
  } else if (turn == 1) {
    $(button).text("X");
    turn = 2;
  } else if (turn == 0) {
    $(button).text("X");
    turn = 2;
  }
  if (button.text() == "X" || button.text() == "O") {
    button.css({
      "pointer-events": "none",
    });
  }
  CheckWin();
}
$(".place").on("click", function () {
  CheckBoard($(this));
});

function GameReset() {
  counter = 1;
  turn = 0;
  places = [];
  for (var i = 0; i < 10; i++) {
    $("a." + i).text("");
    $("a." + i).css({
      "pointer-events": "auto",
    });
  }
  FillBoard();
}
