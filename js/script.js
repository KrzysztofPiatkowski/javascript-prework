{ function playGame(playerInput) {

  clearMessages();

  function getMoveName(moveNumber) {
    if (moveNumber == '1'){
    return 'kamień';
  } else if (moveNumber == '2') {
    return 'papier';
  } else if (moveNumber == '3'){
    return 'nożyce';
  } else {
    return 'nieznany ruch';
  }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult (argComputerMove, argPlayerMove) {
    if (argComputerMove == argPlayerMove) {
    printMessage('Mamy remis!');
  } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
    printMessage('Ty wygrywasz!');
  } else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
    printMessage('Ja wygrywam!');
  } else {
    printMessage('Wykonałeś ' + argPlayerMove + '! Wpisuj tylko liczby: 1, 2 lub 3');
  }
  }

  displayResult(computerMove, playerMove);
}

const rock = document.getElementById('play-rock');
const paper = document.getElementById('play-paper');
const scissors = document.getElementById('play-scissors');

rock.addEventListener('click', function () {
  playGame(1);
});
paper.addEventListener('click', function () {
  playGame(2);
});
scissors.addEventListener('click', function () {
  playGame(3);
});
}