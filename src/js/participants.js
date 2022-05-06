const obj=['t1', 't2', 't3']

let actual='t1';

const aver= id =>{
    console.log(id)
    
    if(actual!=id){
        //escondemos el elemento que se muestra 
        document.getElementById(actual).style.display='none';
        //actualizamos actual
        actual=id;
        const vis=document.getElementById(actual);

        if(vis.style.display=='block'){
            vis.style.display='none'
            console.log("hola")
        }
        else vis.style.display="block"
    }
    
    
}