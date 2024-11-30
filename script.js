// Convert Latin to Japanese characters (mix of Katakana, Hiragana, and basic Kanji)
function latinToJapanese(text) {
    const latinToJapaneseMap = {
        a: ["ア", "あ", "安"],
        b: ["ブ", "ば", "部"],
        c: ["ク", "か", "区"],
        d: ["ド", "だ", "土"],
        e: ["エ", "え", "江"],
        f: ["フ", "ふ", "府"],
        g: ["グ", "が", "具"],
        h: ["ホ", "は", "保"],
        i: ["イ", "い", "意"],
        j: ["ジ", "じ", "寺"],
        k: ["カ", "か", "加"],
        l: ["ル", "ら", "留"],
        m: ["ム", "ま", "武"],
        n: ["ン", "な", "南"],
        o: ["オ", "お", "王"],
        p: ["プ", "ぱ", "部"],
        q: ["ク", "く", "句"],
        r: ["ル", "ら", "流"],
        s: ["ス", "さ", "寿"],
        t: ["ト", "た", "塔"],
        u: ["ウ", "う", "宇"],
        v: ["ヴ", "ゔ", "部"],
        w: ["ウ", "わ", "和"],
        x: ["クス", "くす", "空"],
        y: ["ユ", "ゆ", "遊"],
        z: ["ズ", "ざ", "図"]
    };

    let japaneseText = "";
    for (let char of text) {
        const options = latinToJapaneseMap[char.toLowerCase()];
        if (options) {
            japaneseText += options[Math.floor(Math.random() * options.length)];
        } else {
            japaneseText += char; // Preserve unmapped characters
        }
    }
    return japaneseText;
}

// Simulate Mojibake effect
function simulateMojibake(japaneseText) {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(japaneseText);

    let mojibakeText = "";

    for (let i = 0; i < utf8Bytes.length; i++) {
        const byte = utf8Bytes[i];

        // Map byte to ISO-8859-1 printable range (0xA1 to 0xFF)
        const mappedByte = 0xA0 + (byte % (0xFF - 0xA0 + 1)); 
        mojibakeText += String.fromCharCode(mappedByte);
    }

    return mojibakeText;
}

// Main conversion function
function convertTextToMojibake(inputText) {
    // Step 1: Convert Latin to Japanese characters (expanded set)
    const japaneseText = latinToJapanese(inputText);

    // Step 2: Simulate Mojibake
    const mojibakeText = simulateMojibake(japaneseText);

    return mojibakeText;
}

// Event listener for the conversion
document.getElementById("convertButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const mojibakeText = convertTextToMojibake(inputText);

    // Display the Mojibake output
    document.getElementById("outputText").textContent = mojibakeText;
});
