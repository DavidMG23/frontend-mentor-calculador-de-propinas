// datos
const importe = document.querySelector("#cuenta")
const propina = document.querySelector("#custom")
const personas = document.querySelector("#people")
const totProp = document.querySelector("#totalPropina")
const totPers = document.querySelector("#totalPersona")
const totFin = document.querySelector("#totalFinal")

// botones %

const valorPorcentaje5 = document.getElementById("btn5")
const valorPorcentaje10 = document.getElementById("btn10")
const valorPorcentaje15 = document.getElementById("btn15")
const valorPorcentaje20 = document.getElementById("btn20")
const valorPorcentaje25 = document.getElementById("btn25")
const porcentajeCustom = document.getElementById("custom")
const reset = document.getElementById("reset")

// Escuchar Clicks

btn5.addEventListener("click",() => {
   calculo(valorPorcentaje5) // le paso el valor del btn %
})
btn10.addEventListener("click",() => {
   calculo(valorPorcentaje10) // le paso el valor del btn %
})
btn15.addEventListener("click",() => {
   calculo(valorPorcentaje15) // le paso el valor del btn %
})
btn20.addEventListener("click",() => {
   calculo(valorPorcentaje20) // le paso el valor del btn %
})
btn25.addEventListener("click",() => {
   calculo(valorPorcentaje25) // le paso el valor del btn %
})
custom.addEventListener("keypress", function (e) {
   if (e.key === 'Enter') {
      calculo(custom) // le paso el valor del btn %      
   }
})

reset.addEventListener("click", () => {
   // limpiar los input
   importe.value = ""
   propina.value = ""
   personas.value = ""
   // recarga la aplicación
   location.reload()
})

function calculo(btn) {  
   
   btn.style.backgroundColor = "#21cfb8"
   btn.style.Color = "#0a5d64"
   var imp = importe.value
   imp = parseFloat(imp, 16) // texto a float

   var prop = btn.value
   var people = personas.value
   var prom = (imp * prop) / 100
   var totalGeneral = imp + prom
   var totalPersona = (totalGeneral / people).toFixed(2) // limito los decimales a 2

   // Mostrar resultados
   totProp.textContent = (prom / people).toFixed(2) + " €"
   totPers.textContent = totalPersona + " €" 
   totFin.textContent = totalGeneral + " €"
}