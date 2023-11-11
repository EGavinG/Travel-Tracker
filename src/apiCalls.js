const fetchAPICall = (resource, id) => {
  let endpoint = `http://localhost:3001/api/v1/${resource}`;
  if (id) {
    endpoint += "/" + id;
  }

  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

module.exports = {
  fetchAPICall,
};
