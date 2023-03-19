// Initialization of global variables
let url 
let randomNumber
// Initialization of checkbox boutons (default : false)
let isBlack = false
let isWhite = false
let isRed = false
let isBlue = false
let isGreen = false
let isBlackS = false
let isMetisseS = false
let isMetisseS2 = false
let isMetisseS3 = false
let isClear = false
let isAlbinos = false

//Create a random url with customization options
function randUrl() {
  randomNumber = Math.floor(Math.random() * 10000) + 1 // Define a random number between 1 to 10000
  url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber
  // Hairs colors conditions, add color code to link
  if (isBlack){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&hairColor=28150a'
  }
  if (isWhite){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&hairColor=cab188'
  }
  if (isRed){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&hairColor=bd1700'
  }
  if (isBlue){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&hairColor=009bbd'
  }
  if (isGreen){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&hairColor=91cb15'
  }
  // Skins colors conditions, add color code to link
  if (isBlackS){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&skinColor=8d5524'
  }
  if (isMetisseS){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&skinColor=a26d3d'
  }
  if (isMetisseS2){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&skinColor=cb9e6e'
  }
  if (isMetisseS3){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&skinColor=e0b687'
  }
  if (isClear){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&skinColor=91cb15'
  }
  if (isAlbinos){
    url = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + randomNumber + '&skinColor=ffffff'
  }
}
// Hairs colors functions, get ID 
function black(){
  let checkbox = document.getElementById('black')
  isBlack = checkbox.checked
}
function white(){
  let checkbox = document.getElementById('white')
  isWhite = checkbox.checked
}
function red(){
  let checkbox = document.getElementById('red')
  isRed = checkbox.checked

}function blue(){
  let checkbox = document.getElementById('blue')
  isBlue = checkbox.checked
}
function green(){
  let checkbox = document.getElementById('green')
  isGreen = checkbox.checked
}
// Skins colors functions
function blackS(){
  let checkbox = document.getElementById('blackS')
  isBlackS = checkbox.checked
}
function metisseS(){
  let checkbox = document.getElementById('metisseS')
  isMetisseS = checkbox.checked
}
function metisseS2(){
  let checkbox = document.getElementById('metisseS2')
  isMetisseS2 = checkbox.checked
}
function metisseS3(){
  let checkbox = document.getElementById('metisseS3')
  isMetisseS3 = checkbox.checked
}
function clear(){
  let checkbox = document.getElementById('clear')
  isClear = checkbox.checked
}
function albinos(){
  let checkbox = document.getElementById('albinos')
  isAlbinos = checkbox.checked
}

// Function for fetch and show random Pixel Pfp
function fetchPhotos() {
  const myPix = document.querySelector("img");    
  document.getElementById("randNb").innerHTML = "Pixel n°" + randomNumber
  fetch(url)
    .then(response => {
      console.log(response)
      return response.blob()
    })
    .then(data => {
      console.log(data)
      const objectURL = URL.createObjectURL(data);
      myPix.src = objectURL
      myPix.height=250
    })
    .catch(error => console.error(error))
  document.getElementById("feur2").style.display = "flex"
  document.getElementById("cir").style.display = "flex"
}

// Function for download generated Pixel Pfp (SVG format)
function downloadSvgPixel() {
  fetch(url)
    .then(response => response.text())
    .then(svgData => {
      const link = document.createElement("a");
      link.setAttribute("href", "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData));
      link.setAttribute("download", "image.svg");    
      link.click();
    })
    .catch(error => console.error(error));
}