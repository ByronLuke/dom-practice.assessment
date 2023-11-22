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

//Problem 5
const outputBtn = document.querySelector("#list-chars-btn");
outputBtn.addEventListener("click", evt => {

})