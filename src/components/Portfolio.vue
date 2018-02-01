<template>
  <div id="Portfolio" class="col-md-12">
  	<div class="title">
		<p class="title_name">MY PORTFOLIO</p>
  	</div>
  	<div class="row detail_experience">
	  	<div class="col-md-12">

	  			<a>SOFTWARE ENGINEER @ PIXEL HOUSE STUDIO</a>
	  			<p>BACKEND • PYTHON • GOLANG • NODEJS • LAMDA • DEVOPS</p>
				<p>Programming:
					<li>Created API for <a href="https://managix.id">managix</a></li>
					<li>Technology / Programming Language : Python, Golang, NodeJS</li>
					<li>Database Technology: MongoDB, Elasticsearch, SQL</li>
				</p>
				<p>DevOps Programmer:
					<li>Configure and Maintenance Server (Cloud & Dedicated)</li>
					<li>Configure Git Resipotory (Gitlab, Bitbucket)</li>
				</p>
	  	</div>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Portfolio {
	height:100%;
	background-color: white;
	text-align: center;
	height:100%;
}
.title {
	font-size: 200%;
}

.title_name {
	font-size: 100%;
	margin-top: 5%;
}

.detail_experience {
	margin-bottom: 5%;
}

a {
	font-weight: bold;
	text-align: center;
}

</style>
