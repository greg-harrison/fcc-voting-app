<template>
  <div class="user_settings container p-0 mx-auto">
    <div class="mb-5 col col-sm-6 text-center">
      <div class="user-holder">
        <h1>{{user.name | capitalize}}</h1>
        <img class="user-avatar" src="http://via.placeholder.com/150x150" alt="user_avatar">
        <p>{{user.email}}</p>
      </div>
    </div>

    <!-- Need to look into the bug where it renders even when there's nothing.
              Want the other part to be full width in that case -->
    <user-polls></user-polls>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../../auth/";
import UserPolls from "./UserPolls.vue";
import { capitalize } from "../reusable_components/filters";

export default {
  data: () => ({
    user: {
      name: auth.user.user_detail.name,
      email: auth.user.user_detail.email
    }
  }),
  methods: {},
  components: {
    UserPolls
  },
  filters: {
    capitalize
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style scoped lang="scss">
@import "../../style/_variables.scss";
.user_settings {
  margin-top: 3rem;
  text-align: center;

  @media screen and (min-width: 577px) {
    display: flex;
    flex-wrap: wrap;
  }
  .user-holder {
    .user-avatar {
      border-radius: 100%;
      border: 1px solid $navy;
      margin-bottom: 0.5rem;
    }
    @media screen and (min-width: 577px) {
      position: fixed;
      margin: 0 auto;
      margin-left: 10%;
    }
  }
}
</style>
