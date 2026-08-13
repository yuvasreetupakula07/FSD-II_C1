"use strict";
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
function getLocation(city = "Vijayawada") {
    return `You are currently in ${city}.`;
}
function sendAlert(phoneNumber, message) {
    console.log(`Sending alert to ${phoneNumber}.`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
function calculateTotalScore(...scores) {
    return scores.reduce((total, current) => total + current, 0);
}
console.log(getLocation());
console.log(getLocation("Vijayawada"));
sendAlert(9876543210);
sendAlert(9876543210, "This is an important alert!");
const total = calculateTotalScore(85, 90, 78, 92);
console.log(`Total Score: ${total}`);
