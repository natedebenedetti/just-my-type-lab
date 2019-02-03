$('#keyboard-upper-container').hide(); //hides uppercase keyboard at page load.
$(document).ready(function () { //waits for everything to load before running anything else.

    //space for declaring variables used throughout code.
    const sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentence = $('#sentence').text();
    let margin = 0;
    let next = 0;
    let current = 0;
    let keyCount = 0;


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
        keyCount++;
        console.log(keyCount);
        console.log(sentences[0].length);
        $('#' + key.keyCode).css({ backgroundColor: 'yellow', fontWeight: 'bold' });
        rightWrong();
        addLeftMargin();

//beginning of if statements used to place next sentence.. would have liked to use a loop, but had no control over when sentence was placed.
        if (keyCount == sentences[0].length) { 
            margin = 0;
            $('span.glyphicon').remove();
            $('#yellow-block').css({marginTop: '45px', marginLeft: '' + margin + 'px'});
            margin = margin + 17;
            $('#sentence').append(sentences[1]).append('<br />');
            sentence = sentences[0];
            keyCount = 0;
        }//** */LEFT OFF HERE..... PICK THIS BACK UP**WORKS UNTIL END OF SECOND SENTENCE
//end of if statements for placing next sentence.

        function addLeftMargin() { //moves the yellow box to next expected letter with every key press.
            margin = margin + 17;
            $('#yellow-block').css('margin-left', '' + margin + 'px');
        }

        function rightWrong() { //function used to compare the key pressed with the expected letter to determine if it was keyed correctly.
            let id = $('#' + key.keyCode).text();  // *WITH THIS LOGIC, THE SPACEBAR IS NOT RECOGNIZED AS MATCHING THE BLANK SPACE IN THE EXPETED LETTER FIELD.
            next++; // moves to next letter in string
            $('#target-letter').text(sentence[next]); // keeps changing the letter in the '#target-letter field to the next expected letter.
            
            if (id == sentence[current]) {
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                current++;
            } else {
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>')
                current++;
            }

            //*WHEN FINISHED GO BACK THROUGH CODE LOOKING FOR ANYTING WRITTEN IN CAPS LIKE THIS AND CORRECT ISSUES THEN REMOVE ALL CAPS NOTATION.



        }
    });

});


