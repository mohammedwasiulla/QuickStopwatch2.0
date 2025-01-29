'use strict';

// Stopwatch variables
let timer = null;  // To store the interval reference
let seconds = 0, minutes = 0, hours = 0;  // Time tracking variables

// Start the stopwatch
const startTimer = () => {
    if (timer) return;  // Prevent multiple intervals from running

    timer = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        updateTimeDisplay();
    }, 1000);  // Update every second
};

// Stop the stopwatch
const stopTimer = () => {
    clearInterval(timer);  // Clear the interval (stop the timer)
    timer = null;
};

// Reset the stopwatch
const resetTimer = () => {
    clearInterval(timer);  // Clear any existing interval
    timer = null;

    // Reset time variables
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateTimeDisplay();
};

// Update the time display in the UI
const updateTimeDisplay = () => {
    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById('time-input').value = formattedTime;
};

// Format time to ensure two digits for hours, minutes, and seconds
const formatTime = (hours, minutes, seconds) => {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};

// Pad a number with leading zero if it is less than 10
const padZero = (num) => {
    return num < 10 ? '0' + num : num;
};

// Attach event listeners to buttons
const attachEventListeners = () => {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
};

// Initialize the stopwatch functionality
const initStopwatch = () => {
    attachEventListeners();  // Set up button event listeners
    updateTimeDisplay();     // Set initial time display
};

// Run the stopwatch initialization
initStopwatch();
