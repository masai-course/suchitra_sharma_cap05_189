
let generateNum=document.getElementById("generate-number")
let numberDiv=document.getElementById( "number")
let oddEvenDiv=document.getElementById("odd-even")

function generateNumber() {
  // generate a random integer(hint : Math.random)
  let number=Math.floor(Math.random()*100)+1
    numberDiv.innerText=number
    checkOddEven(number)
    // console.log(number)
}

function checkOddEven(num) {
  // logic for even / odd
  if(num%2==0){
    oddEvenDiv.textContent=("The number is even")
  } 
  else{
    oddEvenDiv.textContent=("The number is odd")
  }

  
}

window.onload = function () {
  // add event listeners to the button here
  generateNum.addEventListener('click', generateNumber)

  
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
