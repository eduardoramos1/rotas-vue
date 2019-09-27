<template>
  <nav class="menu">
      <ul>
        <!-- router-link faz com que a aplicação mude de rota sem carregar a página -->
        <!-- a propriedade 'tag' diz qual tag irá envolver o "router-link" -->
        <!-- active-class usa uma classe css quando o link estiver ativo, ou seja o usuario clicou no link, tem que usado junto com a propriedade 'exact' para funcionar corretamente -->
        <router-link to="/" tag="li" active-class="active" exact> 
            <a href="">Inicío</a> 
        </router-link> 
        <router-link to="/usuario" tag="li" active-class="active" exact> 
            <a href="">Usuário</a> 
        </router-link> 
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>