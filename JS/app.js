// OBTENER LOS ELEMENTOS DE HTML

const logo = document.getElementById("logo");
const sidebar = document.querySelector(".sidebar");

/*OCULTAR EL MENÚ DESPLEGABLE*/

logo.addEventListener("click", mostrar);

function mostrar()
{
	sidebar.classList.toggle("spread");
}

window.addEventListener("click", ventana);

function ventana(e) 
{
	if(sidebar.classList.contains("spread") && e.target != sidebar && e.target != logo)
	{
		sidebar.classList.toggle("spread");
	}
}

let nav = document.querySelector(".nav");
window.addEventListener("scroll", function(){
	nav.classList.toggle("active", window.scrollY > 620);
});
