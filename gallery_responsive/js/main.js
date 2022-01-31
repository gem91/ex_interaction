window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: ".8s"
    })

    const btns = document.querySelectorAll("main ul li");
    btns.forEach( btn  => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const isOn = e.currentTarget.classList.contains("on");
            if( isOn ){ return }
            activation(e);
        })

        function activation(event){
            const btn_a = event.currentTarget.querySelector("a");
            const a_href = btn_a.getAttribute("href");
            for(let btn of btns){
                btn.classList.remove("on");
            }
            event.currentTarget.classList.add("on");

            grid.arrange({filter: a_href})  // plugin에서 제공하는 명령어 / 인수값 key
        }
    })
})