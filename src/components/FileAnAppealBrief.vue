<template>
  <div class="file-an-appeal section container anchor-offset" id="file-an-appeal">
    <div class="row justify-content-center">
      <div class="col-sm-8">


      <div class="text-center mb-3"><h2>File An Appeal</h2></div>
        <p class="lead">
          Students are strongly encouraged to work with their Student Success
          Counselors to complete the forms before submitting. Incomplete forms will
          be rejected.
        </p>
      </div><!--end col-->

      <div class="col-sm-10 mt-3">

        
        <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <img src="../assets/tuition.svg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-10">
            <div class="card-body">
                    <h5 class="card-title">Tuition Appeal</h5>
                    <p class="card-text">
                Tuition appeals are requests for an adjustment to tuition and fee charges when a student can document extenuating circumstances.
                    </p> 
                    <p class="card-text">Situations that are <u>not</u> considered extenuating include, but are not limited to predictable events such as: </p>
                      <ul class="mb-4">
                        <li>a wedding</li>
                          <li>vacation</li>
                          <li>shift in work assignment</li>
                          <li>previously scheduled surgery</li>
                          <li>or other events of which the student is aware and can schedule adjustments prior to the term drop deadline.</li>
                          </ul>
                

                    <p class="card-text">
                      <router-link class="btn btn-outline-secondary" to="/appeals/tuition-appeals">Start Tuition Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                    </p>              
              </div>
            </div>
          </div>
        </div><!--end card-->

        <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <img src="../assets/grade.svg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title">Grade Appeal</h5>
                <p class="card-text">Grade appeals are available when students feel their assignments were not graded according to the grading rubric.
                  </p><p class="card-text">Prior to considering a grade appeal, students should:</p>
                  <ul class="mb-4">
                  <li> discuss course-related questions or concerns with their instructor directly so that the instructor has the opportunity to work with the student to seek resolution</li>
                  <li> contact their student success counselor as soon as questions or concerns arise so that administration has an opportunity to help facilitate immediate resolution prior to the end of the course</li>
                  </ul>

                <p class="card-text">
                  <router-link class="btn btn-outline-secondary" to="/appeals/grade-appeals">Start Grade Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                </p>
              </div>
            </div>
          </div>
        </div><!--end card-->

        <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <div class="align-middle">

              <img src="../assets/sap.svg" class="img-fluid rounded-start" alt="">
              </div>
            </div>
            <div class="col-md-10">
              <div class="card-body">
                      <h5 class="card-title">SAP (Satisfactory Academic Progress) Probation Appeal</h5>
                      <p class="card-text">
                        Students will be placed on SAP Probation if they fail to meet the minimum SAP standards after the SAP Warning trimester. </p><p class="card-text">SAP Probation status is noted on the transcript until the student returns to Good Academic Standing. Students on SAP Probation must submit and have an appeal approved to continue with courses. </p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/sap-probation">Start SAP Probation Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                      </p>                  
              </div>
            </div>
          </div>
        </div><!--end card-->

          <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <div class="align-middle">

              <img src="../assets/hello7.svg" class="img-fluid rounded-start" alt="">
              </div>
            </div>
            <div class="col-md-10">
              <div class="card-body">
                      <h5 class="card-title">Financial Aid Reinstatement Appeal</h5>
                      <p class="card-text">
                        Students on SAP Probation are ineligible to receive financial aid. Students who can provide documentation demonstrating they faced an unexpected obstacle during their SAP Probation term may file an appeal to have financial aid reinstated. </p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/sap-financial-aid">Learn More <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                      </p>                  
              </div>
            </div>
          </div>
        </div><!--end card-->

          <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <div class="align-middle">

              <img src="../assets/hello8.svg" class="img-fluid rounded-start" alt="">
              </div>
            </div>
            <div class="col-md-10">
              <div class="card-body">
                      <h5 class="card-title">SAP Suspension Request</h5>
                      <p class="card-text">
                        Students on SAP Suspension must submit and have a request approved to continue with courses. </p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/sap-suspension">Start SAP Suspension Request <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                      </p>                  
              </div>
            </div>
          </div>
        </div><!--end card-->

        <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <img src="../assets/retro.svg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                      <h5 class="card-title">Retroactive Withdrawal Request</h5>
                      <p class="card-text"> 
                       Students are expected to follow all term deadlines. 
                      </p>
                      <p class="card-text"> 
                       In extenuating circumstances, students who encounter an unexpected obstacle after the withdrawal deadline of a term can appeal to earn a “WA” for courses in that term as opposed to their earned letter grade. 
                      </p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/retroactive-withdrawal">Start Retroactive Withdrawal Request<i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                      </p>
              </div>
            </div>
          </div>
        </div><!--end card-->


        <!--card--> 
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <img src="../assets/provost.svg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                      <h5 class="card-title">Provost Appeal</h5>
                      <p class="card-text">
                  The Provost Appeal can review the decision of the appeals committee or other department in order to ensure those decisions are made in accordance with university policy.
                  </p>

                  <p class="card-text">
                  The Provost Appeal is not meant to replace determinations of the appeals committee or other departments, but affirm that student rights to due process were properly conducted.
                  </p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/provost-appeals">Start Provost Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                      </p>
              </div>
            </div>
          </div>
        </div><!--end card-->
        


    </div> <!--end col-->
  </div><!--end row-->
  </div><!-- end contain-->
  <!--End banner-->
</template>

<script>
export default {
  name: "FileAnAppealBrief",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

//yo-ho-ho
.anchor-offset { 
  scroll-margin-top: 100px
}
</style>
