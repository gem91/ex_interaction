const btn = document.querySelector('button');
const box = document.querySelector('#box');

btn.addEventListener("click", e => {
    animate(window, {
        prop: 'scroll',
        value: 300,
        duration: 1000,
    });
})

function animate(select, options){
    const startTime = performance.now();
    let currentValue = null;
    let isString = typeof options.value;

    if( options.prop === "scroll" ){
        currentValue = select.scrollY;
    }else{
        currentValue = parseFloat(getComputedStyle(select)[options.prop]);
    }

    if( isString === 'string' ){
        const parentW = parseInt(getComputedStyle(select.parentElement).width);
        const parentH = parseInt(getComputedStyle(select.parentElement).height);
        const x = ['margin-left', 'margin-right', 'left', 'right', 'width']
        const y = ['margin-top', 'margin-bottom', 'top', 'bottom', 'height']

        for(let condition of x) if(options.prop === condition)  currentValue = (currentValue/parentW)*100;
        for(let condition of y) if(options.prop === condition)  currentValue = (currentValue/parentH)*100;

        options.value = parseFloat(options.value)
    }

    if(options.value === currentValue) return;
    requestAnimationFrame(move)

    function move(time){
        let timeLast = time - startTime;    // 순환할때 시간
        let progress = timeLast/options.duration;   // 진행률
        if( progress < 0) progress = 0;
        if( progress > 1) progress = 1;
        if( progress < 1) {
            requestAnimationFrame(move)
        }else{
            if(options.callback) options.callback()
        }
        let result = currentValue + ((options.value - currentValue) * progress);
        
        if( isString === 'string'){
            select.style[options.prop] = `${result}%`
        }else if( options.prop === "opacity" ){
            select.style[options.prop] = result;
        } else if ( options.prop === "scroll" ){
            window.scroll(0, result);
        }
        else{
            select.style[options.prop] = `${result}px`;
        }
    }
}











