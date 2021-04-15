var btn_piedra = document.getElementById("Piedra");
var btn_papel = document.getElementById("Papel");
var btn_tijeras = document.getElementById("Tijeras");
var btn_lagarto = document.getElementById("Lagarto");
var btn_spock = document.getElementById("Spock");

var btn_iniciar = document.getElementById("Iniciar_juego");
var img_usuario = document.getElementById("usuario");
var img_cpu = document.getElementById("cpu");
var marcador_usuario = document.getElementById("puntos_usuario").innerText;
var marcador_cpu = document.getElementById("puntos_cpu").innerText;

var Menu = "espera";
var Opcion_jugador;
var Opcion_cpu;

init_imagenes();
btn_iniciar.onclick = function () {
  Menu = "inicio";
  console.log(Opcion_jugador);
  Opcion_cpu = num_aleatorio();
  display_opcion_cpu(Opcion_cpu);
  game(Opcion_jugador, Opcion_cpu);
};
btn_piedra.onclick = function () {
  Opcion_jugador = 0;
  img_usuario.src = "./assets/rockPPTLS.png";
};
btn_papel.onclick = function () {
  Opcion_jugador = 1;
  img_usuario.src = "./assets/paperPPTLS.png";
};
btn_tijeras.onclick = function () {
  Opcion_jugador = 2;
  img_usuario.src = "./assets/scissorsPPTLS.png";
};
btn_lagarto.onclick = function () {
  Opcion_jugador = 3;
  img_usuario.src = "./assets/lizardPPTLS.png";
};
btn_spock.onclick = function () {
  Opcion_jugador = 4;
  img_usuario.src = "./assets/spockPPTLS.png";
};

switch (Menu) {
  case "espera":
    console.log("Esperando..");
    break;
  case "inicio":
    console.log("Iniciando juego");
    break;
}

function init_imagenes() {
  btn_piedra.style.backgroundImage = " url('./assets/rockPPTLS.png')";
  btn_papel.style.backgroundImage = " url('./assets/paperPPTLS.png')";
  btn_tijeras.style.backgroundImage = "url('./assets/scissorsPPTLS.png')";
  btn_lagarto.style.backgroundImage = "url('./assets/lizardPPTLS.png')";
  btn_spock.style.backgroundImage = "url('./assets/spockPPTLS.png')";
}

function num_aleatorio() {
  return parseInt(Math.random() * 5);
}

function game(opcion_jugador, opcion_cpu) {
  var escenario_1; //Piedra 0 gana Tijeras 2
  var escenario_2; //Papel 1 gana Piedra 0
  var escenario_3; //Tijeras 2 gana Papel 1
  var escenario_4; //Piedra 0 gana Lagarto 3
  var escenario_5; //Papel 1 gana Spock 4
  var escenario_6; //Tijeras 2 gana Lagarto 3
  var escenario_7; //Lagarto 3 gana Spock 4
  var escenario_8; //Lagarto 3 gana Papel 1
  var escenario_9; //Spock 4 gana Tijeras 2
  var escenario_10; //Spock 4 gana Piedra 0
  var empate;
  if (opcion_jugador === opcion_cpu) {
    empate = true;
  } else if (opcion_jugador === 0 && opcion_cpu === 2) {
    escenario_1 = true;
  } else if (opcion_jugador === 1 && opcion_cpu === 0) {
    escenario_2 = true;
  } else if (opcion_jugador === 2 && opcion_cpu === 1) {
    escenario_3 = true;
  } else if (opcion_jugador === 0 && opcion_cpu === 3) {
    escenario_4 = true;
  } else if (opcion_jugador === 1 && opcion_cpu === 4) {
    escenario_5 = true;
  } else if (opcion_jugador === 2 && opcion_cpu === 3) {
    escenario_6 = true;
  } else if (opcion_jugador === 3 && opcion_cpu === 4) {
    escenario_7 = true;
  } else if (opcion_jugador === 3 && opcion_cpu === 1) {
    escenario_8 = true;
  } else if (opcion_jugador === 4 && opcion_cpu === 2) {
    escenario_9 = true;
  } else if (opcion_jugador === 4 && opcion_cpu === 0) {
    escenario_10 = true;
  }

  if (
    escenario_1 ||
    escenario_2 ||
    escenario_3 ||
    escenario_4 ||
    escenario_5 ||
    escenario_6 ||
    escenario_7 ||
    escenario_8 ||
    escenario_9 ||
    escenario_10
  ) {
    alert("usuario gana");
    marcador_usuario++;
    document.getElementById("puntos_usuario").innerText = marcador_usuario;
  } else if (empate) {
    alert("EMPATE");
  } else {
    alert("CPU gana");
    marcador_cpu++;
    document.getElementById("puntos_cpu").innerText = marcador_cpu;
  }
}

function display_opcion_cpu(opcion) {
  if (opcion === 0) {
    img_cpu.src = "./assets/rockPPTLS.png";
  } else if (opcion === 1) {
    img_cpu.src = "./assets/paperPPTLS.png";
  } else if (opcion === 2) {
    img_cpu.src = "./assets/scissorsPPTLS.png";
  } else if (opcion === 3) {
    img_cpu.src = "./assets/lizardPPTLS.png";
  } else {
    img_cpu.src = "./assets/spockPPTLS.png";
  }
}
