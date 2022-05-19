var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})
    const txts=document.querySelector(".popup").children;
   txtsLen=txts.length;
   let index=0;
   const textInTimer=3000,
   textOutTimer=2800;
   function animateText(){
       for(let i=0;i<txtsLen;i++){
        txts[i].classList.remove("text-in","text-out");
       }
txts[index].classList.add("text-in");

setTimeout(function(){
    txts[index].classList.add("text-out");
},textOutTimer)

setTimeout(function(){

    
if(index ==txts-1){
    index=0;
}

else{
    index++;
}
animateText();
},textInTimer);
   }
   window.onload=animateText;
/** PRE INTRO */
   let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{

setTimeout(()=>{
logoSpan.forEach((span,idx)=>{
setTimeout(()=>{
 span.classList.add('active');
},(idx + 1)* 600)
});
setTimeout(()=>{
    logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
            span.classList.remove('active');
            span.classList.remove('fade');
        },(idx +1)*50)
        })
},9000);
setTimeout(()=>{
    intro.style.top='-100vh';
},6300)
})
})

 
      
 function myFunction() {
    var input,filter,div,p, a, i,txtValue;
 input=document.getElementById("text");
 filter=input.value.toUpperCase();
 div=document.querySelector(".contain234");
 p=div.getElementsByTagName("p");
 for (i = 0; i < p.length; i++) {
         a = p[i].getElementsByTagName("a")[0];
         txtValue = a.textContent || a.innerText;
         if (txtValue.toUpperCase().indexOf(filter)> -1){
             p[i].style.display = "";
         } else {
             p[i].style.display = "none";
         }
     }
 }
 
 
