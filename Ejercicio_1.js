function ocurence(num, lista){
    let cont=0;
    for(let i in lista){
        if(num==lista[i]){
            cont++;
        }
    }
    return cont;
}

var lista =[1,1,2,3,4]
var num =1;