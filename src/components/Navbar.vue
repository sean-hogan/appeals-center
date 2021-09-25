<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container p-3">
        <a class="navbar-brand" href="/">Appeals @ Global</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item px-3">
            <a class="nav-link" href="/#file-an-appeal">File An Appeal</a>
            </li>

            <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Appeals
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/appeals/grade-appeals">Grade Appeals</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Academic Integrity
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/academic-integrity/academic-dishonesty">Academic Dishonesty</a></li>
            <li><a class="dropdown-item" href="/academic-integrity/student-grievance">Student Grievance</a></li>
            <li><a class="dropdown-item" href="/academic-integrity/violations-of-student-code-of-conduct">Violations of Student Code of Conduct</a></li>
          </ul>
        </li>
            
            <li class="nav-item px-3">
            <a class="nav-link btn btn-outline-success" href="/contact-us">CONTACT US</a>
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
