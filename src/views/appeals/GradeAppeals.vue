<template>
  <Navbar />
  <!--<PageBanner title="Grade Appeals" />-->
  <div class="grade-appeal section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h2 class="card-title py-3">Grade Appeal Basics</h2>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="#">Grade Appeal Form</a>, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>Appeal Deadline:</strong> 30 days after the final course grade is recorded, including all supporting documentation, such as assignments and communications. Documentation is not required, however it is recommended that student provide any documentation that is referred to in appeal
    </p>

    
    <p><strong>Appeal Factors:</strong></p>
    <ul>
      <li>
        A grading decision was made on some basis other than performance and
        other than as a penalty for academic dishonesty.
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
      <strong>Provost Appeal:</strong> Must Appeal to Provost within 2
      weeks after decision.
    </p>



    <a class="btn btn-info my-3" href="#" target="_blank">Grade Appeal Form <span class="bi bi-arrow-right"></span></a>
        </div><!--end card body -->

      </div><!--end card-->
      </div><!--end col-->



        <div class="header mb-4">
          <h1 class="display-2">Grade Appeals</h1>
        </div>
        
      <p class="lead">When a student receives a grade on an assignment that they wish to challenge, then a grade appeal can be pursued. Successful appeals will provide the support that the instructor did not follow the grading rubric or that their work was graded with bias.</p>
       


    <h2>Grade Appeal Policy</h2>
    <p class="lead">
      Prior to considering a grade appeal, students are expected to discuss course-related questions or concerns with their instructor directly so that the instructor has the opportunity to work with the student to seek resolution. Students are also expected to contact their student success counselor as soon as questions or concerns arise so that administration has an opportunity to help facilitate immediate resolution prior to the end of the course.
    </p>

    <p>
      If direct communication with faculty and staff does not bring satisfactory
      resolution and the student feels that institutional standards and policies
      have not been upheld, an appeal of the instructor's grading decision may
      be made.
      <strong
        >The burden of proof rests with the student to demonstrate the grade
        assigned for the course was made on the basis of any of the following
        conditions:</strong
      >
    </p>

    <ul>
      <li>
        A grading decision was made on some basis other than performance and
        other than as a penalty for academic dishonesty.
      </li>
      <li>
        A grading decision was based on unreasonably different standards from
        those applied to other students.
      </li>
      <li>
        A grading decision was based on a substantial, unreasonable, or
        unannounced departure from the course objectives and assignments.
      </li>
    </ul>
        

    <p>The student must submit the grade appeal request, including all supporting documentation, within 30 days after the final grade is recorded. Appeal requests are submitted in the Student Portal.</p> 

     
        
    <h2>Appeal Outcomes</h2>
    <p>Grade appeal determinations will include one of the following recommended actions:</p>

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
    <p>Students who submit the Grade appeal and are denied can file a Provost Appeal Form. The provost appeal must be submitted within 2 weeks of the original decision. The provost may request additional documentation from the student. No later than three (3) weeks from the filing of the appeal with the Provost or his/her designee, the student will be notified of the final decision.</p>

    <p>
      If a student has exhausted all appeal options may explore the <a href="#">Student Grievance Policy</a>.
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
//import PageBanner from "@/components/PageBanner.vue";
import AdvisorCallToAction from "@/components/AdvisorCallToAction.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "GradeAppeal",
  components: {
    Navbar,
    //PageBanner,
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



