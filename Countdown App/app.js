//One function that updates any countdown card
//targetDate = The date we're counting down to
//timeElements = The <p class="timer"> to write into 
// finishedMessage = What to show once the date arrives

function updateTimer(targetDate, TimerElement, finishedMessage) {
    const now= new Date();      // the current date and time
    const timeLeft = targetDate - now;      // the gap in milliseconds

    // If the date has arrived, show the message and stop here
    if (timeLeft <=0) {
        TimerElement.textContent = finishedMessage;
        return;
    }

    //Convert milliseconds into days, hours and minutes
    const days = Math.floor(timeLeft / (1000*60*60*24));
    const hours = Math.floor((timeLeft / (1000*60*60))%24);
    const minutes = Math.floor((timeLeft / (1000*60))%60);

    //write the result into the card
    TimerElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
}

//This starts a countdown and keeps it ticking
function startTimer(targetDate, TimerElement, finishedMessage) {
    updateTimer(targetDate, TimerElement, finishedMessage);
    setInterval(() => updateTimer(targetDate, TimerElement, finishedMessage), 1000);
}

//Our anniversary
startTimer(
    new Date("2026-12-14T00:00:00"),
    document.querySelector("#anniversary .timer"),
    "Happy Anniversary!"
);

//When I Join the Ship
startTimer(
    new Date("2027-02-28T00:00:00"),
    document.querySelector("#ship .timer"),
    "I'm Here!"
);

//When Shane comes home
startTimer(
    new Date("2027-06-06T00:00:00"),
    document.querySelector("#home .timer"),
    "Yay! You're home!"
);