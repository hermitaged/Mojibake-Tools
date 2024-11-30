document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    // Step 1: Convert Latin text to Katakana, Hiragana, or Kanji for variety
    const kanaText = latinToKana(inputText);

    // Step 2: Simulate Mojibake (misinterpretation of UTF-8 as ISO-8859-1 or Windows-1252)
    const mojibakeText = simulateMojibake(kanaText);

    return mojibakeText;
}

function latinToKana(text) {
    const latinToKanaMap = {
        A: ["ア", "あ", "亜"], B: ["ビ", "び", "美"], C: ["シ", "し", "志"], D: ["デ", "で", "出"], E: ["エ", "え", "恵"],
        F: ["フ", "ふ", "不"], G: ["ギ", "ぎ", "技"], H: ["ヒ", "ひ", "日"], I: ["イ", "い", "伊"], J: ["ジ", "じ", "治"],
        K: ["ケ", "け", "計"], L: ["ル", "る", "留"], M: ["ム", "む", "無"], N: ["ン", "ん", "能"], O: ["オ", "お", "音"],
        P: ["プ", "ぷ", "歩"], Q: ["ク", "く", "区"], R: ["ル", "る", "流"], S: ["ス", "す", "数"], T: ["ト", "と", "時"],
        U: ["ウ", "う", "宇"], V: ["ヴ", "ゔ", "部"], W: ["ワ", "わ", "和"], X: ["クス", "くす", "宿"], Y: ["イ", "い", "意"],
        Z: ["ズ", "ず", "図"], a: ["ア", "あ", "亜"], b: ["ビ", "び", "美"], c: ["シ", "し", "志"], d: ["デ", "で", "出"],
        e: ["エ", "え", "恵"], f: ["フ", "ふ", "不"], g: ["ギ", "ぎ", "技"], h: ["ヒ", "ひ", "日"], i: ["イ", "い", "伊"],
        j: ["ジ", "じ", "治"], k: ["ケ", "け", "計"], l: ["ル", "る", "留"], m: ["ム", "む", "無"], n: ["ン", "ん", "能"],
        o: ["オ", "お", "音"], p: ["プ", "ぷ", "歩"], q: ["ク", "く", "区"], r: ["ル", "る", "流"], s: ["ス", "す", "数"],
        t: ["ト", "と", "時"], u: ["ウ", "う", "宇"], v: ["ヴ", "ゔ", "部"], w: ["ワ", "わ", "和"], x: ["クス", "くす", "宿"],
        y: ["イ", "い", "意"], z: ["ズ", "ず", "図"], " ": ["　"], // Full-width space
    };

    return text.split("").map(char => {
        if (latinToKanaMap[char]) {
            // Randomly choose between Katakana, Hiragana, or Kanji
            return latinToKanaMap[char][Math.floor(Math.random() * 3)];
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
