var inputsSelected = ['None', 'None'];

function inputHandler() {
    var inputVal = document.getElementById("input").value;
    document.getElementById("inputText").innerHTML = "You selected: " + inputVal;

    /*
    Create a new select if:
    1) The input selected was not None
    2) The select changed was the last one in the list 
    */
}