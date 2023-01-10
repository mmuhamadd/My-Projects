var input_list = document.querySelectorAll(".input");

var createButton = document.querySelector(".createButton");

var arrayOfTasks = [];

if (window.localStorage.getItem("storeLead_tasks")) {
	arrayOfTasks = JSON.parse(window.localStorage.getItem("storeLead_tasks"));
}

window.onload = function(){
	loadTasks();
    new_task();
    totalPrice();
    deleteTask(document.querySelectorAll(".delete_task"));
    editTask(document.querySelectorAll(".edit_task"));
}


function loadTasks(){
	for(let i = 0; i < arrayOfTasks.length; i++){

            task_el = document.createElement("div");
            task_el.classList.add("task");

           
          // name add

            task_name_container = document.createElement("div");
            task_name_el = document.createElement("h1");
            task_name_el.innerHTML = 'الأسم';
            task_name_el_val = document.createElement("p");
            task_name_el_val.innerHTML = arrayOfTasks[i].task_name;

            task_name_container.appendChild(task_name_el)   
            task_name_container.appendChild(task_name_el_val)   

        
        // type add
            task_type_container = document.createElement("div");
            task_type_el = document.createElement("h1");
            task_type_el.innerHTML = 'النوع';
            task_type_el_val = document.createElement("p");
            task_type_el_val.innerHTML = arrayOfTasks[i].task_type;

            task_type_container.appendChild(task_type_el)   
            task_type_container.appendChild(task_type_el_val)       

        // count add
            task_count_container = document.createElement("div");
            task_count_el = document.createElement("h1");
            task_count_el.innerHTML = 'العدد';
            task_count_el_val = document.createElement("p");
            task_count_el_val.innerHTML = arrayOfTasks[i].task_count;

            task_count_container.appendChild(task_count_el)   
            task_count_container.appendChild(task_count_el_val)  

        // price add

            task_price_container = document.createElement("div");
            task_price_el = document.createElement("h1");
            task_price_el.innerHTML = 'السعر';
            task_price_el_val = document.createElement("p");
            task_price_el_val.innerHTML = arrayOfTasks[i].task_price;

            task_price_container.appendChild(task_price_el)   
            task_price_container.appendChild(task_price_el_val)  
         
        // discount add

            task_discount_container = document.createElement("div");
            task_discount_el = document.createElement("h1");
            task_discount_el.innerHTML = 'الخصم';
            task_discount_el_val = document.createElement("p");
            task_discount_el_val.innerHTML = arrayOfTasks[i].task_discount;

            task_discount_container.appendChild(task_discount_el)   
            task_discount_container.appendChild(task_discount_el_val)  


        // fullPrice add

            task_fullPrice_container = document.createElement("div");
            task_fullPrice_el = document.createElement("h1");
            task_fullPrice_el.innerHTML = 'السعر الكلي';
            task_fullPrice_el_val = document.createElement("p");
            task_fullPrice_el_val.innerHTML = arrayOfTasks[i].task_fullPrice;

            task_fullPrice_container.appendChild(task_fullPrice_el)   
            task_fullPrice_container.appendChild(task_fullPrice_el_val)  


        // contact add

            task_contact_container = document.createElement("div");
            task_contact_el = document.createElement("h1");
            task_contact_el.innerHTML = 'للتواصل';
            task_contact_el_val = document.createElement("p");
            task_contact_el_val.innerHTML = arrayOfTasks[i].task_contact;

            task_contact_container.appendChild(task_contact_el)   
            task_contact_container.appendChild(task_contact_el_val)  

        // add edit and delete button
        editButton_el = document.createElement("button");
        editButton_el.innerHTML = 'تعديل';
        editButton_el.classList.add("helpButton");
        editButton_el.classList.add("edit_task");

        deleteButton_el = document.createElement("button");
        deleteButton_el.innerHTML = 'حذف';
        deleteButton_el.classList.add("helpButton");        
        deleteButton_el.classList.add("delete_task");


            task_el.appendChild(task_name_container);
            task_el.appendChild(task_type_container);
            task_el.appendChild(task_count_container);
            task_el.appendChild(task_price_container);
            task_el.appendChild(task_discount_container);
            task_el.appendChild(task_fullPrice_container);
            task_el.appendChild(task_contact_container);
            task_el.appendChild(document.createElement("br"));
            task_el.appendChild(editButton_el);
            task_el.appendChild(deleteButton_el);

            document.getElementById('content').appendChild(task_el);
            


	}
}


function new_task(){
 createButton.onclick = function(){
        if (input_list[0].value != "" && input_list[1].value != "" && input_list[2].value != "" && input_list[3].value != "" && input_list[4].value != "" && input_list[5].value != "") {
        	 createTaskInfo();
        }else
        {
            alertBox();
        }
 }
}




function createTaskInfo(){
	const task_obj = {
		task_name  : input_list[0].value,
		task_type :  input_list[1].value,
		task_count  : input_list[2].value,
		task_price :  input_list[3].value,
		task_discount  : input_list[4].value,
		task_fullPrice : parseInt(input_list[3].value) - parseInt(input_list[4].value),
		task_contact  : input_list[5].value
	};
	createTaskEl(task_obj);
}


function createTaskEl(task_obj){
            
            console.log(task_obj);
            task_el = document.createElement("div");
            task_el.classList.add("task");

           
          // name add

            task_name_container = document.createElement("div");
            task_name_el = document.createElement("h1");
            task_name_el.innerHTML = 'الأسم';
            task_name_el_val = document.createElement("p");
            task_name_el_val.innerHTML = task_obj.task_name;

            task_name_container.appendChild(task_name_el)   
            task_name_container.appendChild(task_name_el_val)   

        
        // type add
            task_type_container = document.createElement("div");
            task_type_el = document.createElement("h1");
            task_type_el.innerHTML = 'النوع';
            task_type_el_val = document.createElement("p");
            task_type_el_val.innerHTML = task_obj.task_type;

            task_type_container.appendChild(task_type_el)   
            task_type_container.appendChild(task_type_el_val)       

        // count add
            task_count_container = document.createElement("div");
            task_count_el = document.createElement("h1");
            task_count_el.innerHTML = 'العدد';
            task_count_el_val = document.createElement("p");
            task_count_el_val.innerHTML = task_obj.task_count;

            task_count_container.appendChild(task_count_el)   
            task_count_container.appendChild(task_count_el_val)  

        // price add

            task_price_container = document.createElement("div");
            task_price_el = document.createElement("h1");
            task_price_el.innerHTML = 'السعر';
            task_price_el_val = document.createElement("p");
            task_price_el_val.innerHTML = task_obj.task_price;

            task_price_container.appendChild(task_price_el)   
            task_price_container.appendChild(task_price_el_val)  
         
        // discount add

            task_discount_container = document.createElement("div");
            task_discount_el = document.createElement("h1");
            task_discount_el.innerHTML = 'الخصم';
            task_discount_el_val = document.createElement("p");
            task_discount_el_val.innerHTML = task_obj.task_discount;

            task_discount_container.appendChild(task_discount_el)   
            task_discount_container.appendChild(task_discount_el_val)  


        // fullPrice add

            task_fullPrice_container = document.createElement("div");
            task_fullPrice_el = document.createElement("h1");
            task_fullPrice_el.innerHTML = 'السعر الكلي';
            task_fullPrice_el_val = document.createElement("p");
            task_fullPrice_el_val.innerHTML = task_obj.task_fullPrice;

            task_fullPrice_container.appendChild(task_fullPrice_el)   
            task_fullPrice_container.appendChild(task_fullPrice_el_val)  


        // contact add

            task_contact_container = document.createElement("div");
            task_contact_el = document.createElement("h1");
            task_contact_el.innerHTML = 'للتواصل';
            task_contact_el_val = document.createElement("p");
            task_contact_el_val.innerHTML = task_obj.task_contact;

            task_contact_container.appendChild(task_contact_el)   
            task_contact_container.appendChild(task_contact_el_val)  

        // add edit and delete button
        editButton_el = document.createElement("button");
        editButton_el.innerHTML = 'تعديل';
        editButton_el.classList.add("helpButton");
        editButton_el.classList.add("edit_task");

        deleteButton_el = document.createElement("button");
        deleteButton_el.innerHTML = 'حذف';
        deleteButton_el.classList.add("helpButton");        
        deleteButton_el.classList.add("delete_task");


            task_el.appendChild(task_name_container);
            task_el.appendChild(task_type_container);
            task_el.appendChild(task_count_container);
            task_el.appendChild(task_price_container);
            task_el.appendChild(task_discount_container);
            task_el.appendChild(task_fullPrice_container);
            task_el.appendChild(task_contact_container);
            task_el.appendChild(document.createElement("br"));
            task_el.appendChild(editButton_el);
            task_el.appendChild(deleteButton_el);

            document.getElementById('content').appendChild(task_el);
            
            arrayOfTasks.push(task_obj);
            saveToLocalHost(arrayOfTasks);
            clearInputs();
             
}



function totalPrice(){
	input_list[4].onkeyup = function(){
		if (input_list[3].value != '') {
             document.querySelector("#totalPrice").innerHTML = parseInt(input_list[3].value ) - parseInt(input_list[4].value);
		}
	}
}

function saveToLocalHost(array){
	window.localStorage.setItem("storeLead_tasks",JSON.stringify(array));
}



document.getElementById('up_button').onclick = function(){
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}


function clearInputs(){
	input_list[0].value = '';
	input_list[1].value = '';
	input_list[2].value = '';
	input_list[3].value = '';
	input_list[4].value = '';
	input_list[5].value = '';
}


function deleteTask(deleteButton){
    for(let i = 0; i < deleteButton.length; i++){
              deleteButton[i].onclick = function(){
                 arrayOfTasks.splice(i,1);
                 console.log(arrayOfTasks)
                 document.querySelectorAll(".task")[i].remove();
                 window.localStorage.removeItem("storeLead_tasks")
                 window.localStorage.setItem("storeLead_tasks",JSON.stringify(arrayOfTasks))                 

              }
    }
}


function alertBox(){
    alert = document.createElement("div");
    
    alert.classList.add("alertBox");
    
    alert.style.display = 'flex';

    wrong_img = document.createElement("img");
    
    wrong_img.src = 'assets/images/wrong.png';

    wrong_img.classList.add("wrong_img");

    wrong_descipe = document.createElement("p");

    wrong_descipe.classList.add("wrong_descipe")

    wrong_descipe.innerHTML = 'لقد حصل خطأ ما يرجي التحقق من ذلك!.';

    wrongClose = document.createElement("button");

    wrongClose.classList.add("wrongClose")

    wrongClose.innerHTML = 'اغلاق';

    alert.appendChild(wrong_img)
    alert.appendChild(wrong_descipe)
    alert.appendChild(wrongClose)

    document.body.appendChild(alert)

    wrongClose.onclick = function(){
    	for(let i = 0; i < document.querySelectorAll(".wrongClose").length; i++){
    		document.querySelectorAll(".wrongClose")[i].parentElement.style.display = 'none';
    	}
    }
}


