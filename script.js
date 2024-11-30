document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    // Step 1: Convert Latin text to Katakana
    const katakanaText = latinToKatakana(inputText);

    // Step 2: Simulate Mojibake (misinterpretation of UTF-8 as ISO-8859-1 or Windows-1252)
    const mojibakeText = simulateMojibake(katakanaText);

    return mojibakeText;
}

function latinToKatakana(text) {
    const latinToKana = {
        A: "ア", B: "ビ", C: "シ", D: "デ", E: "エ",
        F: "フ", G: "ギ", H: "ヒ", I: "イ", J: "ジ",
        K: "ケ", L: "ル", M: "ム", N: "ン", O: "オ",
        P: "プ", Q: "ク", R: "ル", S: "ス", T: "ト",
        U: "ウ", V: "ヴ", W: "ワ", X: "クス", Y: "イ",
        Z: "ズ", a: "ア", b: "ビ", c: "シ", d: "デ",
        e: "エ", f: "フ", g: "ギ", h: "ヒ", i: "イ",
        j: "ジ", k: "ケ", l: "ル", m: "ム", n: "ン",
        o: "オ", p: "プ", q: "ク", r: "ル", s: "ス",
        t: "ト", u: "ウ", v: "ヴ", w: "ワ", x: "クス",
        y: "イ", z: "ズ", " ": "　", // Full-width space
    };

    return text.split("").map(char => latinToKana[char] || char).join("");
}

function simulateMojibake(katakanaText) {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(katakanaText);

    let mojibakeText = "";

    for (let i = 0; i < utf8Bytes.length; i++) {
        const byte = utf8Bytes[i];
        // Misinterpret bytes to simulate mojibake
        if (byte >= 0x20 && byte <= 0x7E) {
            // Printable ASCII range remains as is
            mojibakeText += String.fromCharCode(byte);
        } else {
            // Non-ASCII characters misinterpreted
            // Simulate mojibake by adding an offset for visible characters
            mojibakeText += String.fromCharCode(byte + 0x2500); // Add an offset for gibberish-like characters
        }
    }

    return mojibakeText;
}
