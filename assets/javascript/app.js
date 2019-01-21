//set up variables and array
var pos = 0, test, test_status, question, choice, chA, chB, chC, chD, correct, incorrect = 0;
var questions = [
    
    ["Who is the strongest fighter on Dragon Ball Z?", "Gohan","Vegeta", " Goku", " Balma", "C"],
    ["Who is Goku's original teacher?", "Hercule Satan", "Master Roshi", " Whis", " Ox King", "B"],
    ["What is the name of Balma's company?", "Apple", "Microsoft", " Tesla", " Capsule Corp", "D"],
    ["Who traveled from the future to save Goku's life?", "Trunks", "Goten", " Vegeta", " Krillin", "A"],
    ["What is the magical food called that can restore your health?", "Edemame", "Senzu Bean", " Rice Buns", "Sushi", "B"],
    ["How many Dragon Balls are there?", "2", "7", " 151", " 3", "B"],
    ["Who is the prince of the Saiyan race?", "Majin Buu", "Cell", " Vegeta", " Raditz", "C"],
    ["What is the name of the dance that combined Goku and Vegeta into one strong fighter?", "Fusion Dance", "The Shimmy", "Combination Dance", " Break Dance", "A"],
    ["What is the name of Goku's cloud", "Amazon Cloud", "Nimbus", "Cirrus", "Altostratus", "B"],
    ["What technique does Goku use to get from one place to another instantly?", "Instant Transmission", "DeLorean Teleportation", "Time Travel", "Psychosis", "A"], 
];

var audio1 = new Audio ('assets/images/kamehameha.wav');
var audio2 = new Audio ('assets/images/aura.wav');
var audio3 = new Audio ('assets/images/vegeta.wav');
var audio4 = new Audio ('assets/images/powerup.wav');
var startTimerButton;
var time = 5;
var intervalId = 0;
var correct = 0;
var incorrect;

//returning ID reference for ID string
function _(x){ 
    return document.getElementById(x);
    
};


//populates questions, answer choices and 'submit' button onto screen
function renderQuestion() {
    test = _("test2");
    if (pos >= questions.length) {
        $("#test_status").html("<h2> You got " +correct+ " of " +questions.length+" questions correct</h2>");
        $("#test2").html("<h2>You have completed the quiz!</h2>");
        pos = 0;
        correct = 0;
        return false;
    }
    // document.getElementById("time-left").innerHTML = "Answer the most questions in 30 seconds";
    _("test1").innerHTML = ("<h2>" + "Question " +(pos+1) + " of " +questions.length + "</h2>");
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h2>"+question+"</h2>";
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='A'> "+chA+"<br>"; 
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='B'> "+chB+"<br>"; 
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='C'> "+chC+"<br>"; 
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='D'> "+chD+"<br><br>"; 
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

//function to check answer of the quiz
function checkAnswer() {
    choices = document.getElementsByName("#test1");
    for (var i = 0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == question[pos][5]) {
        correct++;
        // $("#test_status").html("<h2> You got " +correct+ " correct</h2>");
       
    } else if (choice != question[pos][5]) {
        incorrect--;
        alert("You wrong");
        audio3.play();
    } 
    pos++; 
    renderQuestion();
    // audio1.play(); 
    
        
}
window.addEventListener("load", renderQuestion, false);


//create the buttons for start, stop, reset
const myStartButton = $("#timer-button").on("click", run);
const myStopButton = $("#pause-button").on("click", stop);
const myReset = $("#reset-button").on("click", reset);


//runs the function for the start, stop, reset buttons
function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        
    }

myStartButton.addEventListener("click", () => {
    myStartButton.time.decrement;

    })

myReset.addEventListener("click", () =>  {
    myReset.reset;
    // console.log(myReset);
});


//function to run down the time.
function decrement() {
    if (myStartButton.on("click", run)) {
        time--;
        $("#time").html("<h2>" + time + "</h2>");
        
    } else if (myStopButton.on("click", stop)){
        stop();
        $("#test2").hide();
        
    };
    
    if (time === 0) {
        $("#test2").hide();
        stop();
        $("#test_status").html("<h2> You got " +correct+ " of " +questions.length+" questions correct</h2>");
        alert("Times Up!");
        audio4.play();
        } 
    }
    
    function stop() {
        clearInterval(intervalId);
    }
    run();


// $("#timer-button").on("click", function() {
//      startTimerButton = setTimeout (function() {
//          alert("Hello");
//     }, 1000);
// });

// setTimeout (fiveSeconds, 5000);



// $("#start").on("click", function() {
//     //  Set the button alert's timeout to run three seconds after the function's called.
//     delayButtonAlert = setTimeout(function() {
//       alert("Alert #2: Called 3 seconds after the start button is clicked.");
//     }, 3000);
//   });


// alert(test.innerHTML = ("<h2> You got " +correct+" of "+question.length+" questions correct</h2>"));


// function decrement() {
//     $('#timer').html("Timer: " + number); 
//     };

// $("#timer-button").on("click", function() {
    
// var number = 30;
// var counter = setInterval(myTimer, 1000); 

// function myTimer(myTimer){

//     if (number === 0 ) {
//         stop();
//         alert("Times Up!");
//         }
    
//         function myTimer() {
//                 number--;
//             if (myTimer <= 0) {
//                 clearInterval(counter);
//                 return;
//             }
//         }
//     }

    // };



// var countDown = setInterval(myTimer, 30000);



