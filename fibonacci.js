function fibonacciReverse(n) { // n é o número de elementos da sequência de Fibonacci
    let fib = [0, 1]; // Inicializa a sequência de Fibonacci com os dois primeiros elementos

    for (let i = 2; i < n; i++) { // Calcula os próximos elementos da sequência de Fibonacci - a partir do terceiro elemento visto que i começa em 2. Pois a sequência de Fibonacci começa com 0 e 1.
        fib.push(fib[i - 1] + fib[i - 2]); // O próximo elemento é a soma dos dois elementos anteriores. o comando push adiciona o elemento ao final do array.
    }

    // Imprime a sequência de Fibonacci invertida
    console.log(fib.reverse().join(" ")); // O comando reverse inverte a ordem dos elementos do array. O comando join transforma o array em uma string, separando os elementos por um espaço.
}

fibonacciReverse(10);
