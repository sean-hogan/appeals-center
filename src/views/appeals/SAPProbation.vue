<template>
  <div class="probation appeal section container">
    <div class="row pt-5">
      <div class="clearfix">
      <main id="main-content">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
  
       <div class="basics card">
          <img src="https://images.prismic.io/csug/754e2bfd-7edc-494c-b65d-a08c31eeaacc_appeals-probation-basics-cap.png" class="card-img-top d-none d-md-block" alt="">
        <div class="card-body px-4">

    <h2 class="card-title">SAP Probation Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed SAP Probation Appeal Form, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>How to Start:</strong> The correct for will be made available in the Document Center, in the Student Portal. Please Contact a Student Success Counselor with any questions
    </p>
    <p>
      <strong>Appeal Deadline:</strong> A Student's Satisfactory Academic Progress is reviewed at the end of each trimester. Students deemed to move to SAP Probation will need to submit an appeal before continuing with courses
    </p>

    
    <p><strong>Appeal Factors:</strong>
    <br />Students must provide:</p>
    <ul>
      
      <li>An explanation regarding the circumstances that delayed successful completion of coursework.</li>
      <li>Details regarding how previous circumstances are now different.</li>
      <li>Description of actions taken during SAP warning toward meeting SAP standards.</li>
      <li>An outline of a specific study plan to resume good academic standing.</li>

    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 3 weeks by Student Appeals Committee
    </p>

    <a class="d-inline-flex align-items-center text-decoration-none ms-3 fs-5" href="https://portal.csuglobal.edu/portal/student#sidebar-advisor"><i class="bi bi-arrow-right-circle-fill fs-3 me-2"></i> Contact Your Student Success Counselor</a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">SAP Probation Appeal</h1>
        </div>
        


<p class="lead">Students who are not able to meet their SAP Warning Contract will progress onto SAP Probation.</p>

<h2>SAP Probation Policy</h2>
<p>Students will receive notification of SAP Probation status from the Registrar's Office via email. In addition, the student will have a SAP probation hold and a SAP termination hold placed onto their account. Please note, the SAP termination hold is a Financial Aid hold and will be taken off the student's account if they are approved to continue receiving Financial Aid.</p>
<p>All students who are placed on Academic Probation must submit an SAP Probation Appeal form in order to continue taking courses during the Probation period</p>


<h2>Appeal Review Guidelines</h2>
<p>The Student Appeals Committee will review the appeal for the following elements:</p>

<ul>
<li>Extenuating circumstance during SAP Warning period</li>
<li>Past academic history</li>
<li>Strong study plan</li>
<li>Is the path back to good academic standing possible during the allowed timeframe</li>
</ul>

<h2>Appeal Outcomes</h2>
<p>Student academic progress during the warning period and all supporting documentation will be reviewed by the Student Appeals Committee resulting in one of the following outcomes:</p>

<ul>

<li>Approved Academically: Approved to continue receiving Financial Aid - Financial aid students in Academic Probation status <strong>are not eligible for Title IV funds</strong> unless a student appeal has been approved by the institution. The University will only approve a financial aid appeal if it determines that the student had an extenuating circumstance that occurred and prevented the student from successfully completing the coursework.</li>

<li>Approved Academically: Denied Financial Aid</li>

<li>Denied Academically: Denied for Financial Aid</li>

<li>Rejected: Committee needs additional information and/or documentation before a decision can be reached. </li>
</ul>

<p>Please note, SAP Probation appeals will not be considered by the committee if:</p>

<ul>
<li>The student has a past due balance on their account</li>
<li>The student has a pending Incomplete grade for an term. </li>
<li>The student is missing official transcripts - this is especially important for anyone returning to CSU Global after going to a different school</li>
</ul>

<p>Any student approved academically (and agreeing to continue with classes), will be issued an Academic Plan (SAP Contract) detailing what must be completed in order to get back into Good Academic Standing. This contract will be for either one or two entire trimesters. The contract is meant to help the student avoid SAP Suspension. The contract will be completed by the Office of Student Affairs and emailed to the student within 7 business days of the Committee’s decision. The student must sign the contract and upload it back to their student portal. Once the contract is received and approved, the student will be registered by Student Affairs for their courses.</p>

<p>Students run the risk of going into SAP Suspension status if they break their contract in any way. Students who wish to adjust their contract must work directly with Student Affairs prior to the start of the term and will need to sign and submit a new contract after revisions are made.
</p>


<p>Students who meet the requirements outlined in the SAP contract will return to Good Academic Standing at the end of the trimester. Any student who cannot meet the required standards outlined in the SAP contract will be placed on Academic Suspension.</p>

<p>Students on SAP Probation who have not registered and completed coursework within twelve months will be administratively withdrawn.</p>

<h2>Provost Appeal Process</h2>


<p>Students who appeal their SAP Probation and are denied have the option of filing a Provost Appeal SAP form. The appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.</p>

<p>If a student has exhausted all appeal options may explore the <a href="#">Student Grievance Policy</a>.</p>
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
  name: "SAPProbation",
  components: {
    AdvisorCallToAction,
  },
    mounted() {
    document.title = 'SAP Probation Appeal | CSU Global Appeals Center';
        
    },
};
</script>


