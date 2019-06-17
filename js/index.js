const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Updated navigation links in nav
const navigation = document.querySelectorAll("nav a");
navigation.forEach((a, index) => {
  a.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// Updated call-to-action
// TODO: ADD LINEBREAK IN H1
const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent.cta["img-src"]);

// Updated main content
const mainContentHeading = document.querySelectorAll(".text-content h4");
const mainContentText = document.querySelectorAll(".text-content p");

for (let i = 0; i < 5; i++) {
  let section = "";
  switch (i) {
    case 0:
      section = "features";
      break;
    case 1:
      section = "about";
      break;
    case 2:
      section = "services";
      break;
    case 3:
      section = "product";
      break;
    case 4:
      section = "vision";
      break;
  }
  mainContentHeading[i].textContent =
    siteContent["main-content"][`${section}-h4`];
  mainContentText[i].textContent =
    siteContent["main-content"][`${section}-content`];
}

const mainContentImage = document.getElementById("middle-img");
mainContentImage.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

// Updated contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

// TODO: ADD LINEBREAK IN ADDRESS
const contactText = document.querySelectorAll(".contact p");
const siteKeys = Object.keys(siteContent.contact);
contactText.forEach((p, index) => {
  p.textContent = siteContent.contact[`${siteKeys[index + 1]}`];
});

// Updated footer
const footerText = document.querySelector("footer p");
footerText.textContent = siteContent.footer.copyright;

// Changing the nagivation text to be Green
navigation.forEach(a => {
  a.style.color = "Green";
});

// Adding links to the navigation bar
const nav = document.querySelector("nav");

const newLink1 = document.createElement("a");
newLink1.setAttribute("href", "#");
newLink1.textContent = "Support";
newLink1.style.color = "Green";
nav.appendChild(newLink1);

const newLink2 = document.createElement("a");
newLink2.setAttribute("href", "#");
newLink2.textContent = "Blog";
newLink2.style.color = "Green";
nav.appendChild(newLink2);

// Stretch Goal
let isClicked = 0;
ctaButton.addEventListener("click", () => {
  if (isClicked === 0) {
    document.querySelector("body").style.backgroundColor = "slategrey";
    isClicked++;
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    isClicked = 0;
  }
});
