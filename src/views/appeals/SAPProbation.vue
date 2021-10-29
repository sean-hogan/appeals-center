<template>
  <Navbar />
  <div class="probation section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">SAP Probation Basics</h3>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">SAP Probation Appeal</a>, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>Appeal Deadline:</strong> At the end of each trimester students SAP progress will be reviewed. If it is determined student will progress onto SAP Probation then the student will need to submit an appeal before continuing with courses
    </p>

    
    <p><strong>Appeal Factors:</strong>
    <br /> Provide an explanation regarding the circumstances that:</p>
    <ul>
      
      <li>Delayed successful completion of your coursework.</li>
      <li>How previous circumstances are different now.</li>
      <li>Actions taken during SAP warning toward meeting SAP standards.</li>
      <li>An outline of a specific study plan to resume good academic standing.</li>

    </ul>

    <p>
      <strong>Decision Time Frame:</strong> Appeal is reviewed by the Student Appeals Committee. Once appeal is received then a review will be scheduled for the next available Committee meeting. Committee meets every two weeks. Decision will be delivered to student within one week of Committee meeting
    </p>

    <a class="btn btn-info my-3" href="#" target="_blank">SAP Probation Appeal Form <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">SAP Probation</h1>
        </div>
        


<p class="lead">Students who are not able to meet their SAP Warning Contract, will progress onto SAP Probation.</p>

<h2>SAP Probation Policy</h2>
<p>Students will receive notification of SAP Probation status from the Registrar's Office via email. In addition, the student will have a SAP Probation Hold and a SAP termination hold placed onto their account. Please note, the SAP termination hold is a Financial Aid hold and will be taken off the student's account if they are approved to continue receiving Financial Aid.</p>
<p>All students who are placed on Academic Probation must submit an SAP Probation Appeal form in order to continue taking courses during the Probation period. </p>


<h2>Appeal Review Guidelines</h2>
<p>When reviewing SAP Probation appeals, the Student Appeal Committee will review the appeal looking at the following elements:</p>

<ul>
<li>Extenuating circumstance during SAP Warning period</li>
<li>Past academic history</li>
<li>Strong study plan</li>
<li>Is the path back to good academic standing possible during the allowed timeframe</li>
</ul>

<h2>Appeal Outcomes</h2>
<p>The student's academic progress during the warning period and any supporting documentation will be reviewed by the Student Appeals Committee who will come to one of three possible outcomes:</p>

<ul>

<li>Approved Academically; Approved to continue receiving Financial Aid - Financial aid students in Academic Probation status ARE NOT eligible for Title IV funds unless a student appeal has been approved by the institution. The University will only approve a financial aid appeal if it determines that the student had an extenuating circumstance that occurred and prevented the student from successfully completing the coursework.</li>

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

<p>If the student is approved academically (and agrees to continue with classes), they will be issued an Academic Plan (aka SAP Contract) that will detail what must be completed in order to get back into Good Academic Standing. This contract will be for either one or two whole trimesters. The contract is meant to help the student avoid SAP Suspension. The contract will be completed by the Office of Student Affairs and emailed to the student within 7 business days of the Committee’s decision.  The student must sign the contract and upload it back to their student portal. Once the contract is received and approved, the student will be registered by Student Affairs for their courses.</p>

<p>Students run the risk of going into SAP Suspension status if they break their contract in any way. Students who wish to adjust their contract must work directly with Student Affairs prior to the start of the term. The student will need to sign and submit a new contract after revisions are made.
</p>


<p>If a student meets the requirements outlined in the SAP contract then they will return to Good Academic Standing at the end of the trimester. If a student cannot meet the required standards outlined in the SAP contract then they will be placed on Academic Suspension.</p>

<p>Students on SAP Probation who have not registered and completed coursework within twelve months will be administratively withdrawn.</p>

<h2>Provost Appeal Process</h2>


<p>Students who appeal their SAP Probation and are denied have the option of filing a Provost Appeal SAP Form. The appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.</p>

<p>If a student has exhausted all appeal options may explore the <a href="#">Student Grievance Policy</a>.</p>

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
  name: "SAPProbation",
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



