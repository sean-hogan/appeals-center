<template>
  <div class="home">
  <Hero 
    title="Get help faster."
    body="The Appeals Center provides students with the resources, guidance, and materials you need to get started with your appeal." 
    imgsrc="hello.svg" />
  <main id="main-content">
  <FileAnAppealBrief />
  </main>
  <aside>
  <AdvisorCallToAction />
  </aside>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import FileAnAppealBrief from '@/components/FileAnAppealBrief.vue'
import AdvisorCallToAction from '@/components/AdvisorCallToAction.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    FileAnAppealBrief,
    AdvisorCallToAction,
  },
    mounted() {
    document.title = 'Home | CSU Global Appeals Center';
        
    },
}
</script>
