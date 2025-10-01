function callApi() {
  // ✅ Change this URL to match your backend service
  const backendUrl = "http://172.18.18.99:8080/api/hello";

  fetch(backendUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("result").innerText = data.message;
      document.getElementById("result").classList.add("success");
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err.message;
      document.getElementById("result").classList.add("error");
    });
}
