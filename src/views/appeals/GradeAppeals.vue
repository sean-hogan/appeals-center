<template>
  <div class="grade-appeal appeal section container">
    <div class="row pt-5">
      <div class="clearfix">

      <main id="main-content">
      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">

      <div class="basics card">
          <img src="https://images.prismic.io/csug/7984d768-31f5-4d66-a166-958ce6d2b310_appeals-grade-basics-cap.png" class="card-img-top d-none d-md-block" alt="">
        <div class="card-body px-4">


    <h2 class="card-title">Grade Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed Grade Appeal Form, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>How to Start:</strong> Contact your Student Success Counselor, who will discuss the options, and make the correct form available in the Document Center, in the Student Portal
    </p>
    
    <p>
      <strong>Appeal Deadline:</strong> Within 30 days of the end of the term in question, including all supporting documentation
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>
        A grading decision was made on some basis other than performance and penalties for academic dishonesty.

      </li>
      <li>
        A grading decision was based on unreasonably different standards from
        those applied to other students.
      </li>
      <li>
        A grading decision was based on a substantial, unreasonable, or unannounced departure from the course objectives and assignments. Grading rubric was not applied accurately. 
      </li>
    </ul>

    <p>
      <strong>Decision Time Frame:</strong> 2 weeks by Program Director.
    </p>

    <p>
      <strong>Provost Appeal:</strong> Must appeal to Provost within 2
      weeks after decision.
    </p>



    <a class="d-inline-flex align-items-center text-decoration-none ms-3 fs-5" href="https://portal.csuglobal.edu/portal/student#sidebar-advisor"><i class="bi bi-arrow-right-circle-fill fs-3 me-2"></i> Contact Your Student Success Counselor</a>


        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Grade Appeal</h1>
        </div>
        
      <p class="lead">Students who seek to challenge a grade received on an assignment may file a grade appeal. Successful appeals will provide documentation and support that the instructor did not follow the grading rubric or that their work was graded with bias.</p>
       


    <h2>Grade Appeal Policy</h2>
    <p class="lead">
      Prior to considering a grade appeal, students are expected to discuss course-related questions or concerns with their instructor directly so that the instructor has the opportunity to work with the student to seek resolution. Students are also expected to contact their Student Success Counselor as soon as questions or concerns arise so that administration has an opportunity to help facilitate immediate resolution prior to the end of the course.
    </p>

    <p>
      If direct communication with faculty and staff does not bring satisfactory resolution and the student feels that institutional standards and policies have not been upheld, an appeal of the instructor's grading decision may be made. <strong>The burden of proof rests with the student to demonstrate the grade
        assigned for the course was made on the basis of any of the following
        conditions:</strong>
    </p>

    <ul>
      <li>
        A grading decision was made on some basis other than performance and other than as a penalty for academic dishonesty.
      </li>
      <li>
        A grading decision was based on unreasonably different standards from those applied to other students.
      </li>
      <li>
        A grading decision was based on a substantial, unreasonable, or unannounced departure from the course objectives and assignments.
      </li>
    </ul>
        

    <p>The student must submit the grade appeal request, including all supporting documentation, within 30 days after the final grade is recorded. Appeal requests are submitted in the Student Portal.</p> 

     
        
    <h2>Appeal Outcomes</h2>
    <p>Grade appeal determinations will include one of the following actions:</p>

    <ul>
      <li>
        Lowering the original grade(s) in accordance with the grading review.
      </li>
      <li>
        Confirming and upholding the original grade(s) from the instructor.
      </li>
      <li>Raising original grade(s) in accordance with the grading review.</li>
    </ul>

    <h2>Provost Appeal Process</h2>
    <p>Students who submit the Grade Appeal and are denied can file a Provost Appeal Form. The Provost Appeal must be submitted within 2 weeks of the original decision. The Provost may request additional documentation from the student. The student will be notified of the final decision no later than three (3) weeks from the filing of the appeal with the Provost or his/her designee.</p>

    <p>
      Students who have exhausted all appeal options may explore the a <a href="https://csuglobal.edu/student-policies/student-rights-policies">Student Grievance Policy.</a>.
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
  name: "GradeAppeal",
  components: {
    AdvisorCallToAction,
  },
    mounted() {
    document.title = 'Grade Appeal | CSU Global Appeals Center';
        
    },
};
</script>




