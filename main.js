// 1 Encontre o maior número em um array
// Dentro dos parenteses tem um parametro arr 
function encontraMaiorNumero(arr){
    // Aqui o parametro sera o numero 3 dentro do array da constante la embaixo ou seja o índice 0;
    let maior = arr[0];
    //Neste ponto, estamos declarando uma variável chamada maior usando let, que permite que essa variável seja alterada no decorrer da função.
    //arr[0] refere-se ao primeiro elemento do array array. Em um array, os elementos são indexados a partir de zero. Por exemplo, se array for [3, 1, 4, 2, 5], arr[0] será 3.
    //Ao fazer let maior = arr[0];, estamos assumindo inicialmente que o primeiro número do array é o maior número. Se o array tiver apenas um elemento, esse será o maior (e o único) número.

    for(let i = 1; i < arr.length; i++){
        //let i = 1;: Começamos com a variável i definida como 1. i vai ser usada como o índice para acessar os elementos do array, começando do segundo elemento (arr[1]). O motivo de começar com 1 é porque já consideramos o primeiro elemento na inicialização de maior que é a variavel let lá em cima.
        //i < arr.length;: Este é o critério de continuação do loop. O loop continuará a rodar enquanto i for menor que arr.length. A propriedade arr.length nos dá o número total de elementos no array. Por exemplo, para o array [3, 1, 4, 2, 5], arr.length é 5, pois há cinco elementos.
        // i++: A cada iteração do loop, i é incrementado em 1. Isso significa que, após cada execução do bloco de código dentro do loop, i vai para o próximo índice (1, 2, 3, etc.).

        // Dentro do loop for, temos uma estrutura de decisão if, que verifica se a condição dentro dos parênteses é verdadeira ou falsa.
        if(arr[i] > maior){ 
            // arr[i] > maior: Aqui, estamos comparando o valor do elemento atual do array (arr[i]) com o valor armazenado na variável maior.
            // Se o valor atual (arr[i]) for maior que o valor armazenado em maior, isso significa que encontramos um novo maior número.
            // Se essa condição for verdadeira, o bloco de código dentro das chaves {} será executado.
            // maior = arr[i];: Se a condição for verdadeira, atualizamos a variável maior com o novo valor maior (arr[i]). Isso permite que a variável maior sempre contenha o maior número encontrado até o momento.
            maior = arr[i];//Por exemplo, com o array [3, 1, 4, 2, 5]:
            // i = 1, arr[i] = 1: 1 não é maior que 3, então maior permanece 3.
            // i = 2, arr[i] = 4: 4 é maior que 3, então maior é atualizado para 4.
            // i = 3, arr[i] = 2: 2 não é maior que 4, então maior permanece 4.
            // i = 4, arr[i] = 5: 5 é maior que 4, então maior é atualizado para 5.
        }
    }
    return maior;
    // Depois que o loop for termina, a função chega a esta linha. Aqui, usamos a palavra-chave return para devolver o valor da variável maior como resultado da função.
    // O return maior; faz com que o valor armazenado em maior seja enviado de volta para onde a função foi chamada. Este é o número que a função identificou como o maior do array.
}


// Agora, estamos fora da função e executando o restante do código:
// const arr = [3, 1, 4, 2, 5];: Criamos um array chamado arr com os valores [3, 1, 4, 2, 5]. Usamos const porque não pretendemos modificar este array.
// const maiorNumero = encontrarMaiorNumero(arr);: Aqui, estamos chamando a função encontrarMaiorNumero e passando o array arr como argumento. O resultado da função (o maior número encontrado) é armazenado na variável maiorNumero.
// console.log(maiorNumero);: Finalmente, usamos console.log para imprimir o valor de maiorNumero no console, que neste caso será 5, o maior número do array.

const array = [3, 1, 4, 2, 5];
const maiorNumero = encontraMaiorNumero(array);
console.log(maiorNumero);   // output: 5

