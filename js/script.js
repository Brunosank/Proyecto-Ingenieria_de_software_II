// Variables
let banio = 135,
  ducha = 9,
  c_dientes = 3,
  l_manos_cara = 3,
  a_cara = 3,
  //
  lavar_t = 3,
  lavadora = 95,
  inodoro = 5,
  riego_ext = 8,
  result,
  result2;

function consumoB() {
  result = 0;
  // p1
  let valB = document.getElementById("p1").value;
  switch (valB) {
    case "1/4":
      result = banio / 4;
      break;
    case "1/2":
      result = banio / 2;
      break;
    case "llena":
      result = banio / 1;
      break;
    default:
      result += 0;
      break;
  }
  // p2,p3
  let duD = document.getElementById("p2").value;
  let duT = document.getElementById("p3").value;
  result += duD * ducha * duT;
  // p4, p5
  let ceD = document.getElementById("p4").value;
  let ceT = document.getElementById("p5").value;
  result += ceD * c_dientes * ceT;
  // p6, p7
  let laD = document.getElementById("p6").value;
  let laT = document.getElementById("p7").value;
  result += laD * laT * l_manos_cara;
  // p8, p9
  let afS = document.getElementById("p8").value;
  let afT = document.getElementById("p9").value;
  // calcular el consumo semanal
  result *= 7;
  result += afS * afT * a_cara;
  // resultado
  document.getElementById("res1").innerHTML = result;
}

function consumoD() {
  result2 = 0;
  // p10, p11
  let ltT = document.getElementById("p10").value;
  let ltV = document.getElementById("p11").value;
  // p13
  let iD = document.getElementById("p13").value;
  // p12
  let lS = document.getElementById("p12").value;
  // p14
  let jS = document.getElementById("p14").value;
  result2 += ltT * ltV * lavar_t;
  result2 += iD * inodoro;
  // calcular el consumo semanal
  result2 *= 7;
  result2 += lS * lavadora;
  result2 += jS * riego_ext;
  document.getElementById("res2").innerHTML = result2;
}
