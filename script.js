
let questions = [
    {
        question : "Do you have cough?",
        point: 1
    },
    {
        question : "Do you have colds?",
        point: 1
    },
    {
        question : "Are you having Diarrhea?",
        point: 1
    },
    {
        question : "Do you have sore throat?",
        point: 1
    },
    {
        question : "Are you experiencing MYALGIA or Body Aches?",
        point: 1
    },
    {
        question : "Do you have a headach?",
        point: 1
    },
    {
        question : "Do you have fever(Temperature 37.8 C and above)?",
        point: 1
    },
    {
        question : "Are you having difficulty breathing?",
        point: 2
    },
    {
        question : "Are you experiencing Fatigue?",
        point: 2
    },
    {
        question : "Have you traveled recently during the past 14 days?",
        point: 3
    },
    {
        question : "Do you have travel history to a COVID-19 infected area?",
        point: 3
    },
    {
        question : "Do you have direct contact or is taking care of positive COVID-19 patient?",
        point: 3
    }
];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

shuffle(questions);


let pointScored = 0;
let quesIndex = 0;
let score = 0;


let quesArr = questions.map(el => el.question);
let scoreArr = questions.map(el => el.point);

console.log(scoreArr, quesArr);

// console.log(quesArr);

let displayScore = () => {
    document.getElementById("score").innerHTML = "Point :"+ score;  
}


let display = () => {
    document.getElementById("question").innerHTML = quesArr[quesIndex];
}

let showModal = () => {
        console.log(`Score: ${score}`);
        

        if (score <= 3) {
            console.log(score, "TOP");
            document.getElementById("message").innerHTML = "May be stress related and observe. "
        }else if (score>3 && score<=7){
            console.log(score, "MID");

            document.getElementById("message").innerHTML = "Hydrate properly and proper personal hygiene.\n Observe and Re-evaluate after 2 days."
        }else{
            console.log(score, "BOT");

            document.getElementById("message").innerHTML = "Seek a consultation with Doctor"
        }
        
        $('#ModalCenter').modal('show');
}
var progressBar = document.getElementById("myBar");
let width = 0;
let incrementProgressBar = () => {
    console.log("QUESTION INDEX: " + quesIndex, "Question total: ", quesArr.length);
    width = (quesIndex / quesArr.length) * 100;
    // if(width!==0) {
    progressBar.style.width = width + "%";
    progressBar.innerHTML = Math.floor(width) + "%";
    // }
}
let btn_yes = () => {
    if(quesIndex < quesArr.length) {
        quesIndex++;
        incrementProgressBar();
        score += scoreArr[quesIndex -1];
        console.log(score, quesIndex)
    
        if(quesIndex >= 0 && quesIndex <= quesArr.length)
        {
            console.log(scoreArr[quesIndex]);
            
            displayScore();
        }
    
    
        if(quesIndex >= 0 && quesIndex < quesArr.length)
        {       
            display();
        }
        else 
        {
            // setTimeout(function(){
            //     if(quesIndex >= 0 && quesIndex <= quesArr.length)
                document.getElementById("modal-title").innerHTML = `Result: ${score}`
                showModal();
            // },500) 
        }
    }
}

let btn_no = () => {
    if(quesIndex < quesArr.length) {

        quesIndex++;
        incrementProgressBar();
        if(quesIndex >= 0 && quesIndex <= quesArr.length)
        {        
            displayScore();
        }

        if(quesIndex >= 0 && quesIndex < quesArr.length)
        {   
            score = score;  
            display();
        }
        else
        {
            // setTimeout(function(){
            //     if(quesIndex >= 0 && quesIndex <= quesArr.length)
                document.getElementById("modal-title").innerHTML = `Result: ${score}`
                showModal();
            // },500) 
            
        }
    }
}

let btn_reset = () => {
    quesIndex=0;
    score = 0;
    width = 0;
    incrementProgressBar();
    display();
    displayScore();
}
//To Display First Element
display();










