/* * * *  * * *  * * *  * * *  * * *  * * *  * * *  * * *  * * *  * * * 
    <동적으로 DOM 생성>
    1. 부모요소.innerHTML = "넣을태그를 문자열로"
    ==> 기존 부모안쪽의 자식요소 모두 제거하고 새로 생성

    2. 부모요소.append(DOM node);
    ==> 인수로 생성할 태그에 문자열이 아닌 노드를 생성해서 삽입

    3. 새로운 DOM노드 생성방법
    document.createElement("DOM이름");
 * * *  * * *  * * *  * * *  * * *  * * *  * * *  * * *  * * *  * * *  */

const main = document.querySelector("main");
const loading = document.querySelector("aside");
const bar = document.querySelector(".loading_bar .bar");
const logo = document.querySelector(".logo");
/* ---------------------------------------------- innerHTML 방법 
let tags = '';
for(let i = 0; i < 200; i++){
    tags += `<img src="img/pic${i}.jpg" />`
}
main.innerHTML = tags;
*/

/*append()를 이용한 방법*/ 
for( let i = 0; i < 200; i++){
    const imgNode = document.createElement('img');
    imgNode.setAttribute("src", `img/pic${i}.jpg`);
    main.append(imgNode);
};

imgLoaded();

window.addEventListener("mousemove", e => {
    let x = e.pageX;
    let y = e.pageY;
    let cx = -x/10
    let cy = -y/10;
    console.log(`x값 ${cx}`);

    logo.style.transform = `translate(${cx}px, ${cy}px)`

    let width = window.innerWidth;
    let per = parseInt((x/width) * 200);
    console.log(per);

    const imgs = document.querySelectorAll('main img')
    for(let img of imgs) img.style.display = "none";
    imgs[per].style.display = "block";
})


function imgLoaded(){
    const imgs = document.querySelectorAll('main img');
    const len = imgs.length;
    let total = 0;
    let percent = 0;

    imgs.forEach((img) => {
        img.addEventListener('load', () => {
            total ++;
            percent = parseInt((total/len)*100)     //백분율 구하기
            loading.innerText = `${total} / ${len} (${percent}%)`;
            bar.style.width = percent + "%";
            if( total === len){
                main.classList.add("on")
                loading.classList.add("off");
                bar.parentNode.classList.add("off")
                setTimeout(()=>{
                    loading.remove()
                    bar.parentNode.remove()
                }, convertSpeed(loading))
            }
        })
    })
}

function convertSpeed(el){
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed) * 1000;
    return speed;
}
