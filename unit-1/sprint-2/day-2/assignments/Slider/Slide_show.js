const slide_class=document.querySelectorAll(".slider_pic")
var counter=0;

slide_class.forEach(
    (slider_pic, index)=>{
    slider_pic.style.left=`${index * 100}%`
    }
)
const startBtn=()=>{
   setInterval(
            ()=>{
                
                slideImage(counter++)
                if(counter==slide_class.length-1){
                   counter=0
                   
                }
                 

            },1000 )
      console.log("start")
      console.log(slide_class)
      
}

var nextBtn=()=>{
    counter++
    slideImage()
    if(counter==slide_class.length-1){
        counter=0
    }
    // // if(index> slide_class.length){
    // //         index=0
    // // }
    // // else if(index <=slide_class.length)
    // // {
    // //     index=slide_class.length-1
    // // }
    // changeSlide()
    console.log("next")
    // console.log(typeof slideImage)
    
    
}

var prevBtn=()=>{
    counter--
    slideImage()
    // if(counter==null){
    //   counter= slide_class.length
    // }
    console.log("prev")
   
}

const slideImage=()=>{
    slide_class.forEach(
        (slider_pic, index)=>{
            slider_pic.style.transform=`translate(-${counter *100}%)`
        }
    )
  
}

// const changeSlide=(moveTo)=>{
//         if(moveTo > slideImage.length)
//         {
//             moveTo=0
//         }
//         if(moveTo <=slideImage.length)
//         {
//             moveTo=slideImage.length-1
//         }

//         console.log(moveTo)
// }

// // changeSlide(0)