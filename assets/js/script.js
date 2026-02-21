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
<<<<<<< HEAD
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
=======
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
<<<<<<< HEAD
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
=======

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
<<<<<<< HEAD
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
=======

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
<<<<<<< HEAD
    formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
=======
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
<<<<<<< HEAD
    navigationLinks[i].addEventListener("click", function () {
        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                pages[j].classList.add("active");
                navigationLinks[j].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove("active");
                navigationLinks[j].classList.remove("active");
            }
        }
    });
}

/*-----------------------------------*\
  #PORTFOLIO DATA
=======
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
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
\*-----------------------------------*/

// Project Data
const projects = {
<<<<<<< HEAD
    'civicwatch': {
        title: 'CivicWatch - Community Issue Reporting App',
        image: 'assets/images/civicwatch-app.png',
        tech: ['Java', 'Firebase', 'Google Maps API', 'Material Design', 'Glide', 'Retrofit'],
        description: 'A community-driven Android app that empowers citizens to report and track local issues.',
        overview: 'CivicWatch is a mobile application that allows community members to report various issues like potholes, litter, graffiti, and more. The app features an interactive map view, upvoting system, and multi-language support.',
        features: [
            'Report community issues with location and photos',
            'Interactive map view of all reported issues',
            'Upvote important issues to prioritize them',
            'Dark/Light theme support',
            'Multi-language support (English, Spanish, French, Luganda)',
            'Google Sign-In & Guest mode',
            'Image gallery view for issue photos',
            'Home screen widgets for quick access'
        ],
        technologies: 'Built with Java using Android SDK. Firebase Realtime Database for data storage, Firebase Authentication for user management, Google Maps API for location features, Glide for image loading, and Retrofit for networking.',
        role: 'Sole developer responsible for entire app development, from UI/UX design to backend integration. Implemented features like Google Sign-In, multi-language support, and real-time database synchronization.',
        github: 'https://github.com/MusumbaAbeljr055/civicwatch',
        download: 'https://github.com/MusumbaAbeljr055/civicwatch/releases/download/v1.0.0-beta/CivicWatch-v1.0.0-beta.apk',
        demo: '#',
        screenshots: [
            'assets/images/civicwatch-screen1.jpg',
            'assets/images/civicwatch-screen2.jpg',
            'assets/images/civicwatch-screen3.jpg'
        ]
    },
=======
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
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
<<<<<<< HEAD
            'Resource sharing and learning materials'
        ],
        technologies: 'Built with modern JavaScript and React (Vite), Firebase for real-time database and authentication, Chakra UI for responsive design, and HTML/CSS. Features RESTful APIs for seamless integration.',
        role: 'Full stack developer responsible for architecture design, frontend development, Firebase integration, and deployment. Created the user interface and implemented core community features.',
        demo: 'https://devfellowmust.web.app',
        github: 'https://github.com/MusumbaAbeljr055/DevFollow',
        download: '#'
=======
            'Resource sharing and learning materials',
        ],
       technologies: 'Built with modern JavaScript and React (Vite), Firebase for real-time database and authentication, Chakra UI for responsive design, and HTML/CSS. Features RESTful APIs for seamless integration.',
        role: 'Full stack developer responsible for architecture design, frontend development, Firebase integration, and deployment. Created the user interface and implemented core community features.',
        demo: 'https://devfellowmust.web.app',
        github: 'https://github.com/MusumbaAbeljr055/DevFollow'
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
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
<<<<<<< HEAD
            <p>Once installed, you can start with simple commands like <code>print("Hello, World!")</code> and gradually move to more complex concepts.</p>
=======
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
        `
    },
    'flutter-app': {
        title: 'Building Your First Flutter App',
        image: 'assets/images/flutter-app-development.webp',
        date: 'January 12, 2025',
        category: 'Mobile Development',
        content: `
            <h3>Why Flutter for Mobile Development?</h3>
<<<<<<< HEAD
            <p>Flutter has become my go-to framework for mobile app development because it allows you to build for both Android and iOS from a single codebase.</p>
            <h3>Getting Started</h3>
            <p>Install Flutter SDK, set up your editor (VS Code or Android Studio), and create your first project with <code>flutter create my_app</code>.</p>
=======
            <p>Flutter has become my go-to framework for mobile app development.</p>
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
        `
    }
};

<<<<<<< HEAD
/*-----------------------------------*\
  #MODAL FUNCTIONALITY
\*-----------------------------------*/

// Get modal elements
const portfolioModal = document.getElementById('portfolioModal');
const blogModal = document.getElementById('blogModal');
const overlay = document.querySelector('.overlay');

// Get all project and blog links
const portfolioLinks = document.querySelectorAll('.project-link');
const blogLinks = document.querySelectorAll('.blog-link');

// Function to open modal
const openModal = (modal) => {
    modal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Function to close modal
const closeModal = (modal) => {
    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};

=======
// Portfolio Modal Functionality
const portfolioModal = document.getElementById('portfolioModal');
const portfolioLinks = document.querySelectorAll('.project-link');

// Blog Modal Functionality
const blogModal = document.getElementById('blogModal');
const blogLinks = document.querySelectorAll('.blog-link');

>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
// Open Portfolio Modal
portfolioLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            const modalContent = document.getElementById('portfolioModalContent');
<<<<<<< HEAD
            
            // Generate tech tags HTML
            const techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
            
            // Generate features list HTML
            const featuresList = project.features.map(feature => `<li>${feature}</li>`).join('');
            
            // Determine which buttons to show
            const demoButton = project.demo && project.demo !== '#' ? 
                `<a href="${project.demo}" class="form-btn" target="_blank" style="margin-right: 10px;">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : '';
            
            const githubButton = project.github && project.github !== '#' ?
                `<a href="${project.github}" class="form-btn" target="_blank" style="margin-right: 10px;">
                    <i class="fab fa-github"></i> GitHub
                </a>` : '';
            
            const downloadButton = project.download && project.download !== '#' ?
                `<a href="${project.download}" class="form-btn" target="_blank" style="background: #4CAF50;">
                    <i class="fas fa-download"></i> Download APK
                </a>` : '';
            
            modalContent.innerHTML = `
                <h4 class="h3 modal-title">${project.title}</h4>
                <div style="text-align: center; margin: 20px 0;">
                    <img src="${project.image}" alt="${project.title}" style="max-width: 100%; max-height: 300px; border-radius: 10px; object-fit: contain;">
                </div>
                <div class="tech-tags" style="margin: 20px 0;">
                    ${techTags}
                </div>
                <div style="margin-top: 20px;">
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Overview:</strong> ${project.overview}</p>
                    
                    <p><strong>Key Features:</strong></p>
                    <ul style="color: var(--light-gray); margin-left: 20px; margin-bottom: 20px;">
                        ${featuresList}
                    </ul>
                    
                    <p><strong>Technologies Used:</strong> ${project.technologies}</p>
                    
                    <p><strong>My Role:</strong> ${project.role}</p>
                    
                    <div style="margin-top: 30px; display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                        ${demoButton}
                        ${githubButton}
                        ${downloadButton}
                    </div>
                    
                    ${project.download !== '#' ? `
                    <p style="margin-top: 20px; font-size: 12px; color: var(--light-gray-70); text-align: center;">
                        <i class="fas fa-info-circle"></i> The APK is ~11.4 MB. Enable "Install from unknown sources" on your device.
                    </p>` : ''}
                </div>
            `;
            
            openModal(portfolioModal);
=======
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
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
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
<<<<<<< HEAD
            
            modalContent.innerHTML = `
                <h4 class="h3 modal-title">${article.title}</h4>
                <div style="text-align: center; margin: 20px 0;">
                    <img src="${article.image}" alt="${article.title}" style="max-width: 100%; max-height: 300px; border-radius: 10px; object-fit: contain;">
=======
            modalContent.innerHTML = `
                <h4 class="h3 modal-title">${article.title}</h4>
                <div class="modal-img-wrapper">
                    <img src="${article.image}" alt="${article.title}" width="300" style="border-radius: 10px;">
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
                </div>
                <div style="margin-top: 20px;">
                    <p><strong>Date:</strong> ${article.date}</p>
                    <p><strong>Category:</strong> ${article.category}</p>
<<<<<<< HEAD
                    <div style="margin-top: 20px; line-height: 1.8;">${article.content}</div>
                    <div style="margin-top: 30px; text-align: center;">
=======
                    <div style="margin-top: 20px;">${article.content}</div>
                    <div style="margin-top: 20px;">
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
                        <a href="https://musumba.hashnode.dev/" class="form-btn" target="_blank">
                            <i class="fab fa-hashnode"></i> Read More on My Blog
                        </a>
                    </div>
                </div>
            `;
            
<<<<<<< HEAD
            openModal(blogModal);
=======
            blogModal.classList.add('active');
            document.querySelector('.overlay').classList.add('active');
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
        }
    });
});

<<<<<<< HEAD
// Close modals when clicking close button
const closeModalBtns = document.querySelectorAll('.modal-close-btn');
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        closeModal(portfolioModal);
        closeModal(blogModal);
    });
});

// Close modals when clicking overlay
if (overlay) {
    overlay.addEventListener('click', function() {
        closeModal(portfolioModal);
        closeModal(blogModal);
    });
}

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal(portfolioModal);
        closeModal(blogModal);
    }
});

/*-----------------------------------*\
  #FORM SUBMISSION HANDLING
\*-----------------------------------*/

=======
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
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
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
<<<<<<< HEAD
                // Reset form button validation state
                formBtn.setAttribute("disabled", "");
=======
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
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

<<<<<<< HEAD
/*-----------------------------------*\
  #ANTI-INSPECT PROTECTION
\*-----------------------------------*/

function closeProtection() {
    const overlay = document.getElementById('protection-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', function(event) {
    // Prevent Ctrl+U (view source)
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
        const overlay = document.getElementById('protection-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (event.keyCode == 123 || 
        (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74 || event.keyCode == 67))) {
        event.preventDefault();
        const overlay = document.getElementById('protection-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
=======
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
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
    }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
<<<<<<< HEAD
    const overlay = document.getElementById('protection-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

/*-----------------------------------*\
  #CURRENT YEAR UPDATE
\*-----------------------------------*/

=======
    document.getElementById('protection-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Update current year
>>>>>>> 4056b38cb446dca84f1d6bddf46726c8a5942719
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});