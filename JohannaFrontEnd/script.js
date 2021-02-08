
registerForm.onsubmit = (e) => {
    e.preventDefault()
    console.log(e)

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

    console.log(requestObject)
}