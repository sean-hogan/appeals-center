<template>
  <div class="suspension appeal section container">
    <div class="row pt-5">
      <div class="clearfix">
      <main id="main-content">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
          <div class="basics card">
          <img src="https://images.prismic.io/csug/1668e7cf-96ac-4b05-96ce-fe45a4af93af_appeals-suspension-basics-cap.png" class="card-img-top d-none d-md-block" alt="">
        <div class="card-body px-4">

    <h2 class="card-title">Suspension Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed Suspension Appeal Form, with a valid appeal factor
    </p>
    <p>
      <strong>How to Start:</strong> The correct form will be made available in the Document Center, in the Student Portal. Please contact a Student Success Counselor with any questions
    </p>
    <p>
      <strong>Appeal Deadline:</strong> Satisfactory Academic Progress is reviewed at the end of each trimester. Students who will progress onto SAP Suspension need to submit an appeal before continuing with courses.    </p>

    
    <p><strong>Appeal Factors:</strong>
    <br />Strong appeals will provide:</p>
    <ul>
     
      <li>Circumstances that delayed successful completion of coursework</li>
      <li>How previous circumstances are different now</li>
      <li>Actions taken during SAP Probation toward meeting SAP standards</li>
      <li>An outline of a specific study plan to resume good academic standing</li>
    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 3 weeks by Student Appeals Committee
    </p>




    <a class="d-inline-flex align-items-center text-decoration-none ms-3 fs-5" href="https://portal.csuglobal.edu/portal/student#sidebar-advisor"><i class="bi bi-arrow-right-circle-fill fs-3 me-2"></i> Contact Your Student Success Counselor</a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Suspension Appeal</h1>
        </div>
        


<p class="lead">Every institution of higher education that receives Federal Title IV Funds is required by the U.S.Department of Education to define and enforce standards of satisfactory academic progress. Satisfactory Academic Progress (SAP) measures a student’s performance in the following three areas: cumulative completion rate, cumulative grade point average (GPA), and maximum time frame. The purpose of this policy is to inform students of the expectations required of them to make reasonable academic progress in order to earn a degree. Students who fail to clear SAP Probation status will be placed on Academic Suspension. Students placed on Academic Suspension retain limited access to their Student Portal for account information and student services.</p>

<p>Students will receive notification of SAP Suspension status from the Registrar's Office via email. In addition, students will have a SAP Suspension hold placed onto their account. All students who are placed on Academic Suspension must submit an SAP Suspension Appeal form. Student Success Counselors are able to add the Suspension Appeal form to the student's portal upon request.</p>

<p>Supporting documentation is not necessarily required for a SAP Suspension Appeal, however, it is highly encouraged to fully consider the appeal case. SAP Suspension Appeals will only be considered if all outstanding account balances have been paid and all official transcripts are on file. SAP Suspension appeals are reviewed by the Student Appeals Committee.</p>

<h2>Appeal Review Guidelines</h2>
<p>The Student Appeal Committee will review the appeal based on the following elements:</p>
<ul>
<li>Extenuating circumstance during SAP Warning period</li>
<li>Past academic history</li>
<li>Strong study plan</li>
<li>Is the path back to good academic standing possible during the allowed timeframe</li>
</ul>

<h2>Appeal Outcomes</h2>

<p>The student's academic progress during the SAP Probation period and any supporting documentation will be reviewed by the Student Appeals Committee who will come to one of three possible outcomes:</p>

<ul>
<li>Approved Academically; Student will be placed on SAP Probation II status and will be required to sign a contract for one (1) or two (2) trimesters.</li>
<li>Denied Academically; Students are not able to continue taking courses with CSU Global</li>
<li>Rejected; Committee needs additional information and/or documentation before a decision can be reached. </li>
</ul>

<p>Please note, SAP Suspension appeals will not be considered by the committee if:</p>

<ul>
<li>The student has a past due balance on their account</li>
<li>The student has a pending Incomplete grade for an term. </li>
<li>The student is missing official transcripts - this is especially important for anyone returning to CSU Global after going to a different school</li>
</ul>

<p>Students approved academically (and agreeing to continue with classes) are issued an Academic Plan (aka SAP Contract) detailing what must be completed in order to get back into Good Academic Standing. This contract covers either one or two entire trimesters. The contract is completed by the Office of Student Affairs and emailed to the student within 7 business days of the Committee’s decision. The student must sign the contract and upload it back to their student portal. Once the contract is received and approved, the student is registered by Student Affairs for their courses.</p>

<p>Students in SAP Suspension are never eligible for Financial Aid and must use alternative payment options until they return to good academic standing.</p>

<p>SAP Suspension is the final attempt students have to get back into good academic standing. Students not able to meet their SAP contract will not be allowed to continue with CSU Global.</p>

<h2>Provost Appeal Process</h2>


<p>Students who appeal their SAP Suspension and are denied have the option of filing a Provost Appeal SAP Form. appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, student will be notified of the final decision.</p>

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
  name: "SAPSuspension",
  components: {
    AdvisorCallToAction,
  },
  mounted() {
    document.title = 'Suspension Appeal | CSU Global Appeals Center';
        
    },
};
</script>



