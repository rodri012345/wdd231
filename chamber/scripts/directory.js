const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        hamburger.textContent = '✖';
        hamburger.setAttribute('aria-label', 'Close Menu');
    } else {
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Open Menu');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const toggleButton = document.getElementById("toggle-view");
    let isGridView = true;

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) {
                throw new Error("Failed to fetch members data");
            }
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");
            memberElement.innerHTML = `
                <div class="name">
                    <h2>${member.name}</h2>
                </div>
                <div class="content">
                    <div class="logo">
                        <img src="images/${member.image}" alt="${member.name} Logo">
                    </div>
                    <div>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p class="membership-level">${getMembershipLevel(member.membership)}</p>
                    </div>
                </div>
        `;
            membersContainer.appendChild(memberElement);
        });
        updateView();
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 3: return "Gold Member";
            case 2: return "Silver Member";
            case 1: return "Member";
            default: return "Standard";
        }
    }

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");
    
    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    
    gridbutton.addEventListener("click", () => {
        // example using arrow function
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList); // example using defined function
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
    

    fetchMembers();
});


const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modification: ${lastModified}`;
