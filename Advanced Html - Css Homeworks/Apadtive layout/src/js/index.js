'use strict';
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
burger.addEventListener('click', () =>{
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
});
const footerText = document.querySelector('.footer-text');
window.addEventListener('resize', changeFooterText);
function changeFooterText (){
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 767){
        footerText.textContent = 'Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio.'
    }
    if(clientWidth >= 767){
        footerText.textContent = 'Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio. Curabitur blandit tempus porttitor vollisky inceptos mollisestor.'
    }
};
changeFooterText()