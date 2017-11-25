<template>
  <div id="Technical" class="col-md-12">
  	<div class="title">
		<p class="title_name">TECHNICAL SKILLS</p>
  	</div>
  	<div class="container-fluid">
	  	<div class="row detail_technical">
		  	<div class="col-md-2">

		  		<div class="col-md-12">
		  			<div class="text_technic">
		  				<a>PYTHON</a>
		  			</div>
		  			<div class="box">
		  				<div class="pie pie1"></div>
		  			</div>
		  			<p>90%</p>

		  		</div>

		  	</div>
		  	<div class="col-md-2">
		  		<div class="col-md-12" >
		  			<div class="text_technic">
		  				<a>JAVASCRIPT</a>
		  			</div>
		  			<div class="box">
		  				<div class="pie pie1"></div>
		  			</div>
		  			<p>90%</p>
					 <ul style="text-align:left">
				         <li><a><span>VueJS: 10%</span></a></li>
				         <li><a><span>NodeJS: 10%</span></a></li>
				         <li><a><span>JS: 10%</span></a></li>
				         <li><a><span>Test: 10%</span></a></li>
				     </ul>
		  		</div>
		  	</div>
		  	<div class="col-md-2">

		  		<div class="col-md-12">
		  			<div class="text_technic">
		  				<a>PHOTOGRAPHY</a>
		  			</div>
		  			<div class="box">
		  				<div class="pie pie2"></div>
		  			</div>
		  			<p>20% - Newbie</p>
		  		</div>
		  	</div>
		  	<div class="col-md-2">

		  		<div class="col-md-12">
		  			<div class="text_technic">
		  				<a>TRAVELLING</a>
		  			</div>
		  			<div class="box">
		  				<div class="pie"></div>
		  			</div>
		  			<p>50% Feel Free if you want to invite me to go to your place :p</p>
		  		</div>
		  	</div>
		  	<div class="col-md-2">

		  		<div class="col-md-12">
		  			<div class="text_technic">
		  				<a>ART & MUSIC</a>
		  			</div>
		  			<div class="box">
		  				<div class="pie pie1"></div>
		  			</div>
		  			<p>90% I love art & music.</p>
		  		</div>
		  	</div>
		  	<div class="col-md-2">

		  		<div class="col-md-12">
		  			<div class="text_technic">
		  				<a>OTHERS</a>
		  			</div>
		  			<div class="box">
		  				<div class="pie pie2"></div>
		  			</div>
		  			<p>20%</p>
		  		</div>
		  	</div>
		 </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Technical'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Technical {
	height:100%;
	background-color: #eee;
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

.detail_technical {
	margin-bottom: 5%;
	padding-right:5%;
	padding-left:5%;
}

.text_technic {
	margin-bottom: 5%;
}

a {
	font-weight: bold;
	text-align: center;
	margin-bottom: 20%
}

.container-fluid {
	padding-left:5%;
	padding-right:5%;
}

.box {
	margin-left:10%;
	margin-bottom: 5%;
}

.pie {
  width: 100px; height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image:
  linear-gradient(to right, transparent 50%, #655 0);
  background-position: center;
}

.pie2::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  transform: rotate(.1turn);
}


.pie1::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background: #655;
  transform-origin: left;
  transform: rotate(.4turn);
}

@media only screen and (max-width: 1200px) {
	.box {
		margin-left:25%;
	},
	.container-fluid {
		padding-left:0%;
		padding-right:0%;
	}
	li {
		margin-left:50%;
	}
}

@media only screen and (max-width: 800px) {
	.box {
		margin-left:38%;
	}
	.container-fluid {
		padding-left:5%;
		padding-right:5%;
	}
	li {
		margin-left:40%;
	}
}
</style>
