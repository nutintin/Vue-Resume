<template>
  <div id="Experience" class="col-md-12">
    <div class="title">
      <p class="title_name">WORK EXPERIENCE</p>
    </div>
    <div class="row detail_experience">
      <div class="col-md-12">
        <a>SOFTWARE ENGINEER @ PIXEL HOUSE STUDIO</a>
        <p>BACKEND • PYTHON • GOLANG • NODEJS • LAMBDA • DEVOPS</p>
        <p>
          My main works in this company is Back End Engineer. I build RESTFUL
          API using Python & GOLANG, create microservices email handle using AWS
          lamda & serverless.
        </p>
        <p>
          As DevOps Engineer I also configures server (dedicated & cloud),
          gitlab (Resipotories, CI/CL, etc), and ELK for log managements.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Experience {
  height: 100%;
  background-color: white;
  text-align: center;
  height: 100%;
}
.title {
  font-size: 300%;
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
