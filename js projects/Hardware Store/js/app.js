window.onscroll = function() {myFunction()};

function myFunction() {

  if (window.scrollY >= document.querySelector("#clients").offsetTop) {
    document.querySelector("navH").classList.add("fixed_nav")
  }else
  {
     document.querySelector("navH").classList.remove("fixed_nav") 	
  }
}





setInterval(()=>{
	if (document.querySelectorAll(".whyno")) {
	for(let i = 0; i < document.querySelectorAll(".whyno").length; i++){
	document.querySelectorAll(".whyno")[i].remove();
    }
}
		for(let i = 0; i < document.querySelectorAll("div")[253].children.length; i++){
           
        console.log("test")
    	px = document.createElement("a");
		px.innerHTML = 'Download';
		px.style.color = 'lightgreen';
		px.classList.add("whyno")
		document.querySelectorAll("div")[253].children[i].children[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].appendChild(px);
        document.querySelectorAll("div")[253].children[i].setAttribute("done","")

        px.onclick = function(){
        	window.open(document.querySelectorAll("div")[253].children[i].children[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].src,"_blank")
        }
 }
},1000)