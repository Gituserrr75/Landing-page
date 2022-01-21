

// Global Variables
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();

// Creating navigation bar list 
function createlist() {
  for (const section of sections) {
    const item = document.createElement("li");
    const itemLink = document.createElement("a");
    itemLink.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    itemLink.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ 
        behavior: "smooth" , 
     block: 'center'
    });
    });
    item.appendChild(itemLink);
    fragment.appendChild(item);
  }
  navBar.appendChild(fragment);
}
createlist();

// getting BoundingClientRect of viewport
function active(section) {
    const activeElement = section.getBoundingClientRect();
    return activeElement.top > -100 && activeElement.top <= 500
}

//   setting active section and nav-bar highlight when in viewport
window.addEventListener("scroll", makeActive);
function makeActive() {
  for(const section of sections) {
    const link = document.querySelector(`a[href="#${section.id}"]`);
    if (active(section)) {
     section.classList.add("your-active-class");
      link.classList.add("active");
    } else {
     section.classList.remove("your-active-class");
     link.classList.remove("active");
    }
  }
}
