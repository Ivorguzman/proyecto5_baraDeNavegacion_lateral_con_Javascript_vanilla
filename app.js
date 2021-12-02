/*👉
{
  // === Metodo 1  de codificarlo

  const palancasBotones = document.querySelector(".botones-palancas");
  const cerrarBotones = document.querySelector(".cerrar-boton");
  const barraLateral = document.querySelector(".barralateral");

  palancasBotones.addEventListener("click", function () {
    if (barraLateral.classList.contains("mostrar-barralatera")) {
      barraLateral.classList.remove("mostrar-barralatera");
    } else {
      barraLateral.classList.add("mostrar-barralatera");
    }
  });


  cerrarBotones.addEventListener("click", function () {
    barraLateral.classList.remove("mostrar-barralatera");
  });
}
👈*/



{
  // === Metodo 2  de codificarlo (Menos lineas de codigo)=== Más eefectivo ===

  const palancasBotones = document.querySelector(".botones-palancas");
  const cerrarBotones = document.querySelector(".cerrar-boton");
  const barraLateral = document.querySelector(".barralateral");

  palancasBotones.addEventListener("click", function () {

    barraLateral.classList.toggle("mostrar-barralatera", true);
  });


  cerrarBotones.addEventListener("click", function () {
    barraLateral.classList.toggle("mostrar-barralatera", false);
  });
}



