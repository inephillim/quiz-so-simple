const questions = [
  {
    question: "who is the most important and helpful person in the world?",
        answers:[
            {text:"family",correct: false},
            {text:"President Trump",correct: false},
            {text:"your wife",correct: true},
            {text:"Elon musk",correct: false},

    ]

  },{
    question: "what is your wife's favorite flower?",
        answers:[
            {text:"red rose",correct: false},
            {text:"sunflower",correct:false},
            {text:"white rose",correct: true},
            {text:"blue jasmine",correct: false},

    ]

  },{question: "when was your wife born?",
    answers:[
            {text:"28 aban 82",correct: false},
            {text:"30 Aban 81",correct: true},
            {text:"30 Aban 82",correct: false},
            {text:"27 Aban 81",correct: false},

    ]
}
,{
    question: "what is the best way to comfort your wife?",
    answers:[
            {text:"to hold her and listen to her",correct: false},
            {text:"to buy her gifts and ghagha",correct: false},
            {text:"to cook her favorite meal",correct: false},
            {text:"all of them",correct: true},

    ]
}
,{
    question: "Which is your wife's signature perfume?",
    answers:[
            {text:"diamond rose versache",correct: false},
            {text:"evidence",correct: true},
            {text:"scandal victoria secret",correct: false},
            {text:"femme fatal",correct: false},

    ]
}
]


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0 ;
let currentScore = 0 ;
function startQuiz(){
    currentQuestionIndex = 0;
    currentScore = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question 

    

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;


        }
        
        button.addEventListener("click",selectAnswer)

    })
}
function resetState(){
nextButton.style.display = "none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
}


}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        currentScore++;

    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore(){
    resetState();  
    questionElement.innerHTML =`Your score is ${currentScore} out of ${questions.length}`;
    nextButton.innerHTML = "Play again!"
    nextButton.style.display ="block"
    
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();
        }

}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
} )
startQuiz();






