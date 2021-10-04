<template>
  <Navbar />
  <div class="retroactive-withdrawal section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">Retroactive Withdrawal Basics</h3>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">Retroactive Withdrawal Request Form</a>, with a valid appeal factor, submitted before the appeal deadline
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
      <strong>Decision Time Frame:</strong> Requests are reviewed after the end of the term by the Student Appeals Committee
    </p>

    <p>
      <strong>Provost Appeal:</strong> Must Appeal to Provost within 2
      weeks after decision.
    </p>



    <a class="btn btn-info my-3" href="#" target="_blank">Retroactive Withdrawal Request Form <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Retroactive Withdrawal</h1>
        </div>
        
      <p class="lead">Students may request that all grades in a previous term be retroactively removed and replaced with W grades on their transcript. Students need to have experienced, during that term, unexpected health and/or personal problems so severe that they could not have been reasonably expected to complete the term satisfactorily.</p>
       


    <h4>Tuition Appeal Policy</h4>
    <p>
       In general:
    </p>
      <ul>
        <li>
          A retroactive withdrawal is not allowed if student already earned a degree from CSU-Global and the term being requested is prior to the degree conferral
        </li>
        <li>
          An approved retroactive withdrawal has no impact on any financial balance owed to the University
        </li>
        <li>
          Retroactive withdrawals apply to every course for a particular term and cannot apply to selective courses
        </li>
        <li>
          The retroactive withdrawal option is not intended if student simply missed the course withdrawal deadline
        </li>
        <li>
          Student can choose to withdraw to preserve their GPA or they can request a Tuition Appeal; but not both
        </li>
        <li>
          In order to retroactively withdraw from a course, the student must provide documentation of the extenuating circumstances involved. Documentation should outline a timeline that prevented student from withdrawing by the withdrawal deadline
        </li>
        <li>
          Withdrawing (even retroactively) has an impact on Financial Aid. In some circumstances, withdrawing may lead to a return of financial aid funds
        </li>
      </ul>

    <p>
       To request a retroactive withdrawal:
    </p>

    <p>
      Students must submit the request, along with supporting documentation from a professional who can attest to the claim of extenuating circumstances, through the Student Portal within 30 days of the end of the term in question.
    </p>

    <p>
      Requests are reviewed after the end of the term by the Student Appeals Committee which makes a decision for approval or denial of the request.
    </p>



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
  name: "RetroactiveWithdrawal",
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



