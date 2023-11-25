/**
 * Write your solutions here
 */
//Problem One solved
const doubleClickBox = document.querySelector('#dbl-click-box');
doubleClickBox.addEventListener("dblclick", evt => {
    (evt).preventDefault();
    alert("Double click man!")
});

//Problem 2 solved
const toggleBtn = document.querySelector("#dark-mode-btn");
const main = document.querySelector("main");
toggleBtn.addEventListener("click", evt => {
    evt.preventDefault()
    main.classList.toggle("dark-mode")
})

//Problem 3 solved
const upperCaseTitle = document.querySelector("#uppercase");
const lowerCaseTitle = document.querySelector("#lowercase")

upperCaseTitle.addEventListener("mouseenter",evt => {
    evt.preventDefault()
    lowerCaseTitle.textContent = upperCaseTitle.textContent.toLowerCase();
})
upperCaseTitle.addEventListener("mouseleave",evt => {
    evt.preventDefault()
    lowerCaseTitle.textContent="";
})

//Problem 4 solved
let onPageTimer = document.querySelector("#counter");
let timer = 0;
setInterval(()=>{
    timer ++;
    onPageTimer.textContent = timer + ' ';
}, 1000);

//Problem 5 solved
//First get the variable of the button and the character list
const btn = document.querySelector("#list-chars-btn");
const charList = document.querySelector("#characters-list");
//Now create the button event listener
btn.addEventListener("click", evt => {
    evt.preventDefault();
    //Reference the input to create the for loop, make sure to put value, so you are referencing the actual value of the input not just the input
    const input = document.querySelector("#characters").value;
    // give inner html of empty string as default
   charList.innerHTML = '';
    //if it is not empty..
    if(input !== ''){
        //we loop through the strings chars
        for (let i = 0; i < input.length; i++) {
            //if there is a string we create a list element for each char and append it to the parent which is the ul charlist
            const li = document.createElement("li");
        li.textContent = input[i];
        charList.appendChild(li)
    }}
    //if not then we tell then to write somefin
      else{
          alert("Type something please dude")
    }
})

//Problem 6 solved
//First lets get hold of certain variables, so we can manipulate
const animalBtn = document.querySelector("#clean-animal-list-btn");
const listUL = document.querySelector("#animals-list");
const animals = document.querySelectorAll(".animal-list-item");
animalBtn.addEventListener("click",evt => {
    evt.preventDefault();
    listUL.textContent='';

    for (let i = 0; i < animals.length; i++) {
        const animal = animals[i].textContent;
        const li = document.createElement("li");
        li.textContent="This is a..." + animal;
        listUL.appendChild(li)
    }
})

//Problem 7
const hiddenLetterClass = document.querySelector(".hidden-letters");
const div = hiddenLetterClass.querySelectorAll("div");


for (let i = 0; i < div.length; i++) {
    div[i].addEventListener("mouseenter",ev => {
        const span = div[i].querySelector("span");
        if(span){
            span.style.visibility ="visible";
        }})
    div[i].addEventListener("mouseleave",ev => {
        const span = div[i].querySelector("span");
        if(span){
            span.style.visibility ="hidden";
        }})
}