function mostrarPrimos() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (!Number.isInteger(numero) || numero < 1) {
        resultado.textContent = "Introduce un número entero positivo.";
        return;
    }

    let celdas = "<td>1</td>";
    for (let num = 2; num <= numero; num++) {
        let esPrimo = true;
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) celdas += `<td>${num}</td>`;
    }

    resultado.innerHTML = `<table><tr>${celdas}</tr></table>`;
}
