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

    function displaySpotlights(members) {
        const spotlightContainer = document.getElementById("spotlight-container");
        spotlightContainer.innerHTML = "";
    
        const goldSilverMembers = members.filter(m => m.membership >= 2);
        const randomSpotlights = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
    
        randomSpotlights.forEach(member => {
            const spotlight = document.createElement("div");
            spotlight.classList.add("member-card"); 
            spotlight.innerHTML = `
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
            spotlightContainer.appendChild(spotlight);
        });
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
        displaySpotlights(members); 
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
    
    
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList); 
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
    

    fetchMembers();
});


const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modification: ${lastModified}`;
const weatherAPI = "https://api.openweathermap.org/data/2.5/forecast";
const apiKey = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"; // Reemplaza con tu API KEY
const cityId = "3919968"; 

async function fetchWeather() {
    try {
        const response = await fetch(`${weatherAPI}?id=${cityId}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        
        const current = data.list[0];
        const weatherDescription = current.weather[0].description;
        const temp = current.main.temp;

        document.querySelector("#high").textContent = `${Math.round(temp)}°C`;
        document.querySelector("#low").textContent = `${Math.round(current.main.temp_min)}°C`;
        document.querySelector("#Humidity").textContent = `${current.main.humidity}%`;
        document.querySelector("#whether p").textContent = weatherDescription;

        const forecastElements = document.querySelectorAll("#forecast .info p span");
        let forecastIndex = 1;
        for (let i = 8; i < data.list.length; i += 8) {
            if (forecastIndex >= forecastElements.length) break;
            const forecastDay = data.list[i];
            forecastElements[forecastIndex].textContent = `${Math.round(forecastDay.main.temp)}°C`;
            forecastIndex++;
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

fetchWeather();
