<template>
  <div class="user_settings container p-0">
    <div class="mb-5">
      <h1>{{user.name | capitalize}}</h1>
      <p>{{user.email}}</p>
    </div>

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
}
</style>
