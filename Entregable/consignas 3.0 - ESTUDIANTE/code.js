/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    
  datosPersona.nombre = prompt("Ingresar nombre completo: ");

  let edad = prompt("Ingresar año de nacimiento: ");
  datosPersona.edad = 2022 - edad
  
  datosPersona.ciudad = prompt("Ingresar ciudad de pertenencia: ");
  
  datosPersona.interesPorJs = confirm("Te interesa aprender JavaScript?") ? "Si" : "No";
  
};

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const usuarioNombre = document.querySelector(".card-header #nombre")
  usuarioNombre.innerText = datosPersona.nombre;

  const usuarioEdad = document.querySelector(".card-header #edad")
  usuarioEdad.innerText = datosPersona.edad;

  const usuarioCiudad = document.querySelector(".card-header #ciudad")
  usuarioCiudad.innerText = datosPersona.ciudad;

  const interesJS = document.querySelector(".card-header #javascript")
  interesJS.innerText = datosPersona.interesPorJs;

};

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  let contenedor = document.querySelector("#fila");

  contenedor.innerHTML = " ";

  listado.forEach((tarjeta) => {
    contenedor.innerHTML +=
      `<div class="caja">
      <img src= ${tarjeta.imgUrl} alt="${tarjeta.lenguajes}>
      <p class= "lenguajes">${tarjeta.lenguajes}</p>
      <p class= "bimestre">${tarjeta.bimestre}</p>
    </div>`
  });

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  document.querySelector("#sitio").classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let oculto = document.querySelector('.oculto');
document.addEventListener('keydown', e => {
  let letra = (e.key).toLowerCase()
  if (letra === "f") {
    oculto.classList.remove('oculto')
  }
})
