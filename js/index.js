const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//fix title
const fixTitle = document.querySelector("title");
fixTitle.textContent = "Great Idea!";

//NAV
const navLinks = document.querySelector("nav");
navLinks.children[0].textContent = "Services";
navLinks.children[1].textContent = "Product";
navLinks.children[2].textContent = "Vision";
navLinks.children[3].textContent = "Features";
navLinks.children[4].textContent = "About";
navLinks.children[5].textContent = "Contact";

//NAV ALTERNATE
// const a1 = document.querySelector("a:nth-of-type(1)");
// a1.textContent = "Services";
// const a2 = document.querySelector("a:nth-of-type(2)");
// a2.textContent = "Product";
// const a3 = document.querySelector("a:nth-of-type(3)");
// a3.textContent = "Vision";
// const a4 = document.querySelector("a:nth-of-type(4)");
// a4.textContent = "Features";
// const a5 = document.querySelector("a:nth-of-type(5)");
// a5.textContent = "About";
// const a6 = document.querySelector("a:nth-of-type(6)");
// a6.textContent = "Contact";

const fixImage = document.querySelector("#cta-img");
fixImage.src = "img/header-img.png";
console.log(fixImage);

const h1 = document.querySelector("h1");
h1.innerText = "DOM \nIs \nAwesome";

// const h1Title = document.querySelector("h1");
// h1Title.innerText = siteContent["cta"]["h1"];