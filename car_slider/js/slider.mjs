import Animate from './animate.mjs';

export default class Slider{
    constructor(seletor, option){
        this.slider = document.querySelector(seletor);
        this.panel = this.slider.querySelector(option.panel);
        this.btns = this.slider.querySelectorAll(option.btns);
        this.ring = this.slider.querySelector(option.ring);
        this.speed = option.duration
    
        this.btns.forEach( (el, idx) => {
            el.addEventListener('click', e => {
                e.preventDefault();
                let isOn = e.currentTarget.classList.contains("on");
                if(isOn) return;
                
                this.activation(idx);
            })
        })
    }

    activation(idx) {
        new Animate(this.panel, {
            prop: 'margin-left',
            value: `${-100*idx}%`,
            duration: this.speed,
        })
    
        for(let btn of this.btns) btn.classList.remove("on");
        this.btns[idx].classList.add("on");
    
        this.ring.className = '';
        this.ring.classList.add(`rot${idx}`)
    }
}









