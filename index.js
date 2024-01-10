const $botoncito = document.querySelector('button')
const $cajita = document.getElementById('cuadradito')


const $texto = document.getElementById('textoAMostrar')
const $caja = document.getElementById('cuadroTexto')
const $limpia = document.getElementById('limpiador')

$botoncito.addEventListener('click', function (e) {

    if($cajita.className == 'bg-blue-400 w-40 h-40'){
        $cajita.className ='bg-pink-400 w-40 h-40'
        $cajita.innerHTML = 'rosita'
    }else {
        $cajita.className ='bg-blue-400 w-40 h-40'
        $cajita.innerHTML = 'azul'
    }
    e.preventDefault()
})

$texto.addEventListener('input', function (e) {
    let textoIngresado = e.target.value

    $caja.innerHTML = textoIngresado
})
$limpia.addEventListener('click', function (){

    $texto.value = ''
    $caja.innerHTML = ''
})