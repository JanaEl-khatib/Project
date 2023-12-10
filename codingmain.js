const translateToArabic = document.querySelector("#translateToArabic");
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const translateCount = document.querySelector("#translateCount");

translateToArabic.addEventListener("click", () => {
    let text = inputText.value;

    console.log(text);

    let translationApiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|ar`;

    // Fetching translation from external API
    fetch(translationApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            outputText.value = data.responseData.translatedText;
        })
        .catch(error => {
            console.error("Translation API error:", error);
            // Handle error
        });

    // Assuming API is running on localhost:3000
    const apiUrl = 'http://localhost:3000';

    // To increment translation count
    fetch(`${apiUrl}/translation`, {
        method: 'POST',
        headers: {'content-type': "text/plain", 'accept': "text/plain"}
    })
        .then(response => {
            // Handle success
        })
        .catch(error => {
            console.error("Increment translation count API error:", error);
            // Handle error
        });

    // To get translation count
    fetch(`${apiUrl}`, {
        method: 'GET',
        headers: {'content-type': "application/json"}
    })
        .then(response => response.json())
        .then(data => {
            translateCount.innerText = data.translate_count;
            // Use translateCount as needed
        })
        .catch(error => {
            console.error("Get translation count API error:", error);
            // Handle error
        });
});
