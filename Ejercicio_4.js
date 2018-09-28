function sumextremos(list){
    var pos1=0;
    var pos2=0;
    var lista=[];
    var j=list.length-1;
    var largo=Math.trunc(list.length/2);
    if(list.length%2==0){
        
        for(var i=0; i<=largo;i++){
            
            pos1=list[i];
            pos2=list[j-i];
            console.log(pos1+pos2);
            
        }
   
        }    else{
        
        for(var i=0; i<=largo;i++){
            
            pos1=list[i];
            pos2=list[j-i];
            console.log(pos1+pos2);
        }
        console.log("numero mitad"+lista[largo]*2);

    }
}

var impar = [1,2,3,4,5];
var par = [1,2,3,4];