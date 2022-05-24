<template>
  <header class="big-hero">
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row py-5">
      
      <div class="col-12 col-lg-8">
        <h1 class="hero-title lh-1 mb-3">{{ title }}
          
        </h1>
        <p class="lead">{{ body }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <router-link class="btn btn-primary btn-lg px-4 me-md-2 rounded-pill" to="/#file-an-appeal">File An Appeal</router-link>
          <router-link class="btn btn-light btn-lg px-4 rounded-pill" to="/contact-us">Contact Us</router-link>
        </div>
      </div>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    body: String,
    imgsrc: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.big-hero{
  background-image: url(https://images.prismic.io/csug/f2f98746-f47b-46a6-b7d7-bed3cd9ef987_Appeals-Center-UI-Header-1600x600px-A2.jpg);
  background-size:cover;
}
.hero-title {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size:5rem;
}
.lead {
  font-family: 'Source Sans Pro', sans-serif;
}
.btn-light {
  color:#aa1d40;
  border:0px;
}

.btn-light:hover {
  color:#aa1d40;
  background-color: #eee;
}



</style>
