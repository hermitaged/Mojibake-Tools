document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    try {
        // Step 1: Translate Latin characters to Japanese using a basic mapping
        const japaneseTranslation = latinToJapanese(inputText);

        // Step 2: Encode Japanese characters into UTF-8 bytes
        const utf8Encoder = new TextEncoder();
        const utf8Bytes = utf8Encoder.encode(japaneseTranslation);

        // Step 3: Force misinterpretation of UTF-8 bytes as ISO-8859-1
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

// Simple Latin-to-Japanese translation mapping
function latinToJapanese(text) {
    const mapping = {
        A: "ア", B: "ビ", C: "シ", D: "デ", E: "エ",
        F: "フ", G: "ギ", H: "ヒ", I: "イ", J: "ジ",
        K: "ケ", L: "ル", M: "ム", N: "ン", O: "オ",
        P: "プ", Q: "ク", R: "ル", S: "ス", T: "ト",
        U: "ウ", V: "ヴ", W: "ワ", X: "クス", Y: "イ",
        Z: "ズ", a: "あ", b: "び", c: "し", d: "で",
        e: "え", f: "ふ", g: "ぎ", h: "ひ", i: "い",
        j: "じ", k: "け", l: "る", m: "む", n: "ん",
        o: "お", p: "ぷ", q: "く", r: "る", s: "す",
        t: "と", u: "う", v: "ゔ", w: "わ", x: "くす",
        y: "い", z: "ず", " ": "　"
    };

    // Replace each character with its Japanese equivalent
    return text.split("").map(char => mapping[char] || char).join("");
}
