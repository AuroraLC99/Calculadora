
const calcular = document.getElementById('calcular')

calcular.addEventListener("click", calcularHandler);

function calcularHandler(){
    let hojaCalculo = document.getElementById("texto");
    let numeros = hojaCalculo.value
    console.log(numeros)
    let separados = numeros.split([','])
    console.log(separados)
    const cifras = separados.map((letra) => parseInt(letra, 10))
    console.log(cifras) 
    // SUMA
    let sum= 0
    for (const value of cifras){
      sum += value;
    }
    console.log(sum)
    // MEDIA
    const nm = separados.length
    console.log(nm)
    
    let media = sum/nm
    console.log(media)

    // MAXIMO
    const maximo = Math.max(...cifras)
    console.log(maximo)
    
    // MINIMO
    const minimo = Math.min(...cifras)
    console.log(minimo)

    parrafoSuma.innerHTML = `La suma de los números es: ${sum}`
    parrafoMedia.innerHTML = `La media de los número es: ${media}`
    parrafoMaximo.innerHTML = `El mayor de los número es: ${maximo}`
    parrafoMinimo.innerHTML = `El mínimo de los número es: ${minimo}`



}

// const reiniciar = document.getElementById('reiniciar')

// calcular.addEventListener('click', reiniciarHandler);
