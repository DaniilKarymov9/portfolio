(() => {
    window.onload = () => {
        let header_burger = document.querySelector('.header_burger');
        let header_menu = document.querySelector('.navigation');
        let body = document.querySelector('body');
        header_burger.addEventListener('click', (e) => {
            header_burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            body.classList.toggle('lock');
        })
        let menu_list = document.querySelector('.header_list');
        menu_list.addEventListener('click', (e) => {
            header_burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            body.classList.toggle('lock');
        })
    }
})();