// Buttons

const exploreBtn = document.querySelector(".primary");
const catsBtn = document.querySelector(".secondary");

// Explore button

exploreBtn.addEventListener("click", () => {

    alert("Welcome to Purr Studio! 🐱✨");

});

// Meet cats button

catsBtn.addEventListener("click", () => {

    const gallery = document.querySelector(".gallery");

    gallery.scrollIntoView({

        behavior: "smooth"

    });

});

// Cat cards

const cards = document.querySelectorAll(".cat-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const name = card.querySelector("h3").textContent;

        if (name === "Luna") {

            alert(
                "🐱 Luna\n\nAge: 2 years\nFavorite food: Fish\nFavorite toy: Ball"
            );

        }

        else if (name === "Mochi") {

            alert(
                "😸 Mochi\n\nAge: 1 year\nFavorite food: Chicken\nFavorite toy: Mouse"
            );

        }

        else if (name === "Snow") {

            alert(
                "😻 Snow\n\nAge: 3 years\nFavorite food: Tuna\nFavorite toy: Feather"
            );

        }

    });

});

// Floating logo animation



const joinBtn = document.getElementById("join-btn");

joinBtn.addEventListener("click", () => {

    const email = document.getElementById("email").value;

    if (!email) {

        document.getElementById("message").textContent =
            "❌ Please enter an email address.";

        return;
    }

    emailjs.send(

        "service_vbo289k",

        "template_hwuobqh",

        {

            title: "Welcome to Purr Encyclopedia 😺",

            name: "Purr Encyclopedia",

            time: new Date().toLocaleString(),

            user_email: email

        }

    )

    .then(() => {

        document.getElementById("message").textContent =
            "✅ Welcome email sent!";

    })

    .catch((error) => {

        console.error(error);

        document.getElementById("message").textContent =
            "❌ Failed to send email.";

    });

});