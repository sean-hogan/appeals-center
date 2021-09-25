<template>
  <div class="page-banner">
      <header class="py-5 bg-image-full mb-5">
          <div class="container p-5">
              <div class="row">                
                <h1 class="text-dark fs-3 fw-bolder">{{title}}</h1>
                <p class="text-dark-50 mb-0"><a href="/">Home</a> | {{title}}</p>
              </div><!--endrow-->
          </div><!--end container-->
        </header>
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    title: String,
    bc: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .bg-image-full {
    background-image: url('../assets/banner-bg.png');
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
}
      

</style>
