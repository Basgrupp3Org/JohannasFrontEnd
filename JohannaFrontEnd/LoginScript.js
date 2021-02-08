

const addParagraph = (data) => 
{
    let para = document.createElement('p')
    let textNode = document.createTextNode(data.title)
    para.appendChild(textNode)
    let paragraphDiv = document.getElementById('paragraph-div')
    paragraphDiv.appendChild(para)
    // let para = document.createElement('p') // <p></p>
    // let textNode = document.createTextNode('Här har vi lagt till en rad') // "Här har vi lagt till en rad"
    // para.appendChild(textNode) // <p>"Här har vi lagt till en rad"</p>
    // let paragraphDiv = document.getElementById('paragraph-div')
    // paragraphDiv.appendChild(para) // <div><p>.......</div>
}


loginForm.onsubmit = (e) => {
    e.preventDefault()
   

    let requestObject = {
        Username: e.target[0].value,
        Password: e.target[1].value,
        
    }

    fetch('http://localhost:65424/api/User/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject)
    })
    .then(data => data.json())
    .then(data =>  { console.log(data) }) 
    .catch((err) => {
        console.error(err);
    })

    console.log(requestObject)
}




