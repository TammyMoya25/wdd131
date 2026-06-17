const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.querySelector("#productName");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Siguiendo las instrucciones, se usa id como value
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Actualizar año actual en el footer
const yearElement = document.querySelector("#currentyear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Actualizar última fecha de modificación en el footer
const modifiedElement = document.querySelector("#lastModified");
if (modifiedElement) {
    modifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}