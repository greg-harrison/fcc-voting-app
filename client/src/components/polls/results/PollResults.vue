<template>
  <div class="poll results container">
    Hello World
  </div>
</template>

<script>
import poll from "../../../restCalls/polls";
import moment from "moment";
import { capitalize } from "../../reusable_components/filters";

export default {
  data: () => ({}),
  methods: {},
  filters: {
    capitalize
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {},
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

<style lang="scss" scoped>

</style>
