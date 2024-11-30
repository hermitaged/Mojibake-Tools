document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    try {
        // Step 1: Encode input text to UTF-8 bytes
        const utf8Encoder = new TextEncoder();
        const utf8Bytes = utf8Encoder.encode(inputText);

        // Step 2: Decode those bytes incorrectly as ISO-8859-1 to produce gibberish
        let mojibakeText = "";
        for (let i = 0; i < utf8Bytes.length; i++) {
            mojibakeText += String.fromCharCode(utf8Bytes[i]);
        }

        return mojibakeText;
    } catch (error) {
        console.error("Error during Mojibake conversion:", error);
        return "Cannot convert the text into Mojibake.";
    }
}
