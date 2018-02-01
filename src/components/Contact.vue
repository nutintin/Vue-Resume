<template>
  <div id="Contact" class="col-md-12">
  	<div class="title">
		<p class="title_name"><b>LET'S GET IN TOUCH</b></p>
		<P> OOOPS SORRY CURRENTLY THIS FORM IS NOT WORKING, PLEASE EMAIL ME AT <b>NUTINTIN@YAHOO.COM.</b> THANKYOU!</p>
		<p class="sub_title"> You can email me at <b><i>nutintin@yahoo.com</i></b> or Please Fill Form Below:</p>
  	</div>
  	<div class="row detail_contact">
	  	<div class="col-md-12">
		    <form >
		      <div class="form-group">
		        <label for="name">NAME:</label>
		        <input type="name" class="form-control" id="name" placeholder="Enter Your Name" name="name" disabled>
		      </div>
		      <div class="form-group">
		        <label for="email">EMAIL:</label>
		        <input type="email" class="form-control" id="email" placeholder="Enter Your Email" name="email" disabled>
		      </div>
		      <div class="form-group">
		        <label for="content">WHAT DO YOU HAVE IN MIND?:</label>
		        <textarea class="form-control" rows="5" id="content" disabled></textarea>
		      </div>
		      <button type="submit" class="btn btn-default">Submit</button>
		    </form>
	  	</div>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Contact {
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

.sub_title {
	font-size: 50%;
	margin-top: 5%;
}

.detail_contact {
	margin-top:5%;
	margin-bottom: 5%;
}

a {
	font-weight: bold;
	text-align: center;
}

.form-group {
	width:60%;
	margin-left: 20%;
}

@media only screen and (max-width: 990px) {
	.form-group {
		width:100%;
		margin-left: 0;
	}
}

</style>
