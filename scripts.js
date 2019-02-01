$(document).ready(function () {


    $('#keyboard-upper-container').hide();

    $(document).keydown(function checkKeyDown(key) { //key down event listener. When a certain key is pressed the code will run.
        if (key.keyCode == '16') {
            $('#keyboard-upper-container').show();
        }
    });
    $(document).keyup(function checkKeyUp(key) { //key up event listener. When a certain key is released the code will run.
        if (key.keyCode == '16') {
            $('#keyboard-upper-container').hide();
        }
    });
    $(document).keypress(function checkKeyPress(key) {
        if (key.keyCode == '33') {
            console.log('!');
        } 
    });











});


