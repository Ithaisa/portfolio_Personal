let menuVisible = false;

//Función que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}


//Se oculta el menu una vez que se selecciona una opcion
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion de las animaciones de la barra de habilidades
function efect_habilidades(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("baseDeDatos");
        habilidades[5].classList.add("photoshop");
        habilidades[6].classList.add("illustrator");
        habilidades[7].classList.add("indesign");
        habilidades[8].classList.add("corelDraw");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajoEnEquipo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("disponibilidadHoraria");
        habilidades[13].classList.add("altoAprendizaje");

    }
}

//Primero se detecta el scroll para poder aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efect_habilidades();
}

