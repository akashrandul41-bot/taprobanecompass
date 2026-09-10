/* ==========================================================================
   Sri Lanka Journeys - Interactions & Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    // (Simplified for this version - would typically toggle a class to show a full-screen menu)
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    mobileMenuToggle.addEventListener('click', () => {
        // Toggle mobile menu visibility logic here
        if (mainNav.style.display === 'flex') {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'flex';
            mainNav.style.flexDirection = 'column';
            mainNav.style.position = 'absolute';
            mainNav.style.top = '100%';
            mainNav.style.left = '0';
            mainNav.style.width = '100%';
            mainNav.style.backgroundColor = 'var(--color-dark)';
            mainNav.style.padding = '20px';
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // --- Animated Counters ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Lower inc to slow and higher to fast
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };

            // Only animate if in view
            const elementTop = counter.getBoundingClientRect().top;
            if (elementTop < window.innerHeight && counter.innerText === '0') {
                updateCount();
            }
        });
    };

    window.addEventListener('scroll', animateCounters);

    // --- Inquiry Form Submission ---
    // (Form now submits directly to FormSubmit endpoint)

});

// --- Modal for Packages (Global function) ---
window.openModal = function(packageName) {
    // In a full application, this would open a beautiful modal with package details
    // For now, scroll to contact form and pre-fill the package name if possible, or show an alert.
    alert(`View details for: ${packageName}\nIn the full version, this opens a detailed itinerary page.`);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

// --- Destination Data ---
const destinationsData = {
    'sigiriya': {
        title: 'Sigiriya',
        subtitle: 'Ancient Rock Fortress',
        description: 'Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock around 200 metres high. According to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa (477 – 495 AD) for his new capital.',
        bestTime: 'January to April',
        experiences: 'Hiking, History, Photography',
        image: 'assets/images (9).jfif',
        gallery: [
            'assets/images (9).jfif',
            'assets/images (10).jfif',
            'assets/images (11).jfif',
            'assets/images (12).jfif'
        ]
    },
    'ella': {
        title: 'Ella',
        subtitle: 'Misty Mountains & Tea',
        description: 'Ella is a small town in the Badulla District of Uva Province, Sri Lanka. It is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands.',
        bestTime: 'January to May',
        experiences: 'Nine Arch Bridge, Little Adams Peak, Tea Factories',
        image: 'assets/images (10).jfif',
        gallery: [
            'assets/images (10).jfif',
            'assets/images (11).jfif',
            'assets/images (9).jfif',
            'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif'
        ]
    },
    'galle': {
        title: 'Galle',
        subtitle: 'Historic Dutch Fort',
        description: 'Galle is a city on the southwest coast of Sri Lanka. It is known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church.',
        bestTime: 'December to April',
        experiences: 'Galle Fort, Lighthouse, Shopping, Dining',
        image: 'assets/29679305-a018-4ba0-9fb9-8cd730d72efa.jfif',
        gallery: [
            'assets/29679305-a018-4ba0-9fb9-8cd730d72efa.jfif',
            'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif',
            'assets/images (13).jfif',
            'assets/images (12).jfif'
        ]
    },
    'mirissa': {
        title: 'Mirissa',
        subtitle: 'Whales & Golden Sands',
        description: 'Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. Mirissa beach and nightlife make it a popular tourist destination. It is also a fishing port and one of the island\'s main whale and dolphin watching locations. It has some of the most beautiful sunsets in Sri Lanka.',
        bestTime: 'November to April',
        experiences: 'Whale Watching, Surfing, Secret Beach',
        image: 'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif',
        gallery: [
            'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif',
            'assets/images (13).jfif',
            'assets/29679305-a018-4ba0-9fb9-8cd730d72efa.jfif',
            'assets/images (10).jfif'
        ]
    }
};

// --- Destination Modal Logic ---
window.openDestModal = function(destId) {
    const data = destinationsData[destId];
    if (data) {
        document.getElementById('modal-img').src = data.image;
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-subtitle').innerText = data.subtitle;
        document.getElementById('modal-desc').innerText = data.description;
        document.getElementById('modal-best-time').innerText = data.bestTime;
        document.getElementById('modal-experiences').innerText = data.experiences;
        
        // Build gallery
        const galleryContainer = document.getElementById('modal-gallery');
        galleryContainer.innerHTML = '';
        if (data.gallery && data.gallery.length > 0) {
            data.gallery.forEach(function(imgSrc, index) {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = data.title + ' photo ' + (index + 1);
                thumb.className = 'gallery-thumb' + (index === 0 ? ' active' : '');
                thumb.addEventListener('click', function() {
                    document.getElementById('modal-img').src = imgSrc;
                    document.querySelectorAll('.gallery-thumb').forEach(function(t) { t.classList.remove('active'); });
                    thumb.classList.add('active');
                });
                galleryContainer.appendChild(thumb);
            });
        }
        
        document.getElementById('dest-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeDestModal = function() {
    document.getElementById('dest-modal').classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
};

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('dest-modal');
    if (event.target === modal) {
        window.closeDestModal();
    }
});
