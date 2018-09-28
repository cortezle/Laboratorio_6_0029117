function nrandom(num){
    var adnv= Math.floor(Math.random() * 20);
    var lista=[];
    
    for(let i=0; i<20 ; i++){
        lista.push(Math.floor(Math.random() * 101));
    }
    for (let i in lista){
        if (lista.includes(num)){
            console.log("gaste");
        }
        else{
            console.log("nel");
        }
    }
    return lista;
}

var n = prompt("dame un numero");