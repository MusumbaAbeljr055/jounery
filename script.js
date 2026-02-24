// ===== THEME SWITCHER FUNCTIONALITY =====

// Get theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIndicator('Dark');
} else {
    document.body.classList.remove('dark-mode');
    updateThemeIndicator('Light');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    // Toggle dark mode class
    document.body.classList.toggle('dark-mode');

    // Update theme in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        updateThemeIndicator('Dark');
        console.log('🌙 Switched to Dark Mode');
    } else {
        localStorage.setItem('theme', 'light');
        updateThemeIndicator('Light');
        console.log('🌞 Switched to Light Mode');
    }

    // Add animation effect
    themeToggle.style.transform = 'scale(1.1) rotate(15deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
});

// Update theme indicator in footer
function updateThemeIndicator(theme) {
    const themeIndicator = document.getElementById('current-theme');
    if (themeIndicator) {
        themeIndicator.textContent = theme;
    }
}

// Detect system preference (optional)
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark theme
        if (!localStorage.getItem('theme')) {
            // Only auto-switch if user hasn't manually set a preference
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeIndicator('Dark');
        }
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            // Only auto-switch if user hasn't manually set a preference
            if (e.matches) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
                updateThemeIndicator('Dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
                updateThemeIndicator('Light');
            }
        }
    });
}

// Initialize theme on page load
window.addEventListener('load', () => {
    detectSystemTheme();
    console.log('✅ Theme switcher initialized');
});

// ===== RESPONSIVE FUNCTIONALITY =====

// Handle mobile menu toggle
function handleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.innerHTML = nav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';

            // Prevent body scroll when menu is open
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = 'auto';
            });
        });
    }
}

// Handle responsive images
function handleResponsiveImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Ensure images don't overflow containers
        img.style.maxWidth = '100%';
        img.style.height = 'auto';

        // Add lazy loading
        img.setAttribute('loading', 'lazy');
    });
}

// Handle form responsiveness
function handleFormResponsiveness() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Add responsive validation
        contactForm.addEventListener('input', function (e) {
            const input = e.target;
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // Adjust validation for mobile
                if (input.name === 'name' && input.value.trim().length < 2) {
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#10b981';
                }
            }
        });
    }
}

// Handle modal responsiveness
function handleModalResponsiveness() {
    const portfolioModal = document.getElementById('portfolioModal');
    const blogModal = document.getElementById('blogModal');
    const modals = [portfolioModal, blogModal];

    modals.forEach(modal => {
        if (modal) {
            // Adjust modal content on resize
            window.addEventListener('resize', () => {
                if (modal.style.display === 'block') {
                    // Re-center modal
                    const modalContent = modal.querySelector('.modal-content');
                    if (modalContent) {
                        modalContent.style.margin = '2rem auto';
                    }
                }
            });
        }
    });
}

// Handle touch events for mobile
function handleTouchEvents() {
    // Add swipe detection for mobile menu
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const nav = document.getElementById('nav');
        const isMobile = window.innerWidth <= 768;

        if (!isMobile || !nav) return;

        if (touchStartX - touchEndX > 50) {
            // Swipe left - close menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const hamburger = document.getElementById('hamburger');
                if (hamburger) {
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
                document.body.style.overflow = 'auto';
            }
        }
    }
}

// Handle viewport changes
function handleViewportChanges() {
    let resizeTimer;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Update CSS variables for responsive sizes
            const isMobile = window.innerWidth <= 768;
            const root = document.documentElement;

            if (isMobile) {
                root.style.setProperty('--border-radius', '0.8rem');
            } else {
                root.style.setProperty('--border-radius', '1rem');
            }

            // Close mobile menu if switching to desktop
            if (window.innerWidth > 768) {
                const nav = document.getElementById('nav');
                const hamburger = document.getElementById('hamburger');

                if (nav && hamburger && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = 'auto';
                }
            }
        }, 250);
    });
}

// Initialize all responsive features
function initResponsiveFeatures() {
    handleMobileMenu();
    handleResponsiveImages();
    handleFormResponsiveness();
    handleModalResponsiveness();
    handleTouchEvents();
    handleViewportChanges();

    console.log('✅ Responsive features initialized');
}

// ===== ALL OTHER FUNCTIONALITY =====

// Project Data (2 projects only)
const projects = {
    'python-bootcamp': {
        title: 'Python Bootcamp Platform',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        tech: ['Python', 'Django', 'JavaScript', 'PostgreSQL', 'HTML/CSS', 'Bootstrap'],
        description: 'A comprehensive online learning platform designed to teach Python programming to beginners and intermediate learners.',
        overview: 'This platform was developed to address the growing demand for Python programming skills in market. The bootcamp provides structured learning paths, interactive coding exercises, and real world projects to help students build practical skills.',
        features: [
            'Interactive coding environment with real-time feedback',
            'Video tutorials and lecture notes',
            'Student progress tracking and analytics',
            'Code submission and auto-grading system',
            'Discussion forums for peer learning',
            'Certificate generation upon completion'
        ],
        technologies: 'Built with Django backend, firebase, and modern JavaScript frontend. Implements REST APIs for seamless integration between components.',
        role: 'Full stack developer designed the architecture, implemented core features, and deployed the application. Also created the curriculum and coding exercises(MCQs).',
        demo: '#',
        github: 'https://github.com/musumbasa/python-bootcamp'
    }
};

// Blog Articles (2 articles only)
const blogArticles = {
    'python-beginners': {
        title: 'Python for Beginners: A MUST Student\'s Guide',
        image: 'opp3.jpg',
        date: 'March 15, 2025',
        category: 'Programming',
        content: `
            <h3>Why Python is Perfect for University Students</h3>
            <p>As an Information Tech student at MUST, I've found Python to be the most accessible and versatile programming language for beginners. Its simple syntax allows you to focus on learning programming concepts rather than getting bogged down in complex syntax rules.</p>
            
            <h3>Getting Started with Python</h3>
            <p>First, you'll need to install Python on your computer. Visit python.org and download the latest version. I recommend using VS Code as your code editor - it's lightweight and has excellent Python support.</p>
            
            <p>Here's your first Python program:</p>
            <pre style="background: var(--card-bg); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; border: 1px solid var(--border-color);">
print("Hello, MUST!")
print("Welcome to Python Programming")
            </pre>
            
            <h3>Key Concepts to Master</h3>
            <ul>
                <li><strong>Variables and Data types</strong> Understand integers, floats, strings, and booleans</li>
                <li><strong>Control structures</strong> Master if/else statements, loops (for and while)</li>
                <li><strong>Functions</strong> Learn to create reusable code blocks</li>
                <li><strong>Collections</strong> Essential data structures for organizing data</li>
                <li><strong>File Handling</strong> Reading from and writing to files</li>
            </ul>
            
            <h3>Project Ideas for Practice</h3>
            <p>Start with these beginner-friendly projects:</p>
            <ol>
                <li><strong>Calculator</strong> Create a simple calculator that performs basic operations</li>
                <li><strong>Number guessing game</strong> Generate random numbers and let users guess</li>
                <li><strong>Todo List</strong> Build a console-based task management system</li>
            </ol>
            
            <h3>Resources for Students</h3>
            <p>Take advantage of these resources available to students</p>
            <ul>
                <li><a href="https://musumba.hashnode.dev/" target="_blank" class="btn" style="background: var(--main-color); color: white; font-weight: bold; font-size: 1.6rem; padding: 1rem 2rem; border-radius: 50px; display: inline-block; text-decoration: none;">
                    <i class="fab fa-hashnode"></i> Visit Hashnode Blog
                </a></li>
            </ul>
            
            <h3>Building Your Portfolio</h3>
            <p>As you learn, document your projects on GitHub. This will be invaluable when applying for internships or jobs. Start with simple projects and gradually increase complexity.</p>
            
            <!-- ADDED BLOG LINK SECTION -->
            <div style="background: linear-gradient(45deg, var(--main-color), var(--secondary-color)); padding: 2rem; border-radius: 1rem; margin: 3rem 0; text-align: center; border: 2px solid rgba(255,255,255,0.1);">
                <h3 style="color: white; margin-bottom: 1.5rem; font-size: 2.2rem;"><i class="fab fa-hashnode"></i> Explore More on My Blog</h3>
                <p style="color: rgba(255,255,255,0.9); font-size: 1.6rem; margin-bottom: 1.5rem; line-height: 1.6;">
                    Want more Python tutorials, advanced guides, and tech insights? Visit my Hashnode blog for comprehensive articles and tutorials!
                </p>
                <a href="https://musumba.hashnode.dev/" target="_blank" class="btn" 
                   style="background: white; color: var(--main-color); font-weight: bold; font-size: 1.6rem; padding: 1rem 2rem; border-radius: 50px; display: inline-block; text-decoration: none;">
                    <i class="fab fa-hashnode"></i> Visit Hashnode Blog
                </a>
            </div>
            
            <p>Remember, consistency is key. Dedicate at least 30 minutes daily to coding practice, and you'll see remarkable progress within a few months.</p>
        `
    },
    'flutter-app': {
        title: 'Building Your First Flutter App',
        image: 'flutter-app-development.webp',
        date: 'January 12, 2025',
        category: 'Mobile Development',
        content: `
            <h3>Why Flutter for Mobile Development?</h3>
            <p>Flutter has become my go-to framework for mobile app development, and here's why it should be yours too:</p>
            <ul>
                <li><strong>Crossplatform</strong> Write once, run on both Android and iOS</li>
                <li><strong>Hot Reload</strong> See changes instantly without restarting the app</li>
                <li><strong>Beautiful UI</strong> Material Design and Cupertino widgets out of the box</li>
                <li><strong>Performance</strong> Compiles to native ARM code for smooth performance</li>
                <li><strong>Growing Community</strong> Strong support and abundant resources</li>
            </ul>
            
            <h3>Step 1: Setting Up Your Development Environment</h3>
            <p>Before we start coding, let's set up Flutter on your computer:</p>
            <ol>
                <li>Download Flutter SDK from flutter.dev</li>
                <li>Extract the zip file to a preferred location</li>
                <li>Add Flutter to your system PATH</li>
                <li>Install Android Studio or VS Code with Flutter extension</li>
                <li>Run <code>flutter doctor</code> to verify installation</li>
            </ol>
            
            <h3>Step 2: Creating Your First Flutter App</h3>
            <p>Open your terminal and run:</p>
            <pre style="background: var(--card-bg); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; border: 1px solid var(--border-color);">
flutter create first app
cd my_first_app
flutter run
            </pre>
            
            <h3>Step 3: Understanding Flutter Architecture</h3>
            <p>Flutter apps are built using widgets. Everything is a widget - from structural elements to styling. Here's a basic app structure:</p>
            <pre style="background: var(--card-bg); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; border: 1px solid var(--border-color);">
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First Flutter App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello, MUST Students!'),
        ),
      ),
    );
  }
}
            </pre>
            
            <h3>Step 4: Building a simple to-do App</h3>
            <p>Let's build a practical app a simple to-do list. We'll need:</p>
            <ul>
                <li>A list to store tasks</li>
                <li>A way to add new tasks</li>
                <li>A way to mark tasks as complete</li>
                <li>A way to delete tasks</li>
            </ul>
            
            <h3>Step 5: Adding Functionality</h3>
            <p>Learn how to:</p>
            <ol>
                <li>Handle user input with TextField</li>
                <li>Manage state with setState</li>
                <li>Implement list operations (add, remove, update)</li>
                <li>Add basic styling and themes</li>
            </ol>
            
            <h3>Resources for Students</h3>
            <p>As a student, you have access to:</p>
            <ul>
                <li><a href="https://musumba.hashnode.dev/" target="_blank" class="btn" style="background: var(--main-color); color: white; font-weight: bold; font-size: 1.6rem; padding: 1rem 2rem; border-radius: 50px; display: inline-block; text-decoration: none;">
                    <i class="fab fa-hashnode"></i> Visit Hashnode Blog
                </a></li>
            </ul>
            
            <!-- ADDED BLOG LINK SECTION -->
            <div style="background: linear-gradient(45deg, var(--accent-color), var(--main-color)); padding: 2rem; border-radius: 1rem; margin: 3rem 0; text-align: center; border: 2px solid rgba(255,255,255,0.1);">
                <h3 style="color: white; margin-bottom: 1.5rem; font-size: 2.2rem;"><i class="fab fa-hashnode"></i> More Mobile Development Content</h3>
                <p style="color: rgba(255,255,255,0.9); font-size: 1.6rem; margin-bottom: 1.5rem; line-height: 1.6;">
                    Looking for more Flutter tutorials, advanced app development guides, and mobile tech insights? Check out my Hashnode blog!
                </p>
                <a href="https://musumba.hashnode.dev/" target="_blank" class="btn" 
                   style="background: white; color: var(--accent-color); font-weight: bold; font-size: 1.6rem; padding: 1rem 2rem; border-radius: 50px; display: inline-block; text-decoration: none;">
                    <i class="fab fa-hashnode"></i> Visit Hashnode Blog
                </a>
            </div>
            
            <h3>Next Steps</h3>
            <p>Once you've mastered the basics, explore:</p>
            <div class="tech-stack">
                <span class="tech-tag">Firebase Integration</span>
                <span class="tech-tag">State Management (Provider/Bloc)</span>
                <span class="tech-tag">API Integration</span>
                <span class="tech-tag">Animations</span>
                <span class="tech-tag">Platform-Specific Code</span>
            </div>
            
            <p>Remember, the best way to learn is by building. Start with simple apps and gradually increase complexity. Happy coding!</p>
        `
    }
};

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.innerHTML = nav.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Update current year in footer
const yearElement = document.getElementById('currentYear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect
const typingText = document.querySelector('.typing-text');
const texts = [
    "MUST Student & Developer",
    "Java Developer",
    "Python Programmer",
    "Web Developer",
    "App Developer",
    "Tech Enthusiast"
];

if (typingText) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!isDeleting && charIndex <= currentText.length) {
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex >= 0) {
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }
    
    // Start typing effect
    setTimeout(typeEffect, 1000);
}

// Portfolio Modal Functionality
const portfolioModal = document.getElementById('portfolioModal');
const closePortfolioModal = document.getElementById('closePortfolioModal');
const blogModal = document.getElementById('blogModal');
const closeBlogModal = document.getElementById('closeBlogModal');

// Open portfolio modal
document.querySelectorAll('.read-more-project').forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const project = projects[projectId];

        if (project) {
            document.getElementById('modalProjectTitle').textContent = project.title;
            document.getElementById('modalProjectImage').src = project.image;
            document.getElementById('modalProjectImage').alt = project.title;

            // Update tech stack
            const techStack = document.getElementById('modalProjectTech');
            techStack.innerHTML = '';
            project.tech.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                techStack.appendChild(tag);
            });

            document.getElementById('modalProjectDescription').textContent = project.description;
            document.getElementById('modalProjectOverview').textContent = project.overview;

            // Update features list
            const featuresList = document.getElementById('modalProjectFeatures');
            featuresList.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            document.getElementById('modalProjectTechnologies').textContent = project.technologies;
            document.getElementById('modalProjectRole').textContent = project.role;
            
            const demoLink = document.getElementById('modalProjectDemo');
            if (demoLink) demoLink.href = project.demo;
            
            const githubLink = document.getElementById('modalProjectGithub');
            if (githubLink) githubLink.href = project.github;

            if (portfolioModal) {
                portfolioModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    });
});

// Open blog modal
document.querySelectorAll('.read-more-blog').forEach(button => {
    button.addEventListener('click', function () {
        const articleId = this.getAttribute('data-article');
        const article = blogArticles[articleId];

        if (article) {
            document.getElementById('modalBlogTitle').textContent = article.title;
            document.getElementById('modalBlogImage').src = article.image;
            document.getElementById('modalBlogImage').alt = article.title;
            document.getElementById('modalBlogDate').innerHTML = `<i class="far fa-calendar"></i> ${article.date}`;
            document.getElementById('modalBlogCategory').innerHTML = `<i class="far fa-folder"></i> ${article.category}`;
            document.getElementById('modalBlogContent').innerHTML = article.content;

            if (blogModal) {
                blogModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    });
});

// Close modals
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

if (closePortfolioModal) {
    closePortfolioModal.addEventListener('click', () => closeModal(portfolioModal));
}

if (closeBlogModal) {
    closeBlogModal.addEventListener('click', () => closeModal(blogModal));
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === portfolioModal) closeModal(portfolioModal);
    if (e.target === blogModal) closeModal(blogModal);
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(portfolioModal);
        closeModal(blogModal);
    }
});

// Share blog function
function shareBlog() {
    const title = document.getElementById('modalBlogTitle')?.textContent;
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this blog article: ${title}`,
            url: url
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        alert(`Share this article: ${title}\n\n${url}`);
    }
}

// Initialize all modals as closed
window.addEventListener('load', () => {
    if (portfolioModal) portfolioModal.style.display = 'none';
    if (blogModal) blogModal.style.display = 'none';
    initResponsiveFeatures();
});

// Contact form submission with Formspree
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Form submission handling
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Send to Formspree
            const response = await fetch('https://formspree.io/f/mgvzgkow', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success message
                alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

                // Reset form
                contactForm.reset();
            } else {
                // Error handling
                const errorData = await response.json();
                if (errorData.errors && errorData.errors.length > 0) {
                    alert(`Error: ${errorData.errors.map(err => err.message).join(', ')}`);
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            }
        } catch (error) {
            // Network error
            console.error('Form submission error:', error);
            alert("Oops! There was an error submitting the form. Please check your connection and try again.");
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    // Add input validation
    contactForm.addEventListener('input', function (e) {
        const input = e.target;

        if (input.name === 'email') {
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#10b981';
            }
        }

        if (input.name === 'name') {
            // Name validation (at least 2 characters)
            if (input.value.trim().length < 2) {
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#10b981';
            }
        }
    });
}

// Prevent Ctrl+U (view source)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
        alert("View source is disabled on this site!");
    }
});

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this site!");
});

// Disable common developer shortcuts
document.addEventListener("keydown", function (e) {
    // F12, Ctrl+Shift+I/J/C, Ctrl+U
    if (
        e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) ||
        (e.ctrlKey && e.keyCode == 85)
    ) {
        e.preventDefault();
        alert("Developer tools are disabled on this site!");
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Add loading="lazy" for native lazy loading
        img.setAttribute('loading', 'lazy');

        // Add a subtle blur effect while loading
        img.style.transition = 'filter 0.3s ease';
        if (!img.complete) {
            img.style.filter = 'blur(5px)';
        }

        img.addEventListener('load', function () {
            img.style.filter = 'blur(0)';
        });
    });
});

// Color animation for logo
const musumbaText = document.querySelector('.logo span');
if (musumbaText) {
    const colors = ['#2563eb', '#10b981', '#8b5cf6', '#f59e0b'];
    let index = 0;

    setInterval(() => {
        musumbaText.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
}

// Protection overlay functionality
function closeProtection() {
    const overlay = document.getElementById('protection-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Add datetime function
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    const yearElement = document.getElementById('year');

    if (datetimeElement) {
        datetimeElement.textContent = now.toLocaleString('en-US', {
            timeZone: 'Africa/Nairobi',
            hour12: true
        });
    }

    if (yearElement) {
        yearElement.textContent = now.getFullYear();
    }
}

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

// Reset popup when page changes (for single page application)
window.addEventListener('pageChanged', function() {
    const popupShownCookie = getCookie(POPUP_COOKIE_NAME);
    if (!popupShownCookie && !popupShown) {
        if (popupTimer) {
            clearTimeout(popupTimer);
        }
        popupTimer = setTimeout(showPopup, POPUP_DELAY);
    }
});

// Initialize datetime
updateDateTime();
setInterval(updateDateTime, 1000);