 
const numbers = document.querySelectorAll(".screen span");
const [am, pm] = document.querySelectorAll(".screen em");
const main = document.querySelector("main");
const menus = document.querySelectorAll("nav span");

setInterval(()=>{
    let now = new Date();
    let hr = now.getHours();
    const data = [
        {condition: hr>=5 && hr<11, name: "moring"},
        {condition: hr>=11 && hr<16, name: "afternoon"},
        {condition: hr>=16 && hr<19, name: "moreveninging"},
        {condition: hr>=19 || hr<5, name: "night"},
    ]

    data.forEach((item, idx) => {
        if(item.condition){
            main.className="";
            main.classList.add(item.name);
            for( let menu of menus ){
                menu.classList.remove("on");
            }
            menus[idx].classList.add("on");
        }
    })

    if( main.classList.contains("afternoon")){
        main.classList.add("dark_text")
    }else{
        main.classList.remove("dark_text")
    }
   
    const times = setTime(now); //[hr, min, sec]
    times.forEach((time, idx) => getTime(time, idx)) 
},1000)

function setTime(now){
    let hr2 = null;
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if( hr>12){
        hr2 = hr-12;
        pm.classList.add("on");
        am.classList.remove("on");
    }else{
        hr2 = hr;
        am.classList.add("on");
        pm.classList.remove("on");
    }
    return [hr2, min, sec];
}

function getTime(num, idx){
    if(num < 10) num = "0" + num;
    numbers[idx].innerText = num
}
