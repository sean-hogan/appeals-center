<template>
  <Navbar />
  <PageBanner title="Violations of Student Code of Conduct" bc="bc | here | here" />


  <div class="violations-student-code section container">
  

    <p class="lead">
      Disciplinary proceedings may be instituted against a student charged with
      a violation of federal, state, or local criminal law and this Student
      Conduct Code without regard to the settlement of civil or criminal
      litigation in court or criminal arrest and/or prosecution. Proceedings
      under the Student Conduct Code may be carried out prior to, simultaneously
      with, or following off-campus civil or criminal proceedings at the
      discretion of the Provost or his/her designee. Determinations made or
      sanctions imposed under this Student Conduct Code shall not be subject to
      change because criminal or civil charges arising out of the same facts
      giving rise to violations of university rules were dismissed, reduced, or
      resolved in favor of or against the criminal or civil law defendant.
    </p>

    <h4>Violations & Appeals</h4>
    <p>
      Students who are found to be in violation of the code of conduct may be
      subject to disciplinary action including, but not limited to: loss of
      credit, warning, degree revocation, probation, suspension, revocation of
      admission or permanent expulsion. Reports of violation of the code of
      conduct may be submitted, by any member of the CSU-Global community, to
      Student Affairs. Those submitting a report should supply documentation
      demonstrating or describing the violation. Reports of misconduct will be
      investigated by Student Affairs or by a panel appointed by the Provost.
      Investigations must be completed within three (3) weeks of receipt of the
      report. After review, a determination of action will be made and the
      student will be notified within one (1) week of the decision for action.
    </p>

    <p>
      Students may appeal the decision by submitting their request and
      documentation to the Provost within two (2) weeks of receipt of the
      decision for action. No later than three (3) weeks receipt of the appeal,
      the Provost or his/her designee will notify the student of the final
      decision of the appeal.
    </p>

    <h4>Hearing and Appeal Process</h4>

    <p>
      Disciplinary proceedings may be instituted against a student charged with
      a violation of any expectations or conduct set forth above. Disciplinary
      proceedings under the Student Conduct Code may be carried out independent
      of, prior to, simultaneously with or following separate civil or criminal
      proceedings at the discretion of the Provost or his/her designee.
      Determinations regarding violation of the Student Conduct Code or
      sanctions imposed shall not be subject to change because criminal or civil
      proceedings arising out of the same facts giving rise to disciplinary
      action were dismissed, reduced, or resolved in favor of the student.
    </p>
    <p>
      If a Code of Conduct Hearing is needed, Student Affairs will set a meeting
      of the Disciplinary Panel.
    </p>

    <ul>
      <li>
        Student Affairs will gather all necessary information and documentation
        for the Panel’s review.
      </li>
      <li>
        Student Affairs will send the Panel’s recommendation for the Provost for
        approval.
      </li>
      <li>
        Students who are found to be in violation of the Student Conduct Code by
        a preponderance of the evidence may be subject to disciplinary sanctions
        including, but not limited to: warning, loss of credit, disciplinary
        probation, suspension, permanent expulsion and/or degree revocation with
        permanent mark on transcript.
      </li>
      <li>
        Student Affairs will send the final Panel recommendation to the student
        via email.
      </li>
      <li>
        All documentation and communication relating to a student’s Code Of
        Conduct Hearing, as well as a Zoom recording of the meeting will be kept
        on the P: Drive- P:\Committees\Chartered Committees\Student Appeals
        SubCommittee\Disciplinary Committee.
      </li>
    </ul>
  </div>
  <!--End Container -->

  <AdvisorCallToAction />

  <Footer />
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import PageBanner from "@/components/PageBanner.vue";
import AdvisorCallToAction from "@/components/AdvisorCallToAction.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ViolationsOfStudentCodeOfConduct",
  components: {
    Navbar,
    PageBanner,
    AdvisorCallToAction,
    Footer,
  },
};
</script>


