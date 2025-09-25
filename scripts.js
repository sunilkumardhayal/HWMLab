document.addEventListener('DOMContentLoaded', () => {
    // --- GENERAL UI ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const toTopButton = document.getElementById('to-top-button');
    const currentYearEl = document.getElementById('current-year');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    if(currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    if(toTopButton) {
        window.addEventListener('scroll', () => {
            toTopButton.classList.toggle('show', window.scrollY > 300);
        });
    }

    // --- MASTER DATA ---
    const IMG_BASE_URL = "https://raw.githubusercontent.com/sunilkumardhayal/HWMLab/main/Profile_Pics/";
    const allMembers = [ /* ... Your full list of 13 members ... */ ]; // Keeping this brief for clarity

    // --- PAGE-SPECIFIC LOGIC ---

    // 1. PEOPLE PAGE LOGIC
    const peopleGrid = document.getElementById('people-grid');
    if (peopleGrid) {
        // ... (logic for people grid)
    }

    // 2. VOLLEYBALL PAGE LOGIC
    // This function populates both the historic and latest auction team sections
    function setupVolleyballPage() {
        const historicTeamsContainer = document.getElementById('historic-teams-grid');
        const latestTeam1Container = document.getElementById('team1-display');
        const latestTeam2Container = document.getElementById('team2-display');

        // Helper function to create team HTML
        const createTeamHTML = (team, color) => {
            let html = `<div class="bg-gray-100 p-6 rounded-lg"><h4 class="text-2xl font-bold text-${color}-500 mb-6 text-center">Team ${team.name}</h4><ul class="space-y-4">`;
            html += `<li class="flex items-center bg-white p-3 rounded-lg shadow-sm"><img src="${team.captain.image}" alt="${team.captain.name}" class="w-12 h-12 rounded-full mr-4 object-cover"><div><p class="font-bold text-gray-800">${team.captain.name}</p><p class="text-sm text-${color}-500 font-semibold">(Captain)</p></div></li>`;
            team.players.forEach(p => {
                html += `<li class="flex items-center bg-white p-3 rounded-lg shadow-sm"><img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-full mr-4 object-cover"><p class="font-bold text-gray-800">${p.name}</p></li>`;
            });
            html += `</ul></div>`;
            return html;
        };

        // Populate historic teams
        if (historicTeamsContainer) {
            const historicTeam1 = { name: "SKY", captain: { name: "Akash", image: IMG_BASE_URL + "akash.webp" }, players: [{ name: "Kapil", image: IMG_BASE_URL + "kapil.webp" }, { name: "Pradeep", image: IMG_BASE_URL + "pradeep.webp" }, { name: "Sumit", image: IMG_BASE_URL + "sum.webp" }] };
            const historicTeam2 = { name: "Magnet", captain: { name: "Sushil", image: IMG_BASE_URL + "sushil.webp" }, players: [{ name: "Sunil Kumar", image: IMG_BASE_URL + "sunil.webp" }, { name: "Indra M. Tripathi", image: IMG_BASE_URL + "imt2.webp" }, { name: "Rajesh", image: IMG_BASE_URL + "rj.webp" }] };
            historicTeamsContainer.innerHTML = createTeamHTML(historicTeam1, 'cyan') + createTeamHTML(historicTeam2, 'orange');
        }

        // Populate latest auction teams
        if (latestTeam1Container && latestTeam2Container) {
            const savedTeams = JSON.parse(localStorage.getItem('volleyballTeams'));
            if (savedTeams) {
                latestTeam1Container.innerHTML = createTeamHTML(savedTeams['1'], 'cyan');
                latestTeam2Container.innerHTML = createTeamHTML(savedTeams['2'], 'orange');
            } else {
                const placeholderHTML = `<div class="text-center text-gray-500 col-span-full"><h4 class="text-xl font-bold text-gray-400 mb-4">No Auction Data Found</h4><p>Complete an auction using the 'Launch Auction Tool' to see the latest team rosters here.</p></div>`;
                document.getElementById('auction-results').querySelector('.grid').innerHTML = placeholderHTML;
            }
        }
    }
    // Only run this function if we are on the volleyball page
    if (document.getElementById('volleyball-nav')) {
        setupVolleyballPage();
    }


    // 3. GALLERY LOGIC (for volleyball.html)
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const GALLERY_URL = "https://raw.githubusercontent.com/sunilkumardhayal/HWMLab/main/Volleyball_Gallery/";
        const galleryImages = ['IMG_6119.JPG', 'IMG_6120.JPG', 'IMG_6121.JPG', 'IMG_6122.JPG', 'IMG_6123.JPG', 'IMG_6124.JPG', 'IMG_6125.JPG', 'IMG_6126.JPG', 'IMG_6127.JPG', 'IMG_6128.JPG', 'IMG_6130.JPG', 'IMG_6131.JPG', 'IMG_6133.JPG', 'IMG_6134.JPG', 'IMG_6161.JPG', 'IMG_6162.JPG', 'IMG_6163.JPG', 'IMG_6165.JPG'];
        let currentImageIndex = 0;

        galleryImages.forEach((imgName, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-square cursor-pointer overflow-hidden rounded-lg group';
            imgContainer.innerHTML = `<img src="${GALLERY_URL}${imgName}" alt="Volleyball Match Image ${index + 1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy">`;
            imgContainer.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(imgContainer);
        });

        const openLightbox = (index) => {
            currentImageIndex = index;
            lightboxImg.src = `${GALLERY_URL}${galleryImages[currentImageIndex]}`;
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
        };
        const closeLightbox = () => {
            lightbox.classList.add('opacity-0');
            document.body.style.overflow = '';
            setTimeout(() => lightbox.classList.add('hidden'), 300);
        };
        const showNextImage = () => { currentImageIndex = (currentImageIndex + 1) % galleryImages.length; lightboxImg.src = `${GALLERY_URL}${galleryImages[currentImageIndex]}`; };
        const showPrevImage = () => { currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length; lightboxImg.src = `${GALLERY_URL}${galleryImages[currentImageIndex]}`; };
        
        document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
        document.getElementById('lightbox-close-bg').addEventListener('click', closeLightbox);
        document.getElementById('lightbox-next').addEventListener('click', showNextImage);
        document.getElementById('lightbox-prev').addEventListener('click', showPrevImage);
        document.addEventListener('keydown', (e) => { if (!lightbox.classList.contains('hidden')) { if (e.key === 'Escape') closeLightbox(); if (e.key === 'ArrowRight') showNextImage(); if (e.key === 'ArrowLeft') showPrevImage(); } });
    }

    // --- SCROLLSPY FOR VOLLEYBALL NAV ---
    const volleyballNav = document.getElementById('volleyball-nav');
    if (volleyballNav) {
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('.v-nav-link');
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, observerOptions);
        sections.forEach(section => sectionObserver.observe(section));
    }
});
