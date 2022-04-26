<template>
  <div>
    <div id="menu-bar">
      <div id="logonav">
        <router-link to="/"> <img src="../assets/img/tarta.png" alt="." /> </router-link>
        <h3>La pastelería</h3>
      </div>
      <div id="menu">
        <input type="checkbox" id="boton-menu" />
        <label for="boton-menu"> <i class="fas fa-bars"></i></label>
        <nav id="submenu" >
          <router-link to="/productos" @mouseover="listOne = true" @mouseleave="listOne = false">
            Productos
            <transition name="fade">
            <div class="menuover" v-if="listOne" @click="listOne = false">
              <router-link to="/postres"  class="subitem">
                Tartas y Postres
              </router-link>
              <router-link to="/"  class="subitem">
                Tortas y Budines
              </router-link>
              <router-link to="/"  class="subitem">
                Masas y Facturas
              </router-link>
            </div>
           </transition>
          </router-link>
          <router-link to="/contacto1"> Contacto </router-link>
          <router-view  />
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import productos from '../productos.json'
export default {
  prop: ['cart'],
  data () {
    return {
      showCart: false,
      productos: productos,
      listOne: false,
      listTwo: false,
      listThree: false,
      listFour: false
    }
  },
  methods: {
    toggleCart () {
      this.showCart = !this.showCart
    }
  }
}
</script>

<style scoped>

#cart {
    display: flex;
    justify-content: center;
    border-left:  1px solid rgba(158, 158, 158,0.8);
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-size: 1.7rem;
    color: rgb(116, 114, 114);
}

.cart:hover .fa-shopping-cart{
    color:rgb(53, 87, 116);
}

.fa-shopping-cart {
    padding-left: 10px;
    text-decoration: none;
    font-size: 1.4rem;
    color: rgb(80, 79, 79);
}

#cant-prod {
    position: absolute;
    top:13px;
    right: 19px;
    height: 1rem;
    width: 1rem;
    font-size: .7rem;
    background: red;
    border-radius: 100%;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 0;
}

#menu {
  display: flex;
}
#submenu a.router-link-exact-active {
    color: rgb(206, 137, 174) !important;
}
#menu-bar {
  width: 100%;
  color: rgb(97, 67, 84);
  display: flex;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  box-shadow: 0px 3px 10px rgb(167, 166, 166);
}

#boton-menu {
  display: none;
}
.submenu a {
  display: block;
  position: relative;
}
.menuover {
  position: absolute;
  right: 100px;
  top: 55px;
  margin: 0;
  padding: 0;
  background: white;
  box-shadow: 0px 4px 8px gray;
  border-end-end-radius : 8px;
  border-end-start-radius : 8px;
}

.menuover a {
  display: block;
  text-decoration: none;
  margin: auto;
  color: rgb(114, 113, 113) !important;
  font-size: 1rem !important;
}

.subitem {
  display: inline-block;
  position: relative;
  color: rgb(102, 100, 100);
  margin: 0;
}
.menuover a:hover {
  background: rgb(221, 220, 220);
}

#submenu {
  display: flex;
  text-decoration: none;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin: 0 .5rem 0 .5rem;
  color: rgb(104, 102, 102);
  font-size: 1.1rem;
  font-weight: 500;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}

#submenu a {
    text-decoration: none;
    color: rgb(104, 102, 102);
    margin: 4px;
    padding: 8px 7px;
    color: rgb(51, 50, 50);
    font-size: 1.1rem;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

#submenu a:hover {
  background-size: 100% 2px;
  background-image: linear-gradient(
    90deg,
    #ff67f7 0,
    #ff62f0 16.67%,
    #df5ce6 33.33%,
    #be55d8 50%,
    #9d4dc9 66.67%,
    #7f47ba 83.33%,
    #6340ad 100%
  );
}
.cart-menu {
  display: flex;
  text-decoration: none;
  margin: auto;
  margin-right: 20px;
  padding: 5px;
  color: rgb(104, 102, 102);
  font-size: 1.1rem;
  font-weight: 500;
}
.cart-menu a{
  text-decoration: none;
}

#submenu a.router-link-exact-active {
  color: rgb(255, 238, 243);
  background-size: 100% 1px;
}

#logonav h3 {
  font-family: "Cookie", cursive;
  font-size: 2rem;
  font-weight: 400;
  padding-left: 0.4rem;
  margin: 0;
}

img {
  height: 35px;
}

#logonav h3 {
  font-family: "Cookie", cursive;
  font-size: 2rem;
  font-weight: 400;
  padding-left: 0.4rem;
  margin: 0;
}

#logonav {
  display: flex;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-left: 0.5rem;
  align-items: center;
  align-content: center;
}
</style>
