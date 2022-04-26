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
      <div id="formulario" class="w-100 px-3 m-1">
        <form class="m-auto mt-4" @submit="check" action="">
          <div class="mb-3 row g-3 align-items-center">
            <div class="col-auto">
              <label for="nombre" class="col-form-label"> *Nombre: </label>
            </div>
            <div class="col-auto align-content-start">
              <input
                type="text"
                name="nombre"
                v-bind="name"
                class="form-control"
                :placeholder="placeName"
                maxlength="20"
                tabindex="1"
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
                id="apellido"
                class="form-control"
                placeholder="Apellido"
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
                id="ciudad"
                class="form-control"
                value="Rosario"
                tabindex="6"
              />
            </div>
          </div>
          <div v-if="invName"> {{ msj }}</div>
          <div class="mb-3">
            <label for="email" class="form-label">*Email: </label>
            <input
              type="text"
              class="form-control"
              name="email"
              v-bind="email"
              :placeholder="reqEmail"
              :class="{ isInvalid: invEmailClass }"
            />
          </div>
          <div v-if="invEmail"> <p> Ingrese un email válido </p></div>

          <div class="mb-3">
            <label for="comentario" class="form-label">
              Comentario o consulta:
            </label>
            <br />
            <textarea
              name="comentario"
              id="comentario"
              class="form-control"
              rows="5"
              tabindex="8"
            ></textarea
            ><br />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="noticias" />
            <label class="form-check-label" for="noticias">
              Quiero recibir novedades de La pastelería !</label
            >
          </div>
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
      name: null,
      email: null,
      reqName: false,
      reqEmail: false,
      invName: false,
      invEmailClass: false,
      invEmail: false,
      msj: false,
      placeName: 'Ingrese su nombre',
      placeEmail: 'ejemplo@ejemplo.com',
      showGracias: false
    }
  },
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
      if (!this.name) {
        this.reqName = true
        correcto = false
      } else {
        while (i < this.name.length && ContieneSignoEspecial === false) {
          if (!(this.esLetra(this.name.charAt(i)))) {
            ContieneSignoEspecial = true
          }
          i++
        }
        if (ContieneSignoEspecial === true) {
          this.invName = true
          this.msj = '*Ingrese un nombre válido'
          setTimeout(function () { this.invName = false }, 2000)
          this.reqName = true
          setTimeout(function () { this.reqName = false }, 2000)
          correcto = false
        }
      }
      let j = 0
      let esMail = false
      if (!this.email) {
        this.invEmailClass = true
        setTimeout(function () { this.invEmailClass = false }, 2000)
        correcto = false
        this.reqEmail = 'Campo requerido'
        correcto = false
      } else {
        while (j < this.email.length && esMail === false) {
          if (this.email.charAt(i) === '@') {
            esMail = true
          }
          j++
        }
        if (esMail === false) {
          this.invEmail = true
          setTimeout(function () { this.invEmail = false }, 2000)
          this.invEmailClass = true
          setTimeout(function () { this.invEmailClass = false }, 2000)
          correcto = false
        }
      }
      if (correcto === true) {
        var delay = 3000
        setTimeout(function () { window.location = './contacto.html' }, delay)
        this.showGracias = true
      }
    }
  },
  components: { Menu, Footer }
}
</script>

<style>
#formulario{
    border: 1px solid rgb(177, 174, 174);
    border-radius: 1%;
}

.sinDato::-webkit-input-placeholder{
    color: rgb(190, 38, 38);
}
.datoInv{

    display: block;
    color: rgb(190, 38, 38);
    position: relative;
    top: 0;
    }
.sinDato{
    border: 1px solid  rgb(155, 15, 15);
    box-shadow: 0px 2px 4px  rgb(155, 15, 15);
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

    display: none;
}
</style>
