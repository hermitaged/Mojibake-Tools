document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    try {
        // Step 1: Encode the input text to UTF-8 bytes
        const utf8Encoder = new TextEncoder();
        const utf8Bytes = utf8Encoder.encode(inputText);

        // Step 2: Force interpret UTF-8 bytes as Shift-JIS or a similar encoding
        // We'll use ISO-8859-1 here for demonstration purposes
        const shiftJISDecoder = new TextDecoder("iso-8859-1");
        const mojibakeText = shiftJISDecoder.decode(utf8Bytes);

        return mojibakeText;
    } catch (error) {
        console.error("Error during Mojibake conversion:", error);
        return "Cannot convert the text into Mojibake.";
    }
}
