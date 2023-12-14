// index.js

//  import the crypto module

const crypto=require('crypto')
//  get a commands using process.argv

const argvs=process.argv

const argv=argvs.slice(2)
// complete the  function
const operation=argv[0]
// console.log(operation)
const operator1=parseInt(argv[1])
const operator2=parseInt(argv[2])
const res=crypto.randomBytes(10).length


if(operation=='add'){
  console.log(`operation is ${operator1+operator2}`)
}
else if(operation=='sub'){
  console.log(`operation is ${operator1-operator2}`)
}
else if(operation=='mult'){
  console.log(`operation is ${operator1*operator2}`)
}
else if(operation=='divide'){
  console.log(`operation is ${operator1/operator2}`)
}
 else if(operation=='sin'){
  console.log(`operation is ${Math.sin(operator1/operator2)}`)
}
else if(operation=='cos'){
  console.log(`operation is ${Math.cos(operator1/operator2)}`)
}
else if(operation=='tan'){
  console.log(`operation is ${Math.tan(operator1/operator2)}`)
}
else if(operation=='res'){
    console.log(res)
}
