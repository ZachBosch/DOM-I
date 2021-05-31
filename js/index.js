const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    //top content
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    //bottom content
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

////////////////////////NAV/////////////////////////////
const navLinks = document.querySelector("nav")
navLinks.children[0].textContent = siteContent['nav']['nav-item-1']
navLinks.children[1].textContent = siteContent['nav']['nav-item-2']
navLinks.children[2].textContent = siteContent['nav']['nav-item-3']
navLinks.children[3].textContent = siteContent['nav']['nav-item-4']
navLinks.children[4].textContent = siteContent['nav']['nav-item-5']
navLinks.children[5].textContent = siteContent['nav']['nav-item-6']

////////////////////HEADING AND MAIN IMG/////////////////////
const h1 = document.querySelector('h1')
h1.textContent = siteContent["cta"]["h1"]
const button = document.querySelector("button")
button.innerText = siteContent['cta']['button']
const coderImg = document.querySelector('#cta-img')
coderImg.src = siteContent['cta']['img-src']

/////////////////////////MAIN CONTENT///////////////////
const features = document.querySelector(".text-content:nth-of-type(1)")
features.children[0].textContent = siteContent["main-content"]["features-h4"]
features.children[1].textContent = siteContent["main-content"]["features-content"]

const about = document.querySelector(".text-content:nth-of-type(2")
about.children[0].textContent =  siteContent["main-content"]["about-h4"]
about.children[1].textContent =  siteContent["main-content"]["about-content"]

const midImg = document.querySelector(".main-content img")
midImg.src = siteContent["main-content"]["middle-img-src"]

const srvcs = document.querySelector(".bottom-content div:nth-of-type(1)")
srvcs.children[0].textContent = siteContent["main-content"]["services-h4"]
srvcs.children[1].textContent = siteContent["main-content"]["services-content"]

const product = document.querySelector(".bottom-content div:nth-of-type(2)")
product.children[0].textContent = siteContent["main-content"]["product-h4"]
product.children[1].textContent = siteContent["main-content"]["product-content"]

const vision = document.querySelector(".bottom-content div:nth-of-type(3)")
vision.children[0].textContent = siteContent["main-content"]["vision-h4"]
vision.children[1].textContent = siteContent["main-content"]["vision-content"]

////////////////////////CONTACT/////////////////////////
const contactInfo = document.querySelector(".contact")
contactInfo.children[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.children[1].textContent = siteContent["contact"]["address"]
contactInfo.children[2].textContent = siteContent["contact"]["phone"]
contactInfo.children[3].textContent = siteContent["contact"]["email"]

////////////////////////FOOTER/////////////////////////
const footFoot = document.querySelector("footer p")
footFoot.textContent = siteContent["footer"]["copyright"]



