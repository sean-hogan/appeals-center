<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container p-3">
        <router-link class="navbar-brand" to="/">Appeals @ Global</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item px-3">
            <router-link class="nav-link" to="/#file-an-appeal">File An Appeal</router-link>
            </li>

            <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Appeals
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/appeals/grade-appeals">Grade Appeals</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/tuition-appeals">Tuition Appeals</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/provost-appeals">Provost Appeals</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/retroactive-withdrawal">Retroactive Withdrawal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/satisfactory-academic-progress">Satisfactory Academic Progress</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown px-3">
          <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Academic Integrity
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/academic-integrity/academic-dishonesty">Academic Dishonesty</router-link></li>
            <li><router-link class="dropdown-item" to="/academic-integrity/student-grievance">Student Grievance</router-link></li>
            <li><router-link class="dropdown-item" to="/academic-integrity/violations-of-student-code-of-conduct">Violations of Student Code of Conduct</router-link></li>
          </ul>
        </li>
            
            <li class="nav-item px-3">
            <router-link class="nav-link btn btn-outline-success" to="/contact-us">CONTACT US</router-link>
            </li>

        </ul>
        </div>
    </div>
    </nav>  
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid #ddd;
}
</style>
