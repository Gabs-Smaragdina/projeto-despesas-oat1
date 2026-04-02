export function mostrarPopup(tipo, titulo, descricaoHTML, textoBotao) {
  const div_popup = document.getElementById('popup')
  const div_titulo = document.getElementById('popupTitulo')
  const div_descricao = document.getElementById('popupDescricao')
  const div_botao = document.getElementById('popupBotao')

  div_popup.classList.remove('erro', 'sucesso', 'oculto')
  div_popup.classList.add(tipo)

  div_titulo.innerHTML = titulo
  div_descricao.innerHTML = descricaoHTML
  div_botao.innerHTML = textoBotao

  div_botao.onclick = () => popup.classList.add('oculto')
}