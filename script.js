let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let displaySeconds = document.getElementById("timeInSeconds");

function convertAndDisplay() {
    errorMsg.textContent = "";
    let hoursValue = hoursInput.value;
    let minutesValue = minutesInput.value;
    if (hoursValue === "" && minutesValue === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
        return;
    } else if (minutesValue === "") {
        errorMsg.textContent = "Please enter a valid number of minutes.";
        return;
    } else if (hoursValue === "") {
        errorMsg.textContent = "Please enter a valid number of hours.";
        return;
    }
    let Result = parseInt(hoursValue) * 3600 + parseInt(minutesValue) * 60;
    displaySeconds.textContent = Result + "s";
    displaySeconds.classList.add("resultButton");
}

convertBtn.addEventListener("click", convertAndDisplay);