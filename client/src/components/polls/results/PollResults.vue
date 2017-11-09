<template>
  <div class="poll results container">
    <div class="row mt-5">
      <h2 class="col-12 text-center">
        {{poll.question}}
      </h2>
      <div class="col-12 text-center">
        <span class="text-underline mb-1">Responses</span>
        <div v-for="(count, index) in poll.poll_counts" :key="index">
          <span>{{count.option_value}} ({{ count.value/poll.poll_total * 100 | roundToDecimals }}%)</span>
        </div>
        <div class="mt-1">
          <strong>Total Votes:</strong>
          {{poll.poll_total}}
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <pie :data="poll.poll_counts"></pie>
      </div>
    </div>
  </div>
</template>

<script>
import polls from "../../../restCalls/polls";
import moment from "moment";
import { capitalize, roundToDecimals } from "../../reusable_components/filters";
import pie from "./PieChart.vue";

export default {
  data: () => ({
    poll: {
      poll_counts: [],
      poll_total: 0
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
    }
  },
  filters: {
    capitalize,
    roundToDecimals
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
.poll {
  &.results {
    .text-underline {
      font-size: 1.2rem;
      text-decoration: underline;
    }
  }
}
</style>
