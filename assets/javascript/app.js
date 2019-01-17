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
    ["What is the name of the dance that combined Goku and Vegeta into one strong fighter?", "Fusion Dance", "The Shimmy", "(c) Combination Dance", " Break Dance", "A"]
];

var audio = new Audio ('assets/images/kamehameha.wav');
var audio2 = new Audio ('assets/images/aura.wav');
var audio3 = new Audio ('assets/images/vegeta.wav');
var audio4 = new Audio ('assets/images/powerup.wav');
var number = 30;

function _(x){ 
    return document.getElementById(x);

};

// function decrement() {
//     number--;
//     $("#timer").html("<h2>" + number + "</h2>");
// };
function renderQuestion() {
    test = _("main-box");
    if (pos >= question.length) {
    //     test.innerHTML = "<h2>You got " +correct+ " of "+questions.length+" questions correct </h2>";
    //     _("#main-box").innerHTML = alert("Test Finished");
    //     pos = 0;
    //     correct = 0;
    //     return false;
    // }

    _("main-box").innerHTML = ("Question " +(pos+1) + " of " +questions.length);
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
       
    }

    pos++; 
    renderQuestion();
    audio1.play(); 
        
}
window.addEventListener("load", renderQuestion, false);

// setTimeout(timeUp, 1000 * 15);
// var timer = $("#timer");

// function timeUp() {
//     console.log("time")
//     $("#timer").append("<h2>Time's Up</h2>");
//     console.log("time is up");
// }


