class Pessoa {

    constructor(nome, sobrenome) {

        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    obterNomeCompleto(){
        
        return this._nome + '' + this._sobrenome ;

    }

}