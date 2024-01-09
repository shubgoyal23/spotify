let navBarBtn = document.querySelector("#nav-bar-collapse")
let navBar = document.querySelector(".nav-bar")
let navBarHomeLink = document.querySelector(".home a")
let navBarHomeLink2 = document.querySelector(".bottom a")

let libraryText = document.querySelector(".library")
let playlistCard = document.querySelectorAll(".playlist-card")


navBarBtn.addEventListener("click", ()=>{
    navBarHomeLink.classList.toggle("hidden")
    navBarHomeLink2.classList.toggle("hidden")
    libraryText.classList.toggle("hidden")
    playlistCard[0].classList.toggle("hidden")
    playlistCard[1].classList.toggle("hidden")
    console.log("cliked")
    navBar.classList.toggle("narrow-bar")
})