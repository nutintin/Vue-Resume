<template>
  <div id= "Hello" class="col-md-12">
  	<img src="../assets/japan.jpg" class="img-responsive">
    <div class="title">
		 <p class="title_name">{{ title }}</p>
		 <p class="title_tag">{{ tag_line }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'Reinard Lazuardi Kuwandy',
      tag_line: 'Programming, Photography, & Travelling'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Hello {
  font-family: 'Architects Daughter';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height:100%;
}
img {
	display: inline-block;
	position: absolute;
    margin: 0px;
    padding: 0px;
    border: none;
    width: 100%;
    height: auto;
    max-height: none;
    max-width: none;
    z-index: -999999;
    left: 0px;
    top: -155.774px;
    opacity: 0.9;
	filter: blur(1px);

}
.title {
  margin-top: 15%;
  font-size:250%;
  padding-left, padding-right:5%;
}

.title_name {
  font-size:200%;
}

.title_tag {
	font-size: 100%;
	margin-bottom:20%;
}

@media only screen and (max-width: 650px) {
    .title {
    	font-size:100%;
    }

    img {
    	height:200%;
    }
}

h1, h2 {
  font-weight: normal;
}

h3 {
	font-weight: 400;
	font-size:80%;
}


a.lead {
  text-decoration: none;
  color: #333;
}
nav a {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-active {
  color:#84C0C6;
}

nav a:hover{
	text-decoration: underline;
	color: #fff;
}

nav {
  overflow: auto;
  height: 100vh;
  font-size:120%;

}

</style>
