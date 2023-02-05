console.log('' +
    'Вёрстка валидная: 10' + '\n' +
    'Вёрстка семантическая: 20' + '\n' +
    'Вёрстка соответствует макету: 48' + '\n' +
    'Требования к css: 12' + '\n' +
    'Интерактивность, реализуемая через css: 20' + '\n' +
    'Итог: 110 Баллов' + '\n' +
    '');

let cityCardsArr = [
    ['Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street'],
    ['New York City', '+1 212 456 0002', '9 East 91st Street'],
    ['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave'],
    ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD']
];

(function () {
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.nav')
    const menuClose = document.querySelector('.header_nav-close')
    const menuScrol = document.querySelector('.nav-list')

    const btnArrServiceActive = document.querySelectorAll('.btn-service')
    const btn1 = document.getElementById('garden')
    const btn2 = document.getElementById('lawn')
    const btn3 = document.getElementById('planting')

    const acc = document.querySelectorAll(".prices_item_title");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            const priceBlock = acc[i].parentElement;
            const accordion = acc[i].nextElementSibling;
            if (!accordion.classList.contains('price_item_info_open')) {
                closeAllPrices()
            }
            priceBlock.classList.toggle('prices_item_open')
            accordion.classList.toggle('price_item_info_open');
        });
    }

    function closeAllPrices() {
        const priseItems = document.querySelectorAll('.prices_item')
        const priceItemsInfo = document.querySelectorAll('.price_item_info')
        for (let i = 0; i < priseItems.length; i++) {
            priseItems[i].classList.remove('prices_item_open')
            priceItemsInfo[i].classList.remove('price_item_info_open')
        }

    }


    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-active');
    })
    menuClose.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    })
    menuScrol.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    })

    function activeBtn(btn) {
        let serviceActive = document.querySelectorAll('.btn-service-active')
        if (serviceActive.length <= 1) {
            btn.classList.toggle('btn-service-active')
        } else {
            btn.classList.remove('btn-service-active')
        }
        allCardBlur()
        serviceActive = document.querySelectorAll('.btn-service-active')
        for (let i = 0; i < serviceActive.length; i++) {
            let noBlureCard = document.querySelectorAll(`.${serviceActive[i].id}`)
            for (let j = 0; j < noBlureCard.length; j++) {
                noBlureCard[j].classList.remove('blure')
            }
        }
        if (serviceActive.length === 0) {
            allCardNoBlur()
        }
    }

    function allCardBlur() {
        let cardsBlur = document.querySelectorAll('.service_item')
        for (let i = 0; i < cardsBlur.length; i++) {
            cardsBlur[i].classList.add('blure')
        }
    }

    function allCardNoBlur() {
        let cardsBlur = document.querySelectorAll('.service_item')
        for (let i = 0; i < cardsBlur.length; i++) {
            cardsBlur[i].classList.remove('blure')
        }
    }

    btn1.addEventListener('click', () => {
        const gardenCards = document.querySelectorAll('.garden')
        const plantingCards = document.querySelectorAll('.planting')
        const lawnCard = document.querySelector('.lawn')
        activeBtn(btn1)
    })

    btn2.addEventListener('click', () => {
        activeBtn(btn2)
    })


    btn3.addEventListener('click', () => {
        activeBtn(btn3)
    })

    const selectCity = document.querySelector('.select_city')
    const cityList = document.querySelector('.option_city')

    selectCity.addEventListener('click', () => {
        cityList.classList.toggle('option_city_open')
        if (cityList.classList.contains('option_city_open')) {
            clearPhoneCard();
            selectCity.classList.add('select_city_active')
            selectCity.classList.remove('select_city_selected')
        }
    })

    // const clickedCitycananda = document.querySelector('.cananda')
    // const mainCity = document.querySelector('.not_option_city')
    const cityListArr = document.querySelectorAll('.option_city_item')

    //clickedCitycananda.addEventListener('click', () => {
    //    selectCity.classList.remove('select_city_active')
    //     mainCity.classList.add('select_city_selected')
    // })

    for (let i = 0; i < cityListArr.length; i++) {
        cityListArr[i].addEventListener('click', ()=>{
            selectCityFromList(cityListArr[i],i)
        })
    }

    function selectCityFromList(selectedElem,i) {
        document.querySelector('.not_option_city').innerText = selectedElem.innerText
        selectCity.classList.add('select_city_selected')
        selectCity.classList.remove('select_city_active')
        renderPhoneCard(cityCardsArr[i])
    }






    function renderPhoneCard(arr){
        const toHTML =  `
        <div class="city_card">
            <div class="city_card_content">
                <div class="city_card_titles">
                    <div class="city_card_title">
                        <a>City:</a>
                    </div>
                    <div class="city_card_title">
                        <a>Phone:</a>
                    </div>
                    <div class="city_card_title">
                        <a>Office adress:</a>
                    </div>
                </div>
               
                <div class="city_card_titles">
                    <div class="city_card_title">
                        <span class="city_content">${arr[0]}</span>
                    </div>
                    <div class="city_card_title">
                        <span class="city_content">${arr[1]}</span>
                    </div>
                    <div class="city_card_title">
                        <span class="city_content">${arr[2]}</span>
                    </div>
                </div>
            </div>            
            <div class="city_card_call">
                <a class="call_us" href="tel:${arr[1]}">Call us</a>
            </div>
        </div>`
        document.querySelector('.card_place').innerHTML = toHTML
    }

    function clearPhoneCard() {
        document.querySelector('.card_place').innerHTML = ''
    }
}())


