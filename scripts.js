document.addEventListener('DOMContentLoaded', () => {
    // --- MOBILE MENU ---
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


    // --- BACK TO TOP BUTTON ---
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

    // --- DATA ---
    const allMembers = [
        { name: "Indra Mani Tripathi", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/imt2.jpg", status: "PhD Student", email: "indra.tripathi@iitgn.ac.in", phone: "+91 96542 65217", category: "PhD Students" },
        { name: "Sunil Kumar", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/sunil.jpg", status: "PhD Student", email: "sunil.k@iitgn.ac.in", phone: "+91 90016 46544", category: "PhD Students" },
        { name: "Kapil Rathod", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/kapil.jpg", status: "PhD Student", email: "kapil.rathod@iitgn.ac.in", phone: "+91 72858 70459", category: "PhD Students" },
        { name: "Sushil Kumar Jaiswal", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/sus.jpg", status: "PhD Student", email: "sushil.jaiswal@iitgn.ac.in", phone: "+91 81125 75098", category: "PhD Students" },
        { name: "Snehal B. Rathod", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/snehal.jpg", status: "JRF", email: "rathodsnehal.b@iitgn.ac.in", phone: "+91 81605 49901", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Akash Yadav", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/akash.jpg", status: "JRF", email: "akash.yadav@iitgn.ac.in", phone: "+91 96850 75978", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Bhanu Parmar", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/bhanu.jpg", status: "JRF", email: "bhanu.parmar@iitgn.ac.in", phone: "+91 97257 29534", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Indrajitsinh Bihola", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/indra.jpg", status: "Trainee", email: "indrajitsinh.bihola@iitgn.ac.in", phone: "+91 91048 14088", category: "Project Staff", project: { name: "UBA", link: "https://initiatives.iitgn.ac.in/uba/" } },
        { name: "Rajesh", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/rj.jpg", status: "Project Associate", email: "rajesh.k@iitgn.ac.in", phone: "+91 87418 84275", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Sumit", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/sum.jpg", status: "Project Employee", phone: "+91 81720 01881", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Pardeep Sangwan", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/pradeep.jpg", status: "Project Employee", phone: "+91 80534 02248", category: "Project Staff", project: { name: "cNarmada", link: "https://sites.iitgn.ac.in/cnarmada/" } },
        { name: "Jitendra Poddar", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/jitu.jpg", status: "M.Tech Alumni", email: "jitendra.poddar@iitgn.ac.in", phone: "+91 79800 11828", category: "Alumni" }
    ];

    const teamMagnetLineup = {
        name: "Magnet",
        captain: { name: "Sushil Kumar Jaiswal", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/sus.jpg", position: "Right-Side Hitter" },
        starters: [
            { name: "Sunil Kumar", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/sunil.jpg", position: "Left-Side Hitter" },
            { name: "Indra M. Tripathi", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/imt2.jpg", position: "Center" },
            { name: "Rajesh", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/rj.jpg", position: "Middle Blocker" }
        ],
        reserves: [ { name: "Jitendra Poddar", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/jitu.jpg", position: "Reserve" } ]
    };

    const teamSkyLineup = {
        name: "SKY",
        captain: { name: "Akash Yadav", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/akash.jpg", position: "Side Hitter (Attacker)" },
        starters: [
            { name: "Pardeep Sangwan", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/pradeep.jpg", position: "Side Hitter (Attacker)" },
            { name: "Sumit", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/sum.jpg", position: "Middle Blocker (Net)" },
            { name: "Kapil Rathod", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/kapil.jpg", position: "Center" }
        ],
        reserves: [
            { name: "Bhanu Parmar", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/bhanu.jpg", position: "Reserve" },
            { name: "Indrajitsinh Bihola", image: "https://raw.githubusercontent.com/sunilkumardhayal/HWM_Volleyball/main/indra.jpg", position: "Reserve" }
        ]
    };
    
    // --- PEOPLE PAGE LOGIC ---
    const peopleGrid = document.getElementById('people-grid');
    if (peopleGrid) {
        const groupedMembers = allMembers.reduce((acc, member) => {
            (acc[member.category] = acc[member.category] || []).push(member);
            return acc;
        }, {});
        const categoryOrder = ["PhD Students", "Project Staff", "Alumni"];
        peopleGrid.innerHTML = categoryOrder.map(category => `
            <div class="col-span-full"><h3 class="text-2xl font-bold mb-6 border-b pb-2 border-gray-300">${category}</h3></div>
            ${groupedMembers[category] ? groupedMembers[category].map(person => `
                <div class="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center">
                    <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200">
                    <span class="font-semibold">${person.name}</span>
                    <span class="block text-sm text-gray-500 mb-2">
                        ${person.status}
                        ${person.project ? `, <a href="${person.project.link}" target="_blank" rel="noopener noreferrer" class="font-semibold text-indigo-600 hover:underline">${person.project.name}</a>` : ''}
                    </span>
                    ${person.email ? `<a href="mailto:${person.email}" class="text-xs text-indigo-500 hover:underline">${person.email}</a>` : ''}
                    ${person.phone ? `<a href="tel:${person.phone}" class="text-xs text-indigo-500 hover:underline mt-1">${person.phone}</a>` : ''}
                </div>`).join('') : ''}
        `).join('');
    }

    // --- VOLLEYBALL PAGE LOGIC ---
    const v_team1ResultEl = document.getElementById('v-team1Result');
    const v_team2ResultEl = document.getElementById('v-team2Result');
    if (v_team1ResultEl && v_team2ResultEl) {
        v_team1ResultEl.innerHTML = `<h3 class="text-xl font-bold text-cyan-500 mb-4">Team: ${teamSkyLineup.name}</h3><h4 class="font-semibold mb-2">Starting Lineup</h4><ul class="space-y-2 text-sm mb-4"><li class="flex items-center gap-2 py-1"><img src="${teamSkyLineup.captain.image}" alt="${teamSkyLineup.captain.name}" class="w-8 h-8 rounded-full object-cover"><span>${teamSkyLineup.captain.name} <span class="text-cyan-500 font-semibold">(Captain)</span><br><span class="text-xs text-gray-500">${teamSkyLineup.captain.position}</span></span></li>${teamSkyLineup.starters.map(p => `<li class="flex items-center gap-2 py-1"><img src="${p.image}" alt="${p.name}" class="w-8 h-8 rounded-full object-cover"><span>${p.name}<br><span class="text-xs text-gray-500">${p.position}</span></span></li>`).join('')}</ul><h4 class="font-semibold mb-2">Reserves</h4><ul class="space-y-2 text-sm">${teamSkyLineup.reserves.map(p => `<li class="flex items-center gap-2 py-1"><img src="${p.image}" alt="${p.name}" class="w-8 h-8 rounded-full object-cover"><span>${p.name}<br><span class="text-xs text-gray-500">${p.position}</span></span></li>`).join('')}</ul>`;
        v_team2ResultEl.innerHTML = `<h3 class="text-xl font-bold text-orange-500 mb-4">Team: ${teamMagnetLineup.name}</h3><h4 class="font-semibold mb-2">Starting Lineup</h4><ul class="space-y-2 text-sm mb-4"><li class="flex items-center gap-2 py-1"><img src="${teamMagnetLineup.captain.image}" alt="${teamMagnetLineup.captain.name}" class="w-8 h-8 rounded-full object-cover"><span>${teamMagnetLineup.captain.name} <span class="text-orange-500 font-semibold">(Captain)</span><br><span class="text-xs text-gray-500">${teamMagnetLineup.captain.position}</span></span></li>${teamMagnetLineup.starters.map(p => `<li class="flex items-center gap-2 py-1"><img src="${p.image}" alt="${p.name}" class="w-8 h-8 rounded-full object-cover"><span>${p.name}<br><span class="text-xs text-gray-500">${p.position}</span></span></li>`).join('')}</ul><h4 class="font-semibold mb-2">Reserves</h4><ul class="space-y-2 text-sm">${teamMagnetLineup.reserves.map(p => `<li class="flex items-center gap-2 py-1"><img src="${p.image}" alt="${p.name}" class="w-8 h-8 rounded-full object-cover"><span>${p.name}<br><span class="text-xs text-gray-500">${p.position}</span></span></li>`).join('')}</ul>`;
    }

    // --- CRICKET PAGE LOGIC ---
    const cricketPlayerList = document.getElementById('cricket-player-list');
    if (cricketPlayerList) {
        const players = allMembers.filter(m => m.role !== 'Referee');
        cricketPlayerList.innerHTML = players.map(person => `
            <div class="text-center">
                <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mb-2 object-cover border-2 border-gray-200 mx-auto">
                <span class="font-semibold">${person.name}</span>
            </div>
        `).join('');
    }

    // --- BADMINTON PAGE LOGIC ---
    const badmintonPlayerList = document.getElementById('badminton-player-list');
    if (badmintonPlayerList) {
        const players = allMembers.filter(m => m.role !== 'Referee');
        badmintonPlayerList.innerHTML = players.map(person => `
            <div class="text-center">
                <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mb-2 object-cover border-2 border-gray-200 mx-auto">
                <span class="font-semibold">${person.name}</span>
            </div>
        `).join('');
    }
});
