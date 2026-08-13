"use strict";
let movieTitle = "SpiderMan: Brand New Day";
let releaseYear = 2026;
let isBlockbuster = true;
function getMovieStatus(title, year) {
    return `${title} is a hit released in ${year}.`;
}
let leadActors = ["Tom Holland", "Zendaya", "Sadie Sink"];
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring:${leadActors.join(",")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes,I love SpiderMan!" : "No"}`);
