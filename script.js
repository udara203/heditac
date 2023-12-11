document.addEventListener("DOMContentLoaded", function () {
    var productsButton = document.querySelector(".products-button");
    var productDropdown = document.querySelector(".product-dropdown");

    // Toggle product dropdown on button click
    productsButton.addEventListener("click", function () {
        toggleProductList();
    });

    // Show product dropdown on hover
    productsButton.addEventListener("click", function () {
        toggleProductList(true);
    });

    // Hide product dropdown on mouseout
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".product-list")) {
            toggleProductList(false);
        }
    });
});

function toggleProductList(show) {
    var productDropdown = document.querySelector(".product-dropdown");
    productDropdown.style.display = show ? "block" : "none";
}

function toggleContactPopup() {
    // Add your logic to toggle the contact popup
}





/* hero btn foam */

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function submitForm() {
    // Collect user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var inquiry = document.getElementById('inquiry').value;

    // Open new tab with WhatsApp link
    var whatsappLink = 'https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=' +
        encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nInquiry: ' + inquiry);
    window.open(whatsappLink, '_blank');

    // Close the popup
    closePopup();

    // Prevent form submission
    return false;
}
/* hero btn foam */


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});


let currentIndex = 0;

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');

    if (index < 0) {
        index = items.length - 1;
    } else if (index >= items.length) {
        index = 0;
    }

    currentIndex = index;
    const translateValue = -index * 100 + '%';
    carouselInner.style.transform = 'translateX(' + translateValue + ')';
}

// Auto advance to the next slide every 3 seconds (adjust as needed)
setInterval(() => {
    nextSlide();
}, 5000);


/*why section*/
const customCarouselWrapper = document.querySelector('.custom-carousel-wrapper');
    const customTotalItems = document.querySelectorAll('.custom-carousel-item').length;
    let customCurrentIndex = 0;
    let autoScrollInterval;

    function customNextSlide() {
        customCurrentIndex = (customCurrentIndex + 1) % customTotalItems;
        updateCustomCarousel();
    }

    function customPrevSlide() {
        customCurrentIndex = (customCurrentIndex - 1 + customTotalItems) % customTotalItems;
        updateCustomCarousel();
    }

    function updateCustomCarousel() {
        const customTranslateValue = -customCurrentIndex * 100 + '%';
        customCarouselWrapper.style.transform = 'translateX(' + customTranslateValue + ')';
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(customNextSlide, 9000); // Adjust the interval as needed (e.g., 3000 milliseconds for 3 seconds)
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto-scroll when the page loads
    startAutoScroll();

    // Stop auto-scroll when the user interacts with the carousel controls
    document.querySelector('.custom-carousel-controls').addEventListener('mouseover', stopAutoScroll);
    document.querySelector('.custom-carousel-controls').addEventListener('mouseout', startAutoScroll);

    /*popup*/
  
/*end popup*/

/*contact foam on bottom*/

  
/* endcontact foam on bottom*/

  /* contact popup */
  function openPopup() {
    document.getElementById('popup1').style.display = 'block';
}

function closePopup1() {
    document.getElementById('popup1').style.display = 'none';
}

function submitForm() {
    // Collect user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var inquiry = document.getElementById('inquiry').value;

    // Open new tab with WhatsApp link
    var whatsappLink = 'https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=' +
        encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nInquiry: ' + inquiry);
    window.open(whatsappLink, '_blank');

    // Close the popup
    closePopup1();

    // Prevent form submission
    return false;
}
/*end contact popup */

/*advertisment popup */

document.addEventListener("DOMContentLoaded", function () {
    // Display the popup after a delay (e.g., 3 seconds)
    setTimeout(function () {
        document.getElementById("popup-container").style.display = "flex";
    }, 100000);
});

// Function to close the popup
function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}

// Function to close the popup manually
function closePopupManually() {
    closePopup();
}
/*advertisment popup end */

/*prduct popup*/

/*prduct popup end*/