<template>
  <div id="Profile" class="col-md-12">
    <div class="title">
      <p class="title_name">PERSONAL INFO</p>
    </div>
    <div class="row detail_profile">
      <div class="col-md-4">
        <div class="col-md-12">
          <a>MY LIFE IS JOURNEY!</a>
          <p>
            Not Many People know my life but my life is a interesting journey.
          </p>
          <p>
            I have throught and learned many things in my life. Since I was a
            child my parents always teach me to be tought man."
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="col-md-12">
          <a>PERSONAL INTERESTS</a>
          <p>
            When I'm not coding, I fill my time with either of the following:
          </p>
          <ul style="text-align: left">
            <li>
              <a><span>I love to travel</span></a>
            </li>
            <li>
              <a><span>I love photography and video editing</span></a>
            </li>
            <li>
              <a
                ><span
                  >Read current hype news while listening to the music. (Up to
                  date is a good things!)</span
                ></a
              >
            </li>
            <li>
              <a
                ><span
                  >Spent some hours for sports. Good Health make us
                  productive.</span
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="col-md-12">
          <a>THE INTERNET IS MY OYSTER</a>
          <p>
            A good programmer is always up to date with the latest technology,
            trends and techniques. For that, one has to get around and filter
            information from all possible sources. So... I get around and roam.
            And here is where I roam freely:
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Profile {
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

.detail_profile {
  margin-bottom: 5%;
}

a {
  font-weight: bold;
  text-align: center;
}
</style>
