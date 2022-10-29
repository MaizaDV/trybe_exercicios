document.getElementById("header-container").style.backgroundColor = "rgb(6,177,107)";
document.getElementById("footer-container").style.backgroundColor = "rgb(14,47,46)";
document.getElementById("container").style.backgroundColor = "rgb(243,243,243)";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "rgb(255, 159, 132)";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "rgb(249, 219, 94)";

const divEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < divEmergencyTasks.length; i += 1) {
  divEmergencyTasks[i].style.backgroundColor = "rgb(165, 0, 243)"
};

const divNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < divNoEmergencyTasks.length; i += 1) {
  divNoEmergencyTasks[i].style.backgroundColor = "rgba(35,37,36,255)"
};