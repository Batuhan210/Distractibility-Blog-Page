/*Hamburger Menu */
document.getElementById("hmbrg").addEventListener("click", function () {
  document.getElementById("navbarNav").classList.toggle("show");
});

/*Button*/
let counter = 0;
document.getElementById("click").addEventListener("click", function () {
  counter++;
  document.getElementById("text-change").innerHTML =
    "Çalışmaya başladığınızdan beri telefonunuz " +
    `${counter}` +
    "  kere dikkatinizi dağıttı. Çalışırken Lofi Fruits tarzı şarkılar dinleyebilirsiniz 😂 ";
});