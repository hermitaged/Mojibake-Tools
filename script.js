document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    // Step 1: Convert Latin text to Katakana
    const katakanaText = latinToKatakana(inputText);

    // Step 2: Simulate Mojibake by misinterpreting Katakana as a different encoding
    const mojibakeText = simulateMojibake(katakanaText);

    return mojibakeText;
}

function latinToKatakana(text) {
    // Define a simple mapping from Latin letters to Katakana
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

    // Convert Latin to Katakana by replacing each character with its equivalent
    return text.split("").map(char => latinToKana[char] || char).join("");
}

function simulateMojibake(katakanaText) {
    // Step 1: Encode Katakana text as UTF-8
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(katakanaText);

    // Step 2: Simulate Mojibake by misinterpreting UTF-8 bytes as ISO-8859-1
    let mojibakeText = "";
    for (let i = 0; i < utf8Bytes.length; i++) {
        // Convert byte to a character in the ISO-8859-1 range
        mojibakeText += String.fromCharCode(utf8Bytes[i]);
    }

    return mojibakeText;
}
