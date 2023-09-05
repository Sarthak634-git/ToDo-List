const inputBox =document.getElementById("inputBox")
const listContainer =document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ""){
        alert("You must add certain task");
    }else{
        let li= document.createElement('li');  //creating a new element for the list item
        li.innerHTML = inputBox.value;         //Adds return value to the HTML
        listContainer.appendChild(li);
        let span = document.createElement("span"); //Creating icon on span tag
        span.innerHTML="\u00d7";    //code for cross icon
        li.appendChild(span);
    }
    inputBox.value="";
    savetask();
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){   //When you click on a list item, it will add a special style (a class         
                                      //called "checked") to it to show that it's done.
        e.target.classList.toggle("checked"); //checking and unchecking the box
        savetask();
    }
    else if(e.target.tagName === "SPAN"){ //if clicked on 'x' do something
        e.target.parentElement.remove();
        savetask();
    }
}, false);

//localstorage is special storage that web browser provides for small data
function savetask(){ 
    localStorage.setItem("data", listContainer.innerHTML);  //setItem take contain fron listContainer    
}

function showsave(){
    listContainer.innerHTML = localStorage.getItem("data");//retrives data from savetask()
}//innerHtml displays savetask()
showsave();