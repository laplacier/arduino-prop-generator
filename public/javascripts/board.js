var selectedBoard;

function updateBoardInfo() {
    selectedBoard = document.getElementById('boardSelect').value;
    document.getElementById('board_Img').src = "./images/" + selectedBoard.id + ".svg";
    //document.getElementById('board_numDigPins').innerHTML = selectedBoard.numDigPins + "digital pins";
    //document.getElementById('board_numAnPins').innerHTML = selectedBoard.numAnPins + "analog pins";
    //document.getElementById('board_PWM').innerHTML = selectedBoard.PWM.length + "PWM pins";
    console.log(selectedBoard);
}