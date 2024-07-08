// import the data
const crypto=require('crypto')
const operation=process.argv[2]
// const a=(process.argv[3])
// const b=(process.argv[4])
const num1=process.argv[3]
const num2=process.argv[4]

// console.log(a)
// index.js
//  import the crypto module
//  get a commands using process.argv

function sum(num1, num2){
  // console.log(a+b)
  console.log(num1+num2)
}

function sub(num1, num2){
  // console.log(a+b)
  console.log(num1-num2)
}

function product(num1, num2){
  // console.log(a+b)
  console.log(num1*num2)
}

function divide(num1, num2){
  // console.log(a+b)
  if(num2===0)
  {
    console.log("operation invalid")
  }

  console.log(num1/num2)
}

let randomNumber=crypto.randomBytes(10, (err, buf)=>{
  if(err)
  {
    console.log(err);
    return
  }

  // console.log("The Random number is "+ buf.Number('hex'));
  console.log("The Random number is "+buf.toString('hex'));
})


switch (operation) {
  case 'sum':
    {sum(Number(num1), Number(num2))}
    break;
    case 'sub':
    {sub(Number(num1), Number(num2))}
    break;
    case 'product':
    {product(Number(num1), Number(num2))}
    break;
    case 'divide':
    {divide(Number(num1), Number(num2))}
    break;
    case 'random':
      {randomNumber}
    default:
      console.log("Invalid operation");
  }
  