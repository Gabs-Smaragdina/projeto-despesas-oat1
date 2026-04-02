export class Bd{

    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    
    proximoId(){
        let proximoid = parseInt(localStorage.getItem('id'))
        proximoid++
        localStorage.setItem('id', proximoid)
        return proximoid
    }
     
    gravar(despesa){
        let id = this.proximoId()
        
        despesa.id = id
        localStorage.setItem(id,JSON.stringify(despesa))
}   
    recuperarAllRegistros(){
        const allDespesas = []
        
        let id = localStorage.getItem('id')
        
        for(let x=1; x<=id; x++ ){
            let despesa = JSON.parse(localStorage.getItem(x))
            if(despesa != null){
                
                allDespesas.push(despesa)          
            }
        }
        
        return allDespesas
    }

    //
    pesquisar(despesa){
        console.log(despesa)
        
        let resultadoFiltro = this.recuperarAllRegistros()
        
        console.log(resultadoFiltro)

        
        if(despesa.ano != ''){
            resultadoFiltro = resultadoFiltro.filter(filtro => filtro.ano == despesa.ano)
            }
        
        if(despesa.mes != ''){
            resultadoFiltro = resultadoFiltro.filter(filtro => filtro.mes == despesa.mes)
        }
        
        if(despesa.dia != ''){
            resultadoFiltro = resultadoFiltro.filter(filtro => filtro.dia == despesa.dia)
        }
        
        if(despesa.tipo != ''){
            resultadoFiltro = resultadoFiltro.filter(filtro => filtro.tipo == despesa.tipo)
        }
        
        if(despesa.descricao != ''){
            resultadoFiltro = resultadoFiltro.filter(filtro => filtro.descricao == despesa.descricao)
        }
        
        if(despesa.valor != ''){
            resultadoFiltro = resultadoFiltro.filter(filtro => filtro.valor == despesa.valor)
        }

        console.log('resultado: ',resultadoFiltro)

        if(resultadoFiltro.length == 0){
            return false
        }
        return resultadoFiltro
    }
    
}