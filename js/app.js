/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
function createlist() {
  for (const section of sections) {
    const item = document.createElement("li");
    const itemLink = document.createElement("a");
    itemLink.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    itemLink.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" , 
     block: 'center'});
    });
    item.appendChild(itemLink);
    fragment.appendChild(item);
  }
  navBar.appendChild(fragment);
}
createlist();
 
function active(section){
const activeElement = section.getBoundingClientRect();
return activeElement.top > -100 && activeElement.top <= 500
}
window.addEventListener("scroll", makeActive);
function makeActive() {
for (const section of sections){
  const link = document.querySelector(`a[href="#${section.id}"]`);
if( active(section)) {
  section.classList.add("your-active-class");
  link.classList.add("active");
}else {
     section.classList.remove("your-active-class");
     link.classList.remove("active");
    }
  }
}

//  * End Global Variables
//  * Start Helper Functions
//  * 
// */



// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
// */

// // build the nav


// // Add class 'active' to section when near top of viewport


// // Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active 
