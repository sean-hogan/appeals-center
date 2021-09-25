<template>
<div class="testimonials section bg-primary text-white">
    <div class="container px-4 py-5">
        <div class="row text-center mb-3">
        <h2 class="display-3">What Our Students Say</h2>
        <p class="lead mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
                <div class="row text-center mb-5">

        <div class="col-4">
            <div class="single-testimonial">
                <div class="testimontial-text bg-white text-dark p-5 mb-2"> 
                    <p>"It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality, the only thing that has changed is my mindset and a few behaviors."</p>
                </div>
                <div class="author">
                    <img class="rounded-circle w-25" src="../assets/testi-1.jpg" />
                </div>

            </div>
        </div>

        <div class="col-4">
            <div class="single-testimonial">
                <div class="testimontial-text bg-white text-dark p-5 mb-2"> 
                    <p class="pb-5">"Teachers enjoyed receiving email receipts and reminders, but I don't think they knew that a simple script did the work for me."</p>
                </div>
                <div class="author">
                    <img class="rounded-circle w-25" src="../assets/testi-2.jpg" />
                </div>

            </div>
        </div>

        <div class="col-4">
            <div class="single-testimonial">
                <div class="testimontial-text bg-white text-dark p-5 mb-2"> 
                    <p class="pb-4">"Learning code became my obsession. In June 2012, I took the little I had saved and bought a computer, installed Ubuntu and quit my internship."</p>
                </div>
                <div class="author">
                    <img class="rounded-circle w-25" src="../assets/testi-3.jpg" />
                </div>

            </div>
        </div>

    </div><!--end row-->


    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
  name: 'Testimonials',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    border:none;
}

</style>
