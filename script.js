function call (id){
    var num = document.getElementById(id).value = id;
    var txt = document.getElementById('result').value;
    txt = txt + num;
    document.getElementById("result").value = txt;
}

function operasi (id){
    var operasi = document.getElementById(id).value = id;
    var txt = document.getElementById('result').value;
    document.getElementById('result').value = "";
    document.getElementById('operasi').value = operasi;
    document.getElementById('result-temp').value = txt;   
}

function hasil(){
    var a = document.getElementById('result').value;
    var b = document.getElementById('result-temp').value;
    var operasi = document.getElementById('operasi').value

    if(operasi === "+"){
        document.getElementById('result').value = +a + +b;
        document.getElementById('result-temp').value = "";
        document.getElementById('operasi').value = "";
    } 
    else if (operasi === "-"){
        document.getElementById('result').value = a - b;
        document.getElementById('result-temp').value = "";
        document.getElementById('operasi').value = "";
    } 
    else if (operasi === "X"){
        document.getElementById('result').value = a * b;
        document.getElementById('result-temp').value = "";
        document.getElementById('operasi').value = "";
    } 
    else if (operasi === "/"){
        document.getElementById('result').value = a / b;
        document.getElementById('result-temp').value = "";
        document.getElementById('operasi').value = "";
    }
    else if (operasi === "%"){
        document.getElementById('result').value = (a/b) * 100;
        document.getElementById('result-temp').value = "";
        document.getElementById('operasi').value = "";
    }
}

function hapus(){
    document.getElementById('result').value = "";
    document.getElementById('result-temp').value = "";
    document.getElementById('operasi').value = "";
}