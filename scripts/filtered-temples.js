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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San José Costa Rica",
        location: "San José, Costa Rica",
        dedicated: "2000, June, 4",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-jose-costa-rica-temple/san-jose-costa-rica-temple-59193.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3195.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("main h2");

function displayTemples(templesList) {
    gallery.innerHTML = "";
    templesList.forEach(temple => {
        const card = document.createElement("section");
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}"
                alt="${temple.templeName}"
                width="400"
                height="250"
                loading="lazy">
        `;
        gallery.appendChild(card);
    });
}
displayTemples(temples);

document.querySelector("#old").addEventListener("click", () => {
    pageTitle.textContent = "Oldest Temples";
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    pageTitle.textContent = "Newest Temples";
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return year > 2000;
    });
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    pageTitle.textContent = "Largest Temples";
    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    pageTitle.textContent = "Smallest Temples";
    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );
    displayTemples(smallTemples);
});

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});