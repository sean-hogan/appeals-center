<template>
<div class="advisor-call-to-action section mt-5">
    <div class="container px-4 py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-md-10 floaty-bg p-5">

<h4 class="display-3 mb-4 mt-5">Need assistance?</h4>
<p class="lead mb-5">Students are encouraged to work with their instructors and Student Success Counselor before submitting appeals</p>
<p><a href="https://portal.csuglobal.edu/portal/student#sidebar-advisor" class="btn btn-lg btn-light rounded-pill px-4">Contact Your Advisor</a></p>
          </div>


        </div><!--End Row-->

    </div><!--end container-->
    </div><!--end section-->
</template>

<script>
export default {
  name: 'AdvisorCallToAction',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advisor-call-to-action {
  color:#fff;
}
.floaty-bg{
  background-image: url(https://images.prismic.io/csug/fcbcb260-507b-4665-9cfe-233fce2acef6_CTA-Box.png);
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
}

.section {
  background: linear-gradient(#fff 50%, #eee 50%);
}

.btn-light {
  color:#aa1d40;
}

.btn-light:hover {
  color:#aa1d40;
  background-color: #eee;
}



</style>
