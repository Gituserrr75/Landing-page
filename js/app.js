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
      section.scrollIntoView({ behavior: "smooth" });
    });
    item.appendChild(itemLink);
    fragment.appendChild(item);
  }
  navBar.appendChild(fragment);
}
createlist();
 const sec1 = document.getElementById('section1');
 const sec2 = document.getElementById('section2');
 const sec3 = document.getElementById('section3');
 
function scroll(){
    itemLink.addEventListener ('click', (evt) =>{
        evt.preventDefault()
        const selected = document.getElementById(evt.target.getAttribute("herf").subString(1))
        selected.scrollIntoView({
            behavior: "smooth" ,
            block: "center"
        })
    })
    
}


function active(section){
const activeElement = section.getBoundingClientRect();
return (
    activeElement.top >= 0 && activeElement.top < 200
);
}
document.addEventListener('scroll', function makeactive() {
    for (const section of sections){
        if( active(section)) {
            section.classList.add("your-active-class");
        }
        else {section.classList.remove("your-active-class");}
    }
}
)

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
