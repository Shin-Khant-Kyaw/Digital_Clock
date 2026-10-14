
const cities = [
  { name: "New York", timeZone: "America/New_York" },
  { name: "London", timeZone: "Europe/London" },
  { name: "Tokyo", timeZone: "Asia/Tokyo" },
  { name: "Sydney", timeZone: "Australia/Sydney" },
  { name: "Yangon", timeZone: "Asia/Yangon" }
];

const container = document.getElementById("clockContainer");

function initWorldClocks() {

  const row = document.createElement("div");
  row.className = "row g-4 justify-content-center";

  cities.forEach((city, index) => {
   
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-4";

   
    col.innerHTML = `
      <div class="card shadow border-0 h-100 bg-dark rounded-4">
        <div class="card-body text-center p-4">
          <h5 class="card-title text-light fw-semibold mb-3">${city.name}</h5>
          <p class="card-text fs-4 fw-bold text-primary font-monospace mb-0" id="clock-${index}">
            Loading...
          </p>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  container.appendChild(row);
}

function updateTimes() {
  const now = new Date();

  cities.forEach((city, index) => {

    const timeString = now.toLocaleTimeString("en-US", {
      timeZone: city.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    const clockElement = document.getElementById(`clock-${index}`);
    if (clockElement) {
      clockElement.textContent = timeString;
    }
  });
}

initWorldClocks();

updateTimes();
setInterval(updateTimes, 1000);