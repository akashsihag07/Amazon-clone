// Main JavaScript for Amazon Clone

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    setupNavigation();
    
    // Product display and cart functionality
    setupProducts();
    
    // Search functionality
    setupSearch();
    
    // User authentication
    setupAuth();
    
    // Footer interactions
    setupFooter();
});

// Navigation functions
function setupNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.categories i.fa-bars');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Language selector
    const langSelectors = document.querySelectorAll('select[id="country"], select[id="langs"]');
    langSelectors.forEach(selector => {
        selector.addEventListener('change', handleLanguageChange);
    });
    
    // Account dropdown
    const accountDropdown = document.querySelector('.signin select.acc');
    if (accountDropdown) {
        accountDropdown.addEventListener('change', handleAccountAction);
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.anchortags');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

function handleLanguageChange(e) {
    console.log(`Language changed to: ${e.target.value}`);
    // In a real app, you would update the UI language here
}

function handleAccountAction(e) {
    const action = e.target.value;
    if (action === 'signin') {
        showLoginModal();
    } else if (action === 'register') {
        showRegisterModal();
    }
}

// Product functions
function setupProducts() {
    // Add click handlers to all "Shop now" buttons
    const shopButtons = document.querySelectorAll('.box-content p');
    shopButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.closest('.box-content').querySelector('h2').textContent;
            navigateToCategory(category);
        });
    });
    
    // Initialize cart
    initializeCart();
    
    // Load products (in a real app, this would come from backend)
    loadFeaturedProducts();
}

function navigateToCategory(category) {
    console.log(`Navigating to ${category} category`);
    // In a real app, you would filter products by category
    // For now, we'll just show an alert
    alert(`Browsing ${category} products`);
}

function initializeCart() {
    // Load cart from localStorage if available
    let cart = JSON.parse(localStorage.getItem('amazonCloneCart')) || [];
    
    // Update cart count display
    updateCartCount(cart.length);
    
    // Cart icon click handler
    const cartIcon = document.querySelector('.cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }
}

function updateCartCount(count) {
    const cartCountElement = document.querySelector('.cart div');
    if (cartCountElement) {
        cartCountElement.textContent = `Cart (${count})`;
    }
}

function showCart() {
    // In a real app, this would show a modal with cart items
    alert('Cart functionality will be implemented in the full version');
}

function loadFeaturedProducts() {
    // In a real app, this would fetch from an API
    console.log('Loading featured products...');
}

// Search functions
function setupSearch() {
    const searchInput = document.querySelector('.nav-search input');
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchInput && searchIcon) {
        // Search on icon click
        searchIcon.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.nav-search input');
    const searchTerm = searchInput.value.trim();
    const categoryFilter = document.querySelector('#items').value;
    
    if (searchTerm) {
        console.log(`Searching for "${searchTerm}" in category "${categoryFilter}"`);
        // In a real app, this would call a search API
        alert(`Search functionality will search for "${searchTerm}" in "${categoryFilter}"`);
    } else {
        alert('Please enter a search term');
    }
}

// Authentication functions
function setupAuth() {
    // Check if user is logged in
    checkAuthStatus();
}

function checkAuthStatus() {
    // In a real app, this would check cookies or tokens
    const isLoggedIn = localStorage.getItem('amazonCloneLoggedIn') === 'true';
    
    if (isLoggedIn) {
        const username = localStorage.getItem('amazonCloneUsername') || 'User';
        document.querySelector('.hello').textContent = `Hello, ${username}`;
    }
}

function showLoginModal() {
    // In a real app, this would show a proper login modal
    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');
    
    if (email && password) {
        // Simulate login
        localStorage.setItem('amazonCloneLoggedIn', 'true');
        localStorage.setItem('amazonCloneUsername', email.split('@')[0]);
        checkAuthStatus();
        alert('Login successful!');
    }
}

function showRegisterModal() {
    // In a real app, this would show a proper registration form
    alert('Registration form will be implemented in the full version');
}

// Footer functions
function setupFooter() {
    // Back to top button
    const backToTop = document.querySelector('.footpanel1');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Footer links
    const footerLinks = document.querySelectorAll('.foot-panel2 a, .foot-panel4 a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would navigate to the appropriate page
            console.log(`Navigating to: ${this.textContent}`);
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}