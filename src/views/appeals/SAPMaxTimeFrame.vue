<template>
  <Navbar />
  <div class="mtf section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">Maximum Time Frame (Exception?)</h3>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">MTF Request</a>, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>Appeal Deadline:</strong> Filed within 30 days of the end of the term in question, including all supporting documentation
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>Student faced an unexpected and/or extenuating circumstance after the withdrawal deadline during the term</li>
      <li>Student can provide documentation of their extenuating circumstance</li>

    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 3 weeks by Student Appeals Committee
    </p>

    <p>
      <strong>Provost Appeal:</strong> Must Appeal to Provost within 2 weeks after decision
    </p>



    <a class="btn btn-info my-3" href="#" target="_blank">MTF Request <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Maximum Time Frame</h1>
        </div>
        <p class="lead">Students are able to attempt up to 150% of the credits required to complete their degree. Students who will have to exceed the 150% attempted credits to graduate will exceed the Maximum Time Frame policy.</p>

<h2>Maximum Time Frame Policy</h2>

<p>The Maximum Time Frame policy is a component of good academic standing, or Satisfactory Academic Progress.</p>

<p>All students who will exceed the Maximum Time Frame must submit a Maximum Time Frame Exception appeal to continue in their program.</p>

<p>Students who exceed 150% of the number of credit hours required for their degree will be ineligible for financial aid. Students are not able to appeal to have financial aid reinstated.</p>

<h2>Appeal Review Guidelines</h2>

<p>The Student Appeals Committee will consider the following elements when reviewing an appeal:</p>
<ul>
<li>Extenuating circumstances student faced during their program</li>
<li>Past academic history</li>
<li>Strong study plan</li>
<li>Acceptable timing and path back to good academic standing within the allowed timeframe</li>
</ul>



<h2>Appeal Outcomes</h2>

<p>Student academic progress and all supporting documentation will be reviewed by the Student Appeals Committee resulting in one of the following actions:</p>

<ul>
<li>Approved Academically: Students are provided a plan to complete their degree.</li>

<li>Denied Academically:  Students are not able to continue with their program.</li>

<li>Rejected: Committee needs additional information and/or documentation before a decision can be reached.</li>
</ul>


<p>Students approved academically will be provided a detailed plan on next steps to complete their degree and will work with their Student Success Counselor to register for courses.</p>

<p>Students who do not follow the plan provided by Student Affairs (withdrawal and/or failing courses) will not be allowed to continue.</p>

<h2>Provost Appeal Process</h2>
<p>Students who appeal their Maximum Time Frame and are denied have the option of filing a Provost Appeal SAP Form. The provost appeal must be submitted within 2 weeks of the decision of the Appeals Committee. The provost may request additional documentation from the student. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.</p>

<p>If a student has exhausted all appeal options may explore the <a href="">Student Grievance Policy</a>.</p>

    </div><!--end clearfix-->
    </div><!--end row-->
    
  </div><!--End Container -->

  <AdvisorCallToAction />

  <Footer />
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import AdvisorCallToAction from "@/components/AdvisorCallToAction.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SAPMaxTimeFrame",
  components: {
    Navbar,
    AdvisorCallToAction,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card ul li {
  margin-bottom:1rem;
}

.header:after {
    content: "";
    display: block;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 5px;
    background-color: #18c9b9;
    margin-top: 10px;
}

h2 {
  margin-top:2rem;
}

h2:after {
    content: "";
    display: block;
    margin-bottom: 20px;
    position: relative;
    width: 60px;
    height: 3px;
    background-color: #eee;
    margin-top: 10px;
}
.section {
  margin-bottom: 5rem;
}

</style>



