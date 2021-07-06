//Arquivo criado apenas para a demonstração das resoluções via html
const questions = [
    ` 1) Implemente um método que crie um novo array baseado nos valores passados.
    <br><span>Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']</span>`,

    `2) Implemente um método que inverta um array, não utilize métodos nativos do array.
    <br><span>Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]</span>`,

    `3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
    <br><span>Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]</span>`,

    ` 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
    <br><span>Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}</span>`,

    `5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. <span>Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]</span>`,

    `6) Implemente um método que retorne um array, sem valores duplicados.
    <br><span>Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]</span>`,

    `7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
    <br><span>Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true</span>`,

    `8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
    <br><span>Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]</span>`,

    `9) Implemente um método divida um array por uma quantidade passada por parâmetro.
    <br><span>Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]<span/>`,

    `10) Implemente um método que encontre os valores comuns entre dois arrays.
    <br><span>Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]</span>`
]
const functions = [
    'ex1',
    'ex2',
    'ex3',
    'ex4',
    'ex5',
    'ex6',
    'ex7',
    'ex8',
    'ex9',
    'ex10'
]
questions.forEach((q,index) => {
    document.querySelector("main").innerHTML +=
     `<div class="question">
        <div class="title">${q}</div>
        <div class="box-input">
            metodo (<span class="input-ex" contenteditable="true" >Parâmetros</span> )
        <div>
        <div class="resultado" id="res${index}">
        </div>
     </div>`
});

document.querySelectorAll('.box-input > span').forEach((span,index) => {
    span.onkeydown = (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            let error;
            let resultado_funcao;
            try {
                 resultado_funcao= eval(`${functions[index]}(${span.innerHTML})`)
            } catch (e) {
                error = e;
            }
            let div_result = document.querySelector(`#res${index}`)
            if (error==null) {
                div_result.innerHTML = showDivReponse(span.innerHTML,JSON.stringify(resultado_funcao),'sucessul');
            } else {
                div_result.innerHTML = showDivReponse(span.innerHTML, error,'error');
            }
            
            span.innerHTML = "Parâmetros"
            document.activeElement.blur();
        }
    }
    span.onclick = (e) => {
        if (span.innerHTML === "Parâmetros") {
            span.innerHTML = "";
        }
    }
})

function showDivReponse(entrada, saida,className) {
    console.log(saida);
    return `<div>
                <div>
                    <strong>Entradas</strong>: (${entrada})
                </div>
                <div>
                    <strong>Saída</strong>: <span  class=${className}>${saida}</span>
                </div>
            </div>`
}