// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). 
// This request should include:
// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and email keys within an object. 
// This object should then be stringified.
const submitData = function(name, email) {
   const configurationObject = {
      method: "POST", 
      headers: {
         "Content-Type": "application/json", 
         "Accept": "application/json"
      }, 
      body: JSON.stringify({
         name: name, 
         email: email
      })
   };

   return fetch("http://localhost:3000/users", configurationObject) 
   // Use a then() call to access the Response object and use its built in json() 
   // method to parse the contents of the body property. 
   .then(function(response) {
      return response.json();
   }) 

   // Use a second then() to access this newly converted object. 
   // From this object, find the new id and append this value to the DOM.
   .then(function(object) {
      return document.body.innerHTML = object["id"]; 
   }) 

   // When writing the callback function for your catch(), expect to receive an object 
   // on error with a property, message, containing info about what went wrong. 
   // Append this message to the DOM when catch() is called.
   .catch(function(error) {
      return document.body.innerHTML = error.message
    }); 
}; 





