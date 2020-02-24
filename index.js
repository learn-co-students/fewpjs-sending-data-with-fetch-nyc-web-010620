// Add your code here

const submitData = function(name, email){
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
          name, 
          email
      })
  })

  .then(function(response){
      return response.json()
  })
  .then(function(object){
      const body = document.getElementsByTagName("body")[0]
      body.innerHTML = object.id
  })
  .catch(function(error){
      const body = document.getElementsByTagName("body")[0]
      body.innerHTML = error.message
  })
}
