var numbers = document.querySelector('.numbers');

var answerInp = document.querySelector(".answer");


var true_false = document.querySelector(".true");

var ask1 = document.querySelector(".ask1");

var ask2 = document.querySelector(".ask2");


// it's calcluating answers to be plused if it true
var true_answer = 0;

// if it false the false plused
var false_answer = 0;


// default level is 10
var level = 10;


// default time is 20 second
var time = 20000;

// get random number + level , by defualt is ( 10 )
var num1 = Math.ceil(Math.random()*level)
// get random number + level , by defualt is ( 10 )
var num2 = Math.ceil(Math.random()*level)


// easy level
document.querySelector(".easy").onclick = ()=>{

level = 25;
time = 10000;

// show me the questions 
ask1.innerHTML = num1;
ask2.innerHTML = num2;
answerInp.focus();
}

// miduem level
document.querySelector(".mid").onclick = ()=>{

level = 100;
time = 150000;
ask1.innerHTML = num1;
ask2.innerHTML = num2;
answerInp.focus();
}

// hard level
document.querySelector(".hard").onclick = ()=>{

level = 1500;
time = 350000;
ask1.innerHTML = num1;
ask2.innerHTML = num2;
answerInp.focus();
}


document.querySelector(".smart").onclick = ()=>{

level = 1000000;
time = 480000;
ask1.innerHTML = num1;
ask2.innerHTML = num2;
answerInp.focus();
}

100000.87

// the input that we write the answer in , if we hit the Enter key do the function " answer() "
answerInp.onkeypress = (e)=>{ if (e.key === "Enter") { answer(); }}



function answer(){


// all start with if the answer input are not equal to empty
if (answerInp.value != "") {


// if the answer input are equal to number one plus number two >> true
if (answerInp.value == num1 + num2) {

// write true
true_false.innerHTML = "True";
// make it green colored
true_false.style.color = "green";
// show it
true_false.style.display = "block";

// and thin play over another question
num1 = Math.ceil(Math.random()*level)
num2 = Math.ceil(Math.random()*level)

// write the new question in the asks fields
ask1.innerHTML = num1;
ask2.innerHTML = num2;

// focus at the input
answerInp.focus()

// if it's true the true plused
true_answer++;
}

else{

// if it false write wrong
true_false.innerHTML = "Wrong";
// been red colored
true_false.style.color = "red";
// show it
true_false.style.display = "block";
// focus at the input
answerInp.focus()
// the false plused
false_answer++;
}

// cheating 

if (answerInp.value == 20051212) {

setInterval(  ()=>{ 

answerInp.value = num1 + num2; 

document.querySelector('.answer_button').click(); 


} ,300)
	
}

// finaly make the input field empty
answerInp.value = "";


// time 
setTimeout(()=>{

// the final score displaid
document.querySelector(".final_score").style.display = "block";
// the true answers
document.querySelector(".true_score").innerHTML = true_answer;
// the false answers
document.querySelector(".false_score").innerHTML = false_answer;

// the time by the level


},time)


}





}


// for phones
document.querySelector('.answer_button').onclick = ()=>{ answer(); }

// play again button making the window reload
document.querySelector(".exit_btn").onclick = ()=>{

window.location.reload();
  
}




