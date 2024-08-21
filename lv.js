const l = document.querySelectorAll(".a1");

var nav = document.querySelector("header nav");
l.forEach((e) => {
  e.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to(".bt", {
      height: "22vh",
    });
    tl.to(".hp .a2", {
      display: "block",
    });
    tl.to(".a2 span", {
      y: 0,
      stagger: {
        amount: 0.37,
      },
    });
    nav.addEventListener("mouseleave", function () {
      let nt = gsap.timeline();
      nt.to(".a2 span", {
        y: 30,
        stagger: {
          amount: 0.3,
        },
      });
      nt.to(".hp .a2", {
        display: "none",
      });
      nt.to(".bt", {
        height: "0px",
      });
    });
  });
});
 
// q1 animation ended
function thrott(func, delay) {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
}
function rob(v, z = 0) {
  var sv = (-1) ** Math.floor(Math.random() * z);
  var s = Math.floor(Math.random() * v * sv);

  return s;
}
var oy=document.querySelectorAll(".bc")
var yo=document.querySelectorAll(".bc img")
oy.forEach(e => {
  
    e.addEventListener("mouseenter",(o)=>{
     

      e.childNodes[0].style.display="block"
      e.childNodes[0].style.opacity="100%"
      gsap.to(e.childNodes[0],{
        delay:1,
        scale:1,
        
        
      })
      

    })
    e.addEventListener("mousemove", thrott((o)=>{
      var ag= 200-rob(140)
      e.childNodes[0].style.width=`${ag}px`
      e.childNodes[0].style.height=`${ag}px`
      let x=o.pageX
      console.log(x)
      
      
      e.childNodes[0].style.left=`${x-100}px`
     
      
    },0))
    e.addEventListener("mouseleave",()=>{
      e.childNodes[0].style.display="none"
    })
    
 
  
});

// img animation ended
function box(cl, v = document.body, i = "div") {
  var bx = document.createElement(i);
  bx.classList.add(cl);
  v.appendChild(bx);
  return bx;
}
var yk=0
var fc=document.querySelector(".q3 .fq")
fc.addEventListener("click",function () {
  var me=box("me",document.querySelector(".hol"))
  var mc=box("ri-close-large-line",me,"i")
  mc.addEventListener("click",()=>{
    me.remove()
    console.log("jko")

  })
  var mg=box("mg",me,"video")
  gsap.to(mg,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  })
  mg.setAttribute("src","https://lazarev.kiev.ua/la24/la-reel--min.mp4")
  mg.play()
  var mj=box("mj",me)
  mj.innerHTML="<i class="+"ri-play-large-fill"+"></i>"
  

  mj.addEventListener("click",()=>{
    mg.play()
    mj.style.display="none"
    console.log("jko")

    yk=0
  })
  mg.addEventListener("click",()=>{
    if (yk==0) {
      mg.pause()
      mj.style.display="block"
      console.log("jklo")
      yk=1

      
    } else if(yk==1) {
      mg.play()
      mj.style.display="none"


      yk=0
      
    }
  })


  
})
// video animation ended

var sv=document.querySelectorAll(".sec-v");
sv.forEach((e) => {
  
  e.addEventListener("mouseenter",()=>{
    e.play()
    let vbox=box("vbox",document.querySelector(".q4"))
    e.addEventListener("mousemove",(o)=>{
      let x=o.pageX
      let y=o.pageY

      
      vbox.style.left=`${x-10}px`
      vbox.style.top=`${y+10}px`
      setTimeout(() => {
        vbox.innerHTML="<p>Lazarev</p>"
        vbox.style.paddingTop="35px"
        vbox.style.fontFamily="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
        vbox.style.paddingLeft="28px"
        vbox.style.boxSizing="border-box"
        
      }, 789);
      
      e.addEventListener("mouseleave",()=>{
        e.load()
        vbox.remove()
        
      })
      
    })
    
  })
});
// video play animation ended
var ln=[];
var cont=0
function somay(d) {
  for(let g of d){
    ln.push(g)
  }
  for (let i = 0; i < d.length; i++) {
    var db=box("db",document.querySelector(".ct"))
    db.style.minWidth=`${100/d.length-1}%`

    for (let u = 0; u < 9; u++) {
    
      var idb=box("idb",db)
      idb.innerText=ln[i]
      idb.style.minHeight=`${100/9}%` 

      
      

         
    }
  }
  
}
var tx=prompt("what is your name?")
// if (tx.length>=32) {
//   document.querySelector(".ct").style.left=``
  
// } else {
  
// }
somay(tx)

ScrollTrigger.create({
    trigger:".q5",
    scroller:"body",
    delay:1,
    scrub:true,
    onEnter:()=>{
      var dy=document.querySelectorAll(".db")
      for (let i = 0; i < dy.length; i++) {
        if (i%2==0) {
          dy[i].classList.toggle("dy1")
          
        } else {
          dy[i].classList.toggle("dy2")
          
        }
        
      }
    }

});

// logo scroll reapeating animation ended


  
  
  
  
  
  

  




