document.getElementById("encodeButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value.trim();
    if (!inputText) {
        alert("Please enter text to encode.");
        return;
    }
    const mojibakeResult = toMojibake(inputText);
    document.getElementById("outputText").value = mojibakeResult;
});

document.getElementById("decodeButton").addEventListener("click", () => {
    const mojibakeInput = document.getElementById("mojibakeInput").value.trim();
    if (!mojibakeInput) {
        alert("Please enter text to decode.");
        return;
    }
    const decodedResult = decodeMojibake(mojibakeInput);
    document.getElementById("decodedOutput").value = decodedResult;
});

function toMojibake(inputText) {
    // Step 1: Convert Latin text to Katakana, Hiragana, or Kanji for variety
    const kanaText = latinToKana(inputText);

    // Step 2: Simulate Mojibake (misinterpretation of UTF-8 as ISO-8859-1 or Windows-1252)
    const mojibakeText = simulateMojibake(kanaText);

    return mojibakeText;
}

function decodeMojibake(mojibakeText) {
    // Reverse the mojibake process (convert back from mojibake to Latin text)
    const utf8Decoder = new TextDecoder(); // This will convert mojibake back to readable text
    const mojibakeBytes = [];
    
    // Convert mojibake text into byte representation
    for (let i = 0; i < mojibakeText.length; i++) {
        mojibakeBytes.push(mojibakeText.charCodeAt(i));
    }
    
    const decodedText = utf8Decoder.decode(new Uint8Array(mojibakeBytes));

    // Convert back to Latin text by simulating the reversal of encoding mishap
    return kanaToLatin(decodedText); // We'll use a similar mapping for decoding
}

function latinToKana(text) {
    const latinToKanaMap = {
        A: ["あ", "ア"], B: ["び", "ビ"], C: ["し", "シ"], D: ["で", "デ"], E: ["え", "エ"], 
        F: ["ふ", "フ"], G: ["ぎ", "ギ"], H: ["ひ", "ヒ"], I: ["い", "イ"], J: ["じ", "ジ"], 
        K: ["け", "ケ"], L: ["る", "ル"], M: ["む", "ム"], N: ["ん", "ン"], O: ["お", "オ"], 
        P: ["ぷ", "プ"], Q: ["く", "ク"], R: ["る", "ル"], S: ["す", "ス"], T: ["と", "ト"], 
        U: ["う", "ウ"], V: ["ヴ", "ヴ"], W: ["わ", "ワ"], X: ["くす", "クス"], Y: ["い", "イ"], 
        Z: ["ず", "ズ"], a: ["あ", "ア"], b: ["び", "ビ"], c: ["し", "シ"], d: ["で", "デ"], 
        e: ["え", "エ"], f: ["ふ", "フ"], g: ["ぎ", "ギ"], h: ["ひ", "ヒ"], i: ["い", "イ"], 
        j: ["じ", "ジ"], k: ["け", "ケ"], l: ["る", "ル"], m: ["む", "ム"], n: ["ん", "ン"], 
        o: ["お", "オ"], p: ["ぷ", "プ"], q: ["く", "ク"], r: ["る", "ル"], s: ["す", "ス"], 
        t: ["と", "ト"], u: ["う", "ウ"], v: ["ヴ", "ヴ"], w: ["わ", "ワ"], x: ["くす", "クス"], 
        y: ["い", "イ"], z: ["ず", "ズ"], " ": ["　", " "], // full-width space for better display
    };

    return text.split("").map(char => {
        if (latinToKanaMap[char]) {
            // Randomly choose between Hiragana and Katakana
            return latinToKanaMap[char][Math.floor(Math.random() * 2)];
        }
        return char; // If no mapping exists, keep the character
    }).join("");
}

function kanaToLatin(text) {
    const kanaToLatinMap = {
        "あ": "a", "ア": "A", "び": "b", "ビ": "B", "し": "c", "シ": "C", "で": "d", "デ": "D", 
        "え": "e", "エ": "E", "ふ": "f", "フ": "F", "ぎ": "g", "ギ": "G", "ひ": "h", "ヒ": "H", 
        "い": "i", "イ": "I", "じ": "j", "ジ": "J", "け": "k", "ケ": "K", "る": "l", "ル": "L", 
        "む": "m", "ム": "M", "ん": "n", "ン": "N", "お": "o", "オ": "O", "ぷ": "p", "プ": "P", 
        "く": "q", "ク": "Q", "る": "r", "ル": "R", "す": "s", "ス": "S", "と": "t", "ト": "T", 
        "う": "u", "ウ": "U", "ヴ": "v", "ヴ": "V", "わ": "w", "ワ": "W", "くす": "x", "クス": "X", 
        "い": "y", "イ": "Y", "ず": "z", "ズ": "Z", "　": " " // full-width space
    };

    return text.split("").map(char => kanaToLatinMap[char] || char).join("");
}

function simulateMojibake(kanaText) {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(kanaText);

    let mojibakeText = "";

    for (let i = 0; i < utf8Bytes.length; i++) {
        const byte = utf8Bytes[i];
        mojibakeText += String.fromCharCode(byte);
    }

    return mojibakeText;
}
