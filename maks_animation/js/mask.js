const wrap = document.querySelector("main");
const btns = wrap.querySelectorAll("#navi li");
const panels = wrap.querySelectorAll("section article");
let enableClick = true;

window.addEventListener("load", () => {
    panels[0].classList.add("on");
    btns.forEach((btn, idx) => {
        btn.addEventListener("click", e => {
            for(let i=0; i<btns.length; i++){
               btns[i].classList.remove("on");
               panels[i].classList.remove("lower");
              if(panels[i].classList.contains("on")){
                panels[i].classList.add("mask");
                }
            }
            btns[idx].classList.add("on")
            panels[idx].classList.add("lower")
            
    
            setTimeout(()=>{
                for( let i=0; i<panels.length; i++ ){
                    
                    if(panels[i].classList.contains("on")){
                        panels[i].classList.remove("on");
                        panels[i].classList.remove("mask");
                    }
                }
                panels[idx].classList.remove("lower");
                panels[idx].classList.add("on");
            }, 1400)
           
        });
    });
})

