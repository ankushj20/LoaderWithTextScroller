var tl = gsap.timeline()


function time(){
    var  a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
    },150)
}
tl.to("#loader",{
    top: "-100vh",
    duration:1.5,
    delay:2.5,

})
tl.to("#loader h1",{
   duration:1,
   delay:0.5,
   onStart: time()
})

gsap.to("#page1 h1",{
    transform:"translate(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
       // markers:true,
        start:"top 0%",
        end:"end -220%",
        scrub:3,
        pin:true,
    }
})

