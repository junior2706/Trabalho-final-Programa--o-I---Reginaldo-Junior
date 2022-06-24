val.onchange = voltarValor;
            valor2.onchange = voltarValor;
            valor3.onchange = voltarValor;

            function voltarValor(){
                resultado.innerHTML = "resultado:";
            }

            botao.onclick = function(){
                voltarValor();
                let valor = parseInt(document.getElementById("val").value);
                let valor2 = parseInt(document.querySelector("#valor2").value);
                let valor3 = parseInt(document.querySelector("#valor3").value);
                resultado.innerHTML = Math.max(valor, valor2, valor3);
            }
            botao.onmouseover = function(){
                resultado.style.backgroundColor = "red";
            }
            botao.onmouseout = function(){
                resultado.style.backgroundColor = "white";
            }