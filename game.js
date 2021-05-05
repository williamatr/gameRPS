//-----Defino mis buttons y los vinculo con su respectivo ID
//Los botones de las opciones
var btn_piedra = document.getElementById("Piedra");
var btn_papel = document.getElementById("Papel");
var btn_tijeras = document.getElementById("Tijeras");
var btn_lagarto = document.getElementById("Lagarto");
var btn_spock = document.getElementById("Spock");

//Botones del menu de seleccion
var btn_stateA = document.getElementById("stateA");
var btn_stateB = document.getElementById("stateB");

// El boton de confirmar seleccion
var btn_confirmar = document.getElementById("jugar");

//Las imagenes que variaran dependiendo de las selecciones
var img_user = document.getElementById("user");
var img_pc = document.getElementById("pc");

// y el resultado
let img_result = document.getElementById("result");

// Defino los marcadores
var marcador_user = document.getElementById("puntos_user").innerText;
var marcador_pc = document.getElementById("puntos_pc").innerText;

var Opcion_jugador;
var Opcion_pc;

//Necesito inicializar las imagenes de los botones
//Queda mas corto que en css
init_imagenes();

// Hacemos la funcion para poners las imagenes correspondientes
//en nuestros botones
function init_imagenes() {
  btn_piedra.style.backgroundImage = " url('./assets/rockPPTLS.png')";
  btn_papel.style.backgroundImage = " url('./assets/paperPPTLS.png')";
  btn_tijeras.style.backgroundImage = "url('./assets/scissorsPPTLS.png')";
  btn_lagarto.style.backgroundImage = "url('./assets/lizardPPTLS.png')";
  btn_spock.style.backgroundImage = "url('./assets/spockPPTLS.png')";
}

btn_stateA.onclick = function () {
  document.getElementById("divFirstMsg").style.display = "none";
  console.log("goli_1");
  document.getElementById("containerA__bottonStateB").style.display = "flex";
  document.getElementById("containerA__bottonStateA").style.display = "none";
};
btn_stateB.onclick = function () {
  console.log("goli_2");
  document.getElementById("containerA__bottonStateB").style.display = "none";
  document.getElementById("containerA__bottonStateA").style.display = "flex";
};

//First Mesage divFirstMsg


//Continue Game
function Action_continue() {
  img_pc.src = "./assets/transparent.png";
  img_user.src = "./assets/transparent.png";
  document.getElementById("divResult").style.display = "none";
  document.getElementById("containerA__bottonStateB").style.display = "flex";
  document.getElementById("containerA__bottonStateA").style.display = "none";
}

//Show Results
function Action_confirmar() {
  document.getElementById("divResult").style.display = "flex";
  document.getElementById("divJugar").style.display = "none";
  document.getElementById("containerA__bottonStateB").style.display = "none";
  document.getElementById("containerA__bottonStateA").style.display = "flex";
}

//Definimos las funciones de cada boton
function Game() {
  console.log(Opcion_jugador, " opt_player");
  Opcion_pc = num_aleatorio();
  console.log(Opcion_pc, " opt pc");
  display_opcion_pc(Opcion_pc);
  game(Opcion_jugador, Opcion_pc);
  Action_confirmar();
}

//OnClick --- Buttons Options
btn_piedra.onclick = function () {
  console.log("goliiis");
  Opcion_jugador = 0;
  img_user.src = "./assets/rockPPTLS.png";
  document.getElementById("divJugar").style.display = "flex";
};
btn_papel.onclick = function () {
  Opcion_jugador = 1;
  img_user.src = "./assets/paperPPTLS.png";
  document.getElementById("divJugar").style.display = "flex";
};
btn_tijeras.onclick = function () {
  Opcion_jugador = 2;
  img_user.src = "./assets/scissorsPPTLS.png";
  document.getElementById("divJugar").style.display = "flex";
};
btn_lagarto.onclick = function () {
  Opcion_jugador = 3;
  img_user.src = "./assets/lizardPPTLS.png";
  document.getElementById("divJugar").style.display = "flex";
};
btn_spock.onclick = function () {
  Opcion_jugador = 4;
  img_user.src = "./assets/spockPPTLS.png";
  document.getElementById("divJugar").style.display = "flex";
};

//Definimos la funcion que generara un numero
//aleatorio entre el 1 y el 5
function num_aleatorio() {
  return parseInt(Math.random() * 5);
}

// DEfinimos la funcion para mostrar la opcion del PC
function display_opcion_pc(opcion) {
  if (opcion === 0) {
    img_pc.src = "./assets/rockPPTLS.png";
  } else if (opcion === 1) {
    img_pc.src = "./assets/paperPPTLS.png";
  } else if (opcion === 2) {
    img_pc.src = "./assets/scissorsPPTLS.png";
  } else if (opcion === 3) {
    img_pc.src = "./assets/lizardPPTLS.png";
  } else {
    img_pc.src = "./assets/spockPPTLS.png";
  }
}

//Defino las Reglas del juego
function game(opcion_jugador, opcion_pc) {
  let escenario_1; //Piedra 0 gana Tijeras 2
  let escenario_2; //Papel 1 gana Piedra 0
  let escenario_3; //Tijeras 2 gana Papel 1
  let escenario_4; //Piedra 0 gana Lagarto 3
  let escenario_5; //Papel 1 gana Spock 4
  let escenario_6; //Tijeras 2 gana Lagarto 3
  let escenario_7; //Lagarto 3 gana Spock 4
  let escenario_8; //Lagarto 3 gana Papel 1
  let escenario_9; //Spock 4 gana Tijeras 2
  let escenario_10; //Spock 4 gana Piedra 0
  let empate;

  /*---------------Con Switch-----------------*/
  switch (true) {
    case opcion_jugador === opcion_pc:
      empate = true;
      break;
    case opcion_jugador === 0 && opcion_pc === 2:
      escenario_1 = true;
      break;
    case opcion_jugador === 1 && opcion_pc === 0:
      escenario_2 = true;
      break;
    case opcion_jugador === 2 && opcion_pc === 1:
      escenario_3 = true;
      break;
    case opcion_jugador === 0 && opcion_pc === 3:
      escenario_4 = true;
      break;
    case opcion_jugador === 1 && opcion_pc === 4:
      escenario_5 = true;
      break;
    case opcion_jugador === 2 && opcion_pc === 3:
      escenario_6 = true;
      break;
    case opcion_jugador === 3 && opcion_pc === 4:
      escenario_7 = true;
      break;
    case opcion_jugador === 3 && opcion_pc === 1:
      escenario_8 = true;
      break;
    case opcion_jugador === 4 && opcion_pc === 2:
      escenario_9 = true;
      break;
    case opcion_jugador === 4 && opcion_pc === 0:
      escenario_10 = true;
      break;
  }
  //// Una vez determinado el escenario que ha sucedido procedemos
  //a sumar los puntos y mostrarle al usuario su resultado
  // (Si Gano, perio o fue empate)
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
    //alert("user gana");
    //img_result.src = "./assets/ganas_PPTLS.png";
    marcador_user = 20;
    var marcadorCpu = (document.getElementById(
      "puntos_pc"
    ).innerText -= marcador_user);
    console.log("Ganas", marcadorCpu);
    document.getElementById("textResult").innerText = "Has Ganado!";
    //-----------Lineas para control de barras de salud PC
    document.getElementById(
      "healthBarPC"
    ).style.background = `linear-gradient(90deg,#8a0505cc ${
      100 - marcadorCpu
    }%,#ffd900cc 0%)`;
  } else if (empate) {
    console.log("Empate");
    //alert("EMPATE");
    //img_result.src = "./assets/empate_PPTLS.png";
    document.getElementById("textResult").innerText = "EMPATE! ¿WTF?";
  } else {
    //alert("pc gana");
    //img_result.src = "./assets/pierdes_PPTLS.png";
    marcador_pc = 20;
    var marcadorUser =
      100 - (document.getElementById("puntos_user").innerText -= marcador_pc);
    console.log("Pierdes", marcadorUser, 100-marcadorUser);
    document.getElementById("textResult").innerText = "Has Perdido!";
    //-----------Lineas para control de barras de salud Usuario
    document.getElementById(
      "healthBarUser"
    ).style.background = `linear-gradient(90deg, #ffd900cc ${
      100 - marcadorUser
    }%, #8a0505cc ${100 - marcadorUser}%)`;
  }
}

function gameOver(){
  document.getElementById("divJugar").style.display = "none";
  img_pc.src = "./assets/transparent.png";
  img_user.src = "./assets/transparent.png";
  document.getElementById("divResult").style.display = "none";
  document.getElementById("divJugar").style.display = "none";
  document.getElementById("containerA__bottonStateB").style.display = "flex";
  document.getElementById("containerA__bottonStateA").style.display = "none";
}
