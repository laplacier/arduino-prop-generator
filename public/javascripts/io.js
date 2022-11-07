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

function allowDrop(event) {
    event.preventDefault();
}

function leaveDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dropzone(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text"); //Obtain id name of dragged element
    event.dataTransfer.clearData();

    //Clone the dragged element, remove the description, and insert it into the dropbox
    const clone = document.getElementById(data).cloneNode(true); //Clone
    clone.lastChild.lastChild.remove(); //Remove
    document.getElementById('dropbox_selected').appendChild(clone); //Insert
}