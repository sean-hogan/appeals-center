<template>
  <div class="home">
  <Navbar />
  <Hero 
    title="Get help faster."
    body="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" 
    imgsrc="hello.svg" />
  <FileAnAppealBrief />
  <AdvisorCallToAction />
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import FileAnAppealBrief from '@/components/FileAnAppealBrief.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    FileAnAppealBrief,
    AdvisorCallToAction,
    Footer
  }
}
</script>
