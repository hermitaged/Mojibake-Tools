document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toJapanese(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toJapanese(inputText) {
    // Step 1: Convert Latin text to Katakana, Hiragana, and Kanji
    const japaneseText = latinToJapanese(inputText);
    return japaneseText;
}

function latinToJapanese(text) {
    const latinToKanaKanji = {
        A: ["ア", "あ", "安"], B: ["ビ", "び", "部"], C: ["シ", "し", "地"], D: ["デ", "で", "出"], E: ["エ", "え", "絵"],
        F: ["フ", "ふ", "不"], G: ["ギ", "ぎ", "技"], H: ["ヒ", "ひ", "火"], I: ["イ", "い", "医"], J: ["ジ", "じ", "自"],
        K: ["ケ", "け", "計"], L: ["ル", "る", "流"], M: ["ム", "む", "無"], N: ["ン", "ん", "南"], O: ["オ", "お", "王"],
        P: ["プ", "ぷ", "普"], Q: ["ク", "く", "区"], R: ["ル", "る", "理"], S: ["ス", "す", "水"], T: ["ト", "と", "戸"],
        U: ["ウ", "う", "宇"], V: ["ヴ", "ゔ", "部"], W: ["ワ", "わ", "和"], X: ["クス", "くす", "空"], Y: ["イ", "い", "意"],
        Z: ["ズ", "ず", "図"], a: ["ア", "あ", "安"], b: ["ビ", "び", "部"], c: ["シ", "し", "地"], d: ["デ", "で", "出"],
        e: ["エ", "え", "絵"], f: ["フ", "ふ", "不"], g: ["ギ", "ぎ", "技"], h: ["ヒ", "ひ", "火"], i: ["イ", "い", "医"],
        j: ["ジ", "じ", "自"], k: ["ケ", "け", "計"], l: ["ル", "る", "流"], m: ["ム", "む", "無"], n: ["ン", "ん", "南"],
        o: ["オ", "お", "王"], p: ["プ", "ぷ", "普"], q: ["ク", "く", "区"], r: ["ル", "る", "理"], s: ["ス", "す", "水"],
        t: ["ト", "と", "戸"], u: ["ウ", "う", "宇"], v: ["ヴ", "ゔ", "部"], w: ["ワ", "わ", "和"], x: ["クス", "くす", "空"],
        y: ["イ", "い", "意"], z: ["ズ", "ず", "図"], " ": "　", // Full-width space
    };

    return text.split("").map(char => {
        const options = latinToKanaKanji[char];
        if (options) {
            // Randomly pick one option (Katakana, Hiragana, or Kanji)
            return options[Math.floor(Math.random() * options.length)];
        } else {
            return char; // Return as is if no mapping is found (e.g., special characters)
        }
    }).join("");
}
