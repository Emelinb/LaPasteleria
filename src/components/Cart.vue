<template>
    <div class="minicart">
        <h4 class="d-flex justify-content-center align-center"> <span class="m-auto"> Tu pedido </span>
        <button @click="toggle" class="cart-close"> &times;</button></h4>
        <div class="px-2">
        <table v-if="Object.keys(cart).length" class="table ">
            <thead >
            <tr>
                <th style="width: 45%">Prod.</th>
                <th style="width: 18%">Precio</th>
                <th style="width: 10%" >Cant.</th>
                <th style="width: 25%" >Subt.</th>
                <th style="width: 8%"><span class="sr-only"></span></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(cantidad, key, i) in cart" :key="i" class="px-3">
                    <td class="align-content-middle"> <i>{{ key }} </i></td>
                    <td class="align-middle">  ${{ getPrice(key) }} </td>
                    <td class="align-middle">  {{ cantidad }} </td>
                    <td class="align-middle">  ${{ (cantidad*getPrice(key)).toFixed(2) }} </td>
                    <td class="center align-middle">
                <button class="btn btn-danger cart-remove p-1" @click="removeProd(key)">&times;</button>
              </td>
                </tr>
            </tbody>
        </table>
        </div>
        <p v-if="!Object.keys(cart).length" class="center">
          <em>Tu carrito está vacío</em>
        </p>
        <div class="spread">
          <strong>Total:</strong> $ {{ calculateTotal() }}
        </div>
          <button class="btn  m-2 confirmar">  Confirmar Pedido</button>
    </div>
</template>

<script>
export default {
  props: ['toggle', 'cart', 'productos'],
  methods: {
    getPrice (name) {
      const prodName = name.split(' - ')
      const nombre = prodName[0]
      const pres = prodName[1].valueOf()
      const prod = this.productos.find(p => p.nombre === nombre)
      return prod.precio[pres]
    },
    calculateTotal () {
      const cartEntries = Object.entries(this.cart)
      const total = cartEntries.reduce((tot, p) => {
        return tot + p[1] * this.getPrice(p[0])
      }, 0)

      return total.toFixed(2)
    },
    removeProd (key) {
      delete this.cart[key]
    }
  }
}
</script>

<style scoped>
.minicart{
    position: absolute;
    top: 34px;
    right: 0px;
    background: rgb(243, 241, 241);
    color: rgb(3, 3, 3);
    text-align: center;
    border-radius: 6px;
    min-width: 450px;
    box-shadow: 0 0 10px 0 gray;
}

h4{
  font-size: 1.2rem;
  background: rgb(174, 201, 198);
  padding: 8px;
  color: white;
}

.cart-close {
  background: none;
  border: 1px solid rgb(250, 248, 248);
  border-radius: 4px;
  color: rgb(250, 248, 248);
  font-size: 1.8rem;
  padding: 3px !important;
  line-height: 8px;
}
.cart-close:hover{
  border: 1px solid rgb(68, 114, 155);
  color: rgb(68, 114, 155);
}
.cart-remove {
  line-height: 10px;
}
tr{
  min-width: 500px;
}

td {
  padding: 10px 20px;
}
tbody {
  font-size: .8rem;
  color: rgb(14, 13, 13);
}

.confirmar {
  background: rgb(190, 140, 165);
  color: white;
  padding: 1px 6px;
}
.confirmar:hover {
  background: rgb(158, 100, 129);
}
</style>
