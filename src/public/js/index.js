
//se activa junto con la venta al cargar

const img = [
    "assets/img/imagen1.jpg",
    "assets/img/imagen2.jpg",
    "assets/img/imagen3.jpg",
    "https://picsum.photos/1020/800"
];


let menuActive=0;

window.addEventListener('load', () =>{
    console.log("el contenido a cargado"); 

    let indice=0;
    let tam = img.length - 1;

    const cambiaImg=()=>{
        //console.log(indice)
        document.getElementById('slider').src = img[indice]
        if(indice<tam){
            indice++;
        }
        else{
            indice=0;
        }
    }

    setInterval(cambiaImg, 4000)
    
})





/* const hola=()=>{
    if(menuActive==1){
        document.getElementById("navigation").style.display="none";
        menuActive=0;
    }
    else{
        console.log("hola");
        document.getElementById("navigation").style.display="block";
        menuActive=1;
    }
} */

/* 
$(function(){
    $(".header").load("views/partials/header.html");
    $(".footer").load("views/partials/footer.html");
}); */
