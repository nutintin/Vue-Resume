<template>
  <div id="Education" class="col-md-12">
    <div class="title">
      <p class="title_name">EDUCATION</p>
    </div>
    <div class="row detail_education">
      <div class="col-md-12">
        <h5>
          <b
            >BACHELOR'S DEGREE of COMPUTER SCIENCE / SARJANA KOMPUTER ( S.Kom.
            )</b
          >
        </h5>
        <p>Bina Nusantara Univeristy, Jakarta Indonesia</p>
        <p>
          I graduated in 2016 from Bina Nusantara University with GPA: 3.57.
        </p>
        <p>
          My Field of Study is Computer Science, focus on Artificial
          Intelligence
        </p>
        <p>
          My Journal Thesis :
          <a href="http://iptek.its.ac.id/index.php/jts/article/view/1018"
            >http://iptek.its.ac.id/index.php/jts/article/view/1018</a
          >
        </p>
        <hr size="8" width="90%" color="black" />
        <h5><b>MASTER'S DEGREE of SCIENCE in ARTIFICIAL INTELLIGENCE</b></h5>
        <p>Università della Svizzera italiana, Lugano Switzerland</p>
        <p>I graduated in February 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Education {
  height: 100%;
  background-color: #eee;
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

.detail_education {
  margin-bottom: 5%;
}

a {
  font-weight: bold;
  text-align: center;
}
</style>
