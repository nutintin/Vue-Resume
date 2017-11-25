<template>
  <div id="Profile" class="col-md-12">
  	<div class="title">
		<p class="title_name">PERSONAL INFO</p>
  	</div>
  	<div class="row detail_profile">
	  	<div class="col-md-4">

	  		<div class="col-md-12">
	  			<a>AS FAR AS I CAN REMEMBER</a>
	  			<p>"I always wanted to be a gangster." That didn't happen. I loved school too much!</p>
				<p>Thus, instead of hustlin', I chose a PC and "Grand Theft Auto" to blow off steam in between sessions of teaching myself the arts of graphic design. This started 16 years ago.</p>
	  		</div>
	  	</div>
	  	<div class="col-md-4">
	  		<div class="col-md-12" >
	  			<a>PERSONAL INTERESTS</a>
	  			<p>When not designing or coding a layout I fill my time with either of the following:</p>
				 <ul style="text-align:left">
			         <li><a><span>I love to travel</span></a></li>
			         <li><a><span>I read a lot of SciFi literature</span></a></li>
			         <li><a><span>I am a hip-hop beatmaker</span></a></li>
			         <li><a><span>And an avid snowboarder in winter.</span></a></li>
			     </ul>
	  		</div>
	  	</div>
	  	<div class="col-md-4">

	  		<div class="col-md-12">
	  			<a>THE INTERNET IS MY OYSTER</a>
	  			<p>A good designer is always up to the latest news, trends and techniques. For that, one has to get around and filter information from all possible sources. So... I get around and roam. And here is where I roam freely:</p>
	  		</div>
	  	</div>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Profile {
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

.detail_profile {
	margin-bottom: 5%;
}

a {
	font-weight: bold;
	text-align: center;
}

</style>
