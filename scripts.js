$('#keyboard-upper-container').hide(); //hides uppercase keyboard at page load.
$(document).ready(function () { //waits for everything to load before running anything else.

    //space for declaring variables used throughout code.
    const sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentence = $('#sentence').text();
    let margin = 0;
    let next = 0;
    let current = 0;

    alert("When you are ready, press OK to display first line of text.") //alert that populates at page load. Once ok is clicked it appends the first string from the array.
    $('#sentence').append(sentences[0]).append('<br />');
    sentence = sentences[0];

    if ($('#target-letter').text() == '') { //fires once when page first loads to display the first expected letter before any keys are pressed.
        $('#target-letter').append(sentence[next]);
    }
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
        $('#' + key.keyCode).css({ backgroundColor: 'yellow', fontWeight: 'bold' });
        rightWrong();
        addLeftMargin();



        function addLeftMargin() { //moves the yellow box to next expected letter with every key press.
            margin = margin + 17;
            $('#yellow-block').css('margin-left', '' + margin + 'px');
        }

        function rightWrong() { //function used to compare the key pressed with the expected letter to determine if it was keyed correctly.
            let id = $('#' + key.keyCode).text();
            next++; // moves to next letter in string
            $('#target-letter').text(sentence[next]);
            if(id == sentence[current]) {
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                console.log('right');
                current++;
            } else {
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>')
                console.log('wrong');
                current++;
            }
            
            



        }
    });

});


