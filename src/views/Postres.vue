<template>
  <div id="postres">
    <div class="enca"></div>
    <div id="contentmenu">
      <Menu />
    </div>
    <h2 class="animate__animated animate__swing">~ Postres y Tartas ~</h2>
    <div class="subProd" id="prod_postres">
      <Card v-for="(prod, index) in productos"
      :key="prod.id"
      :prod="prod"
      :index="index"
      :addToCart="addToCart"
      class="prod" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default {
  name: 'Postres',
  props: ['productos', 'addToCart'],
  components: { Menu, Footer, Card }
}
</script>

<style>

#contentmenu {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}
h2 {
  font-size: 2.7rem;
  font-family: "Cookie", cursive;
  margin: 0.7rem;
  font-weight: 500;
  text-align: center;
}
.animate__swing {
  animation-fill-mode: none;
}

.subProd {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 88%;
  margin: auto;
}

.prod {
  margin: 1.5rem;
  color: rgb(37, 37, 37);
  font-weight: 300;
  text-align: center;
}

.prod img {
  width: 14rem;
  border: 2px solid rgba(158, 158, 158, 0.8);
  border-radius: 100%;
}
.prod h4 {
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-family: "Cookie", cursive;
  font-weight: 400;
  text-align: center;
}
.prod p {
  padding: 0.3rem;
  font-size: 1rem;
}
.prod h3 {
  width: 5rem;
  margin: 0;
  border: 1px solid rgba(128, 128, 128, 0.6);
  border-radius: 2%;
  padding: 0.1rem;
  background: rgb(148, 113, 113);
  color: white;
  font-weight: 400;
  border-radius: 4px;
  font-size: 1.2rem;
}

</style>
