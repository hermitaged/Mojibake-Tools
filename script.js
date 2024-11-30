document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText, "windows-1252"); // Change encoding as needed
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText, encoding = "iso-8859-1") {
    // Step 1: Convert Latin text to Katakana
    const katakanaText = latinToKatakana(inputText);

    // Step 2: Simulate Mojibake by misinterpreting Katakana with the specified encoding
    const mojibakeText = simulateMojibake(katakanaText, encoding);

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

function simulateMojibake(katakanaText, encoding) {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(katakanaText);

    let mojibakeText = "";

    if (encoding === "iso-8859-1" || encoding === "windows-1252") {
        // Simulate Mojibake for ISO-8859-1 or Windows-1252
        for (let i = 0; i < utf8Bytes.length; i++) {
            mojibakeText += String.fromCharCode(utf8Bytes[i]);
        }
    } else {
        console.warn(`Encoding "${encoding}" is not supported.`);
    }

    return mojibakeText;
}
