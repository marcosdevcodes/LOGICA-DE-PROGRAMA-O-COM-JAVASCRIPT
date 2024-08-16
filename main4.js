// Remova duplicatas de um array 
// O objetivo desse código é criar um novo array que contenha apenas os elementos únicos do array original, ou seja, sem repetições. Vou explicar como cada parte desse código funciona.
// Aqui, estamos definindo uma função chamada removerDuplicatas.
// arr é o parâmetro que a função aceita, representando o array do qual queremos remover os elementos duplicados.
function removerDuplicatas(arr){
    // Dentro da função, criamos um novo array vazio chamado novoArray.
    // Esse array será usado para armazenar os elementos únicos, ou seja, os elementos de arr sem as duplicatas.
    const novoArray = [];

    // Aqui, estamos iniciando um loop for que vai percorrer todos os elementos do array arr, usando o índice i para acessar cada valor. Vamos detalhar as partes desse loop:
    // let i = 0;: Inicializa o índice i com 0, começando no primeiro elemento do array.
    // i < arr.length;: O loop vai continuar até que i seja igual ao comprimento de arr, garantindo que todos os elementos do array original sejam verificados.
    // i++: Incrementa i em 1 a cada iteração, passando para o próximo elemento do array em cada passo.
    for(let i = 0; i < arr.length; i++){

        // Dentro do loop, temos uma condição if que verifica se o elemento atual arr[i] já está presente no novo array novoArr.
        // novoArr.includes(arr[i]): O método includes() verifica se o elemento arr[i] já existe no array novoArr.
        // Se o elemento já existe em novoArr, includes() retorna true.
        // Se o elemento não existe em novoArr, includes() retorna false.
        // !novoArr.includes(arr[i]): O operador ! nega o valor de includes(), então a condição if verifica se o elemento não está presente em novoArr. Se arr[i] não estiver em novoArr, a condição é verdadeira, e o bloco de código dentro do if será executado.
        if(!novoArray.includes(arr[i])){//Condição if para Verificar Duplicatas

            novoArray.push(arr[i]);
            // Se a condição if for verdadeira (ou seja, se arr[i] ainda não estiver em novoArr), este código será executado:
            // novoArr.push(arr[i]): O método push() adiciona o elemento arr[i] ao final do array novoArr.
            // Isso significa que cada vez que encontramos um elemento que ainda não está em novoArr, o adicionamos, garantindo que o novo array contenha apenas elementos únicos.
        }
    }

    // Depois que o loop for termina de percorrer todos os elementos de arr, a função retorna o novo array novoArr, que agora contém apenas os elementos únicos do array original, sem duplicatas.
    return novoArray;
}

const array = [1, 2, 2, 3, 4, 4, 5];
const arrSemDuplicatas = removerDuplicatas(array);
console.log(arrSemDuplicatas);

// Vamos agora ver o que acontece fora da função:
// const array = [1, 2, 2, 3, 4, 4, 5];: Aqui, criamos um array chamado arr com valores [1, 2, 2, 3, 4, 4, 5]. Note que esse array contém duplicatas (por exemplo, 2 e 4 aparecem duas vezes).
// const arrSemDuplicatas = removerDuplicatas(array);: Chamamos a função removerDuplicatas, passando arr como argumento. O array resultante, sem duplicatas, é armazenado na variável arrSemDuplicatas.
// console.log(arrSemDuplicatas);: Finalmente, usamos console.log para imprimir o valor de arrSemDuplicatas no console. O resultado será [1, 2, 3, 4, 5], que é o array original sem os elementos duplicados.