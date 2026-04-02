import { Bd } from './bd.js'
import { Despesa } from './despesa.js'

const bd = new Bd()


window.carregarTodasAsDespesas = function(despesas = []){

    
    const listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''


    
    if(despesas === false){
        listaDespesas.innerHTML = 'Nenhum registro encontrado'
        return 
    }
    
    if(despesas.length === 0){
        
        despesas = bd.recuperarAllRegistros()
    }
    
    
    
   
    
    despesas.forEach(
        function(a){
            
            
            let linha = listaDespesas.insertRow()
            
            linha.insertCell(0).innerHTML = `${a.dia} / ${a.mes} / ${a.ano}`
            switch(a.tipo){
                case '1':
                    a.tipo = "Alimentação"
                    break;
                case '2':
                    a.tipo = "Transporte"
                    break;
                case '3':
                    a.tipo = "Jogos"
                    break;
                case '4':
                    a.tipo = "Relacionamento"
                    break;
                case '5':
                    a.tipo = "Outros"
                    break;
                
            }
            linha.insertCell(1).innerHTML = a.tipo
            linha.insertCell(2).innerHTML = a.descricao
            linha.insertCell(3).innerHTML = a.valor
            
            linha.insertCell(4).innerHTML = `<button type="button" title="Editar" onclick="prepararEdicao(${a.id})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button type="button" title="Remover despesa" onclick="removerDespesa(${a.id})"><i class="fa-solid fa-xmark"></i></button>`


            
        }
    )

    
    
}


window.pesquisarDespesas = function(){
    
   const ano = document.getElementById('ano')
    const mes = document.getElementById('mes')
    const dia = document.getElementById('dia')
    const tipo = document.getElementById('tipo')
    const descricao = document.getElementById('descricao')
    const valor = document.getElementById('valor')

    
    let despesa = new Despesa(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value)
    
    
    let resultadoFiltro = bd.pesquisar(despesa)

    carregarTodasAsDespesas(resultadoFiltro)

    


}

window.removerDespesa = function(id){

    
    localStorage.removeItem(id)
    
    pesquisarDespesas()
    
}

window.prepararEdicao = function(id) {
    let despesas = bd.recuperarAllRegistros()
    let despesa = despesas.find(d => d.id == id)

    if(despesa) {
        
        sessionStorage.setItem('editando_id', id)
        
        window.location.href = 'index.html'
    }
}