// Get the input and button

const searchInput = document.getElementById("search");

const searchButton = document.querySelector(".search-btn");

// Cat breed pages

const cats = {

    "persian": "persian.html",

    "siamese": "siamese.html",

    "bengal": "bengal.html",

    "maine coon": "mainecoon.html",

    "ragdoll": "ragdoll.html",

    "british shorthair": "britishshorthair.html",

    "sphynx": "sphynx.html",

    "scottish fold": "scottishfold.html",

    "russian blue": "russianblue.html",

    "abyssinian": "abyssinian.html"

};

// Search function

function searchCat() {

    const query = searchInput.value.toLowerCase().trim();

    if (cats[query]) {

        window.location.href = cats[query];

    } else {

        alert("😿 Sorry, that cat breed was not found!");

    }

}

// Search when the button is clicked

searchButton.addEventListener("click", searchCat);

// Search when Enter is pressed

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchCat();

    }

});