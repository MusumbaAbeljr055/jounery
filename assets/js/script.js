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
        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                pages[j].classList.add("active");
                navigationLinks[j].classList.add("active");
                window.scrollTo(0, 0);
                
                // Dispatch custom event for ad tracking
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('pageChanged', {
                        detail: { page: pages[j].dataset.page }
                    }));
                }, 100);
            } else {
                pages[j].classList.remove("active");
                navigationLinks[j].classList.remove("active");
            }
        }
    });
}

/*-----------------------------------*\
  #PORTFOLIO DATA
\*-----------------------------------*/

// Project Data
const projects = {
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
            'Resource sharing and learning materials'
        ],
        technologies: 'Built with modern JavaScript and React (Vite), Firebase for real-time database and authentication, Chakra UI for responsive design, and HTML/CSS. Features RESTful APIs for seamless integration.',
        role: 'Full stack developer responsible for architecture design, frontend development, Firebase integration, and deployment. Created the user interface and implemented core community features.',
        demo: 'https://devfellowmust.web.app',
        github: 'https://github.com/MusumbaAbeljr055/DevFollow',
        download: '#'
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
            <p>Once installed, you can start with simple commands like <code>print("Hello, World!")</code> and gradually move to more complex concepts.</p>
        `
    },
    'flutter-app': {
        title: 'Building Your First Flutter App',
        image: 'assets/images/flutter-app-development.webp',
        date: 'January 12, 2025',
        category: 'Mobile Development',
        content: `
            <h3>Why Flutter for Mobile Development?</h3>
            <p>Flutter has become my go-to framework for mobile app development because it allows you to build for both Android and iOS from a single codebase.</p>
            <h3>Getting Started</h3>
            <p>Install Flutter SDK, set up your editor (VS Code or Android Studio), and create your first project with <code>flutter create my_app</code>.</p>
        `
    }
};

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

// Open Portfolio Modal
portfolioLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            const modalContent = document.getElementById('portfolioModalContent');
            
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
                <div style="text-align: center; margin: 20px 0;">
                    <img src="${article.image}" alt="${article.title}" style="max-width: 100%; max-height: 300px; border-radius: 10px; object-fit: contain;">
                </div>
                <div style="margin-top: 20px;">
                    <p><strong>Date:</strong> ${article.date}</p>
                    <p><strong>Category:</strong> ${article.category}</p>
                    <div style="margin-top: 20px; line-height: 1.8;">${article.content}</div>
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="https://musumba.hashnode.dev/" class="form-btn" target="_blank">
                            <i class="fab fa-hashnode"></i> Read More on My Blog
                        </a>
                    </div>
                </div>
            `;
            
            openModal(blogModal);
        }
    });
});

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
                // Reset form button validation state
                formBtn.setAttribute("disabled", "");
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
    }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    const overlay = document.getElementById('protection-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

/*-----------------------------------*\
  #CURRENT YEAR UPDATE
\*-----------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

/*-----------------------------------*\
  #ZALSEE POPUP AD FUNCTIONALITY
\*-----------------------------------*/

// Popup ad variables
let popupTimer;
let popupShown = false;
const POPUP_DELAY = 5000; // 5 seconds (adjust as needed)
const POPUP_COOKIE_NAME = 'zalsee_popup_shown';
const POPUP_EXPIRY_DAYS = 1; // Show once per day

// Function to show popup
function showPopup() {
    const popup = document.getElementById('zalseePopup');
    if (popup && !popupShown) {
        popup.style.display = 'flex';
        popupShown = true;
        
        // Set cookie to remember popup was shown
        setCookie(POPUP_COOKIE_NAME, 'true', POPUP_EXPIRY_DAYS);
    }
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('zalseePopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Function to set cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get cookie
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Initialize popup ad
document.addEventListener('DOMContentLoaded', function() {
    // Check if popup was already shown today
    const popupShownCookie = getCookie(POPUP_COOKIE_NAME);
    
    if (!popupShownCookie) {
        // Show popup after delay
        popupTimer = setTimeout(showPopup, POPUP_DELAY);
    }
    
    // Handle popup link click
    const popupLink = document.getElementById('zalseePopupLink');
    if (popupLink) {
        popupLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Track click
            console.log('Zalsee Estates popup ad clicked');
            
            // Open Zalsee Estates website
            window.open('https://abbey055.github.io/zalseefestatesmbarara/#/', '_blank');
            
            // Close popup
            closePopup();
        });
    }
    
    // Close popup when clicking outside
    const popup = document.getElementById('zalseePopup');
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopup();
            }
        });
    }
    
    // Clear timer if user navigates away
    window.addEventListener('beforeunload', function() {
        if (popupTimer) {
            clearTimeout(popupTimer);
        }
    });
});

// Reset popup when page changes
window.addEventListener('pageChanged', function() {
    const popupShownCookie = getCookie(POPUP_COOKIE_NAME);
    if (!popupShownCookie && !popupShown) {
        if (popupTimer) {
            clearTimeout(popupTimer);
        }
        popupTimer = setTimeout(showPopup, POPUP_DELAY);
    }
});