async function p() {
    const response = await fetch("https://backend-dj3g.onrender.com/home");
    const data = await response.json(); // Assuming the response is JSON, adjust accordingly if it's different
    // Now you can use the data retrieved from the API
    console.log(data)
}

p();
