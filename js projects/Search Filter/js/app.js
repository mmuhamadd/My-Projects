var input = document.querySelector("input");

var list = document.querySelectorAll("ul li");


window.onload = function(){
	filter();
}


function filter()
{
	input.onkeyup = function(){
		if (input.value != "" || input.value != " ") {
			 for(let i = 0; i < list.length; i++){
			 	 for(let x = 0; x < list[i].innerHTML.length; x++){
                        for(let y = 0; y < input.value.length; y++){
                        	 if (input.value[y] == list[i].innerHTML[x].toLowerCase()) {
                        	setTimeout(()=>{
                        		list[i].style.display = 'block'
                        	},100)

                        }else
                        {
                        	list[i].style.display = 'none'
                        }
                        }
			 }
		}
	}
}}
