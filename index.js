const submitData = (name, email) => {
    const BASE_URL = 'http://localhost:3000/users'
    const body = document.getElementsByTagName("body")[0]
    const formData = {
        name: name, 
        email: email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    return fetch(BASE_URL, configObj)
    .then(response => response.json())
    .then(data => body.innerHTML = data.id)
    .catch(error => body.innerHTML = error.message)
}

