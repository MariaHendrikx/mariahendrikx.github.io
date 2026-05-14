// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .blog-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Blog card hover effects
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.01)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-title, .about-text, .contact-info');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('revealed');
        }
    });
}

// Add CSS for reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .section-title, .about-text, .contact-info {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-title.revealed, .about-text.revealed, .contact-info.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Blog calendar functionality
async function loadBlogPosts() {
    try {
        // Get today's date and calculate current month
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth(); // 0-indexed
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];

        // Calculate the dates for the current week starting from Monday
        const dayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
        const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Days to go back to Monday
        const mondayDate = new Date(today);
        mondayDate.setDate(today.getDate() - mondayOffset);

        // Generate dates for the week
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(mondayDate);
            date.setDate(mondayDate.getDate() + i);
            weekDates.push(date);
        }
        
        // Update section title with current month
        const sectionTitle = document.querySelector('#blog .section-title');
        if (sectionTitle) {
            sectionTitle.textContent = `Challenge Blog - ${monthNames[currentMonth]} ${currentYear}`;
        }

        // Fetch blog index file
        let blogFiles = [];
        try {
            const indexResponse = await fetch('blog/blog-index.json');
            if (indexResponse.ok) {
                const indexData = await indexResponse.json();
                blogFiles = indexData.map(filename => `blog/${filename}`);
                
                // Update blog posts counter on main page
                const blogPostsCounter = document.getElementById('blogPosts');
                if (blogPostsCounter) {
                    blogPostsCounter.textContent = indexData.length;
                }
            }
        } catch (error) {
            console.error('Error loading blog index:', error);
            // Fallback to empty array if index file fails
        }

        // Clear existing blog columns except day numbers
        const blogColumns = document.querySelectorAll('.blog-column');
        blogColumns.forEach(column => {
            column.innerHTML = '';
        });

        // Initialize day numbers with actual dates
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        today.setHours(0, 0, 0, 0);

        blogColumns.forEach((column, index) => {
            const date = weekDates[index];
            const dayNumber = document.createElement('div');
            dayNumber.className = 'blog-number';
            dayNumber.textContent = `${date.getDate()}`;
            column.appendChild(dayNumber);

            // Check if this column is today
            const columnDate = new Date(date);
            columnDate.setHours(0, 0, 0, 0);

            if (columnDate.getTime() === today.getTime()) {
                column.classList.add('today');
            }
        });

        // Fetch and process each blog file
        for (const file of blogFiles) {
            try {
                const response = await fetch(file);
                if (!response.ok) continue;
                
                const markdown = await response.text();
                const html = marked.parse(markdown);
                
                // Extract title and category from markdown
                const titleMatch = markdown.match(/^#\s+(.+)$/m);
                const categoryMatch = markdown.match(/\*\*Category:\*\s+(.+)$/m);
                
                const title = titleMatch ? titleMatch[1] : 'Untitled';
                const category = categoryMatch ? categoryMatch[1] : 'General';
                
                // Parse date from filename if it follows YYYYMMDD format
                const dateMatch = file.match(/(\d{8})/);
                let dayIndex = 0; // Default to Day 1 (Mon)
                
                if (dateMatch) {
                    const dateStr = dateMatch[1];
                    const year = parseInt(dateStr.substring(0, 4));
                    const month = parseInt(dateStr.substring(4, 6)) - 1; // 0-indexed
                    const day = parseInt(dateStr.substring(6, 8));
                    const date = new Date(year, month, day);
                    dayIndex = date.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
                    // Convert to 0-indexed starting from Monday
                    dayIndex = dayIndex === 0 ? 6 : dayIndex - 1;
                }

                // Check if this blog post is for today's column
                const isTodayColumn = blogColumns[dayIndex] && blogColumns[dayIndex].classList.contains('today');

                if (isTodayColumn) {
                    // Create full blog card for today
                    const blogCard = document.createElement('article');
                    blogCard.className = 'blog-card';
                    blogCard.innerHTML = `
                        <div class="blog-image">
                            <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span class="blog-category">${category}</span>
                            </div>
                            <h3><a href="blog/post.html?post=${file}">${title}</a></h3>
                        </div>
                    `;

                    // Add to appropriate day column
                    if (blogColumns[dayIndex]) {
                        blogColumns[dayIndex].appendChild(blogCard);
                    }
                } else {
                    // Create small indicator icon for other days
                    const indicator = document.createElement('div');
                    indicator.className = 'blog-indicator';
                    indicator.innerHTML = '<i class="fas fa-file-alt"></i>';
                    indicator.title = title;
                    indicator.style.cursor = 'pointer';
                    indicator.onclick = () => {
                        window.location.href = `blog/post.html?post=${file}`;
                    };

                    // Add to appropriate day column
                    if (blogColumns[dayIndex]) {
                        blogColumns[dayIndex].appendChild(indicator);
                    }
                }
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
            }
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

// Update copyright year to current year
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('.copyright-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Load blog posts when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    updateCopyrightYear();
});
