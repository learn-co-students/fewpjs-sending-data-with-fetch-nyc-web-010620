function submitData(name, email){
    let wall = document.getElementsByTagName("body")[0]

    let formData = {
        name: name,
        email: email
      };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(json => appendDom(json))
        .catch(error =>  {
            console.log("WHOOPS")
            wall.append(error["message"]);
    })
}

function appendDom(json){
    let wall = document.getElementsByTagName("body")[0]
    wall.append(json.id)
}
