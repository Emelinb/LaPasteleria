<template>
  <div>
  <div class="enca"></div>
  <div class="contentmenu">
    <Menu />
  </div>
    <div class="p-2 w-75 m-auto">
      <h2 class="animate__animated animate__swing">~ Contacto ~</h2>
      <p class="p-2 m-auto text-center fs-5">
        Completa el siguiente formulario y a la brevedad nos comunicaremos con
        vos, no dudes en consultar!
      </p>
      <div id="formulario" class="w-100 p-3 px-3 m-1">
      <form action="">
        <div class="mb-3 row g-3  align-items-center">
            <div class="col-auto">
              <label for="nombre" class="col-form-label"> *Nombre: </label>
            </div>
            <div class="col-auto align-content-start">
              <input
                type="text"
                name="nombre"
                v-model="nameCamp"
                :placeholder="placeName"
                maxlength="20"
                tabindex="1"
                class="form-control"
                :class="{ sinDato: reqName }"
              />
            </div>

            <div class="col-auto">
              <label for="apellido" class="col-form-label" maxlength="20">
                Apellido:
              </label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                name="apellido"
                class="form-control"
                placeholder="Ingrese su apellido"
                tabindex="2"
              />
            </div>
            <div class="col-auto">
              <label for="ciudad" class="col-form-label">Ciudad: </label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                name="ciudad"
                class="form-control"
                value="Rosario"
                tabindex="6"
              />
            </div>
          </div>
          <div v-if="invName" class="datoInv"> *Ingrese un nombre válido </div>
        </form>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button @click="validar()" type="submit" class="btn btn-primary m-3">
            Enviar
          </button>
        </div>
      </div>
      <div class="p-2" id="gracias" v-if="showGracias"> <p> Formulario enviado con éxito. </p> <p>Gracias por comunicarte con nosotros!</p>  <p style="font-size: .7rem"> Serás redireccionado automáticamente</p> </div>
      </div>
 <Footer />
  </div>
</template>

<script>
import Menu from '../components/Menu'
import Footer from '../components/Footer'
export default {
  data () {
    return {
      nameCamp: false,
      reqName: false,
      invName: false,
      placeName: 'Ingrese su nombre',
      showGracias: false
    }
  },
  components: { Menu, Footer },
  methods: {
    esMayuscula (letra) {
      return letra >= 'A' && letra <= 'Z'
    },
    esMinuscula (letra) {
      return letra >= 'a' && letra <= 'z'
    },
    esLetra (letra) {
      return (this.esMinuscula(letra) || this.esMayuscula(letra) || letra === '')
    },
    validar () {
      let ContieneSignoEspecial = false
      let i = 0
      let correcto = true
      if (!this.nameCamp) {
        console.log('no recibe')
        this.reqName = true
        this.placeName = 'Campo requerido'
        correcto = false
      } else {
        while (i < this.nameCamp.length && ContieneSignoEspecial === false) {
          if (!(this.esLetra(this.nameCamp.charAt(i)))) {
            console.log(this.nameCamp.charAt(i))
            ContieneSignoEspecial = true
          }
          i++
        }
        if (ContieneSignoEspecial === true) {
          console.log('contiene signo')
          this.invName = true
          this.reqName = true
          setTimeout(function () { this.reqName = false; this.invName = false }, 2000)
          correcto = false
        }
      }
      if (correcto === true) {
        this.showGracias = true
      }
    }
  }
}
</script>

<style>
#formulario{
    border: 1px solid rgb(177, 174, 174);
    border-radius: 8px;
}

.sinDato::-webkit-input-placeholder{
    color: rgb(190, 38, 38);
}
.sinDato{
    border: 1px solid  rgb(155, 15, 15);
    box-shadow: 0px 2px 4px  rgb(155, 15, 15);
}

.datoInv{
    color: rgb(155, 15, 15);
    position: relative;
    top: 0;
}
#gracias{
    width: 40%;
    color: white;
    background: rgba(175, 146, 158, 0.938);
    border: 2px solid rgb(158, 126, 146);
    box-shadow: 0px 3px 5px rgb(158, 126, 146);
    border-radius: 2%;
    font-size: 1.2rem;
    text-align: center;
    position: fixed;
    z-index: 10;
    top: 20%;
    right: 30%;
}
</style>
