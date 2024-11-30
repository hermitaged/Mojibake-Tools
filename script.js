document.getElementById("convertButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

function toMojibake(inputText) {
    // Step 1: Convert Latin text to Katakana with randomness
    const katakanaText = latinToKatakana(inputText);

    // Step 2: Simulate Mojibake (misinterpretation of UTF-8 as ISO-8859-1 or Windows-1252)
    const mojibakeText = simulateMojibake(katakanaText);

    return mojibakeText;
}

function latinToKatakana(text) {
    const latinToKana = {
        A: ["ア", "ァ", "エ"], B: ["ビ", "バ", "ブ"], C: ["シ", "セ", "サ"],
        D: ["デ", "ダ", "ド"], E: ["エ", "ェ", "イ"], F: ["フ", "フィ", "フォ"],
        G: ["ギ", "ガ", "グ"], H: ["ヒ", "ハ", "ホ"], I: ["イ", "ィ", "エ"],
        J: ["ジ", "ジャ", "ジュ"], K: ["ケ", "カ", "キ"], L: ["ル", "ラ", "リ"],
        M: ["ム", "マ", "ミ"], N: ["ン", "ナ", "ニ"], O: ["オ", "ォ", "ア"],
        P: ["プ", "ポ", "パ"], Q: ["ク", "キュ", "ケ"], R: ["ル", "ラ", "リ"],
        S: ["ス", "セ", "サ"], T: ["ト", "タ", "ティ"], U: ["ウ", "ゥ", "オ"],
        V: ["ヴ", "ビ", "ブ"], W: ["ワ", "ウィ", "ウェ"], X: ["クス", "キス", "ク"],
        Y: ["イ", "ヤ", "ユ"], Z: ["ズ", "ザ", "ゼ"], " ": ["　"], // Full-width space
        a: ["ア", "ァ", "エ"], b: ["ビ", "バ", "ブ"], c: ["シ", "セ", "サ"],
        d: ["デ", "ダ", "ド"], e: ["エ", "ェ", "イ"], f: ["フ", "フィ", "フォ"],
        g: ["ギ", "ガ", "グ"], h: ["ヒ", "ハ", "ホ"], i: ["イ", "ィ", "エ"],
        j: ["ジ", "ジャ", "ジュ"], k: ["ケ", "カ", "キ"], l: ["ル", "ラ", "リ"],
        m: ["ム", "マ", "ミ"], n: ["ン", "ナ", "ニ"], o: ["オ", "ォ", "ア"],
        p: ["プ", "ポ", "パ"], q: ["ク", "キュ", "ケ"], r: ["ル", "ラ", "リ"],
        s: ["ス", "セ", "サ"], t: ["ト", "タ", "ティ"], u: ["ウ", "ゥ", "オ"],
        v: ["ヴ", "ビ", "ブ"], w: ["ワ", "ウィ", "ウェ"], x: ["クス", "キス", "ク"],
        y: ["イ", "ヤ", "ユ"], z: ["ズ", "ザ", "ゼ"]
    };

    // Replace each character with a random choice from the pool
    return text.split("").map(char => {
        const options = latinToKana[char] || [char]; // Default to the character itself if not in the map
        return options[Math.floor(Math.random() * options.length)];
    }).join("");
}

function simulateMojibake(katakanaText) {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(katakanaText);

    let mojibakeText = "";

    for (let i = 0; i < utf8Bytes.length; i++) {
        const byte = utf8Bytes[i];
        // Convert to visible Mojibake-like characters within ISO-8859-1 or Windows-1252 range
        if (byte >= 0x20 && byte <= 0x7E) {
            // Printable ASCII range remains as is
            mojibakeText += String.fromCharCode(byte);
        } else {
            // Non-ASCII range: Misinterpret byte value
            mojibakeText += String.fromCharCode(0xC0 | (byte >> 6)); // Higher bits
            mojibakeText += String.fromCharCode(0x80 | (byte & 0x3F)); // Lower bits
        }
    }

    return mojibakeText;
}

