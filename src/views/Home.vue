<template>
  <div class="home">
  <Navbar />
  <Hero 
    title="Get help faster."
    body="The Student Appeals Center provides students with resources, guidance, and materials you need to get started with Academic Appeals" 
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
    Footer,
  }
}
</script>
