// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songNames = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");

let display = document.querySelector(".display");
// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let displayImage = document.querySelector(".display-image");
let displaySongName = document.querySelector(".display-song");
let displayArtistName = document.querySelector(".display-artist");
let displaySongLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let Images = [
  "https://i.ytimg.com/vi/12gmxhEFeBo/maxresdefault.jpg",
  "https://upload.wikimedia.org/wikipedia/en/1/15/Hey_Soul_Sister.jpg",
  "https://i.ytimg.com/vi/tzMGDIU_-ow/maxresdefault.jpg",
  "https://i.ytimg.com/vi/W8a4sUabCUo/maxresdefault.jpg",
  "https://i.ytimg.com/vi/P-FrQnI3slU/maxresdefault.jpg"
];

let SongNames = [
  "Payphone",
  "Hey, Soul Sister",
  "Counting Stars",
  "Dandelions",
  "Talking to the Moon"
];

let Artists = [
  "Maroon 5,Wiz Khalifa",
  "Train",
  "OneRepublic",
  "Ruth B.",
  "Bruno Mars"
];

let SongLink = [
  "https://www.youtube.com/watch?v=KRaWnd3LJfs",
  "https://www.youtube.com/watch?v=kVpv8-5XWOI",
  "https://www.youtube.com/watch?v=hT_nvWreIhg",
  "https://www.youtube.com/watch?v=VePjBFRYH3g",
  "https://www.youtube.com/watch?v=P-FrQnI3slU"
];


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let Song1;
    Song1 = {
    image: "https://i.ytimg.com/vi/12gmxhEFeBo/maxresdefault.jpg",
    name: "Payphone",
    artist: "Maroon 5,Wiz Khalifa",
    songlink: "https://www.youtube.com/watch?v=KRaWnd3LJfs"
  }
let Song2;
  Song2 = {
    image: "https://upload.wikimedia.org/wikipedia/en/1/15/Hey_Soul_Sister.jpg",
    name: "Hey, Soul Sister",
    artist: "Train",
    songlink: "https://www.youtube.com/watch?v=kVpv8-5XWOI"
  }
let song3;
  Song3 = {
    image: "https://i.ytimg.com/vi/tzMGDIU_-ow/maxresdefault.jpg",
    name: "Counting Stars",
    artist: "OneRepublic",
    songlink: "https://www.youtube.com/watch?v=hT_nvWreIhg"
  }
let Song4;
  Song4 = {
    image:"https://i.ytimg.com/vi/W8a4sUabCUo/maxresdefault.jpg",
    name: "Dandelions",
    artist: "Ruth B.",
    songlink: "https://www.youtube.com/watch?v=VePjBFRYH3g"
  }
let Song5;
  Song5 = {
    image:"https://i.ytimg.com/vi/P-FrQnI3slU/maxresdefault.jpg",
    name: "Talking to the Moon",
    artist: "Bruno Mars",
    songlink: "https://www.youtube.com/watch?v=P-FrQnI3slU"
  }
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// done above
// task 14: create an array that stores all of the objects.
let Songs = [Song1,Song2,Song3,Song4,Song5];


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// done
// task 16: update your `.push()` so the input object is added to your array of objects.

// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imageURLInput = image.value
let songNameInput = songNames.value
let artistInput = artist.value
let songLinkInput = songLink.value

// task 10: use `.push()` to add each input value to the correct array.
// Images.push(imageURLInput)
// SongNames.push(songNameInput)
// Artists.push(artistInput)
// SongLink.push(songLinkInput)
  let songInfo = {
    imageUrl: image.value,
    songNames: songNames.value,
    artist: artist.value,
    songLink: songLink.value,
  }
  Songs.push(songInfo)
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySongName.innerHTML = "";
  displayArtistName.innerHTML = "";
  displaySongLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

// Images.forEach(function(Image){
//   displayImage.insertAdjacentHTML("beforeend",`<p> <img src=${Image}> </p>`)
// })

//   SongNames.forEach(function(SongName){
//     displaySongName.insertAdjacentHTML("beforeend",`<p> ${SongName}</p>`)
//   })

// Artists.forEach(function(ArtistName){
//   displayArtistName.insertAdjacentHTML("beforeend", `<p> ${ArtistName} </p>`)
// })

// SongLink.forEach(function(SongLink){
//   displaySongLink.insertAdjacentHTML("beforeend", ` <a href = "${SongLink}" > Click here for song </a> `)
// })
// }
Songs.forEach(function(Song){
  displayImage.insertAdjacentHTML("beforeend",`<p> <img src=${Song.image}> </p>`)
  displaySongName.insertAdjacentHTML("beforeend",`<p> ${Song.name}</p>`)
  displayArtistName.insertAdjacentHTML("beforeend", `<p> ${Song.artist} </p>`)
  displaySongLink.insertAdjacentHTML("beforeend", ` <a href = "${Song.songlink}" > Click here for song </a> `)
})
}
// top code does not work



// click event to add and display songs
add.onclick = function() {
 emptyDisplay();
  addSongInfo();
displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
