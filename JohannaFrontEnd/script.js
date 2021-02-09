


const HandleRegister = (data) => {
    if(data === false){
        alert("Account alredy exists,\ntry again with different credentials");
        

    } else if (data === true){
        alert("Account register success!\nLogin to Access Johannas Bank App")
        LoginButton.style.visibility = "visible";
    }
}

const LoginButton = document.getElementById('login')
LoginButton.addEventListener('click', () => {

    document.location = "index.html";
})
const HandleLogin = (data) => {

    
    
    
}


registerForm.onsubmit = (e) => {
    e.preventDefault()
   

    let requestObject = {
        Username: e.target[0].value,
        Password: e.target[1].value,
        
    }

    fetch('http://localhost:65424/api/User/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject)
    })
    .then(data => data.json())
    .then(data =>  { console.log(data), HandleRegister(data) }) 
    .catch((err) => {
        console.error(err);
    })

    console.log(requestObject)
}