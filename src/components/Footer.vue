<template>
<div class="footer section">
    <div class="container-fluid">
     <footer>
         <div class="row mx-5 p-5">
            <div class="col-lg-3">
                <img src="https://csuglobal.edu/imgs/logo_csuglobal.png" alt="" class="img-fluid">
                <p class="mt-3"><strong>Colorado State University Global</strong>
                <br />585 Salida Way
                <br />Aurora, CO 80011</p>
                 
            </div><!--end col-->
            <div class="col-lg-9">


            <div class="row row-cols-1 row-cols-lg-2">


            <div class="col">   
            <h3 class="h6">Appeals Center</h3>

            <ul class="list-inline">
                <li class="list-inline-item"><router-link class="link-primary" to="/#file-an-appeal">File An Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/contact-us">Contact Us</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/contact-us#faq">FAQ</router-link></li>
            </ul>
            
            </div><!--end col-->

 
            <div class="col">
            <h3 class="h6">Appeals</h3>

            <ul class="list-inline">
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/grade-appeals">Grade Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/tuition-appeals">Tuition Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/provost-appeals">Provost Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/retroactive-withdrawal">Retroactive Withdrawal Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/sap-max-time-frame">Maximum Time Frame Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/sap-probation">SAP Probation Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/sap-suspension">Suspension Appeal</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/appeals/sap-financial-aid">Financial Aid Reinstatement Appeal</router-link></li>
            </ul>
            
            </div><!--end col-->


            <div class="col">
            <h3 class="h6">Academic Integrity</h3>

            <ul class="list-inline">
                <li class="list-inline-item"><router-link class="link-primary" to="/#catalog">Academic Dishonesty</router-link></li>
                <li class="list-inline-item"><router-link class="link-primary" to="/#">Violations of Student Code of Conduct</router-link></li>
            </ul>
            
            </div><!--end col-->

            <div class="col">

            <h3 class="h6">Institutional Policies</h3>
            <ul class="list-inline">
                <li class="list-inline-item"><a class="link-primary" href="https://csuglobal.edu/disclaimer">Disclaimer</a></li>
                <li class="list-inline-item"><a class="link-primary" href="https://csuglobal.edu/web-privacy-policy">Web Privacy Policy</a></li>
                <li class="list-inline-item"><a class="link-primary" href="https://csuglobal.edu/compliance-reporting">Compliance Reporting</a></li>
                <li class="list-inline-item"><a class="link-primary" href="https://csuglobal.edu/student-policies/institutional-accessibility-policy">Accessibility</a></li>
                <li class="list-inline-item"><a class="link-primary" href="https://csuglobal.edu/student-policies">Student Policies</a></li>
            </ul>
            </div><!--end col-->

        
            </div><!--end row-cols-2-->

            </div><!--end links col--->
         </div><!--end row-->
     </footer>
    </div><!--end container-->
    </div><!--end section-->
    
</template>

<script>

export default {
  name: 'Footer',
  props: {

  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    background-color:#eee;
}

#app .list-inline-item {
    font-size:.9rem;
}

.h6 {
    font-weight:600;
}
</style>
