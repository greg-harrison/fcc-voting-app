<template>
  <div class="poll results container">
    <div class="row mt-5">
      <h2 class="col-12 text-center">
        {{poll.question}}
      </h2>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <pie :data="poll.poll_counts"></pie>
        <div>Total Votes: {{poll.poll_total}}</div>
        <div v-for="(count, index) in poll.poll_counts" :key="index">
          <span>{{count.option_value}} - {{ count.value/poll.poll_total * 100 | roundToDecimals }}%</span>
        </div>
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

</style>
