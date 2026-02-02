'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

/*-----------------------------------*\
  #MUSUMBA PORTFOLIO ADDITIONS
\*-----------------------------------*/

// Project Data
const projects = {
    'devfollow': {
        title: 'DevFollow - MUST Developer Community',
        image: 'assets/images/devfollow.png',
        tech: ['JavaScript', 'HTML/CSS', 'Firebase', 'REST APIs', 'UI/UX Design'],
        description: 'A developer community platform for MUST students to connect, collaborate, and showcase their projects.',
        overview: 'DevFollow is a platform designed specifically for Mbarara University of Science and Technology students to connect with fellow developers, share projects, and collaborate on innovative ideas.',
        features: [
            'Developer profiles and portfolio showcase',
            'Project sharing and collaboration tools',
            'Real time chat and messaging system',
            'Resource sharing and learning materials',
        ],
       technologies: 'Built with modern JavaScript and React (Vite), Firebase for real-time database and authentication, Chakra UI for responsive design, and HTML/CSS. Features RESTful APIs for seamless integration.',
        role: 'Full stack developer responsible for architecture design, frontend development, Firebase integration, and deployment. Created the user interface and implemented core community features.',
        demo: 'https://devfellowmust.web.app',
        github: 'https://github.com/MusumbaAbeljr055/DevFollow'
    }
};

// Blog Articles
const blogArticles = {
    'python-beginners': {
        title: 'Python for Beginners: A MUST Student\'s Guide',
        image: 'assets/images/opp3.jpg',
        date: 'March 15, 2025',
        category: 'Programming',
        content: `
            <h3>Why Python is Perfect for University Students</h3>
            <p>As an Information Tech student at MUST, I've found Python to be the most accessible and versatile programming language for beginners.</p>
            <h3>Getting Started with Python</h3>
            <p>First, you'll need to install Python on your computer. Visit python.org and download the latest version.</p>
        `
    },
    'flutter-app': {
        title: 'Building Your First Flutter App',
        image: 'assets/images/flutter-app-development.webp',
        date: 'January 12, 2025',
        category: 'Mobile Development',
        content: `
            <h3>Why Flutter for Mobile Development?</h3>
            <p>Flutter has become my go-to framework for mobile app development.</p>
        `
    }
};

// Portfolio Modal Functionality
const portfolioModal = document.getElementById('portfolioModal');
const portfolioLinks = document.querySelectorAll('.project-link');

// Blog Modal Functionality
const blogModal = document.getElementById('blogModal');
const blogLinks = document.querySelectorAll('.blog-link');

// Open Portfolio Modal
portfolioLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            const modalContent = document.getElementById('portfolioModalContent');
            modalContent.innerHTML = `
                <h4 class="h3 modal-title">${project.title}</h4>
                <div class="modal-img-wrapper">
                    <img src="${project.image}" alt="${project.title}" width="300" style="border-radius: 10px;">
                </div>
                <div style="margin-top: 20px;">
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Technologies:</strong> ${project.tech.join(', ')}</p>
                    <p><strong>Features:</strong></p>
                    <ul style="color: var(--light-gray); margin-left: 20px;">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <p><strong>My Role:</strong> ${project.role}</p>
                    <div style="margin-top: 20px;">
                        <a href="${project.demo}" class="form-btn" target="_blank" style="margin-right: 10px;">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.github}" class="form-btn" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            `;
            
            portfolioModal.classList.add('active');
            document.querySelector('.overlay').classList.add('active');
        }
    });
});

// Open Blog Modal
blogLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const articleId = this.getAttribute('data-article');
        const article = blogArticles[articleId];
        
        if (article) {
            const modalContent = document.getElementById('blogModalContent');
            modalContent.innerHTML = `
                <h4 class="h3 modal-title">${article.title}</h4>
                <div class="modal-img-wrapper">
                    <img src="${article.image}" alt="${article.title}" width="300" style="border-radius: 10px;">
                </div>
                <div style="margin-top: 20px;">
                    <p><strong>Date:</strong> ${article.date}</p>
                    <p><strong>Category:</strong> ${article.category}</p>
                    <div style="margin-top: 20px;">${article.content}</div>
                    <div style="margin-top: 20px;">
                        <a href="https://musumba.hashnode.dev/" class="form-btn" target="_blank">
                            <i class="fab fa-hashnode"></i> Read More on My Blog
                        </a>
                    </div>
                </div>
            `;
            
            blogModal.classList.add('active');
            document.querySelector('.overlay').classList.add('active');
        }
    });
});

// Close modals when clicking close button or overlay
const closeModalBtns = document.querySelectorAll('.modal-close-btn');
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        portfolioModal.classList.remove('active');
        blogModal.classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('[data-form-btn]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon> Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Network error. Please check your connection and try again.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Anti-Inspect Protection
function closeProtection() {
    document.getElementById('protection-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
        document.getElementById('protection-overlay').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    if (event.keyCode == 123 || 
        (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74 || event.keyCode == 67))) {
        event.preventDefault();
        document.getElementById('protection-overlay').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    document.getElementById('protection-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Update current year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});