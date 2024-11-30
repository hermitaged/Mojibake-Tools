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

        // Misinterpret UTF-8 bytes as Shift-JIS
        const shiftJISDecoder = new TextDecoder("shift_jis");
        return shiftJISDecoder.decode(utf8Bytes);
    } catch (error) {
        // Handle encoding errors
        console.error("Error during Mojibake conversion:", error);
        return "Cannot convert the text into Mojibake.";
    }
}
