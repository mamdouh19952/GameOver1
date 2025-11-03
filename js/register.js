// ? =============> Global ===============>
const inputs =document.querySelectorAll('input')
const btnRegister=document.getElementById("btnRegister")
const formData=document.querySelector("form")
let isValid=false
// ! =============> When Start ===============>

// * =============> Events ===============>
formData.addEventListener("input",function () {     //input
    if(validateName(inputs[0]) && validateName(inputs[1])&& validateEmail()&& validatePassword()&& validateAge()){
        isValid=true
btnRegister.disabled = false;
        location.href="./index.html";   /// as api not work 

 // Redirect to index.html when the form is valid
    }
    else{
        isValid=false
btnRegister.setAttribute("disabled", "true");
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
        first_name:inputs[0].value,
	last_name:inputs[1].value,
        email:inputs[2].value,
        password:inputs[3].value,
	age:inputs[4].value

    } 
        console.log(user);

    registerForm (user)
}
async function registerForm(user) {
    console.log("User sent to API:", user);

    const api = await fetch(`https://sticky-note-fe.vercel.app/signup`, {
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
            location.href = "./index.html";
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
function validateName(input) {
    const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
   if (regex.test(input.value))
   {
input.classList.add("is-valid")
input.classList.remove("is-invalid")
return true
   }
    else{
input.classList.add("is-invalid")
input.classList.remove("is-valid")
return false

    }
}

function validateEmail() {
    const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (regex.test(inputs[2].value))
    {
        inputs[2].classList.add("is-valid")
        inputs[2].classList.remove("is-invalid")
        return true
    }
    else{
        inputs[2].classList.add("is-invalid")
        inputs[2].classList.remove("is-valid")
        return false
    }
    
}
function validatePassword() {
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (regex.test(inputs[3].value))
    {
        inputs[3].classList.add("is-valid")
        inputs[3].classList.remove("is-invalid")
        return true
    }
    else{
        inputs[3].classList.add("is-invalid")
        inputs[3].classList.remove("is-valid")
        return false
    }
    
}
function validateAge() {
    const regex=/^([1-7][0-9]|80)$/

    if (regex.test(inputs[4].value))
    {
        inputs[4].classList.add("is-valid")
        inputs[4].classList.remove("is-invalid")
        return true 
    }
    else{
        inputs[4].classList.add("is-invalid")
        inputs[4].classList.remove("is-valid")
        return false
    }
}

//  =============> End Validation ===============>