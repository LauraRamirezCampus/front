addEventListener("DOMContentLoaded", ()=>{
    let myfor = document.querySelector("#Formu");

    myfor.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let opc = e.submitter.dataset.accion;
        if(opc=="guardar"){
            let config = {
                method:"POST",
                headers:{"Content-Type": "Application/json"},
               
            };
            let data = await (await fetch("http://localhost/ApolT01-014/pruebaphp/uploads/camper", config)).text();
            console.log(data);
        }else if(opc=="listar"){
            let config = {
                method:"GET",
                headers:{"Content-Type": "Application/json"},
            };
            let data = await (await fetch("http://localhost/ApolT01-014/pruebaphp/uploads/camper", config)).json();
            console.log(data);
        }
    })
})