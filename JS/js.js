const array = [4, 7, 1, 87, 34, 18, 35, 245, 6, 235, 64, 9];

console.log(array)

const arrayElements = document.querySelectorAll(".mioArray");
arrayElements.forEach(elemento => {
    elemento.textContent = array.join(", ");
});

/* Minimo */

function minimo(numeri) {
    let min = numeri[0];
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] < min)
            min = numeri[i]
    }
    return min
}

console.log(minimo(array))

document.getElementById("codiceFunzioneMin").textContent = minimo.toString();

document.getElementById("risultatoMinimo").textContent = "Il numero minimo è: " + minimo(array);

/* Massimo */

function massimo(numeri) {
    let max = numeri[0];
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] > max)
            max = numeri[i]
    }
    return max
}

console.log(massimo(array))

document.getElementById("codiceFunzioneMax").textContent = massimo.toString();

document.getElementById("risultatoMassimo").textContent = "Il numero massimo è: " + massimo(array);