// Global Variables
const nav = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");

// Creating navigation bar list 
 function create() {
  for (const section of sections) {
    const item = document.createElement("li");
    const itemLink = document.createElement("a");
    itemLink.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    item.appendChild(itemLink);
    fragment.appendChild(item);
  }
  nav.appendChild(fragment);
}
create();

// getBoundingClientRect of viewport
function act(section){
  const act = section.getBoundingClientRect();
  return act.top > -100 && act.top <= 500
}

// Make Active class 
window.addEventListener('scroll', ()=>{
  for (const section of sections) {
    if (act(section)){
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  }
})

// highlight the section in viewport (active section)
window.addEventListener("scroll", () =>{
  for (const section of sections) {
    const link = document.querySelector(`a[href="#${section.id}"]`);
    if (act(section)) {
      link.classList.add("active");
    } else {
     link.classList.remove("active");
    }
  }
})

// smooth scrolling 
nav.addEventListener('click', (e) => {
  e.preventDefault();
  const selected = e.target;
  if (selected.classList.contains('menu__link')) {
      const id = selected.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
       });
  }
});

//display go to top button when scrolling 
window.addEventListener('scroll', () =>{
  const top = document.getElementById('toTop');
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
})

// scroll to top when button clicked
function goTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}