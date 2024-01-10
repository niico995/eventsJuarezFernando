//Primera caja
const $pesitos = document.getElementById('pesos')
const $dolaritos = document.getElementById('dolares')
const $calculador = document.getElementById('calculador')
const $limpiando = document.getElementById('limpiador')


$calculador.addEventListener('click',function(e){
    let cambiaso = $pesitos.value / 500
    $dolaritos.value = cambiaso
    console.log(cambiaso)
    e.preventDefault()
})

$limpiando.addEventListener('click',function (e){
    $pesitos.value = ''
    $dolaritos.value = ''
    e.preventDefault()

})

//Segunda caja
const $pesuquis = document.getElementById('pesuquis')
const $dolar = document.getElementById('dolar')
const $convertidor = document.getElementById('convertidor')
const $deleteador = document.getElementById('deleteador')

$convertidor.addEventListener('click',function(e){
    let cambiaso = $pesuquis.value / 500
    $dolar.value = cambiaso
    console.log(cambiaso)
    e.preventDefault()
})
//Por probar algo diferente a la primera caja
$pesuquis.addEventListener('input', function(e){
    let cambiaso = $pesuquis.value / 500
    $dolar.value = cambiaso
    console.log(cambiaso)
})


$deleteador.addEventListener('click',function (e){
    $pesuquis.value = ''
    $dolar.value = ''
    e.preventDefault()

})

//tercera caja
const $fuertesDolares = document.getElementById('fuertesDolares')
const $humildesPesos = document.getElementById('humildesPesos')
const $traspaso = document.getElementById('traspaso')
const $borron = document.getElementById('borron')


$traspaso.addEventListener('click',function(e){
    let cambiaso = $fuertesDolares.value * 500
    $humildesPesos.value = cambiaso
    console.log(cambiaso)
    e.preventDefault()
})

$borron.addEventListener('click',function (e){
    $humildesPesos.value = ''
    $fuertesDolares.value = ''
    e.preventDefault()

})