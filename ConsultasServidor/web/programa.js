class Sube{
    static main(){
        document.querySelector("#consultarBtn").setAttribute("onclick","Sube.consultar();");
    }
    
    static consultar(){
        //Aca se hace la consulta
        console.log("Aca se hace la consulta");
    }
}

Sube.main();
