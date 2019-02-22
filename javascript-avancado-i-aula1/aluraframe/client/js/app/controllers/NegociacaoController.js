class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();
        

        let data = new Date(this._inputData.value.replace(/-/g,','));

        // let negociacao = new Negociacao(

        // this._inputData.value,
        // this._inputQuantidade.value,
        // this._inputValor.value   )

        function dataAtualFormatada(){
            var data = new Date(),
                dia  = data.getDate().toString().padStart(2, '0'),
                mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
                ano  = data.getFullYear();
            return dia+"/"+mes+"/"+ano;
        }

        console.log(data);
    };
        
}

