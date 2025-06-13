const contador = {
    //Propriedade para armazenar o valor atual
    valor: 0,

    //Metodo para incrementar o valor
    incrementar: function() {
        this.valor++;
    },

    //Metodo para decrementar o valor
    decrementar:function() {
        this.valor -= 1;
    },

    //Metodo para exibir o valor atual
    mostrarValor: function() {
        console.log(`O valor atual é ${this.valor}`);	
    }
};

contador.mostrarValor();    // O valor atual é 0

contador.incrementar();
contador.mostrarValor();    // O valor atual é 1

contador.incrementar();
contador.mostrarValor();    // O valor atual é 2

contador.decrementar();
contador.mostrarValor();    // O valor atual é 1