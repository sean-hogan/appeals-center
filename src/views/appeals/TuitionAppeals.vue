<template>
  <Navbar />
  <div class="tuition-appeal section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">Tuition Appeal Basics</h3>

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
      <strong>Decision Time Frame:</strong> Next available Appeals Committee meeting
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
        
      <p class="lead"> The Student Affairs Committee will consider requests for adjustment to tuition and fee charges when a student can document extenuating circumstances. Approved tuition appeals post a tuition waiver to the student's account; no refunds will be issued to the student directly unless withdrawn from the university. </p>
       


    <h4>Tuition Appeal Policy</h4>
    <p>
      The Student Appeals Committee will consider requests for adjustment to tuition and fee charges when a student can document extenuating circumstances. Situations that are NOT considered extenuating include, but are not limited to: predictable events such as a wedding, vacation, shifts in work assignment, previously scheduled surgery, or other events of which the student is aware and can make appropriate decisions and schedule adjustments prior to the term drop deadline. 
    </p>

    <p>
      Appeals must be made no later than thirty (30) days past the end of the eight-week term in question. Students may obtain an appeal form by contacting their advisor and must submit the completed form through the document center of the Student Portal. 

    </p>

    <p>
     No adjustment or refunds of tuition and fees will be made to a student who is suspended, dismissed, or expelled for a breach of discipline. Approved tuition appeals post a tuition waiver to the student's account; no refunds will be issued to the student directly unless withdrawn from the university. Tuition waivers must be added to a student's financial aid package which could impact current or future award amounts. The amount of the tuition waiver will be prorated based on the student's participation during the term.
    </p>


    <p>
     Military students, their spouse, or dependents who are considering withdrawing from current coursework due to deployment, should first discuss all options with their faculty and advisor. If it is determined that withdrawal is the best option, students should file a tuition appeal before requesting a refund. Each tuition appeal will be reviewed and a decision made to ensure that students will not be unjustly penalized financially. Please contact <a href="mailto:StudentAccounts@CSUGlobal.edu">StudentAccounts@CSUGlobal.edu</a> with any questions.
    </p>

     
        
    <h4>Appeal Review Guidelines</h4>
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

    <h4>Provost Appeal Process</h4>
    <p>
      Suspendisse et sodales est. Etiam sed nisl tellus. Vivamus id vestibulum mauris, consequat volutpat justo. Curabitur volutpat nibh eu purus auctor ultricies. Morbi a libero consequat velit dictum egestas. Nunc neque libero, dictum nec dui a, fringilla luctus tellus. Praesent elementum quis neque et dictum. Fusce non iaculis leo. In commodo semper urna, a suscipit neque. Donec ex sapien, lobortis ullamcorper turpis vitae, sagittis eleifend arcu.
    </p>

    <ul>
      <li>
        Aenean ullamcorper auctor porta. Mauris posuere ultricies accumsan
      </li>
      <li>
        In a diam vel leo porta mattis
      </li>
      <li>Phasellus vitae massa et ligula facilisis scelerisque</li>
    </ul>

    <p>
      No later than three (3) weeks from the filing of the appeal with the
      Provost or his/her designee, the student will be notified of the final
      decision.
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

h4 {
  margin-top:2rem;
}

h4:after {
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



