var selectedBoard;

function clickBoard(event) {
    //On click, update the form to have info reflecting the board clicked on
    document.getElementById("selectedBoard").innerHTML = event.target.children[0].children[0].innerHTML; //Name
    document.getElementById("boardID").value = event.target.id; //ID, will be passed
    document.getElementById("selectButton").disabled = false; //Allow continuation to next step
    console.log(event.target.id);
    console.log(event.target.children[0].children[0].innerHTML);
    console.log(event);
}