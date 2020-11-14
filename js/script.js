document.addEventListener('DOMContentLoaded', function() {
    let burger = document.querySelector('.burger'),
        menu = document.querySelector('.header-nav');
    
    burger.addEventListener('click', function(event) {
        event.target.classList.toggle('burgerActive');
        menu.classList.toggle('menuShow');
        document.body.classList.toggle('lock');
    });    
    // burger
    
    // tabs
    let tab_btn = document.getElementsByClassName('portfolio-tabs__btn'),
        tab_btn_wrapper = document.querySelector('.portfolio-tabs-btns'),
        tab = document.getElementsByClassName('portfolio-tabs-itm');
    
    function hideTab(a) {
        for (let i = a; i < tab.length; i++) {
            tab[i].classList.remove('show');
            tab[i].classList.add('hide');
        }
    }
    hideTab(1);
    // function to hide tabs, but show first
    
    function showTab(b) {
        hideTab(0);
        tab[b].classList.remove('hide');
        tab[b].classList.add('show');
    }
    // function to show current tab
    
    tab_btn_wrapper.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('portfolio-tabs__btn')) {
            for (let i = 0; i < tab_btn.length; i++) {
                if (target == tab_btn[i]) {
                    showTab(i);
                    console.log('s');
                }
            }
        }
    })
    // tab function
});