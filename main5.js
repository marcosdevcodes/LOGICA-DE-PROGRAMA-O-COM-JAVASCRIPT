// Encontre a soma dos números pares em um array

// O objetivo desse código é percorrer o array, verificar se cada número é par e, se for, somá-lo a uma variável acumuladora. Vou explicar como cada parte do código funciona em detalhes.
// arr é o parâmetro que a função aceita, representando o array de números no qual vamos procurar pelos números pares e somá-los.
function somarPares(arr){

    // Dentro da função, criamos uma variável chamada soma e a inicializamos com 0.
    // soma será usada para acumular a soma dos números pares encontrados no array. Começamos com 0 porque, inicialmente, ainda não somamos nenhum número.
    let soma = 0;

    // Aqui, estamos iniciando um loop for que vai percorrer todos os elementos do array arr, usando o índice i para acessar cada valor. Vamos detalhar as partes desse loop:
    // let i = 0;: Inicializa o índice i com 0, começando no primeiro elemento do array.
    // i < arr.length;: O loop vai continuar até que i seja igual ao comprimento de arr, garantindo que todos os elementos do array sejam verificados.
    // i++: Incrementa i em 1 a cada iteração, passando para o próximo elemento do array em cada passo.

    for(let i = 0; i < arr.length; i++){// Estrutura de Repetição for


        // Dentro do loop, temos uma condição if que verifica se o elemento atual arr[i] é um número par.
        // arr[i] % 2 === 0: Esta expressão usa o operador %, que calcula o resto da divisão de arr[i] por 2.
        // Se o resto for 0, significa que arr[i] é divisível por 2 e, portanto, é um número par.
        // Se o resto não for 0, então arr[i] é um número ímpar.
        if(arr[i] % 2 === 0){// Condição if para Verificar se o Número é Par


            soma += arr[i];//Somando os Números Pares
            // Se a condição if for verdadeira (ou seja, se arr[i] for par), este código será executado:
            // soma += arr[i]: Esse comando adiciona o valor de arr[i] à variável soma. O operador += é uma forma abreviada de escrever soma = soma + arr[i].
            // Isso significa que, a cada vez que encontramos um número par, ele é adicionado à soma acumulada.
        }
    }

    // Depois que o loop for termina de percorrer todos os elementos de arr, a função retorna o valor acumulado em soma, que agora representa a soma de todos os números pares do array original.
    return soma;
}

const array = [1, 2, 3, 4, 5, 6];
const somaPar = somarPares(array);
console.log(somaPar);

// Vamos agora ver o que acontece fora da função:
// const arr = [1, 2, 3, 4, 5, 6];: Aqui, criamos um array chamado arr com valores [1, 2, 3, 4, 5, 6]. O array contém tanto números pares quanto ímpares.
// const somaPares = somarPares(arr);: Chamamos a função somarPares, passando arr como argumento. O resultado, que é a soma dos números pares, é armazenado na variável somaPares.
// console.log(somaPares);: Finalmente, usamos console.log para imprimir o valor de somaPares no console. O resultado será 12, pois os números pares do array são 2, 4 e 6, e sua soma é 2 + 4 + 6 = 12.