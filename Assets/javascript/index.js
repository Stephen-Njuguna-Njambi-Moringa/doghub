

// // creating timer variable to prevent delay when different breed is  selected.
let timer;
let deleteFirstPhotoDelay;


async function start(){
    const response =await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log(data)
    createBreedList(data.message);
}
start()

function createBreedList(breedList){
    document.getElementById('breed').innerHTML =`
        <select class="title-control" onchange="loadByBreed(this.value)">
        <option class="selector">Choose a dog breed</option>
        ${Object.keys(breedList).map(function(breed){
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
}


async function loadByBreed(breed){
    // this function loads the data.
  if(breed !='Choose a dog breed'){ 
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images
    `)
    const data = await response.json()

    createSlideShow(data.message)
  }
}

// create html for the slideshow div.
function createSlideShow(images){
    let currentPosition=0;
    clearInterval(timer)
    clearTimeout(deleteFirstPhotoDelay)
   document.getElementById('slideshow').innerHTML = `
   <div class="slide" style="background-image:url('${images[0]}') ;">
   <div class="slide" style="background-image:url('${images[1]}') ;">
   `
   currentPosition += 2
   timer = setInterval(nextSlide, 3000)

   function nextSlide(){
        document.getElementById('slideshow').insertAdjacentHTML('beforeend',`<div class="slide" style="background-image:url('${images[currentPosition]}') ;">`)
        deleteFirstPhotoDelay = setTimeout(function(){
            document.querySelector('.slide').remove()
        }, 1000)
        if(currentPosition +1 >=images.length){
            currentPosition=0;
        }
        else{
            currentPosition++
        }
    }
}



var  mybutton = document.querySelector('.card-btn')

mybutton.addEventListener('click',function(){
    this.classList.toggle('newstyle');
})

/* The quote section */

   var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

