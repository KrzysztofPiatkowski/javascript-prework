function playGame(playerInput) {

  clearMessages();

  function getMoveName(argFun) {
    if (argFun == '1'){
    return 'kamień';
  } else if (argFun == '2') {
    return 'papier';
  } else if (argFun == '3'){
    return 'nożyce';
  } else {
    return 'nieznany ruch';
  }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /* if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
      computerMove = 'papier';
  } else if (randomNumber == 3) {
      computerMove = 'nożyce';
  } */

  printMessage('Mój ruch to: ' + computerMove);



  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /* if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2') {
    playerMove = 'papier';
  } else if (playerInput == '3'){
    playerMove = 'nożyce';
  } */

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


  /* if (computerMove == playerMove) {
    printMessage('Mamy remis!');
  } else if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
    printMessage('Ty wygrywasz!');
  } else if ((computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier') || (computerMove == 'kamień' && playerMove == 'nożyce')) {
    printMessage('Ja wygrywam!');
  } else {
    printMessage('Wykonałeś ' + playerMove + '! Wpisuj tylko liczby: 1, 2 lub 3');
  } */
}

/* document.getElementById('play-papier').addEventListener('click', function(){
  printMessage('Guzik papier kliknięty');
});

document.getElementById('play-rock').addEventListener('click', function(){
  printMessage('Guzik kamień kliknięty');
});



document.getElementById('play-scissors').addEventListener('click', function(){
  printMessage('Guzik nożyce kliknięty');
});  */

/* function buttonClicked(playerChoice) {
  playGame(playerChoice);
} */

let rock = document.getElementById('play-rock');
let paper = document.getElementById('play-paper');
let scissors = document.getElementById('play-scissors');

rock.addEventListener('click', function () {
  playGame(1); // 1 = kamień
});
paper.addEventListener('click', function () {
  playGame(2); // 2 = papier
});
scissors.addEventListener('click', function () {
  playGame(3); // 3 = nożyce
});

