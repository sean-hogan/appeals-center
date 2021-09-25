<template>
  <Navbar />
  <!--<PageBanner title="Grade Appeals" />-->
  <div class="grade-appeal section container">
    <div class="row pt-5">
      <div class="clearfix">

      <div class="col-sm-5 float-sm-end mb-3 ms-sm-4">
        
      <div class="card px-2">
        <div class="card-body">


    <h3 class="card-title py-3">Grade Appeal Basics</h3>

    <p>
      <strong>What You'll Need:</strong> A completed <a href="">Grade Appeal Form</a>, with a valid appeal factor, submitted before the appeal deadline
    </p>

    <p>
      <strong>Appeal Deadline:</strong> 3 weeks after the final grade is recorded, including all supporting documentation, such as assignments and communications
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
        A grading decision was based on a substantial, unreasonable, or
        unannounced departure from the course objectives and assignments
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
        
      <p class="lead"> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
       


    <h4>Grade Appeal Policy</h4>
    <p>
      Each CSU Global course clearly defines the instructional objectives of the
      course at the beginning of each term and provides guidelines for
      evaluating student achievement in a manner consistent with the stated
      objectives. Students are responsible for maintaining standards of academic
      performance established for each course in which they are enrolled.
      Instructors are responsible for determining and assigning final course
      grades. Course assignments, discussions, and other graded materials used
      when evaluating a student's achievement will be available to the student
      for inspection and discussion.
    </p>

    <p>
      Prior to considering a grade appeal, students are expected to discuss
      course-related questions or concerns with their instructor directly so
      that the instructor has the opportunity to work with the student to seek
      resolution. Students are also expected to contact their student success
      counselor as soon as questions or concerns arise so that administration
      has an opportunity to help facilitate immediate resolution prior to the
      end of the course.
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
        

    <p>
      Appeals which do not demonstrate that grading was made on the basis of one
      of these conditions will be dismissed. The student must submit the grade
      appeal request, including all supporting documentation, within three (3)
      weeks after the final grade is recorded. Appeal requests are submitted in
      the Student Portal. Grades shall be considered final if no appeal is filed
      within this time.
    </p>

     
        
    <h4>Grade Appeal Process</h4>
    <p>
      Upon receiving a grade appeal request and supporting documentation, the
      Office of Student Affairs will forward the appeal to the Program Director
      (or designee) who oversees the faculty member. The Program Director will
      make a determination and the student will be notified of the determination
      within two (2) weeks of appeal’s initiation. Grade appeal determinations
      will include one of the following recommended actions:
    </p>

    <ul>
      <li>
        Lowering the original grade(s) in accordance with the grading review.
      </li>
      <li>
        Confirming and upholding the original grade(s) from the instructor.
      </li>
      <li>Raising original grade(s) in accordance with the grading review.</li>
    </ul>

    <h4>Provost Appeal Process</h4>
    <p>
      If the decision is made to deny the appeal and uphold the original grade,
      the student may appeal the decision to the Provost or designee, who will
      appoint a review panel consisting of other faculty and Program Director(s)
      not involved in the original appeal. The appeal, with supporting
      documentation, must be filed within two (2) weeks of the receipt of the
      original decision. The review panel may request additional information as
      determined necessary. The panel will review the submitted documentation
      and recommend one of the following actions:
    </p>

    <ul>
      <li>
        Lowering the original grade(s) in accordance with the grading review.
      </li>
      <li>
        Confirming and upholding the original grade(s) from the instructor.
      </li>
      <li>Raising original grade(s) in accordance with the grading review.</li>
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



