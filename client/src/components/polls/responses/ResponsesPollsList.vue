<template>
  <div class="multi-poll container p-0">
    <div class="card">
      <div class="card-header">
        Your Responses
      </div>
      <div class="card-body">
        <ul class="poll-list list-group m-0">
          <li class="list-group-item text-left" v-bind:key="index" v-for="(poll, index) in user.polls">
            <div class="col-10 p-0">
              <p class="clearfix w-100 m-0">
                <strong>
                  {{ poll.question }}
                </strong>
              </p>
              <p class="m-0">Created Date: {{moment(poll.created_date).format('MM/DD/YYYY')}}</p>
            </div>
            <div class="col-2 p-0 text-right">
              <p class="clearfix w-100 m-0 va-c-grey">
                <span class="hidden-sm-down">Your</span>
                Response
              </p>
              <p class="m-0">
                {{ poll.option_value }}
              </p>
            </div>
          </li>
        </ul>
        <p v-if="error" class="error">
          {{ error }}, please try again
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import poll from "../../../restCalls/polls";
import auth from "../../../auth";
import moment from "moment";
import { capitalize } from "../../reusable_components/filters";

export default {
  data: () => ({
    moment: moment,
    user: {
      details: {},
      polls: [],
      pollLength: 0
    }
  }),
  methods: {
    getUser() {
      this.user.details = auth.user.user_detail;
    },
    getRespondedPolls() {
      this.user.polls = poll.getUserRespondedPolls(this, auth.user.user_detail);
    },
    checkPollsLength() {
      this.user.pollLength = this.user.polls.length;
    }
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
    this.getUser();
    this.getRespondedPolls();
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
@import "../../../style/_variables.scss";
.multi-poll {
  margin-top: 3rem;
  text-align: center;
}
</style>
