var hour=document.getElementById("hour")
var minute=document.getElementById("minute")
var second=document.getElementById("second")

var start=document.getElementById("StartBtn")
var reset=document.getElementById("ResetBtn")
var pause=document.getElementById("PauseBtn")

var setTimer=null

function stopTimer(){
    clearInterval(startTimer)
    console.log("hello")
}


function pauseTimer(){
        clearInterval(setTimer)


}
    

function startTimer(){

       var startInterval=()=>{
             setTimer=setInterval(()=>{
                console.log("start")
                if(second.value==0 && minute.value==0 && hour.value==0)
                {
                    second.value=0;
                    minute.value=0;
                    hour.value=0;
                }
                else if(second!=0 && minute.value==0 && hour.value==0){
                    second.value--;
                    
                                                
                }
                else if(minute.value!=0 && second.value==0){
                    second.value=59
                    minute.value--
                 }
                 else if(hour.value!= 0 && second.value==0 && minute.value==0){
                    minute.value=59;
                    second.value=59;
                    hour.value--

                 }
                 else if(minute.value!=0 || second.value!=0 || hour.value!=0)
                 {
                    second.value--
                    // minute.value-
                 }
            
            }, 1000)
        
       }

       startInterval()
   

}






start.addEventListener('click', function (){
            startTimer()
})

reset.addEventListener('click', function(){
        hour.value=0;
        minute.value=0;
        second.value=0;
        stopTimer()

})

pause.addEventListener('click', function(){
        pauseTimer()
})
