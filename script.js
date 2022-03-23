//var word = "house";

//console.log(word.split("")[1]);

//var wordSplit = word.split("");

//console.log(wordSplit.join(" 1 "));

//var wordJoin = wordSplit.join("");
//console.log(wordJoin);

//var arr = ["hello", "how", "are", "you"];

//console.log(arr);
//var arrJoin = arr.join(" ")
//console.log(arrJoin);

//console.log(`The word ${word} has ${wordSplit.length} letters.`)

//var rra = ["a", "b", "c", "d"];
//console.log(rra[1]);

//for (var i = 0; i < wordSplit.length; i++) {
//    console.log(`This is letter ${wordSplit[i]}`)
//    if(wordSplit[i] == "e") {
//        console.log(`The word ${word} has letter 'e'.`)
//    }
//}

//var userLetter = prompt("Enter a letter from a to d");
//for (var i = 0; i < rra.length; i++){
//    console.log(`I will stop at letter ${userLetter}.`); break;
    
//}

//console.log

//console.log("Exit.")

// part 1

//alert("Welcome to 'Letter Finder'. Enter a word, and then a letter, and I can tell you if the word has that letter, and how many times that letter is being used.");

//var word = prompt("Enter any word");

//var letter = prompt("Enter any letter")

//var wordSplit = word.split("");

//var a = 0

//for (var i = 0, a = 0; i < word.length; i++) {
    
//    if (wordSplit[i] == letter) {
//        a++
//    }
        
//}

//if (a > 0) {alert(`The letter ${letter} is used in the word ${word} ${a} time.`)
//} else {
//    alert (`The letter ${letter} is not being used in the word ${word}`)
//}

//var greetings = [`Hello!`, `How are you?`, `Nice to see you again`, `I didnt see you there. Welcome!`, `Hola!`]

//var ran = Math.floor(Math.random() * greetings.length)

//console.log(ran)
//console.log(greetings[ran])


//console.log(Math.floor(Math.random() *11 ))

//console.log(Math.floor(Math.random() *11 ))



//var ran2 = Math.floor(Math.random() * 10) + 1

//console.log(ran2)
//console.log(ran2)

//console.log(Math.floor(Math.random() * 10) + 1)
//console.log(Math.floor(Math.random() * 10) + 1)

// part 2

//alert ("Welcome to `Guess The Number`. I will think of a number from 1 to 10, and you will try to guess the correct number. The one I thought about. Just for clarfication.")

//do {
//    var number = prompt(`Great. What number am I thinking of?`)
//    console.log(number)
//
//    var numbers = Math.floor(Math.random() * 11) 

//    if (number == numbers) {
//        var A1 = Number(alert(`You won! I picked ${numbers}`))
//    } else {
//        var A1 = Number(alert(`You lost I got ${numbers} and you got ${number}`))
//    }

//    var P2 = prompt(`Will you like to play again? Type Y for yes N for no.`)
//    console.log(P2)
//} while (P2 != "N")
//alert(`Thank you for playing!`);





// part 3


alert(`Welcome to 20! This is competition to see
 which player gets closer to the number 20. You are 
 going to be playing agains the computer. \n\n You will draw from 1 to 10.
 The computer will stop at 16. \n\n Pay attention to the screen to see what your total is, and if you need another number, press "y".`)

alert(`Now... Its computer's turn.`)


// computer number
do {
    compc = 0;
    userc = 0;
    do {

        var numbers = Math.floor(Math.random() * 10 ) + 1;
        compc = compc + numbers;
        alert(`Computer got ${numbers}. Computer new total is ${compc}`)


    } while (compc <= 16)


    alert("Now its your turn")

    do { 
        var numbers = Math.floor(Math.random() * 10 ) + 1;
        userc = userc + numbers;
        alert(`Your new number is ${numbers}. Your totat is ${userc}`)
        var p1 = prompt(`Would you like to go again? y = Yes. n = No`)
        
    } while ((userc <= 19) && (p1 == "y"))

    alert(`Computer: ${compc}. Human: ${userc}.`)

    if (compc <= userc) {
        alert(` You won`)
    } else{
        alert(` You lost `)
    }

    var p2 = prompt(`Would you like to play again? y = yes n = no`)

} while (p2 == "y") 
   






