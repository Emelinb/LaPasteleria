<template>
  <body>
  <div class="enca"></div>
  <div class="contentmenu">
    <Menu />
  </div>
    <div id="info">
      <div class="subInfo">
        <img src="../assets/img/tarjeta.jpg" alt="" />
        <p>Todos los medios de pago</p>
      </div>
      <div class="subInfo">
        <img src="../assets/img/takeaway.png" alt="" />
        <p>Pedí y pasá a retirar</p>
      </div>
      <div class="subInfo">
        <img src="../assets/img/fast-delivery.png" alt="" />
        <p>Te lo llevamos donde quieras</p>
      </div>
    </div>
    <h2 class="animate__animated animate__swing ">Recomendados de la semana</h2>
    <div class="subProd">
      <Card v-for="(prod, index) in productos.slice(0,3)"
      :key="prod.id"
      :prod="prod"
      :index="index"
      :addToCart="addToCart"
      class="prod" />
    </div>

    <div id="secSucursales">
            <h2>~ Nuestras sucursales ~</h2>
            <div id="secSucur">
                <div class="sucur">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.9148653693687!2d-60.67313028525474!3d-32.92684747821539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654abc3ab1d5f%3A0x2f90ce97db2c5a6!2sAlto%20Rosario%20Shopping!5e0!3m2!1ses!2sar!4v1633625735835!5m2!1ses!2sar"
                        style="border:0" allowfullscreen="" loading="lazy"></iframe>
                    <div>
                        <h5> Sucursal shopping</h5>
                        <p>Horario: Lunes a Domingos de 10:00 a 20hs</p>
                        <p>Tel: 341111111 - 3411222222</p>
                    </div>
                </div>

                <div class="sucur">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0823605232936!2d-60.65689178525394!3d-32.9488348793281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab6a5f68e707%3A0x6f4f959609762ae8!2sBv.%20Oro%C3%B1o%20%26%20Mendoza%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1633626019204!5m2!1ses!2sar"
                         style="border:0" allowfullscreen="" loading="lazy"></iframe>
                    <div>
                        <h5> Sucursal centro </h5>
                        <p>Horario: Lunes a Domingos de 10:00 a 20hs</p>
                        <p>Tel: 341111111 - 3411222222</p>
                    </div>
                </div>
            </div>
        </div>
     <Footer/>
  </body>
</template>

<script>
import postres from '../productos.json'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Card from '../components/Card'
export default {
  name: 'Postres',
  props: ['addToCart'],
  data () {
    return {
      productos: postres
    }
  },
  components: { Menu, Footer, Card }
}
</script>

<style scoped>
body {
  text-align: center;
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

#info{
    display: flex;
    width: 50%;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-bottom: 1px solid rgb(189, 187, 187);
    text-align: center;
    font-size: .9rem;
    color: grey;
    margin:auto;

}

.subInfo{
    width: 20%;
    margin:auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
#info img{
    width: 35%;
    border-radius: 100%;
}

.bordeDeg{
    padding-bottom: .5rem;
    border-bottom: 2px solid ;
    border-image: -webkit-radial-gradient(rgb(158, 158, 158),transparent) 1 10;
}

.subProd{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.prod{
    margin: 1.5rem;
    color: rgb(37, 37, 37);
    font-weight:300;
    text-align: center;
}

.prod img{
    width: 14rem;

    border: 2px solid rgba(158, 158, 158,0.8);

    border-radius: 100% ;
}
.prod h4{
        font-size: 1.8rem;
        font-family: 'Cookie', cursive;
        font-weight: 400;
        text-align: center;
}
.prod p{
    padding: .3rem;
}

.prod h3{
    width: 5rem;
    margin:auto;
    border: 1px solid rgba(128, 128, 128, 0.6);
    border-radius: 2%;
    padding: .3rem;
    background: rgb(148, 113, 113);
    color: white;
    font-weight: 400;
    border-radius: 4px;
}

#secSucursales{
  margin-top: 2rem;
    padding-top: 1rem;
  border-top: 1px solid;
  border-image: -webkit-radial-gradient(rgb(102, 100, 101), transparent) 1 10;
}

#secSucur{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
.sucur{
    padding-bottom: 2.5rem;
    border: 1px solid rgb(187, 186, 186);
    margin: 1.3rem;
    text-align: center;
    width: 30%;

}
.sucur iframe{
    width: 100%;
    height: 60%;
}

#secSucur h5{
    padding: .5rem;
    font-size: 1rem;
}
#secSucur p{
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 0.3rem;
    text-align: center;
}

</style>
