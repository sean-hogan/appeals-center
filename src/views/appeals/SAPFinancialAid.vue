<template>
  <div class="financial-aid appeal section container">
    <div class="row pt-5">
      <div class="clearfix">
      <main id="main-content">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
           <div class="basics card">
          <img src="https://images.prismic.io/csug/51fa3b14-3320-41a2-94e1-500b1a6a397d_appeals-financial-aid-basics-cap.png" class="card-img-top d-none d-md-block" alt="">
        <div class="card-body px-4">


    <h2 class="card-title">Financial Aid Reinstatement Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> : A completed Financial Aid Reinstatement Appeal Form, with valid third party supporting documentation, submitted before the appeal deadline
    </p>
    
    <p>
      <strong>How to Start:</strong> The correct for will be made available in the Document Center, in the Student Portal. Please contact a Student Success Counselor with any questions
    </p>

    <p>
      <strong>Appeal Deadline:</strong> Satisfactory Academic Progress progress is reviewed at the end of each trimester. Students deemed to move to Probation will need to submit an appeal before continuing with courses
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>Third party supporting documentation</li>
      <li>Documents provide dates aligned with the SAP Warning period.</li>
      <li>Documentation and appeal demonstrate that student could not reasonably meet their SAP Warning contract</li>

    </ul>

    <p>
      <strong>Decision Time Frame:</strong>  3 weeks by Student Appeals Committee
    </p>

    <p>
      <strong>Provost Appeal:</strong> Must appeal to Provost within 2
      weeks after decision
    </p>



    <a class="d-inline-flex align-items-center text-decoration-none ms-3 fs-5" href="https://portal.csuglobal.edu/portal/student#sidebar-advisor"><i class="bi bi-arrow-right-circle-fill fs-3 me-2"></i> Contact Your Student Success Counselor</a>
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
<li>Documents provide dates aligned with the SAP Warning period</li>
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
      </main>
    </div><!--end clearfix-->
    </div><!--end row-->
    
  </div><!--End Container -->
<aside>
  <AdvisorCallToAction />
</aside>
</template>


<script>
// @ is an alias to /src
import AdvisorCallToAction from "@/components/AdvisorCallToAction.vue";

export default {
  name: "SAPFinancialAid",
  components: {
    AdvisorCallToAction,
  },
    mounted() {
    document.title = 'Financial Aid Appeal | CSU Global Appeals Center';
        
    },
};
</script>


