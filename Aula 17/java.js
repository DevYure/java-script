class Produto {

    criando(){
        this.id = 1
        this.arrayprodutos = [];
    }

    Adicionar(){
       let produto = this.dados()
       if(this.verificar(produto)){
        this.lista(produto)
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
        this.arrayprodutos.push(produto)
        this.id++
        this.rescrever()
    }

    rescrever(){
        let tabela = protudo.tabela
        let item = document.createElement('option')
        item.text = `O Produto Adiciondo foi ${produto.nome}`
        tabela.appendChild('item')
        let item2 = document.createElement('option')
        item2.text = `O Preço  Adiciondo foi ${produto.preço}`
        tabela.appendChild('item2')
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
