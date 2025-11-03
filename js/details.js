// ? =============> Global ===============
const searchParams = location.search;
const params = new URLSearchParams(searchParams);
const id = params.get("id");
let containerDeatails = {};

// تحقق من وجود id في الرابط
if (!id) {
    document.getElementById("detailsData").innerHTML = `
        <p class="text-danger">No game ID provided in URL.</p>
    `;
} else {

    // ! =============> When Start ===============
    (async function () {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '83ff37292emsh6676e43a48f6f6cp14f2fejsn116c214bfc84',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const resposneData = await api.json();
        console.log(resposneData);

        // تحقق إن البيانات موجودة قبل العرض
        if (resposneData && resposneData.thumbnail) {
            containerDeatails = resposneData;
            displayData();
        } else {
            document.getElementById("detailsData").innerHTML = `
                <p class="text-danger">Invalid game data received.</p>
            `;
        }
    })();
}

// ! =============> Functions ===============
function displayData() {
    let detailsBox = `
        <div class="col-md-4">
            <figure>
                <img src="${containerDeatails.thumbnail}" class="w-100" alt="details image" />
            </figure>
        </div>
        <div class="col-md-8">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item text-reset"><a href="./home.html">Home</a></li>
                        <li class="breadcrumb-item text-info" aria-current="page">${containerDeatails.title}</li>
                    </ol>
                </nav>
                <h1>${containerDeatails.title}</h1>
                <h3>About ${containerDeatails.title}</h3>
                <p>${containerDeatails.description}</p>
            </div>
        </div>
    `;

    document.getElementById("detailsData").innerHTML = detailsBox;
    document.body.style.cssText = `
        background:url('${containerDeatails.thumbnail.replace("thumbnail", "background")}');
        background-position: center;
        background-size: cover
    `;
}
