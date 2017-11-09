<template>
  <div class="poll results container">
    Hello World

    Concept for this page:
    FULLWIDTH - NAME AT TOP

    HALF - PIE CHART in D3js
    HALF - The Key with the actual percentages

    <div>
      <pie :data="poll.poll_options"></pie>
    </div>
  </div>
</template>

<script>
import polls from "../../../restCalls/polls";
import moment from "moment";
import { capitalize } from "../../reusable_components/filters";
import pie from "./PieChart.vue";

export default {
  data: () => ({
    poll: {
      poll_counts: []
    }
  }),
  created() {
    if (this.$route.params.poll_id) {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      polls.getPollResponses(this, this.$route.params);
      console.log("this.polls", this.poll);
    }
  },
  filters: {
    capitalize
  },
  components: {
    pie: pie
  },
  beforeCreate() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>

</style>
