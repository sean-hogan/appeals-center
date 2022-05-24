<template>
<div class="academic-dishonesty section container">

  <div class="row pt-5">
      <div class="clearfix">

        <header class="header mb-4">
          <h1 class="display-2">Academic Dishonesty</h1>
        </header>
        
  <main id="main-content">

  <p class="lead">
    CSU Global views academic dishonesty as any form of cheating which results
    in students giving or receiving unauthorized assistance in an academic
    exercise or receiving credit for work which is not their own. The following
    is meant to be a non-exhaustive guide to help students understand what
    constitutes academic dishonesty.
  </p>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cheating</td>
          <td>
            Intentionally using or attempting to use unauthorized materials,
            information, or study aids in any academic exercise. Academic
            exercises include all forms of work submitted for credit. Students
            may not have other individuals conduct research or prepare work for
            them without advance authorization from the instructor. This
            includes the services of commercial vendors for papers. This may
            include submission of work written in part, or in whole, by a family
            member, friend, another student, or associate.
          </td>
        </tr>
        <tr>
          <td>Fabrication</td>
          <td>
            Intentional and unauthorized falsification or invention of any
            information or citation in an academic exercise or of documentation
            meant to excuse or justify adjustments related to attendance or
            completion of work (e.g., exams, exercises, etc.).
          </td>
        </tr>
        <tr>
          <td>Facilitation of Academic Dishonesty</td>
          <td>
            Intentionally or knowingly helping another to commit any act of
            academic dishonesty.
          </td>
        </tr>
        <tr>
          <td>Plagiarism</td>
          <td>
            Plagiarism is the adoption or reproduction of ideas, words, or
            statements of another person as one's own either knowingly,
            carelessly, or without acknowledgment.
          </td>
        </tr>
        <tr>
          <td>Unauthorized Collaboration</td>
          <td>
            Intentionally sharing information or working together in an academic
            exercise when such actions are not approved by the instructor.
            Individuals may study together, but all work submitted for credit
            must be the unique work of the individual student.
          </td>
        </tr>
        <tr>
          <td>Reusing & Re purposing One's Own Work</td>
          <td>
            No more than 20% of an assignment's content shall consist of quoted
            material (from either an external source or your own previously
            submitted content) unless the student has obtained permission from
            the current instructor. When repeating a course, students must
            submit newly created work.
          </td>
        </tr>
      </tbody>
    </table>
  </main>

      </div><!--/clearfix-->
  </div><!--/row-->
  </div>
  <!--End Container -->

<aside>
  <AdvisorCallToAction />
</aside>
</template>


<script>
// @ is an alias to /src
import AdvisorCallToAction from "@/components/AdvisorCallToAction.vue";

export default {
  name: "AcademicDishonesty",
  components: {
    AdvisorCallToAction,
  },
   mounted() {
    document.title = 'Academic Dishonesty | CSU Global Appeals Center';
        
    },
};
</script>


