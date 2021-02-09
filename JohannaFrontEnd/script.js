


const HandleLogin = (data) => {
    if(data === false){
        alert("Account alredy exists,\ntry again with different credentials");
    } else if (data === true){
        alert("Account register!\nLogin to Access Johannas Bank App")
    }
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
    .then(data =>  { console.log(data), HandleLogin(data) }) 
    .catch((err) => {
        console.error(err);
    })

    console.log(requestObject)
}