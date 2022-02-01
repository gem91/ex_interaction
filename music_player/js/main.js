
const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360/len;
let active = 0;
const names = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal', 'Vespers']


for( let i = 0; i < len; i++){
    const pic = list[i].querySelector(".pic");
    const title = list[i].querySelector("h2");
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-80vh)`;
    pic.style.backgroundImage = `url(img/${names[i]}.jpg)`;
    title.innerText = names[i];

    const audio = document.createElement("audio");
    audio.setAttribute("src", `music/${names[i]}.mp3`);
    audio.setAttribute("loop","loop");
    list[i].append(audio);
}


const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0;

prev.addEventListener('click', e => {
   frame.style.transform = `rotate(${deg* ++num}deg)`;

   (active === 0) ? active = len-1 : active--;
//    if(active === 0){
//         active = len-1;
//    }else{
//         active--;
//    }

   for(let el of list) el.classList.remove('on');
   list[active].classList.add('on');
})

next.addEventListener('click', e => {
    frame.style.transform = `rotate(${deg* --num}deg)`;

    (active === len-1) ? active = 0 : active++;
    // if(active === len-1){
    //     active = 0;
    // }else{
    //     active++;
    // }

    for(let el of list) el.classList.remove('on');
    list[active].classList.add('on');
})

for ( let item of list){
    const play = item.querySelector(".play")
    const pause = item.querySelector(".pause");
    const load = item.querySelector(".load");

    play.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
        e.currentTarget.closest('article').querySelector('audio').play();
    });
    pause.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
        e.currentTarget.closest('article').querySelector('audio').pause();
    });
    load.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
        e.currentTarget.closest('article').querySelector('audio').load();
        e.currentTarget.closest('article').querySelector('audio').play();
    })
}









