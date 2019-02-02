$(document).ready(function () {


    $('#keyboard-upper-container').hide(); //hides uppercase keyboard at page load.

    $(document).keydown(function checkKeyDown(key) { //key down event listener. When the shift key (key code 16) is pressed the code runs and shows the uppercase keyboard.
        if (key.keyCode == '16') {
            $('#keyboard-upper-container').show();
        }
    });
    $(document).keyup(function checkKeyUp(key) { //key up event listener. when shift key is released the uppercase keyboard is hidden again.
        if (key.keyCode == '16') {
            $('#keyboard-upper-container').hide();
        }
    });
    $(document).keypress(function checkKeyPress(key) { //looks for a key press, uses string concatination to look up by id and then applies css to "highlight the selected keys".
        $('#' + key.keyCode).css({ backgroundColor: 'yellow', fontWeight: 'bold'}); 
        
    
        
        
        
        
        
    
    });










});


