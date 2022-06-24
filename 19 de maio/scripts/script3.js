botao.onclick = function(){
    let texto = document.getElementById("txt");
    resultado.innerText = txt.value.toUpperCase();

    let t1 = document.getElementById("txt");
    let length = t1.value.length;

    document.getElementById("resultado2").innerHTML = length;
    }
