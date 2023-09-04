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
}