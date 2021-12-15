<template>
  <Navbar />
  <div class="financial-aid section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">Financial Aid Reinstatement Appeal Basics</h3>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">SAP Probation Appeal</a>, with a valid Third Party supporting documentation, submitted before the appeal deadline
    </p>

    <p>
      <strong>Appeal Deadline:</strong> Satisfactory Academic Progress progress is reviewed at the end of each trimester. Students deemed to move to Probation will need to submit an appeal before continuing with courses
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>Third party supporting documentation</li>
      <li>Documents dates align with SAP Warning period.</li>
      <li>Documentation and appeal demonstrate that student could not reasonably meet their SAP Warning contract</li>

    </ul>

    <p>
      <strong>Decision Time Frame:</strong>  3 weeks by Student Appeals Committee
    </p>

    <p>
      <strong>Provost Appeal:</strong> Must Appeal to Provost within 2
      weeks after decision
    </p>



    <a class="btn btn-info my-3" href="#" target="_blank">Financial Aid Reinstatement Appeal <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Financial Aid Reinstatement Appeal</h1>
        </div>
        
        

<p class="lead">Students who receive notification of Satisfactory Academic Progress Probation status from the Registrar’s Office are not eligible for financial aid. In order to continue taking courses you must submit a Probation Appeal. If you wish to have financial aid reinstated, you must select this option on your appeal form.</p>

<h2>Appeal Review Guidelines</h2>
<p>When reviewing SAP Probation appeals for financial aid reinstatement, the Student Appeal Committee will review the appeal looking at the following elements:</p>

<ul>
<li>Documents are provided around extenuating circumstance during SAP Warning period</li>
<li>Documents dates align with SAP Warning period</li>
<li>Documentation and appeal demonstrate that student could not reasonably meet their SAP Warning contract</li>
</ul>


<h2>Appeal Outcomes</h2>

<p>The student's academic progress during the warning period and any supporting documentation will be reviewed by the Student Appeals Committee who will come to one of three possible outcomes:</p>

<ul>
<li>Approved Academically; Approved to continue receiving Financial Aid - Financial aid students in Academic Probation status <strong>are not eligible for Title IV funds</strong> unless a student appeal has been approved by the institution. The University will only approve a financial aid appeal if it determines that the student had an extenuating circumstance that occurred and prevented the student from successfully completing the coursework.</li>
<li>Approved Academically; Denied Financial Aid</li>
<li>Denied Academically; Denied for Financial Aid</li>
<li>Rejected; Committee needs additional information and/or documentation before a decision can be reached. </li>
</ul>


<p>Please note, SAP Probation appeals will not be considered by the committee if:</p>
<ul>
<li>The student has a past due balance on their account</li>
<li>The student has a pending Incomplete grade for an term. </li>
<li>The student is missing official transcripts - this is especially important for anyone returning to CSU-Global after going to a different school</li>
</ul>



<p>If the student is approved academically (and agrees to continue with classes), they will be issued an Academic Plan (aka SAP Contract) that will detail what must be completed in order to get back into Good Academic Standing</p>

<p>If a student is approved to have financial aid reinstated they must follow their SAP contract. If the contract is broken in anyway the student is no longer eligible for financial aid during their SAP Probation period.</p>



<h2>Provost Appeal Process</h2>


<p>If the students financial aid appeal is denied, the student may appeal the decision to the Provost or designee. The appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.</p>

<p>If a student has exhausted all appeal options may explore the <a href="#">Student Grievance Policy</a>. </p>
    
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
  name: "SAPFinancialAid",
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



