<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Agera E-handel</router-link>
      <div class="navbar-nav mr-auto">
<!--         <li class="nav-item">
          <router-link to="/products" class="nav-link">Produkter</router-link>
        </li> -->
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
//import ProductsComp from './components/ProductsComp.vue'

export default {
  name: 'App',
/*   components: {
    ProductsComp
  } */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
