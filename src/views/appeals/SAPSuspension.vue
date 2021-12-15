<template>
  <Navbar />
  <div class="suspension section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">Suspension Basics</h3>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">Suspension Appeal form</a>, with a valid appeal factor
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




    <a class="btn btn-info my-3" href="#" target="_blank">Suspension Exception Form <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Suspension Request</h1>
        </div>
        


<p class="lead">Every institution of higher education that receives Federal Title IV Funds is required by the U.S.Department of Education to define and enforce standards of satisfactory academic progress. Satisfactory Academic Progress (SAP) measures a student’s performance in the following three areas: cumulative completion rate, cumulative grade point average (GPA), and maximum time frame. The purpose of this policy is to inform students of the expectations required of them to make reasonable academic progress in order to earn a degree. Students who fail to clear SAP Probation status will be placed on Academic Suspension. Students placed on Academic Suspension retain limited access to their Student Portal for account information and student services.</p>

<p>Students will receive notification of SAP Suspension status from the Registrar's Office via email. In addition, students will have a SAP Suspension hold placed onto their account. All students who are placed on Academic Suspension must submit an SAP Suspension Appeal form. Student Success Counselors are able to add the Suspension Appeal form to the student's portal upon request.</p>

<p>Supporting documentation is not necessarily required for a SAP Suspension Appeal, however, it is highly encouraged to further consideration of the appeal case. SAP Suspension Appeals will only be considered if all outstanding account balances have been paid and all official transcripts are on file. SAP Suspension appeals are reviewed by the Student Appeals committee.</p>

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
<li>Denied Academically; Students are not able to continue taking courses with CSU-Global</li>
<li>Rejected; Committee needs additional information and/or documentation before a decision can be reached. </li>
</ul>

<p>Please note, SAP Suspension appeals will not be considered by the committee if:</p>

<ul>
<li>The student has a past due balance on their account</li>
<li>The student has a pending Incomplete grade for an term. </li>
<li>The student is missing official transcripts - this is especially important for anyone returning to CSU-Global after going to a different school</li>
</ul>

<p>Students approved academically (and agreeing to continue with classes) are issued an Academic Plan (aka SAP Contract) detailing what must be completed in order to get back into Good Academic Standing. This contract covers either one or two entire trimesters. The contract is completed by the Office of Student Affairs and emailed to the student within 7 business days of the Committee’s decision. The student must sign the contract and upload it back to their student portal. Once the contract is received and approved, the student is registered by Student Affairs for their courses.</p>

<p>Students in SAP Suspension are never eligible for Financial Aid and must use alternative payment options until they return to good academic standing.</p>

<p>SAP Suspension is the final attempt students have to get back into good academic standing. Students not able to meet their SAP contract will not be allowed to continue with CSU Global.</p>

<h2>Provost Appeal Process</h2>


<p>Students who appeal their SAP Suspension and are denied have the option of filing a Provost Appeal SAP Form. appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, student will be notified of the final decision.</p>

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
  name: "SAPSuspension",
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



