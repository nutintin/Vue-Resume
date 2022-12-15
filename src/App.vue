<template>
  <div class="container-fluid">
    <div class="row">
      <div onscroll="handleScroll()" class="col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul id="menubar" class="navbar-nav mr-auto">
              <li
                id="ProfileMenu"
                class="nav-item"
                @click="setActiveNav('Profile')"
              >
                <a class="nav-link" href="#Profile"
                  >PROFILE <span class="sr-only">(current)</span></a
                >
              </li>
              <li
                id="TechnicalMenu"
                class="nav-item"
                @click="setActiveNav('Technical')"
              >
                <a class="nav-link" href="#Technical">SKILLS</a>
              </li>
              <li
                id="ExperienceMenu"
                class="nav-item"
                @click="setActiveNav('Experience')"
              >
                <a class="nav-link" href="#Experience">EXPERIENCE</a>
              </li>
              <li
                id="EducationMenu"
                class="nav-item"
                @click="setActiveNav('Education')"
              >
                <a class="nav-link" href="#Education">EDUCATION</a>
              </li>
              <li
                id="PortfolioMenu"
                class="nav-item"
                @click="setActiveNav('Portfolio')"
              >
                <a class="nav-link" href="#Portfolio">PORTFOLIO</a>
              </li>
              <li
                id="ContactMenu"
                class="nav-item"
                @click="setActiveNav('Contact')"
              >
                <a class="nav-link" href="#Contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Hello />
      <Profile />
      <Technical />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
    </div>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import HelloComponent from "@/components/Hello";
import ProfileComponent from "@/components/Profile";
import TechnicalComponent from "@/components/Technical";
import ExperienceComponent from "@/components/Experience";
import EducationComponent from "@/components/Education";
import PortofolioComponent from "@/components/Portfolio";
import ContactComponent from "@/components/Contact";
export default {
  components: {
    Hello: HelloComponent,
    Profile: ProfileComponent,
    Technical: TechnicalComponent,
    Experience: ExperienceComponent,
    Education: EducationComponent,
    Portfolio: PortofolioComponent,
    Contact: ContactComponent,
  },
  data() {
    return {
      scrolled: false,
      active_nav: "Hello",
      nav_list: {
        Hello: "Profile",
        Profile: "Technical",
        Technical: "Experience",
        Experience: "Education",
        Education: "Portfolio",
        Portfolio: "Contact",
      },
      reverse_nav_list: {
        Profile: "Hello",
        Technical: "Profile",
        Experience: "Technical",
        Education: "Experience",
        Portfolio: "Education",
        Contact: "Portfolio",
      },
      current_value: 641,
      total_value: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    setActiveNav: function (event) {
      var navEdit = this.active_nav + "Menu";
      if (navEdit !== "HelloMenu") {
        document.getElementById(navEdit).classList.remove("active");
      }
      this.active_nav = event;
      var navEdit2 = this.active_nav + "Menu";
      var currentDiv = document.getElementById(this.active_nav).clientHeight;
      var scrollTopVal = document.documentElement.scrollTop;
      this.current_value = currentDiv;
      this.total_value = scrollTopVal + this.current_value;
      document.getElementById(navEdit2).className += " active";
    },
    // setActiveNav (current) {
    //   console.log(current)
    //   this.active_nav = current
    // },
    handleScroll() {
      var activeNav = this.active_nav;
      var currentDiv = document.getElementById(activeNav).clientHeight;

      var scrollTopVal = document.documentElement.scrollTop;
      var currentHeighVal = scrollTopVal - currentDiv;
      var menubar = document.getElementById("menubar");
      var navEdit;

      // console.log(scrollTopVal - this.total_value)
      // console.log(this.total_value)
      // console.log(this.current_value)
      // console.log(this.active_nav)

      if (this.active_nav === "Hello") {
        if (scrollTopVal > this.current_value) {
          this.total_value = this.total_value + this.current_value;
          this.active_nav = this.nav_list[this.active_nav];
          currentDiv = document.getElementById(this.active_nav).clientHeight;
          this.current_value = currentDiv;
          navEdit = this.active_nav + "Menu";
          document.getElementById(navEdit).className += " active";
        }
      } else if (this.active_nav === "Contact") {
        if (scrollTopVal - this.total_value < -200) {
          document
            .getElementById(this.active_nav + "Menu")
            .classList.remove("active");
          this.total_value = this.total_value - this.current_value;
          this.active_nav = this.reverse_nav_list[this.active_nav];
          currentDiv = document.getElementById(this.active_nav).clientHeight;
          this.current_value = currentDiv;
          navEdit = this.active_nav + "Menu";
          document.getElementById(navEdit).className += " active";
        }
      } else if (scrollTopVal - this.total_value > this.current_value + 80) {
        document
          .getElementById(this.active_nav + "Menu")
          .classList.remove("active");
        this.total_value = this.total_value + this.current_value;
        this.active_nav = this.nav_list[this.active_nav];
        currentDiv = document.getElementById(this.active_nav).clientHeight;
        this.current_value = currentDiv;
        navEdit = this.active_nav + "Menu";
        document.getElementById(navEdit).className += " active";
      } else if (scrollTopVal - this.total_value < 0) {
        if (this.active_nav === "Profile") {
          document
            .getElementById(this.active_nav + "Menu")
            .classList.remove("active");
          this.total_value = 0;
          this.active_nav = "Hello";
          this.current_value = 641;
        } else {
          document
            .getElementById(this.active_nav + "Menu")
            .classList.remove("active");
          this.total_value = this.total_value - this.current_value;
          this.active_nav = this.reverse_nav_list[this.active_nav];
          currentDiv = document.getElementById(this.active_nav).clientHeight;
          this.current_value = currentDiv;
          navEdit = this.active_nav + "Menu";
          document.getElementById(navEdit).className += " active";
        }
      }

      // if (currentHeighVal > 80) {
      //   console.log(this.current_value)
      //   console.log(currentDiv)
      //   if (this.current_value !== currentDiv) {
      //     if (scrollTopVal - this.total_value > 0) {
      //       if (this.active_nav !== 'Hello') {
      //         document.getElementById(this.active_nav + 'Menu').classList.remove('active')
      //       }
      //       this.active_nav = this.nav_list[activeNav]
      //       currentDiv = document.getElementById(this.active_nav).clientHeight
      //       this.current_value = currentDiv
      //       this.total_value = this.total_value + currentDiv
      //     } else if (scrollTopVal - this.total_value < 0) {
      //       this.active_nav = this.reverse_nav_list[activeNav]
      //       currentDiv = document.getElementById(this.active_nav).clientHeight
      //       this.total_value = this.total_value - currentDiv
      //       this.current_value = currentDiv
      //     }
      //     navEdit = this.active_nav + 'Menu'
      //     document.getElementById(navEdit).className += ' active'
      //   } else if (this.active_nav !== 'Hello') {
      //     console.log('"TEST"')
      //     document.getElementById(this.active_nav + 'Menu').classList.remove('active')
      //     this.current_value = 0
      //     this.total_value = 641
      //     this.active_nav = 'Hello'
      //   } else {
      //     console.log('"TEST 1"')
      //     this.current_value = 398
      //     this.total_value = this.total_value + 398
      //     this.active_nav = this.nav_list[activeNav]
      //     navEdit = this.active_nav + 'Menu'
      //     document.getElementById(navEdit).className += ' active'
      //   }
      // } else if (currentHeighVal > 70) {
      //   if (this.current_value === 641) {
      //     this.current_value = 0
      //   }
      // }

      var width = document.body.clientWidth;
      var fixedTop = document.getElementsByClassName("fixed-top");
      var topMenuHeight = menubar.clientHeight + 15;
      var current = document.documentElement;
      var x = document.getElementsByTagName("div");
      // console.log(x)
      // console.log(currentHeighVal)
      // if (currentHeighVal < 0 && currentHeighVal > -80) {
      //   this.active_nav = this.nav_list[activeNav]
      //   var navEdit = this.active_nav + 'Menu'
      //   document.getElementById(navEdit).className += ' active'
      // }
      // this.current_value = document.documentElement.scrollTop
      // var mod = (document.documentElement.scrollTop % 600)
      // if (mod === 0 && document.documentElement.scrollTop !== 0) {
      //   var val = this.current_value / 600
      //   document.getElementById(val.toString()).className += ' active'
      //   if (this.active_nav != null) {
      //     document.getElementById(this.active_nav.toString()).classList.remove('active')
      //   }

      //   this.active_nav = val.toString()
      // }
      if (width > 1096) {
        if (
          document.body.scrollTop >= 80 ||
          document.documentElement.scrollTop >= 80
        ) {
          fixedTop[0].style.backgroundColor = "#7B94BC";
          fixedTop[0].style.border = "thick #000";
        } else if (
          document.body.scrollTop > 0 ||
          document.documentElement.scrollTop > 0
        ) {
          fixedTop[0].style.backgroundColor = "";
          fixedTop[0].style.border = "";
        }
      } else if (width > 973 && width < 1096) {
        if (
          document.body.scrollTop >= 80 ||
          document.documentElement.scrollTop >= 80
        ) {
          fixedTop[0].style.backgroundColor = "#7B94BC";
          fixedTop[0].style.border = "thick #000";
        } else if (
          document.body.scrollTop > 0 ||
          document.documentElement.scrollTop > 0
        ) {
          fixedTop[0].style.backgroundColor = "";
          fixedTop[0].style.border = "";
        }
      } else if (width > 0) {
        fixedTop[0].style.backgroundColor = "";
        fixedTop[0].style.border = "";
      }
    },
  },
  setAccountType(typeId) {
    this.accountType = typeId;
  },
};
</script>

<style>
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show {
  color: #fff;
  text-decoration: underline;
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #fff;
}
.navbar-light .navbar-nav .nav-link {
  color: #b8c6d2;
}
.navbar-light .navbar-toggler {
  background-color: #7b94bc;
  width: 45%;
  height: 45%;
}

.fixed-top {
  font-weight: 600;
}

@media only screen and (max-width: 990px) {
  .navbar-light .navbar-toggler {
    width: 50px;
    height: 20%;
  }
  .navbar-light .navbar-toggler-icon {
    width: 1em;
    height: 1em;
  }
  .navbar-nav {
    padding-left: 1em;
    background-color: #7b94bc;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
}
</style>
