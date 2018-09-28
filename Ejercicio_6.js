var pal="silencio";
var clave = [ "m", "u", "r", "c", "i", "e", "l", "a", "g", "o" ];
var n = [0,1,2,3,4,5,6,7,8,9];
function murcielago (pala){
    var npal="";
    for(let i in pala){
        for(let j in clave.length){
            if(i==clave[j]){
                npal = npal + n[j];
            }
            else if (i==n[j]){
                npal = npal + m[j];
            }
        }
    }
    return npal;

}