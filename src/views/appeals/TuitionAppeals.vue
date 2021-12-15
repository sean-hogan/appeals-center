<template>
  <Navbar />
  <div class="tuition-appeal section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h2 class="card-title py-3">Tuition Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">Tuition Appeal Form</a>, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>Appeal Deadline:</strong> Filed within 30 days of the end of the term in question, including all supporting documentation
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>
        Documented extenuating circumstances
      </li>
      <li>
        Dates of the occurence as they relate to the term
      </li>
      <li>
        Confirmation that the student could not reasonably have been expected to be able to complete the term
      </li>
    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 3 weeks by Student Appeals Committee
    </p>

    <p>
      <strong>Provost Appeal:</strong> Must Appeal to Provost within 2
      weeks after decision.
    </p>



    <a class="btn btn-info my-3" href="#" target="_blank">Tuition Appeal Form <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Tuition Appeals</h1>
        </div>
        
      <p class="lead">The Student Appeal Committee will consider requests for adjustment to tuition and fee charges when a student can document extenuating circumstances. Approved tuition appeals post a tuition waiver to student accounts; no refunds will be issued to students directly unless withdrawn from the university.</p>
       


    <h2>Tuition Appeal Policy</h2>
    <p>
     The Student Appeal Committee will consider requests for adjustment to tuition charges when students can document extenuating circumstances. Situations that are NOT considered extenuating include, but are not limited to: predictable events such as a wedding, vacation, shifts in work assignment, previously scheduled surgery, or other events of which the student is aware and can schedule adjustments prior to the term drop deadline.
    </p>



<p>Appeals must be made no later than thirty (30) days past the end of the eight-week term in question. Students may obtain an appeal form by contacting their Student Success Counselor and must submit the completed form through the document center of the Student Portal. The Student Appeal Committee meets every two weeks to review appeals.</p>

<p>No adjustment or refunds of tuition will be made to students who are suspended, dismissed, or expelled for a breach of discipline. Approved tuition appeals post a tuition waiver to student accounts; no refunds will be issued to students directly unless withdrawn from the university. Students should work with their Student Success Counselor and Student Financial Specialist to discuss impacts of any approved tuition waiver.</p>

<p>Tuition waivers are first applied to any past due tuition balances. Waivers will be applied to the next registered term (after withdrawal deadline) for students who do not have a balance.</p>

<p>Military students, their spouses, or dependents who are considering withdrawing from current coursework due to deployment, should first discuss all options with their faculty and advisor. If it is determined that withdrawal is the best option, students should file a tuition appeal before requesting a refund. Each tuition appeal will be reviewed and a decision made to ensure that students will not be unjustly penalized financially. Please contact <a href="mailto:military.benefits@csuglobal.edu">military.benefits@csuglobal.edu</a> with any questions.</p>



     
        
    <h2>Appeal Review Guidelines</h2>
    <p>
      When reviewing tuition appeals, the Student Appeal Committee looks for supporting documentation that verifies the reasons for appeal as listed by the student. The Committee requires verification documentation of three (3) key elements:
    </p>

    <ul>
      <li>
        Extenuating circumstance
      </li>
      <li>
        Dates of that occurrence as they relate to the term in question
      </li>
      <li>Confirmation that the student could not reasonably have been expected to be able to complete the term</li>
    </ul>

    <h2>Provost Appeal Process</h2>
    <p>
   If the decision is made to deny the appeal, the student may appeal the decision to the Provost or designee. The appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.
   </p>

    <p>
    If a student has exhausted all appeal options may explore the <a href="">Student Grievance Policy</a>. 
    </p>
    
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
  name: "TuitionAppeal",
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



