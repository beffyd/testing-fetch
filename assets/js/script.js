const API_KEY = "aHao4kD4IBI0hpkSeFr2qDqKyCA";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultModal"));

Document.getElementById("status").addEventListener("click", e => getstatus(e))

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

    function displayStatus(data) {
        let heading = "API Key Status";
        let results = `<div>Your key is valid until </div>`;
        results += `<div class="key-status">${data.expiry}</div>`;

        document.getElementById("resultModalTitle").innerText = heading;
        document.getElementById("results-content").inerHTML = results;

        resultsModal.show();
    }
}