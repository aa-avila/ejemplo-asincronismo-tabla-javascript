//MESES
const meses = [
  "Enero",
  "Febrero ",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//DIAS de cada mes
const diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//"Agarramos" la tabla pre-creada del documento
var tablaBody = document.querySelector("tbody");

//Contador index
var iCount = 0;

/*Funcion SetInterval
 * cada 500 milisegundos
 * Crea dinamicamente los elementos "tdMes" y "tdDias"
 * y los añade a la tabla
 */
var intervalo = setInterval(() => {
  let tr = document.createElement("tr");
  let tdMes = document.createElement("td");
  let tdDias = document.createElement("td");

  tdMes.textContent = meses[iCount];
  tdDias.textContent = diasDelMes[iCount];

  tr.appendChild(tdMes);
  tr.appendChild(tdDias);

  tablaBody.appendChild(tr);

  console.log(
    "Nueva fila creada: " + meses[iCount] + ", " + diasDelMes[iCount] + "."
  );

  iCount++;

  //Termina setInterval cuando iCount iguala el tamaño del array "meses"
  if (iCount == meses.length) {
    console.log("La tabla ha sido creada con éxito!");
    alert("La tabla ha sido creada con éxito!");
    clearInterval(intervalo);
  }
}, 500);
