document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    // Encode the input text into UTF-8 bytes
    const encoder = new TextEncoder();
    const utf8Bytes = encoder.encode(inputText);

    // Decode the bytes as Shift-JIS (simulated)
    const decoder = new TextDecoder("shift_jis");
    try {
        return decoder.decode(utf8Bytes);
    } catch (e) {
        return "Error: Cannot convert to Mojibake with the current encoding!";
    }
}
