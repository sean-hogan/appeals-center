<template>
  <Navbar />
  <PageBanner title="Student Grievance" bc="bc here" />
  <div class="student-grievance section container">
   

    <a
      class="btn btn-info my-5"
      href="https://csuglobal.libguides.com/ld.php?content_id=62189794"
      target="_blank"
      >Student Grievance Form <span class="oi oi-arrow-right"></span
    ></a>

    <h4>Student Grievance Policy</h4>
    <p>
      Student grievances are defined as any unresolved complaint or allegation,
      including 1) unprofessional conduct by an instructor which adversely
      affects a student's ability to successfully complete his/her academic
      goals, including a specific course or program; 2) improper admission
      counseling; 3) improper advising; 4) specific course assignments,
      curriculum elements, or grading of assessments prior to the end of the
      course; 6) disability-related issues.
    </p>

    <p>
      With few exceptions, students should first attempt to resolve difficulties
      informally by bringing those concerns directly to the person responsible
      for the action, or to their Student Success Counselor, the department
      head, or the immediate supervisor. If the problem cannot be resolved
      informally, the student may file a formal grievance using the grievance
      form.
    </p>

    <p>
      Students whose concerns are still not satisfactorily resolved have the
      option of filing a formal grievance with the Grievance Committee.
      <strong
        >A Grievance Form must be received, in writing, within two (2) weeks of
        the date the informal grievance process ends.</strong
      >
    </p>

    <h4>Student Grievance Process</h4>
    <ul>
      <li>
        Student submits a Grievance Form and Student Affairs receives a
        notification via email. The form is labeled “AD-Grievance Form” in
        CampusNexus.
      </li>
      <li>
        Once the “AD-Grievance Form” is received, a Student Affairs
        representative will set a meeting of the Grievance Committee.
      </li>
      <li>
        A Student Affairs representative will gather all necessary information
        and documentation for the Committee to review.
      </li>
    </ul>

    <h4>Grievance Complaints</h4>
    <p>
      A grievance complaint must include a concise statement of the allegations
      that form the basis for the student's complaint, including a statement of
      the facts, any relevant evidence, the rule, regulation, policy or practice
      that was violated, a summary of the informal attempts at resolution, and a
      suggested remedy.
    </p>

    <h4>Grievance Review</h4>
    <p>
      The grievance is reviewed by the Grievance Committee. The Grievance
      Committee will review the grievance and communicate their decision to all
      parties involved within one week. Decisions of the Grievance Committee may
      be appealed by the student if there is evidence that a significant
      impropriety in the review process occurred. The appeal must be in writing,
      specifically detailing the alleged procedural impropriety, and be filed in
      the Office of the Provost within two (2) weeks of the date of receipt of
      the Grievance Committee's decision. The Provost shall review the appeal
      and the Grievance Committee records and issue a decision within twenty-one
      (21) days. The decision of the Provost is final.
    </p>

    <ul>
      <li>
        Student Affairs will send the Panel’s recommendation for the Provost for
        approval.
      </li>
      <li>
        Student Affairs will send the final decision of the Grievance Committee
        to the student via email.
      </li>
      <li>
        Any documentation and communication relating to a student’s Grievance
        Committee Conduct Hearing, as well as a Zoom recording of the meeting
        will be kept on the P: Drive-P:\Committees\Chartered Committees\Student
        Appeals SubCommittee\Disciplinary Committee.
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
  name: "StudentGrievance",
  components: {
    Navbar,
    PageBanner,
    AdvisorCallToAction,
    Footer,
  },
};
</script>


