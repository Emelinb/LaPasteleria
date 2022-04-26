<template>
<div id="banner" v-cloak>
  <div id="titulos">
            <h1> ~ La Pastelería~ </h1>
            <h2>Endulzando tu vida desde 1970...</h2>
    </div>
   <div id="boton">
    <router-link to="/nosotros">
          <div id="cupcake">
              <img src="../assets/img/cupcake.png" alt=".">
          </div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
[v-cloak] { display: none; }
</style>
