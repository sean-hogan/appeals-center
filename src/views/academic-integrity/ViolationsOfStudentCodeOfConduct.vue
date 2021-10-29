<template>
  <Navbar />
  <PageBanner title="Student Code of Conduct" bc="bc | here | here" />


  <div class="violations-student-code section container">
  

    <p class="lead">
      Members of the CSU Global community are expected to observe all laws and to respect the rights and privileges of other members of the community. As a community, CSU Global has the obligation to establish those regulations that best serve and protect its integrity as an institution of higher learning and the rights, dignity, and integrity of the members of the community.</p>

      <p>All CSU Global students are expected to adhere to the following code of conduct:</p>
      <ul>
        <li>Property</li>
        <li>Records</li>
        <li>Behavior and Expectations</li>
      </ul>

    <h2>Hearing and Appeal Process</h2>
    <p>If a Code of Conduct Hearing is initiated, Student Affairs will set a meeting of the Disciplinary Panel.</p>


  <ul>
    <li>Student Affairs will gather all necessary information and documentation for the Panel’s review.</li>

    <li>The student will be provided all necessary information and documentation. The student will be invited to attend the hearing or provide a statement for the Panel to review. </li>

    <li>Student Affairs will send the Panel’s recommendation for the Provost for approval.</li>

    <li>Student Affairs will notify the student of the outcome. </li>

  </ul>

  <h2>Hearing Outcomes</h2>
  <p>Students who are found to be in violation of the Student Conduct Code by the Disciplinary Panel, disciplinary sanctions including, but not limited to:</p>
  <ul>
    <li>Loss of credit</li>
    <li>Suspension, </li>
    <li>Permanent expulsion and/or degree revocation with permanent mark on transcript.</li>
    <li>Warning</li>

  </ul>

  <h2>Provost Appeal Process</h2>

  <p>Students may appeal the decision by submitting their request and documentation to the Provost within two (2) weeks of receipt of the decision for action. No later than three (3) weeks receipt of the appeal, the Provost or his/her designee will notify the student of the final decision of the appeal.</p>




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


