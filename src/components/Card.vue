<template>
  <div>
  <img :src="require(`../assets/img/${prod.img}`)" alt="." />
        <h4>{{ prod.nombre }}</h4>
        <div class="d-flex justify-content-between align-items-center">
          <p class="m-1">Enetero (8 porciones): </p><h3>${{ prod.precio.Ent }}</h3>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <p class="m-1">Por porción: </p><h3>${{ prod.precio.Porc }}</h3>
        </div>
        <div class="d-flex justify-content-between mt-2 mb-2" >
            <select
              class="cant form-select pt-0 pb-0 m-1 w-50 px-1 "
              aria-label="Cantidad "
              id="cantidad"
              v-model="quantity"
            >
              <option selected value="0" >0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
             <select
              class="cant form-select pt-0 pb-0 m-1"
              aria-label="Present"
              id="Present"
              v-model="present"
            >
              <option selected value="Ent">Entero</option>
              <option value="Porc">Porción</option>
            </select>
          <div >
          <button :disabled="isDisabled"
            v-on:click="addToCart(prod.nombre, quantity, present), setQuantity()"
            class="btn m-1 p-0 px-0 btn-agregar "
          >
            <div v-if="!show">Agregar</div>
            <div v-else class="agregado">Agregado! </div>
          </button>
          </div>
</div>
  </div>
</template>

<script>
export default {
  props: ['prod', 'addToCart', 'removeProd', 'index'],
  data () {
    return {
      quantity: 0,
      present: 'Ent',
      agre: false,
      isDisabled: false,
      show: false
    }
  },
  methods: {
    setQuantity () {
      if (this.quantity !== 0) {
        this.isDisabled = true
        this.show = true
        setTimeout(() => { this.quantity = 0; this.isDisabled = false; this.show = false }, 3000)
      }
    }
  }
}
</script>

<style>
.btn-agregar {
  color: rgb(87, 177, 169);
  border: 1px solid rgb(87, 177, 169);
  border-radius: 4px;
  font-weight: 500;
  width: 100px;
}
.agregado {
  border: 1px solid rgb(122, 126, 125);
  background: rgb(122, 126, 125);
  border-radius: 4px;
  font-size: .9rem;
  color: white
}
.btn-agregar:hover {
  background: rgb(53, 87, 116);
  color: white;
}
</style>
