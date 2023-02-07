class Produto {
    
    criando(){
        this.id = 1
        this.arrayprodutos = [];
    }

    Adicionar(){
       let produto = this.dados()
       if(this.verificar(produto)){
        this.lista(produto)
        this.rescrever(produto)
       }
    }

    dados(){
        this.produto = {}

        produto.id = this.id
        produto.nome = document.getElementById('nome').value;
        produto.preço = document.getElementById('preço').value;
        produto.tabela = document.getElementsByName('tabela')

        return produto;
    }

    lista(){
        this.id++
    }

    rescrever(produto){
        let item = document.createElement('option')
        item.text = `Produto: ${produto.nome} valor: ${produto.preço} id: ${produto.id}`
        var tab = document.getElementById('tabela')
    }

    verificar(produto){
        let msg = '';
        if(produto.nome == '' ){
            msg += '-Produto sem nome\n'
        }
        if(produto.preço == '' ){
            msg += '-Produto sem preço\n'
        }
        if (msg != ''){
            alert(msg)
            return false
        }
    
        return true
    }

    Remover(){
    }
}

var produto = new Produto
