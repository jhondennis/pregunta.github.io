function accionParaCuandoEllaDigaQueSi(){
  alert('Tanto tiempo, tantos aÃ±os, tantas vidas y resulta que yo solo te buscaba a ti. â¤â¤â¤ðððð');
}

function accionParaCuandoEllaDigaQueNo(){
  width = window.innerWidth;
  height = window.innerHeight;

  newWidth = (Math.random() * width);
  newHeight = (Math.random() * height);

  document.getElementById('btnNo').style.position = "absolute";
  document.getElementById('btnNo').style.left = newWidth + "px";
  document.getElementById('btnNo').style.top = newHeight + "px";
}

function mueveElBoton(){
  width = window.innerWidth;
  height = window.innerHeight;
  console.log("Medidas", width, height);

  newWidth = (Math.random() * width);
  newHeight = (Math.random() * height);

  document.getElementById('btnNo').style.position = "absolute";
  document.getElementById('btnNo').style.left = newWidth + "px";
  document.getElementById('btnNo').style.top = newHeight + "px";
}