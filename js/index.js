// ? =============> Global ===============>
const inputs =document.querySelectorAll('input')
const btnLogin=document.getElementById("btnLogin")
const formData=document.querySelector("form")
let isValid=false
// ! =============> When Start ===============>

// * =============> Events ===============>
formData.addEventListener("input",function () {     //input
    if( validateEmail()&& validatePassword()){
        isValid=true
btnLogin.disabled = false;
        // location.href="./home.html"; 
        
        /// as api not work

 // Redirect to index.html when the form is valid
    }
    else{
        isValid=false
btnLogin.setAttribute("disabled", "true");
    }
})
formData.addEventListener("submit",function (e) {
    e.preventDefault(); 
    if(isValid){
        setForm()
    }
    
})

// ! =============> Functions ===============>
function setForm() {
    const user={
        
        email:inputs[0].value,
        password:inputs[1].value,

    } 
        console.log(user);

            // added mee

    localStorage.setItem("email", JSON.stringify(user.email));
        location.href="./home.html"; 

}
async function loginForm(user) {






    console.log("User sent to API:", user);

    const api = await fetch(`https://sticky-note-fe.vercel.app/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    // التحقق من حالة الاستجابة
    if (api.ok) {
        const response = await api.json();
        console.log("API Response:", response);

        if (response.message === "success") {
            localStorage.setItem("token", response.token);

            location.href = "./home.html";
            document.getElementById("msg").innerHTML = response.message;
            inputs.forEach(input => {
                input.classList.remove("is-valid", "is-invalid");
            });
        } else {
            document.getElementById("msg").innerHTML =
                `<div class="alert alert-danger">${response.message}</div>`;
        }
    } else {
        document.getElementById("msg").innerHTML =
            `<div class="alert alert-danger">Something went wrong: ${api.status} ${api.statusText}</div>`;
    }
}     

//  =============> Validation ===============>


function validateEmail() {
    const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (regex.test(inputs[0].value))
    {
        inputs[0].classList.add("is-valid")
        inputs[0].classList.remove("is-invalid")
        return true
    }
    else{
        inputs[0].classList.add("is-invalid")
        inputs[0].classList.remove("is-valid")
        return false
    }
    
}
function validatePassword() {
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (regex.test(inputs[1].value))
    {
        inputs[1].classList.add("is-valid")
        inputs[1].classList.remove("is-invalid")
        return true
    }
    else{
        inputs[1].classList.add("is-invalid")
        inputs[1].classList.remove("is-valid")
        return false
    }
    
}

//  =============> End Validation ===============>


// ! =============> End Functions ===============>