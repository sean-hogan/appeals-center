<template>
  <div class="provost-appeals appeal section container">
    <div class="row pt-5">
      <div class="clearfix">
      <main id="main-content">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="basics card">
           <img src="https://images.prismic.io/csug/33872061-b3c7-41ff-9526-05ac39335687_appeals-provost-basics-cap.png" class="card-img-top d-none d-md-block" alt="">
        <div class="card-body px-4">


    <h2 class="card-title">Provost Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed Provost Appeal Form, with a valid appeal factor, submitted before the appeal deadline
    </p>
     <p>
      <strong>How to Start:</strong> Contact your Student Success Counselor, who will discuss the options, and make the correct form available in the Document Center, in the Student Portal
    </p>

    <p>
      <strong>Appeal Deadline:</strong> Within 21 days of the department or committee decision
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>
        Decision made by department or committee does or does not follow due process or university policy
      </li>
      <li>
        Decision was or was not arbitrary, capricious, or otherwaise not based on available facts
      </li>
    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 21 days after receipt of document
    </p>



    <a class="d-inline-flex align-items-center text-decoration-none ms-3 fs-5" href="https://portal.csuglobal.edu/portal/student#sidebar-advisor"><i class="bi bi-arrow-right-circle-fill fs-3 me-2"></i> Contact Your Student Success Counselor</a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Provost Appeal</h1>
        </div>
        
      <p class="lead">The Provost Appeal has been established to review the decision of the Appeals Committee or departments in order to ensure that the decision was made in accordance with university policy and that the decision was not arbitrary, capricious, or otherwise not based on the available facts.</p>
      
      <h2>Provost Appeal Policy</h2>
      
    <p>
      The Provost Appeal is not meant to replace the decision of the Appeals Committee or department but affirm that the student’s right to due process was properly conducted. These areas are subject to Requests for Review that include but are not limited to: 
    </p>

    <ul>
        <li>
            Admissions Appeals 
        </li>
        <li>
            Academic Probation Appeals 
        </li>
        <li>
            Programmatic Substitutions 
        </li>
        <li>
            Code of Conduct Appeals 
        </li>
        <li>
            Tuition Appeals 
        </li>
        <li>
            Student Affairs Appeals 
        </li>
        <li>
            Registration for fourth course attempt 
        </li>
    </ul>

    <p>
   Students can reach out to their Student Success Counselor with questions about documents. 
    </p>

<h2>Appeal Outcomes</h2>

    <p>The Provost Appeals process will  result in one of the following decisions: </p>
    <ul>
        <li>Deny the appeal  </li>
        <li>Approve the appeal on the basis that there is evidence that the decision was not made in accordance with  university policy. The Provost may remand the matter back to the appropriate Appeals Committee for further  review.</li> 
        <li>Approve the appeal on the basis that the decision was not based on all the available facts relevant to the matter  or that new and significant information has become available since the Appeals Committee review. The Provost  may remand the matter back to the appropriate Appeals Committee for further review. </li>
        <li>Reduce the sanction on the basis that the sanction or remedy imposed is not in proportion to the nature and  seriousness of the matter. </li>
        <li>Approve the appeal on the basis that there is evidence that the decision was prejudicial, arbitrary or capricious.</li>
        <li>Approve the appeal of the fourth course attempt based on a review of the facts. </li>
        <li>Reject the appeal based on missing information, incomplete forms, or improper process.  </li>
    </ul>
    <p>If a student has exhausted all appeal options may explore the <a href="">Student Grievance Policy</a>.</p>
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
  name: "ProvostAppeals",
  components: {
    AdvisorCallToAction,
  },
    mounted() {
    document.title = 'Provost Appeal | CSU Global Appeals Center';
        
    },
};
</script>




