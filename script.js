let qno = 1;
let score = 0;
let answer = 0;

loadQuestion();

function loadQuestion() {
    document.getElementById("result").innerHTML = "";

    if (qno == 1) {
        document.getElementById("question").innerHTML = "Capital of India?";
        document.getElementById("opt1").innerHTML = "Delhi";
        document.getElementById("opt2").innerHTML = "Mumbai";
        document.getElementById("opt3").innerHTML = "Kolkata";
        document.getElementById("opt4").innerHTML = "Chennai";
        answer = 1;
    }
    else if (qno == 2) {
        document.getElementById("question").innerHTML = "2 + 2 = ?";
        document.getElementById("opt1").innerHTML = "3";
        document.getElementById("opt2").innerHTML = "4";
        document.getElementById("opt3").innerHTML = "5";
        document.getElementById("opt4").innerHTML = "6";
        answer = 2;
    }
    else if (qno == 3) {
        document.getElementById("question").innerHTML = "Sun rises in?";
        document.getElementById("opt1").innerHTML = "West";
        document.getElementById("opt2").innerHTML = "North";
        document.getElementById("opt3").innerHTML = "East";
        document.getElementById("opt4").innerHTML = "South";
        answer = 3;
    }
    else {
        document.getElementById("question").innerHTML = "Quiz Finished!";
        document.getElementById("score").innerHTML = "Final Score: " + score;
        document.getElementById("opt1").style.display = "none";
        document.getElementById("opt2").style.display = "none";
        document.getElementById("opt3").style.display = "none";
        document.getElementById("opt4").style.display = "none";
        document.querySelector(".next-area button").style.display = "none";
    }
}

function check(choice) {
    if (choice == answer) {
        document.getElementById("result").innerHTML = "Correct";
        score++;
        setTimeout(next, 1000);
    } else {
        document.getElementById("result").innerHTML = "Wrong";
    }
    document.getElementById("score").innerHTML = score;
}

function next() {
    qno++;
    loadQuestion();
}
