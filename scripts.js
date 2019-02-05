$('#keyboard-upper-container').hide(); //hides uppercase keyboard at page load.
$(document).ready(function () { //waits for everything to load before running anything else.


    const sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentence = $('#sentence').text();
    let margin = 0;
    let next = 0;
    let current = 0;
    let keyCount = 0;
    let startTime;
    let endTime;
    let numberOfMistakes = 0;



    $(document).keydown(function checkKeyDown(key) { //key down event listener. When the shift key (key code 16) is pressed the code runs and shows the uppercase keyboard.
        if (key.keyCode == '16') {
            $('#keyboard-upper-container').show();

        }
    });
    $(document).keyup(function checkKeyUp(key) { //key up event listener. 
        $('.highlight').removeClass('highlight'); //removes highlight class from any key that recieves the class highlight.

        if (key.keyCode == '16') { //key code for shift key. when shift key is released the uppercase keyboard is hidden again.
            $('#keyboard-upper-container').hide();
        }

    });

    alert("When you are ready, press OK to display first line of text.") //alert that populates at page load. Once ok is clicked it appends the first string from the array.
    $('#sentence').append(sentences[0]).append('<br />');
    sentence = sentences[0];

    $('#target-letter').append(sentence[next]); //places next expected letter in the div with id 'target-letter'

    $(document).keypress(function checkKeyPress(key) { //statement for when to run start()
        keyCount++;
        if (sentence == sentences[0] && keyCount == 1) { // starts the timer.
            start();
        }
        $('#' + key.keyCode).addClass('highlight');
        rightWrong();
        addLeftMargin();
        if (sentence == sentences[4] && keyCount == 49) { //statement for when to run end().
            end();

        }
        //console.log(numberOfMistakes);



        //beginning of if statements used to place next sentence.. would have liked to use a loop, but had no control over when sentence was placed.
        if (sentence == sentences[0] && keyCount == sentences[0].length) {
            next = 0; // starts the counter back over so that it will pick first letter in sentence and display it in div id 'target-letter'.. * TWO LETTERS ARE DISPLAYED AT BEGINNING OF EACH SENTENCE NEED TO FIX
            current = 0;
            margin = 0;
            $('span.glyphicon').remove();
            $('#yellow-block').css({ marginTop: '45px', marginLeft: '' + margin + 'px' });
            margin = margin + 15;
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
            let id = $('#' + key.keyCode).text();  //

            let spaceValue; // creates a variable used for handling spacebar not being recognized as matching the " " in the next expected letter.
            if (sentence[current] === ' ') {
                spaceValue = 'Space';
            } else {
                spaceValue;
            }

            if (id == sentence[current] || id == spaceValue) {
                next++; // moves to next letter in string
                $('#target-letter').text(sentence[next]); // keeps changing the letter in the '#target-letter field to the next expected letter.
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                current++;

            } else {
                next++; // moves to next letter in string
                $('#target-letter').text(sentence[next]); // keeps changing the letter in the '#target-letter field to the next expected letter.
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
                numberOfMistakes++;
                current++;

            }
        }
        //below this line are the functions necessary to calculate words per minute typed and display on screen.
        function wordNumber(str) {
            return str.split(" ").length
        }
 
        function start() { //function that logs the start time.
            startTime = new Date();
        

        }
        function end() { // function that logs the end time and calculates the difference between it and start time.
            let numberOfWords = wordNumber(sentences[0] + sentences[1] + sentences[2] + sentences[3] + sentences[4]) + 4;
            endTime = new Date();
            let timeDiff = endTime -= startTime;
            timeDiff /= 60000;

            let minutes = Math.round(timeDiff);
            
            wordsPerMinute();

            function wordsPerMinute() { //
                let wpm = numberOfWords / minutes - 2 * numberOfMistakes;
                alert(wpm + "words per minute! Would you like to play again?");
                document.location.reload();
            }

        }
    });
    //*WHEN FINISHED GO BACK THROUGH CODE LOOKING FOR ANYTING WRITTEN IN CAPS LIKE THIS AND CORRECT ISSUES THEN REMOVE ALL CAPS NOTATION.
});


