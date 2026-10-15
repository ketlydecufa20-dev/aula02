// Escreva um programa que converta uma temperatura de Celsius para Fahre
// °C = (°F - 32) / 1,8
//°F = °C × 1,8 + 32
//texto "" 

var temperatura = 100
var tipoTemperatura = "c"
var temperaturaConvertida = 0

if (tipoTemperatura == "c") {
    console.log(" Você escolheu Celsius! ")
    temperaturaConvertida = ((temperatura * 1.8) + 32 )
} else {
    console.log (" você escolheu Fahrenheit! ")
    temperaturaConvertida = ((temperatura -32) * (5 / 9))
}

console.log ("o valor convertido é: " + temperaturaConvertida)
