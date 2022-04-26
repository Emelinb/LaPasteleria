<template>
<div >
<div id="navv">
  <nav >
          <router-link to="/" >Home </router-link>|
          <router-link to="/nosotros">Nosotros</router-link>
          </nav>
</div>
  <router-view v-slot="{ Component }"  :addToCart="addToCart" :productos="productos"  >
    <transition  name="slide-up" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view >
  <div class="cartdiv" >
         <div class="cart-menu">
          <div class="cart">
            <div id="cart" @click="toggleCart">
              <i class="fas fa-shopping-cart"></i> <p>({{ totalQuantity }})</p> </div>
              <transition name="fade">
              <div v-if="showCart">
              <Cart  :toggle="toggleCart" :cart="cart" :productos="productos" />
              </div>
              </transition>
          </div>
        </div>
         </div>
</div>
</template>

<script scoped>
import postres from './productos.json'
import Cart from './components/Cart'
export default {
  data () {
    return {
      showCart: false,
      cart: {},
      productos: postres
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity, present) {
      if (parseInt(quantity) !== 0) {
        this.cart[name + ' - ' + present] ??= 0
        this.cart[name + ' - ' + present] += parseInt(quantity)
        console.log(this.cart)
      }
    },
    toggleCart () {
      this.showCart = !this.showCart
    }
  },
  components: { Cart }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(153, 63, 101);
}
#cart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-size: 1.2rem;
     color: rgb(213, 236, 234);
}

#cart p {
  margin: auto;
  font-size: .8rem;
}
#cart:hover .fa-shopping-cart{
    color:rgb(68, 114, 155);
}
#cart:hover p{
      color:rgb(68, 114, 155);
}
.cart-menu:hover{
  color:rgb(68, 114, 155);
}
.fa-shopping-cart {
    padding: 0 8px;
    text-decoration: none;
    font-size: 1.4rem;
    color: rgb(87, 177, 169);
}

nav {
  height: 30px;
  position:absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    padding: 2px;
    padding-bottom: 3px;
    display: flex;
    justify-content: center;
    color: rgb(120, 163, 170);

}

.cartdiv {
    position: absolute;
    top: 3px;
    right: 0;
    z-index: 1 ;
    padding: 1px 15px;

}
nav a {
    display: flex;
    text-decoration: none;
    padding-left: .4rem;
    padding-right:.4rem ;
    padding-top: 1px;
    padding-bottom: 1pxrem;
    margin: 0 3px 0 3px;
    color: rgb(221, 222, 223);
    font-size: 1rem;
    font-weight: 500;

    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

nav a:hover{
    color: rgb(87, 177, 169);
}
nav a.router-link-exact-active {
    color: rgb(87, 177, 169);
    font-weight: 600;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(100px);
  }

  .slide-up-enter-active{
    transition: all 0.3s ease-out;
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
  .slide-up-leave-active {
    transition: all 0.3s ease-in;
  }

</style>
