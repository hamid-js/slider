let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgSlider = document.querySelector(".img-slider");

let imgArray =["image/1.jpg","image/2.png","image/3.jpg"]
let index = 0


prev.addEventListener("click",prevFunc);
next.addEventListener("click",nextFunc);






function nextFunc (){
  if(index < imgArray.length -1){

    index++
      
      console.log(index);
      console.log(imgArray[index])
  }else{
    index = 0
    console.log(index);
  }
  imgSlider.src =  imgArray[index]

}

function prevFunc (){
  
  if(index > 0){

    index--
      
    
      console.log(imgArray[index])
  }else{
    index = imgArray.length -1
    console.log(imgArray[index])
  }
  imgSlider.src =  imgArray[index]

}

setInterval(nextFunc,4000)