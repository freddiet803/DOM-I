const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: `DOM Is Awesome`,
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navArray = Object.values(siteContent['nav']); //array filled with content of the nav objects key: values
let navItems = document.querySelectorAll('header nav a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = navArray[i];
  navItems[i].style.color = 'green';
}

let navBar = document.querySelector('header nav');
let lastAnchor = document.createElement('a');
lastAnchor.textContent = 'Quit';
let firstAnchor = document.createElement('a');
firstAnchor.textContent = 'Start';
navBar.appendChild(lastAnchor);
navBar.prepend(firstAnchor);
//console.log(navArray);

let domAwesome = document.querySelector('.cta-text h1');
//console.log(domAwesome);
domAwesome.append('DOM');
domAwesome.append(document.createElement('br'));
domAwesome.append('Is');
domAwesome.append(document.createElement('br'));
domAwesome.append('Awesome');

let getStartedButton = document.querySelector('.cta-text button');
getStartedButton.textContent = siteContent['cta']['button'];

let ctaLogo = document.getElementById('cta-img');
ctaLogo.src = siteContent['cta']['img-src'];

let topContentTopDiv = document.querySelector('.top-content').firstChild;
let topContentBottomDiv = document.querySelector('.top-content').lastChild;

let newtopFirsth4 = document.createElement('h4');
newtopFirsth4.textContent = siteContent['main-content']['features-h4'];

let topContentH4Array = Object.values(siteContent['main-content']);
let topContenth4 = document.querySelectorAll('.top-content .text-content h4');
let topContentp = document.querySelectorAll('.top-content .text-content p');
// console.log(topContenth4);
// console.log(topContentH4Array);
topContenth4[0].textContent = topContentH4Array[0];
topContenth4[1].textContent = topContentH4Array[2];
topContentp[0].textContent = topContentH4Array[1];
topContentp[1].textContent = topContentH4Array[3];

let middleImage = document.getElementById('middle-img');
middleImage.src = topContentH4Array[4];

let bottomContenth4 = document.querySelectorAll(
  '.bottom-content .text-content h4'
);
let bottomContentp = document.querySelectorAll(
  '.bottom-content .text-content p'
);

bottomContenth4[0].textContent = topContentH4Array[5];
bottomContenth4[1].textContent = topContentH4Array[7];
bottomContenth4[2].textContent = topContentH4Array[9];
bottomContentp[0].textContent = topContentH4Array[6];
bottomContentp[1].textContent = topContentH4Array[8];
bottomContentp[2].textContent = topContentH4Array[10];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactp = document.querySelectorAll('.contact p');
let contactArray = Object.values(siteContent['contact']);

for (let i = 0; i < contactp.length; i++) {
  contactp[i].textContent = contactArray[i + 1];
}

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];
