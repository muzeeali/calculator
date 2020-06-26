function getnum(num){
    var res=document.getElementById("res")
    res.value+=num;
}
function clr(){
    var res=document.getElementById("res")
    res.value="";
}
function backspace(){
     var res=document.getElementById("res");

res.value=res.value.slice(0, -1)
}
function equal(){
    var res=document.getElementById("res")
    res.value=eval(res.value);
}
