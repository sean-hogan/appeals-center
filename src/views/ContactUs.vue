<template>
  <Navbar />

  <div class="contact-us section container">
    <div class="banner text-center mb-5">
      <h1 class="display-3 my-4">Here is a Contact Page</h1>
      <p class="lead">
        And then maybe a little bit of flavor text to make this page a little
        spicy
      </p>
    </div>

    <div class="row mb-5 justify-content-center">
      <div class="col-sm-5">
        <h4>CENTER FOR ACADEMIC APPEALS</h4>
        <p>
          <i class="bi bi-envelope me-2"></i><a
            href="mailto:sean.hogan@csuglobal.edu"
            >student.affairs@csuglobal.edu</a
          >
        </p>

        <p>
          <i class="bi bi-envelope me-2"></i> CSU Global, Student
          Affairs<br />
          <span class="ms-4">585 Salida Way</span><br />
          <span class="ms-4">Aurora, Colorado 80011</span>
        </p>

        <p>
          <i class="bi bi-phone me-2"></i><a
            href="tel:1-720-279-0650"
            >(720) 279-0650</a
          >
        </p>

        <p><b>FAX</b>: <a href="tel:1-720-943-2863">(720) 943-2863</a></p>

        <p>
          <a href="https://csuglobal.libguides.com/c.php?g=943626&p=6809429"
            ><button type="button" class="btn btn-outline-secondary me-3">
              Register With Us
            </button></a
          >
          <a href="mailto:sean.hogan@csuglobal.edu"
            ><button type="button" class="btn btn-outline-secondary">
              Request Faculty Notification
            </button></a
          >
        </p>
      </div>

      <div class="col-sm-5">
        <h4>STUDENT SUCCESS COUNSELORS</h4>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic. Simply
          <a href="tel:1-866-734-5890"
            >call the counseling number at (866) 734-5890</a
          >
          or go to the Student Assistance Portal and select "Contact Us".
        </p>
        <p>
          <i class="bi bi-phone me-2"></i><a
            href="tel:1-866-734-5890"
            >(866) 734-5890</a
          >
        </p>

        <form action="https://espyr.com/sign-in/" method="post">
          <input name="password" value="CSUGlobal" type="hidden" />
          <button type="submit" class="btn btn-outline-secondary mt-auto" formtarget="_blank">
            Go To Counseling Services <span class="oi oi-arrow-right"></span>
          </button>
        </form>
      </div>
    </div>
    <!--end row-->
  </div>
  <!--End Container -->

  <Footer />
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactUs",
  components: {
    Navbar,
    Footer,
  },
};
</script>


