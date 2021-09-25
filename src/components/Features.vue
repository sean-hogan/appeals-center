<template>
<div class="features section bg-light">
    <div class="container px-4 py-5">
        
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 row-eq-height">
        <div class="col d-flex align-items-start">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-heart-fill text-primary text-bottom h2" />
            </div>
            <div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" class="btn btn-primary">
                call to action
            </a>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-record-circle-fill text-primary text-bottom h2" />
            </div>
            <div>
            <h2>Another Feature</h2>
            <p class="mb-5">Paragraph of text beneath the heading to explain the heading. </p>
            <a href="#" class="btn btn-primary mt-3">
                Primary button
            </a>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div class="icon-square text-dark flex-shrink-0 me-3">
            <i class="bi-sliders text-primary text-bottom h2" />
            </div>
            <div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" class="btn btn-primary">
                Primary button
            </a>
            </div>
        </div>
    </div><!--end row-->
    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
    name: 'Features',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
