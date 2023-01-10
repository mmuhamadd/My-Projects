var nums = `0123456789`;

var letts = `!qwertyuiop[]asdfghjkl:;'zxcvbnm,.?&+/*{}+_=-<>~#$%`;

var enBtn = document.querySelector(".en_lan");

var arBtn = document.querySelector(".ar_lan");

var input = document.querySelector("#input");

var xx = '';

window.onload= function(){
	loadKeys();
	type();
	lan();
	deleteVal();
}



function loadKeys() {
   loadNums();
   loadletts();
}


function loadNums(){
for(let i = 0; i < nums.length; i++){

		    key = document.createElement("button");    	
    		key.classList.add("key")
    		key.classList.add("letKey");
	        key.innerHTML = nums[i];
	        document.querySelector(".numsContainer").appendChild(key);
}
}


function loadletts(){
for(let i = 0; i < letts.length; i++){

		    key = document.createElement("button");    	
    		key.classList.add("key");
    		key.classList.add("letKey");
	        key.innerHTML = letts[i];
	        document.querySelector(".lettsContainer").appendChild(key);
}
}

function lan() {
arBtn.onclick = function(){

	
document.querySelector(".lettsContainer").innerHTML = '';

letts = `!ضصثقفغعهخحجد[]شسيبلاتنمكط:;'ئءؤرلاىةوزظ,.?&+/*{}+_=-<>~#$%`;	

loadletts();
type();
}


enBtn.onclick = function(){

	
document.querySelector(".lettsContainer").innerHTML = '';

letts = `!qwertyuiop[]asdfghjkl:;'zxcvbnm,.?&+/*{}+_=-<>~#$%`;

loadletts();
type();
}


}



function type(){
   
letKeys = document.querySelectorAll(".letKey");

	for(let i = 0; i < letKeys.length; i++){
		letKeys[i].onclick = function(){
			document.querySelector("#input").value += letKeys[i].innerHTML;
			xx = letKeys[i].innerHTML;
		}
	}
}


function deleteVal() {

document.querySelector(".deleteKey").onclick = function(){
          
	   }
}


