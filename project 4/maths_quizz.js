const questionjs = document.getElementById("question")
const questionform = document.getElementById("questionform")
const Scorejs = document.getElementById("Score")
let storedanswer;
let score = parseInt(localStorage.getItem("score")) || 0;
// let score = localStorage.getItem("score");
const randomnumber= (min,max) =>{
return Math.floor(Math.random() *(max- min +1) + min);
};
const generatequestion = ( )=>{
    const randomnumber1= randomnumber(1,10);
    const randomnumber2=randomnumber(1,10);
    const questiontype =randomnumber(1,4);
    let question;
    let answer;
    let firstnumber;
    let secondnumber;
    if(randomnumber1 > randomnumber2  && questiontype > 2){
        firstnumber = randomnumber1;
        secondnumber = randomnumber2;
      } else{
        firstnumber = randomnumber2;
        secondnumber = randomnumber1;
      }

    switch(questiontype){
        
        case 1: question = `Q. what is ${firstnumber} added to ${secondnumber}?`;
        answer = firstnumber + secondnumber;
        break;
        case 2: question = `Q. what is ${firstnumber} subtracted  from ${secondnumber}?`;
        answer = firstnumber - secondnumber;
        break;
        case 3: question = `Q. what is ${firstnumber} multiply by ${secondnumber}?`;
        answer = firstnumber * secondnumber;
        break;
        case 4: question = `Q. what is ${firstnumber} divided by ${secondnumber}?`;
        answer = firstnumber / secondnumber;
        break;
        default: question = `Q. what is ${firstnumber} divided by ${secondnumber}?`;
        answer = firstnumber / secondnumber;
        break;
        
    }
    return{question,answer};
}
const showquestion=()=>{
    const {question,answer}= generatequestion() ;
    questionjs.innerText= question;
    Scorejs.innerText= score;
    storedanswer = answer;


};
showquestion();

const checkanswer = (event)=>{
event.preventDefault();
const formdata = new FormData(questionform);
const useranswer = +formdata.get("answer");
if(useranswer === storedanswer){
    score +=1;
}
else{
    score -=1;
}
Scorejs.innerText=score;
localStorage.setItem("score",score)
event.target.reset();
showquestion();
console.log("answer",useranswer)
}
