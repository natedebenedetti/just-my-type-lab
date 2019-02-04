$('#keyboard-upper-container').hide(); //hides uppercase keyboard at page load.
$(document).ready(function () { //waits for everything to load before running anything else.

    
    const sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentence = $('#sentence').text();
    let margin = 0;
    let next = 0;
    let current = 0;
    let keyCount = 0;
    let space = ''; //TRYING TO USE THIS TO CORRECT ISSUE WITH NOT RECOGNIZING THAT THE SPACE BAR IS THE SAME AS THE BLANK SPACE IN THE NEXT EXPECTED LETTER FIELD.

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

    alert("When you are ready, press OK to display first line of text.") //alert that populates at page load. Once ok is clicked it appends the first string from the array.
    $('#sentence').append(sentences[0]).append('<br />');
    sentence = sentences[0];

    $('#target-letter').append(sentence[next]); //places next expected letter in the div with id 'target-letter'

    $(document).keypress(function checkKeyPress(key) { //keypress event listener.
        keyCount++;
        $('#' + key.keyCode).css({ backgroundColor: 'yellow', fontWeight: 'bold' }); // GIVES HIGHLIGHT EFFECT TO KEY WHEN PRESSED, BUT STAYS THAT WAY UNTIL SENTENCE IS FINISHED.. NEED TO CORRECT THIS.
        rightWrong();
        addLeftMargin();
        

        //beginning of if statements used to place next sentence.. would have liked to use a loop, but had no control over when sentence was placed.
        if (sentence == sentences[0] && keyCount == sentences[0].length) {
            next = 0; // starts the counter back over so that it will pick first letter in sentence and display it in div id 'target-letter'.. * TWO LETTERS ARE DISPLAYED AT BEGINNING OF EACH SENTENCE NEED TO FIX
            current = 0;
            margin = 0;
            $('span.glyphicon').remove();
            $('#yellow-block').css({ marginTop: '45px', marginLeft: '' + margin + 'px' });
            margin = margin + 17;
            $('#sentence').append(sentences[1]).append('<br />');
            keyCount = 0;
            sentence = sentences[1];
            $('#target-letter').append(sentence[next]);
            

        } else if (sentence == sentences[1] && keyCount == sentences[1].length) {
            next = 0;
            current = 0;
            margin = 0;
            $('span.glyphicon').remove();
            $('#yellow-block').css({ marginTop: '80px', marginLeft: '' + margin + 'px' });
            margin = margin + 17;
            $('#sentence').append(sentences[2]).append('<br />');
            keyCount = 0;
            sentence = sentences[2];
            $('#target-letter').append(sentence[next]);

        } else if (sentence == sentences[2] && keyCount == sentences[2].length) {
            next = 0;
            current = 0;
            margin = 0;
            $('span.glyphicon').remove();
            $('#yellow-block').css({ marginTop: '115px', marginLeft: '' + margin + 'px' });
            margin = margin + 17;
            $('#sentence').append(sentences[3]).append('<br />');
            keyCount = 0;
            sentence = sentences[3];
            $('#target-letter').append(sentence[next]);

        } else if (sentence == sentences[3] && keyCount == sentences[3].length) {
            next = 0;
            current = 0;
            margin = 0;
            $('span.glyphicon').remove();
            $('#yellow-block').css({ marginTop: '150px', marginLeft: '' + margin + 'px' });
            margin = margin + 17;
            $('#sentence').append(sentences[4]).append('<br />');
            keyCount = 0;
            sentence = sentences[4];
            $('#target-letter').append(sentence[next]);
        }
        //end of if statements for placing next sentence.

        function addLeftMargin() { //moves the yellow box to next expected letter with every key press.
            margin = margin + 17;
            $('#yellow-block').css('margin-left', '' + margin + 'px');
        }

        function rightWrong() { //function used to compare the key pressed with the expected letter to determine if it was keyed correctly.
            let id = $('#' + key.keyCode).text();  // *WITH THIS LOGIC, THE SPACEBAR IS NOT RECOGNIZED AS MATCHING THE BLANK SPACE IN THE EXPETED LETTER FIELD.

            if (id == sentence[current] || space == sentence[current]) {
                next++; // moves to next letter in string
                $('#target-letter').text(sentence[next]); // keeps changing the letter in the '#target-letter field to the next expected letter.
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                current++;
                
            } else {
                next++; // moves to next letter in string
                $('#target-letter').text(sentence[next]); // keeps changing the letter in the '#target-letter field to the next expected letter.
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>')
                current++;
            }

            //*WHEN FINISHED GO BACK THROUGH CODE LOOKING FOR ANYTING WRITTEN IN CAPS LIKE THIS AND CORRECT ISSUES THEN REMOVE ALL CAPS NOTATION.



        }
    });

});


