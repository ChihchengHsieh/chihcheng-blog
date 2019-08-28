<template>
  <v-layout column align-center justify-center>
    <v-felx>
      <v-avatar size="200">
        <img
          src="https://github.com/ChihchengHsieh/Blogging/blob/master/images/mine_cropped_2.jpg?raw=true"
          alt="Avatar"
        />
      </v-avatar>
    </v-felx>
    <v-flex>
      <v-card class="mt-5 text-center" width="50vw">
        <v-card-text class="display-1 font-weight-black white--text">Chihcheng Hsieh</v-card-text>
        <v-card-text>
          <p>Data Scientist | Machine Learning Engineer | Computer Scientist |</p>
          <p>FullStack Developer | App Developer (Flutter & Android) | Physicist</p>
        </v-card-text>
        <v-card-text>
          <p>VISA: 485 PSW</p>
          <p>
            <a class="linkClass" href="https://github.com/ChihchengHsieh?tab=repositories">GitHub</a>
          </p>
          <p>
            <a
              class="linkClass"
              href="https://www.linkedin.com/in/chihcheng-hsieh-04623989/"
            >LinkedIn</a>
          </p>
          <p>
            <v-icon size="0.9rem" class="px-3">fa-envelope</v-icon>mike820808@gmail.com
          </p>
          <p>
            <v-icon size="0.9rem" class="px-3">fa-map-marker-alt</v-icon>Brisbane, Queensland, Australia
          </p>
        </v-card-text>
        <v-card-actions class="justify-center">
          Chinese
          <v-rating
            class="px-5"
            half-increments
            value="5"
            color="blue-grey"
            background-color="blue-grey lighten-3"
            readonly
            dense
          ></v-rating>
        </v-card-actions>
        <v-card-actions class="justify-center">
          English
          <v-rating
            class="px-5"
            half-increments
            value="3.5"
            color="blue-grey"
            background-color="blue-grey lighten-3"
            readonly
            dense
          ></v-rating>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs12 class="mb-5">
      <v-layout wrap>
        <v-flex xs6>
          <v-card width="25vw" class="ma-5 text-center">
            <v-card-text class="title font-weight-black white--text">EDUCATION</v-card-text>
            <v-card-text>
              <p class="white--text subtitle-1">Bachelor of Applied Physics</p>
              <p class="caption">National University of Kaohsiung</p>
            </v-card-text>
            <v-card-text>
              <p class="white--text subtitle-1">Master of Information Technology (Data Science)</p>
              <p class="caption">Queensland University of Technology</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card width="25vw" class="ma-5 text-center">
            <v-card-text class="title font-weight-black white--text">PROGRAMMING LANGUAGE</v-card-text>
            <v-card-text>
              <p>
                <strong class="white--text mr-2">Python</strong>(Django, Pytorch, Tensorflow)
              </p>
              <p>
                <strong class="white--text mr-2">C++</strong>(Unreal)
              </p>

              <p>
                <strong class="white--text mr-2">C#</strong>(Unity)
              </p>
              <p>
                <strong class="white--text mr-2">Golang</strong>(Backend)
              </p>
              <p>
                <strong class="white--text mr-2">Javascript</strong>(React.js, Vue.js, Node.js)
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <p class="mt-5 display-1 pt-5">Skills</p>
    <v-flex xs12>
      <v-card width="50vw" class="text-center mb-5">
        <v-card-text
          class="headline font-weight-black white--text mb-3"
        >Data Science | Machine Learning | Artificial Intelligence</v-card-text>
        <v-card-text>
          <p class="white--text">Data Preprocessing</p>
          <p class="white--text">Data Visualization</p>
          <p class="white--text">Machine Learning (Logistic Regression, SVM, Decision Tree etc.)</p>
          <p class="white--text">Deep Learning (Pytorch, Tensorflow and Keras)</p>
          <p class="white--text">Computer Vision</p>
          <p class="white--text">Natural Language Processing</p>
          <p class="white--text">Neural Architecture Search</p>
          <p class="white--text">Reinforcement Learning</p>
          <p class="white--text">Generative Adversarial Network</p>
          <p
            class="white--text"
          >Data Manipulation (SQL and none-SQL databases, such as PostgreSQL, MySQL and MongoDB)</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12>
      <v-card width="50vw" class="text-center">
        <v-card-text
          class="headline font-weight-black white--text mb-1"
        >Web Development | Frontend | Backend</v-card-text>
        <v-card-text>
          <v-layout wrap justify-space-around>
            <v-flex xs3>
              <v-card-text class="title font-weight-bold white--text mt-3">Frontend</v-card-text>
              <p>
                <span class="white--text subtitle-1 mr-2">Vue.js</span>(Nuxt.js)
              </p>
              <p>
                <span class="white--text subtitle-1 mr-2">React.js</span>(Redux)
              </p>
            </v-flex>
            <v-flex xs3>
              <v-card-text class="title font-weight-bold white--text mt-3">Backend</v-card-text>
              <p>
                <span class="white--text subtitle-1 mr-2">Python</span>(Django, Web Crawling)
              </p>
              <p>
                <span class="white--text subtitle-1 mr-2">Golang</span>(Gin)
              </p>
              <p>
                <span class="white--text subtitle-1 mr-2">Node.js</span>(Express.js)
              </p>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
<style scoped>
.linkClass {
  text-decoration: none !important;
  color: white !important;
}
</style>