//Caring Kitchen 2026

// Get HTMLs as JS Objects //////////////////////////

let dropdown = document.getElementById("catDrop");
let cards = document.querySelectorAll(".card");

// Create the function /////////////////////////////

function filterCards() {
    var selected = dropdown.value;

    cards.forEach(function(card) {
        var category = card.querySelector("h4").textContent.trim();

        if (selected === "" || category === selected) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Register the function to the event ////////////////

dropdown.addEventListener("change", filterCards);

// Thanks to CoPilot for help on this
