<template>
  <div class="landing container p-0">
    <h4>Choose a Path</h4>

    <div class="mt-5">
      <main-button class="main-button" :onClick="goToPollCreate" btn-text="Make a Poll" btn-color="green"></main-button>
      <main-button class="main-button" :onClick="goToRespondPolls" btn-text="Take a Poll" btn-color="purple"></main-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import MainButton from "../reusable_components/main-button.vue";

export default {
  name: "landing",
  data: () => ({
    results: []
  }),
  methods: {
    goToPollCreate: function() {
      router.push("/poll/create");
    },
    goToRespondPolls: function() {
      router.push("/poll/respond/list");
    },
    loadData: function() {
      const vm = this;
    }
  },
  components: {
    MainButton
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/_variables.scss";
.landing {
  margin-top: 3rem;
  text-align: center;
  .main-button {
    padding: 1rem 3rem;
    font-size: 2rem;
    max-width: 252px;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
