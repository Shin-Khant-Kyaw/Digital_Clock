const presentTime = document.getElementById("presentTime");
const date = document.getElementById("date");



function callOutTIme(){
    const now = new Date();
    const hour = now.getHours();
    const formattedHour = String(hour % 12 || 12).padStart(2, "0");
    const indicators = hour >= 12 ? "PM" : "AM";
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    const day = now.getDate();
    let month = now.getMonth();
    month += 1;

    const year = now.getFullYear();

    switch(month) {
        case 1: month = "January"; break;
        case 2: month = "February";  break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "October"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
    }



    presentTime.innerText = `${formattedHour}:${minutes}:${second} ${indicators}`;
    date.innerText = `${day}, ${month}, ${year}`;
    
}

setInterval(callOutTIme, 1000);
callOutTIme();