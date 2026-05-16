const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

const year = new Date();

document.getElementById('currentyear').textContent =
    year.getFullYear();

document.getElementById('lastModified').textContent =
    `Last Modification: ${document.lastModified}`;