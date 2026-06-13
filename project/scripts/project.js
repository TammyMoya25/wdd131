// Data Objects and Arrays using local image paths
const destinations = [
    {
        name: "Punta Cana",
        cost: "$1,300",
        vibe: "beach",
        features: ["⚡ Fast WiFi", "🏖️ Unmatched Beaches", "✈️ Near Airport"],
        img: "images/punta-cana.webp"
    },
    {
        name: "Santo Domingo",
        cost: "$1,000",
        vibe: "city",
        features: ["🏙️ City Life", "☕ Cool Coworkings", "🇩🇴 Rich Culture/History"],
        img: "images/santo-domingo.webp"
    },
    {
        name: "Las Terrenas",
        cost: "$1,100",
        vibe: "beach",
        features: ["🥥 Relaxed Vibes", "🌴 Beautiful Beaches", "🚲 Great for Long Stays"],
        img: "images/las-terrenas.webp"
    },
    {
        name: "Cabarete",
        cost: "$1,000",
        vibe: "active",
        features: ["🏄 Great for Water Sports", "👥 Active Community", "🍹 Incredible Nightlife"],
        img: "images/cabarete.webp"
    }
];

const defaultPackingList = [
    "Laptop & Charger",
    "Universal Power Adapter",
    "Swimwear & Sunscreen",
    "Light Clothing",
    "Travel Insurance Copy",
    "Noise-Cancelling Headphones"
];

// Initialize application on load
document.addEventListener("DOMContentLoaded", () => {
    setupGeneralElements();

    // Check page context via selectors
    if (document.getElementById("destinations-grid")) {
        renderDestinations("all");
        setupDestinationFilters();
    }

    if (document.getElementById("checklist")) {
        setupChecklist();
        setupFormRecommendation();
    }
});

// Function 1: Common layout setup
function setupGeneralElements() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastMod = document.getElementById("last-modified");
    if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
}

// Function 2: Render dynamic cards via Array Methods and Template Literals
function renderDestinations(filterValue) {
    const grid = document.getElementById("destinations-grid");
    if (!grid) return;

    // Filter data conditionally
    const filtered = filterValue === "all" ?
        destinations :
        destinations.filter(dest => dest.vibe === filterValue);

    // Build markup dynamically with lazy-loaded images
    grid.innerHTML = filtered.map(dest => `
        <div class="destination-card">
            <img src="${dest.img}" alt="${dest.name}" loading="lazy">
            <div class="card-body">
                <h3>${dest.name}</h3>
                <p class="card-price">Estimated Cost: ${dest.cost}/month</p>
                <ul>
                    ${dest.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Function 3: Event handling for filters
function setupDestinationFilters() {
    const filterSelect = document.getElementById("filter-vibe");
    if (filterSelect) {
        filterSelect.addEventListener("change", (e) => {
            renderDestinations(e.target.value);
        });
    }
}

// Function 4: LocalStorage initialization and management
function setupChecklist() {
    const checklistUl = document.getElementById("checklist");
    if (!checklistUl) return;

    let savedData = JSON.parse(localStorage.getItem("dr-packing-list"));
    if (!savedData) {
        savedData = defaultPackingList.map(item => ({ name: item, checked: false }));
        localStorage.setItem("dr-packing-list", JSON.stringify(savedData));
    }

    renderChecklist(savedData, checklistUl);
}

function renderChecklist(data, element) {
    element.innerHTML = data.map((item, index) => `
        <li>
            <input type="checkbox" id="item-${index}" ${item.checked ? 'checked' : ''} data-index="${index}">
            <label for="item-${index}">${item.name}</label>
        </li>
    `).join('');

    // Synchronize modifications with localStorage immediately
    element.querySelectorAll("input[type='checkbox']").forEach(box => {
        box.addEventListener("change", (e) => {
            const idx = e.target.getAttribute("data-index");
            data[idx].checked = e.target.checked;
            localStorage.setItem("dr-packing-list", JSON.stringify(data));
        });
    });
}

// Function 5: Form verification and conditional branching logic
function setupFormRecommendation() {
    const form = document.getElementById("recommendation-form");
    const resultBox = document.getElementById("form-result");

    if (form && resultBox) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const budget = parseInt(document.getElementById("budget").value);
            const preference = document.getElementById("vibe-preference").value;
            let suggestion = "";

            // Branching conditional tree
            if (budget < 1100 && preference === "city") {
                suggestion = "<strong>Santo Domingo</strong> fits your budget perfectly! It features low living costs and excellent history hubs.";
            } else if (budget >= 1100 && preference === "beach") {
                suggestion = "We highly recommend <strong>Las Terrenas</strong>. It provides beautiful calm beaches and is perfect for your financial layout.";
            } else if (preference === "active") {
                suggestion = "<strong>Cabarete</strong> is definitely your place! Perfect for water sports and energetic remote workers community.";
            } else {
                suggestion = "<strong>Punta Cana</strong> or <strong>Las Terrenas</strong> are premium matches for your tropical stay profile.";
            }

            resultBox.innerHTML = `<p>🎉 Recommendation: ${suggestion}</p>`;
            resultBox.classList.remove("hidden");
            form.reset();
        });
    }
}