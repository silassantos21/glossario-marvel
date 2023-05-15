<template>
  <div class="home">
    <h1>Olá</h1>
    <span>Este desafio tem como objetivo fazer uma implementação utilizando Vuex, Axios, Vue Material e VeeValidate 2.x, leia atentamente as instruções abaixo e regras.</span>
    <span>Estruturação, implementação e uso correto do framework serão analisados, assim como layout do sistema</span>

    <br>
    <span>Deverá ser criada uma página que faça um requisição para a api da marvel (https://developer.marvel.com/docs#!/) obtenha os dados, salve na store e quando eu mudar para outra rota eu consiga ver os resultados</span>

    <h2>Instruções</h2>
    <ul>
      <li>Criar um página na rota '/getdata', sendo acessada por um botão a ser criado nessa página</li>
      <li>Exibir um form utlizando padrão do vue material e um toolbar do material na página também</li>
      <li>Validar os campos do form com VeeValidate 2.x</li>
      <li>Os campos do form devem ser utlizados para chamar a api characters da marvel '/v1/public/characters'</li>
      <li>Exibir um mdDialog, informando se os dados foram obtidos com sucesso ou não</li>
      <li>Exibir um botão na pagina de form que redirecione para a rota '/data'</li>
      <li>Exibir os resultados obtidos anteriomente e um botão para apagar os dados</li>

    </ul>

    <h2>Regras</h2>

    <ul>
      <li>Requisições devem ficar em um arquivo de api, e utilizar o Axios para as chamadas</li>
      <li>Todos os dados devem ser salvos na store</li>
      <li>Todos os campos devem ser validados pelo VeeValidate</li>
      <li>Todos os frameworks não estão instalado e devem ser adicionado utilizando npm e nunca em modo standalone</li>
      <li>Utilize css para customizar o visual de todas as páginas, inclusive essa, css é um ponto fundamental da avalição, seja criativo</li>
    </ul>
<!-- public key: dfbd92375f306a2a3455b3c18f7e97ae -->
<!-- private key: f10828dd869d2a7eef2a6a5fd0e3dbaefce3e8b5 -->
    <h3></h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
