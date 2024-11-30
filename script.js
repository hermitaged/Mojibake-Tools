document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    // Step 1: Convert Latin text to Katakana or Hiragana for variety
    const kanaText = latinToKana(inputText);

    // Step 2: Simulate Mojibake (misinterpretation of UTF-8 as ISO-8859-1 or Windows-1252)
    const mojibakeText = simulateMojibake(kanaText);

    return mojibakeText;
}

function latinToKana(text) {
    const latinToKanaMap = {
        A: ["ア", "あ"], B: ["ビ", "び"], C: ["シ", "し"], D: ["デ", "で"], E: ["エ", "え"],
        F: ["フ", "ふ"], G: ["ギ", "ぎ"], H: ["ヒ", "ひ"], I: ["イ", "い"], J: ["ジ", "じ"],
        K: ["ケ", "け"], L: ["ル", "る"], M: ["ム", "む"], N: ["ン", "ん"], O: ["オ", "お"],
        P: ["プ", "ぷ"], Q: ["ク", "く"], R: ["ル", "る"], S: ["ス", "す"], T: ["ト", "と"],
        U: ["ウ", "う"], V: ["ヴ", "ゔ"], W: ["ワ", "わ"], X: ["クス", "くす"], Y: ["イ", "い"],
        Z: ["ズ", "ず"], a: ["ア", "あ"], b: ["ビ", "び"], c: ["シ", "し"], d: ["デ", "で"],
        e: ["エ", "え"], f: ["フ", "ふ"], g: ["ギ", "ぎ"], h: ["ヒ", "ひ"], i: ["イ", "い"],
        j: ["ジ", "じ"], k: ["ケ", "け"], l: ["ル", "る"], m: ["ム", "む"], n: ["ン", "ん"],
        o: ["オ", "お"], p: ["プ", "ぷ"], q: ["ク", "く"], r: ["ル", "る"], s: ["ス", "す"],
        t: ["ト", "と"], u: ["ウ", "う"], v: ["ヴ", "ゔ"], w: ["ワ", "わ"], x: ["クス", "くす"],
        y: ["イ", "い"], z: ["ズ", "ず"], " ": ["　"], // Full-width space
    };

    return text.split("").map(char => {
        if (latinToKanaMap[char]) {
            // Randomly choose between Katakana or Hiragana
            return latinToKanaMap[char][Math.floor(Math.random() * 2)];
        }
        return char;
    }).join("");
}

function simulateMojibake(kanaText) {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(kanaText);

    let mojibakeText = "";

    for (let i = 0; i < utf8Bytes.length; i++) {
        const byte = utf8Bytes[i];
        // Interpret the UTF-8 byte as ISO-8859-1 or Windows-1252
        mojibakeText += String.fromCharCode(byte);
    }

    return mojibakeText;
}
