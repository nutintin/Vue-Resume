<template>
  <div class="container-fluid">
	<div class="row">
		<div onscroll="handleScroll()" class="col-md-12">
			<nav class="navbar navbar-expand-lg navbar-light fixed-top">
				 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				   <span class="navbar-toggler-icon"></span>
				 </button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul id="menubar" class="navbar-nav mr-auto">
				      <li id="ProfileMenu" class="nav-item">
				        <a class="nav-link" href="#Profile">PROFILE <span class="sr-only">(current)</span></a>
				      </li>
				      <li id="TechnicalMenu" onclick="click('Technical')" class="nav-item">
				        <a class="nav-link"  href="#Technical">SKILLS</a>
				      </li>
				      <li id="ExperienceMenu" class="nav-item">
				        <a class="nav-link" href="#Experience">EXPERIENCE</a>
				      </li>
				      <li id="EducationMenu" class="nav-item">
				        <a class="nav-link" href="#Education">EDUCATION</a>
				      </li>
				      <li id="PortfolioMenu" class="nav-item">
				        <a class="nav-link" href="#Portfolio">PORTFOLIO</a>
				      </li>
				      <li id="ContactMenu" class="nav-item">
				        <a class="nav-link" href="#Contact">CONTACT</a>
				      </li>
				    </ul>
				</div>
			</nav>
		</div>
		<Hello></Hello>
		<Profile></Profile>
		<Technical></Technical>
		<Experience></Experience>
		<Education></Education>
		<Portfolio></Portfolio>
		<Contact></Contact>
	</div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Hello from '@/components/Hello'
import Profile from '@/components/Profile'
import Technical from '@/components/Technical'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
export default {
  components: {
    'Hello': Hello,
    'Profile': Profile,
    'Technical': Technical,
    'Experience': Experience,
    'Education': Education,
    'Portfolio': Portfolio,
    'Contact': Contact
  },
  data () {
    return {
      scrolled: false,
      active_nav: 'Hello',
      nav_list: {
        Hello: 'Profile',
        Profile: 'Technical',
        Technical: 'Experience',
        Experience: 'Education',
        Education: 'Portfolio',
        Portfolio: 'Contact'
      },
      current_value: 0
    }
  },
  methods: {
    setActiveNav (current) {
      // console.log(current)
      this.active_nav = current
    },
    handleScroll () {
      var activeNav = this.active_nav
      console.log(activeNav)
      var width = document.body.clientWidth
      var fixedTop = document.getElementsByClassName('fixed-top')
      var menubar = document.getElementById('menubar')
      var currentDiv = document.getElementById(activeNav).clientHeight
      var topMenuHeight = menubar.clientHeight + 15
      var scrollTopVal = document.documentElement.scrollTop
      var currentHeighVal = scrollTopVal - currentDiv
      var current = document.documentElement
      console.log(current)
      if (currentHeighVal < 0 && currentHeighVal > -80) {
        this.active_nav = this.nav_list[activeNav]
        console.log(this.active_nav)
        var navEdit = this.active_nav + 'Menu'
        console.log(navEdit)
        document.getElementById(navEdit).className += ' active'
      }
      this.current_value = document.documentElement.scrollTop
      var mod = (document.documentElement.scrollTop % 600)
      if (mod === 0 && document.documentElement.scrollTop !== 0) {
        var val = this.current_value / 600
        document.getElementById(val.toString()).className += ' active'
        if (this.active_nav != null) {
          document.getElementById(this.active_nav.toString()).classList.remove('active')
        }

        this.active_nav = val.toString()
      }
      if (width > 1096) {
        if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
          fixedTop[0].style.backgroundColor = '#7B94BC'
          fixedTop[0].style.border = 'thick #000'
        } else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          fixedTop[0].style.backgroundColor = ''
          fixedTop[0].style.border = ''
        }
      } else if (width > 973 && width < 1096) {
        if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
          fixedTop[0].style.backgroundColor = '#7B94BC'
          fixedTop[0].style.border = 'thick #000'
        } else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          fixedTop[0].style.backgroundColor = ''
          fixedTop[0].style.border = ''
        }
      } else if (width > 0) {
        fixedTop[0].style.backgroundColor = ''
        fixedTop[0].style.border = ''
      }
    }
  },
  setAccountType (typeId) {
    this.accountType = typeId
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>

.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show {
	color: #fff;
	text-decoration: underline;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
	color: #fff;
}
.navbar-light .navbar-nav .nav-link {
	color: #B8C6D2;
}
.navbar-light .navbar-toggler {
	background-color: #7B94BC;
	width, height: 45%;
}

.fixed-top {
	font-weight: 600;
}

@media only screen and (max-width: 990px) {
	.navbar-light .navbar-toggler{
		width: 50px;
		height:20%;
	}
	.navbar-light .navbar-toggler-icon {
		width:1em;
		height:1em;
	}
	.navbar-nav {
	    padding-left: 1em;
	    background-color: #7B94BC;
	}
	.navbar-light .navbar-nav .nav-link {
		color: #fff;
	}
}
</style>
