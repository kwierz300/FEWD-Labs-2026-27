function expand(divname) {
  let mydiv = document.getElementById(divname);
  mydiv.style.display = "block";
}

function collapse(divname) {
  let mydiv = document.getElementById(divname);
  mydiv.style.display = "none";
}

function handleWestern(){expand("western");collapse("borneo");}
function handleBorneo(){expand("borneo");collapse("western");}
function registerHandlers(){document.getElementById("westerntitle").addEventListener("mouseover",handleWestern);document.getElementById("borneotitle").addEventListener("mouseover",handleBorneo);}
function removeHandlers(){document.getElementById("westerntitle").removeEventListener("mouseover",handleWestern);document.getElementById("borneotitle").removeEventListener("mouseover",handleBorneo);}
window.onload=()=>{registerHandlers();document.getElementById("register").onclick=registerHandlers;document.getElementById("remove").onclick=removeHandlers;};
