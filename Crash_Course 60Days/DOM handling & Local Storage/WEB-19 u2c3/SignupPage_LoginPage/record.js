// fill in javascript code here
let form=document.querySelector("form")
let submit=document.getElementById("submit")
// let th=document.querySelector("div>table>thead>tr>th")

let tableBody=document.querySelector("table>tbody")

// console.log(th)

let data=[]
function saveData(){
    localStorage.setItem("data", JSON.stringify(data))

}

function LoadData(){

    let savedData=JSON.parse(localStorage.getItem("data"))
    console.log(savedData)

    if(savedData){
        data=savedData
        showData(data)
    }
}

function showData(arr){
    tableBody.innerHTML=""

    arr.forEach(function(ele, i){
        // console.log(ele)

       
       
        let tr=document.createElement("tr")
        

        let td1=document.createElement("td")
        td1.innerHTML=ele.name

        let td2=document.createElement("td")
        td2.innerHTML=ele.id

        let td3=document.createElement("td")
        td3.innerHTML=ele.department

        let td4=document.createElement("td")
        td4.innerHTML=ele.experience

        let td5=document.createElement("td")
        td5.innerHTML=ele.email

        let td6=document.createElement("td")
        td6.innerHTML=ele.mobileNo

        let td7=document.createElement("td")

    if(ele.experience>5)
    {
       td7.innerHTML="Senior"

    }
    else if(ele.experience>2 && ele.experience<=5)
    {
        td7.innerHTML="Junior"
    }
    else if(ele.experience>=1){
        td7.innerHTML="Fresher"
    }

    let td8=document.createElement("td")
    let btn=document.createElement("button")
    btn.innerText="Delete"

    td8.append(btn)

    btn.addEventListener("click", function(i){
        handleDeleteButton(i)
    })



tableBody.append(tr, td1, td2, td3, td4, td5, td6, td7, td8)

        console.log(tableBody)


    })

}

function handleFormSubmit(event){

        console.log(event)
        event.preventDefault()
        let targetElement=event.target
        let employeeName=targetElement[0].value
        let employeeID=targetElement[1].value
        let department=targetElement[2].value
        let experience=targetElement[3].value
        let email=targetElement[4].value
        let mobile_No=targetElement[5].value

        let obj={
            name:employeeName,
            id:employeeID,
            department:department,
            experience:experience,
            email:email,
            mobileNo:mobile_No

        }
        // console.log(obj)
        data.push(obj)
        console.log(data)
        saveData()

        showData(data)

}

function handleDeleteButton(index){
console.log(index)
data.splice(index, 1)
saveData()
showData(data)

}


form.addEventListener("submit", function(e){
    e.preventDefault()
    handleFormSubmit(e)
    // console.log("form click")
})


LoadData()



