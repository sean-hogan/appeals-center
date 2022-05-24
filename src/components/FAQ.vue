<template>
<section class="faq section" id="faq" aria-labelledby="faq-heading">

<div class="container px-4 py-5">
  <div class="text-center">
  <h2 id="faq-heading" class="display-3">FAQ</h2>

  </div>
         <div class="row justify-content-center">
           <div class="col-md-8">

         <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is 3rd Party Supporting documentation?
      </button>
    </h3>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">3rd party supporting documentation is from someone other than the student or student's friends and family. Documentation from a 3rd party (such as a doctor, counselor, or other professional) should be on letterhead, include specific dates, and be signed.
        </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Can I wait to start my SAP Probation/SAP Suspension period?
      </button>
    </h3>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes. If you need time to make sure you are set up for academic success or to save up for tuition, you can wait to start your SAP trimester. Students need to take one class within one year in order to maintain an active status. Please keep this in mind as you plan for the best time to start your SAP period.
        </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Am I eligible for financial aid if I am on SAP Probation?
      </button>
    </h3>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Students on SAP Probation are not eligible for financial aid during their SAP Probation period. If a student faced an unexpected/extenuating circumstance during their SAP Warning period, they can provide 3rd Party Supporting documentation and appeal to have financial aid reinstated.
        </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        What happens if I don't meet my SAP contract?
      </button>
    </h3>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Students who do not follow their SAP contract will progress to the next stage of SAP. Student will need to submit the correct appeal and have the appeal approved in order to continue with courses. </div>
    </div>
  </div><!--end accordion item-->

  <div class="accordion-item">
    <h3 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          What are my options if my appeal is denied?
      </button>
    </h3>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Students can submit a <router-link to="/appeals/provost-appeals">Provost appeal</router-link> if they are unhappy with the results of their appeals. The Provost appeal is the final appeal options for students and the Provost's decision is final. 
      </div>
    </div>
  </div><!--end accordion item-->



</div><!--end accordion-->










           </div><!--end accordion col-->
         </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->

</template>

<script>
export default {
  name: 'FAQ',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accordion-button {
  color:#aa1d40;
  background-color:#f1f2f4;
}

.accordion-button:not(.collapsed) {
  color:#fff;
  background-color:#9e1831;
}

.accordion-item {
  border:0px;
  border-radius:4px;
  margin-bottom:0.5rem;
}

.accordion-body {
  margin-left:2rem;
}

.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:focus {
  box-shadow:none;
}

.accordion-collapse {
  background:#f1f2f4;
}

#faq-heading:after {
    content: "";
    display: block;
    margin: 20px auto;
    position: relative;
    width: 60px;
    height: 3px;
    background-color: #ddd;
    margin-top: 10px;
}

</style>
