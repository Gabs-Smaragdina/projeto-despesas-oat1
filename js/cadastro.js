import { Despesa } from './despesa.js'
import { Bd } from './bd.js'
import { mostrarPopup } from './popup.js'

let bd = new Bd()

window.onload = function() {
    let idParaEditar = sessionStorage.getItem('editando_id')
    if(idParaEditar) {
        let despesas = bd.recuperarAllRegistros()
        let d = despesas.find(item => item.id == idParaEditar)
        
        if(d) {
            document.getElementById('ano').value = d.ano
            document.getElementById('mes').value = d.mes
            document.getElementById('dia').value = d.dia
            document.getElementById('tipo').value = d.tipo
            document.getElementById('descricao').value = d.descricao
            document.getElementById('valor').value = d.valor
            
            
            document.querySelector('h2').innerHTML = 'Editando despesa'
        }
    }
}

window.cadastrarDespesas = function(){
    
    const ano = document.getElementById('ano')
    const mes = document.getElementById('mes')
    const dia = document.getElementById('dia')
    const tipo = document.getElementById('tipo')
    const descricao = document.getElementById('descricao')
    const valor = document.getElementById('valor')

    console.log('to tentnado cadastrar')
    let despesa = new Despesa(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value)
    
   
    if(despesa.validarDados()){
        let idEdicao = sessionStorage.getItem('editando_id')
        
        if(idEdicao) {
            
            despesa.id = parseInt(idEdicao)
            localStorage.setItem(idEdicao, JSON.stringify(despesa))
            sessionStorage.removeItem('editando_id')
        } else {
            
            bd.gravar(despesa)
        }
        
        mostrarPopup('sucesso','Operação realizada','<div class="check-icon">✔️</div>','Voltar')
        
        
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
        
        return true

    }
    
    mostrarPopup('erro','ERRO NA GRAVAÇÃO','<p>Existem campos obrigatórios que não foram preenchidos.</p>','Voltar e corrigir')
        
}