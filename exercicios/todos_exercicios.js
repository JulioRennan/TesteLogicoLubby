//exercício numero 1
//1) Implemente um método que crie um novo array baseado nos valores passados.
function ex1(qtd, obj) {
    console.log(qtd);
    console.log(obj)
    let vetor = [];
    vetor.length = qtd;
    vetor.fill(obj);
    console.log(vetor);
    return vetor;
}
//2) Implemente um método que inverta um array, não utilize métodos nativos do array.
function ex2(vetor) {
    let j = vetor.length-1;
    for (let i = 0; i < vetor.length && i < j; i++) {
        let aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        j--;
    }
    return vetor;
}
//3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
function ex3(vetor) {
    const desnecessarios = [false, undefined, '', 0, null];
    for (let i = 0; i < vetor.length; i++) {
        if (desnecessarios.includes(vetor[i])) {
            vetor.splice(i, 1);
            i--;
        }
    }
    return vetor;
}
//4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
function ex4(vetor_objetos) {
    let obj = {};
    vetor_objetos.forEach((i) => obj[i[0]] = i[1]);
    return obj;
}
//5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
function ex5() {
    let args = [...arguments]
    let vetor = args[0];
    let itensParaExcluir = args.slice(1);
    for (let i = 0; i < vetor.length; i++) {
        if (itensParaExcluir.includes(vetor[i])) {
            vetor.splice(i, 1);
            i--;
        }
    }
    return vetor;
}
//6) Implemente um método que retorne um array, sem valores duplicados.
function ex6(vetor) {
    //marcando todas opções que possuem elementos repetidos com null
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === null) continue;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] === null) continue;
            if (vetor[i] === vetor[j]) {
                vetor[j] = null;
            }
        }
    }
    //eliminando elas do vetor
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === null) {
            vetor.splice(i, 1);
            i--;
        }
    }
    return vetor;
}
//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
function ex7(vet1,vet2) {
    if (vet1.length != vet2.length) {
        return false;
    }
    for (let i = 0; i < vet1.length; i++) {
        if (vet1[i] !== vet2[i]) return false;
    }
    return true;
}
//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
function ex8(vetor) {
    let result = [];
    for (let i = 0; i < vetor.length; i++) {
        let aux = Array.from(vetor[i]);
        if (aux.length == 0) {
            result.push(vetor[i]);
        } else {
            aux.forEach((el) => result.push(el));
         }
    }
    return result;
}
//9) Implemente um método divida um array por uma quantidade passada por parâmetro.
function ex9(vetor,qtd) {
    let result = [];
    for (let i = 0; i < vetor.length; i+=qtd){
        result.push(vetor.slice(i, i + qtd))
        
    }
    return result;
}
//10) Implemente um método que encontre os valores comuns entre dois arrays.
function ex10(vet1, vet2) {
    let result = [];
    vet1.forEach((el) => {
        if (vet2.includes(el)) {
            result.push(el);
        }
    });
    return result;
}
