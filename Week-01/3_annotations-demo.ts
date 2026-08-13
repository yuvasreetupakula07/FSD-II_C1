let movieTitle:string="SpiderMan: Brand New Day";
let releaseYear:number=2026;
let isBlockbuster:boolean=true;
function getMovieStatus(title:string, year:number): string {
    return `${title} is a hit released in ${year}.`;
}
let leadActors:string[]=["Tom Holland", "Zendaya", "Sadie Sink"];
const summary:string=getMovieStatus(movieTitle,releaseYear);
console.log(summary);
console.log(`Starring:${leadActors.join(",")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes,I love SpiderMan!":"No"}`);
