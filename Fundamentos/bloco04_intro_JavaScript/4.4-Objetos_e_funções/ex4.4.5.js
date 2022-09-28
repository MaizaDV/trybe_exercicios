
function positeveOrNot(param) {
  if (param > 0) {
    return ("positive");
  } else if (param < 0) {
    return ("negative");
  } else {
    return ("zero");
  }
};
console.log(positeveOrNot(-5));

function triangleAnglesValidate(angA, angB, angC) {
  let sumOfAngles = angA + angB + angC;
  let anglesPositives = angA > 0 && angB > 0 && angC > 0;

  if (anglesPositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return ("[Erro] ângulo inválido");
  }
}
console.log(triangleAnglesValidate(50, 100, -1));