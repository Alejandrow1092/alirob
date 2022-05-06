//alert("hola")

//se activa junto con la venta al cargar

const img = [
    "/src/assets/img/imagen1.jpg",
    "/src/assets/img/imagen2.jpg",
    "/src/assets/img/imagen3.jpg",
    "https://picsum.photos/1000/1000"
];



window.addEventListener('load', () =>{
    console.log("el contenido a cargado");

    let indice=0;
    let tam = img.length - 1;

    const cambiaImg=()=>{
        console.log(indice)
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