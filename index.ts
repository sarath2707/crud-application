export {};

// Save a hobby by making a POST request to the PHP backend
function saveHobby(name: string): Promise<any> {
    const url = 'http://127.0.0.1:8000/';
  
    // Create the request data
    const requestData = {
      action: 'saveHobby',
      name: name,
    };
  
    // Make the POST request
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }
  
  // Usage example
  const hobbyName = 'Reading';
  saveHobby(hobbyName);
  