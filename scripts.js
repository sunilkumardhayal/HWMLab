document.addEventListener('DOMContentLoaded', () => {
    // --- GENERAL UI ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    const currentYearEl = document.getElementById('current-year');
    if(currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    const toTopButton = document.getElementById('to-top-button');
    if(toTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                toTopButton.style.display = "block";
            } else {
                toTopButton.style.display = "none";
            }
        };
    }

    // --- MASTER DATA ---
    // CORRECTED URL PATH ON THIS LINE
    const IMG_BASE_URL = "https://raw.githubusercontent.com/sunilkumardhayal/HWMLab/Profile_Pics/";
    
    const allMembers = [
        { name: "Indra Mani Tripathi", image: IMG_BASE_URL + "imt2.jpg", status: "PhD Scholar", email: "indra.tripathi@iitgn.ac.in", phone: "+91 96542 65217", category: "PhD Students" },
        { name: "Sunil Kumar", image: IMG_BASE_URL + "sunil.jpg", status: "PhD Scholar", email: "sunil.k@iitgn.ac.in", phone: "+91 90016 46544", category: "PhD Students" },
        { name: "Kapil", image: IMG_BASE_URL + "kapil.jpg", status: "PhD Scholar", email: "kapil.rathod@iitgn.ac.in", phone: "+91 72858 70459", category: "PhD Students" },
        { name: "Sushil", image: IMG_BASE_URL + "sushil.jpg", status: "PhD Scholar", email: "sushil.jaiswal@iitgn.ac.in", phone: "+91 81125 75098", category: "PhD Students" },
        { name: "Snehal B. Rathod", image: IMG_BASE_URL + "snehal.jpg", status: "JRF", email: "rathodsnehal.b@iitgn.ac.in", phone: "+91 81605 49901", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Akash", image: IMG_BASE_URL + "akash.jpg", status: "JRF", email: "akash.yadav@iitgn.ac.in", phone: "+91 96850 75978", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Bhanu", image: IMG_BASE_URL + "bhanu.jpg", status: "JRF", email: "bhanu.parmar@iitgn.ac.in", phone: "+91 97257 29534", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Rajesh", image: IMG_BASE_URL + "rj.jpg", status: "Project Associate", email: "rajesh.k@iitgn.ac.in", phone: "+91 87418 84275", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Sumit", image: IMG_BASE_URL + "sum.jpg", status: "Project Assistant-1", email: "sumit@iitgn.ac.in", phone: "+91 81720 01881", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Wajahat Annayat", image: IMG_BASE_URL + "wajahat.jpg", status: "Project Engineer-1", email: "wajahat.annayat@iitgn.ac.in", phone: "+91 96825 34233", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Pradeep", image: IMG_BASE_URL + "pradeep.jpg", status: "Project Employee", phone: "+91 80534 02248", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        // NOTE: 'indra.jpg' for Indrajitsinh Bihola not found in repository. Using a placeholder.
        { name: "Indrajitsinh Bihola", image: IMG_BASE_URL + "sunil.jpg", status: "Trainee", email: "indrajitsinh.bihola@iitgn.ac.in", phone: "+91 91048 14088", category: "Project Staff", project: { name: "UBA", link: "https://initiatives.iitgn.ac.in/uba/" } },
        { name: "Jitendra", image: IMG_BASE_URL + "jitu.jpg", status: "M.Tech Alumni", email: "jitendra.poddar@iitgn.ac.in", phone: "+91 79800 11828", category: "Alumni" }
    ];
    
    // --- PEOPLE PAGE LOGIC ---
    const peopleGrid = document.getElementById('people-grid');
    if (peopleGrid) {
        const groupedMembers = allMembers.reduce((acc, member) => {
            (acc[member.category] = acc[member.category] || []).push(member);
            return acc;
        }, {});
        const categoryOrder = ["PhD Students", "Project Staff", "Alumni"];
        peopleGrid.innerHTML = categoryOrder.map(category => {
            if (!groupedMembers[category]) return '';
            return `
                <div class="col-span-full"><h3 class="text-2xl font-bold mb-6 border-b pb-2 border-gray-300">${category}</h3></div>
                ${groupedMembers[category].map(person => `
                    <div class="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform transform hover:-translate-y-2">
                        <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200">
                        <span class="font-semibold">${person.name}</span>
                        <span class="block text-sm text-gray-500 mb-2">
                            ${person.status}
                            ${person.project ? `, <a href="${person.project.link}" target="_blank" rel="noopener noreferrer" class="font-semibold text-indigo-600 hover:underline">${person.project.name}</a>` : ''}
                        </span>
                        ${person.email ? `<a href="mailto:${person.email}" class="text-xs text-indigo-500 hover:underline">${person.email}</a>` : ''}
                        ${person.phone ? `<a href="tel:${person.phone}" class="text-xs text-indigo-500 hover:underline mt-1">${person.phone}</a>` : ''}
                    </div>`).join('')}
            `;
        }).join('');
    }

    // --- VOLLEYBALL PAGE LOGIC ---
    const v_team1ResultEl = document.getElementById('v-team1Result');
    const v_team2ResultEl = document.getElementById('v-team2Result');
    if (v_team1ResultEl && v_team2ResultEl) {
        const savedTeams = JSON.parse(localStorage.getItem('volleyballTeams'));
        if (savedTeams) {
            displayAuctionTeams(savedTeams);
        } else {
            displayDefaultTeams();
        }
    }

    function displayAuctionTeams(teams) {
        const team1 = teams['1'];
        const team2 = teams['2'];
        
        const createTeamHTML = (team, color) => {
            let html = `<h4 class="text-2xl font-bold text-${color}-500 mb-6 text-center">Team ${team.name}</h4><ul class="space-y-4">`;
            html += `<li class="flex items-center bg-white p-3 rounded-lg shadow-sm"><img src="${team.captain.image}" alt="${team.captain.name}" class="w-12 h-12 rounded-full mr-4 object-cover"><div><p class="font-bold text-gray-800">${team.captain.name}</p><p class="text-sm text-${color}-500 font-semibold">(Captain)</p></div></li>`;
            team.players.forEach(p => {
                html += `<li class="flex items-center bg-white p-3 rounded-lg shadow-sm"><img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-full mr-4 object-cover"><p class="font-bold text-gray-800">${p.name}</p></li>`;
            });
            html += `</ul>`;
            return html;
        };

        v_team1ResultEl.innerHTML = createTeamHTML(team1, 'cyan');
        v_team2ResultEl.innerHTML = createTeamHTML(team2, 'orange');
    }

    function displayDefaultTeams() {
        const defaultTeam1 = { name: "SKY", captain: { name: "Akash", image: IMG_BASE_URL + "akash.jpg" }, players: [{ name: "Pradeep", image: IMG_BASE_URL + "pradeep.jpg" }, { name: "Sumit", image: IMG_BASE_URL + "sum.jpg" }] };
        const defaultTeam2 = { name: "Magnet", captain: { name: "Sushil", image: IMG_BASE_URL + "sushil.jpg" }, players: [{ name: "Sunil Kumar", image: IMG_BASE_URL + "sunil.jpg" }, { name: "Indra M. Tripathi", image: IMG_BASE_URL + "imt2.jpg" }] };
        displayAuctionTeams({ '1': defaultTeam1, '2': defaultTeam2 });
    }

    // --- OTHER SPORTS PAGES LOGIC ---
    function populateSportsPage(elementId) {
        const playerListEl = document.getElementById(elementId);
        if (playerListEl) {
            const players = allMembers.filter(m => m.name !== 'Snehal B. Rathod');
            playerListEl.innerHTML = players.map(person => `
                <div class="text-center">
                    <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mb-2 object-cover border-2 border-gray-200 mx-auto">
                    <span class="font-semibold">${person.name}</span>
                </div>
            `).join('');
        }
    }
    populateSportsPage('cricket-player-list');
    populateSportsPage('badminton-player-list');
});
