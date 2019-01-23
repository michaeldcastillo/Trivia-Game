
//------------------------- onload function() -------------------------------------
//object.onload = function(){};
window.onload = function() {
    console.log("window.onload is complete.");
    $("button").on("click",startTrivia);

    // IN THIS BLOCK, WE WILL ONLY DISPLAY A START BUTTON
        // "Start" or "Play"...
};

//------------------------  GLOBAL VARIABLES --------------------------------------
let time = 0;
let intervalId = 0;
let sumCorrect = 0;
let sumWrong = 0;
let sumUnanswered = 0;

//--------------------------  startTrivia() ---------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function startTrivia() {
    console.log("startTrivia() was invoked.");
    //clearAnswers(); //we don't need to clear answers because that is done when the page is refreshed.
    resetCounter();
    startCounter();

    // IN THIS BLOCK, WE WILL DISPLAY THE QUESTIONS
        //Question 1: What is whatever? 
            //Answer 1, Answer 2, Answer n...
        //Question 2: What is something else? 
            //Answer 1, Answer 2, Answer n...

        $("section#Start").hide();
        $("section#Questions").show();
        //$("section#Result").hide();
       

    //------------------------setTimeout()-----------------------------------------
        //setTimeout(function(){ alert("Hello"); }, 3000);
    setTimeout(function() { //this stuff happens when the time has elapsed
        console.log("setTimeout complete."); 
        stopCounter();

        // IN THIS BLOCK, WE WILL DISPLAY THE RESULTS TO THE USER
            //Correct: ?
            //Incorrect: ?
            //Unanswered: ?

        //const myObject = {q1CorrectAnswer:"Answer 3", q2CorrectAnswer:"Answer 1"};
        const correctAnswersArray = ["Brendan Eich","1995","Netscape","JS","React","AngularJS","It is interpreted","Enabling interactive web pages and web applications","A Browser","V8"];
        let max = correctAnswersArray.length;
    
        let userAnswersArray = []; //we define this outsie fo the loop so that it will increment values in the array
        
        for (let i = 0; i < max; i++) {

            let j = i + 1;
            let userAnswer = "";
            
            userAnswer = $("input[type=radio][name=question-"+j+"]:checked").val();
            //console.log("userAnswer = " + userAnswer);

            userAnswersArray.push(userAnswer);
            //console.log("userAnswersArray = ", userAnswersArray);
            
            if(userAnswersArray[i] === correctAnswersArray[i]) {
                //increment correct answer count and update the screen
                console.log("Question " + j + " = Correct");
                reportCorrect();
                
            } else if(userAnswersArray[i] === undefined) {
                //increment no answer count and update the screen
                console.log("Question " + j + " = No Answer");
                reportUnanswered();
                
            } else {
                //increment wrong answer count and update the screen
                console.log("Question " + j + " = Wrong");
                reportWrong();
                
            };
            

        };

        console.log("sumCorrect = " + sumCorrect);
        console.log("sumUnanswered = " + sumUnanswered);
        console.log("sumWrong = " + sumWrong);

        if(sumCorrect >= 9){
            //console.log("A");
            $("#grade").html('<span style="background-color:yellow;">Awesome! You scored an "A".</span><br><br><img src="assets/images/grade-A-75x75.png">');
        } else if(sumCorrect <9 && sumCorrect >= 8) {
            //console.log("B");
            $("#grade").html('<span style="background-color:yellow;">Good job. You scored a "B".</span><br><br><img src="assets/images/grade-B-75x75.png">');
        } else if(sumCorrect <8 && sumCorrect >= 7) {
            //console.log("C");
            $("#grade").html('<span style="background-color:yellow;">Not bad. You scored a "C".</span><br><br><img src="assets/images/grade-C-75x75.png">');
        } else {
            //console.log("D");
            $("#grade").html("<span style='background-color:yellow;'>Hmm, you didn't do so well. Better luck next time!");
        }
      
        //$("section#Start").hide();
        $("section#Questions").hide();
        $("section#Result").show();
        
       // setTimeout(function(){ alert("Hello"); }, 3000);

    }, 60000);

};

//--------------------------------- counter() --------------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function counter() {
    console.log("counter() was invoked.");
    time = time - 1;
    $("#time").text(time); 

};

//------------------------------- startCounter() ------------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function startCounter() {
    console.log("startCounter() was invoked.");
    intervalId = setInterval(counter,1000); //runs count() every second
   
};

//------------------------------- stopCounter() ------------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function stopCounter() {
    console.log("stopCounter() was invoked.");
    clearInterval(intervalId);
    
};

//------------------------------- resetCounter() ------------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function resetCounter() {
    console.log("resetCounter() was invoked.");
    time = 60;
    $("#time").text(time); 
 
};

//------------------------------ reportCorrect(); -----------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function reportCorrect() {
    //increment correct answer count and update the screen
    //console.log("reportCorrect() was invoked.");
    sumCorrect++;
    //console.log("sumCorrect = " + sumCorrect);
    $("#correct").text(sumCorrect); 
    
};

//------------------------------- reportWrong(); ------------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function reportWrong() {
    //increment wrong answer count and update the screen
    //console.log("reportWrong() was invoked.");
    sumWrong++;
    //console.log("sumWrong = " + sumWrong);
    $("#wrong").text(sumWrong); 
    
};

//----------------------------- reportUnanswered(); ---------------------------------------
//function myFunction1() {console.log("This is a simple function.")};
function reportUnanswered() {
    //increment correct answer count and update the screen
    //console.log("reportUnanswered() was invoked.");
    sumUnanswered++;
    //console.log("sumUnanswered = " + sumUnanswered);
    $("#unanswered").text(sumUnanswered); 
 
};
