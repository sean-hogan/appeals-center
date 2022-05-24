<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <router-link class="visually-hidden-focusable bg-grey" 
        to="#main-content" 
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
        <router-link class="navbar-brand" to="/"><img src="https://csug.cdn.prismic.io/csug/a3a8be1e-0abd-465f-a6ff-b52815e4c7ab_CSUG_Appeals_Center.svg" class="w-75"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item px-3">
            <router-link class="nav-link menu-link" to="/#file-an-appeal">File An Appeal</router-link>
            </li>

            <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Appeals
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/appeals/grade-appeals">Grade Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/tuition-appeals">Tuition Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/provost-appeals">Provost Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/retroactive-withdrawal">Retroactive Withdrawal Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/sap-max-time-frame">Maximum Time Frame Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/sap-probation">SAP Probation Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/sap-suspension">Suspension Appeal</router-link></li>
            <li><router-link class="dropdown-item" to="/appeals/sap-financial-aid">Financial Aid Reinstatement Appeal</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown px-3">
          <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Academic Integrity
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/academic-integrity/academic-dishonesty">Academic Dishonesty</router-link></li>
            <li><router-link class="dropdown-item" to="/academic-integrity/violations-of-student-code-of-conduct">Violations of Student Code of Conduct</router-link></li>
          </ul>
        </li>
            
            <li class="nav-item px-3">
            <router-link class="nav-link btn btn-primary rounded-pill px-3 menu-link" to="/contact-us">Contact Us</router-link>
            </li>

        </ul>
        </div>
    </div>
    </nav>  
</template>

<script>
import {Collapse} from 'bootstrap'

export default {
  name: 'Navbar',
  props: {
    },
  mounted() {
    /* FOR MOBILE ONLY */
    if (window.matchMedia("(max-width: 991px)").matches) {
      const navLinks = document.querySelectorAll('.dropdown-item, .menu-link')
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new Collapse(menuToggle, {toggle: false})
      navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

#app nav .btn-primary:hover{ 
  background: #941938;
  color:#fff;
}

.btn:focus, .btn {
  box-shadow:none!important;
}

.nav-link:not(.btn),
.dropdown-item { 
  font-size: 16px;
  font-weight: 600;
  color: #1c2333!important;
}

.dropdown-item:active,
.dropdown-item:focus {
  background-color: rgb(242, 242, 242);
}

.visually-hidden-focusable {
  position:absolute;
  left:10%;
  padding:2rem;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.visually-hidden-focusable:focus {
  transform: translateY(0%);
}

</style>
