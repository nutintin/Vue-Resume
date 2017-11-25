<template>
  <div id="Portfolio" class="col-md-12">
  	<div class="title">
		<p class="title_name">MY PORTFOLIO</p>
  	</div>
  	<div class="row detail_experience">
	  	<div class="col-md-12">

	  			<a>SOFTWARE ENGINEER @ PIXEL HOUSE STUDIO</a>
	  			<p>BACKEND • PYTHON • DEVOPS</p>
				<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
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
