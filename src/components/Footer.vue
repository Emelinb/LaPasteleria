<template>
  <footer >
        <p>Seguinos en redes!</p>
        <div id="redes">
        <a href="http://facebook.com" target="_blank"> <i class="fab fa-facebook-square"></i></a>
        <a href="http://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="http://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="http://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    color: rgb(80, 79, 79) ;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: .4rem;
    font-size: 1.1rem;
}
#redes{
    padding: .4rem;
}
#redes a {
    text-decoration: none;
    color: rgb(80, 79, 79);
    font-size: 1.3rem;
    padding: .4rem;

}
#redes a:hover{
    color:#f17d70 ;
}
</style>
