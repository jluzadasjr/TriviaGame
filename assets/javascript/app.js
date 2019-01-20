//  Simple Timer Solution
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
var time = 30;
var intervalId = 0;
var correct = 0;


function _(x){ 
    return document.getElementById(x);
    
};


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
    test.innerHTML = "<br><br><br><br><br><br>"+"<h4>"+question+"</h4>";
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='A'> "+chA+"<br>"; 
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='B'> "+chB+"<br>"; 
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='C'> "+chC+"<br>"; 
    test.innerHTML += "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='D'> "+chD+"<br><br>"; 
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
} 

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][4]) {
        correct++;
        
       
    } else if (choice != questions[pos][4]) {
        incorrect--;
        
    }

    pos++; 
    renderQuestion();
    // audio1.play(); 
    
        
}
window.addEventListener("load", renderQuestion, false);

$("#timer-button").on("click", run);
$("#pause-button").on("click", stop);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

function decrement() {
        time--;
    
        $("#time").html("<h2>" + time + "</h2>");
    
        if (time === 0) {
            stop();
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



