import { songs } from "./data.js";

//Exercise 1: Get the array of all Artists.
/*const  getAllArtists = (songs) => songs.map(song=> song.artist);
console.log(getAllArtists(songs));
    //console.log("Exercise 1 ->", result);*/
 let getAllArtists = songs.map(song => song ['artist']);
    console.log(getAllArtists);

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    return array.filter(song => song.artist === artist);
};
const result = getSongsFromArtist(songs,"Aerosmith");
console.log(result);

//Exercise 3: Alphabetic order by title
/*function orderAlphabetically(){
    //Write your code here
};*/

function orderAlphabetically(array){
    return array.sort((a, b) => a.title.localeCompare(b.title));
};
console.log(orderAlphabetically(songs));
//=========================================================
//Exercise 4: Order by year, ascending
function orderByYear(array){
    return array.sort((a, b) => a.year - b.year);
};
console.log(orderByYear(songs));

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre){
    return array.filter(song => song.genre === genre);
};
console.log(songsByGenre(songs, "Pop"));

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songs){    
        return songs.map(song => {
            const parts = song.duration.split(' ');
            let seconds = 0;
            parts.forEach(part => {
                if (part.includes('min')) seconds += parseInt(part) * 60;
                else if (part.includes('sec')) seconds += parseInt(part);
            });
            return { ...song, duration: seconds };
        });
    //Write your code herecon
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong }