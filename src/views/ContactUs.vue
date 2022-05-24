<template>
  <div class="contact-us section container">
    <header class="banner text-center mb-5">
      <h1 class="display-3 my-4">We're Here to Help</h1>
    </header><!--end banner-->

  <main id="main-content">

      <div class="row row-cols-1 row-cols-md-2 mb-3">
        
      <div class="col mb-3 mb-md-0">

        <div class="card h-100">
        <div class="row g-0 d-flex align-content-stretch flex-wrap h-100">
            <div class="col-md-3 d-none d-md-inline">
                <img src="https://images.prismic.io/csug/12acfdf8-bd6b-47b9-a44d-c7f06bb007fd_appeals-contact-cap1.png" class="cover" alt="">

            </div>
            <div class="col-md-9">
              <div class="card-body">
                      <h2 class="card-title mb-3">Submit Appeal</h2>
                        <p>To submit an appeal:</p>
                        <ol>
                          <li>Contact your Advisor to make the appropriate form available in the Document Center, in the <a href="https://portal.csuglobal.edu/portal/student">Student Portal</a></li>
                          <li>Submit appeal with appropriate documentation</li>
                          <li><a href="https://portal.csuglobal.edu/portal/student#sidebar-advisor">Contact Your Advisor</a> to let them know you have submitted the appeal for review</li>
            </ol>
              </div>
            </div>
          </div>
        </div><!--/card-->
      </div><!--/col-->

           <div class="col">

        <div class="card h-100">
        <div class="row g-0 d-flex align-content-stretch flex-wrap h-100">
            <div class="col-md-3 d-none d-md-inline">
                <img src="https://images.prismic.io/csug/c025c932-0282-42e2-8cd2-8fad68ac846b_appeals-contact-cap2.png" class="cover" alt="">

            </div>
            <div class="col-md-9">
              <div class="card-body">
                      <h2 class="card-title mb-3">Get In Touch</h2>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><i class="bi bi-person-circle me-3"></i><a href="https://portal.csuglobal.edu/portal/student#sidebar-advisor">Contact My Advisor</a></li>
                            <li><i class="bi bi-envelope me-3"></i><a href="mailto:student.affairs@csuglobal.edu">student.affairs@csuglobal.edu</a></li>
                            <li><i class="bi bi-phone me-3"></i><a href="tel:1-866-734-5890">(866) 734-5890</a></li>
                          </ul>
              </div>
            </div>
          </div>
        </div><!--/card-->
      </div><!--/col-->



    </div><!--end row-->
    

  </main>
  </div>  <!--End Container -->
  <aside>
  <FAQ />
  </aside>
</template>


<script>
import FAQ from '@/components/FAQ.vue'
export default {
  name: "ContactUs",
  components: {
    FAQ,
  },
  mounted() {
    document.title = 'Contact Us | CSU Global Appeals Center';
        
    },
};
</script>


