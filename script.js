var m = Number(prompt("Ilk reqemi yazin"));
var n = Number(prompt("Son reqemi yazin"));
var count = 0;
if (m <= n){
    while (m <= n){
        if (m % 4 == 0){
            count++;
        }
        m++;
    }
    console.log(count);
}else{
    colsole.log("duzgun interval girin");
}