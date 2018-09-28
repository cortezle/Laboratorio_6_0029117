function sumlist(list){
    let acum =0;
    for (let i in list){
        acum=acum+list[i];
    }
    return acum;
}

var lista =[1,1,2,3,4];