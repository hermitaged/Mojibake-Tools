document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    try {
        // Encode the input text as UTF-8 bytes
        const utf8Encoder = new TextEncoder();
        const utf8Bytes = utf8Encoder.encode(inputText);

        // Simulate decoding bytes as ISO 8859-1 (Latin-1)
        const mojibakeResult = utf8Bytes
            .map(byte => String.fromCharCode(byte)) // Convert bytes to characters directly
            .join(''); // Join characters into a string

        return mojibakeResult;
    } catch (error) {
        // Handle encoding errors
        console.error("Error during Mojibake conversion:", error);
        return "Cannot convert the text into Mojibake.";
    }
}
