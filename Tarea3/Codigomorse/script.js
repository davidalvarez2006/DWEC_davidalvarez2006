const codigoMorse = {
    A: ".—", B: "—...", C: "—.—.", D: "—..", E: ".", F: "..—.",
    G: "——.", H: "....", I: "..", J: ".———", K: "—.—", L: ".—..",
    M: "——", N: "—.", Ñ: "——.——", O: "———", P: ".——.", Q: "——.—",
    R: ".—.", S: "...", T: "—", U: "..—", V: "...—", W: ".——",
    X: "—..—", Y: "—.——", Z: "——..",
    0: "—————", 1: ".————", 2: "..———", 3: "...——", 4: "....—",
    5: ".....", 6: "—....", 7: "——...", 8: "———..", 9: "————.",
    ".": ".—.—.—", ",": "——..——", ":": "———...", ";": "—.—.—.",
    "?": "..——..", "!": "—.—.——", "'": ".————.", '"': ".—..—.",
    "/": "—..—.", "(": "—.——.", ")": "—.——.—", "&": ".—...",
    "=": "—...—", "+": ".—.—.", "-": "—....—", "_": "..——.—",
    "$": "...—..—", "@": ".——.—."
};

function convertirATextoMorse(texto) {
    const palabras = texto.toUpperCase().trim().split(/\s+/);
    const resultado = [];

    for (const palabra of palabras) {
        const letras = [];

        for (const caracter of palabra) {
            if (!codigoMorse[caracter]) return null;
            letras.push(codigoMorse[caracter]);
        }

        resultado.push(letras.join(" "));
    }

    return resultado.join("  ");
}

function convertirMorseATexto(texto) {
    const palabras = texto.replace(/-/g, "—").trim().split(/\s{2,}/);
    const resultado = [];

    for (const palabra of palabras) {
        const letras = palabra.split(/\s+/);
        let textoPalabra = "";

        for (const letra of letras) {
            let caracterEncontrado = "";

            for (const caracter in codigoMorse) {
                if (codigoMorse[caracter] == letra) {
                    caracterEncontrado = caracter;
                    break;
                }
            }

            if (!caracterEncontrado) return null;
            textoPalabra += caracterEncontrado;
        }

        resultado.push(textoPalabra);
    }

    return resultado.join(" ");
}

const resultado = document.getElementById("resultado");
const entrada = window.prompt("Introduce texto o código Morse:");

if (entrada == null) {
    resultado.textContent = "Conversión cancelada.";
} else if (entrada.trim() == "") {
    resultado.textContent = "No has escrito nada.";
} else if (/^[.\-—\s]+$/.test(entrada)) {
    const texto = convertirMorseATexto(entrada);

    if (texto == null) {
        resultado.textContent = "El código Morse no es válido.";
    } else {
        resultado.textContent = "Texto: " + texto;
    }
} else {
    const morse = convertirATextoMorse(entrada);

    if (morse == null) {
        resultado.textContent = "El texto contiene caracteres no admitidos.";
    } else {
        resultado.textContent = "Código Morse: " + morse;
    }
}
