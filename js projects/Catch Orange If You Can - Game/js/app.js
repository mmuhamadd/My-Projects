var runner = document.querySelector("#runner");

var arrayOfMargs = [goUp,goDown,goLeft,goRight];

var arrayOfBg = ['red','blue','green','yellow'];

var margLen = 15;

window.onload = function(){
  margInt = setInterval(()=>{
  	arrayOfMargs[Math.floor(Math.random() * arrayOfMargs.length)]();
  },20);

  setInterval(()=>{
	runner.style.marginLeft = `${250}px`;
	runner.style.marginRight = `${50}px`;
	runner.style.marginTop = `${100}px`;
  },1000)

  xn = setTimeout(()=>{
  	clearInterval(margInt);
  	clearInterval(yy);
  	document.getElementById('gameOver').style.display = 'flex'
  	document.querySelector('#gameOver tx').style.backgroundColor = 'darkred'
  	document.querySelector('#gameOver h1').innerHTML = 'You Cant Win This Game'
  },4000)
}


function goUp(){
	runner.style.marginTop = `${margLen}px`;
	margLen = margLen + 5;	
}

function goDown(){
	runner.style.marginBottom = `${margLen}px`;
	margLen = margLen + 5;	
}

function goLeft(){
	runner.style.marginLeft = `${margLen}px`;
	margLen = margLen + 15;
}

function goRight(){
	runner.style.marginRight = `${margLen}px`;
	margLen = margLen + 5;	
}


runner.onclick = function(){
  	clearInterval(margInt);
  	document.getElementById('gameOver').style.display = 'flex'
  	document.querySelector('#gameOver tx').style.backgroundColor = 'lighgreen'
  	document.querySelector('#gameOver h1').innerHTML = 'It Was Beginners Lucky';
  	clearTimeout(xn)
  	clearTimeout(yy)
  }


  document.querySelector("#gameOver button").onclick = function(){
  	window.location.reload();
  }

  yy = setInterval(()=>{
  	document.body.style.backgroundColor = arrayOfBg[Math.floor(Math.random() * arrayOfBg.length)];
  },100)