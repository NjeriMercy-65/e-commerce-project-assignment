// var MenuItems = document.getElementById('MenuItems');

// MenuItems.style.maxHeight = '0px';

// function menutoggle() {
//         if (MenuItems.style.maxHeight === '0px')
        
//         {
//         MenuItems.style.maxHeight = '200px';
//         }
//     else
//         {
//             MenuItems.style.maxHeight ='0px';
//         }
//     }

// var MenuItems = document.getElementById('MenuItems');

// if (MenuItems) { // Check if MenuItems exists
//     MenuItems.style.maxHeight = '0px';

//     function menutoggle() {
//         if (MenuItems.style.maxHeight === '0px') { // Use === for comparison, not =
//             MenuItems.style.maxHeight = '200px';
//         } else {
//             MenuItems.style.maxHeight = '0px';
//         }
//     }
// } else {
//     console.error("Element with ID 'MenuItems' not found.");

// }

var MenuItems = document.getElementById('MenuItems');

if (MenuItems) { // Check if MenuItems exists
    MenuItems.style.maxHeight = '0px';

    function menutoggle() {
        if (MenuItems.style.maxHeight === '0px') {
            MenuItems.style.maxHeight = '200px';
        } else {
            MenuItems.style.maxHeight = '0px';
        }
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the menu (if you have a mobile menu)
function menutoggle() {
    const menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}

const quotes = [
    "Your only limit is your mind.",
    "Dream big and dare to fail.",
    "Success is not for the lazy.",
    "Believe you can and you're halfway there."
];

let currentQuoteIndex = 0;

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(displayQuote, 5000);
    
