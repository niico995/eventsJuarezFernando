const $estatura = document.getElementById('estatura')
const $peso = document.getElementById('peso')
const $calculador = document.querySelector('button')
const $resultado = document.getElementById('resultado')
const $calculo = document.getElementById('resultadoImc')

let peso, estatura

$peso.addEventListener('input', function(e){
    peso = e.target.value
})
$estatura.addEventListener('input', function(e){
    estatura = e.target.value
})

$calculador.addEventListener('click', function(e){
    let imc =  peso / Math.pow((estatura/100),2)
    console.log(peso)
    console.log(estatura/100)
    console.log(imc)
    $calculo.innerHTML = imc.toFixed(1)
    $resultado.classList.remove('invisible')
    e.preventDefault()
})
