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
              <img src="../assets/grade.svg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title">Grade Appeal</h5>
                <p class="card-text">Each CSU Global course clearly defines the instructional objectives
            of the course at the beginning of each term and provides guidelines
            for evaluating student achievement in a manner consistent with the
            stated objectives. Students are responsible for maintaining
            standards of academic performance established for each course in
            which they are enrolled.</p>

                <p class="card-text">
                  <router-link class="btn btn-outline-secondary" to="/appeals/grade-appeals">Start A Grade Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
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
                      <h5 class="card-title">Satisfactory Academic Progress</h5>
                      <p class="card-text">
                  Each institution of higher education that receives Federal Title IV
                  Funds is required by the U.S.Department of Education to define and
                  enforce standards of satisfactory academic progress. Satisfactory
                  Academic Progress measures a student’s performance in the following
                  three areas: cumulative completion rate, cumulative grade point
                  average (GPA), and maximum time frame. The purpose of this policy is
                  to inform students of the expectations required of them to make
                  reasonable academic progress in order to earn a degree.</p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/satisfactory-academic-progress">Choose SAP Appeal Type <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
                      </p>                  
              </div>
            </div>
          </div>
        </div><!--end card-->

        <!--card-->
        <div class="card mb-3">
          <div class="row g-0 d-flex flex-wrap align-items-center">
            <div class="col-md-2 px-3">
              <img src="../assets/tuition.svg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-10">
            <div class="card-body">
                    <h5 class="card-title">Tuition</h5>
                    <p class="card-text">
                The Student Affairs Committee will consider requests for adjustment
                to tuition and fee charges when a student can document extenuating
                circumstances. Situations that are NOT considered extenuating
                include, but are not limited to: predictable events such as a
                wedding, vacation, shifts in work assignment, previously scheduled
                surgery, or other events of which the student is aware and can make
                appropriate decisions and schedule adjustments prior to the term
                drop deadline.
                </p>

                    <p class="card-text">
                      <router-link class="btn btn-outline-secondary" to="/appeals/tuition-appeals">Start A Tuition Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
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
                      <h5 class="card-title">Provost Appeals</h5>
                      <p class="card-text">
                  The Provost Appeal has been established to review the decision of
                  the appeals committee or departments in order to ensure that the
                  decision was made in accordance with university policy and that the
                  decision was not arbitrary, capricious, or otherwise not based on
                  the available facts.</p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/provost-appeals">Start A Provost Appeal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
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
                      <h5 class="card-title">Retroactive Withdrawal</h5>
                      <p class="card-text"> Students may request that all grades in a previous term be
                  retroactively removed and replaced with W grades on their
                  transcript. Students need to have experienced, during that term,
                  unexpected health and/or personal problems so severe that they could
                  not have been reasonably expected to complete the term
                  satisfactorily.</p>

                      <p class="card-text">
                        <router-link class="btn btn-outline-secondary" to="/appeals/retroactive-withdrawal">Start Retroactive Withdrawal <i class="bi bi-arrow-right-circle ms-2"></i></router-link>
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
