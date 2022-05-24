<template>
  <div class="retroactive-withdrawal appeal section container">
    <div class="row pt-5">
      <div class="clearfix">
      <main id="main-content">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
     
          <div class="basics card">
          <img src="https://images.prismic.io/csug/6070695c-390e-4ae7-9d7b-452c8bf52729_appeals-retroactivewithdrawal-basics-cap.png" class="card-img-top d-none d-md-block" alt="">
        <div class="card-body px-4">


    <h2 class="card-title">Retroactive Withdrawal Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed Retroactive Withdrawal Appeal Form, with a valid appeal factor, submitted before the appeal deadline
    </p>
    <p>
      <strong>How to Start:</strong> Contact your Student Success Counselor, who will discuss the options, and make the correct form available in the Document Center, in the Student Portal
    </p>
    

    <p>
      <strong>Appeal Deadline:</strong> Within 30 days of the end of the term in question, including all supporting documentation
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>Student faced an unexpected and/or extenuating circumstance after the withdrawal deadline during the term.  </li>
      <li>Student can provide documentation of their extenuating circumstance. </li>

    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 3 weeks by Student Appeals Committee
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
          <h1 class="display-2">Retroactive Withdrawal Appeal</h1>
        </div>
        
      <p class="lead">Students may request that grades in a previous term be retroactively removed and replaced with a ‘W’ on their transcript. Students need to have experienced unexpected health and/or personal problems so severe during the term that they could not have been reasonably expected to complete the term satisfactorily.</p>
       


    <h2>Retroactive Withdrawal Request Policy</h2>
 
      <ul>
        
        <li>A retroactive withdrawal is not allowed if student already earned a degree from CSU-Global and the term being requested is prior to the degree conferral</li>
        <li>An approved retroactive withdrawal has no impact on any financial balance owed to the University</li>
        <li>Retroactive withdrawals apply to every course for a particular term and cannot apply to selective courses</li>
        <li>The retroactive withdrawal option is not intended if student simply missed the course withdrawal deadline</li>
        <li>Student can choose to withdraw to preserve their GPA or they can request a Tuition Appeal; but not both</li>
        <li>In order to retroactively withdraw from a course, the student must provide documentation of the extenuating circumstances involved. Documentation should outline a timeline that prevented student from withdrawing by the withdrawal deadline</li>
        <li>ithdrawing (even retroactively) has an impact on Financial Aid and military benefits. In some circumstances, withdrawing may lead to a return of financial aid funds or updates to certifications. Prior to submitting the appeal students should contact <a href="mailto:financialaid@csuglobal.edu">financialaid@csuglobal.edu</a> or <a href="mailto:military.benefits@csuglobal.edu<">military.benefits@csuglobal.edu</a>. </li>


      </ul>

      <p>Students must submit the request, along with supporting documentation from a professional who can attest to the claim of extenuating circumstances, through the Student Portal within 30 days of the end of the term in question.</p>

      <p>Requests are reviewed after the end of the term by the Student Appeals Committee which makes a decision for approval or denial of the request. </p>

      <h2>Appeal Outcomes</h2>

      <p>The appeal and supporting documentation will be reviewed by the Student Appeals Committee resulting in one of the following outcomes:</p>
<ul>
<li>Approved: Student is awarded “WA’s” for all courses in a term.</li>
<li>Denied: Student’s earned grade will stand. </li>
<li>Rejected; Committee needs additional information and/or documentation before a decision can be reached. </li>
</ul>





    <h2>Provost Appeal Process</h2>
    <p>
      If the decision is made to deny the appeal, the student may appeal the decision to the Provost or designee. The appeal, with supporting documentation, must be filed within two (2) weeks of the receipt of the original decision. The Provost or designee may request additional information as determined necessary. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.
    </p>


    <p>
      If a student has exhausted all appeal options may explore the <a href="#">Student Grievance Policy</a>.
    </p>
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
  name: "RetroactiveWithdrawal",
  components: {
    AdvisorCallToAction,
  },
    mounted() {
    document.title = 'Retroactive Withdrawal Appeal | CSU Global Appeals Center';
        
    },
};
</script>



