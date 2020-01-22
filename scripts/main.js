/*
Variable definitions
*/
var setupUI = null;

/*
Function definitions
*/
function main() {
    console.log("Script - Main has been called")

    setupUI();
}

/*
Assign value to pre-defined variables
*/
setupUI = function () {
    console.log("UI setup");
}

/*
main called
*/
main();