var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x+"px"
cursor.style.top = dets.y+"px"
  blur.style.left = dets.x - 100+ "px"
    blur.style.top = dets.y - 100 +"px"
})

gsap.to("#nav",{
   backgroundColor : "black",
   height:"90px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav", // kya trigger hoga 
    scroller:"body", // kya scroll krne pr trigger hoga
   // markers:true,
    start: "top -10%",// kb trigger strt hoga
    end: "top -11%", // kb end hoga 
    scrub: 1 //smooth scrolling ke lie
   }
})
gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    //markers:true,
    start:"top -25%",
    end: "top -70%",
    scrub:1
}
})