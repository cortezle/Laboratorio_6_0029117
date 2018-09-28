var list=["a",1,2,true,3,"b","c","d"];
function tipo(tipo){
    let list2=[];
    for(let i in list){
        if(typeof list[i]==tipo){
            list2.push(list[i]);
        }
    }
    return list2;
}


function implist(lista){
    for(let i in list){
        console.log(list[i]);
    }
}
