
let navBarBtn = document.querySelector("#nav-bar-collapse");
let navBar = document.querySelector(".nav-bar");
let navBarHomeLink = document.querySelector(".home a");
let navBarHomeLink2 = document.querySelector(".bottom a");

let libraryText = document.querySelector(".library");
let playlistCard = document.querySelectorAll(".playlist-card");

navBarBtn.addEventListener("click", () => {
  navBarHomeLink.classList.toggle("hidden");
  navBarHomeLink2.classList.toggle("hidden");
  libraryText.classList.toggle("hidden");
  playlistCard[0].classList.toggle("hidden");
  playlistCard[1].classList.toggle("hidden");
  console.log("cliked");
  navBar.classList.toggle("narrow-bar");
});

let genreData = [
  "music",
  "podcast",
  "live events",
  "Made For You",
  "new release",
  "2023 in music",
  "2023 in podcast",
  "hindi",
  "punjabi",
  "tamil",
  "pop",
  "podcast charts",
  "podcast new release",
  "video podcast",
  "business and tech",
  "charts",
  "indie",
  "trending",
  "love",
  "mood",
  "discover",
  "party",
  "devotional",
  "decades",
  "hip-hop",
  "dance",
  "student",
  "chill",
  "gaming",
  "k-pop",
  "workout",
  "radar",
  "equal",
  "equal",
  "fresh find",
  "rock",
  "sleep",
];

function randomcolor(){
    return (Math.floor(Math.random() * 256))
}
let genreContainer = document.querySelector("#genre-container")

for (const items of genreData) {
    let cd = `rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})`
    let div = document.createElement("div")
    div.innerHTML = `<p class="search-card-heading">${items}</p>
    <img src="./assets/card${Math.floor(Math.random() * 6) + 1}img.jpeg" alt="" />`
    div.style.backgroundColor = cd
    div.classList.add("search-card")
    genreContainer.appendChild(div)
}

