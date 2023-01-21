console.log('' +
    'Вёрстка валидная: 10' + '\n' +
    'Вёрстка семантическая: 20' + '\n' +
    'Вёрстка соответствует макету: 48' + '\n' +
    'Требования к css: 12' + '\n' +
    'Интерактивность, реализуемая через css: 20' + '\n' +
    'Итог: 110 Баллов' + '\n' +
'');
( function (){
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.nav')
    const menuClose = document.querySelector('.header_nav-close')
    const menuScrol = document.querySelector('.nav-list')
   burgerItem.addEventListener('click',()=>{
       menu.classList.add('nav-active');
   })
    menuClose.addEventListener('click',()=>{
        menu.classList.remove('nav-active');
    })
    menuScrol.addEventListener('click',()=>{
        menu.classList.remove('nav-active');
    })
}())