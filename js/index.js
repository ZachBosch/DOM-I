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
navLinks.children[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks.children[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks.children[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks.children[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks.children[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks.children[5].textContent = siteContent["nav"]["nav-item-6"];


//Header Image
const fixImage = document.querySelector("#cta-img");
fixImage.src = "img/header-img.png";
console.log(fixImage);

//DOM Line Breaks
const h1 = document.querySelector("h1");
h1.innerText = "DOM \nIs \nAwesome";

//button text
const btn = document.querySelector("button");
btn.innerText = "Get Started";

//middle-image
const middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];

//body paragraphs
const topContent1 = document.querySelector('.top-content div:nth-of-type(1)');
topContent1.children[0].textContent = siteContent["main-content"]["features-h4"];
topContent1.children[1].textContent = siteContent["main-content"]["features-content"];

const topContent2 = document.querySelector('.top-content div:nth-of-type(2)');
topContent2.children[0].textContent = siteContent["main-content"]["about-h4"];
topContent2.children[1].textContent = siteContent["main-content"]["about-content"];

const btmContent3 = document.querySelector('.bottom-content div:nth-of-type(1)');
btmContent3.children[0].textContent = siteContent["main-content"]["services-h4"];
btmContent3.children[1].textContent = siteContent["main-content"]["services-content"];

const btmContent4 = document.querySelector('.bottom-content div:nth-of-type(2)');
btmContent4.children[0].textContent = siteContent["main-content"]["product-h4"];
btmContent4.children[1].textContent = siteContent["main-content"]["product-content"];

const btmContent5 = document.querySelector('.bottom-content div:nth-of-type(3)');
btmContent5.children[0].textContent = siteContent["main-content"]["vision-h4"];
btmContent5.children[1].textContent = siteContent["main-content"]["vision-content"];

//contact
const contactInfo = document.querySelector(".contact");
contactInfo.children[0].textContent = siteContent["contact"]["contact-h4"];
contactInfo.children[1].textContent = siteContent["contact"]["address"];
contactInfo.children[2].textContent = siteContent["contact"]["phone"];
contactInfo.children[3].textContent = siteContent["contact"]["email"];

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];