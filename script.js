// --- CONFIGURATION ---
// The date you first talked (Month, Day, Year)
const startDate = new Date('November 1, 2023');

// Your list of messages. Add or remove messages here as you like.
const messages = [
    "I had a brief moment where I looked at you and thought, something has never felt this right",
    "I looked at you and felt sure. I don't know what of but I felt that way , And I knew I'd never make regrets about you",
    "Seeing you was the best decision, I enjoyed my time, 🫶🏽 I'd do it anyday",
    "Had no idea Obama lived in Chicago",
    "I'm so proud to live in the world with you",
    "pewds is my totoro 🫶🏽 (i havent watched that one)",
    ":)",
    "Don't worry about me konjo",
    "You're always worth the wait",
    "How can you say you're not gonna read them and describe them so passionately in the same sentencee",
    "Bitch eat actual misir please😭",
    "One of the many things i admire about you🙂",
    "Be careful of men",
    "its so cool when people arent related in blood but become close like family",
    "You're my happy place🫶 - nah, i was made for you",
    "i miss you everyday, from the moment i wake up"
];

// --- SCRIPT LOGIC ---
const dailyMessageElement = document.getElementById('daily-message');
const counterElement = document.getElementById('counter');

// Function to calculate the difference and update the counter
function updateCounter() {
    const now = new Date();
    const timeDifference = now.getTime() - startDate.getTime();

    // Calculate days, weeks, and seconds
    const seconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const weeks = Math.floor(days / 7);

    counterElement.innerHTML = `
        ${days} days, <br>
        ${weeks} weeks, <br>
        and ${seconds} seconds
    `;
}

// Function to set the daily message
function setDailyMessage() {
    const now = new Date();
    // Get the day of the year (0-365)
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Use a unique number for each day to pick a message
    const messageIndex = dayOfYear % messages.length;

    dailyMessageElement.textContent = messages[messageIndex];
}

// Set the daily message on page load
setDailyMessage();

// Update the counter every second
setInterval(updateCounter, 1000);