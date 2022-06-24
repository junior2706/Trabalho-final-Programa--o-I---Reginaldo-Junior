val.onchange = voltarValor;

            function voltarValor(){
                resultado.innerHTML = "RESULTADO:";
            }

            botao.onclick = function(){
                voltarValor();
                let valor = parseInt(document.getElementById("val").value);
                resultado.innerHTML = Math.pow(valor, 3);
            }