// ? =============> Global ===============>
    const links = document.querySelectorAll(".menu a")
const loading = document.querySelector(".loading");
    // ! =============> When Start ===============>

getGames('mmorpg');

const email = JSON.parse(localStorage.getItem("email"));
  const welcome = document.getElementById("welcome");
  if (email) {
    welcome.textContent = `Hello, ${email}`;
  } else {
    welcome.textContent = "No user found!";
  }




// * =============> Events ===============>

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener("click", () => {
       document.querySelector(".menu .active").classList.remove("active") 
       links[i].classList.add("active")
       const category = links[i].getAttribute("data-category")
      //  const category = links[i].dataset.category
      console.log( category )
      getGames(category)

   })
    
}
 

 document.querySelector(".logout-btn").addEventListener("click", function (params) {
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    location.href = "./index.html";
    
 })





// ! =============> Functions ===============>



  async function getGames(category) {
loading.classList.remove("d-none")


    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83ff37292emsh6676e43a48f6f6cp14f2fejsn116c214bfc84',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

    const resposeApi=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
    const data = await resposeApi.json()
    console.log(data)
          displayData(data)
          loading.classList.add("d-none")


}




function displayData(gameData){
            let cartona=``;

    for (let i = 0; i < gameData.length; i++) {
                    let video=gameData[i].thumbnail.replace("thumbnail.jpg","videoplayback.webm")

        cartona+=`
        <div class="col">
      <div onmouseleave="pauseVideo(event)" onmouseenter="playVideo(event)" onclick="showDeatils(${gameData[i].id})" class="card h-100 bg-transparent" role="button">
         <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${gameData[i].thumbnail}" />
                  <video id="myVideo" class="d-none top-0 start-0 w-100 h-100 position-absolute z-3" muted  preload= "none"  src="${video}"></video>

            </figure>

            <figcaption>

               <div class="d-flex justify-content-between">
                  <h3 class="h6 small">${gameData[i].title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text small text-center opacity-50">
${gameData[i].short_description ? gameData[i].short_description.split(" ", 8).join(" ") : ""}
               </p>

            </figcaption>
         </div>

         <footer class="card-footer small d-flex justify-content-between">

            <span class="badge badge-color">${gameData[i].genre}</span>
            <span class="badge badge-color">${gameData[i].platform}</span>

         </footer>
      </div>
   </div>

        `
    }
   document.getElementById("gameData").innerHTML=cartona 
}

function playVideo(event){
   let videoEL = event.target.querySelector("video")
    
    
    videoEL.classList.remove("d-none");
    videoEL.muted=true;
    videoEL.play()
    
}
function pauseVideo(event){
   let videoEL = event.target.querySelector("video")
    
    
    videoEL.classList.add("d-none");
    videoEL.muted=true;
    videoEL.pause()
    
}
function showDeatils(id) {
location.href = `./details.html?id=${id}`    
    
}
































    // for each link


// document.querySelectorAll(".menu a").forEach((link)    =>
//     link.addEventListener("click", ()=>{
// document.querySelector(".menu .active").classList.remove("active") 
//         link.classList.add("active")
//       console.log( links[i].getAttribute("data-category") )

//         })
//     )
