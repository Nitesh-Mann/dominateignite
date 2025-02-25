//loader animation//
window.addEventListener("load", function () {
  var loader = document.querySelector(".loader");

  // Show loader for 1 second before hiding it
  setTimeout(function () {
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 500); // 1 second delay for loader
});

// captcha
document.getElementById("contactForm").onsubmit = function (event) {
  var recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse.length == 0) {
    alert("Please complete the reCAPTCHA.");
    event.preventDefault(); // Prevent form submission
  }
};

//swiper//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  freeMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  },
});

//form function//

document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".form-btn"); // Select all elements with .btns
  const closeBtn = document.querySelector(".form-close");
  const formContainer = document.querySelector(".form-container");
  const formWrapper = document.querySelector(".form-wrapper");
  const html = document.documentElement; // Select the html element (root element)
  const body = document.body;

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      formContainer.style.display = "block"; // Show the form
      html.style.overflow = "hidden"; // Disable scrolling on the entire page
      body.style.overflow = "hidden"; // Disable scrolling on body as well (some browsers may need this)
    });
  });

  closeBtn.addEventListener("click", function () {
    formContainer.style.display = "none"; // Hide the form
    html.style.overflow = "auto"; // Enable scrolling on the entire page
    body.style.overflow = "auto"; // Enable scrolling on body as well
  });

  // Hide the form when clicking on .form-container itself
  formWrapper.addEventListener("click", function (event) {
    if (event.target === formWrapper) {
      formContainer.style.display = "none"; // Hide the form
      html.style.overflow = "auto"; // Enable scrolling on the entire page
      body.style.overflow = "auto"; // Enable scrolling on body as well
    }
  });
});

// scroll to top //
document.addEventListener("DOMContentLoaded", function () {
  // Check the window's scroll position on page load and toggle the scale of the "to-top" button
  toggleToTopButton();

  // Toggle the scale of the "to-top" button on scroll
  window.addEventListener("scroll", toggleToTopButton);

  // Scroll to top when the "to-top" button is clicked
  document.querySelector(".to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top with smooth behavior
  });

  // Function to toggle the scale of the "to-top" button
  function toggleToTopButton() {
    const toTopButton = document.querySelector(".to-top");
    if (window.scrollY === 0) {
      toTopButton.style.transform = "scale(0)";
    } else {
      toTopButton.style.transform = "scale(1)";
    }
  }
});

//show-header//
document.getElementById("menu-toggle").addEventListener("change", function () {
  const header = document.querySelector(".header2");
  header.classList.toggle("show-header");

  if (header.classList.contains("show-header")) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = ""; // Enable scrolling
  }
});

// Listen for clicks on the document
document.addEventListener("click", function (event) {
  const header = document.querySelector(".header2");
  const menuToggle = document.getElementById("menu-toggle");
  const menuCheckbox = document.getElementById("menu-checkbox");

  // Check if the click was outside the header and the menu toggle
  if (
    header.classList.contains("show-header") &&
    !header.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    header.classList.remove("show-header");
    document.body.style.overflow = ""; // Enable scrolling

    // Uncheck the menu toggle if it's a checkbox
    if (menuToggle.type === "checkbox") {
      menuToggle.checked = false;
    }

    // Uncheck the menu-checkbox
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }
});

//header background//
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header1-wrapper");
  if (window.scrollY > 150) {
    // Change 50 to adjust when the effect starts
    header.style.backgroundColor = "var(--body)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// privacy //
document.addEventListener("DOMContentLoaded", function () {
  const policyBtns = document.querySelectorAll(".showprivacy, .showpolicy2"); // Select both classes
  const privacyWrapper = document.querySelector(".policycontainer");
  const closePrivacy = document.querySelector(".closepolicy");

  // Ensure elements exist before applying event listeners
  if (!policyBtns.length || !privacyWrapper || !closePrivacy) return;

  // Ensure the privacy wrapper is hidden by default
  privacyWrapper.style.display = "none";

  // Function to disable/enable scrolling
  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : "";
  }

  // Show privacy policy when any button is clicked
  policyBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent document click from immediately closing it
      privacyWrapper.style.display = "block";
      toggleBodyScroll(true); // Disable scrolling
    });
  });

  // Hide when clicking outside the content
  document.addEventListener("click", function (event) {
    if (
      privacyWrapper.style.display === "block" &&
      !event.target.closest(".policycontent") &&
      !event.target.closest(".showprivacy") &&
      !event.target.closest(".show2") // Ensure clicking the button doesn’t immediately close it
    ) {
      privacyWrapper.style.display = "none";
      toggleBodyScroll(false); // Enable scrolling
    }
  });

  // Hide when clicking the close button
  closePrivacy.addEventListener("click", function () {
    privacyWrapper.style.display = "none";
    toggleBodyScroll(false); // Enable scrolling
  });
});

// terms //
document.addEventListener("DOMContentLoaded", function () {
  const conditionBtns = document.querySelectorAll(".showterms, .showterms2"); // Select both classes
  const conditionWrapper = document.querySelector(".termscontainer");
  const closeCondition = document.querySelector(".closeterms");

  // Ensure elements exist before applying event listeners
  if (!conditionBtns.length || !conditionWrapper || !closeCondition) return;

  // Ensure the terms container is hidden by default
  conditionWrapper.style.display = "none";

  // Function to disable/enable scrolling
  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : "";
  }

  // Show terms when any button is clicked
  conditionBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent document click from immediately closing it
      conditionWrapper.style.display = "block";
      toggleBodyScroll(true); // Disable scrolling
    });
  });

  // Hide when clicking outside the content
  document.addEventListener("click", function (event) {
    if (
      conditionWrapper.style.display === "block" &&
      !event.target.closest(".termscontent") &&
      !event.target.closest(".showterms") && // Ensure clicking the button doesn’t immediately close it
      !event.target.closest(".showterms2")
    ) {
      conditionWrapper.style.display = "none";
      toggleBodyScroll(false); // Enable scrolling
    }
  });

  // Hide when clicking the close button
  closeCondition.addEventListener("click", function () {
    conditionWrapper.style.display = "none";
    toggleBodyScroll(false); // Enable scrolling
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const refundBtns = document.querySelectorAll(".showrefund, .showrefund2");
  const refundWrapper = document.querySelector(".refundcontainer");
  const closeRefund = document.querySelector(".closerefund");

  // Ensure elements exist before applying event listeners
  if (!refundBtns.length || !refundWrapper || !closeRefund) return;

  // Ensure the refund container is hidden by default
  refundWrapper.style.display = "none";

  // Function to disable/enable scrolling
  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : "";
  }

  // Show refund popup when any button is clicked
  refundBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent document click from immediately closing it
      refundWrapper.style.display = "block";
      toggleBodyScroll(true); // Disable scrolling
    });
  });

  // Hide when clicking outside the content
  document.addEventListener("click", function (event) {
    if (
      refundWrapper.style.display === "block" &&
      !event.target.closest(".refundcontent") &&
      !event.target.closest(".showrefund") && // Ensure clicking the button doesn’t immediately close it
      !event.target.closest(".showrefund2")
    ) {
      refundWrapper.style.display = "none";
      toggleBodyScroll(false); // Enable scrolling
    }
  });

  // Hide when clicking the close button
  closeRefund.addEventListener("click", function () {
    refundWrapper.style.display = "none";
    toggleBodyScroll(false); // Enable scrolling
  });
});
