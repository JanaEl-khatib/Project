const translateToArabic = document.querySelector("#translateToArabic");
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");

translateToArabic.addEventListener("click", () => {
    let text = inputText.value;

    console.log(text);

    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|ar`;
    // fetching api response and returning it with parsing into js obj
    // and in another then method receiving that obj
    fetch(apiUrl).then(res => res.json()).then(data => {
            console.log(data);
            outputText.value = data.responseData.translatedText;
        });
});
