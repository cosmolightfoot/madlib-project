
function madLib() {
    
    
    //links string input to js variables
    var adjective1 = document.getElementById('adjective-1').value;
    var adjective2 = document.getElementById('adjective-2').value;
    var adjective3 = document.getElementById('adjective-3').value;
    var adjective4 = document.getElementById('adjective-4').value;
    var adjective5 = document.getElementById('adjective-5').value;
    var adjective6 = document.getElementById('adjective-6').value;
    var adjective7 = document.getElementById('adjective-7').value;
    var adjective8 = document.getElementById('adjective-8').value;
    var adjective9 = document.getElementById('adjective-9').value;
    var pluralNoun1 = document.getElementById('plural-noun-1').value;
    var pluralNoun2 = document.getElementById('plural-noun-2').value;
    var pluralNoun3 = document.getElementById('plural-noun-3').value;
    var pluralNoun4 = document.getElementById('plural-noun-4').value;
    var pluralNoun5 = document.getElementById('plural-noun-5').value;
    var noun1 = document.getElementById('noun-1').value;
    var noun2 = document.getElementById('noun-2').value;
    var noun3 = document.getElementById('noun-3').value;
    var noun4 = document.getElementById('noun-4').value;
    var personInRoom = document.getElementById('person-in-room').value;
    console.log(adjective1, adjective2, pluralNoun1, pluralNoun2, adjective3, noun1, noun2, pluralNoun3, adjective4, personInRoom, adjective5, noun3, adjective6, noun4, pluralNoun4, pluralNoun5, adjective7, adjective8, adjective9);
    
    //sets up a condition where blank input fields trigger an error messsage rather than cue a blank form template
    if(adjective1.length === 0 || adjective2.length === 0 || adjective3.length === 0 || adjective4.length === 0 || adjective5.length === 0 || adjective6.length === 0 || adjective7.length === 0 || adjective8.length === 0 || adjective9.length === 0 || pluralNoun1.length === 0 || pluralNoun2.length === 0 || pluralNoun3.length === 0 || pluralNoun4.length === 0 || pluralNoun5.length === 0 || noun1.length === 0 || noun2.length === 0 || noun3.length === 0 || noun4.length === 0 || personInRoom.length === 0) {
    alert("ERROR!!! Please Fill Out the form to MAAAADLIIIIB!!!");
    }

    else {
    
    //sends string value to madlib body
    document.getElementById('word-1').innerHTML = adjective1;
    document.getElementById('word-2').innerHTML = adjective2;
    document.getElementById('word-3').innerHTML = pluralNoun1;
    document.getElementById('word-4').innerHTML = pluralNoun2;
    document.getElementById('word-5').innerHTML = adjective3;
    document.getElementById('word-6').innerHTML = noun1;
    document.getElementById('word-7').innerHTML = noun2;
    document.getElementById('word-8').innerHTML = pluralNoun3;
    document.getElementById('word-9').innerHTML = adjective4;
    document.getElementById('word-10').innerHTML = personInRoom;
    document.getElementById('word-11').innerHTML = adjective5;
    document.getElementById('word-12').innerHTML = noun3;
    document.getElementById('word-13').innerHTML = adjective6;
    document.getElementById('word-14').innerHTML = noun4;
    document.getElementById('word-15').innerHTML = pluralNoun4;
    document.getElementById('word-16').innerHTML = pluralNoun5;
    document.getElementById('word-17').innerHTML = adjective7;
    document.getElementById('word-18').innerHTML = adjective8;
    document.getElementById('word-19').innerHTML = adjective9;
    }
}
//adds word randomizer functionality
function randomizer() {
    //scales random selection from word arrays
    var adjectiveSelector1 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector2 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector3 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector4 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector5 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector6 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector7 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector8 = Math.floor(Math.random() * allAdjectives.length);
    var adjectiveSelector9 = Math.floor(Math.random() * allAdjectives.length);
    var pluralNounSelector1= Math.floor(Math.random() * allPluralNouns.length);
    var pluralNounSelector2= Math.floor(Math.random() * allPluralNouns.length);
    var pluralNounSelector3 = Math.floor(Math.random() * allPluralNouns.length);
    var pluralNounSelector4 = Math.floor(Math.random() * allPluralNouns.length);
    var pluralNounSelector5 = Math.floor(Math.random() * allPluralNouns.length);
    var nounSelector1 = Math.floor(Math.random() * allNouns.length);
    var nounSelector2 = Math.floor(Math.random() * allNouns.length);
    var nounSelector3 = Math.floor(Math.random() * allNouns.length);
    var nounSelector4 = Math.floor(Math.random() * allNouns.length);
    var personInRoomSelector = Math.floor(Math.random() * allNames.length);
    
    //fills in the text input fields with words from the array
    document.getElementById('adjective-1').value = allAdjectives[adjectiveSelector1];
    document.getElementById('adjective-2').value = allAdjectives[adjectiveSelector2];
    document.getElementById('adjective-3').value = allAdjectives[adjectiveSelector3];
    document.getElementById('adjective-4').value = allAdjectives[adjectiveSelector4];
    document.getElementById('adjective-5').value = allAdjectives[adjectiveSelector5];
    document.getElementById('adjective-6').value = allAdjectives[adjectiveSelector6]
    document.getElementById('adjective-7').value = allAdjectives[adjectiveSelector7];
    document.getElementById('adjective-8').value = allAdjectives[adjectiveSelector8];
    document.getElementById('adjective-9').value = allAdjectives[adjectiveSelector9];
    document.getElementById('plural-noun-1').value = allPluralNouns[pluralNounSelector1];
    document.getElementById('plural-noun-2').value = allPluralNouns[pluralNounSelector2];
    document.getElementById('plural-noun-3').value = allPluralNouns[pluralNounSelector3];
    document.getElementById('plural-noun-5').value = allPluralNouns[pluralNounSelector4];
    document.getElementById('plural-noun-4').value = allPluralNouns[pluralNounSelector5];
    document.getElementById('noun-1').value = allNouns[nounSelector1];
    document.getElementById('noun-2').value = allNouns[nounSelector2];
    document.getElementById('noun-3').value = allNouns[nounSelector3];
    document.getElementById('noun-4').value = allNouns[nounSelector4];
    document.getElementById('person-in-room').value = allNames[personInRoomSelector];
}
