<template>
  <div id="secProductos">
  <div class="enca"></div>
  <div class="contentmenu">
    <Menu />
    </div>
    <h2 class="animate__animated animate__swing ">~ Nuestros productos ~</h2>
    <div id="productos">
      <router-link to="/postres">
        <article id="postres">
          <img src="../assets/img/postres1.svg" alt="." />
          <h4>Postres y tartas</h4>
          <p>Presentación:</p>
          <ul class="ulMenu">
            <li>Individual</li>
            <li>8 porciones</li>
          </ul>
        </article>
      </router-link>
      <router-link  to="/">
        <article id="tortas">
          <img src="../assets/img/tortas.svg" alt="." />
          <h4>Tortas y Budines</h4>
          <p>Presentación:</p>
          <ul class="ulMenu">
            <li>Por porción</li>
            <li>Entero (1/2 kg.)</li>
          </ul>
        </article>
      </router-link>
      <router-link to="/">
        <article id="masas">
          <img src="../assets/img/masas.svg" alt="." />
          <h4>Masas y Facturas</h4>
          <p>Presentación:</p>
          <ul class="ulMenu">
            <li>Por kilo</li>
          </ul>
        </article>
      </router-link>
    </div>
    <router-view :addToCart="addToCart"/>
    <Footer />
  </div>
</template>

<script>
import Menu from '../components/Menu'
import Footer from '../components/Footer'
export default {
  props: ['addToCart'],
  components: { Menu, Footer }
}
</script>

<style scoped>
#secProductos {
  border-bottom: 1px solid;
  border-image: -webkit-radial-gradient(rgb(102, 100, 101), transparent) 1 10;
}
.contentmenu {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
}
h2{
    font-size: 2.7rem;
    font-family: 'Cookie', cursive;
    margin: .7rem;
    font-weight: 500;
    text-align: center;
}
.animate__swing {
    animation-fill-mode: none;
}

#productos {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background: white;
  justify-content: center;
  width: 90%;
}

#productos a {
  text-decoration: none;
  margin: 1.4rem;
  padding-bottom: 1rem;
  width: 22%;
  color: rgb(151, 43, 106);
  border: 1px solid rgb(196, 193, 193);
  border-radius: 8px;
  text-align: center;
}

#productos a:hover {
  box-shadow: 0px 6px 10px #d38077;
}
#productos article img {
  width: 100%;
  border-radius: 8px;
}
#productos article p {
  padding: 1.2rem;
  font-size: 1.15rem;
  color: rgb(97, 96, 96);
  font-weight: 600;
}
#productos article ul {
  color: rgb(97, 96, 96);
  display: inline-block;
}
#productos article li {
  padding: 0.3rem;
}
#productos h4 {
  font-family: "Cookie", cursive;
  font-size: 2.5rem;
  font-weight: 500;
}
</style>
