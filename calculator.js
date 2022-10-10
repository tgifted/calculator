function display(val){
    document.getElementById("result").value += val;
}

function solve(){
    let x = document.getElementById("result").value
    let y = eval(x);
    document.getElementById("result").value = y
}

function ClearScreen(){
    document.getElementById("result").value=""
}