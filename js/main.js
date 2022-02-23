// animación de scroll
function apareceScroll(){
  let html = document.getElementsByTagName("html")[0]; // cogemos todo el html
  let fotoAparece = document.getElementsByClassName("zoom"); // almacenamos en fotoAparece los elementos de las clases zoom
  document.addEventListener("scroll",function(){
    let topVent = html.scrollTop;
    for(let i=0; i< fotoAparece.length; i++){
      let topfotoAparece = fotoAparece[i].offsetTop; // topfotoAparece = pixeles que aparecen al hacer scroll
      if(topVent>topfotoAparece - 500){
        fotoAparece[i].style.opacity = "1";
      }
    }
  })
}
apareceScroll();

// validaciones
  function validarPassword(){
    let password;
    let respuestaPassword;
    let nombre;
    let respuestaNombre;
    let email;
    let respuestaEmail;
    password = document.getElementById("password").value;
    nombre = document.getElementById("name").value;
    email = document.getElementById("email").value;



    if(password.length<8){ // validar password
      respuestaPassword = "Invalid password";
      alert("Invalid password");
    } else {
      respuestaPassword = "Accepted";
      document.getElementById("respuestaPassword").innerText = respuestaPassword;
    }
    if(nombre.length<3 || nombre.length>20){ // validar el nombre
      respuestaNombre = "Invalid name";
      alert("Invalid name");
      document.getElementById("respuestaNombre").innerText = respuestaNombre;
    } else{
      respuestaNombre = "Accepted";
      document.getElementById("respuestaNombre").innerText = respuestaNombre;
    } if(email.length<7 || email.length>25 || !email.contains('@')) { // validar el email
      respuestaEmail = "Invalid email";
      alert("Invalid email");
      document.getElementById("respuestaEmail").innerText = respuestaEmail;
    } else {
      respuestaEmail = "Accepted";
      alert("Accepted");
      document.getElementById("respuestaEmail").innerText = respuestaEmail;
    }
  }


// menú desplegable my account
  function desplegable1() {
    // Cogemos la etiqueta li y lo alternamos con el toggle con la clase show que hemos creado en css (que hace que se vean las subsecciones)
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Cerrar el desplegable si clicka fuera
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) { // si clickamos fuera de la clase .dropbtn

      var dropdowns = document.getElementsByClassName("dropdown-content"); // cogemos la clase dropdown-content, donde se encuentran los submenús
      for (var d = 0; d < dropdowns.length; d++) { // recorremos la clase en la que estan las subsecciones
        var openDropdown = dropdowns[d]; // la clase de las subsecciones en la posición [d] a lo largo del bucle, será la variable openDropdown
        if (openDropdown.classList.contains('show')) { // si la variable contiene la clase SHOW, es decir, se esta mostrando el submenu
          openDropdown.classList.remove('show'); // eliminar SHOW (se dejará de ver el submenú)
        }
      }
    }
  }

// menú desplegable videojuegos
  function desplegable2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }

// menú desplegable merchandising
function desplegable3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
}

// aviso de redireccionar
function popup() {
  alert("You'll be redirected to the official Game page");
}
