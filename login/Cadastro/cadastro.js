function formatarNumerotelefone(input) {
     // Remove caracteres não numéricos do valor do input
     let numeroLimpo = input.value.replace(/[^0-9]/g, '');

     // Formata o número de telefone
     if (numeroLimpo.length >= 2) {
         numeroLimpo = `(${numeroLimpo.substring(0, 2)}) ${numeroLimpo.substring(2)}`;
     }

     if (numeroLimpo.length >= 14) {
         numeroLimpo = `${numeroLimpo.substring(0, 10)}-${numeroLimpo.substring(10)}`;
     }

     // Atualiza o valor do input
     input.value = numeroLimpo;
 }


 function formatarNumerocep(input) {
    // Remove caracteres não numéricos do valor do input
    let numeroLimpo = input.value.replace(/[^0-9]/g, '');


    if (numeroLimpo.length >= 5) {
        numeroLimpo = `${numeroLimpo.substring(0, 5)}-${numeroLimpo.substring(5)}`;
    }

    // Atualiza o valor do input
    input.value = numeroLimpo;
}
